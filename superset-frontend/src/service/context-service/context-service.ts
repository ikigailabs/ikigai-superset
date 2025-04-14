interface IpcMessage {
  type: string;
  correlationId?: string;
  payload?: any;
}

type CallbackFn = (payload: any) => void;

export class ContextServiceClass {
  public readonly projectId: string;

  private readonly thisWindow: Window;
  private readonly callbacksMap = new Map<string, Set<CallbackFn>>();

  public readonly topLevelOrigin: string;

  constructor(thisWindow: Window) {
    this.thisWindow = thisWindow;

    const urlParams = new URLSearchParams(thisWindow.location.search);
    const projectId = urlParams.get('project_id');
    const dashUrl = urlParams.get('dash_url');

    if (!projectId) {
      console.error('project_id query param must be truthy!');
      throw new Error();
    }

    if (!dashUrl) {
      console.error('dahs_url query param just be truthy!');
      throw new Error();
    }

    this.projectId = projectId;
    this.topLevelOrigin = new URL(dashUrl).origin;

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
