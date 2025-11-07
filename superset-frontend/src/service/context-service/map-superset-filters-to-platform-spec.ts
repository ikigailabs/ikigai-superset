type ScopeConfig = {
  scope: string[];
  immune: unknown[];
};

type Scopes = Record<string, ScopeConfig>;

export type DashboardFilter = {
  chartId: number;
  componentId: string;
  filterName: string;
  datasourceId: string;
  directPathToFilter: string[];
  isDateFilter: boolean;
  isInstantFilter: boolean;
  columns: Record<string, string[]>;
  labels: Record<string, string>;
  scopes: Scopes;
};

export type DashboardFilters = Record<string, DashboardFilter>;

type PlatformFilterField = {
  label: string;
  value: string[];
  multiple: boolean;
};

export type PlatformFilter = {
  filters: Record<string, string[] | string>;
  filterFields: PlatformFilterField[];
  chartId: string;
};

function mapFilterFields(columns: DashboardFilter['columns']) {
  return Object.entries(columns).map(([key, columnValue = []]) => {
    const filterField: PlatformFilterField = {
      label: key,
      value: columnValue,
      multiple: columnValue.length > 1,
    };

    return filterField;
  });
}

export function mapSupersetFiltersToPlatformSpec(
  dashboardFilters: DashboardFilters,
): PlatformFilter[] {
  return Object.entries(dashboardFilters).map(([chartId, dashFilter]) => ({
    filters: dashFilter.columns,
    filterFields: mapFilterFields(dashFilter.columns),
    chartId,
  }));
}
