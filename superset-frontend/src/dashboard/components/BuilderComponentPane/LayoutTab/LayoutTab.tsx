import React from 'react';
import NewTabs from '../../gridComponents/new/NewTabs';
import NewRow from '../../gridComponents/new/NewRow';
import NewColumn from '../../gridComponents/new/NewColumn';
import NewHeader from '../../gridComponents/new/NewHeader';
import NewMarkdown from '../../gridComponents/new/NewMarkdown';
import NewDivider from '../../gridComponents/new/NewDivider';

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
