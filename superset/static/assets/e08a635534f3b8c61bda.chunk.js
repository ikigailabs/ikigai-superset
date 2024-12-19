"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7177],{54070:(e,t,a)=>{a.d(t,{w:()=>r}),a(67294);var l=a(58593),s=a(83379),n=a(61988),i=a(11965);const r=({user:e,date:t})=>{const a=(0,i.tZ)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,s.Z)(e),r=(0,n.t)("Modified by: %s",t);return(0,i.tZ)(l.u,{title:r,placement:"bottom"},a)}return a}},6065:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var l=a(42968),s=a(61988),n=a(31069),i=a(67294),r=a(19259),o=a(13322),u=a(93139),d=a(14114),c=a(58593),p=a(86074),h=a(15926),m=a.n(h),g=a(34858),f=a(11965),b=a(74069),y=a(81315),Z=a(9875),v=a(84101),w=a(49238),k=a(8272);const x=[{label:(0,s.t)("Regular"),value:"Regular"},{label:(0,s.t)("Base"),value:"Base"}];var _;!function(e){e.Regular="Regular",e.Base="Base"}(_||(_={}));const T=f.iv`
  margin: 0;

  .ant-input {
    margin: 0;
  }
`,R=(0,l.Z)(b.default)`
  max-width: 1200px;
  min-width: min-content;
  width: 100%;
  .ant-modal-footer {
    white-space: nowrap;
  }
  .ant-modal-footer {
    white-space: nowrap;
  }
`,N=e=>f.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,S=l.Z.div`
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>`${3*e.gridUnit}px ${4*e.gridUnit}px ${2*e.gridUnit}px`};

  label,
  .control-label {
    display: inline-block;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
    vertical-align: middle;
  }

  .info-solid-small {
    vertical-align: middle;
    padding-bottom: ${({theme:e})=>e.gridUnit/2}px;
  }
