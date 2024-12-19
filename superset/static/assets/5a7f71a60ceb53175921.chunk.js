"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2246],{4183:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(64467),l=n(82284),o=n(58168),r=n(96540),i=n(90754),s=n(46942),d=n.n(s),c=n(5544),u=n(77540),m=n(40682);function h(e){return e?e.toString().split("").reverse().map((function(e){var t=Number(e);return isNaN(t)?e:t})):[]}const p=function(e){var t=e.prefixCls,n=e.count,a=e.className,l=e.style,i=e.title,s=e.show,p=e.component,g=void 0===p?"sup":p,b=e.children,f=e.onAnimated,v=void 0===f?function(){}:f,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["prefixCls","count","className","style","title","show","component","children","onAnimated"]),x=(0,r.useState)(!0),w=(0,c.A)(x,2),$=w[0],A=w[1],Y=(0,r.useState)(n),S=(0,c.A)(Y,2),U=S[0],z=S[1],C=(0,r.useState)(n),_=(0,c.A)(C,2),N=_[0],T=_[1],k=(0,r.useState)(n),E=(0,c.A)(k,2),I=E[0],O=E[1],P=(0,r.useContext(u.QO).getPrefixCls)("scroll-number",t);N!==n&&(A(!0),T(n)),r.useEffect((function(){var e;return O(U),$&&(e=setTimeout((function(){A(!1),z(n),v()}))),function(){e&&clearTimeout(e)}}),[$,n,v]);var D=(0,o.A)((0,o.A)({},y),{"data-show":s,style:l,className:d()(P,a),title:i}),M=U&&Number(U)%1==0?h(U).map((function(e,t){return function(e,t){if("number"==typeof e){var n=function(e,t){var n=Math.abs(Number(U)),a=Math.abs(Number(I)),l=Math.abs(h(U)[t]),o=Math.abs(h(a)[t]);return $?10+e:n>a?l>=o?10+e:20+e:l<=o?10+e:e}(e,t),a=$||void 0===h(I)[t];return r.createElement("span",{className:"".concat(P,"-only"),style:{transition:a?"none":void 0,msTransform:"translateY(".concat(100*-n,"%)"),WebkitTransform:"translateY(".concat(100*-n,"%)"),transform:"translateY(".concat(100*-n,"%)")},key:t},function(e,t){for(var n=[],a=0;a<30;a++)n.push(r.createElement("p",{key:a.toString(),className:d()(t,{current:e===a})},a%10));return n}(n,"".concat(P,"-only-unit")))}return r.createElement("span",{key:"symbol",className:"".concat(P,"-symbol")},e)}(e,t)})).reverse():U;return l&&l.borderColor&&(D.style=(0,o.A)((0,o.A)({},l),{boxShadow:"0 0 0 1px ".concat(l.borderColor," inset")})),b?(0,m.Ob)(b,(function(e){return{className:d()("".concat(P,"-custom-component"),null==e?void 0:e.className)}})):r.createElement(g,D,M)};var g=n(54121);function b(e){return-1!==g.w.indexOf(e)}var f=function(e){var t,n,s=e.prefixCls,c=e.scrollNumberPrefixCls,h=e.children,g=e.status,f=e.text,v=e.color,y=e.count,x=void 0===y?null:y,w=e.overflowCount,$=void 0===w?99:w,A=e.dot,Y=void 0!==A&&A,S=e.size,U=void 0===S?"default":S,z=e.title,C=e.offset,_=e.style,N=e.className,T=e.showZero,k=void 0!==T&&T,E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),I=r.useContext(u.QO),O=I.getPrefixCls,P=I.direction,D=O("badge",s),M=x>$?"".concat($,"+"):x,R=null!=g||null!=v,j="0"===M||0===M,V=Y&&!j||R,W=V?"":M,F=(0,r.useMemo)((function(){return(null==W||""===W||j&&!k)&&!V}),[W,j,k,V]),H=(0,r.useRef)(W);F||(H.current=W);var L=H.current,q=(0,r.useRef)(V);F||(q.current=V);var Q=(0,r.useMemo)((function(){if(!C)return(0,o.A)({},_);var e={marginTop:C[1]};return"rtl"===P?e.left=parseInt(C[0],10):e.right=-parseInt(C[0],10),(0,o.A)((0,o.A)({},e),_)}),[P,C,_]),B=null!=z?z:"string"==typeof x||"number"==typeof x?x:void 0,X=F||!f?null:r.createElement("span",{className:"".concat(D,"-status-text")},f),G=x&&"object"===(0,l.A)(x)?(0,m.Ob)(x,(function(e){return{style:(0,o.A)((0,o.A)({},Q),e.style)}})):void 0,K=d()((t={},(0,a.A)(t,"".concat(D,"-status-dot"),R),(0,a.A)(t,"".concat(D,"-status-").concat(g),!!g),(0,a.A)(t,"".concat(D,"-status-").concat(v),b(v)),t)),Z={};v&&!b(v)&&(Z.background=v);var J=d()(D,(n={},(0,a.A)(n,"".concat(D,"-status"),R),(0,a.A)(n,"".concat(D,"-not-a-wrapper"),!h),(0,a.A)(n,"".concat(D,"-rtl"),"rtl"===P),n),N);if(!h&&R){var ee=Q.color;return r.createElement("span",(0,o.A)({},E,{className:J,style:Q}),r.createElement("span",{className:K,style:Z}),r.createElement("span",{style:{color:ee},className:"".concat(D,"-status-text")},f))}return r.createElement("span",(0,o.A)({},E,{className:J}),h,r.createElement(i.default,{visible:!F,motionName:"".concat(D,"-zoom"),motionAppear:!1},(function(e){var t,n=e.className,l=O("scroll-number",c),i=q.current,s=d()((t={},(0,a.A)(t,"".concat(D,"-dot"),i),(0,a.A)(t,"".concat(D,"-count"),!i),(0,a.A)(t,"".concat(D,"-count-sm"),"small"===U),(0,a.A)(t,"".concat(D,"-multiple-words"),!i&&L&&(null==L?void 0:L.toString().length)>1),(0,a.A)(t,"".concat(D,"-status-").concat(g),!!g),(0,a.A)(t,"".concat(D,"-status-").concat(v),b(v)),t)),u=(0,o.A)({},Q);return v&&!b(v)&&((u=u||{}).background=v),r.createElement(p,{prefixCls:l,show:!F,className:d()(n,s),count:L,title:B,style:u,key:"scrollNumber"},G)})),X)};f.Ribbon=function(e){var t,n=e.className,l=e.prefixCls,i=e.style,s=e.color,c=e.children,m=e.text,h=e.placement,p=void 0===h?"end":h,g=r.useContext(u.QO),f=g.getPrefixCls,v=g.direction,y=f("ribbon",l),x=b(s),w=d()(y,"".concat(y,"-placement-").concat(p),(t={},(0,a.A)(t,"".concat(y,"-rtl"),"rtl"===v),(0,a.A)(t,"".concat(y,"-color-").concat(s),x),t),n),$={},A={};return s&&!x&&($.background=s,A.color=s),r.createElement("div",{className:"".concat(y,"-wrapper")},c,r.createElement("div",{className:w,style:(0,o.A)((0,o.A)({},$),i)},r.createElement("span",{className:"".concat(y,"-text")},m),r.createElement("div",{className:"".concat(y,"-corner"),style:A})))};const v=f},47163:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540);const l=()=>{const[e,t]=(0,a.useState)(0),[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useLayoutEffect)((()=>{var e;const n=()=>{const e=o.current;if(!e)return;const n=r.current,{scrollWidth:a,clientWidth:i,childNodes:s}=e;if(a>i){const e=6,a=(null==n?void 0:n.offsetWidth)||0,o=i-e,r=s.length;let d=0,c=0;for(let e=0;e<r;e+=1)o-d-a<=0&&(c+=1),d+=s[e].offsetWidth;r>1&&c?(l(!0),t(c)):(l(!1),t(1))}else l(!1),t(0)},a=new ResizeObserver(n),i=null==(e=o.current)?void 0:e.parentElement;return i&&a.observe(i),n(),()=>{a.disconnect()}}),[r.current]),[o,r,e,n]}},76923:(e,t,n)=>{n.d(t,{U:()=>o}),n(96540);var a=n(17437);const l=e=>a.AH`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colors.grayscale.light5};
  height: 65px;
  padding: 0 ${4*e.gridUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: auto;
    order: 1;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
    order: 2;
  }

  .iki-logo {
    width: 32px;
    heigh: auto;
    margin-right: 10px;
  }
