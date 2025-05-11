import React, { useMemo } from 'react';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';
import { IKI_DYNAMIC_SINGLE_MARKDOWN_TYPE } from '../../../util/componentTypes';
import { ContextService } from '../../../../service/context-service/context-service';
import NewDynamicSingleMarkdown from '../../gridComponents/new/components/NewDynamicSingleMarkdown';

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
      {customMarkdowns
        .filter(md => md.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(customMarkdown => {
          const isAdded = addedCustomMarkdowns.includes(
            customMarkdown.custom_markdown_id,
          );

          return (
            <div
              key={customMarkdown.custom_markdown_id}
              className="custom-markdown-container"
            >
              <NewDynamicSingleMarkdown
                customMarkdown={customMarkdown}
                disableDragDrop={isAdded}
              />

              {isAdded && <div className="added-tag">Added</div>}

              <Button
                type="default"
                shape="circle"
                icon={<EditOutlined />}
                className="edit-custom-markdown-button"
                onClick={() =>
                  ContextService.editCustomMarkdown(customMarkdown)
                }
              />

              <Button
                type="default"
                shape="circle"
                danger
                icon={<DeleteOutlined />}
                className="delete-custom-markdown-button"
                onClick={() =>
                  ContextService.deleteCustomMarkdown(customMarkdown)
                }
              />
            </div>
          );
        })}
    </>
  );
}
