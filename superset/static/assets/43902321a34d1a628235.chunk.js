"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9968],{19855:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(97032),l=a(96540),o=a(5556),r=a.n(o),i=a(90868),s=a(95579),d=a(28176),c=a(46920),u=a(41154),p=a(18301),h=a(50317),m=a(17437);const v={name:r().string,onChange:r().func,initialValue:r().string,height:r().number,minLines:r().number,maxLines:r().number,offerEditInModal:r().bool,language:r().oneOf([null,"json","html","sql","markdown","javascript"]),aboveEditorSection:r().node,readOnly:r().bool,resize:r().oneOf([null,"block","both","horizontal","inline","none","vertical"]),textAreaStyles:r().object};class g extends l.Component{onControlChange(e){const{value:t}=e.target;this.props.onChange(t)}onAreaEditorChange(e){this.props.onChange(e)}renderEditor(e=!1){const t=e?40:this.props.minLines||12;if(this.props.language){const a={border:`1px solid ${this.props.theme.colors.grayscale.light1}`,minHeight:`${t}em`,width:"auto",...this.props.textAreaStyles};return this.props.resize&&(a.resize=this.props.resize),this.props.readOnly&&(a.backgroundColor="#f2f3ff"),(0,m.Y)(u.S9,(0,n.A)({mode:this.props.language,style:a,minLines:t,maxLines:e?1e3:this.props.maxLines,editorProps:{$blockScrolling:!0},defaultValue:this.props.initialValue,readOnly:this.props.readOnly,key:this.props.name},this.props,{onChange:this.onAreaEditorChange.bind(this)}))}return(0,m.Y)(i.fs,{placeholder:(0,s.t)("textarea"),onChange:this.onControlChange.bind(this),defaultValue:this.props.initialValue,disabled:this.props.readOnly,style:{height:this.props.height}})}renderModalBody(){return(0,m.Y)(l.Fragment,null,(0,m.Y)("div",null,this.props.aboveEditorSection),this.renderEditor(!0))}render(){const e=(0,m.Y)(h.A,this.props);return(0,m.Y)("div",null,e,this.renderEditor(),this.props.offerEditInModal&&(0,m.Y)(p.A,{modalTitle:e,triggerNode:(0,m.Y)(c.A,{buttonSize:"small",className:"m-t-5"},(0,s.t)("Edit")," ",(0,m.Y)("strong",null,this.props.language)," ",(0,s.t)("in modal")),modalBody:this.renderModalBody(!0),responsive:!0}))}}g.propTypes=v,g.defaultProps={onChange:()=>{},initialValue:"",height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1,resize:null,textAreaStyles:{}};const b=(0,d.b)(g)},51647:(e,t,a)=>{a.d(t,{l5:()=>c});var n=a(97032),l=(a(96540),a(79326)),o=a(95579),r=a(90017),i=a(98348),s=a(17437);const d={everyText:(0,o.t)("every"),emptyMonths:(0,o.t)("every month"),emptyMonthDays:(0,o.t)("every day of the month"),emptyMonthDaysShort:(0,o.t)("day of the month"),emptyWeekDays:(0,o.t)("every day of the week"),emptyWeekDaysShort:(0,o.t)("day of the week"),emptyHours:(0,o.t)("every hour"),emptyMinutes:(0,o.t)("every minute"),emptyMinutesForHourPeriod:(0,o.t)("every"),yearOption:(0,o.t)("year"),monthOption:(0,o.t)("month"),weekOption:(0,o.t)("week"),dayOption:(0,o.t)("day"),hourOption:(0,o.t)("hour"),minuteOption:(0,o.t)("minute"),rebootOption:(0,o.t)("reboot"),prefixPeriod:(0,o.t)("Every"),prefixMonths:(0,o.t)("in"),prefixMonthDays:(0,o.t)("on"),prefixWeekDays:(0,o.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,o.t)("or"),prefixHours:(0,o.t)("at"),prefixMinutes:(0,o.t)(":"),prefixMinutesForHourPeriod:(0,o.t)("at"),suffixMinutesForHourPeriod:(0,o.t)("minute(s)"),errorInvalidCron:(0,o.t)("Invalid cron expression"),clearButtonText:(0,o.t)("Clear"),weekDays:[(0,o.t)("Sunday"),(0,o.t)("Monday"),(0,o.t)("Tuesday"),(0,o.t)("Wednesday"),(0,o.t)("Thursday"),(0,o.t)("Friday"),(0,o.t)("Saturday")],months:[(0,o.t)("January"),(0,o.t)("February"),(0,o.t)("March"),(0,o.t)("April"),(0,o.t)("May"),(0,o.t)("June"),(0,o.t)("July"),(0,o.t)("August"),(0,o.t)("September"),(0,o.t)("October"),(0,o.t)("November"),(0,o.t)("December")],altWeekDays:[(0,o.t)("SUN"),(0,o.t)("MON"),(0,o.t)("TUE"),(0,o.t)("WED"),(0,o.t)("THU"),(0,o.t)("FRI"),(0,o.t)("SAT")],altMonths:[(0,o.t)("JAN"),(0,o.t)("FEB"),(0,o.t)("MAR"),(0,o.t)("APR"),(0,o.t)("MAY"),(0,o.t)("JUN"),(0,o.t)("JUL"),(0,o.t)("AUG"),(0,o.t)("SEP"),(0,o.t)("OCT"),(0,o.t)("NOV"),(0,o.t)("DEC")]},c=(0,r.A)((e=>(0,s.Y)(l.Ay,{getPopupContainer:e=>e.parentElement},(0,s.Y)(i.A,(0,n.A)({locale:d},e)))))`
  ${({theme:e})=>`\n\n    /* Boilerplate styling for ReactCronPicker imported explicitly in GlobalStyles.tsx */\n\n    /* When year period is selected */\n\n    :has(.react-js-cron-months) {\n      display: grid !important;\n      grid-template-columns: repeat(2, 50%);\n      column-gap: ${e.gridUnit}px;\n      row-gap: ${2*e.gridUnit}px;\n      div:has(.react-js-cron-hours) {\n        grid-column: span 2;\n        display: flex;\n        justify-content: space-between;\n        .react-js-cron-field {\n          width: 50%;\n        }\n      }\n    }\n\n    /* When month period is selected */\n\n    :not(:has(.react-js-cron-months)) {\n      display: grid;\n      grid-template-columns: repeat(2, 50%);\n      column-gap: ${e.gridUnit}px;\n      row-gap: ${2*e.gridUnit}px;\n      .react-js-cron-period {\n        grid-column: span 2;\n      }\n      div:has(.react-js-cron-hours) {\n        grid-column: span 2;\n        display: flex;\n        justify-content: space-between;\n        .react-js-cron-field {\n          width: 50%;\n        }\n      }\n    }\n\n    /* When week period is selected */\n\n    :not(:has(.react-js-cron-month-days)) {\n      .react-js-cron-week-days {\n        grid-column: span 2;\n      }\n    }\n\n    /* For proper alignment of inputs and span elements */\n\n    :not(div:has(.react-js-cron-hours)) {\n      display: flex;\n      flex-wrap: nowrap;\n    }\n\n    div:has(.react-js-cron-hours) {\n      width: 100%;\n    }\n\n    .react-js-cron-minutes > span {\n      padding-left: ${e.gridUnit}px;\n    }\n\n    /* Sizing of select container */\n\n    .react-js-cron-select.ant-select {\n      width: 100%;\n      .ant-select-selector {\n        flex-wrap: nowrap;\n      }\n    }\n\n    .react-js-cron-field {\n      width: 100%;\n      margin-bottom: 0px;\n      > span {\n        margin-left: 0px;\n      }\n    }\n\n    .react-js-cron-custom-select .ant-select-selection-placeholder {\n      flex: auto;\n      border-radius: ${e.gridUnit}px;\n    }\n\n    .react-js-cron-custom-select .ant-select-selection-overflow-item {\n      align-self: center;\n    }\n\n    .react-js-cron-select > div:first-of-type,\n    .react-js-cron-custom-select {\n      border-radius: ${e.gridUnit}px;\n    }\n  `}