`,o=({rightPanelAdditionalItems:e})=>(0,a.Y)("div",{css:l,className:"header-with-actions"},(0,a.Y)("div",{className:"title-panel"}),(0,a.Y)("div",{className:"right-button-panel"},e))},41621:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(96540),l=n(33149),o=n(90017),r=n(62221),i=n(17437);const s=o.A.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,d=({id:e,initialWidth:t,minWidth:n,maxWidth:o,enable:d,children:c})=>{const[u,m]=function(e,t){const n=(0,a.useRef)(),[l,o]=(0,a.useState)(t);return(0,a.useEffect)((()=>{var t;n.current=null!=(t=n.current)?t:(0,r.Gq)(r.Hh.CommonResizableSidebarWidths,{}),n.current[e]&&o(n.current[e])}),[e]),[l,function(t){o(t),(0,r.SO)(r.Hh.CommonResizableSidebarWidths,{...n.current,[e]:t})}]}(e,t);return(0,i.Y)(a.Fragment,null,(0,i.Y)(s,null,(0,i.Y)(l.c,{enable:{right:d},handleClasses:{right:"sidebar-resizer"},size:{width:u,height:"100%"},minWidth:n,maxWidth:o,onResizeStop:(e,t,n,a)=>m(u+a.width)})),c(u))}},78704:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(17437),l=(n(96540),n(96453)),o=n(16784),r=n(12249),i=n(19129);const s=function({warningMarkdown:e,size:t,marginRight:n}){const s=(0,l.DP)();return(0,a.Y)(i.m,{id:"warning-tooltip",title:(0,a.Y)(o.A,{source:e})},(0,a.Y)(r.A.AlertSolid,{iconColor:s.colors.alert.base,iconSize:t,css:(0,a.AH)({marginRight:null!=n?n:2*s.gridUnit},"","")}))}},217:(e,t,n)=>{n.r(t),n.d(t,{datasetReducer:()=>ut,default:()=>ht});var a=n(96540),l=n(56347),o=n(35742),r=n(95579),i=n(5362),s=n(58561),d=n.n(s),c=n(95272);const u=(e,t)=>{const[n,l]=(0,a.useState)([]),s=t?encodeURIComponent(t):void 0,u=(0,a.useCallback)((async e=>{let t,n=[],a=0;for(;void 0===t||n.length<t;){const l=d().encode_uri({filters:e,page:a});try{const e=await o.A.get({endpoint:`/api/v1/dataset/?q=${l}`});({count:t}=e.json);const{json:{result:r}}=e;n=[...n,...r],a+=1}catch(e){(0,c.iB)((0,r.t)("There was an error fetching dataset")),i.A.error((0,r.t)("There was an error fetching dataset"),e)}}l(n)}),[]);(0,a.useEffect)((()=>{const n=[{col:"database",opr:"rel_o_m",value:null==e?void 0:e.id},{col:"schema",opr:"eq",value:s},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];t&&u(n)}),[null==e?void 0:e.id,t,s,u]);const m=(0,a.useMemo)((()=>null==n?void 0:n.map((e=>e.table_name))),[n]);return{datasets:n,datasetNames:m}};var m,h=n(76923),p=n(46920),g=n(12249),b=n(6749);!function(e){e[e.SelectDatabase=0]="SelectDatabase",e[e.SelectSchema=1]="SelectSchema",e[e.SelectTable=2]="SelectTable",e[e.ChangeDataset=3]="ChangeDataset"}(m||(m={}));var f=n(90017),v=n(17437);const y=f.A.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
`,x=f.A.div`
  width: ${({theme:e,width:t})=>null!=t?t:80*e.gridUnit}px;
  max-width: ${({theme:e,width:t})=>null!=t?t:80*e.gridUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,w=f.A.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,$=f.A.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,A=(0,f.A)($)`
  flex: 1 0 auto;
  position: relative;
