"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5169],{12397:(e,t,a)=>{a.d(t,{U:()=>r}),a(96540);var s=a(19129),n=a(25106),l=a(95579),i=a(17437);const r=({user:e,date:t})=>{const a=(0,i.Y)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,n.A)(e),r=(0,l.t)("Modified by: %s",t);return(0,i.Y)(s.m,{title:r,placement:"bottom"},a)}return a}},78532:(e,t,a)=>{a.d(t,{K:()=>r});var s=a(97032),n=(a(96540),a(54625)),l=a(32132),i=a(17437);const r=({to:e,component:t,replace:a,innerRef:r,children:o,...d})=>"string"==typeof e&&(0,l.JE)(e)?(0,i.Y)("a",(0,s.A)({"data-test":"external-link",href:(0,l.Dl)(e)},d),o):(0,i.Y)(n.N_,(0,s.A)({"data-test":"internal-link",to:e,component:t,replace:a,innerRef:r},d),o)},31383:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(96540),n=a(95579),l=a(50500),i=a(25946),r=a(17437);const o=(0,l.xK)(),d=o?o.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:t})=>(0,r.Y)(i.A,{closable:!1,css:e=>(e=>r.AH`
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
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,r.Y)(s.Fragment,null,(0,r.Y)("br",null),(0,n.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,r.Y)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,n.t)("here")),"."):""})},74354:(e,t,a)=>{a.d(t,{A:()=>m});var s=a(96540),n=a(90017),l=a(95579),i=a(46920),r=a(85861),o=a(15595),d=a(50500),c=a(31383),u=a(17437);const p=n.A.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,h=n.A.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:n,onModelImport:m,show:g,onHide:y,passwordFields:b=[],setPasswordFields:f=(()=>{}),sshTunnelPasswordFields:v=[],setSSHTunnelPasswordFields:S=(()=>{}),sshTunnelPrivateKeyFields:w=[],setSSHTunnelPrivateKeyFields:Y=(()=>{}),sshTunnelPrivateKeyPasswordFields:_=[],setSSHTunnelPrivateKeyPasswordFields:A=(()=>{})})=>{const[x,k]=(0,s.useState)(!0),[P,$]=(0,s.useState)({}),[T,N]=(0,s.useState)(!1),[C,D]=(0,s.useState)(!1),[E,F]=(0,s.useState)([]),[H,U]=(0,s.useState)(!1),[I,R]=(0,s.useState)(),[B,z]=(0,s.useState)({}),[O,M]=(0,s.useState)({}),[L,K]=(0,s.useState)({}),V=()=>{F([]),f([]),$({}),N(!1),D(!1),U(!1),R(""),S([]),Y([]),A([]),z({}),M({}),K({})},{state:{alreadyExists:q,passwordsNeeded:J,sshPasswordNeeded:j,sshPrivateKeyNeeded:W,sshPrivateKeyPasswordNeeded:G},importResource:X}=(0,d.bN)(e,t,(e=>{R(e)}));(0,s.useEffect)((()=>{f(J),J.length>0&&U(!1)}),[J,f]),(0,s.useEffect)((()=>{N(q.length>0),q.length>0&&U(!1)}),[q,N]),(0,s.useEffect)((()=>{S(j),j.length>0&&U(!1)}),[j,S]),(0,s.useEffect)((()=>{Y(W),W.length>0&&U(!1)}),[W,Y]),(0,s.useEffect)((()=>{A(G),G.length>0&&U(!1)}),[G,A]);return x&&g&&k(!1),(0,u.Y)(r.A,{name:"model",className:"import-model-modal",disablePrimaryButton:0===E.length||T&&!C||H,onHandledPrimaryAction:()=>{var e;(null==(e=E[0])?void 0:e.originFileObj)instanceof File&&(U(!0),X(E[0].originFileObj,P,B,O,L,C).then((e=>{e&&(V(),m())})))},onHide:()=>{k(!0),y(),V()},primaryButtonName:T?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:T?"danger":"primary",width:"750px",show:g,title:(0,u.Y)("h4",null,(0,l.t)("Import %s",t))},(0,u.Y)(h,null,(0,u.Y)(o._O,{name:"modelFile",id:"modelFile","data-test":"model-file-input",accept:".yaml,.json,.yml,.zip",fileList:E,onChange:e=>{F([{...e.file,status:"done"}])},onRemove:e=>(F(E.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:H},(0,u.Y)(i.A,{loading:H},(0,l.t)("Select file")))),I&&(0,u.Y)(c.A,{errorMessage:I,showDbInstallInstructions:b.length>0||v.length>0||w.length>0||_.length>0}),(()=>{if(0===b.length&&0===v.length&&0===w.length&&0===_.length)return null;const e=[...new Set([...b,...v,...w,..._])];return(0,u.Y)(s.Fragment,null,(0,u.Y)("h5",null,(0,l.t)("Database passwords")),(0,u.Y)(p,null,a),e.map((e=>(0,u.Y)(s.Fragment,null,(null==b?void 0:b.indexOf(e))>=0&&(0,u.Y)(h,{key:`password-for-${e}`},(0,u.Y)("div",{className:"control-label"},(0,l.t)("%s PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required"},"*")),(0,u.Y)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:P[e],onChange:t=>$({...P,[e]:t.target.value})})),(null==v?void 0:v.indexOf(e))>=0&&(0,u.Y)(h,{key:`ssh_tunnel_password-for-${e}`},(0,u.Y)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required"},"*")),(0,u.Y)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:B[e],onChange:t=>z({...B,[e]:t.target.value}),"data-test":"ssh_tunnel_password"})),(null==w?void 0:w.indexOf(e))>=0&&(0,u.Y)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,u.Y)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,u.Y)("span",{className:"required"},"*")),(0,u.Y)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:O[e],onChange:t=>M({...O,[e]:t.target.value}),"data-test":"ssh_tunnel_private_key"})),(null==_?void 0:_.indexOf(e))>=0&&(0,u.Y)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,u.Y)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required"},"*")),(0,u.Y)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:L[e],onChange:t=>K({...L,[e]:t.target.value}),"data-test":"ssh_tunnel_private_key_password"}))))))})(),T?(0,u.Y)(s.Fragment,null,(0,u.Y)(h,null,(0,u.Y)("div",{className:"confirm-overwrite"},n),(0,u.Y)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,u.Y)("input",{"data-test":"overwrite-modal-input",id:"overwrite",type:"text",onChange:e=>{var t,a;const s=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";D(s.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},54016:(e,t,a)=>{a.d(t,{A:()=>v,V:()=>s});var s,n=a(97032),l=a(2404),i=a.n(l),r=a(96540),o=a(90017),d=a(95579),c=a(38914),u=a(15595),p=a(47251),h=a(73204),m=a(17437);!function(e){e.Default="Default",e.Small="Small"}(s||(s={}));const g=o.A.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,y=o.A.div`
  ${({scrollTable:e,theme:t})=>e&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*t.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:e,small:t})=>!t&&`height: ${11*e.gridUnit-1}px;`}

    .table-cell {
      ${({theme:e,small:t})=>t&&`\n        padding-top: ${e.gridUnit+1}px;\n        padding-bottom: ${e.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:e})=>`${e.gridUnit-2}px solid ${e.colors.grayscale.light2}`};
    ${({small:e})=>e&&"padding-bottom: 0;"}
  }
`,b=o.A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  ${({isPaginationSticky:e})=>e&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,f=({columns:e,data:t,pageSize:a,totalCount:l=t.length,initialPageIndex:o,initialSortBy:f=[],loading:v=!1,withPagination:S=!0,emptyWrapperType:w=s.Default,noDataText:Y,showRowCount:_=!0,serverPagination:A=!1,columnsForWrapText:x,onServerPagination:k=(()=>{}),scrollTopOnPagination:P=!1,...$})=>{const T={pageSize:null!=a?a:10,pageIndex:null!=o?o:0,sortBy:f},{getTableProps:N,getTableBodyProps:C,headerGroups:D,page:E,rows:F,prepareRow:H,pageCount:U,gotoPage:I,state:{pageIndex:R,pageSize:B,sortBy:z}}=(0,c.useTable)({columns:e,data:t,initialState:T,manualPagination:A,manualSortBy:A,pageCount:Math.ceil(l/T.pageSize)},c.useFilters,c.useSortBy,c.usePagination),O=S?E:F;let M;switch(w){case s.Small:M=({children:e})=>(0,m.Y)(r.Fragment,null,e);break;case s.Default:default:M=({children:e})=>(0,m.Y)(g,null,e)}const L=!v&&0===O.length,K=U>1&&S,V=(0,r.useRef)(null);return(0,r.useEffect)((()=>{A&&R!==T.pageIndex&&k({pageIndex:R})}),[R]),(0,r.useEffect)((()=>{A&&!i()(z,T.sortBy)&&k({pageIndex:0,sortBy:z})}),[z]),(0,m.Y)(r.Fragment,null,(0,m.Y)(y,(0,n.A)({},$,{ref:V}),(0,m.Y)(h.A,{getTableProps:N,getTableBodyProps:C,prepareRow:H,headerGroups:D,rows:O,columns:e,loading:v,columnsForWrapText:x}),L&&(0,m.Y)(M,null,Y?(0,m.Y)(u.Sv,{image:u.Sv.PRESENTED_IMAGE_SIMPLE,description:Y}):(0,m.Y)(u.Sv,{image:u.Sv.PRESENTED_IMAGE_SIMPLE}))),K&&(0,m.Y)(b,{className:"pagination-container",isPaginationSticky:$.isPaginationSticky},(0,m.Y)(p.A,{totalPages:U||0,currentPage:U?R+1:0,onChange:e=>(e=>{var t;P&&(null==V||null==(t=V.current)||t.scroll(0,0)),I(e)})(e-1),hideFirstAndLastPageLinks:!0}),_&&(0,m.Y)("div",{className:"row-count-container"},!v&&(0,d.t)("%s-%s of %s",B*R+(E.length&&1),B*R+E.length,l))))},v=r.memo(f)},50217:(e,t,a)=>{a.d(t,{A:()=>s.A,V:()=>s.V});var s=a(54016)},61172:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var s=a(72391),n=a(90017),l=a(95579),i=a(35742),r=a(96540),o=a(56347),d=a(54625),c=a(58561),u=a.n(c),p=a(30703),h=a(50500),m=a(63358),g=a(67940),y=a(37020),b=a(4780),f=a(39854),v=a(17444),S=a(51713),w=a(5261),Y=a(19129),_=a(12249),A=a(99748),x=a(58132),k=a(31641),P=a(74354),$=a(78704),T=a(65256),N=a(78532),C=a(96642),D=a(40563),E=a(90868),F=a(85861),H=a(17437);const U=({dataset:e,onHide:t,onDuplicate:a})=>{const[s,n]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1),[d,c]=(0,r.useState)(""),u=()=>{a(d)};return(0,r.useEffect)((()=>{c(""),n(null!==e)}),[e]),(0,H.Y)(F.A,{show:s,onHide:t,title:(0,l.t)("Duplicate dataset"),disablePrimaryButton:i,onHandledPrimaryAction:u,primaryButtonName:(0,l.t)("Duplicate")},(0,H.Y)(D.lR,{htmlFor:"duplicate"},(0,l.t)("New dataset name")),(0,H.Y)(E.pd,{"data-test":"duplicate-modal-input",type:"text",id:"duplicate",autoComplete:"off",value:d,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";c(a),o(""===a)},onPressEnter:u}))};var I=a(61225),R=a(12397),B=a(23193);const z=(0,s.a)().get("dataset.delete.related"),O=n.A.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,M=n.A.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .disabled {
    svg,
    i {
      &:hover {
        path {
          fill: ${({theme:e})=>e.colors.grayscale.light1};
        }
      }
    }
    color: ${({theme:e})=>e.colors.grayscale.light1};
    .ant-menu-item:hover {
      color: ${({theme:e})=>e.colors.grayscale.light1};
      cursor: default;
    }
    &::after {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }
`,L=(0,w.Ay)((({addDangerToast:e,addSuccessToast:t,user:a})=>{const s=(0,o.W6)(),{state:{loading:n,resourceCount:c,resourceCollection:w,bulkSelectEnabled:D},hasPerm:E,fetchData:F,toggleBulkSelect:L,refreshData:K}=(0,h.RU)("dataset",(0,l.t)("dataset"),e),[V,q]=(0,r.useState)(null),[J,j]=(0,r.useState)(null),[W,G]=(0,r.useState)(null),[X,Q]=(0,r.useState)(!1),[Z,ee]=(0,r.useState)([]),[te,ae]=(0,r.useState)(!1),[se,ne]=(0,r.useState)([]),[le,ie]=(0,r.useState)([]),[re,oe]=(0,r.useState)([]),de=(0,I.d4)((e=>{var t,a;return(null==(t=e.common)||null==(a=t.conf)?void 0:a.PREVENT_UNSAFE_DEFAULT_URLS_ON_DATASET)||!1})),ce=E("can_write"),ue=E("can_write"),pe=E("can_write"),he=E("can_duplicate"),me=E("can_export"),ge=C.Hu,ye=(0,r.useCallback)((({id:t})=>{i.A.get({endpoint:`/api/v1/dataset/${t}`}).then((({json:e={}})=>{const t=e.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));e.result.columns=[...t],j(e.result)})).catch((()=>{e((0,l.t)("An error occurred while fetching dataset related data"))}))}),[e]),be=e=>{const t=e.map((({id:e})=>e));(0,b.A)("dataset",t,(()=>{ae(!1)})),ae(!0)},fe=(0,r.useMemo)((()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,H.Y)(Y.m,{id:"physical-dataset-tooltip",title:(0,l.t)("Physical dataset")},(0,H.Y)(_.A.DatasetPhysical,null)):(0,H.Y)(Y.m,{id:"virtual-dataset-tooltip",title:(0,l.t)("Virtual dataset")},(0,H.Y)(_.A.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:({row:{original:{extra:e,table_name:t,description:a,explore_url:s}}})=>{let n;n=de?(0,H.Y)(d.N_,{"data-test":"internal-link",to:s},t):(0,H.Y)(N.K,{to:s},t);try{const t=JSON.parse(e);return(0,H.Y)(O,null,(null==t?void 0:t.certification)&&(0,H.Y)(x.A,{certifiedBy:t.certification.certified_by,details:t.certification.details,size:"l"}),(null==t?void 0:t.warning_markdown)&&(0,H.Y)($.A,{warningMarkdown:t.warning_markdown,size:"l"}),n,a&&(0,H.Y)(k.A,{tooltip:a}))}catch{return n}},Header:(0,l.t)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,l.t)("Physical"):(0,l.t)("Virtual"),Header:(0,l.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,l.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,l.t)("Schema"),accessor:"schema",size:"lg"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>(0,H.Y)(A.A,{users:e}),Header:(0,l.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,H.Y)(R.U,{date:e,user:t}),Header:(0,l.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=e.owners.map((e=>e.id)).includes(a.userId)||(0,T.N6)(a);return ce||ue||me||he?(0,H.Y)(M,{className:"actions"},ue&&(0,H.Y)(Y.m,{id:"delete-action-tooltip",title:(0,l.t)("Delete"),placement:"bottom"},(0,H.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,i.A.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then((({json:e={}})=>{q({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})})).catch((0,p.JF)((e=>(0,l.t)("An error occurred while fetching dataset related data: %s",e))));var t}},(0,H.Y)(_.A.Trash,null))),me&&(0,H.Y)(Y.m,{id:"export-action-tooltip",title:(0,l.t)("Export"),placement:"bottom"},(0,H.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>be([e])},(0,H.Y)(_.A.Share,null))),ce&&(0,H.Y)(Y.m,{id:"edit-action-tooltip",title:t?(0,l.t)("Edit"):(0,l.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,H.Y)("span",{role:"button",tabIndex:0,className:t?"action-button":"disabled",onClick:t?()=>ye(e):void 0},(0,H.Y)(_.A.EditAlt,null))),he&&"virtual"===e.kind&&(0,H.Y)(Y.m,{id:"duplicate-action-tooltop",title:(0,l.t)("Duplicate"),placement:"bottom"},(0,H.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{G(e)}},(0,H.Y)(_.A.Copy,null)))):null},Header:(0,l.t)("Actions"),id:"actions",hidden:!ce&&!ue&&!he,disableSortBy:!0},{accessor:B.H.ChangedBy,hidden:!0}]),[ce,ue,me,ye,he,a]),ve=(0,r.useMemo)((()=>[{Header:(0,l.t)("Name"),key:"search",id:"table_name",input:"search",operator:f.t.Contains},{Header:(0,l.t)("Type"),key:"sql",id:"sql",input:"select",operator:f.t.DatasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:(0,l.t)("Virtual"),value:!1},{label:(0,l.t)("Physical"),value:!0}]},{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:f.t.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.u1)("dataset","database",(0,p.JF)((e=>(0,l.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,l.t)("Schema"),key:"schema",id:"schema",input:"select",operator:f.t.Equals,unfilteredLabel:"All",fetchSelects:(0,p.$C)("dataset","schema",(0,p.JF)((e=>(0,l.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,l.t)("Owner"),key:"owner",id:"owners",input:"select",operator:f.t.RelationManyMany,unfilteredLabel:"All",fetchSelects:(0,p.u1)("dataset","owners",(0,p.JF)((e=>(0,l.t)("An error occurred while fetching dataset owner values: %s",e))),a),paginate:!0},{Header:(0,l.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:f.t.DatasetIsCertified,unfilteredLabel:(0,l.t)("Any"),selects:[{label:(0,l.t)("Yes"),value:!0},{label:(0,l.t)("No"),value:!1}]},{Header:(0,l.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:f.t.RelationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,p.u1)("dataset","changed_by",(0,p.JF)((e=>(0,l.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[a]),Se={activeChild:"Datasets",name:(0,l.t)("Datasets")},we=[];return(ue||me)&&we.push({name:(0,l.t)("Bulk select"),onClick:L,buttonStyle:"secondary"}),pe&&(we.push({name:(0,H.Y)(r.Fragment,null,(0,H.Y)("i",{className:"fa fa-plus"})," ",(0,l.t)("Dataset")," "),onClick:()=>{s.push("/dataset/add/")},buttonStyle:"primary"}),we.push({name:(0,H.Y)(Y.m,{id:"import-tooltip",title:(0,l.t)("Import datasets"),placement:"bottomRight"},(0,H.Y)(_.A.Import,{"data-test":"import-button"})),buttonStyle:"link",onClick:()=>{Q(!0)}})),Se.buttons=we,(0,H.Y)(r.Fragment,null,(0,H.Y)(S.A,Se),V&&(0,H.Y)(y.A,{description:(0,H.Y)(r.Fragment,null,(0,H.Y)("p",null,(0,l.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",V.table_name,V.chart_count,V.dashboard_count)),z&&(0,H.Y)(z,{dataset:V})),onConfirm:()=>{V&&(({id:a,table_name:s})=>{i.A.delete({endpoint:`/api/v1/dataset/${a}`}).then((()=>{K(),q(null),t((0,l.t)("Deleted: %s",s))}),(0,p.JF)((t=>e((0,l.t)("There was an issue deleting %s: %s",s,t)))))})(V)},onHide:()=>{q(null)},open:!0,title:(0,l.t)("Delete Dataset?")}),J&&(0,H.Y)(g.X,{datasource:J,onDatasourceSave:K,onHide:()=>{j(null)},show:!0}),(0,H.Y)(U,{dataset:W,onHide:()=>{G(null)},onDuplicate:t=>{null===W&&e((0,l.t)("There was an issue duplicating the dataset.")),i.A.post({endpoint:"/api/v1/dataset/duplicate",jsonPayload:{base_model_id:null==W?void 0:W.id,table_name:t}}).then((()=>{G(null),K()}),(0,p.JF)((t=>e((0,l.t)("There was an issue duplicating the selected datasets: %s",t)))))}}),(0,H.Y)(m.A,{title:(0,l.t)("Please confirm"),description:(0,l.t)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{i.A.delete({endpoint:`/api/v1/dataset/?q=${u().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{K(),t(e.message)}),(0,p.JF)((t=>e((0,l.t)("There was an issue deleting the selected datasets: %s",t)))))}},(a=>{const s=[];return ue&&s.push({key:"delete",name:(0,l.t)("Delete"),onSelect:a,type:"danger"}),me&&s.push({key:"export",name:(0,l.t)("Export"),type:"primary",onSelect:be}),(0,H.Y)(f.A,{className:"dataset-list-view",columns:fe,data:w,count:c,pageSize:C.md,fetchData:F,filters:ve,loading:n,initialSort:ge,bulkActions:s,bulkSelectEnabled:D,disableBulkSelect:L,addDangerToast:e,addSuccessToast:t,refreshData:K,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,l.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,l.t)("%s Selected (Physical)",e.length,a):(0,l.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,l.t)("0 Selected")}})})),(0,H.Y)(P.A,{resourceName:"dataset",resourceLabel:(0,l.t)("dataset"),passwordsNeededMessage:C.ry,confirmOverwriteMessage:C.R6,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{Q(!1),K(),t((0,l.t)("Dataset imported"))},show:X,onHide:()=>{Q(!1)},passwordFields:Z,setPasswordFields:ee,sshTunnelPasswordFields:se,setSSHTunnelPasswordFields:ne,sshTunnelPrivateKeyFields:le,setSSHTunnelPrivateKeyFields:ie,sshTunnelPrivateKeyPasswordFields:re,setSSHTunnelPrivateKeyPasswordFields:oe}),te&&(0,H.Y)(v.A,null))}))},25106:(e,t,a)=>{function s(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{A:()=>s})}}]);
//# sourceMappingURL=edab5ee3f78362ed2352.chunk.js.map