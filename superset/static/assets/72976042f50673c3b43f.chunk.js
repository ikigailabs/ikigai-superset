"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4085],{54070:(e,t,a)=>{a.d(t,{w:()=>o}),a(67294);var l=a(58593),n=a(83379),s=a(61988),i=a(11965);const o=({user:e,date:t})=>{const a=(0,i.tZ)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,n.Z)(e),o=(0,s.t)("Modified by: %s",t);return(0,i.tZ)(l.u,{title:o,placement:"bottom"},a)}return a}},29848:(e,t,a)=>{a.d(t,{Z:()=>r}),a(67294);var l=a(42968),n=a(58593),s=a(13322),i=a(11965);const o=l.Z.span`
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
`,d=l.Z.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function r({actions:e}){return(0,i.tZ)(o,{className:"actions"},e.map(((e,t)=>{const a=s.Z[e.icon];return e.tooltip?(0,i.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,i.tZ)(d,{role:"button",tabIndex:0,className:"action-button","data-test":e.label,onClick:e.onClick},(0,i.tZ)(a,null))):(0,i.tZ)(d,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,"data-test":e.label,key:t},(0,i.tZ)(a,null))})))}},36942:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var l=a(67294),n=a(61988),s=a(31069),i=a(15926),o=a.n(i),d=a(34858),r=a(40768),c=a(14114),m=a(86074),u=a(17198),p=a(19259),h=a(29848),g=a(93139),b=a(42968),Z=a(13322),f=a(74069),_=a(94670),y=a(11965);const S=b.Z.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,v=(0,b.Z)(_.ry)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`,C=b.Z.div`
  margin-bottom: ${({theme:e})=>10*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    width: 50%;
  }
`,w=(0,c.ZP)((({addDangerToast:e,onCssTemplateAdd:t,onHide:a,show:s,cssTemplate:i=null})=>{const[o,c]=(0,l.useState)(!0),[m,u]=(0,l.useState)(null),[p,h]=(0,l.useState)(!0),g=null!==i,{state:{loading:b,resource:_},fetchResource:w,createResource:k,updateResource:$}=(0,d.LE)("css_template",(0,n.t)("css_template"),e),x=()=>{h(!0),a()};return(0,l.useEffect)((()=>{if(g&&(null==m||!m.id||i&&(null==i?void 0:i.id)!==m.id||p&&s)){if(null!==(null==i?void 0:i.id)&&!b){const e=i.id||0;w(e)}}else!g&&(!m||m.id||p&&s)&&u({template_name:"",css:""})}),[i]),(0,l.useEffect)((()=>{_&&u(_)}),[_]),(0,l.useEffect)((()=>{var e;null!=m&&m.template_name.length&&null!=m&&null!=(e=m.css)&&e.length?c(!1):c(!0)}),[m?m.template_name:"",m?m.css:""]),p&&s&&h(!1),(0,y.tZ)(f.default,{disablePrimaryButton:o,onHandledPrimaryAction:()=>{if(g){if(null!=m&&m.id){const e=m.id;delete m.id,delete m.created_by,delete m.changed_by,delete m.changed_on_delta_humanized,$(e,m).then((e=>{e&&(t&&t(),x())}))}}else m&&k(m).then((e=>{e&&(t&&t(),x())}))},onHide:x,primaryButtonName:g?(0,n.t)("Save"):(0,n.t)("Add"),show:s,width:"55%",title:(0,y.tZ)("h4",{"data-test":"css-template-modal-title"},g?(0,y.tZ)(Z.Z.EditAlt,{css:r.xL}):(0,y.tZ)(Z.Z.PlusLarge,{css:r.xL}),g?(0,n.t)("Edit CSS template properties"):(0,n.t)("Add CSS template"))},(0,y.tZ)(S,null,(0,y.tZ)("h4",null,(0,n.t)("Basic information"))),(0,y.tZ)(C,null,(0,y.tZ)("div",{className:"control-label"},(0,n.t)("Name"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("input",{name:"template_name",onChange:e=>{const{target:t}=e,a={...m,template_name:m?m.template_name:"",css:m?m.css:""};a[t.name]=t.value,u(a)},type:"text",value:null==m?void 0:m.template_name})),(0,y.tZ)(C,null,(0,y.tZ)("div",{className:"control-label"},(0,n.t)("css"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)(v,{onChange:e=>{const t={...m,template_name:m?m.template_name:"",css:e};u(t)},value:null==m?void 0:m.css,width:"100%"})))}));var k=a(54070),$=a(12);const x=(0,c.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:i,resourceCount:c,resourceCollection:b,bulkSelectEnabled:Z},hasPerm:f,fetchData:_,refreshData:S,toggleBulkSelect:v}=(0,d.Yi)("css_template",(0,n.t)("CSS templates"),e),[C,x]=(0,l.useState)(!1),[T,N]=(0,l.useState)(null),D=f("can_write"),A=f("can_write"),E=f("can_write"),[H,B]=(0,l.useState)(null),U=[{id:"template_name",desc:!0}],P=(0,l.useMemo)((()=>[{accessor:"template_name",Header:(0,n.t)("Name")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,y.tZ)(k.w,{date:e,user:t}),Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=[A?{label:"edit-action",tooltip:(0,n.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>(N(e),void x(!0))}:null,E?{label:"delete-action",tooltip:(0,n.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>B(e)}:null].filter((e=>!!e));return(0,y.tZ)(h.Z,{actions:t})},Header:(0,n.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!A&&!E,size:"xl"},{accessor:$.J.ChangedBy,hidden:!0}]),[E,D]),z={name:(0,n.t)("CSS templates")},L=[];D&&L.push({name:(0,y.tZ)(l.Fragment,null,(0,y.tZ)("i",{className:"fa fa-plus"})," ",(0,n.t)("CSS template")),buttonStyle:"primary",onClick:()=>{N(null),x(!0)}}),E&&L.push({name:(0,n.t)("Bulk select"),onClick:v,buttonStyle:"secondary"}),z.buttons=L;const M=(0,l.useMemo)((()=>[{Header:(0,n.t)("Name"),key:"search",id:"template_name",input:"search",operator:g.p.Contains},{Header:(0,n.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:g.p.RelationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,r.tm)("css_template","changed_by",(0,r.v$)((e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[]);return(0,y.tZ)(l.Fragment,null,(0,y.tZ)(m.Z,z),(0,y.tZ)(w,{addDangerToast:e,cssTemplate:T,onCssTemplateAdd:()=>S(),onHide:()=>x(!1),show:C}),H&&(0,y.tZ)(u.Z,{description:(0,n.t)("This action will permanently delete the template."),onConfirm:()=>{H&&(({id:a,template_name:l})=>{s.Z.delete({endpoint:`/api/v1/css_template/${a}`}).then((()=>{S(),B(null),t((0,n.t)("Deleted: %s",l))}),(0,r.v$)((t=>e((0,n.t)("There was an issue deleting %s: %s",l,t)))))})(H)},onHide:()=>B(null),open:!0,title:(0,n.t)("Delete Template?")}),(0,y.tZ)(p.Z,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected templates?"),onConfirm:a=>{s.Z.delete({endpoint:`/api/v1/css_template/?q=${o().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{S(),t(e.message)}),(0,r.v$)((t=>e((0,n.t)("There was an issue deleting the selected templates: %s",t)))))}},(a=>{const l=E?[{key:"delete",name:(0,n.t)("Delete"),onSelect:a,type:"danger"}]:[];return(0,y.tZ)(g.Z,{className:"css-templates-list-view",columns:P,count:c,data:b,fetchData:_,filters:M,initialSort:U,loading:i,pageSize:25,bulkActions:l,bulkSelectEnabled:Z,disableBulkSelect:v,addDangerToast:e,addSuccessToast:t,refreshData:S})})))}))},83379:(e,t,a)=>{function l(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>l})}}]);
//# sourceMappingURL=72976042f50673c3b43f.chunk.js.map