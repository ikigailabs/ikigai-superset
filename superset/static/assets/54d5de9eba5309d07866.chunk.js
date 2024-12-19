"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6960],{4591:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(97538);const o=(0,r(42968).Z)(i.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},2857:(e,t,r)=>{r.d(t,{Z:()=>a}),r(67294);var i=r(42968),o=r(11965);const n=i.Z.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,l=i.Z.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
    content: '*';
  }
`;function a({children:e,htmlFor:t,required:r=!1,className:i}){const a=r?l:n;return(0,o.tZ)(a,{htmlFor:t,className:i},e)}},73684:(e,t,r)=>{r.d(t,{Z:()=>k});var i,o=r(73126),n=r(67294),l=r(77808),a=r(31097),s=r(42968),d=r(11965),c=r(61988),p=r(8272),m=r(13322);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},u.apply(this,arguments)}const h=({title:e,titleId:t,...r},o)=>n.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,i||(i=n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71M20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z",clipRule:"evenodd"}))),g=(0,n.forwardRef)(h);var Z=r(4591),v=r(2857);const b=(0,s.Z)(l.Z)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,f=(0,s.Z)(l.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,x=(0,s.Z)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,$=s.Z.div`
  display: flex;
  align-items: center;
`,y=(0,s.Z)(v.Z)`
  margin-bottom: 0;
`,w=d.iv`
  &.anticon > * {
    line-height: 0;
  }
`,k=({label:e,validationMethods:t,errorMessage:r,helpText:i,required:n=!1,hasTooltip:l=!1,tooltipText:s,id:u,className:h,visibilityToggle:v,...k})=>(0,d.tZ)(x,{className:h},(0,d.tZ)($,null,(0,d.tZ)(y,{htmlFor:u,required:n},e),l&&(0,d.tZ)(p.Z,{tooltip:`${s}`})),(0,d.tZ)(Z.Z,{css:e=>((e,t)=>d.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${g});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!r),validateTrigger:Object.keys(t),validateStatus:r?"error":"success",help:r||i,hasFeedback:!!r},v||"password"===k.name?(0,d.tZ)(f,(0,o.Z)({},k,t,{iconRender:e=>e?(0,d.tZ)(a.Z,{title:(0,c.t)("Hide password.")},(0,d.tZ)(m.Z.EyeInvisibleOutlined,{iconSize:"m",css:w})):(0,d.tZ)(a.Z,{title:(0,c.t)("Show password.")},(0,d.tZ)(m.Z.EyeOutlined,{iconSize:"m",css:w,"data-test":"icon-eye"})),role:"textbox"})):(0,d.tZ)(b,(0,o.Z)({},k,t))))},49238:(e,t,r)=>{r.d(t,{l0:()=>a,xJ:()=>s.Z,lX:()=>d.Z,QA:()=>c.Z}),r(67294);var i=r(97538),o=r(42968),n=r(11965);const l=(0,o.Z)(i.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function a(e){return(0,n.tZ)(l,e)}var s=r(4591),d=r(2857),c=r(73684)},8272:(e,t,r)=>{r.d(t,{Z:()=>p}),r(67294);var i=r(42968),o=r(58593),n=r(13322),l=r(11965);const a=(0,i.Z)(o.u)`
  cursor: pointer;
  path:first-of-type {
    fill: ${({theme:e})=>e.colors.grayscale.base};
  }
