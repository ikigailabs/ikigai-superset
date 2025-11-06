import {
  clearDataMask,
  UPDATE_DATA_MASK,
  updateDataMask,
} from 'src/dataMask/actions';
import { ContextService } from 'src/ikigai/service/context-service/context-service';
import {
  getPlatformFiltersFromRootState,
  platformValueFilterToDataMask,
  platformTimeFilterToRangeDataMask,
  PlatformLowBoundTimeFilter,
  PlatformHighBoundTimeFilter,
  applyTimeFilter,
  removeTimeFilter,
  SupersetOriginPlatformTimeFilter,
  PlatformValueFilter,
} from 'src/utils/filterUtils';
import { IPCSubservice } from 'src/ikigai/service/ipc-subservice';
import type { TypedMiddleware } from '../typed-middleware';

let initialized = false;

/**
 * Listens for IPC message informing Superset that a Time or Value filter was
 * added or removed. Time and Value filters both piggyback off of Superset's DataMask system,
 * but because of a mismatch between Superset and Ikigai implementation of time
 * filtering, time filters need extra steps to resolve upserts and deletes. The following
 * IPC events are listened for, individually:
 *
 * - upsertValueFilter
 * - deleteValueFilter
 * - upsertTimeFilter
 * - deleteTimeFilter
 */
export const filterIpcMiddleware: TypedMiddleware = api => next => action => {
  if (initialized === true) return next(action);

  IPCSubservice.onRequest<PlatformValueFilter>(
    'upsertValueFilter',
    ({ payload, acknowledge }) => {
      const valueDataMask = platformValueFilterToDataMask(payload);
      api.dispatch(updateDataMask(payload.filterId, valueDataMask));

      acknowledge();
    },
  );

  IPCSubservice.onRequest<string>(
    'deleteValueFilter',
    ({ payload, acknowledge }) => {
      api.dispatch(clearDataMask(payload));
      acknowledge();
    },
  );

  IPCSubservice.onRequest<
    PlatformLowBoundTimeFilter | PlatformHighBoundTimeFilter
  >('upsertTimeFilter', ({ payload, acknowledge }) => {
    const extantTimeFilters = getPlatformFiltersFromRootState(
      api.getState(),
    ).filter(f => f.type === 'time') as SupersetOriginPlatformTimeFilter[];

    applyTimeFilter(extantTimeFilters, payload)
      .map(f => platformTimeFilterToRangeDataMask(f))
      .forEach(dm => {
        api.dispatch(updateDataMask(dm.id, dm));
      });

    acknowledge();
  });

  IPCSubservice.onRequest<
    PlatformLowBoundTimeFilter | PlatformHighBoundTimeFilter
  >('deleteTimeFilter', ({ payload, acknowledge }) => {
    const extantTimeFilters = getPlatformFiltersFromRootState(
      api.getState(),
    ).filter(f => f.type === 'time') as SupersetOriginPlatformTimeFilter[];

    removeTimeFilter(extantTimeFilters, payload)
      .map(f => platformTimeFilterToRangeDataMask(f))
      .forEach(dm => {
        api.dispatch(updateDataMask(dm.id, dm));
      });

    acknowledge();
  });

  initialized = true;
  return next(action);
};

/**
 * Whenever DataMasks are updated (in platform or Superset), let the platform
 * know that they have changed.
 */
export const filterSyncMiddleware: TypedMiddleware = api => next => action => {
  if (action.type !== UPDATE_DATA_MASK) {
    return next(action);
  }

  const result = next(action);

  const rootState = api.getState();
  const platformFilters = getPlatformFiltersFromRootState(rootState);

  ContextService.sendFilters(platformFilters);

  return result;
};
