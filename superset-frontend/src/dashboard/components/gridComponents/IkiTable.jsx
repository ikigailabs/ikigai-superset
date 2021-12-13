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

import DragDroppable from '../dnd/DragDroppable';
import HoverMenu from '../menu/HoverMenu';
import DeleteComponentButton from '../DeleteComponentButton';
import { componentShape } from '../../util/propShapes';

const propTypes = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
  component: componentShape.isRequired,
  depth: PropTypes.number.isRequired,
  parentComponent: componentShape.isRequired,
  index: PropTypes.number.isRequired,
  editMode: PropTypes.bool.isRequired,
  handleComponentDrop: PropTypes.func.isRequired,
  deleteComponent: PropTypes.func.isRequired,
};

class IkiTable extends React.PureComponent {
  projectId = '';

  constructor(props) {
    super(props);
    this.state = {
      referrerUrl: '',
      // projectId: '',
    };
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
  }

  componentDidMount() {
    const { referrer } = document;
    /* const url =
      window.location !== window.parent.location
        ? document.referrer
        : document.location.href; */
    this.setState(
      {
        referrerUrl: referrer,
      },
      () => {
        this.handleIncomingWindowMsg(referrer);
        // window.top.postMessage('superset-to-parent/get-project-id', referrer);
        const iframeUrlString = document.getElementById('ikitable-iframe').src;
        const iframeUrl = new URL(iframeUrlString);
        const iframeUrlQuery = new URLSearchParams(iframeUrl);
        const urlProjectId = iframeUrlQuery.get('project_id');
        console.log(
          'iframeUrlQuery',
          iframeUrlQuery,
          'iframeUrl',
          iframeUrl,
          'urlProjectId',
          urlProjectId,
        );
        if (!urlProjectId) {
          window.parent.postMessage(
            'superset-to-parent/get-project-id',
            referrer,
          );
        }
      },
    );
  }

  // eslint-disable-next-line class-methods-use-this
  handleIncomingWindowMsg(referrer) {
    console.log('handleIncomingWindowMsg superset comp', referrer);
    window.addEventListener('message', event => {
      if (event.origin === 'http://localhost:3000') {
        console.log('ikitable received 1: ', event.data);
        const messageObject = JSON.parse(event.data);
        /* const infoObject = {
          info: 'superset-to-table/get-project-id',
          data: event.data,
        }; */
        // const infoData = JSON.stringify(infoObject);
        // window.parent.postMessage(infoData, referrer);
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
            if (this.projectId === '') {
              this.projectId = messageData;
              widgetUrl = `${referrer}widget/dataset/table?project_id=${this.projectId}`;
              console.log('widgetUrl', widgetUrl);
              document.getElementById('ikitable-iframe').src = widgetUrl;
            }
          } else if (
            messageObject.info === 'widget-to-superset/sending-datasets-ids'
          ) {
            console.log('messageData', messageData);
            // widgetUrl = `${referrer}widget/dataset/table?project_id=${messageData}`;
            widgetUrl = document.getElementById('ikitable-iframe').src;
            /* const iframeUrlString =
              document.getElementById('ikitable-iframe').src; */
            // const iframeUrl = new URL(iframeUrlString);
            const tableType = messageData.tableType
              ? messageData.tableType
              : '';
            widgetUrl += `&table_type=${tableType}`;
            console.log('tableType', tableType);
            // iframeUrl.searchParams.set('table_type', tableType);
            if (messageData.datasets) {
              Object.keys(messageData.datasets).forEach(
                (messageDataObject, messageDataKey) => {
                  console.log(
                    'messageDataObject',
                    messageDataObject,
                    'messageDataKey',
                    messageDataKey,
                    'messageData.datasets[messageDataObject]',
                    messageData.datasets[messageDataObject],
                  );
                  widgetUrl += `&${messageDataObject}=${messageData.datasets[messageDataObject]}`;
                  /* iframeUrl.searchParams.set(
                    messageDataKey,
                    messageData.datasets[messageDataKey],
                  ); */
                },
              );
            }
            console.log('widgetUrl', widgetUrl);
            document.getElementById('ikitable-iframe').src = widgetUrl;
          }
        }
      }
      //console.log('ikitable received: ', event);
      // can message back using event.source.postMessage(...)
    });
  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  render() {
    const {
      component,
      depth,
      parentComponent,
      index,
      handleComponentDrop,
      editMode,
    } = this.props;

    return (
      <DragDroppable
        component={component}
        parentComponent={parentComponent}
        orientation="row"
        index={index}
        depth={depth}
        onDrop={handleComponentDrop}
        editMode={editMode}
      >
        {({ dropIndicatorProps, dragSourceRef }) => (
          <div ref={dragSourceRef}>
            {editMode && (
              <HoverMenu position="left">
                <DeleteComponentButton onDelete={this.handleDeleteComponent} />
              </HoverMenu>
            )}

            <div className="dashboard-component dashboard-component-ikitable">
              <iframe
                id="ikitable-iframe"
                src="http://localhost:3000/widget/dataset/table"
                title="IkiTable Component"
                className="ikitable-iframe"
              />
            </div>

            {dropIndicatorProps && <div {...dropIndicatorProps} />}
          </div>
        )}
      </DragDroppable>
    );
  }
}

IkiTable.propTypes = propTypes;

export default IkiTable;
