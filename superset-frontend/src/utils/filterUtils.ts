import {
  isSetOperator,
  isUnaryOperator,
  isBinaryOperator,
} from '@superset-ui/core';

import type {
  BinaryOperator,
  DataMask,
  DataMaskWithId,
  OperatorAndValue,
  QueryObjectFilterClause,
  SetOperator,
  UnaryOperator,
} from '@superset-ui/core';
import type { RootState } from 'src/dashboard/types';

/**
 * Superset time filters require both low and high bounds. Platform filters
 * only specify one per element - so we provide an arbitrary but extreme
 * corresponding bound to better map to the Superset time filter shape.
 */
const DATETIME_LOW_BOUND = '0001-01-01T00:00:00+00:00';
const DATETIME_HIGH_BOUND = '3001-01-01T00:00:00+00:00';

type BasePlatformFilter = {
  type: 'time' | 'value';
  filterId: string;
  columnName: string;
};

export type PlatformLowBoundTimeFilter = BasePlatformFilter & {
  type: 'time';
  lowBound: string;
};

export type PlatformHighBoundTimeFilter = BasePlatformFilter & {
  type: 'time';
  highBound: string;
};

type PlatformTimeFilter =
  | PlatformLowBoundTimeFilter
  | PlatformHighBoundTimeFilter;

export type PlatformValueFilter = BasePlatformFilter &
  OperatorAndValue & {
    type: 'value';
  };

export type PlatformFilter =
  | PlatformLowBoundTimeFilter
  | PlatformHighBoundTimeFilter
  | PlatformValueFilter;

export type SupersetOriginPlatformTimeFilter = PlatformLowBoundTimeFilter &
  PlatformHighBoundTimeFilter;

type UnaryPlatformFilter = {
  op: UnaryOperator;
};

type BinaryPlatformFilter = {
  op: BinaryOperator;
  val: string;
};

type SetPlatformFilter = {
  op: SetOperator;
  val: string[];
};

export function isUnaryFilter(
  filter: OperatorAndValue,
): filter is UnaryPlatformFilter {
  return isUnaryOperator(filter.op);
}

export function isBinaryFilter(
  filter: OperatorAndValue,
): filter is BinaryPlatformFilter {
  return isBinaryOperator(filter.op);
}

export function isSetFilter(
  filter: OperatorAndValue,
): filter is SetPlatformFilter {
  return isSetOperator(filter.op);
}

export function platformTimeFilterToRangeDataMask(
  filter: SupersetOriginPlatformTimeFilter,
) {
  return {
    id: filter.columnName,
    extraFormData: {
      time_range: `${filter.lowBound} : ${filter.highBound}`,
    },
    filterState: {
      value: `${filter.lowBound} : ${filter.highBound}`,
    },
  };
}

export function platformValueFilterToDataMask(
  filter: PlatformValueFilter,
): DataMaskWithId {
  const filters: QueryObjectFilterClause[] = [];

  if (isUnaryFilter(filter)) {
    filters.push({
      col: filter.columnName,
      op: filter.op,
    });
  }

  if (isBinaryFilter(filter)) {
    filters.push({
      col: filter.columnName,
      op: filter.op,
      val: filter.val,
    });
  }

  if (isSetFilter(filter)) {
    filters.push({
      col: filter.columnName,
      op: filter.op,
      val: filter.val,
    });
  }

  return {
    id: filter.filterId,
    extraFormData: {
      filters,
    },
  };
}

export function dataMaskToPlatformFilter(dataMask: DataMaskWithId) {
  return dataMask.extraFormData?.time_range
    ? dataMaskToPlatformTimeFilter(dataMask)
    : dataMaskToPlatformValueFilter(dataMask);
}

export function dataMaskToPlatformTimeFilter(
  dataMask: DataMaskWithId,
): SupersetOriginPlatformTimeFilter {
  const columnName = dataMask.id;

  if (!columnName) {
    throw new Error('Filter columnName should never be null!');
  }

  if (!dataMask.extraFormData?.time_range) {
    throw new Error('time_range must exist on superset time filters');
  }

  const bounds = dataMask.extraFormData.time_range.split(' : ');

  return {
    type: 'time',
    filterId: dataMask.id,
    columnName,
    lowBound: bounds[0],
    highBound: bounds[1],
  };
}

