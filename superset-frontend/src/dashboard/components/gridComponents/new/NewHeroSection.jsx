import React from 'react';
import { t } from '@superset-ui/core';

import { IKI_HEROSECTION_TYPE } from '../../../util/componentTypes';
import { NEW_IKI_HEROSECTION_ID } from '../../../util/constants';
import DraggableNewComponent from './DraggableNewComponent';

export default function DraggableNewDivider() {
  return (
    <DraggableNewComponent
      id={NEW_IKI_HEROSECTION_ID}
      type={IKI_HEROSECTION_TYPE}
      label={t('Hero Section')}
      className="fa fa-eye"
    />
  );
}