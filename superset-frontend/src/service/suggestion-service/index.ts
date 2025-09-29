import { Datasource } from 'src/dashboard/types';

import { SupersetClient, type QueryObjectFilterClause } from '@superset-ui/core';
import { safeStringify } from 'src/utils/safeStringify';
import { getChartDataUri } from 'src/explore/exploreUtils';

type FetchCandidate = {
  datasource: Datasource;
  key: string;
  filters: QueryObjectFilterClause[];
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
      candidates.map(c => this.fetchWithCache(c))
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

    const formData: Record<string, any> = {
      datasource: candidate.datasource.uid,
      groupby: [candidate.key],
      filter_configs: buildFilterConfigs(candidate.key),
      adhoc_filters: buildAdhocFilters(candidate.filters),
    };

    const request = SupersetClient.get({
      url: buildExploreUrl(formData),
    })
      .then(({ json }) => {
        const result: Record<string, string>[] = json?.data?.records ?? [];
        const parsed = result.map((r) => r[candidate.key]);

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


function buildFilterConfigs(key: string) {
  return [
    {
      asc: true,
      column: key,
      multiple: true,
      searchAllOptions: false,
    }
  ]
}

function buildAdhocFilters(filters: QueryObjectFilterClause[]) {
  return filters.length ? filters.map((f) => ({
      clause: 'WHERE',
      expressionType: 'SIMPLE',
      subject: typeof f.col === 'string' ? f.col : f.col.label!,
      operator: f.op,
      comparator: (f as any).val, // Accessing this field is weird w.r.t. OperatorAndValue
    })
  ) : null;
}

function buildExploreUrl(formData: Record<string, any>) {
  const uri = getChartDataUri({ path: '/', allowDomainSharding: false, qs: false });
  const directory = '/superset/explore_json';
  const search = uri.search(true);

  search.form_data = safeStringify(formData);

  return uri.search(search).directory(directory).toString();
}

export const SuggestionService = new SuggestionServiceClass();
