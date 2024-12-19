"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1440],{83691:(t,e,n)=>{n.d(e,{A:()=>d}),n(96540);var a=n(90017),o=n(19129),l=n(12249),s=n(17437);const i=a.A.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:t})=>t.colors.primary.base};
      }
    }
  }
`,r=a.A.span`
  color: ${({theme:t})=>t.colors.grayscale.base};
`;function d({actions:t}){return(0,s.Y)(i,{className:"actions"},t.map(((t,e)=>{const n=l.A[t.icon];return t.tooltip?(0,s.Y)(o.m,{id:`${t.label}-tooltip`,title:t.tooltip,placement:t.placement,key:e},(0,s.Y)(r,{role:"button",tabIndex:0,className:"action-button","data-test":t.label,onClick:t.onClick},(0,s.Y)(n,null))):(0,s.Y)(r,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick,"data-test":t.label,key:e},(0,s.Y)(n,null))})))}},50684:(t,e,n)=>{n.r(e),n.d(e,{default:()=>T});var a=n(96540),o=n(56347),l=n(54625),s=n(90017),i=n(17437),r=n(95579),d=n(35742),c=n(95093),u=n.n(c),m=n(58561),h=n.n(m),p=n(83691),g=n(63358),_=n(37020),Y=n(39854),b=n(51713),y=n(94146),f=n(5261),A=n(50500),x=n(30703),v=n(6094),w=n(12249),$=n(85861),k=n(41154);const S=s.A.div`
  margin: ${({theme:t})=>2*t.gridUnit}px auto
    ${({theme:t})=>4*t.gridUnit}px auto;
`,C=(0,s.A)(k.iN)`
  border-radius: ${({theme:t})=>t.borderRadius}px;
  border: 1px solid ${({theme:t})=>t.colors.secondary.light2};
`,D=s.A.div`
  margin-bottom: ${({theme:t})=>5*t.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:t})=>2*t.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:t})=>t.gridUnit/2}px;
    color: ${({theme:t})=>t.colors.error.base};
  }

  textarea {
    flex: 1 1 auto;
    height: ${({theme:t})=>17*t.gridUnit}px;
    resize: none;
    width: 100%;
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:t})=>1.5*t.gridUnit}px
      ${({theme:t})=>2*t.gridUnit}px;
    border: 1px solid ${({theme:t})=>t.colors.grayscale.light2};
    border-radius: ${({theme:t})=>t.gridUnit}px;
  }

  input[type='text'] {
    width: 65%;
  }
