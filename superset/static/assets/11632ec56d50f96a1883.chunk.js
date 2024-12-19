"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9915],{52825:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var r=a(96540),s=a(56347),l=a(54625),o=a(90017),i=a(95579),n=a(96453),c=a(35742),d=a(69108),u=a(95093),h=a.n(u),g=a(30703),p=a(5261),m=a(50500),y=a(2738),b=a(51713),q=a(50127),A=a(93514),f=a(39854),x=a(19129),Y=a(45738),k=a(78360),v=a(10286),S=a(27023),w=a(23193),H=a(12249),C=a(85861),$=a(46942),T=a.n($),z=a(46920),D=a(11188),F=a(14318),U=a(17437);const L=o.A.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,R=o.A.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 24px 0;
`,N=o.A.div`
  margin: 0 0 ${({theme:e})=>6*e.gridUnit}px 0;
`,_=o.A.div`
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
`,Q=(0,o.A)(C.A)`
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
`,Z=(0,p.Ay)((function({onHide:e,openInSqlLab:t,queries:a,query:s,fetchData:l,show:o,addDangerToast:n,addSuccessToast:c}){const{handleKeyPress:d,handleDataChange:u,disablePrevious:h,disableNext:g}=(0,F.A)({queries:a,currentQueryId:s.id,fetchData:l}),[p,m]=(0,r.useState)("user"),{id:y,sql:b,executed_sql:q}=s;return(0,U.Y)("div",{role:"none",onKeyUp:d},(0,U.Y)(Q,{onHide:e,show:o,title:(0,i.t)("Query preview"),footer:(0,U.Y)(r.Fragment,null,(0,U.Y)(z.A,{"data-test":"previous-query",key:"previous-query",disabled:h,onClick:()=>u(!0)},(0,i.t)("Previous")),(0,U.Y)(z.A,{"data-test":"next-query",key:"next-query",disabled:g,onClick:()=>u(!1)},(0,i.t)("Next")),(0,U.Y)(z.A,{"data-test":"open-in-sql-lab",key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>t(y)},(0,i.t)("Open in SQL Lab")))},(0,U.Y)(L,null,(0,i.t)("Tab name")),(0,U.Y)(R,null,s.tab_name),(0,U.Y)(N,null,(0,U.Y)(_,{role:"button","data-test":"toggle-user-sql",className:T()({active:"user"===p}),onClick:()=>m("user")},(0,i.t)("User query")),(0,U.Y)(_,{role:"button","data-test":"toggle-executed-sql",className:T()({active:"executed"===p}),onClick:()=>m("executed")},(0,i.t)("Executed query"))),(0,U.Y)(D.A,{addDangerToast:n,addSuccessToast:c,language:"sql"},("user"===p?b:q)||"")))}));var I=a(95272),O=a(25106);const B=(0,o.A)(f.A)`
  table .table-cell {
    vertical-align: top;
  }
