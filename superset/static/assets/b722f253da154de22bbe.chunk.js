"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9854],{25946:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(97032),r=a(17437),o=(a(96540),a(94535)),n=a(96453),i=a(12249);function s(e){const{type:t="info",description:a,showIcon:s=!0,closable:d=!0,roomBelow:c=!1,children:u}=e,g=(0,n.DP)(),{colors:p,typography:h,gridUnit:m}=g,{alert:f,error:b,info:v,success:y}=p;let x=v,w=i.A.InfoSolid;return"error"===t?(x=b,w=i.A.ErrorSolid):"warning"===t?(x=f,w=i.A.AlertSolid):"success"===t&&(x=y,w=i.A.CircleCheckSolid),(0,r.Y)(o.default,(0,l.A)({role:"alert",showIcon:s,icon:(0,r.Y)(w,{"aria-label":`${t} icon`}),closeText:d&&(0,r.Y)(i.A.XSmall,{"aria-label":"close icon"}),css:(0,r.AH)({marginBottom:c?4*m:0,padding:`${2*m}px ${3*m}px`,alignItems:"flex-start",border:0,backgroundColor:x.light2,"& .ant-alert-icon":{marginRight:2*m},"& .ant-alert-message":{color:x.dark2,fontSize:h.sizes.m,fontWeight:a?h.weights.bold:h.weights.normal},"& .ant-alert-description":{color:x.dark2,fontSize:h.sizes.m}},"","")},e),u)}},6094:(e,t,a)=>{a.d(t,{c:()=>n,l:()=>i});var l=a(70244),r=a(90017);const o=l.A.RangePicker,n=(0,r.A)(o)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,i=l.A},85994:(e,t,a)=>{a.d(t,{A:()=>p});var l=a(96540),r=a(90017),o=a(12249),n=a(17437);const i=r.A.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=(0,r.A)(o.A.CheckboxHalf)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,d=(0,r.A)(o.A.CheckboxOff)`
  color: ${({theme:e})=>e.colors.grayscale.base};
  cursor: pointer;
`,c=(0,r.A)(o.A.CheckboxOn)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,u=r.A.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,g=r.A.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,p=(0,l.forwardRef)((({indeterminate:e,id:t,checked:a,onChange:r,title:o="",labelText:p=""},h)=>{const m=(0,l.useRef)(),f=h||m;return(0,l.useEffect)((()=>{f.current.indeterminate=e}),[f,e]),(0,n.Y)(l.Fragment,null,(0,n.Y)(g,null,e&&(0,n.Y)(s,null),!e&&a&&(0,n.Y)(c,null),!e&&!a&&(0,n.Y)(d,null),(0,n.Y)(u,{name:t,id:t,type:"checkbox",ref:f,checked:a,onChange:r})),(0,n.Y)(i,{title:o,htmlFor:t},p))}))},39854:(e,t,a)=>{a.d(t,{t:()=>ue,A:()=>ce});var l=a(97032),r=a(90017),o=a(95579),n=a(96540),i=a(25946),s=a(46942),d=a.n(s),c=a(46920),u=a(12249),g=a(85994),p=a(47251),h=a(73204),m=a(35742),f=a(40563),b=a(85861),v=a(49756),y=a(3932),x=a(17437);const w=r.A.div`
  .bulk-tag-text {
    margin-bottom: ${({theme:e})=>2.5*e.gridUnit}px;
  }
