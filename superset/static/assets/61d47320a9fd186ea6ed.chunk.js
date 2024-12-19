"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1090],{62276:(e,t,a)=>{a.d(t,{M:()=>r,S:()=>o});var n=a(60593),l=a(42968);const i=n.Z.RangePicker,o=(0,l.Z)(i)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,r=n.Z},99299:(e,t,a)=>{a.d(t,{Z:()=>i}),a(67294);var n=a(19181),l=a(11965);const i=e=>(0,l.tZ)(n.Z,e)},87183:(e,t,a)=>{a.d(t,{Y:()=>r});var n=a(42968),l=a(47933);const i=(0,n.Z)(l.ZP)`
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
`,o=(0,n.Z)(l.ZP.Group)`
  font-size: inherit;
`,r=Object.assign(i,{Group:o,Button:l.ZP.Button})},27845:(e,t,a)=>{a.d(t,{Z:()=>u,j:()=>r});var n=a(73126),l=a(67294),i=a(99299),o=a(11965);const r=()=>{var e;return null==(e=document.getElementById("controlSections"))?void 0:e.lastElementChild},s=e=>{var t,a;const n=null==(t=window)?void 0:t.innerHeight,l=null==e||null==(a=e.getBoundingClientRect())?void 0:a.top;return n&&l?l/n:0},u=({getPopupContainer:e,getVisibilityRatio:t=s,visible:a,destroyTooltipOnHide:u=!1,...c})=>{const d=(0,l.useRef)(),[h,m]=(0,l.useState)(void 0===a?c.defaultVisible:a),[p,g]=l.useState("right"),v=(0,l.useCallback)((()=>{const e=t(d.current);g(e<.35&&"rightTop"!==p?"rightTop":e>.65&&"rightBottom"!==p?"rightBottom":"right")}),[t]),Z=(0,l.useCallback)((e=>{const t=r();t&&t.style.setProperty("overflow-y",e?"hidden":"auto","important")}),[v]),f=(0,l.useCallback)((t=>(d.current=t,(null==e?void 0:e(t))||document.body)),[v,e]),y=(0,l.useCallback)((e=>{void 0===e&&Z(e),m(!!e),null==c.onVisibleChange||c.onVisibleChange(!!e)}),[c,Z]),b=(0,l.useCallback)((e=>{"Escape"===e.key&&(m(!1),null==c.onVisibleChange||c.onVisibleChange(!1))}),[c]);return(0,l.useEffect)((()=>{void 0!==a&&m(!!a)}),[a]),(0,l.useEffect)((()=>{void 0!==h&&Z(h)}),[h,Z]),(0,l.useEffect)((()=>(h&&document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)})),[b,h]),(0,l.useEffect)((()=>{h&&v()}),[h,v]),(0,o.tZ)(i.Z,(0,n.Z)({},c,{visible:h,arrowPointAtCenter:!0,placement:p,onVisibleChange:y,getPopupContainer:f,destroyTooltipOnHide:u}))}},74092:(e,t,a)=>{a.d(t,{Z:()=>B});var n=a(67294),l=a(42968),i=a(11965),o=a(51995),r=a(3297),s=a(5364),u=a(61988),c=a(35932),d=a(82342),h=a(74069),m=a(4715),p=a(13322),g=a(81315),v=a(58593),Z=a(12515),f=a(27600),y=a(54076),b=a(27845),C=a(61314),w=a(87183);function D(e){let t="Last week";return C.bk.has(e.value)?t=e.value:e.onChange(t),(0,i.tZ)(n.Fragment,null,(0,i.tZ)("div",{className:"section-title","data-test":C.D7.CommonFrame},(0,u.t)("Configure Time Range: Last...")),(0,i.tZ)(w.Y.Group,{value:t,onChange:t=>e.onChange(t.target.value)},C.Sm.map((({value:e,label:t})=>(0,i.tZ)(w.Y,{key:e,value:e,className:"vertical-radio"},t)))))}var E=a(31209);function $({onChange:e,value:t}){return(0,n.useEffect)((()=>{C.LY.has(t)||e(E.gT)}),[e,t]),C.LY.has(t)?(0,i.tZ)(n.Fragment,null,(0,i.tZ)("div",{className:"section-title"},(0,u.t)("Configure Time Range: Previous...")),(0,i.tZ)(w.Y.Group,{value:t,onChange:t=>e(t.target.value)},C._S.map((({value:e,label:t})=>(0,i.tZ)(w.Y,{key:e,value:e,className:"vertical-radio"},t))))):null}var x=a(93754),M=a.n(x),T=a(28216),S=a(58146),k=a(9875),N=a(62276),A=a(9882);function V(e){var t;const{customRange:a,matchedFlag:n}=(0,C.c_)(e.value);n||e.onChange((0,C.jK)(a));const{sinceDatetime:l,sinceMode:o,sinceGrain:r,sinceGrainValue:s,untilDatetime:c,untilMode:d,untilGrain:h,untilGrainValue:p,anchorValue:v,anchorMode:Z}={...a};function f(t,n){e.onChange((0,C.jK)({...a,[t]:n}))}function y(t,n){M()(n)&&n>0&&e.onChange((0,C.jK)({...a,[t]:n}))}const b=(0,T.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.locale})),D=null==(t=S.locales[C.ZU[b]])?void 0:t.DatePicker;return(0,i.tZ)("div",{"data-test":"custom-frame"},(0,i.tZ)("div",{className:"section-title"},(0,u.t)("Configure custom time range")),(0,i.tZ)(m.X2,{gutter:24},(0,i.tZ)(m.JX,{span:12},(0,i.tZ)("div",{className:"control-label"},(0,u.t)("START (INCLUSIVE)")," ",(0,i.tZ)(A.V,{tooltip:(0,u.t)("Start date included in time range"),placement:"right"})),(0,i.tZ)(g.Z,{ariaLabel:(0,u.t)("START (INCLUSIVE)"),options:C._d,value:o,onChange:e=>f("sinceMode",e)}),"specific"===o&&(0,i.tZ)(m.X2,null,(0,i.tZ)(N.M,{showTime:!0,defaultValue:(0,C.DL)(l),onChange:e=>f("sinceDatetime",e.format(C.KZ)),allowClear:!1,locale:D})),"relative"===o&&(0,i.tZ)(m.X2,{gutter:8},(0,i.tZ)(m.JX,{span:11},(0,i.tZ)(k.Rn,{placeholder:(0,u.t)("Relative quantity"),value:Math.abs(s),min:1,defaultValue:1,onChange:e=>y("sinceGrainValue",e||1),onStep:e=>y("sinceGrainValue",e||1)})),(0,i.tZ)(m.JX,{span:13},(0,i.tZ)(g.Z,{ariaLabel:(0,u.t)("Relative period"),options:C.kj,value:r,onChange:e=>f("sinceGrain",e)})))),(0,i.tZ)(m.JX,{span:12},(0,i.tZ)("div",{className:"control-label"},(0,u.t)("END (EXCLUSIVE)")," ",(0,i.tZ)(A.V,{tooltip:(0,u.t)("End date excluded from time range"),placement:"right"})),(0,i.tZ)(g.Z,{ariaLabel:(0,u.t)("END (EXCLUSIVE)"),options:C.hj,value:d,onChange:e=>f("untilMode",e)}),"specific"===d&&(0,i.tZ)(m.X2,null,(0,i.tZ)(N.M,{showTime:!0,defaultValue:(0,C.DL)(c),onChange:e=>f("untilDatetime",e.format(C.KZ)),allowClear:!1,locale:D})),"relative"===d&&(0,i.tZ)(m.X2,{gutter:8},(0,i.tZ)(m.JX,{span:11},(0,i.tZ)(k.Rn,{placeholder:(0,u.t)("Relative quantity"),value:p,min:1,defaultValue:1,onChange:e=>y("untilGrainValue",e||1),onStep:e=>y("untilGrainValue",e||1)})),(0,i.tZ)(m.JX,{span:13},(0,i.tZ)(g.Z,{ariaLabel:(0,u.t)("Relative period"),options:C.Ae,value:h,onChange:e=>f("untilGrain",e)}))))),"relative"===o&&"relative"===d&&(0,i.tZ)("div",{className:"control-anchor-to"},(0,i.tZ)("div",{className:"control-label"},(0,u.t)("Anchor to")),(0,i.tZ)(m.X2,{align:"middle"},(0,i.tZ)(m.JX,null,(0,i.tZ)(w.Y.Group,{onChange:function(t){const n=t.target.value;"now"===n?e.onChange((0,C.jK)({...a,anchorValue:"now",anchorMode:n})):e.onChange((0,C.jK)({...a,anchorValue:C.V7,anchorMode:n}))},defaultValue:"now",value:Z},(0,i.tZ)(w.Y,{key:"now",value:"now"},(0,u.t)("NOW")),(0,i.tZ)(w.Y,{key:"specific",value:"specific"},(0,u.t)("Date/Time")))),"now"!==Z&&(0,i.tZ)(m.JX,null,(0,i.tZ)(N.M,{showTime:!0,defaultValue:(0,C.DL)(v),onChange:e=>f("anchorValue",e.format(C.KZ)),allowClear:!1,className:"control-anchor-to-datetime",locale:D})))))}var L=a(73126);const R=(0,i.tZ)(n.Fragment,null,(0,i.tZ)("div",null,(0,i.tZ)("h3",null,"DATETIME"),(0,i.tZ)("p",null,(0,u.t)("Return to specific datetime.")),(0,i.tZ)("h4",null,(0,u.t)("Syntax")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,"datetime([string])")),(0,i.tZ)("h4",null,(0,u.t)("Example")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,'datetime("2020-03-01 12:00:00")\ndatetime("now")\ndatetime("last year")'))),(0,i.tZ)("div",null,(0,i.tZ)("h3",null,"DATEADD"),(0,i.tZ)("p",null,(0,u.t)("Moves the given set of dates by a specified interval.")),(0,i.tZ)("h4",null,(0,u.t)("Syntax")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,"dateadd([datetime], [integer], [dateunit])\ndateunit = (year | quarter | month | week | day | hour | minute | second)")),(0,i.tZ)("h4",null,(0,u.t)("Example")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,'dateadd(datetime("today"), -13, day)\ndateadd(datetime("2020-03-01"), 2, day)'))),(0,i.tZ)("div",null,(0,i.tZ)("h3",null,"DATETRUNC"),(0,i.tZ)("p",null,(0,u.t)("Truncates the specified date to the accuracy specified by the date unit.")),(0,i.tZ)("h4",null,(0,u.t)("Syntax")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,"datetrunc([datetime], [dateunit])\ndateunit = (year | quarter | month | week)")),(0,i.tZ)("h4",null,(0,u.t)("Example")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,'datetrunc(datetime("2020-03-01"), week)\ndatetrunc(datetime("2020-03-01"), month)'))),(0,i.tZ)("div",null,(0,i.tZ)("h3",null,"LASTDAY"),(0,i.tZ)("p",null,(0,u.t)("Get the last date by the date unit.")),(0,i.tZ)("h4",null,(0,u.t)("Syntax")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,"lastday([datetime], [dateunit])\ndateunit = (year | month | week)")),(0,i.tZ)("h4",null,(0,u.t)("Example")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,'lastday(datetime("today"), month)'))),(0,i.tZ)("div",null,(0,i.tZ)("h3",null,"HOLIDAY"),(0,i.tZ)("p",null,(0,u.t)("Get the specify date for the holiday")),(0,i.tZ)("h4",null,(0,u.t)("Syntax")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,"holiday([string])\nholiday([holiday string], [datetime])\nholiday([holiday string], [datetime], [country name])")),(0,i.tZ)("h4",null,(0,u.t)("Example")),(0,i.tZ)("pre",null,(0,i.tZ)("code",null,'holiday("new year")\nholiday("christmas", datetime("2019"))\nholiday("christmas", dateadd(datetime("2019"), 1, year))\nholiday("christmas", datetime("2 years ago"))\nholiday("Easter Monday", datetime("2019"), "UK")')))),U=e=>{const t=(0,o.Fg)();return(0,i.tZ)(i.ms,null,(({css:a})=>(0,i.tZ)(v.u,(0,L.Z)({overlayClassName:a`
            .ant-tooltip-content {
              min-width: ${125*t.gridUnit}px;
              max-height: 410px;
              overflow-y: scroll;

              .ant-tooltip-inner {
                max-width: ${125*t.gridUnit}px;
                h3 {
                  font-size: ${t.typography.sizes.m}px;
                  font-weight: ${t.typography.weights.bold};
                }
                h4 {
                  font-size: ${t.typography.sizes.m}px;
                  font-weight: ${t.typography.weights.bold};
                }
                pre {
                  border: none;
                  text-align: left;
                  word-break: break-word;
                  font-size: ${t.typography.sizes.s}px;
                }
              }
            }
          `},e))))};function G(e){return(0,i.tZ)(U,(0,L.Z)({title:R},e))}function I(e){return e.includes(C.UD)?e:e.startsWith("Last")?[e,""].join(C.UD):e.startsWith("Next")?["",e].join(C.UD):C.UD}function P(e){const t=I(e.value||""),[a,l]=t.split(C.UD);function o(t,n){"since"===t?e.onChange(`${n}${C.UD}${l}`):e.onChange(`${a}${C.UD}${n}`)}return t!==e.value&&e.onChange(I(e.value||"")),(0,i.tZ)(n.Fragment,null,(0,i.tZ)("div",{className:"section-title"},(0,u.t)("Configure Advanced Time Range "),(0,i.tZ)(G,{placement:"rightBottom"},(0,i.tZ)("i",{className:"fa fa-info-circle text-muted"}))),(0,i.tZ)("div",{className:"control-label"},(0,u.t)("START (INCLUSIVE)")," ",(0,i.tZ)(A.V,{tooltip:(0,u.t)("Start date included in time range"),placement:"right"})),(0,i.tZ)(k.II,{key:"since",value:a,onChange:e=>o("since",e.target.value)}),(0,i.tZ)("div",{className:"control-label"},(0,u.t)("END (EXCLUSIVE)")," ",(0,i.tZ)(A.V,{tooltip:(0,u.t)("End date excluded from time range"),placement:"right"})),(0,i.tZ)(k.II,{key:"until",value:l,onChange:e=>o("until",e.target.value)}))}const _="#45BED6",F=l.Z.div`
  ${({theme:e,isActive:t,isPlaceholder:a})=>i.iv`
    width: 100%;
    height: ${8*e.gridUnit}px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    padding: 0 ${3*e.gridUnit}px;

    background-color: ${e.colors.grayscale.light5};

    border: 1px solid
      ${t?_:e.colors.grayscale.light2};
    border-radius: ${e.borderRadius}px;

    cursor: pointer;

    transition: border-color 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    :hover,
    :focus {
      border-color: ${_};
    }

    .date-label-content {
      color: ${a?e.colors.grayscale.light1:e.colors.grayscale.dark1};
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      flex-shrink: 1;
      white-space: nowrap;
    }

    span[role='img'] {
      margin-left: auto;
      padding-left: ${e.gridUnit}px;

      & > span[role='img'] {
        line-height: 0;
      }
    }
  `}
