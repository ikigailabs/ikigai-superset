/**
 * This file serves as a single entrypoint into the Redux middleware ecosystem.
 * All custom Ikigai-created middleware should be loaded into Superset via
 * this file.
 */
import datepickerMiddleware from './datepicker/datepicker-middleware';
import dropdownOptionsMiddleware from './dropdown-options/dropdown-options-middleware';
import {
  filterSyncMiddleware,
  filterIpcMiddleware,
} from './filters/filter-sync';
import suggestionMiddleware from './suggestions/suggestion-key-listener';

export default [
  filterIpcMiddleware,
  filterSyncMiddleware,
  suggestionMiddleware,
  datepickerMiddleware,
  dropdownOptionsMiddleware,
];