`,Y=(0,f.A)($)`
  flex: 1 0 auto;
  height: auto;
`,S=(0,f.A)($)`
  flex: 0 0 auto;
  height: ${({theme:e})=>16*e.gridUnit}px;
  z-index: 0;
`,U=f.A.div`
  ${({theme:e})=>`\n  flex: 0 0 auto;\n  height: ${16*e.gridUnit}px;\n  border-bottom: 2px solid ${e.colors.grayscale.light2};\n\n  .header-with-actions {\n    height: ${15.5*e.gridUnit}px;\n  }\n  `}
`,z=f.A.div`
  ${({theme:e})=>`\n  margin: ${4*e.gridUnit}px;\n  font-size: ${e.typography.sizes.xl}px;\n  font-weight: ${e.typography.weights.bold};\n  `}
`,C=f.A.div`
  ${({theme:e})=>`\n  height: 100%;\n  border-right: 1px solid ${e.colors.grayscale.light2};\n  `}
`,_=f.A.div`
  width: 100%;
  position: relative;
`,N=f.A.div`
  ${({theme:e})=>`\n  border-left: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.success.base};\n  `}
`,T=f.A.div`
  ${({theme:e})=>`\n  height: ${16*e.gridUnit}px;\n  width: 100%;\n  border-top: 1px solid ${e.colors.grayscale.light2};\n  border-bottom: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.info.base};\n  border-top: ${e.gridUnit/4}px solid\n    ${e.colors.grayscale.light2};\n  padding: ${4*e.gridUnit}px;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ${e.colors.grayscale.light5};\n  z-index: ${e.zIndex.max}\n  `}
