"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[671],{70175:(e,t,n)=>{var i;n.d(t,{Q:()=>i}),function(e){e.Dashboards="dashboards",e.Description="description",e.LastModified="lastModified",e.Owner="owner",e.Rows="rows",e.Sql="sql",e.Table="table",e.Tags="tags"}(i||(i={}))},13917:(e,t,n)=>{n.d(t,{QD:()=>v.Q,Ay:()=>Y});var i=n(9063),a=n.n(i),o=n(96540),l=n(98250),r=n(90017),s=n(19129),d=n(62952),c=n(95579),p=n(12249),u=n(17437);const g=r.A.div`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,h=({text:e,header:t})=>{const n=(0,d.A)(e);return(0,u.Y)(o.Fragment,null,t&&(0,u.Y)(g,null,t),n.map((e=>(0,u.Y)("div",{key:e},e))))},m=16,x={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},b=r.A.div`
  ${({theme:e,count:t})=>`\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: ${e.colors.grayscale.light4};\n    color: ${e.colors.grayscale.base};\n    font-size: ${e.typography.sizes.s}px;\n    min-width: ${24+32*t-m}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 1;\n  `}
`,f=r.A.div`
  ${({theme:e,collapsed:t,last:n,onClick:i})=>`\n    display: flex;\n    align-items: center;\n    max-width: ${174+(n?0:m)}px;\n    min-width: ${t?16+(n?0:m):94+(n?0:m)}px;\n    padding-right: ${n?0:m}px;\n    cursor: ${i?"pointer":"default"};\n    & .metadata-icon {\n      color: ${i&&t?e.colors.primary.base:e.colors.grayscale.base};\n      padding-right: ${t?0:8}px;\n      & .anticon {\n        line-height: 0;\n      }\n    }\n    & .metadata-text {\n      min-width: 70px;\n      overflow: hidden;\n      text-overflow: ${t?"unset":"ellipsis"};\n      white-space: nowrap;\n      text-decoration: ${i?"underline":"none"};\n      line-height: 1.4;\n    }\n  `}
`,w=r.A.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,y=({barWidth:e,contentType:t,collapsed:n,last:i=!1,tooltipPlacement:a})=>{const{icon:l,title:r,tooltip:d=r}=(e=>{const{type:t}=e;switch(t){case v.Q.Dashboards:return{icon:p.A.FundProjectionScreenOutlined,title:e.title,tooltip:e.description?(0,u.Y)("div",null,(0,u.Y)(h,{header:e.title,text:e.description})):void 0};case v.Q.Description:return{icon:p.A.BookOutlined,title:e.value};case v.Q.LastModified:return{icon:p.A.EditOutlined,title:e.value,tooltip:(0,u.Y)("div",null,(0,u.Y)(h,{header:(0,c.t)("Last modified"),text:e.value}),(0,u.Y)(h,{header:(0,c.t)("Modified by"),text:e.modifiedBy}))};case v.Q.Owner:return{icon:p.A.UserOutlined,title:e.createdBy,tooltip:(0,u.Y)("div",null,(0,u.Y)(h,{header:(0,c.t)("Created by"),text:e.createdBy}),!!e.owners&&(0,u.Y)(h,{header:(0,c.t)("Owners"),text:e.owners}),(0,u.Y)(h,{header:(0,c.t)("Created on"),text:e.createdOn}))};case v.Q.Rows:return{icon:p.A.InsertRowBelowOutlined,title:e.title,tooltip:e.title};case v.Q.Sql:return{icon:p.A.ConsoleSqlOutlined,title:e.title,tooltip:e.title};case v.Q.Table:return{icon:p.A.Table,title:e.title,tooltip:e.title};case v.Q.Tags:return{icon:p.A.TagsOutlined,title:e.values.join(", "),tooltip:(0,u.Y)("div",null,(0,u.Y)(h,{header:(0,c.t)("Tags"),text:e.values}))};default:throw Error(`Invalid type provided: ${t}`)}})(t),[g,m]=(0,o.useState)(!1),x=(0,o.useRef)(null),b=l,{type:y,onClick:Y}=t;(0,o.useEffect)((()=>{m(!!x.current&&x.current.scrollWidth>x.current.clientWidth)}),[e,m,t]);const $=(0,u.Y)(f,{collapsed:n,last:i,onClick:Y?()=>Y(y):void 0},(0,u.Y)(b,{iconSize:"l",className:"metadata-icon"}),!n&&(0,u.Y)("span",{ref:x,className:"metadata-text"},r));return g||n||d&&d!==r?(0,u.Y)(s.m,{placement:a,title:(0,u.Y)(w,null,d)},$):$};var v=n(70175);const Y=({items:e,tooltipPlacement:t="top"})=>{const[n,i]=(0,o.useState)(),[r,s]=(0,o.useState)(!1),d=a()(e,((e,t)=>e.type===t.type)).sort(((e,t)=>x[e.type]-x[t.type])),c=d.length;if(c<2)throw Error("The minimum number of items for the metadata bar is 2.");if(c>6)throw Error("The maximum number of items for the metadata bar is 6.");const p=(0,o.useCallback)((e=>{const t=110*c-m;i(e),s(Boolean(e&&e<t))}),[c]),{ref:g}=(0,l.uZ)({onResize:p});return(0,u.Y)(b,{ref:g,count:c,"data-test":"metadata-bar"},d.map(((e,i)=>(0,u.Y)(y,{barWidth:n,key:i,contentType:e,collapsed:r,last:i===c-1,tooltipPlacement:t}))))}},76923:(e,t,n)=>{n.d(t,{U:()=>o}),n(96540);var i=n(17437);const a=e=>i.AH`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colors.grayscale.light5};
  height: 65px;
  padding: 0 ${4*e.gridUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: auto;
    order: 1;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
    order: 2;
  }

  .iki-logo {
    width: 32px;
    heigh: auto;
    margin-right: 10px;
  }
