import{r as t,g as I,a as K,e as k,K as D,j,N as Q,_ as b,l as B,O as F,Q as V,h as q,b as z,R as G,d as J}from"./index-0448d21d.js";import{c as X}from"./popper-f3391c26.js";const Y={disableDefaultClasses:!1},Z=t.createContext(Y);function ee(e){const{disableDefaultClasses:o}=t.useContext(Z);return f=>o?"":e(f)}function oe(e){return I("MuiPopper",e)}K("MuiPopper",["root"]);const te=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],ne=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function re(e,o){if(o==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function g(e){return typeof e=="function"?e():e}function se(e){return e.nodeType!==void 0}const pe=()=>q({root:["root"]},ee(oe)),le={},ie=t.forwardRef(function(o,f){var r;const{anchorEl:s,children:p,direction:y,disablePortal:d,modifiers:l,open:R,placement:u,popperOptions:i,popperRef:x,slotProps:v={},slots:C={},TransitionProps:a}=o,O=k(o,te),E=t.useRef(null),T=B(E,f),n=t.useRef(null),c=B(n,x),m=t.useRef(c);F(()=>{m.current=c},[c]),t.useImperativeHandle(x,()=>n.current,[]);const P=re(u,y),[h,S]=t.useState(P),[w,M]=t.useState(g(s));t.useEffect(()=>{n.current&&n.current.forceUpdate()}),t.useEffect(()=>{s&&M(g(s))},[s]),F(()=>{if(!w||!R)return;const W=U=>{S(U.placement)};let _=[{name:"preventOverflow",options:{altBoundary:d}},{name:"flip",options:{altBoundary:d}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:U})=>{W(U)}}];l!=null&&(_=_.concat(l)),i&&i.modifiers!=null&&(_=_.concat(i.modifiers));const N=X(w,E.current,b({placement:P},i,{modifiers:_}));return m.current(N),()=>{N.destroy(),m.current(null)}},[w,d,l,R,i,P]);const $={placement:h};a!==null&&($.TransitionProps=a);const H=pe(),A=(r=C.root)!=null?r:"div",L=V({elementType:A,externalSlotProps:v.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:T},ownerState:o,className:H.root});return j.jsx(A,b({},L,{children:typeof p=="function"?p($):p}))}),ae=t.forwardRef(function(o,f){const{anchorEl:r,children:s,container:p,direction:y="ltr",disablePortal:d=!1,keepMounted:l=!1,modifiers:R,open:u,placement:i="bottom",popperOptions:x=le,popperRef:v,style:C,transition:a=!1,slotProps:O={},slots:E={}}=o,T=k(o,ne),[n,c]=t.useState(!0),m=()=>{c(!1)},P=()=>{c(!0)};if(!l&&!u&&(!a||n))return null;let h;if(p)h=p;else if(r){const M=g(r);h=M&&se(M)?D(M).body:D(null).body}const S=!u&&l&&(!a||n)?"none":void 0,w=a?{in:u,onEnter:m,onExited:P}:void 0;return j.jsx(Q,{disablePortal:d,container:h,children:j.jsx(ie,b({anchorEl:r,direction:y,disablePortal:d,modifiers:R,ref:f,open:a?!n:u,placement:i,popperOptions:x,popperRef:v,slotProps:O,slots:E},T,{style:b({position:"fixed",top:0,left:0,display:S},C),TransitionProps:w,children:s}))})}),ce=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],de=z(ae,{name:"MuiPopper",slot:"Root",overridesResolver:(e,o)=>o.root})({}),ue=t.forwardRef(function(o,f){var r;const s=G(),p=J({props:o,name:"MuiPopper"}),{anchorEl:y,component:d,components:l,componentsProps:R,container:u,disablePortal:i,keepMounted:x,modifiers:v,open:C,placement:a,popperOptions:O,popperRef:E,transition:T,slots:n,slotProps:c}=p,m=k(p,ce),P=(r=n==null?void 0:n.root)!=null?r:l==null?void 0:l.Root,h=b({anchorEl:y,container:u,disablePortal:i,keepMounted:x,modifiers:v,open:C,placement:a,popperOptions:O,popperRef:E,transition:T},m);return j.jsx(de,b({as:d,direction:s==null?void 0:s.direction,slots:{root:P},slotProps:c??R},h,{ref:f}))}),Pe=ue;export{Pe as P};
