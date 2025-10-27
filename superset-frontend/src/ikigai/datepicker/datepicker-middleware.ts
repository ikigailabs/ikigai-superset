import { IPCSubservice } from 'src/service/ipc-subservice';
import type { TypedMiddleware } from '../typed-middleware';
import { hideDatepicker, showDatepicker } from './datepicker-slice';

type ShowDatepickerPayload = {
  x: number;
  y: number;
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

const datepickerMiddleware: TypedMiddleware = api => next => action => {
  if (action.type === 'ikigai/dateSelected' && pendingRespondFn) {
    pendingRespondFn(action.payload.dateISO);
  }

  if (initialized === true) return next(action);

  IPCSubservice.onRequest<ShowDatepickerPayload>(
    'showDatepicker',
    async ({ respond, payload }) => {
      const { x, y } = payload;
      api.dispatch(showDatepicker(x, y));
      pendingRespondFn = respond;
    },
  );

  IPCSubservice.onRequest<HideDatepickerPayload>(
    'hideDatepicker',
    async ({ acknowledge }) => {
      api.dispatch(hideDatepicker());
      acknowledge();
    },
  );

  initialized = true;
  return next(action);
};

export default datepickerMiddleware;
