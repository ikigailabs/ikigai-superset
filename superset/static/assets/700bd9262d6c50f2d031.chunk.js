"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8438],{62529:(t,e,n)=>{n.d(e,{Z:()=>v});var a=n(4942),l=n(71002),o=n(87462),r=n(67294),i=n(60444),s=n(94184),d=n.n(s),c=n(29439),u=n(65632),m=n(96159);function h(t){return t?t.toString().split("").reverse().map((function(t){var e=Number(t);return isNaN(e)?t:e})):[]}const p=function(t){var e=t.prefixCls,n=t.count,a=t.className,l=t.style,i=t.title,s=t.show,p=t.component,g=void 0===p?"sup":p,b=t.children,f=t.onAnimated,v=void 0===f?function(){}:f,y=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(t);l<a.length;l++)e.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(t,a[l])&&(n[a[l]]=t[a[l]])}return n}(t,["prefixCls","count","className","style","title","show","component","children","onAnimated"]),Z=(0,r.useState)(!0),x=(0,c.Z)(Z,2),$=x[0],w=x[1],S=(0,r.useState)(n),U=(0,c.Z)(S,2),z=U[0],C=U[1],_=(0,r.useState)(n),T=(0,c.Z)(_,2),E=T[0],k=T[1],N=(0,r.useState)(n),P=(0,c.Z)(N,2),I=P[0],O=P[1],M=(0,r.useContext(u.E_).getPrefixCls)("scroll-number",e);E!==n&&(w(!0),k(n)),r.useEffect((function(){var t;return O(z),$&&(t=setTimeout((function(){w(!1),C(n),v()}))),function(){t&&clearTimeout(t)}}),[$,n,v]);var R=(0,o.Z)((0,o.Z)({},y),{"data-show":s,style:l,className:d()(M,a),title:i}),D=z&&Number(z)%1==0?h(z).map((function(t,e){return function(t,e){if("number"==typeof t){var n=function(t,e){var n=Math.abs(Number(z)),a=Math.abs(Number(I)),l=Math.abs(h(z)[e]),o=Math.abs(h(a)[e]);return $?10+t:n>a?l>=o?10+t:20+t:l<=o?10+t:t}(t,e),a=$||void 0===h(I)[e];return r.createElement("span",{className:"".concat(M,"-only"),style:{transition:a?"none":void 0,msTransform:"translateY(".concat(100*-n,"%)"),WebkitTransform:"translateY(".concat(100*-n,"%)"),transform:"translateY(".concat(100*-n,"%)")},key:e},function(t,e){for(var n=[],a=0;a<30;a++)n.push(r.createElement("p",{key:a.toString(),className:d()(e,{current:t===a})},a%10));return n}(n,"".concat(M,"-only-unit")))}return r.createElement("span",{key:"symbol",className:"".concat(M,"-symbol")},t)}(t,e)})).reverse():z;return l&&l.borderColor&&(R.style=(0,o.Z)((0,o.Z)({},l),{boxShadow:"0 0 0 1px ".concat(l.borderColor," inset")})),b?(0,m.Tm)(b,(function(t){return{className:d()("".concat(M,"-custom-component"),null==t?void 0:t.className)}})):r.createElement(g,R,D)};var g=n(98787);function b(t){return-1!==g.Y.indexOf(t)}var f=function(t){var e,n,s=t.prefixCls,c=t.scrollNumberPrefixCls,h=t.children,g=t.status,f=t.text,v=t.color,y=t.count,Z=void 0===y?null:y,x=t.overflowCount,$=void 0===x?99:x,w=t.dot,S=void 0!==w&&w,U=t.size,z=void 0===U?"default":U,C=t.title,_=t.offset,T=t.style,E=t.className,k=t.showZero,N=void 0!==k&&k,P=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(t);l<a.length;l++)e.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(t,a[l])&&(n[a[l]]=t[a[l]])}return n}(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),I=r.useContext(u.E_),O=I.getPrefixCls,M=I.direction,R=O("badge",s),D=Z>$?"".concat($,"+"):Z,V=null!=g||null!=v,j="0"===D||0===D,A=S&&!j||V,F=A?"":D,L=(0,r.useMemo)((function(){return(null==F||""===F||j&&!N)&&!A}),[F,j,N,A]),W=(0,r.useRef)(F);L||(W.current=F);var q=W.current,H=(0,r.useRef)(A);L||(H.current=A);var X=(0,r.useMemo)((function(){if(!_)return(0,o.Z)({},T);var t={marginTop:_[1]};return"rtl"===M?t.left=parseInt(_[0],10):t.right=-parseInt(_[0],10),(0,o.Z)((0,o.Z)({},t),T)}),[M,_,T]),Y=null!=C?C:"string"==typeof Z||"number"==typeof Z?Z:void 0,B=L||!f?null:r.createElement("span",{className:"".concat(R,"-status-text")},f),G=Z&&"object"===(0,l.Z)(Z)?(0,m.Tm)(Z,(function(t){return{style:(0,o.Z)((0,o.Z)({},X),t.style)}})):void 0,K=d()((e={},(0,a.Z)(e,"".concat(R,"-status-dot"),V),(0,a.Z)(e,"".concat(R,"-status-").concat(g),!!g),(0,a.Z)(e,"".concat(R,"-status-").concat(v),b(v)),e)),Q={};v&&!b(v)&&(Q.background=v);var J=d()(R,(n={},(0,a.Z)(n,"".concat(R,"-status"),V),(0,a.Z)(n,"".concat(R,"-not-a-wrapper"),!h),(0,a.Z)(n,"".concat(R,"-rtl"),"rtl"===M),n),E);if(!h&&V){var tt=X.color;return r.createElement("span",(0,o.Z)({},P,{className:J,style:X}),r.createElement("span",{className:K,style:Q}),r.createElement("span",{style:{color:tt},className:"".concat(R,"-status-text")},f))}return r.createElement("span",(0,o.Z)({},P,{className:J}),h,r.createElement(i.default,{visible:!L,motionName:"".concat(R,"-zoom"),motionAppear:!1},(function(t){var e,n=t.className,l=O("scroll-number",c),i=H.current,s=d()((e={},(0,a.Z)(e,"".concat(R,"-dot"),i),(0,a.Z)(e,"".concat(R,"-count"),!i),(0,a.Z)(e,"".concat(R,"-count-sm"),"small"===z),(0,a.Z)(e,"".concat(R,"-multiple-words"),!i&&q&&(null==q?void 0:q.toString().length)>1),(0,a.Z)(e,"".concat(R,"-status-").concat(g),!!g),(0,a.Z)(e,"".concat(R,"-status-").concat(v),b(v)),e)),u=(0,o.Z)({},X);return v&&!b(v)&&((u=u||{}).background=v),r.createElement(p,{prefixCls:l,show:!L,className:d()(n,s),count:q,title:Y,style:u,key:"scrollNumber"},G)})),B)};f.Ribbon=function(t){var e,n=t.className,l=t.prefixCls,i=t.style,s=t.color,c=t.children,m=t.text,h=t.placement,p=void 0===h?"end":h,g=r.useContext(u.E_),f=g.getPrefixCls,v=g.direction,y=f("ribbon",l),Z=b(s),x=d()(y,"".concat(y,"-placement-").concat(p),(e={},(0,a.Z)(e,"".concat(y,"-rtl"),"rtl"===v),(0,a.Z)(e,"".concat(y,"-color-").concat(s),Z),e),n),$={},w={};return s&&!Z&&($.background=s,w.color=s),r.createElement("div",{className:"".concat(y,"-wrapper")},c,r.createElement("div",{className:x,style:(0,o.Z)((0,o.Z)({},$),i)},r.createElement("span",{className:"".concat(y,"-text")},m),r.createElement("div",{className:"".concat(y,"-corner"),style:w})))};const v=f},51794:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294);const l=()=>{const[t,e]=(0,a.useState)(0),[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useLayoutEffect)((()=>{var t;const n=()=>{const t=o.current;if(!t)return;const n=r.current,{scrollWidth:a,clientWidth:i,childNodes:s}=t;if(a>i){const t=6,a=(null==n?void 0:n.offsetWidth)||0,o=i-t,r=s.length;let d=0,c=0;for(let t=0;t<r;t+=1)o-d-a<=0&&(c+=1),d+=s[t].offsetWidth;r>1&&c?(l(!0),e(c)):(l(!1),e(1))}else l(!1),e(0)},a=new ResizeObserver(n),i=null==(t=o.current)?void 0:t.parentElement;return i&&a.observe(i),n(),()=>{a.disconnect()}}),[r.current]),[o,r,t,n]}},45306:(t,e,n)=>{n.d(e,{u:()=>o}),n(67294);var a=n(11965);const l=t=>a.iv`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${t.colors.grayscale.light5};
  height: 65px;
  padding: 0 ${4*t.gridUnit}px;

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
`,o=({rightPanelAdditionalItems:t})=>(0,a.tZ)("div",{css:l,className:"header-with-actions"},(0,a.tZ)("div",{className:"title-panel"}),(0,a.tZ)("div",{className:"right-button-panel"},t))},80663:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(67294),l=n(29119),o=n(42968),r=n(61337),i=n(11965);const s=o.Z.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:t})=>t.colors.primary.base};
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
`,d=({id:t,initialWidth:e,minWidth:n,maxWidth:o,enable:d,children:c})=>{const[u,m]=function(t,e){const n=(0,a.useRef)(),[l,o]=(0,a.useState)(e);return(0,a.useEffect)((()=>{var e;n.current=null!=(e=n.current)?e:(0,r.rV)(r.dR.CommonResizableSidebarWidths,{}),n.current[t]&&o(n.current[t])}),[t]),[l,function(e){o(e),(0,r.LS)(r.dR.CommonResizableSidebarWidths,{...n.current,[t]:e})}]}(t,e);return(0,i.tZ)(a.Fragment,null,(0,i.tZ)(s,null,(0,i.tZ)(l.e,{enable:{right:d},handleClasses:{right:"sidebar-resizer"},size:{width:u,height:"100%"},minWidth:n,maxWidth:o,onResizeStop:(t,e,n,a)=>m(u+a.width)})),c(u))}},86057:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(11965),l=(n(67294),n(51995)),o=n(78186),r=n(13322),i=n(58593);const s=function({warningMarkdown:t,size:e,marginRight:n}){const s=(0,l.Fg)();return(0,a.tZ)(i.u,{id:"warning-tooltip",title:(0,a.tZ)(o.Z,{source:t})},(0,a.tZ)(r.Z.AlertSolid,{iconColor:s.colors.alert.base,iconSize:e,css:(0,a.iv)({marginRight:null!=n?n:2*s.gridUnit},"","")}))}},96665:(t,e,n)=>{n.r(e),n.d(e,{datasetReducer:()=>ue,default:()=>he});var a=n(67294),l=n(16550),o=n(31069),r=n(61988),i=n(68492),s=n(15926),d=n.n(s),c=n(72570);const u=(t,e)=>{const[n,l]=(0,a.useState)([]),s=e?encodeURIComponent(e):void 0,u=(0,a.useCallback)((async t=>{let e,n=[],a=0;for(;void 0===e||n.length<e;){const l=d().encode_uri({filters:t,page:a});try{const t=await o.Z.get({endpoint:`/api/v1/dataset/?q=${l}`});({count:e}=t.json);const{json:{result:r}}=t;n=[...n,...r],a+=1}catch(t){(0,c.Gb)((0,r.t)("There was an error fetching dataset")),i.Z.error((0,r.t)("There was an error fetching dataset"),t)}}l(n)}),[]);(0,a.useEffect)((()=>{const n=[{col:"database",opr:"rel_o_m",value:null==t?void 0:t.id},{col:"schema",opr:"eq",value:s},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];e&&u(n)}),[null==t?void 0:t.id,e,s,u]);const m=(0,a.useMemo)((()=>null==n?void 0:n.map((t=>t.table_name))),[n]);return{datasets:n,datasetNames:m}};var m,h=n(45306),p=n(35932),g=n(13322),b=n(83862);!function(t){t[t.SelectDatabase=0]="SelectDatabase",t[t.SelectSchema=1]="SelectSchema",t[t.SelectTable=2]="SelectTable",t[t.ChangeDataset=3]="ChangeDataset"}(m||(m={}));var f=n(42968),v=n(11965);const y=f.Z.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:t})=>t.colors.grayscale.light5};
`,Z=f.Z.div`
  width: ${({theme:t,width:e})=>null!=e?e:80*t.gridUnit}px;
  max-width: ${({theme:t,width:e})=>null!=e?e:80*t.gridUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,x=f.Z.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,$=f.Z.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,w=(0,f.Z)($)`
  flex: 1 0 auto;
  position: relative;
`,S=(0,f.Z)($)`
  flex: 1 0 auto;
  height: auto;
`,U=(0,f.Z)($)`
  flex: 0 0 auto;
  height: ${({theme:t})=>16*t.gridUnit}px;
  z-index: 0;
`,z=f.Z.div`
  ${({theme:t})=>`\n  flex: 0 0 auto;\n  height: ${16*t.gridUnit}px;\n  border-bottom: 2px solid ${t.colors.grayscale.light2};\n\n  .header-with-actions {\n    height: ${15.5*t.gridUnit}px;\n  }\n  `}
`,C=f.Z.div`
  ${({theme:t})=>`\n  margin: ${4*t.gridUnit}px;\n  font-size: ${t.typography.sizes.xl}px;\n  font-weight: ${t.typography.weights.bold};\n  `}
`,_=f.Z.div`
  ${({theme:t})=>`\n  height: 100%;\n  border-right: 1px solid ${t.colors.grayscale.light2};\n  `}
`,T=f.Z.div`
  width: 100%;
  position: relative;
`,E=f.Z.div`
  ${({theme:t})=>`\n  border-left: 1px solid ${t.colors.grayscale.light2};\n  color: ${t.colors.success.base};\n  `}
`,k=f.Z.div`
  ${({theme:t})=>`\n  height: ${16*t.gridUnit}px;\n  width: 100%;\n  border-top: 1px solid ${t.colors.grayscale.light2};\n  border-bottom: 1px solid ${t.colors.grayscale.light2};\n  color: ${t.colors.info.base};\n  border-top: ${t.gridUnit/4}px solid\n    ${t.colors.grayscale.light2};\n  padding: ${4*t.gridUnit}px;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ${t.colors.grayscale.light5};\n  z-index: ${t.zIndex.max}\n  `}
`,N=f.Z.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:t})=>t.colors.grayscale.light1};
      }
    }
  }
