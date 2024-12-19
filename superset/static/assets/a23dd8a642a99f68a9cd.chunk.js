"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6410],{86523:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(77925);const i=(0,r(90017).A)(o.A.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},40458:(e,t,r)=>{r.d(t,{A:()=>a}),r(96540);var o=r(90017),i=r(17437);const n=o.A.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,l=o.A.label`
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
`;function a({children:e,htmlFor:t,required:r=!1,className:o}){const a=r?l:n;return(0,i.Y)(a,{htmlFor:t,className:o},e)}},97987:(e,t,r)=>{r.d(t,{A:()=>w});var o,i=r(97032),n=r(96540),l=r(36255),a=r(27236),s=r(90017),d=r(17437),c=r(95579),p=r(31641),m=r(12249);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u.apply(this,arguments)}const h=({title:e,titleId:t,...r},i)=>n.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,o||(o=n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71M20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z",clipRule:"evenodd"}))),g=(0,n.forwardRef)(h);var b=r(86523),v=r(40458);const f=(0,s.A)(l.A)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,A=(0,s.A)(l.A.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,x=(0,s.A)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,$=s.A.div`
  display: flex;
  align-items: center;
`,y=(0,s.A)(v.A)`
  margin-bottom: 0;
`,Y=d.AH`
  &.anticon > * {
    line-height: 0;
  }
`,w=({label:e,validationMethods:t,errorMessage:r,helpText:o,required:n=!1,hasTooltip:l=!1,tooltipText:s,id:u,className:h,visibilityToggle:v,...w})=>(0,d.Y)(x,{className:h},(0,d.Y)($,null,(0,d.Y)(y,{htmlFor:u,required:n},e),l&&(0,d.Y)(p.A,{tooltip:`${s}`})),(0,d.Y)(b.A,{css:e=>((e,t)=>d.AH`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${g});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!r),validateTrigger:Object.keys(t),validateStatus:r?"error":"success",help:r||o,hasFeedback:!!r},v||"password"===w.name?(0,d.Y)(A,(0,i.A)({},w,t,{iconRender:e=>e?(0,d.Y)(a.A,{title:(0,c.t)("Hide password.")},(0,d.Y)(m.A.EyeInvisibleOutlined,{iconSize:"m",css:Y})):(0,d.Y)(a.A,{title:(0,c.t)("Show password.")},(0,d.Y)(m.A.EyeOutlined,{iconSize:"m",css:Y,"data-test":"icon-eye"})),role:"textbox"})):(0,d.Y)(f,(0,i.A)({},w,t))))},40563:(e,t,r)=>{r.d(t,{lV:()=>a,eI:()=>s.A,lR:()=>d.A,MA:()=>c.A}),r(96540);var o=r(77925),i=r(90017),n=r(17437);const l=(0,i.A)(o.A)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function a(e){return(0,n.Y)(l,e)}var s=r(86523),d=r(40458),c=r(97987)},31641:(e,t,r)=>{r.d(t,{A:()=>p}),r(96540);var o=r(90017),i=r(19129),n=r(12249),l=r(17437);const a=(0,o.A)(i.m)`
  cursor: pointer;
  path:first-of-type {
    fill: ${({theme:e})=>e.colors.grayscale.base};
  }
`,s=o.A.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,d={fontSize:"12px",lineHeight:"16px"},c="rgba(0,0,0,0.9)";function p({tooltip:e,placement:t="right",trigger:r="hover",overlayStyle:o=d,bgColor:i=c,viewBox:p="0 -1 24 24"}){return(0,l.Y)(a,{title:(0,l.Y)(s,null,e),placement:t,trigger:r,overlayStyle:o,color:i},(0,l.Y)(n.A.InfoSolidSmall,{className:"info-solid-small",viewBox:p}))}},90868:(e,t,r)=>{r.d(t,{YI:()=>a,fs:()=>s,pd:()=>l});var o=r(90017),i=r(36255),n=r(49453);const l=(0,o.A)(i.A)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,a=(0,o.A)(n.A)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,o.A)(i.A.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},50317:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(96540),i=r(17437),n=r(96453),l=r(95579),a=r(66537),s=r(19129),d=r(40563),c=r(12249);const p=i.AH`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,m=({name:e,label:t,description:r,validationErrors:m=[],renderTrigger:u=!1,rightNode:h,leftNode:g,onClick:b,hovered:v=!1,tooltipOnClick:f=(()=>{}),warning:A,danger:x})=>{const{gridUnit:$,colors:y}=(0,n.DP)(),Y=(0,o.useRef)(!1),w=(0,o.useMemo)((()=>(m.length||(Y.current=!0),Y.current?m.length?y.error.base:"unset":y.alert.base)),[y.error.base,y.alert.base,m.length]);return t?(0,i.Y)("div",{className:"ControlHeader","data-test":`${e}-header`},(0,i.Y)("div",{className:"pull-left"},(0,i.Y)(d.lR,{css:e=>i.AH`
            margin-bottom: ${.5*e.gridUnit}px;
            position: relative;
          `},g&&(0,i.Y)("span",null,g),(0,i.Y)("span",{role:"button",tabIndex:0,onClick:b,style:{cursor:b?"pointer":""}},t)," ",A&&(0,i.Y)("span",null,(0,i.Y)(s.m,{id:"error-tooltip",placement:"top",title:A},(0,i.Y)(c.A.AlertSolid,{iconColor:y.alert.base,iconSize:"s"}))," "),x&&(0,i.Y)("span",null,(0,i.Y)(s.m,{id:"error-tooltip",placement:"top",title:x},(0,i.Y)(c.A.ErrorSolid,{iconColor:y.error.base,iconSize:"s"}))," "),(null==m?void 0:m.length)>0&&(0,i.Y)("span",{"data-test":"error-tooltip"},(0,i.Y)(s.m,{id:"error-tooltip",placement:"top",title:null==m?void 0:m.join(" ")},(0,i.Y)(c.A.ExclamationCircleOutlined,{css:i.AH`
                    ${p};
                    color: ${w};
                  `}))," "),v?(0,i.Y)("span",{css:()=>i.AH`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${$}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `},r&&(0,i.Y)("span",null,(0,i.Y)(s.m,{id:"description-tooltip",title:r,placement:"top"},(0,i.Y)(c.A.InfoCircleOutlined,{css:p,onClick:f}))," "),u&&(0,i.Y)("span",null,(0,i.Y)(a.W,{label:(0,l.t)("bolt"),tooltip:(0,l.t)("Changing this control takes effect instantly"),placement:"top",icon:"bolt"})," ")):null)),h&&(0,i.Y)("div",{className:"pull-right"},h),(0,i.Y)("div",{className:"clearfix"})):null}},87615:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var o=r(90017),i=r(96627),n=r(96540),l=r(39074),a=r(67874),s=r(17437);const d=(0,o.A)(a.j3)`
  display: flex;
  align-items: center;
  overflow-x: auto;

  & .ant-tag {
    margin-right: 0;
  }
