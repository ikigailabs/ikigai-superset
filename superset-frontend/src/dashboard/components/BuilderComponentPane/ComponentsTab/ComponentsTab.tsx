import React, { useState } from 'react';

import { Controls } from './Controls';
import { CustomMarkdowns } from './CustomComponents';
import { LegacyComponents } from './LegacyComponents';

import './ComponentsTab.less';

export function ComponentsTab() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="custom-components-container">
      <Controls searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="custom-components-content sidepane-padding">
        <CustomMarkdowns searchTerm={searchTerm} />
        <LegacyComponents />
      </div>
    </div>
  );
}