`,N=(0,f.Ay)((({addDangerToast:t,addSuccessToast:e,annotationLayerId:n,annotation:o=null,onAnnotationAdd:l,onHide:s,show:d})=>{var c,m;const[h,p]=(0,a.useState)(!0),[g,_]=(0,a.useState)(null),Y=null!==o,{state:{loading:b,resource:y},fetchResource:f,createResource:k,updateResource:N}=(0,A.fn)(`annotation_layer/${n}/annotation`,(0,r.t)("annotation"),t),H=()=>{_({short_descr:"",start_dttm:"",end_dttm:"",json_metadata:"",long_descr:""})},T=()=>{Y?_(y):H(),s()},E=t=>{const{target:e}=t,n={...g,end_dttm:g?g.end_dttm:"",short_descr:g?g.short_descr:"",start_dttm:g?g.start_dttm:""};n[e.name]=e.value,_(n)};return(0,a.useEffect)((()=>{if(Y&&(null==g||!g.id||o&&o.id!==g.id||d)){if(null!==(null==o?void 0:o.id)&&!b){const t=o.id||0;f(t)}}else Y||g&&!g.id&&!d||H()}),[o]),(0,a.useEffect)((()=>{y&&_(y)}),[y]),(0,a.useEffect)((()=>{var t,e,n;null!=g&&null!=(t=g.short_descr)&&t.length&&null!=g&&null!=(e=g.start_dttm)&&e.length&&null!=g&&null!=(n=g.end_dttm)&&n.length?p(!1):p(!0)}),[g?g.short_descr:"",g?g.start_dttm:"",g?g.end_dttm:""]),(0,i.Y)($.A,{disablePrimaryButton:h,onHandledPrimaryAction:()=>{if(Y){if(null!=g&&g.id){const t=g.id;delete g.id,delete g.created_by,delete g.changed_by,delete g.changed_on_delta_humanized,delete g.layer,N(t,g).then((t=>{t&&(l&&l(),T(),e((0,r.t)("The annotation has been updated")))}))}}else g&&k(g).then((t=>{t&&(l&&l(),T(),e((0,r.t)("The annotation has been saved")))}))},onHide:T,primaryButtonName:Y?(0,r.t)("Save"):(0,r.t)("Add"),show:d,width:"55%",title:(0,i.Y)("h4",{"data-test":"annotation-modal-title"},Y?(0,i.Y)(w.A.EditAlt,{css:x.vE}):(0,i.Y)(w.A.PlusLarge,{css:x.vE}),Y?(0,r.t)("Edit annotation"):(0,r.t)("Add annotation"))},(0,i.Y)(S,null,(0,i.Y)("h4",null,(0,r.t)("Basic information"))),(0,i.Y)(D,null,(0,i.Y)("div",{className:"control-label"},(0,r.t)("Name"),(0,i.Y)("span",{className:"required"},"*")),(0,i.Y)("input",{name:"short_descr",onChange:E,type:"text",value:null==g?void 0:g.short_descr})),(0,i.Y)(D,null,(0,i.Y)("div",{className:"control-label"},(0,r.t)("date"),(0,i.Y)("span",{className:"required"},"*")),(0,i.Y)(v.c,{placeholder:[(0,r.t)("Start date"),(0,r.t)("End date")],format:"YYYY-MM-DD HH:mm",onChange:(t,e)=>{const n={...g,end_dttm:g&&e[1].length?u()(e[1]).format("YYYY-MM-DD HH:mm"):"",short_descr:g?g.short_descr:"",start_dttm:g&&e[0].length?u()(e[0]).format("YYYY-MM-DD HH:mm"):""};_(n)},showTime:{format:"hh:mm a"},use12Hours:!0,value:null!=g&&null!=(c=g.start_dttm)&&c.length||null!=g&&null!=(m=g.end_dttm)&&m.length?[u()(g.start_dttm),u()(g.end_dttm)]:null})),(0,i.Y)(S,null,(0,i.Y)("h4",null,(0,r.t)("Additional information"))),(0,i.Y)(D,null,(0,i.Y)("div",{className:"control-label"},(0,r.t)("description")),(0,i.Y)("textarea",{name:"long_descr",value:g?g.long_descr:"",placeholder:(0,r.t)("Description (this can be seen in the list)"),onChange:E})),(0,i.Y)(D,null,(0,i.Y)("div",{className:"control-label"},(0,r.t)("JSON metadata")),(0,i.Y)(C,{onChange:t=>{const e={...g,end_dttm:g?g.end_dttm:"",json_metadata:t,short_descr:g?g.short_descr:"",start_dttm:g?g.start_dttm:""};_(e)},value:null!=g&&g.json_metadata?g.json_metadata:"",width:"100%",height:"120px"})))})),H=s.A.div`
  ${({theme:t})=>i.AH`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: ${4*t.gridUnit}px;
      font-size: ${t.typography.sizes.s}px;
      font-weight: ${t.typography.weights.normal};
      text-decoration: underline;
    }
  `}
