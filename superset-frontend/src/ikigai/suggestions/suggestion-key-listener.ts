import { IPCSubservice } from 'src/ikigai/service/ipc-subservice';
import type { TypedMiddleware } from '../typed-middleware';
import { SuggestionService } from 'src/ikigai/service/suggestion-service';
import { getPlatformFiltersFromRootState } from 'src/ikigai/utils/filterUtils';

type GetSuggestionsPayload = {
  columnName: string;
  applyFilters: string[];
};

let initialized = false;

/**
 * Receives `getSuggestions` IPC events, then uses the Superset API
 * (via SuggestionService) to fetch the unique values for the given column
 * for each datasource which contains the given column.
 */
const suggestionMiddleware: TypedMiddleware = api => next => action => {
  if (initialized === true) return next(action);

  IPCSubservice.onRequest<GetSuggestionsPayload>(
    'getSuggestions',
    async ({ respond, payload }) => {
      const rootState = api.getState();
      const validFilters = getPlatformFiltersFromRootState(rootState);

      const fetchCandidates = Object.values(rootState.datasources)
        // Ignore datasources that do not contain the column name
        .filter(d =>
          d.columns.map(c => c.column_name).includes(payload.columnName),
        )
        .flatMap(d => {
          const columnNames = d.columns.map(c => c.column_name);

          // Which filters apply to this datasource? (match by column name)
          const filtersForDatasource = validFilters.filter(f =>
            columnNames.includes(f.columnName),
          );

          return {
            datasource: d,
            key: payload.columnName,
            filters: filtersForDatasource,
          };
        });

      const suggestions = await SuggestionService.getSuggestions(
        fetchCandidates,
      );

      respond(suggestions);
    },
  );

  initialized = true;
  return next(action);
};

export default suggestionMiddleware;
