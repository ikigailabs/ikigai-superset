"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3139],{29487:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(73126),r=a(11965),o=(a(67294),a(4863)),n=a(51995),i=a(13322);function s(e){const{type:t="info",description:a,showIcon:s=!0,closable:d=!0,roomBelow:c=!1,children:u}=e,g=(0,n.Fg)(),{colors:p,typography:h,gridUnit:m}=g,{alert:b,error:f,info:v,success:Z}=p;let y=v,x=i.Z.InfoSolid;return"error"===t?(y=f,x=i.Z.ErrorSolid):"warning"===t?(y=b,x=i.Z.AlertSolid):"success"===t&&(y=Z,x=i.Z.CircleCheckSolid),(0,r.tZ)(o.default,(0,l.Z)({role:"alert",showIcon:s,icon:(0,r.tZ)(x,{"aria-label":`${t} icon`}),closeText:d&&(0,r.tZ)(i.Z.XSmall,{"aria-label":"close icon"}),css:(0,r.iv)({marginBottom:c?4*m:0,padding:`${2*m}px ${3*m}px`,alignItems:"flex-start",border:0,backgroundColor:y.light2,"& .ant-alert-icon":{marginRight:2*m},"& .ant-alert-message":{color:y.dark2,fontSize:h.sizes.m,fontWeight:a?h.weights.bold:h.weights.normal},"& .ant-alert-description":{color:y.dark2,fontSize:h.sizes.m}},"","")},e),u)}},62276:(e,t,a)=>{a.d(t,{M:()=>i,S:()=>n});var l=a(60593),r=a(42968);const o=l.Z.RangePicker,n=(0,r.Z)(o)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,i=l.Z},49576:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(67294),r=a(42968),o=a(13322),n=a(11965);const i=r.Z.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=(0,r.Z)(o.Z.CheckboxHalf)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,d=(0,r.Z)(o.Z.CheckboxOff)`
  color: ${({theme:e})=>e.colors.grayscale.base};
  cursor: pointer;
`,c=(0,r.Z)(o.Z.CheckboxOn)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,u=r.Z.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,g=r.Z.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,p=(0,l.forwardRef)((({indeterminate:e,id:t,checked:a,onChange:r,title:o="",labelText:p=""},h)=>{const m=(0,l.useRef)(),b=h||m;return(0,l.useEffect)((()=>{b.current.indeterminate=e}),[b,e]),(0,n.tZ)(l.Fragment,null,(0,n.tZ)(g,null,e&&(0,n.tZ)(s,null),!e&&a&&(0,n.tZ)(c,null),!e&&!a&&(0,n.tZ)(d,null),(0,n.tZ)(u,{name:t,id:t,type:"checkbox",ref:b,checked:a,onChange:r})),(0,n.tZ)(i,{title:o,htmlFor:t},p))}))},93139:(e,t,a)=>{a.d(t,{p:()=>ue,Z:()=>ce});var l=a(73126),r=a(42968),o=a(61988),n=a(67294),i=a(29487),s=a(94184),d=a.n(s),c=a(35932),u=a(13322),g=a(49576),p=a(64158),h=a(97754),m=a(31069),b=a(49238),f=a(74069),v=a(84101),Z=a(60718),y=a(11965);const x=r.Z.div`
  .bulk-tag-text {
    margin-bottom: ${({theme:e})=>2.5*e.gridUnit}px;
  }
