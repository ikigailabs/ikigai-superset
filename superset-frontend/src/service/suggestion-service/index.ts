import { Datasource } from 'src/dashboard/types';

import { SupersetClient } from '@superset-ui/core';
import { getChartDataUri } from 'src/explore/exploreUtils';
import type {
  PlatformFilter,
  PlatformValueFilter,
  SupersetOriginPlatformTimeFilter,
} from 'src/utils/filterUtils';

type FetchCandidate = {
  datasource: Datasource;
  key: string;
  filters: (SupersetOriginPlatformTimeFilter | PlatformValueFilter)[];
};

type GetChartDataResponse = {
  result: {
    colnames: string[];
    coltypes: number[];
    data: Record<string, any>[];
    rowcount: number;
    sql_rowcount: number;
  }[];
};

/**
 * Fetches suggestions for given column names. Also provides an in-memory
 * cache using columnName and filters as keys
 */
class SuggestionServiceClass {
  private cache: Map<string, Promise<string[]>> = new Map();
  private resolved: Map<string, string[]> = new Map();

  public async getSuggestions(candidates: FetchCandidate[]) {
    const results: String[][] = await Promise.all(
      candidates.map(c => this.fetchWithCache(c)),
    );

    return results.flat();
  }

  private async fetchWithCache(candidate: FetchCandidate) {
    const cacheKey = JSON.stringify(candidate);

    // Cache hit return cached val
    if (this.resolved.has(cacheKey)) {
      return this.resolved.get(cacheKey)!;
    }

    // Request in progress
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    // formData = applyFirstTimeFilter(formData, candidate.filters);

    const request = SupersetClient.post({
      url: buildExploreUrl(),
      jsonPayload: {
        datasource: {
          id: candidate.datasource.id,
          type: candidate.datasource.type,
        },
        force: false,
        queries: [
          {
            filters: [
              ...buildAdhocFilters(candidate.filters),
              ...buildTimeFilters(candidate.filters),
            ],
            metrics: [],
            groupby: [candidate.key],
            orderby: [[candidate.key, true]],
          },
        ],
        result_format: 'json',
        result_type: 'results',
      },
    })
      .then(({ json }) => {
        const result = (json as GetChartDataResponse).result;

        if (!result.length) return [];

        const parsed = result[0].data.map(r => r[candidate.key]);

        // Save resolved result
        this.resolved.set(cacheKey, parsed);
        this.cache.delete(cacheKey);
        return parsed;
      })
      .catch(err => {
        this.cache.delete(cacheKey);
        throw err;
      });

    // Store in-flight promise
    this.cache.set(cacheKey, request);

    return request;
  }
}

/**
 * Because Superset can only really handle *one* time-based filter, find
 * the first time first and apply it. In reality, there will only ever be 1 time
 * filter per-dashboard, but there is theoretically the possibility for >1.
 */
function buildTimeFilters(filters: PlatformFilter[]) {
  const timeFilters = filters.filter(
    f => f.type === 'time',
  ) as SupersetOriginPlatformTimeFilter[];

  if (timeFilters.length === 0) return [];

  const firstFilter = timeFilters[0];

  return [
    {
      op: 'TEMPORAL_RANGE',
      val: `${firstFilter.lowBound} : ${firstFilter.highBound}`,
      col: firstFilter.columnName,
    },
  ];
}

function buildAdhocFilters(filters: PlatformFilter[]) {
  return filters.filter(f => f.type === 'value').map(buildValueFilter);
}

function buildValueFilter(f: PlatformValueFilter) {
  return {
    col: f.columnName,
    op: f.op,
    val: (f as any).val, // Accessing this field is weird w.r.t. OperatorAndValue
  };
}

function buildExploreUrl() {
  const uri = getChartDataUri({
    path: '/api/v1/chart/data',
    allowDomainSharding: false,
    qs: false,
  });

  return uri.toString();
}

export const SuggestionService = new SuggestionServiceClass();
