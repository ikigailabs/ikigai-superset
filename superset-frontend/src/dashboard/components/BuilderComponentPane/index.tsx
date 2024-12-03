/* eslint-disable import/no-unresolved */
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
/* eslint-env browser */
import React from 'react';
import { rgba } from 'emotion-rgba';
import Tabs from 'src/components/Tabs';
import { t, css, SupersetTheme } from '@superset-ui/core';
import SliceAdder from 'src/dashboard/containers/SliceAdder';
import dashboardComponents from 'src/visualizations/presets/dashboardComponents';
import NewColumn from '../gridComponents/new/layout/NewColumn';
import NewDivider from '../gridComponents/new/layout/NewDivider';
import NewHeader from '../gridComponents/new/layout/NewHeader';
import NewRow from '../gridComponents/new/layout/NewRow';
import NewTabs from '../gridComponents/new/layout/NewTabs';
import NewMarkdown from '../gridComponents/new/layout/NewMarkdown';
import NewDynamicComponent from '../gridComponents/new/NewDynamicComponent';
import NewIkiTable from '../gridComponents/new/components/NewIkiTable';
import NewIkiProcessBuilder from '../gridComponents/new/components/NewIkiProcessBuilder';
import NewIkiRunPipeline from '../gridComponents/new/components/NewIkiRunPipeline';
import NewDeepCast from '../gridComponents/new/components/NewDeepCast';
import NewIkiEitlRow from '../gridComponents/new/components/NewIkiEitlRow';
import NewIkiEitlColumn from '../gridComponents/new/components/NewIkiEitlColumn';
import NewDyanmicMarkdown from '../gridComponents/new/components/NewDynamicMarkdown';
// import NewIkiExplainability from '../gridComponents/new/NewIkiExplainability';
import NewIkiModelMetrics from '../gridComponents/new/NewIkiModelMetrics';
import NewIkiDatasetDownload from '../gridComponents/new/components/NewIkiDatasetDownload';
import NewExternalDatasets from '../gridComponents/new/components/NewExternalDatasets';
import NewForecast from '../gridComponents/new/components/NewForecast';
import NewForecastModule from '../gridComponents/new/components/NewForecastModule';

const BUILDER_PANE_WIDTH = 374;

const BuilderComponentPane = ({ topOffset = 0 }) => (
  <div
    data-test="dashboard-builder-sidepane"
    css={css`
      position: sticky;
      right: 0;
      top: ${topOffset}px;
      height: calc(100vh - ${topOffset}px);
      width: ${BUILDER_PANE_WIDTH}px;
    `}
    className="dashboard-builder-sidepane"
  >
    <div
      css={(theme: SupersetTheme) => css`
        position: absolute;
        height: 100%;
        width: ${BUILDER_PANE_WIDTH}px;
        box-shadow: 0 0 0 #fff !important;
        background-color: #fff;
        border-left: 1px solid #eee;
      `}
      className="viewport"
    >
      <Tabs
        data-test="dashboard-builder-component-pane-tabs-navigation"
        id="tabs"
        css={(theme: SupersetTheme) => css`
          line-height: inherit;
          margin-top: ${theme.gridUnit * 2}px;
          height: 100%;
          padding: 0 24px;

          & .ant-tabs-content-holder {
            height: 100%;
            & .ant-tabs-content {
              height: 100%;
            }
          }
        `}
      >
        <Tabs.TabPane key={1} tab={t('Layout')}>
          <NewTabs />
          <NewRow />
          <NewColumn />
          <NewHeader />
          <NewMarkdown />
          <NewDivider />
        </Tabs.TabPane>
        <Tabs.TabPane key={2} tab={t('Components')}>
          <NewDyanmicMarkdown />
          <NewIkiTable />
          <NewIkiProcessBuilder />
          <NewIkiRunPipeline />
          <NewDeepCast />
          <NewIkiEitlRow />
          <NewIkiEitlColumn />
          <NewForecastModule />
          <NewIkiDatasetDownload />
          <NewIkiModelMetrics />
          <NewExternalDatasets />
          <NewForecast />

          {/* <NewIkiExplainability /> */}
          {dashboardComponents
            .getAll()
            .map(({ key: componentKey, metadata }) => (
              <NewDynamicComponent
                metadata={metadata}
                componentKey={componentKey}
              />
            ))}
        </Tabs.TabPane>
        <Tabs.TabPane key={3} tab={t('Charts')} className="tab-charts">
          <SliceAdder />
        </Tabs.TabPane>
      </Tabs>
    </div>
  </div>
);

export default BuilderComponentPane;
