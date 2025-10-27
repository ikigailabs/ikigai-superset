import { IPCSubservice } from 'src/service/ipc-subservice';
import type { TypedMiddleware } from '../typed-middleware';
import { hideDatepicker, showDatepicker } from './datepicker-slice';

type ShowDatepickerPayload = {
  x: number;
  y: number;
  iframeId: string;
};

type HideDatepickerPayload = {};

export const dateSelected = (dateISO: string | null) => {
  return {
    type: 'ikigai/dateSelected',
    payload: {
      dateISO: dateISO,
    },
  };
};

let initialized = false;
let pendingRespondFn: (payload: any) => void | undefined;
let pendingAcknowledgeFn: () => void | undefined;

const datepickerMiddleware: TypedMiddleware = api => next => action => {
  if (action.type === 'ikigai/dateSelected' && pendingRespondFn) {
    pendingRespondFn(action.payload.dateISO);
  }

  if (initialized === true) return next(action);

  IPCSubservice.onRequest<ShowDatepickerPayload>(
    'showDatepicker',
    async ({ respond, payload, source, acknowledge }) => {
      const { x: childX, y: childY, iframeId } = payload;

      if (!source) {
        console.warn('source is null! Unable to show calendar.');
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

      api.dispatch(showDatepicker(sumX, sumY));
      pendingRespondFn = respond;
      pendingAcknowledgeFn = acknowledge;
    },
  );

  IPCSubservice.onRequest<HideDatepickerPayload>(
    'hideDatepicker',
    async ({ acknowledge }) => {
      api.dispatch(hideDatepicker());
      acknowledge();
      pendingAcknowledgeFn();
    },
  );

  initialized = true;
  return next(action);
};

export default datepickerMiddleware;
