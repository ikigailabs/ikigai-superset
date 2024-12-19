"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2416],{32416:(e,t,i)=>{i.d(t,{Ay:()=>X,rE:()=>_});var a,n=i(97032),l=i(96540),r=i(25929),o=i(46942),s=i.n(o),d=i(95579),c=i(90017),p=i(17437),g=i(96453),m=i(58863),u=i(15595),h=i(19129),b=i(90868),x=i(2738),y=i(36053),v=i(12249),f=i(25062),$=i(13840);!function(e){e.AllCharts="ALL_CHARTS",e.Category="CATEGORY",e.Tags="TAGS",e.RecommendedTags="RECOMMENDED_TAGS"}(a||(a={}));const k=["line","big_number","big_number_total","table","pivot_table_v2","echarts_timeseries_line","echarts_area","echarts_timeseries_bar","echarts_timeseries_scatter","pie","mixed_timeseries","dist_bar","area","bar","deck_polygon","time_table","histogram","deck_scatter","deck_hex","time_pivot","deck_arc","heatmap","deck_grid","deck_screengrid","treemap_v2","box_plot","sankey","word_cloud","mapbox","kepler","cal_heatmap","rose","bubble","bubble_v2","deck_geojson","horizon","deck_multi","compare","partition","event_flow","deck_path","graph_chart","world_map","paired_ttest","para","country_map"],A=new Set(k),_=1090,Y=(0,d.t)("Other"),w=(0,d.t)("All charts"),U=[(0,d.t)("Popular"),(0,d.t)("ECharts"),(0,d.t)("Advanced-Analytics")],C="viz-type-control",z=c.A.div`
  ${({isSelectedVizMetadata:e})=>`\n    display: grid;\n    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};\n    // em is used here because the sidebar should be sized to fit the longest standard tag\n    grid-template-columns: minmax(14em, auto) 5fr;\n    grid-template-areas:\n      'sidebar search'\n      'sidebar main'\n      'details details';\n    height: 70vh;\n    overflow: auto;\n  `}
