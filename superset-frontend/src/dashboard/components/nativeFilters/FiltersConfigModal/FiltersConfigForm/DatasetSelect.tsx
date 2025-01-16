/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useCallback, useMemo, ReactNode } from 'react';
import rison from 'rison';
import { t, JsonResponse } from '@superset-ui/core';
import { AsyncSelect } from 'src/components';
import {
  ClientErrorObject,
  getClientErrorObject,
} from 'src/utils/getClientErrorObject';
import { cachedSupersetGet } from 'src/utils/cachedSupersetGet';
import {
  Dataset,
  DatasetSelectLabel,
} from 'src/features/datasets/DatasetSelectLabel';
import {
  DashboardLayout,
  DatasourcesState,
  RootState,
} from 'src/dashboard/types';
import { useSelector } from 'react-redux';

interface DatasetSelectProps {
  onChange: (value: { label: string; value: number }) => void;
  value?: { label: string; value: number };
  datasetsOptions: any;
}

const DatasetSelect = ({
  onChange,
  value,
  datasetsOptions,
}: DatasetSelectProps) => {
  const getErrorMessage = useCallback(
    ({ error, message }: ClientErrorObject) => {
      let errorText = message || error || t('An error has occurred');
      if (message === 'Forbidden') {
        errorText = t('You do not have permission to edit this dashboard');
      }
      return errorText;
    },
    [],
  );

  console.log('datasetsOptions', datasetsOptions);

  const loadDatasetOptions = async (
    search: string,
    page: number,
    pageSize: number,
  ) => {
    const query = rison.encode({
      columns: ['id', 'table_name', 'database.database_name', 'schema'],
      filters: [{ col: 'table_name', opr: 'ct', value: search }],
      page,
      page_size: pageSize,
      order_column: 'table_name',
      order_direction: 'asc',
    });
    console.log('query', query);
    /* return {
      data: datasetsOptions,
      totalCount: datasetsOptions.length,
    }; */
    return cachedSupersetGet({
      endpoint: `/api/v1/dataset/?q=${query}`,
      // endpoint: `/api/v1/dataset/`,
    })
      .then((response: JsonResponse) => {
        console.log('response', response);
        const list: {
          customLabel: ReactNode;
          label: string;
          value: string | number;
        }[] = response.json.result.map((item: Dataset) => ({
          customLabel: DatasetSelectLabel(item),
          label: item.table_name,
          value: item.id,
        }));
        console.log('list', list);
        return {
          data: list,
          totalCount: response.json.count,
        };
      })
      .catch(async error => {
        console.log('datasets error', error);
        const errorMessage = getErrorMessage(await getClientErrorObject(error));
        throw new Error(errorMessage);
      });
  };

  return (
    <AsyncSelect
      ariaLabel={t('Dataset')}
      value={value}
      options={loadDatasetOptions}
      onChange={onChange}
      notFoundContent={t('No compatible datasets found')}
      placeholder={t('Select a dataset')}
    />
  );
};

const MemoizedSelect = (props: DatasetSelectProps) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => <DatasetSelect {...props} />, []);

export default MemoizedSelect;