`,P=t=>v.iv`
  width: ${21.5*t.gridUnit}px;

  &:disabled {
    background-color: ${t.colors.grayscale.light3};
    color: ${t.colors.grayscale.light1};
  }
`,I=(0,r.t)("New dataset"),O={text:(0,r.t)("Select a database table and create dataset"),placement:"bottomRight"},M=()=>(0,v.tZ)(p.Z,{buttonStyle:"primary",tooltip:null==O?void 0:O.text,placement:null==O?void 0:O.placement,disabled:!0,css:P},(0,v.tZ)(g.Z.Save,{iconSize:"m"}),(0,r.t)("Save")),R=()=>(0,v.tZ)(b.Menu,null,(0,v.tZ)(b.Menu.Item,null,(0,r.t)("Settings")),(0,v.tZ)(b.Menu.Item,null,(0,r.t)("Delete")));function D({setDataset:t,title:e=I,editing:n=!1}){const l={title:null!=e?e:I,placeholder:I,onSave:e=>{t({type:m.ChangeDataset,payload:{name:"dataset_name",value:e}})},canEdit:!1,label:(0,r.t)("dataset name")};return(0,v.tZ)(N,null,n?(0,v.tZ)(h.u,{editableTitleProps:l,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,v.tZ)(a.Fragment,null),rightPanelAdditionalItems:M(),additionalActionsMenu:R(),menuDropdownProps:{disabled:!0},tooltipProps:O}):(0,v.tZ)(C,null,e||I))}var V,j,A=n(82607),F=n(71262),L=n(73126),W=n(73727),q=n(55786),H=n(93197),X=n(94301);function Y(){return Y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Y.apply(this,arguments)}const B=({title:t,titleId:e,...n},l)=>a.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:160,height:166,fill:"none",ref:l,"aria-labelledby":e},n),t?a.createElement("title",{id:e},t):null,V||(V=a.createElement("path",{fill:"#FAFAFA",fillRule:"evenodd",d:"M123.638 8a.5.5 0 0 0-.5.5V158h28.758V8.5a.5.5 0 0 0-.5-.5zM84.793 40.643a.5.5 0 0 1 .5-.5h27.759a.5.5 0 0 1 .5.5V158H84.793zM46.95 72.285a.5.5 0 0 0-.5.5V158h28.758V72.785a.5.5 0 0 0-.5-.5zM8.604 93.715a.5.5 0 0 0-.5.5V158h28.758V94.215a.5.5 0 0 0-.5-.5z",clipRule:"evenodd"})),j||(j=a.createElement("path",{fill:"#D9D9D9",d:"M123.138 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zm-38.344 0v.5h.5v-.5zm-28.759 0h-.5v.5h.5zm-38.344-.001h-.5v.5h.5zm28.758 0v.5h.5v-.5zM8.104 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zM123.639 8.5v-1a1 1 0 0 0-1 1zm0 149.5V8.5h-1V158zm28.258-.5h-28.758v1h28.758zm-.5-149V158h1V8.5zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1h-27.758zM85.293 39.643a1 1 0 0 0-1 1h1zm27.759 0H85.293v1h27.759zm1 1a1 1 0 0 0-1-1v1zm0 117.357V40.643h-1V158zm-29.259.5h28.759v-1H84.793zm-.5-117.857V158h1V40.643zM46.95 72.785v-1a1 1 0 0 0-1 1zm0 85.214V72.785h-1V158zm28.258-.5H46.45v1h28.758zm-.5-84.714V158h1V72.785zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H46.95zM8.604 94.215v-1a1 1 0 0 0-1 1zm0 63.785V94.215h-1V158zm28.258-.5H8.104v1h28.758zm-.5-63.285V158h1V94.215zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H8.604z"}))),G=(0,a.forwardRef)(B);var K=n(14114),Q=n(34858),J=n(93139),tt=n(30381),et=n.n(tt),nt=n(51794),at=n(58593);const lt=f.Z.div`
  & > span {
    width: 100%;
    display: flex;

    .ant-tooltip-open {
      display: inline;
    }
  }