`,w=({show:e,selected:t=[],onHide:a,refreshData:l,resourceName:r,addSuccessToast:i,addDangerToast:s})=>{(0,n.useEffect)((()=>{}),[]);const[d,u]=(0,n.useState)([]);return(0,y.tZ)(f.default,{title:(0,o.t)("Bulk tag"),show:e,onHide:()=>{u([]),a()},footer:(0,y.tZ)("div",null,(0,y.tZ)(c.Z,{"data-test":"modal-save-dashboard-button",buttonStyle:"secondary",onClick:a},(0,o.t)("Cancel")),(0,y.tZ)(c.Z,{"data-test":"modal-save-dashboard-button",buttonStyle:"primary",onClick:async()=>{await m.Z.post({endpoint:"/api/v1/tag/bulk_create",jsonPayload:{tags:d.map((e=>({name:e.value,objects_to_tag:t.map((e=>[r,+e.original.id]))})))}}).then((({json:e={}})=>{const t=e.result.objects_skipped,a=e.result.objects_tagged;t.length>0&&i((0,o.t)("%s items could not be tagged because you don’t have edit permissions to all selected objects.",t.length,r)),i((0,o.t)("Tagged %s %ss",a.length,r))})).catch((e=>{s((0,o.t)("Failed to tag items"))})),l(),a(),u([])}},(0,o.t)("Save")))},(0,y.tZ)(x,null,(0,y.tZ)("div",{className:"bulk-tag-text"},(0,o.t)("You are adding tags to %s %ss",t.length,r)),(0,y.tZ)(b.lX,null,(0,o.t)("tags")),(0,y.tZ)(v.Z,{ariaLabel:"tags",value:d,options:Z.m,onHide:a,onChange:e=>u(e),placeholder:(0,o.t)("Select Tags"),mode:"multiple"})))},S=r.Z.div`
  ${({theme:e,showThumbnails:t})=>`\n    display: grid;\n    grid-gap: ${12*e.gridUnit}px ${4*e.gridUnit}px;\n    grid-template-columns: repeat(auto-fit, 300px);\n    margin-top: ${-6*e.gridUnit}px;\n    padding: ${t?`${8*e.gridUnit+3}px ${9*e.gridUnit}px`:`${8*e.gridUnit+1}px ${9*e.gridUnit}px`};\n  `}
`,C=r.Z.div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({theme:e})=>e.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;function k({bulkSelectEnabled:e,loading:t,prepareRow:a,renderCard:l,rows:r,showThumbnails:o}){return l?(0,y.tZ)(S,{showThumbnails:o},t&&0===r.length&&[...new Array(25)].map(((e,a)=>(0,y.tZ)("div",{key:a},l({loading:t})))),r.length>0&&r.map((r=>l?(a(r),(0,y.tZ)(C,{className:d()({"card-selected":e&&r.isSelected,"bulk-select":e}),key:r.id,onClick:t=>{return a=t,l=r.toggleRowSelected,void(e&&(a.preventDefault(),a.stopPropagation(),l()));var a,l},role:"none"},l({...r.original,loading:t}))):null))):null}var $=a(68135),T=a(4715),F=a(18446),_=a.n(F),I=a(79521),R=a(35755),P=a(15926),U=a.n(P);const B={encode:e=>void 0===e?void 0:U().encode(e).replace(/%/g,"%25").replace(/&/g,"%26").replace(/\+/g,"%2B").replace(/#/g,"%23"),decode:e=>void 0===e||Array.isArray(e)?void 0:U().decode(e)};class N extends Error{constructor(...e){super(...e),this.name="ListViewError"}}function D(e,t){return e.map((({id:e,urlDisplay:a,operator:l})=>({id:e,urlDisplay:a,operator:l,value:t[a||e]})))}function E(e,t){const a=[],l={};return Object.keys(e).forEach((t=>{const r={id:t,value:e[t]};l[t]=r,a.push(r)})),t.forEach((e=>{const t=e.urlDisplay||e.id,a=l[t];a&&(a.operator=e.operator,a.id=e.id)})),a}var M=a(8272);const A=r.Z.div`
  width: ${200}px;
