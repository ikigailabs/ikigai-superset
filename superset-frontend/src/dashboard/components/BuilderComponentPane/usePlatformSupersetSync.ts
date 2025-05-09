import { useEffect, useState } from 'react';
import { CustomMarkdown, CustomMarkdowns } from 'src/dashboard/types';
import { ContextService } from 'src/service/context-service/context-service';

type IPCMessage = {
  type: string;
  payload?: any;
};

const { topLevelOrigin } = ContextService;

export function usePlatformSupersetSync() {
  const [customMarkdowns, setCustomMarkdowns] = useState<CustomMarkdowns>([]);

  useEffect(() => handlePostMessages({ type: 'requestCustomMarkdowns' }), []);

  useEffect(() => {
    if (!topLevelOrigin)
      throw new Error('dash_url query param must be truthy!');

    function handleReceiveMessage(event: MessageEvent) {
      if (event.origin !== topLevelOrigin) return;

      const message = event.data;

      switch (message.type) {
        case 'sendCustomMarkdowns':
          setCustomMarkdowns(message.payload);
          break;

        case 'deleteCustomMarkdown':
          setCustomMarkdowns(prevCustomMarkdowns =>
            prevCustomMarkdowns.filter(
              cm => cm.custom_markdown_id !== message.payload,
            ),
          );
          break;

        default:
          break;
      }
    }

    window.addEventListener('message', handleReceiveMessage);
    return () => window.removeEventListener('message', handleReceiveMessage);
  }, []);

  function handlePostMessages(message: IPCMessage) {
    if (!topLevelOrigin)
      throw new Error('dash_url query param must be truthy!');

    window.parent.postMessage(message, topLevelOrigin);
  }

  function handleEditMarkdown(customMarkdown: CustomMarkdown) {
    handlePostMessages({
      type: 'editCustomMarkdown',
      payload: customMarkdown,
    });
  }

  function handleDeleteMarkdown(customMarkdown: CustomMarkdown) {
    handlePostMessages({
      type: 'deleteCustomMarkdown',
      payload: customMarkdown,
    });
  }

  return {
    state: { customMarkdowns },
    actions: { handleEditMarkdown, handleDeleteMarkdown },
  };
}
