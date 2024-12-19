"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{59632:(e,t,a)=>{var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(a(64543)),o=0,s={};function i(e){var t=o++,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s[t]=(0,r.default)((function n(){(a-=1)<=0?(e(),delete s[t]):s[t]=(0,r.default)(n)})),t}i.cancel=function(e){void 0!==e&&(r.default.cancel(s[e]),delete s[e])},i.ids=s},61539:(e,t,a)=>{var n=a(16338),r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=r(a(56690)),i=r(a(89728)),l=r(a(66115)),d=r(a(61655)),c=r(a(26389)),u=n(a(67294)),p=a(75531),m=r(a(59632)),h=a(31929),g=a(47419);function f(e){return!e||null===e.offsetParent||e.hidden}var y=function(e){(0,d.default)(a,e);var t=(0,c.default)(a);function a(){var e;return(0,s.default)(this,a),(e=t.apply(this,arguments)).containerRef=u.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,a){if(!(!t||f(t)||t.className.indexOf("-leave")>=0)){var n=e.props.insertExtraNode;e.extraNode=document.createElement("div");var r=(0,l.default)(e).extraNode,s=e.context.getPrefixCls;r.className="".concat(s(""),"-click-animating-node");var i,d=e.getAttributeName();t.setAttribute(d,"true"),o=o||document.createElement("style"),!a||"#ffffff"===a||"rgb(255, 255, 255)"===a||(i=(a||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/))&&i[1]&&i[2]&&i[3]&&i[1]===i[2]&&i[2]===i[3]||/rgba\((?:\d*, ){3}0\)/.test(a)||"transparent"===a||(e.csp&&e.csp.nonce&&(o.nonce=e.csp.nonce),r.style.borderColor=a,o.innerHTML="\n      [".concat(s(""),"-click-animating-without-extra-node='true']::after, .").concat(s(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(a,";\n      }"),document.body.contains(o)||document.body.appendChild(o)),n&&t.appendChild(r),["transition","animation"].forEach((function(a){t.addEventListener("".concat(a,"start"),e.onTransitionStart),t.addEventListener("".concat(a,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var a=e.containerRef.current;t&&t.target===a&&!e.animationStart&&e.resetEffect(a)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var a=function(a){if("INPUT"!==a.target.tagName&&!f(a.target)){e.resetEffect(t);var n=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,n)}),0),m.default.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=(0,m.default)((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",a,!0),{cancel:function(){t.removeEventListener("click",a,!0)}}}},e.renderWave=function(t){var a=t.csp,n=e.props.children;if(e.csp=a,!u.isValidElement(n))return n;var r=e.containerRef;return(0,p.supportRef)(n)&&(r=(0,p.composeRef)(n.ref,e.containerRef)),(0,g.cloneElement)(n,{ref:r})},e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var a=this.props.insertExtraNode,n=this.getAttributeName();e.setAttribute(n,"false"),o&&(o.innerHTML=""),a&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(a){e.removeEventListener("".concat(a,"start"),t.onTransitionStart),e.removeEventListener("".concat(a,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return u.createElement(h.ConfigConsumer,null,this.renderWave)}}]),a}(u.Component);t.default=y,y.contextType=h.ConfigContext},83514:(e,t,a)=>{var n=a(16338),r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(10434)),s=r(a(38416)),i=n(a(67294)),l=r(a(94184)),d=a(31929);t.default=function(e){var t,a=e.prefixCls,n=e.className,r=e.checked,c=e.onChange,u=e.onClick,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["prefixCls","className","checked","onChange","onClick"]),m=(0,i.useContext(d.ConfigContext).getPrefixCls)("tag",a),h=(0,l.default)(m,(t={},(0,s.default)(t,"".concat(m,"-checkable"),!0),(0,s.default)(t,"".concat(m,"-checkable-checked"),r),t),n);return i.createElement("span",(0,o.default)({},p,{className:h,onClick:function(e){c&&c(!r),u&&u(e)}}))}},59361:(e,t,a)=>{var n=a(16338),r=a(64836);t.Z=void 0;var o=r(a(38416)),s=r(a(10434)),i=r(a(27424)),l=n(a(67294)),d=r(a(94184)),c=r(a(18475)),u=r(a(16330)),p=r(a(83514)),m=a(31929),h=a(45471),g=r(a(61539)),f=new RegExp("^(".concat(h.PresetColorTypes.join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(h.PresetStatusColorTypes.join("|"),")$")),v=function(e,t){var a,n=e.prefixCls,r=e.className,p=e.style,h=e.children,v=e.icon,b=e.color,Z=e.onClose,x=e.closeIcon,w=e.closable,k=void 0!==w&&w,S=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=l.useContext(m.ConfigContext),T=C.getPrefixCls,_=C.direction,$=l.useState(!0),N=(0,i.default)($,2),E=N[0],P=N[1];l.useEffect((function(){"visible"in S&&P(S.visible)}),[S.visible]);var q=function(){return!!b&&(f.test(b)||y.test(b))},O=(0,s.default)({backgroundColor:b&&!q()?b:void 0},p),D=q(),I=T("tag",n),F=(0,d.default)(I,(a={},(0,o.default)(a,"".concat(I,"-").concat(b),D),(0,o.default)(a,"".concat(I,"-has-color"),b&&!D),(0,o.default)(a,"".concat(I,"-hidden"),!E),(0,o.default)(a,"".concat(I,"-rtl"),"rtl"===_),a),r),H=function(e){e.stopPropagation(),Z&&Z(e),e.defaultPrevented||"visible"in S||P(!1)},R="onClick"in S||h&&"a"===h.type,A=(0,c.default)(S,["visible"]),z=v||null,U=z?l.createElement(l.Fragment,null,z,l.createElement("span",null,h)):h,L=l.createElement("span",(0,s.default)({},A,{ref:t,className:F,style:O}),U,k?x?l.createElement("span",{className:"".concat(I,"-close-icon"),onClick:H},x):l.createElement(u.default,{className:"".concat(I,"-close-icon"),onClick:H}):null);return R?l.createElement(g.default,null,L):L},b=l.forwardRef(v);b.displayName="Tag",b.CheckableTag=p.default;var Z=b;t.Z=Z},54070:(e,t,a)=>{a.d(t,{w:()=>i}),a(67294);var n=a(58593),r=a(83379),o=a(61988),s=a(11965);const i=({user:e,date:t})=>{const a=(0,s.tZ)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,r.Z)(e),i=(0,o.t)("Modified by: %s",t);return(0,s.tZ)(n.u,{title:i,placement:"bottom"},a)}return a}},60972:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(61988),o=a(34858),s=a(29487),i=a(11965);const l=(0,o.z)(),d=l?l.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:t})=>(0,i.tZ)(s.Z,{closable:!1,css:e=>(e=>i.iv`
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
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,i.tZ)(n.Fragment,null,(0,i.tZ)("br",null),(0,r.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,i.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,r.t)("here")),"."):""})},27989:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(42968),o=a(61988),s=a(35932),i=a(74069),l=a(4715),d=a(34858),c=a(60972),u=a(11965);const p=r.Z.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,m=r.Z.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
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
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`,h=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,onModelImport:h,show:g,onHide:f,passwordFields:y=[],setPasswordFields:v=(()=>{}),sshTunnelPasswordFields:b=[],setSSHTunnelPasswordFields:Z=(()=>{}),sshTunnelPrivateKeyFields:x=[],setSSHTunnelPrivateKeyFields:w=(()=>{}),sshTunnelPrivateKeyPasswordFields:k=[],setSSHTunnelPrivateKeyPasswordFields:S=(()=>{})})=>{const[C,T]=(0,n.useState)(!0),[_,$]=(0,n.useState)({}),[N,E]=(0,n.useState)(!1),[P,q]=(0,n.useState)(!1),[O,D]=(0,n.useState)([]),[I,F]=(0,n.useState)(!1),[H,R]=(0,n.useState)(),[A,z]=(0,n.useState)({}),[U,L]=(0,n.useState)({}),[M,j]=(0,n.useState)({}),B=()=>{D([]),v([]),$({}),E(!1),q(!1),F(!1),R(""),Z([]),w([]),S([]),z({}),L({}),j({})},{state:{alreadyExists:K,passwordsNeeded:Q,sshPasswordNeeded:W,sshPrivateKeyNeeded:V,sshPrivateKeyPasswordNeeded:Y},importResource:J}=(0,d.PW)(e,t,(e=>{R(e)}));(0,n.useEffect)((()=>{v(Q),Q.length>0&&F(!1)}),[Q,v]),(0,n.useEffect)((()=>{E(K.length>0),K.length>0&&F(!1)}),[K,E]),(0,n.useEffect)((()=>{Z(W),W.length>0&&F(!1)}),[W,Z]),(0,n.useEffect)((()=>{w(V),V.length>0&&F(!1)}),[V,w]),(0,n.useEffect)((()=>{S(Y),Y.length>0&&F(!1)}),[Y,S]);return C&&g&&T(!1),(0,u.tZ)(i.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===O.length||N&&!P||I,onHandledPrimaryAction:()=>{var e;(null==(e=O[0])?void 0:e.originFileObj)instanceof File&&(F(!0),J(O[0].originFileObj,_,A,U,M,P).then((e=>{e&&(B(),h())})))},onHide:()=>{T(!0),f(),B()},primaryButtonName:N?(0,o.t)("Overwrite"):(0,o.t)("Import"),primaryButtonType:N?"danger":"primary",width:"750px",show:g,title:(0,u.tZ)("h4",null,(0,o.t)("Import %s",t))},(0,u.tZ)(m,null,(0,u.tZ)(l.gq,{name:"modelFile",id:"modelFile","data-test":"model-file-input",accept:".yaml,.json,.yml,.zip",fileList:O,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D(O.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:I},(0,u.tZ)(s.Z,{loading:I},(0,o.t)("Select file")))),H&&(0,u.tZ)(c.Z,{errorMessage:H,showDbInstallInstructions:y.length>0||b.length>0||x.length>0||k.length>0}),(()=>{if(0===y.length&&0===b.length&&0===x.length&&0===k.length)return null;const e=[...new Set([...y,...b,...x,...k])];return(0,u.tZ)(n.Fragment,null,(0,u.tZ)("h5",null,(0,o.t)("Database passwords")),(0,u.tZ)(p,null,a),e.map((e=>(0,u.tZ)(n.Fragment,null,(null==y?void 0:y.indexOf(e))>=0&&(0,u.tZ)(m,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,o.t)("%s PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:_[e],onChange:t=>$({..._,[e]:t.target.value})})),(null==b?void 0:b.indexOf(e))>=0&&(0,u.tZ)(m,{key:`ssh_tunnel_password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,o.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:A[e],onChange:t=>z({...A,[e]:t.target.value}),"data-test":"ssh_tunnel_password"})),(null==x?void 0:x.indexOf(e))>=0&&(0,u.tZ)(m,{key:`ssh_tunnel_private_key-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,o.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:U[e],onChange:t=>L({...U,[e]:t.target.value}),"data-test":"ssh_tunnel_private_key"})),(null==k?void 0:k.indexOf(e))>=0&&(0,u.tZ)(m,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,o.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:M[e],onChange:t=>j({...M,[e]:t.target.value}),"data-test":"ssh_tunnel_private_key_password"}))))))})(),N?(0,u.tZ)(n.Fragment,null,(0,u.tZ)(m,null,(0,u.tZ)("div",{className:"confirm-overwrite"},r),(0,u.tZ)("div",{className:"control-label"},(0,o.t)('Type "%s" to confirm',(0,o.t)("OVERWRITE"))),(0,u.tZ)("input",{"data-test":"overwrite-modal-input",id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";q(n.toUpperCase()===(0,o.t)("OVERWRITE"))}}))):null)}},29848:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var n=a(42968),r=a(58593),o=a(13322),s=a(11965);const i=n.Z.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,l=n.Z.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,s.tZ)(i,{className:"actions"},e.map(((e,t)=>{const a=o.Z[e.icon];return e.tooltip?(0,s.tZ)(r.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,s.tZ)(l,{role:"button",tabIndex:0,className:"action-button","data-test":e.label,onClick:e.onClick},(0,s.tZ)(a,null))):(0,s.tZ)(l,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,"data-test":e.label,key:t},(0,s.tZ)(a,null))})))}},83556:(e,t,a)=>{a.d(t,{P:()=>u});var n=a(67294),r=a(42968),o=a(59361),s=a(58593),i=a(11965);const l=(0,r.Z)(o.Z)`
  ${({theme:e})=>`\n  margin-top: ${e.gridUnit}px;\n  margin-bottom: ${e.gridUnit}px;\n  font-size: ${e.typography.sizes.s}px;\n  `};
`,d=({name:e,id:t,index:a,onDelete:r,editable:o=!1,onClick:d,toolTipTitle:c=e})=>{const u=(0,n.useMemo)((()=>e.length>20),[e])?`${e.slice(0,20)}...`:e;return(0,i.tZ)(n.Fragment,null,o?(0,i.tZ)(s.u,{title:c,key:c},(0,i.tZ)(l,{key:t,closable:o,onClose:()=>a?null==r?void 0:r(a):null,color:"blue"},u)):(0,i.tZ)(s.u,{title:c,key:c},(0,i.tZ)(l,{"data-test":"tag",role:"link",key:t,onClick:d},t?(0,i.tZ)("a",{href:`/superset/all_entities/?id=${t}`,target:"_blank",rel:"noreferrer"},u):u)))},c=r.Z.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,u=({tags:e,editable:t=!1,onDelete:a,maxTags:r})=>{const[o,s]=(0,n.useState)(r),l=e=>{null==a||a(e)},u=(0,n.useMemo)((()=>o?e.length>o:null),[e.length,o]),p=(0,n.useMemo)((()=>"number"==typeof o?e.length-o+1:null),[u,e.length,o]);return(0,i.tZ)(c,{className:"tag-list"},u&&"number"==typeof o?(0,i.tZ)(n.Fragment,null,e.slice(0,o-1).map(((e,a)=>(0,i.tZ)(d,{id:e.id,key:e.id,name:e.name,index:a,onDelete:l,editable:t}))),e.length>o?(0,i.tZ)(d,{name:`+${p}...`,onClick:()=>s(void 0),toolTipTitle:e.map((e=>e.name)).join(", ")}):null):(0,i.tZ)(n.Fragment,null,e.map(((e,a)=>(0,i.tZ)(d,{id:e.id,key:e.id,name:e.name,index:a,onDelete:l,editable:t}))),r&&e.length>r?(0,i.tZ)(d,{name:"...",onClick:()=>s(r)}):null))}},7742:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var n=a(61988),r=a(42968),o=a(31069),s=a(93185),i=a(67294),l=a(16550),d=a(73727),c=a(15926),u=a.n(c),p=a(40768),m=a(28216),h=a(99299),g=a(14114),f=a(34858),y=a(19259),v=a(32228),b=a(86074),Z=a(93139),x=a(38703),w=a(17198),k=a(29848),S=a(83556),C=a(58593),T=a(33726),_=a(12),$=a(10222),N=a(27989),E=a(54070),P=a(60718),q=a(13322),O=a(74069),D=a(35932),I=a(6189),F=a(86185),H=a(11965);const R=r.Z.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,A=r.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 16px 0;
`,z=(0,r.Z)(O.default)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,U=(0,g.ZP)((({fetchData:e,onHide:t,openInSqlLab:a,queries:r,savedQuery:o,show:s,addDangerToast:l,addSuccessToast:d})=>{const{handleKeyPress:c,handleDataChange:u,disablePrevious:p,disableNext:m}=(0,F.Z)({queries:r,currentQueryId:o.id,fetchData:e});return(0,H.tZ)("div",{role:"none",onKeyUp:c},(0,H.tZ)(z,{onHide:t,show:s,title:(0,n.t)("Query preview"),footer:(0,H.tZ)(i.Fragment,null,(0,H.tZ)(D.Z,{"data-test":"previous-saved-query",key:"previous-saved-query",disabled:p,onClick:()=>u(!0)},(0,n.t)("Previous")),(0,H.tZ)(D.Z,{"data-test":"next-saved-query",key:"next-saved-query",disabled:m,onClick:()=>u(!1)},(0,n.t)("Next")),(0,H.tZ)(D.Z,{"data-test":"open-in-sql-lab",key:"open-in-sql-lab",buttonStyle:"primary",onClick:({metaKey:e})=>a(o.id,Boolean(e))},(0,n.t)("Open in SQL Lab")))},(0,H.tZ)(R,null,(0,n.t)("Query name")),(0,H.tZ)(A,null,o.label),(0,H.tZ)(I.Z,{language:"sql",addDangerToast:l,addSuccessToast:d},o.sql||"")))}));var L=a(12617);const M=(0,n.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),j=(0,n.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),B=r.Z.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,K=r.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,Q=(0,g.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:r,resourceCount:c,resourceCollection:g,bulkSelectEnabled:O},hasPerm:D,fetchData:I,toggleBulkSelect:F,refreshData:R}=(0,f.Yi)("saved_query",(0,n.t)("Saved queries"),e),{roles:A}=(0,m.v9)((e=>e.user)),z=(0,L.R)("can_read","Tag",A),[Q,W]=(0,i.useState)(null),[V,Y]=(0,i.useState)(null),[J,G]=(0,i.useState)(!1),[X,ee]=(0,i.useState)([]),[te,ae]=(0,i.useState)(!1),[ne,re]=(0,i.useState)([]),[oe,se]=(0,i.useState)([]),[ie,le]=(0,i.useState)([]),de=(0,l.k6)(),ce=D("can_write"),ue=D("can_write"),pe=D("can_write"),me=D("can_export"),he=(0,i.useCallback)((t=>{o.Z.get({endpoint:`/api/v1/saved_query/${t}`}).then((({json:e={}})=>{Y({...e.result})}),(0,p.v$)((t=>e((0,n.t)("There was an issue previewing the selected query %s",t)))))}),[e]),ge={activeChild:"Saved queries",...T.Y},fe=[];pe&&fe.push({name:(0,n.t)("Bulk select"),onClick:F,buttonStyle:"secondary"}),fe.push({name:(0,H.tZ)(d.rU,{to:"/sqllab?new=true"},(0,H.tZ)("i",{className:"fa fa-plus"})," ",(0,n.t)("Query")),buttonStyle:"primary"}),ce&&fe.push({name:(0,H.tZ)(C.u,{id:"import-tooltip",title:(0,n.t)("Import queries"),placement:"bottomRight","data-test":"import-tooltip-test"},(0,H.tZ)(q.Z.Import,{"data-test":"import-icon"})),buttonStyle:"link",onClick:()=>{G(!0)},"data-test":"import-button"}),ge.buttons=fe;const ye=(e,t)=>{t?window.open(`/sqllab?savedQueryId=${e}`):de.push(`/sqllab?savedQueryId=${e}`)},ve=(0,i.useCallback)((a=>{(0,$.Z)((()=>Promise.resolve(`${window.location.origin}/sqllab?savedQueryId=${a}`))).then((()=>{t((0,n.t)("Link Copied!"))})).catch((()=>{e((0,n.t)("Sorry, your browser does not support copying."))}))}),[e,t]),be=e=>{const t=e.map((({id:e})=>e));(0,v.Z)("saved_query",t,(()=>{ae(!1)})),ae(!0)},Ze=[{id:"changed_on_delta_humanized",desc:!0}],xe=(0,i.useMemo)((()=>[{accessor:"label",Header:(0,n.t)("Name")},{accessor:"description",Header:(0,n.t)("Description")},{accessor:"database.database_name",Header:(0,n.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,n.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=(null==t?void 0:t.shift())||"";return t.length?(0,H.tZ)(B,null,(0,H.tZ)("span",null,a),(0,H.tZ)(h.Z,{placement:"right",title:(0,n.t)("TABLES"),trigger:"click",content:(0,H.tZ)(i.Fragment,null,t.map((e=>(0,H.tZ)(K,{key:e},e))))},(0,H.tZ)("span",{className:"count"},"(+",t.length,")"))):a},accessor:"sql_tables",Header:(0,n.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{tags:e=[]}}})=>(0,H.tZ)(S.P,{tags:e.filter((e=>1===e.type))}),Header:(0,n.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,s.cr)(s.TT.TaggingSystem)},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:t}}})=>(0,H.tZ)(E.w,{user:e,date:t}),Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{const t=[{label:"preview-action",tooltip:(0,n.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{he(e.id)}},ue&&{label:"edit-action",tooltip:(0,n.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:({metaKey:t})=>ye(e.id,Boolean(t))},{label:"copy-action",tooltip:(0,n.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>ve(e.id)},me&&{label:"export-action",tooltip:(0,n.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>be([e])},pe&&{label:"delete-action",tooltip:(0,n.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>W(e)}].filter((e=>!!e));return(0,H.tZ)(k.Z,{actions:t})},Header:(0,n.t)("Actions"),id:"actions",disableSortBy:!0},{accessor:_.J.ChangedBy,hidden:!0}]),[pe,ue,me,ve,he]),we=(0,i.useMemo)((()=>[{Header:(0,n.t)("Search"),id:"label",key:"search",input:"search",operator:Z.p.AllText,toolTipDescription:"Searches all text fields: Name, Description, Database & Schema"},{Header:(0,n.t)("Database"),key:"database",id:"database",input:"select",operator:Z.p.RelationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,p.tm)("saved_query","database",(0,p.v$)((t=>e((0,n.t)("An error occurred while fetching dataset datasource values: %s",t))))),paginate:!0},{Header:(0,n.t)("Schema"),id:"schema",key:"schema",input:"select",operator:Z.p.Equals,unfilteredLabel:"All",fetchSelects:(0,p.wk)("saved_query","schema",(0,p.v$)((t=>e((0,n.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},...(0,s.cr)(s.TT.TaggingSystem)&&z?[{Header:(0,n.t)("Tag"),id:"tags",key:"tags",input:"select",operator:Z.p.SavedQueryTags,fetchSelects:P.m}]:[],{Header:(0,n.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:Z.p.RelationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,p.tm)("saved_query","changed_by",(0,p.v$)((e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[e]);return(0,H.tZ)(i.Fragment,null,(0,H.tZ)(b.Z,ge),Q&&(0,H.tZ)(w.Z,{description:(0,n.t)("This action will permanently delete the saved query."),onConfirm:()=>{Q&&(({id:a,label:r})=>{o.Z.delete({endpoint:`/api/v1/saved_query/${a}`}).then((()=>{R(),W(null),t((0,n.t)("Deleted: %s",r))}),(0,p.v$)((t=>e((0,n.t)("There was an issue deleting %s: %s",r,t)))))})(Q)},onHide:()=>W(null),open:!0,title:(0,n.t)("Delete Query?")}),V&&(0,H.tZ)(U,{fetchData:he,onHide:()=>Y(null),savedQuery:V,queries:g,openInSqlLab:ye,show:!0}),(0,H.tZ)(y.Z,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{o.Z.delete({endpoint:`/api/v1/saved_query/?q=${u().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{R(),t(e.message)}),(0,p.v$)((t=>e((0,n.t)("There was an issue deleting the selected queries: %s",t)))))}},(a=>{const o=[];return pe&&o.push({key:"delete",name:(0,n.t)("Delete"),onSelect:a,type:"danger"}),me&&o.push({key:"export",name:(0,n.t)("Export"),type:"primary",onSelect:be}),(0,H.tZ)(Z.Z,{className:"saved_query-list-view",columns:xe,count:c,data:g,fetchData:I,filters:we,initialSort:Ze,loading:r,pageSize:25,bulkActions:o,addSuccessToast:t,addDangerToast:e,bulkSelectEnabled:O,disableBulkSelect:F,highlightRowId:null==V?void 0:V.id,enableBulkTag:!0,bulkTagResourceName:"query",refreshData:R})})),(0,H.tZ)(N.Z,{resourceName:"saved_query",resourceLabel:(0,n.t)("queries"),passwordsNeededMessage:M,confirmOverwriteMessage:j,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{G(!1),R(),t((0,n.t)("Query imported"))},show:J,onHide:()=>{G(!1)},passwordFields:X,setPasswordFields:ee,sshTunnelPasswordFields:ne,setSSHTunnelPasswordFields:re,sshTunnelPrivateKeyFields:oe,setSSHTunnelPrivateKeyFields:se,sshTunnelPrivateKeyPasswordFields:ie,setSSHTunnelPrivateKeyPasswordFields:le}),te&&(0,H.tZ)(x.Z,null))}))}}]);
//# sourceMappingURL=bf89a7458dad44ba025a.chunk.js.map