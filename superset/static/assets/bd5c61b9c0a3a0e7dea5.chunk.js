"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1757],{87196:(n,e,t)=>{t.d(e,{Ek:()=>k,nw:()=>Y,u7:()=>v,uq:()=>$}),t(96540);var i,l=t(90017),a=t(17437),o=t(95579),r=t(15595),s=t(46920);!function(n){n[n.Small=0]="Small",n[n.Medium=1]="Medium",n[n.Big=2]="Big"}(i||(i={}));const d=l.A.div`
  ${({theme:n})=>a.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: ${4*n.gridUnit}px;
    text-align: center;

    & .ant-empty-image svg {
      width: auto;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${n.colors.grayscale.base};
      }
    }
  `}
`,c=l.A.div``,p=l.A.p`
  ${({theme:n})=>a.AH`
    font-size: ${n.typography.sizes.m}px;
    color: ${n.colors.grayscale.light1};
    margin: ${2*n.gridUnit}px 0 0 0;
    font-weight: ${n.typography.weights.bold};
  `}
`,g=(0,l.A)(p)`
  ${({theme:n})=>a.AH`
    font-size: ${n.typography.sizes.l}px;
    color: ${n.colors.grayscale.light1};
    margin-top: ${4*n.gridUnit}px;
  `}
`,h=l.A.p`
  ${({theme:n})=>a.AH`
    font-size: ${n.typography.sizes.s}px;
    color: ${n.colors.grayscale.light1};
    margin: ${2*n.gridUnit}px 0 0 0;
  `}
`,u=(0,l.A)(h)`
  ${({theme:n})=>a.AH`
    font-size: ${n.typography.sizes.m}px;
  `}
`,m=(0,l.A)(h)`
  ${({theme:n})=>a.AH`
    margin-top: ${n.gridUnit}px;
    line-height: 1.2;
  `}
`,b=(0,l.A)(s.A)`
  ${({theme:n})=>a.AH`
    margin-top: ${4*n.gridUnit}px;
    z-index: 1;
  `}
`,x=n=>"string"==typeof n?`/static/assets/images/${n}`:n,A=n=>{switch(n){case i.Small:return{height:"50px"};case i.Medium:return{height:"80px"};case i.Big:return{height:"150px"};default:return{height:"50px"}}},y=({image:n,size:e})=>(0,a.Y)(r.Sv,{description:!1,image:x(n),imageStyle:A(e)}),w=n=>{n.preventDefault(),n.stopPropagation()},Y=({title:n,image:e,description:t,buttonAction:l,buttonText:o,className:r})=>(0,a.Y)(d,{className:r},e&&(0,a.Y)(y,{image:e,size:i.Big}),(0,a.Y)(c,{css:n=>a.AH`
        max-width: ${150*n.gridUnit}px;
      `},(0,a.Y)(g,null,n),t&&(0,a.Y)(u,null,t),l&&o&&(0,a.Y)(b,{buttonStyle:"primary",onClick:l,onMouseDown:w},o))),$=({title:n,image:e,description:t,buttonAction:l,buttonText:o})=>(0,a.Y)(d,null,e&&(0,a.Y)(y,{image:e,size:i.Medium}),(0,a.Y)(c,{css:n=>a.AH`
        max-width: ${100*n.gridUnit}px;
      `},(0,a.Y)(p,null,n),t&&(0,a.Y)(h,null,t),o&&l&&(0,a.Y)(b,{buttonStyle:"primary",onClick:l,onMouseDown:w},o))),v=({title:n,image:e,description:t})=>(0,a.Y)(d,null,e&&(0,a.Y)(y,{image:e,size:i.Small}),(0,a.Y)(c,{css:n=>a.AH`
        max-width: ${75*n.gridUnit}px;
      `},(0,a.Y)(p,null,n),t&&(0,a.Y)(m,null,t))),f={NO_DATABASES_MATCH_TITLE:(0,o.t)("No databases match your search"),NO_DATABASES_AVAILABLE_TITLE:(0,o.t)("There are no databases available"),MANAGE_YOUR_DATABASES_TEXT:(0,o.t)("Manage your databases"),HERE_TEXT:(0,o.t)("here")},k=n=>(0,a.Y)(v,{image:"empty.svg",title:n?f.NO_DATABASES_MATCH_TITLE:f.NO_DATABASES_AVAILABLE_TITLE,description:(0,a.Y)("p",null,f.MANAGE_YOUR_DATABASES_TEXT," ",(0,a.Y)("a",{href:"/databaseview/list"},f.HERE_TEXT))})},47251:(n,e,t)=>{t.d(e,{A:()=>p}),t(96540);var i=t(90017),l=t(46942),a=t.n(l),o=t(17437);const r=i.A.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${({theme:n})=>n.colors.grayscale.light5};
      border-radius: ${({theme:n})=>n.borderRadius}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${({theme:n})=>n.colors.grayscale.dark1};
        background-color: ${({theme:n})=>n.colors.grayscale.light3};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${({theme:n})=>n.colors.grayscale.light5};
        cursor: default;
        background-color: ${({theme:n})=>n.colors.primary.base};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;function s({children:n}){return(0,o.Y)(r,{role:"navigation"},n)}s.Next=function({disabled:n,onClick:e}){return(0,o.Y)("li",{className:a()({disabled:n})},(0,o.Y)("span",{role:"button",tabIndex:n?-1:0,onClick:t=>{t.preventDefault(),n||e(t)}},"»"))},s.Prev=function({disabled:n,onClick:e}){return(0,o.Y)("li",{className:a()({disabled:n})},(0,o.Y)("span",{role:"button",tabIndex:n?-1:0,onClick:t=>{t.preventDefault(),n||e(t)}},"«"))},s.Item=function({active:n,children:e,onClick:t}){return(0,o.Y)("li",{className:a()({active:n})},(0,o.Y)("span",{role:"button",tabIndex:n?-1:0,onClick:e=>{e.preventDefault(),n||t(e)}},e))},s.Ellipsis=function({disabled:n,onClick:e}){return(0,o.Y)("li",{className:a()({disabled:n})},(0,o.Y)("span",{role:"button",tabIndex:n?-1:0,onClick:t=>{t.preventDefault(),n||e(t)}},"…"))};const d=s;var c=t(18575);const p=(0,c.uv)({WrapperComponent:d,itemTypeToComponent:{[c.w$.PAGE]:({value:n,isActive:e,onClick:t})=>(0,o.Y)(d.Item,{active:e,onClick:t},n),[c.w$.ELLIPSIS]:({isActive:n,onClick:e})=>(0,o.Y)(d.Ellipsis,{disabled:n,onClick:e}),[c.w$.PREVIOUS_PAGE_LINK]:({isActive:n,onClick:e})=>(0,o.Y)(d.Prev,{disabled:n,onClick:e}),[c.w$.NEXT_PAGE_LINK]:({isActive:n,onClick:e})=>(0,o.Y)(d.Next,{disabled:n,onClick:e}),[c.w$.FIRST_PAGE_LINK]:()=>null,[c.w$.LAST_PAGE_LINK]:()=>null}})},73204:(n,e,t)=>{t.d(e,{A:()=>p});var i=t(97032),l=t(96540),a=t(46942),o=t.n(a),r=t(90017),s=t(12249),d=t(17437);const c=r.A.table`
  ${({theme:n})=>`\n    background-color: ${n.colors.grayscale.light5};\n    border-collapse: separate;\n    border-radius: ${n.borderRadius}px;\n\n    thead > tr > th {\n      border: 0;\n    }\n\n    tbody {\n      tr:first-of-type > td {\n        border-top: 0;\n      }\n    }\n    th {\n      background: ${n.colors.grayscale.light5};\n      position: sticky;\n      top: 0;\n\n      &:first-of-type {\n        padding-left: ${4*n.gridUnit}px;\n      }\n\n      &.xs {\n        min-width: 25px;\n      }\n      &.sm {\n        min-width: 50px;\n      }\n      &.md {\n        min-width: 75px;\n      }\n      &.lg {\n        min-width: 100px;\n      }\n      &.xl {\n        min-width: 150px;\n      }\n      &.xxl {\n        min-width: 200px;\n      }\n\n      span {\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        line-height: 2;\n      }\n\n      svg {\n        display: inline-block;\n        position: relative;\n      }\n    }\n\n    td {\n      &.xs {\n        width: 25px;\n      }\n      &.sm {\n        width: 50px;\n      }\n      &.md {\n        width: 75px;\n      }\n      &.lg {\n        width: 100px;\n      }\n      &.xl {\n        width: 150px;\n      }\n      &.xxl {\n        width: 200px;\n      }\n    }\n\n    .table-cell-loader {\n      position: relative;\n\n      .loading-bar {\n        background-color: ${n.colors.secondary.light4};\n        border-radius: 7px;\n\n        span {\n          visibility: hidden;\n        }\n      }\n\n      .empty-loading-bar {\n        display: inline-block;\n        width: 100%;\n        height: 1.2em;\n      }\n    }\n\n    .actions {\n      white-space: nowrap;\n      min-width: 100px;\n\n      svg,\n      i {\n        margin-right: 8px;\n\n        &:hover {\n          path {\n            fill: ${n.colors.primary.base};\n          }\n        }\n      }\n    }\n\n    .table-row {\n      .actions {\n        opacity: 0;\n        font-size: ${n.typography.sizes.xl}px;\n        display: flex;\n      }\n\n      &:hover {\n        background-color: ${n.colors.secondary.light5};\n\n        .actions {\n          opacity: 1;\n          transition: opacity ease-in ${n.transitionTiming}s;\n        }\n      }\n    }\n\n    .table-row-selected {\n      background-color: ${n.colors.secondary.light4};\n\n      &:hover {\n        background-color: ${n.colors.secondary.light4};\n      }\n    }\n\n    .table-cell {\n      font-feature-settings: 'tnum' 1;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 320px;\n      line-height: 1;\n      vertical-align: middle;\n      &:first-of-type {\n        padding-left: ${4*n.gridUnit}px;\n      }\n      &__wrap {\n        white-space: normal;\n      }\n      &__nowrap {\n        white-space: nowrap;\n      }\n    }\n\n    @keyframes loading-shimmer {\n      40% {\n        background-position: 100% 0;\n      }\n\n      100% {\n        background-position: 100% 0;\n      }\n    }\n  `}
`;c.displayName="table";const p=l.memo((({getTableProps:n,getTableBodyProps:e,prepareRow:t,headerGroups:l,columns:a,rows:r,loading:p,highlightRowId:g,columnsForWrapText:h})=>(0,d.Y)(c,(0,i.A)({},n(),{className:"table table-hover","data-test":"listview-table"}),(0,d.Y)("thead",null,l.map((n=>(0,d.Y)("tr",n.getHeaderGroupProps(),n.headers.map((n=>{let e=(0,d.Y)(s.A.Sort,null);return n.isSorted&&n.isSortedDesc?e=(0,d.Y)(s.A.SortDesc,null):n.isSorted&&!n.isSortedDesc&&(e=(0,d.Y)(s.A.SortAsc,null)),n.hidden?null:(0,d.Y)("th",(0,i.A)({},n.getHeaderProps(n.canSort?n.getSortByToggleProps():{}),{"data-test":"sort-header",className:o()({[n.size||""]:n.size})}),(0,d.Y)("span",null,n.render("Header"),n.canSort&&e))})))))),(0,d.Y)("tbody",e(),p&&0===r.length&&[...new Array(12)].map(((n,e)=>(0,d.Y)("tr",{key:e},a.map(((n,e)=>n.hidden?null:(0,d.Y)("td",{key:e,className:o()("table-cell",{"table-cell-loader":p})},(0,d.Y)("span",{className:"loading-bar empty-loading-bar",role:"progressbar","aria-label":"loading"}))))))),r.length>0&&r.map((n=>{t(n);const e=n.original.id;return(0,d.Y)("tr",(0,i.A)({"data-test":"table-row"},n.getRowProps(),{className:o()("table-row",{"table-row-selected":n.isSelected||void 0!==e&&e===g})}),n.cells.map((n=>{if(n.column.hidden)return null;const e=n.column.cellProps||{},t=null==h?void 0:h.includes(n.column.Header);return(0,d.Y)("td",(0,i.A)({"data-test":"table-row-cell",className:o()("table-cell table-cell__"+(t?"wrap":"nowrap"),{"table-cell-loader":p,[n.column.size||""]:n.column.size})},n.getCellProps(),e),(0,d.Y)("span",{className:o()({"loading-bar":p}),role:p?"progressbar":void 0},(0,d.Y)("span",{"data-test":"cell-text"},n.render("Cell"))))})))}))))))}}]);
//# sourceMappingURL=bd5c61b9c0a3a0e7dea5.chunk.js.map