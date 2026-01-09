import React, { useState } from 'react';
import Collapse from 'src/components/Collapse';
import { Title } from 'src/dashboard/components/FiltersBadge/Styles';
import dashboardComponents from 'src/visualizations/presets/dashboardComponents';
import NewIkiTable from '../../gridComponents/new/components/NewIkiTable';
import NewIkiRunPipeline from '../../gridComponents/new/components/NewIkiRunPipeline';
import NewIkiEitlRow from '../../gridComponents/new/components/NewIkiEitlRow';
import NewIkiEitlColumn from '../../gridComponents/new/components/NewIkiEitlColumn';
import NewIkiDatasetDownload from '../../gridComponents/new/components/NewIkiDatasetDownload';
import NewDynamicComponent from '../../gridComponents/new/NewDynamicComponent';

export function LegacyComponents() {
  const [activeKeys, setActiveKeys] = useState(['']);

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
        <NewIkiTable />
        <NewIkiRunPipeline />
        <NewIkiEitlRow />
        <NewIkiEitlColumn />
        <NewIkiDatasetDownload />
        {dashboardComponents.getAll().map(({ key: componentKey, metadata }) => (
          <NewDynamicComponent
            metadata={metadata}
            componentKey={componentKey}
          />
        ))}
      </Collapse.Panel>
    </Collapse>
  );
}