`,ot=f.Z.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`,rt=f.Z.span`
  &:not(:last-child)::after {
    content: ', ';
  }
`,it=f.Z.div`
  .link {
    color: ${({theme:t})=>t.colors.grayscale.light5};
    display: block;
    text-decoration: underline;
  }
`,st=f.Z.span`
  ${({theme:t})=>`\n  cursor: pointer;\n  color: ${t.colors.primary.dark1};\n  font-weight: ${t.typography.weights.normal};\n  `}
`;function dt({items:t,renderVisibleItem:e=(t=>t),renderTooltipItem:n=(t=>t),getKey:l=(t=>t),maxLinks:o=20}){const[i,s,d,c]=(0,nt.Z)(),u=(0,a.useMemo)((()=>t.length>o?t.length-o:void 0),[t,o]),m=(0,a.useMemo)((()=>(0,v.tZ)(ot,{ref:i,"data-test":"crosslinks"},t.map((t=>(0,v.tZ)(rt,{key:l(t)},e(t)))))),[l,t,e]),h=(0,a.useMemo)((()=>t.slice(0,o).map((t=>(0,v.tZ)(it,{key:l(t)},n(t))))),[l,t,o,n]);return(0,v.tZ)(lt,null,(0,v.tZ)(at.u,{placement:"top",title:d?(0,v.tZ)(a.Fragment,null,h,u&&(0,v.tZ)("span",null,(0,r.t)("+ %s more",u))):null},m,c&&(0,v.tZ)(st,{ref:s},"+",d)))}const ct=t=>({key:t.id,to:`/superset/dashboard/${t.id}`,target:"_blank",rel:"noreferer noopener",children:t.dashboard_title}),ut=t=>v.iv`
  color: ${t.colors.grayscale.light5};
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`,mt=[{key:"slice_name",title:(0,r.t)("Chart"),width:"320px",sorter:!0,render:(t,e)=>(0,v.tZ)(W.rU,{to:e.url},e.slice_name)},{key:"owners",title:(0,r.t)("Chart owners"),width:"242px",render:(t,e)=>{var n,a;return(0,v.tZ)(dt,{items:null!=(n=null==(a=e.owners)?void 0:a.map((t=>`${t.first_name} ${t.last_name}`)))?n:[]})}},{key:"last_saved_at",title:(0,r.t)("Chart last modified"),width:"209px",sorter:!0,defaultSortOrder:"descend",render:(t,e)=>e.last_saved_at?et().utc(e.last_saved_at).fromNow():null},{key:"last_saved_by.first_name",title:(0,r.t)("Chart last modified by"),width:"216px",sorter:!0,render:(t,e)=>e.last_saved_by?`${e.last_saved_by.first_name} ${e.last_saved_by.last_name}`:null},{key:"dashboards",title:(0,r.t)("Dashboard usage"),width:"420px",render:(t,e)=>(0,v.tZ)(dt,{items:e.dashboards,renderVisibleItem:t=>(0,v.tZ)(W.rU,ct(t)),renderTooltipItem:t=>(0,v.tZ)(W.rU,(0,L.Z)({},ct(t),{css:ut})),getKey:t=>t.id})}],ht=t=>v.iv`
  && th.ant-table-cell {
    color: ${t.colors.grayscale.light1};
  }

  .ant-table-placeholder {
    display: none;
  }
`,pt=(0,v.tZ)(a.Fragment,null,(0,v.tZ)(g.Z.PlusOutlined,{iconSize:"m",css:v.iv`
        & > .anticon {
          line-height: 0;
        }
      `}),(0,r.t)("Create chart with dataset")),gt=(0,f.Z)(X.XJ)`
  margin: ${({theme:t})=>13*t.gridUnit}px 0;
`,bt=({datasetId:t})=>{const{loading:e,recordCount:n,data:l,onChange:o}=(t=>{const{addDangerToast:e}=(0,K.e1)(),n=(0,a.useMemo)((()=>[{id:"datasource_id",operator:J.p.Equals,value:t}]),[t]),{state:{loading:l,resourceCount:o,resourceCollection:i},fetchData:s}=(0,Q.Yi)("chart",(0,r.t)("chart"),e,!0,[],n),d=(0,a.useMemo)((()=>i.map((t=>({...t,key:t.id})))),[i]),c=(0,a.useCallback)(((t,e,n)=>{var a,l;const o=(null!=(a=t.current)?a:1)-1,r=null!=(l=t.pageSize)?l:0,i=(0,q.Z)(n).filter((({columnKey:t})=>"string"==typeof t)).map((({columnKey:t,order:e})=>({id:t,desc:"descend"===e})));s({pageIndex:o,pageSize:r,sortBy:i,filters:[]})}),[s]);return(0,a.useEffect)((()=>{s({pageIndex:0,pageSize:25,sortBy:[{id:"last_saved_at",desc:!0}],filters:[]})}),[s]),{loading:l,recordCount:o,data:d,onChange:c}})(t),i=(0,a.useCallback)((()=>window.open(`/explore/?dataset_type=table&dataset_id=${t}`,"_blank")),[t]);return(0,v.tZ)("div",{css:l.length?null:ht},(0,v.tZ)(H.ZP,{columns:mt,data:l,size:H.ex.Middle,defaultPageSize:25,recordCount:n,loading:e,onChange:o}),l.length||e?null:(0,v.tZ)(gt,{image:(0,v.tZ)(G,null),title:(0,r.t)("No charts"),description:(0,r.t)("This dataset is not used to power any charts."),buttonText:pt,buttonAction:i}))},ft=(0,f.Z)(F.ZP)`
  ${({theme:t})=>`\n  margin-top: ${8.5*t.gridUnit}px;\n  padding-left: ${4*t.gridUnit}px;\n  padding-right: ${4*t.gridUnit}px;\n\n  .ant-tabs-top > .ant-tabs-nav::before {\n    width: ${50*t.gridUnit}px;\n  }\n  `}
`,vt=f.Z.div`
  ${({theme:t})=>`\n  .ant-badge {\n    width: ${8*t.gridUnit}px;\n    margin-left: ${2.5*t.gridUnit}px;\n  }\n  `}
`,yt={USAGE_TEXT:(0,r.t)("Usage"),COLUMNS_TEXT:(0,r.t)("Columns"),METRICS_TEXT:(0,r.t)("Metrics")},Zt=({id:t})=>{const{usageCount:e}=(t=>{const[e,n]=(0,a.useState)(0),l=(0,a.useCallback)((()=>o.Z.get({endpoint:`/api/v1/dataset/${t}/related_objects`}).then((({json:t})=>{n(null==t?void 0:t.charts.count)})).catch((t=>{(0,c.Gb)((0,r.t)("There was an error fetching dataset's related objects")),i.Z.error(t)}))),[t]);return(0,a.useEffect)((()=>{t&&l()}),[t,l]),{usageCount:e}})(t),n=(0,v.tZ)(vt,null,(0,v.tZ)("span",null,yt.USAGE_TEXT),e>0&&(0,v.tZ)(A.Z,{count:e}));return(0,v.tZ)(ft,{moreIcon:null,fullWidth:!1},(0,v.tZ)(F.ZP.TabPane,{tab:yt.COLUMNS_TEXT,key:"1"}),(0,v.tZ)(F.ZP.TabPane,{tab:yt.METRICS_TEXT,key:"2"}),(0,v.tZ)(F.ZP.TabPane,{tab:n,key:"3"},(0,v.tZ)(bt,{datasetId:t})))};var xt=n(51995),$t=n(29487);const wt=(t,e,n)=>{var a;return null==e||null==(a=e[t])||null==a.localeCompare?void 0:a.localeCompare(null==n?void 0:n[t])},St=n.p+"loading.cff8a5da.gif",Ut=f.Z.div`
  padding: ${({theme:t})=>8*t.gridUnit}px
    ${({theme:t})=>6*t.gridUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,zt=(0,f.Z)(X.XJ)`
  max-width: 50%;

  p {
    width: ${({theme:t})=>115*t.gridUnit}px;
  }
