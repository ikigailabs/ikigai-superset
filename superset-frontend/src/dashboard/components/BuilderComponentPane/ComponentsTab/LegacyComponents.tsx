import React, { useState } from 'react';
import Collapse from 'src/components/Collapse';
import dashboardComponents from 'src/visualizations/presets/dashboardComponents';
import NewDynamicMarkdown from '../../gridComponents/new/components/NewDynamicMarkdown';
import NewIkiTable from '../../gridComponents/new/components/NewIkiTable';
import NewIkiProcessBuilder from '../../gridComponents/new/components/NewIkiProcessBuilder';
import NewIkiRunPipeline from '../../gridComponents/new/components/NewIkiRunPipeline';
import NewDeepCast from '../../gridComponents/new/components/NewDeepCast';
import NewIkiEitlRow from '../../gridComponents/new/components/NewIkiEitlRow';
import NewIkiEitlColumn from '../../gridComponents/new/components/NewIkiEitlColumn';
import NewForecastModule from '../../gridComponents/new/components/NewForecastModule';
import NewIkiDatasetDownload from '../../gridComponents/new/components/NewIkiDatasetDownload';
import NewIkiModelMetrics from '../../gridComponents/new/NewIkiModelMetrics';
import NewExternalDatasets from '../../gridComponents/new/components/NewExternalDatasets';
import NewForecast from '../../gridComponents/new/components/NewForecast';
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
          <h2 style={{ color: '#626262' }}>
            <span>Legacy Components</span>
          </h2>
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
