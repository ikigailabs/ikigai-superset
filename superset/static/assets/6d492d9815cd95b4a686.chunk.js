"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4502],{47933:(e,t,a)=>{a.d(t,{ZP:()=>k});var n=a(4942),l=a(87462),o=a(67294),r=a(50132),i=a(94184),s=a.n(i),d=a(42550),c=a(65632),u=o.createContext(null),p=u.Provider;const h=u;var m=a(21687),g=function(e,t){var a,i=o.useContext(h),u=o.useContext(c.E_),p=u.getPrefixCls,g=u.direction,v=o.useRef(),b=(0,d.sQ)(t,v);o.useEffect((function(){(0,m.Z)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var f=e.prefixCls,y=e.className,Z=e.children,x=e.style,_=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["prefixCls","className","children","style"]),w=p("radio",f),C=(0,l.Z)({},_);i&&(C.name=i.name,C.onChange=function(t){e.onChange&&e.onChange(t),(null==i?void 0:i.onChange)&&i.onChange(t)},C.checked=e.value===i.value,C.disabled=e.disabled||i.disabled);var S=s()("".concat(w,"-wrapper"),(a={},(0,n.Z)(a,"".concat(w,"-wrapper-checked"),C.checked),(0,n.Z)(a,"".concat(w,"-wrapper-disabled"),C.disabled),(0,n.Z)(a,"".concat(w,"-wrapper-rtl"),"rtl"===g),a),y);return o.createElement("label",{className:S,style:x,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.default,(0,l.Z)({},C,{prefixCls:w,ref:b})),void 0!==Z?o.createElement("span",null,Z):null)},v=o.forwardRef(g);v.displayName="Radio",v.defaultProps={type:"radio"};const b=v;var f=a(29439),y=a(76632),Z=a(97647),x=o.forwardRef((function(e,t){var a=o.useContext(c.E_),l=a.getPrefixCls,r=a.direction,i=o.useContext(Z.Z),d=(0,y.Z)(e.defaultValue,{value:e.value}),u=(0,f.Z)(d,2),h=u[0],m=u[1];return o.createElement(p,{value:{onChange:function(t){var a=h,n=t.target.value;"value"in e||m(n);var l=e.onChange;l&&n!==a&&l(t)},value:h,disabled:e.disabled,name:e.name}},function(){var a,d=e.prefixCls,c=e.className,u=void 0===c?"":c,p=e.options,m=e.optionType,g=e.buttonStyle,v=void 0===g?"outline":g,f=e.disabled,y=e.children,Z=e.size,x=e.style,_=e.id,w=e.onMouseEnter,C=e.onMouseLeave,S=l("radio",d),k="".concat(S,"-group"),E=y;if(p&&p.length>0){var $="button"===m?"".concat(S,"-button"):S;E=p.map((function(e){return"string"==typeof e?o.createElement(b,{key:e,prefixCls:$,disabled:f,value:e,checked:h===e},e):o.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:$,disabled:e.disabled||f,value:e.value,checked:h===e.value,style:e.style},e.label)}))}var N=Z||i,P=s()(k,"".concat(k,"-").concat(v),(a={},(0,n.Z)(a,"".concat(k,"-").concat(N),N),(0,n.Z)(a,"".concat(k,"-rtl"),"rtl"===r),a),u);return o.createElement("div",{className:P,style:x,onMouseEnter:w,onMouseLeave:C,id:_,ref:t},E)}())}));const _=o.memo(x);var w=function(e,t){var a=o.useContext(h),n=o.useContext(c.E_).getPrefixCls,r=e.prefixCls,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["prefixCls"]),s=n("radio-button",r);return a&&(i.checked=e.value===a.value,i.disabled=e.disabled||a.disabled),o.createElement(b,(0,l.Z)({prefixCls:s},i,{type:"radio",ref:t}))};const C=o.forwardRef(w);var S=b;S.Button=C,S.Group=_;const k=S},20838:(e,t,a)=>{var n=a(16338),l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(10434)),r=l(a(38416)),i=n(a(67294)),s=n(a(53861)),d=l(a(94184)),c=l(a(36091)),u=l(a(75019)),p=l(a(16330)),h=l(a(72454)),m=a(31929);function g(e){var t,a,n=e.type,l=e.className,g=e.size,v=e.onEdit,b=e.hideAdd,f=e.centered,y=e.addIcon,Z=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),x=Z.prefixCls,_=i.useContext(m.ConfigContext),w=_.getPrefixCls,C=_.direction,S=w("tabs",x);return"editable-card"===n&&(a={onEdit:function(e,t){var a=t.key,n=t.event;null==v||v("add"===e?n:a,e)},removeIcon:i.createElement(p.default,null),addIcon:y||i.createElement(u.default,null),showAdd:!0!==b}),(0,h.default)(!("onPrevClick"in Z)&&!("onNextClick"in Z),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),i.createElement(s.default,(0,o.default)({direction:C},Z,{moreTransitionName:"slide-up",className:(0,d.default)((t={},(0,r.default)(t,"".concat(S,"-").concat(g),g),(0,r.default)(t,"".concat(S,"-card"),["card","editable-card"].includes(n)),(0,r.default)(t,"".concat(S,"-editable-card"),"editable-card"===n),(0,r.default)(t,"".concat(S,"-centered"),f),t),l),editable:a,moreIcon:i.createElement(c.default,null),prefixCls:S}))}g.TabPane=s.TabPane;var v=g;t.default=v},36091:(e,t,a)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=(n=a(54618))&&n.__esModule?n:{default:n};t.default=l,e.exports=l},75019:(e,t,a)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=(n=a(36307))&&n.__esModule?n:{default:n};t.default=l,e.exports=l},54618:(e,t,a)=>{var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(72604)),r=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}(a(67294)),i=n(a(33282)),s=n(a(26545));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var c=function(e,t){return r.createElement(s.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:i.default}))};c.displayName="EllipsisOutlined";var u=r.forwardRef(c);t.default=u},36307:(e,t,a)=>{var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(72604)),r=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}(a(67294)),i=n(a(57096)),s=n(a(26545));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var c=function(e,t){return r.createElement(s.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:i.default}))};c.displayName="PlusOutlined";var u=r.forwardRef(c);t.default=u},54070:(e,t,a)=>{a.d(t,{w:()=>i}),a(67294);var n=a(58593),l=a(83379),o=a(61988),r=a(11965);const i=({user:e,date:t})=>{const a=(0,r.tZ)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,l.Z)(e),i=(0,o.t)("Modified by: %s",t);return(0,r.tZ)(n.u,{title:i,placement:"bottom"},a)}return a}},60972:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(61988),o=a(34858),r=a(29487),i=a(11965);const s=(0,o.z)(),d=s?s.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:t})=>(0,i.tZ)(r.Z,{closable:!1,css:e=>(e=>i.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,i.tZ)(n.Fragment,null,(0,i.tZ)("br",null),(0,l.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,i.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,l.t)("here")),"."):""})},87183:(e,t,a)=>{a.d(t,{Y:()=>i});var n=a(42968),l=a(47933);const o=(0,n.Z)(l.ZP)`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({theme:e})=>4*e.gridUnit}px;
    height: ${({theme:e})=>4*e.gridUnit}px;
    border-width: 2px;
    border-color: ${({theme:e})=>e.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({theme:e})=>e.gridUnit+1}px;
      border-color: ${({theme:e})=>e.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({theme:e})=>e.gridUnit+2}px;
      height: ${({theme:e})=>e.gridUnit+2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({theme:e})=>e.colors.primary.dark1};
    }
  }
`,r=(0,n.Z)(l.ZP.Group)`
  font-size: inherit;
