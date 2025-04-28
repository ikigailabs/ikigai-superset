import { store } from 'src/views/store';
import { CURRENT_VERSION } from 'src/migrations/dynamic-markdown/migration-runner';
import { UPDATE_COMPONENTS } from 'src/dashboard/actions/dashboardLayout';

import type { DashboardLayout } from 'src/dashboard/types';
import { LOG_EVENT } from 'src/logger/actions';
import { LOG_ACTIONS_FORCE_REFRESH_CHART } from 'src/logger/LogUtils';
import { postChartFormData } from 'src/components/Chart/chartAction';
import {
  mapSupersetFiltersToPlatformSpec,
  PlatformFilter,
} from './map-superset-filters-to-platform-spec';

export type IncomingMessagePayload = {
  setCustomElementAliasId: {
    supersetComponentId: string;
    customComponentAliasId: string;
  };
  notifyUpdateCharts: {
    chartIds: string[];
  };
  requestFilters: void;
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
  public readonly projectId?: string;

  public readonly topLevelOrigin?: string;

  private readonly thisWindow: Window;

  constructor(thisWindow: Window) {
    this.thisWindow = thisWindow;

    const urlParams = new URLSearchParams(thisWindow.location.search);
    const projectId = urlParams.get('project_id');
    const dashUrl = urlParams.get('dash_url');

    this.projectId = projectId || undefined;
    this.topLevelOrigin = dashUrl ? new URL(dashUrl).origin : undefined;

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
      if (!iframe.name.includes('dynamic-markdown') || !this.topLevelOrigin)
        return;
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
        this.handleGetDashboardLayout(event.source!, correlationId!);
        break;
      }
      case 'setCustomElementAliasId': {
        this.handleSetCustomElementAliasId(
          event.source!,
          correlationId!,
          payload,
        );
        break;
      }
      case 'requestFilters': {
        this.handleRequestFilters(event.source!, correlationId!);
        break;
      }
      case 'notifyUpdateCharts': {
        this.handleNotifyUpdateCharts(
          event.source!,
          correlationId!,
          payload as any,
        );
        break;
      }
      default: {
        // no-op
      }
    }
  };

  private handleNotifyUpdateCharts(
    source: MessageEventSource,
    correlationId: string,
    chartIds: string[],
  ) {
    const dashboardLayout = store.getState().dashboardLayout.present;

    chartIds.forEach(chartId => {
      let findChartEle = null;
      Object.keys(dashboardLayout).forEach(ele => {
        const supChartId = dashboardLayout[ele].meta?.chartId;
        if (supChartId && supChartId.toString() === chartId) {
          findChartEle = supChartId;
        }
      });

      if (findChartEle) {
        // log that we're force refreshing
        store.dispatch({
          type: LOG_EVENT,
          payload: {
            eventName: LOG_ACTIONS_FORCE_REFRESH_CHART,
            eventData: {
              slice_id: chartId,
              is_cached: false,
            },
          },
        });

        const chart = (store.getState().charts || {})[chartId];
        const timeout =
          store.getState().dashboardInfo.common.conf.SUPERSET_WEBSERVER_TIMEOUT;

        if (
          !chart?.latestQueryFormData ||
          Object.keys(chart?.latestQueryFormData).length === 0
        ) {
          return;
        }
        store.dispatch(
          postChartFormData(
            chart?.latestQueryFormData,
            true,
            timeout,
            chart?.id,
            store.getState().dashboardInfo.id,
            (store.getState().dataMask as any)[chart.id].ownState,
          ) as any,
        );
      }
    });

    source.postMessage(
      { correlationId },
      { targetOrigin: this.topLevelOrigin },
    );
  }

  private handleRequestFilters(
    source: MessageEventSource,
    correlationId: string,
  ) {
    const filterBoxFilters = store.getState().dashboardFilters;
    const filters = mapSupersetFiltersToPlatformSpec(filterBoxFilters);

    const message: OutgoingMessage = {
      type: 'filtersUpdated',
      payload: filters,
    };

    source.postMessage(message, { targetOrigin: this.topLevelOrigin });
    source.postMessage(
      { correlationId },
      { targetOrigin: this.topLevelOrigin },
    );
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
