"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3284],{13284:(e,t,i)=>{i.d(t,{UB:()=>_,ZP:()=>Y});var a,n=i(73126),l=i(67294),r=i(69386),o=i(94184),s=i.n(o),d=i(61988),c=i(42968),p=i(11965),g=i(51995),m=i(16355),u=i(4715),h=i(58593),b=i(9875),x=i(37921),y=i(14278),v=i(13322),f=i(1510),$=i(64239);!function(e){e.AllCharts="ALL_CHARTS",e.Category="CATEGORY",e.Tags="TAGS",e.RecommendedTags="RECOMMENDED_TAGS"}(a||(a={}));const Z=["line","big_number","big_number_total","table","pivot_table_v2","echarts_timeseries_line","echarts_area","echarts_timeseries_bar","echarts_timeseries_scatter","pie","mixed_timeseries","dist_bar","area","bar","deck_polygon","time_table","histogram","deck_scatter","deck_hex","time_pivot","deck_arc","heatmap","deck_grid","deck_screengrid","treemap_v2","box_plot","sankey","word_cloud","mapbox","kepler","cal_heatmap","rose","bubble","bubble_v2","deck_geojson","horizon","deck_multi","compare","partition","event_flow","deck_path","graph_chart","world_map","paired_ttest","para","country_map"],k=new Set(Z),_=1090,w=(0,d.t)("Other"),U=(0,d.t)("All charts"),C=[(0,d.t)("Popular"),(0,d.t)("ECharts"),(0,d.t)("Advanced-Analytics")],z="viz-type-control",S=c.Z.div`
  ${({isSelectedVizMetadata:e})=>`\n    display: grid;\n    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};\n    // em is used here because the sidebar should be sized to fit the longest standard tag\n    grid-template-columns: minmax(14em, auto) 5fr;\n    grid-template-areas:\n      'sidebar search'\n      'sidebar main'\n      'details details';\n    height: 70vh;\n    overflow: auto;\n  `}
`,T=c.Z.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  line-height: ${({theme:e})=>6*e.gridUnit}px;
`,M=c.Z.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.typography.sizes.s}px;
      color: ${({theme:e})=>e.colors.grayscale.base};
      padding-left: ${({theme:e})=>2*e.gridUnit}px;
      padding-bottom: ${({theme:e})=>e.gridUnit}px;
    }
    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,A=c.Z.div`
  grid-area: main;
  overflow-y: auto;
`,E=c.Z.div`
  ${({theme:e})=>`\n    grid-area: search;\n    margin-top: ${3*e.gridUnit}px;\n    margin-bottom: ${e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n    margin-right: ${3*e.gridUnit}px;\n    .ant-input-affix-wrapper {\n      padding-left: ${2*e.gridUnit}px;\n    }\n  `}
`,O=c.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,R=c.Z.button`
  ${({theme:e})=>`\n    all: unset; // remove default button styles\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin: ${e.gridUnit}px 0;\n    padding: 0 ${e.gridUnit}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 2em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n\n    &:focus {\n      outline: initial;\n    }\n\n    &.selected {\n      background-color: ${e.colors.primary.base};\n      color: ${e.colors.primary.light5};\n\n      svg {\n        color: ${e.colors.primary.light5};\n      }\n\n      &:hover {\n        .cancel {\n          visibility: visible;\n        }\n      }\n    }\n\n    & span:first-of-type svg {\n      margin-top: ${1.5*e.gridUnit}px;\n    }\n\n    .cancel {\n      visibility: hidden;\n    }\n  `}
`,N=c.Z.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.gridUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.gridUnit}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({theme:e})=>2*e.gridUnit}px;
`,j=e=>p.iv`
  grid-area: details;
  border-top: 1px solid ${e.colors.grayscale.light2};
`,I=e=>p.iv`
  padding: ${4*e.gridUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`,V=c.Z.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.gridUnit}px;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,D=c.Z.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  margin: 0;
