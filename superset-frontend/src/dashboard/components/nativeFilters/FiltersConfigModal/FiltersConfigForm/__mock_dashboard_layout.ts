export const mockedDashboardLayout: any = {
  'CHART-HhxDN0hKoi': {
    children: [],
    id: 'CHART-HhxDN0hKoi',
    meta: {
      chartId: 96,
      height: 50,
      sliceName: 'Games per Genre',
      uuid: '0499bdec-0837-44f3-ae8a-8c670de81afd',
      width: 12,
    },
    parents: ['ROOT_ID', 'GRID_ID', 'ROW-0jIt4w0ovu'],
    type: 'CHART',
  },
  'CHART-yaH-6vheAD': {
    children: [],
    id: 'CHART-yaH-6vheAD',
    meta: {
      chartId: 39392,
      height: 50,
      sliceName: 'Testing Testing 123',
      uuid: 'a40879d5-653a-42fe-9314-bbe88ad26e92',
      width: 12,
    },
    parents: ['ROOT_ID', 'GRID_ID', 'ROW-9A-InI9wCn'],
    type: 'CHART',
  },
  DASHBOARD_VERSION_KEY: 'v2',
  GRID_ID: {
    children: [
      'ROW-0jIt4w0ovu',
      'ROW-LT3YsCH8jR',
      'ROW-sizz1U8pfX',
      'ROW-9A-InI9wCn',
    ],
    id: 'GRID_ID',
    parents: ['ROOT_ID'],
    type: 'GRID',
  },
  HEADER_ID: {
    id: 'HEADER_ID',
    type: 'HEADER',
    meta: {
      text: 'dash4',
    },
  },
  'IKI_DYNAMIC_MARKDOWN-Rqr4prGNr2': {
    children: [],
    id: 'IKI_DYNAMIC_MARKDOWN-Rqr4prGNr2',
    meta: {
      code: "<span id='custom-markdown-span-IKI_DYNAMIC_MARKDOWN-Rqr4prGNr2' data-customhtmlid='a_2ri8aOTpwh0vd1DmdM6eZize4jW' />",
      height: 50,
      width: 12,
    },
    parents: ['ROOT_ID', 'GRID_ID', 'ROW-sizz1U8pfX'],
    type: 'IKI_DYNAMIC_MARKDOWN',
  },
  'IKI_DYNAMIC_MARKDOWN-V4x4PmgInn': {
    children: [],
    id: 'IKI_DYNAMIC_MARKDOWN-V4x4PmgInn',
    meta: {
      code: "<span id='custom-markdown-span-IKI_DYNAMIC_MARKDOWN-V4x4PmgInn' data-customhtmlid='a_2ri6mHdGUDYT6d1vfDIp1HEbcBu' />",
      height: 50,
      width: 12,
    },
    parents: ['ROOT_ID', 'GRID_ID', 'ROW-LT3YsCH8jR'],
    type: 'IKI_DYNAMIC_MARKDOWN',
  },
  ROOT_ID: {
    children: ['GRID_ID'],
    id: 'ROOT_ID',
    type: 'ROOT',
  },
  'ROW-0jIt4w0ovu': {
    children: ['CHART-HhxDN0hKoi'],
    id: 'ROW-0jIt4w0ovu',
    meta: {
      background: 'BACKGROUND_TRANSPARENT',
    },
    parents: ['ROOT_ID', 'GRID_ID'],
    type: 'ROW',
  },
  'ROW-9A-InI9wCn': {
    children: ['CHART-yaH-6vheAD'],
    id: 'ROW-9A-InI9wCn',
    meta: {
      background: 'BACKGROUND_TRANSPARENT',
    },
    parents: ['ROOT_ID', 'GRID_ID'],
    type: 'ROW',
  },
  'ROW-LT3YsCH8jR': {
    children: ['IKI_DYNAMIC_MARKDOWN-V4x4PmgInn'],
    id: 'ROW-LT3YsCH8jR',
    meta: {
      background: 'BACKGROUND_TRANSPARENT',
    },
    parents: ['ROOT_ID', 'GRID_ID'],
    type: 'ROW',
  },
  'ROW-sizz1U8pfX': {
    children: ['IKI_DYNAMIC_MARKDOWN-Rqr4prGNr2'],
    id: 'ROW-sizz1U8pfX',
    meta: {
      background: 'BACKGROUND_TRANSPARENT',
    },
    parents: ['ROOT_ID', 'GRID_ID'],
    type: 'ROW',
  },
};