`,Y=(0,n.forwardRef)(((e,t)=>{const a=(0,o.Fg)();return(0,i.tZ)(F,(0,L.Z)({},e,{tabIndex:0}),(0,i.tZ)("span",{className:"date-label-content",ref:t},"string"==typeof e.label?(0,u.t)(e.label):e.label),(0,i.tZ)(p.Z.CalendarOutlined,{iconSize:"s",iconColor:a.colors.grayscale.base}))})),z=(0,l.Z)(g.Z)`
  width: 272px;
`,O=l.Z.div`
  ${({theme:e})=>i.iv`
    .ant-row {
      margin-top: 8px;
    }

    .ant-input-number {
      width: 100%;
    }

    .ant-picker {
      padding: 4px 17px 4px;
      border-radius: 4px;
      width: 100%;
    }

    .ant-divider-horizontal {
      margin: 16px 0;
    }

    .control-label {
      font-size: 11px;
      font-weight: ${e.typography.weights.medium};
      color: ${e.colors.grayscale.light2};
      line-height: 16px;
      text-transform: uppercase;
      margin: 8px 0;
    }

    .vertical-radio {
      display: block;
      height: 40px;
      line-height: 40px;
    }

    .section-title {
      font-style: normal;
      font-weight: ${e.typography.weights.bold};
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .control-anchor-to {
      margin-top: 16px;
    }

    .control-anchor-to-datetime {
      width: 217px;
    }

    .footer {
      text-align: right;
    }
  `}