`,i=Object.assign(o,{Group:r,Button:l.ZP.Button})},71262:(e,t,a)=>{a.d(t,{Xv:()=>h,cl:()=>g,ZP:()=>v});var n=a(73126),l=(a(67294),a(11965)),o=a(42968),r=a(20838),i=a(13322);const s=({animated:e=!1,fullWidth:t=!0,allowOverflow:a=!0,...o})=>(0,l.tZ)(r.default,(0,n.Z)({animated:e},o,{css:e=>l.iv`
      overflow: ${a?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${a?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${t&&l.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `})),d=(0,o.Z)(r.default.TabPane)``,c=Object.assign(s,{TabPane:d}),u=(0,o.Z)(s)`
  ${({theme:e,fullWidth:t})=>`\n    .ant-tabs-content-holder {\n      background: ${e.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*e.gridUnit}px;\n    }\n\n    ${t?l.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}
`,p=(0,o.Z)(i.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,h=Object.assign(u,{TabPane:d});h.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},h.TabPane.defaultProps={closeIcon:(0,l.tZ)(p,{role:"button",tabIndex:0})};const m=(0,o.Z)(h)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;
    padding: ${({theme:e})=>`${3*e.gridUnit}px ${e.gridUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,g=Object.assign(m,{TabPane:d}),v=c},18451:(e,t,a)=>{a.d(t,{c:()=>l});var n=a(28216);function l(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},61646:(e,t,a)=>{a.r(t),a.d(t,{default:()=>zt});var n=a(75049),l=a(42968),o=a(61988),r=a(31069),i=a(67294),s=a(15926),d=a.n(s),c=a(28216),u=a(35755),p=a(61337),h=a(38703),m=a(34858),g=a(40768),v=a(14114),b=a(86074),f=a(17198),y=a(23525),Z=a(27600),x=a(58593),_=a(13322),w=a(22318),C=a(93139),S=a(32228),k=a(78718),E=a.n(k),$=a(41609),N=a.n($),P=a(16550),T=a(71262),O=a(4715),U=a(29487),M=a(74069),A=a(35932);function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},L.apply(this,arguments)}const q={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},D=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function I(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const z={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},F=Object.keys(z);class R extends i.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(q).forEach((t=>{e.style[t]=q[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);D.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,l={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(l,e.onReflow.bind(this,l))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,l=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>l&&(n++,e.push(a),l=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const l=this.canvas.lastElementChild;let o=I(l,2);for(;o&&(l.offsetTop>n||l.offsetHeight>o.offsetHeight||l.offsetTop>o.offsetTop);)this.canvas.removeChild(o),o=I(l,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:l,trimRight:o,className:r}=a,s=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(a,["component","ellipsis","trimRight","className"]);return i.createElement(n,L({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${r}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(s,F)),t&&o?e.replace(/[\s\uFEFF\xA0]+$/,""):e,i.createElement("wbr",null),t&&i.createElement("span",{className:"LinesEllipsis-ellipsis"},l))}}R.defaultProps=z;const j=R;var H=a(11965);const B=(0,l.Z)(A.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,J=l.Z.div`
  padding: ${({theme:e})=>4*e.gridUnit}px;
  height: ${({theme:e})=>18*e.gridUnit}px;
  margin: ${({theme:e})=>3*e.gridUnit}px 0;

  .default-db-icon {
    font-size: 36px;
    color: ${({theme:e})=>e.colors.grayscale.base};
    margin-right: 0;
    span:first-of-type {
      margin-right: 0;
    }
  }

  &:first-of-type {
    margin-right: 0;
  }

  img {
    width: ${({theme:e})=>10*e.gridUnit}px;
    height: ${({theme:e})=>10*e.gridUnit}px;
    margin: 0;
    &:first-of-type {
      margin-right: 0;
    }
  }
  svg {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,Q=l.Z.div`
  max-height: calc(1.5em * 2);
  white-space: break-spaces;

  &:first-of-type {
    margin-right: 0;
  }

  .LinesEllipsis {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,V=l.Z.div`
  padding: ${({theme:e})=>4*e.gridUnit}px 0;
  border-radius: 0 0 ${({theme:e})=>e.borderRadius}px
    ${({theme:e})=>e.borderRadius}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light4};
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:first-of-type {
    margin-right: 0;
  }
`,W=(0,l.Z)((({icon:e,altText:t,buttonText:a,...n})=>(0,H.tZ)(B,n,(0,H.tZ)(J,null,e&&(0,H.tZ)("img",{src:e,alt:t}),!e&&(0,H.tZ)(_.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,H.tZ)(V,null,(0,H.tZ)(Q,null,(0,H.tZ)(j,{text:a,maxLine:"2",basedOn:"words",trimRight:!0}))))))`
  text-transform: none;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
  font-weight: ${({theme:e})=>e.typography.weights.normal};
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  margin: 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.grayscale.light5};
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    box-shadow: 4px 4px 20px ${({theme:e})=>e.colors.grayscale.light2};
  }
`;var X,G,K=a(8272),Y=a(73684),ee=a(72875),te=a(60972),ae=a(18451);!function(e){e.SqlalchemyUri="sqlalchemy_form",e.DynamicForm="dynamic_form"}(X||(X={})),function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(G||(G={}));var ne=a(94184),le=a.n(ne),oe=a(49576),re=a(43700),ie=a(94670);const se=H.iv`
  margin-bottom: 0;
`,de=l.Z.header`
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  line-height: ${({theme:e})=>6*e.gridUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  .subheader-text {
    line-height: ${({theme:e})=>4.25*e.gridUnit}px;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  h4 {
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    margin: 0;
    padding: 0;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
  }

  .select-db {
    padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({theme:e})=>4*e.gridUnit}px;
    }
  }
`,ce=H.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,ue=H.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,pe=e=>H.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,he=e=>H.iv`
  padding-left: ${2*e.gridUnit}px;
`,me=e=>H.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,ge=e=>H.iv`
  .ant-select-dropdown {
    height: ${40*e.gridUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.gridUnit}px ${4*e.gridUnit}px
      ${4*e.gridUnit}px;
  }

  .ant-modal-close-x .close {
    color: ${e.colors.grayscale.dark1};
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.gridUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.gridUnit}px;
  }
`,ve=e=>H.iv`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;

  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }

  .ant-alert-description {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;

    a {
      text-decoration: underline;
    }

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`,be=l.Z.div`
  ${({theme:e})=>H.iv`
    margin: 0 ${4*e.gridUnit}px -${4*e.gridUnit}px;
  `}
`,fe=e=>H.iv`
  .required {
    margin-left: ${e.gridUnit/2}px;
    color: ${e.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${e.gridUnit}px 0;
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    text-align: left;
  }
`,ye=e=>H.iv`
  .form-group {
    margin-bottom: ${4*e.gridUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.gridUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.gridUnit}px;
      }
    }
  }
  .control-label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
  }
  .helper {
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    margin-top: ${1.5*e.gridUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 480px;
  }
`,Ze=e=>H.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,xe=l.Z.div`
  ${({theme:e})=>H.iv`
    margin-bottom: ${6*e.gridUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*e.gridUnit}px;
    }

    .control-label {
      color: ${e.colors.grayscale.dark1};
      font-size: ${e.typography.sizes.s}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    &.extra-container {
      padding-top: ${2*e.gridUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*e.gridUnit}px;
        margin-top: ${.75*e.gridUnit}px;
        font-family: ${e.typography.families.sansSerif};
        font-size: ${e.typography.sizes.m}px;
      }

      i {
        margin: 0 ${e.gridUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    textarea {
      height: 160px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*e.gridUnit}px ${2*e.gridUnit}px;
      border-style: none;
      border: 1px solid ${e.colors.grayscale.light2};
      border-radius: ${e.gridUnit}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*e.gridUnit}px;
      margin-bottom: 0;
      padding: 0;
      .control-label {
        margin-bottom: 0;
      }
      &.open {
        height: ${108}px;
        padding-right: ${5*e.gridUnit}px;
      }
    }
  `}
`,_e=(0,l.Z)(ie.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,we=l.Z.div`
  padding-top: ${({theme:e})=>e.gridUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.gridUnit}px;
    &.open {
      height: ${261}px;
      &.ctas-open {
        height: ${363}px;
      }
    }
  }