`,k=f.A.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:e})=>e.colors.grayscale.light1};
      }
    }
  }
`,E=e=>v.AH`
  width: ${21.5*e.gridUnit}px;

  &:disabled {
    background-color: ${e.colors.grayscale.light3};
    color: ${e.colors.grayscale.light1};
  }
`,I=(0,r.t)("New dataset"),O={text:(0,r.t)("Select a database table and create dataset"),placement:"bottomRight"},P=()=>(0,v.Y)(p.A,{buttonStyle:"primary",tooltip:null==O?void 0:O.text,placement:null==O?void 0:O.placement,disabled:!0,css:E},(0,v.Y)(g.A.Save,{iconSize:"m"}),(0,r.t)("Save")),D=()=>(0,v.Y)(b.W,null,(0,v.Y)(b.W.Item,null,(0,r.t)("Settings")),(0,v.Y)(b.W.Item,null,(0,r.t)("Delete")));function M({setDataset:e,title:t=I,editing:n=!1}){const l={title:null!=t?t:I,placeholder:I,onSave:t=>{e({type:m.ChangeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,r.t)("dataset name")};return(0,v.Y)(k,null,n?(0,v.Y)(h.U,{editableTitleProps:l,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,v.Y)(a.Fragment,null),rightPanelAdditionalItems:P(),additionalActionsMenu:D(),menuDropdownProps:{disabled:!0},tooltipProps:O}):(0,v.Y)(z,null,t||I))}var R,j,V=n(69945),W=n(48327),F=n(97032),H=n(54625),L=n(62952),q=n(51003),Q=n(87196);function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}const X=({title:e,titleId:t,...n},l)=>a.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:160,height:166,fill:"none",ref:l,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,R||(R=a.createElement("path",{fill:"#FAFAFA",fillRule:"evenodd",d:"M123.638 8a.5.5 0 0 0-.5.5V158h28.758V8.5a.5.5 0 0 0-.5-.5zM84.793 40.643a.5.5 0 0 1 .5-.5h27.759a.5.5 0 0 1 .5.5V158H84.793zM46.95 72.285a.5.5 0 0 0-.5.5V158h28.758V72.785a.5.5 0 0 0-.5-.5zM8.604 93.715a.5.5 0 0 0-.5.5V158h28.758V94.215a.5.5 0 0 0-.5-.5z",clipRule:"evenodd"})),j||(j=a.createElement("path",{fill:"#D9D9D9",d:"M123.138 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zm-38.344 0v.5h.5v-.5zm-28.759 0h-.5v.5h.5zm-38.344-.001h-.5v.5h.5zm28.758 0v.5h.5v-.5zM8.104 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zM123.639 8.5v-1a1 1 0 0 0-1 1zm0 149.5V8.5h-1V158zm28.258-.5h-28.758v1h28.758zm-.5-149V158h1V8.5zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1h-27.758zM85.293 39.643a1 1 0 0 0-1 1h1zm27.759 0H85.293v1h27.759zm1 1a1 1 0 0 0-1-1v1zm0 117.357V40.643h-1V158zm-29.259.5h28.759v-1H84.793zm-.5-117.857V158h1V40.643zM46.95 72.785v-1a1 1 0 0 0-1 1zm0 85.214V72.785h-1V158zm28.258-.5H46.45v1h28.758zm-.5-84.714V158h1V72.785zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H46.95zM8.604 94.215v-1a1 1 0 0 0-1 1zm0 63.785V94.215h-1V158zm28.258-.5H8.104v1h28.758zm-.5-63.285V158h1V94.215zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H8.604z"}))),G=(0,a.forwardRef)(X);var K=n(5261),Z=n(50500),J=n(39854),ee=n(95093),te=n.n(ee),ne=n(47163),ae=n(19129);const le=f.A.div`
  & > span {
    width: 100%;
    display: flex;

    .ant-tooltip-open {
      display: inline;
    }
  }
`,oe=f.A.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`,re=f.A.span`
  &:not(:last-child)::after {
    content: ', ';
  }
`,ie=f.A.div`
  .link {
    color: ${({theme:e})=>e.colors.grayscale.light5};
    display: block;
    text-decoration: underline;
  }
`,se=f.A.span`
  ${({theme:e})=>`\n  cursor: pointer;\n  color: ${e.colors.primary.dark1};\n  font-weight: ${e.typography.weights.normal};\n  `}
`;function de({items:e,renderVisibleItem:t=(e=>e),renderTooltipItem:n=(e=>e),getKey:l=(e=>e),maxLinks:o=20}){const[i,s,d,c]=(0,ne.A)(),u=(0,a.useMemo)((()=>e.length>o?e.length-o:void 0),[e,o]),m=(0,a.useMemo)((()=>(0,v.Y)(oe,{ref:i,"data-test":"crosslinks"},e.map((e=>(0,v.Y)(re,{key:l(e)},t(e)))))),[l,e,t]),h=(0,a.useMemo)((()=>e.slice(0,o).map((e=>(0,v.Y)(ie,{key:l(e)},n(e))))),[l,e,o,n]);return(0,v.Y)(le,null,(0,v.Y)(ae.m,{placement:"top",title:d?(0,v.Y)(a.Fragment,null,h,u&&(0,v.Y)("span",null,(0,r.t)("+ %s more",u))):null},m,c&&(0,v.Y)(se,{ref:s},"+",d)))}const ce=e=>({key:e.id,to:`/superset/dashboard/${e.id}`,target:"_blank",rel:"noreferer noopener",children:e.dashboard_title}),ue=e=>v.AH`
  color: ${e.colors.grayscale.light5};
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`,me=[{key:"slice_name",title:(0,r.t)("Chart"),width:"320px",sorter:!0,render:(e,t)=>(0,v.Y)(H.N_,{to:t.url},t.slice_name)},{key:"owners",title:(0,r.t)("Chart owners"),width:"242px",render:(e,t)=>{var n,a;return(0,v.Y)(de,{items:null!=(n=null==(a=t.owners)?void 0:a.map((e=>`${e.first_name} ${e.last_name}`)))?n:[]})}},{key:"last_saved_at",title:(0,r.t)("Chart last modified"),width:"209px",sorter:!0,defaultSortOrder:"descend",render:(e,t)=>t.last_saved_at?te().utc(t.last_saved_at).fromNow():null},{key:"last_saved_by.first_name",title:(0,r.t)("Chart last modified by"),width:"216px",sorter:!0,render:(e,t)=>t.last_saved_by?`${t.last_saved_by.first_name} ${t.last_saved_by.last_name}`:null},{key:"dashboards",title:(0,r.t)("Dashboard usage"),width:"420px",render:(e,t)=>(0,v.Y)(de,{items:t.dashboards,renderVisibleItem:e=>(0,v.Y)(H.N_,ce(e)),renderTooltipItem:e=>(0,v.Y)(H.N_,(0,F.A)({},ce(e),{css:ue})),getKey:e=>e.id})}],he=e=>v.AH`
  && th.ant-table-cell {
    color: ${e.colors.grayscale.light1};
  }

  .ant-table-placeholder {
    display: none;
  }