`,S=({show:e,selected:t=[],onHide:a,refreshData:l,resourceName:r,addSuccessToast:i,addDangerToast:s})=>{(0,n.useEffect)((()=>{}),[]);const[d,u]=(0,n.useState)([]);return(0,x.Y)(b.A,{title:(0,o.t)("Bulk tag"),show:e,onHide:()=>{u([]),a()},footer:(0,x.Y)("div",null,(0,x.Y)(c.A,{"data-test":"modal-save-dashboard-button",buttonStyle:"secondary",onClick:a},(0,o.t)("Cancel")),(0,x.Y)(c.A,{"data-test":"modal-save-dashboard-button",buttonStyle:"primary",onClick:async()=>{await m.A.post({endpoint:"/api/v1/tag/bulk_create",jsonPayload:{tags:d.map((e=>({name:e.value,objects_to_tag:t.map((e=>[r,+e.original.id]))})))}}).then((({json:e={}})=>{const t=e.result.objects_skipped,a=e.result.objects_tagged;t.length>0&&i((0,o.t)("%s items could not be tagged because you don’t have edit permissions to all selected objects.",t.length,r)),i((0,o.t)("Tagged %s %ss",a.length,r))})).catch((e=>{s((0,o.t)("Failed to tag items"))})),l(),a(),u([])}},(0,o.t)("Save")))},(0,x.Y)(w,null,(0,x.Y)("div",{className:"bulk-tag-text"},(0,o.t)("You are adding tags to %s %ss",t.length,r)),(0,x.Y)(f.lR,null,(0,o.t)("tags")),(0,x.Y)(v.A,{ariaLabel:"tags",value:d,options:y.m,onHide:a,onChange:e=>u(e),placeholder:(0,o.t)("Select Tags"),mode:"multiple"})))},A=r.A.div`
  ${({theme:e,showThumbnails:t})=>`\n    display: grid;\n    grid-gap: ${12*e.gridUnit}px ${4*e.gridUnit}px;\n    grid-template-columns: repeat(auto-fit, 300px);\n    margin-top: ${-6*e.gridUnit}px;\n    padding: ${t?`${8*e.gridUnit+3}px ${9*e.gridUnit}px`:`${8*e.gridUnit+1}px ${9*e.gridUnit}px`};\n  `}
`,Y=r.A.div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({theme:e})=>e.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;function C({bulkSelectEnabled:e,loading:t,prepareRow:a,renderCard:l,rows:r,showThumbnails:o}){return l?(0,x.Y)(A,{showThumbnails:o},t&&0===r.length&&[...new Array(25)].map(((e,a)=>(0,x.Y)("div",{key:a},l({loading:t})))),r.length>0&&r.map((r=>l?(a(r),(0,x.Y)(Y,{className:d()({"card-selected":e&&r.isSelected,"bulk-select":e}),key:r.id,onClick:t=>{return a=t,l=r.toggleRowSelected,void(e&&(a.preventDefault(),a.stopPropagation(),l()));var a,l},role:"none"},l({...r.original,loading:t}))):null))):null}var k=a(28176),$=a(15595),T=a(2404),_=a.n(T),F=a(38914),R=a(33231),I=a(58561),U=a.n(I);const B={encode:e=>void 0===e?void 0:U().encode(e).replace(/%/g,"%25").replace(/&/g,"%26").replace(/\+/g,"%2B").replace(/#/g,"%23"),decode:e=>void 0===e||Array.isArray(e)?void 0:U().decode(e)};class P extends Error{constructor(...e){super(...e),this.name="ListViewError"}}function N(e,t){return e.map((({id:e,urlDisplay:a,operator:l})=>({id:e,urlDisplay:a,operator:l,value:t[a||e]})))}function D(e,t){const a=[],l={};return Object.keys(e).forEach((t=>{const r={id:t,value:e[t]};l[t]=r,a.push(r)})),t.forEach((e=>{const t=e.urlDisplay||e.id,a=l[t];a&&(a.operator=e.operator,a.id=e.id)})),a}var E=a(31641);const M=r.A.div`
  width: ${200}px;
