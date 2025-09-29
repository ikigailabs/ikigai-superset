import {
  isSetOperator,
  isUnaryOperator,
  isBinaryOperator,
} from '@superset-ui/core';

import type {
  BinaryOperator,
  DataMaskWithId,
  OperatorAndValue,
  QueryObjectFilterClause,
  SetOperator,
  UnaryOperator,
} from '@superset-ui/core';

export type PlatformFilter = {
  filterId: string;
  columnName: string;
} & OperatorAndValue;

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

export function platformFilterToDataMask(
  filter: PlatformFilter,
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

export function dataMaskToPlatformFilter(
  dataMask: DataMaskWithId,
): PlatformFilter {
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

  const partialFilter: Pick<PlatformFilter, 'filterId' | 'columnName'> = {
    filterId: dataMask.id,
    columnName,
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
