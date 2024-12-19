"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8968],{70114:(e,t,a)=>{var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(a(140)),r=0,s={};function i(e){var t=r++,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s[t]=(0,o.default)((function n(){(a-=1)<=0?(e(),delete s[t]):s[t]=(0,o.default)(n)})),t}i.cancel=function(e){void 0!==e&&(o.default.cancel(s[e]),delete s[e])},i.ids=s},4823:(e,t,a)=>{var n=a(6305),o=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s=o(a(17383)),i=o(a(34579)),l=o(a(12475)),d=o(a(29511)),c=o(a(81660)),u=n(a(96540)),p=a(57320),m=o(a(70114)),h=a(76421),g=a(70787);function f(e){return!e||null===e.offsetParent||e.hidden}var y=function(e){(0,d.default)(a,e);var t=(0,c.default)(a);function a(){var e;return(0,s.default)(this,a),(e=t.apply(this,arguments)).containerRef=u.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,a){if(!(!t||f(t)||t.className.indexOf("-leave")>=0)){var n=e.props.insertExtraNode;e.extraNode=document.createElement("div");var o=(0,l.default)(e).extraNode,s=e.context.getPrefixCls;o.className="".concat(s(""),"-click-animating-node");var i,d=e.getAttributeName();t.setAttribute(d,"true"),r=r||document.createElement("style"),!a||"#ffffff"===a||"rgb(255, 255, 255)"===a||(i=(a||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/))&&i[1]&&i[2]&&i[3]&&i[1]===i[2]&&i[2]===i[3]||/rgba\((?:\d*, ){3}0\)/.test(a)||"transparent"===a||(e.csp&&e.csp.nonce&&(r.nonce=e.csp.nonce),o.style.borderColor=a,r.innerHTML="\n      [".concat(s(""),"-click-animating-without-extra-node='true']::after, .").concat(s(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(a,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),n&&t.appendChild(o),["transition","animation"].forEach((function(a){t.addEventListener("".concat(a,"start"),e.onTransitionStart),t.addEventListener("".concat(a,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var a=e.containerRef.current;t&&t.target===a&&!e.animationStart&&e.resetEffect(a)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var a=function(a){if("INPUT"!==a.target.tagName&&!f(a.target)){e.resetEffect(t);var n=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,n)}),0),m.default.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=(0,m.default)((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",a,!0),{cancel:function(){t.removeEventListener("click",a,!0)}}}},e.renderWave=function(t){var a=t.csp,n=e.props.children;if(e.csp=a,!u.isValidElement(n))return n;var o=e.containerRef;return(0,p.supportRef)(n)&&(o=(0,p.composeRef)(n.ref,e.containerRef)),(0,g.cloneElement)(n,{ref:o})},e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var a=this.props.insertExtraNode,n=this.getAttributeName();e.setAttribute(n,"false"),r&&(r.innerHTML=""),a&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(a){e.removeEventListener("".concat(a,"start"),t.onTransitionStart),e.removeEventListener("".concat(a,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return u.createElement(h.ConfigConsumer,null,this.renderWave)}}]),a}(u.Component);t.default=y,y.contextType=h.ConfigContext},26613:(e,t,a)=>{var n=a(6305),o=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(94634)),s=o(a(43693)),i=n(a(96540)),l=o(a(46942)),d=a(76421);t.default=function(e){var t,a=e.prefixCls,n=e.className,o=e.checked,c=e.onChange,u=e.onClick,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a}(e,["prefixCls","className","checked","onChange","onClick"]),m=(0,i.useContext(d.ConfigContext).getPrefixCls)("tag",a),h=(0,l.default)(m,(t={},(0,s.default)(t,"".concat(m,"-checkable"),!0),(0,s.default)(t,"".concat(m,"-checkable-checked"),o),t),n);return i.createElement("span",(0,r.default)({},p,{className:h,onClick:function(e){c&&c(!o),u&&u(e)}}))}},48149:(e,t,a)=>{var n=a(6305),o=a(24994);t.A=void 0;var r=o(a(43693)),s=o(a(94634)),i=o(a(85715)),l=n(a(96540)),d=o(a(46942)),c=o(a(42288)),u=o(a(74415)),p=o(a(26613)),m=a(76421),h=a(31334),g=o(a(4823)),f=new RegExp("^(".concat(h.PresetColorTypes.join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(h.PresetStatusColorTypes.join("|"),")$")),v=function(e,t){var a,n=e.prefixCls,o=e.className,p=e.style,h=e.children,v=e.icon,b=e.color,x=e.onClose,w=e.closeIcon,S=e.closable,k=void 0!==S&&S,C=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a}(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),Y=l.useContext(m.ConfigContext),T=Y.getPrefixCls,_=Y.direction,A=l.useState(!0),N=(0,i.default)(A,2),E=N[0],$=N[1];l.useEffect((function(){"visible"in C&&$(C.visible)}),[C.visible]);var P=function(){return!!b&&(f.test(b)||y.test(b))},q=(0,s.default)({backgroundColor:b&&!P()?b:void 0},p),O=P(),F=T("tag",n),D=(0,d.default)(F,(a={},(0,r.default)(a,"".concat(F,"-").concat(b),O),(0,r.default)(a,"".concat(F,"-has-color"),b&&!O),(0,r.default)(a,"".concat(F,"-hidden"),!E),(0,r.default)(a,"".concat(F,"-rtl"),"rtl"===_),a),o),H=function(e){e.stopPropagation(),x&&x(e),e.defaultPrevented||"visible"in C||$(!1)},I="onClick"in C||h&&"a"===h.type,R=(0,c.default)(C,["visible"]),U=v||null,L=U?l.createElement(l.Fragment,null,U,l.createElement("span",null,h)):h,z=l.createElement("span",(0,s.default)({},R,{ref:t,className:D,style:q}),L,k?w?l.createElement("span",{className:"".concat(F,"-close-icon"),onClick:H},w):l.createElement(u.default,{className:"".concat(F,"-close-icon"),onClick:H}):null);return I?l.createElement(g.default,null,z):z},b=l.forwardRef(v);b.displayName="Tag",b.CheckableTag=p.default;var x=b;t.A=x},12397:(e,t,a)=>{a.d(t,{U:()=>i}),a(96540);var n=a(19129),o=a(25106),r=a(95579),s=a(17437);const i=({user:e,date:t})=>{const a=(0,s.Y)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,o.A)(e),i=(0,r.t)("Modified by: %s",t);return(0,s.Y)(n.m,{title:i,placement:"bottom"},a)}return a}},31383:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(96540),o=a(95579),r=a(50500),s=a(25946),i=a(17437);const l=(0,r.xK)(),d=l?l.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:t})=>(0,i.Y)(s.A,{closable:!1,css:e=>(e=>i.AH`
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
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,i.Y)(n.Fragment,null,(0,i.Y)("br",null),(0,o.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,i.Y)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,o.t)("here")),"."):""})},74354:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(96540),o=a(90017),r=a(95579),s=a(46920),i=a(85861),l=a(15595),d=a(50500),c=a(31383),u=a(17437);const p=o.A.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,m=o.A.div`
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
`,h=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:o,onModelImport:h,show:g,onHide:f,passwordFields:y=[],setPasswordFields:v=(()=>{}),sshTunnelPasswordFields:b=[],setSSHTunnelPasswordFields:x=(()=>{}),sshTunnelPrivateKeyFields:w=[],setSSHTunnelPrivateKeyFields:S=(()=>{}),sshTunnelPrivateKeyPasswordFields:k=[],setSSHTunnelPrivateKeyPasswordFields:C=(()=>{})})=>{const[Y,T]=(0,n.useState)(!0),[_,A]=(0,n.useState)({}),[N,E]=(0,n.useState)(!1),[$,P]=(0,n.useState)(!1),[q,O]=(0,n.useState)([]),[F,D]=(0,n.useState)(!1),[H,I]=(0,n.useState)(),[R,U]=(0,n.useState)({}),[L,z]=(0,n.useState)({}),[M,j]=(0,n.useState)({}),K=()=>{O([]),v([]),A({}),E(!1),P(!1),D(!1),I(""),x([]),S([]),C([]),U({}),z({}),j({})},{state:{alreadyExists:B,passwordsNeeded:Q,sshPasswordNeeded:W,sshPrivateKeyNeeded:V,sshPrivateKeyPasswordNeeded:J},importResource:G}=(0,d.bN)(e,t,(e=>{I(e)}));(0,n.useEffect)((()=>{v(Q),Q.length>0&&D(!1)}),[Q,v]),(0,n.useEffect)((()=>{E(B.length>0),B.length>0&&D(!1)}),[B,E]),(0,n.useEffect)((()=>{x(W),W.length>0&&D(!1)}),[W,x]),(0,n.useEffect)((()=>{S(V),V.length>0&&D(!1)}),[V,S]),(0,n.useEffect)((()=>{C(J),J.length>0&&D(!1)}),[J,C]);return Y&&g&&T(!1),(0,u.Y)(i.A,{name:"model",className:"import-model-modal",disablePrimaryButton:0===q.length||N&&!$||F,onHandledPrimaryAction:()=>{var e;(null==(e=q[0])?void 0:e.originFileObj)instanceof File&&(D(!0),G(q[0].originFileObj,_,R,L,M,$).then((e=>{e&&(K(),h())})))},onHide:()=>{T(!0),f(),K()},primaryButtonName:N?(0,r.t)("Overwrite"):(0,r.t)("Import"),primaryButtonType:N?"danger":"primary",width:"750px",show:g,title:(0,u.Y)("h4",null,(0,r.t)("Import %s",t))},(0,u.Y)(m,null,(0,u.Y)(l._O,{name:"modelFile",id:"modelFile","data-test":"model-file-input",accept:".yaml,.json,.yml,.zip",fileList:q,onChange:e=>{O([{...e.file,status:"done"}])},onRemove:e=>(O(q.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:F},(0,u.Y)(s.A,{loading:F},(0,r.t)("Select file")))),H&&(0,u.Y)(c.A,{errorMessage:H,showDbInstallInstructions:y.length>0||b.length>0||w.length>0||k.length>0}),(()=>{if(0===y.length&&0===b.length&&0===w.length&&0===k.length)return null;const e=[...new Set([...y,...b,...w,...k])];return(0,u.Y)(n.Fragment,null,(0,u.Y)("h5",null,(0,r.t)("Database passwords")),(0,u.Y)(p,null,a),e.map((e=>(0,u.Y)(n.Fragment,null,(null==y?void 0:y.indexOf(e))>=0&&(0,u.Y)(m,{key:`password-for-${e}`},(0,u.Y)("div",{className:"control-label"},(0,r.t)("%s PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required"},"*")),(0,u.Y)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:_[e],onChange:t=>A({..._,[e]:t.target.value})})),(null==b?void 0:b.indexOf(e))>=0&&(0,u.Y)(m,{key:`ssh_tunnel_password-for-${e}`},(0,u.Y)("div",{className:"control-label"},(0,r.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required"},"*")),(0,u.Y)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:R[e],onChange:t=>U({...R,[e]:t.target.value}),"data-test":"ssh_tunnel_password"})),(null==w?void 0:w.indexOf(e))>=0&&(0,u.Y)(m,{key:`ssh_tunnel_private_key-for-${e}`},(0,u.Y)("div",{className:"control-label"},(0,r.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,u.Y)("span",{className:"required"},"*")),(0,u.Y)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:L[e],onChange:t=>z({...L,[e]:t.target.value}),"data-test":"ssh_tunnel_private_key"})),(null==k?void 0:k.indexOf(e))>=0&&(0,u.Y)(m,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,u.Y)("div",{className:"control-label"},(0,r.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required"},"*")),(0,u.Y)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:M[e],onChange:t=>j({...M,[e]:t.target.value}),"data-test":"ssh_tunnel_private_key_password"}))))))})(),N?(0,u.Y)(n.Fragment,null,(0,u.Y)(m,null,(0,u.Y)("div",{className:"confirm-overwrite"},o),(0,u.Y)("div",{className:"control-label"},(0,r.t)('Type "%s" to confirm',(0,r.t)("OVERWRITE"))),(0,u.Y)("input",{"data-test":"overwrite-modal-input",id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";P(n.toUpperCase()===(0,r.t)("OVERWRITE"))}}))):null)}},83691:(e,t,a)=>{a.d(t,{A:()=>d}),a(96540);var n=a(90017),o=a(19129),r=a(12249),s=a(17437);const i=n.A.span`
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
`,l=n.A.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,s.Y)(i,{className:"actions"},e.map(((e,t)=>{const a=r.A[e.icon];return e.tooltip?(0,s.Y)(o.m,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,s.Y)(l,{role:"button",tabIndex:0,className:"action-button","data-test":e.label,onClick:e.onClick},(0,s.Y)(a,null))):(0,s.Y)(l,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,"data-test":e.label,key:t},(0,s.Y)(a,null))})))}},22470:(e,t,a)=>{a.d(t,{S:()=>u});var n=a(96540),o=a(90017),r=a(48149),s=a(19129),i=a(17437);const l=(0,o.A)(r.A)`
  ${({theme:e})=>`\n  margin-top: ${e.gridUnit}px;\n  margin-bottom: ${e.gridUnit}px;\n  font-size: ${e.typography.sizes.s}px;\n  `};
`,d=({name:e,id:t,index:a,onDelete:o,editable:r=!1,onClick:d,toolTipTitle:c=e})=>{const u=(0,n.useMemo)((()=>e.length>20),[e])?`${e.slice(0,20)}...`:e;return(0,i.Y)(n.Fragment,null,r?(0,i.Y)(s.m,{title:c,key:c},(0,i.Y)(l,{key:t,closable:r,onClose:()=>a?null==o?void 0:o(a):null,color:"blue"},u)):(0,i.Y)(s.m,{title:c,key:c},(0,i.Y)(l,{"data-test":"tag",role:"link",key:t,onClick:d},t?(0,i.Y)("a",{href:`/superset/all_entities/?id=${t}`,target:"_blank",rel:"noreferrer"},u):u)))},c=o.A.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,u=({tags:e,editable:t=!1,onDelete:a,maxTags:o})=>{const[r,s]=(0,n.useState)(o),l=e=>{null==a||a(e)},u=(0,n.useMemo)((()=>r?e.length>r:null),[e.length,r]),p=(0,n.useMemo)((()=>"number"==typeof r?e.length-r+1:null),[u,e.length,r]);return(0,i.Y)(c,{className:"tag-list"},u&&"number"==typeof r?(0,i.Y)(n.Fragment,null,e.slice(0,r-1).map(((e,a)=>(0,i.Y)(d,{id:e.id,key:e.id,name:e.name,index:a,onDelete:l,editable:t}))),e.length>r?(0,i.Y)(d,{name:`+${p}...`,onClick:()=>s(void 0),toolTipTitle:e.map((e=>e.name)).join(", ")}):null):(0,i.Y)(n.Fragment,null,e.map(((e,a)=>(0,i.Y)(d,{id:e.id,key:e.id,name:e.name,index:a,onDelete:l,editable:t}))),o&&e.length>o?(0,i.Y)(d,{name:"...",onClick:()=>s(o)}):null))}},67733:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var n=a(95579),o=a(90017),r=a(35742),s=a(27366),i=a(96540),l=a(56347),d=a(54625),c=a(58561),u=a.n(c),p=a(30703),m=a(61225),h=a(50127),g=a(5261),f=a(50500),y=a(63358),v=a(4780),b=a(51713),x=a(39854),w=a(17444),S=a(37020),k=a(83691),C=a(22470),Y=a(19129),T=a(93514),_=a(23193),A=a(73135),N=a(74354),E=a(12397),$=a(3932),P=a(12249),q=a(85861),O=a(46920),F=a(11188),D=a(14318),H=a(17437);const I=o.A.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,R=o.A.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 16px 0;
`,U=(0,o.A)(q.A)`
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
`,L=(0,g.Ay)((({fetchData:e,onHide:t,openInSqlLab:a,queries:o,savedQuery:r,show:s,addDangerToast:l,addSuccessToast:d})=>{const{handleKeyPress:c,handleDataChange:u,disablePrevious:p,disableNext:m}=(0,D.A)({queries:o,currentQueryId:r.id,fetchData:e});return(0,H.Y)("div",{role:"none",onKeyUp:c},(0,H.Y)(U,{onHide:t,show:s,title:(0,n.t)("Query preview"),footer:(0,H.Y)(i.Fragment,null,(0,H.Y)(O.A,{"data-test":"previous-saved-query",key:"previous-saved-query",disabled:p,onClick:()=>u(!0)},(0,n.t)("Previous")),(0,H.Y)(O.A,{"data-test":"next-saved-query",key:"next-saved-query",disabled:m,onClick:()=>u(!1)},(0,n.t)("Next")),(0,H.Y)(O.A,{"data-test":"open-in-sql-lab",key:"open-in-sql-lab",buttonStyle:"primary",onClick:({metaKey:e})=>a(r.id,Boolean(e))},(0,n.t)("Open in SQL Lab")))},(0,H.Y)(I,null,(0,n.t)("Query name")),(0,H.Y)(R,null,r.label),(0,H.Y)(F.A,{language:"sql",addDangerToast:l,addSuccessToast:d},r.sql||"")))}));var z=a(84666);const M=(0,n.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),j=(0,n.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),K=o.A.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,B=o.A.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,Q=(0,g.Ay)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:o,resourceCount:c,resourceCollection:g,bulkSelectEnabled:q},hasPerm:O,fetchData:F,toggleBulkSelect:D,refreshData:I}=(0,f.RU)("saved_query",(0,n.t)("Saved queries"),e),{roles:R}=(0,m.d4)((e=>e.user)),U=(0,z.L)("can_read","Tag",R),[Q,W]=(0,i.useState)(null),[V,J]=(0,i.useState)(null),[G,X]=(0,i.useState)(!1),[Z,ee]=(0,i.useState)([]),[te,ae]=(0,i.useState)(!1),[ne,oe]=(0,i.useState)([]),[re,se]=(0,i.useState)([]),[ie,le]=(0,i.useState)([]),de=(0,l.W6)(),ce=O("can_write"),ue=O("can_write"),pe=O("can_write"),me=O("can_export"),he=(0,i.useCallback)((t=>{r.A.get({endpoint:`/api/v1/saved_query/${t}`}).then((({json:e={}})=>{J({...e.result})}),(0,p.JF)((t=>e((0,n.t)("There was an issue previewing the selected query %s",t)))))}),[e]),ge={activeChild:"Saved queries",...T.F},fe=[];pe&&fe.push({name:(0,n.t)("Bulk select"),onClick:D,buttonStyle:"secondary"}),fe.push({name:(0,H.Y)(d.N_,{to:"/sqllab?new=true"},(0,H.Y)("i",{className:"fa fa-plus"})," ",(0,n.t)("Query")),buttonStyle:"primary"}),ce&&fe.push({name:(0,H.Y)(Y.m,{id:"import-tooltip",title:(0,n.t)("Import queries"),placement:"bottomRight","data-test":"import-tooltip-test"},(0,H.Y)(P.A.Import,{"data-test":"import-icon"})),buttonStyle:"link",onClick:()=>{X(!0)},"data-test":"import-button"}),ge.buttons=fe;const ye=(e,t)=>{t?window.open(`/sqllab?savedQueryId=${e}`):de.push(`/sqllab?savedQueryId=${e}`)},ve=(0,i.useCallback)((a=>{(0,A.A)((()=>Promise.resolve(`${window.location.origin}/sqllab?savedQueryId=${a}`))).then((()=>{t((0,n.t)("Link Copied!"))})).catch((()=>{e((0,n.t)("Sorry, your browser does not support copying."))}))}),[e,t]),be=e=>{const t=e.map((({id:e})=>e));(0,v.A)("saved_query",t,(()=>{ae(!1)})),ae(!0)},xe=[{id:"changed_on_delta_humanized",desc:!0}],we=(0,i.useMemo)((()=>[{accessor:"label",Header:(0,n.t)("Name")},{accessor:"description",Header:(0,n.t)("Description")},{accessor:"database.database_name",Header:(0,n.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,n.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=(null==t?void 0:t.shift())||"";return t.length?(0,H.Y)(K,null,(0,H.Y)("span",null,a),(0,H.Y)(h.A,{placement:"right",title:(0,n.t)("TABLES"),trigger:"click",content:(0,H.Y)(i.Fragment,null,t.map((e=>(0,H.Y)(B,{key:e},e))))},(0,H.Y)("span",{className:"count"},"(+",t.length,")"))):a},accessor:"sql_tables",Header:(0,n.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{tags:e=[]}}})=>(0,H.Y)(C.S,{tags:e.filter((e=>1===e.type))}),Header:(0,n.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,s.G7)(s.TO.TaggingSystem)},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:t}}})=>(0,H.Y)(E.U,{user:e,date:t}),Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{const t=[{label:"preview-action",tooltip:(0,n.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{he(e.id)}},ue&&{label:"edit-action",tooltip:(0,n.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:({metaKey:t})=>ye(e.id,Boolean(t))},{label:"copy-action",tooltip:(0,n.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>ve(e.id)},me&&{label:"export-action",tooltip:(0,n.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>be([e])},pe&&{label:"delete-action",tooltip:(0,n.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>W(e)}].filter((e=>!!e));return(0,H.Y)(k.A,{actions:t})},Header:(0,n.t)("Actions"),id:"actions",disableSortBy:!0},{accessor:_.H.ChangedBy,hidden:!0}]),[pe,ue,me,ve,he]),Se=(0,i.useMemo)((()=>[{Header:(0,n.t)("Search"),id:"label",key:"search",input:"search",operator:x.t.AllText,toolTipDescription:"Searches all text fields: Name, Description, Database & Schema"},{Header:(0,n.t)("Database"),key:"database",id:"database",input:"select",operator:x.t.RelationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,p.u1)("saved_query","database",(0,p.JF)((t=>e((0,n.t)("An error occurred while fetching dataset datasource values: %s",t))))),paginate:!0},{Header:(0,n.t)("Schema"),id:"schema",key:"schema",input:"select",operator:x.t.Equals,unfilteredLabel:"All",fetchSelects:(0,p.$C)("saved_query","schema",(0,p.JF)((t=>e((0,n.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},...(0,s.G7)(s.TO.TaggingSystem)&&U?[{Header:(0,n.t)("Tag"),id:"tags",key:"tags",input:"select",operator:x.t.SavedQueryTags,fetchSelects:$.m}]:[],{Header:(0,n.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:x.t.RelationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,p.u1)("saved_query","changed_by",(0,p.JF)((e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[e]);return(0,H.Y)(i.Fragment,null,(0,H.Y)(b.A,ge),Q&&(0,H.Y)(S.A,{description:(0,n.t)("This action will permanently delete the saved query."),onConfirm:()=>{Q&&(({id:a,label:o})=>{r.A.delete({endpoint:`/api/v1/saved_query/${a}`}).then((()=>{I(),W(null),t((0,n.t)("Deleted: %s",o))}),(0,p.JF)((t=>e((0,n.t)("There was an issue deleting %s: %s",o,t)))))})(Q)},onHide:()=>W(null),open:!0,title:(0,n.t)("Delete Query?")}),V&&(0,H.Y)(L,{fetchData:he,onHide:()=>J(null),savedQuery:V,queries:g,openInSqlLab:ye,show:!0}),(0,H.Y)(y.A,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{r.A.delete({endpoint:`/api/v1/saved_query/?q=${u().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{I(),t(e.message)}),(0,p.JF)((t=>e((0,n.t)("There was an issue deleting the selected queries: %s",t)))))}},(a=>{const r=[];return pe&&r.push({key:"delete",name:(0,n.t)("Delete"),onSelect:a,type:"danger"}),me&&r.push({key:"export",name:(0,n.t)("Export"),type:"primary",onSelect:be}),(0,H.Y)(x.A,{className:"saved_query-list-view",columns:we,count:c,data:g,fetchData:F,filters:Se,initialSort:xe,loading:o,pageSize:25,bulkActions:r,addSuccessToast:t,addDangerToast:e,bulkSelectEnabled:q,disableBulkSelect:D,highlightRowId:null==V?void 0:V.id,enableBulkTag:!0,bulkTagResourceName:"query",refreshData:I})})),(0,H.Y)(N.A,{resourceName:"saved_query",resourceLabel:(0,n.t)("queries"),passwordsNeededMessage:M,confirmOverwriteMessage:j,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{X(!1),I(),t((0,n.t)("Query imported"))},show:G,onHide:()=>{X(!1)},passwordFields:Z,setPasswordFields:ee,sshTunnelPasswordFields:ne,setSSHTunnelPasswordFields:oe,sshTunnelPrivateKeyFields:re,setSSHTunnelPrivateKeyFields:se,sshTunnelPrivateKeyPasswordFields:ie,setSSHTunnelPrivateKeyPasswordFields:le}),te&&(0,H.Y)(w.A,null))}))}}]);
//# sourceMappingURL=c2d5d6233c4637f4bb70.chunk.js.map