`},75488:(e,t,a)=>{a.d(t,{d:()=>i}),a(96540);var n=a(90017),l=a(23416),o=a(17437);const r=(0,n.A)(l.A)`
  .ant-switch-checked {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }
`,i=e=>(0,o.Y)(r,e)},17466:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(17437),l=a(96540),o=a(84743),r=a.n(o),i=a(95579),s=a(15595);const d="GMT Standard Time",c="400px",u={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[d,d],"060":["GMT Standard Time - London","British Summer Time"]},p=r()(),h=r()([2021,1]),m=r()([2021,7]),v=e=>h.tz(e).utcOffset().toString()+m.tz(e).utcOffset().toString(),g=e=>{var t,a;const n=v(e);return(p.tz(e).isDST()?null==(t=u[n])?void 0:t[1]:null==(a=u[n])?void 0:a[0])||e},b=r().tz.countries().map((e=>r().tz.zonesForCountry(e,!0))).flat(),f=[];b.forEach((e=>{f.find((t=>v(t.name)===v(e.name)))||f.push(e)}));const _=f.map((e=>({label:`GMT ${r().tz(p,e.name).format("Z")} (${g(e.name)})`,value:e.name,offsets:v(e.name),timezoneName:e.name}))),T=(e,t)=>r().tz(p,e.timezoneName).utcOffset()-r().tz(p,t.timezoneName).utcOffset();_.sort(T);const E=e=>{var t;return(null==(t=_.find((t=>t.offsets===v(e))))?void 0:t.value)||"Africa/Abidjan"};function y({onTimezoneChange:e,timezone:t,minWidth:a=c}){const o=(0,l.useMemo)((()=>E(t||r().tz.guess())),[t]);return(0,l.useEffect)((()=>{t!==o&&e(o)}),[o,e,t]),(0,n.Y)(s.l6,{ariaLabel:(0,i.t)("Timezone selector"),css:(0,n.AH)({minWidth:a},"",""),onChange:t=>e(t),value:o,options:_,sortComparator:T})}},19968:(e,t,a)=>{a.d(t,{tu:()=>V,b5:()=>ae,Ay:()=>le});var n=a(96540),l=a(95579),o=a(17437),r=a(90017),i=a(27366),s=a(35742),d=a(58561),c=a.n(d),u=a(50500),p=a(90868),h=a(75488),m=a(85861),v=a(84074),g=a(17466),b=a(3175),f=a(5261),_=a(15595),T=a(19855),E=a(28292),y=a(66537),N=a(47815),Y=a(61225);function R({timeUnit:e,min:t,name:a,value:l,placeholder:r,onChange:i}){const[s,d]=(0,n.useState)(!1);return(0,o.Y)("input",{type:"text",min:t,name:a,value:l?`${l}${s?"":` ${e}`}`:"",placeholder:r,onFocus:()=>d(!0),onBlur:()=>d(!1),onChange:i})}var S,A=a(96453),C=a(51647);!function(e){e.Picker="picker",e.Input="input"}(S||(S={}));const x=[{label:(0,l.t)("Recurring (every)"),value:S.Picker},{label:(0,l.t)("CRON Schedule"),value:S.Input}],O=({value:e,onChange:t})=>{const a=(0,A.DP)(),r=(0,n.useRef)(null),[i,s]=(0,n.useState)(S.Picker),d=(0,n.useCallback)((e=>{var a;t(e),null==(a=r.current)||a.setValue(e)}),[r,t]),c=(0,n.useCallback)((e=>{t(e.target.value)}),[t]),u=(0,n.useCallback)((()=>{var e;t((null==(e=r.current)?void 0:e.input.value)||"")}),[t]),[h,m]=(0,n.useState)();return(0,o.Y)(n.Fragment,null,(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Schedule type"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)(_.l6,{ariaLabel:(0,l.t)("Schedule type"),placeholder:(0,l.t)("Schedule type"),onChange:e=>{s(e)},value:i,options:x}))),(0,o.Y)(V,{"data-test":"input-content",className:"styled-input"},(0,o.Y)("div",{className:"control-label"},(0,l.t)("Schedule"),(0,o.Y)("span",{className:"required"},"*")),i===S.Input&&(0,o.Y)(p.pd,{type:"text",name:"crontab",ref:r,style:h?{borderColor:a.colors.error.base}:{},placeholder:(0,l.t)("CRON expression"),value:e,onBlur:c,onChange:e=>d(e.target.value),onPressEnter:u}),i===S.Picker&&(0,o.Y)(C.l5,{clearButton:!1,value:e,setValue:d,displayError:i===S.Picker,onError:m})))};var L=a(12249);const k=r.A.div`
  margin-bottom: 10px;

  .input-container {
    textarea {
      height: auto;
    }
  }

  .inline-container {
    margin-bottom: 10px;

    > div {
      margin: 0;
    }

    .delete-button {
      margin-left: 10px;
      padding-top: 3px;
    }
  }
