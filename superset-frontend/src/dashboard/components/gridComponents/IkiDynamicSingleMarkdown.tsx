import React, {
  ComponentType,
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';

import { t, SafeMarkdown } from '@superset-ui/core';
import {
  Logger,
  LOG_ACTIONS_RENDER_CHART,
  LOG_ACTIONS_FORCE_REFRESH_CHART,
} from 'src/logger/LogUtils';
import { MarkdownEditor } from 'src/components/AsyncAceEditor';

import DeleteComponentButton from 'src/dashboard/components/DeleteComponentButton';
import DragDroppable from 'src/dashboard/components/dnd/DragDroppable';
import ResizableContainer from 'src/dashboard/components/resizable/ResizableContainer';
import MarkdownModeDropdown from 'src/dashboard/components/menu/MarkdownModeDropdown';
import WithPopoverMenu from 'src/dashboard/components/menu/WithPopoverMenu';
import { componentShape } from 'src/dashboard/util/propShapes';
import { ROW_TYPE, COLUMN_TYPE } from 'src/dashboard/util/componentTypes';
import {
  GRID_MIN_COLUMN_COUNT,
  GRID_MIN_ROW_UNITS,
  GRID_BASE_UNIT,
} from 'src/dashboard/util/constants';
import { refreshChart } from 'src/components/Chart/chartAction';
import { isEqual } from 'lodash';
import { CustomMarkdown } from '../BuilderComponentPane/builderComponentTypes';
import {
  DashboardLayout,
  EditorMode,
  LayoutItem,
  Orientation,
} from 'src/dashboard/types';
import { editorModes, orientations } from 'src/dashboard/constants';

const timestamp = new Date().getTime().toString();

type LayoutItemWithCustomMarkdown = LayoutItem & {
  meta: LayoutItem['meta'] & {
    customMarkdown: CustomMarkdown;
  };
};

type PropTypes = {
  id: string;
  parentId: string;
  component: LayoutItemWithCustomMarkdown;
  parentComponent: LayoutItem;
  index: number;
  depth: number;
  editMode: boolean;
  ikigaiOrigin?: string;
  dashboardLayout?: DashboardLayout;

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

export type DragDroppableProps = {
  children: (args: {
    dropIndicatorProps?: any;
    dragSourceRef: (instance: HTMLDivElement | null) => void;
  }) => ReactNode;
  className?: string;
  component: LayoutItemWithCustomMarkdown;
  parentComponent?: LayoutItem;
  depth: number;
  disableDragDrop?: boolean;
  orientation?: Orientation;
  index: number;
  style?: CSSProperties;
  onDrop?: (dropResult: any) => void;
  editMode: boolean;
  useEmptyDragPreview?: boolean;

  // from react-dnd
  isDragging: boolean;
  isDraggingOver: boolean;
  isDraggingOverShallow: boolean;
  droppableRef: (instance: HTMLDivElement | null) => void;
  dragSourceRef: (instance: HTMLDivElement | null) => void;
  dragPreviewRef: (instance: HTMLDivElement | null) => void;
};

const TypedDragDroppable: FC<Partial<DragDroppableProps>> = props => (
  <DragDroppable {...(props as DragDroppableProps)} />
);

const IkiDynamicSingleMarkdown = (props: PropTypes) => {
  const {
    id,
    parentId,
    index,
    component,
    parentComponent,
    depth,
    editMode,
    columnWidth,
    availableColumnCount,
    ikigaiOrigin,

    handleComponentDrop,
    deleteComponent,
    onResize,
    onResizeStart,
    onResizeStop,
  } = props;

  const {
    meta: {
      customMarkdown: {
        custom_markdown_id: customMarkdownId,
        project_id: projectId,
      },
    },
  } = component;

  const widthMultiple =
    parentComponent.type === COLUMN_TYPE
      ? parentComponent.meta.width || GRID_MIN_COLUMN_COUNT
      : component.meta.width || GRID_MIN_COLUMN_COUNT;

  const [isFocused, setIsFocused] = useState(false);
  const [editorMode, setEditorMode] = useState<EditorMode>(editorModes.PREVIEW);

  function handleChangeEditorMode(newEditorMode: EditorMode) {
    setEditorMode(newEditorMode);

    // TODO
    // let widgetUrl;
    // const widgetUrlQuery = new URLSearchParams(widgetUrl.search);
    // // widgetUrlQuery.set('mode', mode);
    // widgetUrl.search = widgetUrlQuery.toString();
    // const tempIframe = `<iframe
    //                   id="ikidynamicmarkdown-widget-${this.props.component.id}"
    //                   name="dynamic-markdown-${timestamp}"
    //                   src="${widgetUrl}"
    //                   title="Custom Component"
    //                   style="min-height: 100%;"
    //                 />`;
    // this.handleIkiRunPipelineChange(tempIframe, true);
  }

  function handleChangeFocus(isFocused: boolean) {
    setIsFocused(isFocused);
    handleChangeEditorMode(isFocused ? 'edit' : 'preview');
  }

  function handleDeleteComponent() {
    deleteComponent(id, parentId);
  }

  function CustomComponentIframe() {
    if (!ikigaiOrigin) return null;

    const url = new URL('/widget/custom', ikigaiOrigin);

    url.searchParams.set('project_id', projectId);
    url.searchParams.set('mode', 'preview');
    url.searchParams.set('dashboard_mode', 'preview');
    url.searchParams.set('parent', 'superset');
    url.searchParams.set('scid', component.id);
    url.searchParams.set('custom_element_id', customMarkdownId);

    const iframeString = `<iframe
      id="ikidynamicmarkdown-widget-${component.id}"
      name="dynamic-markdown-${timestamp}"
      src="${url.toString()}"
      title="Custom Component"
      style="height:100%;"
    />`;

    return <SafeMarkdown source={iframeString} />;
  }

  return (
    <TypedDragDroppable
      component={component}
      parentComponent={parentComponent}
      orientation={
        parentComponent.type === ROW_TYPE
          ? orientations.COLUMN
          : orientations.ROW
      }
      index={index}
      depth={depth}
      onDrop={handleComponentDrop}
      disableDragDrop={isFocused}
      editMode={editMode}
    >
      {({ dropIndicatorProps, dragSourceRef }) => (
        <WithPopoverMenu
          onChangeFocus={handleChangeFocus}
          menuItems={[
            <MarkdownModeDropdown
              id="id"
              value="preview"
              onChange={handleChangeEditorMode}
            />,
            <DeleteComponentButton onDelete={handleDeleteComponent} />,
          ]}
          editMode={editMode}
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
              adjustableWidth
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
    </TypedDragDroppable>
  );
};

export default IkiDynamicSingleMarkdown;