`,s=i.Z.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,d={fontSize:"12px",lineHeight:"16px"},c="rgba(0,0,0,0.9)";function p({tooltip:e,placement:t="right",trigger:r="hover",overlayStyle:i=d,bgColor:o=c,viewBox:p="0 -1 24 24"}){return(0,l.tZ)(a,{title:(0,l.tZ)(s,null,e),placement:t,trigger:r,overlayStyle:i,color:o},(0,l.tZ)(n.Z.InfoSolidSmall,{className:"info-solid-small",viewBox:p}))}},9875:(e,t,r)=>{r.d(t,{II:()=>l,Kx:()=>s,Rn:()=>a});var i=r(42968),o=r(77808),n=r(14112);const l=(0,i.Z)(o.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,a=(0,i.Z)(n.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,i.Z)(o.Z.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},82342:(e,t,r)=>{r.d(t,{Z:()=>m});var i=r(67294),o=r(11965),n=r(51995),l=r(61988),a=r(9882),s=r(58593),d=r(49238),c=r(13322);const p=o.iv`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,m=({name:e,label:t,description:r,validationErrors:m=[],renderTrigger:u=!1,rightNode:h,leftNode:g,onClick:Z,hovered:v=!1,tooltipOnClick:b=(()=>{}),warning:f,danger:x})=>{const{gridUnit:$,colors:y}=(0,n.Fg)(),w=(0,i.useRef)(!1),k=(0,i.useMemo)((()=>(m.length||(w.current=!0),w.current?m.length?y.error.base:"unset":y.alert.base)),[y.error.base,y.alert.base,m.length]);return t?(0,o.tZ)("div",{className:"ControlHeader","data-test":`${e}-header`},(0,o.tZ)("div",{className:"pull-left"},(0,o.tZ)(d.lX,{css:e=>o.iv`
            margin-bottom: ${.5*e.gridUnit}px;
            position: relative;
          `},g&&(0,o.tZ)("span",null,g),(0,o.tZ)("span",{role:"button",tabIndex:0,onClick:Z,style:{cursor:Z?"pointer":""}},t)," ",f&&(0,o.tZ)("span",null,(0,o.tZ)(s.u,{id:"error-tooltip",placement:"top",title:f},(0,o.tZ)(c.Z.AlertSolid,{iconColor:y.alert.base,iconSize:"s"}))," "),x&&(0,o.tZ)("span",null,(0,o.tZ)(s.u,{id:"error-tooltip",placement:"top",title:x},(0,o.tZ)(c.Z.ErrorSolid,{iconColor:y.error.base,iconSize:"s"}))," "),(null==m?void 0:m.length)>0&&(0,o.tZ)("span",{"data-test":"error-tooltip"},(0,o.tZ)(s.u,{id:"error-tooltip",placement:"top",title:null==m?void 0:m.join(" ")},(0,o.tZ)(c.Z.ExclamationCircleOutlined,{css:o.iv`
                    ${p};
                    color: ${k};
                  `}))," "),v?(0,o.tZ)("span",{css:()=>o.iv`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${$}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `},r&&(0,o.tZ)("span",null,(0,o.tZ)(s.u,{id:"description-tooltip",title:r,placement:"top"},(0,o.tZ)(c.Z.InfoCircleOutlined,{css:p,onClick:b}))," "),u&&(0,o.tZ)("span",null,(0,o.tZ)(a.V,{label:(0,l.t)("bolt"),tooltip:(0,l.t)("Changing this control takes effect instantly"),placement:"top",icon:"bolt"})," ")):null)),h&&(0,o.tZ)("div",{className:"pull-right"},h),(0,o.tZ)("div",{className:"clearfix"})):null}},89483:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var i=r(42968),o=r(5364),n=r(67294),l=r(1090),a=r(74448),s=r(11965);const d=(0,i.Z)(a.un)`
  display: flex;
  align-items: center;
  overflow-x: auto;

  & .ant-tag {
    margin-right: 0;
  }
`,c=i.Z.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  width: 100%;
  & > div,
  & > div:hover {
    ${({validateStatus:e,theme:t})=>{var r;return e&&`border-color: ${null==(r=t.colors[e])?void 0:r.base}`}}
  }
`;function p(e){var t;const{setDataMask:r,setHoveredFilter:i,unsetHoveredFilter:a,setFocusedFilter:p,unsetFocusedFilter:m,setFilterActive:u,width:h,height:g,filterState:Z,inputRef:v,isOverflowingFilterBar:b=!1}=e,f=(0,n.useCallback)((e=>{const t=e&&e!==o.vM;r({extraFormData:t?{time_range:e}:{},filterState:{value:t?e:void 0}})}),[r]);return(0,n.useEffect)((()=>{f(Z.value)}),[Z.value]),null!=(t=e.formData)&&t.inView?(0,s.tZ)(d,{width:h,height:g},(0,s.tZ)(c,{ref:v,validateStatus:Z.validateStatus,onFocus:p,onBlur:m,onMouseEnter:i,onMouseLeave:a},(0,s.tZ)(l.ZP,{value:Z.value||o.vM,name:"time_range",onChange:f,onOpenPopover:()=>u(!0),onClosePopover:()=>{u(!1),a(),m()},isOverflowingFilterBar:b}))):null}},74448:(e,t,r)=>{r.d(t,{Am:()=>s,h2:()=>n,jp:()=>a,un:()=>l});var i=r(42968),o=r(4591);const n=0,l=i.Z.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===n?"100%":`${e}px`};
`,a=(0,i.Z)(o.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,s=i.Z.div`
  color: ${({theme:e,status:t="error"})=>{var r;return null==(r=e.colors[t])?void 0:r.base}};
`}}]);
//# sourceMappingURL=54d5de9eba5309d07866.chunk.js.map