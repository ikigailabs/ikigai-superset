/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ContextService } from 'src/ikigai/service/context-service/context-service';
import DeleteComponentButton from 'src/dashboard/components/DeleteComponentButton';
import MarkdownModeDropdown from 'src/dashboard/components/menu/MarkdownModeDropdown';
import WithPopoverMenu from 'src/dashboard/components/menu/WithPopoverMenu';
import ResizableContainer from 'src/dashboard/components/resizable/ResizableContainer';
import {
  GRID_BASE_UNIT,
  GRID_MIN_COLUMN_COUNT,
  GRID_MIN_ROW_UNITS,
} from '../../dashboard/util/constants';

import { editorModes, orientations } from '../../dashboard/constants';
import {
  EditorMode,
  LayoutItem,
  LayoutItemWithCustomMarkdown,
} from '../../dashboard/types';
import { COLUMN_TYPE, ROW_TYPE } from '../../dashboard/util/componentTypes';
import DragDroppable from '../../dashboard/components/dnd/DragDroppable';
import { IkiDynamicMarkdownIframe } from './IkiDynamicMarkdownIframe';

type PropTypes = {
  id: string;
  parentId: string;
  component: LayoutItemWithCustomMarkdown;
  parentComponent: LayoutItem;
  index: number;
  depth: number;
  editMode: boolean;

  // from redux
  logEvent: (eventName: string, payload?: Record<string, any>) => void;
  addDangerToast: (message: string) => void;
  undoLength: number;
  redoLength: number;

  // grid related
  availableColumnCount: number;
  columnWidth: number;
  onResizeStart: (event: any) => void;
  onResize: (widthMultiple: number, heightMultiple: number) => void;
  onResizeStop: () => void;

  // dnd
  deleteComponent: (id: string, parentId: string) => void;
  handleComponentDrop: (dropResult: any) => void;
  updateComponents: (nextComponents: Record<string, any>) => void;
};

const IkiDynamicSingleMarkdown = ({
  id,
  parentId,
  index,
  component,
  parentComponent,
  depth,
  editMode,
  columnWidth,
  availableColumnCount,
  handleComponentDrop,
  deleteComponent,
  onResize,
  onResizeStart,
  onResizeStop,
}: PropTypes) => {
  const { customMarkdown } = component.meta;
  const { custom_markdown_id } = customMarkdown;

  const [aliasId, setAliasId] = useState<string | null>(null);

  const [isFocused, setIsFocused] = useState(false);

  const [editorMode, setEditorMode] = useState<EditorMode>(
    editMode ? editorModes.EDIT : editorModes.PREVIEW,
  );

  const widthMultiple =
    parentComponent.type === COLUMN_TYPE
      ? parentComponent.meta.width || GRID_MIN_COLUMN_COUNT
      : component.meta.width || GRID_MIN_COLUMN_COUNT;

  const orientation =
    parentComponent.type === ROW_TYPE ? orientations.COLUMN : orientations.ROW;

  useEffect(() => {
    ContextService.sendDashboardLayout();
    ContextService.requestCustomElementAliasId(
      component.id, // supersetComponentId
      custom_markdown_id,
    );
  }, []);

  useEffect(() => {
    ContextService.sendEditMode(editMode);
    setEditorMode(editMode ? editorModes.EDIT : editorModes.PREVIEW);
  }, [editMode]);

  useEffect(() => {
    if (!component.meta.customElementId) return;
    setAliasId(component.meta.customElementId);
  }, [component.meta]);

  function handleChangeEditorMode(newEditorMode: EditorMode) {
    setEditorMode(newEditorMode);
  }

  function handleChangeFocus(isFocused: boolean) {
    setIsFocused(isFocused);
    handleChangeEditorMode(isFocused ? editorModes.EDIT : editorModes.PREVIEW);
  }

  function handleDeleteComponent() {
    deleteComponent(id, parentId);
  }

  if (!aliasId) return null;

  return (
    <DragDroppable
      index={index}
      depth={depth}
      editMode={editMode}
      component={component}
      parentComponent={parentComponent}
      disableDragDrop={isFocused}
      orientation={orientation}
      onDrop={handleComponentDrop}
    >
      {({ dropIndicatorProps, dragSourceRef }) => (
        <WithPopoverMenu
          onChangeFocus={handleChangeFocus}
          editMode={editMode}
          menuItems={[
            <MarkdownModeDropdown
              id={`${component.id}-mode`}
              value={editorMode}
              onChange={handleChangeEditorMode}
            />,
            <DeleteComponentButton onDelete={handleDeleteComponent} />,
          ]}
        >
          <div
            id={component.id}
            data-test="dashboard-markdown-editor"
            className={cx(
              editorMode === editorModes.EDIT && 'dashboard-component--editing',
            )}
          >
            <ResizableContainer
              id={component.id}
              adjustableWidth={parentComponent.type === ROW_TYPE}
              adjustableHeight
              widthStep={columnWidth}
              widthMultiple={widthMultiple}
              heightStep={GRID_BASE_UNIT}
              heightMultiple={component.meta.height}
              minWidthMultiple={GRID_MIN_COLUMN_COUNT}
              minHeightMultiple={GRID_MIN_ROW_UNITS}
              maxWidthMultiple={availableColumnCount + widthMultiple}
              onResizeStart={onResizeStart}
              onResize={onResize}
              onResizeStop={onResizeStop}
              editMode={editMode}
            >
              <div
                ref={dragSourceRef}
                className="dashboard-component-inner"
                data-test="dashboard-component-chart-holder"
              >
                <IkiDynamicMarkdownIframe
                  component={component}
                  customElementId={aliasId || ''}
                  editMode={editorMode === editorModes.EDIT}
                />
              </div>
            </ResizableContainer>
          </div>
          {dropIndicatorProps && <div {...dropIndicatorProps} />}
        </WithPopoverMenu>
      )}
    </DragDroppable>
  );
};

export default IkiDynamicSingleMarkdown;