`,G=c.Z.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.gridUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }
`,H=e=>p.iv`
  cursor: pointer;
  width: ${24*e.gridUnit}px;
  position: relative;

  img {
    min-width: ${24*e.gridUnit}px;
    min-height: ${24*e.gridUnit}px;
    border: 1px solid ${e.colors.grayscale.light2};
    border-radius: ${e.gridUnit}px;
    transition: border-color ${e.transitionTiming};
  }

  &.selected img {
    border: 2px solid ${e.colors.primary.light2};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${e.colors.grayscale.light1};
  }

  .viztype-label {
    margin-top: ${2*e.gridUnit}px;
    text-align: center;
  }
`,L=c.Z.div`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.primary.dark1};\n    box-sizing: border-box;\n    border-radius: ${e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    line-height: ${2.5*e.gridUnit}px;\n    color: ${e.colors.primary.dark1};\n    font-size: ${e.typography.sizes.s}px;\n    font-weight: ${e.typography.weights.bold};\n    text-align: center;\n    padding: ${.5*e.gridUnit}px ${e.gridUnit}px;\n    text-transform: uppercase;\n    cursor: pointer;\n\n    div {\n      transform: scale(0.83,0.83);\n    }\n  `}
`,P=c.Z.div`
  position: absolute;
  right: ${({theme:e})=>e.gridUnit}px;
  top: ${({theme:e})=>19*e.gridUnit}px;
