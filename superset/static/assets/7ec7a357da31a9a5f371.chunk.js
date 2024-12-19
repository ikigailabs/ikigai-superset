"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9019],{12397:(e,t,a)=>{a.d(t,{U:()=>r}),a(96540);var n=a(19129),o=a(25106),l=a(95579),i=a(17437);const r=({user:e,date:t})=>{const a=(0,i.Y)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,o.A)(e),r=(0,l.t)("Modified by: %s",t);return(0,i.Y)(n.m,{title:r,placement:"bottom"},a)}return a}},83691:(e,t,a)=>{a.d(t,{A:()=>d}),a(96540);var n=a(90017),o=a(19129),l=a(12249),i=a(17437);const r=n.A.span`
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
`,s=n.A.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,i.Y)(r,{className:"actions"},e.map(((e,t)=>{const a=l.A[e.icon];return e.tooltip?(0,i.Y)(o.m,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,i.Y)(s,{role:"button",tabIndex:0,className:"action-button","data-test":e.label,onClick:e.onClick},(0,i.Y)(a,null))):(0,i.Y)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,"data-test":e.label,key:t},(0,i.Y)(a,null))})))}},1761:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(96540),o=a(58561),l=a.n(o),i=a(95579),r=a(35742),s=a(56347),d=a(54625),c=a(50500),u=a(30703),m=a(5261),h=a(51713),p=a(83691),y=a(39854),g=a(37020),b=a(63358),f=a(90017),A=a(12249),Y=a(85861),w=a(17437);const x=f.A.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,v=f.A.div`
  margin-bottom: ${({theme:e})=>10*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    width: 50%;
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    width: 100%;
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,k=(0,m.Ay)((({addDangerToast:e,addSuccessToast:t,onLayerAdd:a,onHide:o,show:l,layer:r=null})=>{const[s,d]=(0,n.useState)(!0),[m,h]=(0,n.useState)(),[p,y]=(0,n.useState)(!0),g=null!==r,{state:{loading:b,resource:f},fetchResource:k,createResource:C,updateResource:S}=(0,c.fn)("annotation_layer",(0,i.t)("annotation_layer"),e),$=()=>{h({name:"",descr:""})},_=()=>{y(!0),$(),o()},N=e=>{const{target:t}=e,a={...m,name:m?m.name:"",descr:m?m.descr:""};a[t.name]=t.value,h(a)};return(0,n.useEffect)((()=>{if(g&&(null==m||!m.id||r&&r.id!==m.id||p&&l)){if(l&&r&&null!==r.id&&!b){const e=r.id||0;k(e)}}else!g&&(!m||m.id||p&&l)&&$()}),[r,l]),(0,n.useEffect)((()=>{f&&h(f)}),[f]),(0,n.useEffect)((()=>{var e;null!=m&&null!=(e=m.name)&&e.length?d(!1):d(!0)}),[m?m.name:"",m?m.descr:""]),p&&l&&y(!1),(0,w.Y)(Y.A,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(g){if(null!=m&&m.id){const e=m.id;delete m.id,delete m.created_by,S(e,m).then((e=>{e&&(_(),t((0,i.t)("Annotation template updated")))}))}}else m&&C(m).then((e=>{e&&(a&&a(e),_(),t((0,i.t)("Annotation template created")))}))},onHide:_,primaryButtonName:g?(0,i.t)("Save"):(0,i.t)("Add"),show:l,width:"55%",title:(0,w.Y)("h4",{"data-test":"annotation-layer-modal-title"},g?(0,w.Y)(A.A.EditAlt,{css:u.vE}):(0,w.Y)(A.A.PlusLarge,{css:u.vE}),g?(0,i.t)("Edit annotation layer properties"):(0,i.t)("Add annotation layer"))},(0,w.Y)(x,null,(0,w.Y)("h4",null,(0,i.t)("Basic information"))),(0,w.Y)(v,null,(0,w.Y)("div",{className:"control-label"},(0,i.t)("Annotation layer name"),(0,w.Y)("span",{className:"required"},"*")),(0,w.Y)("input",{name:"name",onChange:N,type:"text",value:null==m?void 0:m.name})),(0,w.Y)(v,null,(0,w.Y)("div",{className:"control-label"},(0,i.t)("description")),(0,w.Y)("textarea",{name:"descr",value:null==m?void 0:m.descr,placeholder:(0,i.t)("Description (this can be seen in the list)"),onChange:N})))}));var C=a(12397),S=a(23193);const $=(0,m.Ay)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:o,resourceCount:m,resourceCollection:f,bulkSelectEnabled:A},hasPerm:Y,fetchData:x,refreshData:v,toggleBulkSelect:$}=(0,c.RU)("annotation_layer",(0,i.t)("Annotation layers"),e),[_,N]=(0,n.useState)(!1),[D,T]=(0,n.useState)(null),[H,E]=(0,n.useState)(null),U=Y("can_write"),B=Y("can_write"),F=Y("can_write");function L(e){T(e),N(!0)}const z=[{id:"name",desc:!0}],P=(0,n.useMemo)((()=>[{accessor:"name",Header:(0,i.t)("Name"),Cell:({row:{original:{id:e,name:t}}})=>{let a=!0;try{(0,s.W6)()}catch(e){a=!1}return a?(0,w.Y)(d.N_,{to:`/annotationlayer/${e}/annotation`},t):(0,w.Y)("a",{href:`/annotationlayer/${e}/annotation`},t)}},{accessor:"descr",Header:(0,i.t)("Description")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,w.Y)(C.U,{date:e,user:t}),Header:(0,i.t)("Last modified"),accessor:"changed_on",size:"xl"},{Cell:({row:{original:e}})=>{const t=[B?{label:"edit-action",tooltip:(0,i.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>L(e)}:null,F?{label:"delete-action",tooltip:(0,i.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>E(e)}:null].filter((e=>!!e));return(0,w.Y)(p.A,{actions:t})},Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!B&&!F,size:"xl"},{accessor:S.H.ChangedBy,hidden:!0}]),[F,U]),R=[];U&&R.push({name:(0,w.Y)(n.Fragment,null,(0,w.Y)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation layer")),buttonStyle:"primary",onClick:()=>{L(null)}}),F&&R.push({name:(0,i.t)("Bulk select"),onClick:$,buttonStyle:"secondary"});const M=(0,n.useMemo)((()=>[{Header:(0,i.t)("Name"),key:"search",id:"name",input:"search",operator:y.t.Contains},{Header:(0,i.t)("Changed by"),key:"changed_by",id:"changed_by",input:"select",operator:y.t.RelationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,u.u1)("annotation_layer","changed_by",(0,u.JF)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[]),q={title:(0,i.t)("No annotation layers yet"),image:"filter-results.svg",buttonAction:()=>L(null),buttonText:(0,w.Y)(n.Fragment,null,(0,w.Y)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation layer"))};return(0,w.Y)(n.Fragment,null,(0,w.Y)(h.A,{name:(0,i.t)("Annotation layers"),buttons:R}),(0,w.Y)(k,{addDangerToast:e,layer:D,onLayerAdd:e=>{window.location.href=`/annotationlayer/${e}/annotation`},onHide:()=>{v(),N(!1)},show:_}),H&&(0,w.Y)(g.A,{description:(0,i.t)("This action will permanently delete the layer."),onConfirm:()=>{H&&(({id:a,name:n})=>{r.A.delete({endpoint:`/api/v1/annotation_layer/${a}`}).then((()=>{v(),E(null),t((0,i.t)("Deleted: %s",n))}),(0,u.JF)((t=>e((0,i.t)("There was an issue deleting %s: %s",n,t)))))})(H)},onHide:()=>E(null),open:!0,title:(0,i.t)("Delete Layer?")}),(0,w.Y)(b.A,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected layers?"),onConfirm:a=>{r.A.delete({endpoint:`/api/v1/annotation_layer/?q=${l().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{v(),t(e.message)}),(0,u.JF)((t=>e((0,i.t)("There was an issue deleting the selected layers: %s",t)))))}},(a=>{const n=F?[{key:"delete",name:(0,i.t)("Delete"),onSelect:a,type:"danger"}]:[];return(0,w.Y)(y.A,{className:"annotation-layers-list-view",columns:P,count:m,data:f,fetchData:x,filters:M,initialSort:z,loading:o,pageSize:25,bulkActions:n,bulkSelectEnabled:A,disableBulkSelect:$,addDangerToast:e,addSuccessToast:t,emptyState:q,refreshData:v})})))}))},25106:(e,t,a)=>{function n(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{A:()=>n})}}]);
//# sourceMappingURL=7ec7a357da31a9a5f371.chunk.js.map