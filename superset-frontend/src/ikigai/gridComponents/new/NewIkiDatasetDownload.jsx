import React from 'react';
import { t } from '@superset-ui/core';

import { IKI_DATASET_DOWNLOAD_TYPE } from '../../../dashboard/util/componentTypes';
import { NEW_IKI_DATASET_DOWNLOAD_ID } from '../../../dashboard/util/constants';
import DraggableNewComponent from '../../../dashboard/components/gridComponents/new/DraggableNewComponent';

export default function DraggableNewDivider() {
  return (
    <DraggableNewComponent
      id={NEW_IKI_DATASET_DOWNLOAD_ID}
      type={IKI_DATASET_DOWNLOAD_TYPE}
      label={t('Dataset Download')}
      description={t('Downlaod a Dataset with a single click')}
      className="fa fa-table"
    />
  );
}