`,w=({setting:e=null,index:t,onUpdate:a,onRemove:r})=>{const{method:i,recipients:s,options:d}=e||{},[c,u]=(0,n.useState)(s||""),p=(0,A.DP)();return e?(s&&c!==s&&u(s),(0,o.Y)(k,null,(0,o.Y)("div",{className:"inline-container"},(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Notification Method")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)(_.l6,{ariaLabel:(0,l.t)("Delivery method"),"data-test":"select-delivery-method",onChange:n=>{if(u(""),a){const l={...e,method:n,recipients:""};a(t,l)}},placeholder:(0,l.t)("Select Delivery Method"),options:(d||[]).map((e=>({label:e,value:e}))),value:i}),0!==t&&r?(0,o.Y)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>r(t)},(0,o.Y)(L.A.Trash,{iconColor:p.colors.grayscale.base})):null))),void 0!==i?(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("%s recipients",i),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)("textarea",{name:"recipients","data-test":"recipients",value:c,onChange:n=>{const{target:l}=n;if(u(l.value),a){const n={...e,recipients:l.value};a(t,n)}}})),(0,o.Y)("div",{className:"helper"},(0,l.t)('Recipients are separated by "," or ";"'))):null)):null};var I=a(81018);const $=({title:e,subtitle:t,validateCheckStatus:a,testId:n})=>{const r=(0,o.Y)(I.A,null);return(0,o.Y)("div",{className:"collapse-panel-header"},(0,o.Y)("div",{className:"collapse-panel-title","data-test":n},(0,o.Y)("span",null,(0,l.t)(e)),a?(0,o.Y)("span",{className:"validation-checkmark"},r):(0,o.Y)("span",{className:"collapse-panel-asterisk"}," *")),(0,o.Y)("p",{className:"collapse-panel-subtitle"},t?(0,l.t)(t):void 0))};var j=a(97032),U=a(77839);const D=e=>(0,o.Y)(U.A.Panel,(0,j.A)({css:e=>(e=>o.AH`
  .ant-collapse-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px ${4*e.gridUnit}px;

    .anticon.anticon-right.ant-collapse-arrow {
      padding: 0;
      top: calc(50% - ${6}px);
    }

    .collapse-panel-title {
      font-size: ${4*e.gridUnit}px;
      font-weight: ${e.typography.weights.bold};
      line-height: 130%;
    }

    .collapse-panel-subtitle {
      color: ${e.colors.grayscale.base};
      font-size: ${e.typography.sizes.s}px;
      font-weight: ${e.typography.weights.normal};
      line-height: 150%;
      margin-bottom: 0;
      padding-top: ${e.gridUnit}px;
    }

    .collapse-panel-asterisk {
      color: var(--semantic-error-base, ${e.colors.warning.dark1});
    }
    .validation-checkmark {
      width: ${4*e.gridUnit}px;
      height: ${4*e.gridUnit}px;
      margin-left: ${e.gridUnit}px;
      color: ${e.colors.success.base};
    }
  }