`,S=c.A.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  line-height: ${({theme:e})=>6*e.gridUnit}px;
`,T=c.A.div`
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
`,M=c.A.div`
  grid-area: main;
  overflow-y: auto;
`,E=c.A.div`
  ${({theme:e})=>`\n    grid-area: search;\n    margin-top: ${3*e.gridUnit}px;\n    margin-bottom: ${e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n    margin-right: ${3*e.gridUnit}px;\n    .ant-input-affix-wrapper {\n      padding-left: ${2*e.gridUnit}px;\n    }\n  `}
`,O=c.A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,R=c.A.button`
  ${({theme:e})=>`\n    all: unset; // remove default button styles\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin: ${e.gridUnit}px 0;\n    padding: 0 ${e.gridUnit}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 2em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n\n    &:focus {\n      outline: initial;\n    }\n\n    &.selected {\n      background-color: ${e.colors.primary.base};\n      color: ${e.colors.primary.light5};\n\n      svg {\n        color: ${e.colors.primary.light5};\n      }\n\n      &:hover {\n        .cancel {\n          visibility: visible;\n        }\n      }\n    }\n\n    & span:first-of-type svg {\n      margin-top: ${1.5*e.gridUnit}px;\n    }\n\n    .cancel {\n      visibility: hidden;\n    }\n  `}
`,N=c.A.div`
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
`,j=e=>p.AH`
  grid-area: details;
  border-top: 1px solid ${e.colors.grayscale.light2};
`,H=e=>p.AH`
  padding: ${4*e.gridUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`,D=c.A.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.gridUnit}px;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,V=c.A.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  margin: 0;
`,G=c.A.div`
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
`,I=e=>p.AH`
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
`,L=c.A.div`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.primary.dark1};\n    box-sizing: border-box;\n    border-radius: ${e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    line-height: ${2.5*e.gridUnit}px;\n    color: ${e.colors.primary.dark1};\n    font-size: ${e.typography.sizes.s}px;\n    font-weight: ${e.typography.weights.bold};\n    text-align: center;\n    padding: ${.5*e.gridUnit}px ${e.gridUnit}px;\n    text-transform: uppercase;\n    cursor: pointer;\n\n    div {\n      transform: scale(0.83,0.83);\n    }\n  `}
`,P=c.A.div`
  position: absolute;
  right: ${({theme:e})=>e.gridUnit}px;
  top: ${({theme:e})=>19*e.gridUnit}px;
`,B=c.A.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`;function F(e){return A.has(e.key)?k.indexOf(e.key):k.length}const q=({entry:e,selectedViz:t,setSelectedViz:i,onDoubleClick:a})=>{const n=(0,g.DP)(),{key:l,value:r}=e,o=t===e.key;return(0,p.Y)("div",{role:"button",css:I(n),tabIndex:0,className:o?"selected":"",onClick:()=>i(l),onDoubleClick:a,"data-test":"viztype-selector-container"},(0,p.Y)("img",{alt:r.name,width:"100%",className:"viztype-selector "+(o?"selected":""),src:r.thumbnail}),(0,p.Y)("div",{className:"viztype-label","data-test":`${C}__viztype-label`},r.name),r.label&&(0,p.Y)(P,null,(0,p.Y)(L,null,(0,p.Y)("div",null,(0,d.t)(r.label)))))},K=({vizEntries:e,...t})=>(0,p.Y)(N,{"data-test":`${C}__viz-row`},e.map((e=>(0,p.Y)(q,(0,n.A)({key:e.key},t,{entry:e}))))),Q=({selector:e,sectionId:t,icon:i,isSelected:a,onClick:n,className:r})=>{const o=(0,l.useRef)(null);return(0,l.useEffect)((()=>{a&&queueMicrotask((()=>(0,$.default)(o.current,{behavior:"smooth",scrollMode:"if-needed"})))}),[]),(0,p.Y)(R,{ref:o,key:e,name:e,className:s()(r,a&&"selected"),onClick:()=>n(e,t)},i,e)},W=(e,t)=>t===e.category||t===Y&&null==e.category||(e.tags||[]).indexOf(t)>-1;function X(e){var t,i;const{selectedViz:n,onChange:o,onDoubleClick:s,className:c}=e,{mountedPluginMetadata:g}=(0,y.Q)(),$=(0,l.useRef)(),[k,A]=(0,l.useState)(""),[_,R]=(0,l.useState)(!0),N=_&&!!k,I=n?g[n]:null,P=(0,l.useMemo)((()=>{const t=Object.entries(g).map((([e,t])=>({key:e,value:t}))).filter((({key:t})=>!e.denyList.includes(t))).filter((({value:e})=>(0,f.px)(e.behaviors||[])&&!e.deprecated));return t.sort(((e,t)=>F(e)-F(t))),t}),[g]),q=(0,l.useMemo)((()=>{const e={};return P.forEach((t=>{const i=t.value.category||Y;e[i]||(e[i]=[]),e[i].push(t)})),e}),[P]),X=(0,l.useMemo)((()=>Object.keys(q).sort(((e,t)=>e===Y?1:t===Y?-1:e.localeCompare(t)))),[q]),J=(0,l.useMemo)((()=>{const e={};return P.forEach((t=>{(t.value.tags||[]).forEach((i=>{e[i]||(e[i]=[]),e[i].push(t)}))})),e}),[P]),Z=(0,l.useMemo)((()=>Object.keys(J).sort(((e,t)=>e.localeCompare(t))).filter((e=>-1===U.indexOf(e)))),[J]),ee=(0,l.useMemo)((()=>P.sort(((e,t)=>e.key.localeCompare(t.key)))),[P]),[te,ie]=(0,l.useState)((()=>(null==I?void 0:I.category)||U[0])),[ae,ne]=(0,l.useState)((()=>null!=I&&I.category?a.Category:a.RecommendedTags)),le=(0,l.useMemo)((()=>new r.A(P,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]})),[P]),re=(0,l.useMemo)((()=>""===k.trim()?[]:le.search(k).map((e=>e.item)).sort(((e,t)=>{var i,a;const n=null==(i=e.value)?void 0:i.label,l=null==(a=t.value)?void 0:a.label,r=n&&m.l7[n]?m.l7[n].weight:0;return(l&&m.l7[l]?m.l7[l].weight:0)-r}))),[k,le]),oe=(0,l.useCallback)((()=>{R(!0)}),[]),se=(0,l.useCallback)((e=>A(e.target.value)),[]),de=(0,l.useCallback)((()=>{R(!1),A(""),$.current.blur()}),[]),ce=(0,l.useCallback)(((e,t)=>{_&&de(),ie(e),ne(t);const i=I&&W(I,e);e===te||i||o(null)}),[de,_,te,I,o]),pe=(0,l.useMemo)((()=>({[a.RecommendedTags]:{title:(0,d.t)("Recommended tags"),icon:(0,p.Y)(v.A.Tags,null),selectors:U},[a.Category]:{title:(0,d.t)("Category"),icon:(0,p.Y)(v.A.Category,null),selectors:X},[a.Tags]:{title:(0,d.t)("Tags"),icon:(0,p.Y)(v.A.Tags,null),selectors:Z}})),[X,Z]);return(0,p.Y)(z,{className:c,isSelectedVizMetadata:Boolean(I)},(0,p.Y)(T,null,(0,p.Y)(Q,{css:({gridUnit:e})=>p.AH`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:a.AllCharts,selector:w,icon:(0,p.Y)(v.A.Ballot,null),isSelected:!N&&w===te&&a.AllCharts===ae,onClick:ce}),(0,p.Y)(u.f5,{expandIconPosition:"right",ghost:!0,defaultActiveKey:Object.keys(pe)},Object.keys(pe).map((e=>{const t=pe[e];return(0,p.Y)(u.f5.Panel,{header:(0,p.Y)("span",{className:"header"},t.title),key:e},t.selectors.map((i=>(0,p.Y)(Q,{key:i,selector:i,sectionId:e,icon:t.icon,isSelected:!N&&i===te&&e===ae,onClick:ce}))))})))),(0,p.Y)(E,null,(0,p.Y)(b.pd,{type:"text",ref:$,value:k,placeholder:(0,d.t)("Search all charts"),onChange:se,onFocus:oe,"data-test":`${C}__search-input`,prefix:(0,p.Y)(O,null,(0,p.Y)(v.A.Search,{iconSize:"m"})),suffix:(0,p.Y)(O,null,k&&(0,p.Y)(v.A.XLarge,{iconSize:"m",onClick:de}))})),(0,p.Y)(M,null,(0,p.Y)(K,{vizEntries:N?re:te===w&&ae===a.AllCharts?ee:ae===a.Category&&q[te]?q[te]:ae!==a.Tags&&ae!==a.RecommendedTags||!J[te]?[]:J[te],selectedViz:n,setSelectedViz:o,onDoubleClick:s})),I?(0,p.Y)("div",{css:e=>[j(e),H(e)]},(0,p.Y)(l.Fragment,null,(0,p.Y)(S,{css:p.AH`
                grid-area: viz-name;
                position: relative;
              `},null==I?void 0:I.name,(null==I?void 0:I.label)&&(0,p.Y)(h.m,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=I.labelExplanation)?t:m.HE[I.label]},(0,p.Y)(B,null,(0,p.Y)(L,null,(0,p.Y)("div",null,(0,d.t)(I.label)))))),(0,p.Y)(D,null,null==I?void 0:I.tags.map((e=>(0,p.Y)(x.A,{key:e},e)))),(0,p.Y)(V,null,(null==I?void 0:I.description)||(0,d.t)("No description available.")),(0,p.Y)(S,{css:p.AH`
                grid-area: examples-header;
              `},(0,d.t)("Examples")),(0,p.Y)(G,null,(null!=I&&null!=(i=I.exampleGallery)&&i.length?I.exampleGallery:[{url:null==I?void 0:I.thumbnail,caption:null==I?void 0:I.name}]).map((e=>(0,p.Y)("img",{key:e.url,src:e.url,alt:e.caption,title:e.caption})))))):null)}}}]);
//# sourceMappingURL=7506bfa2ebc1fbe7a299.chunk.js.map