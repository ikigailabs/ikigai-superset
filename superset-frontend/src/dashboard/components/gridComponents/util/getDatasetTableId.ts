function getDatasetTableId(tableName: string, dashboardLayout: any) {
  let datasetTableId: any = null;
  if (dashboardLayout && Object.keys(dashboardLayout).length > 0) {
    Object.keys(dashboardLayout).forEach((eleId: string) => {
      console.log('ele: ', dashboardLayout[eleId]);
      if (dashboardLayout[eleId].type === 'CHART') {
        const chartId = dashboardLayout[eleId]?.meta?.chartId;
        const sliceName = dashboardLayout[eleId]?.meta?.sliceName;
        console.log('sliceName', sliceName);
        if (sliceName.includes('Dataset: ')) {
          const actualName = sliceName.split('Dataset: ')?.[1];
          if (actualName && tableName && actualName === tableName) {
            datasetTableId = chartId;
          }
        }
      }
    });
  }
  console.log('datasetTableId', datasetTableId);
  return datasetTableId;
}

export default getDatasetTableId;