`)(e)},e)),M=r.A.ul`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  padding-inline-start: ${({theme:e})=>3*e.gridUnit}px;
`,P=["pivot_table_v2","table","paired_ttest"],z=["Email"],q="PNG",F=[{label:(0,l.t)("< (Smaller than)"),value:"<"},{label:(0,l.t)("> (Larger than)"),value:">"},{label:(0,l.t)("<= (Smaller or equal)"),value:"<="},{label:(0,l.t)(">= (Larger or equal)"),value:">="},{label:(0,l.t)("== (Is equal)"),value:"=="},{label:(0,l.t)("!= (Is not equal)"),value:"!="},{label:(0,l.t)("Not null"),value:"not null"}],G=[{label:(0,l.t)("None"),value:0},{label:(0,l.t)("30 days"),value:30},{label:(0,l.t)("60 days"),value:60},{label:(0,l.t)("90 days"),value:90}],W=[{label:(0,l.t)("Dashboard"),value:"dashboard"},{label:(0,l.t)("Chart"),value:"chart"}],H={png:{label:(0,l.t)("Send as PNG"),value:"PNG"},csv:{label:(0,l.t)("Send as CSV"),value:"CSV"},txt:{label:(0,l.t)("Send as text"),value:"TEXT"}},Z=o.AH`
  margin-bottom: 0;
`,X=(0,r.A)(m.A)`
  .ant-modal-body {
    height: 720px;
  }

  .control-label {
    margin-top: ${({theme:e})=>e.gridUnit}px;
  }

  .ant-collapse > .ant-collapse-item {
    border-bottom: none;
  }

  .inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    &.wrap {
      flex-wrap: wrap;
    }

    > div {
      flex: 1 1 auto;
    }
  }
`,B=r.A.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,V=r.A.div`
  ${({theme:e})=>o.AH`
    flex: 1;
    margin-top: 0px;
    margin-bottom: ${4*e.gridUnit}px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }

    .helper {
      display: block;
      color: ${e.colors.grayscale.base};
      font-size: ${e.typography.sizes.s}px;
      padding: ${e.gridUnit}px 0;
      text-align: left;
    }

    .required {
      margin-left: ${e.gridUnit/2}px;
      color: ${e.colors.error.base};
    }

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
      }

      label {
        display: flex;
        margin-right: ${2*e.gridUnit}px;
      }

      i {
        margin: 0 ${e.gridUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    input[disabled] {
      color: ${e.colors.grayscale.base};
    }

    textarea {
      height: 300px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${e.gridUnit}px ${2*e.gridUnit}px;
      border-style: none;
      border: 1px solid ${e.colors.grayscale.light2};
      border-radius: ${e.gridUnit}px;

      &[name='description'] {
        flex: 1 1 auto;
      }
    }

    .input-label {
      margin-left: 10px;
    }
  `}
`,J=(0,r.A)(_.vo)`
  margin-top: ${({theme:e})=>0*e.gridUnit}px;
`,K=(0,r.A)(y.W)`
  margin-left: ${({theme:e})=>e.gridUnit}px;
`,Q=r.A.div`
  ${({theme:e})=>o.AH`
    color: ${e.colors.primary.dark1};
    cursor: pointer;

    i {
      margin-right: ${2*e.gridUnit}px;
    }

    &.disabled {
      color: ${e.colors.grayscale.light1};
      cursor: default;
    }
  `}
`,ee=r.A.div`
  .inline-container .input-container {
    margin-left: 0;
  }
`,te=e=>o.AH`
  margin-right: ${3*e.gridUnit}px;
