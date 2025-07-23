import { postChartFormData } from 'src/components/Chart/chartAction';
import { UPDATE_COMPONENTS } from 'src/dashboard/actions/dashboardLayout';
import { setCustomMarkdowns } from 'src/dashboard/actions/dashboardState';
import type { CustomMarkdown, CustomMarkdowns } from 'src/dashboard/types';
import { LOG_EVENT } from 'src/logger/actions';
import { LOG_ACTIONS_FORCE_REFRESH_CHART } from 'src/logger/LogUtils';
import { CURRENT_VERSION } from 'src/migrations/dynamic-markdown/migration-runner';
import { mapSupersetFiltersToPlatformSpec } from './map-superset-filters-to-platform-spec';

import type { IncomingMessage, IncomingMessageType } from './incoming-message';
import type { OutgoingMessage } from './outgoing-message';

/**
 * Manages communication in between same-window processes. Reads init data passed
 * from the top-level process and communicates with lower levels processes if any.
 *
 * There are several dynamic imports of the redux store; these are required
 * because loading the chart view will fail to load. The reason is uncldear but it
 * appears to be related to hydration and/or circular dependencies.
 */
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

  public async sendDashboardLayout() {
    const { store } = await import('src/views/store');
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

  public async sendFilters() {
    const { store } = await import('src/views/store');
    const filterBoxFilters = store.getState().dashboardFilters;
    const filters = mapSupersetFiltersToPlatformSpec(filterBoxFilters);

    const message: OutgoingMessage = {
      type: 'filtersUpdated',
      payload: filters,
    };

    this.sendMessageToCustomElements(message);
  }

  public sendDatasetsToRefresh(datasetAliasIds: string[]) {
    const message: OutgoingMessage = {
      type: 'elementsRefreshEvent',
      payload: datasetAliasIds,
    };
    this.sendMessageToCustomElements(message);
  }

  public requestCustomMarkdowns() {
    const message: OutgoingMessage = {
      type: 'customMarkdownsRequested',
      payload: null,
    };

    this.sendMessageToPlatform(message);
  }

  public createCustomMarkdown() {
    const message: OutgoingMessage = {
      type: 'createCustomMarkdownRequested',
      payload: null,
    };

    this.sendMessageToPlatform(message);
  }

  public editCustomMarkdown(customMarkdown: CustomMarkdown) {
    const message: OutgoingMessage = {
      type: 'editCustomMarkdownRequested',
      payload: customMarkdown,
    };

    this.sendMessageToPlatform(message);
  }

  public deleteCustomMarkdown(customMarkdownToDelete: CustomMarkdown) {
    const message: OutgoingMessage = {
      type: 'deleteCustomMarkdownRequested',
      payload: customMarkdownToDelete,
    };

    this.sendMessageToPlatform(message);
  }

  public requestCustomElementAliasId(
    supersetComponentId: string,
    customComponentId: string,
  ) {
    const message: OutgoingMessage = {
      type: 'customElementAliasIdRequested',
      payload: {
        supersetComponentId,
        customComponentId,
      },
    };

    this.sendMessageToPlatform(message);
  }

  private sendMessageToPlatform(message: OutgoingMessage) {
    if (!this.topLevelOrigin) throw new Error('topLevelOrigin is not set');

    this.thisWindow.parent.postMessage(message, this.topLevelOrigin);
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

      case 'notifyUpdateSupersetCharts': {
        this.handleNotifyUpdateSupersetCharts(
          event.source!,
          correlationId!,
          payload as any,
        );
        break;
      }

      case 'sendCustomMarkdowns': {
        this.handleSetCustomMarkdowns(payload as any);
        break;
      }

      case 'notifyUpdateCustomElementCharts': {
        this.sendDatasetsToRefresh(payload as unknown as string[]);
        break;
      }

      default: {
        // no-op
      }
    }
  };

  private async handleNotifyUpdateSupersetCharts(
    source: MessageEventSource,
    correlationId: string,
    chartIds: string[],
  ) {
    const { store } = await import('src/views/store');
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
            (store.getState().dataMask as any)[chart.id]?.ownState,
          ) as any,
        );
      }
    });

    source.postMessage(
      { correlationId },
      { targetOrigin: this.topLevelOrigin },
    );
  }

  private async handleRequestFilters(
    source: MessageEventSource,
    correlationId: string,
  ) {
    const { store } = await import('src/views/store');
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

  private async handleGetDashboardLayout(
    source: MessageEventSource,
    correlationId: string,
  ) {
    if (!correlationId) return;
    const { store } = await import('src/views/store');
    const layout = store.getState().dashboardLayout.present;
    const reply: OutgoingMessage = {
      type: 'dashboardLayoutUpdated',
      correlationId,
      payload: layout,
    };

    source.postMessage(reply, { targetOrigin: this.topLevelOrigin });
  }

  private async handleSetCustomElementAliasId(
    source: MessageEventSource,
    correlationId: string,
    payload: any,
  ) {
    const { store } = await import('src/views/store');
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

  private async handleSetCustomMarkdowns(payload: CustomMarkdowns) {
    const { store } = await import('src/views/store');

    store.dispatch(setCustomMarkdowns(payload));
  }
}

export const ContextService = new SupersetContextService(window);