export function dataMaskToPlatformValueFilter(
  dataMask: DataMaskWithId,
): PlatformValueFilter {
  if (!dataMask.extraFormData?.filters?.length) {
    throw new Error('Invalid data mask does not have a filter!');
  }

  const queryObjectFilter = dataMask.extraFormData.filters[0];

  const columnName =
    typeof queryObjectFilter.col === 'string'
      ? queryObjectFilter.col
      : queryObjectFilter.col.label;

  if (!columnName) {
    throw new Error('Filter columnName should never be null!');
  }

  const partialFilter: Pick<
    PlatformValueFilter,
    'filterId' | 'columnName' | 'type'
  > = {
    filterId: dataMask.id,
    columnName,
    type: 'value',
  };

  if (isUnaryFilter(queryObjectFilter)) {
    return {
      ...partialFilter,
      op: queryObjectFilter.op,
    };
  }

  if (isBinaryFilter(queryObjectFilter)) {
    return {
      ...partialFilter,
      op: queryObjectFilter.op,
      val: queryObjectFilter.val,
    };
  }

  if (isSetFilter(queryObjectFilter)) {
    return {
      ...partialFilter,
      op: queryObjectFilter.op,
      val: queryObjectFilter.val,
    };
  }

  throw new Error('Unknown filter type');
}

export function isValueFilter(dm: DataMask) {
  return !!dm.extraFormData?.filters?.length || 0 > 0;
}

export function isTimeFilter(dm: DataMask) {
  return !!dm.extraFormData?.time_range;
}

/**
 * Maps Datamasks from the native Superset store to PlatformFilter-shaped-objects
 */
export function getPlatformFiltersFromRootState(state: RootState) {
  return Object.values(state.dataMask)
    .filter((dm: DataMask) => isValueFilter(dm) || isTimeFilter(dm))
    .map(dm => dataMaskToPlatformFilter(dm));
}

/**
 * When upserting a filter from Ikigai, the state of the Superset filters must
 * be resolved w.r.t. the state of Ikigai filters. Because Superset only really handles
 * one filter at a time, we need to associate individual single-bound filters
 * with corresponding bounds via the column name (also used as ID in superset).
 *
 * See: https://github.com/apache/superset/discussions/24165
 */
export function applyTimeFilter(
  extantFilters: SupersetOriginPlatformTimeFilter[],
  newFilter: PlatformTimeFilter,
): SupersetOriginPlatformTimeFilter[] {
  const lowBounds: Record<string, string> = {};
  const highBounds: Record<string, string> = {};

  extantFilters.forEach(f => {
    lowBounds[f.columnName] = f.lowBound;
    highBounds[f.columnName] = f.highBound;
  });

  if (isLowBoundFilter(newFilter)) {
    lowBounds[newFilter.columnName] = newFilter.lowBound;
  }

  if (isHighBoundFilter(newFilter)) {
    highBounds[newFilter.columnName] = newFilter.highBound;
  }

  // Only update a data mask if the low bound and high bound "make sense"
  // That is - the high bound is higher than the low bound
  const keysForValidLowHighBoundPairs = Array.from(
    new Set([...Object.keys(lowBounds), ...Object.keys(highBounds)]),
  ).filter(k => {
    return lowBounds[k] === getLowestDatetime(lowBounds[k], highBounds[k]);
  });

  return keysForValidLowHighBoundPairs.map(k => ({
    columnName: k,
    filterId: k,
    highBound: highBounds[k] || DATETIME_HIGH_BOUND,
    lowBound: lowBounds[k] || DATETIME_LOW_BOUND,
    type: 'time',
  }));
}

/**
 * Deleting a time filter is nontrivial; filters lose their identity once
 * mapped to superset-native shapes. So, we need to use columnName to associate
 * the filter with the correct superset-native data mask, and remove the
 * corresponding bound (we're actually just setting it to infinite).
 */
export function removeTimeFilter(
  extantFilters: SupersetOriginPlatformTimeFilter[],
  toBeDeleted: PlatformTimeFilter,
): SupersetOriginPlatformTimeFilter[] {
  const lowBounds: Record<string, string> = {};
  const highBounds: Record<string, string> = {};

  extantFilters.forEach(f => {
    lowBounds[f.columnName] = f.lowBound;
    highBounds[f.columnName] = f.highBound;
  });

  if (isLowBoundFilter(toBeDeleted)) {
    delete lowBounds[toBeDeleted.columnName];
  }

  if (isHighBoundFilter(toBeDeleted)) {
    delete highBounds[toBeDeleted.columnName];
  }

  const keys = Array.from(
    new Set([...Object.keys(lowBounds), ...Object.keys(highBounds)]),
  );

  return keys.map(k => ({
    columnName: k,
    filterId: k,
    highBound: highBounds[k] || DATETIME_HIGH_BOUND,
    lowBound: lowBounds[k] || DATETIME_LOW_BOUND,
    type: 'time',
  }));
}

function isLowBoundFilter(
  f: PlatformTimeFilter,
): f is PlatformLowBoundTimeFilter {
  return f.hasOwnProperty('lowBound');
}

function isHighBoundFilter(
  f: PlatformTimeFilter,
): f is PlatformHighBoundTimeFilter {
  return f.hasOwnProperty('highBound');
}

function getLowestDatetime(a: string, b: string) {
  const dateA = new Date(a);
  const dateB = new Date(b);

  if (isNaN(dateA.getTime())) return b;
  if (isNaN(dateB.getTime())) return a;

  return dateA.getTime() <= dateB.getTime() ? a : b;
}
