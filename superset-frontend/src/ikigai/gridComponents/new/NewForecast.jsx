import React from 'react';
import { t } from '@superset-ui/core';

import { IKI_FORECAST_TYPE } from '../../../dashboard/util/componentTypes';
import { NEW_IKI_FORECAST_ID } from '../../../dashboard/util/constants';
import DraggableNewComponent from '../../../dashboard/components/gridComponents/new/DraggableNewComponent';

export default function DraggableNewDivider() {
  return (
    <DraggableNewComponent
      id={NEW_IKI_FORECAST_ID}
      type={IKI_FORECAST_TYPE}
      label={t('Forecast')}
      description="Forecast with Expert in the Loop"
      className="fa fa-line-chart"
      demandApp
    />
  );
}
