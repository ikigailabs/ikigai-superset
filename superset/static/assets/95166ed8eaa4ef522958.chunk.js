"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6284],{36444:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var r=a(67294),s=a(16550),l=a(73727),o=a(42968),i=a(61988),n=a(51995),c=a(31069),d=a(43716),u=a(30381),p=a.n(u),g=a(40768),h=a(14114),m=a(34858),b=a(37921),y=a(86074),Z=a(99299),q=a(33726),f=a(93139),x=a(58593),v=a(42110),S=a(33743),w=a(120),T=a(27600),$=a(12),k=a(13322),C=a(74069),z=a(94184),H=a.n(z),D=a(35932),U=a(6189),J=a(86185),L=a(11965);const F=o.Z.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,N=o.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 24px 0;
`,R=o.Z.div`
  margin: 0 0 ${({theme:e})=>6*e.gridUnit}px 0;
`,_=o.Z.div`
  display: inline;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  margin-right: ${({theme:e})=>4*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.secondary.dark1};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colors.secondary.light4};
    border-bottom: none;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colors.secondary.light5};
  }
`,A=(0,o.Z)(C.default)`
  .ant-modal-body {
    padding: ${({theme:e})=>6*e.gridUnit}px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,I=(0,h.ZP)((function({onHide:e,openInSqlLab:t,queries:a,query:s,fetchData:l,show:o,addDangerToast:n,addSuccessToast:c}){const{handleKeyPress:d,handleDataChange:u,disablePrevious:p,disableNext:g}=(0,J.Z)({queries:a,currentQueryId:s.id,fetchData:l}),[h,m]=(0,r.useState)("user"),{id:b,sql:y,executed_sql:Z}=s;return(0,L.tZ)("div",{role:"none",onKeyUp:d},(0,L.tZ)(A,{onHide:e,show:o,title:(0,i.t)("Query preview"),footer:(0,L.tZ)(r.Fragment,null,(0,L.tZ)(D.Z,{"data-test":"previous-query",key:"previous-query",disabled:p,onClick:()=>u(!0)},(0,i.t)("Previous")),(0,L.tZ)(D.Z,{"data-test":"next-query",key:"next-query",disabled:g,onClick:()=>u(!1)},(0,i.t)("Next")),(0,L.tZ)(D.Z,{"data-test":"open-in-sql-lab",key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>t(b)},(0,i.t)("Open in SQL Lab")))},(0,L.tZ)(F,null,(0,i.t)("Tab name")),(0,L.tZ)(N,null,s.tab_name),(0,L.tZ)(R,null,(0,L.tZ)(_,{role:"button","data-test":"toggle-user-sql",className:H()({active:"user"===h}),onClick:()=>m("user")},(0,i.t)("User query")),(0,L.tZ)(_,{role:"button","data-test":"toggle-executed-sql",className:H()({active:"executed"===h}),onClick:()=>m("executed")},(0,i.t)("Executed query"))),(0,L.tZ)(U.Z,{addDangerToast:n,addSuccessToast:c,language:"sql"},("user"===h?y:Z)||"")))}));var Q=a(72570),O=a(83379);const B=(0,o.Z)(f.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;v.Z.registerLanguage("sql",S.Z);const P=(0,o.Z)(v.Z)`
  height: ${({theme:e})=>26*e.gridUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,M=o.Z.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,E=o.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,K=(0,o.Z)(b.Z)`
  text-align: left;
  font-family: ${({theme:e})=>e.typography.families.monospace};
`,Y=(0,h.ZP)((function({addDangerToast:e}){const{state:{loading:t,resourceCount:a,resourceCollection:o},fetchData:u}=(0,m.Yi)("query",(0,i.t)("Query history"),e,!1),[h,b]=(0,r.useState)(),v=(0,n.Fg)(),S=(0,s.k6)(),C=(0,r.useCallback)((t=>{c.Z.get({endpoint:`/api/v1/query/${t}`}).then((({json:e={}})=>{b({...e.result})}),(0,g.v$)((t=>e((0,i.t)("There was an issue previewing the selected query. %s",t)))))}),[e]),z={activeChild:"Query history",...q.Y},H=[{id:$.J.StartTime,desc:!0}],D=(0,r.useMemo)((()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:null,label:""};return e===d.Tb.Success?(t.name=(0,L.tZ)(k.Z.Check,{iconColor:v.colors.success.base}),t.label=(0,i.t)("Success")):e===d.Tb.Failed||e===d.Tb.Stopped?(t.name=(0,L.tZ)(k.Z.XSmall,{iconColor:e===d.Tb.Failed?v.colors.error.base:v.colors.grayscale.base}),t.label=(0,i.t)("Failed")):e===d.Tb.Running?(t.name=(0,L.tZ)(k.Z.Running,{iconColor:v.colors.primary.base}),t.label=(0,i.t)("Running")):e===d.Tb.TimedOut?(t.name=(0,L.tZ)(k.Z.Offline,{iconColor:v.colors.grayscale.light1}),t.label=(0,i.t)("Offline")):e!==d.Tb.Scheduled&&e!==d.Tb.Pending||(t.name=(0,L.tZ)(k.Z.Queued,{iconColor:v.colors.grayscale.base}),t.label=(0,i.t)("Scheduled")),(0,L.tZ)(x.u,{title:t.label,placement:"bottom"},(0,L.tZ)("span",null,t.name))},accessor:$.J.Status,size:"xs",disableSortBy:!0},{accessor:$.J.StartTime,Header:(0,i.t)("Time"),size:"xl",Cell:({row:{original:{start_time:e}}})=>{const t=p().utc(e).local().format(T.v2).split(" ");return(0,L.tZ)(r.Fragment,null,t[0]," ",(0,L.tZ)("br",null),t[1])}},{Header:(0,i.t)("Duration"),size:"xl",Cell:({row:{original:{status:e,start_time:t,end_time:a}}})=>{const r=e===d.Tb.Failed?"danger":e,s=a?p()(p().utc(a-t)).format(T.n2):"00:00:00.000";return(0,L.tZ)(K,{type:r,role:"timer"},s)}},{accessor:$.J.TabName,Header:(0,i.t)("Tab name"),size:"xl"},{accessor:$.J.DatabaseName,Header:(0,i.t)("Database"),size:"xl"},{accessor:$.J.Database,hidden:!0},{accessor:$.J.Schema,Header:(0,i.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=t.length>0?t.shift():"";return t.length?(0,L.tZ)(M,null,(0,L.tZ)("span",null,a),(0,L.tZ)(Z.Z,{placement:"right",title:(0,i.t)("TABLES"),trigger:"click",content:(0,L.tZ)(r.Fragment,null,t.map((e=>(0,L.tZ)(E,{key:e},e))))},(0,L.tZ)("span",{className:"count"},"(+",t.length,")"))):a},accessor:$.J.SqlTables,Header:(0,i.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:$.J.UserFirstName,Header:(0,i.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,O.Z)(e)},{accessor:$.J.User,hidden:!0},{accessor:$.J.Rows,Header:(0,i.t)("Rows"),size:"md"},{accessor:$.J.Sql,Header:(0,i.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,L.tZ)("div",{tabIndex:0,role:"button","data-test":`open-sql-preview-${t}`,onClick:()=>b(e)},(0,L.tZ)(P,{language:"sql",style:w.Z},(0,g.IB)(e.sql,4)))},{Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,Cell:({row:{original:{id:e}}})=>(0,L.tZ)(x.u,{title:(0,i.t)("Open query in SQL Lab"),placement:"bottom"},(0,L.tZ)(l.rU,{to:`/sqllab?queryId=${e}`},(0,L.tZ)(k.Z.Full,{iconColor:v.colors.grayscale.base})))}]),[]),U=(0,r.useMemo)((()=>[{Header:(0,i.t)("Database"),key:"database",id:"database",input:"select",operator:f.p.RelationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,g.tm)("query","database",(0,g.v$)((t=>e((0,i.t)("An error occurred while fetching database values: %s",t))))),paginate:!0},{Header:(0,i.t)("State"),key:"state",id:"status",input:"select",operator:f.p.Equals,unfilteredLabel:"All",fetchSelects:(0,g.wk)("query","status",(0,g.v$)((t=>e((0,i.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,i.t)("User"),key:"user",id:"user",input:"select",operator:f.p.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,g.tm)("query","user",(0,g.v$)((t=>e((0,i.t)("An error occurred while fetching user values: %s",t))))),paginate:!0},{Header:(0,i.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:f.p.Between},{Header:(0,i.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:f.p.Contains}]),[e]);return(0,L.tZ)(r.Fragment,null,(0,L.tZ)(y.Z,z),h&&(0,L.tZ)(I,{onHide:()=>b(void 0),query:h,queries:o,fetchData:C,openInSqlLab:e=>S.push(`/sqllab?queryId=${e}`),show:!0}),(0,L.tZ)(B,{className:"query-history-list-view",columns:D,count:a,data:o,fetchData:u,filters:U,initialSort:H,loading:t,pageSize:25,highlightRowId:null==h?void 0:h.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:Q.ws}))}))}}]);
//# sourceMappingURL=95166ed8eaa4ef522958.chunk.js.map