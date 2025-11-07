import React from 'react';
import { t } from '@superset-ui/core';

import { IKI_DEEPCAST_TYPE } from '../../../dashboard/util/componentTypes';
import { NEW_IKI_DEEPCAST_ID } from '../../../dashboard/util/constants';
import DraggableNewComponent from '../../../dashboard/components/gridComponents/new/DraggableNewComponent';

export default function DraggableNewDivider() {
  return (
    <DraggableNewComponent
      id={NEW_IKI_DEEPCAST_ID}
      type={IKI_DEEPCAST_TYPE}
      label={t('aiCast')}
      description="aiCast model component"
      className="fa fa-line-chart"
    />
  );
}
