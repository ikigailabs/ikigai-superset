"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1006],{40730:(e,t,a)=>{a.d(t,{Z:()=>Le});var o,n=a(28216),r=a(14890),i=a(52256),s=a(97381),l=a(73126),d=a(45697),c=a.n(d),u=a(67294),p=a(61988),h=a(42968),m=a(68492),g=a(55786),v=a(93185),b=a(9531),f=a(38703),Z=a(94301),y=a(57368),x=a(3741),C=a(27600),S=a(23525),T=a(71894);!function(e){e.Explore="explore",e.Dashboard="dashboard"}(o||(o={}));var _,w=a(42190),$=a(50361),M=a.n($),F=a(18446),I=a.n(F),E=a(11865),D=a.n(E),k=a(16355),R=a(11064),N=a(88274),O=a(11965),U=a(73935),q=a(51995),L=a(12617),z=a(83862),A=a(4715),j=a(74599),P=a(41814),V=a(69175),B=a(15856),H=a(13322),W=a(9875),Y=a(14114),G=a(6412),Q=a(37731),X=a(73727),K=a(74069),J=a(35932),ee=a(57001),te=a(40219),ae=a(99232),oe=a(53579),ne=a(29487),re=a(12515);function ie({formData:e,result:t,dataset:a,onContextMenu:o,inContextMenu:n}){const r=(0,u.useMemo)((()=>({onContextMenu:o})),[o]);return(0,O.tZ)("div",{css:O.iv`
        width: 100%;
        height: 100%;
        min-height: 0;
      `,"data-test":"drill-by-chart"},(0,O.tZ)(N.Z,{disableErrorBoundary:!0,chartType:e.viz_type,enableNoResults:!0,datasource:a,formData:e,queriesData:t,hooks:r,inContextMenu:n,height:"100%",width:"100%"}))}!function(e){e[e.Chart=0]="Chart",e[e.Table=1]="Table"}(_||(_={}));var se=a(87183),le=a(54076);const de=(0,h.Z)(A.O5.Item)`
  ${({theme:e,isClickable:t,isHidden:a})=>O.iv`
    cursor: ${t?"pointer":"auto"};
    color: ${e.colors.grayscale.light1};
    transition: color ease-in ${e.transitionTiming}s;
    .ant-breadcrumb > span:last-child > & {
      color: ${e.colors.grayscale.dark1};
    }
    &:hover {
      color: ${t?e.colors.grayscale.dark1:"inherit"};
    }
    visibility: ${a?"hidden":"visible"};
  `}
`;var ce=a(5462),ue=a(71262);const pe=h.Z.div`
  ${({theme:e})=>O.iv`
    & .pagination-container {
      bottom: ${4*-e.gridUnit}px;
    }
  `}
