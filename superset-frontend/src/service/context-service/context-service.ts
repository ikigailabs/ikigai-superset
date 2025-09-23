import { postChartFormData } from 'src/components/Chart/chartAction';
import { UPDATE_COMPONENTS } from 'src/dashboard/actions/dashboardLayout';
import { setCustomMarkdowns } from 'src/dashboard/actions/dashboardState';

import { LOG_EVENT } from 'src/logger/actions';
import { LOG_ACTIONS_FORCE_REFRESH_CHART } from 'src/logger/LogUtils';
import { CURRENT_VERSION } from 'src/migrations/dynamic-markdown/migration-runner';
import { mapSupersetFiltersToPlatformSpec } from './map-superset-filters-to-platform-spec';

import { setFilterConfiguration } from 'src/dashboard/actions/nativeFilters';
import { clearDataMask, updateDataMask } from 'src/dataMask/actions';
import { type Filter, NativeFilterType } from '@superset-ui/core';

import type {
  UpsertDataMaskFilterParams,
  UpsertNativeFilterParams,
} from './types';
import type { CustomMarkdown, CustomMarkdowns } from 'src/dashboard/types';
import type { IncomingMessageUnion } from './incoming-message';
import type { OutgoingMessage } from './outgoing-message';
import type { PlatformCompliantDataMask } from 'src/middleware/data-mask-sync';

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

  public async sendDataMasks(dataMasks: PlatformCompliantDataMask[]) {
    this.sendMessageToCustomElements({
      payload: dataMasks,
      type: 'sendDataMasks',
    })
  }

  public sendDatasetsToRefresh(
    datasetAliasIds: string[],
    correlationId: string,
  ) {
    const message: OutgoingMessage = {
      type: 'elementsRefreshEvent',
      payload: datasetAliasIds,
      correlationId,
    };
    this.sendMessageToCustomElements(message);
  }

  public refreshDashboard() {
    const message: OutgoingMessage = {
      type: 'refreshDashboardRequested',
      payload: null,
    };
    this.sendMessageToPlatform(message);
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

  private onMessage = (event: MessageEvent<IncomingMessageUnion>) => {
    if (event.origin !== this.topLevelOrigin) return;

    const { correlationId } = event.data ?? {};
    if (!event.data.type) return;

    switch (event.data.type) {
      case 'getDashboardLayout': {
        this.handleGetDashboardLayout(event.source!, correlationId!);
        break;
      }

      case 'setCustomElementAliasId': {
        this.handleSetCustomElementAliasId(
          event.source!,
          correlationId!,
          event.data.payload!,
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
          event.data.payload!.chartIds,
        );
        break;
      }

      case 'sendCustomMarkdowns': {
        this.handleSetCustomMarkdowns(event.data.payload!);
        break;
      }

      case 'notifyUpdateCustomElementCharts': {
        this.sendDatasetsToRefresh(
          event.data.payload!.datasetAliasIds,
          correlationId!,
        );
        break;
      }

      case 'upsertNativeFilter': {
        this.upsertNativeFilter(
          event.source!,
          event.data.payload!,
          correlationId!,
        );
        break;
      }

      case 'upsertDataMask': {
        this.upsertDataMask(event.source!, event.data.payload!, correlationId!);
        break;
      }

      case 'deleteDataMask': {
        this.deleteDataMask(event.source!, event.data.payload!, correlationId!);
        break;
      }

      case 'deleteNativeFilter': {
        this.deleteNativeFilter(
          event.source!,
          event.data.payload!,
          correlationId!,
        );
        break;
      }

      default: {
        // no-op
      }
    }
  };

  private async deleteDataMask(
    source: MessageEventSource,
    payload: string,
    correlationId: string,
  ) {
    const { store } = await import('src/views/store');
    const dataMasks = store.getState().dataMask;

    // TODO: Superset doesn't provide typing for dataMasks in v2.
    // Once upgraded, revisit this line
    if ((dataMasks as any)[payload]) {
      store.dispatch(clearDataMask(payload));
    }

    // send acknoledgement
    source.postMessage(
      { correlationId },
      { targetOrigin: this.topLevelOrigin },
    );
  }

  private async deleteNativeFilter(
    source: MessageEventSource,
    payload: string,
    correlationId: string,
  ) {
    const { store } = await import('src/views/store');

    const nativeFilters = store.getState().nativeFilters;
    const filtersClone = JSON.parse(JSON.stringify(nativeFilters.filters));
    delete filtersClone.filters[payload];

    const filterConfigThunk = setFilterConfiguration(filtersClone);
    filterConfigThunk(store.dispatch, store.getState);

    // send acknoledgement
    source.postMessage(
      { correlationId },
      { targetOrigin: this.topLevelOrigin },
    );
  }

  private async upsertNativeFilter(
    source: MessageEventSource,
    payload: UpsertNativeFilterParams,
    correlationId: string,
  ) {
    const { store } = await import('src/views/store');

    const filterObject: Filter = {
      cascadeParentIds: [],
      defaultDataMask: {},
      id: payload.id,
      name: payload.filterName,
      scope: {
        // no-op
        rootPath: ['ROOT_ID'],
        excluded: [],
      },
      filterType: 'value',
      targets: [
        {
          datasetId: 0,
          column: {
            name: payload.columnName,
          },
        },
      ], // if column is unset, empty array will do
      controlValues: {}, // no-op
      description: '', // no-op
      type: NativeFilterType.NATIVE_FILTER, // no-op
    };

    const nativeFilters = Object.values(store.getState().nativeFilters.filters);
    const filterConfigThunk = setFilterConfiguration([
      ...nativeFilters,
      filterObject,
    ]);

    filterConfigThunk(store.dispatch, store.getState);

    // send acknoledgement
    source.postMessage(
      { correlationId },
      { targetOrigin: this.topLevelOrigin },
    );
  }

  private async upsertDataMask(
    source: MessageEventSource,
    payload: UpsertDataMaskFilterParams,
    correlationId: string,
  ) {
    const { store } = await import('src/views/store');

    store.dispatch(
      updateDataMask(payload.filterId, {
        extraFormData: {
          filters: [
            {
              ...payload.opAndValue,
              col: payload.columnName,
            },
          ],
        },
      }),
    );

    // send acknoledgement
    source.postMessage(
      { correlationId },
      { targetOrigin: this.topLevelOrigin },
    );
  }

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
    payload: {
      supersetComponentId: string;
      customComponentAliasId: string;
    },
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
