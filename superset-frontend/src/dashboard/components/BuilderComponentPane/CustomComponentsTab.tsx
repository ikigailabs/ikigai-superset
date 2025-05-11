import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { IKI_DYNAMIC_SINGLE_MARKDOWN_TYPE } from 'src/dashboard/util/componentTypes';
import { Button as AntButton } from 'antd';
import { Input } from 'src/components/Input';
import Button from '../../../components/Button';
import Collapse from 'src/components/Collapse';
import { RootState } from 'src/dashboard/types';
import { Title } from 'src/dashboard/components/FiltersBadge/Styles';
import dashboardComponents from 'src/visualizations/presets/dashboardComponents';
import { ContextService } from 'src/service/context-service/context-service';

import NewDynamicSingleMarkdown from '../gridComponents/new/components/NewDynamicSingleMarkdown';
import NewDynamicMarkdown from '../gridComponents/new/components/NewDynamicMarkdown';
import NewIkiTable from '../gridComponents/new/components/NewIkiTable';
import NewIkiProcessBuilder from '../gridComponents/new/components/NewIkiProcessBuilder';
import NewIkiRunPipeline from '../gridComponents/new/components/NewIkiRunPipeline';
import NewDeepCast from '../gridComponents/new/components/NewDeepCast';
import NewIkiEitlRow from '../gridComponents/new/components/NewIkiEitlRow';
import NewIkiEitlColumn from '../gridComponents/new/components/NewIkiEitlColumn';
import NewForecastModule from '../gridComponents/new/components/NewForecastModule';
import NewIkiDatasetDownload from '../gridComponents/new/components/NewIkiDatasetDownload';
import NewIkiModelMetrics from '../gridComponents/new/NewIkiModelMetrics';
import NewExternalDatasets from '../gridComponents/new/components/NewExternalDatasets';
import NewForecast from '../gridComponents/new/components/NewForecast';
import NewDynamicComponent from '../gridComponents/new/NewDynamicComponent';

export function CustomComponentsTab() {
  const customMarkdowns = useSelector(
    (state: RootState) => state.dashboardState.customMarkdowns,
  );

  const dashboardLayout = useSelector(
    (state: RootState) => state.dashboardLayout,
  );

  const addedCustomMarkdowns = Object.entries(dashboardLayout.present).flatMap(
    ([key, value]) =>
      key.includes(IKI_DYNAMIC_SINGLE_MARKDOWN_TYPE) &&
      value.meta.customMarkdown
        ? [value.meta.customMarkdown.custom_markdown_id]
        : [],
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [activeKeys, setActiveKeys] = useState(['']);

  function CustomMarkdowns() {
    if (!customMarkdowns) return <></>;

    return (
      <>
        {customMarkdowns
          .filter(md =>
            md.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map(customMarkdown => {
            const isAdded = addedCustomMarkdowns.includes(
              customMarkdown.custom_markdown_id,
            );

            return (
              <div
                key={customMarkdown.custom_markdown_id}
                className="custom-markdown-container"
              >
                <NewDynamicSingleMarkdown
                  customMarkdown={customMarkdown}
                  disableDragDrop={isAdded}
                />

                {isAdded && <div className="added-tag">Added</div>}

                <AntButton
                  type="default"
                  shape="circle"
                  icon={<EditOutlined />}
                  className="edit-custom-markdown-button"
                  onClick={() =>
                    ContextService.editCustomMarkdown(customMarkdown)
                  }
                />

                <AntButton
                  type="default"
                  shape="circle"
                  danger
                  icon={<DeleteOutlined />}
                  className="delete-custom-markdown-button"
                  onClick={() =>
                    ContextService.deleteCustomMarkdown(customMarkdown)
                  }
                />
              </div>
            );
          })}
      </>
    );
  }

  function LegacyComponents() {
    return (
      <Collapse
        bordered={false}
        ghost
        activeKey={activeKeys}
        onChange={keys => setActiveKeys(Array.isArray(keys) ? keys : [keys])}
      >
        <Collapse.Panel
          key="legacy-components"
          className="legacy-components"
          header={
            <Title bold color="#626262">
              <span>Legacy Components</span>
            </Title>
          }
        >
          <NewDynamicMarkdown />
          <NewIkiTable />
          <NewIkiProcessBuilder />
          <NewIkiRunPipeline />
          <NewDeepCast />
          <NewIkiEitlRow />
          <NewIkiEitlColumn />
          <NewForecastModule />
          <NewIkiDatasetDownload />
          <NewIkiModelMetrics />
          <NewExternalDatasets />
          <NewForecast />
          {/* <NewIkiExplainability /> */}
          {dashboardComponents
            .getAll()
            .map(({ key: componentKey, metadata }) => (
              <NewDynamicComponent
                metadata={metadata}
                componentKey={componentKey}
              />
            ))}
        </Collapse.Panel>
      </Collapse>
    );
  }

  function Controls() {
    return (
      <div className="controls-container sidepane-padding">
        <Input
          placeholder="Search..."
          suffix={<SearchOutlined />}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <Button
          type="primary"
          onClick={() => ContextService.createCustomMarkdown()}
          className="create-custom-markdown-button"
        >
          <span>Create</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="custom-components-container">
      <Controls />

      <div className="custom-components-content sidepane-padding">
        <CustomMarkdowns />
        <LegacyComponents />
      </div>
    </div>
  );
}