`,B=c.Z.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`;function F(e){return k.has(e.key)?Z.indexOf(e.key):Z.length}const X=({entry:e,selectedViz:t,setSelectedViz:i,onDoubleClick:a})=>{const n=(0,g.Fg)(),{key:l,value:r}=e,o=t===e.key;return(0,p.tZ)("div",{role:"button",css:H(n),tabIndex:0,className:o?"selected":"",onClick:()=>i(l),onDoubleClick:a,"data-test":"viztype-selector-container"},(0,p.tZ)("img",{alt:r.name,width:"100%",className:"viztype-selector "+(o?"selected":""),src:r.thumbnail}),(0,p.tZ)("div",{className:"viztype-label","data-test":`${z}__viztype-label`},r.name),r.label&&(0,p.tZ)(P,null,(0,p.tZ)(L,null,(0,p.tZ)("div",null,(0,d.t)(r.label)))))},q=({vizEntries:e,...t})=>(0,p.tZ)(N,{"data-test":`${z}__viz-row`},e.map((e=>(0,p.tZ)(X,(0,n.Z)({key:e.key},t,{entry:e}))))),K=({selector:e,sectionId:t,icon:i,isSelected:a,onClick:n,className:r})=>{const o=(0,l.useRef)(null);return(0,l.useEffect)((()=>{a&&queueMicrotask((()=>(0,$.default)(o.current,{behavior:"smooth",scrollMode:"if-needed"})))}),[]),(0,p.tZ)(R,{ref:o,key:e,name:e,className:s()(r,a&&"selected"),onClick:()=>n(e,t)},i,e)},W=(e,t)=>t===e.category||t===w&&null==e.category||(e.tags||[]).indexOf(t)>-1;function Y(e){var t,i;const{selectedViz:n,onChange:o,onDoubleClick:s,className:c}=e,{mountedPluginMetadata:g}=(0,y.gp)(),$=(0,l.useRef)(),[Z,k]=(0,l.useState)(""),[_,R]=(0,l.useState)(!0),N=_&&!!Z,H=n?g[n]:null,P=(0,l.useMemo)((()=>{const t=Object.entries(g).map((([e,t])=>({key:e,value:t}))).filter((({key:t})=>!e.denyList.includes(t))).filter((({value:e})=>(0,f.X3)(e.behaviors||[])&&!e.deprecated));return t.sort(((e,t)=>F(e)-F(t))),t}),[g]),X=(0,l.useMemo)((()=>{const e={};return P.forEach((t=>{const i=t.value.category||w;e[i]||(e[i]=[]),e[i].push(t)})),e}),[P]),Y=(0,l.useMemo)((()=>Object.keys(X).sort(((e,t)=>e===w?1:t===w?-1:e.localeCompare(t)))),[X]),J=(0,l.useMemo)((()=>{const e={};return P.forEach((t=>{(t.value.tags||[]).forEach((i=>{e[i]||(e[i]=[]),e[i].push(t)}))})),e}),[P]),Q=(0,l.useMemo)((()=>Object.keys(J).sort(((e,t)=>e.localeCompare(t))).filter((e=>-1===C.indexOf(e)))),[J]),ee=(0,l.useMemo)((()=>P.sort(((e,t)=>e.key.localeCompare(t.key)))),[P]),[te,ie]=(0,l.useState)((()=>(null==H?void 0:H.category)||C[0])),[ae,ne]=(0,l.useState)((()=>null!=H&&H.category?a.Category:a.RecommendedTags)),le=(0,l.useMemo)((()=>new r.Z(P,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]})),[P]),re=(0,l.useMemo)((()=>""===Z.trim()?[]:le.search(Z).map((e=>e.item)).sort(((e,t)=>{var i,a;const n=null==(i=e.value)?void 0:i.label,l=null==(a=t.value)?void 0:a.label,r=n&&m.eH[n]?m.eH[n].weight:0;return(l&&m.eH[l]?m.eH[l].weight:0)-r}))),[Z,le]),oe=(0,l.useCallback)((()=>{R(!0)}),[]),se=(0,l.useCallback)((e=>k(e.target.value)),[]),de=(0,l.useCallback)((()=>{R(!1),k(""),$.current.blur()}),[]),ce=(0,l.useCallback)(((e,t)=>{_&&de(),ie(e),ne(t);const i=H&&W(H,e);e===te||i||o(null)}),[de,_,te,H,o]),pe=(0,l.useMemo)((()=>({[a.RecommendedTags]:{title:(0,d.t)("Recommended tags"),icon:(0,p.tZ)(v.Z.Tags,null),selectors:C},[a.Category]:{title:(0,d.t)("Category"),icon:(0,p.tZ)(v.Z.Category,null),selectors:Y},[a.Tags]:{title:(0,d.t)("Tags"),icon:(0,p.tZ)(v.Z.Tags,null),selectors:Q}})),[Y,Q]);return(0,p.tZ)(S,{className:c,isSelectedVizMetadata:Boolean(H)},(0,p.tZ)(M,null,(0,p.tZ)(K,{css:({gridUnit:e})=>p.iv`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:a.AllCharts,selector:U,icon:(0,p.tZ)(v.Z.Ballot,null),isSelected:!N&&U===te&&a.AllCharts===ae,onClick:ce}),(0,p.tZ)(u.Ol,{expandIconPosition:"right",ghost:!0,defaultActiveKey:Object.keys(pe)},Object.keys(pe).map((e=>{const t=pe[e];return(0,p.tZ)(u.Ol.Panel,{header:(0,p.tZ)("span",{className:"header"},t.title),key:e},t.selectors.map((i=>(0,p.tZ)(K,{key:i,selector:i,sectionId:e,icon:t.icon,isSelected:!N&&i===te&&e===ae,onClick:ce}))))})))),(0,p.tZ)(E,null,(0,p.tZ)(b.II,{type:"text",ref:$,value:Z,placeholder:(0,d.t)("Search all charts"),onChange:se,onFocus:oe,"data-test":`${z}__search-input`,prefix:(0,p.tZ)(O,null,(0,p.tZ)(v.Z.Search,{iconSize:"m"})),suffix:(0,p.tZ)(O,null,Z&&(0,p.tZ)(v.Z.XLarge,{iconSize:"m",onClick:de}))})),(0,p.tZ)(A,null,(0,p.tZ)(q,{vizEntries:N?re:te===U&&ae===a.AllCharts?ee:ae===a.Category&&X[te]?X[te]:ae!==a.Tags&&ae!==a.RecommendedTags||!J[te]?[]:J[te],selectedViz:n,setSelectedViz:o,onDoubleClick:s})),H?(0,p.tZ)("div",{css:e=>[j(e),I(e)]},(0,p.tZ)(l.Fragment,null,(0,p.tZ)(T,{css:p.iv`
                grid-area: viz-name;
                position: relative;
              `},null==H?void 0:H.name,(null==H?void 0:H.label)&&(0,p.tZ)(h.u,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=H.labelExplanation)?t:m.t$[H.label]},(0,p.tZ)(B,null,(0,p.tZ)(L,null,(0,p.tZ)("div",null,(0,d.t)(H.label)))))),(0,p.tZ)(V,null,null==H?void 0:H.tags.map((e=>(0,p.tZ)(x.Z,{key:e},e)))),(0,p.tZ)(D,null,(null==H?void 0:H.description)||(0,d.t)("No description available.")),(0,p.tZ)(T,{css:p.iv`
                grid-area: examples-header;
              `},(0,d.t)("Examples")),(0,p.tZ)(G,null,(null!=H&&null!=(i=H.exampleGallery)&&i.length?H.exampleGallery:[{url:null==H?void 0:H.thumbnail,caption:null==H?void 0:H.name}]).map((e=>(0,p.tZ)("img",{key:e.url,src:e.url,alt:e.caption,title:e.caption})))))):null)}}}]);
//# sourceMappingURL=9e3e394af47beafbe68a.chunk.js.map