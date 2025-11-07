import React, { useMemo } from 'react';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';
import { IKI_DYNAMIC_SINGLE_MARKDOWN_TYPE } from '../../../util/componentTypes';
import { ContextService } from '../../../../ikigai/service/context-service/context-service';
import NewDynamicSingleMarkdown from '../../../../ikigai/gridComponents/new/NewDynamicSingleMarkdown';

type PropTypes = {
  searchTerm: string;
};

export function CustomMarkdowns({ searchTerm }: PropTypes) {
  const customMarkdowns = useSelector(
    (state: RootState) => state.dashboardState.customMarkdowns,
  );

  const dashboardLayout = useSelector(
    (state: RootState) => state.dashboardLayout,
  );

  const addedCustomMarkdowns = useMemo(
    () =>
      Object.entries(dashboardLayout.present).flatMap(([key, value]) =>
        key.includes(IKI_DYNAMIC_SINGLE_MARKDOWN_TYPE) &&
        value.meta.customMarkdown
          ? [value.meta.customMarkdown.custom_markdown_id]
          : [],
      ),
    [dashboardLayout.present],
  );

  if (!customMarkdowns) return <></>;

  return (
    <>
      {customMarkdowns.map(cm => {
        const isAdded = addedCustomMarkdowns.includes(cm.custom_markdown_id);

        const isVisible = cm.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        return (
          <div
            key={cm.custom_markdown_id}
            className="custom-markdown-container"
            style={{ display: isVisible ? 'block' : 'none' }}
          >
            <NewDynamicSingleMarkdown
              customMarkdown={cm}
              disableDragDrop={isAdded}
            />

            {isAdded && <div className="added-tag">Added</div>}

            <Button
              type="default"
              shape="circle"
              icon={<EditOutlined />}
              className="edit-custom-markdown-button"
              onClick={() => ContextService.editCustomMarkdown(cm)}
            />

            <Button
              type="default"
              shape="circle"
              danger
              icon={<DeleteOutlined />}
              className="delete-custom-markdown-button"
              onClick={() => ContextService.deleteCustomMarkdown(cm)}
            />
          </div>
        );
      })}
    </>
  );
}
