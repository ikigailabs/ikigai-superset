interface IpcMessage {
  type: string;
  correlationId?: string;
  payload?: any;
}

type CallbackFn = (payload: any) => void;

export class ContextServiceClass {
  public readonly projectId: string;

  private thisWindow: Window;
  private callbacksMap = new Map<string, Set<CallbackFn>>();

  constructor(thisWindow: Window) {
    this.thisWindow = thisWindow;

    const urlParams = new URLSearchParams(thisWindow.location.search);
    const pid = urlParams.get('project_id');
    if (!pid) {
      console.error('project_id query param must be truthy!');
      throw new Error('Missing project_id');
    }
    this.projectId = pid;

    this.thisWindow.addEventListener('message', this.onMessage);
  }

  public subscribeToSetCustomElementAliasId(cb: CallbackFn): () => void {
    return this.subscribe('setCustomElementAliasId', cb);
  }

  public subscribeToGetDashboardLayout(cb: CallbackFn): () => void {
    return this.subscribe('getDashboardLayout', cb);
  }

  public subscribeToRefreshCharts(cb: CallbackFn): () => void {
    return this.subscribe('refreshCharts', cb);
  }

  public subscribeToRequestFilters(cb: CallbackFn): () => void {
    return this.subscribe('requestFilters', cb);
  }

  private subscribe(type: string, cb: CallbackFn): () => void {
    const setOfCallbacks = this.callbacksMap.get(type) || new Set();
    setOfCallbacks.add(cb);
    this.callbacksMap.set(type, setOfCallbacks);

    return () => {
      const stored = this.callbacksMap.get(type);
      if (stored) {
        stored.delete(cb);
        if (stored.size === 0) {
          this.callbacksMap.delete(type);
        }
      }
    };
  }

  private onMessage = (event: MessageEvent) => {
    const { type, correlationId, payload } = (event.data || {}) as IpcMessage;
    if (!type) return;

    console.debug(
      `[SupersetContextService] received: ${JSON.stringify({
        type,
        correlationId,
        payload,
      })}`,
    );

    // Call any listeners for this message type
    const listeners = this.callbacksMap.get(type);
    if (listeners) {
      for (const fn of listeners) {
        fn(payload);
      }
    }

    // Always respond if correlationId is provided, so the child can resolve its Promise
    if (correlationId) {
      const message = {
        correlationId,
        payload: {}, // or some real data if needed
        type: '', // indicates it's a response
      };
      console.debug(
        `[SupersetContextService] sending response: ${JSON.stringify(message)}`,
      );
      event.source?.postMessage(message);
    }
  };
}

export const ContextService = new ContextServiceClass(window);
