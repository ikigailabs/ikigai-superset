import { DataMask, OperatorAndValue } from '@superset-ui/core';
import { Middleware } from 'redux';
import { UPDATE_DATA_MASK } from 'src/dataMask/actions';
import { ContextService } from 'src/service/context-service/context-service';
import { store } from 'src/views/store';

export type PlatformCompliantDataMask = {
  columnName: string;
} & OperatorAndValue;

const dataMaskSyncMiddleware: Middleware = api => next => action => {
  if (action.type !== UPDATE_DATA_MASK) {
    return next(action);
  }

  const result = next(action);

  const rootState = api.getState() as ReturnType<typeof store.getState>;
  const dataMasks = rootState.dataMask;

  const platformCompliantDataMasks = Object.values(dataMasks)
    .filter((dm: DataMask) => (dm.extraFormData?.filters?.length || 0) > 0)
    .map((dm: DataMask) => dm.extraFormData!.filters![0])
    .map(f => {
      let columnName = typeof f.col === 'string' ? f.col : f.col.label;

      if (columnName === undefined) {
        // this should never happen
        columnName = 'ColumnName';
      }

      return {
        ...f,
        columnName,
      };
    });

  ContextService.sendDataMasks(platformCompliantDataMasks);

  return result;
};

export default dataMaskSyncMiddleware;
