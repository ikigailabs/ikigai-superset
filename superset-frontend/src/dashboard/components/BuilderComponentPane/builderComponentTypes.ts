export type CustomMarkdown = {
  custom_markdown_id: string;
  name: string;
  project_id: string;
  definition: any;
  directory: CustomMarkdownDirectory;
  created_at: string;
  modified_at: string;
};

export type CustomMarkdowns = CustomMarkdown[];

export type CustomMarkdownDirectory = {
  directory_id: string;
  name: string;
  type: 'CUSTOM_MARKDOWN';
  project_id: string;
  parent_id: string;
  size: string;
};