`;Y.A.registerLanguage("sql",k.A);const P=(0,o.A)(Y.A)`
  height: ${({theme:e})=>26*e.gridUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,J=o.A.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,M=o.A.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,E=(0,o.A)(y.A)`
  text-align: left;
  font-family: ${({theme:e})=>e.typography.families.monospace};
`,K=(0,p.Ay)((function({addDangerToast:e}){const{state:{loading:t,resourceCount:a,resourceCollection:o},fetchData:u}=(0,m.RU)("query",(0,i.t)("Query history"),e,!1),[p,y]=(0,r.useState)(),Y=(0,n.DP)(),k=(0,s.W6)(),C=(0,r.useCallback)((t=>{c.A.get({endpoint:`/api/v1/query/${t}`}).then((({json:e={}})=>{y({...e.result})}),(0,g.JF)((t=>e((0,i.t)("There was an issue previewing the selected query. %s",t)))))}),[e]),$={activeChild:"Query history",...A.F},T=[{id:w.H.StartTime,desc:!0}],z=(0,r.useMemo)((()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:null,label:""};return e===d.kZ.Success?(t.name=(0,U.Y)(H.A.Check,{iconColor:Y.colors.success.base}),t.label=(0,i.t)("Success")):e===d.kZ.Failed||e===d.kZ.Stopped?(t.name=(0,U.Y)(H.A.XSmall,{iconColor:e===d.kZ.Failed?Y.colors.error.base:Y.colors.grayscale.base}),t.label=(0,i.t)("Failed")):e===d.kZ.Running?(t.name=(0,U.Y)(H.A.Running,{iconColor:Y.colors.primary.base}),t.label=(0,i.t)("Running")):e===d.kZ.TimedOut?(t.name=(0,U.Y)(H.A.Offline,{iconColor:Y.colors.grayscale.light1}),t.label=(0,i.t)("Offline")):e!==d.kZ.Scheduled&&e!==d.kZ.Pending||(t.name=(0,U.Y)(H.A.Queued,{iconColor:Y.colors.grayscale.base}),t.label=(0,i.t)("Scheduled")),(0,U.Y)(x.m,{title:t.label,placement:"bottom"},(0,U.Y)("span",null,t.name))},accessor:w.H.Status,size:"xs",disableSortBy:!0},{accessor:w.H.StartTime,Header:(0,i.t)("Time"),size:"xl",Cell:({row:{original:{start_time:e}}})=>{const t=h().utc(e).local().format(S.QU).split(" ");return(0,U.Y)(r.Fragment,null,t[0]," ",(0,U.Y)("br",null),t[1])}},{Header:(0,i.t)("Duration"),size:"xl",Cell:({row:{original:{status:e,start_time:t,end_time:a}}})=>{const r=e===d.kZ.Failed?"danger":e,s=a?h()(h().utc(a-t)).format(S.os):"00:00:00.000";return(0,U.Y)(E,{type:r,role:"timer"},s)}},{accessor:w.H.TabName,Header:(0,i.t)("Tab name"),size:"xl"},{accessor:w.H.DatabaseName,Header:(0,i.t)("Database"),size:"xl"},{accessor:w.H.Database,hidden:!0},{accessor:w.H.Schema,Header:(0,i.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=t.length>0?t.shift():"";return t.length?(0,U.Y)(J,null,(0,U.Y)("span",null,a),(0,U.Y)(q.A,{placement:"right",title:(0,i.t)("TABLES"),trigger:"click",content:(0,U.Y)(r.Fragment,null,t.map((e=>(0,U.Y)(M,{key:e},e))))},(0,U.Y)("span",{className:"count"},"(+",t.length,")"))):a},accessor:w.H.SqlTables,Header:(0,i.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:w.H.UserFirstName,Header:(0,i.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,O.A)(e)},{accessor:w.H.User,hidden:!0},{accessor:w.H.Rows,Header:(0,i.t)("Rows"),size:"md"},{accessor:w.H.Sql,Header:(0,i.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,U.Y)("div",{tabIndex:0,role:"button","data-test":`open-sql-preview-${t}`,onClick:()=>y(e)},(0,U.Y)(P,{language:"sql",style:v.A},(0,g.s4)(e.sql,4)))},{Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,Cell:({row:{original:{id:e}}})=>(0,U.Y)(x.m,{title:(0,i.t)("Open query in SQL Lab"),placement:"bottom"},(0,U.Y)(l.N_,{to:`/sqllab?queryId=${e}`},(0,U.Y)(H.A.Full,{iconColor:Y.colors.grayscale.base})))}]),[]),D=(0,r.useMemo)((()=>[{Header:(0,i.t)("Database"),key:"database",id:"database",input:"select",operator:f.t.RelationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,g.u1)("query","database",(0,g.JF)((t=>e((0,i.t)("An error occurred while fetching database values: %s",t))))),paginate:!0},{Header:(0,i.t)("State"),key:"state",id:"status",input:"select",operator:f.t.Equals,unfilteredLabel:"All",fetchSelects:(0,g.$C)("query","status",(0,g.JF)((t=>e((0,i.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,i.t)("User"),key:"user",id:"user",input:"select",operator:f.t.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,g.u1)("query","user",(0,g.JF)((t=>e((0,i.t)("An error occurred while fetching user values: %s",t))))),paginate:!0},{Header:(0,i.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:f.t.Between},{Header:(0,i.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:f.t.Contains}]),[e]);return(0,U.Y)(r.Fragment,null,(0,U.Y)(b.A,$),p&&(0,U.Y)(Z,{onHide:()=>y(void 0),query:p,queries:o,fetchData:C,openInSqlLab:e=>k.push(`/sqllab?queryId=${e}`),show:!0}),(0,U.Y)(B,{className:"query-history-list-view",columns:z,count:a,data:o,fetchData:u,filters:D,initialSort:T,loading:t,pageSize:25,highlightRowId:null==p?void 0:p.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:I.WR}))}))}}]);
//# sourceMappingURL=11632ec56d50f96a1883.chunk.js.map