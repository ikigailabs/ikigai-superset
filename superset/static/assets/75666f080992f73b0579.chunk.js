"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5936],{1612:(e,a,t)=>{t.d(a,{Ay:()=>S});var n=t(64467),l=t(58168),o=t(96540),r=t(38873),s=t(46942),i=t.n(s),d=t(8719),c=t(77540),u=o.createContext(null),p=u.Provider;const h=u;var m=t(67924),g=function(e,a){var t,s=o.useContext(h),u=o.useContext(c.QO),p=u.getPrefixCls,g=u.direction,b=o.useRef(),v=(0,d.K4)(a,b);o.useEffect((function(){(0,m.A)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var f=e.prefixCls,y=e.className,_=e.children,x=e.style,Y=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(e,["prefixCls","className","children","style"]),w=p("radio",f),C=(0,l.A)({},Y);s&&(C.name=s.name,C.onChange=function(a){e.onChange&&e.onChange(a),(null==s?void 0:s.onChange)&&s.onChange(a)},C.checked=e.value===s.value,C.disabled=e.disabled||s.disabled);var A=i()("".concat(w,"-wrapper"),(t={},(0,n.A)(t,"".concat(w,"-wrapper-checked"),C.checked),(0,n.A)(t,"".concat(w,"-wrapper-disabled"),C.disabled),(0,n.A)(t,"".concat(w,"-wrapper-rtl"),"rtl"===g),t),y);return o.createElement("label",{className:A,style:x,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.default,(0,l.A)({},C,{prefixCls:w,ref:v})),void 0!==_?o.createElement("span",null,_):null)},b=o.forwardRef(g);b.displayName="Radio",b.defaultProps={type:"radio"};const v=b;var f=t(5544),y=t(12533),_=t(48224),x=o.forwardRef((function(e,a){var t=o.useContext(c.QO),l=t.getPrefixCls,r=t.direction,s=o.useContext(_.A),d=(0,y.A)(e.defaultValue,{value:e.value}),u=(0,f.A)(d,2),h=u[0],m=u[1];return o.createElement(p,{value:{onChange:function(a){var t=h,n=a.target.value;"value"in e||m(n);var l=e.onChange;l&&n!==t&&l(a)},value:h,disabled:e.disabled,name:e.name}},function(){var t,d=e.prefixCls,c=e.className,u=void 0===c?"":c,p=e.options,m=e.optionType,g=e.buttonStyle,b=void 0===g?"outline":g,f=e.disabled,y=e.children,_=e.size,x=e.style,Y=e.id,w=e.onMouseEnter,C=e.onMouseLeave,A=l("radio",d),S="".concat(A,"-group"),k=y;if(p&&p.length>0){var E="button"===m?"".concat(A,"-button"):A;k=p.map((function(e){return"string"==typeof e?o.createElement(v,{key:e,prefixCls:E,disabled:f,value:e,checked:h===e},e):o.createElement(v,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||f,value:e.value,checked:h===e.value,style:e.style},e.label)}))}var $=_||s,N=i()(S,"".concat(S,"-").concat(b),(t={},(0,n.A)(t,"".concat(S,"-").concat($),$),(0,n.A)(t,"".concat(S,"-rtl"),"rtl"===r),t),u);return o.createElement("div",{className:N,style:x,onMouseEnter:w,onMouseLeave:C,id:Y,ref:a},k)}())}));const Y=o.memo(x);var w=function(e,a){var t=o.useContext(h),n=o.useContext(c.QO).getPrefixCls,r=e.prefixCls,s=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(e,["prefixCls"]),i=n("radio-button",r);return t&&(s.checked=e.value===t.value,s.disabled=e.disabled||t.disabled),o.createElement(v,(0,l.A)({prefixCls:i},s,{type:"radio",ref:a}))};const C=o.forwardRef(w);var A=v;A.Button=C,A.Group=Y;const S=A},80899:(e,a,t)=>{var n=t(6305),l=t(24994);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=l(t(94634)),r=l(t(43693)),s=n(t(96540)),i=n(t(11060)),d=l(t(46942)),c=l(t(41588)),u=l(t(96839)),p=l(t(74415)),h=l(t(76859)),m=t(76421);function g(e){var a,t,n=e.type,l=e.className,g=e.size,b=e.onEdit,v=e.hideAdd,f=e.centered,y=e.addIcon,_=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),x=_.prefixCls,Y=s.useContext(m.ConfigContext),w=Y.getPrefixCls,C=Y.direction,A=w("tabs",x);return"editable-card"===n&&(t={onEdit:function(e,a){var t=a.key,n=a.event;null==b||b("add"===e?n:t,e)},removeIcon:s.createElement(p.default,null),addIcon:y||s.createElement(u.default,null),showAdd:!0!==v}),(0,h.default)(!("onPrevClick"in _)&&!("onNextClick"in _),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),s.createElement(i.default,(0,o.default)({direction:C},_,{moreTransitionName:"slide-up",className:(0,d.default)((a={},(0,r.default)(a,"".concat(A,"-").concat(g),g),(0,r.default)(a,"".concat(A,"-card"),["card","editable-card"].includes(n)),(0,r.default)(a,"".concat(A,"-editable-card"),"editable-card"===n),(0,r.default)(a,"".concat(A,"-centered"),f),a),l),editable:t,moreIcon:s.createElement(c.default,null),prefixCls:A}))}g.TabPane=i.TabPane;var b=g;a.default=b},41588:(e,a,t)=>{var n;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=(n=t(12383))&&n.__esModule?n:{default:n};a.default=l,e.exports=l},96839:(e,a,t)=>{var n;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=(n=t(25824))&&n.__esModule?n:{default:n};a.default=l,e.exports=l},12383:(e,a,t)=>{var n=t(24994),l=t(73738);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(12897)),r=function(e,a){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=d(a);if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var s=o?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}(t(96540)),s=n(t(33433)),i=n(t(64214));function d(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:a})(e)}var c=function(e,a){return r.createElement(i.default,(0,o.default)((0,o.default)({},e),{},{ref:a,icon:s.default}))};c.displayName="EllipsisOutlined";var u=r.forwardRef(c);a.default=u},25824:(e,a,t)=>{var n=t(24994),l=t(73738);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(12897)),r=function(e,a){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=d(a);if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var s=o?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}(t(96540)),s=n(t(93198)),i=n(t(64214));function d(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:a})(e)}var c=function(e,a){return r.createElement(i.default,(0,o.default)((0,o.default)({},e),{},{ref:a,icon:s.default}))};c.displayName="PlusOutlined";var u=r.forwardRef(c);a.default=u},12397:(e,a,t)=>{t.d(a,{U:()=>s}),t(96540);var n=t(19129),l=t(25106),o=t(95579),r=t(17437);const s=({user:e,date:a})=>{const t=(0,r.Y)("span",{className:"no-wrap","data-test":"audit-info-date"},a);if(e){const a=(0,l.A)(e),s=(0,o.t)("Modified by: %s",a);return(0,r.Y)(n.m,{title:s,placement:"bottom"},t)}return t}},31383:(e,a,t)=>{t.d(a,{A:()=>c});var n=t(96540),l=t(95579),o=t(50500),r=t(25946),s=t(17437);const i=(0,o.xK)(),d=i?i.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:a})=>(0,s.Y)(r.A,{closable:!1,css:e=>(e=>s.AH`
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
`)(e),type:"error",showIcon:!0,message:e,description:a?(0,s.Y)(n.Fragment,null,(0,s.Y)("br",null),(0,l.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,s.Y)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,l.t)("here")),"."):""})},78697:(e,a,t)=>{t.d(a,{s:()=>s});var n=t(90017),l=t(1612);const o=(0,n.A)(l.Ay)`
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
`,r=(0,n.A)(l.Ay.Group)`
  font-size: inherit;
