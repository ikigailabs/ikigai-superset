"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5011],{32103:(e,t,n)=>{n.d(t,{Kv:()=>a,T4:()=>s,Ul:()=>d,Z6:()=>r,ZU:()=>c}),n(67294);var l=n(68924),i=n(11965);const o=new l.FilterXSS({whiteList:{...(0,l.getDefaultWhiteList)(),span:["style","class","title"],div:["style","class"],a:["style","class","href","title","target"],img:["style","class","src","alt","title","width","height"],video:["autoplay","controls","loop","preload","src","height","width","muted"]},stripIgnoreTag:!0,css:!1});function r(e){return o.process(e)}function a(e){return Array.from((new DOMParser).parseFromString(e,"text/html").body.childNodes).some((({nodeType:e})=>1===e))}function s(e){return a(e)?r(e):e}function d(e){return a(e)?(0,i.tZ)("span",{className:"safe-html-wrapper",dangerouslySetInnerHTML:{__html:r(e)}}):e}function c(e){return e.replace(/<[^>]*>/g,"")}},93197:(e,t,n)=>{n.d(t,{tR:()=>T,iZ:()=>x,iA:()=>N,ex:()=>R,ZP:()=>k});var l=n(73126),i=n(67294),o=n(2307),r=n(31929),a=n(42968),s=n(61988),d=n(68492),c=n(51995),u=n(38703);const h=(e,t,n)=>{let l=!1;const i=t-e;return i>0&&i<=n&&(l=!0),l};class g{constructor(e,t,n){this.tableRef=void 0,this.columnRef=void 0,this.setDerivedColumns=void 0,this.isDragging=void 0,this.resizable=void 0,this.reorderable=void 0,this.derivedColumns=void 0,this.RESIZE_INDICATOR_THRESHOLD=void 0,this.clearListeners=()=>{document.removeEventListener("mouseup",this.handleMouseup),this.initializeResizableColumns(!1,this.tableRef),this.initializeDragDropColumns(!1,this.tableRef)},this.setTableRef=e=>{this.tableRef=e},this.getColumnIndex=()=>{var e;let t=-1;const n=null==(e=this.columnRef)?void 0:e.parentNode;return n&&(t=Array.prototype.indexOf.call(n.children,this.columnRef)),t},this.handleColumnDragStart=e=>{var t;const n=null==e?void 0:e.currentTarget;n&&(this.columnRef=n),this.isDragging=!0;const l=this.getColumnIndex(),i={index:l,columnData:this.derivedColumns[l]};null==e||null==(t=e.dataTransfer)||t.setData(x,JSON.stringify(i))},this.handleDragDrop=e=>{var t;if(null==(t=e.dataTransfer)||null==t.getData?void 0:t.getData(x)){var n;e.preventDefault();const t=null==(n=e.currentTarget)?void 0:n.parentNode,l=Array.prototype.indexOf.call(t.children,e.currentTarget),i=this.getColumnIndex(),o=[...this.derivedColumns],r=o.slice(i,i+1);o.splice(i,1),o.splice(l,0,r[0]),this.derivedColumns=[...o],this.setDerivedColumns(o)}},this.allowDrop=e=>{e.preventDefault()},this.handleMouseDown=e=>{const t=null==e?void 0:e.currentTarget;t&&(this.columnRef=t,e&&h(e.offsetX,t.offsetWidth,this.RESIZE_INDICATOR_THRESHOLD)?(t.mouseDown=!0,t.oldX=e.x,t.oldWidth=t.offsetWidth,t.draggable=!1):this.reorderable&&(t.draggable=!0))},this.handleMouseMove=e=>{if(!0===this.resizable&&!this.isDragging){const t=e.currentTarget;e&&h(e.offsetX,t.offsetWidth,this.RESIZE_INDICATOR_THRESHOLD)?t.style.cursor="col-resize":t.style.cursor="default";const n=this.columnRef;if(null!=n&&n.mouseDown){let t=n.oldWidth;const l=e.x-n.oldX;n.oldWidth+(e.x-n.oldX)>0&&(t=n.oldWidth+l);const i=this.getColumnIndex();if(!Number.isNaN(i)){const e={...this.derivedColumns[i]};e.width=t,this.derivedColumns[i]=e,this.setDerivedColumns([...this.derivedColumns])}}}},this.handleMouseup=()=>{this.columnRef&&(this.columnRef.mouseDown=!1,this.columnRef.style.cursor="default",this.columnRef.draggable=!1),this.isDragging=!1},this.initializeResizableColumns=(e=!1,t)=>{var n,l;this.tableRef=t;const i=null==(n=this.tableRef)||null==(l=n.rows)?void 0:l[0];if(i){const{cells:t}=i,n=t.length;for(let l=0;l<n;l+=1){const n=t[l];!0===e?(this.resizable=!0,n.addEventListener("mousedown",this.handleMouseDown),n.addEventListener("mousemove",this.handleMouseMove,!0)):(this.resizable=!1,n.removeEventListener("mousedown",this.handleMouseDown),n.removeEventListener("mousemove",this.handleMouseMove,!0))}}},this.initializeDragDropColumns=(e=!1,t)=>{var n,l;this.tableRef=t;const i=null==(n=this.tableRef)||null==(l=n.rows)?void 0:l[0];if(i){const{cells:t}=i,n=t.length;for(let l=0;l<n;l+=1){const n=t[l];!0===e?(this.reorderable=!0,n.addEventListener("mousedown",this.handleMouseDown),n.addEventListener("dragover",this.allowDrop),n.addEventListener("dragstart",this.handleColumnDragStart),n.addEventListener("drop",this.handleDragDrop)):(this.reorderable=!1,n.draggable=!1,n.removeEventListener("mousedown",this.handleMouseDown),n.removeEventListener("dragover",this.allowDrop),n.removeEventListener("dragstart",this.handleColumnDragStart),n.removeEventListener("drop",this.handleDragDrop))}}},this.setDerivedColumns=n,this.tableRef=e,this.isDragging=!1,this.RESIZE_INDICATOR_THRESHOLD=8,this.resizable=!1,this.reorderable=!1,this.derivedColumns=[...t],document.addEventListener("mouseup",this.handleMouseup)}}var p=n(94184),b=n.n(p),f=n(99612),m=n(74061),v=n(32103),w=n(11965);const y=(0,a.Z)("div")((({theme:e,height:t})=>`\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-left: ${2*e.gridUnit}px;\n  padding-right: ${e.gridUnit}px;\n  border-bottom: 1px solid ${e.colors.grayscale.light3};\n  transition: background 0.3s;\n  line-height: ${t}px;\n  box-sizing: border-box;\n`)),D=(0,a.Z)(o.Z)((({theme:e})=>`\n    th.ant-table-cell {\n      font-weight: ${e.typography.weights.bold};\n      color: ${e.colors.grayscale.dark1};\n      user-select: none;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .ant-pagination-item-active {\n      border-color: ${e.colors.primary.base};\n      }\n    }\n    .ant-table.ant-table-small {\n      font-size: ${e.typography.sizes.s}px;\n    }\n`)),x="superset/table-column";var C,T,R;!function(e){e.Disabled="disabled",e.Single="single",e.Multi="multi"}(C||(C={})),function(e){e.Paginate="paginate",e.Sort="sort",e.Filter="filter"}(T||(T={})),function(e){e.Small="small",e.Middle="middle"}(R||(R={}));const E=[],S=40,Z=68,z=(0,a.Z)(o.Z)((({theme:e,height:t})=>`\n    .ant-table-body {\n      overflow: auto;\n      height: ${t?`${t}px`:void 0};\n    }\n\n    th.ant-table-cell {\n      font-weight: ${e.typography.weights.bold};\n      color: ${e.colors.grayscale.dark1};\n      user-select: none;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .ant-table-tbody > tr > td {\n      user-select: none;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      border-bottom: 1px solid ${e.colors.grayscale.light3};\n    }\n\n    .ant-pagination-item-active {\n      border-color: ${e.colors.primary.base};\n    }\n\n    .ant-table.ant-table-small {\n      font-size: ${e.typography.sizes.s}px;\n    }\n  `)),L=(0,a.Z)((e=>{var t;const{columns:n,pagination:o,onChange:r,height:a,scroll:s,size:d,allowHTML:u=!1}=e,[h,g]=(0,i.useState)(0),p=(0,i.useCallback)((e=>{g(e)}),[]),{ref:x}=(0,f.NB)({onResize:p}),C=(0,c.Fg)(),E=37*(null==C?void 0:C.gridUnit)||150,S=n.filter((({width:e})=>!e)).length;let Z=0;null==n||n.forEach((e=>{e.width&&(Z+=e.width)}));let z=0;const L=Math.max(Math.floor((h-Z)/S),50),$=null!=(t=null==n||null==n.map?void 0:n.map((e=>{const t={...e};return e.width||(t.width=L),z+=t.width,t})))?t:[];if(z<h){const e=$[$.length-1];e.width=e.width+Math.floor(h-z)}const I=(0,i.useRef)(),[M]=(0,i.useState)((()=>{const e={};return Object.defineProperty(e,"scrollLeft",{get:()=>{var e,t;return I.current?null==(e=I.current)||null==(t=e.state)?void 0:t.scrollLeft:null},set:e=>{I.current&&I.current.scrollTo({scrollLeft:e})}}),e})),N=()=>{var e;null==(e=I.current)||e.resetAfterIndices({columnIndex:0,shouldForceUpdate:!0})};(0,i.useEffect)((()=>N),[h,n,d]);const k={...o,onChange:(e,t)=>{var n;null==(n=I.current)||null==n.scrollTo||n.scrollTo({scrollTop:0}),null==r||r({...o,current:e,pageSize:t},{},{},{action:T.Paginate,currentDataSource:[]})}};return(0,w.tZ)("div",{ref:x},(0,w.tZ)(D,(0,l.Z)({},e,{sticky:!1,className:"virtual-table",columns:$,components:{body:(e,{ref:t,onScroll:n})=>{t.current=M;const l=d===R.Middle?47:39;return(0,w.tZ)(m.cd,{ref:I,className:"virtual-grid",columnCount:$.length,columnWidth:e=>{const{width:t=E}=$[e];return t},height:a||s.y,rowCount:e.length,rowHeight:()=>l,width:h,onScroll:({scrollLeft:e})=>{n({scrollLeft:e})}},(({columnIndex:t,rowIndex:n,style:i})=>{var o,r;const a=null==e?void 0:e[n];let s=null==a?void 0:a[null==$||null==(o=$[t])?void 0:o.dataIndex];const d=null==(r=$[t])?void 0:r.render;return"function"==typeof d&&(s=d(s,a,n)),u&&"string"==typeof s&&(s=(0,v.Ul)(s)),(0,w.tZ)(y,{className:b()("virtual-table-cell",{"virtual-table-cell-last":t===$.length-1}),style:i,title:"string"==typeof s?s:void 0,theme:C,height:l},s)}))}},pagination:!!o&&k})))}))((({theme:e})=>`\n  .virtual-table .ant-table-container:before,\n  .virtual-table .ant-table-container:after {\n    display: none;\n  }\n  .virtual-table-cell {\n    box-sizing: border-box;\n    padding: ${4*e.gridUnit}px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n`)),$={filterTitle:(0,s.t)("Filter menu"),filterConfirm:(0,s.t)("OK"),filterReset:(0,s.t)("Reset"),filterEmptyText:(0,s.t)("No filters"),filterCheckall:(0,s.t)("Select all items"),filterSearchPlaceholder:(0,s.t)("Search in filters"),emptyText:(0,s.t)("No data"),selectAll:(0,s.t)("Select current page"),selectInvert:(0,s.t)("Invert current page"),selectNone:(0,s.t)("Clear all data"),selectionAll:(0,s.t)("Select all data"),sortTitle:(0,s.t)("Sort"),expand:(0,s.t)("Expand row"),collapse:(0,s.t)("Collapse row"),triggerDesc:(0,s.t)("Click to sort descending"),triggerAsc:(0,s.t)("Click to sort ascending"),cancelSort:(0,s.t)("Click to cancel sorting")},I={},M=()=>{};function N(e){const{data:t,bordered:n,columns:o,selectedRows:a=E,handleRowSelection:s,size:h=R.Small,selectionType:p=C.Disabled,sticky:b=!0,loading:f=!1,resizable:m=!1,reorderable:v=!1,usePagination:y=!0,defaultPageSize:D=15,pageSizeOptions:x=["5","15","25","50","100"],hideData:T=!1,emptyComponent:N,locale:k,height:O,virtualize:P=!1,onChange:A=M,recordCount:U,onRow:H,allowHTML:W=!1,childrenColumnName:X}=e,_=(0,i.useRef)(null),[F,j]=(0,i.useState)(o),[B,K]=(0,i.useState)(D),[q,J]=(0,i.useState)({...$}),[G,Q]=(0,i.useState)(a),V=(0,i.useRef)(null),Y=I[p],ee={type:Y,selectedRowKeys:G,onChange:e=>{Q(e),null==s||s(e)}};(0,i.useEffect)((()=>{!0===v&&d.Z.warn('EXPERIMENTAL FEATURE ENABLED: The "reorderable" prop of Table is experimental and NOT recommended for use in production deployments.'),!0===m&&d.Z.warn('EXPERIMENTAL FEATURE ENABLED: The "resizable" prop of Table is experimental and NOT recommended for use in production deployments.')}),[v,m]),(0,i.useEffect)((()=>{let e;e=k?{...$,...k}:{...$},J(e)}),[k]),(0,i.useEffect)((()=>j(o)),[o]),(0,i.useEffect)((()=>{var e,t;V.current&&(null==(t=V.current)||t.clearListeners());const n=null==(e=_.current)?void 0:e.getElementsByTagName("table")[0];var l,i;n&&(V.current=new g(n,F,j),v&&(null==V||null==(l=V.current)||l.initializeDragDropColumns(v,n)),m&&(null==V||null==(i=V.current)||i.initializeResizableColumns(m,n)));return()=>{var e;null==V||null==(e=V.current)||null==e.clearListeners||e.clearListeners()}}),[_,v,m,P,V]);const te=(0,c.Fg)(),ne=!!y&&{hideOnSinglePage:!0,pageSize:B,pageSizeOptions:x,onShowSizeChange:(e,t)=>K(t)};ne&&U&&(ne.total=U);let le=O;le&&(le-=Z,y&&U&&U>B&&(le-=S));const ie={loading:{spinning:null!=f&&f,indicator:(0,w.tZ)(u.Z,null)},hasData:!T&&t,columns:F,dataSource:T?void 0:t,size:h,pagination:ne,locale:q,showSorterTooltip:!1,onChange:A,onRow:H,theme:te,height:le,bordered:n,expandable:{childrenColumnName:X}};return(0,w.tZ)(r.default,{renderEmpty:()=>null!=N?N:(0,w.tZ)("div",null,q.emptyText)},(0,w.tZ)("div",{ref:_},!P&&(0,w.tZ)(z,(0,l.Z)({},ie,{rowSelection:Y?ee:void 0,sticky:b})),P&&(0,w.tZ)(L,(0,l.Z)({},ie,{scroll:{y:300,x:"100vw",...!1},allowHTML:W}))))}I[C.Multi]="checkbox",I[C.Single]="radio",I[C.Disabled]=null;const k=N},71262:(e,t,n)=>{n.d(t,{Xv:()=>g,cl:()=>b,ZP:()=>f});var l=n(73126),i=(n(67294),n(11965)),o=n(42968),r=n(20838),a=n(13322);const s=({animated:e=!1,fullWidth:t=!0,allowOverflow:n=!0,...o})=>(0,i.tZ)(r.default,(0,l.Z)({animated:e},o,{css:e=>i.iv`
      overflow: ${n?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${n?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${t&&i.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `})),d=(0,o.Z)(r.default.TabPane)``,c=Object.assign(s,{TabPane:d}),u=(0,o.Z)(s)`
  ${({theme:e,fullWidth:t})=>`\n    .ant-tabs-content-holder {\n      background: ${e.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*e.gridUnit}px;\n    }\n\n    ${t?i.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}
`,h=(0,o.Z)(a.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,g=Object.assign(u,{TabPane:d});g.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},g.TabPane.defaultProps={closeIcon:(0,i.tZ)(h,{role:"button",tabIndex:0})};const p=(0,o.Z)(g)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;
    padding: ${({theme:e})=>`${3*e.gridUnit}px ${e.gridUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,b=Object.assign(p,{TabPane:d}),f=c}}]);
//# sourceMappingURL=02f0945f4ce727210849.chunk.js.map