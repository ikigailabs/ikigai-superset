function getFiltersList(
  filters: any,
  charts: object,
  datasources: object,
  dashboardLayout: any,
) {
  // console.log('getFiltersList', filters, charts, datasources, dashboardLayout);
  let supersetFilters: any[] = [];
  const tempCharts: any = { ...charts };
  if (dashboardLayout && Object.keys(dashboardLayout).length > 0) {
    Object.keys(dashboardLayout).forEach((eleId: string) => {
      // console.log('filter', dashboardLayout[eleId]);
      if (dashboardLayout[eleId].type === 'CHART') {
        const chartId = dashboardLayout[eleId]?.meta?.chartId;
        const sliceName = dashboardLayout[eleId]?.meta?.sliceName;
        if (tempCharts[chartId]) {
          tempCharts[chartId]['name'] = sliceName;
        }
      }
    });
  }
  if (filters && dashboardLayout && Object.keys(dashboardLayout).length > 0) {
    Object.keys(filters).forEach((filterId: string, filterIndex: number) => {
      // console.log('filter', filters[filterId]);
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
          supersetFilters[filterIndex]['charts'] = filterCharts;
        }
      }
    });
  }
  //console.log('filters', filters);
  return supersetFilters;
}

export default getFiltersList;
