(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2476],{24093:function(e,t,r){"use strict";r.d(t,{C:function(){return C}});var n=r(87462),a=r(4942),i=r(71002),c=r(97685),s=r(94184),o=r.n(s),l=r(48555),u=r(42550),d=r(67294),f=r(53124),m=r(25378),h=r(24308),p=d.createContext("default"),g=function(e){var t=e.children,r=e.size;return d.createElement(p.Consumer,null,(function(e){return d.createElement(p.Provider,{value:r||e},t)}))},v=p,y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},x=function(e,t){var r,s,p=d.useContext(v),g=d.useState(1),x=(0,c.Z)(g,2),w=x[0],Z=x[1],b=d.useState(!1),k=(0,c.Z)(b,2),j=k[0],S=k[1],E=d.useState(!0),C=(0,c.Z)(E,2),O=C[0],_=C[1],P=d.useRef(),z=d.useRef(),T=(0,u.sQ)(t,P),I=d.useContext(f.E_).getPrefixCls,A=function(){if(z.current&&P.current){var t=z.current.offsetWidth,r=P.current.offsetWidth;if(0!==t&&0!==r){var n=e.gap,a=void 0===n?4:n;2*a<r&&Z(r-2*a<t?(r-2*a)/t:1)}}};d.useEffect((function(){S(!0)}),[]),d.useEffect((function(){_(!0),Z(1)}),[e.src]),d.useEffect((function(){A()}),[e.gap]);var N,D=e.prefixCls,R=e.shape,Q=e.size,M=e.src,F=e.srcSet,q=e.icon,H=e.className,B=e.alt,U=e.draggable,W=e.children,X=e.crossOrigin,K=y(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),Y="default"===Q?p:Q,G=Object.keys("object"===(0,i.Z)(Y)&&Y||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),L=(0,m.Z)(G),V=d.useMemo((function(){if("object"!==(0,i.Z)(Y))return{};var e=h.c4.find((function(e){return L[e]})),t=Y[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:q?t/2:18}:{}}),[L,Y]),$=I("avatar",D),J=o()((r={},(0,a.Z)(r,"".concat($,"-lg"),"large"===Y),(0,a.Z)(r,"".concat($,"-sm"),"small"===Y),r)),ee=d.isValidElement(M),te=o()($,J,(s={},(0,a.Z)(s,"".concat($,"-").concat(R),!!R),(0,a.Z)(s,"".concat($,"-image"),ee||M&&O),(0,a.Z)(s,"".concat($,"-icon"),!!q),s),H),re="number"===typeof Y?{width:Y,height:Y,lineHeight:"".concat(Y,"px"),fontSize:q?Y/2:18}:{};if("string"===typeof M&&O)N=d.createElement("img",{src:M,draggable:U,srcSet:F,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&_(!1)},alt:B,crossOrigin:X});else if(ee)N=M;else if(q)N=q;else if(j||1!==w){var ne="scale(".concat(w,") translateX(-50%)"),ae={msTransform:ne,WebkitTransform:ne,transform:ne},ie="number"===typeof Y?{lineHeight:"".concat(Y,"px")}:{};N=d.createElement(l.default,{onResize:A},d.createElement("span",{className:"".concat($,"-string"),ref:function(e){z.current=e},style:(0,n.Z)((0,n.Z)({},ie),ae)},W))}else N=d.createElement("span",{className:"".concat($,"-string"),style:{opacity:0},ref:function(e){z.current=e}},W);return delete K.onError,delete K.gap,d.createElement("span",(0,n.Z)({},K,{style:(0,n.Z)((0,n.Z)((0,n.Z)({},re),V),K.style),className:te,ref:T}),N)},w=d.forwardRef(x);w.defaultProps={shape:"circle",size:"default"};var Z=w,b=r(50344),k=r(55241),j=r(96159),S=function(e){var t=d.useContext(f.E_),r=t.getPrefixCls,n=t.direction,i=e.prefixCls,c=e.className,s=void 0===c?"":c,l=e.maxCount,u=e.maxStyle,m=e.size,h=r("avatar-group",i),p=o()(h,(0,a.Z)({},"".concat(h,"-rtl"),"rtl"===n),s),v=e.children,y=e.maxPopoverPlacement,x=void 0===y?"top":y,w=e.maxPopoverTrigger,S=void 0===w?"hover":w,E=(0,b.Z)(v).map((function(e,t){return(0,j.Tm)(e,{key:"avatar-key-".concat(t)})})),C=E.length;if(l&&l<C){var O=E.slice(0,l),_=E.slice(l,C);return O.push(d.createElement(k.Z,{key:"avatar-popover-key",content:_,trigger:S,placement:x,overlayClassName:"".concat(h,"-popover")},d.createElement(Z,{style:u},"+".concat(C-l)))),d.createElement(g,{size:m},d.createElement("div",{className:p,style:e.style},O))}return d.createElement(g,{size:m},d.createElement("div",{className:p,style:e.style},E))},E=Z;E.Group=S;var C=E},89675:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/followers",function(){return r(72301)}])},72301:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(47568),a=r(29815),i=r(70655),c=r(85893),s=r(67294),o=r(2944),l=r(10355),u=r(24093),d=r(71577),f=r(58091),m=r(1413),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},p=r(42135),g=function(e,t){return s.createElement(p.Z,(0,m.Z)((0,m.Z)({},e),{},{ref:t,icon:h}))};g.displayName="UserAddOutlined";var v=s.forwardRef(g),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 901.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534zM880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-delete",theme:"outlined"},x=function(e,t){return s.createElement(p.Z,(0,m.Z)((0,m.Z)({},e),{},{ref:t,icon:y}))};x.displayName="UserDeleteOutlined";var w=s.forwardRef(x),Z=r(35159),b=r(58827),k=r(2766),j=o.Z.TabPane;function S(){var e=function(e,t){return(0,c.jsx)(l.Z,{dataSource:e,columns:t,size:"small",rowKey:function(e){return e.link},pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:C},onChange:function(e){var t=e.current;z(t)}})},t=(0,s.useState)([]),r=t[0],m=t[1],h=(0,s.useState)([]),p=h[0],g=h[1],y=(0,s.useState)([]),x=y[0],S=y[1],E=(0,s.useState)(0),C=E[0],O=E[1],_=(0,s.useState)(0),P=_[0],z=_[1],T=((0,s.useContext)(Z.aC)||{}).serverConfig.federation.isPrivate,I=function(){var e=(0,n.Z)((function(){var e,t,r,n,a,c,s,o,l,u,d;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),50,e=50*P,t="".concat(b.HP,"?offset=").concat(e,"&limit=").concat(50),n={},[4,(0,b.rQ)(t,(n.auth=!0,n))];case 1:return r=i.sent(),a=r.results,c=r.total,(0,k.Qr)(a)?S([]):(O(c),S(a)),o={},[4,(0,b.rQ)(b.E8,(o.auth=!0,o))];case 2:return s=i.sent(),(0,k.Qr)(s)?m([]):m(s),u={},[4,(0,b.rQ)(b.Y9,(u.auth=!0,u))];case 3:return l=i.sent(),(0,k.Qr)(p)?g([]):g(l),[3,5];case 4:return d=i.sent(),console.log("==== error",d),[3,5];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){I()}),[]);var A=[{title:"",dataIndex:"image",key:"image",width:90,render:function(e){return(0,c.jsx)(u.C,{size:40,src:e||"/img/logo.svg"})}},{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return(0,c.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.name||t.username})}},{title:"URL",dataIndex:"link",key:"link",render:function(e,t){return(0,c.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})}}];function N(e){return D.apply(this,arguments)}function D(){return(D=(0,n.Z)((function(e){var t,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t={},[4,(0,b.rQ)(b.kb,(t.auth=!0,t.method="POST",t.data={actorIRI:e.link,approved:!0},t))];case 1:return n.sent(),I(),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}function R(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,n.Z)((function(e){var t,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t={},[4,(0,b.rQ)(b.kb,(t.auth=!0,t.method="POST",t.data={actorIRI:e.link,approved:!1},t))];case 1:return n.sent(),I(),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return[2]}}))}))).apply(this,arguments)}var M=(0,a.Z)(A);M.unshift({title:"Approve",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(d.Z,{type:"primary",icon:(0,c.jsx)(v,{}),onClick:function(){N(e)}})},width:50},{title:"Reject",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(d.Z,{type:"primary",danger:!0,icon:(0,c.jsx)(w,{}),onClick:function(){R(e)}})},width:50}),M.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,f.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"});var F=(0,a.Z)(A);F.unshift({title:"Approve",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(d.Z,{type:"primary",icon:(0,c.jsx)(v,{}),size:"large",onClick:function(){N(e)}})},width:50}),F.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,f.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Rejected/Blocked",dataIndex:"timestamp",key:"disabled_at",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,f.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"});var q=(0,a.Z)(A);q.push({title:"Added",dataIndex:"timestamp",key:"timestamp",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,f.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Remove",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(d.Z,{type:"primary",danger:!0,icon:(0,c.jsx)(w,{}),onClick:function(){R(e)}})},width:50});var H=T&&(0,c.jsxs)(j,{tab:(0,c.jsxs)("span",{children:["Requests ",r.length>0&&"(".concat(r.length,")")]}),children:[(0,c.jsxs)("p",{children:["The following people are requesting to follow your Owncast server on the"," ",(0,c.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",target:"_blank",rel:"noopener noreferrer",children:"Fediverse"})," ","and be alerted to when you go live. Each must be approved."]}),e(r,M)]},"2");return(0,c.jsx)("div",{className:"followers-section",children:(0,c.jsxs)(o.Z,{defaultActiveKey:"1",children:[(0,c.jsxs)(j,{tab:(0,c.jsxs)("span",{children:["Followers ",x.length>0&&"(".concat(x.length,")")]}),children:[(0,c.jsx)("p",{children:"The following accounts get notified when you go live or send a post."}),e(x,q)," "]},"1"),H,(0,c.jsxs)(j,{tab:(0,c.jsxs)("span",{children:["Blocked ",p.length>0&&"(".concat(p.length,")")]}),children:[(0,c.jsx)("p",{children:"The following people were either rejected or blocked by you. You can approve them as a follower."}),(0,c.jsx)("p",{children:e(p,F)})]},"3")]})})}},20943:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},13375:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},29815:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(20943);var a=r(13375);var i=r(91566);function c(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,a.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(20943);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[7330,7266,355,8091,2944,9774,2888,179],(function(){return t=89675,e(e.s=t);var t}));var t=e.O();_N_E=t}]);