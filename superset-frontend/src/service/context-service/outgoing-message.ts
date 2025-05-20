import type { DashboardLayout } from 'src/dashboard/types';
import type { PlatformFilter } from './map-superset-filters-to-platform-spec';

type OutgoingMessagePayload = {
  dashboardLayoutUpdated: DashboardLayout;
  editModeUpdated: boolean;
  filtersUpdated: PlatformFilter[];
};

type OutgoingMessageType = keyof OutgoingMessagePayload;

export type OutgoingMessage<
  K extends OutgoingMessageType = OutgoingMessageType,
> = {
  type: K;
  correlationId?: string;
  payload: OutgoingMessagePayload[K];
};
