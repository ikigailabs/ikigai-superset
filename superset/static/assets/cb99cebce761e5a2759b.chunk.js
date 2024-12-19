"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3171],{43171:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r=o(96540),i=o(90017),s=o(96453),l=o(17437),n=o(95579),a=o(97689);const c=i.A.div`
  ${({theme:e,subheaderFontSize:t})=>`\n    font-weight: ${e.typography.weights.light};\n    width: 33%;\n    display: table-cell;\n    font-size: ${t||20}px;\n    text-align: center;\n  `}
`,d=i.A.div`
  ${({theme:e,backgroundColor:t,textColor:o})=>`\n    background-color: ${t};\n    color: ${o};\n    padding: ${e.gridUnit}px ${2*e.gridUnit}px;\n    border-radius: ${2*e.gridUnit}px;\n    display: inline-block;\n    margin-right: ${e.gridUnit}px;\n  `}
`;function p(e){const{height:t,width:o,bigNumber:i,prevNumber:p,valueDifference:g,percentDifferenceFormattedString:b,headerFontSize:u,subheaderFontSize:h,comparisonColorEnabled:m,percentDifferenceNumber:f,comparatorText:x}=e,y=(0,r.createRef)(),$=(0,s.DP)(),v=l.AH`
    font-family: ${$.typography.families.sansSerif};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${4*$.gridUnit}px;
    border-radius: ${2*$.gridUnit}px;
    height: ${t}px;
    width: ${o}px;
  `,w=l.AH`
    font-size: ${u||60}px;
    font-weight: ${$.typography.weights.normal};
    text-align: center;
  `,k=l.AH`
    color: ${m?f>0?$.colors.success.base:$.colors.error.base:$.colors.grayscale.base};
    margin-left: ${$.gridUnit}px;
  `,C=$.colors.grayscale.light4,Y=$.colors.grayscale.base,{backgroundColor:A,textColor:T}=(0,r.useMemo)((()=>{let e=C,t=Y;return f>0?m&&(e=$.colors.success.light2,t=$.colors.success.base):f<0&&m&&(e=$.colors.error.light2,t=$.colors.error.base),{backgroundColor:e,textColor:t}}),[$,m,f]),U=(0,r.useMemo)((()=>[{symbol:"#",value:p,tooltipText:(0,n.t)("Data for %s",x)},{symbol:"△",value:g,tooltipText:(0,n.t)("Value difference between the time periods")},{symbol:"%",value:b,tooltipText:(0,n.t)("Percentage difference between the time periods")}]),[p,g,b]);return(0,l.Y)("div",{ref:y,css:v},(0,l.Y)("div",{css:w},i,0!==f&&(0,l.Y)("span",{css:k},f>0?"↑":"↓")),(0,l.Y)("div",{css:l.AH`
          width: 100%;
          display: table;
        `},(0,l.Y)("div",{css:l.AH`
            display: table-row;
          `},U.map(((e,t)=>(0,l.Y)(c,{key:`comparison-symbol-${e.symbol}`,subheaderFontSize:h},(0,l.Y)(a.m,{id:"tooltip",placement:"top",title:e.tooltipText},(0,l.Y)(d,{backgroundColor:t>0?A:C,textColor:t>0?T:Y},e.symbol),e.value)))))))}}}]);
//# sourceMappingURL=cb99cebce761e5a2759b.chunk.js.map