/**
 * Ikigai Redux reducer entrypoint.
 *
 * This exports a plain object containing all Ikigai-managed reducers,
 * which can be safely merged into Superset’s existing reducer system
 * (whether via combineReducers or dynamic injection).
 */

import { datepickerReducer } from './datepicker/datepicker-slice';
import { dropdownOptionsReducer } from './dropdown-options/dropdown-options-slice';

export default {
  datepicker: datepickerReducer,
  dropdownOptions: dropdownOptionsReducer,
};

export interface IkigaiState {
  datepicker: ReturnType<typeof datepickerReducer>;
  dropdownOptions: ReturnType<typeof dropdownOptionsReducer>;
}
