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
  ChartsState,
  DashboardLayout,
  DatasourcesState,
  RootState,
} from 'src/dashboard/types';
import { useSelector } from 'react-redux';
import { mockedDatasources } from './__mock_datasources';

interface DatasetSelectProps {
  onChange: (value: { label: string; value: number }) => void;
  value?: { label: string; value: number };
}

const DatasetSelect = ({ onChange, value }: DatasetSelectProps) => {
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

  const appDatasources = useSelector<RootState, number>(
    state => state.dashboardState.appDatasources,
  );
  const dashboardLayout = useSelector<RootState, DashboardLayout>(
    state => state.dashboardLayout.present,
  );
  const charts = useSelector<RootState, ChartsState>(({ charts }) => charts);

  function prepareDatasetDropdownData(
    dashboardLayout: any,
    allDatasets: any,
    appDatasources: any,
    charts: any,
  ) {
    let datasources: any = [];
    const finalList: any = [];
    if (dashboardLayout && Object.keys(dashboardLayout).length > 0) {
      const datasourceIds: any = [];
      Object.keys(dashboardLayout).forEach((layoutId: any) => {
        const layoutObject: any = dashboardLayout[layoutId];
        if (layoutObject?.type === 'CHART') {
          const chartId = layoutObject?.meta?.chartId;
          const temp_datasource = charts[chartId]
            ? charts[chartId]?.form_data?.datasource
            : '';
          if (temp_datasource) {
            const temp_datasource_arr: any = temp_datasource.split('__');
            if (temp_datasource_arr[0]) {
              const datasource_id = temp_datasource_arr[0];
              datasourceIds.push(datasource_id);
            }
          }
        }
      });
      console.log('datasourceIds', datasourceIds);
      if (datasourceIds && allDatasets) {
        datasources = allDatasets.filter((d: any) =>
          datasourceIds.includes(d?.value.toString()),
        );
      }
      if (datasources && appDatasources) {
        datasources.map((d: any) => {
          const tempD: any = d;
          const table_name = tempD?.label;
          let new_table_name = '';
          const foundDataset: any = appDatasources.filter(
            (ad: any) => ad?.full_id === table_name,
          );
          if (foundDataset[0]) {
            new_table_name = foundDataset[0]?.name;
          }
          tempD.new_table_name = new_table_name;

          const tempOption: any = {
            customLabel: d?.customLabel,
            label: new_table_name,
            value: d?.value,
          };
          finalList.push(tempOption);
          return tempD;
        });
      }
      console.log('datasourceIds', datasourceIds, datasources, finalList);
    }

    return finalList;
  }

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
        console.log('list', list, mockedDatasources);
        const finalList: any = prepareDatasetDropdownData(
          dashboardLayout,
          list,
          // mockedDatasources,
          appDatasources,
          charts,
        );
        console.log('finalList', finalList);
        return {
          data: finalList,
          totalCount: finalList?.length,
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
