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
  columns: Record<string, string[] | string>;
  labels: Record<string, string>;
  scopes: Scopes;
};

export type DashboardFilters = Record<string, DashboardFilter>;

type PlatformFilterField = {
  key: string;
  value: any;
  label: string;
  multiple: boolean;
};

type PlatformFilterFields = Record<string, PlatformFilterField>;

export type PlatformFilter = {
  filters: Record<string, string[] | string>;
  filterFields: PlatformFilterFields;
  chartId: string;
};

function mapFilterFields(dashboardFilter: DashboardFilter) {
  const filterFieldMap: Record<string, PlatformFilterField> = Object.entries(
    dashboardFilter['columns'],
  ).reduce((acc, [key, filter]) => {
    const isMultiple = typeof filter === 'string' ? false : filter?.length > 1;

    const label = dashboardFilter['labels'][key];

    acc[label] = {
      key,
      value: filter,
      label,
      multiple: isMultiple,
    };

    return acc;
  }, {});

  return filterFieldMap;
}

export function mapSupersetFiltersToPlatformSpec(
  dashboardFilters: DashboardFilters,
): PlatformFilter[] {
  return Object.entries(dashboardFilters).map(([chartId, dashFilter]) => ({
    filters: dashFilter.columns,
    filterFields: mapFilterFields(dashFilter),
    chartId,
  }));
}
