"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8894],{32871:(t,e,n)=>{var i;n.d(e,{p:()=>i}),function(t){t.Dashboards="dashboards",t.Description="description",t.LastModified="lastModified",t.Owner="owner",t.Rows="rows",t.Sql="sql",t.Table="table",t.Tags="tags"}(i||(i={}))},67697:(t,e,n)=>{n.d(e,{pG:()=>y.p,ZP:()=>v});var i=n(87185),a=n.n(i),o=n(67294),l=n(99612),r=n(42968),s=n(58593),d=n(55786),c=n(61988),p=n(13322),u=n(11965);const g=r.Z.div`
  font-weight: ${({theme:t})=>t.typography.weights.bold};
`,h=({text:t,header:e})=>{const n=(0,d.Z)(t);return(0,u.tZ)(o.Fragment,null,e&&(0,u.tZ)(g,null,e),n.map((t=>(0,u.tZ)("div",{key:t},t))))},m=16,x={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},b=r.Z.div`
  ${({theme:t,count:e})=>`\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: ${t.colors.grayscale.light4};\n    color: ${t.colors.grayscale.base};\n    font-size: ${t.typography.sizes.s}px;\n    min-width: ${24+32*e-m}px;\n    border-radius: ${t.borderRadius}px;\n    line-height: 1;\n  `}
`,f=r.Z.div`
  ${({theme:t,collapsed:e,last:n,onClick:i})=>`\n    display: flex;\n    align-items: center;\n    max-width: ${174+(n?0:m)}px;\n    min-width: ${e?16+(n?0:m):94+(n?0:m)}px;\n    padding-right: ${n?0:m}px;\n    cursor: ${i?"pointer":"default"};\n    & .metadata-icon {\n      color: ${i&&e?t.colors.primary.base:t.colors.grayscale.base};\n      padding-right: ${e?0:8}px;\n      & .anticon {\n        line-height: 0;\n      }\n    }\n    & .metadata-text {\n      min-width: 70px;\n      overflow: hidden;\n      text-overflow: ${e?"unset":"ellipsis"};\n      white-space: nowrap;\n      text-decoration: ${i?"underline":"none"};\n      line-height: 1.4;\n    }\n  `}
`,w=r.Z.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Z=({barWidth:t,contentType:e,collapsed:n,last:i=!1,tooltipPlacement:a})=>{const{icon:l,title:r,tooltip:d=r}=(t=>{const{type:e}=t;switch(e){case y.p.Dashboards:return{icon:p.Z.FundProjectionScreenOutlined,title:t.title,tooltip:t.description?(0,u.tZ)("div",null,(0,u.tZ)(h,{header:t.title,text:t.description})):void 0};case y.p.Description:return{icon:p.Z.BookOutlined,title:t.value};case y.p.LastModified:return{icon:p.Z.EditOutlined,title:t.value,tooltip:(0,u.tZ)("div",null,(0,u.tZ)(h,{header:(0,c.t)("Last modified"),text:t.value}),(0,u.tZ)(h,{header:(0,c.t)("Modified by"),text:t.modifiedBy}))};case y.p.Owner:return{icon:p.Z.UserOutlined,title:t.createdBy,tooltip:(0,u.tZ)("div",null,(0,u.tZ)(h,{header:(0,c.t)("Created by"),text:t.createdBy}),!!t.owners&&(0,u.tZ)(h,{header:(0,c.t)("Owners"),text:t.owners}),(0,u.tZ)(h,{header:(0,c.t)("Created on"),text:t.createdOn}))};case y.p.Rows:return{icon:p.Z.InsertRowBelowOutlined,title:t.title,tooltip:t.title};case y.p.Sql:return{icon:p.Z.ConsoleSqlOutlined,title:t.title,tooltip:t.title};case y.p.Table:return{icon:p.Z.Table,title:t.title,tooltip:t.title};case y.p.Tags:return{icon:p.Z.TagsOutlined,title:t.values.join(", "),tooltip:(0,u.tZ)("div",null,(0,u.tZ)(h,{header:(0,c.t)("Tags"),text:t.values}))};default:throw Error(`Invalid type provided: ${e}`)}})(e),[g,m]=(0,o.useState)(!1),x=(0,o.useRef)(null),b=l,{type:Z,onClick:v}=e;(0,o.useEffect)((()=>{m(!!x.current&&x.current.scrollWidth>x.current.clientWidth)}),[t,m,e]);const $=(0,u.tZ)(f,{collapsed:n,last:i,onClick:v?()=>v(Z):void 0},(0,u.tZ)(b,{iconSize:"l",className:"metadata-icon"}),!n&&(0,u.tZ)("span",{ref:x,className:"metadata-text"},r));return g||n||d&&d!==r?(0,u.tZ)(s.u,{placement:a,title:(0,u.tZ)(w,null,d)},$):$};var y=n(32871);const v=({items:t,tooltipPlacement:e="top"})=>{const[n,i]=(0,o.useState)(),[r,s]=(0,o.useState)(!1),d=a()(t,((t,e)=>t.type===e.type)).sort(((t,e)=>x[t.type]-x[e.type])),c=d.length;if(c<2)throw Error("The minimum number of items for the metadata bar is 2.");if(c>6)throw Error("The maximum number of items for the metadata bar is 6.");const p=(0,o.useCallback)((t=>{const e=110*c-m;i(t),s(Boolean(t&&t<e))}),[c]),{ref:g}=(0,l.NB)({onResize:p});return(0,u.tZ)(b,{ref:g,count:c,"data-test":"metadata-bar"},d.map(((t,i)=>(0,u.tZ)(Z,{barWidth:n,key:i,contentType:t,collapsed:r,last:i===c-1,tooltipPlacement:e}))))}},45306:(t,e,n)=>{n.d(e,{u:()=>o}),n(67294);var i=n(11965);const a=t=>i.iv`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${t.colors.grayscale.light5};
  height: 65px;
  padding: 0 ${4*t.gridUnit}px;

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
`,o=({rightPanelAdditionalItems:t})=>(0,i.tZ)("div",{css:a,className:"header-with-actions"},(0,i.tZ)("div",{className:"title-panel"}),(0,i.tZ)("div",{className:"right-button-panel"},t))},46977:(t,e,n)=>{n.d(e,{Z:()=>w,u:()=>i});var i,a=n(73126),o=n(18446),l=n.n(o),r=n(67294),s=n(42968),d=n(61988),c=n(79521),p=n(4715),u=n(64158),g=n(97754),h=n(11965);!function(t){t.Default="Default",t.Small="Small"}(i||(i={}));const m=s.Z.div`
  margin: ${({theme:t})=>40*t.gridUnit}px 0;
