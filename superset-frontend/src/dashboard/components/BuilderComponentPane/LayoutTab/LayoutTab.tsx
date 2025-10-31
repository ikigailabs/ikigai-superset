import React from 'react';
import NewTabs from '../../gridComponents/new/layout/NewTabs';
import NewRow from '../../gridComponents/new/layout/NewRow';
import NewColumn from '../../gridComponents/new/layout/NewColumn';
import NewHeader from '../../gridComponents/new/layout/NewHeader';
import NewMarkdown from '../../gridComponents/new/layout/NewMarkdown';
import NewDivider from '../../gridComponents/new/layout/NewDivider';

export function LayoutTab() {
  return (
    <div className="sidepane-padding">
      <NewTabs />
      <NewRow />
      <NewColumn />
      <NewHeader />
      <NewMarkdown />
      <NewDivider />
    </div>
  );
}
