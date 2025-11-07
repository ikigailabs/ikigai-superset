import React from 'react';
import { t } from '@superset-ui/core';

import { IKI_MODEL_METRICS_TYPE } from '../../../dashboard/util/componentTypes';
import { NEW_IKI_MODEL_METRICS_ID } from '../../../dashboard/util/constants';
import DraggableNewComponent from '../../../dashboard/components/gridComponents/new/DraggableNewComponent';

export default function DraggableNewDivider() {
  return (
    <DraggableNewComponent
      id={NEW_IKI_MODEL_METRICS_ID}
      type={IKI_MODEL_METRICS_TYPE}
      label={t('Model Metrics')}
      description="Evaluate the performance of your model"
      className="fa fa-percent"
      demandApp
    />
  );
}