`,T=(0,f.Ay)((function({addDangerToast:t,addSuccessToast:e}){const{annotationLayerId:n}=(0,o.g)(),{state:{loading:s,resourceCount:c,resourceCollection:m,bulkSelectEnabled:f},fetchData:v,refreshData:w,toggleBulkSelect:$}=(0,A.RU)(`annotation_layer/${n}/annotation`,(0,r.t)("annotation"),t,!1),[k,S]=(0,a.useState)(!1),[C,D]=(0,a.useState)(""),[T,E]=(0,a.useState)(null),[U,B]=(0,a.useState)(null),M=t=>{E(t),S(!0)},j=(0,a.useCallback)((async function(){try{const t=await d.A.get({endpoint:`/api/v1/annotation_layer/${n}`});D(t.json.result.name)}catch(e){await(0,y.h4)(e).then((({error:e})=>{t(e.error||e.statusText||e)}))}}),[n]);(0,a.useEffect)((()=>{j()}),[j]);const L=[{id:"short_descr",desc:!0}],z=(0,a.useMemo)((()=>[{accessor:"short_descr",Header:(0,r.t)("Name")},{accessor:"long_descr",Header:(0,r.t)("Description")},{Cell:({row:{original:{start_dttm:t}}})=>u()(new Date(t)).format("ll"),Header:(0,r.t)("Start"),accessor:"start_dttm"},{Cell:({row:{original:{end_dttm:t}}})=>u()(new Date(t)).format("ll"),Header:(0,r.t)("End"),accessor:"end_dttm"},{Cell:({row:{original:t}})=>{const e=[{label:"edit-action",tooltip:(0,r.t)("Edit annotation"),placement:"bottom",icon:"Edit",onClick:()=>M(t)},{label:"delete-action",tooltip:(0,r.t)("Delete annotation"),placement:"bottom",icon:"Trash",onClick:()=>B(t)}];return(0,i.Y)(p.A,{actions:e})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0}]),[!0,!0]),F=[];F.push({name:(0,i.Y)(a.Fragment,null,(0,i.Y)("i",{className:"fa fa-plus"})," ",(0,r.t)("Annotation")),buttonStyle:"primary",onClick:()=>{M(null)}}),F.push({name:(0,r.t)("Bulk select"),onClick:$,buttonStyle:"secondary","data-test":"annotation-bulk-select"});let I=!0;try{(0,o.W6)()}catch(t){I=!1}const R={title:(0,r.t)("No annotation yet"),image:"filter-results.svg",buttonAction:()=>{M(null)},buttonText:(0,i.Y)(a.Fragment,null,(0,i.Y)("i",{className:"fa fa-plus"})," ",(0,r.t)("Annotation"))};return(0,i.Y)(a.Fragment,null,(0,i.Y)(b.A,{name:(0,i.Y)(H,null,(0,i.Y)("span",null,(0,r.t)("Annotation Layer %s",C)),(0,i.Y)("span",null,I?(0,i.Y)(l.N_,{to:"/annotationlayer/list/"},(0,r.t)("Back to all")):(0,i.Y)("a",{href:"/annotationlayer/list/"},(0,r.t)("Back to all")))),buttons:F}),(0,i.Y)(N,{addDangerToast:t,addSuccessToast:e,annotation:T,show:k,onAnnotationAdd:()=>w(),annotationLayerId:n,onHide:()=>S(!1)}),U&&(0,i.Y)(_.A,{description:(0,r.t)("Are you sure you want to delete %s?",null==U?void 0:U.short_descr),onConfirm:()=>{U&&(({id:a,short_descr:o})=>{d.A.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/${a}`}).then((()=>{w(),B(null),e((0,r.t)("Deleted: %s",o))}),(0,x.JF)((e=>t((0,r.t)("There was an issue deleting %s: %s",o,e)))))})(U)},onHide:()=>B(null),open:!0,title:(0,r.t)("Delete Annotation?")}),(0,i.Y)(g.A,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected annotations?"),onConfirm:a=>{d.A.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/?q=${h().encode(a.map((({id:t})=>t)))}`}).then((({json:t={}})=>{w(),e(t.message)}),(0,x.JF)((e=>t((0,r.t)("There was an issue deleting the selected annotations: %s",e)))))}},(n=>{const a=[{key:"delete",name:(0,r.t)("Delete"),onSelect:n,type:"danger"}];return(0,i.Y)(Y.A,{className:"annotations-list-view",bulkActions:a,bulkSelectEnabled:f,columns:z,count:c,data:m,disableBulkSelect:$,emptyState:R,fetchData:v,addDangerToast:t,addSuccessToast:e,refreshData:w,initialSort:L,loading:s,pageSize:25})})))}))}}]);
//# sourceMappingURL=f0946bf7fb211a918f87.chunk.js.map