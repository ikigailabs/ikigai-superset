"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5659],{12397:(e,t,a)=>{a.d(t,{U:()=>i}),a(96540);var l=a(19129),s=a(25106),n=a(95579),r=a(17437);const i=({user:e,date:t})=>{const a=(0,r.Y)("span",{className:"no-wrap","data-test":"audit-info-date"},t);if(e){const t=(0,s.A)(e),i=(0,n.t)("Modified by: %s",t);return(0,r.Y)(l.m,{title:i,placement:"bottom"},a)}return a}},22442:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var l=a(90017),s=a(95579),n=a(35742),r=a(96540),i=a(63358),o=a(12249),u=a(39854),d=a(5261),c=a(19129),p=a(51713),m=a(58561),h=a.n(m),g=a(50500),f=a(17437),b=a(85861),y=a(28990),v=a(90868),Y=a(49756),w=a(40563),A=a(31641);const k=[{label:(0,s.t)("Regular"),value:"Regular"},{label:(0,s.t)("Base"),value:"Base"}];var x;!function(e){e.Regular="Regular",e.Base="Base"}(x||(x={}));const _=f.AH`
  margin: 0;

  .ant-input {
    margin: 0;
  }
`,T=(0,l.A)(b.A)`
  max-width: 1200px;
  min-width: min-content;
  width: 100%;
  .ant-modal-footer {
    white-space: nowrap;
  }
  .ant-modal-footer {
    white-space: nowrap;
  }