`,H=(0,r.A)(u.A.Search)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,V=(0,r.A)($.k2)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`;function z({Header:e,name:t,initialValue:a,toolTipDescription:l,onSubmit:r},i){const[s,d]=(0,n.useState)(a||""),c=()=>{s&&r(s.trim())};return(0,n.useImperativeHandle)(i,(()=>({clearFilter:()=>{d(""),r("")}}))),(0,x.Y)(M,null,(0,x.Y)(f.lR,null,e),l&&(0,x.Y)(E.A,{tooltip:l,viewBox:"0 -7 28 28"}),(0,x.Y)(V,{allowClear:!0,"data-test":"filters-search",placeholder:(0,o.t)("Type a value"),name:t,value:s,onChange:e=>{d(e.currentTarget.value),""===e.currentTarget.value&&r("")},onPressEnter:c,onBlur:c,prefix:(0,x.Y)(H,{iconSize:"l"})}))}const O=(0,n.forwardRef)(z),j=r.A.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  width: ${200}px;
`;function L({Header:e,name:t,fetchSelects:a,initialValue:l,onSelect:r,selects:i=[]},s){const[d,c]=(0,n.useState)(l),u=e=>{r(e?{label:e.label,value:e.value}:void 0),c(e)},g=()=>{r(void 0,!0),c(void 0)};(0,n.useImperativeHandle)(s,(()=>({clearFilter:()=>{g()}})));const p=(0,n.useMemo)((()=>async(e,t,l)=>{if(a){const r=await a(e,t,l);return{data:r.data,totalCount:r.totalCount}}return{data:[],totalCount:0}}),[a]);return(0,x.Y)(j,null,a?(0,x.Y)(v.A,{allowClear:!0,ariaLabel:"string"==typeof e?e:t||(0,o.t)("Filter"),"data-test":"filters-select",header:(0,x.Y)(f.lR,null,e),onChange:u,onClear:g,options:p,placeholder:(0,o.t)("Select or type a value"),showSearch:!0,value:d}):(0,x.Y)($.l6,{allowClear:!0,ariaLabel:"string"==typeof e?e:t||(0,o.t)("Filter"),"data-test":"filters-select",header:(0,x.Y)(f.lR,null,e),labelInValue:!0,onChange:u,onClear:g,options:i,placeholder:(0,o.t)("Select or type a value"),showSearch:!0,value:d}))}const q=(0,n.forwardRef)(L);var W=a(95093),G=a.n(W),Q=a(6094);const X=r.A.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
`;function J({Header:e,initialValue:t,onSubmit:a},l){const[r,i]=(0,n.useState)(null!=t?t:null),s=(0,n.useMemo)((()=>!r||Array.isArray(r)&&!r.length?null:[G()(r[0]),G()(r[1])]),[r]);return(0,n.useImperativeHandle)(l,(()=>({clearFilter:()=>{i(null),a([])}}))),(0,x.Y)(X,null,(0,x.Y)(f.lR,null,e),(0,x.Y)(Q.c,{placeholder:[(0,o.t)("Start date"),(0,o.t)("End date")],showTime:!0,value:s,onChange:e=>{var t,l,r,o;if(!e)return i(null),void a([]);const n=[null!=(t=null==(l=e[0])?void 0:l.valueOf())?t:0,null!=(r=null==(o=e[1])?void 0:o.valueOf())?r:0];i(n),a(n)}}))}const K=(0,n.forwardRef)(J);function Z({filters:e,internalFilters:t=[],updateFilterValue:a},l){const r=(0,n.useMemo)((()=>Array.from({length:e.length},(()=>(0,n.createRef)()))),[e.length]);return(0,n.useImperativeHandle)(l,(()=>({clearFilters:()=>{r.forEach((e=>{var t;null==(t=e.current)||null==t.clearFilter||t.clearFilter()}))}}))),(0,x.Y)(n.Fragment,null,e.map((({Header:e,fetchSelects:l,key:o,id:n,input:i,paginate:s,selects:d,toolTipDescription:c,onFilterUpdate:u},g)=>{var p;const h=null==t||null==(p=t[g])?void 0:p.value;return"select"===i?(0,x.Y)(q,{ref:r[g],Header:e,fetchSelects:l,initialValue:h,key:o,name:n,onSelect:(e,t)=>{u&&(t||u(e)),a(g,e)},paginate:s,selects:d}):"search"===i&&"string"==typeof e?(0,x.Y)(O,{ref:r[g],Header:e,initialValue:h,key:o,name:n,toolTipDescription:c,onSubmit:e=>{u&&u(e),a(g,e)}}):"datetime_range"===i?(0,x.Y)(K,{ref:r[g],Header:e,initialValue:h,key:o,name:n,onSubmit:e=>a(g,e)}):null})))}const ee=(0,k.b)((0,n.forwardRef)(Z)),te=r.A.div`
  display: inline-flex;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  align-items: center;
  text-align: left;
  width: ${200}px;
`,ae=({initialSort:e,onChange:t,options:a})=>{const l=e&&a.find((({id:t,desc:a})=>t===e[0].id&&a===e[0].desc))||a[0],[r,i]=(0,n.useState)({label:l.label,value:l.value}),s=(0,n.useMemo)((()=>a.map((e=>({label:e.label,value:e.value})))),[a]);return(0,x.Y)(te,null,(0,x.Y)($.l6,{ariaLabel:(0,o.t)("Sort"),header:(0,x.Y)(f.lR,null,(0,o.t)("Sort")),labelInValue:!0,onChange:e=>{i(e);const l=a.find((({value:t})=>t===e.value));if(l){const e=[{id:l.id,desc:l.desc}];t(e)}},options:s,showSearch:!0,value:r}))};var le=a(87196);const re=r.A.div`
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
`,oe=(0,r.A)(i.A)`
  ${({theme:e})=>`\n    border-radius: 0;\n    margin-bottom: 0;\n    color: ${e.colors.grayscale.dark1};\n    background-color: ${e.colors.primary.light4};\n\n    .selectedCopy {\n      display: inline-block;\n      padding: ${2*e.gridUnit}px 0;\n    }\n\n    .deselect-all, .tag-btn {\n      color: ${e.colors.primary.base};\n      margin-left: ${4*e.gridUnit}px;\n    }\n\n    .divider {\n      margin: ${2*-e.gridUnit}px 0 ${2*-e.gridUnit}px ${4*e.gridUnit}px;\n      width: 1px;\n      height: ${8*e.gridUnit}px;\n      box-shadow: inset -1px 0px 0px ${e.colors.grayscale.light2};\n      display: inline-flex;\n      vertical-align: middle;\n      position: relative;\n    }\n\n    .ant-alert-close-icon {\n      margin-top: ${1.5*e.gridUnit}px;\n    }\n  `}
`,ne={Cell:({row:e})=>(0,x.Y)(g.A,(0,l.A)({},e.getToggleRowSelectedProps(),{id:e.id})),Header:({getToggleAllRowsSelectedProps:e})=>(0,x.Y)(g.A,(0,l.A)({},e(),{id:"header-toggle-all"})),id:"selection",size:"sm"},ie=r.A.div`
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
`,se=r.A.div`
  padding: ${({theme:e})=>40*e.gridUnit}px 0;

  &.table {
    background: ${({theme:e})=>e.colors.grayscale.light5};
  }
`,de=({mode:e,setMode:t})=>(0,x.Y)(ie,null,(0,x.Y)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("card")},className:d()("toggle-button",{active:"card"===e})},(0,x.Y)(u.A.CardView,null)),(0,x.Y)("div",{role:"button",tabIndex:0,onClick:e=>{e.currentTarget.blur(),t("table")},className:d()("toggle-button",{active:"table"===e})},(0,x.Y)(u.A.ListView,null))),ce=function({columns:e,data:t,count:a,pageSize:r,fetchData:i,refreshData:s,loading:d,initialSort:u=[],className:g="",filters:m=[],bulkActions:f=[],bulkSelectEnabled:b=!1,disableBulkSelect:v=(()=>{}),renderBulkSelectCopy:y=(e=>(0,o.t)("%s Selected",e.length)),renderCard:w,showThumbnails:A,cardSortSelectOptions:Y,defaultViewMode:k="card",highlightRowId:$,emptyState:T,columnsForWrapText:I,enableBulkTag:U=!1,bulkTagResourceName:E,addSuccessToast:M,addDangerToast:H}){const{getTableProps:V,getTableBodyProps:z,headerGroups:O,rows:j,prepareRow:L,pageCount:q=1,gotoPage:W,applyFilterValue:G,setSortBy:Q,selectedFlatRows:X,toggleAllRowsSelected:J,setViewMode:K,state:{pageIndex:Z,pageSize:te,internalFilters:ie,sortBy:ce,viewMode:ue},query:ge}=function({fetchData:e,columns:t,data:a,count:l,initialPageSize:r,initialFilters:o=[],initialSort:i=[],bulkSelectMode:s=!1,bulkSelectColumnConfig:d,renderCard:c=!1,defaultViewMode:u="card"}){const[g,p]=(0,R.sq)({filters:B,pageIndex:R.hc,sortColumn:R.fr,sortOrder:R.fr,viewMode:R.fr}),h=(0,n.useMemo)((()=>g.sortColumn&&g.sortOrder?[{id:g.sortColumn,desc:"desc"===g.sortOrder}]:i),[i,g.sortColumn,g.sortOrder]),m={filters:g.filters?D(g.filters,o):[],pageIndex:g.pageIndex||0,pageSize:r,sortBy:h},[f,b]=(0,n.useState)(g.viewMode||(c?u:"table")),v=(0,n.useMemo)((()=>{const e=t.map((e=>({...e,filter:"exact"})));return s?[d,...e]:e}),[s,t]),{getTableProps:y,getTableBodyProps:x,headerGroups:w,rows:S,prepareRow:A,canPreviousPage:Y,canNextPage:C,pageCount:k,gotoPage:$,setAllFilters:T,setSortBy:I,selectedFlatRows:U,toggleAllRowsSelected:P,state:{pageIndex:E,pageSize:M,sortBy:H,filters:V}}=(0,F.useTable)({columns:v,count:l,data:a,disableFilters:!0,disableSortRemove:!0,initialState:m,manualFilters:!0,manualPagination:!0,manualSortBy:!0,autoResetFilters:!1,pageCount:Math.ceil(l/r)},F.useFilters,F.useSortBy,F.usePagination,F.useRowState,F.useRowSelect),[z,O]=(0,n.useState)(g.filters&&o.length?N(o,g.filters):[]);return(0,n.useEffect)((()=>{o.length&&O(N(o,g.filters?g.filters:{}))}),[o]),(0,n.useEffect)((()=>{const t={};z.forEach((e=>{if(void 0!==e.value&&("string"!=typeof e.value||e.value.length>0)){const a=e.urlDisplay||e.id;t[a]=e.value}}));const a={filters:Object.keys(t).length?t:void 0,pageIndex:E};H[0]&&(a.sortColumn=H[0].id,a.sortOrder=H[0].desc?"desc":"asc"),c&&(a.viewMode=f);const l=void 0!==g.pageIndex&&a.pageIndex!==g.pageIndex?"push":"replace";p(a,l),e({pageIndex:E,pageSize:M,sortBy:H,filters:V})}),[e,E,M,H,V]),(0,n.useEffect)((()=>{_()(m.pageIndex,E)||$(m.pageIndex)}),[g]),{canNextPage:C,canPreviousPage:Y,getTableBodyProps:x,getTableProps:y,gotoPage:$,headerGroups:w,pageCount:k,prepareRow:A,rows:S,selectedFlatRows:U,setAllFilters:T,setSortBy:I,state:{pageIndex:E,pageSize:M,sortBy:H,filters:V,internalFilters:z,viewMode:f},toggleAllRowsSelected:P,applyFilterValue:(e,t)=>{O((a=>{if(a[e].value===t)return a;const l={...a[e],value:t},r=function(e,t,a){const l=e.find(((e,a)=>t===a));return[...e.slice(0,t),{...l,...a},...e.slice(t+1)]}(a,e,l);return T(r.filter((e=>!(void 0===e.value||Array.isArray(e.value)&&!e.value.length))).map((({value:e,operator:t,id:a})=>"between"===t&&Array.isArray(e)?[{value:e[0],operator:"gt",id:a},{value:e[1],operator:"lt",id:a}]:{value:e,operator:t,id:a})).flat()),$(0),r}))},setViewMode:b,query:g}}({bulkSelectColumnConfig:ne,bulkSelectMode:b&&Boolean(f.length),columns:e,count:a,data:t,fetchData:i,initialPageSize:r,initialSort:u,initialFilters:m,renderCard:Boolean(w),defaultViewMode:k}),pe=E&&U,he=Boolean(m.length);if(he){const t=e.reduce(((e,t)=>({...e,[t.id||t.accessor]:!0})),{});m.forEach((e=>{if(!t[e.id])throw new P(`Invalid filter config, ${e.id} is not present in columns`)}))}const me=(0,n.useRef)(null),fe=(0,n.useCallback)((()=>{var e;ge.filters&&(null==(e=me.current)||e.clearFilters())}),[ge.filters]),be=Boolean(w),[ve,ye]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{b||J(!1)}),[b,J]),(0,n.useEffect)((()=>{!d&&Z>q-1&&q>0&&W(0)}),[W,d,q,Z]),(0,x.Y)(re,null,pe&&(0,x.Y)(S,{show:ve,selected:X,refreshData:s,resourceName:E,addSuccessToast:M,addDangerToast:H,onHide:()=>ye(!1)}),(0,x.Y)("div",{"data-test":g,className:`superset-list-view ${g}`},(0,x.Y)("div",{className:"header"},be&&(0,x.Y)(de,{mode:ue,setMode:K}),(0,x.Y)("div",{className:"controls"},he&&(0,x.Y)(ee,{ref:me,filters:m,internalFilters:ie,updateFilterValue:G}),"card"===ue&&Y&&(0,x.Y)(ae,{initialSort:ce,onChange:e=>Q(e),options:Y}))),(0,x.Y)("div",{className:"body "+(0===j.length?"empty":"")},b&&(0,x.Y)(oe,{"data-test":"bulk-select-controls",type:"info",closable:!0,showIcon:!1,onClose:v,message:(0,x.Y)(n.Fragment,null,(0,x.Y)("div",{className:"selectedCopy","data-test":"bulk-select-copy"},y(X)),Boolean(X.length)&&(0,x.Y)(n.Fragment,null,(0,x.Y)("span",{"data-test":"bulk-select-deselect-all",role:"button",tabIndex:0,className:"deselect-all",onClick:()=>J(!1)},(0,o.t)("Deselect all")),(0,x.Y)("div",{className:"divider"}),f.map((e=>(0,x.Y)(c.A,{"data-test":"bulk-select-action",key:e.key,buttonStyle:e.type,cta:!0,onClick:()=>e.onSelect(X.map((e=>e.original)))},e.name))),U&&(0,x.Y)("span",{"data-test":"bulk-select-tag-btn",role:"button",tabIndex:0,className:"tag-btn",onClick:()=>ye(!0)},(0,o.t)("Add Tag"))))}),"card"===ue&&(0,x.Y)(C,{bulkSelectEnabled:b,prepareRow:L,renderCard:w,rows:j,loading:d,showThumbnails:A}),"table"===ue&&(0,x.Y)(h.A,{getTableProps:V,getTableBodyProps:z,prepareRow:L,headerGroups:O,rows:j,columns:e,loading:d,highlightRowId:$,columnsForWrapText:I}),!d&&0===j.length&&(0,x.Y)(se,{className:ue},ge.filters?(0,x.Y)(le.nw,{title:(0,o.t)("No results match your filter criteria"),description:(0,o.t)("Try different criteria to display results."),image:"filter-results.svg",buttonAction:()=>fe(),buttonText:(0,o.t)("clear all filters")}):(0,x.Y)(le.nw,(0,l.A)({},T,{title:(null==T?void 0:T.title)||(0,o.t)("No Data"),image:(null==T?void 0:T.image)||"filter-results.svg"}))))),j.length>0&&(0,x.Y)("div",{className:"pagination-container"},(0,x.Y)(p.A,{totalPages:q||0,currentPage:q&&Z<q?Z+1:0,onChange:e=>W(e-1),hideFirstAndLastPageLinks:!0}),(0,x.Y)("div",{className:"row-count-container"},!d&&(0,o.t)("%s-%s of %s",te*Z+(j.length&&1),te*Z+j.length,a))))};var ue;!function(e){e.StartsWith="sw",e.EndsWith="ew",e.Contains="ct",e.Equals="eq",e.NotStartsWith="nsw",e.NotEndsWith="new",e.NotContains="nct",e.NotEquals="neq",e.GreaterThan="gt",e.LessThan="lt",e.RelationManyMany="rel_m_m",e.RelationOneMany="rel_o_m",e.TitleOrSlug="title_or_slug",e.NameOrDescription="name_or_description",e.AllText="all_text",e.ChartAllText="chart_all_text",e.DatasetIsNullOrEmpty="dataset_is_null_or_empty",e.Between="between",e.DashboardIsFav="dashboard_is_favorite",e.ChartIsFav="chart_is_favorite",e.ChartIsCertified="chart_is_certified",e.DashboardIsCertified="dashboard_is_certified",e.DatasetIsCertified="dataset_is_certified",e.DashboardHasCreatedBy="dashboard_has_created_by",e.ChartHasCreatedBy="chart_has_created_by",e.DashboardTags="dashboard_tags",e.ChartTags="chart_tags",e.SavedQueryTags="saved_query_tags"}(ue||(ue={}))}}]);
//# sourceMappingURL=b722f253da154de22bbe.chunk.js.map