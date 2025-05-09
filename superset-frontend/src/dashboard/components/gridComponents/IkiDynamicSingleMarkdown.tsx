/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { SafeMarkdown } from '@superset-ui/core';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ContextService } from 'src/service/context-service/context-service';
import DeleteComponentButton from 'src/dashboard/components/DeleteComponentButton';
import MarkdownModeDropdown from 'src/dashboard/components/menu/MarkdownModeDropdown';
import WithPopoverMenu from 'src/dashboard/components/menu/WithPopoverMenu';
import ResizableContainer from 'src/dashboard/components/resizable/ResizableContainer';
import {
  GRID_BASE_UNIT,
  GRID_MIN_COLUMN_COUNT,
  GRID_MIN_ROW_UNITS,
} from '../../util/constants';

import { DYNAMIC_MARKDOWN, editorModes, orientations } from '../../constants';
import {
  EditorMode,
  LayoutItem,
  LayoutItemWithCustomMarkdown,
} from '../../types';
import { COLUMN_TYPE, ROW_TYPE } from '../../util/componentTypes';
import DragDroppable from '../dnd/DragDroppable';

const timestamp = new Date().getTime().toString();

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

const { projectId, topLevelOrigin } = ContextService;

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
  const [isFocused, setIsFocused] = useState(false);
  const [editorMode, setEditorMode] = useState<EditorMode>(editorModes.PREVIEW);

  const {
    meta: {
      customMarkdown: { custom_markdown_id: customMarkdownId },
    },
  } = component;

  const widthMultiple =
    parentComponent.type === COLUMN_TYPE
      ? parentComponent.meta.width || GRID_MIN_COLUMN_COUNT
      : component.meta.width || GRID_MIN_COLUMN_COUNT;

  const orientation =
    parentComponent.type === ROW_TYPE ? orientations.COLUMN : orientations.ROW;

  useEffect(() => {
    ContextService.sendDashboardLayout();
  }, []);

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

  function CustomComponentIframe() {
    const url = new URL('/widget/custom', topLevelOrigin);

    if (!projectId) throw new Error('project_id query param must be truthy!');

    url.searchParams.set('project_id', projectId);
    url.searchParams.set('mode', 'preview');
    url.searchParams.set('dashboard_mode', 'preview');
    url.searchParams.set('parent', 'superset');
    url.searchParams.set('scid', component.id);
    url.searchParams.set('custom_element_id', customMarkdownId);

    const iframeString = `<iframe
      id="ikidynamicmarkdown-widget-${component.id}"
      name="${DYNAMIC_MARKDOWN}-${timestamp}"
      src="${url.toString()}"
      title="Custom Component"
      style="height:100%;"
    />`;

    return <SafeMarkdown source={iframeString} />;
  }

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
              'dashboard-component-ikirunpipeline',
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
                <CustomComponentIframe />
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
