/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';

import { t, SafeMarkdown } from '@superset-ui/core';
import { Logger, LOG_ACTIONS_RENDER_CHART } from 'src/logger/LogUtils';
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

// const dashURL = 'https://dev-ui.ikigailabs.io';
// const dashURL = 'http://localhost:3000';
const dashURL = document.referrer.substring(0, document.referrer.length - 1);
const iframeEmptyURL = `${dashURL}/widget/dataset/table?mode=edit`;

const propTypes = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
  component: componentShape.isRequired,
  parentComponent: componentShape.isRequired,
  index: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired,
  editMode: PropTypes.bool.isRequired,

  // from redux
  logEvent: PropTypes.func.isRequired,
  addDangerToast: PropTypes.func.isRequired,
  undoLength: PropTypes.number.isRequired,
  redoLength: PropTypes.number.isRequired,

  // grid related
  availableColumnCount: PropTypes.number.isRequired,
  columnWidth: PropTypes.number.isRequired,
  onResizeStart: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired,
  onResizeStop: PropTypes.func.isRequired,

  // dnd
  deleteComponent: PropTypes.func.isRequired,
  handleComponentDrop: PropTypes.func.isRequired,
  updateComponents: PropTypes.func.isRequired,
};

const defaultProps = {};

// let MARKDOWN_PLACE_HOLDER = '';
const MARKDOWN_PLACE_HOLDER = `<iframe
                  id="ikitable-widget"
                  src="${dashURL}/widget/dataset/table?mode=edit"
                  title="IkiTable Component"
                  className="ikitable-widget"
                  style="height:100%;"
                />`;

const MARKDOWN_ERROR_MESSAGE = t('This markdown component has an error.');

class IkiTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      markdownSource: props.component.meta.code,
      editor: null,
      editorMode: 'preview',
      undoLength: props.undoLength,
      redoLength: props.redoLength,
      iframeUrl: '',
      referrerUrl: '',
      projectId: '',
    };
    this.renderStartTime = Logger.getTimestamp();

    this.handleChangeFocus = this.handleChangeFocus.bind(this);
    this.handleChangeEditorMode = this.handleChangeEditorMode.bind(this);
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
    this.handleResizeStart = this.handleResizeStart.bind(this);
    this.setEditor = this.setEditor.bind(this);
  }

  componentDidMount() {
    // console.log('IkiTable componentDidMount', this.props, this.state);
    const { referrer } = document;
    console.log('document.referrer', referrer, dashURL);
    this.props.logEvent(LOG_ACTIONS_RENDER_CHART, {
      viz_type: 'markdown',
      start_offset: this.renderStartTime,
      ts: new Date().getTime(),
      duration: Logger.getTimestamp() - this.renderStartTime,
    });
    // console.log('componentDidMount editMode', this.props.editMode);
    /* const markdownEditor = document.getElementById('markdown-editor');
    const markdownPreview = document.getElementById('markdown-preview');
    console.log(
      'markdownEditor',
      markdownEditor,
      'markdownPreview',
      markdownPreview,
    ); */
    /* const supersetUrlString = window.location.href;
    const supersetUrl = new URL(supersetUrlString);
    const supersetUrlQuery = new URLSearchParams(supersetUrl);
    const supersetUrlQueryTest1 = supersetUrlQuery.get('test1');
    console.log(
      'supersetUrlString',
      supersetUrlString,
      'supersetUrlQueryTest1',
      supersetUrlQueryTest1,
    ); */
    // const { referrer } = document;
    // const referrer = dashURL;
    /* const url =
      window.location !== window.parent.location
        ? document.referrer
        : document.location.href; */
    let iframeSrc = '';
    let widgetUrlString = '';
    if (document.getElementById('ikitable-widget')) {
      widgetUrlString = document.getElementById('ikitable-widget').src;
      // console.log('componentDidMount widgetUrlString', widgetUrlString);
    }
    if (widgetUrlString === '') {
      iframeSrc = iframeEmptyURL;
    } else {
      iframeSrc = widgetUrlString;
    }
    /* const tempIframe = `<iframe
                  id="ikitable-widget"
                  src="${iframeSrc}"
                  title="IkiTable Component"
                  className="ikitable-widget"
                  style="height:100%;"
                />`;
    console.log('componentDidMount tempIframe', tempIframe); */
    // this.handleIkiTableChange(tempIframe);
    // MARKDOWN_PLACE_HOLDER = tempIframe;
    const widgetUrl = new URL(iframeSrc);
    const widgetUrlQuery = new URLSearchParams(widgetUrl.search);
    const widgetUrlQueryProjectId = widgetUrlQuery.get('project_id');
    /* console.log(
      'componentDidMount',
      'widgetUrl',
      widgetUrl,
      'widgetUrlQuery',
      widgetUrlQuery,
      'pId',
      widgetUrlQueryProjectId,
    ); */
    if (!widgetUrlQueryProjectId || widgetUrlQueryProjectId === '') {
      this.handleIncomingWindowMsg();
      window.parent.postMessage('superset-to-parent/get-project-id', dashURL);
    } else {
      this.setState({
        projectId: widgetUrlQueryProjectId,
      });
    }
    /* this.setState(
      {
        iframeUrl: iframeSrc,
        referrerUrl: referrer,
        markdownSource: tempIframe,
      },
      () => {
        this.handleIncomingWindowMsg();
        window.parent.postMessage(
          'superset-to-parent/get-project-id',
          referrer,
        );
      },
    ); */
  }

  static getDerivedStateFromProps(nextProps, state) {
    const {
      hasError,
      editorMode,
      markdownSource,
      undoLength,
      redoLength,
    } = state;
    const {
      component: nextComponent,
      undoLength: nextUndoLength,
      redoLength: nextRedoLength,
    } = nextProps;
    // user click undo or redo ?
    if (nextUndoLength !== undoLength || nextRedoLength !== redoLength) {
      return {
        ...state,
        undoLength: nextUndoLength,
        redoLength: nextRedoLength,
        markdownSource: nextComponent.meta.code,
        hasError: false,
      };
    }
    if (
      !hasError &&
      editorMode === 'preview' &&
      nextComponent.meta.code !== markdownSource
    ) {
      return {
        ...state,
        markdownSource: nextComponent.meta.code,
      };
    }

    return state;
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.editor &&
      (prevProps.component.meta.width !== this.props.component.meta.width ||
        prevProps.columnWidth !== this.props.columnWidth)
    ) {
      this.state.editor.resize(true);
    }
    // pre-load AceEditor when entering edit mode
    if (this.props.editMode) {
      MarkdownEditor.preload();
    }
  }

  componentDidCatch() {
    if (this.state.editor && this.state.editorMode === 'preview') {
      this.props.addDangerToast(
        t(
          'This markdown component has an error. Please revert your recent changes.',
        ),
      );
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleIncomingWindowMsg() {
    const { projectId } = this.state;
    // console.log('handleIncomingWindowMsg superset comp', referrerUrl);
    window.addEventListener('message', event => {
      if (event.origin === dashURL) {
        // console.log('ikitable received 1: ', event.data);
        const messageObject = JSON.parse(event.data);
        /* const infoObject = {
          info: 'superset-to-table/get-project-id',
          data: event.data,
        }; */
        // const infoData = JSON.stringify(infoObject);
        // window.parent.postMessage(infoData, referrerUrl);
        if (
          messageObject.info &&
          messageObject.data &&
          messageObject.dataType
        ) {
          const { dataType } = messageObject;
          let messageData;
          let widgetUrl;
          if (dataType === 'object') {
            messageData = JSON.parse(messageObject.data);
          } else {
            messageData = messageObject.data;
          }
          if (
            messageObject.info === 'top-window-to-superset/sending-project-id'
          ) {
            // console.log('this.state.projectId', projectId);
            if (!projectId || projectId === '') {
              // this.projectId = messageData;
              widgetUrl = `${dashURL}/widget/dataset/table?mode=edit&project_id=${messageData}`;
              // console.log('widgetUrl', widgetUrl);
              this.setState(
                {
                  iframeUrl: widgetUrl,
                  projectId: messageData,
                },
                () => {
                  const tempIframe = `<iframe
                  id="ikitable-widget"
                  src="${widgetUrl}"
                  title="IkiTable Component"
                  className="ikitable-widget"
                  style="height:100%;"
                />`;
                  this.handleIkiTableChange(tempIframe);
                },
              );
              // document.getElementById('ikitable-widget').src = widgetUrl;
            }
          } else if (
            messageObject.info === 'widget-to-superset/sending-datasets-ids'
          ) {
            // console.log('messageData', messageData);
            // widgetUrl = `${referrerUrl}widget/dataset/table?project_id=${messageData}`;
            widgetUrl = document.getElementById('ikitable-widget').src;
            const widgetUrlQuery = new URLSearchParams(widgetUrl);
            const widgetUrlQueryTableType = widgetUrlQuery.get('table_type');
            /* console.log(
              'widgetUrlQuery',
              widgetUrlQuery,
              'widgetUrlQueryTableType',
              widgetUrlQueryTableType,
            ); */
            /* const widgetUrlString =
              document.getElementById('ikitable-widget').src; */
            // const widgetUrl = new URL(widgetUrlString);
            if (!widgetUrlQueryTableType || widgetUrlQueryTableType === '') {
              const tableType = messageData.tableType
                ? messageData.tableType
                : '';
              widgetUrl = `${widgetUrl}&table_type=${tableType}`;
              // console.log('tableType', tableType);
              // widgetUrl.searchParams.set('table_type', tableType);
              if (messageData.datasets) {
                Object.keys(messageData.datasets).forEach(messageDataObject => {
                  /* console.log(
                      'messageDataObject',
                      messageDataObject,
                      'messageDataKey',
                      messageDataKey,
                      'messageData.datasets[messageDataObject]',
                      messageData.datasets[messageDataObject],
                    ); */
                  widgetUrl += `&${messageDataObject}=${messageData.datasets[messageDataObject]}`;
                  /* widgetUrl.searchParams.set(
                      messageDataKey,
                      messageData.datasets[messageDataKey],
                    ); */
                });
              }
              this.setState(
                {
                  iframeUrl: widgetUrl,
                },
                () => {
                  const tempIframe = `<iframe
                  id="ikitable-widget"
                  src="${widgetUrl}"
                  title="IkiTable Component"
                  className="ikitable-widget"
                  style="height:100%;"
                />`;
                  this.handleIkiTableChange(tempIframe);
                },
              );
              // console.log('widgetUrl', widgetUrl);
              // document.getElementById('ikitable-widget').src = widgetUrl;
            }
          }
        }
      }
      // console.log('ikitable received: ', event);
      // can message back using event.source.postMessage(...)
    });
  }

  setEditor(editor) {
    editor.getSession().setUseWrapMode(true);
    this.setState({
      editor,
    });
  }

  handleChangeFocus(nextFocus) {
    const nextFocused = !!nextFocus;
    const nextEditMode = nextFocused ? 'edit' : 'preview';
    this.setState(() => ({ isFocused: nextFocused }));
    this.handleChangeEditorMode(nextEditMode);
  }

  handleChangeEditorMode(mode) {
    const nextState = {
      ...this.state,
      editorMode: mode,
    };
    if (mode === 'preview') {
      this.updateMarkdownContent();
      nextState.hasError = false;
    }

    this.setState(nextState);
  }

  updateMarkdownContent() {
    const { updateComponents, component } = this.props;
    /* console.log(
      'updateMarkdownContent',
      component.meta.code,
      this.state.markdownSource,
    ); */
    if (component.meta.code !== this.state.markdownSource) {
      updateComponents({
        [component.id]: {
          ...component,
          meta: {
            ...component.meta,
            code: this.state.markdownSource,
          },
        },
      });
    }
  }

  handleMarkdownChange(nextValue) {
    // console.log('handleMarkdownChange', nextValue);
    this.setState({
      markdownSource: nextValue,
    });
  }

  handleIkiTableChange(nextValue) {
    // console.log('handleIkiTableChange', nextValue);
    this.setState(
      {
        markdownSource: nextValue,
      },
      () => {
        // this.handleMarkdownChange();
        // this.updateMarkdownContent();
      },
    );
    const { updateComponents, component } = this.props;
    /* console.log(
      'updateMarkdownContent',
      component.meta.code,
      this.state.markdownSource,
    ); */
    if (component.meta.code !== nextValue) {
      updateComponents({
        [component.id]: {
          ...component,
          meta: {
            ...component.meta,
            code: nextValue,
          },
        },
      });
    }
  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  handleResizeStart(e) {
    const { editorMode } = this.state;
    const { editMode, onResizeStart } = this.props;
    const isEditing = editorMode === 'edit';
    onResizeStart(e);
    if (editMode && isEditing) {
      this.updateMarkdownContent();
    }
  }

  renderEditMode() {
    const { hasError, markdownSource } = this.state;
    // console.log('renderEditMode', 'markdownSource', markdownSource);

    return (
      <SafeMarkdown
        source={
          hasError
            ? MARKDOWN_ERROR_MESSAGE
            : markdownSource || MARKDOWN_PLACE_HOLDER
        }
      />
    );
    /* return (
      <MarkdownEditor
        onChange={this.handleMarkdownChange}
        width="100%"
        height="100%"
        showGutter={false}
        editorProps={{ $blockScrolling: true }}
        value={
          // this allows "select all => delete" to give an empty editor
          typeof markdownSource === 'string'
            ? markdownSource
            : MARKDOWN_PLACE_HOLDER
        }
        readOnly={false}
        onLoad={this.setEditor}
        data-test="editor"
      />
    ); */
  }

  renderPreviewMode() {
    const { hasError, markdownSource } = this.state;
    // console.log('renderPreviewMode', 'markdownSource', markdownSource);

    return (
      <SafeMarkdown
        source={
          hasError
            ? MARKDOWN_ERROR_MESSAGE
            : markdownSource || MARKDOWN_PLACE_HOLDER
        }
      />
    );
  }

  render() {
    const { isFocused, editorMode } = this.state;
    // const { isFocused } = this.state;

    const {
      component,
      parentComponent,
      index,
      depth,
      availableColumnCount,
      columnWidth,
      onResize,
      onResizeStop,
      handleComponentDrop,
      editMode,
    } = this.props;

    // inherit the size of parent columns
    const widthMultiple =
      parentComponent.type === COLUMN_TYPE
        ? parentComponent.meta.width || GRID_MIN_COLUMN_COUNT
        : component.meta.width || GRID_MIN_COLUMN_COUNT;

    const isEditing = editorMode === 'edit';
    // const isEditing = false;

    // console.log('editMode', editMode, isEditing, markdownSource);

    return (
      <DragDroppable
        component={component}
        parentComponent={parentComponent}
        orientation={parentComponent.type === ROW_TYPE ? 'column' : 'row'}
        index={index}
        depth={depth}
        onDrop={handleComponentDrop}
        disableDragDrop={isFocused}
        editMode={editMode}
      >
        {({ dropIndicatorProps, dragSourceRef }) => (
          <WithPopoverMenu
            onChangeFocus={this.handleChangeFocus}
            menuItems={[
              <MarkdownModeDropdown
                id={`${component.id}-mode`}
                value={this.state.editorMode}
                onChange={this.handleChangeEditorMode}
              />,
              <DeleteComponentButton onDelete={this.handleDeleteComponent} />,
            ]}
            editMode={editMode}
          >
            <div
              data-test="dashboard-markdown-editor"
              className={cx(
                'dashboard-component-ikitable',
                isEditing && 'dashboard-component-ikitable--editing',
              )}
              id={component.id}
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
                onResizeStart={this.handleResizeStart}
                onResize={onResize}
                onResizeStop={onResizeStop}
                editMode={isFocused ? false : editMode}
              >
                <div
                  ref={dragSourceRef}
                  className="dashboard-component-ikitable dashboard-component-inner"
                  data-test="dashboard-component-chart-holder"
                >
                  {
                    // editMode && isEditing
                    editMode && isEditing
                      ? this.renderEditMode()
                      : this.renderPreviewMode()
                  }
                </div>
              </ResizableContainer>
            </div>
            {dropIndicatorProps && <div {...dropIndicatorProps} />}
          </WithPopoverMenu>
        )}
      </DragDroppable>
    );
  }
}

IkiTable.propTypes = propTypes;
IkiTable.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    undoLength: state.dashboardLayout.past.length,
    redoLength: state.dashboardLayout.future.length,
  };
}
export default connect(mapStateToProps)(IkiTable);
