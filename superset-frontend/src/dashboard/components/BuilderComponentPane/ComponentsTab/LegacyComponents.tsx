import React, { useState } from 'react';
import Collapse from 'src/components/Collapse';
import { Title } from 'src/dashboard/components/FiltersBadge/Styles';
import dashboardComponents from 'src/visualizations/presets/dashboardComponents';
import NewIkiEitlRow from '../../gridComponents/new/components/NewIkiEitlRow';
import NewIkiEitlColumn from '../../gridComponents/new/components/NewIkiEitlColumn';
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
        <NewIkiEitlRow />
        <NewIkiEitlColumn />
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