`,V=(0,r.Z)(u.Z.Search)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,z=(0,r.Z)(T.oc)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`;function H({Header:e,name:t,initialValue:a,toolTipDescription:l,onSubmit:r},i){const[s,d]=(0,n.useState)(a||""),c=()=>{s&&r(s.trim())};return(0,n.useImperativeHandle)(i,(()=>({clearFilter:()=>{d(""),r("")}}))),(0,y.tZ)(A,null,(0,y.tZ)(b.lX,null,e),l&&(0,y.tZ)(M.Z,{tooltip:l,viewBox:"0 -7 28 28"}),(0,y.tZ)(z,{allowClear:!0,"data-test":"filters-search",placeholder:(0,o.t)("Type a value"),name:t,value:s,onChange:e=>{d(e.currentTarget.value),""===e.currentTarget.value&&r("")},onPressEnter:c,onBlur:c,prefix:(0,y.tZ)(V,{iconSize:"l"})}))}const O=(0,n.forwardRef)(H),j=r.Z.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  width: ${200}px;
`;function L({Header:e,name:t,fetchSelects:a,initialValue:l,onSelect:r,selects:i=[]},s){const[d,c]=(0,n.useState)(l),u=e=>{r(e?{label:e.label,value:e.value}:void 0),c(e)},g=()=>{r(void 0,!0),c(void 0)};(0,n.useImperativeHandle)(s,(()=>({clearFilter:()=>{g()}})));const p=(0,n.useMemo)((()=>async(e,t,l)=>{if(a){const r=await a(e,t,l);return{data:r.data,totalCount:r.totalCount}}return{data:[],totalCount:0}}),[a]);return(0,y.tZ)(j,null,a?(0,y.tZ)(v.Z,{allowClear:!0,ariaLabel:"string"==typeof e?e:t||(0,o.t)("Filter"),"data-test":"filters-select",header:(0,y.tZ)(b.lX,null,e),onChange:u,onClear:g,options:p,placeholder:(0,o.t)("Select or type a value"),showSearch:!0,value:d}):(0,y.tZ)(T.Ph,{allowClear:!0,ariaLabel:"string"==typeof e?e:t||(0,o.t)("Filter"),"data-test":"filters-select",header:(0,y.tZ)(b.lX,null,e),labelInValue:!0,onChange:u,onClear:g,options:i,placeholder:(0,o.t)("Select or type a value"),showSearch:!0,value:d}))}const X=(0,n.forwardRef)(L);var q=a(30381),W=a.n(q),G=a(62276);const J=r.Z.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
`;function K({Header:e,initialValue:t,onSubmit:a},l){const[r,i]=(0,n.useState)(null!=t?t:null),s=(0,n.useMemo)((()=>!r||Array.isArray(r)&&!r.length?null:[W()(r[0]),W()(r[1])]),[r]);return(0,n.useImperativeHandle)(l,(()=>({clearFilter:()=>{i(null),a([])}}))),(0,y.tZ)(J,null,(0,y.tZ)(b.lX,null,e),(0,y.tZ)(G.S,{placeholder:[(0,o.t)("Start date"),(0,o.t)("End date")],showTime:!0,value:s,onChange:e=>{var t,l,r,o;if(!e)return i(null),void a([]);const n=[null!=(t=null==(l=e[0])?void 0:l.valueOf())?t:0,null!=(r=null==(o=e[1])?void 0:o.valueOf())?r:0];i(n),a(n)}}))}const Q=(0,n.forwardRef)(K);function Y({filters:e,internalFilters:t=[],updateFilterValue:a},l){const r=(0,n.useMemo)((()=>Array.from({length:e.length},(()=>(0,n.createRef)()))),[e.length]);return(0,n.useImperativeHandle)(l,(()=>({clearFilters:()=>{r.forEach((e=>{var t;null==(t=e.current)||null==t.clearFilter||t.clearFilter()}))}}))),(0,y.tZ)(n.Fragment,null,e.map((({Header:e,fetchSelects:l,key:o,id:n,input:i,paginate:s,selects:d,toolTipDescription:c,onFilterUpdate:u},g)=>{var p;const h=null==t||null==(p=t[g])?void 0:p.value;return"select"===i?(0,y.tZ)(X,{ref:r[g],Header:e,fetchSelects:l,initialValue:h,key:o,name:n,onSelect:(e,t)=>{u&&(t||u(e)),a(g,e)},paginate:s,selects:d}):"search"===i&&"string"==typeof e?(0,y.tZ)(O,{ref:r[g],Header:e,initialValue:h,key:o,name:n,toolTipDescription:c,onSubmit:e=>{u&&u(e),a(g,e)}}):"datetime_range"===i?(0,y.tZ)(Q,{ref:r[g],Header:e,initialValue:h,key:o,name:n,onSubmit:e=>a(g,e)}):null})))}const ee=(0,$.b)((0,n.forwardRef)(Y)),te=r.Z.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  text-align: left;
  width: ${200}px;
