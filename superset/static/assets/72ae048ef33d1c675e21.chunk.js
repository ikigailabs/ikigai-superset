"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5458],{12397:(e,t,a)=>{a.d(t,{U:()=>o}),a(96540);var l=a(19129),n=a(25106),s=a(95579),i=a(17437);const o=({user:e,date:t})=>{const a=(0,i.Y)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,n.A)(e),o=(0,s.t)("Modified by: %s",t);return(0,i.Y)(l.m,{title:o,placement:"bottom"},a)}return a}},83691:(e,t,a)=>{a.d(t,{A:()=>r}),a(96540);var l=a(90017),n=a(19129),s=a(12249),i=a(17437);const o=l.A.span`
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
`,d=l.A.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function r({actions:e}){return(0,i.Y)(o,{className:"actions"},e.map(((e,t)=>{const a=s.A[e.icon];return e.tooltip?(0,i.Y)(n.m,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,i.Y)(d,{role:"button",tabIndex:0,className:"action-button","data-test":e.label,onClick:e.onClick},(0,i.Y)(a,null))):(0,i.Y)(d,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,"data-test":e.label,key:t},(0,i.Y)(a,null))})))}},90864:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var l=a(96540),n=a(95579),s=a(35742),i=a(58561),o=a.n(i),d=a(50500),r=a(30703),c=a(5261),m=a(51713),u=a(37020),p=a(63358),h=a(83691),g=a(39854),b=a(90017),f=a(12249),_=a(85861),y=a(41154),A=a(17437);const Y=b.A.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,S=(0,b.A)(y.rN)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`,C=b.A.div`
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
`,v=(0,c.Ay)((({addDangerToast:e,onCssTemplateAdd:t,onHide:a,show:s,cssTemplate:i=null})=>{const[o,c]=(0,l.useState)(!0),[m,u]=(0,l.useState)(null),[p,h]=(0,l.useState)(!0),g=null!==i,{state:{loading:b,resource:y},fetchResource:v,createResource:k,updateResource:w}=(0,d.fn)("css_template",(0,n.t)("css_template"),e),x=()=>{h(!0),a()};return(0,l.useEffect)((()=>{if(g&&(null==m||!m.id||i&&(null==i?void 0:i.id)!==m.id||p&&s)){if(null!==(null==i?void 0:i.id)&&!b){const e=i.id||0;v(e)}}else!g&&(!m||m.id||p&&s)&&u({template_name:"",css:""})}),[i]),(0,l.useEffect)((()=>{y&&u(y)}),[y]),(0,l.useEffect)((()=>{var e;null!=m&&m.template_name.length&&null!=m&&null!=(e=m.css)&&e.length?c(!1):c(!0)}),[m?m.template_name:"",m?m.css:""]),p&&s&&h(!1),(0,A.Y)(_.A,{disablePrimaryButton:o,onHandledPrimaryAction:()=>{if(g){if(null!=m&&m.id){const e=m.id;delete m.id,delete m.created_by,delete m.changed_by,delete m.changed_on_delta_humanized,w(e,m).then((e=>{e&&(t&&t(),x())}))}}else m&&k(m).then((e=>{e&&(t&&t(),x())}))},onHide:x,primaryButtonName:g?(0,n.t)("Save"):(0,n.t)("Add"),show:s,width:"55%",title:(0,A.Y)("h4",{"data-test":"css-template-modal-title"},g?(0,A.Y)(f.A.EditAlt,{css:r.vE}):(0,A.Y)(f.A.PlusLarge,{css:r.vE}),g?(0,n.t)("Edit CSS template properties"):(0,n.t)("Add CSS template"))},(0,A.Y)(Y,null,(0,A.Y)("h4",null,(0,n.t)("Basic information"))),(0,A.Y)(C,null,(0,A.Y)("div",{className:"control-label"},(0,n.t)("Name"),(0,A.Y)("span",{className:"required"},"*")),(0,A.Y)("input",{name:"template_name",onChange:e=>{const{target:t}=e,a={...m,template_name:m?m.template_name:"",css:m?m.css:""};a[t.name]=t.value,u(a)},type:"text",value:null==m?void 0:m.template_name})),(0,A.Y)(C,null,(0,A.Y)("div",{className:"control-label"},(0,n.t)("css"),(0,A.Y)("span",{className:"required"},"*")),(0,A.Y)(S,{onChange:e=>{const t={...m,template_name:m?m.template_name:"",css:e};u(t)},value:null==m?void 0:m.css,width:"100%"})))}));var k=a(12397),w=a(23193);const x=(0,c.Ay)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:i,resourceCount:c,resourceCollection:b,bulkSelectEnabled:f},hasPerm:_,fetchData:y,refreshData:Y,toggleBulkSelect:S}=(0,d.RU)("css_template",(0,n.t)("CSS templates"),e),[C,x]=(0,l.useState)(!1),[$,T]=(0,l.useState)(null),N=_("can_write"),D=_("can_write"),E=_("can_write"),[H,U]=(0,l.useState)(null),B=[{id:"template_name",desc:!0}],z=(0,l.useMemo)((()=>[{accessor:"template_name",Header:(0,n.t)("Name")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,A.Y)(k.U,{date:e,user:t}),Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=[D?{label:"edit-action",tooltip:(0,n.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>(T(e),void x(!0))}:null,E?{label:"delete-action",tooltip:(0,n.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>U(e)}:null].filter((e=>!!e));return(0,A.Y)(h.A,{actions:t})},Header:(0,n.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!D&&!E,size:"xl"},{accessor:w.H.ChangedBy,hidden:!0}]),[E,N]),R={name:(0,n.t)("CSS templates")},F=[];N&&F.push({name:(0,A.Y)(l.Fragment,null,(0,A.Y)("i",{className:"fa fa-plus"})," ",(0,n.t)("CSS template")),buttonStyle:"primary",onClick:()=>{T(null),x(!0)}}),E&&F.push({name:(0,n.t)("Bulk select"),onClick:S,buttonStyle:"secondary"}),R.buttons=F;const M=(0,l.useMemo)((()=>[{Header:(0,n.t)("Name"),key:"search",id:"template_name",input:"search",operator:g.t.Contains},{Header:(0,n.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:g.t.RelationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,r.u1)("css_template","changed_by",(0,r.JF)((e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[]);return(0,A.Y)(l.Fragment,null,(0,A.Y)(m.A,R),(0,A.Y)(v,{addDangerToast:e,cssTemplate:$,onCssTemplateAdd:()=>Y(),onHide:()=>x(!1),show:C}),H&&(0,A.Y)(u.A,{description:(0,n.t)("This action will permanently delete the template."),onConfirm:()=>{H&&(({id:a,template_name:l})=>{s.A.delete({endpoint:`/api/v1/css_template/${a}`}).then((()=>{Y(),U(null),t((0,n.t)("Deleted: %s",l))}),(0,r.JF)((t=>e((0,n.t)("There was an issue deleting %s: %s",l,t)))))})(H)},onHide:()=>U(null),open:!0,title:(0,n.t)("Delete Template?")}),(0,A.Y)(p.A,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected templates?"),onConfirm:a=>{s.A.delete({endpoint:`/api/v1/css_template/?q=${o().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{Y(),t(e.message)}),(0,r.JF)((t=>e((0,n.t)("There was an issue deleting the selected templates: %s",t)))))}},(a=>{const l=E?[{key:"delete",name:(0,n.t)("Delete"),onSelect:a,type:"danger"}]:[];return(0,A.Y)(g.A,{className:"css-templates-list-view",columns:z,count:c,data:b,fetchData:y,filters:M,initialSort:B,loading:i,pageSize:25,bulkActions:l,bulkSelectEnabled:f,disableBulkSelect:S,addDangerToast:e,addSuccessToast:t,refreshData:Y})})))}))},25106:(e,t,a)=>{function l(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{A:()=>l})}}]);
//# sourceMappingURL=72ae048ef33d1c675e21.chunk.js.map