`,Ce=l.Z.div`
  padding: 0 ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,Se=e=>H.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,ke=e=>H.iv`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,Ee=l.Z.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0px;
  }
`,$e=(l.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
`,l.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,l.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  text-transform: uppercase;
`),Ne=l.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,Pe=l.Z.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: 11px;
    margin: 0 5px ${({theme:e})=>2*e.gridUnit}px;
  }

  .label-paste {
    color: ${({theme:e})=>e.colors.grayscale.light1};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({theme:e})=>7*e.gridUnit}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    resize: vertical;
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    &::placeholder {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }

  .input-container {
    .input-upload {
      display: none !important;
    }
    .input-upload-current {
      display: flex;
      justify-content: space-between;
    }
    .input-upload-btn {
      width: ${({theme:e})=>32*e.gridUnit}px
    }
  }`,Te=l.Z.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({theme:e})=>4*e.gridUnit}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({theme:e})=>2.5*e.gridUnit}px;
  }

  .available {
    margin: ${({theme:e})=>4*e.gridUnit}px;
    .available-label {
      font-size: ${({theme:e})=>e.typography.sizes.l}px;
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      margin: ${({theme:e})=>6*e.gridUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .control-label {
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,Oe=(0,l.Z)(A.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,Ue=l.Z.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.max};
  background: ${({theme:e})=>e.colors.grayscale.light5};
  height: auto;
`,Me=l.Z.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin: ${({theme:e})=>10*e.gridUnit}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,Ae=l.Z.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,Le=({db:e,onInputChange:t,onTextChange:a,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:r,extraExtension:i})=>{var s,d,c,u;const p=!(null==e||!e.expose_in_sqllab),h=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas),m=null==e||null==(s=e.engine_information)?void 0:s.supports_file_upload,g=JSON.parse((null==e?void 0:e.extra)||"{}",((e,t)=>"engine_params"===e&&"object"==typeof t?JSON.stringify(t):t)),v=null==i?void 0:i.component,b=null==i?void 0:i.logo,f=null==i?void 0:i.description;return(0,H.tZ)(re.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>H.iv`
  .ant-collapse-header {
    padding-top: ${3.5*e.gridUnit}px;
    padding-bottom: ${2.5*e.gridUnit}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${6}px);
    }
    .helper {
      color: ${e.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e)},(0,H.tZ)(re.Z.Panel,{header:(0,H.tZ)("div",null,(0,H.tZ)("h4",null,(0,o.t)("SQL Lab")),(0,H.tZ)("p",{className:"helper"},(0,o.t)("Adjust how this database will interact with SQL Lab."))),key:"1"},(0,H.tZ)(xe,{css:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:t,labelText:(0,o.t)("Expose database in SQL Lab")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Allow this database to be queried in SQL Lab")})),(0,H.tZ)(we,{className:le()("expandable",{open:p,"ctas-open":h})},(0,H.tZ)(xe,{css:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:t,labelText:(0,o.t)("Allow CREATE TABLE AS")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Allow creation of new tables based on queries")}))),(0,H.tZ)(xe,{css:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:t,labelText:(0,o.t)("Allow CREATE VIEW AS")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Allow creation of new views based on queries")})),(0,H.tZ)(xe,{className:le()("expandable",{open:h})},(0,H.tZ)("div",{className:"control-label"},(0,o.t)("CTAS & CVAS SCHEMA")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)("input",{type:"text",name:"force_ctas_schema",placeholder:(0,o.t)("Create or select schema..."),onChange:t,value:(null==e?void 0:e.force_ctas_schema)||""})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,H.tZ)(xe,{css:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:t,labelText:(0,o.t)("Allow DML")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,H.tZ)(xe,{css:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==g||!g.cost_estimate_enabled),onChange:l,labelText:(0,o.t)("Enable query cost estimation")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,H.tZ)(xe,{css:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==g||!g.allows_virtual_table_explore),onChange:l,labelText:(0,o.t)("Allow this database to be explored")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,H.tZ)(xe,{css:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==g||!g.disable_data_preview),onChange:l,labelText:(0,o.t)("Disable SQL Lab data preview queries")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")}))),(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"expand_rows",indeterminate:!1,checked:!(null==g||null==(d=g.schema_options)||!d.expand_rows),onChange:l,labelText:(0,o.t)("Enable row expansion in schemas")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("For Trino, describe full schemas of nested ROW types, expanding them with dotted paths")})))))),(0,H.tZ)(re.Z.Panel,{header:(0,H.tZ)("div",null,(0,H.tZ)("h4",null,(0,o.t)("Performance")),(0,H.tZ)("p",{className:"helper"},(0,o.t)("Adjust performance settings of this database."))),key:"2"},(0,H.tZ)(xe,{className:"mb-8"},(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Chart cache timeout")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:t})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined."))),(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Schema cache timeout")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==g||null==(c=g.metadata_cache_timeout)?void 0:c.schema_cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:l,"data-test":"schema-cache-timeout-test"})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Table cache timeout")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==g||null==(u=g.metadata_cache_timeout)?void 0:u.table_cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:l,"data-test":"table-cache-timeout-test"})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,H.tZ)(xe,{css:(0,H.iv)({no_margin_bottom:se},"","")},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==e||!e.allow_run_async),onChange:t,labelText:(0,o.t)("Asynchronous query execution")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,H.tZ)(xe,{css:(0,H.iv)({no_margin_bottom:se},"","")},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==g||!g.cancel_query_on_windows_unload),onChange:l,labelText:(0,o.t)("Cancel query on window unload event")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,H.tZ)(re.Z.Panel,{header:(0,H.tZ)("div",null,(0,H.tZ)("h4",null,(0,o.t)("Security")),(0,H.tZ)("p",{className:"helper"},(0,o.t)("Add extra connection information."))),key:"3"},(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Secure extra")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(_e,{name:"masked_encrypted_extra",value:(null==e?void 0:e.masked_encrypted_extra)||"",placeholder:(0,o.t)("Secure extra"),onChange:e=>n({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px"})),(0,H.tZ)("div",{className:"helper"},(0,H.tZ)("div",null,(0,o.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Root certificate")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,o.t)("Enter CA_BUNDLE"),onChange:a})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,H.tZ)(xe,{css:m?{}:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:t,labelText:(0,o.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),m&&(0,H.tZ)(xe,{css:null!=e&&e.allow_file_upload?{}:se},(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(oe.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==e||!e.allow_file_upload),onChange:t,labelText:(0,o.t)("Allow file uploads to database")}))),m&&!(null==e||!e.allow_file_upload)&&(0,H.tZ)(xe,{css:se},(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Schemas allowed for File upload")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==g?void 0:g.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:l})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("A comma-separated list of schemas that files are allowed to upload to.")))),i&&v&&f&&(0,H.tZ)(re.Z.Panel,{header:(0,H.tZ)("div",null,b&&(0,H.tZ)(b,null),(0,H.tZ)("span",{css:e=>({fontSize:e.typography.sizes.l,fontWeight:e.typography.weights.bold})},null==i?void 0:i.title),(0,H.tZ)("p",{className:"helper"},(0,H.tZ)(f,null))),key:null==i?void 0:i.title,collapsible:null!=i.enabled&&i.enabled()?"icon":"disabled"},(0,H.tZ)(xe,{css:se},(0,H.tZ)(v,{db:e,onEdit:i.onEdit}))),(0,H.tZ)(re.Z.Panel,{header:(0,H.tZ)("div",null,(0,H.tZ)("h4",null,(0,o.t)("Other")),(0,H.tZ)("p",{className:"helper"},(0,o.t)("Additional settings."))),key:"4"},(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Metadata Parameters")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(_e,{name:"metadata_params",placeholder:(0,o.t)("Metadata Parameters"),onChange:e=>r({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==g?void 0:g.metadata_params)||{}).length?null==g?void 0:g.metadata_params:""})),(0,H.tZ)("div",{className:"helper"},(0,H.tZ)("div",null,(0,o.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Engine Parameters")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(_e,{name:"engine_params",placeholder:(0,o.t)("Engine Parameters"),onChange:e=>r({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==g?void 0:g.engine_params)||{}).length?null==g?void 0:g.engine_params:""})),(0,H.tZ)("div",{className:"helper"},(0,H.tZ)("div",null,(0,o.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label","data-test":"version-label-test"},(0,o.t)("Version")),(0,H.tZ)("div",{className:"input-container","data-test":"version-spinbutton-test"},(0,H.tZ)("input",{type:"text",name:"version",placeholder:(0,o.t)("Version number"),onChange:l,value:(null==g?void 0:g.version)||""})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("Specify the database version. This is used with Presto for query cost estimation, and Dremio for syntax changes, among others.")))))};var qe=a(8911);const De=({db:e,onInputChange:t,testConnection:a,conf:n,testInProgress:l=!1,children:r})=>{var s,d;const c=(null==qe.Z||null==(s=qe.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:s.SQLALCHEMY_DOCS_URL)||"https://docs.sqlalchemy.org/en/13/core/engines.html",u=(null==qe.Z||null==(d=qe.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:d.SQLALCHEMY_DISPLAY_TEXT)||"SQLAlchemy docs";return(0,H.tZ)(i.Fragment,null,(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Display Name"),(0,H.tZ)("span",{className:"required"},"*")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)("input",{type:"text",name:"database_name","data-test":"database-name-input",value:(null==e?void 0:e.database_name)||"",placeholder:(0,o.t)("Name your database"),onChange:t})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("Pick a name to help you identify this database."))),(0,H.tZ)(xe,null,(0,H.tZ)("div",{className:"control-label"},(0,o.t)("SQLAlchemy URI"),(0,H.tZ)("span",{className:"required"},"*")),(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)("input",{type:"text",name:"sqlalchemy_uri","data-test":"sqlalchemy-uri-input",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(null==e?void 0:e.sqlalchemy_uri_placeholder)||(0,o.t)("dialect+driver://username:password@host:port/database"),onChange:t})),(0,H.tZ)("div",{className:"helper"},(0,o.t)("Refer to the")," ",(0,H.tZ)("a",{href:c||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},u||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,o.t)("for more information on how to structure your URI."))),r,(0,H.tZ)(A.Z,{onClick:a,loading:l,cta:!0,buttonStyle:"link",css:e=>(e=>H.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,o.t)("Test connection")))};var Ie=a(49238);const ze={account:{helpText:(0,o.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,o.t)("e.g. xy12345.us-east-2.aws")},warehouse:{placeholder:(0,o.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{placeholder:(0,o.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},Fe=({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,field:o})=>{var r;return(0,H.tZ)(Y.Z,{id:o,name:o,required:e,value:null==l||null==(r=l.parameters)?void 0:r[o],validationMethods:{onBlur:a},errorMessage:null==n?void 0:n[o],placeholder:ze[o].placeholder,helpText:ze[o].helpText,label:o,onChange:t.onParametersChange,className:ze[o].className||o})};var Re,je=a(2857);!function(e){e[e.JsonUpload=0]="JsonUpload",e[e.CopyPaste=1]="CopyPaste"}(Re||(Re={}));const He={gsheets:"service_account_info",bigquery:"credentials_info"};var Be={name:"s5xdrg",styles:"display:flex;align-items:center"};const Je=({changeMethods:e,isEditMode:t,db:a,editNewDb:n})=>{var l,r,s;const[d,c]=(0,i.useState)(Re.JsonUpload.valueOf()),[u,p]=(0,i.useState)(null),[h,m]=(0,i.useState)(!0),g="gsheets"===(null==a?void 0:a.engine)?!t&&!h:!t,v=t&&"{}"!==(null==a?void 0:a.masked_encrypted_extra),b=(null==a?void 0:a.engine)&&He[a.engine],f="object"==typeof(null==a||null==(l=a.parameters)?void 0:l[b])?JSON.stringify(null==a||null==(r=a.parameters)?void 0:r[b]):null==a||null==(s=a.parameters)?void 0:s[b];return(0,H.tZ)(Pe,null,"gsheets"===(null==a?void 0:a.engine)&&(0,H.tZ)("div",{className:"catalog-type-select"},(0,H.tZ)(je.Z,{css:e=>(e=>H.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,o.t)("Type of Google Sheets allowed")),(0,H.tZ)(O.IZ,{style:{width:"100%"},defaultValue:v?"false":"true",onChange:e=>m("true"===e)},(0,H.tZ)(O.IZ.Option,{value:"true",key:1},(0,o.t)("Publicly shared sheets only")),(0,H.tZ)(O.IZ.Option,{value:"false",key:2},(0,o.t)("Public and privately shared sheets")))),g&&(0,H.tZ)(i.Fragment,null,(0,H.tZ)(je.Z,{required:!0},(0,o.t)("How do you want to enter service account credentials?")),(0,H.tZ)(O.IZ,{defaultValue:d,style:{width:"100%"},onChange:e=>c(e)},(0,H.tZ)(O.IZ.Option,{value:Re.JsonUpload},(0,o.t)("Upload JSON file")),(0,H.tZ)(O.IZ.Option,{value:Re.CopyPaste},(0,o.t)("Copy and Paste JSON credentials")))),d===Re.CopyPaste||t||n?(0,H.tZ)("div",{className:"input-container"},(0,H.tZ)(je.Z,{required:!0},(0,o.t)("Service Account")),(0,H.tZ)("textarea",{className:"input-form",name:b,value:f,onChange:e.onParametersChange,placeholder:(0,o.t)("Paste content of service credentials JSON file here")}),(0,H.tZ)("span",{className:"label-paste"},(0,o.t)("Copy and paste the entire service account .json file here"))):g&&(0,H.tZ)("div",{className:"input-container",css:e=>pe(e)},(0,H.tZ)("div",{css:Be},(0,H.tZ)(je.Z,{required:!0},(0,o.t)("Upload Credentials")),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!u&&(0,H.tZ)(O.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,o.t)("Choose File")),u&&(0,H.tZ)("div",{className:"input-upload-current"},u,(0,H.tZ)(_.Z.DeleteFilled,{iconSize:"m",onClick:()=>{p(null),e.onParametersChange({target:{name:b,value:""}})}})),(0,H.tZ)("input",{id:"selectedFile",accept:".json",className:"input-upload",type:"file",onChange:async t=>{var a,n;let l;t.target.files&&(l=t.target.files[0]),p(null==(a=l)?void 0:a.name),e.onParametersChange({target:{type:null,name:b,value:await(null==(n=l)?void 0:n.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))};var Qe;const Ve=["host","port","database","username","password","access_token","http_path","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role","ssh"],We={host:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var r;return(0,H.tZ)(Y.Z,{id:"host",name:"host",value:null==l||null==(r=l.parameters)?void 0:r.host,required:e,hasTooltip:!0,tooltipText:(0,o.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.host,placeholder:(0,o.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,o.t)("Host"),onChange:t.onParametersChange})},http_path:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var r,i;const s=JSON.parse((null==l?void 0:l.extra)||"{}");return(0,H.tZ)(Y.Z,{id:"http_path",name:"http_path",required:e,value:null==(r=s.engine_params)||null==(i=r.connect_args)?void 0:i.http_path,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.http_path,placeholder:(0,o.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:t.onExtraInputChange,helpText:(0,o.t)("Copy the name of the HTTP Path of your cluster.")})},port:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var r;return(0,H.tZ)(i.Fragment,null,(0,H.tZ)(Y.Z,{id:"port",name:"port",type:"number",required:e,value:null==l||null==(r=l.parameters)?void 0:r.port,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.port,placeholder:(0,o.t)("e.g. 5432"),className:"form-group-w-50",label:(0,o.t)("Port"),onChange:t.onParametersChange}))},database:({required:e,changeMethods:t,getValidation:a,validationErrors:n,placeholder:l,db:r})=>{var i;return(0,H.tZ)(Y.Z,{id:"database",name:"database",required:e,value:null==r||null==(i=r.parameters)?void 0:i.database,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database,placeholder:null!=l?l:(0,o.t)("e.g. world_population"),label:(0,o.t)("Database name"),onChange:t.onParametersChange,helpText:(0,o.t)("Copy the name of the database you are trying to connect to.")})},username:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var r;return(0,H.tZ)(Y.Z,{id:"username",name:"username",required:e,value:null==l||null==(r=l.parameters)?void 0:r.username,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.username,placeholder:(0,o.t)("e.g. Analytics"),label:(0,o.t)("Username"),onChange:t.onParametersChange})},password:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,isEditMode:r})=>{var i;return(0,H.tZ)(Y.Z,{id:"password",name:"password",required:e,visibilityToggle:!r,value:null==l||null==(i=l.parameters)?void 0:i.password,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.password,placeholder:(0,o.t)("e.g. ********"),label:(0,o.t)("Password"),onChange:t.onParametersChange})},access_token:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,isEditMode:r})=>{var i;return(0,H.tZ)(Y.Z,{id:"access_token",name:"access_token",required:e,visibilityToggle:!r,value:null==l||null==(i=l.parameters)?void 0:i.access_token,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.access_token,placeholder:(0,o.t)("e.g. ********"),label:(0,o.t)("Access token"),onChange:t.onParametersChange})},database_name:({changeMethods:e,getValidation:t,validationErrors:a,db:n})=>(0,H.tZ)(i.Fragment,null,(0,H.tZ)(Y.Z,{id:"database_name",name:"database_name",required:!0,value:null==n?void 0:n.database_name,validationMethods:{onBlur:t},errorMessage:null==a?void 0:a.database_name,placeholder:"",label:(0,o.t)("Display Name"),onChange:e.onChange,helpText:(0,o.t)("Pick a nickname for how the database will display in Superset.")})),query:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>(0,H.tZ)(Y.Z,{id:"query_input",name:"query_input",required:e,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.query,placeholder:(0,o.t)("e.g. param1=value1&param2=value2"),label:(0,o.t)("Additional Parameters"),onChange:t.onQueryChange,helpText:(0,o.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:t,db:a,sslForced:n})=>{var l;return(0,H.tZ)("div",{css:e=>pe(e)},(0,H.tZ)(O.KU,{disabled:n&&!e,checked:(null==a||null==(l=a.parameters)?void 0:l.encryption)||n,onChange:e=>{t.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,H.tZ)("span",{css:he},"SSL"),(0,H.tZ)(K.Z,{tooltip:(0,o.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:Je,service_account_info:Je,catalog:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{const r=(null==l?void 0:l.catalog)||[],s=n||{};return(0,H.tZ)(Me,null,(0,H.tZ)("h4",{className:"gsheet-title"},(0,o.t)("Connect Google Sheets as tables to this database")),(0,H.tZ)("div",null,null==r?void 0:r.map(((n,l)=>{var d,c;return(0,H.tZ)(i.Fragment,null,(0,H.tZ)(je.Z,{className:"catalog-label",required:!0},(0,o.t)("Google Sheet Name and URL")),(0,H.tZ)("div",{className:"catalog-name"},(0,H.tZ)(Y.Z,{className:"catalog-name-input",required:e,validationMethods:{onBlur:a},errorMessage:null==(d=s[l])?void 0:d.name,placeholder:(0,o.t)("Enter a name for this sheet"),onChange:e=>{t.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==r?void 0:r.length)>1&&(0,H.tZ)(_.Z.CloseOutlined,{css:e=>H.iv`
                    align-self: center;
                    background: ${e.colors.grayscale.light4};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>t.onRemoveTableCatalog(l)})),(0,H.tZ)(Y.Z,{className:"catalog-name-url",required:e,validationMethods:{onBlur:a},errorMessage:null==(c=s[l])?void 0:c.url,placeholder:(0,o.t)("Paste the shareable Google Sheet URL here"),onChange:e=>t.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value}))})),(0,H.tZ)(Oe,{className:"catalog-add-btn",onClick:()=>{t.onAddTableCatalog()}},"+ ",(0,o.t)("Add sheet"))))},warehouse:Fe,role:Fe,account:Fe,ssh:null!=(Qe=(0,n.I)().get("ssh_tunnel.form.switch"))?Qe:({isEditMode:e,changeMethods:t,clearValidationErrors:a,db:n})=>{var l;return(0,H.tZ)("div",{css:e=>pe(e)},(0,H.tZ)(O.KU,{disabled:e&&!N()(null==n?void 0:n.ssh_tunnel),checked:null==n||null==(l=n.parameters)?void 0:l.ssh,onChange:e=>{t.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:e}}),a()},"data-test":"ssh-tunnel-switch"}),(0,H.tZ)("span",{css:he},(0,o.t)("SSH Tunnel")),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"}))}},Xe=({dbModel:e,db:t,editNewDb:a,getPlaceholder:n,getValidation:l,isEditMode:o=!1,onAddTableCatalog:r,onChange:i,onExtraInputChange:s,onParametersChange:d,onParametersUploadFileChange:c,onQueryChange:u,onRemoveTableCatalog:p,sslForced:h,validationErrors:m,clearValidationErrors:g})=>{const v=null==e?void 0:e.parameters;return(0,H.tZ)(Ie.l0,null,(0,H.tZ)("div",{css:e=>[me,Ze(e)]},v&&Ve.filter((e=>Object.keys(v.properties).includes(e)||"database_name"===e)).map((e=>{var b;return We[e]({required:null==(b=v.required)?void 0:b.includes(e),changeMethods:{onParametersChange:d,onChange:i,onQueryChange:u,onParametersUploadFileChange:c,onAddTableCatalog:r,onRemoveTableCatalog:p,onExtraInputChange:s},validationErrors:m,getValidation:l,clearValidationErrors:g,db:t,key:e,field:e,isEditMode:o,sslForced:h,editNewDb:a,placeholder:n?n(e):void 0})}))))},Ge=(0,m.z)(),Ke=Ge?Ge.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Ye={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},et=({isLoading:e,isEditMode:t,useSqlAlchemyForm:a,hasConnectedDb:n,db:l,dbName:r,dbModel:s,editNewDb:d,fileList:c})=>{const u=c&&(null==c?void 0:c.length)>0,p=(0,H.tZ)(de,null,(0,H.tZ)($e,null,null==l?void 0:l.backend),(0,H.tZ)(Ne,null,r)),h=(0,H.tZ)(de,null,(0,H.tZ)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,H.tZ)("h4",null,(0,o.t)("Enter Primary Credentials")),(0,H.tZ)("p",{className:"helper-bottom"},(0,o.t)("Need help? Learn how to connect your database")," ",(0,H.tZ)("a",{href:(null==Ge?void 0:Ge.default)||Ke,target:"_blank",rel:"noopener noreferrer"},(0,o.t)("here")),".")),m=(0,H.tZ)(Ue,null,(0,H.tZ)(de,null,(0,H.tZ)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})),(0,H.tZ)("h4",{className:"step-3-text"},(0,o.t)("Database connected")),(0,H.tZ)("p",{className:"subheader-text"},(0,o.t)("Create a dataset to begin visualizing your data as a chart or go to\n          SQL Lab to query your data.")))),g=(0,H.tZ)(Ue,null,(0,H.tZ)(de,null,(0,H.tZ)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})),(0,H.tZ)("h4",null,(0,o.t)("Enter the required %(dbModelName)s credentials",{dbModelName:s.name})),(0,H.tZ)("p",{className:"helper-bottom"},(0,o.t)("Need help? Learn more about")," ",(0,H.tZ)("a",{href:(v=null==l?void 0:l.engine,v?Ge?Ge[v]||Ge.default:Ye[v]?Ye[v]:`https://superset.apache.org/docs/databases/${v}`:null),target:"_blank",rel:"noopener noreferrer"},(0,o.t)("connecting to %(dbModelName)s.",{dbModelName:s.name}),"."))));var v;const b=(0,H.tZ)(de,null,(0,H.tZ)("div",{className:"select-db"},(0,H.tZ)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})),(0,H.tZ)("h4",null,(0,o.t)("Select a database to connect")))),f=(0,H.tZ)(Ue,null,(0,H.tZ)(de,null,(0,H.tZ)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,H.tZ)("h4",null,(0,o.t)("Enter the required %(dbModelName)s credentials",{dbModelName:s.name})),(0,H.tZ)("p",{className:"helper-bottom"},u?c[0].name:"")));return u?f:e?(0,H.tZ)(i.Fragment,null):t?p:a?h:n&&!d?m:l||d?g:b};var tt=a(87183),at=a(9875),nt=a(77808),lt=a(31097),ot=a(87462),rt=a(42003),it=a(27029),st=function(e,t){return i.createElement(it.Z,(0,ot.Z)({},e,{ref:t,icon:rt.Z}))};const dt=i.forwardRef(st);var ct=a(5717),ut=function(e,t){return i.createElement(it.Z,(0,ot.Z)({},e,{ref:t,icon:ct.Z}))};const pt=i.forwardRef(ut),ht=l.Z.div`
  padding-top: ${({theme:e})=>2*e.gridUnit}px;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,mt=(0,l.Z)(O.X2)`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,gt=(0,l.Z)(O.qz.Item)`
  margin-bottom: 0 !important;
