(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4440],{24308:function(e,n,t){"use strict";t.d(n,{c4:function(){return i}});var a=t(4942),r=t(87462),i=["xxl","xl","lg","md","sm","xs"],s={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},o=new Map,c=-1,l={},d={matchHandlers:{},dispatch:function(e){return l=e,o.forEach((function(e){return e(l)})),o.size>=1},subscribe:function(e){return o.size||this.register(),c+=1,o.set(c,e),e(l),c},unsubscribe:function(e){o.delete(e),o.size||this.unregister()},unregister:function(){var e=this;Object.keys(s).forEach((function(n){var t=s[n],a=e.matchHandlers[t];null===a||void 0===a||a.mql.removeListener(null===a||void 0===a?void 0:a.listener)})),o.clear()},register:function(){var e=this;Object.keys(s).forEach((function(n){var t=s[n],i=function(t){var i=t.matches;e.dispatch((0,r.Z)((0,r.Z)({},l),(0,a.Z)({},n,i)))},o=window.matchMedia(t);o.addListener(i),e.matchHandlers[t]={mql:o,listener:i},i(o)}))}};n.ZP=d},6226:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(4942),r=t(87462),i=t(71002),s=t(94184),o=t.n(s),c=t(67294),l=t(53124),d=t(99134),u=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};var f=["xs","sm","md","lg","xl","xxl"];var p=c.forwardRef((function(e,n){var t,s=c.useContext(l.E_),p=s.getPrefixCls,h=s.direction,v=c.useContext(d.Z),m=v.gutter,g=v.wrap,x=v.supportFlexGap,b=e.prefixCls,y=e.span,Z=e.order,j=e.offset,w=e.push,k=e.pull,C=e.className,N=e.children,S=e.flex,T=e.style,E=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),O=p("col",b),P={};f.forEach((function(n){var t,s={},o=e[n];"number"===typeof o?s.span=o:"object"===(0,i.Z)(o)&&(s=o||{}),delete E[n],P=(0,r.Z)((0,r.Z)({},P),(t={},(0,a.Z)(t,"".concat(O,"-").concat(n,"-").concat(s.span),void 0!==s.span),(0,a.Z)(t,"".concat(O,"-").concat(n,"-order-").concat(s.order),s.order||0===s.order),(0,a.Z)(t,"".concat(O,"-").concat(n,"-offset-").concat(s.offset),s.offset||0===s.offset),(0,a.Z)(t,"".concat(O,"-").concat(n,"-push-").concat(s.push),s.push||0===s.push),(0,a.Z)(t,"".concat(O,"-").concat(n,"-pull-").concat(s.pull),s.pull||0===s.pull),(0,a.Z)(t,"".concat(O,"-rtl"),"rtl"===h),t))}));var _=o()(O,(t={},(0,a.Z)(t,"".concat(O,"-").concat(y),void 0!==y),(0,a.Z)(t,"".concat(O,"-order-").concat(Z),Z),(0,a.Z)(t,"".concat(O,"-offset-").concat(j),j),(0,a.Z)(t,"".concat(O,"-push-").concat(w),w),(0,a.Z)(t,"".concat(O,"-pull-").concat(k),k),t),C,P),L={};if(m&&m[0]>0){var I=m[0]/2;L.paddingLeft=I,L.paddingRight=I}if(m&&m[1]>0&&!x){var F=m[1]/2;L.paddingTop=F,L.paddingBottom=F}return S&&(L.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),!1!==g||L.minWidth||(L.minWidth=0)),c.createElement("div",(0,r.Z)({},E,{style:(0,r.Z)((0,r.Z)({},L),T),className:_,ref:n}),N)}))},99134:function(e,n,t){"use strict";var a=(0,t(67294).createContext)({});n.Z=a},25968:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(87462),r=t(4942),i=t(71002),s=t(97685),o=t(94184),c=t.n(o),l=t(67294),d=t(53124),u=t(98082),f=t(24308),p=t(93355),h=t(99134),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");var m=l.forwardRef((function(e,n){var t,o=e.prefixCls,p=e.justify,m=e.align,g=e.className,x=e.style,b=e.children,y=e.gutter,Z=void 0===y?0:y,j=e.wrap,w=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),k=l.useContext(d.E_),C=k.getPrefixCls,N=k.direction,S=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,s.Z)(S,2),E=T[0],O=T[1],P=(0,u.Z)(),_=l.useRef(Z);l.useEffect((function(){var e=f.ZP.subscribe((function(e){var n=_.current||0;(!Array.isArray(n)&&"object"===(0,i.Z)(n)||Array.isArray(n)&&("object"===(0,i.Z)(n[0])||"object"===(0,i.Z)(n[1])))&&O(e)}));return function(){return f.ZP.unsubscribe(e)}}),[]);var L=C("row",o),I=function(){var e=[void 0,void 0];return(Array.isArray(Z)?Z:[Z,void 0]).forEach((function(n,t){if("object"===(0,i.Z)(n))for(var a=0;a<f.c4.length;a++){var r=f.c4[a];if(E[r]&&void 0!==n[r]){e[t]=n[r];break}}else e[t]=n})),e}(),F=c()(L,(t={},(0,r.Z)(t,"".concat(L,"-no-wrap"),!1===j),(0,r.Z)(t,"".concat(L,"-").concat(p),p),(0,r.Z)(t,"".concat(L,"-").concat(m),m),(0,r.Z)(t,"".concat(L,"-rtl"),"rtl"===N),t),g),M={},U=null!=I[0]&&I[0]>0?I[0]/-2:void 0,D=null!=I[1]&&I[1]>0?I[1]/-2:void 0;if(U&&(M.marginLeft=U,M.marginRight=U),P){var q=(0,s.Z)(I,2);M.rowGap=q[1]}else D&&(M.marginTop=D,M.marginBottom=D);var A=(0,s.Z)(I,2),R=A[0],z=A[1],K=l.useMemo((function(){return{gutter:[R,z],wrap:j,supportFlexGap:P}}),[R,z,j,P]);return l.createElement(h.Z.Provider,{value:K},l.createElement("div",(0,a.Z)({},w,{className:F,style:(0,a.Z)((0,a.Z)({},M),x),ref:n}),b))}))},94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var a=t(87462),r=t(4942),i=t(50888),s=t(94184),o=t.n(s),c=t(97685),l=t(91),d=t(67294),u=t(21770),f=t(15105),p=d.forwardRef((function(e,n){var t,a=e.prefixCls,i=void 0===a?"rc-switch":a,s=e.className,p=e.checked,h=e.defaultChecked,v=e.disabled,m=e.loadingIcon,g=e.checkedChildren,x=e.unCheckedChildren,b=e.onClick,y=e.onChange,Z=e.onKeyDown,j=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=(0,u.Z)(!1,{value:p,defaultValue:h}),k=(0,c.Z)(w,2),C=k[0],N=k[1];function S(e,n){var t=C;return v||(N(t=e),null===y||void 0===y||y(t,n)),t}var T=o()(i,s,(t={},(0,r.Z)(t,"".concat(i,"-checked"),C),(0,r.Z)(t,"".concat(i,"-disabled"),v),t));return d.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":C,disabled:v,className:T,ref:n,onKeyDown:function(e){e.which===f.Z.LEFT?S(!1,e):e.which===f.Z.RIGHT&&S(!0,e),null===Z||void 0===Z||Z(e)},onClick:function(e){var n=S(!C,e);null===b||void 0===b||b(n,e)}}),m,d.createElement("span",{className:"".concat(i,"-inner")},C?g:x))}));p.displayName="Switch";var h=p,v=t(53124),m=t(98866),g=t(97647),x=t(68349),b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},y=d.forwardRef((function(e,n){var t,s=e.prefixCls,c=e.size,l=e.disabled,u=e.loading,f=e.className,p=void 0===f?"":f,y=b(e,["prefixCls","size","disabled","loading","className"]),Z=d.useContext(v.E_),j=Z.getPrefixCls,w=Z.direction,k=d.useContext(g.Z),C=d.useContext(m.Z),N=l||C||u,S=j("switch",s),T=d.createElement("div",{className:"".concat(S,"-handle")},u&&d.createElement(i.Z,{className:"".concat(S,"-loading-icon")})),E=o()((t={},(0,r.Z)(t,"".concat(S,"-small"),"small"===(c||k)),(0,r.Z)(t,"".concat(S,"-loading"),u),(0,r.Z)(t,"".concat(S,"-rtl"),"rtl"===w),t),p);return d.createElement(x.Z,{insertExtraNode:!0},d.createElement(h,(0,a.Z)({},y,{prefixCls:S,className:E,disabled:N,ref:n,loadingIcon:T})))}));y.__ANT_SWITCH=!0;var Z=y},7148:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-notify",function(){return t(91881)}])},3664:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var a=t(47568),r=t(70655),i=t(85893),s=t(67294),o=t(94594),c=t(83192),l=t(25521),d=t(25964),u=t(35159),f=function(e){var n=e.apiPath,t=e.checked,f=e.reversed,p=void 0!==f&&f,h=e.configPath,v=void 0===h?"":h,m=e.disabled,g=void 0!==m&&m,x=e.fieldName,b=e.label,y=e.tip,Z=e.useSubmit,j=e.onChange,w=(0,s.useState)(null),k=w[0],C=w[1],N=null,S=((0,s.useContext)(u.aC)||{}).setFieldInConfigState,T=function(){C(null),clearTimeout(N),N=null},E=function(){var e=(0,a.Z)((function(e){var t,a;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return Z?(C((0,c.kg)(c.Jk)),t=p?!e:e,a={},[4,(0,d.Si)((a.apiPath=n,a.data={value:t},a.onSuccess=function(){S({fieldName:x,value:t,path:v}),C((0,c.kg)(c.zv))},a.onError=function(e){C((0,c.kg)(c.Un,"There was an error: ".concat(e)))},a))]):[3,2];case 1:r.sent(),N=setTimeout(T,d.sI),r.label=2;case 2:return j&&j(e),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),O=null!==k&&k.type===c.Jk;return(0,i.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[b&&(0,i.jsx)("div",{className:"label-side",children:(0,i.jsx)("span",{className:"formfield-label",children:b})}),(0,i.jsxs)("div",{className:"input-side",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)(o.Z,{className:"switch field-".concat(x),loading:O,onChange:E,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:g}),(0,i.jsx)(l.E,{status:k})]}),(0,i.jsx)("p",{className:"field-tip",children:y})]})]})};f.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},91881:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var a=t(14924),r=t(26042),i=t(69396),s=t(85893),o=t(84485),c=t(14670),l=t(25968),d=t(6226),u=t(71577),f=t(67294),p=t(41664),h=t.n(p),v=t(47568),m=t(70655),g=t(35159),x=t(24389),b=t(25521),y=t(25964),Z=t(3664),j=t(83192),w=o.Z.Title,k=function(){var e=(0,f.useContext)(g.aC)||{},n=e.serverConfig,t=e.setFieldInConfigState,o=(n||{}).notifications,c=(o||{}).discord,l=c||{},d=l.enabled,p=l.webhook,h=l.goLiveMessage,k=(0,f.useState)({}),C=k[0],N=k[1],S=(0,f.useState)(null),T=S[0],E=S[1],O=(0,f.useState)(!1),P=O[0],_=O[1];(0,f.useEffect)((function(){N({enabled:d,webhook:p,goLiveMessage:h})}),[o,c]);var L=function(e){var n=e.fieldName,t=e.value;N((0,i.Z)((0,r.Z)({},C),(0,a.Z)({},n,t))),_(""!==p&&""!==h)},I=null,F=function(){E(null),I=null,clearTimeout(I)},M=function(){var e=(0,v.Z)((function(){var e,n;return(0,m.__generator)(this,(function(a){switch(a.label){case 0:return e=C,n={},[4,(0,y.Si)((n.apiPath="/notifications/discord",n.data={value:e},n.onSuccess=function(){t({fieldName:"discord",value:e,path:"notifications"}),E((0,j.kg)(j.zv,"Updated.")),I=setTimeout(F,y.sI)},n.onError=function(e){E((0,j.kg)(j.Un,e)),I=setTimeout(F,y.sI)},n))];case 1:return a.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{children:"Discord"}),(0,s.jsx)("p",{className:"description reduced-margins",children:"Let your Discord channel know each time you go live."}),(0,s.jsxs)("p",{className:"description reduced-margins",children:[(0,s.jsx)("a",{href:"https://support.discord.com/hc/en-us/articles/228383668",target:"_blank",rel:"noreferrer",children:"Create a webhook"})," ","under ",(0,s.jsx)("i",{children:"Edit Channel / Integrations"})," on your Discord channel and provide it below."]}),(0,s.jsx)(Z.Z,{apiPath:"",fieldName:"discordEnabled",label:"Enable Discord",checked:C.enabled,onChange:function(e){L({fieldName:"enabled",value:e})}}),(0,s.jsx)("div",{style:{display:C.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.oy.webhookUrl),{required:!0,value:C.webhook,onChange:L}))}),(0,s.jsx)("div",{style:{display:C.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.oy.goLiveMessage),{required:!0,value:C.goLiveMessage,onChange:L}))}),(0,s.jsx)(u.Z,{type:"primary",onClick:M,style:{display:P?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Save"}),(0,s.jsx)(b.E,{status:T})]})},C=o.Z.Title,N=function(){var e=(0,f.useContext)(g.aC)||{},n=e.serverConfig,t=e.setFieldInConfigState,o=(n||{}).notifications,c=(o||{}).browser,l=c||{},d=l.enabled,p=l.goLiveMessage,h=(0,f.useState)({}),w=h[0],k=h[1],N=(0,f.useState)(null),S=N[0],T=N[1],E=(0,f.useState)(!1),O=E[0],P=E[1];(0,f.useEffect)((function(){k({enabled:d,goLiveMessage:p})}),[o,c]);var _=function(e){var n=e.fieldName,t=e.value;console.log(n,t),k((0,i.Z)((0,r.Z)({},w),(0,a.Z)({},n,t))),P(!0)},L=null,I=function(){T(null),L=null,clearTimeout(L)},F=function(){var e=(0,v.Z)((function(){var e,n;return(0,m.__generator)(this,(function(a){switch(a.label){case 0:return e=w,n={},[4,(0,y.Si)((n.apiPath="/notifications/browser",n.data={value:e},n.onSuccess=function(){t({fieldName:"browser",value:e,path:"notifications"}),T((0,j.kg)(j.zv,"Updated.")),L=setTimeout(I,y.sI)},n.onError=function(e){T((0,j.kg)(j.Un,e)),L=setTimeout(I,y.sI)},n))];case 1:return a.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C,{children:"Browser Alerts"}),(0,s.jsx)("p",{className:"description reduced-margins",children:"Viewers can opt into being notified when you go live with their browser."}),(0,s.jsx)("p",{className:"description reduced-margins",children:"Not all browsers support this."}),(0,s.jsx)(Z.Z,{apiPath:"",fieldName:"enabled",label:"Enable browser notifications",onChange:function(e){_({fieldName:"enabled",value:e})},checked:w.enabled}),(0,s.jsx)("div",{style:{display:w.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.mv.goLiveMessage),{required:!0,type:x.Sk,value:w.goLiveMessage,onChange:_}))}),(0,s.jsx)(u.Z,{type:"primary",style:{display:O?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},onClick:F,children:"Save"}),(0,s.jsx)(b.E,{status:S})]})},S=t(45200),T=o.Z.Title,E=function(){var e=(0,f.useContext)(g.aC)||{},n=e.serverConfig,t=e.setFieldInConfigState,o=((n||{}).notifications||{}).twitter,c=(0,f.useState)({}),l=c[0],d=c[1],p=(0,f.useState)(null),h=p[0],w=p[1],k=(0,f.useState)(!1),C=k[0],N=k[1];(0,f.useEffect)((function(){var e=o||{},n=e.enabled,t=e.apiKey,a=e.apiSecret,r=e.accessToken,i=e.accessTokenSecret,s=e.bearerToken,c=e.goLiveMessage;d({enabled:n,apiKey:t,apiSecret:a,accessToken:r,accessTokenSecret:i,bearerToken:s,goLiveMessage:c})}),[o]);var E=function(e){var n=e.fieldName,t=e.value;d((0,i.Z)((0,r.Z)({},l),(0,a.Z)({},n,t))),N(function(){var e=l.enabled,n=l.apiKey,t=l.apiSecret,a=l.accessToken,r=l.accessTokenSecret,i=l.bearerToken,s=l.goLiveMessage;return e&&!!n&&!!t&&!!a&&!!r&&!!i&&!!s}())},O=null,P=function(){w(null),O=null,clearTimeout(O),N(!1)},_=function(){var e=(0,v.Z)((function(){var e,n;return(0,m.__generator)(this,(function(a){switch(a.label){case 0:return e=l,n={},[4,(0,y.Si)((n.apiPath="/notifications/twitter",n.data={value:e},n.onSuccess=function(){t({fieldName:"twitter",value:e,path:"notifications"}),w((0,j.kg)(j.zv,"Updated.")),O=setTimeout(P,y.sI)},n.onError=function(e){w((0,j.kg)(j.Un,e)),O=setTimeout(P,y.sI)},n))];case 1:return a.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(T,{children:"Twitter"}),(0,s.jsx)("p",{className:"description reduced-margins",children:"Let your Twitter followers know each time you go live."}),(0,s.jsxs)("div",{style:{display:l.enabled?"block":"none"},children:[(0,s.jsxs)("p",{className:"description reduced-margins",children:[(0,s.jsx)("a",{href:"https://owncast.online/docs/notifications",target:"_blank",rel:"noreferrer",children:"Read how to configure your Twitter account"})," ","to support posting from Owncast."]}),(0,s.jsxs)("p",{className:"description reduced-margins",children:[(0,s.jsx)("a",{href:"https://developer.twitter.com/en/portal/dashboard",target:"_blank",rel:"noreferrer",children:"And then get your Twitter developer credentials"})," ","to fill in below."]})]}),(0,s.jsx)(Z.Z,{apiPath:"",fieldName:"enabled",label:"Enable Twitter",onChange:function(e){var n=l.enabled;return E({fieldName:"enabled",value:e}),e!==n},checked:l.enabled}),(0,s.jsx)("div",{style:{display:l.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.$Z.apiKey),{required:!0,value:l.apiKey,onChange:E}))}),(0,s.jsx)("div",{style:{display:l.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.$Z.apiSecret),{type:x.A8,required:!0,value:l.apiSecret,onChange:E}))}),(0,s.jsx)("div",{style:{display:l.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.$Z.accessToken),{required:!0,value:l.accessToken,onChange:E}))}),(0,s.jsx)("div",{style:{display:l.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.$Z.accessTokenSecret),{type:x.A8,required:!0,value:l.accessTokenSecret,onChange:E}))}),(0,s.jsx)("div",{style:{display:l.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.$Z.bearerToken),{required:!0,value:l.bearerToken,onChange:E}))}),(0,s.jsx)("div",{style:{display:l.enabled?"block":"none"},children:(0,s.jsx)(x.nv,(0,i.Z)((0,r.Z)({},y.$Z.goLiveMessage),{type:S.Kx,required:!0,value:l.goLiveMessage,onChange:E}))}),(0,s.jsx)(u.Z,{type:"primary",onClick:_,style:{display:C?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Save"}),(0,s.jsx)(b.E,{status:h})]})},O=o.Z.Title,P=function(){var e=(((0,f.useContext)(g.aC)||{}).serverConfig||{}).federation,n=(e||{}).enabled,t=(0,f.useState)({}),a=t[0],r=t[1];return(0,f.useEffect)((function(){r({enabled:n})}),[n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(O,{children:"Fediverse Social"}),(0,s.jsx)("p",{className:"description",children:"Enabling the Fediverse social features will not just alert people to when you go live, but also enable other functionality."}),(0,s.jsxs)("p",{children:["Fediverse social features:"," ",(0,s.jsx)("span",{style:{color:e.enabled?"green":"red"},children:a.enabled?"Enabled":"Disabled"})]}),(0,s.jsx)(h(),{passHref:!0,href:"/config-federation",children:(0,s.jsx)(u.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Configure"})})]})},_=t(19411),L=o.Z.Title;function I(){var e=(0,f.useState)(null),n=e[0],t=e[1],o=((0,f.useContext)(g.aC)||{}).serverConfig.yp,p=o.instanceUrl,v=(0,f.useState)(!1),m=v[0],x=v[1];(0,f.useEffect)((function(){t({instanceUrl:p})}),[o]);var b=""!==p,Z=!b&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,s.jsx)("br",{}),(0,s.jsx)(S.$7,(0,i.Z)((0,r.Z)({fieldName:"instanceUrl"},y.yi),{value:(null===n||void 0===n?void 0:n.instanceUrl)||"",initialValue:o.instanceUrl,type:S.xA,onChange:function(e){var s=e.fieldName,o=e.value;x((0,_.Z)(o)),t((0,i.Z)((0,r.Z)({},n),(0,a.Z)({},s,o)))},onSubmit:function(){m&&t((0,i.Z)((0,r.Z)({},n),{enabled:!1}))},required:!0}))]});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(L,{children:"Notifications"}),(0,s.jsxs)("p",{className:"description",children:["Let your viewers know when you go live by supporting any of the below notification channels."," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/notifications/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more about live notifications."})]}),Z,(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(d.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,s.jsx)(N,{})}),(0,s.jsx)(d.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,s.jsx)(E,{})}),(0,s.jsx)(d.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,s.jsx)(k,{})}),(0,s.jsx)(d.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,s.jsx)(P,{})}),(0,s.jsxs)(d.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:[(0,s.jsx)(L,{children:"Custom"}),(0,s.jsx)("p",{className:"description",children:"Build your own notifications by using custom webhooks."}),(0,s.jsx)(h(),{passHref:!0,href:"/webhooks",children:(0,s.jsx)(u.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Create"})})]})]})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return n=7148,e(e.s=n);var n}));var n=e.O();_N_E=n}]);