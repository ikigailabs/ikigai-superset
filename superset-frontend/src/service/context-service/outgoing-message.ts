import type { CustomMarkdown, DashboardLayout } from 'src/dashboard/types';
import type { PlatformFilter } from './map-superset-filters-to-platform-spec';

type OutgoingMessagePayload = {
  dashboardLayoutUpdated: DashboardLayout;
  editModeUpdated: boolean;
  filtersUpdated: PlatformFilter[];
  customMarkdownsRequested: null;
  createCustomMarkdownRequested: null;
  editCustomMarkdownRequested: CustomMarkdown;
  deleteCustomMarkdownRequested: CustomMarkdown;
  customElementAliasIdRequested: {
    supersetComponentId: string;
    customComponentId: string;
  };
};

type OutgoingMessageType = keyof OutgoingMessagePayload;

export type OutgoingMessage<
  K extends OutgoingMessageType = OutgoingMessageType,
> = {
  type: K;
  correlationId?: string;
  payload: OutgoingMessagePayload[K];
};