`,X=l.Z.span`
  span {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({theme:e})=>e.colors.error.base};
  }
`,j=(e,t,a)=>e?(0,i.tZ)("div",null,t&&(0,i.tZ)("strong",null,t),a&&(0,i.tZ)("div",{css:e=>i.iv`
            margin-top: ${e.gridUnit}px;
          `},a)):a||null;function B(e){var t;const{onChange:a,onOpenPopover:l=y.EI,onClosePopover:g=y.EI,overlayStyle:w="Popover",isOverflowingFilterBar:E=!1}=e,x=(0,C.Ct)(),M=null!=(t=e.value)?t:x,[T,S]=(0,n.useState)(M),[k,N]=(0,n.useState)(!1),A=(0,n.useMemo)((()=>(0,C.X0)(M)),[M]),[L,R]=(0,n.useState)(A),[U,G]=(0,n.useState)(M),[I,_]=(0,n.useState)(M),[F,B]=(0,n.useState)(!1),[K,H]=(0,n.useState)(M),[q,J]=(0,n.useState)(M),W=(0,o.Fg)(),[Q,ee]=(0,r.Z)();function te(){_(M),R(A),N(!1),g()}(0,n.useEffect)((()=>{if(M===s.vM)return S(s.vM),J(null),void B(!0);(0,C.z1)(M).then((({value:e,error:t})=>{t?(H(t||""),B(!1),J(M||null)):("Common"===A||"Calendar"===A||"No filter"===A?(S(M),J(j(ee,M,e))):(S(e||""),J(j(ee,e,M))),B(!0)),G(M),H(e||M)}))}),[A,ee,Q,M]),(0,Z.bX)((()=>{if(I===s.vM)return H(s.vM),G(s.vM),void B(!0);U!==I&&(0,C.z1)(I).then((({value:e,error:t})=>{t?(H(t||""),B(!1)):(H(e||""),B(!0)),G(I)}))}),f.M$,[I]);const ae=()=>{k?te():(_(M),R(A),N(!0),l())},ne=(0,i.tZ)(O,null,(0,i.tZ)("div",{className:"control-label"},(0,u.t)("RANGE TYPE")),(0,i.tZ)(z,{ariaLabel:(0,u.t)("RANGE TYPE"),options:C.un,value:L,onChange:function(e){e===s.vM&&_(s.vM),R(e)}}),"No filter"!==L&&(0,i.tZ)(m.iz,null),"Common"===L&&(0,i.tZ)(D,{value:I,onChange:_}),"Calendar"===L&&(0,i.tZ)($,{value:I,onChange:_}),"Advanced"===L&&(0,i.tZ)(P,{value:I,onChange:_}),"Custom"===L&&(0,i.tZ)(V,{value:I,onChange:_}),"No filter"===L&&(0,i.tZ)("div",{"data-test":C.D7.NoFilter}),(0,i.tZ)(m.iz,null),(0,i.tZ)("div",null,(0,i.tZ)("div",{className:"section-title"},(0,u.t)("Actual time range")),F&&(0,i.tZ)("div",null,"No filter"===K?(0,u.t)("No filter"):K),!F&&(0,i.tZ)(X,{className:"warning"},(0,i.tZ)(p.Z.ErrorSolidSmall,{iconColor:W.colors.error.base}),(0,i.tZ)("span",{className:"text error"},K))),(0,i.tZ)(m.iz,null),(0,i.tZ)("div",{className:"footer"},(0,i.tZ)(c.Z,{buttonStyle:"secondary",cta:!0,key:"cancel",onClick:te,"data-test":C.D7.CancelButton},(0,u.t)("CANCEL")),(0,i.tZ)(c.Z,{buttonStyle:"primary",cta:!0,disabled:!F,key:"apply",onClick:function(){a(I),N(!1),g()},"data-test":C.D7.ApplyButton},(0,u.t)("APPLY")))),le=(0,i.tZ)(X,null,(0,i.tZ)(p.Z.EditAlt,{iconColor:W.colors.grayscale.base}),(0,i.tZ)("span",{className:"text"},(0,u.t)("Edit time range"))),ie=(0,i.tZ)(b.Z,{placement:"right",trigger:"click",content:ne,title:le,defaultVisible:k,visible:k,onVisibleChange:ae,overlayStyle:{width:"600px"},getPopupContainer:e=>E?e.parentNode:document.body,destroyTooltipOnHide:!0},(0,i.tZ)(v.u,{placement:"top",title:q,getPopupContainer:e=>e.parentElement},(0,i.tZ)(Y,{label:T,isActive:k,isPlaceholder:T===s.vM,"data-test":C.D7.PopoverOverlay,ref:Q}))),oe=(0,i.tZ)(n.Fragment,null,(0,i.tZ)(v.u,{placement:"top",title:q,getPopupContainer:e=>e.parentElement},(0,i.tZ)(Y,{onClick:ae,label:T,isActive:k,isPlaceholder:T===s.vM,"data-test":C.D7.ModalOverlay,ref:Q})),(0,i.tZ)(h.default,{title:le,show:k,onHide:ae,width:"600px",hideFooter:!0,zIndex:1030},ne));return(0,i.tZ)(n.Fragment,null,(0,i.tZ)(d.Z,e),"Modal"===w?oe:ie)}},1090:(e,t,a)=>{a.d(t,{ZP:()=>n.Z,z1:()=>l.z1});var n=a(74092),l=a(61314)},31209:(e,t,a)=>{a.d(t,{MZ:()=>l,gT:()=>n,po:()=>i});const n="previous calendar week",l="previous calendar month",i="previous calendar year"},61314:(e,t,a)=>{a.d(t,{_S:()=>w,LY:()=>k,gn:()=>D,Sm:()=>b,bk:()=>S,MI:()=>C,D7:()=>R,un:()=>y,ZU:()=>L,V7:()=>V,KZ:()=>N,UD:()=>d,kj:()=>$,_d:()=>M,Ae:()=>x,hj:()=>T,c_:()=>B,jK:()=>K,DL:()=>X,z1:()=>g,X0:()=>p,Ct:()=>v});var n=a(30381),l=a.n(n),i=a(15926),o=a.n(i),r=a(5364),s=a(31069),u=a(98286),c=a(28216);const d=" : ",h=(e,t)=>e.replace("T00:00:00","")||(t?"-∞":"∞"),m=(e,t="col")=>{const a=e.split(d);return 1===a.length?e:`${h(a[0],!0)} ≤ ${t} < ${h(a[1])}`},p=e=>C.has(e)?"Common":D.has(e)?"Calendar":e===r.vM?"No filter":B(e).matchedFlag?"Custom":"Advanced",g=async(e,t="col")=>{const a=`/api/v1/time_range/?q=${o().encode_uri(e)}`;try{var n,l,i,r;const e=await s.Z.get({endpoint:a}),o=(c=(null==e||null==(n=e.json)||null==(l=n.result)?void 0:l.since)||"",h=(null==e||null==(i=e.json)||null==(r=i.result)?void 0:r.until)||"",`${c}${d}${h}`);return{value:m(o,t)}}catch(e){const t=await(0,u.O$)(e);return{error:t.message||t.error||e.statusText}}var c,h};function v(){var e;return null!=(e=(0,c.v9)((e=>{var t,a;return null==e||null==(t=e.common)||null==(a=t.conf)?void 0:a.DEFAULT_TIME_FILTER})))?e:r.vM}var Z=a(61988),f=a(31209);const y=[{value:"Common",label:(0,Z.t)("Last")},{value:"Calendar",label:(0,Z.t)("Previous")},{value:"Custom",label:(0,Z.t)("Custom")},{value:"Advanced",label:(0,Z.t)("Advanced")},{value:"No filter",label:(0,Z.t)("No filter")}],b=[{value:"Last day",label:(0,Z.t)("Last day")},{value:"Last week",label:(0,Z.t)("Last week")},{value:"Last month",label:(0,Z.t)("Last month")},{value:"Last quarter",label:(0,Z.t)("Last quarter")},{value:"Last year",label:(0,Z.t)("Last year")}],C=new Set(b.map((({value:e})=>e))),w=[{value:f.gT,label:(0,Z.t)("previous calendar week")},{value:f.MZ,label:(0,Z.t)("previous calendar month")},{value:f.po,label:(0,Z.t)("previous calendar year")}],D=new Set(w.map((({value:e})=>e))),E=[{value:"second",label:e=>(0,Z.t)("Seconds %s",e)},{value:"minute",label:e=>(0,Z.t)("Minutes %s",e)},{value:"hour",label:e=>(0,Z.t)("Hours %s",e)},{value:"day",label:e=>(0,Z.t)("Days %s",e)},{value:"week",label:e=>(0,Z.t)("Weeks %s",e)},{value:"month",label:e=>(0,Z.t)("Months %s",e)},{value:"quarter",label:e=>(0,Z.t)("Quarters %s",e)},{value:"year",label:e=>(0,Z.t)("Years %s",e)}],$=E.map((e=>({value:e.value,label:e.label((0,Z.t)("Before"))}))),x=E.map((e=>({value:e.value,label:e.label((0,Z.t)("After"))}))),M=[{value:"specific",label:(0,Z.t)("Specific Date/Time")},{value:"relative",label:(0,Z.t)("Relative Date/Time")},{value:"now",label:(0,Z.t)("Now")},{value:"today",label:(0,Z.t)("Midnight")}],T=M.slice(),S=new Set(["Last day","Last week","Last month","Last quarter","Last year"]),k=new Set([f.gT,f.MZ,f.po]),N="YYYY-MM-DD[T]HH:mm:ss",A=l()().utc().startOf("day").subtract(7,"days").format(N),V=l()().utc().startOf("day").format(N),L={en:"en_US",fr:"fr_FR",es:"es_ES",it:"it_IT",zh:"zh_CN",ja:"ja_JP",de:"de_DE",pt:"pt_PT",pt_BR:"pt_BR",ru:"ru_RU",ko:"ko_KR",sk:"sk_SK",sl:"sl_SI",nl:"nl_NL"};var R;!function(e){e.CommonFrame="common-frame",e.ModalOverlay="modal-overlay",e.PopoverOverlay="time-range-trigger",e.NoFilter="no-filter",e.CancelButton="cancel-button",e.ApplyButton="date-filter-control__apply-button"}(R||(R={}));const U=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,G=String.raw`(?:TODAY|NOW)`,I=String.raw`[+-]?[1-9][0-9]*`,P=String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,_=RegExp(String.raw`^DATEADD\(DATETIME\("(${U}|${G})"\),\s(${I}),\s(${P})\)$`,"i"),F=RegExp(String.raw`^${U}$|^${G}$`,"i"),Y=["now","today"],z={sinceDatetime:A,sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:V,untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},O=["specific","today","now"],X=e=>"now"===e?l()().utc().startOf("second"):"today"===e?l()().utc().startOf("day"):l()(e),j=e=>X(e).format(N),B=e=>{const t=e.split(d);if(2===t.length){const[e,a]=t;if(F.test(e)&&F.test(a)){const t=Y.includes(e)?e:"specific",n=Y.includes(a)?a:"specific";return{customRange:{...z,sinceDatetime:e,untilDatetime:a,sinceMode:t,untilMode:n},matchedFlag:!0}}const n=e.match(_);if(n&&F.test(a)&&e.includes(a)){const[e,t,l]=n.slice(1),i=Y.includes(a)?a:"specific";return{customRange:{...z,sinceGrain:l,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilDatetime:e,sinceMode:"relative",untilMode:i},matchedFlag:!0}}const l=a.match(_);if(F.test(e)&&l&&a.includes(e)){const[t,a,n]=[...l.slice(1)],i=Y.includes(e)?e:"specific";return{customRange:{...z,untilGrain:n,untilGrainValue:parseInt(a,10),sinceDatetime:t,untilDatetime:t,untilMode:"relative",sinceMode:i},matchedFlag:!0}}if(n&&l){const[e,t,a]=[...n.slice(1)],[i,o,r]=[...l.slice(1)];if(e===i)return{customRange:{...z,sinceGrain:a,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilGrain:r,untilGrainValue:parseInt(o,10),untilDatetime:i,anchorValue:e,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===e?"now":"specific"},matchedFlag:!0}}}return{customRange:z,matchedFlag:!1}},K=e=>{const{sinceDatetime:t,sinceMode:a,sinceGrain:n,sinceGrainValue:l,untilDatetime:i,untilMode:o,untilGrain:r,untilGrainValue:s,anchorValue:u}={...e};if(O.includes(a)&&O.includes(o))return`${"specific"===a?j(t):a} : ${"specific"===o?j(i):o}`;if(O.includes(a)&&"relative"===o){const e="specific"===a?j(t):a;return`${e} : DATEADD(DATETIME("${e}"), ${s}, ${r})`}if("relative"===a&&O.includes(o)){const e="specific"===o?j(i):o;return`DATEADD(DATETIME("${e}"), ${-Math.abs(l)}, ${n}) : ${e}`}return`DATEADD(DATETIME("${u}"), ${-Math.abs(l)}, ${n}) : DATEADD(DATETIME("${u}"), ${s}, ${r})`}}}]);
//# sourceMappingURL=61d47320a9fd186ea6ed.chunk.js.map