`,$=l.Z.div`
  display: flex;
  flex-direction: column;
  margin: ${({theme:e})=>e.gridUnit}px;
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;

  .input-container {
    display: flex;
    align-items: center;

    > div {
      width: 100%;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }
`,C=(0,l.Z)(Z.Kx)`
  resize: none;
  margin-top: ${({theme:e})=>e.gridUnit}px;
`,E={name:"",filter_type:_.Regular,tables:[],roles:[],clause:"",group_key:"",description:""},A=function(e){const{rule:t,addDangerToast:a,addSuccessToast:l,onHide:r,show:u}=e,[d,c]=(0,i.useState)({...E}),[p,h]=(0,i.useState)(!0),b=null!==t,{state:{loading:Z,resource:A,error:D},fetchResource:F,createResource:H,updateResource:B,clearError:q}=(0,g.LE)("rowlevelsecurity",(0,s.t)("rowlevelsecurity"),a),z=(e,t)=>{c((a=>({...a,[e]:t})))},L=(0,i.useCallback)((()=>{var e,t;if(!A)return null;const a=[],l=[];return null==(e=A.tables)||e.forEach((e=>{a.push({key:e.id,label:e.schema?`${e.schema}.${e.table_name}`:e.table_name,value:e.id})})),null==(t=A.roles)||t.forEach((e=>{l.push({key:e.id,label:e.name,value:e.id})})),{tables:a,roles:l}}),[null==A?void 0:A.tables,null==A?void 0:A.roles]);(0,i.useEffect)((()=>{b?null===(null==t?void 0:t.id)||Z||D||F(t.id):c({...E})}),[t]),(0,i.useEffect)((()=>{if(A){c({...A,id:null==t?void 0:t.id});const e=L();z("tables",(null==e?void 0:e.tables)||[]),z("roles",(null==e?void 0:e.roles)||[])}}),[A]);const M=d||{};(0,i.useEffect)((()=>{var e;null!=d&&d.name&&null!=d&&d.clause&&null!=(e=d.tables)&&e.length?h(!1):h(!0)}),[M.name,M.clause,null==M?void 0:M.tables]);const U=e=>{z(e.name,e.value)},P=()=>{q(),c({...E}),r()},O=(0,i.useMemo)((()=>(e="",t,a)=>{const l=m().encode({filter:e,page:t,page_size:a});return n.Z.get({endpoint:`/api/v1/rowlevelsecurity/related/tables?q=${l}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]),j=(0,i.useMemo)((()=>(e="",t,a)=>{const l=m().encode({filter:e,page:t,page_size:a});return n.Z.get({endpoint:`/api/v1/rowlevelsecurity/related/roles?q=${l}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]);return(0,f.tZ)(R,{className:"no-content-padding",responsive:!0,show:u,onHide:P,primaryButtonName:b?(0,s.t)("Save"):(0,s.t)("Add"),disablePrimaryButton:p,onHandledPrimaryAction:()=>{var e,t;const a=[],n=[];null==(e=d.tables)||e.forEach((e=>a.push(e.key))),null==(t=d.roles)||t.forEach((e=>n.push(e.key)));const i={...d,tables:a,roles:n};if(b&&d.id){const e=d.id;delete i.id,B(e,i).then((e=>{e&&(l("Rule updated"),P())}))}else d&&H(i).then((e=>{e&&(l((0,s.t)("Rule added")),P())}))},width:"30%",maxWidth:"1450px",title:(0,f.tZ)("h4",{"data-test":"rls-modal-title"},b?(0,f.tZ)(o.Z.EditAlt,{css:N}):(0,f.tZ)(o.Z.PlusLarge,{css:N}),b?(0,s.t)("Edit Rule"):(0,s.t)("Add Rule"))},(0,f.tZ)(S,null,(0,f.tZ)("div",{className:"main-section"},(0,f.tZ)($,null,(0,f.tZ)(w.QA,{id:"name",name:"name",className:"labeled-input",value:d?d.name:"",required:!0,validationMethods:{onChange:({target:e})=>U(e)},css:T,label:(0,s.t)("Rule Name"),"data-test":"rule-name-test",tooltipText:(0,s.t)("The name of the rule must be unique"),hasTooltip:!0})),(0,f.tZ)($,null,(0,f.tZ)("div",{className:"control-label"},(0,s.t)("Filter Type")," ",(0,f.tZ)(k.Z,{tooltip:(0,s.t)("Regular filters add where clauses to queries if a user belongs to a role referenced in the filter, base filters apply filters to all queries except the roles defined in the filter, and can be used to define what users can see if no RLS filters within a filter group apply to them.")})),(0,f.tZ)("div",{className:"input-container"},(0,f.tZ)(y.Z,{name:"filter_type",ariaLabel:(0,s.t)("Filter Type"),placeholder:(0,s.t)("Filter Type"),onChange:e=>{z("filter_type",e)},value:null==d?void 0:d.filter_type,options:x,"data-test":"rule-filter-type-test"}))),(0,f.tZ)($,null,(0,f.tZ)("div",{className:"control-label"},(0,s.t)("Datasets")," ",(0,f.tZ)("span",{className:"required"},"*"),(0,f.tZ)(k.Z,{tooltip:(0,s.t)("These are the datasets this filter will be applied to.")})),(0,f.tZ)("div",{className:"input-container"},(0,f.tZ)(v.Z,{ariaLabel:(0,s.t)("Tables"),mode:"multiple",onChange:e=>{z("tables",e||[])},value:(null==d?void 0:d.tables)||[],options:O}))),(0,f.tZ)($,null,(0,f.tZ)("div",{className:"control-label"},d.filter_type===_.Base?(0,s.t)("Excluded roles"):(0,s.t)("Roles")," ",(0,f.tZ)(k.Z,{tooltip:(0,s.t)("For regular filters, these are the roles this filter will be applied to. For base filters, these are the roles that the filter DOES NOT apply to, e.g. Admin if admin should see all data.")})),(0,f.tZ)("div",{className:"input-container"},(0,f.tZ)(v.Z,{ariaLabel:(0,s.t)("Roles"),mode:"multiple",onChange:e=>{z("roles",e||[])},value:(null==d?void 0:d.roles)||[],options:j}))),(0,f.tZ)($,null,(0,f.tZ)(w.QA,{id:"group_key",name:"group_key",value:d?d.group_key:"",validationMethods:{onChange:({target:e})=>U(e)},css:T,label:(0,s.t)("Group Key"),hasTooltip:!0,tooltipText:(0,s.t)("Filters with the same group key will be ORed together within the group, while different filter groups will be ANDed together. Undefined group keys are treated as unique groups, i.e. are not grouped together. For example, if a table has three filters, of which two are for departments Finance and Marketing (group key = 'department'), and one refers to the region Europe (group key = 'region'), the filter clause would apply the filter (department = 'Finance' OR department = 'Marketing') AND (region = 'Europe')."),"data-test":"group-key-test"})),(0,f.tZ)($,null,(0,f.tZ)("div",{className:"control-label"},(0,f.tZ)(w.QA,{id:"clause",name:"clause",value:d?d.clause:"",required:!0,validationMethods:{onChange:({target:e})=>U(e)},css:T,label:(0,s.t)("Clause"),hasTooltip:!0,tooltipText:(0,s.t)("This is the condition that will be added to the WHERE clause. For example, to only return rows for a particular client, you might define a regular filter with the clause `client_id = 9`. To display no rows unless a user belongs to a RLS filter role, a base filter can be created with the clause `1 = 0` (always false)."),"data-test":"clause-test"}))),(0,f.tZ)($,null,(0,f.tZ)("div",{className:"control-label"},(0,s.t)("Description")),(0,f.tZ)("div",{className:"input-container"},(0,f.tZ)(C,{rows:4,name:"description",value:d?d.description:"",onChange:e=>U(e.target),"data-test":"description-test"}))))))};var D=a(40768),F=a(54070),H=a(12);const B=l.Z.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,q=(0,d.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:l}=e,[d,h]=(0,i.useState)(!1),[b,y]=(0,i.useState)(null),{state:{loading:Z,resourceCount:v,resourceCollection:w,bulkSelectEnabled:k},hasPerm:x,fetchData:_,refreshData:T,toggleBulkSelect:R}=(0,g.Yi)("rowlevelsecurity",(0,s.t)("Row Level Security"),t,!0,void 0,void 0,!0);function N(e){y(e),h(!0)}function S(){y(null),h(!1),T()}const $=x("can_write"),C=x("can_write"),E=x("can_export"),q=(0,i.useMemo)((()=>[{accessor:"name",Header:(0,s.t)("Name")},{accessor:"filter_type",Header:(0,s.t)("Filter Type"),size:"xl"},{accessor:"group_key",Header:(0,s.t)("Group Key"),size:"xl"},{accessor:"clause",Header:(0,s.t)("Clause")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,f.tZ)(F.w,{date:e,user:t}),Header:(0,s.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>(0,f.tZ)(B,{className:"actions"},$&&(0,f.tZ)(r.Z,{title:(0,s.t)("Please confirm"),description:(0,f.tZ)(i.Fragment,null,(0,s.t)("Are you sure you want to delete")," ",(0,f.tZ)("b",null,e.name)),onConfirm:()=>function({id:e,name:t},a,l,i){return n.Z.delete({endpoint:`/api/v1/rowlevelsecurity/${e}`}).then((()=>{a(),l((0,s.t)("Deleted %s",t))}),(0,D.v$)((e=>i((0,s.t)("There was an issue deleting %s: %s",t,e)))))}(e,T,a,t)},(e=>(0,f.tZ)(c.u,{id:"delete-action-tooltip",title:(0,s.t)("Delete"),placement:"bottom"},(0,f.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,f.tZ)(o.Z.Trash,{"data-test":"rls-list-trash-icon"}))))),C&&(0,f.tZ)(c.u,{id:"edit-action-tooltip",title:(0,s.t)("Edit"),placement:"bottom"},(0,f.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>N(e)},(0,f.tZ)(o.Z.EditAlt,{"data-test":"edit-alt"})))),Header:(0,s.t)("Actions"),id:"actions",hidden:!C&&!$&&!E,disableSortBy:!0},{accessor:H.J.ChangedBy,hidden:!0}]),[l.userId,C,$,E,x,T,t,a]),z={title:(0,s.t)("No Rules yet"),image:"filter-results.svg",buttonAction:()=>N(null),buttonText:C?(0,f.tZ)(i.Fragment,null,(0,f.tZ)("i",{className:"fa fa-plus","data-test":"add-rule-empty"})," ","Rule"," "):null},L=(0,i.useMemo)((()=>[{Header:(0,s.t)("Name"),key:"search",id:"name",input:"search",operator:u.p.StartsWith},{Header:(0,s.t)("Filter Type"),key:"filter_type",id:"filter_type",input:"select",operator:u.p.Equals,unfilteredLabel:(0,s.t)("Any"),selects:[{label:(0,s.t)("Regular"),value:"Regular"},{label:(0,s.t)("Base"),value:"Base"}]},{Header:(0,s.t)("Group Key"),key:"search",id:"group_key",input:"search",operator:u.p.StartsWith},{Header:(0,s.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:u.p.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,D.tm)("rowlevelsecurity","changed_by",(0,D.v$)((e=>(0,s.t)("An error occurred while fetching dataset datasource values: %s",e))),l),paginate:!0}]),[l]),M=[{id:"changed_on_delta_humanized",desc:!0}],U=[];return $&&(U.push({name:(0,f.tZ)(i.Fragment,null,(0,f.tZ)("i",{className:"fa fa-plus","data-test":"add-rule"})," ",(0,s.t)("Rule")),buttonStyle:"primary",onClick:()=>N(null)}),U.push({name:(0,s.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:R})),(0,f.tZ)(i.Fragment,null,(0,f.tZ)(p.Z,{name:(0,s.t)("Row Level Security"),buttons:U}),(0,f.tZ)(r.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected rules?"),onConfirm:function(e){const l=e.map((({id:e})=>e));return n.Z.delete({endpoint:`/api/v1/rowlevelsecurity/?q=${m().encode(l)}`}).then((()=>{T(),a((0,s.t)("Deleted"))}),(0,D.v$)((e=>t((0,s.t)("There was an issue deleting rules: %s",e)))))}},(e=>{const l=[];return $&&l.push({key:"delete",name:(0,s.t)("Delete"),type:"danger",onSelect:e}),(0,f.tZ)(i.Fragment,null,(0,f.tZ)(A,{rule:b,addDangerToast:t,onHide:S,addSuccessToast:a,show:d}),(0,f.tZ)(u.Z,{className:"rls-list-view",bulkActions:l,bulkSelectEnabled:k,disableBulkSelect:R,columns:q,count:v,data:w,emptyState:z,fetchData:_,filters:L,initialSort:M,loading:Z,addDangerToast:t,addSuccessToast:a,refreshData:()=>{},pageSize:25}))})))}))},83379:(e,t,a)=>{function l(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>l})}}]);
//# sourceMappingURL=e08a635534f3b8c61bda.chunk.js.map