`,x=s.Z.div`
  ${({scrollTable:t,theme:e})=>t&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*e.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:t,small:e})=>!e&&`height: ${11*t.gridUnit-1}px;`}

    .table-cell {
      ${({theme:t,small:e})=>e&&`\n        padding-top: ${t.gridUnit+1}px;\n        padding-bottom: ${t.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:t})=>`${t.gridUnit-2}px solid ${t.colors.grayscale.light2}`};
    ${({small:t})=>t&&"padding-bottom: 0;"}
  }
`,b=s.Z.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:t})=>t.colors.grayscale.light5};

  ${({isPaginationSticky:t})=>t&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:t})=>2*t.gridUnit}px;
    color: ${({theme:t})=>t.colors.grayscale.base};
  }
`,f=({columns:t,data:e,pageSize:n,totalCount:o=e.length,initialPageIndex:s,initialSortBy:f=[],loading:w=!1,withPagination:Z=!0,emptyWrapperType:y=i.Default,noDataText:v,showRowCount:$=!0,serverPagination:P=!1,columnsForWrapText:S,onServerPagination:T=(()=>{}),scrollTopOnPagination:k=!1,...E})=>{const B={pageSize:null!=n?n:10,pageIndex:null!=s?s:0,sortBy:f},{getTableProps:C,getTableBodyProps:I,headerGroups:O,page:R,rows:D,prepareRow:M,pageCount:N,gotoPage:z,state:{pageIndex:U,pageSize:F,sortBy:L}}=(0,c.useTable)({columns:t,data:e,initialState:B,manualPagination:P,manualSortBy:P,pageCount:Math.ceil(o/B.pageSize)},c.useFilters,c.useSortBy,c.usePagination),W=Z?R:D;let q;switch(y){case i.Small:q=({children:t})=>(0,h.tZ)(r.Fragment,null,t);break;case i.Default:default:q=({children:t})=>(0,h.tZ)(m,null,t)}const G=!w&&0===W.length,j=N>1&&Z,A=(0,r.useRef)(null);return(0,r.useEffect)((()=>{P&&U!==B.pageIndex&&T({pageIndex:U})}),[U]),(0,r.useEffect)((()=>{P&&!l()(L,B.sortBy)&&T({pageIndex:0,sortBy:L})}),[L]),(0,h.tZ)(r.Fragment,null,(0,h.tZ)(x,(0,a.Z)({},E,{ref:A}),(0,h.tZ)(g.Z,{getTableProps:C,getTableBodyProps:I,prepareRow:M,headerGroups:O,rows:W,columns:t,loading:w,columnsForWrapText:S}),G&&(0,h.tZ)(q,null,v?(0,h.tZ)(p.HY,{image:p.HY.PRESENTED_IMAGE_SIMPLE,description:v}):(0,h.tZ)(p.HY,{image:p.HY.PRESENTED_IMAGE_SIMPLE}))),j&&(0,h.tZ)(b,{className:"pagination-container",isPaginationSticky:E.isPaginationSticky},(0,h.tZ)(u.Z,{totalPages:N||0,currentPage:N?U+1:0,onChange:t=>(t=>{var e;k&&(null==A||null==(e=A.current)||e.scroll(0,0)),z(t)})(t-1),hideFirstAndLastPageLinks:!0}),$&&(0,h.tZ)("div",{className:"row-count-container"},!w&&(0,d.t)("%s-%s of %s",F*U+(R.length&&1),F*U+R.length,o))))},w=r.memo(f)},76962:(t,e,n)=>{n.d(e,{Z:()=>i.Z,u:()=>i.u});var i=n(46977)}}]);
//# sourceMappingURL=0621d69e02d5ad0f0d92.chunk.js.map