import { DataMask } from '@superset-ui/core';
import { Middleware } from 'redux';
import { UPDATE_DATA_MASK } from 'src/dataMask/actions';
import {
  SET_DATASOURCE,
  SET_DATASOURCES,
} from 'src/explore/actions/exploreActions';
import { store } from 'src/views/store';

type SuggestionKey = {
  filterId: string;
  suggestionKey: string;
};

export function suggestionKeyUpserted(params: SuggestionKey) {
  return {
    type: 'suggestionKeyUpserted',
    payload: params,
  };
}

export function suggestionKeyDeleted(filterId: string) {
  return {
    type: 'suggestionKeyDeleted',
    payload: filterId,
  };
}

let suggestionKeys: SuggestionKey[] = [];

const suggestionKeySyncMiddleware: Middleware = api => next => async action => {
  const result = next(action);

  const resync = () => {
    const rootState = api.getState() as ReturnType<typeof store.getState>;
    const dataMasks = Object.values(rootState.dataMask) as DataMask[];
    const relevantFilters = dataMasks
      .filter(dm => dm.extraFormData?.filters?.length)
      .flatMap(dm => dm.extraFormData!.filters!);

    const fetchCandidates = Object.values(rootState.datasources).flatMap(d => {
      const columnNames = d.columns.map(c => c.column_name);

      // Which suggestion keys exist in this datasource?
      const relevantKeys = columnNames.filter(name =>
        suggestionKeys.some(sk => sk.suggestionKey === name),
      );

      // Which filters apply to this datasource?
      const filtersForDatasource = relevantFilters.filter(f =>
        columnNames.includes(typeof f.col === 'string' ? f.col : f.col.label!),
      );

      return relevantKeys.map(key => ({
        datasource: d,
        key,
        filters: filtersForDatasource,
      }));
    });

    // const suggestions = SuggestionService.fetchSuggestions(fetchCandidates);
    // ContextService.sendSuggestions(suggestions);
    console.log(fetchCandidates);
  };

  if (action.type === 'suggestionKeyUpserted') {
    upsertSuggestionKey(action.payload);

    resync();
  }

  if (action.type === 'suggestionKeyDeleted') {
    deleteIfExists(action.payload);
  }

  // Covers initial datasources bootstrap, and addition of new datasources via
  // adding a chart to a dashboard.
  if (
    [SET_DATASOURCES, SET_DATASOURCE, UPDATE_DATA_MASK].includes(action.type)
  ) {
    resync();
  }

  return result;
};

function upsertSuggestionKey(key: SuggestionKey) {
  const maybeSuggestionKey = suggestionKeys.find(
    k => k.filterId === key.filterId,
  );

  if (maybeSuggestionKey) {
    maybeSuggestionKey.suggestionKey = key.suggestionKey;
  } else {
    suggestionKeys.push(key);
  }
}

function deleteIfExists(filterId: string) {
  suggestionKeys = suggestionKeys.filter(k => k.filterId !== filterId);
}

export default suggestionKeySyncMiddleware;
