import { store } from 'src/views/store';
import { CURRENT_VERSION } from 'src/migrations/dynamic-markdown/migration-runner';
import { UPDATE_COMPONENTS } from 'src/dashboard/actions/dashboardLayout';

import type { DashboardLayout } from 'src/dashboard/types';
import { mapSupersetFiltersToPlatformSpec, type PlatformFilter } from './map-superset-filters-to-platform-spec';

export type IncomingMessagePayload = {
  setCustomElementAliasId: {
    supersetComponentId: string;
    customComponentAliasId: string;
  };
  subscribeToDashboardLayout: DashboardLayout;
  refreshCharts: void;
  requestFilters: unknown;

  getDashboardLayout: void;
};

export type IncomingMessageType = keyof IncomingMessagePayload;

export type IncomingMessage<
  K extends IncomingMessageType = IncomingMessageType,
> = {
  type: K;
  correlationId?: string;
  payload?: IncomingMessagePayload[K];
};

type OutgoingMessagePayload = {
  dashboardLayoutUpdated: DashboardLayout;
  editModeUpdated: boolean;
  filtersUpdated: PlatformFilter[];
};

type OutgoingMessageType = keyof OutgoingMessagePayload;

type OutgoingMessage<K extends OutgoingMessageType = OutgoingMessageType> = {
  type: K;
  correlationId?: string;
  payload: OutgoingMessagePayload[K];
};

export class SupersetContextService {
  public readonly projectId: string;

  public readonly topLevelOrigin: string;

  private readonly thisWindow: Window;

  constructor(thisWindow: Window) {
    this.thisWindow = thisWindow;

    const urlParams = new URLSearchParams(thisWindow.location.search);
    const projectId = urlParams.get('project_id');
    const dashUrl = urlParams.get('dash_url');

    if (!projectId) throw new Error('project_id query param must be truthy!');
    if (!dashUrl) throw new Error('dash_url query param must be truthy!');

    this.projectId = projectId;
    this.topLevelOrigin = new URL(dashUrl).origin;

    this.thisWindow.addEventListener('message', this.onMessage);
  }

  public sendDashboardLayout() {
    const layout = store.getState().dashboardLayout.present;
    const message: OutgoingMessage = {
      type: 'dashboardLayoutUpdated',
      payload: layout,
    };

    this.sendMessageToCustomElements(message);
  }

  public sendEditMode(editMode: boolean) {
    const message: OutgoingMessage = {
      type: 'editModeUpdated',
      payload: editMode,
    };

    this.sendMessageToCustomElements(message);
  }

  public sendFilters() {
    const filterBoxFilters = store.getState().dashboardFilters;
    const filters = mapSupersetFiltersToPlatformSpec(filterBoxFilters);

    const message: OutgoingMessage = {
      type: 'filtersUpdated',
      payload: filters,
    };

    this.sendMessageToCustomElements(message);
  }

  private sendMessageToCustomElements(message: OutgoingMessage) {
    // This is a pretty ugly way of sending data to child iframes
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe: HTMLIFrameElement) => {
      if (!iframe.name.includes('dynamic-markdown')) return;
      iframe.contentWindow!.postMessage(message, this.topLevelOrigin);
    });
  }

  private onMessage = <K extends IncomingMessageType>(
    event: MessageEvent<IncomingMessage<K>>,
  ) => {
    if (event.origin !== this.topLevelOrigin) return;

    const { type, correlationId, payload } = event.data ?? {};
    if (!type) return;

    switch (type) {
      case 'getDashboardLayout': {
        return this.handleGetDashboardLayout(event.source!, correlationId!);
      }
      case 'setCustomElementAliasId': {
        return this.handleSetCustomElementAliasId(
          event.source!,
          correlationId!,
          payload,
        );
      }
      case 'requestFilters': {
        return this.handleRequestFilters(event.source!);
      }
    }
  };

  private handleRequestFilters(source: MessageEventSource) {
    const filterBoxFilters = store.getState().dashboardFilters;
    const filters = mapSupersetFiltersToPlatformSpec(filterBoxFilters);

    const message: OutgoingMessage = {
      type: 'filtersUpdated',
      payload: filters,
    };

    source.postMessage(message, { targetOrigin: this.topLevelOrigin });
  }

  private handleGetDashboardLayout(
    source: MessageEventSource,
    correlationId: string,
  ) {
    if (!correlationId) return;
    const layout = store.getState().dashboardLayout.present;
    const reply: OutgoingMessage = {
      type: 'dashboardLayoutUpdated',
      correlationId,
      payload: layout,
    };
    source.postMessage(reply, { targetOrigin: this.topLevelOrigin });
  }

  private handleSetCustomElementAliasId(
    source: MessageEventSource,
    correlationId: string,
    payload: any,
  ) {
    const { supersetComponentId, customComponentAliasId } = payload;
    const components = store.getState().dashboardLayout.present;

    store.dispatch({
      type: UPDATE_COMPONENTS,
      payload: {
        nextComponents: {
          [supersetComponentId]: {
            ...components[supersetComponentId],
            meta: {
              ...components[supersetComponentId].meta,
              version: CURRENT_VERSION,
              customElementId: customComponentAliasId,
            },
          },
        },
      },
    });

    // send acknoledgement
    source.postMessage(
      { correlationId },
      { targetOrigin: this.topLevelOrigin },
    );
  }
}

export const ContextService = new SupersetContextService(window);
