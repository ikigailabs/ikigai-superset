import React from 'react';

export class IkiDynamicMarkdownIframe extends React.PureComponent<{
  editMode: boolean;
  component: any;
  customElementId: string;
  topLevelOrigin: string;
  projectId: string;
}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { editMode, component, customElementId, topLevelOrigin, projectId } =
      this.props;

    const dashboardMode = editMode ? 'edit' : 'preview';
    const supersetComponentId = component.id;

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
