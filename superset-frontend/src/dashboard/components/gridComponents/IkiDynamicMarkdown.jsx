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
import { CustomHtmlContainer } from '@ikigailabs/custom-html';

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
    // this.handleIncomingWindowMsg();
  }

  static getDerivedStateFromProps(nextProps, state) {
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

  // eslint-disable-next-line class-methods-use-this
  handleIncomingWindowMsg() {
    window.addEventListener('message', event => {
      if (event.origin === this.props.ikigaiOrigin) {
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
            widgetUrl = `${this.props.ikigaiOrigin}/widget//widget/custom?mode=edit&parent=superset`;
          }

          if (
            messageObject.info === 'widget-to-superset/dynamic-markdown-setup'
          ) {
            if (messageData.scid === this.props.component.id) {
              widgetUrlQuery = new URLSearchParams(widgetUrl);
              widgetUrlQuery.set('mode', 'preview');
              widgetUrlQuery.set('parent', 'superset');
              widgetUrlQuery.set('project_id', messageData.projectId);
              widgetUrlQuery.set('component_id', messageData.componentId);
              widgetUrl.search = widgetUrlQuery.toString();
              const tempIframe = `<iframe
                                  id="ikiinteractiveforecast-widget-${this.props.component.id}"
                                  name="ikiinteractiveforecast"
                                  src="${widgetUrl}"
                                  title="Hero Section Component"
                                  style="min-height: 100%;"
                              />`;
              this.handleIkiRunPipelineChange(tempIframe, true);
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
            this.refreshChart(findChartEle, this.state.dashboardId, false);
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

  handleIkiRunPipelineChange(nextValue, saveToDashboard) {
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
    let widgetUrl;
    /*const widgetUrlQuery = new URLSearchParams(widgetUrl.search);
    // widgetUrlQuery.set('mode', mode);
    widgetUrl.search = widgetUrlQuery.toString();
    const tempIframe = `<iframe
                      id="ikidynamicmarkdown-widget-${this.props.component.id}"
                      name="dynamic-markdown-${timestamp}"
                      src="${widgetUrl}"
                      title="Custom Component"
                      style="min-height: 100%;"
                    />`;
    this.handleIkiRunPipelineChange(tempIframe, true);*/
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
    const { markdownSource, hasError } = this.state;
    /*const { ikigaiOrigin, editMode } = this.props;
    let iframe = '';
    let iframeSrc = '';
    if (ikigaiOrigin) {
      if (markdownSource) {
        // iframe = markdownSource;
        const iframeWrapper = document.createElement('div');
        iframeWrapper.innerHTML = markdownSource;
        const iframeHtml = iframeWrapper.firstChild;
        const iframeSrcUrl = new URL(iframeHtml.src);
        iframeSrcUrl.searchParams.set(
          'dashboard_mode',
          editMode ? 'edit' : 'preview',
        );
        iframeSrcUrl.searchParams.set('scid', this.props.component.id);
        iframeSrc = ikigaiOrigin + iframeSrcUrl.pathname + iframeSrcUrl.search;
      } else {
        iframeSrc = `${ikigaiOrigin}/widget/custom?mode=edit&parent=superset&scid=${this.props.component.id}`;
      }
      iframe = `<iframe
                  id="ikidynamicmarkdown-widget-${this.props.component.id}"
                  name="dynamic-markdown-${timestamp}"
                  src="${iframeSrc}"
                  title="Custom Component"
                  style="height:100%;"
                />`;
    } else {
      iframe = '';
    }
    return <SafeMarkdown source={hasError ? MARKDOWN_ERROR_MESSAGE : iframe} />;*/

    return (
      <CustomHtmlContainer
        appId={'2nkZld2ZVp1tmyW8JUmozNvKtLr'}
        componentId={'2o4uo0fs1QAjOlf8Jtvi4pJ5hYV'}
        mode={'edit'}
        parent={'editor'}
        apiBaseUrl={'https://dev-api.ikigailabs.io'}
        userEmail={'sasa@ikigailabs.io'}
        token={
          '{"idToken":"eyJraWQiOiJRT0l4NUNiaWEzcjNmRmZXRWdMUDh5Y0htVHd0TDBIVHhCWUtKTEg0WThzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4OTlhZGY3MS1jNjBiLTQ1NTEtYmExNC1lMGYzNmY1YTUzMDgiLCJhdWQiOiIzMm9sOXYwa2lydDJzNzk0Nmk0bWNnbWxvbiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJjM2M1MTA2LTgwNDItNDYyZS1iODFkLTQwZDVjYTgwMGRiOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzMyMDMxMzE2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9zN2ZqdmRBUlQiLCJjb2duaXRvOnVzZXJuYW1lIjoic2FzYUBpa2lnYWlsYWJzLmlvIiwiZXhwIjoxNzMyMTE3NzE2LCJpYXQiOjE3MzIwMzEzMTYsImVtYWlsIjoic2FzYUBpa2lnYWlsYWJzLmlvIn0.HsL0FxnI_pTukbVKrRjVapyPyvOKFT6dau17k8AjupowYfPKQJnVKGJIoe3OU1IqaZADnu5kKGtUHotVj2z1SsKAxolna83K_F1s2fHRMcH2CwsLdk2KNahjJPhLKePZJirvieqAaauZq4FvGAuQ0zCBgZ78CLaPwzasikwkIzRvRWdpQBIn7c4X-EKoAZ759dO7WJ9wUHCWB82pOeOc14IvJerEnlsqxPDMF0Iq7ZdTDMTkDPmOsWmXTBzhiNAb4Y8232cgmy3SX7h5S5VxLJMrOLwgpoqPsMRZCCzyCp6nm8jaCnHZMO7-qFRNduBya4kBrdMBTkWndqoARXs9gA","refreshToken":"eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.C1tN-piQAdyZD80yPhMoHida7Uw6bjCVegaBt0J-cRZRvgsB5RgBUcocqkhgoCzRefejKRnnewE_q--NDUrkYK9UVpPzim4WgRoAFtO0aGKUYIwHYtbRznwV0Y6TvrYE1fd4UzbMiouD7iFkb089KZvT_rTmzypORFrmqz8AQQqvqX74E6omfo4yRXOY6nFiUDpc8gvS5udKDA9Hcm-79QTh2wyhgzxwCQQNzaIVXd1yl14R9FqJB_926mnsFaGI2m86o2j0KCxU04hnYCD1Uf5kk3FNmXZ1mFJEsUsye9Teor8xh84yQ6ooJUrMLi5wMb1zoCvpslSyoaW7faIBvA.8NeyRLtHslVm9iHK.5IyY2EhAQCJibsMCEqN32zRC1b6AgD8gdLt0N6Ar8UnBDweFUNbrLUNbtT3zxosgtdzYrVmcqZG-gJHmdR4kBCtabhJLITG2epg0JjylL1oYhRYFE-E_53JcvIqGOwLXKFYHvzKO9dZp1Gk57PhZ5n-zlDr-689e52UUgnP5lgCIAQJxgeUN5vbgltxMN4qs5OfqW_fmRuYkV6RcJJQWTHqi7Wwk_0TGMj3WVatxv4V5QvT8fKqEU1oaq9NU1AmUWE4YLWgfv52UgE28WR2btX81Zf4lIDghyXumOpNPhuvu3ngCumqqkGNcEYVj_qyo-BLfPrr21kF0GmLhu4NHyROvz4SuOlHuGMvgnTFl3M-aYDriY_PuPtrHiLCtkM9nTMY-F-upFhS8xkN5vJSykTpLSEODn0a5wz3gCGqd0H8vHzt4MhACxDbPN8_I8Mk9Mj7lpE73kehDHL7xHeaRduw8DtDtMreEtHyKFHkZpuIgy2pt1fpztjEuS8ZW1ZmqdJCJhsJ34fD6peOPutEnj1pbd0SBgBqw58KbmGopkdSNtGbzOy86uWcXvZTWpfYKMes4Y6nNHW3bLmttyH1PFVihwFi0YeY8CVhLGNoZzBsgVPjlSgXz9vRZyeyVLe7QpxpQrlReco6uvXGoO4LryS25BzhNDcvPPhZRYB_YP_sPBwW3Nv3M7ZBhXjcqsJKjFodVcRRP3p7WacP8z_KlcqD1Y_OQnRoI4U3aGe43BdpXiRkdYGUoUfddDowjOJxuiKsfwsWrnuR7Qf73vDCqdUDal6i7d3g_X77HMb6VzeOS7lra3j-nnhpb-5ysOYh9e6MdjHzd-dl9aORXULOdIeXljYPLkqv8FxZmeA8rd_TmB6jZ-qxhl7NYOzeNdEtDrgAWKRKByp1KvKwFhydyD53Xm2waF6TIAfimaUThqJMW2JJlU_kr53pJnjujWM2ad9kmXco7d1gEWLF5dPwyzXo8t0fh8gj7kRAUDHt-RpZtXNQ2SklIA8BO-Rk_UdFAvFShcmtMnFjeMDI4QKpEJ8vrTvpCjBHP3396Mm1OEs3yM33k1eIVEs9ouqTo1E1qL8SxFgXaLlvatwuqIfXgJNUa6t4R_Vl7fnkyLUc86ZPT-U7DjdIVdxocNwAN9iZbQ5_NnevhuXcwWmuWyDNv_YB_I32vaLljpLakE-g-RluspEB-OjXiySIXFU0r9jiEw375C1Mf0h45EAXYauhfFNY0JTpSaXZbELVJ7gHKo47tGULMPdbGz8UHvpkp_wrysrFB5KGpfm01dsLtjjccOIe_6RuqBw.8DwRHUbSA5iDTc_WCW8oRg","accessToken":"eyJraWQiOiJISHRORExQUGdWWUNPS1dWcDhQU1RaQnNqak9zbVRUcnpITnV1cnJoczRNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4OTlhZGY3MS1jNjBiLTQ1NTEtYmExNC1lMGYzNmY1YTUzMDgiLCJldmVudF9pZCI6IjJjM2M1MTA2LTgwNDItNDYyZS1iODFkLTQwZDVjYTgwMGRiOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MzIwMzEzMTYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3M3Zmp2ZEFSVCIsImV4cCI6MTczMjAzMTkxNiwiaWF0IjoxNzMyMDMxMzE2LCJqdGkiOiI1Njc2ZWNiYi0zZDg5LTQ3MDctYWVmNi1hMTAwZjdlNDhhNDciLCJjbGllbnRfaWQiOiIzMm9sOXYwa2lydDJzNzk0Nmk0bWNnbWxvbiIsInVzZXJuYW1lIjoic2FzYUBpa2lnYWlsYWJzLmlvIn0.S7fy1zJsjT1LXBai041SB_GHt-7uk3L42PNMkWtzBjgm6Xf5nflGmAS9ABVkD92pQRf5js2ieTHdZ6iWEyc3Bx0JNN7TJGQKMGQ6Q3RXfIyke2QDwIC_xn6Yqb1LUuKny1bx5TnNB-VYovIHXtEU6erI7K2oXWQ3HhbzVC3wIGaDAFwYOVbhUzmbffo0s-l_neA5-NCdLIWpKkNlxKIxCkOTdUtLOXom0kB4JuGgr1V2Ij9QMfxe_B_2s-mT9mGvKZEsZnh5tn4d0y-7Pkg6P1CYQFuqM-ZLMygRqre2IuAf-VgYBPx4FWK9HEZFtyiqUi1MN9GKu_1dm3oK7_ZPsA"}'
        }
        urlRoot={''}
        supersetUrl={''}
      />
    );
  }

  renderEditMode() {
    return this.renderIframe();
  }

  renderPreviewMode() {
    return this.renderIframe();
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
      handleComponentDrop,
      editMode,
    } = this.props;

    // inherit the size of parent columns
    const widthMultiple =
      parentComponent.type === COLUMN_TYPE
        ? parentComponent.meta.width || GRID_MIN_COLUMN_COUNT
        : component.meta.width || GRID_MIN_COLUMN_COUNT;

    return (
      <DragDroppable
        component={component}
        parentComponent={parentComponent}
        orientation={parentComponent.type === ROW_TYPE ? 'column' : 'row'}
        index={index}
        depth={depth}
        onDrop={handleComponentDrop}
        disableDragDrop={isFocused}
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
              <DeleteComponentButton onDelete={this.handleDeleteComponent} />,
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
export default connect(mapStateToProps, mapDispatchToProps)(IkiDynamicMarkdown);
