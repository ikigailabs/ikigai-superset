import type { CustomMarkdown, DashboardLayout } from 'src/dashboard/types';
import type { PlatformFilter } from 'src/utils/filterUtils';

type OutgoingMessagePayload = {
  dashboardLayoutUpdated: DashboardLayout;
  editModeUpdated: boolean;
  customMarkdownsRequested: null;
  createCustomMarkdownRequested: null;
  editCustomMarkdownRequested: CustomMarkdown;
  deleteCustomMarkdownRequested: CustomMarkdown;
  customElementAliasIdRequested: {
    supersetComponentId: string;
    customComponentId: string;
  };
  elementsRefreshEvent: string[];
  refreshDashboardRequested: void;
  sendFilters: PlatformFilter[];
};

type OutgoingMessageType = keyof OutgoingMessagePayload;

export type OutgoingMessage<
  K extends OutgoingMessageType = OutgoingMessageType,
> = {
  type: K;
  correlationId?: string;
  payload: OutgoingMessagePayload[K];
};
