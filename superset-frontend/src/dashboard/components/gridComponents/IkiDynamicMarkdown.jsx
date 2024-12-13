/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
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
import getFiltersList from './util/getFiltersList';
import { CustomHtmlContainer } from '@ikigailabs/custom-html';
import { useFilters } from '../nativeFilters/FilterBar/state';
import { getSelectExtraFormData } from '../../../filters/utils';
import { updateDataMask } from 'src/dataMask/actions';

/*
Old Iframe src URL format: 
https://app.ikigailabs.io/widget/custom?mode=preview&parent=superset&project_id=2fxRM6opPY66x8oLTJjDCcG1UEX&component_id=a_2gmSZ2S9RjvCXCHb8TJjzyRWW9p&dashboard_mode=preview&scid=IKI_DYNAMIC_MARKDOWN-UVJlTB4GU0
*/

const propTypes = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
  component: componentShape.isRequired,
  parentComponent: componentShape.isRequired,
  index: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired,
  editMode: PropTypes.bool.isRequired,
  ikigaiOrigin: PropTypes.string,
  dashboardLayout: PropTypes.object,
  charts: PropTypes.object,
  datasources: PropTypes.object,

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

const timestamp = new Date().getTime().toString();

const defaultProps = {};

const MARKDOWN_ERROR_MESSAGE = t('This component has an error.');

class IkiDynamicMarkdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      markdownSource: props.component.meta.code,
      editor: null,
      editorMode: 'preview',
      undoLength: props.undoLength,
      redoLength: props.redoLength,
      projectId: '',
      dashboardId: null,
      innerDragging: false,
      customMarkdownId: '',
      customMarkdownIsReady: false, // if data from parent window is received (project_id, etc)
      componentSetupData: null,
      supersetFilters: null,
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
    this.setState({
      dashboardId: parseInt(
        window.location.pathname.split('/dashboard/')[1].split('/')[0],
        10,
      ),
    });
    this.props.logEvent(LOG_ACTIONS_RENDER_CHART, {
      viz_type: 'markdown',
      start_offset: this.renderStartTime,
      ts: new Date().getTime(),
      duration: Logger.getTimestamp() - this.renderStartTime,
    });
    // console.log('markdownSource', this.state.markdownSource);
    // console.log('props', this.props);
    this.handleIncomingWindowMsg();
    this.retrieveDataFromParentWindow();
    this.handleBackwardCompatibility();
  }

  static getDerivedStateFromProps(nextProps, state) {
    const { filters, charts, datasources, dashboardLayout } = nextProps;
    if (filters && charts && datasources && dashboardLayout) {
      const supersetFilters = getFiltersList(
        nextProps?.filters,
        charts,
        datasources,
        dashboardLayout?.present,
      );
      // console.log('supersetFilters!!!', supersetFilters);
      return {
        ...state,
        supersetFilters: supersetFilters,
      };
    }
    const { hasError, editorMode, markdownSource, undoLength, redoLength } =
      state;
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
    if (this.props.editMode && this.props.editMode !== prevProps.editMode) {
      setTimeout(() => {
        this.handleChangeEditorMode('edit');
      }, 500);
    } else if (
      !this.props.editMode &&
      this.props.editMode !== prevProps.editMode
    ) {
      setTimeout(() => {
        this.handleChangeEditorMode('preview');
      }, 500);
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

  retrieveDataFromParentWindow() {
    const crossWindowMessage = {
      info: 'superset-to-top-window/get-data',
      data: '',
      dataType: 'string',
    };
    const crossBrowserInfoString = JSON.stringify(crossWindowMessage);
    /* console.log(
      'crossBrowserInfoString',
      crossBrowserInfoString,
      this.props.ikigaiOrigin,
    ); */
    window?.top?.postMessage(crossBrowserInfoString, this.props.ikigaiOrigin);
  }

  /**
   * Check if customMarkdownId state value is set. If yes - it is new custom-html npm, if no - it is old iframe version
   */
  handleBackwardCompatibility() {
    if (!this.state.customMarkdownId) {
      const { markdownSource, hasError } = this.state;
      const { ikigaiOrigin, editMode } = this.props;
      let iframe = '';
      let iframeSrc = '';
      if (ikigaiOrigin) {
        if (markdownSource) {
          const iframeWrapper = document.createElement('div');
          iframeWrapper.innerHTML = markdownSource;
          const iframeFound = iframeWrapper.getElementsByTagName('iframe');
          // console.log('iframeFound', iframeFound, iframeWrapper);
          if (iframeFound && iframeFound.length > 0) {
            const iframeHtml = iframeWrapper.firstChild;
            const iframeSrcUrl = new URL(iframeHtml.src);
            const custom_markdown_id =
              iframeSrcUrl.searchParams.get('component_id');
            if (custom_markdown_id) {
              this.setState({
                customMarkdownId: custom_markdown_id,
              });
            }
          } else {
            this.getCustomHtmlIdFromMarkdownSource();
          }
        }
      }
    }
  }

  /**
   * Grab custom markdown id from span html element saved in state variable markdownSource (on custom markdown selection event)
   */
  getCustomHtmlIdFromMarkdownSource() {
    const { markdownSource } = this.state;
    let customMarkdownIdFromSource = '';
    if (markdownSource) {
      const iframeWrapper = document.createElement('div');
      iframeWrapper.innerHTML = markdownSource;
      const spanFound = iframeWrapper.querySelector(
        `#custom-markdown-span-${this.props.component.id}`,
      );
      // console.log('spanFound', spanFound, iframeWrapper);
      if (spanFound) {
        const customMarkdownId = spanFound.dataset.customhtmlid;
        // console.log('customMarkdownId', customMarkdownId);
        customMarkdownIdFromSource = customMarkdownId;
      }
    }
    return customMarkdownIdFromSource;
  }

  // eslint-disable-next-line class-methods-use-this
  handleIncomingWindowMsg() {
    window.addEventListener('message', event => {
      // console.log('event.origin', event.origin, this.props.ikigaiOrigin);
      if (event.origin === this.props.ikigaiOrigin) {
        const messageObject = JSON.parse(event.data);
        // console.log('messageObject', messageObject);
        if (messageObject.info && messageObject.dataType) {
          const { dataType } = messageObject;
          let messageData;
          let widgetUrl;
          let widgetUrlQuery;

          if (dataType === 'object') {
            messageData = JSON.parse(messageObject.data);
          } else {
            messageData = messageObject.data;
          }

          if (messageObject.info === 'top-window-to-superset/sending-data') {
            /* console.log(
              'top-window-to-superset/sending-data',
              'messageData',
              messageData,
            ); */
            if (!this.state.customMarkdownIsReady) {
              this.setState({
                customMarkdownIsReady: true,
                componentSetupData: messageData,
              });
            }
          }
        }
      }
    });
  }

  handleUpdateSource(nextValue, saveToDashboard) {
    this.setState(
      {
        markdownSource: nextValue,
      },
      () => {
        const { updateComponents, component } = this.props;
        if (saveToDashboard) {
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
      },
    );
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

    this.setState(nextState);
    /* let widgetUrl;
    const widgetUrlQuery = new URLSearchParams(widgetUrl.search);
    // widgetUrlQuery.set('mode', mode);
    widgetUrl.search = widgetUrlQuery.toString();
    const tempIframe = `<iframe
                      id="ikidynamicmarkdown-widget-${this.props.component.id}"
                      name="dynamic-markdown-${timestamp}"
                      src="${widgetUrl}"
                      title="Custom Component"
                      style="min-height: 100%;"
                    />`;
    this.handleIkiRunPipelineChange(tempIframe, true); */
  }

  updateMarkdownContent() {
    const { updateComponents, component } = this.props;
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
    this.setState({
      markdownSource: nextValue,
    });
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

  renderIframe() {
    const {
      markdownSource,
      hasError,
      //customMarkdownId,
      customMarkdownIsReady,
      componentSetupData,
      editorMode,
      supersetFilters,
    } = this.state;
    // console.log('supersetFilters', supersetFilters);
    const { ikigaiOrigin, editMode, charts } = this.props;
    const customMarkdownId = this.getCustomHtmlIdFromMarkdownSource();

    return (
      <>
        {customMarkdownIsReady ? (
          <>
            <CustomHtmlContainer
              appId={componentSetupData?.appId}
              componentId={customMarkdownId}
              mode={editMode ? 'edit' : 'preview'}
              parent={'superset'}
              urlRoot={ikigaiOrigin}
              apiBaseUrl={componentSetupData?.apiBaseUrl}
              supersetUrl={''}
              userEmail={componentSetupData?.userEmail}
              token={componentSetupData?.token}
              supersetFilters={supersetFilters}
              supersetCharts={charts}
              onDrag={dragging => this.onDraggingInsideCustomHtml(dragging)}
              onSelectCustomMarkdown={custom_markdown_id =>
                this.onSelectCustomMarkdown(custom_markdown_id)
              }
              onSupersetDataFilter={(
                filterName,
                columnName,
                filterValue,
                filterType,
              ) =>
                this.onDataFilter(
                  filterName,
                  columnName,
                  filterValue,
                  filterType,
                )
              }
              onReloadCharts={chart_ids => this.onReloadCharts(chart_ids)}
            />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }

  onDataFilter(filterName, columnName, filterValue, filterType) {
    console.log('onDataFilter', filterName, columnName, filterValue);
    this.props?.updateFilter(filterName, '-', filterValue, filterType);
  }

  onReloadCharts(chartIds) {
    console.log('onReloadCharts', chartIds);
    this.refreshCharts(chartIds);
  }

  onSelectCustomMarkdown(custom_markdown_id) {
    // console.log('onSelectCustomMarkdown', custom_markdown_id);
    if (custom_markdown_id) {
      this.setState(
        {
          customMarkdownId: custom_markdown_id,
        },
        () => {
          const markdownSource = `<span id='custom-markdown-span-${this.props.component.id}' data-customhtmlid='${custom_markdown_id}' />`;
          this.handleUpdateSource(markdownSource, true);
        },
      );
    }
  }

  onDraggingInsideCustomHtml(dragging) {
    // console.log('onDraggingInsideCustomHtml', dragging);
    this.setState({
      innerDragging: dragging,
    });
  }

  refreshCharts(charts) {
    console.log('refreshCharts', charts);
    if (charts) {
      charts.forEach(chartId => {
        this.refreshChart(chartId, this.state.dashboardId, false);
      });
    }
  }

  refreshChart(chartId, dashboardId, isCached) {
    console.log('refreshChart', chartId, dashboardId);
    this.props.logEvent(LOG_ACTIONS_FORCE_REFRESH_CHART, {
      slice_id: chartId,
      is_cached: isCached,
    });
    return this.props.refreshChart(chartId, true, dashboardId);
  }

  renderEditMode() {
    return this.renderIframe();
  }

  renderPreviewMode() {
    return this.renderIframe();
  }

  render() {
    const { isFocused, editorMode, innerDragging } = this.state;
    const isEditing = editorMode === 'edit';

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

    console.log('editorMode state', editorMode, 'editMode props', editMode);

    // inherit the size of parent columns
    const widthMultiple =
      parentComponent.type === COLUMN_TYPE
        ? parentComponent.meta.width || GRID_MIN_COLUMN_COUNT
        : component.meta.width || GRID_MIN_COLUMN_COUNT;

    return (
      <>
        {editMode ? (
          <DragDroppable
            component={component}
            parentComponent={parentComponent}
            orientation={parentComponent.type === ROW_TYPE ? 'column' : 'row'}
            index={index}
            depth={depth}
            onDrop={handleComponentDrop}
            //disableDragDrop={isFocused}
            disableDragDrop={innerDragging || isFocused}
            //disableDragDrop={true}
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
                  <DeleteComponentButton
                    onDelete={this.handleDeleteComponent}
                  />,
                ]}
                editMode={editMode}
              >
                <div
                  data-test="dashboard-markdown-editor"
                  className={cx(
                    this.state.markdownSource === undefined
                      ? 'dashboard-component-ikirunpipeline'
                      : 'dashboard-component',
                    isEditing && 'dashboard-component--editing',
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
                      className="dashboard-component-inner"
                      data-test="dashboard-component-chart-holder"
                    >
                      {this.renderPreviewMode()}
                    </div>
                  </ResizableContainer>
                </div>
                {dropIndicatorProps && <div {...dropIndicatorProps} />}
              </WithPopoverMenu>
            )}
          </DragDroppable>
        ) : (
          <div className="custom-component-holder">
            {this.renderPreviewMode()}
          </div>
        )}
      </>
    );
  }
}

IkiDynamicMarkdown.propTypes = propTypes;
IkiDynamicMarkdown.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    undoLength: state.dashboardLayout.past.length,
    redoLength: state.dashboardLayout.future.length,
    dashboardLayout: state.dashboardLayout,
    charts: state.charts,
    datasources: state.datasources,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      refreshChart,
    },
    dispatch,
  );
}

const IkiDynamicMarkdownHOC = props => {
  const dispatch = useDispatch();
  const filters = useFilters();
  console.log('filters in hoc hook', filters);

  const updateFilter = (filterName, dataMask, filterValue, filterType) => {
    let value = '';
    if (filterType === 'filter_time') {
      value = filterValue;
    } else if (filterType === 'filter_select') {
      value = Array.isArray(filterValue) ? filterValue : filterValue.split();
    } else {
      value = filterValue;
    }
    console.log(
      'updateFilter',
      filters,
      filterName,
      dataMask,
      filterValue,
      value,
      filterType,
    );
    let findFilter = null;
    Object.keys(filters).forEach(filterId => {
      if (filters[filterId]?.name === filterName) {
        findFilter = filters[filterId];
      }
    });
    if (findFilter) {
      const temp_colName = findFilter?.targets[0]?.column?.name;
      console.log('temp_colName', temp_colName, filterValue);
      let extraFormData = null;
      let filterState = findFilter?.defaultDataMask?.filterState;
      if (filterType === 'filter_time') {
        extraFormData = {
          time_range: filterValue,
        };
        filterState = {
          value: filterValue,
        };
      } else {
        extraFormData = getSelectExtraFormData(temp_colName, value);
        filterState = {
          ...filterState,
          label: value.toString(),
          /* label: values?.length
          ? `${(values || [])
              .map(value => labelFormatter(value, datatype))
              .join(', ')}${suffix}`
          : undefined,*/
          value: value,
        };
      }
      console.log('filterState', filterState, extraFormData);
      console.log('findFilter', findFilter);

      // dispatch(updateDataMask(filter.id, dataMask));

      const filterDataMask = {
        extraFormData: { ...extraFormData },
        filterState: { ...filterState },
      };
      console.log('filterDataMask', filterDataMask);
      dispatch(updateDataMask(findFilter?.id, filterDataMask));
    }
  };

  return (
    <IkiDynamicMarkdown
      {...props}
      filters={filters}
      updateFilter={updateFilter}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IkiDynamicMarkdownHOC);
