import React from 'react';
import { ContextService } from 'src/service/context-service/context-service';

const { projectId, topLevelOrigin } = ContextService;

export class IkiDynamicMarkdownIframe extends React.Component<{
  editMode: boolean;
  component: any;
  customElementId: string;
}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { editMode, component, customElementId } = this.props;

    const dashboardMode = editMode ? 'edit' : 'preview';
    const supersetComponentId = component.id;

    if (!projectId) throw new Error('project_id query param must be truthy!');
    if (!topLevelOrigin)
      throw new Error('dash_url query param must be truthy!');

    const src = `${topLevelOrigin}/widget/custom?project_id=${projectId}&scid=${supersetComponentId}&mode=edit&dashboard_mode=${dashboardMode}&custom_element_id=${customElementId}`;
    return (
      <iframe
        id={`ikidynamicmarkdown-widget-${component.id}`}
        name={`dynamic-markdown-${component.id}`}
        src={`${src}`}
        title="Custom Element"
        style={{ height: '100%' }}
      />
    );
  }
}
