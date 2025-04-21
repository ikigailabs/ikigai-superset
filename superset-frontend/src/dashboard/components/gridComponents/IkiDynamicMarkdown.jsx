/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
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
import { ContextService } from 'src/service/context-service/context-service';
import { withRouter } from 'react-router-dom';
import {
  CURRENT_VERSION,
  migrate,
} from 'src/migrations/dynamic-markdown/migration-runner';

const { topLevelOrigin, projectId } = ContextService;

const propTypes = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
  component: componentShape.isRequired,
  parentComponent: componentShape.isRequired,
  index: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired,
  editMode: PropTypes.bool.isRequired,
  dashboardLayout: PropTypes.object,
  match: PropTypes.object.isRequired,

  // from redux
  logEvent: PropTypes.func.isRequired,
  addDangerToast: PropTypes.func.isRequired,

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
      editor: null,
      editorMode: 'preview',
    };
    this.renderStartTime = Logger.getTimestamp();

    this.handleChangeEditorMode = this.handleChangeEditorMode.bind(this);
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
  }

  componentDidMount() {
    this.props.logEvent(LOG_ACTIONS_RENDER_CHART, {
      viz_type: 'markdown',
      start_offset: this.renderStartTime,
      ts: new Date().getTime(),
      duration: Logger.getTimestamp() - this.renderStartTime,
    });
    this.handleIncomingWindowMsg();
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.editor &&
      (prevProps.component.meta.width !== this.getMeta().width ||
        prevProps.columnWidth !== this.props.columnWidth)
    ) {
      this.state.editor.resize(true);
    }

    if (
      !isEqual(
        prevProps.dashboardLayout.present,
        this.props.dashboardLayout.present,
      )
    ) {
      this.sendDashboardLayoutToMarkdown();
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

  handleIncomingWindowMsg() {
    window.addEventListener('message', event => {
      if (event.origin === topLevelOrigin) {
        const messageObject = JSON.parse(event.data);
        if (messageObject.info && messageObject.dataType) {
          const { dataType } = messageObject;
          let messageData;
          let widgetUrl;
          let widgetUrlQuery;

          if (dataType === 'object') {
            messageData = JSON.parse(messageObject.data);
          } else {
            messageData = messageObject.data;
            switch (messageObject.info) {
              case 'widget-to-superset/sending-markdown-component-mounted':
                this.sendDashboardLayoutToMarkdown();
                break;
              default:
                break;
            }
          }

          if (
            document.getElementById(
              `ikidynamicmarkdown-widget-${this.props.component.id}`,
            )
          ) {
            widgetUrl = new URL(
              document.getElementById(
                `ikidynamicmarkdown-widget-${this.props.component.id}`,
              ).src,
            );
          } else {
            widgetUrl = `${topLevelOrigin}/widget/custom?mode=edit&project_id=${projectId}`;
          }

          if (
            messageObject.info === 'widget-to-superset/dynamic-markdown-setup'
          ) {
            if (messageData.scid === this.props.component.id) {
              const customElementId = messageData.componentId;
              this.setCustomElementId(customElementId);
            }
          } else if (
            messageObject.info ===
            'widget-to-superset/sending-charts-to-refresh'
          ) {
            const { matchedChartIds } = messageData;
            this.refreshCharts(matchedChartIds);
          }
        }
      }
    });
  }

  sendDashboardLayoutToMarkdown() {
    const iframes = document.querySelectorAll('iframe');
    const crossWindowMessage = {
      info: 'widget-to-parent/send-dashboard-layout',
      dataType: 'object',
      data: {
        dashboardLayout: this.props.dashboardLayout.present,
      },
    };
    const crossBrowserInfoString = JSON.stringify(crossWindowMessage);

    iframes.forEach(iframe => {
      if (!iframe.name.includes('dynamic-markdown')) return;
      iframe.contentWindow.postMessage(crossBrowserInfoString, topLevelOrigin);
    });
  }

  refreshCharts(selectedCharts) {
    let chartIds = [];
    if (!Array.isArray(selectedCharts)) {
      chartIds = selectedCharts.split();
    } else {
      chartIds = selectedCharts;
    }
    if (chartIds) {
      const layoutElements = this.props.dashboardLayout?.present
        ? this.props.dashboardLayout?.present
        : null;
      if (chartIds) {
        chartIds.forEach(chartId => {
          let findChartEle = null;
          if (layoutElements) {
            Object.keys(layoutElements).forEach(ele => {
              const supChartId = layoutElements[ele].meta?.chartId;
              if (supChartId && supChartId.toString() === chartId) {
                findChartEle = supChartId;
              }
            });
          }
          if (findChartEle) {
            this.refreshChart(findChartEle, props.match.params.idOrSlug, false);
          }
        });
      }
    }
  }

  refreshChart(chartId, dashboardId, isCached) {
    this.props.logEvent(LOG_ACTIONS_FORCE_REFRESH_CHART, {
      slice_id: chartId,
      is_cached: isCached,
    });
    return this.props.refreshChart(chartId, true, dashboardId);
  }

  handleChangeEditorMode(mode) {
    const nextState = {
      ...this.state,
      editorMode: mode,
    };

    this.setState(nextState);
  }

  setCustomElementId(customElementId) {
    const { updateComponents, component } = this.props;

    if (customElementId.slice(1, 2) !== '_') {
      console.warn(
        "Setting customElementId to a non-aliased value! I hope you know what you're doing...",
      );
    }

    updateComponents({
      [component.id]: {
        ...component,
        meta: {
          ...component.meta,
          version: CURRENT_VERSION,
          customElementId,
        },
      },
    });
  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  /**
   * Utility function to ensure that the meta object being used is always
   * migrated to current version prior to read/write.
   */
  getMeta() {
    return migrate(this.props.component.meta);
  }

  renderIframe() {
    const { hasError } = this.state;
    const { editMode, component } = this.props;
    const dashboardMode = editMode ? 'edit' : 'preview';
    const supersetComponentId = this.props.component.id;
    const customElementId = this.getMeta().customElementId || '';

    const src = `${topLevelOrigin}/widget/custom?project_id=${projectId}&scid=${supersetComponentId}&mode=edit&dashboard_mode=${dashboardMode}&custom_element_id=${customElementId}`;

    return (
      <iframe
        id={`ikidynamicmarkdown-widget-${this.props.component.id}`}
        name={`dynamic-markdown-${timestamp}`}
        src={`${src}`}
        title="Custom Element"
        style={{ height: '100%' }}
      />
    );
  }

  render() {
    const { isFocused, editorMode } = this.state;
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
      onResizeStart,
      handleComponentDrop,
      editMode,
    } = this.props;

    const widthMultiple =
      parentComponent.type === COLUMN_TYPE
        ? parentComponent.meta.width || GRID_MIN_COLUMN_COUNT
        : this.getMeta().width || GRID_MIN_COLUMN_COUNT;

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
                'dashboard-component-ikirunpipeline',
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
                heightMultiple={this.getMeta().height}
                minWidthMultiple={GRID_MIN_COLUMN_COUNT}
                minHeightMultiple={GRID_MIN_ROW_UNITS}
                maxWidthMultiple={availableColumnCount + widthMultiple}
                onResizeStart={onResizeStart}
                onResize={onResize}
                onResizeStop={onResizeStop}
                editMode={isFocused ? false : editMode}
              >
                <div
                  ref={dragSourceRef}
                  className="dashboard-component-inner"
                  data-test="dashboard-component-chart-holder"
                >
                  {this.renderIframe()}
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

IkiDynamicMarkdown.propTypes = propTypes;
IkiDynamicMarkdown.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    dashboardLayout: state.dashboardLayout,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(IkiDynamicMarkdown));
