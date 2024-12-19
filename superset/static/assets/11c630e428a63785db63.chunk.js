"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9074],{6094:(e,t,a)=>{a.d(t,{c:()=>o,l:()=>r});var n=a(70244),l=a(90017);const i=n.A.RangePicker,o=(0,l.A)(i)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,r=n.A},50127:(e,t,a)=>{a.d(t,{A:()=>i}),a(96540);var n=a(16146),l=a(17437);const i=e=>(0,l.Y)(n.A,e)},78697:(e,t,a)=>{a.d(t,{s:()=>r});var n=a(90017),l=a(1612);const i=(0,n.A)(l.Ay)`
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
`,o=(0,n.A)(l.Ay.Group)`
  font-size: inherit;
`,r=Object.assign(i,{Group:o,Button:l.Ay.Button})},22533:(e,t,a)=>{a.d(t,{A:()=>u,v:()=>r});var n=a(97032),l=a(96540),i=a(50127),o=a(17437);const r=()=>{var e;return null==(e=document.getElementById("controlSections"))?void 0:e.lastElementChild},s=e=>{var t,a;const n=null==(t=window)?void 0:t.innerHeight,l=null==e||null==(a=e.getBoundingClientRect())?void 0:a.top;return n&&l?l/n:0},u=({getPopupContainer:e,getVisibilityRatio:t=s,visible:a,destroyTooltipOnHide:u=!1,...d})=>{const c=(0,l.useRef)(),[m,h]=(0,l.useState)(void 0===a?d.defaultVisible:a),[p,v]=l.useState("right"),g=(0,l.useCallback)((()=>{const e=t(c.current);v(e<.35&&"rightTop"!==p?"rightTop":e>.65&&"rightBottom"!==p?"rightBottom":"right")}),[t]),f=(0,l.useCallback)((e=>{const t=r();t&&t.style.setProperty("overflow-y",e?"hidden":"auto","important")}),[g]),Y=(0,l.useCallback)((t=>(c.current=t,(null==e?void 0:e(t))||document.body)),[g,e]),y=(0,l.useCallback)((e=>{void 0===e&&f(e),h(!!e),null==d.onVisibleChange||d.onVisibleChange(!!e)}),[d,f]),b=(0,l.useCallback)((e=>{"Escape"===e.key&&(h(!1),null==d.onVisibleChange||d.onVisibleChange(!1))}),[d]);return(0,l.useEffect)((()=>{void 0!==a&&h(!!a)}),[a]),(0,l.useEffect)((()=>{void 0!==m&&f(m)}),[m,f]),(0,l.useEffect)((()=>(m&&document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)})),[b,m]),(0,l.useEffect)((()=>{m&&g()}),[m,g]),(0,o.Y)(i.A,(0,n.A)({},d,{visible:m,arrowPointAtCenter:!0,placement:p,onVisibleChange:y,getPopupContainer:Y,destroyTooltipOnHide:u}))}},25755:(e,t,a)=>{a.d(t,{A:()=>q});var n=a(96540),l=a(90017),i=a(17437),o=a(96453),r=a(37827),s=a(96627),u=a(95579),d=a(46920),c=a(50317),m=a(85861),h=a(15595),p=a(12249),v=a(28990),g=a(19129),f=a(85183),Y=a(27023),y=a(15151),b=a(22533),C=a(39942),w=a(78697);function A(e){let t="Last week";return C.Be.has(e.value)?t=e.value:e.onChange(t),(0,i.Y)(n.Fragment,null,(0,i.Y)("div",{className:"section-title","data-test":C.ad.CommonFrame},(0,u.t)("Configure Time Range: Last...")),(0,i.Y)(w.s.Group,{value:t,onChange:t=>e.onChange(t.target.value)},C.z6.map((({value:e,label:t})=>(0,i.Y)(w.s,{key:e,value:e,className:"vertical-radio"},t)))))}var x=a(7987);function $({onChange:e,value:t}){return(0,n.useEffect)((()=>{C.oo.has(t)||e(x.sw)}),[e,t]),C.oo.has(t)?(0,i.Y)(n.Fragment,null,(0,i.Y)("div",{className:"section-title"},(0,u.t)("Configure Time Range: Previous...")),(0,i.Y)(w.s.Group,{value:t,onChange:t=>e(t.target.value)},C.cn.map((({value:e,label:t})=>(0,i.Y)(w.s,{key:e,value:e,className:"vertical-radio"},t))))):null}var E=a(64846),D=a.n(E),S=a(61225),T=a(43287),k=a(90868),N=a(6094),I=a(66537);function M(e){var t;const{customRange:a,matchedFlag:n}=(0,C.MI)(e.value);n||e.onChange((0,C.IS)(a));const{sinceDatetime:l,sinceMode:o,sinceGrain:r,sinceGrainValue:s,untilDatetime:d,untilMode:c,untilGrain:m,untilGrainValue:p,anchorValue:g,anchorMode:f}={...a};function Y(t,n){e.onChange((0,C.IS)({...a,[t]:n}))}function y(t,n){D()(n)&&n>0&&e.onChange((0,C.IS)({...a,[t]:n}))}const b=(0,S.d4)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.locale})),A=null==(t=T.locales[C.mb[b]])?void 0:t.DatePicker;return(0,i.Y)("div",{"data-test":"custom-frame"},(0,i.Y)("div",{className:"section-title"},(0,u.t)("Configure custom time range")),(0,i.Y)(h.fI,{gutter:24},(0,i.Y)(h.fv,{span:12},(0,i.Y)("div",{className:"control-label"},(0,u.t)("START (INCLUSIVE)")," ",(0,i.Y)(I.W,{tooltip:(0,u.t)("Start date included in time range"),placement:"right"})),(0,i.Y)(v.A,{ariaLabel:(0,u.t)("START (INCLUSIVE)"),options:C.Wm,value:o,onChange:e=>Y("sinceMode",e)}),"specific"===o&&(0,i.Y)(h.fI,null,(0,i.Y)(N.l,{showTime:!0,defaultValue:(0,C.d$)(l),onChange:e=>Y("sinceDatetime",e.format(C.zz)),allowClear:!1,locale:A})),"relative"===o&&(0,i.Y)(h.fI,{gutter:8},(0,i.Y)(h.fv,{span:11},(0,i.Y)(k.YI,{placeholder:(0,u.t)("Relative quantity"),value:Math.abs(s),min:1,defaultValue:1,onChange:e=>y("sinceGrainValue",e||1),onStep:e=>y("sinceGrainValue",e||1)})),(0,i.Y)(h.fv,{span:13},(0,i.Y)(v.A,{ariaLabel:(0,u.t)("Relative period"),options:C.IZ,value:r,onChange:e=>Y("sinceGrain",e)})))),(0,i.Y)(h.fv,{span:12},(0,i.Y)("div",{className:"control-label"},(0,u.t)("END (EXCLUSIVE)")," ",(0,i.Y)(I.W,{tooltip:(0,u.t)("End date excluded from time range"),placement:"right"})),(0,i.Y)(v.A,{ariaLabel:(0,u.t)("END (EXCLUSIVE)"),options:C.OP,value:c,onChange:e=>Y("untilMode",e)}),"specific"===c&&(0,i.Y)(h.fI,null,(0,i.Y)(N.l,{showTime:!0,defaultValue:(0,C.d$)(d),onChange:e=>Y("untilDatetime",e.format(C.zz)),allowClear:!1,locale:A})),"relative"===c&&(0,i.Y)(h.fI,{gutter:8},(0,i.Y)(h.fv,{span:11},(0,i.Y)(k.YI,{placeholder:(0,u.t)("Relative quantity"),value:p,min:1,defaultValue:1,onChange:e=>y("untilGrainValue",e||1),onStep:e=>y("untilGrainValue",e||1)})),(0,i.Y)(h.fv,{span:13},(0,i.Y)(v.A,{ariaLabel:(0,u.t)("Relative period"),options:C.s6,value:m,onChange:e=>Y("untilGrain",e)}))))),"relative"===o&&"relative"===c&&(0,i.Y)("div",{className:"control-anchor-to"},(0,i.Y)("div",{className:"control-label"},(0,u.t)("Anchor to")),(0,i.Y)(h.fI,{align:"middle"},(0,i.Y)(h.fv,null,(0,i.Y)(w.s.Group,{onChange:function(t){const n=t.target.value;"now"===n?e.onChange((0,C.IS)({...a,anchorValue:"now",anchorMode:n})):e.onChange((0,C.IS)({...a,anchorValue:C.bd,anchorMode:n}))},defaultValue:"now",value:f},(0,i.Y)(w.s,{key:"now",value:"now"},(0,u.t)("NOW")),(0,i.Y)(w.s,{key:"specific",value:"specific"},(0,u.t)("Date/Time")))),"now"!==f&&(0,i.Y)(h.fv,null,(0,i.Y)(N.l,{showTime:!0,defaultValue:(0,C.d$)(g),onChange:e=>Y("anchorValue",e.format(C.zz)),allowClear:!1,className:"control-anchor-to-datetime",locale:A})))))}var V=a(97032);const L=(0,i.Y)(n.Fragment,null,(0,i.Y)("div",null,(0,i.Y)("h3",null,"DATETIME"),(0,i.Y)("p",null,(0,u.t)("Return to specific datetime.")),(0,i.Y)("h4",null,(0,u.t)("Syntax")),(0,i.Y)("pre",null,(0,i.Y)("code",null,"datetime([string])")),(0,i.Y)("h4",null,(0,u.t)("Example")),(0,i.Y)("pre",null,(0,i.Y)("code",null,'datetime("2020-03-01 12:00:00")\ndatetime("now")\ndatetime("last year")'))),(0,i.Y)("div",null,(0,i.Y)("h3",null,"DATEADD"),(0,i.Y)("p",null,(0,u.t)("Moves the given set of dates by a specified interval.")),(0,i.Y)("h4",null,(0,u.t)("Syntax")),(0,i.Y)("pre",null,(0,i.Y)("code",null,"dateadd([datetime], [integer], [dateunit])\ndateunit = (year | quarter | month | week | day | hour | minute | second)")),(0,i.Y)("h4",null,(0,u.t)("Example")),(0,i.Y)("pre",null,(0,i.Y)("code",null,'dateadd(datetime("today"), -13, day)\ndateadd(datetime("2020-03-01"), 2, day)'))),(0,i.Y)("div",null,(0,i.Y)("h3",null,"DATETRUNC"),(0,i.Y)("p",null,(0,u.t)("Truncates the specified date to the accuracy specified by the date unit.")),(0,i.Y)("h4",null,(0,u.t)("Syntax")),(0,i.Y)("pre",null,(0,i.Y)("code",null,"datetrunc([datetime], [dateunit])\ndateunit = (year | quarter | month | week)")),(0,i.Y)("h4",null,(0,u.t)("Example")),(0,i.Y)("pre",null,(0,i.Y)("code",null,'datetrunc(datetime("2020-03-01"), week)\ndatetrunc(datetime("2020-03-01"), month)'))),(0,i.Y)("div",null,(0,i.Y)("h3",null,"LASTDAY"),(0,i.Y)("p",null,(0,u.t)("Get the last date by the date unit.")),(0,i.Y)("h4",null,(0,u.t)("Syntax")),(0,i.Y)("pre",null,(0,i.Y)("code",null,"lastday([datetime], [dateunit])\ndateunit = (year | month | week)")),(0,i.Y)("h4",null,(0,u.t)("Example")),(0,i.Y)("pre",null,(0,i.Y)("code",null,'lastday(datetime("today"), month)'))),(0,i.Y)("div",null,(0,i.Y)("h3",null,"HOLIDAY"),(0,i.Y)("p",null,(0,u.t)("Get the specify date for the holiday")),(0,i.Y)("h4",null,(0,u.t)("Syntax")),(0,i.Y)("pre",null,(0,i.Y)("code",null,"holiday([string])\nholiday([holiday string], [datetime])\nholiday([holiday string], [datetime], [country name])")),(0,i.Y)("h4",null,(0,u.t)("Example")),(0,i.Y)("pre",null,(0,i.Y)("code",null,'holiday("new year")\nholiday("christmas", datetime("2019"))\nholiday("christmas", dateadd(datetime("2019"), 1, year))\nholiday("christmas", datetime("2 years ago"))\nholiday("Easter Monday", datetime("2019"), "UK")')))),R=e=>{const t=(0,o.DP)();return(0,i.Y)(i.Z2,null,(({css:a})=>(0,i.Y)(g.m,(0,V.A)({overlayClassName:a`
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
          `},e))))};function G(e){return(0,i.Y)(R,(0,V.A)({title:L},e))}function P(e){return e.includes(C.wv)?e:e.startsWith("Last")?[e,""].join(C.wv):e.startsWith("Next")?["",e].join(C.wv):C.wv}function U(e){const t=P(e.value||""),[a,l]=t.split(C.wv);function o(t,n){"since"===t?e.onChange(`${n}${C.wv}${l}`):e.onChange(`${a}${C.wv}${n}`)}return t!==e.value&&e.onChange(P(e.value||"")),(0,i.Y)(n.Fragment,null,(0,i.Y)("div",{className:"section-title"},(0,u.t)("Configure Advanced Time Range "),(0,i.Y)(G,{placement:"rightBottom"},(0,i.Y)("i",{className:"fa fa-info-circle text-muted"}))),(0,i.Y)("div",{className:"control-label"},(0,u.t)("START (INCLUSIVE)")," ",(0,i.Y)(I.W,{tooltip:(0,u.t)("Start date included in time range"),placement:"right"})),(0,i.Y)(k.pd,{key:"since",value:a,onChange:e=>o("since",e.target.value)}),(0,i.Y)("div",{className:"control-label"},(0,u.t)("END (EXCLUSIVE)")," ",(0,i.Y)(I.W,{tooltip:(0,u.t)("End date excluded from time range"),placement:"right"})),(0,i.Y)(k.pd,{key:"until",value:l,onChange:e=>o("until",e.target.value)}))}const z="#45BED6",F=l.A.div`
  ${({theme:e,isActive:t,isPlaceholder:a})=>i.AH`
    width: 100%;
    height: ${8*e.gridUnit}px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    padding: 0 ${3*e.gridUnit}px;

    background-color: ${e.colors.grayscale.light5};

    border: 1px solid
      ${t?z:e.colors.grayscale.light2};
    border-radius: ${e.borderRadius}px;

    cursor: pointer;

    transition: border-color 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    :hover,
    :focus {
      border-color: ${z};
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
`,O=(0,n.forwardRef)(((e,t)=>{const a=(0,o.DP)();return(0,i.Y)(F,(0,V.A)({},e,{tabIndex:0}),(0,i.Y)("span",{className:"date-label-content",ref:t},"string"==typeof e.label?(0,u.t)(e.label):e.label),(0,i.Y)(p.A.CalendarOutlined,{iconSize:"s",iconColor:a.colors.grayscale.base}))})),W=(0,l.A)(v.A)`
  width: 272px;
`,_=l.A.div`
  ${({theme:e})=>i.AH`
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
`,B=l.A.span`
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
`,H=(e,t,a)=>e?(0,i.Y)("div",null,t&&(0,i.Y)("strong",null,t),a&&(0,i.Y)("div",{css:e=>i.AH`
            margin-top: ${e.gridUnit}px;
          `},a)):a||null;function q(e){var t;const{onChange:a,onOpenPopover:l=y.fZ,onClosePopover:v=y.fZ,overlayStyle:w="Popover",isOverflowingFilterBar:x=!1}=e,E=(0,C.IM)(),D=null!=(t=e.value)?t:E,[S,T]=(0,n.useState)(D),[k,N]=(0,n.useState)(!1),I=(0,n.useMemo)((()=>(0,C.J5)(D)),[D]),[V,L]=(0,n.useState)(I),[R,G]=(0,n.useState)(D),[P,z]=(0,n.useState)(D),[F,q]=(0,n.useState)(!1),[j,Z]=(0,n.useState)(D),[J,K]=(0,n.useState)(D),Q=(0,o.DP)(),[X,ee]=(0,r.A)();function te(){z(D),L(I),N(!1),v()}(0,n.useEffect)((()=>{if(D===s.WC)return T(s.WC),K(null),void q(!0);(0,C.x9)(D).then((({value:e,error:t})=>{t?(Z(t||""),q(!1),K(D||null)):("Common"===I||"Calendar"===I||"No filter"===I?(T(D),K(H(ee,D,e))):(T(e||""),K(H(ee,e,D))),q(!0)),G(D),Z(e||D)}))}),[I,ee,X,D]),(0,f.sv)((()=>{if(P===s.WC)return Z(s.WC),G(s.WC),void q(!0);R!==P&&(0,C.x9)(P).then((({value:e,error:t})=>{t?(Z(t||""),q(!1)):(Z(e||""),q(!0)),G(P)}))}),Y.Qs,[P]);const ae=()=>{k?te():(z(D),L(I),N(!0),l())},ne=(0,i.Y)(_,null,(0,i.Y)("div",{className:"control-label"},(0,u.t)("RANGE TYPE")),(0,i.Y)(W,{ariaLabel:(0,u.t)("RANGE TYPE"),options:C.BJ,value:V,onChange:function(e){e===s.WC&&z(s.WC),L(e)}}),"No filter"!==V&&(0,i.Y)(h.cG,null),"Common"===V&&(0,i.Y)(A,{value:P,onChange:z}),"Calendar"===V&&(0,i.Y)($,{value:P,onChange:z}),"Advanced"===V&&(0,i.Y)(U,{value:P,onChange:z}),"Custom"===V&&(0,i.Y)(M,{value:P,onChange:z}),"No filter"===V&&(0,i.Y)("div",{"data-test":C.ad.NoFilter}),(0,i.Y)(h.cG,null),(0,i.Y)("div",null,(0,i.Y)("div",{className:"section-title"},(0,u.t)("Actual time range")),F&&(0,i.Y)("div",null,"No filter"===j?(0,u.t)("No filter"):j),!F&&(0,i.Y)(B,{className:"warning"},(0,i.Y)(p.A.ErrorSolidSmall,{iconColor:Q.colors.error.base}),(0,i.Y)("span",{className:"text error"},j))),(0,i.Y)(h.cG,null),(0,i.Y)("div",{className:"footer"},(0,i.Y)(d.A,{buttonStyle:"secondary",cta:!0,key:"cancel",onClick:te,"data-test":C.ad.CancelButton},(0,u.t)("CANCEL")),(0,i.Y)(d.A,{buttonStyle:"primary",cta:!0,disabled:!F,key:"apply",onClick:function(){a(P),N(!1),v()},"data-test":C.ad.ApplyButton},(0,u.t)("APPLY")))),le=(0,i.Y)(B,null,(0,i.Y)(p.A.EditAlt,{iconColor:Q.colors.grayscale.base}),(0,i.Y)("span",{className:"text"},(0,u.t)("Edit time range"))),ie=(0,i.Y)(b.A,{placement:"right",trigger:"click",content:ne,title:le,defaultVisible:k,visible:k,onVisibleChange:ae,overlayStyle:{width:"600px"},getPopupContainer:e=>x?e.parentNode:document.body,destroyTooltipOnHide:!0},(0,i.Y)(g.m,{placement:"top",title:J,getPopupContainer:e=>e.parentElement},(0,i.Y)(O,{label:S,isActive:k,isPlaceholder:S===s.WC,"data-test":C.ad.PopoverOverlay,ref:X}))),oe=(0,i.Y)(n.Fragment,null,(0,i.Y)(g.m,{placement:"top",title:J,getPopupContainer:e=>e.parentElement},(0,i.Y)(O,{onClick:ae,label:S,isActive:k,isPlaceholder:S===s.WC,"data-test":C.ad.ModalOverlay,ref:X})),(0,i.Y)(m.A,{title:le,show:k,onHide:ae,width:"600px",hideFooter:!0,zIndex:1030},ne));return(0,i.Y)(n.Fragment,null,(0,i.Y)(c.A,e),"Modal"===w?oe:ie)}},39074:(e,t,a)=>{a.d(t,{Ay:()=>n.A,x9:()=>l.x9});var n=a(25755),l=a(39942)},7987:(e,t,a)=>{a.d(t,{be:()=>i,oF:()=>l,sw:()=>n});const n="previous calendar week",l="previous calendar month",i="previous calendar year"},39942:(e,t,a)=>{a.d(t,{cn:()=>w,oo:()=>k,nS:()=>A,z6:()=>b,Be:()=>T,OL:()=>C,ad:()=>L,BJ:()=>y,mb:()=>V,bd:()=>M,zz:()=>N,wv:()=>c,IZ:()=>$,Wm:()=>D,s6:()=>E,OP:()=>S,MI:()=>q,IS:()=>j,d$:()=>B,x9:()=>v,J5:()=>p,IM:()=>g});var n=a(95093),l=a.n(n),i=a(58561),o=a.n(i),r=a(96627),s=a(35742),u=a(94146),d=a(61225);const c=" : ",m=(e,t)=>e.replace("T00:00:00","")||(t?"-∞":"∞"),h=(e,t="col")=>{const a=e.split(c);return 1===a.length?e:`${m(a[0],!0)} ≤ ${t} < ${m(a[1])}`},p=e=>C.has(e)?"Common":A.has(e)?"Calendar":e===r.WC?"No filter":q(e).matchedFlag?"Custom":"Advanced",v=async(e,t="col")=>{const a=`/api/v1/time_range/?q=${o().encode_uri(e)}`;try{var n,l,i,r;const e=await s.A.get({endpoint:a}),o=(d=(null==e||null==(n=e.json)||null==(l=n.result)?void 0:l.since)||"",m=(null==e||null==(i=e.json)||null==(r=i.result)?void 0:r.until)||"",`${d}${c}${m}`);return{value:h(o,t)}}catch(e){const t=await(0,u.h4)(e);return{error:t.message||t.error||e.statusText}}var d,m};function g(){var e;return null!=(e=(0,d.d4)((e=>{var t,a;return null==e||null==(t=e.common)||null==(a=t.conf)?void 0:a.DEFAULT_TIME_FILTER})))?e:r.WC}var f=a(95579),Y=a(7987);const y=[{value:"Common",label:(0,f.t)("Last")},{value:"Calendar",label:(0,f.t)("Previous")},{value:"Custom",label:(0,f.t)("Custom")},{value:"Advanced",label:(0,f.t)("Advanced")},{value:"No filter",label:(0,f.t)("No filter")}],b=[{value:"Last day",label:(0,f.t)("Last day")},{value:"Last week",label:(0,f.t)("Last week")},{value:"Last month",label:(0,f.t)("Last month")},{value:"Last quarter",label:(0,f.t)("Last quarter")},{value:"Last year",label:(0,f.t)("Last year")}],C=new Set(b.map((({value:e})=>e))),w=[{value:Y.sw,label:(0,f.t)("previous calendar week")},{value:Y.oF,label:(0,f.t)("previous calendar month")},{value:Y.be,label:(0,f.t)("previous calendar year")}],A=new Set(w.map((({value:e})=>e))),x=[{value:"second",label:e=>(0,f.t)("Seconds %s",e)},{value:"minute",label:e=>(0,f.t)("Minutes %s",e)},{value:"hour",label:e=>(0,f.t)("Hours %s",e)},{value:"day",label:e=>(0,f.t)("Days %s",e)},{value:"week",label:e=>(0,f.t)("Weeks %s",e)},{value:"month",label:e=>(0,f.t)("Months %s",e)},{value:"quarter",label:e=>(0,f.t)("Quarters %s",e)},{value:"year",label:e=>(0,f.t)("Years %s",e)}],$=x.map((e=>({value:e.value,label:e.label((0,f.t)("Before"))}))),E=x.map((e=>({value:e.value,label:e.label((0,f.t)("After"))}))),D=[{value:"specific",label:(0,f.t)("Specific Date/Time")},{value:"relative",label:(0,f.t)("Relative Date/Time")},{value:"now",label:(0,f.t)("Now")},{value:"today",label:(0,f.t)("Midnight")}],S=D.slice(),T=new Set(["Last day","Last week","Last month","Last quarter","Last year"]),k=new Set([Y.sw,Y.oF,Y.be]),N="YYYY-MM-DD[T]HH:mm:ss",I=l()().utc().startOf("day").subtract(7,"days").format(N),M=l()().utc().startOf("day").format(N),V={en:"en_US",fr:"fr_FR",es:"es_ES",it:"it_IT",zh:"zh_CN",ja:"ja_JP",de:"de_DE",pt:"pt_PT",pt_BR:"pt_BR",ru:"ru_RU",ko:"ko_KR",sk:"sk_SK",sl:"sl_SI",nl:"nl_NL"};var L;!function(e){e.CommonFrame="common-frame",e.ModalOverlay="modal-overlay",e.PopoverOverlay="time-range-trigger",e.NoFilter="no-filter",e.CancelButton="cancel-button",e.ApplyButton="date-filter-control__apply-button"}(L||(L={}));const R=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,G=String.raw`(?:TODAY|NOW)`,P=String.raw`[+-]?[1-9][0-9]*`,U=String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,z=RegExp(String.raw`^DATEADD\(DATETIME\("(${R}|${G})"\),\s(${P}),\s(${U})\)$`,"i"),F=RegExp(String.raw`^${R}$|^${G}$`,"i"),O=["now","today"],W={sinceDatetime:I,sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:M,untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},_=["specific","today","now"],B=e=>"now"===e?l()().utc().startOf("second"):"today"===e?l()().utc().startOf("day"):l()(e),H=e=>B(e).format(N),q=e=>{const t=e.split(c);if(2===t.length){const[e,a]=t;if(F.test(e)&&F.test(a)){const t=O.includes(e)?e:"specific",n=O.includes(a)?a:"specific";return{customRange:{...W,sinceDatetime:e,untilDatetime:a,sinceMode:t,untilMode:n},matchedFlag:!0}}const n=e.match(z);if(n&&F.test(a)&&e.includes(a)){const[e,t,l]=n.slice(1),i=O.includes(a)?a:"specific";return{customRange:{...W,sinceGrain:l,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilDatetime:e,sinceMode:"relative",untilMode:i},matchedFlag:!0}}const l=a.match(z);if(F.test(e)&&l&&a.includes(e)){const[t,a,n]=[...l.slice(1)],i=O.includes(e)?e:"specific";return{customRange:{...W,untilGrain:n,untilGrainValue:parseInt(a,10),sinceDatetime:t,untilDatetime:t,untilMode:"relative",sinceMode:i},matchedFlag:!0}}if(n&&l){const[e,t,a]=[...n.slice(1)],[i,o,r]=[...l.slice(1)];if(e===i)return{customRange:{...W,sinceGrain:a,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilGrain:r,untilGrainValue:parseInt(o,10),untilDatetime:i,anchorValue:e,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===e?"now":"specific"},matchedFlag:!0}}}return{customRange:W,matchedFlag:!1}},j=e=>{const{sinceDatetime:t,sinceMode:a,sinceGrain:n,sinceGrainValue:l,untilDatetime:i,untilMode:o,untilGrain:r,untilGrainValue:s,anchorValue:u}={...e};if(_.includes(a)&&_.includes(o))return`${"specific"===a?H(t):a} : ${"specific"===o?H(i):o}`;if(_.includes(a)&&"relative"===o){const e="specific"===a?H(t):a;return`${e} : DATEADD(DATETIME("${e}"), ${s}, ${r})`}if("relative"===a&&_.includes(o)){const e="specific"===o?H(i):o;return`DATEADD(DATETIME("${e}"), ${-Math.abs(l)}, ${n}) : ${e}`}return`DATEADD(DATETIME("${u}"), ${-Math.abs(l)}, ${n}) : DATEADD(DATETIME("${u}"), ${s}, ${r})`}}}]);
//# sourceMappingURL=11c630e428a63785db63.chunk.js.map