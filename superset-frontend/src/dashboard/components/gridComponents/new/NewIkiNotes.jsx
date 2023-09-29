import React from 'react';
import { t } from '@superset-ui/core';

import { IKI_NOTES_TYPE } from '../../../util/componentTypes';
import { NEW_IKI_NOTES_ID } from '../../../util/constants';
import DraggableNewComponent from './DraggableNewComponent';

export default function DraggableNewDivider() {
  return (
    <DraggableNewComponent
      id={NEW_IKI_NOTES_ID}
      type={IKI_NOTES_TYPE}
      label={t('Notes')}
      className="fa fa-list"
    />
  );
}