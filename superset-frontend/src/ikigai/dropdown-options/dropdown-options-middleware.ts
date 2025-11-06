import { IPCSubservice } from 'src/ikigai/service/ipc-subservice';
import type { TypedMiddleware } from '../typed-middleware';
import {
  showDropdownOptions,
  hideDropdownOptions,
  setDropdownOptions,
  setSelectedValues,
  setSearchTerm,
  setDropdownLoading,
} from './dropdown-options-slice';

type ShowDropdownPayload = {
  id: string;
  x: number;
  y: number;
  iframeId: string;
};

type SetDropdownOptionsPayload = { id: string; options: string[] };
type SetSelectedValuesPayload = { id: string; values: string[] };
type SetSearchTermPayload = { id: string; term: string };
type SetLoadingPayload = { id: string; loading: boolean };
type HideDropdownPayload = string;

export const optionChosen = (option: string | null) => ({
  type: 'ikigai/optionChosen',
  payload: { option },
});

let initialized = false;
let pendingAcknowledgeFn: (() => void) | undefined;
let pendingRespondFn: ((payload: any) => void) | undefined;

/**
 * Receives instructions from child custom elements iframes on how to render a
 * dropdown options list. While the Superset upgrade is underway (and we're still
 * rendering custom elements in their own iframes), we need to render the list popup
 * for options inside the Superset process.
 *
 * Once Superset has been upgraded and custom elements are being rendered directly
 * inside of the Superset process, we can revert these changes.
 */
const dropdownOptionsMiddleware: TypedMiddleware = api => next => action => {
  if (action.type === 'ikigai/optionChosen' && pendingRespondFn) {
    pendingRespondFn(action.payload.option);
  }

  if (initialized) return next(action);
  IPCSubservice.onRequest<SetDropdownOptionsPayload>(
    'setDropdownOptions',
    async ({ payload, acknowledge }) => {
      api.dispatch(setDropdownOptions(payload.id, payload.options));
      acknowledge();
    },
  );

  IPCSubservice.onRequest<SetSelectedValuesPayload>(
    'setDropdownSelectedValues',
    async ({ payload, acknowledge }) => {
      api.dispatch(setSelectedValues(payload.id, payload.values));
      acknowledge();
    },
  );

  IPCSubservice.onRequest<SetSearchTermPayload>(
    'setDropdownSearchTerm',
    async ({ payload, acknowledge }) => {
      api.dispatch(setSearchTerm(payload.id, payload.term));
      acknowledge();
    },
  );

  IPCSubservice.onRequest<SetLoadingPayload>(
    'setDropdownLoading',
    async ({ payload, acknowledge }) => {
      api.dispatch(setDropdownLoading(payload.id, payload.loading));
      acknowledge();
    },
  );

  IPCSubservice.onRequest<ShowDropdownPayload>(
    'showDropdownOptions',
    async ({ payload, source, acknowledge, respond }) => {
      const { x: childX, y: childY, iframeId } = payload;

      if (!source) {
        console.warn('source is null! Unable to show dropdown.');
        acknowledge();
        return;
      }

      const iframeElement = document.getElementById(iframeId);
      const rect = iframeElement?.getBoundingClientRect();

      if (!rect) {
        console.warn('unable to find bounding rect for iframe!');
        acknowledge();
        return;
      }

      const sumX = rect.left + childX;
      const sumY = rect.top + childY;

      api.dispatch(showDropdownOptions(payload.id, sumX, sumY));
      pendingAcknowledgeFn = acknowledge;
      pendingRespondFn = respond;
    },
  );

  IPCSubservice.onRequest<HideDropdownPayload>(
    'hideDropdown',
    async ({ acknowledge, payload }) => {
      api.dispatch(hideDropdownOptions(payload));
      acknowledge();
      if (pendingAcknowledgeFn) pendingAcknowledgeFn();
    },
  );

  initialized = true;
  return next(action);
};

export default dropdownOptionsMiddleware;