`,Ct=(0,r.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),_t=(0,r.t)("create dataset from SQL query"),Tt=(0,r.t)(" to open SQL Lab. From there you can save the query as a dataset."),Et=(0,r.t)("Select dataset source"),kt=(0,r.t)("No table columns"),Nt=(0,r.t)("This database table does not contain any data. Please select a different table."),Pt=(0,r.t)("An Error Occurred"),It=(0,r.t)("Unable to load columns for the selected table. Please select a different table."),Ot=t=>{const{hasError:e,tableName:n,hasColumns:l}=t;let o="empty-dataset.svg",r=Et,i=(0,v.tZ)(a.Fragment,null,Ct,(0,v.tZ)(W.rU,{to:"/sqllab"},(0,v.tZ)("span",{role:"button",tabIndex:0},_t)),Tt);return e?(r=Pt,i=(0,v.tZ)(a.Fragment,null,It),o=void 0):n&&!l&&(o="no-columns.svg",r=kt,i=(0,v.tZ)(a.Fragment,null,Nt)),(0,v.tZ)(Ut,null,(0,v.tZ)(zt,{image:o,title:r,description:i}))};var Mt;!function(t){t.ABSOLUTE="absolute",t.RELATIVE="relative"}(Mt||(Mt={}));const Rt=f.Z.div`
  ${({theme:t,position:e})=>`\n  position: ${e};\n  margin: ${4*t.gridUnit}px\n    ${3*t.gridUnit}px\n    ${3*t.gridUnit}px\n    ${6*t.gridUnit}px;\n  font-size: ${6*t.gridUnit}px;\n  font-weight: ${t.typography.weights.medium};\n  padding-bottom: ${3*t.gridUnit}px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  .anticon:first-of-type {\n    margin-right: ${4*t.gridUnit}px;\n  }\n\n  .anticon:nth-of-type(2) {\n    margin-left: ${4*t.gridUnit}px;\n  `}
