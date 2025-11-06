import { OperatorAndValue } from '@superset-ui/core';

export type UpsertNativeFilterParams = {
  id: string;
  columnName: string;
  filterName: string;
};

export type UpsertDataMaskFilterParams = {
  filterId: string;
  columnName: string;
  opAndValue: OperatorAndValue;
};