`,he="adhoc_filters",me=({formData:e,closeModal:t})=>{const a=(0,n.I0)(),{addDangerToast:o}=(0,Y.e1)(),r=(0,q.Fg)(),[i,l]=(0,u.useState)(""),d=(0,u.useContext)(ee.DashboardPageIdContext),c=(0,u.useCallback)((()=>{a((0,s.logEvent)(x.qL,{slice_id:e.slice_id}))}),[a,e.slice_id]),h=(0,n.v9)((e=>{var t;return(0,L.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),[m,g]=e.datasource.split("__");(0,u.useEffect)((()=>{(0,te.nv)(Number(m),g,e,0).then((e=>{l(`/explore/?form_data_key=${e}&dashboard_page_id=${d}`)})).catch((()=>{o((0,p.t)("Failed to generate chart edit URL"))}))}),[o,d,m,g,e]);const v=!i||!h;return(0,O.tZ)(u.Fragment,null,(0,O.tZ)(J.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:c,disabled:v,tooltip:v?(0,p.t)("You do not have sufficient permissions to edit the chart"):void 0},(0,O.tZ)(X.rU,{css:O.iv`
            &:hover {
              text-decoration: none;
            }
          `,to:i},(0,p.t)("Edit chart"))),(0,O.tZ)(J.Z,{buttonStyle:"primary",buttonSize:"small",onClick:t,"data-test":"close-drill-by-modal",css:O.iv`
          margin-left: ${2*r.gridUnit}px;
        `},(0,p.t)("Close")))};function ge({column:e,dataset:t,drillByConfig:a,formData:o,onHideModal:r}){const l=(0,n.I0)(),d=(0,q.Fg)(),{addDangerToast:c}=(0,Y.e1)(),[h,m]=(0,u.useState)(!0),[v,b]=(0,u.useState)([{...a,column:e}]);(0,u.useEffect)((()=>{l((0,s.logEvent)(x.zf,{slice_id:o.slice_id}))}),[l,o.slice_id]);const{column:Z,groupbyFieldName:y=a.groupbyFieldName}=v[v.length-1]||{},C=(0,u.useMemo)((()=>(0,g.Z)(o[y]).map((e=>{var a;return null==(a=t.columns)?void 0:a.find((t=>t.column_name===e))})).filter(Q.Z)),[t.columns,o,y]),{displayModeToggle:S,drillByDisplayMode:T}=(()=>{const[e,t]=(0,u.useState)(_.Chart);return{displayModeToggle:(0,u.useMemo)((()=>(0,O.tZ)("div",{css:e=>O.iv`
          margin-bottom: ${6*e.gridUnit}px;
          .ant-radio-button-wrapper-checked:not(
              .ant-radio-button-wrapper-disabled
            ):focus-within {
            box-shadow: none;
          }
        `,"data-test":"drill-by-display-toggle"},(0,O.tZ)(se.Y.Group,{onChange:({target:{value:e}})=>{t(e)},defaultValue:_.Chart},(0,O.tZ)(se.Y.Button,{value:_.Chart,"data-test":"drill-by-chart-radio"},(0,p.t)("Chart")),(0,O.tZ)(se.Y.Button,{value:_.Table,"data-test":"drill-by-table-radio"},(0,p.t)("Table"))))),[]),drillByDisplayMode:e}})(),[w,$]=(0,u.useState)(),M=((e,t)=>(0,Q.Z)(e)?1===e.length?(0,O.tZ)(pe,{"data-test":"drill-by-results-table"},(0,O.tZ)(ce.T,{colnames:e[0].colnames,coltypes:e[0].coltypes,rowcount:e[0].sql_rowcount,data:e[0].data,dataSize:15,datasourceId:t,isVisible:!0})):(0,O.tZ)(ue.ZP,{fullWidth:!1,"data-test":"drill-by-results-tabs"},e.map(((e,a)=>(0,O.tZ)(ue.ZP.TabPane,{tab:(0,p.t)("Results %s",a+1),key:a},(0,O.tZ)(pe,null,(0,O.tZ)(ce.T,{colnames:e.colnames,coltypes:e.coltypes,data:e.data,rowcount:e.sql_rowcount,dataSize:15,datasourceId:t,isVisible:!0})))))):(0,O.tZ)("div",null))(w,o.datasource),[F,I]=(0,u.useState)(o),[E,D]=(0,u.useState)([...C,e].filter(Q.Z)),[k,R]=(0,u.useState)([{groupby:C,filters:a.filters},{groupby:e||[]}]),N=(0,u.useCallback)(((e,t=y)=>Array.isArray(o[t])?[e.column_name]:e.column_name),[o,y]),U=(0,u.useCallback)((e=>e.reduce(((e,t)=>{null!=t&&t.groupbyFieldName&&t.column&&(e.formData[t.groupbyFieldName]=N(t.column,t.groupbyFieldName),e.overridenGroupbyFields.add(t.groupbyFieldName));const a=(null==t?void 0:t.adhocFilterFieldName)||he;return e.formData[a]=[...(0,g.Z)(e[a]),...(0,g.Z)(t.filters).map((e=>(0,ae.f)(e)))],e.overridenAdhocFilterFields.add(a),e}),{formData:{},overridenGroupbyFields:new Set,overridenAdhocFilterFields:new Set})),[N]),L=(0,u.useCallback)((()=>v.reduce(((e,t)=>{const a=t.adhocFilterFieldName||he;return e[a]=[...e[a]||[],...t.filters.map((e=>(0,ae.f)(e)))],e}),{})),[v]),z=((e,t=le.EI)=>(0,u.useMemo)((()=>{const a=t=>t<e.length-1;return(0,O.tZ)(A.O5,{css:e=>O.iv`
          margin: ${2*e.gridUnit}px 0 ${4*e.gridUnit}px;
        `},e.map(((e,o)=>{return(0,O.tZ)(de,{key:o,isClickable:a(o),isHidden:(n=e,0===(0,g.Z)(n.groupby).length&&0===(0,g.Z)(n.filters).length),onClick:a(o)?()=>t(e,o):le.EI,"data-test":"drill-by-breadcrumb-item"},(e=>`${(0,g.Z)(e.groupby).map((e=>e.verbose_name||e.column_name)).join(", ")} ${e.filters?`(${e.filters.map((e=>e.formattedVal||e.val)).join(", ")})`:""}`)(e));var n})).filter((e=>!1===e.props.isHidden)))}),[e,t]))(k,(0,u.useCallback)(((e,t)=>{l((0,s.logEvent)(x.TG,{slice_id:o.slice_id})),b((e=>e.slice(0,t))),R((e=>{const a=e.slice(0,t+1);return delete a[a.length-1].filters,a})),D((e=>e.slice(0,t))),I((()=>{if(0===t)return o;const{formData:e,overridenAdhocFilterFields:a}=U(v.slice(0,t)),n={...o,...e};return a.forEach((t=>({...n,[t]:[...o[t],...e[t]]}))),n}))}),[l,v,o,U])),j=(0,u.useMemo)((()=>{let e={...F};Z&&y&&(e[y]=N(Z));const t=L();return Object.keys(t).forEach((a=>{e={...e,[a]:[...(0,g.Z)(o[a]),...t[a]]}})),e.slice_id=0,delete e.slice_name,delete e.dashboards,e}),[F,Z,y,L,N,o]);(0,u.useEffect)((()=>{D((e=>!Z||e.some((e=>e.column_name===Z.column_name))?e:[...e,Z]))}),[Z]);const P=(0,u.useCallback)(((e,t)=>{l((0,s.logEvent)(x.g3,{drill_depth:v.length+1,slice_id:o.slice_id})),I(j),b((a=>[...a,{...t,column:e}])),R((a=>{const o=[...a,{groupby:e}];return o[o.length-2].filters=t.filters,o}))}),[l,v.length,j,o.slice_id]),V=(0,u.useMemo)((()=>({drillBy:{excludedColumns:E,openNewModal:!1}})),[E]),{contextMenu:B,inContextMenu:H,onContextMenu:W}=((e,t,a,o,n)=>{const r=(0,u.useRef)(null),[i,s]=(0,u.useState)(!1),l=(0,u.useCallback)(((...e)=>{s(!1),null==a||a(...e)}),[a]),d=(0,u.useCallback)((()=>{s(!1)}),[]);return{contextMenu:(0,u.useMemo)((()=>(0,O.tZ)(ye,{ref:r,id:0,formData:t,onSelection:l,onClose:d,displayedItems:o,additionalConfig:n})),[n,0,o,t,d,l]),inContextMenu:i,onContextMenu:(e,t,a)=>{var o;null==(o=r.current)||o.open(e,t,a),s(!0)}}})(0,F,P,fe.DrillBy,V),G=(0,n.v9)((e=>{const t=Object.values(e.dashboardLayout.present).find((e=>{var t;return(null==(t=e.meta)?void 0:t.chartId)===o.slice_id}));return(null==t?void 0:t.meta.sliceNameOverride)||(null==t?void 0:t.meta.sliceName)}));(0,u.useEffect)((()=>{if(j){const[e]=(0,re.hz)(j);m(!0),$(void 0),(0,i.getChartDataRequest)({formData:j}).then((({response:t,json:a})=>(0,i.handleChartDataResponse)(t,a,e))).then((e=>{$(e)})).catch((()=>{c((0,p.t)("Failed to load chart data."))})).finally((()=>{m(!1)}))}}),[c,j]);const{metadataBar:X}=(0,oe.S)({dataset:t});return(0,O.tZ)(K.default,{css:O.iv`
        .ant-modal-footer {
          border-top: none;
        }
      `,show:!0,onHide:null!=r?r:()=>null,title:(0,p.t)("Drill by: %s",G),footer:(0,O.tZ)(me,{formData:j}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*d.gridUnit,minWidth:128*d.gridUnit,defaultSize:{width:"auto",height:"80vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1},(0,O.tZ)("div",{css:O.iv`
          display: flex;
          flex-direction: column;
          height: 100%;
        `},X,z,S,h&&(0,O.tZ)(f.Z,null),!h&&!w&&(0,O.tZ)(ne.Z,{type:"error",message:(0,p.t)("There was an error loading the chart data")}),T===_.Chart&&w&&(0,O.tZ)(ie,{dataset:t,formData:j,result:w,onContextMenu:W,inContextMenu:H}),T===_.Table&&w&&M,B))}var ve=a(46219);const be=({drillByConfig:e,formData:t,contextMenuY:a=0,submenuIndex:o=0,onSelection:n=(()=>{}),onClick:r=(()=>{}),excludedColumns:i,openNewModal:s=!0,...d})=>{const c=(0,q.Fg)(),{addDangerToast:h}=(0,Y.e1)(),[m,v]=(0,u.useState)(!0),[b,Z]=(0,u.useState)(""),[y,x]=(0,u.useState)(),[C,S]=(0,u.useState)([]),[T,_]=(0,u.useState)(!1),[w,$]=(0,u.useState)(),M=(0,u.useCallback)(((t,a)=>{r(t),n(a,e),$(a),s&&_(!0)}),[e,r,n,s]),F=(0,u.useCallback)((()=>{_(!1)}),[]);(0,u.useEffect)((()=>{Z("")}),[C.length]);const I=null==e?void 0:e.groupbyFieldName,E=(0,u.useMemo)((()=>{var e;return null==(e=(0,R.Z)().get(t.viz_type))?void 0:e.behaviors.find((e=>e===k.cg.DrillBy))}),[t.viz_type]),D=(e=>{const t={};return(0,g.Z)(null==e?void 0:e.columns).forEach((e=>{t[e.column_name]=e.verbose_name||e.column_name})),(0,g.Z)(null==e?void 0:e.metrics).forEach((e=>{t[e.metric_name]=e.verbose_name||e.metric_name})),t})(y);(0,u.useEffect)((()=>{if(E&&I){const a=t.datasource.split("__")[0];(0,G.e)({endpoint:`/api/v1/dataset/${a}`}).then((({json:{result:a}})=>{x(a),S((0,g.Z)(a.columns).filter((e=>e.groupby)).filter((a=>{var o,n;return!(0,g.Z)(t[null!=(o=e.groupbyFieldName)?o:""]).includes(a.column_name)&&a.column_name!==t.x_axis&&(null==(n=(0,g.Z)(i))?void 0:n.every((e=>e.column_name!==a.column_name)))})))})).catch((()=>{G.f.delete(`/api/v1/dataset/${a}`),h((0,p.t)("Failed to load dimensions for drill by"))})).finally((()=>{v(!1)}))}}),[h,i,t,null==e?void 0:e.groupbyFieldName,E,I]);const N=(0,u.useCallback)((e=>{var t;e.stopPropagation();const a=null==e||null==(t=e.target)?void 0:t.value;Z(a)}),[]),U=(0,u.useMemo)((()=>C.filter((e=>(e.verbose_name||e.column_name).toLowerCase().includes(b.toLowerCase())))),[C,b]),L=(0,u.useMemo)((()=>(0,V.th)(a,U.length||1,o,200,C.length>10?48:0)),[a,U.length,o,C.length]);let A;return E?I||(A=(0,p.t)("Drill by is not available for this data point")):A=(0,p.t)("Drill by is not yet supported for this chart type"),E&&I?(0,O.tZ)(u.Fragment,null,(0,O.tZ)(z.Menu.SubMenu,(0,l.Z)({title:(0,p.t)("Drill by"),key:"drill-by-submenu",popupClassName:"chart-context-submenu",popupOffset:[0,L]},d),(0,O.tZ)("div",{"data-test":"drill-by-submenu"},C.length>10&&(0,O.tZ)(W.II,{prefix:(0,O.tZ)(H.Z.Search,{iconSize:"l",iconColor:c.colors.grayscale.light1}),onChange:N,placeholder:(0,p.t)("Search columns"),value:b,onClick:e=>{e.nativeEvent.stopImmediatePropagation()},allowClear:!0,css:O.iv`
                width: auto;
                max-width: 100%;
                margin: ${2*c.gridUnit}px ${3*c.gridUnit}px;
                box-shadow: none;
              `}),m?(0,O.tZ)("div",{css:O.iv`
                padding: ${3*c.gridUnit}px 0;
              `},(0,O.tZ)(f.Z,{position:"inline-centered"})):U.length?(0,O.tZ)("div",{css:O.iv`
                max-height: ${200}px;
                overflow: auto;
              `},U.map((e=>(0,O.tZ)(ve.i,(0,l.Z)({key:`drill-by-item-${e.column_name}`,tooltipText:e.verbose_name||e.column_name},d,{onClick:t=>M(t,e)}),e.verbose_name||e.column_name)))):(0,O.tZ)(z.Menu.Item,(0,l.Z)({disabled:!0,key:"no-drill-by-columns-found"},d),(0,p.t)("No columns found")))),T&&(0,O.tZ)(ge,{column:w,drillByConfig:e,formData:t,onHideModal:F,dataset:{...y,verbose_map:D}})):(0,O.tZ)(z.Menu.Item,(0,l.Z)({key:"drill-by-disabled",disabled:!0},d),(0,O.tZ)("div",null,(0,p.t)("Drill by"),(0,O.tZ)(B.j,{title:A})))};var fe;!function(e){e[e.CrossFilter=0]="CrossFilter",e[e.DrillToDetail=1]="DrillToDetail",e[e.DrillBy=2]="DrillBy",e[e.All=3]="All"}(fe||(fe={}));const Ze=({id:e,formData:t,onSelection:a,onClose:o,displayedItems:r=fe.All,additionalConfig:i},s)=>{var d,c;const h=(0,q.Fg)(),m=(0,n.I0)(),b=(0,n.v9)((e=>{var t;return(0,L.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),f=(0,n.v9)((e=>{var t;return(0,L.R)("can_write","ExploreFormDataRestApi",null==(t=e.user)?void 0:t.roles)})),Z=(0,n.v9)((e=>{var t;return(0,L.R)("can_samples","Datasource",null==(t=e.user)?void 0:t.roles)})),y=b&&f,x=b&&Z,C=(0,n.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled)),S=e=>r===fe.All||(0,g.Z)(r).includes(e),[{filters:T,clientX:_,clientY:w},$]=(0,u.useState)({clientX:0,clientY:0}),M=[],F=(0,v.cr)(v.TT.DrillToDetail)&&x&&S(fe.DrillToDetail),I=(0,v.cr)(v.TT.DrillBy)&&y&&S(fe.DrillBy),E=(0,v.cr)(v.TT.DashboardCrossFilters)&&S(fe.CrossFilter),D=null==(d=(0,R.Z)().get(t.viz_type))||null==(c=d.behaviors)?void 0:c.includes(k.cg.InteractiveChart);let N=0;if(E&&(N+=1),F&&(N+=2),I&&(N+=1),0===N&&(N=1),E){var H;const t=!D||!C||!(null!=T&&T.crossFilter);let a=null;t?C?D?null!=T&&T.crossFilter||(a=(0,O.tZ)(u.Fragment,null,(0,O.tZ)("div",null,(0,p.t)("You can't apply cross-filter on this data point.")))):a=(0,O.tZ)(u.Fragment,null,(0,O.tZ)("div",null,(0,p.t)("This visualization type does not support cross-filtering."))):a=(0,O.tZ)(u.Fragment,null,(0,O.tZ)("div",null,(0,p.t)("Cross-filtering is not enabled for this dashboard."))):a=(0,O.tZ)(u.Fragment,null,(0,O.tZ)("div",null,(0,p.t)("Cross-filter will be applied to all of the charts that use this dataset.")),(0,O.tZ)("div",null,(0,p.t)("You can also just click on the chart to apply cross-filter."))),M.push((0,O.tZ)(u.Fragment,null,(0,O.tZ)(z.Menu.Item,{key:"cross-filtering-menu-item",disabled:t,onClick:()=>{null!=T&&T.crossFilter&&m((0,j.eG)(e,T.crossFilter.dataMask))}},null!=T&&null!=(H=T.crossFilter)&&H.isCurrentValueSelected?(0,p.t)("Remove cross-filter"):(0,O.tZ)("div",null,(0,p.t)("Add cross-filter"),(0,O.tZ)(B.j,{title:a,color:t?void 0:h.colors.grayscale.base}))),N>1&&(0,O.tZ)(z.Menu.Divider,null)))}if(F&&M.push((0,O.tZ)(P.p,(0,l.Z)({chartId:e,formData:t,filters:null==T?void 0:T.drillToDetail,isContextMenu:!0,contextMenuY:w,onSelection:a,submenuIndex:E?2:1},(null==i?void 0:i.drillToDetail)||{}))),I){let e=0;E&&(e+=1),F&&(e+=2),M.push((0,O.tZ)(be,(0,l.Z)({drillByConfig:null==T?void 0:T.drillBy,onSelection:a,formData:t,contextMenuY:w,submenuIndex:e},(null==i?void 0:i.drillBy)||{})))}const W=(0,u.useCallback)(((t,a,o)=>{var n;const r=(0,V.$t)(a,N);$({clientX:t,clientY:r,filters:o}),null==(n=document.getElementById(`hidden-span-${e}`))||n.click()}),[e,N]);return(0,u.useImperativeHandle)(s,(()=>({open:W})),[W]),U.createPortal((0,O.tZ)(A.Gj,{overlay:(0,O.tZ)(z.Menu,{className:"chart-context-menu","data-test":"chart-context-menu"},M.length?M:(0,O.tZ)(z.Menu.Item,{disabled:!0},"No actions")),trigger:["click"],onVisibleChange:e=>!e&&o()},(0,O.tZ)("span",{id:`hidden-span-${e}`,css:(0,O.iv)({visibility:"hidden",position:"fixed",top:w,left:_,width:1,height:1},"","")})),document.body)},ye=(0,u.forwardRef)(Ze),xe={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,initialValues:c().object,formData:c().object.isRequired,latestQueryFormData:c().object,labelColors:c().object,sharedLabelColors:c().object,height:c().number,width:c().number,setControlValue:c().func,vizType:c().string.isRequired,triggerRender:c().bool,chartAlert:c().string,chartStatus:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,addFilter:c().func,setDataMask:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,source:c().oneOf([o.Dashboard,o.Explore]),emitCrossFilters:c().bool},Ce={},Se=[k.cg.InteractiveChart],Te={addFilter:()=>Ce,onFilterMenuOpen:()=>Ce,onFilterMenuClose:()=>Ce,initialValues:Ce,setControlValue(){},triggerRender:!1};class _e extends u.Component{constructor(e){super(e),this.state={showContextMenu:e.source===o.Dashboard&&((0,v.cr)(v.TT.DrillToDetail)||(0,v.cr)(v.TT.DashboardCrossFilters)),inContextMenu:!1,legendState:void 0},this.hasQueryResponseChange=!1,this.contextMenuRef=u.createRef(),this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleOnContextMenu=this.handleOnContextMenu.bind(this),this.handleContextMenuSelected=this.handleContextMenuSelected.bind(this),this.handleContextMenuClosed=this.handleContextMenuClosed.bind(this),this.handleLegendStateChanged=this.handleLegendStateChanged.bind(this),this.onContextMenuFallback=this.onContextMenuFallback.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onContextMenu:this.state.showContextMenu?this.handleOnContextMenu:void 0,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,onLegendStateChanged:this.handleLegendStateChanged,setDataMask:e=>{var t;null==(t=this.props.actions)||t.updateDataMask(this.props.chartId,e)}},this.mutableQueriesResponse=M()(this.props.queriesResponse)}shouldComponentUpdate(e,t){var a,o;return!(!(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1)||null!=(a=e.queriesResponse)&&null!=(o=a[0])&&o.error)&&(!I()(this.state,t)||(this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange&&(this.mutableQueriesResponse=M()(e.queriesResponse)),this.hasQueryResponseChange||!I()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||e.triggerRender||e.labelColors!==this.props.labelColors||e.sharedLabelColors!==this.props.sharedLabelColors||e.formData.color_scheme!==this.props.formData.color_scheme||e.formData.stack!==this.props.formData.stack||e.cacheBusterProp!==this.props.cacheBusterProp||e.emitCrossFilters!==this.props.emitCrossFilters))}handleAddFilter(e,t,a=!0,o=!0){this.props.addFilter(e,t,a,o)}handleRenderSuccess(){const{actions:e,chartStatus:t,chartId:a,vizType:o}=this.props;["loading","rendered"].indexOf(t)<0&&e.chartRenderingSucceeded(a),this.hasQueryResponseChange&&e.logEvent(x.aD,{slice_id:a,viz_type:o,start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){const{actions:a,chartId:o}=this.props;m.Z.warn(e),a.chartRenderingFailed(e.toString(),o,t?t.componentStack:null),this.hasQueryResponseChange&&a.logEvent(x.aD,{slice_id:o,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleSetControlValue(...e){const{setControlValue:t}=this.props;t&&t(...e)}handleOnContextMenu(e,t,a){this.contextMenuRef.current.open(e,t,a),this.setState({inContextMenu:!0})}handleContextMenuSelected(){this.setState({inContextMenu:!1})}handleContextMenuClosed(){this.setState({inContextMenu:!1})}handleLegendStateChanged(e){this.setState({legendState:e})}onContextMenuFallback(e){this.state.inContextMenu||(e.preventDefault(),this.handleOnContextMenu(e.clientX,e.clientY))}render(){var e;const{chartAlert:t,chartStatus:a,chartId:n,emitCrossFilters:r}=this.props;if("loading"===a||t||null===a)return null;this.renderStartTime=x.Yd.getTimestamp();const{width:i,height:s,datasource:d,annotationData:c,initialValues:h,ownState:m,filterState:g,chartIsStale:v,formData:b,latestQueryFormData:f,postTransformProps:y}=this.props,C=v&&f?f:b,S=C.viz_type||this.props.vizType,T=D()(S),_="table"===S?`superset-chart-${T}`:T;let w;const $=(0,p.t)("No results were returned for this query"),M=this.props.source===o.Explore?(0,p.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,F="chart.svg";w=i>300&&s>220?(0,O.tZ)(Z.XJ,{title:$,description:M,image:F}):(0,O.tZ)(Z.Tc,{title:$,image:F});const I=null!=(e=(0,R.Z)().get(b.viz_type))&&e.behaviors.find((e=>e===k.cg.DrillToDetail))?{inContextMenu:this.state.inContextMenu}:{};return(0,O.tZ)(u.Fragment,null,this.state.showContextMenu&&(0,O.tZ)(ye,{ref:this.contextMenuRef,id:n,formData:C,onSelection:this.handleContextMenuSelected,onClose:this.handleContextMenuClosed}),(0,O.tZ)("div",{onContextMenu:this.state.showContextMenu?this.onContextMenuFallback:void 0},(0,O.tZ)(N.Z,(0,l.Z)({disableErrorBoundary:!0,key:`${n}`,id:`chart-id-${n}`,className:_,chartType:S,width:i,height:s,annotationData:c,datasource:d,initialValues:h,formData:C,ownState:m,filterState:g,hooks:this.hooks,behaviors:Se,queriesData:this.mutableQueriesResponse,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:w,postTransformProps:y,emitCrossFilters:r,legendState:this.state.legendState},I))))}}_e.propTypes=xe,_e.defaultProps=Te;const we=_e;var $e=a(67417),Me=a(72875);const Fe=({chartId:e,error:t,...a})=>{const{result:o}=(0,$e.hb)(e),n=t&&{...t,extra:{...t.extra,owners:o}};return(0,O.tZ)(Me.Z,(0,l.Z)({},a,{error:n}))};var Ie=a(75701);const Ee={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,dashboardId:c().number,initialValues:c().object,formData:c().object.isRequired,labelColors:c().object,sharedLabelColors:c().object,width:c().number,height:c().number,setControlValue:c().func,timeout:c().number,vizType:c().string.isRequired,triggerRender:c().bool,force:c().bool,isFiltersInitialized:c().bool,chartAlert:c().string,chartStatus:c().string,chartStackTrace:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,errorMessage:c().node,addFilter:c().func,onQuery:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,datasetsStatus:c().oneOf(["loading","error","complete"]),isInView:c().bool,emitCrossFilters:c().bool},De={},ke=(0,p.t)("The dataset associated with this chart no longer exists"),Re={addFilter:()=>De,onFilterMenuOpen:()=>De,onFilterMenuClose:()=>De,initialValues:De,setControlValue(){},triggerRender:!1,dashboardId:null,chartStackTrace:null,force:!1,isInView:!0},Ne=h.Z.div`
  min-height: ${e=>e.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .slice_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    .alert {
      margin: ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,Oe=h.Z.div`
  font-family: ${({theme:e})=>e.typography.families.monospace};
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;class Ue extends u.PureComponent{constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}componentDidMount(){this.props.triggerQuery&&this.runQuery()}componentDidUpdate(){this.props.triggerQuery&&this.runQuery()}runQuery(){this.props.actions.postChartFormData(this.props.formData,Boolean(this.props.force||(0,S.eY)(C.KD.force)),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){const{actions:a,chartId:o}=this.props;m.Z.warn(e),a.chartRenderingFailed(e.toString(),o,t?t.componentStack:null),a.logEvent(x.aD,{slice_id:o,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;const{chartId:a,chartAlert:n,chartStackTrace:r,datasource:i,dashboardId:s,height:l,datasetsStatus:d}=this.props,c=null==e||null==(t=e.errors)?void 0:t[0],u=n||(null==e?void 0:e.message);return void 0!==n&&n!==ke&&i===b.tw&&d!==w.ni.Error?(0,O.tZ)(Ne,{key:a,"data-ui-anchor":"chart",className:"chart-container","data-test":"chart-container",height:l},(0,O.tZ)(f.Z,null)):(0,O.tZ)(Fe,{key:a,chartId:a,error:c,subtitle:(0,O.tZ)(Oe,null,u),copyText:u,link:e?e.link:null,source:s?o.Dashboard:o.Explore,stackTrace:r})}render(){const{height:e,chartAlert:t,chartStatus:a,errorMessage:o,chartIsStale:n,queriesResponse:r=[],width:i}=this.props,s="loading"===a;return this.renderContainerStartTime=x.Yd.getTimestamp(),"failed"===a?r.map((e=>this.renderErrorMessage(e))):o&&0===(0,g.Z)(r).length?(0,O.tZ)(Z.XJ,{title:(0,p.t)("Add required control values to preview chart"),description:(0,Ie.J)(!0),image:"chart.svg"}):s||t||o||!n||0!==(0,g.Z)(r).length?(0,O.tZ)(y.Z,{onError:this.handleRenderContainerFailure,showMessage:!1},(0,O.tZ)(Ne,{"data-ui-anchor":"chart",className:"chart-container","data-test":"chart-container",height:e,width:i},(0,O.tZ)("div",{className:"slice_container","data-test":"slice-container"},this.props.isInView||!(0,v.cr)(v.TT.DashboardVirtualization)||(0,T.b)()?(0,O.tZ)(we,(0,l.Z)({},this.props,{source:this.props.dashboardId?"dashboard":"explore","data-test":this.props.vizType})):(0,O.tZ)(f.Z,null)),s&&(0,O.tZ)(f.Z,null))):(0,O.tZ)(Z.XJ,{title:(0,p.t)("Your chart is ready to go!"),description:(0,O.tZ)("span",null,(0,p.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,O.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery},(0,p.t)("click here")),"."),image:"chart.svg"})}}Ue.propTypes=Ee,Ue.defaultProps=Re;const qe=Ue,Le=(0,n.$j)(null,(function(e){return{actions:(0,r.DE)({...i,updateDataMask:j.eG,logEvent:s.logEvent},e)}}))(qe)},61890:(e,t,a)=>{a.d(t,{Z:()=>R});var o=a(67294),n=a(45697),r=a.n(n),i=a(31069),s=a(68492),l=a(61988),d=a(55786),c=a(68135),u=a(82342),p=a(17536),h=a(27130),m=a(19113),g=a(69856),v=a(40266),b=a(33334),f=a(13322),Z=a(74069),y=a(96055),x=a(42753),C=a(7848),S=a(11965);function T({adhocFilter:e,options:t,datasource:a,onFilterEdit:o,onRemoveFilter:n,partitionColumn:r,onMoveLabel:i,onDropLabel:s,index:l,sections:d,operators:c}){const{actualTimeRange:u,title:p}=(0,C.w)(e);return(0,S.tZ)(y.Z,{sections:d,operators:c,adhocFilter:e,options:t,datasource:a,onFilterEdit:o,partitionColumn:r},(0,S.tZ)(b.yz,{label:null!=u?u:e.getDefaultLabel(),tooltipTitle:null!=p?p:e.getTooltipTitle(),onRemove:n,onMoveLabel:i,onDropLabel:s,index:l,type:x.g.FilterOption,withCaret:!0,isExtra:e.isExtra}))}var _=a(28543),w=a(61641);const $=r().oneOfType([r().shape({expressionType:r().oneOf([w.p.Simple]).isRequired,clause:r().oneOf([w.N.Having,w.N.Where]).isRequired,subject:r().string.isRequired,comparator:r().oneOfType([r().string,r().arrayOf(r().string)]).isRequired}),r().shape({expressionType:r().oneOf([w.p.Sql]).isRequired,clause:r().oneOf([w.N.Where,w.N.Having]).isRequired,sqlExpression:r().string.isRequired})]);var M=a(72201);const{warning:F}=Z.default,I=r().oneOfType([r().string,p.Z]),E={label:r().oneOfType([r().object,r().string]),name:r().string,sections:r().arrayOf(r().string),operators:r().arrayOf(r().string),onChange:r().func,value:r().arrayOf($),datasource:r().object,columns:r().arrayOf(M.Z),savedMetrics:r().arrayOf(h.Z),selectedMetrics:r().oneOfType([I,r().arrayOf(I)]),isLoading:r().bool,canDelete:r().func};function D(e){return e&&!(e instanceof _.Z)&&e.expressionType}class k extends o.Component{constructor(e){super(e),this.optionsForSelect=this.optionsForSelect.bind(this),this.onRemoveFilter=this.onRemoveFilter.bind(this),this.onNewFilter=this.onNewFilter.bind(this),this.onFilterEdit=this.onFilterEdit.bind(this),this.moveLabel=this.moveLabel.bind(this),this.onChange=this.onChange.bind(this),this.mapOption=this.mapOption.bind(this),this.getMetricExpression=this.getMetricExpression.bind(this),this.removeFilter=this.removeFilter.bind(this);const t=(this.props.value||[]).map((e=>D(e)?new _.Z(e):e));this.optionRenderer=e=>(0,S.tZ)(v.Z,{option:e}),this.valueRenderer=(e,t)=>(0,S.tZ)(T,{key:t,index:t,adhocFilter:e,onFilterEdit:this.onFilterEdit,options:this.state.options,sections:this.props.sections,operators:this.props.operators,datasource:this.props.datasource,onRemoveFilter:e=>{e.stopPropagation(),this.onRemoveFilter(t)},onMoveLabel:this.moveLabel,onDropLabel:()=>this.props.onChange(this.state.values),partitionColumn:this.state.partitionColumn}),this.state={values:t,options:this.optionsForSelect(this.props),partitionColumn:null}}componentDidMount(){const{datasource:e}=this.props;if(e&&"table"===e.type){var t;const a=null==(t=e.database)?void 0:t.id,{datasource_name:o,schema:n,is_sqllab_view:r}=e;!r&&a&&o&&n&&i.Z.get({endpoint:`/api/v1/database/${a}/table_extra/${o}/${n}/`}).then((({json:e})=>{if(e&&e.partitions){const{partitions:t}=e;t&&t.cols&&1===Object.keys(t.cols).length&&this.setState({partitionColumn:t.cols[0]})}})).catch((e=>{s.Z.error("fetch extra_table_metadata:",e.statusText)}))}}UNSAFE_componentWillReceiveProps(e){this.props.columns!==e.columns&&this.setState({options:this.optionsForSelect(e)}),this.props.value!==e.value&&this.setState({values:(e.value||[]).map((e=>D(e)?new _.Z(e):e))})}removeFilter(e){const t=[...this.state.values];t.splice(e,1),this.setState((e=>({...e,values:t}))),this.props.onChange(t)}onRemoveFilter(e){const{canDelete:t}=this.props,{values:a}=this.state,o=null==t?void 0:t(a[e],a);"string"!=typeof o?this.removeFilter(e):F({title:(0,l.t)("Warning"),content:o})}onNewFilter(e){const t=this.mapOption(e);t&&this.setState((e=>({...e,values:[...e.values,t]})),(()=>{this.props.onChange(this.state.values)}))}onFilterEdit(e){this.props.onChange(this.state.values.map((t=>t.filterOptionName===e.filterOptionName?e:t)))}onChange(e){const t=(e||[]).map((e=>this.mapOption(e))).filter((e=>e));this.props.onChange(t)}getMetricExpression(e){return this.props.savedMetrics.find((t=>t.metric_name===e)).expression}moveLabel(e,t){const{values:a}=this.state,o=[...a];[o[t],o[e]]=[o[e],o[t]],this.setState({values:o})}mapOption(e){return e instanceof _.Z?e:e.saved_metric_name?new _.Z({expressionType:w.p.Sql,subject:this.getMetricExpression(e.saved_metric_name),operator:g.LT[g.d.GreaterThan].operation,comparator:0,clause:w.N.Having}):e.label?new _.Z({expressionType:w.p.Sql,subject:new m.Z(e).translateToSql(),operator:g.LT[g.d.GreaterThan].operation,comparator:0,clause:w.N.Having}):e.column_name?new _.Z({expressionType:w.p.Simple,subject:e.column_name,operator:g.LT[g.d.Equals].operation,comparator:"",clause:w.N.Where,isNew:!0}):null}optionsForSelect(e){return[...e.columns,...(0,d.Z)(e.selectedMetrics).map((e=>e&&("string"==typeof e?{saved_metric_name:e}:new m.Z(e))))].filter((e=>e)).reduce(((e,t)=>(t.saved_metric_name?e.push({...t,filterOptionName:t.saved_metric_name}):t.column_name?e.push({...t,filterOptionName:`_col_${t.column_name}`}):t instanceof m.Z&&e.push({...t,filterOptionName:`_adhocmetric_${t.label}`}),e)),[]).sort(((e,t)=>(e.saved_metric_name||e.column_name||e.label).localeCompare(t.saved_metric_name||t.column_name||t.label)))}addNewFilterPopoverTrigger(e){return(0,S.tZ)(y.Z,{operators:this.props.operators,sections:this.props.sections,adhocFilter:new _.Z({}),datasource:this.props.datasource,options:this.state.options,onFilterEdit:this.onNewFilter,partitionColumn:this.state.partitionColumn},e)}render(){const{theme:e}=this.props;return(0,S.tZ)("div",{className:"metrics-select","data-test":"adhoc-filter-control"},(0,S.tZ)(b.gM,null,(0,S.tZ)(u.Z,this.props),this.addNewFilterPopoverTrigger((0,S.tZ)(b.IG,{"data-test":"add-filter-button"},(0,S.tZ)(f.Z.PlusLarge,{iconSize:"s",iconColor:e.colors.grayscale.light5})))),(0,S.tZ)(b.yj,null,this.state.values.length>0?this.state.values.map(((e,t)=>this.valueRenderer(e,t))):this.addNewFilterPopoverTrigger((0,S.tZ)(b.SW,null,(0,S.tZ)(f.Z.PlusSmall,{iconColor:e.colors.grayscale.light1}),(0,l.t)("Add filter")))))}}k.propTypes=E,k.defaultProps={name:"",onChange:()=>{},columns:[],savedMetrics:[],selectedMetrics:[]};const R=(0,c.b)(k)},28543:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(69856),n=a(56565),r=a(61641);const i=[...o.qB].map((e=>o.LT[e].operation));class s{constructor(e){var t;this.expressionType=e.expressionType||r.p.Simple,this.expressionType===r.p.Simple?(this.subject=e.subject,this.operator=null==(t=e.operator)?void 0:t.toUpperCase(),this.operatorId=e.operatorId,this.comparator=e.comparator,[o.d.IsTrue,o.d.IsFalse].indexOf(e.operatorId)>=0&&(this.comparator=e.operatorId===o.d.IsTrue),[o.d.IsNull,o.d.IsNotNull].indexOf(e.operatorId)>=0&&(this.comparator=null),this.clause=e.clause||r.N.Where,this.sqlExpression=null):this.expressionType===r.p.Sql&&(this.sqlExpression="string"==typeof e.sqlExpression?e.sqlExpression:(0,n.c)(e,{useSimple:!0}),this.clause=e.clause,e.operator&&i.indexOf(e.operator)>=0?(this.subject=e.subject,this.operator=e.operator,this.operatorId=e.operatorId):(this.subject=null,this.operator=null),this.comparator=null),this.isExtra=!!e.isExtra,this.isNew=!!e.isNew,this.datasourceWarning=!!e.datasourceWarning,this.filterOptionName=e.filterOptionName||`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}duplicateWith(e){return new s({...this,isNew:!1,...e})}equals(e){return e.clause===this.clause&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.operator===this.operator&&e.operatorId===this.operatorId&&e.comparator===this.comparator&&e.subject===this.subject}isValid(){const e=[o.d.IsNotNull,o.d.IsNull].map((e=>o.LT[e].operation)),t=[o.d.IsTrue,o.d.IsFalse].map((e=>o.LT[e].operation));if(this.expressionType===r.p.Simple){if(e.indexOf(this.operator)>=0)return!(!this.operator||!this.subject);if(t.indexOf(this.operator)>=0)return!(!this.subject||null===this.comparator);if(this.operator&&this.subject&&this.clause)if(Array.isArray(this.comparator)){if(this.comparator.length>0)return!0}else if(null!==this.comparator)return!0}else if(this.expressionType===r.p.Sql)return!(!this.sqlExpression||!this.clause);return!1}getDefaultLabel(){const e=this.translateToSql();return e.length<43?e:`${e.substring(0,40)}...`}getTooltipTitle(){return this.translateToSql()}translateToSql(){return(0,n.c)(this)}}},72201:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(45697),n=a.n(o);const r=n().shape({column_name:n().string.isRequired,type:n().string})},19113:(e,t,a)=>{a.d(t,{Z:()=>s,v:()=>n});var o=a(69856);const n={SIMPLE:"SIMPLE",SQL:"SQL"};function r(e){if(e.sqlExpression&&o.Q_.test(e.sqlExpression)){const t=e.sqlExpression.indexOf(")"),a=e.sqlExpression.substring(0,t).lastIndexOf("(");if(t>0&&a>0)return e.sqlExpression.substring(a+1,t)}return null}function i(e){if(e.sqlExpression&&o.Q_.test(e.sqlExpression)){const t=e.sqlExpression.indexOf("(");if(t>0)return e.sqlExpression.substring(0,t)}return null}class s{constructor(e){if(this.expressionType=e.expressionType||n.SIMPLE,this.expressionType===n.SIMPLE){const t=r(e);this.column=e.column||t&&{column_name:t},this.aggregate=e.aggregate||i(e),this.sqlExpression=null}else this.expressionType===n.SQL&&(this.sqlExpression=e.sqlExpression,this.column=null,this.aggregate=null);this.datasourceWarning=!!e.datasourceWarning,this.hasCustomLabel=!(!e.hasCustomLabel||!e.label),this.label=this.hasCustomLabel?e.label:this.getDefaultLabel(),this.optionName=e.optionName||`metric_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}getDefaultLabel(){return this.translateToSql({useVerboseName:!0})}translateToSql(e={useVerboseName:!1,transformCountDistinct:!1}){if(this.expressionType===n.SIMPLE){var t,a;const n=this.aggregate||"",r=e.useVerboseName&&null!=(t=this.column)&&t.verbose_name?`(${this.column.verbose_name})`:null!=(a=this.column)&&a.column_name?`(${this.column.column_name})`:"";return e.transformCountDistinct&&n===o.YY.COUNT_DISTINCT&&/^\(.*\)$/.test(r)?`COUNT(DISTINCT ${r.slice(1,-1)})`:n+r}return this.expressionType===n.SQL?this.sqlExpression:""}duplicateWith(e){return new s({...this,...e})}equals(e){return e.label===this.label&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.aggregate===this.aggregate&&(e.column&&e.column.column_name)===(this.column&&this.column.column_name)}isValid(){return this.expressionType===n.SIMPLE?!(!this.column||!this.aggregate):this.expressionType===n.SQL&&!!this.sqlExpression}inferSqlExpressionAggregate(){return i(this)}inferSqlExpressionColumn(){return r(this)}}},40266:(e,t,a)=>{a.d(t,{Z:()=>c}),a(67294);var o=a(45697),n=a.n(o),r=a(34087),i=a(17536),s=a(99963),l=a(11965);const d={option:n().oneOfType([r.Z,n().shape({saved_metric_name:n().string.isRequired}),i.Z]).isRequired};function c({option:e}){return e.saved_metric_name?(0,l.tZ)(s.l,{column:{column_name:e.saved_metric_name,type:"expression"},showType:!0}):e.column_name?(0,l.tZ)(s.l,{column:e,showType:!0}):e.label?(0,l.tZ)(s.l,{column:{column_name:e.label,type:"expression"},showType:!0}):null}c.propTypes=d},17536:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(45697),n=a.n(o),r=a(69856),i=a(34087),s=a(19113);const l=n().oneOfType([n().shape({expressionType:n().oneOf([s.v.SIMPLE]).isRequired,column:i.Z.isRequired,aggregate:n().oneOf(Object.keys(r.YY)).isRequired,label:n().string.isRequired}),n().shape({expressionType:n().oneOf([s.v.SQL]).isRequired,sqlExpression:n().string.isRequired,label:n().string.isRequired})])},34087:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(45697),n=a.n(o);const r=n().shape({column_name:n().string.isRequired,type:n().string})},27130:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(45697),n=a.n(o);const r=n().shape({metric_name:n().string,verbose_name:n().string,expression:n().string})},96022:(e,t,a)=>{a.d(t,{ZN:()=>V,gT:()=>H});var o=a(73126),n=a(67294),r=a(28216),i=a(42968),s=a(11965),l=a(51995),d=a(61988),c=a(93185),u=a(13322),p=a(83862),h=a(1304),m=a(35932),g=a(14114),v=a(12515),b=a(56727),f=a(23525),Z=a(10222),y=a(21312),x=a(97381),C=a(3741),S=a(15423),T=a(9875),_=a(13433),w=a(27600),$=a(50909);const M=(0,i.Z)($.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`,F=({formData:e,addDangerToast:t})=>{const[a,o]=(0,n.useState)("400"),[r,i]=(0,n.useState)("600"),[l,c]=(0,n.useState)(""),[u,p]=(0,n.useState)(""),h=(0,n.useCallback)((e=>{const{value:t,name:a}=e.currentTarget;"width"===a&&i(t),"height"===a&&o(t)}),[]),m=(0,n.useCallback)((()=>{c(""),(0,f.YE)(e).then((e=>{c(e),p("")})).catch((()=>{p((0,d.t)("Error")),t((0,d.t)("Sorry, something went wrong. Try again later."))}))}),[t,e]);(0,n.useEffect)((()=>{m()}),[]);const g=(0,n.useMemo)((()=>{if(!l)return"";const e=`${l}?${w.KD.standalone.name}=1&height=${a}`;return`<iframe\n  width="${r}"\n  height="${a}"\n  seamless\n  frameBorder="0"\n  scrolling="no"\n  src="${e}"\n>\n</iframe>`}),[a,l,r]),v=u||g||(0,d.t)("Generating link, please wait..");return(0,s.tZ)("div",{id:"embed-code-popover","data-test":"embed-code-popover"},(0,s.tZ)("div",{css:s.iv`
          display: flex;
          flex-direction: column;
        `},(0,s.tZ)(_.Z,{shouldShowText:!1,text:g,copyNode:(0,s.tZ)(M,{buttonSize:"xsmall"},(0,s.tZ)("i",{className:"fa fa-clipboard"}))}),(0,s.tZ)(T.Kx,{"data-test":"embed-code-textarea",name:"embedCode",disabled:!g,value:v,rows:"4",readOnly:!0,css:e=>s.iv`
            resize: vertical;
            padding: ${2*e.gridUnit}px;
            font-size: ${e.typography.sizes.s}px;
            border-radius: 4px;
            background-color: ${e.colors.secondary.light5};
          `})),(0,s.tZ)("div",{css:e=>s.iv`
          display: flex;
          margin-top: ${4*e.gridUnit}px;
          & > div {
            margin-right: ${2*e.gridUnit}px;
          }
          & > div:last-of-type {
            margin-right: 0;
            margin-left: ${2*e.gridUnit}px;
          }
        `},(0,s.tZ)("div",null,(0,s.tZ)("label",{htmlFor:"embed-height"},(0,d.t)("Chart height")),(0,s.tZ)(T.II,{type:"text",defaultValue:a,name:"height",onChange:h})),(0,s.tZ)("div",null,(0,s.tZ)("label",{htmlFor:"embed-width"},(0,d.t)("Chart width")),(0,s.tZ)(T.II,{type:"text",defaultValue:r,name:"width",onChange:h,id:"embed-width"}))))};var I=a(73727);const E=({chartId:e,dashboards:t=[],...a})=>{const r=(0,l.Fg)(),[i,c]=(0,n.useState)(),[h,m]=(0,n.useState)(),g=t.length>10,v=t.filter((e=>!i||e.dashboard_title.toLowerCase().includes(i.toLowerCase()))),b=0===t.length,f=i&&0===v.length,Z=e?`?focused_chart=${e}`:"";return(0,s.tZ)(n.Fragment,null,g&&(0,s.tZ)(T.II,{allowClear:!0,placeholder:(0,d.t)("Search"),prefix:(0,s.tZ)(u.Z.Search,{iconSize:"l"}),css:s.iv`
            width: ${220}px;
            margin: ${2*r.gridUnit}px ${3*r.gridUnit}px;
          `,value:i,onChange:e=>c(e.currentTarget.value)}),(0,s.tZ)("div",{css:s.iv`
          max-height: ${300}px;
          overflow: auto;
        `},v.map((e=>(0,s.tZ)(p.Menu.Item,(0,o.Z)({key:String(e.id),onMouseEnter:()=>m(e.id),onMouseLeave:()=>{h===e.id&&m(null)}},a),(0,s.tZ)(I.rU,{target:"_blank",rel:"noreferer noopener",to:`/superset/dashboard/${e.id}${Z}`},(0,s.tZ)("div",{css:s.iv`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  max-width: ${220}px;
                `},(0,s.tZ)("div",{css:s.iv`
                    white-space: normal;
                  `},e.dashboard_title),(0,s.tZ)(u.Z.Full,{iconSize:"l",iconColor:r.colors.grayscale.base,css:s.iv`
                    margin-left: ${2*r.gridUnit}px;
                    visibility: ${h===e.id?"visible":"hidden"};
                  `})))))),f&&(0,s.tZ)("div",{css:s.iv`
              margin-left: ${3*r.gridUnit}px;
              margin-bottom: ${r.gridUnit}px;
            `},(0,d.t)("No results found")),b&&(0,s.tZ)(p.Menu.Item,(0,o.Z)({disabled:!0,css:s.iv`
              min-width: ${220}px;
            `},a),(0,d.t)("None"))))},D="edit_properties",k="export_to_csv",R="export_to_csv_pivoted",N="export_to_json",O="export_to_xlsx",U="download_as_image",q="copy_permalink",L="embed_code",z="share_by_email",A="view_query",j="run_in_sql_lab",P=["pivot_table_v2"],V=i.Z.div`
  ${({theme:e})=>s.iv`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*e.gridUnit}px;
      height: ${3*e.gridUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${e.gridUnit}px;
    }
  `}
`,B=((0,i.Z)(m.Z)`
  ${({theme:e})=>s.iv`
    width: ${8*e.gridUnit}px;
    height: ${8*e.gridUnit}px;
    padding: 0;
    border: 1px solid ${e.colors.primary.dark2};

    &.ant-btn > span.anticon {
      line-height: 0;
      transition: inherit;
    }

    &:hover:not(:focus) > span.anticon {
      color: ${e.colors.primary.light1};
    }
  `}
`,s.iv`
  .ant-dropdown-menu-item > & > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`),H=(e,t,a,i,m,T,_,...w)=>{const $=(0,l.Fg)(),{addDangerToast:M,addSuccessToast:I}=(0,g.e1)(),V=(0,r.I0)(),[H,W]=(0,n.useState)(null),[Y,G]=(0,n.useState)(!1),Q=(0,r.v9)((e=>{var t;return null==(t=e.charts)?void 0:t[(0,v.Jp)(e.explore)]})),{datasource:X}=e,K=(0,n.useCallback)((async()=>{try{const t=(0,d.t)("Superset Chart"),a=await(0,f.YE)(e),o=encodeURIComponent((0,d.t)("%s%s","Check out this chart: ",a));window.location.href=`mailto:?Subject=${t}%20&Body=${o}`}catch(e){M((0,d.t)("Sorry, something went wrong. Try again later."))}}),[M,e]),J=(0,n.useCallback)((()=>t?(0,v.pe)({formData:e,ownState:T,resultType:"full",resultFormat:"csv"}):null),[t,e]),ee=(0,n.useCallback)((()=>t?(0,v.pe)({formData:e,resultType:"post_processed",resultFormat:"csv"}):null),[t,e]),te=(0,n.useCallback)((()=>(0,v.pe)({formData:e,resultType:"results",resultFormat:"json"})),[e]),ae=(0,n.useCallback)((()=>(0,v.pe)({formData:e,resultType:"results",resultFormat:"xlsx"})),[e]),oe=(0,n.useCallback)((async()=>{try{if(!e)throw new Error;await(0,Z.Z)((()=>(0,f.YE)(e))),I((0,d.t)("Copied to clipboard!"))}catch(e){M((0,d.t)("Sorry, something went wrong. Try again later."))}}),[M,I,e]),ne=(0,n.useCallback)((({key:t,domEvent:o})=>{var n;switch(t){case D:m(),G(!1);break;case k:J(),G(!1),V((0,x.logEvent)(C.F8,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}));break;case R:ee(),G(!1),V((0,x.logEvent)(C.t4,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}));break;case N:te(),G(!1),V((0,x.logEvent)(C.Tl,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}));break;case O:ae(),G(!1),V((0,x.logEvent)(C.BL,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}));break;case U:(0,b.Z)(".panel-body .chart-container",null!=(n=null==a?void 0:a.slice_name)?n:(0,d.t)("New chart"),!0)(o),G(!1),V((0,x.logEvent)(C.xE,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}));break;case q:oe(),G(!1);break;case L:G(!1);break;case z:K(),G(!1);break;case A:G(!1);break;case j:i(e,o.metaKey),G(!1)}}),[oe,J,ee,te,e,i,m,K,null==a?void 0:a.slice_name]);return[(0,n.useMemo)((()=>(0,s.tZ)(p.Menu,(0,o.Z)({onClick:ne,selectable:!1},w),(0,s.tZ)(n.Fragment,null,a&&(0,s.tZ)(p.Menu.Item,{key:D},(0,d.t)("Edit chart properties")),(0,s.tZ)(p.Menu.SubMenu,{title:(0,d.t)("On dashboards"),key:"dashboards_added_to"},(0,s.tZ)(E,{chartId:null==a?void 0:a.slice_id,dashboards:_})),(0,s.tZ)(p.Menu.Divider,null)),(0,s.tZ)(p.Menu.SubMenu,{title:(0,d.t)("Download"),key:"download_submenu"},P.includes(e.viz_type)?(0,s.tZ)(n.Fragment,null,(0,s.tZ)(p.Menu.Item,{key:k,icon:(0,s.tZ)(u.Z.FileOutlined,{css:B}),disabled:!t},(0,d.t)("Export to original .CSV")),(0,s.tZ)(p.Menu.Item,{key:R,icon:(0,s.tZ)(u.Z.FileOutlined,{css:B}),disabled:!t},(0,d.t)("Export to pivoted .CSV"))):(0,s.tZ)(p.Menu.Item,{key:k,icon:(0,s.tZ)(u.Z.FileOutlined,{css:B}),disabled:!t},(0,d.t)("Export to .CSV")),(0,s.tZ)(p.Menu.Item,{key:N,icon:(0,s.tZ)(u.Z.FileOutlined,{css:B})},(0,d.t)("Export to .JSON")),(0,s.tZ)(p.Menu.Item,{key:U,icon:(0,s.tZ)(u.Z.FileImageOutlined,{css:B})},(0,d.t)("Download as image")),(0,s.tZ)(p.Menu.Item,{key:O,icon:(0,s.tZ)(u.Z.FileOutlined,{css:B})},(0,d.t)("Export to Excel"))),(0,s.tZ)(p.Menu.SubMenu,{title:(0,d.t)("Share"),key:"share_submenu"},(0,s.tZ)(p.Menu.Item,{key:q},(0,d.t)("Copy permalink to clipboard")),(0,s.tZ)(p.Menu.Item,{key:z},(0,d.t)("Share chart by email")),(0,c.cr)(c.TT.EmbeddableCharts)?(0,s.tZ)(p.Menu.Item,{key:L},(0,s.tZ)(h.Z,{triggerNode:(0,s.tZ)("span",{"data-test":"embed-code-button"},(0,d.t)("Embed code")),modalTitle:(0,d.t)("Embed code"),modalBody:(0,s.tZ)(F,{formData:e,addDangerToast:M}),maxWidth:100*$.gridUnit+"px",destroyOnClose:!0,responsive:!0})):null),(0,s.tZ)(p.Menu.Divider,null),H?(0,s.tZ)(n.Fragment,null,(0,s.tZ)(p.Menu.SubMenu,{title:(0,d.t)("Manage email report")},(0,s.tZ)(y.Z,{chart:Q,setShowReportSubMenu:W,showReportSubMenu:H,setIsDropdownVisible:G,isDropdownVisible:Y,useTextMenu:!0})),(0,s.tZ)(p.Menu.Divider,null)):(0,s.tZ)(p.Menu,null,(0,s.tZ)(y.Z,{chart:Q,setShowReportSubMenu:W,setIsDropdownVisible:G,isDropdownVisible:Y,useTextMenu:!0})),(0,s.tZ)(p.Menu.Item,{key:A},(0,s.tZ)(h.Z,{triggerNode:(0,s.tZ)("span",{"data-test":"view-query-menu-item"},(0,d.t)("View query")),modalTitle:(0,d.t)("View query"),modalBody:(0,s.tZ)(S.Z,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0})),X&&(0,s.tZ)(p.Menu.Item,{key:j},(0,d.t)("Run in SQL Lab")))),[M,t,Q,_,ne,Y,e,H,a,$.gridUnit]),Y,G]}},33313:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(44904);const n=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map((e=>({meta:"sql",name:e,score:o.Yn,value:e})))},29487:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(73126),n=a(11965),r=(a(67294),a(4863)),i=a(51995),s=a(13322);function l(e){const{type:t="info",description:a,showIcon:l=!0,closable:d=!0,roomBelow:c=!1,children:u}=e,p=(0,i.Fg)(),{colors:h,typography:m,gridUnit:g}=p,{alert:v,error:b,info:f,success:Z}=h;let y=f,x=s.Z.InfoSolid;return"error"===t?(y=b,x=s.Z.ErrorSolid):"warning"===t?(y=v,x=s.Z.AlertSolid):"success"===t&&(y=Z,x=s.Z.CircleCheckSolid),(0,n.tZ)(r.default,(0,o.Z)({role:"alert",showIcon:l,icon:(0,n.tZ)(x,{"aria-label":`${t} icon`}),closeText:d&&(0,n.tZ)(s.Z.XSmall,{"aria-label":"close icon"}),css:(0,n.iv)({marginBottom:c?4*g:0,padding:`${2*g}px ${3*g}px`,alignItems:"flex-start",border:0,backgroundColor:y.light2,"& .ant-alert-icon":{marginRight:2*g},"& .ant-alert-message":{color:y.dark2,fontSize:m.sizes.m,fontWeight:a?m.weights.bold:m.weights.normal},"& .ant-alert-description":{color:y.dark2,fontSize:m.sizes.m}},"","")},e),u)}},15856:(e,t,a)=>{a.d(t,{j:()=>i}),a(67294);var o=a(11965),n=a(13322),r=a(58593);const i=({title:e,color:t})=>(0,o.tZ)(r.u,{title:e,placement:"top"},(0,o.tZ)(n.Z.InfoCircleOutlined,{"data-test":"tooltip-trigger",css:e=>o.iv`
        color: ${t||e.colors.text.label};
        margin-left: ${2*e.gridUnit}px;
        &.anticon {
          font-size: unset;
          .anticon {
            line-height: unset;
            vertical-align: unset;
          }
        }
      `}))},41814:(e,t,a)=>{a.d(t,{p:()=>le});var o=a(73126),n=a(41609),r=a.n(n),i=a(67294),s=a(61988),l=a(11965),d=a(32103),c=a(42968),u=a(11064),p=a(16355),h=a(69363),m=a(83862),g=a(16550),v=a(51995),b=a(74069),f=a(35932),Z=a(28216),y=a(57001),x=a(12617),C=a(88889),S=a(55786),T=a(99612),_=a(38703),w=a(27600);const $=function({value:e}){return(0,l.tZ)("span",null,e?w.Ly:w.gz)},M=function(){return(0,l.tZ)("span",{css:e=>l.iv`
        color: ${e.colors.grayscale.light1};
      `},w.Wq)};var F=a(42846),I=a(51115);const E=function({format:e=F.default.DATABASE_DATETIME,value:t}){return t?(0,l.tZ)("span",null,(0,I.bt)(e).format(t)):(0,l.tZ)(M,null)};var D=a(94301),k=a(52256),R=a(93197),N=a(87183),O=a(4715),U=a(13322),q=a(99299);const L=function(e){const{headerTitle:t,groupTitle:a,groupOptions:o,value:n,onChange:r}=e,s=(0,v.Fg)(),[d,c]=(0,i.useState)(!1);return(0,l.tZ)("div",{css:l.iv`
        display: flex;
        align-items: center;
      `},(0,l.tZ)(q.Z,{trigger:"click",visible:d,content:(0,l.tZ)("div",null,(0,l.tZ)("div",{css:l.iv`
                font-weight: ${s.typography.weights.bold};
                margin-bottom: ${s.gridUnit}px;
              `},a),(0,l.tZ)(N.Y.Group,{value:n,onChange:e=>{r(e.target.value),c(!1)}},(0,l.tZ)(O.T,{direction:"vertical"},o.map((e=>(0,l.tZ)(N.Y,{key:e.value,value:e.value},e.label)))))),placement:"bottomLeft",arrowPointAtCenter:!0},(0,l.tZ)(U.Z.SettingOutlined,{iconSize:"m",iconColor:s.colors.grayscale.light1,css:l.iv`
            margin-top: 3px; // we need exactly 3px to align the icon
            margin-right: ${s.gridUnit}px;
          `,onClick:()=>c(!0)})),t)};var z=a(42190),A=a(53579),j=a(60331),P=a(72813),V=a(89555);function B({filters:e,setFilters:t,totalCount:a,loading:o,onReload:n}){const r=(0,v.Fg)(),d=(0,i.useMemo)((()=>Object.assign({},...e.map((e=>({[(0,P.GA)(e.col)?e.col.label:e.col]:e}))))),[e]),c=(0,i.useCallback)((e=>{const a={...d};delete a[e],t([...Object.values(a)])}),[d,t]),u=(0,i.useMemo)((()=>Object.entries(d).map((([e,{val:t,formattedVal:a}])=>({colName:e,val:null!=a?a:t}))).sort(((e,t)=>e.colName.localeCompare(t.colName)))),[d]);return(0,l.tZ)("div",{css:l.iv`
        display: flex;
        justify-content: space-between;
        padding: ${r.gridUnit/2}px 0;
        margin-bottom: ${2*r.gridUnit}px;
      `},(0,l.tZ)("div",{css:l.iv`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -${4*r.gridUnit}px;
        `},u.map((({colName:e,val:t})=>(0,l.tZ)(j.Z,{closable:!0,onClose:c.bind(null,e),key:e,css:l.iv`
              height: ${6*r.gridUnit}px;
              display: flex;
              align-items: center;
              padding: ${r.gridUnit/2}px ${2*r.gridUnit}px;
              margin-right: ${4*r.gridUnit}px;
              margin-bottom: ${4*r.gridUnit}px;
              line-height: 1.2;
            `,"data-test":"filter-col"},(0,l.tZ)("span",{css:l.iv`
                margin-right: ${r.gridUnit}px;
              `},e),(0,l.tZ)("strong",{"data-test":"filter-val"},t))))),(0,l.tZ)("div",{css:l.iv`
          display: flex;
          align-items: center;
          height: min-content;
        `},(0,l.tZ)(V.Z,{loading:o&&!a,rowcount:a}),(0,l.tZ)(U.Z.ReloadOutlined,{iconColor:r.colors.grayscale.light1,iconSize:"l","aria-label":(0,s.t)("Reload"),role:"button",onClick:n})))}var H=a(57557),W=a.n(H),Y=a(65946);const G=50;var Q,X={name:"82a6rk",styles:"flex:1"};function K({children:e}){const{ref:t,height:a}=(0,T.NB)();return(0,l.tZ)("div",{ref:t,css:X},i.cloneElement(e,{height:a}))}function J({formData:e,initialFilters:t}){const a=(0,v.Fg)(),[o,n]=(0,i.useState)(0),r=(0,i.useRef)(o),[d,c]=(0,i.useState)(t),[u,p]=(0,i.useState)(!1),[h,m]=(0,i.useState)(""),[g,b]=(0,i.useState)(new Map),[f,y]=(0,i.useState)({}),x=(0,Z.v9)((e=>e.common.conf.SAMPLES_ROW_LIMIT)),[T,w]=(0,i.useMemo)((()=>e.datasource.split("__")),[e.datasource]),{metadataBar:F,status:I}=(0,A.S)({datasetId:T}),N=(0,i.useMemo)((()=>{const e=g.get(o);return e?(r.current=o,e):g.get(r.current)}),[o,g]),O=(0,i.useMemo)((()=>(null==N?void 0:N.colNames.map(((e,t)=>({key:e,dataIndex:e,title:(null==N?void 0:N.colTypes[t])===C.Z.Temporal?(0,l.tZ)(L,{headerTitle:e,groupTitle:(0,s.t)("Formatting"),groupOptions:[{label:(0,s.t)("Original value"),value:Q.Original},{label:(0,s.t)("Formatted value"),value:Q.Formatted}],value:f[e]===Q.Original?Q.Original:Q.Formatted,onChange:t=>y((a=>({...a,[e]:t})))}):e,render:a=>!0===a||!1===a?(0,l.tZ)($,{value:a}):null===a?(0,l.tZ)(M,null):(null==N?void 0:N.colTypes[t])===C.Z.Temporal&&f[e]!==Q.Original&&("number"==typeof a||a instanceof Date)?(0,l.tZ)(E,{value:a}):String(a),width:150}))))||[]),[null==N?void 0:N.colNames,null==N?void 0:N.colTypes,f]),U=(0,i.useMemo)((()=>(null==N?void 0:N.data.map(((e,t)=>null==N?void 0:N.colNames.reduce(((t,a)=>({...t,[a]:e[a]})),{key:t}))))||[]),[null==N?void 0:N.colNames,null==N?void 0:N.data]),q=(0,i.useCallback)((()=>{m(""),b(new Map),n(0)}),[]);(0,i.useEffect)((()=>{m(""),b(new Map),n(0)}),[d]),(0,i.useEffect)((()=>{if(g.has(o)&&[...g.keys()].at(-1)!==o){const e=new Map(g);e.delete(o),b(e.set(o,g.get(o)))}}),[o,g]),(0,i.useEffect)((()=>{if(!h&&!u&&!g.has(o)){var t;p(!0);const a=null!=(t=function(e,t){if(!e)return;const a=(0,Y.Z)(e),o=W()(a.extras,"having"),n=[...(0,S.Z)(a.filters),...(0,S.Z)(t).map((e=>W()(e,"formattedVal")))];return{granularity:a.granularity,time_range:a.time_range,filters:n,extras:o}}(e,d))?t:{},n=Math.ceil(x/G);(0,k.getDatasourceSamples)(w,T,!1,a,G,o+1).then((e=>{b(new Map([...[...g.entries()].slice(1-n),[o,{total:e.total_count,data:e.data,colNames:(0,S.Z)(e.colnames),colTypes:(0,S.Z)(e.coltypes)}]])),m("")})).catch((e=>{m(`${e.name}: ${e.message}`)})).finally((()=>{p(!1)}))}}),[x,T,w,d,e,u,o,h,g]);const j=!h&&!g.size||I===z.ni.Loading;let P=null;if(h)P=(0,l.tZ)("pre",{css:l.iv`
          margin-top: ${4*a.gridUnit}px;
        `},h);else if(j)P=(0,l.tZ)(_.Z,null);else if(0===(null==N?void 0:N.total)){const e=(0,s.t)("No rows were returned for this dataset");P=(0,l.tZ)(D.x3,{image:"document.svg",title:e})}else P=(0,l.tZ)(K,null,(0,l.tZ)(R.ZP,{data:U,columns:O,size:R.ex.Small,defaultPageSize:G,recordCount:null==N?void 0:N.total,usePagination:!0,loading:u,onChange:e=>n(e.current?e.current-1:0),resizable:!0,virtualize:!0,allowHTML:!0}));return(0,l.tZ)(i.Fragment,null,!j&&F,!j&&(0,l.tZ)(B,{filters:d,setFilters:c,totalCount:null==N?void 0:N.total,loading:u,onReload:q}),P)}!function(e){e[e.Original=0]="Original",e[e.Formatted=1]="Formatted"}(Q||(Q={}));const ee=({canExplore:e,closeModal:t,exploreChart:a})=>{const o=(0,v.Fg)();return(0,l.tZ)(i.Fragment,null,(0,l.tZ)(f.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:a,disabled:!e,tooltip:e?void 0:(0,s.t)("You do not have sufficient permissions to edit the chart")},(0,s.t)("Edit chart")),(0,l.tZ)(f.Z,{buttonStyle:"primary",buttonSize:"small",onClick:t,"data-test":"close-drilltodetail-modal",css:l.iv`
          margin-left: ${2*o.gridUnit}px;
        `},(0,s.t)("Close")))};function te({chartId:e,formData:t,initialFilters:a,showModal:o,onHideModal:n}){const r=(0,v.Fg)(),d=(0,g.k6)(),c=(0,i.useContext)(y.DashboardPageIdContext),{slice_name:u}=(0,Z.v9)((t=>t.sliceEntities.slices[e])),p=(0,Z.v9)((e=>{var t;return(0,x.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),h=(0,i.useMemo)((()=>`/explore/?dashboard_page_id=${c}&slice_id=${e}`),[e,c]),m=(0,i.useCallback)((()=>{d.push(h)}),[h,d]);return(0,l.tZ)(b.default,{show:o,onHide:null!=n?n:()=>null,css:l.iv`
        .ant-modal-body {
          display: flex;
          flex-direction: column;
        }
      `,title:(0,s.t)("Drill to detail: %s",u),footer:(0,l.tZ)(ee,{exploreChart:m,canExplore:p}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*r.gridUnit,minWidth:128*r.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1},(0,l.tZ)(J,{formData:t,initialFilters:a}))}var ae=a(69175),oe=a(15856),ne=a(46219);const re=(0,s.t)("Drill to detail by"),ie=({children:e,...t})=>(0,l.tZ)(m.Menu.Item,(0,o.Z)({disabled:!0},t),(0,l.tZ)("div",{css:l.iv`
        white-space: normal;
        max-width: 160px;
      `},e)),se=(0,c.Z)((({children:e,stripHTML:t=!1})=>{const a=t&&"string"==typeof e?(0,d.ZU)(e):e;return(0,l.tZ)("span",null,a)}))`
  ${({theme:e})=>`\n     font-weight: ${e.typography.weights.bold};\n     color: ${e.colors.primary.base};\n   `}
`,le=({chartId:e,formData:t,filters:a=[],isContextMenu:n=!1,contextMenuY:d=0,onSelection:c=(()=>null),onClick:g=(()=>null),submenuIndex:v=0,...b})=>{const[f,Z]=(0,i.useState)([]),[y,x]=(0,i.useState)(!1),C=(0,i.useCallback)(((e,t)=>{g(t),c(),Z(e),x(!0)}),[g,c]),S=(0,i.useCallback)((()=>{x(!1)}),[]),T=(0,i.useMemo)((()=>{var e;return null==(e=(0,u.Z)().get(t.viz_type))?void 0:e.behaviors.find((e=>e===p.cg.DrillToDetail))}),[t.viz_type]),_=(0,i.useMemo)((()=>{const{metrics:e}=(0,h.Z)(t);return r()(e)}),[t]);let w,$;w=T&&_?(0,l.tZ)(ie,(0,o.Z)({},b,{key:"drill-detail-no-aggregations"}),(0,s.t)("Drill to detail"),(0,l.tZ)(oe.j,{title:(0,s.t)("Drill to detail is disabled because this chart does not group data by dimension value.")})):(0,l.tZ)(m.Menu.Item,(0,o.Z)({},b,{key:"drill-detail-no-filters",onClick:C.bind(null,[])}),(0,s.t)("Drill to detail")),T||($=(0,l.tZ)(ie,(0,o.Z)({},b,{key:"drill-detail-by-chart-not-supported"}),re,(0,l.tZ)(oe.j,{title:(0,s.t)("Drill to detail by value is not yet supported for this chart type.")}))),T&&_&&($=(0,l.tZ)(ie,(0,o.Z)({},b,{key:"drill-detail-by-no-aggregations"}),re));const M=(0,i.useMemo)((()=>(0,ae.th)(d,a.length>1?a.length+1:a.length,v)),[d,a.length,v]);return T&&!_&&null!=a&&a.length&&($=(0,l.tZ)(m.Menu.SubMenu,(0,o.Z)({},b,{popupOffset:[0,M],popupClassName:"chart-context-submenu",title:re}),(0,l.tZ)("div",{"data-test":"drill-to-detail-by-submenu"},a.map(((e,t)=>(0,l.tZ)(ne.i,(0,o.Z)({},b,{tooltipText:`${re} ${e.formattedVal}`,key:`drill-detail-filter-${t}`,onClick:C.bind(null,[e])}),`${re} `,(0,l.tZ)(se,{stripHTML:!0},e.formattedVal)))),a.length>1&&(0,l.tZ)(m.Menu.Item,(0,o.Z)({},b,{key:"drill-detail-filter-all",onClick:C.bind(null,a)}),(0,l.tZ)("div",null,`${re} `,(0,l.tZ)(se,{stripHTML:!1},(0,s.t)("all"))))))),!T||_||null!=a&&a.length||($=(0,l.tZ)(ie,(0,o.Z)({},b,{key:"drill-detail-by-select-aggregation"}),re,(0,l.tZ)(oe.j,{title:(0,s.t)("Right-click on a dimension value to drill to detail by that value.")}))),(0,l.tZ)(i.Fragment,null,w,n&&$,(0,l.tZ)(te,{chartId:e,formData:t,initialFilters:f,showModal:y,onHideModal:S}))}},46219:(e,t,a)=>{a.d(t,{i:()=>l});var o=a(73126),n=(a(67294),a(3297)),r=a(11965),i=a(83862),s=a(58593);const l=({tooltipText:e,children:t,...a})=>{const[l,d]=(0,n.Z)();return(0,r.tZ)(i.Menu.Item,(0,o.Z)({css:r.iv`
        display: flex;
      `},a),(0,r.tZ)(s.u,{title:d?e:null},(0,r.tZ)("div",{ref:l,css:r.iv`
            max-width: 100%;
            ${n.B};
          `},t)))}},69175:(e,t,a)=>{a.d(t,{$t:()=>o,th:()=>n});const o=(e,t,a=Number.MAX_SAFE_INTEGER,o=0)=>{const n=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),r=Math.min(32*t,a)+32+o;return n-e<r?n-r:e},n=(e,t,a=0,n=Number.MAX_SAFE_INTEGER,r=0)=>{const i=e+4+32*a+4;return o(i,t,n,r)-i}},87253:(e,t,a)=>{a.d(t,{lU:()=>s.lU,zq:()=>s.zq,ZP:()=>i}),a(67294);var o=a(42968),n=a(11965);const r=o.Z.span`
  &,
  & svg {
    vertical-align: top;
  }
`;function i({checked:e,onChange:t,style:a,className:o}){return(0,n.tZ)(r,{style:a,onClick:()=>{t(!e)},role:"checkbox",tabIndex:0,"aria-checked":e,"aria-label":"Checkbox",className:o||""},e?(0,n.tZ)(s.lU,null):(0,n.tZ)(s.zq,null))}var s=a(13842)},88694:(e,t,a)=>{a.d(t,{$i:()=>p,Lt:()=>u});var o=a(73126),n=(a(67294),a(4715)),r=a(42968),i=a(13322),s=a(11965);const l=r.Z.div`
  width: ${({theme:e})=>.75*e.gridUnit}px;
  height: ${({theme:e})=>.75*e.gridUnit}px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.grayscale.light1};

  font-weight: ${({theme:e})=>e.typography.weights.normal};
  display: inline-flex;
  position: relative;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary.base};

    &::before,
    &::after {
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    width: ${({theme:e})=>.75*e.gridUnit}px;
    height: ${({theme:e})=>.75*e.gridUnit}px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  &::before {
    top: ${({theme:e})=>e.gridUnit}px;
  }

  &::after {
    bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,d=r.Z.div`
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>2*e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`;var c;!function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(c||(c={}));const u=({overlay:e,iconOrientation:t=c.Vertical,...a})=>(0,s.tZ)(n.Gj,(0,o.Z)({overlay:e},a),(0,s.tZ)(d,{"data-test":"dropdown-trigger"},((e=c.Vertical)=>e===c.Horizontal?(0,s.tZ)(i.Z.MoreHoriz,{iconSize:"xl"}):(0,s.tZ)(l,null))(t))),p=e=>(0,s.tZ)(n.Gj,(0,o.Z)({overlayStyle:e.overlayStyle},e))},1510:(e,t,a)=>{a.d(t,{GW:()=>Z,Rz:()=>f,X3:()=>g,on:()=>h,vk:()=>m,zi:()=>p});var o=a(5364),n=a(16355),r=a(93185),i=a(61988),s=a(70400),l=a(81255),d=a(80621),c=a(20292);const u=()=>{var e,t;const a=(0,c.Z)();return(null==a||null==(e=a.common)||null==(t=e.conf)?void 0:t.NATIVE_FILTER_DEFAULT_ROW_LIMIT)||1e3},p=({datasetId:e,dependencies:t={},groupby:a,defaultDataMask:o,controlValues:n,filterType:r,sortMetric:i,adhoc_filters:l,time_range:d,granularity_sqla:c,type:p,dashboardId:h,id:m})=>{var g;const v={};return e&&(v.datasource=`${e}__table`),a&&(v.groupby=[a]),i&&(v.sortMetric=i),{...n,...v,adhoc_filters:null!=l?l:[],extra_filters:[],extra_form_data:t,granularity_sqla:c,metrics:["count"],row_limit:u(),showSearch:!0,defaultValue:null==o||null==(g=o.filterState)?void 0:g.value,time_range:d,url_params:(0,s.Z)("regular"),inView:!0,viz_type:r,type:p,dashboardId:h,native_filter_id:m}};function h(e={},t={}){const a={};return o.Ci.forEach((o=>{const n=[...e[o]||[],...t[o]||[]];n.length&&(a[o]=n)})),o.Ay.forEach((o=>{const n=e[o];void 0!==n&&(a[o]=n);const r=t[o];void 0!==r&&(a[o]=r)})),a}function m(e,t){let a={};return t.forEach((t=>{var o,n;a=h(a,null!=(o=null==(n=e[t])?void 0:n.extraFormData)?o:{})})),a}function g(e){return!e.includes(n.cg.NativeFilter)||(0,r.cr)(r.TT.DashboardCrossFilters)&&e.includes(n.cg.InteractiveChart)}const v=(e,t)=>{var a;return(null==e||null==(a=e[t])?void 0:a.type)===l.gn},b=(e,t,a,o,n,r)=>{var i,s,d,c,u,p;r.has(a)||(r.add(a),(null==e||null==(i=e[a])?void 0:i.type)===l.dW&&t.includes(null==(s=e[a])||null==(d=s.meta)?void 0:d.chartId)&&o.forEach(n.add,n),0===(null==e||null==(c=e[a])||null==(u=c.children)?void 0:u.length)||v(e,a)&&n.has(a)||null==(p=e[a])||p.children.forEach((a=>b(e,t,a,v(e,a)?[...o,a]:o,n,r))))},f=(e,t)=>{const a=e[d._4].children[0],o=a!==d.PV,n=new Set,r=new Set;var i,s;return o?null==(i=e[a])||null==(s=i.children)||s.forEach((a=>b(e,t,a,[a],n,r))):Object.values(e).filter((e=>(null==e?void 0:e.type)===l.gn)).forEach((a=>b(e,t,a.id,[a.id],n,r))),n},Z=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,i.t)("Unknown value")},91914:(e,t,a)=>{a.d(t,{Z:()=>d});var o=a(1510),n=a(99543);function r(e){return Object.entries(e).map((([e,t])=>({col:e,op:Array.isArray(t)?"IN":"==",val:t}))).filter((e=>null!==e.val))}var i=a(87915);const s={},l={};function d({chart:e,filters:t,nativeFilters:a,chartConfiguration:d,colorScheme:c,colorNamespace:u,sliceId:p,dataMask:h,extraControls:m,labelColors:g,sharedLabelColors:v,allSliceIds:b}){const f=l[p];if(s[p]===t&&(0,n.JB)(null==f?void 0:f.color_scheme,c,{ignoreUndefined:!0})&&(0,n.JB)(null==f?void 0:f.color_namespace,u,{ignoreUndefined:!0})&&(0,n.JB)(null==f?void 0:f.label_colors,g,{ignoreUndefined:!0})&&(0,n.JB)(null==f?void 0:f.shared_label_colors,v,{ignoreUndefined:!0})&&f&&(0,n.JB)(null==f?void 0:f.dataMask,h,{ignoreUndefined:!0})&&(0,n.JB)(null==f?void 0:f.extraControls,m,{ignoreUndefined:!0}))return f;let Z={};const y=(0,i.g)({chartConfiguration:d,dataMask:h,nativeFilters:a,allSliceIds:b}),x=Object.entries(y).filter((([,{scope:t}])=>t.includes(e.id))).map((([e])=>e));x.length&&(Z={extra_form_data:(0,o.vk)(h,x)});const C={...e.form_data,label_colors:g,shared_label_colors:v,...c&&{color_scheme:c},extra_filters:r(t),...Z,...m};return s[p]=t,l[p]={...C,dataMask:h,extraControls:m},C}},50909:(e,t,a)=>{a.d(t,{C4:()=>k,HS:()=>$,_q:()=>N,m:()=>w,qi:()=>_});var o=a(11965),n=a(23279),r=a.n(n),i=a(67294),s=a(42968),l=a(51995),d=a(61988),c=a(51115),u=a(42846),p=a(88889),h=a(32103),m=a(4715),g=a(9875),v=a(27600),b=a(87183),f=a(13322),Z=a(35932),y=a(99299),x=a(54076),C=a(13433),S=a(61587);const T=(0,s.Z)("span")`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,_=(0,s.Z)(Z.Z)`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;

  // needed to override button's first-of-type margin: 0
  && {
    margin: 0 ${({theme:e})=>2*e.gridUnit}px;
  }

  i {
    padding: 0 ${({theme:e})=>e.gridUnit}px;
  }
`,w=({data:e,columns:t})=>{const a=(0,l.Fg)();return(0,o.tZ)(C.Z,{text:e&&t?(0,x.Mv)(e,t):"",wrapped:!1,copyNode:(0,o.tZ)(f.Z.CopyOutlined,{iconColor:a.colors.grayscale.base,iconSize:"l","aria-label":(0,d.t)("Copy"),role:"button",css:o.iv`
            &.anticon > * {
              line-height: 0;
            }
          `})})},$=({onChangeHandler:e})=>{const t=(0,l.Fg)(),a=r()(e,v.M$);return(0,o.tZ)(g.II,{prefix:(0,o.tZ)(f.Z.Search,{iconColor:t.colors.grayscale.base}),placeholder:(0,d.t)("Search"),onChange:e=>{const t=e.target.value;a(t)},css:o.iv`
        width: 200px;
        margin-right: ${2*t.gridUnit}px;
      `})};var M;!function(e){e.Formatted="formatted",e.Original="original"}(M||(M={}));const F=({onChange:e,value:t})=>(0,o.tZ)(b.Y.Group,{value:t,onChange:e},(0,o.tZ)(m.T,{direction:"vertical"},(0,o.tZ)(b.Y,{value:M.Formatted},(0,d.t)("Formatted date")),(0,o.tZ)(b.Y,{value:M.Original},(0,d.t)("Original value")))),I=s.Z.div`
  display: flex;
  flex-direction: column;

  padding: ${({theme:e})=>4*e.gridUnit+"px"};
`,E=s.Z.span`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  text-transform: uppercase;
`,D=({columnName:e,onTimeColumnChange:t,datasourceId:a,isOriginalTimeColumn:n})=>{const r=(0,l.Fg)(),s=a=>{t(e,a.target.value)},c=(0,i.useMemo)((()=>a?(0,o.tZ)(I,{onClick:e=>e.stopPropagation()},(0,o.tZ)(o.xB,{styles:o.iv`
              .column-formatting-popover .ant-popover-inner-content {
                padding: 0;
              }
            `}),(0,o.tZ)(E,null,(0,d.t)("Column Formatting")),(0,o.tZ)(F,{onChange:s,value:n?M.Original:M.Formatted})):null),[a,n]);return a?(0,o.tZ)("span",null,(0,o.tZ)(y.Z,{overlayClassName:"column-formatting-popover",trigger:"click",content:c,placement:"bottomLeft",arrowPointAtCenter:!0},(0,o.tZ)(f.Z.SettingOutlined,{iconSize:"m",iconColor:r.colors.grayscale.light1,css:(0,o.iv)({marginRight:`${r.gridUnit}px`},"",""),onClick:e=>e.stopPropagation()})),e):(0,o.tZ)("span",null,e)},k=(e,t)=>{const a=(0,i.useMemo)((()=>{var e;return null!=(e=null==t?void 0:t.map((e=>Object.values(e).map((e=>e?e.toString().toLowerCase():(0,d.t)("N/A"))))))?e:[]}),[t]);return(0,i.useMemo)((()=>null!=t&&t.length?t.filter(((t,o)=>a[o].some((t=>null==t?void 0:t.includes(e.toLowerCase()))))):[]),[t,e,a])},R=(0,c.bt)(u.default.DATABASE_DATETIME),N=(e,t,a,n,r,s,l)=>{const[d,c]=(0,i.useState)((0,S.W)(n)),u=(e,t)=>{if(n)if(t!==M.Original||d.includes(e)){if(t===M.Formatted&&d.includes(e)){const t=(0,S.W)(n);t.splice(t.indexOf(e),1),(0,S.e)(n,t),c(t)}}else{const t=(0,S.W)(n);t.push(e),(0,S.e)(n,t),c(t)}};return(0,i.useEffect)((()=>{r&&c((0,S.W)(n))}),[n,r]),(0,i.useMemo)((()=>e&&null!=a&&a.length?e.filter((e=>Object.keys(a[0]).includes(e))).map(((e,r)=>{const i=null==t?void 0:t[r],c=a[0][e],m=i===p.Z.Temporal?d.indexOf(e):-1,g=d.includes(e);return{id:e||r,accessor:t=>t[e],Header:i===p.Z.Temporal&&"string"!=typeof c?(0,o.tZ)(D,{columnName:e,datasourceId:n,onTimeColumnChange:u,isOriginalTimeColumn:g}):e,Cell:({value:e})=>!0===e?v.Ly:!1===e?v.gz:null===e?(0,o.tZ)(T,null,v.Wq):i===p.Z.Temporal&&-1===m&&"number"==typeof e?R(e):"string"==typeof e&&l?(0,h.Ul)(e):String(e),...null==s?void 0:s[e]}})):[]),[e,a,t,n,s,d])}},61587:(e,t,a)=>{a.d(t,{W:()=>r,e:()=>i});var o=a(55786),n=a(61337);const r=e=>{const t=(0,n.rV)(n.dR.ExploreDataTableOriginalFormattedTimeColumns,{});return void 0===e?[]:(0,o.Z)(t[e])},i=(e,t)=>{const a=(0,n.rV)(n.dR.ExploreDataTableOriginalFormattedTimeColumns,{});(0,n.LS)(n.dR.ExploreDataTableOriginalFormattedTimeColumns,{...a,[e]:t})}},66124:(e,t,a)=>{a.d(t,{X:()=>h,c:()=>m});var o=a(4788),n=a.n(o),r=a(67294),i=a(42968),s=a(88889),l=a(11965),d=a(50909),c=a(54076),u=a(61587),p=a(89555);const h=i.Z.div`
  ${({theme:e})=>`\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: ${2*e.gridUnit}px;\n\n    span {\n      flex-shrink: 0;\n    }\n  `}
`,m=({data:e,datasourceId:t,onInputChange:a,columnNames:o,columnTypes:i,rowcount:m,isLoading:g})=>{const v=(0,u.W)(t),b=n()(o,i).filter((([e,t])=>t===s.Z.Temporal&&e&&!v.includes(e))).map((([e])=>e)),f=(0,r.useMemo)((()=>(0,c.cD)(e,b)),[e,b]);return(0,l.tZ)(h,null,(0,l.tZ)(d.HS,{onChangeHandler:a}),(0,l.tZ)("div",{css:l.iv`
          display: flex;
          align-items: center;
        `},(0,l.tZ)(p.Z,{rowcount:m,loading:g}),(0,l.tZ)(d.m,{data:f,columns:o})))}},5462:(e,t,a)=>{a.d(t,{T:()=>d});var o=a(67294),n=a(61988),r=a(76962),i=a(50909),s=a(66124),l=a(11965);const d=({data:e,colnames:t,coltypes:a,rowcount:d,datasourceId:c,dataSize:u=50,isVisible:p})=>{const[h,m]=(0,o.useState)(""),g=(0,i._q)(t,a,e,c,p,{},!0),v=(0,i.C4)(h,e);return(0,l.tZ)(o.Fragment,null,(0,l.tZ)(s.c,{data:v,columnNames:t,columnTypes:a,rowcount:d,datasourceId:c,onInputChange:e=>m(e),isLoading:!1}),(0,l.tZ)(r.Z,{columns:g,data:v,pageSize:u,noDataText:(0,n.t)("No results"),emptyWrapperType:r.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))}},21496:(e,t,a)=>{a.d(t,{c9:()=>D,Tg:()=>_});var o,n=a(67294),r=a(42968),i=a(51995),s=a(93185),l=a(61988),d=a(13322),c=a(71262),u=a(61337);!function(e){e.Results="results",e.Samples="samples"}(o||(o={}));var p=a(11064),h=a(55786),m=a(38703),g=a(94301),v=a(52256),b=a(98286),f=a(5462),Z=a(66124),y=a(11965);const x=r.Z.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,C=new WeakMap,S=({isRequest:e,queryFormData:t,queryForce:a,ownState:o,errorMessage:r,actions:i,isVisible:s,dataSize:d=50})=>{var c;const u=(0,p.Z)().get((null==t?void 0:t.viz_type)||(null==t?void 0:t.vizType)),[S,T]=(0,n.useState)([]),[_,w]=(0,n.useState)(!0),[$,M]=(0,n.useState)(""),F=null!=(c=null==u?void 0:u.queryObjectCount)?c:1;if((0,n.useEffect)((()=>{r||(e&&C.has(t)&&(T((0,h.Z)(C.get(t))),M(""),a&&i&&i.setForceQuery(!1),w(!1)),e&&!C.has(t)&&(w(!0),(0,v.getChartDataRequest)({formData:t,force:a,resultFormat:"json",resultType:"results",ownState:o}).then((({json:e})=>{T((0,h.Z)(e.result)),M(""),C.set(t,e.result),a&&i&&i.setForceQuery(!1)})).catch((e=>{(0,b.O$)(e).then((({error:e,message:t})=>{M(e||t||(0,l.t)("Sorry, an error occurred"))}))})).finally((()=>{w(!1)}))))}),[t,e]),(0,n.useEffect)((()=>{r&&w(!1)}),[r]),_)return Array(F).fill((0,y.tZ)(m.Z,null));if(r){const e=(0,l.t)("Run a query to display results");return Array(F).fill((0,y.tZ)(g.x3,{image:"document.svg",title:e}))}if($){const e=(0,y.tZ)(n.Fragment,null,(0,y.tZ)(Z.c,{data:[],columnNames:[],columnTypes:[],rowcount:0,datasourceId:t.datasource,onInputChange:()=>{},isLoading:!1}),(0,y.tZ)(x,null,$));return Array(F).fill(e)}if(0===S.length){const e=(0,l.t)("No results were returned for this query");return Array(F).fill((0,y.tZ)(g.x3,{image:"document.svg",title:e}))}return S.slice(0,F).map(((e,a)=>(0,y.tZ)(f.T,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,rowcount:e.rowcount,dataSize:d,datasourceId:t.datasource,key:a,isVisible:s})))},T=r.Z.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .ant-tabs {
    height: 100%;
  }

  .ant-tabs-content {
    height: 100%;
  }

  .ant-tabs-tabpane {
    display: flex;
    flex-direction: column;
  }

  .table-condensed {
    overflow: auto;
  }
`,_=({isRequest:e,queryFormData:t,queryForce:a,ownState:n,errorMessage:r,actions:i,isVisible:s,dataSize:d=50})=>{const u=S({errorMessage:r,queryFormData:t,queryForce:a,ownState:n,isRequest:e,actions:i,dataSize:d,isVisible:s});if(1===u.length)return(0,y.tZ)(T,null,u[0]);const p=u.map(((e,t)=>0===t?(0,y.tZ)(c.ZP.TabPane,{tab:(0,l.t)("Results"),key:o.Results},e):(0,y.tZ)(c.ZP.TabPane,{tab:(0,l.t)("Results %s",t+1),key:`${o.Results} ${t+1}`},e)));return(0,y.tZ)(T,null,(0,y.tZ)(c.ZP,{fullWidth:!1},p))};var w=a(76962),$=a(50909);const M=r.Z.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,F=new WeakSet,I=({isRequest:e,datasource:t,queryForce:a,actions:o,dataSize:r=50,isVisible:i})=>{const[s,d]=(0,n.useState)(""),[c,u]=(0,n.useState)([]),[p,b]=(0,n.useState)([]),[f,x]=(0,n.useState)([]),[C,S]=(0,n.useState)(!1),[T,_]=(0,n.useState)(0),[I,E]=(0,n.useState)(""),D=(0,n.useMemo)((()=>`${t.id}__${t.type}`),[t]);(0,n.useEffect)((()=>{e&&a&&F.delete(t),e&&!F.has(t)&&(S(!0),(0,v.getDatasourceSamples)(t.type,t.id,a,{}).then((e=>{u((0,h.Z)(e.data)),b((0,h.Z)(e.colnames)),x((0,h.Z)(e.coltypes)),_(e.rowcount),E(""),F.add(t),a&&o&&o.setForceQuery(!1)})).catch((e=>{u([]),b([]),x([]),E(`${e.name}: ${e.message}`)})).finally((()=>{S(!1)})))}),[t,e,a]);const k=(0,$._q)(p,f,c,D,i,{},!0),R=(0,$.C4)(s,c);if(C)return(0,y.tZ)(m.Z,null);if(I)return(0,y.tZ)(n.Fragment,null,(0,y.tZ)(Z.c,{data:R,columnNames:p,columnTypes:f,rowcount:T,datasourceId:D,onInputChange:e=>d(e),isLoading:C}),(0,y.tZ)(M,null,I));if(0===c.length){const e=(0,l.t)("No samples were returned for this dataset");return(0,y.tZ)(g.x3,{image:"document.svg",title:e})}return(0,y.tZ)(n.Fragment,null,(0,y.tZ)(Z.c,{data:R,columnNames:p,columnTypes:f,rowcount:T,datasourceId:D,onInputChange:e=>d(e),isLoading:C}),(0,y.tZ)(w.Z,{columns:k,data:R,pageSize:r,noDataText:(0,l.t)("No results"),emptyWrapperType:w.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},E=r.Z.div`
  ${({theme:e})=>`\n    position: relative;\n    background-color: ${e.colors.grayscale.light5};\n    z-index: 5;\n    overflow: hidden;\n\n    .ant-tabs {\n      height: 100%;\n    }\n\n    .ant-tabs-content-holder {\n      height: 100%;\n    }\n\n    .ant-tabs-content {\n      height: 100%;\n    }\n\n    .ant-tabs-tabpane {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n\n      .table-condensed {\n        height: 100%;\n        overflow: auto;\n        margin-bottom: ${4*e.gridUnit}px;\n\n        .table {\n          margin-bottom: ${2*e.gridUnit}px;\n        }\n      }\n\n      .pagination-container > ul[role='navigation'] {\n        margin-top: 0;\n      }\n    }\n  `}
`,D=({queryFormData:e,datasource:t,queryForce:a,onCollapseChange:r,chartStatus:p,ownState:h,errorMessage:m,actions:g})=>{const v=(0,i.Fg)(),[b,f]=(0,n.useState)(o.Results),[x,C]=(0,n.useState)({results:!1,samples:!1}),[T,_]=(0,n.useState)(!(0,s.cr)(s.TT.DatapanelClosedByDefault)&&(0,u.rV)(u.dR.IsDatapanelOpen,!1));(0,n.useEffect)((()=>{(0,s.cr)(s.TT.DatapanelClosedByDefault)||(0,u.LS)(u.dR.IsDatapanelOpen,T)}),[T]),(0,n.useEffect)((()=>{T||C({results:!1,samples:!1}),T&&b.startsWith(o.Results)&&p&&"loading"!==p&&C({results:!0,samples:!1}),T&&b===o.Samples&&C({results:!1,samples:!0})}),[T,b,p]);const w=(0,n.useCallback)((e=>{r(e),_(e)}),[r]),$=(0,n.useCallback)(((e,t)=>{T?e===b&&(t.preventDefault(),w(!1)):w(!0),f(e)}),[b,w,T]),M=(0,n.useMemo)((()=>{const e=T?(0,y.tZ)(d.Z.CaretUp,{iconColor:v.colors.grayscale.base,"aria-label":(0,l.t)("Collapse data panel")}):(0,y.tZ)(d.Z.CaretDown,{iconColor:v.colors.grayscale.base,"aria-label":(0,l.t)("Expand data panel")});return(0,y.tZ)(Z.X,null,T?(0,y.tZ)("span",{role:"button",tabIndex:0,onClick:()=>w(!1)},e):(0,y.tZ)("span",{role:"button",tabIndex:0,onClick:()=>w(!0)},e))}),[w,T,v.colors.grayscale.base]),F=S({errorMessage:m,queryFormData:e,queryForce:a,ownState:h,isRequest:x.results,actions:g,isVisible:o.Results===b}).map(((e,t)=>0===t?(0,y.tZ)(c.ZP.TabPane,{tab:(0,l.t)("Results"),key:o.Results},e):t>0?(0,y.tZ)(c.ZP.TabPane,{tab:(0,l.t)("Results %s",t+1),key:`${o.Results} ${t+1}`},e):null));return(0,y.tZ)(E,{"data-test":"some-purposeful-instance"},(0,y.tZ)(c.ZP,{fullWidth:!1,tabBarExtraContent:M,activeKey:T?b:"",onTabClick:$},F,(0,y.tZ)(c.ZP.TabPane,{tab:(0,l.t)("Samples"),key:o.Samples},(0,y.tZ)(I,{datasource:t,queryForce:a,isRequest:x.samples,actions:g,isVisible:o.Samples===b}))))}},42753:(e,t,a)=>{var o;a.d(t,{g:()=>o}),function(e){e.Column="column",e.ColumnOption="columnOption",e.AdhocColumnOption="adhocColumn",e.Metric="metric",e.MetricOption="metricOption",e.AdhocMetricOption="adhocMetric",e.FilterOption="filterOption"}(o||(o={}))},63325:(e,t,a)=>{a.d(t,{b:()=>o});const o=a(42968).Z.div`
  .edit-popover-resize {
    transform: scaleX(-1);
    float: right;
    margin-top: ${({theme:e})=>4*e.gridUnit}px;
    margin-right: ${({theme:e})=>-2*e.gridUnit}px;
    cursor: nwse-resize;
  }
  .filter-sql-editor {
    border: ${({theme:e})=>e.colors.grayscale.light2} solid thin;
  }
`},89555:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var o=a(61988),n=a(67190),r=a(37921),i=a(58593),s=a(11965);const l=(0,o.t)("The row limit set for the chart was reached. The chart may show partial data.");function d(e){const{rowcount:t=0,limit:a=null,loading:d}=e,c=a&&t>=a,u=c||0===t&&!d?"danger":"default",p=(0,n.JB)()(t),h=(0,s.tZ)(r.Z,{type:u},d?(0,o.t)("Loading..."):(0,s.tZ)("span",{"data-test":"row-count-label"},(0,o.tn)("%s row","%s rows",t,p)));return c?(0,s.tZ)(i.u,{id:"tt-rowcount-tooltip",title:(0,s.tZ)("span",null,l)},h):h}},96055:(e,t,a)=>{a.d(t,{Z:()=>K});var o=a(67294),n=a(73126),r=a(45697),i=a.n(r),s=a(35932),l=a(42968),d=a(61988),c=a(57368),u=a(71262),p=a(17536),h=a(28543),m=a(4591),g=a(4715),v=a(37731),b=a(31069),f=a(93185),Z=a(69856),y=a(40266),x=a(58593),C=a(9875),S=a(54076),T=a(45211),_=a(23279),w=a.n(_),$=a(55786),M=a(15926),F=a.n(M);const I={parsedAdvancedDataType:"",advancedDataTypeOperatorList:[],errorMessage:""};var E=a(7848),D=a(61314),k=a(61641),R=a(11965);const N=(0,l.Z)(C.II)`
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
`,O=((0,l.Z)(m.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,(0,l.Z)(g.Ph)`
  .ant-select-selector::after {
    content: ${({labelText:e})=>e||"\\A0"};
    display: inline-block;
    white-space: nowrap;
    color: ${({theme:e})=>e.colors.grayscale.light1};
    width: max-content;
  }
`),U=e=>{var t,a;const{onSubjectChange:r,onOperatorChange:i,isOperatorRelevant:s,onComparatorChange:l,onDatePickerChange:c}=(e=>{const t=(0,D.Ct)(),a=(t,a)=>{var o;const n=null==(o=e.datasource.columns)?void 0:o.find((e=>e.column_name===a)),r=!!n&&("BOOL"===n.type||"BOOLEAN"===n.type),i=!!n&&("INT"===n.type||"INTEGER"===n.type),s=!!n&&!!n.expression;if(t&&t===Z.d.LatestPartition){const{partitionColumn:t}=e;return t&&a&&a===t}return(!t||t!==Z.d.TemporalRange)&&(t===Z.d.IsTrue||t===Z.d.IsFalse?r||i||s:r?t===Z.d.IsNull||t===Z.d.IsNotNull:e.adhocFilter.clause!==k.N.Having||-1!==Z.Ak.indexOf(t))};return{onSubjectChange:o=>{const n=e.options.find((e=>"column_name"in e&&e.column_name===o||"optionName"in e&&e.optionName===o));let r,i="";n&&"column_name"in n?(i=n.column_name,r=k.N.Where):n&&"saved_metric_name"in n?(i=n.saved_metric_name,r=k.N.Having):null!=n&&n.label&&(i=n.label,r=k.N.Having);let{operator:s,operatorId:l,comparator:d}=e.adhocFilter;s=s&&l&&a(l,i)?Z.LT[l].operation:null,(0,v.Z)(s)||(s=Z.d.In,l=Z.d.In,d=void 0),(0,T.x)(o,e.datasource)&&(i=o,s=Z.d.TemporalRange,l=Z.d.TemporalRange,d=t),e.onChange(e.adhocFilter.duplicateWith({subject:i,clause:r,operator:s,expressionType:k.p.Simple,operatorId:l,comparator:d}))},onOperatorChange:t=>{const a=e.adhocFilter.comparator;let o;o=Z.qK.has(t)?Array.isArray(a)?a:[a].filter((e=>e)):Array.isArray(a)?a[0]:a,t!==Z.d.IsTrue&&t!==Z.d.IsFalse||(o=Z.d.IsTrue===t),t&&Z.qB.has(t)?e.onChange(e.adhocFilter.duplicateWith({subject:e.adhocFilter.subject,clause:k.N.Where,operatorId:t,operator:Z.LT[t].operation,expressionType:k.p.Sql,datasource:e.datasource})):e.onChange(e.adhocFilter.duplicateWith({operatorId:t,operator:Z.LT[t].operation,comparator:o,expressionType:k.p.Simple}))},onComparatorChange:t=>{e.onChange(e.adhocFilter.duplicateWith({comparator:t,expressionType:k.p.Simple}))},isOperatorRelevant:a,clearOperator:()=>{e.onChange(e.adhocFilter.duplicateWith({operatorId:void 0,operator:void 0}))},onDatePickerChange:(t,a)=>{e.onChange(e.adhocFilter.duplicateWith({subject:t,operator:Z.d.TemporalRange,comparator:a,expressionType:k.p.Simple}))}}})(e),[u,p]=(0,o.useState)([]),[h,m]=(0,o.useState)(e.adhocFilter.comparator),[C,_]=(0,o.useState)(!1),{advancedDataTypesState:M,subjectAdvancedDataType:U,fetchAdvancedDataTypeValueCallback:q,fetchSubjectAdvancedDataType:L}=(e=>{const[t,a]=(0,o.useState)(I),[n,r]=(0,o.useState)(),i=(0,o.useCallback)(((t,o,n)=>{const r=(0,$.Z)(t);n?w()((()=>{const t=`/api/v1/advanced_data_type/convert?q=${F().encode({type:n,values:r})}`;b.Z.get({endpoint:t}).then((({json:t})=>{a({parsedAdvancedDataType:t.result.display_value,advancedDataTypeOperatorList:t.result.valid_filter_operators,errorMessage:t.result.error_message}),e(!t.result.error_message)})).catch((()=>{a({parsedAdvancedDataType:"",advancedDataTypeOperatorList:o.advancedDataTypeOperatorList,errorMessage:(0,d.t)("Failed to retrieve advanced type")}),e(!1)}))}),600)():a(I)}),[e]);return{advancedDataTypesState:t,subjectAdvancedDataType:n,setAdvancedDataTypesState:a,fetchAdvancedDataTypeValueCallback:i,fetchSubjectAdvancedDataType:e=>{const t=e.options.find((t=>"column_name"in t&&t.column_name===e.adhocFilter.subject||"optionName"in t&&t.optionName===e.adhocFilter.subject));t&&"advanced_data_type"in t?r(t.advanced_data_type):e.validHandler(!0)}}})(e.validHandler),z=(e,t)=>U?s(e,t)&&M.advancedDataTypeOperatorList.includes(e):s(e,t),A=()=>{const e=(()=>{var e;const t=Array.isArray(h)?h.filter((e=>u.includes(e))).length:0;return null!=(e=(null==u?void 0:u.length)-t)?e:0})(),t=(0,d.t)("%s option(s)",e);return e?t:""};let j=e.options;const{subject:P,operator:V,operatorId:B}=e.adhocFilter,H={ariaLabel:(0,d.t)("Select subject"),value:null!=P?P:void 0,onChange:e=>{m(void 0),r(e)},notFoundContent:(0,d.t)("No such column found. To filter on a metric, try the Custom SQL tab."),autoFocus:!P,placeholder:""};H.placeholder=e.adhocFilter.clause===k.N.Where?(0,d.t)("%s column(s)",j.length):(0,d.t)("To filter on a metric, use Custom SQL tab."),j=e.options.filter((e=>"column_name"in e&&e.column_name));const W={placeholder:(0,d.t)("%s operator(s)",(null!=(t=e.operators)?t:Z.GS).filter((e=>z(e,P))).length),value:B,onChange:i,autoFocus:!!H.value&&!V,ariaLabel:(0,d.t)("Select operator")},Y=!!H.value&&!!W.value,G={allowClear:!0,allowNewOptions:!0,ariaLabel:(0,d.t)("Comparator option"),mode:Z.qK.has(B)?"multiple":"single",loading:C,value:h,onChange:l,notFoundContent:(0,d.t)("Type a value here"),disabled:Z.yi.includes(B),placeholder:A(),autoFocus:Y},Q=h&&h.length>0&&A(),X=(0,E.v)({columnName:e.adhocFilter.subject,timeRange:e.adhocFilter.operator===Z.d.TemporalRange?e.adhocFilter.comparator:void 0,datasource:e.datasource,onChange:c});(0,o.useEffect)((()=>{X||(()=>{const{datasource:t}=e,a=e.adhocFilter.subject,o=e.adhocFilter.clause===k.N.Having;if(a&&t&&t.filter_select&&!o){const e=new AbortController,{signal:o}=e;C&&e.abort(),_(!0),b.Z.get({signal:o,endpoint:`/api/v1/datasource/${t.type}/${t.id}/column/${a}/values/`}).then((({json:e})=>{p(e.result.map((e=>({value:e,label:(0,S.lo)(e)})))),_(!1)})).catch((()=>{p([]),_(!1)}))}})()}),[e.adhocFilter.subject]),(0,o.useEffect)((()=>{(0,f.cr)(f.TT.EnableAdvancedDataTypes)&&L(e)}),[e.adhocFilter.subject]),(0,o.useEffect)((()=>{(0,f.cr)(f.TT.EnableAdvancedDataTypes)&&q(void 0===h?"":h,M,U)}),[h,U,q]),(0,o.useEffect)((()=>{(0,f.cr)(f.TT.EnableAdvancedDataTypes)&&m(e.adhocFilter.comparator)}),[e.adhocFilter.comparator]);const K=(0,R.tZ)(g.Ph,(0,n.Z)({css:e=>({marginTop:4*e.gridUnit,marginBottom:4*e.gridUnit}),"data-test":"select-element",options:j.map((e=>{return{value:"column_name"in e&&e.column_name||"optionName"in e&&e.optionName||"",label:"saved_metric_name"in e&&e.saved_metric_name||"column_name"in e&&e.column_name||"label"in e&&e.label,key:"id"in e&&e.id||"optionName"in e&&e.optionName||void 0,customLabel:(t=e,(0,R.tZ)(y.Z,{option:t}))};var t}))},H)),J=(0,R.tZ)(o.Fragment,null,(0,R.tZ)(g.Ph,(0,n.Z)({css:e=>({marginBottom:4*e.gridUnit}),options:(null!=(a=e.operators)?a:Z.GS).filter((e=>z(e,P))).map(((e,t)=>({value:e,label:Z.LT[e].display,key:e,order:t})))},W)),Z.qK.has(B)||u.length>0?(0,R.tZ)(x.u,{title:M.errorMessage||M.parsedAdvancedDataType},(0,R.tZ)(O,(0,n.Z)({labelText:Q,options:u},G))):(0,R.tZ)(x.u,{title:M.errorMessage||M.parsedAdvancedDataType},(0,R.tZ)(N,{"data-test":"adhoc-filter-simple-value",name:"filter-value",ref:e=>{e&&Y&&e.focus()},onChange:e=>{const{value:t}=e.target;m(t),l(t)},value:h,placeholder:(0,d.t)("Filter value (case sensitive)"),disabled:Z.yi.includes(B)})));return(0,R.tZ)(o.Fragment,null,K,null!=X?X:J)};var q=a(94670),L=a(33313),z=a(72201);const A={adhocFilter:i().instanceOf(h.Z).isRequired,onChange:i().func.isRequired,options:i().arrayOf(i().oneOfType([z.Z,i().shape({saved_metric_name:i().string.isRequired}),p.Z])).isRequired,height:i().number.isRequired},j=(0,l.Z)(g.Ph)`
  ${({theme:e})=>`\n    width: ${30*e.gridUnit}px;\n    marginRight: ${e.gridUnit}px;\n  `}
`;class P extends o.Component{constructor(e){super(e),this.onSqlExpressionChange=this.onSqlExpressionChange.bind(this),this.onSqlExpressionClauseChange=this.onSqlExpressionClauseChange.bind(this),this.handleAceEditorRef=this.handleAceEditorRef.bind(this)}componentDidUpdate(){this.aceEditorRef&&this.aceEditorRef.editor.resize()}onSqlExpressionClauseChange(e){this.props.onChange(this.props.adhocFilter.duplicateWith({clause:e,expressionType:k.p.Sql}))}onSqlExpressionChange(e){this.props.onChange(this.props.adhocFilter.duplicateWith({sqlExpression:e,expressionType:k.p.Sql}))}handleAceEditorRef(e){e&&(this.aceEditorRef=e)}render(){const{adhocFilter:e,height:t,options:a}=this.props,o=L.Z.concat(a.map((e=>e.column_name?{name:e.column_name,value:e.column_name,score:50,meta:"option"}:null)).filter(Boolean)),n=Object.values(k.N).map((e=>({label:e,value:e})));return(0,R.tZ)("span",null,(0,R.tZ)("div",{className:"filter-edit-clause-section"},(0,R.tZ)("div",null,(0,R.tZ)(j,{options:n,ariaLabel:(0,d.t)("Select column"),placeholder:(0,d.t)("choose WHERE or HAVING..."),value:e.clause,onChange:this.onSqlExpressionClauseChange})),(0,R.tZ)("span",{className:"filter-edit-clause-info"},(0,R.tZ)("strong",null,"WHERE")," ",(0,d.t)("Filters by columns"),(0,R.tZ)("br",null),(0,R.tZ)("strong",null,"HAVING")," ",(0,d.t)("Filters by metrics"))),(0,R.tZ)("div",{css:e=>({marginTop:4*e.gridUnit})},(0,R.tZ)(q.iO,{ref:this.handleAceEditorRef,keywords:o,height:t-130+"px",onChange:this.onSqlExpressionChange,width:"100%",showGutter:!1,value:e.sqlExpression||e.translateToSql(),editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0,className:"filter-sql-editor",wrapEnabled:!0})))}}P.propTypes=A;const V={adhocFilter:i().instanceOf(h.Z).isRequired,onChange:i().func.isRequired,onClose:i().func.isRequired,onResize:i().func.isRequired,options:i().arrayOf(i().oneOfType([z.Z,i().shape({saved_metric_name:i().string.isRequired}),p.Z])).isRequired,datasource:i().object,partitionColumn:i().string,theme:i().object,sections:i().arrayOf(i().string),operators:i().arrayOf(i().string),requireSave:i().bool},B=l.Z.i`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`,H=l.Z.div`
  .adhoc-filter-edit-tabs > .nav-tabs {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;

    & > li > a {
      padding: ${({theme:e})=>e.gridUnit}px;
    }
  }

  #filter-edit-popover {
    max-width: none;
  }

  .filter-edit-clause-info {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
  }

  .filter-edit-clause-section {
    display: flex;
    flex-direction: row;
    gap: ${({theme:e})=>5*e.gridUnit}px;
  }

  .adhoc-filter-simple-column-dropdown {
    margin-top: ${({theme:e})=>5*e.gridUnit}px;
  }
`,W=l.Z.div`
  margin-top: ${({theme:e})=>2*e.gridUnit}px;
`;class Y extends o.Component{constructor(e){var t,a;super(e),this.onSave=this.onSave.bind(this),this.onDragDown=this.onDragDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onAdhocFilterChange=this.onAdhocFilterChange.bind(this),this.setSimpleTabIsValid=this.setSimpleTabIsValid.bind(this),this.adjustHeight=this.adjustHeight.bind(this),this.onTabChange=this.onTabChange.bind(this),this.state={adhocFilter:this.props.adhocFilter,width:Z.kc,height:Z.H7,activeKey:(null==(t=this.props)||null==(a=t.adhocFilter)?void 0:a.expressionType)||"SIMPLE",isSimpleTabValid:!0},this.popoverContentRef=o.createRef()}componentDidMount(){document.addEventListener("mouseup",this.onMouseUp)}componentWillUnmount(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseMove)}onAdhocFilterChange(e){this.setState({adhocFilter:e})}setSimpleTabIsValid(e){this.setState({isSimpleTabValid:e})}onSave(){this.props.onChange(this.state.adhocFilter),this.props.onClose()}onDragDown(e){this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.dragStartWidth=this.state.width,this.dragStartHeight=this.state.height,document.addEventListener("mousemove",this.onMouseMove)}onMouseMove(e){this.props.onResize(),this.setState({width:Math.max(this.dragStartWidth+(e.clientX-this.dragStartX),Z.kc),height:Math.max(this.dragStartHeight+(e.clientY-this.dragStartY),Z.H7)})}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove)}onTabChange(e){this.setState({activeKey:e})}adjustHeight(e){this.setState((t=>({height:t.height+e})))}render(){const{adhocFilter:e,options:t,onChange:a,onClose:o,onResize:r,datasource:i,partitionColumn:l,theme:p,operators:h,requireSave:m,...g}=this.props,{adhocFilter:v}=this.state,b=v.isValid(),f=m||!v.equals(e);return(0,R.tZ)(H,(0,n.Z)({id:"filter-edit-popover"},g,{"data-test":"filter-edit-popover",ref:this.popoverContentRef}),(0,R.tZ)(u.ZP,{id:"adhoc-filter-edit-tabs",defaultActiveKey:v.expressionType,className:"adhoc-filter-edit-tabs","data-test":"adhoc-filter-edit-tabs",style:{minHeight:this.state.height,width:this.state.width},allowOverflow:!0,onChange:this.onTabChange},(0,R.tZ)(u.ZP.TabPane,{className:"adhoc-filter-edit-tab",key:k.p.Simple,tab:(0,d.t)("Simple")},(0,R.tZ)(c.Z,null,(0,R.tZ)(U,{operators:h,adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:t,datasource:i,onHeightChange:this.adjustHeight,partitionColumn:l,popoverRef:this.popoverContentRef.current,validHandler:this.setSimpleTabIsValid}))),(0,R.tZ)(u.ZP.TabPane,{className:"adhoc-filter-edit-tab",key:k.p.Sql,tab:(0,d.t)("Custom SQL")},(0,R.tZ)(c.Z,null,(0,R.tZ)(P,{adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:this.props.options,height:this.state.height,activeKey:this.state.activeKey})))),(0,R.tZ)(W,null,(0,R.tZ)(s.Z,{buttonSize:"small",onClick:this.props.onClose,cta:!0},(0,d.t)("Close")),(0,R.tZ)(s.Z,{"data-test":"adhoc-filter-edit-popover-save-button",disabled:!b||!this.state.isSimpleTabValid||!f,buttonStyle:"primary",buttonSize:"small",className:"m-r-5",onClick:this.onSave,cta:!0},(0,d.t)("Save")),(0,R.tZ)(B,{role:"button","aria-label":"Resize",tabIndex:0,onMouseDown:this.onDragDown,className:"fa fa-expand edit-popover-resize text-muted"})))}}Y.propTypes=V;var G=a(63325),Q=a(27845);class X extends o.PureComponent{constructor(e){super(e),this.onPopoverResize=this.onPopoverResize.bind(this),this.closePopover=this.closePopover.bind(this),this.togglePopover=this.togglePopover.bind(this),this.state={popoverVisible:!1}}onPopoverResize(){this.forceUpdate()}closePopover(){this.togglePopover(!1)}togglePopover(e){this.setState({popoverVisible:e})}render(){const{adhocFilter:e,isControlledComponent:t}=this.props,{visible:a,togglePopover:o,closePopover:n}=t?{visible:this.props.visible,togglePopover:this.props.togglePopover,closePopover:this.props.closePopover}:{visible:this.state.popoverVisible,togglePopover:this.togglePopover,closePopover:this.closePopover},r=(0,R.tZ)(G.b,null,(0,R.tZ)(Y,{adhocFilter:e,options:this.props.options,datasource:this.props.datasource,partitionColumn:this.props.partitionColumn,onResize:this.onPopoverResize,onClose:n,sections:this.props.sections,operators:this.props.operators,onChange:this.props.onFilterEdit,requireSave:this.props.requireSave}));return(0,R.tZ)(Q.Z,{trigger:"click",content:r,defaultVisible:a,visible:a,onVisibleChange:o,destroyTooltipOnHide:!0},this.props.children)}}const K=X},61641:(e,t,a)=>{var o,n;a.d(t,{N:()=>n,p:()=>o}),function(e){e.Simple="SIMPLE",e.Sql="SQL"}(o||(o={})),function(e){e.Having="HAVING",e.Where="WHERE"}(n||(n={}))},7848:(e,t,a)=>{a.d(t,{v:()=>m,w:()=>l});var o=a(67294),n=a(5364),r=a(1090),i=a(69856),s=a(61641);const l=e=>{const[t,a]=(0,o.useState)({});return(0,o.useEffect)((()=>{e.operator===i.d.TemporalRange&&e.expressionType===s.p.Simple||a({}),e.operator===i.d.TemporalRange&&e.comparator===n.vM&&a({actualTimeRange:`${e.subject} (${n.vM})`,title:n.vM}),e.operator===i.d.TemporalRange&&e.expressionType===s.p.Simple&&e.comparator!==n.vM&&t.title!==e.comparator&&(0,r.z1)(e.comparator,e.subject).then((({value:t,error:o})=>{a(o?{actualTimeRange:`${e.subject} (${e.comparator})`,title:o}:{actualTimeRange:null!=t?t:"",title:e.comparator})}))}),[e]),t};var d=a(61988),c=a(45211),u=a(74092),p=a(82342),h=a(11965);const m=({columnName:e,timeRange:t,datasource:a,onChange:n})=>(0,c.x)(e,a)?(0,h.tZ)(o.Fragment,null,(0,h.tZ)(p.Z,{label:(0,d.t)("Time Range")}),(0,h.tZ)(u.Z,{value:t,name:"time_range",onChange:t=>n(e,t),overlayStyle:"Modal"})):void 0},56565:(e,t,a)=>{a.d(t,{c:()=>s});var o=a(46306),n=a(69856),r=a(12515);const i={"==":"=","!=":"<>",">":">","<":"<",">=":">=","<=":"<=",IN:"IN","NOT IN":"NOT IN",LIKE:"LIKE",ILIKE:"ILIKE",REGEX:"REGEX","IS NOT NULL":"IS NOT NULL","IS NULL":"IS NULL","IS TRUE":"IS TRUE","IS FALSE":"IS FALSE","LATEST PARTITION":({datasource:e})=>`= '{{ presto.latest_partition('${e.schema}.${e.datasource_name}') }}'`},s=(e,{useSimple:t}={useSimple:!1})=>{if((0,o.Ki)(e)||t){const{subject:t,operator:a}=e,o="comparator"in e?e.comparator:void 0,s=a&&a===n.LT[n.d.LatestPartition].operation?i[a](e):i[a];return(0,r.CB)(t,s,o)}return(0,o.jz)(e)?e.sqlExpression:""}},33334:(e,t,a)=>{a.d(t,{EQ:()=>v,H$:()=>_,IG:()=>$,Ne:()=>Z,SW:()=>w,__:()=>b,a7:()=>g,gM:()=>C,gu:()=>y,yj:()=>S,yz:()=>M});var o=a(73126),n=a(67294),r=a(22068),i=a(27034),s=a(42968),l=a(11965),d=a(51995),c=a(61988),u=a(9882),p=a(58593),h=a(13322),m=a(99963);const g=s.Z.div`
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  :last-child {
    margin-bottom: 0;
  }
`,v=s.Z.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  height: ${({theme:e})=>6*e.gridUnit}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light3};
  border-radius: 3px;
  cursor: ${({withCaret:e})=>e?"pointer":"default"};
`,b=s.Z.div`
  ${({theme:e})=>`\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-items: center;\n    white-space: nowrap;\n    padding-left: ${e.gridUnit}px;\n    svg {\n      margin-right: ${e.gridUnit}px;\n    }\n    .type-label {\n      margin-right: ${2*e.gridUnit}px;\n      margin-left: ${e.gridUnit}px;\n      font-weight: ${e.typography.weights.normal};\n      width: auto;\n    }\n    .option-label {\n      display: inline;\n    }\n  `}
`,f=s.Z.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,Z=s.Z.div`
  height: 100%;
  border-left: solid 1px ${({theme:e})=>e.colors.grayscale.dark2}0C;
  margin-left: auto;
`,y=s.Z.div`
  height: 100%;
  width: ${({theme:e})=>6*e.gridUnit}px;
  border-right: solid 1px ${({theme:e})=>e.colors.grayscale.dark2}0C;
  cursor: pointer;
`,x=(0,s.Z)(u.V)`
  margin: 0 ${({theme:e})=>e.gridUnit}px;
`,C=s.Z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,S=s.Z.div`
  padding: ${({theme:e})=>e.gridUnit}px;
  border: solid 1px ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,T=l.F4`
  0% {
    right: 100%;
  }
  50% {
    left: 4px;
  }
  90% {
    right: 4px;
  }
  100% {
    left: 100%;
  }
`,_=s.Z.div`
  ${({theme:e,isLoading:t,canDrop:a,isDragging:o,isOver:n})=>`\n  position: relative;\n  padding: ${e.gridUnit}px;\n  border: ${!t&&o?`dashed 1px ${a?e.colors.info.dark1:e.colors.error.dark1}`:`solid 1px ${t&&o?e.colors.warning.light1:e.colors.grayscale.light2}`};\n  border-radius: ${e.gridUnit}px;\n  &:before,\n  &:after {\n    content: ' ';\n    position: absolute;\n    border-radius: ${e.gridUnit}px;\n  }\n  &:before {\n    display: ${o||t?"block":"none"};\n    background-color: ${a?e.colors.primary.base:e.colors.error.light1};\n    z-index: ${e.zIndex.aboveDashboardCharts};\n    opacity: ${e.opacity.light};\n    top: 1px;\n    right: 1px;\n    bottom: 1px;\n    left: 1px;\n  }\n  &:after {\n    display: ${t||a&&n?"block":"none"};\n    background-color: ${t?e.colors.grayscale.light3:e.colors.primary.base};\n    z-index: ${e.zIndex.dropdown};\n    opacity: ${e.opacity.mediumLight};\n    top: ${-e.gridUnit}px;\n    right: ${-e.gridUnit}px;\n    bottom: ${-e.gridUnit}px;\n    left: ${-e.gridUnit}px;\n    cursor: ${t?"wait":"auto"};\n  }\n  `}

  &:before {
    ${({theme:e,isLoading:t})=>t&&l.iv`
        animation: ${T} 2s ease-in infinite;
        background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
        background-size: 100% ${e.gridUnit/2}px;
        top: auto;
        right: ${e.gridUnit}px;
        left: ${e.gridUnit}px;
        bottom: -${e.gridUnit/2}px;
        height: ${e.gridUnit/2}px;
      `};
  }
`,w=s.Z.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({theme:e})=>6*e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.light1};
  border: dashed 1px ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
  cursor: ${({cancelHover:e})=>e?"inherit":"pointer"};

  :hover {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colors.grayscale.light4};
  }

  :active {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colors.grayscale.light3};
  }
`,$=s.Z.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>4*e.gridUnit}px;
  width: ${({theme:e})=>4*e.gridUnit}px;
  padding: 0;
  background-color: ${({theme:e})=>e.colors.primary.dark1};
  border: none;
  border-radius: 2px;

  :disabled {
    cursor: not-allowed;
    background-color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,M=({label:e,savedMetric:t,adhocMetric:a,onRemove:s,onMoveLabel:u,onDropLabel:C,withCaret:S,isFunction:T,type:_,index:w,isExtra:$,datasourceWarningMessage:M,tooltipTitle:F,multi:I=!0,...E})=>{const D=(0,d.Fg)(),k=(0,n.useRef)(null),R=(0,n.useRef)(null),N=null==t?void 0:t.metric_name,[,O]=(0,r.L)({accept:_,drop(){I&&(null==C||C())},hover(e,t){var a;if(!I)return;if(!k.current)return;const{dragIndex:o}=e,n=w;if(o===n)return;const r=null==(a=k.current)?void 0:a.getBoundingClientRect(),i=(r.bottom-r.top)/2,s=t.getClientOffset(),l=null!=s&&s.y?(null==s?void 0:s.y)-r.top:0;o<n&&l<i||o>n&&l>i||(null==u||u(o,n),e.dragIndex=n)}}),[{isDragging:U},q]=(0,i.c)({item:{type:_,dragIndex:w,value:null!=t&&t.metric_name?t:a},collect:e=>({isDragging:e.isDragging()})});return q(O(k)),(0,l.tZ)(g,{ref:k},(0,l.tZ)(v,(0,o.Z)({withCaret:S,"data-test":"option-label"},E),(0,l.tZ)(y,{role:"button","data-test":"remove-control-button",onClick:s},(0,l.tZ)(h.Z.XSmall,{iconColor:D.colors.grayscale.light1})),(0,l.tZ)(b,{"data-test":"control-label"},T&&(0,l.tZ)(h.Z.FieldDerived,null),(()=>{const a=!U&&"string"==typeof e&&F&&e&&F!==e||!U&&R&&R.current&&R.current.scrollWidth>R.current.clientWidth;return t&&N?(0,l.tZ)(m.B,{metric:t,labelRef:R,shouldShowTooltip:!U}):a?(0,l.tZ)(p.u,{title:F||e},(0,l.tZ)(f,{ref:R},e)):(0,l.tZ)(f,{ref:R},e)})()),(!!M||$)&&(0,l.tZ)(x,{icon:"exclamation-triangle",placement:"top",bsStyle:"warning",tooltip:M||(0,c.t)("\n                This filter was inherited from the dashboard's context.\n                It won't be saved when saving the chart.\n              ")}),S&&(0,l.tZ)(Z,null,(0,l.tZ)(h.Z.CaretRight,{iconColor:D.colors.grayscale.light1}))))}},85626:(e,t,a)=>{a.d(t,{Z:()=>v}),a(67294);var o=a(42968),n=a(42110),r=a(120),i=a(13433),s=a(50909),l=a(53459),d=a(49889),c=a(33743),u=a(22489),p=a(11965);const h=(0,o.Z)(s.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`;n.Z.registerLanguage("markdown",l.Z),n.Z.registerLanguage("html",d.Z),n.Z.registerLanguage("sql",c.Z),n.Z.registerLanguage("json",u.Z);const m=o.Z.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,g=(0,o.Z)(n.Z)`
  flex: 1;
`,v=e=>{const{sql:t,language:a="sql"}=e;return(0,p.tZ)(m,{key:t},(0,p.tZ)(i.Z,{text:t,shouldShowText:!1,copyNode:(0,p.tZ)(h,{buttonSize:"xsmall"},(0,p.tZ)("i",{className:"fa fa-clipboard"}))}),(0,p.tZ)(g,{language:a,style:r.Z},t))}},15423:(e,t,a)=>{a.d(t,{Z:()=>h});var o=a(67294),n=a(42968),r=a(55786),i=a(61988),s=a(38703),l=a(98286),d=a(52256),c=a(85626),u=a(11965);const p=n.Z.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,h=e=>{const[t,a]=(0,o.useState)([]),[n,h]=(0,o.useState)(!1),[m,g]=(0,o.useState)(null);return(0,o.useEffect)((()=>{h(!0),(0,d.getChartDataRequest)({formData:e.latestQueryFormData,resultFormat:"json",resultType:"query"}).then((({json:e})=>{a((0,r.Z)(e.result)),h(!1),g(null)})).catch((e=>{(0,l.O$)(e).then((({error:t,message:a})=>{g(t||a||e.statusText||(0,i.t)("Sorry, An error occurred")),h(!1)}))}))}),[JSON.stringify(e.latestQueryFormData)]),n?(0,u.tZ)(s.Z,null):m?(0,u.tZ)("pre",null,m):(0,u.tZ)(p,null,t.map((e=>e.query?(0,u.tZ)(c.Z,{sql:e.query,language:e.language||void 0}):null)))}},40219:(e,t,a)=>{a.d(t,{BR:()=>s,LW:()=>u,nv:()=>c});var o=a(57557),n=a.n(o),r=a(31069);const i=["url_params"],s=e=>n()(e,i),l=(e,t)=>{let a="api/v1/explore/form_data";return e&&(a=a.concat(`/${e}`)),t&&(a=a.concat(`?tab_id=${t}`)),a},d=(e,t,a,o)=>{const n={datasource_id:e,datasource_type:t,form_data:JSON.stringify(s(a))};return o&&(n.chart_id=o),n},c=(e,t,a,o,n)=>r.Z.post({endpoint:l(void 0,n),jsonPayload:d(e,t,a,o)}).then((e=>e.json.key)),u=(e,t,a,o,n,i)=>r.Z.put({endpoint:l(a,i),jsonPayload:d(e,t,o,n)}).then((e=>e.json.message))},53579:(e,t,a)=>{a.d(t,{S:()=>p});var o=a(67294),n=a(51995),r=a(61988),i=a(11965),s=a(29487),l=a(67697),d=a(32871),c=a(42190),u=a(6412);const p=({dataset:e,datasetId:t})=>{const a=(0,n.Fg)(),[p,h]=(0,o.useState)(),[m,g]=(0,o.useState)(e?c.ni.Complete:c.ni.Loading);return(0,o.useEffect)((()=>{!e&&t&&(0,u.e)({endpoint:`/api/v1/dataset/${t}`}).then((({json:{result:e}})=>{h(e),g(c.ni.Complete)})).catch((()=>{g(c.ni.Error)}))}),[t,e]),{metadataBar:(0,o.useMemo)((()=>{const t=[],o=e||p;if(o){var n,u;const{changed_on_humanized:e,created_on_humanized:a,description:i,table_name:s,changed_by:l,created_by:c,owners:p}=o,h=(0,r.t)("Not available"),m=`${null!=(n=null==c?void 0:c.first_name)?n:""} ${null!=(u=null==c?void 0:c.last_name)?u:""}`.trim()||h,g=l?`${l.first_name} ${l.last_name}`:h,v=(null==p?void 0:p.length)>0?p.map((e=>`${e.first_name} ${e.last_name}`)):[h];t.push({type:d.p.Table,title:s}),t.push({type:d.p.LastModified,value:e,modifiedBy:g}),t.push({type:d.p.Owner,createdBy:m,owners:v,createdOn:a}),i&&t.push({type:d.p.Description,value:i})}return(0,i.tZ)("div",{css:i.iv`
          display: flex;
          margin-bottom: ${4*a.gridUnit}px;
        `},m===c.ni.Complete&&(0,i.tZ)(l.ZP,{items:t,tooltipPlacement:"bottom"}),m===c.ni.Error&&(0,i.tZ)(s.Z,{type:"error",message:(0,r.t)("There was an error loading the dataset metadata")}))}),[e,p,m,a.gridUnit]),status:m}}},21312:(e,t,a)=>{a.d(t,{x:()=>se,Z:()=>ue});var o,n,r=a(11965),i=a(73126),s=a(41609),l=a.n(s),d=a(67294),c=a(28216),u=a(75049),p=a(42968),h=a(93185),m=a(51995),g=a(85716),v=a(61988),b=a(13322),f=a(12441),Z=a(83862),y=a(87253),x=a(54076),C=a(88694),S=a(17198),T=a(98286),_=a(39666),w=a(29487),$=a(98978),M=a(73684),F=a(9875),I=a(14114);!function(e){e.Dashboards="dashboards",e.Charts="charts"}(o||(o={})),function(e){e.Text="TEXT",e.PNG="PNG",e.CSV="CSV"}(n||(n={}));var E=a(34858),D=a(67317),k=a(74069),R=a(35932),N=a(87183),O=a(9433);const U=(0,p.Z)(k.default)`
  .ant-modal-body {
    padding: 0;
  }
`,q=p.Z.div`
  padding: ${({theme:e})=>`${3*e.gridUnit}px ${4*e.gridUnit}px ${2*e.gridUnit}px`};
  label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,L=p.Z.div`
  border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  padding: ${({theme:e})=>`${4*e.gridUnit}px ${4*e.gridUnit}px ${6*e.gridUnit}px`};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,z=p.Z.span`
  span {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,A=p.Z.div`
  margin-bottom: ${({theme:e})=>7*e.gridUnit}px;

  h4 {
    margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }
`,j=(0,p.Z)(O.Bj)`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  width: ${({theme:e})=>120*e.gridUnit}px;
`,P=p.Z.p`
  color: ${({theme:e})=>e.colors.error.base};
`,V=r.iv`
  margin-bottom: 0;
`,B=(0,p.Z)(R.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,H=e=>r.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`,W=p.Z.div`
  margin: ${({theme:e})=>8*e.gridUnit}px 0
    ${({theme:e})=>4*e.gridUnit}px;
`,Y=(0,p.Z)(N.Y)`
  display: block;
  line-height: ${({theme:e})=>8*e.gridUnit}px;
`,G=(0,p.Z)(N.Y.Group)`
  margin-left: ${({theme:e})=>.5*e.gridUnit}px;
`,Q=["pivot_table_v2","table","paired_ttest"],X={crontab:"0 12 * * 1"},K={},J=(0,I.ZP)((function({onHide:e,show:t=!1,dashboardId:a,chart:o,userId:i,userEmail:s,creationMethod:l,dashboardName:u,chartName:p}){var h;const m=null==o||null==(h=o.sliceFormData)?void 0:h.viz_type,g=!!o,f=g&&m&&Q.includes(m),Z=f?n.Text:n.PNG,y=u||p,x=(0,d.useMemo)((()=>({...X,name:y?(0,v.t)("Weekly Report for %s",y):(0,v.t)("Weekly Report")})),[y]),C=(0,d.useCallback)(((e,t)=>"reset"===t?x:{...e,...t}),[x]),[S,I]=(0,d.useReducer)(C,x),[k,R]=(0,d.useState)(),N=(0,c.I0)(),O=(0,c.v9)((e=>{const t=a?se.Dashboards:se.Charts;return(0,E._l)(e,t,a||(null==o?void 0:o.id))||K})),J=O&&Object.keys(O).length;(0,d.useEffect)((()=>{I(J?O:"reset")}),[J,O]);const ee=(0,r.tZ)(z,null,(0,r.tZ)(b.Z.Calendar,null),(0,r.tZ)("span",{className:"text"},J?(0,v.t)("Edit email report"):(0,v.t)("Schedule a new email report"))),te=(0,r.tZ)(d.Fragment,null,(0,r.tZ)(B,{key:"back",onClick:e},(0,v.t)("Cancel")),(0,r.tZ)(B,{key:"submit",buttonStyle:"primary",onClick:async()=>{const t={type:"Report",active:!0,force_screenshot:!1,custom_width:S.custom_width,creation_method:l,dashboard:a,chart:null==o?void 0:o.id,owners:[i],recipients:[{recipient_config_json:{target:s},type:"Email"}],name:S.name,description:S.description,crontab:S.crontab,report_format:S.report_format||Z,timezone:S.timezone};I({isSubmitting:!0,error:void 0});try{J?await N((0,_.Me)(S.id,t)):await N((0,_.cq)(t)),e()}catch(e){const{error:t}=await(0,T.O$)(e);I({error:t})}I({isSubmitting:!1})},disabled:!S.name,loading:S.isSubmitting},J?(0,v.t)("Save"):(0,v.t)("Add"))),ae=(0,r.tZ)(d.Fragment,null,(0,r.tZ)(W,null,(0,r.tZ)("h4",null,(0,v.t)("Message content"))),(0,r.tZ)("div",{className:"inline-container"},(0,r.tZ)(G,{onChange:e=>{I({report_format:e.target.value})},value:S.report_format||Z},f&&(0,r.tZ)(Y,{value:n.Text},(0,v.t)("Text embedded in email")),(0,r.tZ)(Y,{value:n.PNG},(0,v.t)("Image (PNG) embedded in email")),(0,r.tZ)(Y,{value:n.CSV},(0,v.t)("Formatted CSV attached in email"))))),oe=(0,r.tZ)(D.j5,null,(0,r.tZ)("div",{className:"control-label",css:H},(0,v.t)("Screenshot width")),(0,r.tZ)("div",{className:"input-container"},(0,r.tZ)(F.II,{type:"number",name:"custom_width",value:(null==S?void 0:S.custom_width)||"",placeholder:(0,v.t)("Input custom width in pixels"),onChange:e=>{I({custom_width:parseInt(e.target.value,10)||null})}})));return(0,r.tZ)(U,{show:t,onHide:e,title:ee,footer:te,width:"432",centered:!0},(0,r.tZ)(q,null,(0,r.tZ)(M.Z,{id:"name",name:"name",value:S.name||"",placeholder:x.name,required:!0,validationMethods:{onChange:({target:e})=>I({name:e.value})},label:(0,v.t)("Report Name"),"data-test":"report-name-test"}),(0,r.tZ)(M.Z,{id:"description",name:"description",value:(null==S?void 0:S.description)||"",validationMethods:{onChange:({target:e})=>{I({description:e.value})}},label:(0,v.t)("Description"),placeholder:(0,v.t)("Include a description that will be sent with your report"),css:V,"data-test":"report-description-test"})),(0,r.tZ)(L,null,(0,r.tZ)(A,null,(0,r.tZ)("h4",{css:e=>(e=>r.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,v.t)("Schedule")),(0,r.tZ)("p",null,(0,v.t)("A screenshot of the dashboard will be sent to your email at"))),(0,r.tZ)(j,{clearButton:!1,value:S.crontab||"0 12 * * 1",setValue:e=>{I({crontab:e})},onError:R}),(0,r.tZ)(P,null,k),(0,r.tZ)("div",{className:"control-label",css:e=>(e=>r.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`)(e)},(0,v.t)("Timezone")),(0,r.tZ)($.Z,{timezone:S.timezone,onTimezoneChange:e=>{I({timezone:e})}}),g&&ae,(!g||!f)&&oe),S.error&&(0,r.tZ)(w.Z,{type:"error",css:e=>(e=>r.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px;
  margin-top: 0;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: bold;
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${4*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:J?(0,v.t)("Failed to update report"):(0,v.t)("Failed to create report"),description:S.error}))}));var ee=a(96022);const te=(0,u.I)(),ae=e=>r.iv`
  color: ${e.colors.error.base};
`,oe=e=>r.iv`
  & .ant-menu-item {
    padding: 5px 12px;
    margin-top: 0px;
    margin-bottom: 4px;
    :hover {
      color: ${e.colors.grayscale.dark1};
    }
  }
  :hover {
    background-color: ${e.colors.secondary.light5};
  }
`,ne=e=>r.iv`
  &:hover {
    color: ${e.colors.grayscale.dark1};
    background-color: ${e.colors.secondary.light5};
  }
`,re=p.Z.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > *:first-child {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,ie=te.get("report-modal.dropdown.item.icon");var se;!function(e){e.Charts="charts",e.Dashboards="dashboards"}(se||(se={}));const le={};var de={name:"1e1ncky",styles:"border:none"},ce={name:"833hqy",styles:"width:200px"};function ue({dashboardId:e,chart:t,useTextMenu:a=!1,setShowReportSubMenu:o,setIsDropdownVisible:n,isDropdownVisible:s,...u}){const p=(0,c.I0)(),T=(0,c.v9)((a=>{const o=e?se.Dashboards:se.Charts;return(0,E._l)(a,o,e||(null==t?void 0:t.id))||le})),w=(null==T?void 0:T.active)||!1,$=(0,c.v9)((e=>e.user)),M=()=>!!(0,h.cr)(h.TT.AlertReports)&&(!(null==$||!$.userId)&&(!!(e||null!=t&&t.id)&&Object.keys($.roles||[]).map((e=>$.roles[e].filter((e=>"menu_access"===e[0]&&"Manage"===e[1])))).some((e=>e.length>0)))),[F,I]=(0,d.useState)(null),D=(0,m.Fg)(),k=(0,g.D)(e),[R,N]=(0,d.useState)(!1),O=async(e,t)=>{null!=e&&e.id&&p((0,_.M)(e,t))},U=M()&&!!(e&&k!==e||null!=t&&t.id);(0,d.useEffect)((()=>{U&&p((0,_.Aw)({userId:$.userId,filterField:e?"dashboard_id":"chart_id",creationMethod:e?"dashboards":"charts",resourceId:e||(null==t?void 0:t.id)}))}),[]);const q=T&&o&&M();(0,d.useEffect)((()=>{q?o(!0):!T&&o&&o(!1)}),[T]);const L=()=>{n&&(n(!1),N(!0))};return(0,r.tZ)(d.Fragment,null,M()&&(0,r.tZ)(d.Fragment,null,(0,r.tZ)(J,{userId:$.userId,show:R,onHide:()=>N(!1),userEmail:$.email,dashboardId:e,chart:t,creationMethod:e?se.Dashboards:se.Charts}),a?l()(T)?(0,r.tZ)(Z.Menu,(0,i.Z)({selectable:!1},u,{css:oe}),(0,r.tZ)(Z.Menu.Item,{onClick:L},ie?(0,r.tZ)(re,null,(0,r.tZ)("div",null,(0,v.t)("Set up an email report")),(0,r.tZ)(ie,null)):(0,v.t)("Set up an email report")),(0,r.tZ)(Z.Menu.Divider,null)):s&&(0,r.tZ)(Z.Menu,{selectable:!1,css:de},(0,r.tZ)(Z.Menu.Item,{css:ne,onClick:()=>O(T,!w)},(0,r.tZ)(ee.ZN,null,(0,r.tZ)(y.ZP,{checked:w,onChange:x.EI}),(0,v.t)("Email reports active"))),(0,r.tZ)(Z.Menu.Item,{css:ne,onClick:L},(0,v.t)("Edit email report")),(0,r.tZ)(Z.Menu.Item,{css:ne,onClick:()=>{n&&(n(!1),I(T))}},(0,v.t)("Delete email report"))):l()(T)?(0,r.tZ)("span",{role:"button",title:(0,v.t)("Schedule email report"),tabIndex:0,className:"action-button action-schedule-report",onClick:()=>N(!0)},(0,r.tZ)(b.Z.Calendar,null)):(0,r.tZ)(d.Fragment,null,(0,r.tZ)(C.$i,{overlay:(0,r.tZ)(Z.Menu,{selectable:!1,css:ce},(0,r.tZ)(Z.Menu.Item,null,(0,v.t)("Email reports active"),(0,r.tZ)(f.r,{"data-test":"toggle-active",checked:w,onClick:e=>O(T,e),size:"small",css:(0,r.iv)({marginLeft:2*D.gridUnit},"","")})),(0,r.tZ)(Z.Menu.Item,{onClick:()=>N(!0)},(0,v.t)("Edit email report")),(0,r.tZ)(Z.Menu.Item,{onClick:()=>I(T),css:ae},(0,v.t)("Delete email report"))),overlayStyle:{zIndex:99,animationDuration:"0s"},trigger:["click"],getPopupContainer:e=>e.closest(".action-button")},(0,r.tZ)("span",{role:"button",className:"action-button action-schedule-report",tabIndex:0},(0,r.tZ)(b.Z.Calendar,null)))),F&&(0,r.tZ)(S.Z,{description:(0,v.t)("This action will permanently delete %s.",null==F?void 0:F.name),onConfirm:()=>{F&&(async e=>{await p((0,_.MZ)(e)),I(null)})(F)},onHide:()=>I(null),open:!0,title:(0,v.t)("Delete Report?")})))}},6954:(e,t,a)=>{a.d(t,{z:()=>s});var o=a(67294),n=a(14670),r=a.n(n);const i=new(a(11133).g0)("tab_id_channel");function s(){const[e,t]=(0,o.useState)();return(0,o.useEffect)((()=>{if(!function(){try{return window.localStorage&&window.sessionStorage}catch(e){return!1}}())return void(e||t(r().generate()));const a=()=>{let e;try{e=window.localStorage.getItem("last_tab_id")}catch(e){}const a=String(e?Number.parseInt(e,10)+1:1);try{window.sessionStorage.setItem("tab_id",a),window.localStorage.setItem("last_tab_id",a)}catch(e){}t(a)};let o;try{o=window.sessionStorage.getItem("tab_id")}catch(e){}o?(i.postMessage({type:"REQUESTING_TAB_ID",tabId:o}),t(o)):a(),i.onmessage=t=>{if(t.tabId===e)if("REQUESTING_TAB_ID"===t.type){const e={type:"TAB_ID_DENIED",tabId:t.tabId};i.postMessage(e)}else"TAB_ID_DENIED"===t.type&&a()}}),[e]),e}},6412:(e,t,a)=>{a.d(t,{e:()=>i,f:()=>r});var o=a(31069),n=a(65108);const r=new Map,i=(0,n.g)(o.Z.get,r,(({endpoint:e})=>e||""))},56727:(e,t,a)=>{a.d(t,{Z:()=>u});var o=a(21804),n=a.n(o),r=a(46926),i=a.n(r),s=a(61988),l=a(51995),d=a(72570);const c=(e,t=new Date)=>`${n()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`;function u(e,t,a=!1){return o=>{const n=a?document.querySelector(e):o.currentTarget.closest(e);return n?i().toJpeg(n,{bgcolor:l.K6.colors.grayscale.light4,filter:e=>"string"!=typeof e.className||"mapboxgl-control-container"!==e.className&&!e.className.includes("header-controls")}).then((e=>{const a=document.createElement("a");a.download=`${c(t)}.jpg`,a.href=e,a.click()})).catch((e=>{console.error("Creating image failed",e)})):(0,d.Dz)((0,s.t)("Image download failed, please refresh and try again."))}}},75701:(e,t,a)=>{a.d(t,{J:()=>i});var o=a(61988);const n=(0,o.t)("Create chart"),r=(0,o.t)("Update chart"),i=e=>(0,o.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",`"${e?n:r}"`)},99232:(e,t,a)=>{a.d(t,{f:()=>s});var o=a(72813),n=a(61641),r=a(69856),i=a(56565);const s=(e,t=n.N.Where)=>{let a;var s;return a=(0,o.GA)(e.col)?{expressionType:"SQL",clause:t,sqlExpression:(0,i.c)({expressionType:n.p.Simple,subject:`(${e.col.sqlExpression})`,operator:e.op,comparator:"val"in e?e.val:void 0})}:{expressionType:"SIMPLE",clause:t,operator:e.op,operatorId:null==(s=Object.entries(r.LT).find((t=>t[1].operation===e.op)))?void 0:s[0],subject:e.col,comparator:"val"in e?e.val:void 0},e.isExtra&&Object.assign(a,{isExtra:!0,filterOptionName:`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}),a}}}]);
//# sourceMappingURL=a238bde2590964b44d5c.chunk.js.map