`,ae={GENERAL_TITLE:(0,l.t)("General information"),ALERT_CONDITION_TITLE:(0,l.t)("Alert condition"),ALERT_CONTENTS_TITLE:(0,l.t)("Alert contents"),REPORT_CONTENTS_TITLE:(0,l.t)("Report contents"),SCHEDULE_TITLE:(0,l.t)("Schedule"),NOTIFICATION_TITLE:(0,l.t)("Notification method"),NAME_ERROR_TEXT:(0,l.t)("name"),OWNERS_ERROR_TEXT:(0,l.t)("owners"),CONTENT_ERROR_TEXT:(0,l.t)("content type"),DATABASE_ERROR_TEXT:(0,l.t)("database"),SQL_ERROR_TEXT:(0,l.t)("sql"),ALERT_CONDITION_ERROR_TEXT:(0,l.t)("alert condition"),CRONTAB_ERROR_TEXT:(0,l.t)("crontab"),WORKING_TIMEOUT_ERROR_TEXT:(0,l.t)("working timeout"),RECIPIENTS_ERROR_TEXT:(0,l.t)("recipients"),ERROR_TOOLTIP_MESSAGE:(0,l.t)("Not all required fields are complete. Please provide the following:")},ne=({status:e="active",onClick:t})=>"hidden"===e?null:(0,o.Y)(Q,{className:e,onClick:()=>{"disabled"!==e&&t()}},(0,o.Y)("i",{className:"fa fa-plus"})," ","active"===e?(0,l.t)("Add another notification method"):(0,l.t)("Add delivery method")),le=(0,f.Ay)((({addDangerToast:e,onAdd:t,onHide:a,show:r,alert:d=null,isReport:m=!1,addSuccessToast:f})=>{var y,S,A,C,x,L,k,I;const j=(0,Y.d4)((e=>e.user)),U=(0,E.B)(),Q=(null==U?void 0:U.ALERT_REPORTS_NOTIFICATION_METHODS)||z,[le,oe]=(0,n.useState)(!0),[re,ie]=(0,n.useState)(),[se,de]=(0,n.useState)(!0),[ce,ue]=(0,n.useState)("dashboard"),[pe,he]=(0,n.useState)(q),[me,ve]=(0,n.useState)(!1),[ge,be]=(0,n.useState)(!1);(0,n.useEffect)((()=>{be("dashboard"===ce||"chart"===ce&&"PNG"===pe)}),[ce,pe]);const[fe,_e]=(0,n.useState)(!1),[Te,Ee]=(0,n.useState)([]),[ye,Ne]=(0,n.useState)([]),[Ye,Re]=(0,n.useState)([]),[Se,Ae]=(0,n.useState)({[N.Z_.General]:{hasErrors:!1,name:ae.GENERAL_TITLE,errors:[]},[N.Z_.Content]:{hasErrors:!1,name:m?ae.REPORT_CONTENTS_TITLE:ae.ALERT_CONTENTS_TITLE,errors:[]},[N.Z_.Alert]:{hasErrors:!1,name:ae.ALERT_CONDITION_TITLE,errors:[]},[N.Z_.Schedule]:{hasErrors:!1,name:ae.SCHEDULE_TITLE,errors:[]},[N.Z_.Notification]:{hasErrors:!1,name:ae.NOTIFICATION_TITLE,errors:[]}}),[Ce,xe]=(0,n.useState)(""),Oe=(e,t)=>{Ae((a=>({...a,[e]:{hasErrors:t.length>0,name:a[e].name,errors:t}})))},[Le,ke]=(0,n.useState)(""),we=m?"report":"alert",Ie=null!==d,$e="chart"===ce&&((0,i.G7)(i.TO.AlertsAttachReports)||m),[je,Ue]=(0,n.useState)("active"),[De,Me]=(0,n.useState)([]),{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:Pe,ALERT_REPORTS_DEFAULT_CRON_VALUE:ze,ALERT_REPORTS_DEFAULT_RETENTION:qe}=(0,Y.d4)((e=>{var t,a,n,l;const o=null==(t=e.common)?void 0:t.conf;return{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:null!=(a=null==o?void 0:o.ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT)?a:3600,ALERT_REPORTS_DEFAULT_CRON_VALUE:null!=(n=null==o?void 0:o.ALERT_REPORTS_DEFAULT_CRON_VALUE)?n:"0 0 * * *",ALERT_REPORTS_DEFAULT_RETENTION:null!=(l=null==o?void 0:o.ALERT_REPORTS_DEFAULT_RETENTION)?l:90}})),Fe={active:!0,creation_method:"alerts_reports",crontab:ze,log_retention:qe,working_timeout:Pe,name:"",owners:[],recipients:[],sql:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},Ge=(e,t)=>{const a=[...De];a[e]=t,De[e].method!==t.method?(De[e]=t,Me(De.filter(((t,a)=>a<=e))),De.length-1>e&&Ue("active"),void 0!==t.method&&"hidden"!==je&&Ue("active")):Me(a)},We=e=>{const t=De.slice();t.splice(e,1),Me(t),Ue("active")},{state:{loading:He,resource:Ze,error:Xe},fetchResource:Be,createResource:Ve,updateResource:Je,clearError:Ke}=(0,u.fn)("report",(0,l.t)("report"),e),Qe=()=>{Ke(),de(!0),a(),Me([]),ie({...Fe}),Ue("active")},et=(0,n.useMemo)((()=>(e="",t,a)=>{const n=c().encode({filter:e,page:t,page_size:a});return s.A.get({endpoint:`/api/v1/report/related/created_by?q=${n}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),tt=(0,n.useCallback)((e=>{const t=e||(null==re?void 0:re.database);if(!t||t.label)return null;let a;return Te.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[null==re?void 0:re.database,Te]),at=(e,t)=>{ie((a=>({...a,[e]:t})))},nt=(0,n.useMemo)((()=>(e="",t,a)=>{const n=c().encode({filter:e,page:t,page_size:a});return s.A.get({endpoint:`/api/v1/report/related/database?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return Ee(t),{data:t,totalCount:e.json.count}}))}),[]),lt=(null==re?void 0:re.database)&&!re.database.label;(0,n.useEffect)((()=>{lt&&at("database",tt())}),[lt,tt]);const ot=(0,n.useMemo)((()=>(e="",t,a)=>{const n=c().encode_uri({filter:e,page:t,page_size:a});return s.A.get({endpoint:`/api/v1/report/related/dashboard?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return Ne(t),{data:t,totalCount:e.json.count}}))}),[]),rt=e=>{const t=e||(null==re?void 0:re.dashboard);if(!t||t.label)return null;let a;return ye.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a},it=(0,n.useCallback)((e=>{const t=e||(null==re?void 0:re.chart);if(!t||t.label)return null;let a;return Ye.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[Ye,null==re?void 0:re.chart]),st=(null==re?void 0:re.chart)&&!(null!=re&&re.chart.label);(0,n.useEffect)((()=>{st&&at("chart",it())}),[it,st]);const dt=(0,n.useMemo)((()=>(e="",t,a)=>{const n=c().encode_uri({filter:e,page:t,page_size:a});return s.A.get({endpoint:`/api/v1/report/related/chart?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return Re(t),{data:t,totalCount:e.json.count}}))}),[]),ct=e=>{const{target:{type:t,value:a,name:n}}=e,l="number"===t?parseInt(a,10)||null:a;at(n,l)},ut=e=>{const{target:t}=e,a=+t.value;at(t.name,0===a?void 0:a?Math.max(a,1):a)},pt=()=>{(()=>{var e,t;const a=[];null!=re&&null!=(e=re.name)&&e.length||a.push(ae.NAME_ERROR_TEXT),null!=re&&null!=(t=re.owners)&&t.length||a.push(ae.OWNERS_ERROR_TEXT),Oe(N.Z_.General,a)})(),(()=>{const e=[];"dashboard"===ce&&null!=re&&re.dashboard||"chart"===ce&&null!=re&&re.chart||e.push(ae.CONTENT_ERROR_TEXT),Oe(N.Z_.Content,e)})(),m||(()=>{var e,t,a;const n=[];null!=re&&re.database||n.push(ae.DATABASE_ERROR_TEXT),null!=re&&null!=(e=re.sql)&&e.length||n.push(ae.SQL_ERROR_TEXT),(fe||null!=re&&null!=(t=re.validator_config_json)&&t.op)&&(fe||void 0!==(null==re||null==(a=re.validator_config_json)?void 0:a.threshold))||n.push(ae.ALERT_CONDITION_ERROR_TEXT),Oe(N.Z_.Alert,n)})(),(()=>{var e;const t=[];null!=re&&null!=(e=re.crontab)&&e.length||t.push(ae.CRONTAB_ERROR_TEXT),null!=re&&re.working_timeout||t.push(ae.WORKING_TIMEOUT_ERROR_TEXT),Oe(N.Z_.Schedule,t)})(),(()=>{const e=(()=>{if(!De.length)return!1;let e=!1;return De.forEach((t=>{var a;t.method&&null!=(a=t.recipients)&&a.length&&(e=!0)})),e})()?[]:[ae.RECIPIENTS_ERROR_TEXT];Oe(N.Z_.Notification,e)})()};(0,n.useEffect)((()=>{if(Ie&&(null==re||!re.id||(null==d?void 0:d.id)!==re.id||se&&r)){if(null!==(null==d?void 0:d.id)&&!He&&!Xe){const e=d.id||0;Be(e)}}else!Ie&&(!re||re.id||se&&r)&&(ie({...Fe,owners:j?[{value:j.userId,label:`${j.firstName} ${j.lastName}`}]:[]}),Me([{recipients:"",options:Q,method:"Email"}]),Ue("active"))}),[d]),(0,n.useEffect)((()=>{if(Ze){const e=(Ze.recipients||[]).map((e=>{const t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:Q}}));Me(e),Ue(e.length===Q.length?"hidden":"active"),ue(Ze.chart?"chart":"dashboard"),he(Ze.chart&&Ze.report_format||q);const t="string"==typeof Ze.validator_config_json?JSON.parse(Ze.validator_config_json):Ze.validator_config_json;_e("not null"===Ze.validator_type),Ze.chart&&ke(Ze.chart.viz_type),ve(Ze.force_screenshot),ie({...Ze,chart:Ze.chart?it(Ze.chart)||{value:Ze.chart.id,label:Ze.chart.slice_name}:void 0,dashboard:Ze.dashboard?rt(Ze.dashboard)||{value:Ze.dashboard.id,label:Ze.dashboard.dashboard_title}:void 0,database:Ze.database?tt(Ze.database)||{value:Ze.database.id,label:Ze.database.database_name}:void 0,owners:((null==d?void 0:d.owners)||[]).map((e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`}))),validator_config_json:"not null"===Ze.validator_type?{op:"not null"}:t})}}),[Ze]);const ht=re||{};return(0,n.useEffect)((()=>{pt()}),[ht.name,ht.owners,ht.database,ht.sql,ht.validator_config_json,ht.crontab,ht.working_timeout,ht.dashboard,ht.chart,ce,De,fe]),(0,n.useEffect)((()=>{(()=>{const e=[N.Z_.General,N.Z_.Content,m?void 0:N.Z_.Alert,N.Z_.Schedule,N.Z_.Notification].some((e=>e&&Se[e].hasErrors)),t=e?(e=>{const t=[];return Object.values(e).forEach((e=>{if(e.hasErrors){const a=`${e.name}: `;t.push(a+e.errors.join(", "))}})),(0,o.Y)("div",null,ae.ERROR_TOOLTIP_MESSAGE,(0,o.Y)(M,null,t.map((e=>(0,o.Y)("li",{key:e},e)))))})(Se):"";xe(t),oe(e)})()}),[Se]),se&&r&&de(!1),(0,o.Y)(X,{className:"no-content-padding",responsive:!0,disablePrimaryButton:le,primaryTooltipMessage:Ce,onHandledPrimaryAction:()=>{var e,a,n;const o=[];De.forEach((e=>{e.method&&e.recipients.length&&o.push({recipient_config_json:{target:e.recipients},type:e.method})}));const r="chart"===ce&&!m,i={...re,type:m?"Report":"Alert",force_screenshot:r||me,validator_type:fe?"not null":"operator",validator_config_json:fe?{}:null==re?void 0:re.validator_config_json,chart:"chart"===ce?null==re||null==(e=re.chart)?void 0:e.value:null,dashboard:"dashboard"===ce?null==re||null==(a=re.dashboard)?void 0:a.value:null,custom_width:ge?null==re?void 0:re.custom_width:void 0,database:null==re||null==(n=re.database)?void 0:n.value,owners:((null==re?void 0:re.owners)||[]).map((e=>e.value||e.id)),recipients:o,report_format:"dashboard"===ce?q:pe||q};if(i.recipients&&!i.recipients.length&&delete i.recipients,i.context_markdown="string",Ie){if(null!=re&&re.id){const e=re.id;delete i.id,delete i.created_by,delete i.last_eval_dttm,delete i.last_state,delete i.last_value,delete i.last_value_row_json,Je(e,i).then((e=>{e&&(f((0,l.t)("%s updated",i.type)),t&&t(),Qe())}))}}else re&&Ve(i).then((e=>{e&&(f((0,l.t)("%s updated",i.type)),t&&t(e),Qe())}))},onHide:Qe,primaryButtonName:Ie?(0,l.t)("Save"):(0,l.t)("Add"),show:r,width:"500px",centered:!0,title:(0,o.Y)("h4",{"data-test":"alert-report-modal-title"},(()=>{let e;switch(!0){case Ie&&m:e=(0,l.t)("Edit Report");break;case Ie:e=(0,l.t)("Edit Alert");break;case m:e=(0,l.t)("Add Report");break;default:e=(0,l.t)("Add Alert")}return e})())},(0,o.Y)(v.A,{expandIconPosition:"right",defaultActiveKey:"general",accordion:!0,css:o.AH`
          border: 'none';
        `},(0,o.Y)(D,{header:(0,o.Y)($,{title:ae.GENERAL_TITLE,subtitle:(0,l.t)("Set up basic details, such as name and description."),validateCheckStatus:!Se[N.Z_.General].hasErrors,testId:"general-information-panel"}),key:"general"},(0,o.Y)("div",{className:"header-section"},(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},m?(0,l.t)("Report name"):(0,l.t)("Alert name"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)("input",{type:"text",name:"name",value:re?re.name:"",placeholder:m?(0,l.t)("Enter report name"):(0,l.t)("Enter alert name"),onChange:ct}))),(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Owners"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{"data-test":"owners-select",className:"input-container"},(0,o.Y)(_.DW,{ariaLabel:(0,l.t)("Owners"),allowClear:!0,name:"owners",mode:"multiple",placeholder:(0,l.t)("Select owners"),value:(null==re?void 0:re.owners)||[],options:et,onChange:e=>{at("owners",e||[])}}))),(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Description")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)("input",{type:"text",name:"description",value:re&&re.description||"",placeholder:(0,l.t)("Include description to be sent with %s",we),onChange:ct}))),(0,o.Y)(B,null,(0,o.Y)(h.d,{checked:!!re&&re.active,defaultChecked:!0,onChange:e=>{at("active",e)}}),(0,o.Y)("div",{className:"switch-label"},m?(0,l.t)("Report is active"):(0,l.t)("Alert is active"))))),!m&&(0,o.Y)(D,{header:(0,o.Y)($,{title:ae.ALERT_CONDITION_TITLE,subtitle:(0,l.t)("Define the database, SQL query, and triggering conditions for alert."),validateCheckStatus:!Se[N.Z_.Alert].hasErrors,testId:"alert-condition-panel"}),key:"condition"},(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Database"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)(_.DW,{ariaLabel:(0,l.t)("Database"),name:"source",placeholder:(0,l.t)("Select database"),value:null!=re&&null!=(y=re.database)&&y.label&&null!=re&&null!=(S=re.database)&&S.value?{value:re.database.value,label:re.database.label}:void 0,options:nt,onChange:e=>{at("database",e||[])}}))),(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("SQL Query"),(0,o.Y)(K,{tooltip:(0,l.t)('The result of this query must be a value capable of numeric interpretation e.g. 1, 1.0, or "1" (compatible with Python\'s float() function).')}),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)(T.A,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{at("sql",e||"")},readOnly:!1,initialValue:null==Ze?void 0:Ze.sql,key:null==re?void 0:re.id})),(0,o.Y)("div",{className:"inline-container wrap"},(0,o.Y)(V,{css:Z},(0,o.Y)("div",{className:"control-label",css:te},(0,l.t)("Trigger Alert If..."),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)(_.l6,{ariaLabel:(0,l.t)("Condition"),onChange:e=>{var t;_e("not null"===e);const a={op:e,threshold:re?null==(t=re.validator_config_json)?void 0:t.threshold:void 0};at("validator_config_json",a)},placeholder:(0,l.t)("Condition"),value:(null==re||null==(A=re.validator_config_json)?void 0:A.op)||void 0,options:F,css:te}))),(0,o.Y)(V,{css:Z},(0,o.Y)("div",{className:"control-label"},(0,l.t)("Value")," ",!fe&&(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)("input",{type:"number",name:"threshold",disabled:fe,value:void 0===(null==re||null==(C=re.validator_config_json)?void 0:C.threshold)||fe?"":re.validator_config_json.threshold,placeholder:(0,l.t)("Value"),onChange:e=>{var t;const{target:a}=e,n={op:re?null==(t=re.validator_config_json)?void 0:t.op:void 0,threshold:a.value};at("validator_config_json",n)}}))))),(0,o.Y)(D,{header:(0,o.Y)($,{title:m?ae.REPORT_CONTENTS_TITLE:ae.ALERT_CONTENTS_TITLE,subtitle:(0,l.t)("Customize data source, filters, and layout."),validateCheckStatus:!Se[N.Z_.Content].hasErrors,testId:"contents-panel"}),key:"contents"},(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Content type"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)(_.l6,{ariaLabel:(0,l.t)("Select content type"),onChange:e=>{ve(!1),ue(e)},value:ce,options:W,placeholder:(0,l.t)("Select content type")})),(0,o.Y)(V,null,"chart"===ce?(0,o.Y)(n.Fragment,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Select chart"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)(_.DW,{ariaLabel:(0,l.t)("Chart"),name:"chart",value:null!=re&&null!=(x=re.chart)&&x.label&&null!=re&&null!=(L=re.chart)&&L.value?{value:re.chart.value,label:re.chart.label}:void 0,options:dt,onChange:e=>{(e=>{s.A.get({endpoint:`/api/v1/chart/${e.value}`}).then((e=>ke(e.json.result.viz_type)))})(e),at("chart",e||void 0),at("dashboard",null)},placeholder:(0,l.t)("Select chart to use")})):(0,o.Y)(n.Fragment,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Select dashboard"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)(_.DW,{ariaLabel:(0,l.t)("Dashboard"),name:"dashboard",value:null!=re&&null!=(k=re.dashboard)&&k.label&&null!=re&&null!=(I=re.dashboard)&&I.value?{value:re.dashboard.value,label:re.dashboard.label}:void 0,options:ot,onChange:e=>{at("dashboard",e||void 0),at("chart",null)},placeholder:(0,l.t)("Select dashboard to use")}))),(0,o.Y)(V,{css:["TEXT","CSV"].includes(pe)&&Z},$e&&(0,o.Y)(n.Fragment,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Content format"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)(_.l6,{ariaLabel:(0,l.t)("Select format"),onChange:e=>{he(e)},value:pe,options:P.includes(Le)?Object.values(H):["png","csv"].map((e=>H[e])),placeholder:(0,l.t)("Select format")}))),ge&&(0,o.Y)(V,{css:!m&&"chart"===ce&&Z},(0,o.Y)("div",{className:"control-label"},(0,l.t)("Screenshot width")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)(p.YI,{type:"number",name:"custom_width",value:(null==re?void 0:re.custom_width)||void 0,min:600,max:2400,placeholder:(0,l.t)("Input custom width in pixels"),onChange:e=>{at("custom_width",e)}}))),(m||"dashboard"===ce)&&(0,o.Y)("div",{className:"inline-container"},(0,o.Y)(J,{"data-test":"bypass-cache",className:"checkbox",checked:me,onChange:e=>{ve(e.target.checked)}},(0,l.t)("Ignore cache when generating report")))),(0,o.Y)(D,{header:(0,o.Y)($,{title:ae.SCHEDULE_TITLE,subtitle:(0,l.t)("Define delivery schedule, timezone, and frequency settings."),validateCheckStatus:!Se[N.Z_.Schedule].hasErrors,testId:"schedule-panel"}),key:"schedule"},(0,o.Y)(O,{value:(null==re?void 0:re.crontab)||"",onChange:e=>at("crontab",e)}),(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Timezone")," ",(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)(g.A,{onTimezoneChange:e=>{at("timezone",e)},timezone:null==re?void 0:re.timezone,minWidth:"100%"})),(0,o.Y)(V,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Log retention"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)(_.l6,{ariaLabel:(0,l.t)("Log retention"),placeholder:(0,l.t)("Log retention"),onChange:e=>{at("log_retention",e)},value:null==re?void 0:re.log_retention,options:G,sortComparator:(0,b.qw)("value")}))),(0,o.Y)(V,{css:Z},m?(0,o.Y)(n.Fragment,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Working timeout"),(0,o.Y)("span",{className:"required"},"*")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)(R,{min:1,name:"working_timeout",value:(null==re?void 0:re.working_timeout)||"",placeholder:(0,l.t)("Time in seconds"),onChange:ut,timeUnit:(0,l.t)("seconds")}))):(0,o.Y)(n.Fragment,null,(0,o.Y)("div",{className:"control-label"},(0,l.t)("Grace period")),(0,o.Y)("div",{className:"input-container"},(0,o.Y)(R,{min:1,name:"grace_period",value:(null==re?void 0:re.grace_period)||"",placeholder:(0,l.t)("Time in seconds"),onChange:ut,timeUnit:(0,l.t)("seconds")}))))),(0,o.Y)(D,{header:(0,o.Y)($,{title:ae.NOTIFICATION_TITLE,subtitle:(0,l.t)("Choose notification method and recipients."),validateCheckStatus:!Se[N.Z_.Notification].hasErrors,testId:"notification-method-panel"}),key:"notification"},De.map(((e,t)=>(0,o.Y)(ee,null,(0,o.Y)(w,{setting:e,index:t,key:`NotificationMethod-${t}`,onUpdate:Ge,onRemove:We})))),Q.length>De.length&&(0,o.Y)(ne,{"data-test":"notification-add",status:je,onClick:()=>{Me([...De,{recipients:"",options:Q.filter((e=>!De.reduce(((t,a)=>t||e===a.method),!1)))}]),Ue(De.length===Q.length?"hidden":"disabled")}}))))}))},47815:(e,t,a)=>{var n,l,o;a.d(t,{Or:()=>n,Wz:()=>l,Z_:()=>o}),function(e){e.Success="Success",e.Working="Working",e.Error="Error",e.Noop="Not triggered",e.Grace="On Grace"}(n||(n={})),function(e){e.Email="Email",e.Slack="Slack"}(l||(l={})),function(e){e.General="generalSection",e.Content="contentSection",e.Alert="alertConditionSection",e.Schedule="scheduleSection",e.Notification="notificationSection"}(o||(o={}))},28292:(e,t,a)=>{a.d(t,{B:()=>l});var n=a(61225);function l(){return(0,n.d4)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}}}]);
//# sourceMappingURL=43902321a34d1a628235.chunk.js.map