`,vt=(0,l.Z)(nt.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,bt=({db:e,onSSHTunnelParametersChange:t,setSSHTunnelLoginMethod:a})=>{var n,l,r,s,d,c;const[u,p]=(0,i.useState)(Et.Password);return(0,H.tZ)(Ie.l0,null,(0,H.tZ)(mt,{gutter:16},(0,H.tZ)(O.JX,{xs:24,md:12},(0,H.tZ)(ht,null,(0,H.tZ)(Ie.lX,{htmlFor:"server_address",required:!0},(0,o.t)("SSH Host")),(0,H.tZ)(at.II,{name:"server_address",type:"text",placeholder:(0,o.t)("e.g. 127.0.0.1"),value:(null==e||null==(n=e.ssh_tunnel)?void 0:n.server_address)||"",onChange:t,"data-test":"ssh-tunnel-server_address-input"}))),(0,H.tZ)(O.JX,{xs:24,md:12},(0,H.tZ)(ht,null,(0,H.tZ)(Ie.lX,{htmlFor:"server_port",required:!0},(0,o.t)("SSH Port")),(0,H.tZ)(at.II,{name:"server_port",placeholder:(0,o.t)("22"),type:"number",value:null==e||null==(l=e.ssh_tunnel)?void 0:l.server_port,onChange:t,"data-test":"ssh-tunnel-server_port-input"})))),(0,H.tZ)(mt,{gutter:16},(0,H.tZ)(O.JX,{xs:24},(0,H.tZ)(ht,null,(0,H.tZ)(Ie.lX,{htmlFor:"username",required:!0},(0,o.t)("Username")),(0,H.tZ)(at.II,{name:"username",type:"text",placeholder:(0,o.t)("e.g. Analytics"),value:(null==e||null==(r=e.ssh_tunnel)?void 0:r.username)||"",onChange:t,"data-test":"ssh-tunnel-username-input"})))),(0,H.tZ)(mt,{gutter:16},(0,H.tZ)(O.JX,{xs:24},(0,H.tZ)(ht,null,(0,H.tZ)(Ie.lX,{htmlFor:"use_password",required:!0},(0,o.t)("Login with")),(0,H.tZ)(gt,{name:"use_password",initialValue:u},(0,H.tZ)(tt.Y.Group,{onChange:({target:{value:e}})=>{p(e),a(e)}},(0,H.tZ)(tt.Y,{value:Et.Password,"data-test":"ssh-tunnel-use_password-radio"},(0,o.t)("Password")),(0,H.tZ)(tt.Y,{value:Et.PrivateKey,"data-test":"ssh-tunnel-use_private_key-radio"},(0,o.t)("Private Key & Password"))))))),u===Et.Password&&(0,H.tZ)(mt,{gutter:16},(0,H.tZ)(O.JX,{xs:24},(0,H.tZ)(ht,null,(0,H.tZ)(Ie.lX,{htmlFor:"password",required:!0},(0,o.t)("SSH Password")),(0,H.tZ)(vt,{name:"password",placeholder:(0,o.t)("e.g. ********"),value:(null==e||null==(s=e.ssh_tunnel)?void 0:s.password)||"",onChange:t,"data-test":"ssh-tunnel-password-input",iconRender:e=>e?(0,H.tZ)(lt.Z,{title:"Hide password."},(0,H.tZ)(dt,null)):(0,H.tZ)(lt.Z,{title:"Show password."},(0,H.tZ)(pt,null)),role:"textbox"})))),u===Et.PrivateKey&&(0,H.tZ)(i.Fragment,null,(0,H.tZ)(mt,{gutter:16},(0,H.tZ)(O.JX,{xs:24},(0,H.tZ)(ht,null,(0,H.tZ)(Ie.lX,{htmlFor:"private_key",required:!0},(0,o.t)("Private Key")),(0,H.tZ)(at.Kx,{name:"private_key",placeholder:(0,o.t)("Paste Private Key here"),value:(null==e||null==(d=e.ssh_tunnel)?void 0:d.private_key)||"",onChange:t,"data-test":"ssh-tunnel-private_key-input",rows:4})))),(0,H.tZ)(mt,{gutter:16},(0,H.tZ)(O.JX,{xs:24},(0,H.tZ)(ht,null,(0,H.tZ)(Ie.lX,{htmlFor:"private_key_password",required:!0},(0,o.t)("Private Key Password")),(0,H.tZ)(vt,{name:"private_key_password",placeholder:(0,o.t)("e.g. ********"),value:(null==e||null==(c=e.ssh_tunnel)?void 0:c.private_key_password)||"",onChange:t,"data-test":"ssh-tunnel-private_key_password-input",iconRender:e=>e?(0,H.tZ)(lt.Z,{title:"Hide password."},(0,H.tZ)(dt,null)):(0,H.tZ)(lt.Z,{title:"Show password."},(0,H.tZ)(pt,null)),role:"textbox"}))))))};var ft=a(93185);const yt=({clearValidationErrors:e,changeMethods:t,db:a,dbModel:n})=>{var l,r,s;const[d,c]=(0,i.useState)(!1),u=(0,ft.cr)(ft.TT.SshTunneling),p=(null==n||null==(l=n.engine_information)?void 0:l.disable_ssh_tunneling)||!1,h=u&&!p;return(0,i.useEffect)((()=>{var e;h&&void 0!==(null==a||null==(e=a.parameters)?void 0:e.ssh)&&c(a.parameters.ssh)}),[null==a||null==(r=a.parameters)?void 0:r.ssh,h]),(0,i.useEffect)((()=>{var e;h&&void 0===(null==a||null==(e=a.parameters)?void 0:e.ssh)&&!N()(null==a?void 0:a.ssh_tunnel)&&t.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:!0}})}),[t,null==a||null==(s=a.parameters)?void 0:s.ssh,null==a?void 0:a.ssh_tunnel,h]),h?(0,H.tZ)("div",{css:e=>pe(e)},(0,H.tZ)(O.KU,{checked:d,onChange:a=>{c(a),t.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:a}}),e()},"data-test":"ssh-tunnel-switch"}),(0,H.tZ)("span",{css:he},(0,o.t)("SSH Tunnel")),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"})):null},Zt=(0,n.I)(),xt=JSON.stringify({allows_virtual_table_explore:!0}),_t={[G.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},wt=(0,l.Z)(T.ZP)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`,Ct=l.Z.div`
  ${({theme:e})=>`\n    margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;\n  `};
`,St=l.Z.div`
  ${({theme:e})=>`\n    padding: 0px ${4*e.gridUnit}px;\n  `};
`;var kt,Et;!function(e){e[e.AddTableCatalogSheet=0]="AddTableCatalogSheet",e[e.ConfigMethodChange=1]="ConfigMethodChange",e[e.DbSelected=2]="DbSelected",e[e.EditorChange=3]="EditorChange",e[e.ExtraEditorChange=4]="ExtraEditorChange",e[e.ExtraInputChange=5]="ExtraInputChange",e[e.Fetched=6]="Fetched",e[e.InputChange=7]="InputChange",e[e.ParametersChange=8]="ParametersChange",e[e.QueryChange=9]="QueryChange",e[e.RemoveTableCatalogSheet=10]="RemoveTableCatalogSheet",e[e.Reset=11]="Reset",e[e.TextChange=12]="TextChange",e[e.ParametersSSHTunnelChange=13]="ParametersSSHTunnelChange",e[e.SetSSHTunnelLoginMethod=14]="SetSSHTunnelLoginMethod",e[e.RemoveSSHTunnelConfig=15]="RemoveSSHTunnelConfig"}(kt||(kt={})),function(e){e[e.Password=0]="Password",e[e.PrivateKey=1]="PrivateKey"}(Et||(Et={}));const $t=l.Z.div`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  margin-left: ${({theme:e})=>3*e.gridUnit}px;
`;function Nt(e,t){var a,n,l,o;const r={...e||{}};let i,s,d={},c="";const u=JSON.parse(r.extra||"{}");switch(t.type){case kt.ExtraEditorChange:try{s=JSON.parse(t.payload.json||"{}")}catch(e){s=t.payload.json}return{...r,extra:JSON.stringify({...u,[t.payload.name]:s})};case kt.ExtraInputChange:return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...r,extra:JSON.stringify({...u,metadata_cache_timeout:{...null==u?void 0:u.metadata_cache_timeout,[t.payload.name]:t.payload.value}})}:"schemas_allowed_for_file_upload"===t.payload.name?{...r,extra:JSON.stringify({...u,schemas_allowed_for_file_upload:(t.payload.value||"").split(",").filter((e=>""!==e))})}:"http_path"===t.payload.name?{...r,extra:JSON.stringify({...u,engine_params:{connect_args:{[t.payload.name]:null==(p=t.payload.value)?void 0:p.trim()}}})}:"expand_rows"===t.payload.name?{...r,extra:JSON.stringify({...u,schema_options:{...null==u?void 0:u.schema_options,[t.payload.name]:!!t.payload.value}})}:{...r,extra:JSON.stringify({...u,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value})};var p;case kt.InputChange:return"checkbox"===t.payload.type?{...r,[t.payload.name]:t.payload.checked}:{...r,[t.payload.name]:t.payload.value};case kt.ParametersChange:if(null!=(a=t.payload.type)&&a.startsWith("catalog")&&void 0!==r.catalog){var h;const e=[...r.catalog],a=null==(h=t.payload.type)?void 0:h.split("-")[1],n=e[a]||{};return n[t.payload.name]=t.payload.value,e.splice(parseInt(a,10),1,n),i=e.reduce(((e,t)=>{const a={...e};return a[t.name]=t.value,a}),{}),{...r,catalog:e,parameters:{...r.parameters,catalog:i}}}return{...r,parameters:{...r.parameters,[t.payload.name]:t.payload.value}};case kt.ParametersSSHTunnelChange:return{...r,ssh_tunnel:{...r.ssh_tunnel,[t.payload.name]:t.payload.value}};case kt.SetSSHTunnelLoginMethod:{let e={};var m,g,v;return null!=r&&r.ssh_tunnel&&(e=E()(r.ssh_tunnel,["id","server_address","server_port","username"])),t.payload.login_method===Et.PrivateKey?{...r,ssh_tunnel:{private_key:null==r||null==(m=r.ssh_tunnel)?void 0:m.private_key,private_key_password:null==r||null==(g=r.ssh_tunnel)?void 0:g.private_key_password,...e}}:t.payload.login_method===Et.Password?{...r,ssh_tunnel:{password:null==r||null==(v=r.ssh_tunnel)?void 0:v.password,...e}}:{...r}}case kt.RemoveSSHTunnelConfig:return{...r,ssh_tunnel:void 0};case kt.AddTableCatalogSheet:return void 0!==r.catalog?{...r,catalog:[...r.catalog,{name:"",value:""}]}:{...r,catalog:[{name:"",value:""}]};case kt.RemoveTableCatalogSheet:return null==(n=r.catalog)||n.splice(t.payload.indexToDelete,1),{...r};case kt.EditorChange:return{...r,[t.payload.name]:t.payload.json};case kt.QueryChange:return{...r,parameters:{...r.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case kt.TextChange:return{...r,[t.payload.name]:t.payload.value};case kt.Fetched:if(d=(null==(l=t.payload)||null==(o=l.parameters)?void 0:o.query)||{},c=Object.entries(d).map((([e,t])=>`${e}=${t}`)).join("&"),t.payload.masked_encrypted_extra&&t.payload.configuration_method===X.DynamicForm){var b;const e=null==(b={...JSON.parse(t.payload.extra||"{}")}.engine_params)?void 0:b.catalog,a=Object.entries(e||{}).map((([e,t])=>({name:e,value:t})));return{...t.payload,engine:t.payload.backend||r.engine,configuration_method:t.payload.configuration_method,catalog:a,parameters:{...t.payload.parameters||r.parameters,catalog:e},query_input:c}}return{...t.payload,masked_encrypted_extra:t.payload.masked_encrypted_extra||"",engine:t.payload.backend||r.engine,configuration_method:t.payload.configuration_method,parameters:t.payload.parameters||r.parameters,ssh_tunnel:t.payload.ssh_tunnel||r.ssh_tunnel,query_input:c};case kt.DbSelected:return{...t.payload,extra:xt,expose_in_sqllab:!0};case kt.ConfigMethodChange:return{...t.payload};case kt.Reset:default:return null}}const Pt=(0,v.ZP)((({addDangerToast:e,addSuccessToast:t,onDatabaseAdd:a,onHide:n,show:l,databaseId:r,dbEngine:s})=>{var d,c,u;const[g,v]=(0,i.useReducer)(Nt,null),{state:{loading:b,resource:f,error:y},fetchResource:Z,createResource:x,updateResource:_,clearError:w}=(0,m.LE)("database",(0,o.t)("database"),e,"connection"),[C,S]=(0,i.useState)("1"),[k,E]=(0,m.cb)(),[$,L,q]=(0,m.h1)(),[D,I]=(0,i.useState)(!1),[z,F]=(0,i.useState)(!1),[R,j]=(0,i.useState)(""),[B,J]=(0,i.useState)(!1),[Q,V]=(0,i.useState)(!1),[ne,le]=(0,i.useState)(!1),[oe,re]=(0,i.useState)({}),[ie,se]=(0,i.useState)({}),[de,he]=(0,i.useState)({}),[Ze,xe]=(0,i.useState)({}),[_e,we]=(0,i.useState)(!1),[$e,Ne]=(0,i.useState)([]),[Pe,Me]=(0,i.useState)(!1),[qe,Ie]=(0,i.useState)(),[ze,Fe]=(0,i.useState)([]),[Re,je]=(0,i.useState)([]),[He,Be]=(0,i.useState)([]),[Je,Qe]=(0,i.useState)([]),[Ve,We]=(0,i.useState)({}),Ge=null!=(d=Zt.get("ssh_tunnel.form.switch"))?d:yt,[Ye,tt]=(0,i.useState)(void 0);let at=Zt.get("databaseconnection.extraOption");at&&(at={...at,onEdit:e=>{We({...Ve,...e})}});const nt=(0,ae.c)(),lt=(0,m.rM)(),ot=(0,m.jb)(),rt=!!r,it=ot||!(null==g||!g.engine||!_t[g.engine]),st=(null==g?void 0:g.configuration_method)===X.SqlalchemyUri,dt=rt||st,ct=$||y,ut=(0,P.k6)(),pt=(null==k||null==(c=k.databases)?void 0:c.find((e=>e.engine===(rt?null==g?void 0:g.backend:null==g?void 0:g.engine))))||{},ht=e=>{if("database"===e)return(0,o.t)("e.g. world_population")},mt=(0,i.useCallback)(((e,t)=>{v({type:e,payload:t})}),[]),gt=(0,i.useCallback)((()=>{q(null)}),[q]),vt=(0,i.useCallback)((({target:e})=>{mt(kt.ParametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})}),[mt]),ft=()=>{v({type:kt.Reset}),I(!1),gt(),w(),J(!1),Ne([]),Me(!1),Ie(""),Fe([]),je([]),Be([]),Qe([]),re({}),se({}),he({}),xe({}),we(!1),tt(void 0),n()},xt=e=>{ut.push(e)},{state:{alreadyExists:Et,passwordsNeeded:Pt,sshPasswordNeeded:Tt,sshPrivateKeyNeeded:Ot,sshPrivateKeyPasswordNeeded:Ut,loading:Mt,failed:At},importResource:Lt}=(0,m.PW)("database",(0,o.t)("database"),(e=>{Ie(e)})),qt=async()=>{var n,l;let r;if(V(!0),null==(n=at)||n.onSave(Ve,g).then((({error:t})=>{t&&(r=t,e(t))})),r)return void V(!1);const i={...g||{}};if(i.configuration_method===X.DynamicForm){var s,d;null!=i&&null!=(s=i.parameters)&&s.catalog&&(i.extra=JSON.stringify({...JSON.parse(i.extra||"{}"),engine_params:{catalog:i.parameters.catalog}}));const t=await L(i,!0);(!N()($)||null!=t&&t.length)&&(e((0,o.t)("Connection failed, please check your connection settings.")),V(!1));const a=rt?null==(d=i.parameters_schema)?void 0:d.properties:null==pt?void 0:pt.parameters.properties,n=JSON.parse(i.masked_encrypted_extra||"{}");Object.keys(a||{}).forEach((e=>{var t,l,o,r;a[e]["x-encrypted-extra"]&&null!=(t=i.parameters)&&t[e]&&("object"==typeof(null==(l=i.parameters)?void 0:l[e])?(n[e]=null==(o=i.parameters)?void 0:o[e],i.parameters[e]=JSON.stringify(i.parameters[e])):n[e]=JSON.parse((null==(r=i.parameters)?void 0:r[e])||"{}"))})),i.masked_encrypted_extra=JSON.stringify(n),i.engine===G.GSheet&&(i.impersonate_user=!0)}if(null!=i&&null!=(l=i.parameters)&&l.catalog&&(i.extra=JSON.stringify({...JSON.parse(i.extra||"{}"),engine_params:{catalog:i.parameters.catalog}})),!1===Ye&&(i.ssh_tunnel=null),null!=g&&g.id){if(await _(g.id,i,i.configuration_method===X.DynamicForm)){var c;if(a&&a(),null==(c=at)||c.onSave(Ve,g).then((({error:t})=>{t&&(r=t,e(t))})),r)return void V(!1);B||(ft(),t((0,o.t)("Database settings updated")))}}else if(g){if(await x(i,i.configuration_method===X.DynamicForm)){var u;if(I(!0),a&&a(),null==(u=at)||u.onSave(Ve,g).then((({error:t})=>{t&&(r=t,e(t))})),r)return void V(!1);dt&&(ft(),t((0,o.t)("Database connected")))}}else{if(Me(!0),!($e[0].originFileObj instanceof File))return;await Lt($e[0].originFileObj,oe,ie,de,Ze,_e)&&(a&&a(),ft(),t((0,o.t)("Database connected")))}F(!0),J(!1),V(!1)},Dt=e=>{if("Other"===e)v({type:kt.DbSelected,payload:{database_name:e,configuration_method:X.SqlalchemyUri,engine:void 0,engine_information:{supports_file_upload:!0}}});else{const t=null==k?void 0:k.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n,engine_information:l,default_driver:o,sqlalchemy_uri_placeholder:r}=t,i=void 0!==n;v({type:kt.DbSelected,payload:{database_name:e,engine:a,configuration_method:i?X.DynamicForm:X.SqlalchemyUri,engine_information:l,driver:o,sqlalchemy_uri_placeholder:r}}),a===G.GSheet&&v({type:kt.AddTableCatalogSheet})}},It=()=>{f&&Z(f.id),F(!1),J(!0)},zt=()=>{B&&I(!1),Pe&&Me(!1),At&&(Me(!1),Ie(""),Fe([]),je([]),Be([]),Qe([]),re({}),se({}),he({}),xe({})),v({type:kt.Reset}),Ne([])},Ft=()=>g?!D||B?(0,H.tZ)(i.Fragment,null,(0,H.tZ)(Oe,{key:"back",onClick:zt},(0,o.t)("Back")),(0,H.tZ)(Oe,{key:"submit",buttonStyle:"primary",onClick:qt,loading:Q},(0,o.t)("Connect"))):(0,H.tZ)(i.Fragment,null,(0,H.tZ)(Oe,{key:"back",onClick:It},(0,o.t)("Back")),(0,H.tZ)(Oe,{key:"submit",buttonStyle:"primary",onClick:qt,"data-test":"modal-confirm-button",loading:Q},(0,o.t)("Finish"))):Pe?(0,H.tZ)(i.Fragment,null,(0,H.tZ)(Oe,{key:"back",onClick:zt},(0,o.t)("Back")),(0,H.tZ)(Oe,{key:"submit",buttonStyle:"primary",onClick:qt,disabled:!!(Mt||Et.length&&!_e||Pt.length&&"{}"===JSON.stringify(oe)||Tt.length&&"{}"===JSON.stringify(ie)||Ot.length&&"{}"===JSON.stringify(de)||Ut.length&&"{}"===JSON.stringify(Ze)),loading:Q},(0,o.t)("Connect"))):(0,H.tZ)(i.Fragment,null),Rt=(0,i.useRef)(!0);(0,i.useEffect)((()=>{Rt.current?Rt.current=!1:Mt||Et.length||Pt.length||Tt.length||Ot.length||Ut.length||Q||At||(ft(),t((0,o.t)("Database connected")))}),[Et,Pt,Mt,At,Tt,Ot,Ut]),(0,i.useEffect)((()=>{l&&(S("1"),V(!0),E()),r&&l&&rt&&r&&(b||Z(r).catch((t=>e((0,o.t)("Sorry there was an error fetching database information: %s",t.message)))))}),[l,r]),(0,i.useEffect)((()=>{f&&(v({type:kt.Fetched,payload:f}),j(f.database_name))}),[f]),(0,i.useEffect)((()=>{Q&&V(!1),k&&s&&Dt(s)}),[k]),(0,i.useEffect)((()=>{Pe&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[Pe]),(0,i.useEffect)((()=>{Fe([...Pt])}),[Pt]),(0,i.useEffect)((()=>{je([...Tt])}),[Tt]),(0,i.useEffect)((()=>{Be([...Ot])}),[Ot]),(0,i.useEffect)((()=>{Qe([...Ut])}),[Ut]),(0,i.useEffect)((()=>{var e;void 0!==(null==g||null==(e=g.parameters)?void 0:e.ssh)&&tt(g.parameters.ssh)}),[null==g||null==(u=g.parameters)?void 0:u.ssh]);const jt=()=>qe?(0,H.tZ)(be,null,(0,H.tZ)(te.Z,{errorMessage:qe,showDbInstallInstructions:ze.length>0})):null,Ht=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";we(n.toUpperCase()===(0,o.t)("OVERWRITE"))},Bt=()=>{let e=[];var t;return N()(y)?N()($)||"GENERIC_DB_ENGINE_ERROR"!==(null==$?void 0:$.error_type)||(e=[(null==$?void 0:$.description)||(null==$?void 0:$.message)]):e="object"==typeof y?Object.values(y):"string"==typeof y?[y]:[],e.length?(0,H.tZ)(Ct,null,(0,H.tZ)(ee.Z,{title:(0,o.t)("Database Creation Error"),description:(0,o.t)('We are unable to connect to your database. Click "See more" for database-provided information that may help troubleshoot the issue.'),subtitle:(null==(t=e)?void 0:t[0])||(null==$?void 0:$.description),copyText:null==$?void 0:$.description})):(0,H.tZ)(i.Fragment,null)},Jt=()=>{V(!0),Z(null==f?void 0:f.id).then((e=>{(0,p.LS)(p.dR.Database,e)}))},Qt=()=>(0,H.tZ)(bt,{db:g,onSSHTunnelParametersChange:({target:e})=>{mt(kt.ParametersSSHTunnelChange,{type:e.type,name:e.name,value:e.value}),gt()},setSSHTunnelLoginMethod:e=>v({type:kt.SetSSHTunnelLoginMethod,payload:{login_method:e}})}),Vt=()=>(0,H.tZ)(i.Fragment,null,(0,H.tZ)(Xe,{isEditMode:rt,db:g,sslForced:!1,dbModel:pt,onAddTableCatalog:()=>{v({type:kt.AddTableCatalogSheet})},onQueryChange:({target:e})=>mt(kt.QueryChange,{name:e.name,value:e.value}),onExtraInputChange:({target:e})=>mt(kt.ExtraInputChange,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{v({type:kt.RemoveTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:vt,onChange:({target:e})=>mt(kt.TextChange,{name:e.name,value:e.value}),getValidation:()=>L(g),validationErrors:$,getPlaceholder:ht,clearValidationErrors:gt}),Ye&&(0,H.tZ)(St,null,Qt()));if($e.length>0&&(Et.length||ze.length||Re.length||He.length||Je.length))return(0,H.tZ)(M.default,{centered:!0,css:e=>[ue,ge(e),fe(e),ye(e)],footer:Ft(),maskClosable:!1,name:"database",onHide:ft,onHandledPrimaryAction:qt,primaryButtonName:(0,o.t)("Connect"),show:l,title:(0,H.tZ)("h4",null,(0,o.t)("Connect a database")),width:"500px"},(0,H.tZ)(et,{db:g,dbName:R,dbModel:pt,fileList:$e,hasConnectedDb:D,isEditMode:rt,isLoading:Q,useSqlAlchemyForm:st}),Et.length?(0,H.tZ)(i.Fragment,null,(0,H.tZ)(be,null,(0,H.tZ)(U.Z,{closable:!1,css:e=>(e=>H.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"warning",showIcon:!0,message:"",description:(0,o.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})),(0,H.tZ)(Y.Z,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==$?void 0:$.confirm_overwrite,label:(0,o.t)('Type "%s" to confirm',(0,o.t)("OVERWRITE")),onChange:Ht,css:me})):null,jt(),ze.length||Re.length||He.length||Je.length?[...new Set([...ze,...Re,...He,...Je])].map((e=>(0,H.tZ)(i.Fragment,null,(0,H.tZ)(be,null,(0,H.tZ)(U.Z,{closable:!1,css:e=>ve(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,o.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})),(null==ze?void 0:ze.indexOf(e))>=0&&(0,H.tZ)(Y.Z,{id:"password_needed",name:"password_needed",required:!0,value:oe[e],onChange:t=>re({...oe,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==$?void 0:$.password_needed,label:(0,o.t)("%s PASSWORD",e.slice(10)),css:me}),(null==Re?void 0:Re.indexOf(e))>=0&&(0,H.tZ)(Y.Z,{id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:ie[e],onChange:t=>se({...ie,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==$?void 0:$.ssh_tunnel_password_needed,label:(0,o.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:me}),(null==He?void 0:He.indexOf(e))>=0&&(0,H.tZ)(Y.Z,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",required:!0,value:de[e],onChange:t=>he({...de,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==$?void 0:$.ssh_tunnel_private_key_needed,label:(0,o.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:me}),(null==Je?void 0:Je.indexOf(e))>=0&&(0,H.tZ)(Y.Z,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",required:!0,value:Ze[e],onChange:t=>xe({...Ze,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==$?void 0:$.ssh_tunnel_private_key_password_needed,label:(0,o.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:me})))):null);const Wt=rt?(e=>(0,H.tZ)(i.Fragment,null,(0,H.tZ)(Oe,{key:"close",onClick:ft},(0,o.t)("Close")),(0,H.tZ)(Oe,{key:"submit",buttonStyle:"primary",onClick:qt,disabled:null==e?void 0:e.is_managed_externally,loading:Q,tooltip:null!=e&&e.is_managed_externally?(0,o.t)("This database is managed externally, and can't be edited in Superset"):""},(0,o.t)("Finish"))))(g):Ft();return dt?(0,H.tZ)(M.default,{css:e=>[ce,ue,ge(e),fe(e),ye(e)],name:"database","data-test":"database-modal",onHandledPrimaryAction:qt,onHide:ft,primaryButtonName:rt?(0,o.t)("Save"):(0,o.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,H.tZ)("h4",null,rt?(0,o.t)("Edit database"):(0,o.t)("Connect a database")),footer:Wt,maskClosable:!1},(0,H.tZ)(Ue,null,(0,H.tZ)(Ee,null,(0,H.tZ)(et,{isLoading:Q,isEditMode:rt,useSqlAlchemyForm:st,hasConnectedDb:D,db:g,dbName:R,dbModel:pt}))),(0,H.tZ)(wt,{defaultActiveKey:"1",activeKey:C,onTabClick:e=>S(e),animated:{inkBar:!0,tabPane:!0}},(0,H.tZ)(T.ZP.TabPane,{tab:(0,H.tZ)("span",null,(0,o.t)("Basic")),key:"1"},st?(0,H.tZ)(Ce,null,(0,H.tZ)(De,{db:g,onInputChange:({target:e})=>mt(kt.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:nt,testConnection:()=>{var a;if(null==g||!g.sqlalchemy_uri)return void e((0,o.t)("Please enter a SQLAlchemy URI to test"));const n={sqlalchemy_uri:(null==g?void 0:g.sqlalchemy_uri)||"",database_name:(null==g||null==(a=g.database_name)?void 0:a.trim())||void 0,impersonate_user:(null==g?void 0:g.impersonate_user)||void 0,extra:null==g?void 0:g.extra,masked_encrypted_extra:(null==g?void 0:g.masked_encrypted_extra)||"",server_cert:(null==g?void 0:g.server_cert)||void 0,ssh_tunnel:!N()(null==g?void 0:g.ssh_tunnel)&&Ye?{...g.ssh_tunnel,server_port:Number(g.ssh_tunnel.server_port)}:void 0};le(!0),(0,m.xx)(n,(t=>{le(!1),e(t)}),(e=>{le(!1),t(e)}))},testInProgress:ne},(0,H.tZ)(Ge,{dbModel:pt,db:g,changeMethods:{onParametersChange:vt},clearValidationErrors:gt}),Ye&&Qt()),(Gt=(null==g?void 0:g.backend)||(null==g?void 0:g.engine),void 0!==(null==k||null==(Kt=k.databases)||null==(Yt=Kt.find((e=>e.backend===Gt||e.engine===Gt)))?void 0:Yt.parameters)&&!rt&&(0,H.tZ)("div",{css:e=>pe(e)},(0,H.tZ)(A.Z,{buttonStyle:"link",onClick:()=>v({type:kt.ConfigMethodChange,payload:{database_name:null==g?void 0:g.database_name,configuration_method:X.DynamicForm,engine:null==g?void 0:g.engine}}),css:e=>(e=>H.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,o.t)("Connect this database using the dynamic form instead")),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):Vt(),!rt&&(0,H.tZ)(be,null,(0,H.tZ)(U.Z,{closable:!1,css:e=>ve(e),message:(0,o.t)("Additional fields may be required"),showIcon:!0,description:(0,H.tZ)(i.Fragment,null,(0,o.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,H.tZ)("a",{href:Ke,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,o.t)("here")),"."),type:"info"})),ct&&Bt()),(0,H.tZ)(T.ZP.TabPane,{tab:(0,H.tZ)("span",null,(0,o.t)("Advanced")),key:"2"},(0,H.tZ)(Le,{extraExtension:at,db:g,onInputChange:({target:e})=>mt(kt.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>mt(kt.TextChange,{name:e.name,value:e.value}),onEditorChange:e=>mt(kt.EditorChange,e),onExtraInputChange:({target:e})=>{mt(kt.ExtraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>{mt(kt.ExtraEditorChange,e)}})))):(0,H.tZ)(M.default,{css:e=>[ue,ge(e),fe(e),ye(e)],name:"database",onHandledPrimaryAction:qt,onHide:ft,primaryButtonName:D?(0,o.t)("Finish"):(0,o.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,H.tZ)("h4",null,(0,o.t)("Connect a database")),footer:Ft(),maskClosable:!1},!Q&&D?(0,H.tZ)(i.Fragment,null,(0,H.tZ)(et,{isLoading:Q,isEditMode:rt,useSqlAlchemyForm:st,hasConnectedDb:D,db:g,dbName:R,dbModel:pt,editNewDb:B}),z&&(0,H.tZ)($t,null,(0,H.tZ)(A.Z,{buttonStyle:"secondary",onClick:()=>{V(!0),Jt(),xt("/dataset/add/")}},(0,o.t)("CREATE DATASET")),(0,H.tZ)(A.Z,{buttonStyle:"secondary",onClick:()=>{V(!0),Jt(),xt("/sqllab?db=true")}},(0,o.t)("QUERY DATA IN SQL LAB"))),B?Vt():(0,H.tZ)(Le,{extraExtension:at,db:g,onInputChange:({target:e})=>mt(kt.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>mt(kt.TextChange,{name:e.name,value:e.value}),onEditorChange:e=>mt(kt.EditorChange,e),onExtraInputChange:({target:e})=>{mt(kt.ExtraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>mt(kt.ExtraEditorChange,e)})):(0,H.tZ)(i.Fragment,null,!Q&&(g?(0,H.tZ)(i.Fragment,null,(0,H.tZ)(et,{isLoading:Q,isEditMode:rt,useSqlAlchemyForm:st,hasConnectedDb:D,db:g,dbName:R,dbModel:pt}),it&&(()=>{var e,t,a,n,l;const{hostname:o}=window.location;let r=(null==ot||null==(e=ot.REGIONAL_IPS)?void 0:e.default)||"";const i=(null==ot?void 0:ot.REGIONAL_IPS)||{};return Object.entries(i).forEach((([e,t])=>{const a=new RegExp(e);o.match(a)&&(r=t)})),(null==g?void 0:g.engine)&&(0,H.tZ)(be,null,(0,H.tZ)(U.Z,{closable:!1,css:e=>ve(e),type:"info",showIcon:!0,message:(null==(t=_t[g.engine])?void 0:t.message)||(null==ot||null==(a=ot.DEFAULT)?void 0:a.message),description:(null==(n=_t[g.engine])?void 0:n.description)||(null==ot||null==(l=ot.DEFAULT)?void 0:l.description)+r}))})(),Vt(),(0,H.tZ)("div",{css:e=>pe(e)},pt.engine!==G.GSheet&&(0,H.tZ)(i.Fragment,null,(0,H.tZ)(A.Z,{"data-test":"sqla-connect-btn",buttonStyle:"link",onClick:()=>v({type:kt.ConfigMethodChange,payload:{engine:g.engine,configuration_method:X.SqlalchemyUri,database_name:g.database_name}}),css:Se},(0,o.t)("Connect this database with a SQLAlchemy URI string instead")),(0,H.tZ)(K.Z,{tooltip:(0,o.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"}))),ct&&Bt()):(0,H.tZ)(Te,null,(0,H.tZ)(et,{isLoading:Q,isEditMode:rt,useSqlAlchemyForm:st,hasConnectedDb:D,db:g,dbName:R,dbModel:pt}),(0,H.tZ)("div",{className:"preferred"},null==k||null==(Xt=k.databases)?void 0:Xt.filter((e=>e.preferred)).map((e=>(0,H.tZ)(W,{className:"preferred-item",onClick:()=>Dt(e.name),buttonText:e.name,icon:null==lt?void 0:lt[e.engine],key:`${e.name}`})))),(()=>{var e,t;return(0,H.tZ)("div",{className:"available"},(0,H.tZ)("h4",{className:"available-label"},(0,o.t)("Or choose from a list of other databases we support:")),(0,H.tZ)("div",{className:"control-label"},(0,o.t)("Supported databases")),(0,H.tZ)(O.IZ,{className:"available-select",onChange:Dt,placeholder:(0,o.t)("Choose a database..."),showSearch:!0},null==(e=[...(null==k?void 0:k.databases)||[]])?void 0:e.sort(((e,t)=>e.name.localeCompare(t.name))).map(((e,t)=>(0,H.tZ)(O.IZ.Option,{value:e.name,key:`database-${t}`},e.name))),(0,H.tZ)(O.IZ.Option,{value:"Other",key:"Other"},(0,o.t)("Other"))),(0,H.tZ)(U.Z,{showIcon:!0,closable:!1,css:e=>ve(e),type:"info",message:(null==ot||null==(t=ot.ADD_DATABASE)?void 0:t.message)||(0,o.t)("Want to add a new database?"),description:null!=ot&&ot.ADD_DATABASE?(0,H.tZ)(i.Fragment,null,(0,o.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,H.tZ)("a",{href:null==ot?void 0:ot.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==ot?void 0:ot.ADD_DATABASE.contact_description_link)," ",null==ot?void 0:ot.ADD_DATABASE.description):(0,H.tZ)(i.Fragment,null,(0,o.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,H.tZ)("a",{href:Ke,target:"_blank",rel:"noopener noreferrer"},(0,o.t)("here")),".")}))})(),(0,H.tZ)(Ae,null,(0,H.tZ)(O.gq,{name:"databaseFile",id:"databaseFile","data-test":"database-file-input",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{Ie(""),Fe([]),je([]),Be([]),Qe([]),re({}),se({}),he({}),xe({}),Me(!0),Ne([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await Lt(e.file.originFileObj,oe,ie,de,Ze,_e)&&(null==a||a())},onRemove:e=>(Ne($e.filter((t=>t.uid!==e.uid))),!1)},(0,H.tZ)(A.Z,{"data-test":"import-database-btn",buttonStyle:"link",type:"link",css:ke},(0,o.t)("Import database from file")))),jt()))),Q&&(0,H.tZ)(h.Z,null));var Xt,Gt,Kt,Yt}));var Tt=a(54070),Ot=a(12);const Ut=(0,n.I)(),Mt=Ut.get("database.delete.related"),At=Ut.get("databaseconnection.extraOption"),Lt=(0,l.Z)(_.Z.Check)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,qt=(0,l.Z)(_.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,Dt=l.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .action-button {
    display: inline-block;
    height: 100%;
  }
`;function It({value:e}){return e?(0,H.tZ)(Lt,null):(0,H.tZ)(qt,null)}const zt=(0,v.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:n,resourceCount:l,resourceCollection:s},hasPerm:v,fetchData:k,refreshData:E}=(0,m.Yi)("database",(0,o.t)("database"),e),$=(0,c.v9)((e=>e.user)),N=(0,y.eY)(Z.KD.showDatabaseModal),[P,T]=(0,u.Kx)({databaseAdded:u.dJ}),[O,U]=(0,i.useState)(N||!1),[M,A]=(0,i.useState)(null),[L,q]=(0,i.useState)(null),[D,I]=(0,i.useState)(!1),z=(0,w.i5)($),F=D||z,[R,j]=(0,i.useState)(!1),{roles:B}=$,{CSV_EXTENSIONS:J,COLUMNAR_EXTENSIONS:Q,EXCEL_EXTENSIONS:V,ALLOWED_EXTENSIONS:W}=(0,c.v9)((e=>e.common.conf));function X({database:e=null,modalOpen:t=!1}={}){q(e),U(t)}(0,i.useEffect)((()=>{null!=P&&P.databaseAdded&&(T({databaseAdded:void 0}),E())}),[P,T,E]);const G=v("can_write"),K=v("can_write"),Y=v("can_write"),ee=v("can_export"),{canUploadCSV:te,canUploadColumnar:ae,canUploadExcel:ne}=(0,g.Mc)(B,J,Q,V,W),le=z&&!D,oe=[{label:(0,o.t)("Upload file to database"),childs:[{label:(0,o.t)("Upload CSV"),name:"Upload CSV file",url:"/csvtodatabaseview/form",perm:te&&F,disable:le},{label:(0,o.t)("Upload columnar file"),name:"Upload columnar file",url:"/columnartodatabaseview/form",perm:ae&&F,disable:le},{label:(0,o.t)("Upload Excel file"),name:"Upload Excel file",url:"/exceltodatabaseview/form",perm:ne&&F,disable:le}]}];(0,i.useEffect)((()=>{r.Z.get({endpoint:`/api/v1/database/?q=${d().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((({json:e})=>{var t;const a=(null==e||null==(t=e.result)?void 0:t.filter((e=>{var t;return null==e||null==(t=e.engine_information)?void 0:t.supports_file_upload})))||[];I((null==a?void 0:a.length)>=1)}))}),[O]);const re={activeChild:"Databases",dropDownLinks:oe.reduce(((e,t)=>(t.childs=t.childs.filter((e=>e.perm)),t.childs.length?(e.push(t),e):e)),[]),name:(0,o.t)("Databases")};G&&(re.buttons=[{"data-test":"btn-create-database",name:(0,H.tZ)(i.Fragment,null,(0,H.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Database")," "),buttonStyle:"primary",onClick:()=>{X({modalOpen:!0})}}]);const ie=(0,i.useMemo)((()=>[{accessor:"database_name",Header:(0,o.t)("Name")},{accessor:"backend",Header:(0,o.t)("Backend"),size:"lg",disableSortBy:!0},{accessor:"allow_run_async",Header:(0,H.tZ)(x.u,{id:"allow-run-async-header-tooltip",title:(0,o.t)("Asynchronous query execution"),placement:"top"},(0,H.tZ)("span",null,(0,o.t)("AQE"))),Cell:({row:{original:{allow_run_async:e}}})=>(0,H.tZ)(It,{value:e}),size:"sm"},{accessor:"allow_dml",Header:(0,H.tZ)(x.u,{id:"allow-dml-header-tooltip",title:(0,o.t)("Allow data manipulation language"),placement:"top"},(0,H.tZ)("span",null,(0,o.t)("DML"))),Cell:({row:{original:{allow_dml:e}}})=>(0,H.tZ)(It,{value:e}),size:"sm"},{accessor:"allow_file_upload",Header:(0,o.t)("CSV upload"),Cell:({row:{original:{allow_file_upload:e}}})=>(0,H.tZ)(It,{value:e}),size:"md"},{accessor:"expose_in_sqllab",Header:(0,o.t)("Expose in SQL Lab"),Cell:({row:{original:{expose_in_sqllab:e}}})=>(0,H.tZ)(It,{value:e}),size:"md"},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:t}}})=>(0,H.tZ)(Tt.w,{date:t,user:e}),Header:(0,o.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>K||Y||ee?(0,H.tZ)(Dt,{className:"actions"},Y&&(0,H.tZ)("span",{role:"button",tabIndex:0,className:"action-button","data-test":"database-delete",onClick:()=>{return t=e,r.Z.get({endpoint:`/api/v1/database/${t.id}/related_objects/`}).then((({json:e={}})=>{A({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count,sqllab_tab_count:e.sqllab_tab_states.count})})).catch((0,g.v$)((e=>(0,o.t)("An error occurred while fetching database related data: %s",e))));var t}},(0,H.tZ)(x.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete database"),placement:"bottom"},(0,H.tZ)(_.Z.Trash,null))),ee&&(0,H.tZ)(x.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,H.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{var t;void 0!==(t=e).id&&((0,S.Z)("database",[t.id],(()=>{j(!1)})),j(!0))}},(0,H.tZ)(_.Z.Share,null))),K&&(0,H.tZ)(x.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,H.tZ)("span",{role:"button","data-test":"database-edit",tabIndex:0,className:"action-button",onClick:()=>X({database:e,modalOpen:!0})},(0,H.tZ)(_.Z.EditAlt,{"data-test":"edit-alt"})))):null,Header:(0,o.t)("Actions"),id:"actions",hidden:!K&&!Y,disableSortBy:!0},{accessor:Ot.J.ChangedBy,hidden:!0}]),[Y,K,ee]),se=(0,i.useMemo)((()=>[{Header:(0,o.t)("Name"),key:"search",id:"database_name",input:"search",operator:C.p.Contains},{Header:(0,o.t)("Expose in SQL Lab"),key:"expose_in_sql_lab",id:"expose_in_sqllab",input:"select",operator:C.p.Equals,unfilteredLabel:(0,o.t)("All"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,H.tZ)(x.u,{id:"allow-run-async-filter-header-tooltip",title:(0,o.t)("Asynchronous query execution"),placement:"top"},(0,H.tZ)("span",null,(0,o.t)("AQE"))),key:"allow_run_async",id:"allow_run_async",input:"select",operator:C.p.Equals,unfilteredLabel:(0,o.t)("All"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:C.p.RelationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,g.tm)("database","changed_by",(0,g.v$)((e=>(0,o.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[]);return(0,H.tZ)(i.Fragment,null,(0,H.tZ)(b.Z,re),(0,H.tZ)(Pt,{databaseId:null==L?void 0:L.id,show:O,onHide:X,onDatabaseAdd:()=>{E()}}),M&&(0,H.tZ)(f.Z,{description:(0,H.tZ)(i.Fragment,null,(0,H.tZ)("p",null,(0,o.t)("The database %s is linked to %s charts that appear on %s dashboards and users have %s SQL Lab tabs using this database open. Are you sure you want to continue? Deleting the database will break those objects.",M.database_name,M.chart_count,M.dashboard_count,M.sqllab_tab_count)),Mt&&(0,H.tZ)(Mt,{database:M})),onConfirm:()=>{M&&function(a){const{id:n,database_name:l}=a;r.Z.delete({endpoint:`/api/v1/database/${n}`}).then((()=>{E(),t((0,o.t)("Deleted: %s",l)),null!=At&&At.onDelete&&At.onDelete(a),(0,p.LS)(p.dR.Database,null),A(null)}),(0,g.v$)((t=>e((0,o.t)("There was an issue deleting %s: %s",l,t)))))}(M)},onHide:()=>A(null),open:!0,title:(0,o.t)("Delete Database?")}),(0,H.tZ)(C.Z,{className:"database-list-view",columns:ie,count:l,data:s,fetchData:k,filters:se,initialSort:[{id:"changed_on_delta_humanized",desc:!0}],loading:n,addDangerToast:e,addSuccessToast:t,refreshData:()=>{},pageSize:25}),R&&(0,H.tZ)(h.Z,null))}))},83379:(e,t,a)=>{function n(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=6d492d9815cd95b4a686.chunk.js.map