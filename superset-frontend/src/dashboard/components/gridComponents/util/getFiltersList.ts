function getFiltersList(
  filters: any,
  charts: object,
  datasources: object,
  dashboardLayout: any,
  chartsData: any,
) {
  console.log(
    'getFiltersList',
    filters,
    charts,
    datasources,
    dashboardLayout,
    chartsData,
  );
  const supersetFilters: any[] = [];
  const tempCharts: any = { ...charts };
  if (dashboardLayout && Object.keys(dashboardLayout).length > 0) {
    Object.keys(dashboardLayout).forEach((eleId: string) => {
      // console.log('filter', dashboardLayout[eleId]);
      if (dashboardLayout[eleId].type === 'CHART') {
        const chartId = dashboardLayout[eleId]?.meta?.chartId;
        const sliceName = dashboardLayout[eleId]?.meta?.sliceName;
        if (tempCharts[chartId]) {
          tempCharts[chartId].name = sliceName;
        }
      }
    });
  }
  console.log('tempCharts', tempCharts);
  if (filters && dashboardLayout && Object.keys(dashboardLayout).length > 0) {
    Object.keys(filters).forEach((filterId: string, filterIndex: number) => {
      // console.log('filter', filters[filterId]);
      supersetFilters[filterIndex] = filters[filterId];
      const chartsInScope: any[] = filters[filterId]?.chartsInScope;
      let filterCharts: any = {};
      if (chartsInScope) {
        chartsInScope.forEach((chartId: string) => {
          if (tempCharts[chartId]) {
            if (chartsData) {
              const numericChartId: number = parseInt(chartId, 10);
              let foundChartData: any = null;
              Object.keys(chartsData).forEach((chart: any) => {
                if (chartsData[chart].chartsInScope.includes(numericChartId)) {
                  foundChartData = chartsData[chart];
                }
              });
              console.log('numericChartId', numericChartId, foundChartData);
              tempCharts[chartId].chartData = foundChartData.data;
              /* if (tempCharts[chartId].queriesResponse[0]) {
                tempCharts[chartId].queriesResponse[0].data =
                  foundChartData.data;
              } */
            }
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
  console.log('tempCharts2', tempCharts, supersetFilters);
  // console.log('filters', filters);
  return supersetFilters;
}

export default getFiltersList;