`,s=Object.assign(o,{Group:r,Button:l.Ay.Button})},48327:(e,a,t)=>{t.d(a,{fn:()=>h,pX:()=>g,Ay:()=>b});var n=t(97032),l=(t(96540),t(17437)),o=t(90017),r=t(80899),s=t(12249);const i=({animated:e=!1,fullWidth:a=!0,allowOverflow:t=!0,...o})=>(0,l.Y)(r.default,(0,n.A)({animated:e},o,{css:e=>l.AH`
      overflow: ${t?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${t?"visible":"auto"};
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
      ${a&&l.AH`
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
    `})),d=(0,o.A)(r.default.TabPane)``,c=Object.assign(i,{TabPane:d}),u=(0,o.A)(i)`
  ${({theme:e,fullWidth:a})=>`\n    .ant-tabs-content-holder {\n      background: ${e.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*e.gridUnit}px;\n    }\n\n    ${a?l.AH`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}
`,p=(0,o.A)(s.A.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,h=Object.assign(u,{TabPane:d});h.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},h.TabPane.defaultProps={closeIcon:(0,l.Y)(p,{role:"button",tabIndex:0})};const m=(0,o.A)(h)`
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
`,g=Object.assign(m,{TabPane:d}),b=c},28292:(e,a,t)=>{t.d(a,{B:()=>l});var n=t(61225);function l(){return(0,n.d4)((e=>{var a;return null==e||null==(a=e.common)?void 0:a.conf}))}},33498:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Fa});var n=t(72391),l=t(90017),o=t(95579),r=t(35742),s=t(96540),i=t(58561),d=t.n(i),c=t(61225),u=t(33231),p=t(62221),h=t(17444),m=t(50500),g=t(30703),b=t(5261),v=t(51713),f=t(37020),y=t(32132),_=t(27023),x=t(19129),Y=t(12249),w=t(65256),C=t(39854),A=t(4780),S=t(44383),k=t.n(S),E=t(62193),$=t.n(E),N=t(56347),P=t(48327),T=t(15595),O=t(25946),U=t(85861),M=t(46920);function L(){return L=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},L.apply(this,arguments)}const q={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},D=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function H(e,a){for(;e&&a--;)e=e.previousElementSibling;return e}const F={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},R=Object.keys(F);class I extends s.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,a){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,a)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(q).forEach((a=>{e.style[a]=q[a]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);D.forEach((a=>{this.canvas.style[a]=e[a]}))}reflow(e){const a=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(a){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${a}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const t=this.putEllipsis(this.calcIndexes()),n=t>-1,l={clamped:n,text:n?this.units.slice(0,t).join(""):e.text};this.setState(l,e.onReflow.bind(this,l))}calcIndexes(){const e=[0];let a=this.canvas.firstElementChild;if(!a)return e;let t=0,n=1,l=a.offsetTop;for(;(a=a.nextElementSibling)&&(a.offsetTop>l&&(n++,e.push(t),l=a.offsetTop),t++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const a=e[this.maxLine],t=this.units.slice(0,a),n=this.canvas.children[a].offsetTop;this.canvas.innerHTML=t.map(((e,a)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const l=this.canvas.lastElementChild;let o=H(l,2);for(;o&&(l.offsetTop>n||l.offsetHeight>o.offsetHeight||l.offsetTop>o.offsetTop);)this.canvas.removeChild(o),o=H(l,2),t.pop();return t.length}isClamped(){return this.clamped}render(){const{text:e,clamped:a}=this.state,t=this.props,{component:n,ellipsis:l,trimRight:o,className:r}=t,i=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(t,["component","ellipsis","trimRight","className"]);return s.createElement(n,L({className:`LinesEllipsis ${a?"LinesEllipsis--clamped":""} ${r}`,ref:e=>this.target=e},function(e,a){if(!e||"object"!=typeof e)return e;const t={};return Object.keys(e).forEach((n=>{a.indexOf(n)>-1||(t[n]=e[n])})),t}(i,R)),a&&o?e.replace(/[\s\uFEFF\xA0]+$/,""):e,s.createElement("wbr",null),a&&s.createElement("span",{className:"LinesEllipsis-ellipsis"},l))}}I.defaultProps=F;const z=I;var j=t(17437);const B=(0,l.A)(M.A)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,Q=l.A.div`
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
`,V=l.A.div`
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
`,J=l.A.div`
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
`,W=(0,l.A)((({icon:e,altText:a,buttonText:t,...n})=>(0,j.Y)(B,n,(0,j.Y)(Q,null,e&&(0,j.Y)("img",{src:e,alt:a}),!e&&(0,j.Y)(Y.A.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,j.Y)(J,null,(0,j.Y)(V,null,(0,j.Y)(z,{text:t,maxLine:"2",basedOn:"words",trimRight:!0}))))))`
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
`;var G,K,X=t(31641),Z=t(97987),ee=t(79427),ae=t(31383),te=t(28292);!function(e){e.SqlalchemyUri="sqlalchemy_form",e.DynamicForm="dynamic_form"}(G||(G={})),function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(K||(K={}));var ne=t(46942),le=t.n(ne),oe=t(85994),re=t(84074),se=t(41154);const ie=j.AH`
  margin-bottom: 0;
`,de=l.A.header`
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
`,ce=j.AH`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,ue=j.AH`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,pe=e=>j.AH`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,he=e=>j.AH`
  padding-left: ${2*e.gridUnit}px;
`,me=e=>j.AH`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,ge=e=>j.AH`
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
`,be=e=>j.AH`
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
`,ve=l.A.div`
  ${({theme:e})=>j.AH`
    margin: 0 ${4*e.gridUnit}px -${4*e.gridUnit}px;
  `}
`,fe=e=>j.AH`
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
`,ye=e=>j.AH`
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
`,_e=e=>j.AH`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,xe=l.A.div`
  ${({theme:e})=>j.AH`
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
`,Ye=(0,l.A)(se.iN)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,we=l.A.div`
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
`,Ce=l.A.div`
  padding: 0 ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,Ae=e=>j.AH`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,Se=e=>j.AH`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,ke=l.A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0px;
  }
`,Ee=(l.A.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
`,l.A.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,l.A.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  text-transform: uppercase;
`),$e=l.A.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,Ne=l.A.div`
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
  }`,Pe=l.A.div`
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
`,Te=(0,l.A)(M.A)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,Oe=l.A.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.max};
  background: ${({theme:e})=>e.colors.grayscale.light5};
  height: auto;
`,Ue=l.A.div`
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
`,Me=l.A.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,Le=({db:e,onInputChange:a,onTextChange:t,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:r,extraExtension:s})=>{var i,d,c,u;const p=!(null==e||!e.expose_in_sqllab),h=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas),m=null==e||null==(i=e.engine_information)?void 0:i.supports_file_upload,g=JSON.parse((null==e?void 0:e.extra)||"{}",((e,a)=>"engine_params"===e&&"object"==typeof a?JSON.stringify(a):a)),b=null==s?void 0:s.component,v=null==s?void 0:s.logo,f=null==s?void 0:s.description;return(0,j.Y)(re.A,{expandIconPosition:"right",accordion:!0,css:e=>(e=>j.AH`
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
`)(e)},(0,j.Y)(re.A.Panel,{header:(0,j.Y)("div",null,(0,j.Y)("h4",null,(0,o.t)("SQL Lab")),(0,j.Y)("p",{className:"helper"},(0,o.t)("Adjust how this database will interact with SQL Lab."))),key:"1"},(0,j.Y)(xe,{css:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:a,labelText:(0,o.t)("Expose database in SQL Lab")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("Allow this database to be queried in SQL Lab")})),(0,j.Y)(we,{className:le()("expandable",{open:p,"ctas-open":h})},(0,j.Y)(xe,{css:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:a,labelText:(0,o.t)("Allow CREATE TABLE AS")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("Allow creation of new tables based on queries")}))),(0,j.Y)(xe,{css:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:a,labelText:(0,o.t)("Allow CREATE VIEW AS")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("Allow creation of new views based on queries")})),(0,j.Y)(xe,{className:le()("expandable",{open:h})},(0,j.Y)("div",{className:"control-label"},(0,o.t)("CTAS & CVAS SCHEMA")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)("input",{type:"text",name:"force_ctas_schema",placeholder:(0,o.t)("Create or select schema..."),onChange:a,value:(null==e?void 0:e.force_ctas_schema)||""})),(0,j.Y)("div",{className:"helper"},(0,o.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,j.Y)(xe,{css:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:a,labelText:(0,o.t)("Allow DML")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,j.Y)(xe,{css:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==g||!g.cost_estimate_enabled),onChange:l,labelText:(0,o.t)("Enable query cost estimation")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,j.Y)(xe,{css:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==g||!g.allows_virtual_table_explore),onChange:l,labelText:(0,o.t)("Allow this database to be explored")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,j.Y)(xe,{css:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"disable_data_preview",indeterminate:!1,checked:!(null==g||!g.disable_data_preview),onChange:l,labelText:(0,o.t)("Disable SQL Lab data preview queries")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")}))),(0,j.Y)(xe,null,(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"expand_rows",indeterminate:!1,checked:!(null==g||null==(d=g.schema_options)||!d.expand_rows),onChange:l,labelText:(0,o.t)("Enable row expansion in schemas")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("For Trino, describe full schemas of nested ROW types, expanding them with dotted paths")})))))),(0,j.Y)(re.A.Panel,{header:(0,j.Y)("div",null,(0,j.Y)("h4",null,(0,o.t)("Performance")),(0,j.Y)("p",{className:"helper"},(0,o.t)("Adjust performance settings of this database."))),key:"2"},(0,j.Y)(xe,{className:"mb-8"},(0,j.Y)("div",{className:"control-label"},(0,o.t)("Chart cache timeout")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:a})),(0,j.Y)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined."))),(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label"},(0,o.t)("Schema cache timeout")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)("input",{type:"number",name:"schema_cache_timeout",value:(null==g||null==(c=g.metadata_cache_timeout)?void 0:c.schema_cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:l,"data-test":"schema-cache-timeout-test"})),(0,j.Y)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label"},(0,o.t)("Table cache timeout")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)("input",{type:"number",name:"table_cache_timeout",value:(null==g||null==(u=g.metadata_cache_timeout)?void 0:u.table_cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:l,"data-test":"table-cache-timeout-test"})),(0,j.Y)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,j.Y)(xe,{css:(0,j.AH)({no_margin_bottom:ie},"","")},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"allow_run_async",indeterminate:!1,checked:!(null==e||!e.allow_run_async),onChange:a,labelText:(0,o.t)("Asynchronous query execution")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,j.Y)(xe,{css:(0,j.AH)({no_margin_bottom:ie},"","")},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==g||!g.cancel_query_on_windows_unload),onChange:l,labelText:(0,o.t)("Cancel query on window unload event")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,j.Y)(re.A.Panel,{header:(0,j.Y)("div",null,(0,j.Y)("h4",null,(0,o.t)("Security")),(0,j.Y)("p",{className:"helper"},(0,o.t)("Add extra connection information."))),key:"3"},(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label"},(0,o.t)("Secure extra")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)(Ye,{name:"masked_encrypted_extra",value:(null==e?void 0:e.masked_encrypted_extra)||"",placeholder:(0,o.t)("Secure extra"),onChange:e=>n({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px"})),(0,j.Y)("div",{className:"helper"},(0,j.Y)("div",null,(0,o.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label"},(0,o.t)("Root certificate")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,o.t)("Enter CA_BUNDLE"),onChange:t})),(0,j.Y)("div",{className:"helper"},(0,o.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,j.Y)(xe,{css:m?{}:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:a,labelText:(0,o.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,j.Y)(X.A,{tooltip:(0,o.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),m&&(0,j.Y)(xe,{css:null!=e&&e.allow_file_upload?{}:ie},(0,j.Y)("div",{className:"input-container"},(0,j.Y)(oe.A,{id:"allow_file_upload",indeterminate:!1,checked:!(null==e||!e.allow_file_upload),onChange:a,labelText:(0,o.t)("Allow file uploads to database")}))),m&&!(null==e||!e.allow_file_upload)&&(0,j.Y)(xe,{css:ie},(0,j.Y)("div",{className:"control-label"},(0,o.t)("Schemas allowed for File upload")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==g?void 0:g.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:l})),(0,j.Y)("div",{className:"helper"},(0,o.t)("A comma-separated list of schemas that files are allowed to upload to.")))),s&&b&&f&&(0,j.Y)(re.A.Panel,{header:(0,j.Y)("div",null,v&&(0,j.Y)(v,null),(0,j.Y)("span",{css:e=>({fontSize:e.typography.sizes.l,fontWeight:e.typography.weights.bold})},null==s?void 0:s.title),(0,j.Y)("p",{className:"helper"},(0,j.Y)(f,null))),key:null==s?void 0:s.title,collapsible:null!=s.enabled&&s.enabled()?"icon":"disabled"},(0,j.Y)(xe,{css:ie},(0,j.Y)(b,{db:e,onEdit:s.onEdit}))),(0,j.Y)(re.A.Panel,{header:(0,j.Y)("div",null,(0,j.Y)("h4",null,(0,o.t)("Other")),(0,j.Y)("p",{className:"helper"},(0,o.t)("Additional settings."))),key:"4"},(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label"},(0,o.t)("Metadata Parameters")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)(Ye,{name:"metadata_params",placeholder:(0,o.t)("Metadata Parameters"),onChange:e=>r({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==g?void 0:g.metadata_params)||{}).length?null==g?void 0:g.metadata_params:""})),(0,j.Y)("div",{className:"helper"},(0,j.Y)("div",null,(0,o.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label"},(0,o.t)("Engine Parameters")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)(Ye,{name:"engine_params",placeholder:(0,o.t)("Engine Parameters"),onChange:e=>r({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==g?void 0:g.engine_params)||{}).length?null==g?void 0:g.engine_params:""})),(0,j.Y)("div",{className:"helper"},(0,j.Y)("div",null,(0,o.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label","data-test":"version-label-test"},(0,o.t)("Version")),(0,j.Y)("div",{className:"input-container","data-test":"version-spinbutton-test"},(0,j.Y)("input",{type:"text",name:"version",placeholder:(0,o.t)("Version number"),onChange:l,value:(null==g?void 0:g.version)||""})),(0,j.Y)("div",{className:"helper"},(0,o.t)("Specify the database version. This is used with Presto for query cost estimation, and Dremio for syntax changes, among others.")))))};var qe=t(27588);const De=({db:e,onInputChange:a,testConnection:t,conf:n,testInProgress:l=!1,children:r})=>{var i,d;const c=(null==qe.A||null==(i=qe.A.DB_MODAL_SQLALCHEMY_FORM)?void 0:i.SQLALCHEMY_DOCS_URL)||"https://docs.sqlalchemy.org/en/13/core/engines.html",u=(null==qe.A||null==(d=qe.A.DB_MODAL_SQLALCHEMY_FORM)?void 0:d.SQLALCHEMY_DISPLAY_TEXT)||"SQLAlchemy docs";return(0,j.Y)(s.Fragment,null,(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label"},(0,o.t)("Display Name"),(0,j.Y)("span",{className:"required"},"*")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)("input",{type:"text",name:"database_name","data-test":"database-name-input",value:(null==e?void 0:e.database_name)||"",placeholder:(0,o.t)("Name your database"),onChange:a})),(0,j.Y)("div",{className:"helper"},(0,o.t)("Pick a name to help you identify this database."))),(0,j.Y)(xe,null,(0,j.Y)("div",{className:"control-label"},(0,o.t)("SQLAlchemy URI"),(0,j.Y)("span",{className:"required"},"*")),(0,j.Y)("div",{className:"input-container"},(0,j.Y)("input",{type:"text",name:"sqlalchemy_uri","data-test":"sqlalchemy-uri-input",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(null==e?void 0:e.sqlalchemy_uri_placeholder)||(0,o.t)("dialect+driver://username:password@host:port/database"),onChange:a})),(0,j.Y)("div",{className:"helper"},(0,o.t)("Refer to the")," ",(0,j.Y)("a",{href:c||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},u||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,o.t)("for more information on how to structure your URI."))),r,(0,j.Y)(M.A,{onClick:t,loading:l,cta:!0,buttonStyle:"link",css:e=>(e=>j.AH`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,o.t)("Test connection")))};var He=t(40563);const Fe={account:{helpText:(0,o.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,o.t)("e.g. xy12345.us-east-2.aws")},warehouse:{placeholder:(0,o.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{placeholder:(0,o.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},Re=({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,field:o})=>{var r;return(0,j.Y)(Z.A,{id:o,name:o,required:e,value:null==l||null==(r=l.parameters)?void 0:r[o],validationMethods:{onBlur:t},errorMessage:null==n?void 0:n[o],placeholder:Fe[o].placeholder,helpText:Fe[o].helpText,label:o,onChange:a.onParametersChange,className:Fe[o].className||o})};var Ie,ze=t(40458);!function(e){e[e.JsonUpload=0]="JsonUpload",e[e.CopyPaste=1]="CopyPaste"}(Ie||(Ie={}));const je={gsheets:"service_account_info",bigquery:"credentials_info"};var Be={name:"s5xdrg",styles:"display:flex;align-items:center"};const Qe=({changeMethods:e,isEditMode:a,db:t,editNewDb:n})=>{var l,r,i;const[d,c]=(0,s.useState)(Ie.JsonUpload.valueOf()),[u,p]=(0,s.useState)(null),[h,m]=(0,s.useState)(!0),g="gsheets"===(null==t?void 0:t.engine)?!a&&!h:!a,b=a&&"{}"!==(null==t?void 0:t.masked_encrypted_extra),v=(null==t?void 0:t.engine)&&je[t.engine],f="object"==typeof(null==t||null==(l=t.parameters)?void 0:l[v])?JSON.stringify(null==t||null==(r=t.parameters)?void 0:r[v]):null==t||null==(i=t.parameters)?void 0:i[v];return(0,j.Y)(Ne,null,"gsheets"===(null==t?void 0:t.engine)&&(0,j.Y)("div",{className:"catalog-type-select"},(0,j.Y)(ze.A,{css:e=>(e=>j.AH`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,o.t)("Type of Google Sheets allowed")),(0,j.Y)(T._P,{style:{width:"100%"},defaultValue:b?"false":"true",onChange:e=>m("true"===e)},(0,j.Y)(T._P.Option,{value:"true",key:1},(0,o.t)("Publicly shared sheets only")),(0,j.Y)(T._P.Option,{value:"false",key:2},(0,o.t)("Public and privately shared sheets")))),g&&(0,j.Y)(s.Fragment,null,(0,j.Y)(ze.A,{required:!0},(0,o.t)("How do you want to enter service account credentials?")),(0,j.Y)(T._P,{defaultValue:d,style:{width:"100%"},onChange:e=>c(e)},(0,j.Y)(T._P.Option,{value:Ie.JsonUpload},(0,o.t)("Upload JSON file")),(0,j.Y)(T._P.Option,{value:Ie.CopyPaste},(0,o.t)("Copy and Paste JSON credentials")))),d===Ie.CopyPaste||a||n?(0,j.Y)("div",{className:"input-container"},(0,j.Y)(ze.A,{required:!0},(0,o.t)("Service Account")),(0,j.Y)("textarea",{className:"input-form",name:v,value:f,onChange:e.onParametersChange,placeholder:(0,o.t)("Paste content of service credentials JSON file here")}),(0,j.Y)("span",{className:"label-paste"},(0,o.t)("Copy and paste the entire service account .json file here"))):g&&(0,j.Y)("div",{className:"input-container",css:e=>pe(e)},(0,j.Y)("div",{css:Be},(0,j.Y)(ze.A,{required:!0},(0,o.t)("Upload Credentials")),(0,j.Y)(X.A,{tooltip:(0,o.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!u&&(0,j.Y)(T.QC,{className:"input-upload-btn",onClick:()=>{var e,a;return null==(e=document)||null==(a=e.getElementById("selectedFile"))?void 0:a.click()}},(0,o.t)("Choose File")),u&&(0,j.Y)("div",{className:"input-upload-current"},u,(0,j.Y)(Y.A.DeleteFilled,{iconSize:"m",onClick:()=>{p(null),e.onParametersChange({target:{name:v,value:""}})}})),(0,j.Y)("input",{id:"selectedFile",accept:".json",className:"input-upload",type:"file",onChange:async a=>{var t,n;let l;a.target.files&&(l=a.target.files[0]),p(null==(t=l)?void 0:t.name),e.onParametersChange({target:{type:null,name:v,value:await(null==(n=l)?void 0:n.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))};var Ve;const Je=["host","port","database","username","password","access_token","http_path","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role","ssh"],We={host:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l})=>{var r;return(0,j.Y)(Z.A,{id:"host",name:"host",value:null==l||null==(r=l.parameters)?void 0:r.host,required:e,hasTooltip:!0,tooltipText:(0,o.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.host,placeholder:(0,o.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,o.t)("Host"),onChange:a.onParametersChange})},http_path:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l})=>{var r,s;const i=JSON.parse((null==l?void 0:l.extra)||"{}");return(0,j.Y)(Z.A,{id:"http_path",name:"http_path",required:e,value:null==(r=i.engine_params)||null==(s=r.connect_args)?void 0:s.http_path,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.http_path,placeholder:(0,o.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:a.onExtraInputChange,helpText:(0,o.t)("Copy the name of the HTTP Path of your cluster.")})},port:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l})=>{var r;return(0,j.Y)(s.Fragment,null,(0,j.Y)(Z.A,{id:"port",name:"port",type:"number",required:e,value:null==l||null==(r=l.parameters)?void 0:r.port,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.port,placeholder:(0,o.t)("e.g. 5432"),className:"form-group-w-50",label:(0,o.t)("Port"),onChange:a.onParametersChange}))},database:({required:e,changeMethods:a,getValidation:t,validationErrors:n,placeholder:l,db:r})=>{var s;return(0,j.Y)(Z.A,{id:"database",name:"database",required:e,value:null==r||null==(s=r.parameters)?void 0:s.database,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.database,placeholder:null!=l?l:(0,o.t)("e.g. world_population"),label:(0,o.t)("Database name"),onChange:a.onParametersChange,helpText:(0,o.t)("Copy the name of the database you are trying to connect to.")})},username:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l})=>{var r;return(0,j.Y)(Z.A,{id:"username",name:"username",required:e,value:null==l||null==(r=l.parameters)?void 0:r.username,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.username,placeholder:(0,o.t)("e.g. Analytics"),label:(0,o.t)("Username"),onChange:a.onParametersChange})},password:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isEditMode:r})=>{var s;return(0,j.Y)(Z.A,{id:"password",name:"password",required:e,visibilityToggle:!r,value:null==l||null==(s=l.parameters)?void 0:s.password,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.password,placeholder:(0,o.t)("e.g. ********"),label:(0,o.t)("Password"),onChange:a.onParametersChange})},access_token:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isEditMode:r})=>{var s;return(0,j.Y)(Z.A,{id:"access_token",name:"access_token",required:e,visibilityToggle:!r,value:null==l||null==(s=l.parameters)?void 0:s.access_token,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.access_token,placeholder:(0,o.t)("e.g. ********"),label:(0,o.t)("Access token"),onChange:a.onParametersChange})},database_name:({changeMethods:e,getValidation:a,validationErrors:t,db:n})=>(0,j.Y)(s.Fragment,null,(0,j.Y)(Z.A,{id:"database_name",name:"database_name",required:!0,value:null==n?void 0:n.database_name,validationMethods:{onBlur:a},errorMessage:null==t?void 0:t.database_name,placeholder:"",label:(0,o.t)("Display Name"),onChange:e.onChange,helpText:(0,o.t)("Pick a nickname for how the database will display in Superset.")})),query:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l})=>(0,j.Y)(Z.A,{id:"query_input",name:"query_input",required:e,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.query,placeholder:(0,o.t)("e.g. param1=value1&param2=value2"),label:(0,o.t)("Additional Parameters"),onChange:a.onQueryChange,helpText:(0,o.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:a,db:t,sslForced:n})=>{var l;return(0,j.Y)("div",{css:e=>pe(e)},(0,j.Y)(T._b,{disabled:n&&!e,checked:(null==t||null==(l=t.parameters)?void 0:l.encryption)||n,onChange:e=>{a.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,j.Y)("span",{css:he},"SSL"),(0,j.Y)(X.A,{tooltip:(0,o.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:Qe,service_account_info:Qe,catalog:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l})=>{const r=(null==l?void 0:l.catalog)||[],i=n||{};return(0,j.Y)(Ue,null,(0,j.Y)("h4",{className:"gsheet-title"},(0,o.t)("Connect Google Sheets as tables to this database")),(0,j.Y)("div",null,null==r?void 0:r.map(((n,l)=>{var d,c;return(0,j.Y)(s.Fragment,null,(0,j.Y)(ze.A,{className:"catalog-label",required:!0},(0,o.t)("Google Sheet Name and URL")),(0,j.Y)("div",{className:"catalog-name"},(0,j.Y)(Z.A,{className:"catalog-name-input",required:e,validationMethods:{onBlur:t},errorMessage:null==(d=i[l])?void 0:d.name,placeholder:(0,o.t)("Enter a name for this sheet"),onChange:e=>{a.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==r?void 0:r.length)>1&&(0,j.Y)(Y.A.CloseOutlined,{css:e=>j.AH`
                    align-self: center;
                    background: ${e.colors.grayscale.light4};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>a.onRemoveTableCatalog(l)})),(0,j.Y)(Z.A,{className:"catalog-name-url",required:e,validationMethods:{onBlur:t},errorMessage:null==(c=i[l])?void 0:c.url,placeholder:(0,o.t)("Paste the shareable Google Sheet URL here"),onChange:e=>a.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value}))})),(0,j.Y)(Te,{className:"catalog-add-btn",onClick:()=>{a.onAddTableCatalog()}},"+ ",(0,o.t)("Add sheet"))))},warehouse:Re,role:Re,account:Re,ssh:null!=(Ve=(0,n.a)().get("ssh_tunnel.form.switch"))?Ve:({isEditMode:e,changeMethods:a,clearValidationErrors:t,db:n})=>{var l;return(0,j.Y)("div",{css:e=>pe(e)},(0,j.Y)(T._b,{disabled:e&&!$()(null==n?void 0:n.ssh_tunnel),checked:null==n||null==(l=n.parameters)?void 0:l.ssh,onChange:e=>{a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:e}}),t()},"data-test":"ssh-tunnel-switch"}),(0,j.Y)("span",{css:he},(0,o.t)("SSH Tunnel")),(0,j.Y)(X.A,{tooltip:(0,o.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"}))}},Ge=({dbModel:e,db:a,editNewDb:t,getPlaceholder:n,getValidation:l,isEditMode:o=!1,onAddTableCatalog:r,onChange:s,onExtraInputChange:i,onParametersChange:d,onParametersUploadFileChange:c,onQueryChange:u,onRemoveTableCatalog:p,sslForced:h,validationErrors:m,clearValidationErrors:g})=>{const b=null==e?void 0:e.parameters;return(0,j.Y)(He.lV,null,(0,j.Y)("div",{css:e=>[me,_e(e)]},b&&Je.filter((e=>Object.keys(b.properties).includes(e)||"database_name"===e)).map((e=>{var v;return We[e]({required:null==(v=b.required)?void 0:v.includes(e),changeMethods:{onParametersChange:d,onChange:s,onQueryChange:u,onParametersUploadFileChange:c,onAddTableCatalog:r,onRemoveTableCatalog:p,onExtraInputChange:i},validationErrors:m,getValidation:l,clearValidationErrors:g,db:a,key:e,field:e,isEditMode:o,sslForced:h,editNewDb:t,placeholder:n?n(e):void 0})}))))},Ke=(0,m.xK)(),Xe=Ke?Ke.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Ze={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},ea=({isLoading:e,isEditMode:a,useSqlAlchemyForm:t,hasConnectedDb:n,db:l,dbName:r,dbModel:i,editNewDb:d,fileList:c})=>{const u=c&&(null==c?void 0:c.length)>0,p=(0,j.Y)(de,null,(0,j.Y)(Ee,null,null==l?void 0:l.backend),(0,j.Y)($e,null,r)),h=(0,j.Y)(de,null,(0,j.Y)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,j.Y)("h4",null,(0,o.t)("Enter Primary Credentials")),(0,j.Y)("p",{className:"helper-bottom"},(0,o.t)("Need help? Learn how to connect your database")," ",(0,j.Y)("a",{href:(null==Ke?void 0:Ke.default)||Xe,target:"_blank",rel:"noopener noreferrer"},(0,o.t)("here")),".")),m=(0,j.Y)(Oe,null,(0,j.Y)(de,null,(0,j.Y)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})),(0,j.Y)("h4",{className:"step-3-text"},(0,o.t)("Database connected")),(0,j.Y)("p",{className:"subheader-text"},(0,o.t)("Create a dataset to begin visualizing your data as a chart or go to\n          SQL Lab to query your data.")))),g=(0,j.Y)(Oe,null,(0,j.Y)(de,null,(0,j.Y)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})),(0,j.Y)("h4",null,(0,o.t)("Enter the required %(dbModelName)s credentials",{dbModelName:i.name})),(0,j.Y)("p",{className:"helper-bottom"},(0,o.t)("Need help? Learn more about")," ",(0,j.Y)("a",{href:(b=null==l?void 0:l.engine,b?Ke?Ke[b]||Ke.default:Ze[b]?Ze[b]:`https://superset.apache.org/docs/databases/${b}`:null),target:"_blank",rel:"noopener noreferrer"},(0,o.t)("connecting to %(dbModelName)s.",{dbModelName:i.name}),"."))));var b;const v=(0,j.Y)(de,null,(0,j.Y)("div",{className:"select-db"},(0,j.Y)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})),(0,j.Y)("h4",null,(0,o.t)("Select a database to connect")))),f=(0,j.Y)(Oe,null,(0,j.Y)(de,null,(0,j.Y)("p",{className:"helper-top"},(0,o.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,j.Y)("h4",null,(0,o.t)("Enter the required %(dbModelName)s credentials",{dbModelName:i.name})),(0,j.Y)("p",{className:"helper-bottom"},u?c[0].name:"")));return u?f:e?(0,j.Y)(s.Fragment,null):a?p:t?h:n&&!d?m:l||d?g:v};var aa=t(78697),ta=t(90868),na=t(36255),la=t(27236),oa=t(58168),ra=t(93695),sa=t(59114),ia=function(e,a){return s.createElement(sa.A,(0,oa.A)({},e,{ref:a,icon:ra.A}))};const da=s.forwardRef(ia);var ca=t(93426),ua=function(e,a){return s.createElement(sa.A,(0,oa.A)({},e,{ref:a,icon:ca.A}))};const pa=s.forwardRef(ua),ha=l.A.div`
  padding-top: ${({theme:e})=>2*e.gridUnit}px;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,ma=(0,l.A)(T.fI)`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,ga=(0,l.A)(T.Wq.Item)`
  margin-bottom: 0 !important;
`,ba=(0,l.A)(na.A.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,va=({db:e,onSSHTunnelParametersChange:a,setSSHTunnelLoginMethod:t})=>{var n,l,r,i,d,c;const[u,p]=(0,s.useState)(ka.Password);return(0,j.Y)(He.lV,null,(0,j.Y)(ma,{gutter:16},(0,j.Y)(T.fv,{xs:24,md:12},(0,j.Y)(ha,null,(0,j.Y)(He.lR,{htmlFor:"server_address",required:!0},(0,o.t)("SSH Host")),(0,j.Y)(ta.pd,{name:"server_address",type:"text",placeholder:(0,o.t)("e.g. 127.0.0.1"),value:(null==e||null==(n=e.ssh_tunnel)?void 0:n.server_address)||"",onChange:a,"data-test":"ssh-tunnel-server_address-input"}))),(0,j.Y)(T.fv,{xs:24,md:12},(0,j.Y)(ha,null,(0,j.Y)(He.lR,{htmlFor:"server_port",required:!0},(0,o.t)("SSH Port")),(0,j.Y)(ta.pd,{name:"server_port",placeholder:(0,o.t)("22"),type:"number",value:null==e||null==(l=e.ssh_tunnel)?void 0:l.server_port,onChange:a,"data-test":"ssh-tunnel-server_port-input"})))),(0,j.Y)(ma,{gutter:16},(0,j.Y)(T.fv,{xs:24},(0,j.Y)(ha,null,(0,j.Y)(He.lR,{htmlFor:"username",required:!0},(0,o.t)("Username")),(0,j.Y)(ta.pd,{name:"username",type:"text",placeholder:(0,o.t)("e.g. Analytics"),value:(null==e||null==(r=e.ssh_tunnel)?void 0:r.username)||"",onChange:a,"data-test":"ssh-tunnel-username-input"})))),(0,j.Y)(ma,{gutter:16},(0,j.Y)(T.fv,{xs:24},(0,j.Y)(ha,null,(0,j.Y)(He.lR,{htmlFor:"use_password",required:!0},(0,o.t)("Login with")),(0,j.Y)(ga,{name:"use_password",initialValue:u},(0,j.Y)(aa.s.Group,{onChange:({target:{value:e}})=>{p(e),t(e)}},(0,j.Y)(aa.s,{value:ka.Password,"data-test":"ssh-tunnel-use_password-radio"},(0,o.t)("Password")),(0,j.Y)(aa.s,{value:ka.PrivateKey,"data-test":"ssh-tunnel-use_private_key-radio"},(0,o.t)("Private Key & Password"))))))),u===ka.Password&&(0,j.Y)(ma,{gutter:16},(0,j.Y)(T.fv,{xs:24},(0,j.Y)(ha,null,(0,j.Y)(He.lR,{htmlFor:"password",required:!0},(0,o.t)("SSH Password")),(0,j.Y)(ba,{name:"password",placeholder:(0,o.t)("e.g. ********"),value:(null==e||null==(i=e.ssh_tunnel)?void 0:i.password)||"",onChange:a,"data-test":"ssh-tunnel-password-input",iconRender:e=>e?(0,j.Y)(la.A,{title:"Hide password."},(0,j.Y)(da,null)):(0,j.Y)(la.A,{title:"Show password."},(0,j.Y)(pa,null)),role:"textbox"})))),u===ka.PrivateKey&&(0,j.Y)(s.Fragment,null,(0,j.Y)(ma,{gutter:16},(0,j.Y)(T.fv,{xs:24},(0,j.Y)(ha,null,(0,j.Y)(He.lR,{htmlFor:"private_key",required:!0},(0,o.t)("Private Key")),(0,j.Y)(ta.fs,{name:"private_key",placeholder:(0,o.t)("Paste Private Key here"),value:(null==e||null==(d=e.ssh_tunnel)?void 0:d.private_key)||"",onChange:a,"data-test":"ssh-tunnel-private_key-input",rows:4})))),(0,j.Y)(ma,{gutter:16},(0,j.Y)(T.fv,{xs:24},(0,j.Y)(ha,null,(0,j.Y)(He.lR,{htmlFor:"private_key_password",required:!0},(0,o.t)("Private Key Password")),(0,j.Y)(ba,{name:"private_key_password",placeholder:(0,o.t)("e.g. ********"),value:(null==e||null==(c=e.ssh_tunnel)?void 0:c.private_key_password)||"",onChange:a,"data-test":"ssh-tunnel-private_key_password-input",iconRender:e=>e?(0,j.Y)(la.A,{title:"Hide password."},(0,j.Y)(da,null)):(0,j.Y)(la.A,{title:"Show password."},(0,j.Y)(pa,null)),role:"textbox"}))))))};var fa=t(27366);const ya=({clearValidationErrors:e,changeMethods:a,db:t,dbModel:n})=>{var l,r,i;const[d,c]=(0,s.useState)(!1),u=(0,fa.G7)(fa.TO.SshTunneling),p=(null==n||null==(l=n.engine_information)?void 0:l.disable_ssh_tunneling)||!1,h=u&&!p;return(0,s.useEffect)((()=>{var e;h&&void 0!==(null==t||null==(e=t.parameters)?void 0:e.ssh)&&c(t.parameters.ssh)}),[null==t||null==(r=t.parameters)?void 0:r.ssh,h]),(0,s.useEffect)((()=>{var e;h&&void 0===(null==t||null==(e=t.parameters)?void 0:e.ssh)&&!$()(null==t?void 0:t.ssh_tunnel)&&a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:!0}})}),[a,null==t||null==(i=t.parameters)?void 0:i.ssh,null==t?void 0:t.ssh_tunnel,h]),h?(0,j.Y)("div",{css:e=>pe(e)},(0,j.Y)(T._b,{checked:d,onChange:t=>{c(t),a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:t}}),e()},"data-test":"ssh-tunnel-switch"}),(0,j.Y)("span",{css:he},(0,o.t)("SSH Tunnel")),(0,j.Y)(X.A,{tooltip:(0,o.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"})):null},_a=(0,n.a)(),xa=JSON.stringify({allows_virtual_table_explore:!0}),Ya={[K.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},wa=(0,l.A)(P.Ay)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`,Ca=l.A.div`
  ${({theme:e})=>`\n    margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;\n  `};
`,Aa=l.A.div`
  ${({theme:e})=>`\n    padding: 0px ${4*e.gridUnit}px;\n  `};
`;var Sa,ka;!function(e){e[e.AddTableCatalogSheet=0]="AddTableCatalogSheet",e[e.ConfigMethodChange=1]="ConfigMethodChange",e[e.DbSelected=2]="DbSelected",e[e.EditorChange=3]="EditorChange",e[e.ExtraEditorChange=4]="ExtraEditorChange",e[e.ExtraInputChange=5]="ExtraInputChange",e[e.Fetched=6]="Fetched",e[e.InputChange=7]="InputChange",e[e.ParametersChange=8]="ParametersChange",e[e.QueryChange=9]="QueryChange",e[e.RemoveTableCatalogSheet=10]="RemoveTableCatalogSheet",e[e.Reset=11]="Reset",e[e.TextChange=12]="TextChange",e[e.ParametersSSHTunnelChange=13]="ParametersSSHTunnelChange",e[e.SetSSHTunnelLoginMethod=14]="SetSSHTunnelLoginMethod",e[e.RemoveSSHTunnelConfig=15]="RemoveSSHTunnelConfig"}(Sa||(Sa={})),function(e){e[e.Password=0]="Password",e[e.PrivateKey=1]="PrivateKey"}(ka||(ka={}));const Ea=l.A.div`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  margin-left: ${({theme:e})=>3*e.gridUnit}px;
`;function $a(e,a){var t,n,l,o;const r={...e||{}};let s,i,d={},c="";const u=JSON.parse(r.extra||"{}");switch(a.type){case Sa.ExtraEditorChange:try{i=JSON.parse(a.payload.json||"{}")}catch(e){i=a.payload.json}return{...r,extra:JSON.stringify({...u,[a.payload.name]:i})};case Sa.ExtraInputChange:return"schema_cache_timeout"===a.payload.name||"table_cache_timeout"===a.payload.name?{...r,extra:JSON.stringify({...u,metadata_cache_timeout:{...null==u?void 0:u.metadata_cache_timeout,[a.payload.name]:a.payload.value}})}:"schemas_allowed_for_file_upload"===a.payload.name?{...r,extra:JSON.stringify({...u,schemas_allowed_for_file_upload:(a.payload.value||"").split(",").filter((e=>""!==e))})}:"http_path"===a.payload.name?{...r,extra:JSON.stringify({...u,engine_params:{connect_args:{[a.payload.name]:null==(p=a.payload.value)?void 0:p.trim()}}})}:"expand_rows"===a.payload.name?{...r,extra:JSON.stringify({...u,schema_options:{...null==u?void 0:u.schema_options,[a.payload.name]:!!a.payload.value}})}:{...r,extra:JSON.stringify({...u,[a.payload.name]:"checkbox"===a.payload.type?a.payload.checked:a.payload.value})};var p;case Sa.InputChange:return"checkbox"===a.payload.type?{...r,[a.payload.name]:a.payload.checked}:{...r,[a.payload.name]:a.payload.value};case Sa.ParametersChange:if(null!=(t=a.payload.type)&&t.startsWith("catalog")&&void 0!==r.catalog){var h;const e=[...r.catalog],t=null==(h=a.payload.type)?void 0:h.split("-")[1],n=e[t]||{};return n[a.payload.name]=a.payload.value,e.splice(parseInt(t,10),1,n),s=e.reduce(((e,a)=>{const t={...e};return t[a.name]=a.value,t}),{}),{...r,catalog:e,parameters:{...r.parameters,catalog:s}}}return{...r,parameters:{...r.parameters,[a.payload.name]:a.payload.value}};case Sa.ParametersSSHTunnelChange:return{...r,ssh_tunnel:{...r.ssh_tunnel,[a.payload.name]:a.payload.value}};case Sa.SetSSHTunnelLoginMethod:{let e={};var m,g,b;return null!=r&&r.ssh_tunnel&&(e=k()(r.ssh_tunnel,["id","server_address","server_port","username"])),a.payload.login_method===ka.PrivateKey?{...r,ssh_tunnel:{private_key:null==r||null==(m=r.ssh_tunnel)?void 0:m.private_key,private_key_password:null==r||null==(g=r.ssh_tunnel)?void 0:g.private_key_password,...e}}:a.payload.login_method===ka.Password?{...r,ssh_tunnel:{password:null==r||null==(b=r.ssh_tunnel)?void 0:b.password,...e}}:{...r}}case Sa.RemoveSSHTunnelConfig:return{...r,ssh_tunnel:void 0};case Sa.AddTableCatalogSheet:return void 0!==r.catalog?{...r,catalog:[...r.catalog,{name:"",value:""}]}:{...r,catalog:[{name:"",value:""}]};case Sa.RemoveTableCatalogSheet:return null==(n=r.catalog)||n.splice(a.payload.indexToDelete,1),{...r};case Sa.EditorChange:return{...r,[a.payload.name]:a.payload.json};case Sa.QueryChange:return{...r,parameters:{...r.parameters,query:Object.fromEntries(new URLSearchParams(a.payload.value))},query_input:a.payload.value};case Sa.TextChange:return{...r,[a.payload.name]:a.payload.value};case Sa.Fetched:if(d=(null==(l=a.payload)||null==(o=l.parameters)?void 0:o.query)||{},c=Object.entries(d).map((([e,a])=>`${e}=${a}`)).join("&"),a.payload.masked_encrypted_extra&&a.payload.configuration_method===G.DynamicForm){var v;const e=null==(v={...JSON.parse(a.payload.extra||"{}")}.engine_params)?void 0:v.catalog,t=Object.entries(e||{}).map((([e,a])=>({name:e,value:a})));return{...a.payload,engine:a.payload.backend||r.engine,configuration_method:a.payload.configuration_method,catalog:t,parameters:{...a.payload.parameters||r.parameters,catalog:e},query_input:c}}return{...a.payload,masked_encrypted_extra:a.payload.masked_encrypted_extra||"",engine:a.payload.backend||r.engine,configuration_method:a.payload.configuration_method,parameters:a.payload.parameters||r.parameters,ssh_tunnel:a.payload.ssh_tunnel||r.ssh_tunnel,query_input:c};case Sa.DbSelected:return{...a.payload,extra:xa,expose_in_sqllab:!0};case Sa.ConfigMethodChange:return{...a.payload};case Sa.Reset:default:return null}}const Na=(0,b.Ay)((({addDangerToast:e,addSuccessToast:a,onDatabaseAdd:t,onHide:n,show:l,databaseId:r,dbEngine:i})=>{var d,c,u;const[g,b]=(0,s.useReducer)($a,null),{state:{loading:v,resource:f,error:y},fetchResource:_,createResource:x,updateResource:Y,clearError:w}=(0,m.fn)("database",(0,o.t)("database"),e,"connection"),[C,A]=(0,s.useState)("1"),[S,k]=(0,m.d5)(),[E,L,q]=(0,m.Y8)(),[D,H]=(0,s.useState)(!1),[F,R]=(0,s.useState)(!1),[I,z]=(0,s.useState)(""),[B,Q]=(0,s.useState)(!1),[V,J]=(0,s.useState)(!1),[ne,le]=(0,s.useState)(!1),[oe,re]=(0,s.useState)({}),[se,ie]=(0,s.useState)({}),[de,he]=(0,s.useState)({}),[_e,xe]=(0,s.useState)({}),[Ye,we]=(0,s.useState)(!1),[Ee,$e]=(0,s.useState)([]),[Ne,Ue]=(0,s.useState)(!1),[qe,He]=(0,s.useState)(),[Fe,Re]=(0,s.useState)([]),[Ie,ze]=(0,s.useState)([]),[je,Be]=(0,s.useState)([]),[Qe,Ve]=(0,s.useState)([]),[Je,We]=(0,s.useState)({}),Ke=null!=(d=_a.get("ssh_tunnel.form.switch"))?d:ya,[Ze,aa]=(0,s.useState)(void 0);let ta=_a.get("databaseconnection.extraOption");ta&&(ta={...ta,onEdit:e=>{We({...Je,...e})}});const na=(0,te.B)(),la=(0,m.g9)(),oa=(0,m.Fp)(),ra=!!r,sa=oa||!(null==g||!g.engine||!Ya[g.engine]),ia=(null==g?void 0:g.configuration_method)===G.SqlalchemyUri,da=ra||ia,ca=E||y,ua=(0,N.W6)(),pa=(null==S||null==(c=S.databases)?void 0:c.find((e=>e.engine===(ra?null==g?void 0:g.backend:null==g?void 0:g.engine))))||{},ha=e=>{if("database"===e)return(0,o.t)("e.g. world_population")},ma=(0,s.useCallback)(((e,a)=>{b({type:e,payload:a})}),[]),ga=(0,s.useCallback)((()=>{q(null)}),[q]),ba=(0,s.useCallback)((({target:e})=>{ma(Sa.ParametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})}),[ma]),fa=()=>{b({type:Sa.Reset}),H(!1),ga(),w(),Q(!1),$e([]),Ue(!1),He(""),Re([]),ze([]),Be([]),Ve([]),re({}),ie({}),he({}),xe({}),we(!1),aa(void 0),n()},xa=e=>{ua.push(e)},{state:{alreadyExists:ka,passwordsNeeded:Na,sshPasswordNeeded:Pa,sshPrivateKeyNeeded:Ta,sshPrivateKeyPasswordNeeded:Oa,loading:Ua,failed:Ma},importResource:La}=(0,m.bN)("database",(0,o.t)("database"),(e=>{He(e)})),qa=async()=>{var n,l;let r;if(J(!0),null==(n=ta)||n.onSave(Je,g).then((({error:a})=>{a&&(r=a,e(a))})),r)return void J(!1);const s={...g||{}};if(s.configuration_method===G.DynamicForm){var i,d;null!=s&&null!=(i=s.parameters)&&i.catalog&&(s.extra=JSON.stringify({...JSON.parse(s.extra||"{}"),engine_params:{catalog:s.parameters.catalog}}));const a=await L(s,!0);(!$()(E)||null!=a&&a.length)&&(e((0,o.t)("Connection failed, please check your connection settings.")),J(!1));const t=ra?null==(d=s.parameters_schema)?void 0:d.properties:null==pa?void 0:pa.parameters.properties,n=JSON.parse(s.masked_encrypted_extra||"{}");Object.keys(t||{}).forEach((e=>{var a,l,o,r;t[e]["x-encrypted-extra"]&&null!=(a=s.parameters)&&a[e]&&("object"==typeof(null==(l=s.parameters)?void 0:l[e])?(n[e]=null==(o=s.parameters)?void 0:o[e],s.parameters[e]=JSON.stringify(s.parameters[e])):n[e]=JSON.parse((null==(r=s.parameters)?void 0:r[e])||"{}"))})),s.masked_encrypted_extra=JSON.stringify(n),s.engine===K.GSheet&&(s.impersonate_user=!0)}if(null!=s&&null!=(l=s.parameters)&&l.catalog&&(s.extra=JSON.stringify({...JSON.parse(s.extra||"{}"),engine_params:{catalog:s.parameters.catalog}})),!1===Ze&&(s.ssh_tunnel=null),null!=g&&g.id){if(await Y(g.id,s,s.configuration_method===G.DynamicForm)){var c;if(t&&t(),null==(c=ta)||c.onSave(Je,g).then((({error:a})=>{a&&(r=a,e(a))})),r)return void J(!1);B||(fa(),a((0,o.t)("Database settings updated")))}}else if(g){if(await x(s,s.configuration_method===G.DynamicForm)){var u;if(H(!0),t&&t(),null==(u=ta)||u.onSave(Je,g).then((({error:a})=>{a&&(r=a,e(a))})),r)return void J(!1);da&&(fa(),a((0,o.t)("Database connected")))}}else{if(Ue(!0),!(Ee[0].originFileObj instanceof File))return;await La(Ee[0].originFileObj,oe,se,de,_e,Ye)&&(t&&t(),fa(),a((0,o.t)("Database connected")))}R(!0),Q(!1),J(!1)},Da=e=>{if("Other"===e)b({type:Sa.DbSelected,payload:{database_name:e,configuration_method:G.SqlalchemyUri,engine:void 0,engine_information:{supports_file_upload:!0}}});else{const a=null==S?void 0:S.databases.filter((a=>a.name===e))[0],{engine:t,parameters:n,engine_information:l,default_driver:o,sqlalchemy_uri_placeholder:r}=a,s=void 0!==n;b({type:Sa.DbSelected,payload:{database_name:e,engine:t,configuration_method:s?G.DynamicForm:G.SqlalchemyUri,engine_information:l,driver:o,sqlalchemy_uri_placeholder:r}}),t===K.GSheet&&b({type:Sa.AddTableCatalogSheet})}},Ha=()=>{f&&_(f.id),R(!1),Q(!0)},Fa=()=>{B&&H(!1),Ne&&Ue(!1),Ma&&(Ue(!1),He(""),Re([]),ze([]),Be([]),Ve([]),re({}),ie({}),he({}),xe({})),b({type:Sa.Reset}),$e([])},Ra=()=>g?!D||B?(0,j.Y)(s.Fragment,null,(0,j.Y)(Te,{key:"back",onClick:Fa},(0,o.t)("Back")),(0,j.Y)(Te,{key:"submit",buttonStyle:"primary",onClick:qa,loading:V},(0,o.t)("Connect"))):(0,j.Y)(s.Fragment,null,(0,j.Y)(Te,{key:"back",onClick:Ha},(0,o.t)("Back")),(0,j.Y)(Te,{key:"submit",buttonStyle:"primary",onClick:qa,"data-test":"modal-confirm-button",loading:V},(0,o.t)("Finish"))):Ne?(0,j.Y)(s.Fragment,null,(0,j.Y)(Te,{key:"back",onClick:Fa},(0,o.t)("Back")),(0,j.Y)(Te,{key:"submit",buttonStyle:"primary",onClick:qa,disabled:!!(Ua||ka.length&&!Ye||Na.length&&"{}"===JSON.stringify(oe)||Pa.length&&"{}"===JSON.stringify(se)||Ta.length&&"{}"===JSON.stringify(de)||Oa.length&&"{}"===JSON.stringify(_e)),loading:V},(0,o.t)("Connect"))):(0,j.Y)(s.Fragment,null),Ia=(0,s.useRef)(!0);(0,s.useEffect)((()=>{Ia.current?Ia.current=!1:Ua||ka.length||Na.length||Pa.length||Ta.length||Oa.length||V||Ma||(fa(),a((0,o.t)("Database connected")))}),[ka,Na,Ua,Ma,Pa,Ta,Oa]),(0,s.useEffect)((()=>{l&&(A("1"),J(!0),k()),r&&l&&ra&&r&&(v||_(r).catch((a=>e((0,o.t)("Sorry there was an error fetching database information: %s",a.message)))))}),[l,r]),(0,s.useEffect)((()=>{f&&(b({type:Sa.Fetched,payload:f}),z(f.database_name))}),[f]),(0,s.useEffect)((()=>{V&&J(!1),S&&i&&Da(i)}),[S]),(0,s.useEffect)((()=>{Ne&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[Ne]),(0,s.useEffect)((()=>{Re([...Na])}),[Na]),(0,s.useEffect)((()=>{ze([...Pa])}),[Pa]),(0,s.useEffect)((()=>{Be([...Ta])}),[Ta]),(0,s.useEffect)((()=>{Ve([...Oa])}),[Oa]),(0,s.useEffect)((()=>{var e;void 0!==(null==g||null==(e=g.parameters)?void 0:e.ssh)&&aa(g.parameters.ssh)}),[null==g||null==(u=g.parameters)?void 0:u.ssh]);const za=()=>qe?(0,j.Y)(ve,null,(0,j.Y)(ae.A,{errorMessage:qe,showDbInstallInstructions:Fe.length>0})):null,ja=e=>{var a,t;const n=null!=(a=null==(t=e.currentTarget)?void 0:t.value)?a:"";we(n.toUpperCase()===(0,o.t)("OVERWRITE"))},Ba=()=>{let e=[];var a;return $()(y)?$()(E)||"GENERIC_DB_ENGINE_ERROR"!==(null==E?void 0:E.error_type)||(e=[(null==E?void 0:E.description)||(null==E?void 0:E.message)]):e="object"==typeof y?Object.values(y):"string"==typeof y?[y]:[],e.length?(0,j.Y)(Ca,null,(0,j.Y)(ee.A,{title:(0,o.t)("Database Creation Error"),description:(0,o.t)('We are unable to connect to your database. Click "See more" for database-provided information that may help troubleshoot the issue.'),subtitle:(null==(a=e)?void 0:a[0])||(null==E?void 0:E.description),copyText:null==E?void 0:E.description})):(0,j.Y)(s.Fragment,null)},Qa=()=>{J(!0),_(null==f?void 0:f.id).then((e=>{(0,p.SO)(p.Hh.Database,e)}))},Va=()=>(0,j.Y)(va,{db:g,onSSHTunnelParametersChange:({target:e})=>{ma(Sa.ParametersSSHTunnelChange,{type:e.type,name:e.name,value:e.value}),ga()},setSSHTunnelLoginMethod:e=>b({type:Sa.SetSSHTunnelLoginMethod,payload:{login_method:e}})}),Ja=()=>(0,j.Y)(s.Fragment,null,(0,j.Y)(Ge,{isEditMode:ra,db:g,sslForced:!1,dbModel:pa,onAddTableCatalog:()=>{b({type:Sa.AddTableCatalogSheet})},onQueryChange:({target:e})=>ma(Sa.QueryChange,{name:e.name,value:e.value}),onExtraInputChange:({target:e})=>ma(Sa.ExtraInputChange,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{b({type:Sa.RemoveTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:ba,onChange:({target:e})=>ma(Sa.TextChange,{name:e.name,value:e.value}),getValidation:()=>L(g),validationErrors:E,getPlaceholder:ha,clearValidationErrors:ga}),Ze&&(0,j.Y)(Aa,null,Va()));if(Ee.length>0&&(ka.length||Fe.length||Ie.length||je.length||Qe.length))return(0,j.Y)(U.A,{centered:!0,css:e=>[ue,ge(e),fe(e),ye(e)],footer:Ra(),maskClosable:!1,name:"database",onHide:fa,onHandledPrimaryAction:qa,primaryButtonName:(0,o.t)("Connect"),show:l,title:(0,j.Y)("h4",null,(0,o.t)("Connect a database")),width:"500px"},(0,j.Y)(ea,{db:g,dbName:I,dbModel:pa,fileList:Ee,hasConnectedDb:D,isEditMode:ra,isLoading:V,useSqlAlchemyForm:ia}),ka.length?(0,j.Y)(s.Fragment,null,(0,j.Y)(ve,null,(0,j.Y)(O.A,{closable:!1,css:e=>(e=>j.AH`
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
`)(e),type:"warning",showIcon:!0,message:"",description:(0,o.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})),(0,j.Y)(Z.A,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==E?void 0:E.confirm_overwrite,label:(0,o.t)('Type "%s" to confirm',(0,o.t)("OVERWRITE")),onChange:ja,css:me})):null,za(),Fe.length||Ie.length||je.length||Qe.length?[...new Set([...Fe,...Ie,...je,...Qe])].map((e=>(0,j.Y)(s.Fragment,null,(0,j.Y)(ve,null,(0,j.Y)(O.A,{closable:!1,css:e=>be(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,o.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})),(null==Fe?void 0:Fe.indexOf(e))>=0&&(0,j.Y)(Z.A,{id:"password_needed",name:"password_needed",required:!0,value:oe[e],onChange:a=>re({...oe,[e]:a.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==E?void 0:E.password_needed,label:(0,o.t)("%s PASSWORD",e.slice(10)),css:me}),(null==Ie?void 0:Ie.indexOf(e))>=0&&(0,j.Y)(Z.A,{id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:se[e],onChange:a=>ie({...se,[e]:a.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==E?void 0:E.ssh_tunnel_password_needed,label:(0,o.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:me}),(null==je?void 0:je.indexOf(e))>=0&&(0,j.Y)(Z.A,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",required:!0,value:de[e],onChange:a=>he({...de,[e]:a.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==E?void 0:E.ssh_tunnel_private_key_needed,label:(0,o.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:me}),(null==Qe?void 0:Qe.indexOf(e))>=0&&(0,j.Y)(Z.A,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",required:!0,value:_e[e],onChange:a=>xe({..._e,[e]:a.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==E?void 0:E.ssh_tunnel_private_key_password_needed,label:(0,o.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:me})))):null);const Wa=ra?(e=>(0,j.Y)(s.Fragment,null,(0,j.Y)(Te,{key:"close",onClick:fa},(0,o.t)("Close")),(0,j.Y)(Te,{key:"submit",buttonStyle:"primary",onClick:qa,disabled:null==e?void 0:e.is_managed_externally,loading:V,tooltip:null!=e&&e.is_managed_externally?(0,o.t)("This database is managed externally, and can't be edited in Superset"):""},(0,o.t)("Finish"))))(g):Ra();return da?(0,j.Y)(U.A,{css:e=>[ce,ue,ge(e),fe(e),ye(e)],name:"database","data-test":"database-modal",onHandledPrimaryAction:qa,onHide:fa,primaryButtonName:ra?(0,o.t)("Save"):(0,o.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,j.Y)("h4",null,ra?(0,o.t)("Edit database"):(0,o.t)("Connect a database")),footer:Wa,maskClosable:!1},(0,j.Y)(Oe,null,(0,j.Y)(ke,null,(0,j.Y)(ea,{isLoading:V,isEditMode:ra,useSqlAlchemyForm:ia,hasConnectedDb:D,db:g,dbName:I,dbModel:pa}))),(0,j.Y)(wa,{defaultActiveKey:"1",activeKey:C,onTabClick:e=>A(e),animated:{inkBar:!0,tabPane:!0}},(0,j.Y)(P.Ay.TabPane,{tab:(0,j.Y)("span",null,(0,o.t)("Basic")),key:"1"},ia?(0,j.Y)(Ce,null,(0,j.Y)(De,{db:g,onInputChange:({target:e})=>ma(Sa.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:na,testConnection:()=>{var t;if(null==g||!g.sqlalchemy_uri)return void e((0,o.t)("Please enter a SQLAlchemy URI to test"));const n={sqlalchemy_uri:(null==g?void 0:g.sqlalchemy_uri)||"",database_name:(null==g||null==(t=g.database_name)?void 0:t.trim())||void 0,impersonate_user:(null==g?void 0:g.impersonate_user)||void 0,extra:null==g?void 0:g.extra,masked_encrypted_extra:(null==g?void 0:g.masked_encrypted_extra)||"",server_cert:(null==g?void 0:g.server_cert)||void 0,ssh_tunnel:!$()(null==g?void 0:g.ssh_tunnel)&&Ze?{...g.ssh_tunnel,server_port:Number(g.ssh_tunnel.server_port)}:void 0};le(!0),(0,m.ym)(n,(a=>{le(!1),e(a)}),(e=>{le(!1),a(e)}))},testInProgress:ne},(0,j.Y)(Ke,{dbModel:pa,db:g,changeMethods:{onParametersChange:ba},clearValidationErrors:ga}),Ze&&Va()),(Ka=(null==g?void 0:g.backend)||(null==g?void 0:g.engine),void 0!==(null==S||null==(Xa=S.databases)||null==(Za=Xa.find((e=>e.backend===Ka||e.engine===Ka)))?void 0:Za.parameters)&&!ra&&(0,j.Y)("div",{css:e=>pe(e)},(0,j.Y)(M.A,{buttonStyle:"link",onClick:()=>b({type:Sa.ConfigMethodChange,payload:{database_name:null==g?void 0:g.database_name,configuration_method:G.DynamicForm,engine:null==g?void 0:g.engine}}),css:e=>(e=>j.AH`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,o.t)("Connect this database using the dynamic form instead")),(0,j.Y)(X.A,{tooltip:(0,o.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):Ja(),!ra&&(0,j.Y)(ve,null,(0,j.Y)(O.A,{closable:!1,css:e=>be(e),message:(0,o.t)("Additional fields may be required"),showIcon:!0,description:(0,j.Y)(s.Fragment,null,(0,o.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,j.Y)("a",{href:Xe,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,o.t)("here")),"."),type:"info"})),ca&&Ba()),(0,j.Y)(P.Ay.TabPane,{tab:(0,j.Y)("span",null,(0,o.t)("Advanced")),key:"2"},(0,j.Y)(Le,{extraExtension:ta,db:g,onInputChange:({target:e})=>ma(Sa.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>ma(Sa.TextChange,{name:e.name,value:e.value}),onEditorChange:e=>ma(Sa.EditorChange,e),onExtraInputChange:({target:e})=>{ma(Sa.ExtraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>{ma(Sa.ExtraEditorChange,e)}})))):(0,j.Y)(U.A,{css:e=>[ue,ge(e),fe(e),ye(e)],name:"database",onHandledPrimaryAction:qa,onHide:fa,primaryButtonName:D?(0,o.t)("Finish"):(0,o.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,j.Y)("h4",null,(0,o.t)("Connect a database")),footer:Ra(),maskClosable:!1},!V&&D?(0,j.Y)(s.Fragment,null,(0,j.Y)(ea,{isLoading:V,isEditMode:ra,useSqlAlchemyForm:ia,hasConnectedDb:D,db:g,dbName:I,dbModel:pa,editNewDb:B}),F&&(0,j.Y)(Ea,null,(0,j.Y)(M.A,{buttonStyle:"secondary",onClick:()=>{J(!0),Qa(),xa("/dataset/add/")}},(0,o.t)("CREATE DATASET")),(0,j.Y)(M.A,{buttonStyle:"secondary",onClick:()=>{J(!0),Qa(),xa("/sqllab?db=true")}},(0,o.t)("QUERY DATA IN SQL LAB"))),B?Ja():(0,j.Y)(Le,{extraExtension:ta,db:g,onInputChange:({target:e})=>ma(Sa.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>ma(Sa.TextChange,{name:e.name,value:e.value}),onEditorChange:e=>ma(Sa.EditorChange,e),onExtraInputChange:({target:e})=>{ma(Sa.ExtraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>ma(Sa.ExtraEditorChange,e)})):(0,j.Y)(s.Fragment,null,!V&&(g?(0,j.Y)(s.Fragment,null,(0,j.Y)(ea,{isLoading:V,isEditMode:ra,useSqlAlchemyForm:ia,hasConnectedDb:D,db:g,dbName:I,dbModel:pa}),sa&&(()=>{var e,a,t,n,l;const{hostname:o}=window.location;let r=(null==oa||null==(e=oa.REGIONAL_IPS)?void 0:e.default)||"";const s=(null==oa?void 0:oa.REGIONAL_IPS)||{};return Object.entries(s).forEach((([e,a])=>{const t=new RegExp(e);o.match(t)&&(r=a)})),(null==g?void 0:g.engine)&&(0,j.Y)(ve,null,(0,j.Y)(O.A,{closable:!1,css:e=>be(e),type:"info",showIcon:!0,message:(null==(a=Ya[g.engine])?void 0:a.message)||(null==oa||null==(t=oa.DEFAULT)?void 0:t.message),description:(null==(n=Ya[g.engine])?void 0:n.description)||(null==oa||null==(l=oa.DEFAULT)?void 0:l.description)+r}))})(),Ja(),(0,j.Y)("div",{css:e=>pe(e)},pa.engine!==K.GSheet&&(0,j.Y)(s.Fragment,null,(0,j.Y)(M.A,{"data-test":"sqla-connect-btn",buttonStyle:"link",onClick:()=>b({type:Sa.ConfigMethodChange,payload:{engine:g.engine,configuration_method:G.SqlalchemyUri,database_name:g.database_name}}),css:Ae},(0,o.t)("Connect this database with a SQLAlchemy URI string instead")),(0,j.Y)(X.A,{tooltip:(0,o.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"}))),ca&&Ba()):(0,j.Y)(Pe,null,(0,j.Y)(ea,{isLoading:V,isEditMode:ra,useSqlAlchemyForm:ia,hasConnectedDb:D,db:g,dbName:I,dbModel:pa}),(0,j.Y)("div",{className:"preferred"},null==S||null==(Ga=S.databases)?void 0:Ga.filter((e=>e.preferred)).map((e=>(0,j.Y)(W,{className:"preferred-item",onClick:()=>Da(e.name),buttonText:e.name,icon:null==la?void 0:la[e.engine],key:`${e.name}`})))),(()=>{var e,a;return(0,j.Y)("div",{className:"available"},(0,j.Y)("h4",{className:"available-label"},(0,o.t)("Or choose from a list of other databases we support:")),(0,j.Y)("div",{className:"control-label"},(0,o.t)("Supported databases")),(0,j.Y)(T._P,{className:"available-select",onChange:Da,placeholder:(0,o.t)("Choose a database..."),showSearch:!0},null==(e=[...(null==S?void 0:S.databases)||[]])?void 0:e.sort(((e,a)=>e.name.localeCompare(a.name))).map(((e,a)=>(0,j.Y)(T._P.Option,{value:e.name,key:`database-${a}`},e.name))),(0,j.Y)(T._P.Option,{value:"Other",key:"Other"},(0,o.t)("Other"))),(0,j.Y)(O.A,{showIcon:!0,closable:!1,css:e=>be(e),type:"info",message:(null==oa||null==(a=oa.ADD_DATABASE)?void 0:a.message)||(0,o.t)("Want to add a new database?"),description:null!=oa&&oa.ADD_DATABASE?(0,j.Y)(s.Fragment,null,(0,o.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,j.Y)("a",{href:null==oa?void 0:oa.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==oa?void 0:oa.ADD_DATABASE.contact_description_link)," ",null==oa?void 0:oa.ADD_DATABASE.description):(0,j.Y)(s.Fragment,null,(0,o.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,j.Y)("a",{href:Xe,target:"_blank",rel:"noopener noreferrer"},(0,o.t)("here")),".")}))})(),(0,j.Y)(Me,null,(0,j.Y)(T._O,{name:"databaseFile",id:"databaseFile","data-test":"database-file-input",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{He(""),Re([]),ze([]),Be([]),Ve([]),re({}),ie({}),he({}),xe({}),Ue(!0),$e([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await La(e.file.originFileObj,oe,se,de,_e,Ye)&&(null==t||t())},onRemove:e=>($e(Ee.filter((a=>a.uid!==e.uid))),!1)},(0,j.Y)(M.A,{"data-test":"import-database-btn",buttonStyle:"link",type:"link",css:Se},(0,o.t)("Import database from file")))),za()))),V&&(0,j.Y)(h.A,null));var Ga,Ka,Xa,Za}));var Pa=t(12397),Ta=t(23193);const Oa=(0,n.a)(),Ua=Oa.get("database.delete.related"),Ma=Oa.get("databaseconnection.extraOption"),La=(0,l.A)(Y.A.Check)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,qa=(0,l.A)(Y.A.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,Da=l.A.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .action-button {
    display: inline-block;
    height: 100%;
  }
`;function Ha({value:e}){return e?(0,j.Y)(La,null):(0,j.Y)(qa,null)}const Fa=(0,b.Ay)((function({addDangerToast:e,addSuccessToast:a,user:t}){const{state:{loading:n,resourceCount:l,resourceCollection:i},hasPerm:b,fetchData:S,refreshData:k}=(0,m.RU)("database",(0,o.t)("database"),e),E=(0,c.d4)((e=>e.user)),$=(0,y.P3)(_.vX.showDatabaseModal),[N,P]=(0,u.sq)({databaseAdded:u.sJ}),[T,O]=(0,s.useState)($||!1),[U,M]=(0,s.useState)(null),[L,q]=(0,s.useState)(null),[D,H]=(0,s.useState)(!1),F=(0,w.N6)(E),R=D||F,[I,z]=(0,s.useState)(!1),{roles:B}=E,{CSV_EXTENSIONS:Q,COLUMNAR_EXTENSIONS:V,EXCEL_EXTENSIONS:J,ALLOWED_EXTENSIONS:W}=(0,c.d4)((e=>e.common.conf));function G({database:e=null,modalOpen:a=!1}={}){q(e),O(a)}(0,s.useEffect)((()=>{null!=N&&N.databaseAdded&&(P({databaseAdded:void 0}),k())}),[N,P,k]);const K=b("can_write"),X=b("can_write"),Z=b("can_write"),ee=b("can_export"),{canUploadCSV:ae,canUploadColumnar:te,canUploadExcel:ne}=(0,g.c8)(B,Q,V,J,W),le=F&&!D,oe=[{label:(0,o.t)("Upload file to database"),childs:[{label:(0,o.t)("Upload CSV"),name:"Upload CSV file",url:"/csvtodatabaseview/form",perm:ae&&R,disable:le},{label:(0,o.t)("Upload columnar file"),name:"Upload columnar file",url:"/columnartodatabaseview/form",perm:te&&R,disable:le},{label:(0,o.t)("Upload Excel file"),name:"Upload Excel file",url:"/exceltodatabaseview/form",perm:ne&&R,disable:le}]}];(0,s.useEffect)((()=>{r.A.get({endpoint:`/api/v1/database/?q=${d().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((({json:e})=>{var a;const t=(null==e||null==(a=e.result)?void 0:a.filter((e=>{var a;return null==e||null==(a=e.engine_information)?void 0:a.supports_file_upload})))||[];H((null==t?void 0:t.length)>=1)}))}),[T]);const re={activeChild:"Databases",dropDownLinks:oe.reduce(((e,a)=>(a.childs=a.childs.filter((e=>e.perm)),a.childs.length?(e.push(a),e):e)),[]),name:(0,o.t)("Databases")};K&&(re.buttons=[{"data-test":"btn-create-database",name:(0,j.Y)(s.Fragment,null,(0,j.Y)("i",{className:"fa fa-plus"})," ",(0,o.t)("Database")," "),buttonStyle:"primary",onClick:()=>{G({modalOpen:!0})}}]);const se=(0,s.useMemo)((()=>[{accessor:"database_name",Header:(0,o.t)("Name")},{accessor:"backend",Header:(0,o.t)("Backend"),size:"lg",disableSortBy:!0},{accessor:"allow_run_async",Header:(0,j.Y)(x.m,{id:"allow-run-async-header-tooltip",title:(0,o.t)("Asynchronous query execution"),placement:"top"},(0,j.Y)("span",null,(0,o.t)("AQE"))),Cell:({row:{original:{allow_run_async:e}}})=>(0,j.Y)(Ha,{value:e}),size:"sm"},{accessor:"allow_dml",Header:(0,j.Y)(x.m,{id:"allow-dml-header-tooltip",title:(0,o.t)("Allow data manipulation language"),placement:"top"},(0,j.Y)("span",null,(0,o.t)("DML"))),Cell:({row:{original:{allow_dml:e}}})=>(0,j.Y)(Ha,{value:e}),size:"sm"},{accessor:"allow_file_upload",Header:(0,o.t)("CSV upload"),Cell:({row:{original:{allow_file_upload:e}}})=>(0,j.Y)(Ha,{value:e}),size:"md"},{accessor:"expose_in_sqllab",Header:(0,o.t)("Expose in SQL Lab"),Cell:({row:{original:{expose_in_sqllab:e}}})=>(0,j.Y)(Ha,{value:e}),size:"md"},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:a}}})=>(0,j.Y)(Pa.U,{date:a,user:e}),Header:(0,o.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>X||Z||ee?(0,j.Y)(Da,{className:"actions"},Z&&(0,j.Y)("span",{role:"button",tabIndex:0,className:"action-button","data-test":"database-delete",onClick:()=>{return a=e,r.A.get({endpoint:`/api/v1/database/${a.id}/related_objects/`}).then((({json:e={}})=>{M({...a,chart_count:e.charts.count,dashboard_count:e.dashboards.count,sqllab_tab_count:e.sqllab_tab_states.count})})).catch((0,g.JF)((e=>(0,o.t)("An error occurred while fetching database related data: %s",e))));var a}},(0,j.Y)(x.m,{id:"delete-action-tooltip",title:(0,o.t)("Delete database"),placement:"bottom"},(0,j.Y)(Y.A.Trash,null))),ee&&(0,j.Y)(x.m,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,j.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{var a;void 0!==(a=e).id&&((0,A.A)("database",[a.id],(()=>{z(!1)})),z(!0))}},(0,j.Y)(Y.A.Share,null))),X&&(0,j.Y)(x.m,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,j.Y)("span",{role:"button","data-test":"database-edit",tabIndex:0,className:"action-button",onClick:()=>G({database:e,modalOpen:!0})},(0,j.Y)(Y.A.EditAlt,{"data-test":"edit-alt"})))):null,Header:(0,o.t)("Actions"),id:"actions",hidden:!X&&!Z,disableSortBy:!0},{accessor:Ta.H.ChangedBy,hidden:!0}]),[Z,X,ee]),ie=(0,s.useMemo)((()=>[{Header:(0,o.t)("Name"),key:"search",id:"database_name",input:"search",operator:C.t.Contains},{Header:(0,o.t)("Expose in SQL Lab"),key:"expose_in_sql_lab",id:"expose_in_sqllab",input:"select",operator:C.t.Equals,unfilteredLabel:(0,o.t)("All"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,j.Y)(x.m,{id:"allow-run-async-filter-header-tooltip",title:(0,o.t)("Asynchronous query execution"),placement:"top"},(0,j.Y)("span",null,(0,o.t)("AQE"))),key:"allow_run_async",id:"allow_run_async",input:"select",operator:C.t.Equals,unfilteredLabel:(0,o.t)("All"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:C.t.RelationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,g.u1)("database","changed_by",(0,g.JF)((e=>(0,o.t)("An error occurred while fetching dataset datasource values: %s",e))),t),paginate:!0}]),[]);return(0,j.Y)(s.Fragment,null,(0,j.Y)(v.A,re),(0,j.Y)(Na,{databaseId:null==L?void 0:L.id,show:T,onHide:G,onDatabaseAdd:()=>{k()}}),U&&(0,j.Y)(f.A,{description:(0,j.Y)(s.Fragment,null,(0,j.Y)("p",null,(0,o.t)("The database %s is linked to %s charts that appear on %s dashboards and users have %s SQL Lab tabs using this database open. Are you sure you want to continue? Deleting the database will break those objects.",U.database_name,U.chart_count,U.dashboard_count,U.sqllab_tab_count)),Ua&&(0,j.Y)(Ua,{database:U})),onConfirm:()=>{U&&function(t){const{id:n,database_name:l}=t;r.A.delete({endpoint:`/api/v1/database/${n}`}).then((()=>{k(),a((0,o.t)("Deleted: %s",l)),null!=Ma&&Ma.onDelete&&Ma.onDelete(t),(0,p.SO)(p.Hh.Database,null),M(null)}),(0,g.JF)((a=>e((0,o.t)("There was an issue deleting %s: %s",l,a)))))}(U)},onHide:()=>M(null),open:!0,title:(0,o.t)("Delete Database?")}),(0,j.Y)(C.A,{className:"database-list-view",columns:se,count:l,data:i,fetchData:S,filters:ie,initialSort:[{id:"changed_on_delta_humanized",desc:!0}],loading:n,addDangerToast:e,addSuccessToast:a,refreshData:()=>{},pageSize:25}),I&&(0,j.Y)(h.A,null))}))},25106:(e,a,t)=>{function n(e){return e?`${e.first_name} ${e.last_name}`:""}t.d(a,{A:()=>n})}}]);
//# sourceMappingURL=75666f080992f73b0579.chunk.js.map