`,ae=({initialSort:e,onChange:t,options:a})=>{const l=e&&a.find((({id:t,desc:a})=>t===e[0].id&&a===e[0].desc))||a[0],[r,i]=(0,n.useState)({label:l.label,value:l.value}),s=(0,n.useMemo)((()=>a.map((e=>({label:e.label,value:e.value})))),[a]);return(0,y.tZ)(te,null,(0,y.tZ)(T.Ph,{ariaLabel:(0,o.t)("Sort"),header:(0,y.tZ)(b.lX,null,(0,o.t)("Sort")),labelInValue:!0,onChange:e=>{i(e);const l=a.find((({value:t})=>t===e.value));if(l){const e=[{id:l.id,desc:l.desc}];t(e)}},options:s,showSearch:!0,value:r}))};var le=a(94301);const re=r.Z.div`
  text-align: center;

  .superset-list-view {
    text-align: left;
    border-radius: 4px 0;
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;

    .header {
      display: flex;
      padding-bottom: ${({theme:e})=>4*e.gridUnit}px;

      & .controls {
        display: flex;
        flex-wrap: wrap;
        column-gap: ${({theme:e})=>6*e.gridUnit}px;
        row-gap: ${({theme:e})=>4*e.gridUnit}px;
      }
    }

    .body.empty table {
      margin-bottom: 0;
    }

    .body {
      overflow-x: auto;
    }

    .ant-empty {
      .ant-empty-image {
        height: auto;
      }
    }
  }

  .pagination-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,oe=(0,r.Z)(i.Z)`
  ${({theme:e})=>`\n    border-radius: 0;\n    margin-bottom: 0;\n    color: ${e.colors.grayscale.dark1};\n    background-color: ${e.colors.primary.light4};\n\n    .selectedCopy {\n      display: inline-block;\n      padding: ${2*e.gridUnit}px 0;\n    }\n\n    .deselect-all, .tag-btn {\n      color: ${e.colors.primary.base};\n      margin-left: ${4*e.gridUnit}px;\n    }\n\n    .divider {\n      margin: ${2*-e.gridUnit}px 0 ${2*-e.gridUnit}px ${4*e.gridUnit}px;\n      width: 1px;\n      height: ${8*e.gridUnit}px;\n      box-shadow: inset -1px 0px 0px ${e.colors.grayscale.light2};\n      display: inline-flex;\n      vertical-align: middle;\n      position: relative;\n    }\n\n    .ant-alert-close-icon {\n      margin-top: ${1.5*e.gridUnit}px;\n    }\n  `}
`,ne={Cell:({row:e})=>(0,y.tZ)(g.Z,(0,l.Z)({},e.getToggleRowSelectedProps(),{id:e.id})),Header:({getToggleAllRowsSelectedProps:e})=>(0,y.tZ)(g.Z,(0,l.Z)({},e(),{id:"header-toggle-all"})),id:"selection",size:"sm"},ie=r.Z.div`
  padding-right: ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>5*e.gridUnit+1}px;
  white-space: nowrap;
  display: inline-block;

  .toggle-button {
    display: inline-block;
    border-radius: ${({theme:e})=>e.gridUnit/2}px;
    padding: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>.5*e.gridUnit}px;

    &:first-of-type {
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }
  }

  .active {
    background-color: ${({theme:e})=>e.colors.grayscale.base};
    svg {
      color: ${({theme:e})=>e.colors.grayscale.light5};
    }
  }
`,se=r.Z.div`
  padding: ${({theme:e})=>40*e.gridUnit}px 0;

  &.table {
    background: ${({theme:e})=>e.colors.grayscale.light5};
  }
`,de=({mode:e,setMode:t})=>(0,y.tZ)(ie,null,(0,y.tZ)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("card")},className:d()("toggle-button",{active:"card"===e})},(0,y.tZ)(u.Z.CardView,null)),(0,y.tZ)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("table")},className:d()("toggle-button",{active:"table"===e})},(0,y.tZ)(u.Z.ListView,null))),ce=function({columns:e,data:t,count:a,pageSize:r,fetchData:i,refreshData:s,loading:d,initialSort:u=[],className:g="",filters:m=[],bulkActions:b=[],bulkSelectEnabled:f=!1,disableBulkSelect:v=(()=>{}),renderBulkSelectCopy:Z=(e=>(0,o.t)("%s Selected",e.length)),renderCard:x,showThumbnails:S,cardSortSelectOptions:C,defaultViewMode:$="card",highlightRowId:T,emptyState:F,columnsForWrapText:P,enableBulkTag:U=!1,bulkTagResourceName:M,addSuccessToast:A,addDangerToast:V}){const{getTableProps:z,getTableBodyProps:H,headerGroups:O,rows:j,prepareRow:L,pageCount:X=1,gotoPage:q,applyFilterValue:W,setSortBy:G,selectedFlatRows:J,toggleAllRowsSelected:K,setViewMode:Q,state:{pageIndex:Y,pageSize:te,internalFilters:ie,sortBy:ce,viewMode:ue},query:ge}=function({fetchData:e,columns:t,data:a,count:l,initialPageSize:r,initialFilters:o=[],initialSort:i=[],bulkSelectMode:s=!1,bulkSelectColumnConfig:d,renderCard:c=!1,defaultViewMode:u="card"}){const[g,p]=(0,R.Kx)({filters:B,pageIndex:R.yz,sortColumn:R.Zp,sortOrder:R.Zp,viewMode:R.Zp}),h=(0,n.useMemo)((()=>g.sortColumn&&g.sortOrder?[{id:g.sortColumn,desc:"desc"===g.sortOrder}]:i),[i,g.sortColumn,g.sortOrder]),m={filters:g.filters?E(g.filters,o):[],pageIndex:g.pageIndex||0,pageSize:r,sortBy:h},[b,f]=(0,n.useState)(g.viewMode||(c?u:"table")),v=(0,n.useMemo)((()=>{const e=t.map((e=>({...e,filter:"exact"})));return s?[d,...e]:e}),[s,t]),{getTableProps:Z,getTableBodyProps:y,headerGroups:x,rows:w,prepareRow:S,canPreviousPage:C,canNextPage:k,pageCount:$,gotoPage:T,setAllFilters:F,setSortBy:P,selectedFlatRows:U,toggleAllRowsSelected:N,state:{pageIndex:M,pageSize:A,sortBy:V,filters:z}}=(0,I.useTable)({columns:v,count:l,data:a,disableFilters:!0,disableSortRemove:!0,initialState:m,manualFilters:!0,manualPagination:!0,manualSortBy:!0,autoResetFilters:!1,pageCount:Math.ceil(l/r)},I.useFilters,I.useSortBy,I.usePagination,I.useRowState,I.useRowSelect),[H,O]=(0,n.useState)(g.filters&&o.length?D(o,g.filters):[]);return(0,n.useEffect)((()=>{o.length&&O(D(o,g.filters?g.filters:{}))}),[o]),(0,n.useEffect)((()=>{const t={};H.forEach((e=>{if(void 0!==e.value&&("string"!=typeof e.value||e.value.length>0)){const a=e.urlDisplay||e.id;t[a]=e.value}}));const a={filters:Object.keys(t).length?t:void 0,pageIndex:M};V[0]&&(a.sortColumn=V[0].id,a.sortOrder=V[0].desc?"desc":"asc"),c&&(a.viewMode=b);const l=void 0!==g.pageIndex&&a.pageIndex!==g.pageIndex?"push":"replace";p(a,l),e({pageIndex:M,pageSize:A,sortBy:V,filters:z})}),[e,M,A,V,z]),(0,n.useEffect)((()=>{_()(m.pageIndex,M)||T(m.pageIndex)}),[g]),{canNextPage:k,canPreviousPage:C,getTableBodyProps:y,getTableProps:Z,gotoPage:T,headerGroups:x,pageCount:$,prepareRow:S,rows:w,selectedFlatRows:U,setAllFilters:F,setSortBy:P,state:{pageIndex:M,pageSize:A,sortBy:V,filters:z,internalFilters:H,viewMode:b},toggleAllRowsSelected:N,applyFilterValue:(e,t)=>{O((a=>{if(a[e].value===t)return a;const l={...a[e],value:t},r=function(e,t,a){const l=e.find(((e,a)=>t===a));return[...e.slice(0,t),{...l,...a},...e.slice(t+1)]}(a,e,l);return F(r.filter((e=>!(void 0===e.value||Array.isArray(e.value)&&!e.value.length))).map((({value:e,operator:t,id:a})=>"between"===t&&Array.isArray(e)?[{value:e[0],operator:"gt",id:a},{value:e[1],operator:"lt",id:a}]:{value:e,operator:t,id:a})).flat()),T(0),r}))},setViewMode:f,query:g}}({bulkSelectColumnConfig:ne,bulkSelectMode:f&&Boolean(b.length),columns:e,count:a,data:t,fetchData:i,initialPageSize:r,initialSort:u,initialFilters:m,renderCard:Boolean(x),defaultViewMode:$}),pe=M&&U,he=Boolean(m.length);if(he){const t=e.reduce(((e,t)=>({...e,[t.id||t.accessor]:!0})),{});m.forEach((e=>{if(!t[e.id])throw new N(`Invalid filter config, ${e.id} is not present in columns`)}))}const me=(0,n.useRef)(null),be=(0,n.useCallback)((()=>{var e;ge.filters&&(null==(e=me.current)||e.clearFilters())}),[ge.filters]),fe=Boolean(x),[ve,Ze]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{f||K(!1)}),[f,K]),(0,n.useEffect)((()=>{!d&&Y>X-1&&X>0&&q(0)}),[q,d,X,Y]),(0,y.tZ)(re,null,pe&&(0,y.tZ)(w,{show:ve,selected:J,refreshData:s,resourceName:M,addSuccessToast:A,addDangerToast:V,onHide:()=>Ze(!1)}),(0,y.tZ)("div",{"data-test":g,className:`superset-list-view ${g}`},(0,y.tZ)("div",{className:"header"},fe&&(0,y.tZ)(de,{mode:ue,setMode:Q}),(0,y.tZ)("div",{className:"controls"},he&&(0,y.tZ)(ee,{ref:me,filters:m,internalFilters:ie,updateFilterValue:W}),"card"===ue&&C&&(0,y.tZ)(ae,{initialSort:ce,onChange:e=>G(e),options:C}))),(0,y.tZ)("div",{className:"body "+(0===j.length?"empty":"")},f&&(0,y.tZ)(oe,{"data-test":"bulk-select-controls",type:"info",closable:!0,showIcon:!1,onClose:v,message:(0,y.tZ)(n.Fragment,null,(0,y.tZ)("div",{className:"selectedCopy","data-test":"bulk-select-copy"},Z(J)),Boolean(J.length)&&(0,y.tZ)(n.Fragment,null,(0,y.tZ)("span",{"data-test":"bulk-select-deselect-all",role:"button",tabIndex:0,className:"deselect-all",onClick:()=>K(!1)},(0,o.t)("Deselect all")),(0,y.tZ)("div",{className:"divider"}),b.map((e=>(0,y.tZ)(c.Z,{"data-test":"bulk-select-action",key:e.key,buttonStyle:e.type,cta:!0,onClick:()=>e.onSelect(J.map((e=>e.original)))},e.name))),U&&(0,y.tZ)("span",{"data-test":"bulk-select-tag-btn",role:"button",tabIndex:0,className:"tag-btn",onClick:()=>Ze(!0)},(0,o.t)("Add Tag"))))}),"card"===ue&&(0,y.tZ)(k,{bulkSelectEnabled:f,prepareRow:L,renderCard:x,rows:j,loading:d,showThumbnails:S}),"table"===ue&&(0,y.tZ)(h.Z,{getTableProps:z,getTableBodyProps:H,prepareRow:L,headerGroups:O,rows:j,columns:e,loading:d,highlightRowId:T,columnsForWrapText:P}),!d&&0===j.length&&(0,y.tZ)(se,{className:ue},ge.filters?(0,y.tZ)(le.XJ,{title:(0,o.t)("No results match your filter criteria"),description:(0,o.t)("Try different criteria to display results."),image:"filter-results.svg",buttonAction:()=>be(),buttonText:(0,o.t)("clear all filters")}):(0,y.tZ)(le.XJ,(0,l.Z)({},F,{title:(null==F?void 0:F.title)||(0,o.t)("No Data"),image:(null==F?void 0:F.image)||"filter-results.svg"}))))),j.length>0&&(0,y.tZ)("div",{className:"pagination-container"},(0,y.tZ)(p.Z,{totalPages:X||0,currentPage:X&&Y<X?Y+1:0,onChange:e=>q(e-1),hideFirstAndLastPageLinks:!0}),(0,y.tZ)("div",{className:"row-count-container"},!d&&(0,o.t)("%s-%s of %s",te*Y+(j.length&&1),te*Y+j.length,a))))};var ue;!function(e){e.StartsWith="sw",e.EndsWith="ew",e.Contains="ct",e.Equals="eq",e.NotStartsWith="nsw",e.NotEndsWith="new",e.NotContains="nct",e.NotEquals="neq",e.GreaterThan="gt",e.LessThan="lt",e.RelationManyMany="rel_m_m",e.RelationOneMany="rel_o_m",e.TitleOrSlug="title_or_slug",e.NameOrDescription="name_or_description",e.AllText="all_text",e.ChartAllText="chart_all_text",e.DatasetIsNullOrEmpty="dataset_is_null_or_empty",e.Between="between",e.DashboardIsFav="dashboard_is_favorite",e.ChartIsFav="chart_is_favorite",e.ChartIsCertified="chart_is_certified",e.DashboardIsCertified="dashboard_is_certified",e.DatasetIsCertified="dataset_is_certified",e.DashboardHasCreatedBy="dashboard_has_created_by",e.ChartHasCreatedBy="chart_has_created_by",e.DashboardTags="dashboard_tags",e.ChartTags="chart_tags",e.SavedQueryTags="saved_query_tags"}(ue||(ue={}))}}]);
//# sourceMappingURL=ff9f9adbe6cca230522d.chunk.js.map