`,R=e=>f.AH`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,N=l.A.div`
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
`,S=l.A.div`
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
`,C=(0,l.A)(v.fs)`
  resize: none;
  margin-top: ${({theme:e})=>e.gridUnit}px;
`,$={name:"",filter_type:x.Regular,tables:[],roles:[],clause:"",group_key:"",description:""},E=function(e){const{rule:t,addDangerToast:a,addSuccessToast:l,onHide:i,show:u}=e,[d,c]=(0,r.useState)({...$}),[p,m]=(0,r.useState)(!0),b=null!==t,{state:{loading:v,resource:E,error:F},fetchResource:H,createResource:D,updateResource:M,clearError:B}=(0,g.fn)("rowlevelsecurity",(0,s.t)("rowlevelsecurity"),a),U=(e,t)=>{c((a=>({...a,[e]:t})))},q=(0,r.useCallback)((()=>{var e,t;if(!E)return null;const a=[],l=[];return null==(e=E.tables)||e.forEach((e=>{a.push({key:e.id,label:e.schema?`${e.schema}.${e.table_name}`:e.table_name,value:e.id})})),null==(t=E.roles)||t.forEach((e=>{l.push({key:e.id,label:e.name,value:e.id})})),{tables:a,roles:l}}),[null==E?void 0:E.tables,null==E?void 0:E.roles]);(0,r.useEffect)((()=>{b?null===(null==t?void 0:t.id)||v||F||H(t.id):c({...$})}),[t]),(0,r.useEffect)((()=>{if(E){c({...E,id:null==t?void 0:t.id});const e=q();U("tables",(null==e?void 0:e.tables)||[]),U("roles",(null==e?void 0:e.roles)||[])}}),[E]);const z=d||{};(0,r.useEffect)((()=>{var e;null!=d&&d.name&&null!=d&&d.clause&&null!=(e=d.tables)&&e.length?m(!1):m(!0)}),[z.name,z.clause,null==z?void 0:z.tables]);const L=e=>{U(e.name,e.value)},P=()=>{B(),c({...$}),i()},O=(0,r.useMemo)((()=>(e="",t,a)=>{const l=h().encode({filter:e,page:t,page_size:a});return n.A.get({endpoint:`/api/v1/rowlevelsecurity/related/tables?q=${l}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]),j=(0,r.useMemo)((()=>(e="",t,a)=>{const l=h().encode({filter:e,page:t,page_size:a});return n.A.get({endpoint:`/api/v1/rowlevelsecurity/related/roles?q=${l}`}).then((e=>({data:e.json.result.map((e=>({label:e.text,value:e.value}))),totalCount:e.json.count})))}),[]);return(0,f.Y)(T,{className:"no-content-padding",responsive:!0,show:u,onHide:P,primaryButtonName:b?(0,s.t)("Save"):(0,s.t)("Add"),disablePrimaryButton:p,onHandledPrimaryAction:()=>{var e,t;const a=[],n=[];null==(e=d.tables)||e.forEach((e=>a.push(e.key))),null==(t=d.roles)||t.forEach((e=>n.push(e.key)));const r={...d,tables:a,roles:n};if(b&&d.id){const e=d.id;delete r.id,M(e,r).then((e=>{e&&(l("Rule updated"),P())}))}else d&&D(r).then((e=>{e&&(l((0,s.t)("Rule added")),P())}))},width:"30%",maxWidth:"1450px",title:(0,f.Y)("h4",{"data-test":"rls-modal-title"},b?(0,f.Y)(o.A.EditAlt,{css:R}):(0,f.Y)(o.A.PlusLarge,{css:R}),b?(0,s.t)("Edit Rule"):(0,s.t)("Add Rule"))},(0,f.Y)(N,null,(0,f.Y)("div",{className:"main-section"},(0,f.Y)(S,null,(0,f.Y)(w.MA,{id:"name",name:"name",className:"labeled-input",value:d?d.name:"",required:!0,validationMethods:{onChange:({target:e})=>L(e)},css:_,label:(0,s.t)("Rule Name"),"data-test":"rule-name-test",tooltipText:(0,s.t)("The name of the rule must be unique"),hasTooltip:!0})),(0,f.Y)(S,null,(0,f.Y)("div",{className:"control-label"},(0,s.t)("Filter Type")," ",(0,f.Y)(A.A,{tooltip:(0,s.t)("Regular filters add where clauses to queries if a user belongs to a role referenced in the filter, base filters apply filters to all queries except the roles defined in the filter, and can be used to define what users can see if no RLS filters within a filter group apply to them.")})),(0,f.Y)("div",{className:"input-container"},(0,f.Y)(y.A,{name:"filter_type",ariaLabel:(0,s.t)("Filter Type"),placeholder:(0,s.t)("Filter Type"),onChange:e=>{U("filter_type",e)},value:null==d?void 0:d.filter_type,options:k,"data-test":"rule-filter-type-test"}))),(0,f.Y)(S,null,(0,f.Y)("div",{className:"control-label"},(0,s.t)("Datasets")," ",(0,f.Y)("span",{className:"required"},"*"),(0,f.Y)(A.A,{tooltip:(0,s.t)("These are the datasets this filter will be applied to.")})),(0,f.Y)("div",{className:"input-container"},(0,f.Y)(Y.A,{ariaLabel:(0,s.t)("Tables"),mode:"multiple",onChange:e=>{U("tables",e||[])},value:(null==d?void 0:d.tables)||[],options:O}))),(0,f.Y)(S,null,(0,f.Y)("div",{className:"control-label"},d.filter_type===x.Base?(0,s.t)("Excluded roles"):(0,s.t)("Roles")," ",(0,f.Y)(A.A,{tooltip:(0,s.t)("For regular filters, these are the roles this filter will be applied to. For base filters, these are the roles that the filter DOES NOT apply to, e.g. Admin if admin should see all data.")})),(0,f.Y)("div",{className:"input-container"},(0,f.Y)(Y.A,{ariaLabel:(0,s.t)("Roles"),mode:"multiple",onChange:e=>{U("roles",e||[])},value:(null==d?void 0:d.roles)||[],options:j}))),(0,f.Y)(S,null,(0,f.Y)(w.MA,{id:"group_key",name:"group_key",value:d?d.group_key:"",validationMethods:{onChange:({target:e})=>L(e)},css:_,label:(0,s.t)("Group Key"),hasTooltip:!0,tooltipText:(0,s.t)("Filters with the same group key will be ORed together within the group, while different filter groups will be ANDed together. Undefined group keys are treated as unique groups, i.e. are not grouped together. For example, if a table has three filters, of which two are for departments Finance and Marketing (group key = 'department'), and one refers to the region Europe (group key = 'region'), the filter clause would apply the filter (department = 'Finance' OR department = 'Marketing') AND (region = 'Europe')."),"data-test":"group-key-test"})),(0,f.Y)(S,null,(0,f.Y)("div",{className:"control-label"},(0,f.Y)(w.MA,{id:"clause",name:"clause",value:d?d.clause:"",required:!0,validationMethods:{onChange:({target:e})=>L(e)},css:_,label:(0,s.t)("Clause"),hasTooltip:!0,tooltipText:(0,s.t)("This is the condition that will be added to the WHERE clause. For example, to only return rows for a particular client, you might define a regular filter with the clause `client_id = 9`. To display no rows unless a user belongs to a RLS filter role, a base filter can be created with the clause `1 = 0` (always false)."),"data-test":"clause-test"}))),(0,f.Y)(S,null,(0,f.Y)("div",{className:"control-label"},(0,s.t)("Description")),(0,f.Y)("div",{className:"input-container"},(0,f.Y)(C,{rows:4,name:"description",value:d?d.description:"",onChange:e=>L(e.target),"data-test":"description-test"}))))))};var F=a(30703),H=a(12397),D=a(23193);const M=l.A.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,B=(0,d.Ay)((function(e){const{addDangerToast:t,addSuccessToast:a,user:l}=e,[d,m]=(0,r.useState)(!1),[b,y]=(0,r.useState)(null),{state:{loading:v,resourceCount:Y,resourceCollection:w,bulkSelectEnabled:A},hasPerm:k,fetchData:x,refreshData:_,toggleBulkSelect:T}=(0,g.RU)("rowlevelsecurity",(0,s.t)("Row Level Security"),t,!0,void 0,void 0,!0);function R(e){y(e),m(!0)}function N(){y(null),m(!1),_()}const S=k("can_write"),C=k("can_write"),$=k("can_export"),B=(0,r.useMemo)((()=>[{accessor:"name",Header:(0,s.t)("Name")},{accessor:"filter_type",Header:(0,s.t)("Filter Type"),size:"xl"},{accessor:"group_key",Header:(0,s.t)("Group Key"),size:"xl"},{accessor:"clause",Header:(0,s.t)("Clause")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,f.Y)(H.U,{date:e,user:t}),Header:(0,s.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>(0,f.Y)(M,{className:"actions"},S&&(0,f.Y)(i.A,{title:(0,s.t)("Please confirm"),description:(0,f.Y)(r.Fragment,null,(0,s.t)("Are you sure you want to delete")," ",(0,f.Y)("b",null,e.name)),onConfirm:()=>function({id:e,name:t},a,l,r){return n.A.delete({endpoint:`/api/v1/rowlevelsecurity/${e}`}).then((()=>{a(),l((0,s.t)("Deleted %s",t))}),(0,F.JF)((e=>r((0,s.t)("There was an issue deleting %s: %s",t,e)))))}(e,_,a,t)},(e=>(0,f.Y)(c.m,{id:"delete-action-tooltip",title:(0,s.t)("Delete"),placement:"bottom"},(0,f.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,f.Y)(o.A.Trash,{"data-test":"rls-list-trash-icon"}))))),C&&(0,f.Y)(c.m,{id:"edit-action-tooltip",title:(0,s.t)("Edit"),placement:"bottom"},(0,f.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>R(e)},(0,f.Y)(o.A.EditAlt,{"data-test":"edit-alt"})))),Header:(0,s.t)("Actions"),id:"actions",hidden:!C&&!S&&!$,disableSortBy:!0},{accessor:D.H.ChangedBy,hidden:!0}]),[l.userId,C,S,$,k,_,t,a]),U={title:(0,s.t)("No Rules yet"),image:"filter-results.svg",buttonAction:()=>R(null),buttonText:C?(0,f.Y)(r.Fragment,null,(0,f.Y)("i",{className:"fa fa-plus","data-test":"add-rule-empty"})," ","Rule"," "):null},q=(0,r.useMemo)((()=>[{Header:(0,s.t)("Name"),key:"search",id:"name",input:"search",operator:u.t.StartsWith},{Header:(0,s.t)("Filter Type"),key:"filter_type",id:"filter_type",input:"select",operator:u.t.Equals,unfilteredLabel:(0,s.t)("Any"),selects:[{label:(0,s.t)("Regular"),value:"Regular"},{label:(0,s.t)("Base"),value:"Base"}]},{Header:(0,s.t)("Group Key"),key:"search",id:"group_key",input:"search",operator:u.t.StartsWith},{Header:(0,s.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:u.t.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,F.u1)("rowlevelsecurity","changed_by",(0,F.JF)((e=>(0,s.t)("An error occurred while fetching dataset datasource values: %s",e))),l),paginate:!0}]),[l]),z=[{id:"changed_on_delta_humanized",desc:!0}],L=[];return S&&(L.push({name:(0,f.Y)(r.Fragment,null,(0,f.Y)("i",{className:"fa fa-plus","data-test":"add-rule"})," ",(0,s.t)("Rule")),buttonStyle:"primary",onClick:()=>R(null)}),L.push({name:(0,s.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:T})),(0,f.Y)(r.Fragment,null,(0,f.Y)(p.A,{name:(0,s.t)("Row Level Security"),buttons:L}),(0,f.Y)(i.A,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected rules?"),onConfirm:function(e){const l=e.map((({id:e})=>e));return n.A.delete({endpoint:`/api/v1/rowlevelsecurity/?q=${h().encode(l)}`}).then((()=>{_(),a((0,s.t)("Deleted"))}),(0,F.JF)((e=>t((0,s.t)("There was an issue deleting rules: %s",e)))))}},(e=>{const l=[];return S&&l.push({key:"delete",name:(0,s.t)("Delete"),type:"danger",onSelect:e}),(0,f.Y)(r.Fragment,null,(0,f.Y)(E,{rule:b,addDangerToast:t,onHide:N,addSuccessToast:a,show:d}),(0,f.Y)(u.A,{className:"rls-list-view",bulkActions:l,bulkSelectEnabled:A,disableBulkSelect:T,columns:B,count:Y,data:w,emptyState:U,fetchData:x,filters:q,initialSort:z,loading:v,addDangerToast:t,addSuccessToast:a,refreshData:()=>{},pageSize:25}))})))}))},25106:(e,t,a)=>{function l(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{A:()=>l})}}]);
//# sourceMappingURL=d0c07b405a123fbc53d3.chunk.js.map