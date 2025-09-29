import {
  clearDataMask,
  UPDATE_DATA_MASK,
  updateDataMask,
} from 'src/dataMask/actions';
import { ContextService } from 'src/service/context-service/context-service';
import {
  dataMaskToPlatformFilter,
  PlatformFilter,
  platformFilterToDataMask,
} from 'src/utils/filterUtils';
import { IPCSubservice } from 'src/service/ipc-subservice.ts';
import type { DataMask, DataMaskWithId } from '@superset-ui/core';
import type { TypedMiddleware } from './typed-middleware';

let initialized = false;

/**
 * Listens for IPC message informing Superset that a DataMask was added or deleted
 * from the platform layer.
 */
export const filterIpcMiddleware: TypedMiddleware = api => next => action => {
  if (initialized === true) return next(action);

  IPCSubservice.onRequest<PlatformFilter>(
    'upsertFilter',
    ({ payload, acknowledge }) => {
      api.dispatch(
        updateDataMask(payload.filterId, platformFilterToDataMask(payload)),
      );

      acknowledge();
    },
  );

  IPCSubservice.onRequest<string>(
    'deleteFilter',
    ({ payload, acknowledge }) => {
      api.dispatch(clearDataMask(payload));
      acknowledge();
    },
  );

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
  const dataMasks = rootState.dataMask as Record<string, DataMaskWithId>;

  const platformFilters = Object.values(dataMasks)
    .filter((dm: DataMask) => (dm.extraFormData?.filters?.length || 0) > 0)
    .map(dm => dataMaskToPlatformFilter(dm));

  ContextService.sendFilters(platformFilters);

  return result;
};
