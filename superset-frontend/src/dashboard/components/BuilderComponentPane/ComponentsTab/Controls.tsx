import React, { Dispatch, SetStateAction } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Button from '../../../../components/Button';
import { ContextService } from '../../../../service/context-service/context-service';

type PropTypes = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export function Controls({ searchTerm, setSearchTerm }: PropTypes) {
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
