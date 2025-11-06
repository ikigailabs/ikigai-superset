import { SafeMarkdown } from '@superset-ui/core';
import React from 'react';
import { DYNAMIC_MARKDOWN } from 'src/dashboard/constants';
import { ContextService } from 'src/ikigai/service/context-service/context-service';

const { projectId, topLevelOrigin } = ContextService;

const timestamp = new Date().getTime().toString();

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
    const url = new URL('/widget/custom', topLevelOrigin);

    const dashboardMode = editMode ? 'edit' : 'preview';

    if (!projectId) throw new Error('project_id query param must be truthy!');
    if (!topLevelOrigin)
      throw new Error('dash_url query param must be truthy!');

    url.searchParams.set('project_id', projectId);
    url.searchParams.set('mode', dashboardMode);
    url.searchParams.set('dashboard_mode', dashboardMode);
    url.searchParams.set('parent', 'superset');
    url.searchParams.set('scid', component.id);
    url.searchParams.set('custom_element_id', customElementId);

    const iframeString = `<iframe
          id="ikidynamicmarkdown-widget-${component.id}"
          name="${DYNAMIC_MARKDOWN}-${timestamp}"
          src="${url.toString()}"
          title="Custom Element"
          style="height:100%;"
        />`;

    return <SafeMarkdown source={iframeString} />;
  }
}
