import type { CustomMarkdowns } from 'src/dashboard/types';

type IncomingMessagePayload = {
  setCustomElementAliasId: {
    supersetComponentId: string;
    customComponentAliasId: string;
  };
  notifyUpdateCharts: {
    chartIds: string[];
  };
  notifyUpdateCustomElementCharts: {
    datasetAliasIds: string[];
  };
  requestFilters: void;
  getDashboardLayout: void;
  sendCustomMarkdowns: CustomMarkdowns;
};

export type IncomingMessageType = keyof IncomingMessagePayload;

export type IncomingMessage<
  K extends IncomingMessageType = IncomingMessageType,
> = {
  type: K;
  correlationId?: string;
  payload?: IncomingMessagePayload[K];
};
