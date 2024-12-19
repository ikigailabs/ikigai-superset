"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1937],{88514:(i,n,e)=>{e.d(n,{A:()=>t});const o={pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingActive:!1,pickingAttribute:!1},t={inject:{"vs:DECKGL_FILTER_GL_POSITION":"\n    // for picking depth values\n    picking_setPickingAttribute(position.z / position.w);\n  ","vs:DECKGL_FILTER_COLOR":"\n  picking_setPickingColor(geometry.pickingColor);\n  ","fs:#decl":"\nuniform bool picking_uAttribute;\n  ","fs:DECKGL_FILTER_COLOR":{order:99,injection:"\n  // use highlight color if this fragment belongs to the selected object.\n  color = picking_filterHighlightColor(color);\n\n  // use picking color if rendering to picking FBO.\n  color = picking_filterPickingColor(color);\n    "}},name:"picking",vs:"uniform bool picking_uActive;\nuniform bool picking_uAttribute;\nuniform vec3 picking_uSelectedColor;\nuniform bool picking_uSelectedColorValid;\n\nout vec4 picking_vRGBcolor_Avalid;\n\nconst float COLOR_SCALE = 1. / 255.;\n\nbool picking_isColorValid(vec3 color) {\n  return dot(color, vec3(1.0)) > 0.001;\n}\n\nbool isVertexPicked(vec3 vertexColor) {\n  return\n    picking_uSelectedColorValid &&\n    !picking_isColorValid(abs(vertexColor - picking_uSelectedColor));\n}\n\nvoid picking_setPickingColor(vec3 pickingColor) {\n  if (picking_uActive) {\n    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\n\n    if (!picking_uAttribute) {\n      picking_vRGBcolor_Avalid.rgb = pickingColor * COLOR_SCALE;\n    }\n  } else {\n    picking_vRGBcolor_Avalid.a = float(isVertexPicked(pickingColor));\n  }\n}\n\nvoid picking_setPickingAttribute(float value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.r = value;\n  }\n}\nvoid picking_setPickingAttribute(vec2 value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.rg = value;\n  }\n}\nvoid picking_setPickingAttribute(vec3 value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.rgb = value;\n  }\n}\n",fs:"uniform bool picking_uActive;\nuniform vec3 picking_uSelectedColor;\nuniform vec4 picking_uHighlightColor;\n\nin vec4 picking_vRGBcolor_Avalid;\nvec4 picking_filterHighlightColor(vec4 color) {\n  if (picking_uActive) {\n    return color;\n  }\n  bool selected = bool(picking_vRGBcolor_Avalid.a);\n\n  if (selected) {\n    float highLightAlpha = picking_uHighlightColor.a;\n    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\n    float highLightRatio = highLightAlpha / blendedAlpha;\n\n    vec3 blendedRGB = mix(color.rgb, picking_uHighlightColor.rgb, highLightRatio);\n    return vec4(blendedRGB, blendedAlpha);\n  } else {\n    return color;\n  }\n}\nvec4 picking_filterPickingColor(vec4 color) {\n  if (picking_uActive) {\n    if (picking_vRGBcolor_Avalid.a == 0.0) {\n      discard;\n    }\n    return picking_vRGBcolor_Avalid;\n  }\n  return color;\n}\nvec4 picking_filterColor(vec4 color) {\n  vec4 highightColor = picking_filterHighlightColor(color);\n  return picking_filterPickingColor(highightColor);\n}\n\n",getUniforms:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;const n={};if(void 0!==i.pickingSelectedColor)if(i.pickingSelectedColor){const e=i.pickingSelectedColor.slice(0,3);n.picking_uSelectedColorValid=1,n.picking_uSelectedColor=e}else n.picking_uSelectedColorValid=0;if(i.pickingHighlightColor){const e=Array.from(i.pickingHighlightColor,(i=>i/255));Number.isFinite(e[3])||(e[3]=1),n.picking_uHighlightColor=e}return void 0!==i.pickingActive&&(n.picking_uActive=Boolean(i.pickingActive),n.picking_uAttribute=Boolean(i.pickingAttribute)),n}}},55666:(i,n,e)=>{e.d(n,{A:()=>g});var o=e(64467),t=e(4679),l=e(34685),r=e(88514),s=e(31320),a=e(33023),c=e(82170);const d=[0,0,0,255],u={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:i=>i.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:d},getLineColor:{type:"accessor",value:d},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class g extends t.A{getShaders(){return super.getShaders({vs:"#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec3 instancePositions64Low;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\nuniform bool antialiasing;\nuniform bool billboard;\nuniform int radiusUnits;\nuniform int lineWidthUnits;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\nvarying float outerRadiusPixels;\n\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius, radiusUnits),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths, lineWidthUnits),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  float edgePadding = antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;\n  unitPosition = edgePadding * positions.xy;\n  geometry.uv = unitPosition;\n  geometry.pickingColor = instancePickingColors;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  if (billboard) {\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);\n    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n    vec3 offset = edgePadding * positions * outerRadiusPixels;\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\n  } else {\n    vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);\n    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  }\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);\n  DECKGL_FILTER_COLOR(vFillColor, geometry);\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);\n  DECKGL_FILTER_COLOR(vLineColor, geometry);\n}\n",fs:"#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\nuniform float stroked;\nuniform bool antialiasing;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\nvarying float outerRadiusPixels;\n\nvoid main(void) {\n  geometry.uv = unitPosition;\n\n  float distToCenter = length(unitPosition) * outerRadiusPixels;\n  float inCircle = antialiasing ? \n    smoothedge(distToCenter, outerRadiusPixels) : \n    step(distToCenter, outerRadiusPixels);\n\n  if (inCircle == 0.0) {\n    discard;\n  }\n\n  if (stroked > 0.5) {\n    float isLine = antialiasing ? \n      smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :\n      step(innerUnitRadius * outerRadiusPixels, distToCenter);\n\n    if (filled) {\n      gl_FragColor = mix(vFillColor, vLineColor, isLine);\n    } else {\n      if (isLine == 0.0) {\n        discard;\n      }\n      gl_FragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);\n    }\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n\n  gl_FragColor.a *= inCircle;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[l.A,r.A]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(i){if(super.updateState(i),i.changeFlags.extensionsChanged){var n;const{gl:i}=this.context;null===(n=this.state.model)||void 0===n||n.delete(),this.state.model=this._getModel(i),this.getAttributeManager().invalidateAll()}}draw({uniforms:i}){const{radiusUnits:n,radiusScale:e,radiusMinPixels:o,radiusMaxPixels:t,stroked:l,filled:r,billboard:a,antialiasing:c,lineWidthUnits:d,lineWidthScale:u,lineWidthMinPixels:g,lineWidthMaxPixels:p}=this.props;this.state.model.setUniforms(i).setUniforms({stroked:l?1:0,filled:r,billboard:a,antialiasing:c,radiusUnits:s.p5[n],radiusScale:e,radiusMinPixels:o,radiusMaxPixels:t,lineWidthUnits:s.p5[d],lineWidthScale:u,lineWidthMinPixels:g,lineWidthMaxPixels:p}).draw()}_getModel(i){return new a.A(i,{...this.getShaders(),id:this.props.id,geometry:new c.A({drawMode:6,vertexCount:4,attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}}}),isInstanced:!0})}}(0,o.A)(g,"defaultProps",u),(0,o.A)(g,"layerName","ScatterplotLayer")},41937:(i,n,e)=>{e.r(n),e.d(n,{default:()=>p,getLayer:()=>g});var o=e(55666),t=(e(96540),e(36770)),l=e(95579),r=e(41857),s=e(47823),a=e(32548);const c=1609.34;var d=e(17437);function u(i,n){return e=>{var o,r,s,c,u,g,p,v,_;const f=(null==n?void 0:n[i.point_radius_fixed.value])||(0,t.A)(null==(o=i.point_radius_fixed)?void 0:o.value);return(0,d.Y)("div",{className:"deckgl-tooltip"},(0,d.Y)(a.A,{label:(0,l.t)("Longitude and Latitude")+": ",value:`${null==(r=e.object)||null==(s=r.position)?void 0:s[0]}, ${null==(c=e.object)||null==(u=c.position)?void 0:u[1]}`}),(null==(g=e.object)?void 0:g.cat_color)&&(0,d.Y)(a.A,{label:(0,l.t)("Category")+": ",value:`${null==(p=e.object)?void 0:p.cat_color}`}),(null==(v=e.object)?void 0:v.metric)&&(0,d.Y)(a.A,{label:`${f}: `,value:`${null==(_=e.object)?void 0:_.metric}`}))}}function g(i,n,e,t,l){const s=i,a=n.data.features.map((i=>{let n=(e=s.point_unit,o=i.radius,("square_m"===e?Math.sqrt(o/Math.PI):"radius_m"===e?o:"radius_km"===e?1e3*o:"radius_miles"===e?o*c:"square_km"===e?1e3*Math.sqrt(o/Math.PI):"square_miles"===e?Math.sqrt(o/Math.PI)*c:null)||10);var e,o;if(s.multiplier&&(n*=s.multiplier),i.color)return{...i,radius:n};const t=s.color_picker||{r:0,g:0,b:0,a:1},l=[t.r,t.g,t.b,255*t.a];return{...i,radius:n,color:l}}));return new o.A({id:`scatter-layer-${s.slice_id}`,data:a,fp64:!0,getFillColor:i=>i.color,getRadius:i=>i.radius,radiusMinPixels:Number(s.min_radius)||void 0,radiusMaxPixels:Number(s.max_radius)||void 0,stroked:!1,...(0,r.T)(s,t,u(s,null==l?void 0:l.verboseMap))})}const p=(0,s.c)(g,(function(i){return i.map((i=>i.position))}))}}]);
//# sourceMappingURL=ad4322697f88c39e7ebc.chunk.js.map