`,Dt=f.Z.div`
  ${({theme:t})=>`\n  margin-left: ${6*t.gridUnit}px;\n  margin-bottom: ${3*t.gridUnit}px;\n  font-weight: ${t.typography.weights.bold};\n  `}
`,Vt=f.Z.div`
  ${({theme:t})=>`\n  padding: ${8*t.gridUnit}px\n    ${6*t.gridUnit}px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  `}
`,jt=f.Z.div`
  ${({theme:t})=>`\n  max-width: 50%;\n  width: 200px;\n\n  img {\n    width: 120px;\n    margin-left: 40px;\n  }\n\n  div {\n    width: 100%;\n    margin-top: ${3*t.gridUnit}px;\n    text-align: center;\n    font-weight: ${t.typography.weights.normal};\n    font-size: ${t.typography.sizes.l}px;\n    color: ${t.colors.grayscale.light1};\n  }\n  `}
`,At=f.Z.div`
  ${({theme:t})=>`\n  position: relative;\n  margin: ${3*t.gridUnit}px;\n  margin-left: ${6*t.gridUnit}px;\n  height: calc(100% - ${60*t.gridUnit}px);\n  overflow: auto;\n  `}
`,Ft=f.Z.div`
  ${({theme:t})=>`\n  position: relative;\n  margin: ${3*t.gridUnit}px;\n  margin-left: ${6*t.gridUnit}px;\n  height: calc(100% - ${30*t.gridUnit}px);\n  overflow: auto;\n  `}
