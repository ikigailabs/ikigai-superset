type IncomingMessagePayload = {
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
