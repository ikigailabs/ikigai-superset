export const SHOW_DATEPICKER = 'ikigai/datepicker/SHOW';
export const HIDE_DATEPICKER = 'ikigai/datepicker/HIDE';

export type DatepickerState = {
  visible: boolean;
  coords: { x: number; y: number } | null;
};

const initialState: DatepickerState = {
  visible: false,
  coords: null,
};

export type ShowDatepickerAction = {
  type: typeof SHOW_DATEPICKER;
  payload: { x: number; y: number };
};

export type HideDatepickerAction = {
  type: typeof HIDE_DATEPICKER;
};

export type DatepickerAction = ShowDatepickerAction | HideDatepickerAction;

export function datepickerReducer(
  state: DatepickerState = initialState,
  action: DatepickerAction,
): DatepickerState {
  switch (action.type) {
    case SHOW_DATEPICKER:
      return { visible: true, coords: action.payload };

    case HIDE_DATEPICKER:
      return { visible: false, coords: null };

    default:
      return state;
  }
}

export const showDatepicker = (x: number, y: number): ShowDatepickerAction => ({
  type: SHOW_DATEPICKER,
  payload: { x, y },
});

export const hideDatepicker = (): HideDatepickerAction => ({
  type: HIDE_DATEPICKER,
});

export const selectDatepickerVisible = (state: {
  datepicker?: DatepickerState;
}): boolean => state.datepicker?.visible ?? false;

export const selectDatepickerCoords = (state: {
  datepicker?: DatepickerState;
}): { x: number; y: number } | null => state.datepicker?.coords ?? null;