`,c=o.A.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  width: 100%;
  & > div,
  & > div:hover {
    ${({validateStatus:e,theme:t})=>{var r;return e&&`border-color: ${null==(r=t.colors[e])?void 0:r.base}`}}
  }
`;function p(e){var t;const{setDataMask:r,setHoveredFilter:o,unsetHoveredFilter:a,setFocusedFilter:p,unsetFocusedFilter:m,setFilterActive:u,width:h,height:g,filterState:b,inputRef:v,isOverflowingFilterBar:f=!1}=e,A=(0,n.useCallback)((e=>{const t=e&&e!==i.WC;r({extraFormData:t?{time_range:e}:{},filterState:{value:t?e:void 0}})}),[r]);return(0,n.useEffect)((()=>{A(b.value)}),[b.value]),null!=(t=e.formData)&&t.inView?(0,s.Y)(d,{width:h,height:g},(0,s.Y)(c,{ref:v,validateStatus:b.validateStatus,onFocus:p,onBlur:m,onMouseEnter:o,onMouseLeave:a},(0,s.Y)(l.Ay,{value:b.value||i.WC,name:"time_range",onChange:A,onOpenPopover:()=>u(!0),onClosePopover:()=>{u(!1),a(),m()},isOverflowingFilterBar:f}))):null}},67874:(e,t,r)=>{r.d(t,{JF:()=>a,Mo:()=>s,YH:()=>n,j3:()=>l});var o=r(90017),i=r(86523);const n=0,l=o.A.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===n?"100%":`${e}px`};
`,a=(0,o.A)(i.A)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,s=o.A.div`
  color: ${({theme:e,status:t="error"})=>{var r;return null==(r=e.colors[t])?void 0:r.base}};
`}}]);
//# sourceMappingURL=a23dd8a642a99f68a9cd.chunk.js.map