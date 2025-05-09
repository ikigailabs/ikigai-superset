/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeMarkdown } from '@superset-ui/core';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refreshChart } from 'src/components/Chart/chartAction';
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
  IpcMessage,
  LayoutItem,
  LayoutItemWithCustomMarkdown,
  RootState,
} from '../../types';
import { COLUMN_TYPE, ROW_TYPE } from '../../util/componentTypes';
import DragDroppable from '../dnd/DragDroppable';
import { LOG_ACTIONS_FORCE_REFRESH_CHART } from '../../../logger/LogUtils';
import { logEvent } from '../../../logger/actions';

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

const paths = window.location.pathname.split('/');
const dashboardIndex = paths.indexOf('dashboard');
const supersetDashboardId =
  dashboardIndex !== -1 ? parseInt(paths[dashboardIndex + 1], 10) : null;

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
  const dispatch = useDispatch();

  const dashboardLayout = useSelector(
    (state: RootState) => state.dashboardLayout,
  );

  const ikigaiOrigin = useSelector(
    (state: RootState) => state.dashboardState.ikigaiOrigin,
  );

  const [isFocused, setIsFocused] = useState(false);
  const [editorMode, setEditorMode] = useState<EditorMode>(editorModes.PREVIEW);

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

  const orientation =
    parentComponent.type === ROW_TYPE ? orientations.COLUMN : orientations.ROW;

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== ikigaiOrigin) return;

      const message = event.data as Partial<IpcMessage>;

      switch (message.type) {
        case 'notifyUpdateCharts':
          handleRefreshCharts(message.payload);
          break;

        case 'getDashboardLayout':
          handleSendDashboardLayout(message);
          break;

        default:
          break;
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  function handleRefreshCharts(selectedChartIds: string[]) {
    const layoutElements = dashboardLayout.present;

    // for testing chart refresh since we can't import charts from platform
    // selectedChartIds = [...selectedChartIds, '1179'];

    selectedChartIds.forEach(chartId => {
      Object.keys(layoutElements).forEach(ele => {
        const supChartId = layoutElements[ele].meta?.chartId;

        if (supChartId && String(supChartId) === chartId) {
          logEvent(LOG_ACTIONS_FORCE_REFRESH_CHART, {
            slice_id: chartId,
            is_cached: false,
          });

          dispatch(refreshChart(chartId, true, supersetDashboardId));
        }
      });
    });
  }

  function handleSendDashboardLayout(message: Partial<IpcMessage>) {
    if (!dashboardLayout) return;

    const iframes = document.querySelectorAll('iframe');

    const crossWindowMessage = {
      type: message.type,
      correlationId: message.correlationId,
      payload: dashboardLayout.present,
    };

    iframes.forEach(iframe => {
      if (!iframe.name.includes(DYNAMIC_MARKDOWN)) return;
      if (!iframe.contentWindow) return;
      iframe.contentWindow.postMessage(crossWindowMessage, ikigaiOrigin);
    });
  }

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
    const url = new URL('/widget/custom', ikigaiOrigin);

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
