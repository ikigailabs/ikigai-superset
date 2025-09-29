/**
 * This file serves as a single entrypoint into the Redux middleware ecosystem.
 * All custom Ikigai-created middleware should be loaded into Superset via
 * this file.
 */
import { filterSyncMiddleware, filterIpcMiddleware } from './filter-sync';
import suggestionMiddleware from './suggestion-key-listener';

export default [
  filterIpcMiddleware,
  filterSyncMiddleware,
  suggestionMiddleware,
];
