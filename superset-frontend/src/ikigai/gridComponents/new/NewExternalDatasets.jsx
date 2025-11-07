import React from 'react';
import { t } from '@superset-ui/core';

import { IKI_EXTERNAL_DATASETS_TYPE } from '../../../dashboard/util/componentTypes';
import { NEW_IKI_EXTERNAL_DATASETS_ID } from '../../../dashboard/util/constants';
import DraggableNewComponent from '../../../dashboard/components/gridComponents/new/DraggableNewComponent';

export default function DraggableNewDivider() {
  return (
    <DraggableNewComponent
      id={NEW_IKI_EXTERNAL_DATASETS_ID}
      type={IKI_EXTERNAL_DATASETS_TYPE}
      label={t('External Datasets')}
      description="Add datasets to improve your forecast"
      className="fa fa-file-o"
      demandApp
    />
  );
}