`,pe=(0,v.Y)(a.Fragment,null,(0,v.Y)(g.A.PlusOutlined,{iconSize:"m",css:v.AH`
        & > .anticon {
          line-height: 0;
        }
      `}),(0,r.t)("Create chart with dataset")),ge=(0,f.A)(Q.nw)`
  margin: ${({theme:e})=>13*e.gridUnit}px 0;
`,be=({datasetId:e})=>{const{loading:t,recordCount:n,data:l,onChange:o}=(e=>{const{addDangerToast:t}=(0,K.Yf)(),n=(0,a.useMemo)((()=>[{id:"datasource_id",operator:J.t.Equals,value:e}]),[e]),{state:{loading:l,resourceCount:o,resourceCollection:i},fetchData:s}=(0,Z.RU)("chart",(0,r.t)("chart"),t,!0,[],n),d=(0,a.useMemo)((()=>i.map((e=>({...e,key:e.id})))),[i]),c=(0,a.useCallback)(((e,t,n)=>{var a,l;const o=(null!=(a=e.current)?a:1)-1,r=null!=(l=e.pageSize)?l:0,i=(0,L.A)(n).filter((({columnKey:e})=>"string"==typeof e)).map((({columnKey:e,order:t})=>({id:e,desc:"descend"===t})));s({pageIndex:o,pageSize:r,sortBy:i,filters:[]})}),[s]);return(0,a.useEffect)((()=>{s({pageIndex:0,pageSize:25,sortBy:[{id:"last_saved_at",desc:!0}],filters:[]})}),[s]),{loading:l,recordCount:o,data:d,onChange:c}})(e),i=(0,a.useCallback)((()=>window.open(`/explore/?dataset_type=table&dataset_id=${e}`,"_blank")),[e]);return(0,v.Y)("div",{css:l.length?null:he},(0,v.Y)(q.Ay,{columns:me,data:l,size:q.QS.Middle,defaultPageSize:25,recordCount:n,loading:t,onChange:o}),l.length||t?null:(0,v.Y)(ge,{image:(0,v.Y)(G,null),title:(0,r.t)("No charts"),description:(0,r.t)("This dataset is not used to power any charts."),buttonText:pe,buttonAction:i}))},fe=(0,f.A)(W.Ay)`
  ${({theme:e})=>`\n  margin-top: ${8.5*e.gridUnit}px;\n  padding-left: ${4*e.gridUnit}px;\n  padding-right: ${4*e.gridUnit}px;\n\n  .ant-tabs-top > .ant-tabs-nav::before {\n    width: ${50*e.gridUnit}px;\n  }\n  `}
`,ve=f.A.div`
  ${({theme:e})=>`\n  .ant-badge {\n    width: ${8*e.gridUnit}px;\n    margin-left: ${2.5*e.gridUnit}px;\n  }\n  `}