`,o=({rightPanelAdditionalItems:e})=>(0,i.Y)("div",{css:a,className:"header-with-actions"},(0,i.Y)("div",{className:"title-panel"}),(0,i.Y)("div",{className:"right-button-panel"},e))},54016:(e,t,n)=>{n.d(t,{A:()=>w,V:()=>i});var i,a=n(97032),o=n(2404),l=n.n(o),r=n(96540),s=n(90017),d=n(95579),c=n(38914),p=n(15595),u=n(47251),g=n(73204),h=n(17437);!function(e){e.Default="Default",e.Small="Small"}(i||(i={}));const m=s.A.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,x=s.A.div`
  ${({scrollTable:e,theme:t})=>e&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*t.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:e,small:t})=>!t&&`height: ${11*e.gridUnit-1}px;`}

    .table-cell {
      ${({theme:e,small:t})=>t&&`\n        padding-top: ${e.gridUnit+1}px;\n        padding-bottom: ${e.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:e})=>`${e.gridUnit-2}px solid ${e.colors.grayscale.light2}`};
    ${({small:e})=>e&&"padding-bottom: 0;"}
  }
`,b=s.A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  ${({isPaginationSticky:e})=>e&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,f=({columns:e,data:t,pageSize:n,totalCount:o=t.length,initialPageIndex:s,initialSortBy:f=[],loading:w=!1,withPagination:y=!0,emptyWrapperType:v=i.Default,noDataText:Y,showRowCount:$=!0,serverPagination:S=!1,columnsForWrapText:A,onServerPagination:P=(()=>{}),scrollTopOnPagination:T=!1,...k})=>{const E={pageSize:null!=n?n:10,pageIndex:null!=s?s:0,sortBy:f},{getTableProps:B,getTableBodyProps:C,headerGroups:I,page:D,rows:O,prepareRow:R,pageCount:Q,gotoPage:M,state:{pageIndex:U,pageSize:z,sortBy:N}}=(0,c.useTable)({columns:e,data:t,initialState:E,manualPagination:S,manualSortBy:S,pageCount:Math.ceil(o/E.pageSize)},c.useFilters,c.useSortBy,c.usePagination),F=y?D:O;let L;switch(v){case i.Small:L=({children:e})=>(0,h.Y)(r.Fragment,null,e);break;case i.Default:default:L=({children:e})=>(0,h.Y)(m,null,e)}const W=!w&&0===F.length,q=Q>1&&y,j=(0,r.useRef)(null);return(0,r.useEffect)((()=>{S&&U!==E.pageIndex&&P({pageIndex:U})}),[U]),(0,r.useEffect)((()=>{S&&!l()(N,E.sortBy)&&P({pageIndex:0,sortBy:N})}),[N]),(0,h.Y)(r.Fragment,null,(0,h.Y)(x,(0,a.A)({},k,{ref:j}),(0,h.Y)(g.A,{getTableProps:B,getTableBodyProps:C,prepareRow:R,headerGroups:I,rows:F,columns:e,loading:w,columnsForWrapText:A}),W&&(0,h.Y)(L,null,Y?(0,h.Y)(p.Sv,{image:p.Sv.PRESENTED_IMAGE_SIMPLE,description:Y}):(0,h.Y)(p.Sv,{image:p.Sv.PRESENTED_IMAGE_SIMPLE}))),q&&(0,h.Y)(b,{className:"pagination-container",isPaginationSticky:k.isPaginationSticky},(0,h.Y)(u.A,{totalPages:Q||0,currentPage:Q?U+1:0,onChange:e=>(e=>{var t;T&&(null==j||null==(t=j.current)||t.scroll(0,0)),M(e)})(e-1),hideFirstAndLastPageLinks:!0}),$&&(0,h.Y)("div",{className:"row-count-container"},!w&&(0,d.t)("%s-%s of %s",z*U+(D.length&&1),z*U+D.length,o))))},w=r.memo(f)},50217:(e,t,n)=>{n.d(t,{A:()=>i.A,V:()=>i.V});var i=n(54016)}}]);
//# sourceMappingURL=78ede3309ddb70447242.chunk.js.map