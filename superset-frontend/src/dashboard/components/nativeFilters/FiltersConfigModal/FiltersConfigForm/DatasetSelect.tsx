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
import React, {
  useCallback,
  useMemo,
  ReactNode,
  useEffect,
  useState,
} from 'react';
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
import { mockedDashboardLayout } from './__mock_dashboard_layout';
import { mockedCharts } from './__mock_charts';

interface DatasetSelectProps {
  onChange: (value: { label: string; value: number }) => void;
  value?: { label: string; value: number };
  datasetId?: number;
}

const DatasetSelect = ({ onChange, value, datasetId }: DatasetSelectProps) => {
  const [selectedDataset, setSelectedDataset] = useState<any>({
    customLabel: undefined,
    label: undefined,
    value: undefined,
  });
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

  const appDatasources = useSelector<RootState, any>(
    state => state.dashboardState.appDatasources,
  );
  const dashboardLayout = useSelector<RootState, DashboardLayout>(
    state => state.dashboardLayout.present,
  );
  const charts = useSelector<RootState, ChartsState>(({ charts }) => charts);

  useEffect(() => {
    let chartName = '';
    let datasetName = '';
    let temp_selectedOption: any = { ...selectedDataset };
    if (datasetId) {
      const temp_charts = mockedCharts;
      if (temp_charts) {
        Object.keys(temp_charts).forEach((c: any) => {
          console.log('c123', c, temp_charts[c]);
          const temp_datasource = temp_charts[c]
            ? temp_charts[c]?.form_data?.datasource
            : '';
          console.log('temp_datasource', temp_datasource);
          const temp_datasource_arr: any = temp_datasource.split('__');
          console.log('temp_datasource_arr', temp_datasource_arr);
          if (temp_datasource_arr[0]) {
            const datasource_id = temp_datasource_arr[0];
            console.log('datasource_id123', datasource_id, datasetId);
            if (datasource_id.toString() === datasetId.toString()) {
              chartName = temp_charts[c]?.name;
              temp_selectedOption = {
                customLabel: undefined,
                label: chartName,
                value: parseInt(datasource_id, 10),
              };
            }
          }
        });
      }
    }
    console.log('temp_selectedOption', temp_selectedOption);
    setSelectedDataset(temp_selectedOption);
    /* if (appDatasources) {
      const chartMatced: any = appDatasources.filter(
        (appD: any) => appD.superset_chart_id === chartId.toString(),
      );
      if (chartMatced[0]) {
        datasetName = chartMatced[0]?.dataset?.name;
      }
    }
    if (datasetName) {
      chartName = datasetName;
    } else {
      chartName = sliceName;
    } */
    console.log('chartName', chartName);
  }, [datasetId]);

  function getDropdownOptions(
    dashboardLayout: any,
    charts: any,
    appDatasources: any,
  ) {
    console.log('getDropdownOptions', dashboardLayout, charts, appDatasources);
    let selectOptionsObj: any = {};
    const selectOptions: any = [];
    if (dashboardLayout && Object.keys(dashboardLayout).length > 0) {
      Object.keys(dashboardLayout).forEach((layoutId: any) => {
        const layoutObject: any = dashboardLayout[layoutId];
        if (layoutObject?.type === 'CHART') {
          const chartId = layoutObject?.meta?.chartId;
          const sliceName = layoutObject?.meta?.sliceName;
          let chartName = '';
          let datasetName = '';
          let datasetId = '';
          if (appDatasources) {
            const chartMatched: any = appDatasources.filter(
              (appD: any) => appD.superset_chart_id === chartId.toString(),
            );
            if (chartMatched[0]) {
              datasetName = chartMatched[0]?.dataset?.name;
              datasetId = chartMatched[0]?.dataset?.dataset_id;
            }
          }
          if (datasetName) {
            chartName = datasetName;
          } else {
            chartName = sliceName;
            // If we cant get Dataset Id with superset_chart_id, use slice name (dataset name) to get the chartMatched
            // We can use slice name (dataset name) to find the dataset id b/c a project can only have one dataset of a given name
            datasetId = appDatasources.filter(
              (appD: any) => appD.dataset?.name === sliceName,
            )?.[0]?.dataset?.dataset_id;
          }
          const temp_datasource = charts[chartId]
            ? charts[chartId]?.form_data?.datasource
            : '';
          if (temp_datasource) {
            const temp_datasource_arr: any = temp_datasource.split('__');
            if (temp_datasource_arr[0]) {
              const datasource_id = temp_datasource_arr[0];
              selectOptionsObj = {
                ...selectOptionsObj,
                [datasource_id]: {
                  datasetId: datasetId || '',
                  customLabel: undefined,
                  label: chartName,
                  value: parseInt(datasource_id, 10),
                },
              };
            }
          }
          // selectOptions.push(datasource_id);
        }
      });
      console.log('selectOptionsObj', selectOptionsObj);
      if (selectOptionsObj && Object.keys(selectOptionsObj).length > 0) {
        Object.keys(selectOptionsObj).forEach((o: any) => {
          selectOptions.push(selectOptionsObj[o]);
        });
      }
      console.log('selectOptions', selectOptions);
    }
    return selectOptions;
  }

  /* function getDatasetIdsInDashboard(dashboardLayout: any, charts: any) {
    const datasourceIds: any = [];
    if (dashboardLayout && Object.keys(dashboardLayout).length > 0) {
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
    }
    return datasourceIds;
  } */

  /* function prepareDatasetDropdownData(
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
  } */

  const loadDatasetOptions = async (
    search: string,
    page: number,
    pageSize: number,
  ) => {
    const list: any = getDropdownOptions(
      dashboardLayout,
      // mockedDashboardLayout,
      charts,
      // mockedCharts,
      appDatasources,
      // mockedDatasources,
    );
    console.log('list', list, 'datasetId', datasetId);
    return {
      data: list,
      totalCount: list?.length,
    };
    // const datasetIds = getDatasetIdsInDashboard(dashboardLayout, charts);
    // const datasetIdsStr = datasetIds ? datasetIds.toString() : '';
    /* const query = rison.encode({
      columns: ['id', 'table_name', 'database_name', 'schema'],
      filters: [{ col: 'id', opr: 'any', value: datasetIdsStr }], // filters: [{ col: 'id', opr: 'ct', value: search }],
      page,
      page_size: pageSize,
      order_column: 'table_name',
      order_direction: 'asc',
    });
    console.log('query', query); */
    /* return cachedSupersetGet({
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
        // console.log('list', list);
        // const finalList: any = prepareDatasetDropdownData(
        //   dashboardLayout,
        //   list,
        //   // mockedDatasources,
        //   appDatasources,
        //   charts,
        // );
        // console.log('finalList', finalList);
        return {
          data: list,
          totalCount: list?.length,
        };
      })
      .catch(async error => {
        console.log('datasets error', error);
        const errorMessage = getErrorMessage(await getClientErrorObject(error));
        throw new Error(errorMessage);
      }); */
  };

  console.log('SELECT props: ', value, datasetId);

  return (
    <AsyncSelect
      ariaLabel={t('Dataset')}
      value={value}
      // value={selectedDataset}
      options={loadDatasetOptions}
      onChange={onChange}
      notFoundContent={t('No compatible datasets found')}
      placeholder={t('Select a dataset')}
    />
  );
};

const MemoizedSelect = (props: DatasetSelectProps) => {
  console.log('props', props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => <DatasetSelect {...props} />, []);
};

export default MemoizedSelect;
