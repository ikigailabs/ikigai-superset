import React from 'react';
import { t } from '@superset-ui/core';

import { IKI_FORECAST_MODULE_TYPE } from '../../../dashboard/util/componentTypes';
import { NEW_IKI_FORECAST_MODULE_ID } from '../../../dashboard/util/constants';
import DraggableNewComponent from '../../../dashboard/components/gridComponents/new/DraggableNewComponent';

export default function DraggableNewDivider() {
  return (
    <DraggableNewComponent
      id={NEW_IKI_FORECAST_MODULE_ID}
      type={IKI_FORECAST_MODULE_TYPE}
      label={t('Forecast')}
      description="Modular Interactive Forecasting Component"
      className="fa fa-line-chart"
    />
  );
}
