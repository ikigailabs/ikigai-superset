"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{54070:(e,t,a)=>{a.d(t,{w:()=>r}),a(67294);var s=a(58593),n=a(83379),l=a(61988),i=a(11965);const r=({user:e,date:t})=>{const a=(0,i.tZ)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,n.Z)(e),r=(0,l.t)("Modified by: %s",t);return(0,i.tZ)(s.u,{title:r,placement:"bottom"},a)}return a}},85931:(e,t,a)=>{a.d(t,{m:()=>r});var s=a(73126),n=(a(67294),a(73727)),l=a(23525),i=a(11965);const r=({to:e,component:t,replace:a,innerRef:r,children:o,...d})=>"string"==typeof e&&(0,l.TO)(e)?(0,i.tZ)("a",(0,s.Z)({"data-test":"external-link",href:(0,l.en)(e)},d),o):(0,i.tZ)(n.rU,(0,s.Z)({"data-test":"internal-link",to:e,component:t,replace:a,innerRef:r},d),o)},60972:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(67294),n=a(61988),l=a(34858),i=a(29487),r=a(11965);const o=(0,l.z)(),d=o?o.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:t})=>(0,r.tZ)(i.Z,{closable:!1,css:e=>(e=>r.iv`
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
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,r.tZ)(s.Fragment,null,(0,r.tZ)("br",null),(0,n.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,r.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,n.t)("here")),"."):""})},27989:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(67294),n=a(42968),l=a(61988),i=a(35932),r=a(74069),o=a(4715),d=a(34858),c=a(60972),u=a(11965);const p=n.Z.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,h=n.Z.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:n,onModelImport:m,show:g,onHide:y,passwordFields:Z=[],setPasswordFields:b=(()=>{}),sshTunnelPasswordFields:f=[],setSSHTunnelPasswordFields:v=(()=>{}),sshTunnelPrivateKeyFields:w=[],setSSHTunnelPrivateKeyFields:S=(()=>{}),sshTunnelPrivateKeyPasswordFields:_=[],setSSHTunnelPrivateKeyPasswordFields:x=(()=>{})})=>{const[$,k]=(0,s.useState)(!0),[P,T]=(0,s.useState)({}),[C,N]=(0,s.useState)(!1),[D,E]=(0,s.useState)(!1),[F,H]=(0,s.useState)([]),[I,U]=(0,s.useState)(!1),[A,R]=(0,s.useState)(),[B,z]=(0,s.useState)({}),[O,M]=(0,s.useState)({}),[L,q]=(0,s.useState)({}),V=()=>{H([]),b([]),T({}),N(!1),E(!1),U(!1),R(""),v([]),S([]),x([]),z({}),M({}),q({})},{state:{alreadyExists:K,passwordsNeeded:j,sshPasswordNeeded:W,sshPrivateKeyNeeded:Y,sshPrivateKeyPasswordNeeded:G},importResource:J}=(0,d.PW)(e,t,(e=>{R(e)}));(0,s.useEffect)((()=>{b(j),j.length>0&&U(!1)}),[j,b]),(0,s.useEffect)((()=>{N(K.length>0),K.length>0&&U(!1)}),[K,N]),(0,s.useEffect)((()=>{v(W),W.length>0&&U(!1)}),[W,v]),(0,s.useEffect)((()=>{S(Y),Y.length>0&&U(!1)}),[Y,S]),(0,s.useEffect)((()=>{x(G),G.length>0&&U(!1)}),[G,x]);return $&&g&&k(!1),(0,u.tZ)(r.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===F.length||C&&!D||I,onHandledPrimaryAction:()=>{var e;(null==(e=F[0])?void 0:e.originFileObj)instanceof File&&(U(!0),J(F[0].originFileObj,P,B,O,L,D).then((e=>{e&&(V(),m())})))},onHide:()=>{k(!0),y(),V()},primaryButtonName:C?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:g,title:(0,u.tZ)("h4",null,(0,l.t)("Import %s",t))},(0,u.tZ)(h,null,(0,u.tZ)(o.gq,{name:"modelFile",id:"modelFile","data-test":"model-file-input",accept:".yaml,.json,.yml,.zip",fileList:F,onChange:e=>{H([{...e.file,status:"done"}])},onRemove:e=>(H(F.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:I},(0,u.tZ)(i.Z,{loading:I},(0,l.t)("Select file")))),A&&(0,u.tZ)(c.Z,{errorMessage:A,showDbInstallInstructions:Z.length>0||f.length>0||w.length>0||_.length>0}),(()=>{if(0===Z.length&&0===f.length&&0===w.length&&0===_.length)return null;const e=[...new Set([...Z,...f,...w,..._])];return(0,u.tZ)(s.Fragment,null,(0,u.tZ)("h5",null,(0,l.t)("Database passwords")),(0,u.tZ)(p,null,a),e.map((e=>(0,u.tZ)(s.Fragment,null,(null==Z?void 0:Z.indexOf(e))>=0&&(0,u.tZ)(h,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,l.t)("%s PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:P[e],onChange:t=>T({...P,[e]:t.target.value})})),(null==f?void 0:f.indexOf(e))>=0&&(0,u.tZ)(h,{key:`ssh_tunnel_password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:B[e],onChange:t=>z({...B,[e]:t.target.value}),"data-test":"ssh_tunnel_password"})),(null==w?void 0:w.indexOf(e))>=0&&(0,u.tZ)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:O[e],onChange:t=>M({...O,[e]:t.target.value}),"data-test":"ssh_tunnel_private_key"})),(null==_?void 0:_.indexOf(e))>=0&&(0,u.tZ)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:L[e],onChange:t=>q({...L,[e]:t.target.value}),"data-test":"ssh_tunnel_private_key_password"}))))))})(),C?(0,u.tZ)(s.Fragment,null,(0,u.tZ)(h,null,(0,u.tZ)("div",{className:"confirm-overwrite"},n),(0,u.tZ)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,u.tZ)("input",{"data-test":"overwrite-modal-input",id:"overwrite",type:"text",onChange:e=>{var t,a;const s=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(s.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},46977:(e,t,a)=>{a.d(t,{Z:()=>f,u:()=>s});var s,n=a(73126),l=a(18446),i=a.n(l),r=a(67294),o=a(42968),d=a(61988),c=a(79521),u=a(4715),p=a(64158),h=a(97754),m=a(11965);!function(e){e.Default="Default",e.Small="Small"}(s||(s={}));const g=o.Z.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,y=o.Z.div`
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
`,Z=o.Z.div`
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
`,b=({columns:e,data:t,pageSize:a,totalCount:l=t.length,initialPageIndex:o,initialSortBy:b=[],loading:f=!1,withPagination:v=!0,emptyWrapperType:w=s.Default,noDataText:S,showRowCount:_=!0,serverPagination:x=!1,columnsForWrapText:$,onServerPagination:k=(()=>{}),scrollTopOnPagination:P=!1,...T})=>{const C={pageSize:null!=a?a:10,pageIndex:null!=o?o:0,sortBy:b},{getTableProps:N,getTableBodyProps:D,headerGroups:E,page:F,rows:H,prepareRow:I,pageCount:U,gotoPage:A,state:{pageIndex:R,pageSize:B,sortBy:z}}=(0,c.useTable)({columns:e,data:t,initialState:C,manualPagination:x,manualSortBy:x,pageCount:Math.ceil(l/C.pageSize)},c.useFilters,c.useSortBy,c.usePagination),O=v?F:H;let M;switch(w){case s.Small:M=({children:e})=>(0,m.tZ)(r.Fragment,null,e);break;case s.Default:default:M=({children:e})=>(0,m.tZ)(g,null,e)}const L=!f&&0===O.length,q=U>1&&v,V=(0,r.useRef)(null);return(0,r.useEffect)((()=>{x&&R!==C.pageIndex&&k({pageIndex:R})}),[R]),(0,r.useEffect)((()=>{x&&!i()(z,C.sortBy)&&k({pageIndex:0,sortBy:z})}),[z]),(0,m.tZ)(r.Fragment,null,(0,m.tZ)(y,(0,n.Z)({},T,{ref:V}),(0,m.tZ)(h.Z,{getTableProps:N,getTableBodyProps:D,prepareRow:I,headerGroups:E,rows:O,columns:e,loading:f,columnsForWrapText:$}),L&&(0,m.tZ)(M,null,S?(0,m.tZ)(u.HY,{image:u.HY.PRESENTED_IMAGE_SIMPLE,description:S}):(0,m.tZ)(u.HY,{image:u.HY.PRESENTED_IMAGE_SIMPLE}))),q&&(0,m.tZ)(Z,{className:"pagination-container",isPaginationSticky:T.isPaginationSticky},(0,m.tZ)(p.Z,{totalPages:U||0,currentPage:U?R+1:0,onChange:e=>(e=>{var t;P&&(null==V||null==(t=V.current)||t.scroll(0,0)),A(e)})(e-1),hideFirstAndLastPageLinks:!0}),_&&(0,m.tZ)("div",{className:"row-count-container"},!f&&(0,d.t)("%s-%s of %s",B*R+(F.length&&1),B*R+F.length,l))))},f=r.memo(b)},76962:(e,t,a)=>{a.d(t,{Z:()=>s.Z,u:()=>s.u});var s=a(46977)},52438:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var s=a(75049),n=a(42968),l=a(61988),i=a(31069),r=a(67294),o=a(16550),d=a(73727),c=a(15926),u=a.n(c),p=a(40768),h=a(34858),m=a(19259),g=a(77775),y=a(17198),Z=a(32228),b=a(93139),f=a(38703),v=a(86074),w=a(14114),S=a(58593),_=a(13322),x=a(34581),$=a(79789),k=a(8272),P=a(27989),T=a(86057),C=a(22318),N=a(85931),D=a(33228),E=a(49238),F=a(9875),H=a(74069),I=a(11965);const U=({dataset:e,onHide:t,onDuplicate:a})=>{const[s,n]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1),[d,c]=(0,r.useState)(""),u=()=>{a(d)};return(0,r.useEffect)((()=>{c(""),n(null!==e)}),[e]),(0,I.tZ)(H.default,{show:s,onHide:t,title:(0,l.t)("Duplicate dataset"),disablePrimaryButton:i,onHandledPrimaryAction:u,primaryButtonName:(0,l.t)("Duplicate")},(0,I.tZ)(E.lX,{htmlFor:"duplicate"},(0,l.t)("New dataset name")),(0,I.tZ)(F.II,{"data-test":"duplicate-modal-input",type:"text",id:"duplicate",autoComplete:"off",value:d,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";c(a),o(""===a)},onPressEnter:u}))};var A=a(28216),R=a(54070),B=a(12);const z=(0,s.I)().get("dataset.delete.related"),O=n.Z.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,M=n.Z.div`
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
`,L=(0,w.ZP)((({addDangerToast:e,addSuccessToast:t,user:a})=>{const s=(0,o.k6)(),{state:{loading:n,resourceCount:c,resourceCollection:w,bulkSelectEnabled:E},hasPerm:F,fetchData:H,toggleBulkSelect:L,refreshData:q}=(0,h.Yi)("dataset",(0,l.t)("dataset"),e),[V,K]=(0,r.useState)(null),[j,W]=(0,r.useState)(null),[Y,G]=(0,r.useState)(null),[J,X]=(0,r.useState)(!1),[Q,ee]=(0,r.useState)([]),[te,ae]=(0,r.useState)(!1),[se,ne]=(0,r.useState)([]),[le,ie]=(0,r.useState)([]),[re,oe]=(0,r.useState)([]),de=(0,A.v9)((e=>{var t,a;return(null==(t=e.common)||null==(a=t.conf)?void 0:a.PREVENT_UNSAFE_DEFAULT_URLS_ON_DATASET)||!1})),ce=F("can_write"),ue=F("can_write"),pe=F("can_write"),he=F("can_duplicate"),me=F("can_export"),ge=D.dY,ye=(0,r.useCallback)((({id:t})=>{i.Z.get({endpoint:`/api/v1/dataset/${t}`}).then((({json:e={}})=>{const t=e.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));e.result.columns=[...t],W(e.result)})).catch((()=>{e((0,l.t)("An error occurred while fetching dataset related data"))}))}),[e]),Ze=e=>{const t=e.map((({id:e})=>e));(0,Z.Z)("dataset",t,(()=>{ae(!1)})),ae(!0)},be=(0,r.useMemo)((()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,I.tZ)(S.u,{id:"physical-dataset-tooltip",title:(0,l.t)("Physical dataset")},(0,I.tZ)(_.Z.DatasetPhysical,null)):(0,I.tZ)(S.u,{id:"virtual-dataset-tooltip",title:(0,l.t)("Virtual dataset")},(0,I.tZ)(_.Z.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:({row:{original:{extra:e,table_name:t,description:a,explore_url:s}}})=>{let n;n=de?(0,I.tZ)(d.rU,{"data-test":"internal-link",to:s},t):(0,I.tZ)(N.m,{to:s},t);try{const t=JSON.parse(e);return(0,I.tZ)(O,null,(null==t?void 0:t.certification)&&(0,I.tZ)($.Z,{certifiedBy:t.certification.certified_by,details:t.certification.details,size:"l"}),(null==t?void 0:t.warning_markdown)&&(0,I.tZ)(T.Z,{warningMarkdown:t.warning_markdown,size:"l"}),n,a&&(0,I.tZ)(k.Z,{tooltip:a}))}catch{return n}},Header:(0,l.t)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,l.t)("Physical"):(0,l.t)("Virtual"),Header:(0,l.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,l.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,l.t)("Schema"),accessor:"schema",size:"lg"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>(0,I.tZ)(x.Z,{users:e}),Header:(0,l.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,I.tZ)(R.w,{date:e,user:t}),Header:(0,l.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=e.owners.map((e=>e.id)).includes(a.userId)||(0,C.i5)(a);return ce||ue||me||he?(0,I.tZ)(M,{className:"actions"},ue&&(0,I.tZ)(S.u,{id:"delete-action-tooltip",title:(0,l.t)("Delete"),placement:"bottom"},(0,I.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,i.Z.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then((({json:e={}})=>{K({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})})).catch((0,p.v$)((e=>(0,l.t)("An error occurred while fetching dataset related data: %s",e))));var t}},(0,I.tZ)(_.Z.Trash,null))),me&&(0,I.tZ)(S.u,{id:"export-action-tooltip",title:(0,l.t)("Export"),placement:"bottom"},(0,I.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Ze([e])},(0,I.tZ)(_.Z.Share,null))),ce&&(0,I.tZ)(S.u,{id:"edit-action-tooltip",title:t?(0,l.t)("Edit"):(0,l.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,I.tZ)("span",{role:"button",tabIndex:0,className:t?"action-button":"disabled",onClick:t?()=>ye(e):void 0},(0,I.tZ)(_.Z.EditAlt,null))),he&&"virtual"===e.kind&&(0,I.tZ)(S.u,{id:"duplicate-action-tooltop",title:(0,l.t)("Duplicate"),placement:"bottom"},(0,I.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{G(e)}},(0,I.tZ)(_.Z.Copy,null)))):null},Header:(0,l.t)("Actions"),id:"actions",hidden:!ce&&!ue&&!he,disableSortBy:!0},{accessor:B.J.ChangedBy,hidden:!0}]),[ce,ue,me,ye,he,a]),fe=(0,r.useMemo)((()=>[{Header:(0,l.t)("Name"),key:"search",id:"table_name",input:"search",operator:b.p.Contains},{Header:(0,l.t)("Type"),key:"sql",id:"sql",input:"select",operator:b.p.DatasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:(0,l.t)("Virtual"),value:!1},{label:(0,l.t)("Physical"),value:!0}]},{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:b.p.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.tm)("dataset","database",(0,p.v$)((e=>(0,l.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,l.t)("Schema"),key:"schema",id:"schema",input:"select",operator:b.p.Equals,unfilteredLabel:"All",fetchSelects:(0,p.wk)("dataset","schema",(0,p.v$)((e=>(0,l.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,l.t)("Owner"),key:"owner",id:"owners",input:"select",operator:b.p.RelationManyMany,unfilteredLabel:"All",fetchSelects:(0,p.tm)("dataset","owners",(0,p.v$)((e=>(0,l.t)("An error occurred while fetching dataset owner values: %s",e))),a),paginate:!0},{Header:(0,l.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:b.p.DatasetIsCertified,unfilteredLabel:(0,l.t)("Any"),selects:[{label:(0,l.t)("Yes"),value:!0},{label:(0,l.t)("No"),value:!1}]},{Header:(0,l.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:b.p.RelationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,p.tm)("dataset","changed_by",(0,p.v$)((e=>(0,l.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[a]),ve={activeChild:"Datasets",name:(0,l.t)("Datasets")},we=[];return(ue||me)&&we.push({name:(0,l.t)("Bulk select"),onClick:L,buttonStyle:"secondary"}),pe&&(we.push({name:(0,I.tZ)(r.Fragment,null,(0,I.tZ)("i",{className:"fa fa-plus"})," ",(0,l.t)("Dataset")," "),onClick:()=>{s.push("/dataset/add/")},buttonStyle:"primary"}),we.push({name:(0,I.tZ)(S.u,{id:"import-tooltip",title:(0,l.t)("Import datasets"),placement:"bottomRight"},(0,I.tZ)(_.Z.Import,{"data-test":"import-button"})),buttonStyle:"link",onClick:()=>{X(!0)}})),ve.buttons=we,(0,I.tZ)(r.Fragment,null,(0,I.tZ)(v.Z,ve),V&&(0,I.tZ)(y.Z,{description:(0,I.tZ)(r.Fragment,null,(0,I.tZ)("p",null,(0,l.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",V.table_name,V.chart_count,V.dashboard_count)),z&&(0,I.tZ)(z,{dataset:V})),onConfirm:()=>{V&&(({id:a,table_name:s})=>{i.Z.delete({endpoint:`/api/v1/dataset/${a}`}).then((()=>{q(),K(null),t((0,l.t)("Deleted: %s",s))}),(0,p.v$)((t=>e((0,l.t)("There was an issue deleting %s: %s",s,t)))))})(V)},onHide:()=>{K(null)},open:!0,title:(0,l.t)("Delete Dataset?")}),j&&(0,I.tZ)(g.W,{datasource:j,onDatasourceSave:q,onHide:()=>{W(null)},show:!0}),(0,I.tZ)(U,{dataset:Y,onHide:()=>{G(null)},onDuplicate:t=>{null===Y&&e((0,l.t)("There was an issue duplicating the dataset.")),i.Z.post({endpoint:"/api/v1/dataset/duplicate",jsonPayload:{base_model_id:null==Y?void 0:Y.id,table_name:t}}).then((()=>{G(null),q()}),(0,p.v$)((t=>e((0,l.t)("There was an issue duplicating the selected datasets: %s",t)))))}}),(0,I.tZ)(m.Z,{title:(0,l.t)("Please confirm"),description:(0,l.t)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{i.Z.delete({endpoint:`/api/v1/dataset/?q=${u().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{q(),t(e.message)}),(0,p.v$)((t=>e((0,l.t)("There was an issue deleting the selected datasets: %s",t)))))}},(a=>{const s=[];return ue&&s.push({key:"delete",name:(0,l.t)("Delete"),onSelect:a,type:"danger"}),me&&s.push({key:"export",name:(0,l.t)("Export"),type:"primary",onSelect:Ze}),(0,I.tZ)(b.Z,{className:"dataset-list-view",columns:be,data:w,count:c,pageSize:D.IV,fetchData:H,filters:fe,loading:n,initialSort:ge,bulkActions:s,bulkSelectEnabled:E,disableBulkSelect:L,addDangerToast:e,addSuccessToast:t,refreshData:q,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,l.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,l.t)("%s Selected (Physical)",e.length,a):(0,l.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,l.t)("0 Selected")}})})),(0,I.tZ)(P.Z,{resourceName:"dataset",resourceLabel:(0,l.t)("dataset"),passwordsNeededMessage:D.iX,confirmOverwriteMessage:D.mI,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{X(!1),q(),t((0,l.t)("Dataset imported"))},show:J,onHide:()=>{X(!1)},passwordFields:Q,setPasswordFields:ee,sshTunnelPasswordFields:se,setSSHTunnelPasswordFields:ne,sshTunnelPrivateKeyFields:le,setSSHTunnelPrivateKeyFields:ie,sshTunnelPrivateKeyPasswordFields:re,setSSHTunnelPrivateKeyPasswordFields:oe}),te&&(0,I.tZ)(f.Z,null))}))},83379:(e,t,a)=>{function s(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>s})}}]);
//# sourceMappingURL=475669bd382e938e1391.chunk.js.map