import{r as x,j as e,P as r,S as k,I as se,a as g,b as ie,M as I,c as ne,D as re,B as b,d as le,L as ae,T as f,f as ce,g as S,e as v,h as U,s as C,u as w,_ as R,i as m,k as A,l as $,m as pe,n as W,o as de,p as y,W as me}from"./index-03207586.js";import{C as j}from"./Card-5651b81b.js";import{C as T,u as E,a as _}from"./use-chart-4ca9aa16.js";import{F as xe}from"./FormControlLabel-dd8f75a2.js";import{C as ue}from"./Checkbox-2d57853f.js";import{i as he}from"./isMuiElement-b32f462d.js";import{f as F,a as B,G as u}from"./format-number-0395001a.js";import{C as ge}from"./Container-1405f141.js";function V({title:t,subheader:o,list:s,...i}){const[n,c]=x.useState(["2"]),a=l=>{const d=n.includes(l)?n.filter(p=>p!==l):[...n,l];c(d)};return e.jsxs(j,{...i,children:[e.jsx(T,{title:t,subheader:o}),s.map(l=>e.jsx(z,{task:l,checked:n.includes(l.id),onChange:()=>a(l.id)},l.id))]})}V.propTypes={list:r.array,subheader:r.string,title:r.string};function z({task:t,checked:o,onChange:s}){const[i,n]=x.useState(null),c=N=>{n(N.currentTarget)},a=()=>{n(null)},l=()=>{a(),console.info("MARK COMPLETE",t.id)},d=()=>{a(),console.info("SHARE",t.id)},p=()=>{a(),console.info("EDIT",t.id)},h=()=>{a(),console.info("DELETE",t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(k,{direction:"row",alignItems:"center",sx:{pl:2,pr:1,py:1,"&:not(:last-of-type)":{borderBottom:N=>`dashed 1px ${N.palette.divider}`},...o&&{color:"text.disabled",textDecoration:"line-through"}},children:[e.jsx(xe,{control:e.jsx(ue,{checked:o,onChange:s}),label:t.name,sx:{flexGrow:1,m:0}}),e.jsx(se,{color:i?"inherit":"default",onClick:c,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(ie,{open:!!i,anchorEl:i,onClose:a,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsxs(I,{onClick:l,children:[e.jsx(g,{icon:"eva:checkmark-circle-2-fill",sx:{mr:2}}),"Mark Complete"]}),e.jsxs(I,{onClick:p,children:[e.jsx(g,{icon:"solar:pen-bold",sx:{mr:2}}),"Edit"]}),e.jsxs(I,{onClick:d,children:[e.jsx(g,{icon:"solar:share-bold",sx:{mr:2}}),"Share"]}),e.jsxs(I,{onClick:h,sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold",sx:{mr:2}}),"Delete"]})]})]})}z.propTypes={checked:r.bool,onChange:r.func,task:r.object};function q({title:t,subheader:o,list:s,...i}){return e.jsxs(j,{...i,children:[e.jsx(T,{title:t,subheader:o}),e.jsx(ne,{children:e.jsx(k,{spacing:3,sx:{p:3,pr:0},children:s.map(n=>e.jsx(K,{news:n},n.id))})}),e.jsx(re,{sx:{borderStyle:"dashed"}}),e.jsx(b,{sx:{p:2,textAlign:"right"},children:e.jsx(le,{size:"small",color:"inherit",endIcon:e.jsx(g,{icon:"eva:arrow-ios-forward-fill"}),children:"View all"})})]})}q.propTypes={title:r.string,subheader:r.string,list:r.array.isRequired};function K({news:t}){const{image:o,title:s,description:i,postedAt:n}=t;return e.jsxs(k,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(b,{component:"img",alt:s,src:o,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),e.jsxs(b,{sx:{minWidth:240,flexGrow:1},children:[e.jsx(ae,{color:"inherit",variant:"subtitle2",underline:"hover",noWrap:!0,children:s}),e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:i})]}),e.jsx(f,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:ce(n)})]})}K.propTypes={news:r.shape({image:r.string,title:r.string,description:r.string,postedAt:r.instanceOf(Date)})};const fe=x.createContext({}),D=fe;function je(t){return S("MuiTimeline",t)}v("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function M(t){return t==="alternate-reverse"?"positionAlternateReverse":`position${U(t)}`}const be=["position","className"],Ce=t=>{const{position:o,classes:s}=t,i={root:["root",o&&M(o)]};return $(i,je,s)},Te=C("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,s.position&&o[M(s.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),ve=x.forwardRef(function(o,s){const i=w({props:o,name:"MuiTimeline"}),{position:n="right",className:c}=i,a=R(i,be),l=m({},i,{position:n}),d=Ce(l),p=x.useMemo(()=>({position:n}),[n]);return e.jsx(D.Provider,{value:p,children:e.jsx(Te,m({className:A(d.root,c),ownerState:l,ref:s},a))})}),ye=ve;function Se(t){return S("MuiTimelineDot",t)}v("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const we=["className","color","variant"],Re=t=>{const{color:o,variant:s,classes:i}=t,n={root:["root",s,o!=="inherit"&&`${s}${U(o)}`]};return $(n,Se,i)},Ae=C("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,o[s.color!=="inherit"&&`${s.variant}${U(s.color)}`],o[s.variant]]}})(({ownerState:t,theme:o})=>m({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(o.vars||o).shadows[1],margin:"11.5px 0"},t.variant==="filled"&&m({borderColor:"transparent"},t.color!=="inherit"&&m({},t.color==="grey"?{color:(o.vars||o).palette.grey[50],backgroundColor:(o.vars||o).palette.grey[400]}:{color:(o.vars||o).palette[t.color].contrastText,backgroundColor:(o.vars||o).palette[t.color].main})),t.variant==="outlined"&&m({boxShadow:"none",backgroundColor:"transparent"},t.color!=="inherit"&&m({},t.color==="grey"?{borderColor:(o.vars||o).palette.grey[400]}:{borderColor:(o.vars||o).palette[t.color].main})))),$e=x.forwardRef(function(o,s){const i=w({props:o,name:"MuiTimelineDot"}),{className:n,color:c="grey",variant:a="filled"}=i,l=R(i,we),d=m({},i,{color:c,variant:a}),p=Re(d);return e.jsx(Ae,m({className:A(p.root,n),ownerState:d,ref:s},l))}),Me=$e;function Ne(t){return S("MuiTimelineContent",t)}const Oe=v("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),ke=Oe,Ie=["className"],De=t=>{const{position:o,classes:s}=t,i={root:["root",M(o)]};return $(i,Ne,s)},Ee=C(f,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,o[M(s.position)]]}})(({ownerState:t})=>m({flex:1,padding:"6px 16px",textAlign:"left"},t.position==="left"&&{textAlign:"right"})),_e=x.forwardRef(function(o,s){const i=w({props:o,name:"MuiTimelineContent"}),{className:n}=i,c=R(i,Ie),{position:a}=x.useContext(D),l=m({},i,{position:a||"right"}),d=De(l);return e.jsx(Ee,m({component:"div",className:A(d.root,n),ownerState:l,ref:s},c))}),Ue=_e;function Ge(t){return S("MuiTimelineSeparator",t)}v("MuiTimelineSeparator",["root"]);const He=["className"],Le=t=>{const{classes:o}=t;return $({root:["root"]},Ge,o)},Pe=C("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(t,o)=>o.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),We=x.forwardRef(function(o,s){const i=w({props:o,name:"MuiTimelineSeparator"}),{className:n}=i,c=R(i,He),a=i,l=Le(a);return e.jsx(Pe,m({className:A(l.root,n),ownerState:a,ref:s},c))}),Fe=We;function Be(t){return S("MuiTimelineConnector",t)}v("MuiTimelineConnector",["root"]);const Ve=["className"],ze=t=>{const{classes:o}=t;return $({root:["root"]},Be,o)},qe=C("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({width:2,backgroundColor:(t.vars||t).palette.grey[400],flexGrow:1})),Ke=x.forwardRef(function(o,s){const i=w({props:o,name:"MuiTimelineConnector"}),{className:n}=i,c=R(i,Ve),a=i,l=ze(a);return e.jsx(qe,m({className:A(l.root,n),ownerState:a,ref:s},c))}),Je=Ke,Xe=v("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Qe=Xe;function Ye(t){return S("MuiTimelineItem",t)}const Ze=v("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),et=Ze,tt=["position","className"],ot=t=>{const{position:o,classes:s,hasOppositeContent:i}=t,n={root:["root",M(o),!i&&"missingOppositeContent"]};return $(n,Ye,s)},st=C("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,o[M(s.position)]]}})(({ownerState:t})=>m({listStyle:"none",display:"flex",position:"relative",minHeight:70},t.position==="left"&&{flexDirection:"row-reverse"},(t.position==="alternate"||t.position==="alternate-reverse")&&{[`&:nth-of-type(${t.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${ke.root}`]:{textAlign:"right"},[`& .${Qe.root}`]:{textAlign:"left"}}},!t.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),it=x.forwardRef(function(o,s){const i=w({props:o,name:"MuiTimelineItem"}),{position:n,className:c}=i,a=R(i,tt),{position:l}=x.useContext(D);let d=!1;x.Children.forEach(i.children,oe=>{he(oe,["TimelineOppositeContent"])&&(d=!0)});const p=m({},i,{position:n||l||"right",hasOppositeContent:d}),h=ot(p),N=x.useMemo(()=>({position:p.position}),[p.position]);return e.jsx(D.Provider,{value:N,children:e.jsx(st,m({className:A(h.root,c),ownerState:p,ref:s},a))})}),nt=it;function J({title:t,subheader:o,list:s,...i}){return e.jsxs(j,{...i,children:[e.jsx(T,{title:t,subheader:o}),e.jsx(ye,{sx:{m:0,p:3,[`& .${et.root}:before`]:{flex:0,padding:0}},children:s.map((n,c)=>e.jsx(X,{item:n,lastTimeline:c===s.length-1},n.id))})]})}J.propTypes={list:r.array,subheader:r.string,title:r.string};function X({item:t,lastTimeline:o}){const{type:s,title:i,time:n}=t;return e.jsxs(nt,{children:[e.jsxs(Fe,{children:[e.jsx(Me,{color:s==="order1"&&"primary"||s==="order2"&&"success"||s==="order3"&&"info"||s==="order4"&&"warning"||"error"}),o?null:e.jsx(Je,{})]}),e.jsxs(Ue,{children:[e.jsx(f,{variant:"subtitle2",children:i}),e.jsx(f,{variant:"caption",sx:{color:"text.disabled"},children:pe(n)})]})]})}X.propTypes={item:r.object,lastTimeline:r.bool};const G=400,H=72,rt=C(_)(({theme:t})=>({height:G,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:H,borderTop:`dashed 1px ${t.palette.divider}`,top:`calc(${G-H}px) !important`}}));function Q({title:t,subheader:o,chart:s,...i}){const n=W(),{colors:c,series:a,options:l}=s,d=a.map(h=>h.value),p=E({chart:{sparkline:{enabled:!0}},colors:c,labels:a.map(h=>h.label),stroke:{colors:[n.palette.background.paper]},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:h=>F(h),title:{formatter:h=>`${h}`}}},plotOptions:{pie:{donut:{labels:{show:!1}}}},...l});return e.jsxs(j,{...i,children:[e.jsx(T,{title:t,subheader:o,sx:{mb:5}}),e.jsx(rt,{dir:"ltr",type:"pie",series:d,options:p,width:"100%",height:280})]})}Q.propTypes={chart:r.object,subheader:r.string,title:r.string};function Y({title:t,subheader:o,chart:s,...i}){const{labels:n,colors:c,series:a,options:l}=s,d=E({colors:c,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:a.map(p=>p.fill)},labels:n,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:p=>typeof p<"u"?`${p.toFixed(0)} visits`:p}},...l});return e.jsxs(j,{...i,children:[e.jsx(T,{title:t,subheader:o}),e.jsx(b,{sx:{p:3,pb:1},children:e.jsx(_,{dir:"ltr",type:"line",series:a,options:d,width:"100%",height:364})})]})}Y.propTypes={chart:r.object,subheader:r.string,title:r.string};function O({title:t,total:o,icon:s,color:i="primary",sx:n,...c}){return e.jsxs(j,{component:k,spacing:3,direction:"row",sx:{px:3,py:5,borderRadius:2,...n},...c,children:[s&&e.jsx(b,{sx:{width:64,height:64},children:s}),e.jsxs(k,{spacing:.5,children:[e.jsx(f,{variant:"h4",children:B(o)}),e.jsx(f,{variant:"subtitle2",sx:{color:"text.disabled"},children:t})]})]})}O.propTypes={color:r.string,icon:r.oneOfType([r.element,r.string]),sx:r.object,title:r.string,total:r.number};function Z({title:t,subheader:o,list:s,...i}){return e.jsxs(j,{...i,children:[e.jsx(T,{title:t,subheader:o}),e.jsx(b,{sx:{p:3,gap:2,display:"grid",gridTemplateColumns:"repeat(2, 1fr)"},children:s.map(n=>e.jsxs(de,{variant:"outlined",sx:{py:2.5,textAlign:"center",borderStyle:"dashed"},children:[e.jsx(b,{sx:{mb:.5},children:n.icon}),e.jsx(f,{variant:"h6",children:B(n.value)}),e.jsx(f,{variant:"body2",sx:{color:"text.secondary"},children:n.name})]},n.name))})]})}Z.propTypes={title:r.string,subheader:r.string,list:r.array.isRequired};const L=400,P=72,lt=C(_)(({theme:t})=>({height:L,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:P,borderTop:`dashed 1px ${t.palette.divider}`,top:`calc(${L-P}px) !important`}}));function ee({title:t,subheader:o,chart:s,...i}){const n=W(),{series:c,colors:a,categories:l,options:d}=s,p=E({colors:a,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:l,labels:{style:{colors:[...Array(6)].map(()=>n.palette.text.secondary)}}},...d});return e.jsxs(j,{...i,children:[e.jsx(T,{title:t,subheader:o,sx:{mb:5}}),e.jsx(lt,{dir:"ltr",type:"radar",series:c,options:p,width:"100%",height:340})]})}ee.propTypes={chart:r.object,subheader:r.string,title:r.string};function te({title:t,subheader:o,chart:s,...i}){const{colors:n,series:c,options:a}=s,l=c.map(p=>p.value),d=E({colors:n,tooltip:{marker:{show:!1},y:{formatter:p=>F(p),title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:c.map(p=>p.label)},...a});return e.jsxs(j,{...i,children:[e.jsx(T,{title:t,subheader:o}),e.jsx(b,{sx:{mx:3},children:e.jsx(_,{dir:"ltr",type:"bar",series:[{data:l}],options:d,width:"100%",height:364})})]})}te.propTypes={chart:r.object,subheader:r.string,title:r.string};function at(){return e.jsxs(ge,{maxWidth:"xl",children:[e.jsx(f,{variant:"h4",sx:{mb:5},children:"Hi, Welcome back 👋"}),e.jsxs(u,{container:!0,spacing:3,children:[e.jsx(u,{xs:12,sm:6,md:3,children:e.jsx(O,{title:"Weekly Sales",total:714e3,color:"success",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),e.jsx(u,{xs:12,sm:6,md:3,children:e.jsx(O,{title:"New Users",total:1352831,color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),e.jsx(u,{xs:12,sm:6,md:3,children:e.jsx(O,{title:"Item Orders",total:1723315,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),e.jsx(u,{xs:12,sm:6,md:3,children:e.jsx(O,{title:"Bug Reports",total:234,color:"error",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_message.png"})})}),e.jsx(u,{xs:12,md:6,lg:8,children:e.jsx(Y,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsx(Q,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}]}})}),e.jsx(u,{xs:12,md:6,lg:8,children:e.jsx(te,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsx(ee,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),e.jsx(u,{xs:12,md:6,lg:8,children:e.jsx(q,{title:"News Update",list:[...Array(5)].map((t,o)=>({id:y.string.uuid(),title:y.person.jobTitle(),description:y.commerce.productDescription(),image:`/assets/images/covers/cover_${o+1}.jpg`,postedAt:y.date.recent()}))})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsx(J,{title:"Order Timeline",list:[...Array(5)].map((t,o)=>({id:y.string.uuid(),title:["1983, orders, $4220","12 Invoices have been paid","Order #37745 from September","New order placed #XF-2356","New order placed #XF-2346"][o],type:`order${o+1}`,time:y.date.past()}))})}),e.jsx(u,{xs:12,md:6,lg:4,children:e.jsx(Z,{title:"Traffic by Site",list:[{name:"FaceBook",value:323234,icon:e.jsx(g,{icon:"eva:facebook-fill",color:"#1877F2",width:32})},{name:"Google",value:341212,icon:e.jsx(g,{icon:"eva:google-fill",color:"#DF3E30",width:32})},{name:"Linkedin",value:411213,icon:e.jsx(g,{icon:"eva:linkedin-fill",color:"#006097",width:32})},{name:"Twitter",value:443232,icon:e.jsx(g,{icon:"eva:twitter-fill",color:"#1C9CEA",width:32})}]})}),e.jsx(u,{xs:12,md:6,lg:8,children:e.jsx(V,{title:"Tasks",list:[{id:"1",name:"Create FireStone Logo"},{id:"2",name:"Add SCSS and JS files if required"},{id:"3",name:"Stakeholder Meeting"},{id:"4",name:"Scoping & Estimations"},{id:"5",name:"Sprint Showcase"}]})})]})]})}function ft(){return e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsx("title",{children:" Dashboard | Minimal UI "})}),e.jsx(at,{})]})}export{ft as default};
