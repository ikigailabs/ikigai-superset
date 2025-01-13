function getFiltersList(
  filters: any,
  charts: object,
  datasources: object,
  dashboardLayout: any,
) {
  const supersetFilters: any[] = [];
  const tempCharts: any = { ...charts };
  if (dashboardLayout && Object.keys(dashboardLayout).length > 0) {
    Object.keys(dashboardLayout).forEach((eleId: string) => {
      if (dashboardLayout[eleId].type === 'CHART') {
        const chartId = dashboardLayout[eleId]?.meta?.chartId;
        const sliceName = dashboardLayout[eleId]?.meta?.sliceName;
        if (tempCharts[chartId]) {
          tempCharts[chartId].name = sliceName;
        }
      }
    });
  }
  if (filters && dashboardLayout && Object.keys(dashboardLayout).length > 0) {
    Object.keys(filters).forEach((filterId: string, filterIndex: number) => {
      supersetFilters[filterIndex] = filters[filterId];
      const chartsInScope: any[] = filters[filterId]?.chartsInScope;
      let filterCharts: any = {};
      if (chartsInScope) {
        chartsInScope.forEach((chartId: string) => {
          if (tempCharts[chartId]) {
            filterCharts = {
              ...filterCharts,
              [chartId]: tempCharts[chartId],
            };
          }
        });
        if (filterCharts) {
          supersetFilters[filterIndex].charts = filterCharts;
        }
      }
    });
  }
  return supersetFilters;
}

export default getFiltersList;
