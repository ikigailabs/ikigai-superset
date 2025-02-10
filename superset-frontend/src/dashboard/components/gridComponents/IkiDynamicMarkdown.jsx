/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import cx from 'classnames';
import moment from 'moment';
import { t, SafeMarkdown } from '@superset-ui/core';
import {
  Logger,
  LOG_ACTIONS_RENDER_CHART,
  LOG_ACTIONS_FORCE_REFRESH_CHART,
} from 'src/logger/LogUtils';
import { MarkdownEditor } from 'src/components/AsyncAceEditor';

import DeleteComponentButton from 'src/dashboard/components/DeleteComponentButton';
import DragDroppable from 'src/dashboard/components/dnd/DragDroppable';
import Modal from 'src/components/Modal';
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
import { CustomHtmlContainer } from '@ikigailabs/custom-html';
import { updateDataMask } from 'src/dataMask/actions';
import Loading from 'src/components/Loading';
import getFiltersList from './util/getFiltersList';
import { useFilters } from '../nativeFilters/FilterBar/state';
import { getSelectExtraFormData } from '../../../filters/utils';

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

const editBtnCss = {
  background: '#f2f3ff',
  border: '1px solid #7822ff',
  borderRadius: '4px',
  outline: 'none',
  fontSize: '14px',
  fontFamily: 'Inter, sans-serif',
  color: '#7822ff',
  fontWeight: 500,
  minHeight: '32px',
  display: 'inline-flex',
  alignItems: 'center',
  margin: '1px',
  padding: '4px 16px',
  borderRadius: '4px',
};

class IkiDynamicMarkdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: true,
      markdownSource: props.component.meta.code,
      editor: null,
      editorMode: 'preview',
      undoLength: props.undoLength,
      redoLength: props.redoLength,
      projectId: '',
      dashboardId: null,
      innerDragging: false,
      customMarkdownId: '',
      customMarkdownName: '',
      customMarkdownIsReady: false, // if data from parent window is received (project_id, etc)
      componentSetupData: null,
      supersetFilters: null,
      modalOpen: false,
    };
    this.renderStartTime = Logger.getTimestamp();

    this.handleChangeFocus = this.handleChangeFocus.bind(this);
    this.handleChangeEditorMode = this.handleChangeEditorMode.bind(this);
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
    this.handleResizeStart = this.handleResizeStart.bind(this);
    this.setEditor = this.setEditor.bind(this);
    this.handleMessagesListener = this.handleMessagesListener.bind(this);
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
    window.addEventListener('message', this.handleMessagesListener);
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
        supersetFilters,
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

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessagesListener);
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
      const { editMode } = this.props;
      const iframe = '';
      const iframeSrc = '';
      console.info(
        'handleBackwardCompatibility',
        this.props.ikigaiOrigin,
        markdownSource,
      );
      if (this.props.ikigaiOrigin) {
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
    let customMarkdownIdFromSource = '',
      customMarkdownNameFromSource = '';
    if (markdownSource) {
      const iframeWrapper = document.createElement('div');
      iframeWrapper.innerHTML = markdownSource;
      const spanFound = iframeWrapper.querySelector(
        `#custom-markdown-span-${this.props.component.id}`,
      );
      // console.log('spanFound', spanFound, iframeWrapper);
      if (spanFound) {
        const customMarkdownId = spanFound.dataset.customhtmlid;
        const customMarkdownName = spanFound.dataset.customhtmlname;
        // console.log('customMarkdownId', customMarkdownId);
        customMarkdownIdFromSource = customMarkdownId;
        customMarkdownNameFromSource = customMarkdownName;
      }
    }

    this.setState({
      customMarkdownId: customMarkdownIdFromSource,
      customMarkdownName: customMarkdownNameFromSource,
    });

    // return {
    //   id: customMarkdownIdFromSource,
    //   name: customMarkdownNameFromSource,
    // };
  }

  // eslint-disable-next-line class-methods-use-this
  handleMessagesListener(event) {
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
          if (!this.state?.customMarkdownIsReady) {
            this.setState({
              customMarkdownIsReady: true,
              componentSetupData: messageData,
            });
          }
        }
      }
    }
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

  onDataFilter(filterName, columnName, filterValue, filterType) {
    console.log('onDataFilter', filterName, columnName, filterValue);
    this.props?.updateFilter(filterName, '-', filterValue, filterType);
  }

  onReloadCharts(chartIds) {
    console.log('onReloadCharts', chartIds);
    this.refreshCharts(chartIds);
  }

  onSelectCustomMarkdown(custom_markdown_id, name) {
    console.log('onSelectCustomMarkdown', custom_markdown_id, name);
    if (custom_markdown_id) {
      this.setState(
        {
          customMarkdownId: custom_markdown_id,
        },
        () => {
          const markdownSource = `<span id='custom-markdown-span-${this.props.component.id}' data-customhtmlid='${custom_markdown_id}' data-customhtmlname='${name}' />`;
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
    const {
      markdownSource,
      hasError,
      customMarkdownId,
      customMarkdownName,
      customMarkdownIsReady,
      componentSetupData,
      editorMode,
      supersetFilters,
      modalOpen,
    } = this.state;
    console.log(
      'customMarkdownIsReady',
      customMarkdownIsReady,
      componentSetupData,
    );
    const { editMode, charts, ikigaiOrigin } = this.props;

    return (
      <>
        <button
          style={editBtnCss}
          onClick={() =>
            this.setState({
              modalOpen: true,
            })
          }
        >
          <i className="fa fa-cogs" style={{ marginRight: '11px' }} />
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontWeight: '400',
                opacity: customMarkdownName ? '0.8' : '1',
              }}
            >
              Custom Component
            </div>
            {customMarkdownName && (
              <div
                style={{
                  fontWeight: '600',
                  fontSize: '12px',
                  marginTop: '-2px',
                }}
              >
                {customMarkdownName}
              </div>
            )}
          </div>
        </button>
        <Modal
          // css={{ width: '90%' }}
          show={modalOpen}
          onHide={() =>
            this.setState({
              modalOpen: false,
            })
          }
          title={<div style={{ fontWeight: 600 }}>Custom Component Editor</div>}
          footer={null}
          hideFooter={true}
          responsive
          resizable
          resizableConfig={{
            minHeight: '480px',
            minWidth: '80%',
            defaultSize: {
              width: '90%',
              height: '90vh',
            },
          }}
          draggable={false}
          destroyOnClose
          maskClosable={false}
          maxWidth="90%"
          minHeight="90%"
        >
          {customMarkdownIsReady ? (
            <div
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <CustomHtmlContainer
                appId={componentSetupData?.appId}
                componentId={customMarkdownId}
                mode={editMode ? 'edit' : 'preview'}
                parent="superset"
                urlRoot={ikigaiOrigin}
                apiBaseUrl={componentSetupData?.apiBaseUrl}
                supersetUrl=""
                userEmail={componentSetupData?.userEmail}
                token={componentSetupData?.token}
                supersetFilters={supersetFilters}
                supersetCharts={charts}
                onDrag={dragging => this.onDraggingInsideCustomHtml(dragging)}
                onSelectCustomMarkdown={(custom_markdown_id, name) =>
                  this.onSelectCustomMarkdown(custom_markdown_id, name)
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
            </div>
          ) : (
            <div style={{ minHeight: '120px', minWidth: '120px' }}>
              <Loading />
              <span>Loading...</span>
            </div>
          )}
        </Modal>
      </>
    );
  }

  renderPreviewMode() {
    const {
      markdownSource,
      hasError,
      customMarkdownId,
      customMarkdownName,
      customMarkdownIsReady,
      componentSetupData,
      editorMode,
      supersetFilters,
    } = this.state;
    console.log(
      'customMarkdownIsReady',
      customMarkdownIsReady,
      componentSetupData,
    );
    const { editMode, charts, ikigaiOrigin } = this.props;
    return (
      <>
        {customMarkdownIsReady ? (
          <>
            <CustomHtmlContainer
              appId={componentSetupData?.appId}
              componentId={customMarkdownId}
              mode={editMode ? 'edit' : 'preview'}
              parent="superset"
              urlRoot={ikigaiOrigin}
              apiBaseUrl={componentSetupData?.apiBaseUrl}
              supersetUrl=""
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
          <div style={{ minHeight: '120px', minWidth: '120px' }}>
            <Loading />
            <span>Loading...</span>
          </div>
        )}
      </>
    );
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

    // console.log('editorMode state', editorMode, 'editMode props', editMode);

    // inherit the size of parent columns
    const widthMultiple =
      parentComponent.type === COLUMN_TYPE
        ? parentComponent.meta.width || GRID_MIN_COLUMN_COUNT
        : component.meta.width || GRID_MIN_COLUMN_COUNT;

    return <>{editMode ? this.renderEditMode() : this.renderPreviewMode()}</>;
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
    let filterDataObj = null;
    let findFilter = null;

    Object.keys(filters).forEach(filterId => {
      if (filters[filterId]?.name === filterName) {
        findFilter = filters[filterId];
      }
    });
    console.log('findFilter', findFilter);

    function handleDateTimeFilter(val) {
      let extraFormData = null;
      let filterState = findFilter?.defaultDataMask?.filterState;
      if (val) {
        const format = val?.format;
        const mode = val?.mode;
        const type = val?.type;
        const value = val?.value;
        let from = '';
        let to = '';
        let range = '';
        if (type === 'date-picker') {
          const addFormat =
            mode === 'year' ? 'y' : mode === 'month' ? 'M' : 'd';
          from = value ? moment(value, format) : '';
          to = value ? moment(value, format).add(1, addFormat) : '';
        } else {
          from = value[0] ? moment(value[0], format) : '';
          to = value[1] ? moment(value[1], format) : '';
        }
        if (value && from && to) {
          range = `${from.toString()} : ${to.toString()}`;
        }
        console.log('range', range);
        extraFormData = {
          time_range: range,
        };
        filterState = {
          value: range,
        };
      } else {
        extraFormData = {
          time_range: '',
        };
        filterState = {
          value: '',
        };
      }
      return { extraFormData, filterState };
    }

    function handleSelectFilter(val, findFilter) {
      let extraFormData = null;
      let filterState = findFilter?.defaultDataMask?.filterState;
      let tempValue = '';
      const temp_colName = findFilter?.targets[0]?.column?.name;
      console.log('temp_colName', temp_colName);
      if (val) {
        if (findFilter?.controlValues?.multiSelect) {
          if (filterValue) {
            tempValue = Array.isArray(filterValue)
              ? filterValue
              : filterValue.split();
          } else {
            tempValue = [];
          }
        } else {
          tempValue = filterValue;
        }
        extraFormData = getSelectExtraFormData(temp_colName, val);
        filterState = {
          ...filterState,
          label: tempValue.toString(),
          /* label: values?.length
          ? `${(values || [])
              .map(value => labelFormatter(value, datatype))
              .join(', ')}${suffix}`
          : undefined, */
          tempValue,
        };
      } else {
        extraFormData = {};
        filterState = {
          ...filterState,
          label: '',
          value: '',
        };
      }
      return { extraFormData, filterState };
    }

    if (filterType === 'filter_time') {
      filterDataObj = handleDateTimeFilter(filterValue);
    } else if (filterType === 'filter_select') {
      filterDataObj = handleSelectFilter(filterValue, findFilter);
    } else {
      let extraFormData = null;
      let filterState = findFilter?.defaultDataMask?.filterState;
      const temp_colName = findFilter?.targets[0]?.column?.name;
      console.log('temp_colName', temp_colName);
      extraFormData = getSelectExtraFormData(temp_colName, filterValue);
      filterState = {
        ...filterState,
        label: filterValue.toString(),
        /* label: values?.length
          ? `${(values || [])
              .map(value => labelFormatter(value, datatype))
              .join(', ')}${suffix}`
          : undefined, */
        filterValue,
      };
      filterDataObj = { extraFormData, filterState };
    }

    console.log(
      'updateFilter',
      filters,
      filterName,
      dataMask,
      filterValue,
      filterType,
      filterDataObj,
    );

    // dispatch(updateDataMask(filter.id, dataMask));

    if (filterDataObj?.extraFormData) {
      const filterDataMask = {
        extraFormData: { ...filterDataObj?.extraFormData },
        filterState: { ...filterDataObj?.filterState },
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
