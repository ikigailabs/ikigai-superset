export type CustomMarkdown = {
  custom_markdown_id: string;
  name: string;
  project_id: string;
  definition: any;
  directory: {
    directory_id: string;
    type: 'custom_markdown';
  };
  created_at: string;
  modified_at: string;
};

export type CustomMarkdowns = CustomMarkdown[];
