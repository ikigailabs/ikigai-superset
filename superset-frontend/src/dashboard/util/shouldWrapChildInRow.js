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
import {
  DASHBOARD_GRID_TYPE,
  CHART_TYPE,
  COLUMN_TYPE,
  MARKDOWN_TYPE,
  TAB_TYPE,
  IKI_DEEPCAST_TYPE,
  IKI_RUN_PIPELINE_TYPE,
  IKI_FORECAST_MODULE_TYPE,
  IKI_DATASET_DOWNLOAD_TYPE,
} from './componentTypes';

const typeToWrapChildLookup = {
  [DASHBOARD_GRID_TYPE]: {
    [CHART_TYPE]: true,
    [COLUMN_TYPE]: true,
    [MARKDOWN_TYPE]: true,
    [IKI_DEEPCAST_TYPE]: true,
    [IKI_RUN_PIPELINE_TYPE]: true,
    [IKI_FORECAST_MODULE_TYPE]: true,
    [IKI_DATASET_DOWNLOAD_TYPE]: true,
  },

  [TAB_TYPE]: {
    [CHART_TYPE]: true,
    [COLUMN_TYPE]: true,
    [MARKDOWN_TYPE]: true,
    [IKI_DEEPCAST_TYPE]: true,
    [IKI_RUN_PIPELINE_TYPE]: true,
    [IKI_FORECAST_MODULE_TYPE]: true,
    [IKI_DATASET_DOWNLOAD_TYPE]: true,
  },
};

export default function shouldWrapChildInRow({ parentType, childType }) {
  if (!parentType || !childType) return false;

  const wrapChildLookup = typeToWrapChildLookup[parentType];
  if (!wrapChildLookup) return false;

  return Boolean(wrapChildLookup[childType]);
}
