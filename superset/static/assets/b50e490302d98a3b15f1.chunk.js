"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4229],{39093:(e,t,a)=>{a.d(t,{Au:()=>r,I8:()=>d,J:()=>l,l6:()=>o});var s=a(35742),n=a(5362);const i=(e,t,a)=>{let s=`api/v1/dashboard/${e}/filter_state`;return t&&(s=s.concat(`/${t}`)),a&&(s=s.concat(`?tab_id=${a}`)),s},o=(e,t,a,o)=>s.A.put({endpoint:i(e,a,o),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(n.A.error(e),null))),r=(e,t,a)=>s.A.post({endpoint:i(e,void 0,a),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(n.A.error(e),null))),d=(e,t)=>s.A.get({endpoint:i(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(n.A.error(e),null))),l=e=>s.A.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(n.A.error(e),null)))},94229:(e,t,a)=>{a.r(t),a.d(t,{DashboardPage:()=>ie,DashboardPageIdContext:()=>ae,default:()=>oe});var s=a(96540),n=a(17437),i=a(56347),o=a(96453),r=a(44140),d=a(94963),l=a(95579),c=a(61225),u=a(5261),p=a(17444),h=a(45412),g=a(52123),m=a(34975),f=a(5007),b=a(62221),v=a(27023),y=a(32132),w=a(72173),E=a(39093),x=a(82960),S=a(5556),C=a.n(S),D=a(27366),_=a(36053),I=a(38708),$=a(49588);function O(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===$.oT&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var j=a(4881),T=a(35700),F=a(35839),R=a(37725);const q=[$.oT,$.xY,$.rG];function U(e){return!Object.values(e).some((({type:e})=>e&&q.includes(e)))}const k={actions:C().shape({addSliceToDashboard:C().func.isRequired,removeSliceFromDashboard:C().func.isRequired,triggerQuery:C().func.isRequired,logEvent:C().func.isRequired,clearDataMaskState:C().func.isRequired}).isRequired,dashboardInfo:j.lJ.isRequired,dashboardState:j.U_.isRequired,slices:C().objectOf(j.VE).isRequired,activeFilters:C().object.isRequired,chartConfiguration:C().object,datasources:C().object.isRequired,ownDataCharts:C().object.isRequired,layout:C().object.isRequired,impressionId:C().string.isRequired,timeout:C().number,userId:C().string};class A extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",A.unload):window.removeEventListener("beforeunload",A.unload)}static unload(){const e=(0,l.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,a;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(a=e.ownDataCharts)?a:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,I.A)(),{dashboardState:t,layout:a}=this.props,s={is_soft_navigation:T.Vy.timeOriginOffset>0,is_edit_mode:t.editMode,mount_duration:T.Vy.getTimestamp(),is_empty:U(a),is_published:t.isPublished,bootstrap_data_length:e.length},n=(0,R.A)();n&&(s.target_id=n),this.props.actions.logEvent(T.es,s),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:T.Vy.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=O(this.props.layout),a=O(e.layout);this.props.dashboardInfo.id===e.dashboardInfo.id&&(t.length<a.length?a.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(a=e.layout,s=t,Object.values(a).find((e=>e&&e.type===$.oT&&e.meta&&e.meta.chartId===s))));var a,s})):t.length>a.length&&t.filter((e=>-1===a.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{hasUnsavedChanges:e,editMode:t}=this.props.dashboardState,{appliedFilters:a,appliedOwnDataCharts:s}=this,{activeFilters:n,ownDataCharts:i,chartConfiguration:o}=this.props;(0,D.G7)(D.TO.DashboardCrossFilters)&&!o||(t||(0,F.r$)(s,i,{ignoreUndefined:!0})&&(0,F.r$)(a,n,{ignoreUndefined:!0})||this.applyFilters(),e?A.onBeforeUnload(!0):A.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:T.Vy.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(T.Xj,{...this.visibilityEventData,duration:T.Vy.getTimestamp()-e})}}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:a}=this.props,s=Object.keys(t),n=Object.keys(e),i=new Set(s.concat(n)),o=((e,t)=>{const a=Object.keys(e),s=Object.keys(t),n=(i=a,o=s,[...i.filter((e=>!o.includes(e))),...o.filter((e=>!i.includes(e)))]).filter((a=>e[a]||t[a]));var i,o;return new Set([...a,...s]).forEach((a=>{(0,F.r$)(e[a],t[a])||n.push(a)})),[...new Set(n)]})(a,this.appliedOwnDataCharts);[...i].forEach((a=>{if(!s.includes(a)&&n.includes(a))o.push(...e[a].scope);else if(n.includes(a)){if((0,F.r$)(e[a].values,t[a].values,{ignoreUndefined:!0})||o.push(...t[a].scope),!(0,F.r$)(e[a].scope,t[a].scope)){const s=(t[a].scope||[]).concat(e[a].scope||[]);o.push(...s)}}else o.push(...t[a].scope)})),this.refreshCharts([...new Set(o)]),this.appliedFilters=t,this.appliedOwnDataCharts=a}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,n.Y)(p.A,null):this.props.children}}A.contextType=_.bf,A.propTypes=k,A.defaultProps={timeout:60,userId:""};const P=A;var M=a(2514),V=a(7735),L=a(68921),N=a(92008),Y=a(95004);const H=(0,c.Ng)((function(e){var t,a,s,n;const{datasources:i,sliceEntities:o,dataMask:r,dashboardInfo:d,dashboardState:l,dashboardLayout:c,impressionId:u,nativeFilters:p}=e;return{timeout:null==(t=d.common)||null==(a=t.conf)?void 0:a.SUPERSET_WEBSERVER_TIMEOUT,userId:d.userId,dashboardInfo:d,dashboardState:l,datasources:i,activeFilters:{...(0,L.ug)(),...(0,N.R)({chartConfiguration:null==(s=d.metadata)?void 0:s.chart_configuration,nativeFilters:p.filters,dataMask:r,allSliceIds:l.sliceIds})},chartConfiguration:null==(n=d.metadata)?void 0:n.chart_configuration,ownDataCharts:(0,N.W)(r,"ownState"),slices:o.slices,layout:c.present,impressionId:u}}),(function(e){return{actions:(0,x.zH)({setDatasources:m.nC,clearDataMaskState:Y.V9,addSliceToDashboard:w.ft,removeSliceFromDashboard:w.Hg,triggerQuery:M.triggerQuery,logEvent:V.logEvent},e)}}))(P);var z=a(65824),J=a.n(z);const B=e=>n.AH`
  body {
    h1 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xxl}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${3*e.gridUnit}px;
    }

    h2 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xl}px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.l}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.gridUnit}px;
      margin-bottom: ${e.gridUnit}px;
    }
  }
`,Q=e=>n.AH`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    &.ant-popover-placement-bottom {
      padding-top: ${e.gridUnit}px;
    }

    &.ant-popover-placement-left {
      padding-right: ${3*e.gridUnit}px;
    }

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }

    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,G=e=>n.AH`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`;var W=a(44383),X=a.n(W);const K={},Z=()=>{const e=(0,b.Gq)(b.Hh.DashboardExploreContext,{});return Object.fromEntries(Object.entries(e).filter((([,e])=>!e.isRedundant)))},ee=(e,t)=>{const a=Z();(0,b.SO)(b.Hh.DashboardExploreContext,{...a,[e]:t})},te=({dashboardPageId:e})=>{const t=(0,c.d4)((({dashboardInfo:t,dashboardState:a,nativeFilters:s,dataMask:n})=>{var i,o,r;return{labelColors:(null==(i=t.metadata)?void 0:i.label_colors)||K,sharedLabelColors:(null==(o=t.metadata)?void 0:o.shared_label_colors)||K,colorScheme:null==a?void 0:a.colorScheme,chartConfiguration:(null==(r=t.metadata)?void 0:r.chart_configuration)||K,nativeFilters:Object.entries(s.filters).reduce(((e,[t,a])=>({...e,[t]:X()(a,["chartsInScope"])})),{}),dataMask:n,dashboardId:t.id,filterBoxFilters:(0,L.ug)(),dashboardPageId:e}}),c.bN);return(0,s.useEffect)((()=>(ee(e,t),()=>{ee(e,{...t,isRedundant:!0})})),[t,e]),null},ae=s.createContext(""),se=s.lazy((()=>Promise.all([a.e(2885),a.e(244),a.e(4005),a.e(8799),a.e(7925),a.e(8148),a.e(7235),a.e(599),a.e(9453),a.e(5788),a.e(2720),a.e(6135),a.e(4010),a.e(1757),a.e(3149),a.e(9074),a.e(8604),a.e(671),a.e(3665),a.e(6049),a.e(5026)]).then(a.bind(a,4905)))),ne=document.title,ie=({idOrSlug:e})=>{const t=(0,o.DP)(),a=(0,c.wA)(),x=(0,i.W6)(),S=(0,s.useMemo)((()=>J().generate()),[]),C=(0,c.d4)((({dashboardInfo:e})=>e&&Object.keys(e).length>0)),{addDangerToast:D}=(0,u.Yf)(),{result:_,error:I}=(0,h.MZ)(e),{result:$,error:O}=(0,h.DT)(e),{result:j,error:T,status:F}=(0,h.RO)(e),R=(0,s.useRef)(!1),q=I||O,U=Boolean(_&&$),{dashboard_title:k,css:A,metadata:P,id:M=0}=_||{};if((0,s.useEffect)((()=>{const e=()=>{const e=Z();(0,b.SO)(b.Hh.DashboardExploreContext,{...e,[S]:{...e[S],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[S]),(0,s.useEffect)((()=>{a((0,w.wh)(F))}),[a,F]),(0,s.useEffect)((()=>{M&&async function(){const e=(0,y.P3)(v.vX.permalinkKey),t=(0,y.P3)(v.vX.nativeFiltersKey),s=(0,y.P3)(v.vX.nativeFilters);let n,i=t||{};if(e){const t=await(0,E.J)(e);t&&({dataMask:i,activeTabs:n}=t.state)}else t&&(i=await(0,E.I8)(M,t));s&&(i=s),U&&(R.current||(R.current=!0),a((0,g.M)({history:x,dashboard:_,charts:$,activeTabs:n,dataMask:i})))}()}),[U]),(0,s.useEffect)((()=>(k&&(document.title=k),()=>{document.title=ne})),[k]),(0,s.useEffect)((()=>"string"==typeof A?(0,f.A)(A):()=>{}),[A]),(0,s.useEffect)((()=>{const e=(0,r.Ay)();return e.source=r.EN.Dashboard,()=>{d.getNamespace(null==P?void 0:P.color_namespace).resetColors(),e.clear()}}),[null==P?void 0:P.color_namespace]),(0,s.useEffect)((()=>{T?D((0,l.t)("Error loading chart datasources. Filters may not work correctly.")):a((0,m.nC)(j))}),[D,j,T,a]),q)throw q;return U&&C?(0,n.Y)(s.Fragment,null,(0,n.Y)(n.mL,{styles:[Q(t),B(t),G(t),"",""]}),(0,n.Y)(te,{dashboardPageId:S}),(0,n.Y)(ae.Provider,{value:S},(0,n.Y)(H,null,(0,n.Y)(se,null)))):(0,n.Y)(p.A,null)},oe=ie},92008:(e,t,a)=>{a.d(t,{R:()=>n,W:()=>s});const s=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,a)=>({...e,[a.id]:t?a[t]:a})),{}),n=({chartConfiguration:e,nativeFilters:t,dataMask:a,allSliceIds:s})=>{const n={};return Object.values(a).forEach((({id:a,extraFormData:i})=>{var o,r,d,l,c,u;const p=null!=(o=null!=(r=null!=(d=null==t||null==(l=t[a])?void 0:l.chartsInScope)?d:null==e||null==(c=e[a])||null==(u=c.crossFilters)?void 0:u.chartsInScope)?r:s)?o:[];n[a]={scope:p,values:i}})),n}},5007:(e,t,a)=>{function s(e){const t="CssEditor-css",a=document.head||document.getElementsByTagName("head")[0],s=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className=e,t.type="text/css",t}(t);return"styleSheet"in s?s.styleSheet.cssText=e:s.innerHTML=e,a.appendChild(s),function(){s.remove()}}a.d(t,{A:()=>s})},45412:(e,t,a)=>{a.d(t,{IX:()=>h.IX,hT:()=>s.hT,PG:()=>p.PG,RG:()=>d,MZ:()=>l,DT:()=>c,RO:()=>u,IV:()=>m,Ip:()=>h.Ip,ii:()=>p.ii,rq:()=>p.rq,ty:()=>p.ty});var s=a(51066),n=a(86274),i=a(58561);function o({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const r=a.n(i)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function d(e){return(0,n.vL)((0,n.b5)(`/api/v1/chart/${e}?q=${r}`),o)}const l=e=>(0,n.vL)((0,n.b5)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json),owners:e.owners||[]}))),c=e=>(0,n.b5)(`/api/v1/dashboard/${e}/charts`),u=e=>(0,n.b5)(`/api/v1/dashboard/${e}/datasets`);var p=a(42242),h=a(3247);const g=a(43031).F.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:({dbId:e,schema:t,sql:a,templateParams:s})=>{let n=s;try{n=JSON.parse(s||"")}catch(e){n=void 0}const i={schema:t,sql:a,...n&&{template_params:n}};return{method:"post",endpoint:`/api/v1/database/${e}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(i),transformResponse:({json:e})=>e.result}}})})}),{useQueryValidationsQuery:m}=g}}]);
//# sourceMappingURL=b50e490302d98a3b15f1.chunk.js.map