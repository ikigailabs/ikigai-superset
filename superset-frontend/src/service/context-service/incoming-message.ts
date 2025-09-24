import type { CustomMarkdowns } from 'src/dashboard/types';
import type {
  UpsertDataMaskFilterParams,
  UpsertNativeFilterParams,
} from './types';

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
  upsertNativeFilter: UpsertNativeFilterParams;
  upsertDataMask: UpsertDataMaskFilterParams;
  deleteDataMask: string;
  deleteNativeFilter: string;
  upsertSuggestionKey: {
    filterId: string;
    suggestionKey: string;
  };
  deleteSuggestionKey: string;
};

export type IncomingMessageType = keyof IncomingMessagePayload;

export type IncomingMessage<
  K extends IncomingMessageType = IncomingMessageType,
> = {
  type: K;
  correlationId?: string;
  payload?: IncomingMessagePayload[K];
};
