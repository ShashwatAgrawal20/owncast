(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7373],{24093:function(e,t,r){"use strict";r.d(t,{C:function(){return S}});var n=r(87462),a=r(4942),c=r(71002),o=r(97685),s=r(94184),l=r.n(s),i=r(48555),u=r(42550),f=r(67294),p=r(53124),d=r(25378),m=r(24308),v=f.createContext("default"),g=function(e){var t=e.children,r=e.size;return f.createElement(v.Consumer,null,(function(e){return f.createElement(v.Provider,{value:r||e},t)}))},h=v,Z=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},y=function(e,t){var r,s,v=f.useContext(h),g=f.useState(1),y=(0,o.Z)(g,2),x=y[0],b=y[1],w=f.useState(!1),j=(0,o.Z)(w,2),E=j[0],O=j[1],C=f.useState(!0),S=(0,o.Z)(C,2),_=S[0],N=S[1],P=f.useRef(),k=f.useRef(),z=(0,u.sQ)(t,P),R=f.useContext(p.E_).getPrefixCls,A=function(){if(k.current&&P.current){var t=k.current.offsetWidth,r=P.current.offsetWidth;if(0!==t&&0!==r){var n=e.gap,a=void 0===n?4:n;2*a<r&&b(r-2*a<t?(r-2*a)/t:1)}}};f.useEffect((function(){O(!0)}),[]),f.useEffect((function(){N(!0),b(1)}),[e.src]),f.useEffect((function(){A()}),[e.gap]);var F,T=e.prefixCls,G=e.shape,W=e.size,H=e.src,I=e.srcSet,B=e.icon,L=e.className,M=e.alt,V=e.draggable,D=e.children,J=e.crossOrigin,Q=Z(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),X="default"===W?v:W,$=Object.keys("object"===(0,c.Z)(X)&&X||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),q=(0,d.Z)($),K=f.useMemo((function(){if("object"!==(0,c.Z)(X))return{};var e=m.c4.find((function(e){return q[e]})),t=X[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:B?t/2:18}:{}}),[q,X]),U=R("avatar",T),Y=l()((r={},(0,a.Z)(r,"".concat(U,"-lg"),"large"===X),(0,a.Z)(r,"".concat(U,"-sm"),"small"===X),r)),ee=f.isValidElement(H),te=l()(U,Y,(s={},(0,a.Z)(s,"".concat(U,"-").concat(G),!!G),(0,a.Z)(s,"".concat(U,"-image"),ee||H&&_),(0,a.Z)(s,"".concat(U,"-icon"),!!B),s),L),re="number"===typeof X?{width:X,height:X,lineHeight:"".concat(X,"px"),fontSize:B?X/2:18}:{};if("string"===typeof H&&_)F=f.createElement("img",{src:H,draggable:V,srcSet:I,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&N(!1)},alt:M,crossOrigin:J});else if(ee)F=H;else if(B)F=B;else if(E||1!==x){var ne="scale(".concat(x,") translateX(-50%)"),ae={msTransform:ne,WebkitTransform:ne,transform:ne},ce="number"===typeof X?{lineHeight:"".concat(X,"px")}:{};F=f.createElement(i.default,{onResize:A},f.createElement("span",{className:"".concat(U,"-string"),ref:function(e){k.current=e},style:(0,n.Z)((0,n.Z)({},ce),ae)},D))}else F=f.createElement("span",{className:"".concat(U,"-string"),style:{opacity:0},ref:function(e){k.current=e}},D);return delete Q.onError,delete Q.gap,f.createElement("span",(0,n.Z)({},Q,{style:(0,n.Z)((0,n.Z)((0,n.Z)({},re),K),Q.style),className:te,ref:z}),F)},x=f.forwardRef(y);x.defaultProps={shape:"circle",size:"default"};var b=x,w=r(50344),j=r(55241),E=r(96159),O=function(e){var t=f.useContext(p.E_),r=t.getPrefixCls,n=t.direction,c=e.prefixCls,o=e.className,s=void 0===o?"":o,i=e.maxCount,u=e.maxStyle,d=e.size,m=r("avatar-group",c),v=l()(m,(0,a.Z)({},"".concat(m,"-rtl"),"rtl"===n),s),h=e.children,Z=e.maxPopoverPlacement,y=void 0===Z?"top":Z,x=e.maxPopoverTrigger,O=void 0===x?"hover":x,C=(0,w.Z)(h).map((function(e,t){return(0,E.Tm)(e,{key:"avatar-key-".concat(t)})})),S=C.length;if(i&&i<S){var _=C.slice(0,i),N=C.slice(i,S);return _.push(f.createElement(j.Z,{key:"avatar-popover-key",content:N,trigger:O,placement:y,overlayClassName:"".concat(m,"-popover")},f.createElement(b,{style:u},"+".concat(S-i)))),f.createElement(g,{size:d},f.createElement("div",{className:v,style:e.style},_))}return f.createElement(g,{size:d},f.createElement("div",{className:v,style:e.style},C))},C=b;C.Group=O;var S=C},6226:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(4942),a=r(87462),c=r(71002),o=r(94184),s=r.n(o),l=r(67294),i=r(53124),u=r(99134),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var p=["xs","sm","md","lg","xl","xxl"];var d=l.forwardRef((function(e,t){var r,o=l.useContext(i.E_),d=o.getPrefixCls,m=o.direction,v=l.useContext(u.Z),g=v.gutter,h=v.wrap,Z=v.supportFlexGap,y=e.prefixCls,x=e.span,b=e.order,w=e.offset,j=e.push,E=e.pull,O=e.className,C=e.children,S=e.flex,_=e.style,N=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=d("col",y),k={};p.forEach((function(t){var r,o={},s=e[t];"number"===typeof s?o.span=s:"object"===(0,c.Z)(s)&&(o=s||{}),delete N[t],k=(0,a.Z)((0,a.Z)({},k),(r={},(0,n.Z)(r,"".concat(P,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,n.Z)(r,"".concat(P,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,n.Z)(r,"".concat(P,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,n.Z)(r,"".concat(P,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,n.Z)(r,"".concat(P,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,n.Z)(r,"".concat(P,"-rtl"),"rtl"===m),r))}));var z=s()(P,(r={},(0,n.Z)(r,"".concat(P,"-").concat(x),void 0!==x),(0,n.Z)(r,"".concat(P,"-order-").concat(b),b),(0,n.Z)(r,"".concat(P,"-offset-").concat(w),w),(0,n.Z)(r,"".concat(P,"-push-").concat(j),j),(0,n.Z)(r,"".concat(P,"-pull-").concat(E),E),r),O,k),R={};if(g&&g[0]>0){var A=g[0]/2;R.paddingLeft=A,R.paddingRight=A}if(g&&g[1]>0&&!Z){var F=g[1]/2;R.paddingTop=F,R.paddingBottom=F}return S&&(R.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),!1!==h||R.minWidth||(R.minWidth=0)),l.createElement("div",(0,a.Z)({},N,{style:(0,a.Z)((0,a.Z)({},R),_),className:z,ref:t}),C)}))},99134:function(e,t,r){"use strict";var n=(0,r(67294).createContext)({});t.Z=n},25968:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),a=r(4942),c=r(71002),o=r(97685),s=r(94184),l=r.n(s),i=r(67294),u=r(53124),f=r(98082),p=r(24308),d=r(93355),m=r(99134),v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};(0,d.b)("top","middle","bottom","stretch"),(0,d.b)("start","end","center","space-around","space-between","space-evenly");var g=i.forwardRef((function(e,t){var r,s=e.prefixCls,d=e.justify,g=e.align,h=e.className,Z=e.style,y=e.children,x=e.gutter,b=void 0===x?0:x,w=e.wrap,j=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),E=i.useContext(u.E_),O=E.getPrefixCls,C=E.direction,S=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),_=(0,o.Z)(S,2),N=_[0],P=_[1],k=(0,f.Z)(),z=i.useRef(b);i.useEffect((function(){var e=p.ZP.subscribe((function(e){var t=z.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&P(e)}));return function(){return p.ZP.unsubscribe(e)}}),[]);var R=O("row",s),A=function(){var e=[void 0,void 0];return(Array.isArray(b)?b:[b,void 0]).forEach((function(t,r){if("object"===(0,c.Z)(t))for(var n=0;n<p.c4.length;n++){var a=p.c4[n];if(N[a]&&void 0!==t[a]){e[r]=t[a];break}}else e[r]=t})),e}(),F=l()(R,(r={},(0,a.Z)(r,"".concat(R,"-no-wrap"),!1===w),(0,a.Z)(r,"".concat(R,"-").concat(d),d),(0,a.Z)(r,"".concat(R,"-").concat(g),g),(0,a.Z)(r,"".concat(R,"-rtl"),"rtl"===C),r),h),T={},G=null!=A[0]&&A[0]>0?A[0]/-2:void 0,W=null!=A[1]&&A[1]>0?A[1]/-2:void 0;if(G&&(T.marginLeft=G,T.marginRight=G),k){var H=(0,o.Z)(A,2);T.rowGap=H[1]}else W&&(T.marginTop=W,T.marginBottom=W);var I=(0,o.Z)(A,2),B=I[0],L=I[1],M=i.useMemo((function(){return{gutter:[B,L],wrap:w,supportFlexGap:k}}),[B,L,w,k]);return i.createElement(m.Z.Provider,{value:M},i.createElement("div",(0,n.Z)({},j,{className:F,style:(0,n.Z)((0,n.Z)({},T),Z),ref:t}),y))}))},97373:function(e,t,r){"use strict";r.r(t),r.d(t,{FollowerCollection:function(){return m}});var n=r(47568),a=r(70655),c=r(85893),o=r(67294),s=r(25968),l=r(6226),i=r(3698),u=r(24093),f=r(40305),p=r.n(f),d=function(e){var t=e.follower;return(0,c.jsx)("div",{className:p().follower,children:(0,c.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:(0,c.jsxs)(s.Z,{wrap:!1,children:[(0,c.jsx)(l.Z,{span:6,children:(0,c.jsx)(u.C,{src:t.image,alt:"Avatar",className:p().avatar,children:(0,c.jsx)("img",{src:"/logo",alt:"Logo",className:p().placeholder})})}),(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(s.Z,{children:t.name}),(0,c.jsx)(s.Z,{className:p().account,children:t.username})]})]})})})},m=function(){var e=(0,o.useState)([]),t=e[0],r=e[1],u=(0,o.useState)(0),f=u[0],m=u[1],v=(0,o.useState)(1),g=v[0],h=v[1],Z=Math.ceil(f/24),y=function(){var e=(0,n.Z)((function(){var e,t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch("".concat("/api/followers","?page=").concat(g))];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),r(e.response),m(e.total),[3,4];case 3:return t=n.sent(),console.error(t),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){y()}),[]),(0,o.useEffect)((function(){y()}),[g]);var x=(0,c.jsx)("div",{children:"A message explaining how to follow goes here since there are no followers."});return(null===t||void 0===t?void 0:t.length)?(0,c.jsxs)("div",{className:p().followers,children:[(0,c.jsx)(s.Z,{wrap:!0,gutter:[10,10],justify:"space-around",children:t.map((function(e){return(0,c.jsx)(l.Z,{children:(0,c.jsx)(d,{follower:e},e.link)})}))}),(0,c.jsx)(i.Z,{current:g,pageSize:24,total:Z||1,onChange:function(e){h(e)},hideOnSinglePage:!0})]}):x}},40305:function(e){e.exports={follower:"SingleFollower_follower__EyBDI",avatar:"SingleFollower_avatar__V9jHG",account:"SingleFollower_account__Z66vo",placeholder:"SingleFollower_placeholder__CgsfJ"}}}]);