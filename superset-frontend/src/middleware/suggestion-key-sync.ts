import { SupersetClient } from '@superset-ui/core';
import { Middleware } from 'redux';
import {
  CHART_RENDERING_SUCCEEDED,
  REMOVE_CHART,
} from 'src/components/Chart/chartAction';
import { DASHBOARD_INFO_UPDATED } from 'src/dashboard/actions/dashboardInfo';
import { REMOVE_SLICE } from 'src/dashboard/actions/dashboardState';
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
  console.log(action);
  const result = next(action);
  const resync = () => {
    const rootState = api.getState() as ReturnType<typeof store.getState>;

    /**
     * `datasources` *can* become stale. This happens when:
     *
     * - User is editing Dashboard (in edit mode)
     * - Chart component is removed
     *   - this is the only chart referencing a given datasource
     *   - datasource will remain in the dashboard datasources
     *   - suggestions now contain stale data
     *
     * This issue is very limited is scope and can be ignored for now.
     */
    const datasources = Object.values(rootState.datasources);
    const fetchCandidates = datasources.map(d => {
      const columnNames = d.columns.map(c => c.column_name);

      const relevantSuggestionKeys = columnNames.filter(columnNames => {
        return suggestionKeys.some(sk => {
          return sk.suggestionKey === columnNames;
        });
      });

      return relevantSuggestionKeys.map(key => {
        return {
          datasource: d,
          key,
        };
      });
    });

    // const fetchResults = suggestionService.fetchAll(fetchCandidates);
    // const allColumns = suggestionKeys.map((sk) => sk.suggestionKey);
    // const uniqueColumns = new Set([allColumns]);
    // const suggestionsPerColumn = uniqueColumns.map(() => ... iterate thru fetches, flat mapping and making unique all column values (suggestions) ...)
    // ContextService.sendSuggests(suggestionsPerColumn);
    // for all current datasources, merge suggestions and pass to frontend

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
  if ([SET_DATASOURCES, SET_DATASOURCE].includes(action.type)) {
    resync();
    // const formData = new FormData();
    // formData.append(
    //   'form_data',
    //   JSON.stringify({
    //     datasource: '2__table',
    //     viz_type: 'filter_box',
    //     slice_id: 553,
    //     granularity_sqla: 'ds',
    //     time_grain_sqla: 'P1D',
    //     time_range: 'No filter',
    //     filter_configs: [
    //       {
    //         asc: true,
    //         clearable: true,
    //         column: 'name',
    //         key: 'SJoiVfJhll',
    //         multiple: true,
    //         searchAllOptions: false,
    //       },
    //     ],
    //     date_filter: false,
    //     adhoc_filters: [],
    //     extra_form_data: {},
    //     shared_label_colors: {},
    //     extra_filters: [],
    //   }),
    // );
    // const r = await SupersetClient.post({
    //   url:
    //     (slices[0] as any).slice_url.replace('explore', 'explore_json') +
    //     '&dashboard_id=11',
    //   // headers: {
    //   //   'Content-Disposition': 'form-data',
    //   //   name: 'form_data',
    //   // },
    //   body: formData,
    // });
    // resync();
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
