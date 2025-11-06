import type { CustomMarkdowns } from 'src/dashboard/types';
import type {
  PlatformHighBoundTimeFilter,
  PlatformLowBoundTimeFilter,
  PlatformValueFilter,
} from 'src/ikigai/utils/filterUtils';

export type IncomingMessageUnion = {
  [K in IncomingMessageType]: {
    type: K;
    correlationId?: string;
    payload?: IncomingMessagePayload[K];
  };
}[IncomingMessageType];

export type IncomingMessagePayload = {
  setCustomElementAliasId: {
    supersetComponentId: string;
    customComponentAliasId: string;
  };
  notifyUpdateSupersetCharts: {
    chartIds: string[];
  };
  notifyUpdateCustomElementCharts: {
    datasetAliasIds: string[];
  };
  requestFilters: void;
  getDashboardLayout: void;
  sendCustomMarkdowns: CustomMarkdowns;
  upsertValueFilter: PlatformValueFilter;
  deleteValueFilter: string;
  upsertTimeFilter: PlatformLowBoundTimeFilter | PlatformHighBoundTimeFilter;
  deleteTimeFilter: PlatformLowBoundTimeFilter | PlatformHighBoundTimeFilter;
};

export type IncomingMessageType = keyof IncomingMessagePayload;

export type IncomingMessage<
  K extends IncomingMessageType = IncomingMessageType,
> = {
  type: K;
  correlationId?: string;
  payload?: IncomingMessagePayload[K];
};
