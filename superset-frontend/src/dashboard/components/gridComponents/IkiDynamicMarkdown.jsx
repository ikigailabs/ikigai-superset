import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';

import { Logger, LOG_ACTIONS_RENDER_CHART } from 'src/logger/LogUtils';

import DragDroppable from 'src/dashboard/components/dnd/DragDroppable';
import ResizableContainer from 'src/dashboard/components/resizable/ResizableContainer';
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
import { migrate } from 'src/migrations/dynamic-markdown/migration-runner';
import { IkiDynamicMarkdownIframe } from './IkiDynamicMarkdownIframe';

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

class IkiDynamicMarkdown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderStartTime = Logger.getTimestamp();
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
  }

  componentDidMount() {
    this.props.logEvent(LOG_ACTIONS_RENDER_CHART, {
      viz_type: 'markdown',
      start_offset: this.renderStartTime,
      ts: new Date().getTime(),
      duration: Logger.getTimestamp() - this.renderStartTime,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editMode !== this.props.editMode) {
      ContextService.sendEditMode(this.props.editMode);
    }

    if (
      !isEqual(
        prevProps.dashboardLayout.present,
        this.props.dashboardLayout.present,
      )
    ) {
      ContextService.sendDashboardLayout();
    }
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

  render() {
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
        disableDragDrop
        editMode={editMode}
      >
        {({ dropIndicatorProps, dragSourceRef }) => (
          <>
            <div
              data-test="dashboard-markdown-editor"
              className={cx(
                'dashboard-component-ikirunpipeline',
                editMode === true && 'dashboard-component--editing',
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
                editMode={editMode}
              >
                <div
                  ref={dragSourceRef}
                  className="dashboard-component-inner"
                  data-test="dashboard-component-chart-holder"
                >
                  <IkiDynamicMarkdownIframe
                    component={component}
                    customElementId={this.getMeta().customElementId || ''}
                    editMode={editMode}
                    projectId={projectId}
                    topLevelOrigin={topLevelOrigin}
                  />
                </div>
              </ResizableContainer>
            </div>
            {dropIndicatorProps && <div {...dropIndicatorProps} />}
          </>
        )}
      </DragDroppable>
    );
  }
}

IkiDynamicMarkdown.propTypes = propTypes;

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