`,Lt=f.Z.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,Wt=(0,f.Z)($t.Z)`
  ${({theme:t})=>`\n  border: 1px solid ${t.colors.info.base};\n  padding: ${4*t.gridUnit}px;\n  margin: ${6*t.gridUnit}px ${6*t.gridUnit}px\n    ${8*t.gridUnit}px;\n  .view-dataset-button {\n    position: absolute;\n    top: ${4*t.gridUnit}px;\n    right: ${4*t.gridUnit}px;\n    font-weight: ${t.typography.weights.normal};\n\n    &:hover {\n      color: ${t.colors.secondary.dark3};\n      text-decoration: underline;\n    }\n  }\n  `}
`,qt=(0,r.t)("Refreshing columns"),Ht=(0,r.t)("Table columns"),Xt=(0,r.t)("Loading"),Yt=["5","10","15","25"],Bt=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(t,e)=>wt("name",t,e)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(t,e)=>wt("type",t,e)}],Gt=(0,r.t)("This table already has a dataset associated with it. You can only associate one dataset with a table.\n"),Kt=(0,r.t)("View Dataset"),Qt=({tableName:t,columnList:e,loading:n,hasError:l,datasets:o})=>{var i;const s=(0,xt.Fg)(),d=null!=(i=(null==e?void 0:e.length)>0)&&i,c=null==o?void 0:o.map((t=>t.table_name)),u=null==o?void 0:o.find((e=>e.table_name===t));let m,h;return n&&(h=(0,v.tZ)(Vt,null,(0,v.tZ)(jt,null,(0,v.tZ)("img",{alt:Xt,src:St}),(0,v.tZ)("div",null,qt)))),n||(m=!n&&t&&d&&!l?(0,v.tZ)(a.Fragment,null,(0,v.tZ)(Dt,null,Ht),u?(0,v.tZ)(At,null,(0,v.tZ)(Lt,null,(0,v.tZ)(H.ZP,{loading:n,size:H.ex.Small,columns:Bt,data:e,pageSizeOptions:Yt,defaultPageSize:25}))):(0,v.tZ)(Ft,null,(0,v.tZ)(Lt,null,(0,v.tZ)(H.ZP,{loading:n,size:H.ex.Small,columns:Bt,data:e,pageSizeOptions:Yt,defaultPageSize:25})))):(0,v.tZ)(Ot,{hasColumns:d,hasError:l,tableName:t})),(0,v.tZ)(a.Fragment,null,t&&(0,v.tZ)(a.Fragment,null,(null==c?void 0:c.includes(t))&&(p=u,(0,v.tZ)(Wt,{closable:!1,type:"info",showIcon:!0,message:(0,r.t)("This table already has a dataset"),description:(0,v.tZ)(a.Fragment,null,Gt,(0,v.tZ)("span",{role:"button",onClick:()=>{window.open(null==p?void 0:p.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button"},Kt))})),(0,v.tZ)(Rt,{position:!n&&d?Mt.RELATIVE:Mt.ABSOLUTE,title:t||""},t&&(0,v.tZ)(g.Z.Table,{iconColor:s.colors.grayscale.base}),t)),m,h);var p},Jt=({tableName:t,dbId:e,schema:n,setHasColumns:l,datasets:s})=>{const[d,u]=(0,a.useState)([]),[m,h]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1),b=(0,a.useRef)(t);return(0,a.useEffect)((()=>{b.current=t,t&&n&&e&&(async t=>{const{dbId:e,tableName:n,schema:a}=t;h(!0),null==l||l(!1);const s=`/api/v1/database/${e}/table/${n}/${a}/`;try{const t=await o.Z.get({endpoint:s});if((t=>{let e=!0;if("string"!=typeof(null==t?void 0:t.name)&&(e=!1),e&&!Array.isArray(t.columns)&&(e=!1),e&&t.columns.length>0){const n=t.columns.some(((t,e)=>{const n=(t=>{let e=!0;const n="The object provided to isITableColumn does match the interface.";return"string"!=typeof(null==t?void 0:t.name)&&(e=!1,console.error(`${n} The property 'name' is required and must be a string`)),e&&"string"!=typeof(null==t?void 0:t.type)&&(e=!1,console.error(`${n} The property 'type' is required and must be a string`)),e})(t);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${e}] is invalid and does not match the ITableColumn interface`),!n}));e=!n}return e})(null==t?void 0:t.json)){const e=t.json;e.name===b.current&&(u(e.columns),null==l||l(e.columns.length>0),g(!1))}else u([]),null==l||l(!1),g(!0),(0,c.Gb)((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",s)),i.Z.error((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",s))}catch(t){u([]),null==l||l(!1),g(!0)}finally{h(!1)}})({tableName:t,dbId:e,schema:n})}),[t,e,n]),(0,v.tZ)(Qt,{columnList:d,hasError:p,loading:m,tableName:t,datasets:s})};var te=n(17982),ee=n(61337);const ne=f.Z.div`
  ${({theme:t})=>`\n    padding: ${4*t.gridUnit}px;\n    height: 100%;\n    background-color: ${t.colors.grayscale.light5};\n    position: relative;\n    .emptystate {\n      height: auto;\n      margin-top: ${17.5*t.gridUnit}px;\n    }\n    .section-title {\n      margin-top: ${5.5*t.gridUnit}px;\n      margin-bottom: ${11*t.gridUnit}px;\n      font-weight: ${t.typography.weights.bold};\n    }\n    .table-title {\n      margin-top: ${11*t.gridUnit}px;\n      margin-bottom: ${6*t.gridUnit}px;\n      font-weight: ${t.typography.weights.bold};\n    }\n    .options-list {\n      overflow: auto;\n      position: absolute;\n      bottom: 0;\n      top: ${92.25*t.gridUnit}px;\n      left: ${3.25*t.gridUnit}px;\n      right: 0;\n\n      .no-scrollbar {\n        margin-right: ${4*t.gridUnit}px;\n      }\n\n      .options {\n        cursor: pointer;\n        padding: ${1.75*t.gridUnit}px;\n        border-radius: ${t.borderRadius}px;\n        :hover {\n          background-color: ${t.colors.grayscale.light4}\n        }\n      }\n\n      .options-highlighted {\n        cursor: pointer;\n        padding: ${1.75*t.gridUnit}px;\n        border-radius: ${t.borderRadius}px;\n        background-color: ${t.colors.primary.dark1};\n        color: ${t.colors.grayscale.light5};\n      }\n\n      .options, .options-highlighted {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    }\n    form > span[aria-label="refresh"] {\n      position: absolute;\n      top: ${69*t.gridUnit}px;\n      left: ${42.75*t.gridUnit}px;\n      font-size: ${4.25*t.gridUnit}px;\n    }\n    .table-form {\n      margin-bottom: ${8*t.gridUnit}px;\n    }\n    .loading-container {\n      position: absolute;\n      top: ${89.75*t.gridUnit}px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      img {\n        width: ${20*t.gridUnit}px;\n        margin-bottom: ${2.5*t.gridUnit}px;\n      }\n      p {\n        color: ${t.colors.grayscale.light1};\n      }\n    }\n`}
`;function ae({setDataset:t,dataset:e,datasetNames:n}){const{addDangerToast:l}=(0,K.e1)(),o=(0,a.useCallback)((e=>{t({type:m.SelectDatabase,payload:{db:e}})}),[t]);(0,a.useEffect)((()=>{const t=(0,ee.rV)(ee.dR.Database,null);t&&o(t)}),[o]);const i=(0,a.useCallback)((t=>(0,v.tZ)(te.ez,{table:null!=n&&n.includes(t.value)?{...t,extra:{warning_markdown:(0,r.t)("This table already has a dataset")}}:t})),[n]);return(0,v.tZ)(ne,null,(0,v.tZ)(te.ZP,(0,L.Z)({database:null==e?void 0:e.db,handleError:l,emptyState:(0,X.UX)(!1),onDbChange:o,onSchemaChange:e=>{e&&t({type:m.SelectSchema,payload:{name:"schema",value:e}})},onTableSelectChange:e=>{t({type:m.SelectTable,payload:{name:"table_name",value:e}})},sqlLabMode:!1,customTableOptionLabelRenderer:i},(null==e?void 0:e.schema)&&{schema:e.schema})))}var le=n(97381),oe=n(3741);const re=["db","schema","table_name"],ie=[oe.Ph,oe.FY,oe.Eh,oe.TA],se=(0,K.ZP)((function({datasetObject:t,addDangerToast:e,hasColumns:n=!1,datasets:o}){const i=(0,l.k6)(),{createResource:s}=(0,Q.LE)("dataset",(0,r.t)("dataset"),e),d=(0,r.t)("Select a database table."),c=(0,r.t)("Create dataset and create chart"),u=!(null!=t&&t.table_name)||!n||(null==o?void 0:o.includes(null==t?void 0:t.table_name));return(0,v.tZ)(a.Fragment,null,(0,v.tZ)(p.Z,{onClick:()=>{if(t){const e=(t=>{let e=0;const n=Object.keys(t).reduce(((n,a)=>(re.includes(a)&&t[a]&&(e+=1),e)),0);return ie[n]})(t);(0,le.logEvent)(e,t)}else(0,le.logEvent)(oe.Ph,{});i.goBack()}},(0,r.t)("Cancel")),(0,v.tZ)(p.Z,{buttonStyle:"primary",disabled:u,tooltip:null!=t&&t.table_name?void 0:d,onClick:()=>{if(t){var e;const n={database:null==(e=t.db)?void 0:e.id,schema:t.schema,table_name:t.table_name};s(n).then((e=>{e&&"number"==typeof e&&((0,le.logEvent)(oe.P$,t),i.push(`/chart/add/?dataset=${t.table_name}`))}))}}},c))}));var de=n(80663);function ce({header:t,leftPanel:e,datasetPanel:n,rightPanel:a,footer:l}){const o=(0,xt.Fg)();return(0,v.tZ)(y,{"data-test":"dataset-layout-wrapper"},t&&(0,v.tZ)(z,null,t),(0,v.tZ)(w,null,e&&(0,v.tZ)(de.Z,{id:"dataset",initialWidth:80*o.gridUnit,minWidth:80*o.gridUnit,enable:!0},(t=>(0,v.tZ)(Z,{width:t},(0,v.tZ)(_,null,e)))),(0,v.tZ)(x,null,(0,v.tZ)(S,null,n&&(0,v.tZ)(T,null,n),a&&(0,v.tZ)(E,null,a)),(0,v.tZ)(U,null,l&&(0,v.tZ)(k,null,l)))))}function ue(t,e){const n={...t||{}};switch(e.type){case m.SelectDatabase:return{...n,...e.payload,schema:null,table_name:null};case m.SelectSchema:return{...n,[e.payload.name]:e.payload.value,table_name:null};case m.SelectTable:return{...n,[e.payload.name]:e.payload.value};case m.ChangeDataset:return{...n,[e.payload.name]:e.payload.value};default:return null}}const me="/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc";function he(){const[t,e]=(0,a.useReducer)(ue,null),[n,o]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),{datasets:s,datasetNames:d}=u(null==t?void 0:t.db,null==t?void 0:t.schema),{datasetId:c}=(0,l.UO)();return(0,a.useEffect)((()=>{Number.isNaN(parseInt(c,10))||i(!0)}),[c]),(0,v.tZ)(ce,{header:(0,v.tZ)(D,{setDataset:e,title:null==t?void 0:t.table_name}),leftPanel:r?null:(0,v.tZ)(ae,{setDataset:e,dataset:t,datasetNames:d}),datasetPanel:r?(0,v.tZ)(Zt,{id:c}):(0,v.tZ)(Jt,{tableName:null==t?void 0:t.table_name,dbId:null==t||null==(m=t.db)?void 0:m.id,schema:null==t?void 0:t.schema,setHasColumns:o,datasets:s}),footer:(0,v.tZ)(se,{url:me,datasetObject:t,hasColumns:n,datasets:d})});var m}}}]);
//# sourceMappingURL=700bd9262d6c50f2d031.chunk.js.map