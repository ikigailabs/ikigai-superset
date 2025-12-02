import { ContextService } from '../context-service/context-service';
import { IncomingMessageUnion } from '../context-service/incoming-message';
import { createLogger } from '../logger';
import { IpcRemoteError, IpcTimeoutError } from './errors';
import { generateUUID } from './generate-uuid';

import type { IpcMessage } from './ipc-message';
import type { PendingRequest } from './pending-request';
import type { RequestHandler } from './request-handler';

const logger = createLogger({ moduleName: 'IPCSubservice' });

export class IpcSubserviceClass {
  private pendingRequests = new Map<string, PendingRequest>();
  private requestHandlers = new Map<string, RequestHandler>();

  constructor(
    private readonly thisWindow: Window,
    private readonly platformUrl: string,
    private defaultTimeoutMs = 5000,
  ) {
    this.thisWindow.addEventListener('message', this.onMessage);
  }

  public sendRequest<T = any>(
    type: string,
    payload?: any,
    timeoutMs = this.defaultTimeoutMs,
  ): Promise<T> {
    const correlationId = generateUUID();

    return new Promise<T>((resolve, reject) => {
      const timerId = window.setTimeout(() => {
        this.pendingRequests.delete(correlationId);
        const msg = `Request[${type}] timed out after ${timeoutMs}ms`;
        logger.verbose(msg);
        reject(new IpcTimeoutError(msg));
      }, timeoutMs);

      this.pendingRequests.set(correlationId, {
        resolve,
        reject,
        timerId,
        requestType: type,
      });

      const message: IpcMessage = { type, correlationId, payload };
      logger.verbose(JSON.stringify(message));
      this.thisWindow.parent.postMessage(message, this.platformUrl);
    });
  }

  public onRequest<T>(type: string, handler: RequestHandler<T>): () => void {
    this.requestHandlers.set(type, handler);

    return () => {
      if (this.requestHandlers.get(type) === handler) {
        this.requestHandlers.delete(type);
      }
    };
  }

  public destroy() {
    this.thisWindow.removeEventListener('message', this.onMessage);
    this.pendingRequests.clear();
    this.requestHandlers.clear();
  }

  private onMessage = async (event: MessageEvent<IncomingMessageUnion>) => {
    if (event.origin !== this.platformUrl) return;

    const data = event.data as Partial<IpcMessage>;

    if (data.correlationId && this.pendingRequests.has(data.correlationId)) {
      const { resolve, reject, timerId, requestType } =
        this.pendingRequests.get(data.correlationId)!;
      window.clearTimeout(timerId);
      this.pendingRequests.delete(data.correlationId);

      if (data.payload && typeof data.payload.error === 'string') {
        const errMsg = `Remote error for request "${requestType}": ${data.payload.error}`;
        logger.verbose(errMsg);
        reject(new IpcRemoteError(errMsg));
      } else {
        resolve(data.payload);
      }
      return;
    }

    if (!data.type) return;

    const handler = this.requestHandlers.get(data.type);

    if (handler) {
      await handler({
        payload: data.payload,
        respond: (payload: any) => {
          event.source!.postMessage(
            { correlationId: data.correlationId!, payload },
            { targetOrigin: this.platformUrl },
          );
        },
        acknowledge: () => {
          event.source!.postMessage(
            { correlationId: data.correlationId! },
            { targetOrigin: this.platformUrl },
          );
        },
        source: event.source,
      });
    }
  };
}

export const IPCSubservice = new IpcSubserviceClass(
  window,
  ContextService.topLevelOrigin!,
);