`,ye={USAGE_TEXT:(0,r.t)("Usage"),COLUMNS_TEXT:(0,r.t)("Columns"),METRICS_TEXT:(0,r.t)("Metrics")},xe=({id:e})=>{const{usageCount:t}=(e=>{const[t,n]=(0,a.useState)(0),l=(0,a.useCallback)((()=>o.A.get({endpoint:`/api/v1/dataset/${e}/related_objects`}).then((({json:e})=>{n(null==e?void 0:e.charts.count)})).catch((e=>{(0,c.iB)((0,r.t)("There was an error fetching dataset's related objects")),i.A.error(e)}))),[e]);return(0,a.useEffect)((()=>{e&&l()}),[e,l]),{usageCount:t}})(e),n=(0,v.Y)(ve,null,(0,v.Y)("span",null,ye.USAGE_TEXT),t>0&&(0,v.Y)(V.A,{count:t}));return(0,v.Y)(fe,{moreIcon:null,fullWidth:!1},(0,v.Y)(W.Ay.TabPane,{tab:ye.COLUMNS_TEXT,key:"1"}),(0,v.Y)(W.Ay.TabPane,{tab:ye.METRICS_TEXT,key:"2"}),(0,v.Y)(W.Ay.TabPane,{tab:n,key:"3"},(0,v.Y)(be,{datasetId:e})))};var we=n(96453),$e=n(25946);const Ae=(e,t,n)=>{var a;return null==t||null==(a=t[e])||null==a.localeCompare?void 0:a.localeCompare(null==n?void 0:n[e])},Ye=n.p+"loading.cff8a5da.gif",Se=f.A.div`
  padding: ${({theme:e})=>8*e.gridUnit}px
    ${({theme:e})=>6*e.gridUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,Ue=(0,f.A)(Q.nw)`
  max-width: 50%;

  p {
    width: ${({theme:e})=>115*e.gridUnit}px;
  }
`,ze=(0,r.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),Ce=(0,r.t)("create dataset from SQL query"),_e=(0,r.t)(" to open SQL Lab. From there you can save the query as a dataset."),Ne=(0,r.t)("Select dataset source"),Te=(0,r.t)("No table columns"),ke=(0,r.t)("This database table does not contain any data. Please select a different table."),Ee=(0,r.t)("An Error Occurred"),Ie=(0,r.t)("Unable to load columns for the selected table. Please select a different table."),Oe=e=>{const{hasError:t,tableName:n,hasColumns:l}=e;let o="empty-dataset.svg",r=Ne,i=(0,v.Y)(a.Fragment,null,ze,(0,v.Y)(H.N_,{to:"/sqllab"},(0,v.Y)("span",{role:"button",tabIndex:0},Ce)),_e);return t?(r=Ee,i=(0,v.Y)(a.Fragment,null,Ie),o=void 0):n&&!l&&(o="no-columns.svg",r=Te,i=(0,v.Y)(a.Fragment,null,ke)),(0,v.Y)(Se,null,(0,v.Y)(Ue,{image:o,title:r,description:i}))};var Pe;!function(e){e.ABSOLUTE="absolute",e.RELATIVE="relative"}(Pe||(Pe={}));const De=f.A.div`
  ${({theme:e,position:t})=>`\n  position: ${t};\n  margin: ${4*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  font-size: ${6*e.gridUnit}px;\n  font-weight: ${e.typography.weights.medium};\n  padding-bottom: ${3*e.gridUnit}px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  .anticon:first-of-type {\n    margin-right: ${4*e.gridUnit}px;\n  }\n\n  .anticon:nth-of-type(2) {\n    margin-left: ${4*e.gridUnit}px;\n  `}
`,Me=f.A.div`
  ${({theme:e})=>`\n  margin-left: ${6*e.gridUnit}px;\n  margin-bottom: ${3*e.gridUnit}px;\n  font-weight: ${e.typography.weights.bold};\n  `}
`,Re=f.A.div`
  ${({theme:e})=>`\n  padding: ${8*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  `}
`,je=f.A.div`
  ${({theme:e})=>`\n  max-width: 50%;\n  width: 200px;\n\n  img {\n    width: 120px;\n    margin-left: 40px;\n  }\n\n  div {\n    width: 100%;\n    margin-top: ${3*e.gridUnit}px;\n    text-align: center;\n    font-weight: ${e.typography.weights.normal};\n    font-size: ${e.typography.sizes.l}px;\n    color: ${e.colors.grayscale.light1};\n  }\n  `}
`,Ve=f.A.div`
  ${({theme:e})=>`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${60*e.gridUnit}px);\n  overflow: auto;\n  `}
`,We=f.A.div`
  ${({theme:e})=>`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${30*e.gridUnit}px);\n  overflow: auto;\n  `}
`,Fe=f.A.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,He=(0,f.A)($e.A)`
  ${({theme:e})=>`\n  border: 1px solid ${e.colors.info.base};\n  padding: ${4*e.gridUnit}px;\n  margin: ${6*e.gridUnit}px ${6*e.gridUnit}px\n    ${8*e.gridUnit}px;\n  .view-dataset-button {\n    position: absolute;\n    top: ${4*e.gridUnit}px;\n    right: ${4*e.gridUnit}px;\n    font-weight: ${e.typography.weights.normal};\n\n    &:hover {\n      color: ${e.colors.secondary.dark3};\n      text-decoration: underline;\n    }\n  }\n  `}
`,Le=(0,r.t)("Refreshing columns"),qe=(0,r.t)("Table columns"),Qe=(0,r.t)("Loading"),Be=["5","10","15","25"],Xe=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(e,t)=>Ae("name",e,t)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(e,t)=>Ae("type",e,t)}],Ge=(0,r.t)("This table already has a dataset associated with it. You can only associate one dataset with a table.\n"),Ke=(0,r.t)("View Dataset"),Ze=({tableName:e,columnList:t,loading:n,hasError:l,datasets:o})=>{var i;const s=(0,we.DP)(),d=null!=(i=(null==t?void 0:t.length)>0)&&i,c=null==o?void 0:o.map((e=>e.table_name)),u=null==o?void 0:o.find((t=>t.table_name===e));let m,h;return n&&(h=(0,v.Y)(Re,null,(0,v.Y)(je,null,(0,v.Y)("img",{alt:Qe,src:Ye}),(0,v.Y)("div",null,Le)))),n||(m=!n&&e&&d&&!l?(0,v.Y)(a.Fragment,null,(0,v.Y)(Me,null,qe),u?(0,v.Y)(Ve,null,(0,v.Y)(Fe,null,(0,v.Y)(q.Ay,{loading:n,size:q.QS.Small,columns:Xe,data:t,pageSizeOptions:Be,defaultPageSize:25}))):(0,v.Y)(We,null,(0,v.Y)(Fe,null,(0,v.Y)(q.Ay,{loading:n,size:q.QS.Small,columns:Xe,data:t,pageSizeOptions:Be,defaultPageSize:25})))):(0,v.Y)(Oe,{hasColumns:d,hasError:l,tableName:e})),(0,v.Y)(a.Fragment,null,e&&(0,v.Y)(a.Fragment,null,(null==c?void 0:c.includes(e))&&(p=u,(0,v.Y)(He,{closable:!1,type:"info",showIcon:!0,message:(0,r.t)("This table already has a dataset"),description:(0,v.Y)(a.Fragment,null,Ge,(0,v.Y)("span",{role:"button",onClick:()=>{window.open(null==p?void 0:p.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button"},Ke))})),(0,v.Y)(De,{position:!n&&d?Pe.RELATIVE:Pe.ABSOLUTE,title:e||""},e&&(0,v.Y)(g.A.Table,{iconColor:s.colors.grayscale.base}),e)),m,h);var p},Je=({tableName:e,dbId:t,schema:n,setHasColumns:l,datasets:s})=>{const[d,u]=(0,a.useState)([]),[m,h]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1),b=(0,a.useRef)(e);return(0,a.useEffect)((()=>{b.current=e,e&&n&&t&&(async e=>{const{dbId:t,tableName:n,schema:a}=e;h(!0),null==l||l(!1);const s=`/api/v1/database/${t}/table/${n}/${a}/`;try{const e=await o.A.get({endpoint:s});if((e=>{let t=!0;if("string"!=typeof(null==e?void 0:e.name)&&(t=!1),t&&!Array.isArray(e.columns)&&(t=!1),t&&e.columns.length>0){const n=e.columns.some(((e,t)=>{const n=(e=>{let t=!0;const n="The object provided to isITableColumn does match the interface.";return"string"!=typeof(null==e?void 0:e.name)&&(t=!1,console.error(`${n} The property 'name' is required and must be a string`)),t&&"string"!=typeof(null==e?void 0:e.type)&&(t=!1,console.error(`${n} The property 'type' is required and must be a string`)),t})(e);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${t}] is invalid and does not match the ITableColumn interface`),!n}));t=!n}return t})(null==e?void 0:e.json)){const t=e.json;t.name===b.current&&(u(t.columns),null==l||l(t.columns.length>0),g(!1))}else u([]),null==l||l(!1),g(!0),(0,c.iB)((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",s)),i.A.error((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",s))}catch(e){u([]),null==l||l(!1),g(!0)}finally{h(!1)}})({tableName:e,dbId:t,schema:n})}),[e,t,n]),(0,v.Y)(Ze,{columnList:d,hasError:p,loading:m,tableName:e,datasets:s})};var et=n(8791),tt=n(62221);const nt=f.A.div`
  ${({theme:e})=>`\n    padding: ${4*e.gridUnit}px;\n    height: 100%;\n    background-color: ${e.colors.grayscale.light5};\n    position: relative;\n    .emptystate {\n      height: auto;\n      margin-top: ${17.5*e.gridUnit}px;\n    }\n    .section-title {\n      margin-top: ${5.5*e.gridUnit}px;\n      margin-bottom: ${11*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .table-title {\n      margin-top: ${11*e.gridUnit}px;\n      margin-bottom: ${6*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .options-list {\n      overflow: auto;\n      position: absolute;\n      bottom: 0;\n      top: ${92.25*e.gridUnit}px;\n      left: ${3.25*e.gridUnit}px;\n      right: 0;\n\n      .no-scrollbar {\n        margin-right: ${4*e.gridUnit}px;\n      }\n\n      .options {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        :hover {\n          background-color: ${e.colors.grayscale.light4}\n        }\n      }\n\n      .options-highlighted {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colors.primary.dark1};\n        color: ${e.colors.grayscale.light5};\n      }\n\n      .options, .options-highlighted {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    }\n    form > span[aria-label="refresh"] {\n      position: absolute;\n      top: ${69*e.gridUnit}px;\n      left: ${42.75*e.gridUnit}px;\n      font-size: ${4.25*e.gridUnit}px;\n    }\n    .table-form {\n      margin-bottom: ${8*e.gridUnit}px;\n    }\n    .loading-container {\n      position: absolute;\n      top: ${89.75*e.gridUnit}px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      img {\n        width: ${20*e.gridUnit}px;\n        margin-bottom: ${2.5*e.gridUnit}px;\n      }\n      p {\n        color: ${e.colors.grayscale.light1};\n      }\n    }\n`}
`;function at({setDataset:e,dataset:t,datasetNames:n}){const{addDangerToast:l}=(0,K.Yf)(),o=(0,a.useCallback)((t=>{e({type:m.SelectDatabase,payload:{db:t}})}),[e]);(0,a.useEffect)((()=>{const e=(0,tt.Gq)(tt.Hh.Database,null);e&&o(e)}),[o]);const i=(0,a.useCallback)((e=>(0,v.Y)(et.cs,{table:null!=n&&n.includes(e.value)?{...e,extra:{warning_markdown:(0,r.t)("This table already has a dataset")}}:e})),[n]);return(0,v.Y)(nt,null,(0,v.Y)(et.Ay,(0,F.A)({database:null==t?void 0:t.db,handleError:l,emptyState:(0,Q.Ek)(!1),onDbChange:o,onSchemaChange:t=>{t&&e({type:m.SelectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:m.SelectTable,payload:{name:"table_name",value:t}})},sqlLabMode:!1,customTableOptionLabelRenderer:i},(null==t?void 0:t.schema)&&{schema:t.schema})))}var lt=n(7735),ot=n(35700);const rt=["db","schema","table_name"],it=[ot.ci,ot.q0,ot.ar,ot.R2],st=(0,K.Ay)((function({datasetObject:e,addDangerToast:t,hasColumns:n=!1,datasets:o}){const i=(0,l.W6)(),{createResource:s}=(0,Z.fn)("dataset",(0,r.t)("dataset"),t),d=(0,r.t)("Select a database table."),c=(0,r.t)("Create dataset and create chart"),u=!(null!=e&&e.table_name)||!n||(null==o?void 0:o.includes(null==e?void 0:e.table_name));return(0,v.Y)(a.Fragment,null,(0,v.Y)(p.A,{onClick:()=>{if(e){const t=(e=>{let t=0;const n=Object.keys(e).reduce(((n,a)=>(rt.includes(a)&&e[a]&&(t+=1),t)),0);return it[n]})(e);(0,lt.logEvent)(t,e)}else(0,lt.logEvent)(ot.ci,{});i.goBack()}},(0,r.t)("Cancel")),(0,v.Y)(p.A,{buttonStyle:"primary",disabled:u,tooltip:null!=e&&e.table_name?void 0:d,onClick:()=>{if(e){var t;const n={database:null==(t=e.db)?void 0:t.id,schema:e.schema,table_name:e.table_name};s(n).then((t=>{t&&"number"==typeof t&&((0,lt.logEvent)(ot.oA,e),i.push(`/chart/add/?dataset=${e.table_name}`))}))}}},c))}));var dt=n(41621);function ct({header:e,leftPanel:t,datasetPanel:n,rightPanel:a,footer:l}){const o=(0,we.DP)();return(0,v.Y)(y,{"data-test":"dataset-layout-wrapper"},e&&(0,v.Y)(U,null,e),(0,v.Y)(A,null,t&&(0,v.Y)(dt.A,{id:"dataset",initialWidth:80*o.gridUnit,minWidth:80*o.gridUnit,enable:!0},(e=>(0,v.Y)(x,{width:e},(0,v.Y)(C,null,t)))),(0,v.Y)(w,null,(0,v.Y)(Y,null,n&&(0,v.Y)(_,null,n),a&&(0,v.Y)(N,null,a)),(0,v.Y)(S,null,l&&(0,v.Y)(T,null,l)))))}function ut(e,t){const n={...e||{}};switch(t.type){case m.SelectDatabase:return{...n,...t.payload,schema:null,table_name:null};case m.SelectSchema:return{...n,[t.payload.name]:t.payload.value,table_name:null};case m.SelectTable:return{...n,[t.payload.name]:t.payload.value};case m.ChangeDataset:return{...n,[t.payload.name]:t.payload.value};default:return null}}const mt="/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc";function ht(){const[e,t]=(0,a.useReducer)(ut,null),[n,o]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),{datasets:s,datasetNames:d}=u(null==e?void 0:e.db,null==e?void 0:e.schema),{datasetId:c}=(0,l.g)();return(0,a.useEffect)((()=>{Number.isNaN(parseInt(c,10))||i(!0)}),[c]),(0,v.Y)(ct,{header:(0,v.Y)(M,{setDataset:t,title:null==e?void 0:e.table_name}),leftPanel:r?null:(0,v.Y)(at,{setDataset:t,dataset:e,datasetNames:d}),datasetPanel:r?(0,v.Y)(xe,{id:c}):(0,v.Y)(Je,{tableName:null==e?void 0:e.table_name,dbId:null==e||null==(m=e.db)?void 0:m.id,schema:null==e?void 0:e.schema,setHasColumns:o,datasets:s}),footer:(0,v.Y)(st,{url:mt,datasetObject:e,hasColumns:n,datasets:d})});var m}}}]);
//# sourceMappingURL=5a7f71a60ceb53175921.chunk.js.map