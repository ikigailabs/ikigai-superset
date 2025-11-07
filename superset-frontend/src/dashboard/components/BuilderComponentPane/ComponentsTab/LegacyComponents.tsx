import React, { useState } from 'react';
import Collapse from 'src/components/Collapse';
import { Title } from 'src/dashboard/components/FiltersBadge/Styles';
import dashboardComponents from 'src/visualizations/presets/dashboardComponents';
import NewDynamicMarkdown from '../../../../ikigai/gridComponents/new/NewDynamicMarkdown';
import NewIkiTable from '../../../../ikigai/gridComponents/new/NewIkiTable';
import NewIkiProcessBuilder from '../../../../ikigai/gridComponents/new/NewIkiProcessBuilder';
import NewIkiRunPipeline from '../../../../ikigai/gridComponents/new/NewIkiRunPipeline';
import NewDeepCast from '../../../../ikigai/gridComponents/new/NewDeepCast';
import NewIkiEitlRow from '../../../../ikigai/gridComponents/new/NewIkiEitlRow';
import NewIkiEitlColumn from '../../../../ikigai/gridComponents/new/NewIkiEitlColumn';
import NewForecastModule from '../../../../ikigai/gridComponents/new/NewForecastModule';
import NewIkiDatasetDownload from '../../../../ikigai/gridComponents/new/NewIkiDatasetDownload';
import NewIkiModelMetrics from '../../../../ikigai/gridComponents/new/NewIkiModelMetrics';
import NewExternalDatasets from '../../../../ikigai/gridComponents/new/NewExternalDatasets';
import NewForecast from '../../../../ikigai/gridComponents/new/NewForecast';
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
