(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9539)}])},8119:function(e,n,t){"use strict";t.d(n,{h:function(){return L},Z:function(){return A}});var o=t(85893),r=t(97183),i=t(94199),a=t(20550),s=t(828),l=t(66516),c=t(38504),d=t(71577),u=t(26713),m=t(86548),h=t(94149),p=t(38545),x=t(87547),f=t(39398),g=t(4480),j=t(67294),v=t(49218),_=t(5152),w=t.n(_),y=t(1899),b=t(47093),C=t.n(b),N=w()((function(){return t.e(2365).then(t.bind(t,32365)).then((function(e){return e.Modal}))}),{loadableGenerated:{webpack:function(){return[32365]}}}),k=w()((function(){return Promise.all([t.e(8939),t.e(8225)]).then(t.bind(t,98225)).then((function(e){return e.NameChangeModal}))}),{loadableGenerated:{webpack:function(){return[98225]}}}),S=w()((function(){return Promise.all([t.e(2944),t.e(9674)]).then(t.bind(t,9674)).then((function(e){return e.AuthModal}))}),{loadableGenerated:{webpack:function(){return[9674]}}}),Z=function(e){var n=e.username,t=(void 0===n?void 0:n)||(0,g.sJ)(y.w4),r=(0,j.useState)(!1),i=r[0],a=r[1],_=(0,j.useState)(!1),w=_[0],b=_[1],Z=(0,s.Z)((0,g.FV)(y.ZA),2),H=Z[0],T=Z[1],M=(0,g.sJ)(y.Q),F=function(){T(!H)};(0,v.y1)("c",F,{enableOnContentEditable:!1},[H]);var L=(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(l.Z.Item,{icon:(0,o.jsx)(m.Z,{}),onClick:function(){a(!0)},children:"Change name"},"0"),(0,o.jsx)(l.Z.Item,{icon:(0,o.jsx)(h.Z,{}),onClick:function(){return b(!0)},children:"Authenticate"},"1"),M.chatAvailable&&(0,o.jsx)(l.Z.Item,{icon:(0,o.jsx)(p.Z,{}),onClick:function(){return F()},children:"Toggle chat"},"3")]});return(0,o.jsxs)("div",{className:"".concat(C().root),children:[(0,o.jsx)(c.Z,{overlay:L,trigger:["click"],children:(0,o.jsx)(d.Z,{type:"primary",icon:(0,o.jsx)(x.Z,{style:{marginRight:".5rem"}}),children:(0,o.jsxs)(u.Z,{children:[t,(0,o.jsx)(f.Z,{})]})})}),(0,o.jsx)(N,{title:"Change Chat Display Name",visible:i,handleCancel:function(){return a(!1)},children:(0,o.jsx)(k,{})}),(0,o.jsx)(N,{title:"Authenticate",visible:w,handleCancel:function(){return b(!1)},children:(0,o.jsx)(S,{})})]})},H=t(60113),T=t(92910),M=t.n(T),F=r.Z.Header,L=function(e){var n=e.name,t=void 0===n?"Your stream title":n,r=e.chatAvailable,s=e.chatDisabled;return(0,o.jsxs)(F,{className:"".concat(M().header),children:[(0,o.jsxs)("div",{className:"".concat(M().logo),children:[(0,o.jsx)(H.C,{variant:"contrast"}),(0,o.jsx)("span",{children:t})]}),r&&!s&&(0,o.jsx)(Z,{}),!r&&!s&&(0,o.jsx)(i.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,o.jsx)(a.Z,{style:{cursor:"pointer"},children:"Chat offline"})})]})},A=L},32365:function(e,n,t){"use strict";t.r(n),t.d(n,{Modal:function(){return d}});var o=t(85893),r=t(85402),i=t(26303),a=t(11382),s=t(67294),l=t(78890),c=t.n(l),d=function(e){var n=e.title,t=e.url,l=e.visible,d=e.handleOk,u=e.handleCancel,m=e.afterClose,h=e.height,p=e.width,x=e.children,f=(0,s.useState)(!!t),g=f[0],j=f[1],v={padding:"0px",minHeight:h},_=t&&(0,o.jsx)("iframe",{title:n,src:t,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,onLoad:function(){return j(!1)}}),w=g?"none":"inline";return(0,o.jsx)(r.Z,{title:n,visible:l,onOk:d,onCancel:u,afterClose:m,bodyStyle:v,width:p,zIndex:9999,footer:null,centered:!0,destroyOnClose:!0,children:(0,o.jsxs)(o.Fragment,{children:[g&&(0,o.jsx)(i.Z,{active:g,style:{padding:"10px"},paragraph:{rows:10}}),_&&(0,o.jsx)("div",{style:{display:w},children:_}),x&&(0,o.jsx)("div",{className:c().content,children:x}),g&&(0,o.jsx)(a.Z,{className:c().spinner,spinning:g,size:"large"})]})})};n.default=d,d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0,height:"40vh",width:"70%"}},9539:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ze}});var o=t(85893),r=t(97183),i=t(4480),a=t(9008),s=t.n(a),l=t(67294),c=t(1899),d=t(828),u=t(2944),m=t(11382),h=t(94184),p=t.n(h),x=t(5152),f=t.n(x),g=t(73682),j=t(28105),v=t.n(j),_=function(e){var n=e.content;return(0,o.jsx)("div",{className:v().pageContentContainer,children:(0,o.jsx)("div",{className:v().customPageContent,dangerouslySetInnerHTML:{__html:n}})})},w=t(83818),y=t(63291),b=t.n(y),C=t(87412),N=t(28763),k=t(75347),S=t.n(k),Z=function(){var e=(0,i.sJ)(c.w4),n=(0,i.sJ)(c.uy),t=(0,i.sJ)(c.fE),r=(0,i.sJ)(c.pH);return(0,o.jsx)(C.ZP,{className:S().root,collapsedWidth:0,width:320,children:(0,o.jsx)(N.ChatContainer,{messages:r,usernameToHighlight:e,chatUserId:n,isModerator:t})})},H=t(35603),T=t.n(H),M=function(e){var n=e.version;return(0,o.jsxs)("div",{className:T().footer,children:[(0,o.jsxs)("div",{className:T().text,children:["Powered by ",(0,o.jsx)("a",{href:"https://owncast.online",children:n})]}),(0,o.jsxs)("div",{className:T().links,children:[(0,o.jsx)("div",{className:T().item,children:(0,o.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"})}),(0,o.jsx)("div",{className:T().item,children:(0,o.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"})}),(0,o.jsx)("div",{className:T().item,children:(0,o.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})})]})]})},F=t(69767),L=t.n(F),A=function(e){var n=e.children;return(0,o.jsx)("div",{className:"".concat(L().row),children:n})},P=t(71577),J=t(32365),z=t(36879),U=t.n(z),E=function(e){var n=e.action,t=n.url,r=n.title,i=n.description,a=n.icon,s=n.color,c=n.openExternally,d=e.primary,u=void 0===d||d,m=(0,l.useState)(!1),h=m[0],p=m[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(P.Z,{type:u?"primary":"default",className:"".concat(U().button),onClick:function(){c?window.open(t,"_blank"):p(!0)},style:{backgroundColor:s},children:[(0,o.jsx)("img",{src:a,className:"".concat(U().icon),alt:i}),r]}),(0,o.jsx)(J.Modal,{title:i||r,url:t,visible:h,height:"80vh",handleCancel:function(){return p(!1)}})]})},I=t(1698),D=t(26042),R=t(69396),O=t(34447),G=t(47568),q=t(70655),Y=t(26713),B=t(14670),Q=t(69677),K=t(13840),V=t.n(K);var X=function(e){var n=e.handleClose,t=e.account,r=e.name,i=(0,l.useState)(null),a=i[0],s=i[1],c=(0,l.useState)(!1),d=c[0],u=c[1],h=(0,l.useState)(!1),p=h[0],x=h[1],f=(0,l.useState)(null),g=f[0],j=f[1],v=function(e){s(e),!function(e){var n=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(e)?u(!1):u(!0)},_=function(){var e=(0,G.Z)((function(){var e,t,o,r;return(0,q.__generator)(this,(function(i){switch(i.label){case 0:if(!d)return[2];x(!0),i.label=1;case 1:return i.trys.push([1,4,,5]),e=a.replace(/^@+/,""),t={account:e},[4,fetch("/api/remotefollow",{method:"POST",body:JSON.stringify(t)})];case 2:return[4,i.sent().json()];case 3:return(o=i.sent()).redirectUrl&&(window.open(o.redirectUrl,"_blank"),n()),o.success?o.redirectUrl?[3,5]:(j("Unable to follow."),x(!1),[2]):(j(o.message),x(!1),[2]);case 4:return r=i.sent(),j(r.message),[3,5];case 5:return x(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(Y.Z,{direction:"vertical",children:[(0,o.jsxs)("div",{className:V().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,o.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"learn about the Fediverse"}),"if it's new to you."]}),(0,o.jsxs)(m.Z,{spinning:p,children:[g&&(0,o.jsx)(B.Z,{message:"Follow Error",description:g,type:"error",showIcon:!0}),(0,o.jsxs)("div",{className:V().account,children:[(0,o.jsx)("img",{src:"/logo",alt:"logo",className:V().logo}),(0,o.jsxs)("div",{className:V().username,children:[(0,o.jsx)("div",{className:V().name,children:r}),(0,o.jsx)("div",{children:t})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:V().instructions,children:"Enter your username @server to follow"}),(0,o.jsx)(Q.Z,{value:a,size:"large",onChange:function(e){return v(e.target.value)},placeholder:"Your fediverse account @account@server",defaultValue:a}),(0,o.jsx)("div",{className:V().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,o.jsxs)(Y.Z,{className:V().buttons,children:[(0,o.jsx)(P.Z,{disabled:!d,type:"primary",onClick:_,children:"Follow"}),(0,o.jsx)(P.Z,{onClick:function(){window.open("https://owncast.online/join-fediverse","_blank")},type:"primary",children:"Join the Fediverse"})]})]})]})},W=function(e){var n=(0,l.useState)(!1),t=n[0],r=n[1],a=(0,i.sJ)(c.g1),s=a.name,d=a.federation.account;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P.Z,(0,R.Z)((0,D.Z)({},e),{type:"primary",className:U().button,icon:(0,o.jsx)(O.Z,{}),onClick:function(){return r(!0)},children:"Follow"})),(0,o.jsx)(J.Modal,{title:"Follow ".concat(s),visible:t,handleCancel:function(){return r(!1)},width:"550px",height:"200px",children:(0,o.jsx)(X,{account:d,name:s,handleClose:function(){return r(!1)}})})]})},$=t(71578),ee=function(e){var n=e.onClick;return(0,o.jsx)(P.Z,{type:"primary",className:"".concat(U().button),icon:(0,o.jsx)($.Z,{}),onClick:n,children:"Notify"})},ne=t(53731),te=t(79216),oe=t(7918),re=t.n(oe),ie=function(e){var n=e.src;return(0,o.jsx)("div",{className:re().root,children:(0,o.jsx)("div",{className:re().container,children:(0,o.jsx)(te.Z,{src:n,alt:"Logo",className:re().image,rootClassName:re().image})})})},ae=t(52740),se=t.n(ae),le=function(e){var n=e.links;return(0,o.jsx)("div",{className:se().links,children:n.map((function(e){return(0,o.jsx)("a",{href:e.url,className:se().link,target:"_blank",rel:"noreferrer",children:(0,o.jsx)("img",{src:e.icon,alt:e.platform,title:e.platform,className:se().link})},e.platform)}))})},ce=t(74688),de=t.n(ce),ue=function(e){var n=e.name,t=e.title,r=e.summary,i=e.logo,a=e.tags,s=e.links;return(0,o.jsx)("div",{className:de().root,children:(0,o.jsxs)("div",{className:de().logoTitleSection,children:[(0,o.jsx)("div",{className:de().logo,children:(0,o.jsx)(ie,{src:i})}),(0,o.jsxs)("div",{className:de().titleSection,children:[(0,o.jsx)("div",{className:p()(de().title,de().row),children:n}),(0,o.jsx)("div",{className:p()(de().subtitle,de().row),children:(0,o.jsx)(ne.Z,{children:t||r})}),(0,o.jsx)("div",{className:p()(de().tagList,de().row),children:a.length>0&&a.map((function(e){return(0,o.jsxs)("span",{children:["#",e,"\xa0"]},e)}))}),(0,o.jsx)("div",{className:p()(de().socialLinks,de().row),children:(0,o.jsx)(le,{links:s})})]})]})})},me=t(43125),he=u.Z.TabPane,pe=r.Z.Content,xe=f()((function(){return Promise.resolve().then(t.bind(t,32365)).then((function(e){return e.Modal}))}),{loadableGenerated:{webpack:function(){return[32365]}}}),fe=f()((function(){return t.e(5135).then(t.bind(t,5135)).then((function(e){return e.BrowserNotifyModal}))}),{loadableGenerated:{webpack:function(){return[5135]}}}),ge=f()((function(){return t.e(7735).then(t.bind(t,57735)).then((function(e){return e.NotifyReminderPopup}))}),{loadableGenerated:{webpack:function(){return[57735]}}}),je=f()((function(){return Promise.all([t.e(8939),t.e(3698),t.e(7373)]).then(t.bind(t,97373)).then((function(e){return e.FollowerCollection}))}),{loadableGenerated:{webpack:function(){return[97373]}}}),ve=f()((function(){return Promise.resolve().then(t.bind(t,28763)).then((function(e){return e.ChatContainer}))}),{loadableGenerated:{webpack:function(){return[28763]}}}),_e=function(e){var n=e.name,t=e.streamTitle,r=e.summary,i=e.tags,a=e.socialHandles,s=e.extraPageContent;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:b().lowerHalf,children:(0,o.jsx)(ue,{name:n,title:t,summary:r,tags:i,links:a,logo:"/logo"})}),(0,o.jsx)("div",{className:b().lowerSection,children:(0,o.jsxs)(u.Z,{defaultActiveKey:"0",children:[(0,o.jsx)(he,{tab:"About",children:(0,o.jsx)(_,{content:s})},"2"),(0,o.jsx)(he,{tab:"Followers",children:(0,o.jsx)(je,{})},"3")]})})]})},we=function(e){var n=e.name,t=e.streamTitle,r=e.summary,i=e.tags,a=e.socialHandles,s=e.extraPageContent,l=e.messages,c=e.chatDisplayName,d=e.chatUserId,m=e.showChat;return(0,o.jsx)("div",{className:p()(b().lowerSectionMobile),children:(0,o.jsxs)(u.Z,{defaultActiveKey:"0",children:[m&&(0,o.jsx)(he,{tab:"Chat",children:(0,o.jsx)(ve,{messages:l,usernameToHighlight:c,chatUserId:d,isModerator:!1,height:"40vh"})},"1"),(0,o.jsxs)(he,{tab:"About",children:[(0,o.jsx)(ue,{name:n,title:t,summary:r,tags:i,links:a,logo:"/logo"}),(0,o.jsx)(_,{content:s})]},"2"),(0,o.jsx)(he,{tab:"Followers",children:(0,o.jsx)(je,{})},"3")]})})},ye=function(){var e=(0,i.sJ)(c.Q),n=(0,i.sJ)(c.g1),t=(0,i.sJ)(c.pT),r=(0,i.sJ)(c.di),a=(0,d.Z)((0,i.FV)(c.hz),2),s=a[0],u=a[1],h=(0,i.sJ)(c.j$),p=(0,i.sJ)(c.YW),x=(0,i.sJ)(c.w4),f=(0,i.sJ)(c.uy),j=(0,i.sJ)(c.RI),v=j.viewerCount,_=j.lastConnectTime,y=j.lastDisconnectTime,C=j.streamTitle,N=n.extraPageContent,k=n.version,S=n.name,H=n.summary,T=n.socialHandles,F=n.tags,L=n.externalActions,P=n.offlineMessage,J=n.chatDisabled,z=(0,l.useState)(!1),U=z[0],D=z[1],R=(0,l.useState)(!1),O=R[0],G=R[1],q=L.map((function(e){return(0,o.jsx)(E,{action:e},e.url)})),Y=function(){G(!1),D(!1),(0,g.qQ)(g.dA.hasDisplayedNotificationModal,!0)},B=function(){var e=window.innerWidth;void 0===s&&u(e<=768),!s&&e<=768&&u(!0),s&&e>768&&u(!1)};(0,l.useEffect)((function(){!function(){var e=parseInt((0,g.$o)(g.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,g.qQ)(g.dA.userVisitCount,e+1),e>2&&!(0,g.$o)(g.dA.hasDisplayedNotificationModal)&&D(!0)}(),B(),window.addEventListener("resize",B)}),[]);var Q=!e.appLoading&&"Please follow and ask to get notified when the stream is live.";P&&!e.appLoading&&(Q=P);var K=!e.appLoading&&"".concat(S," is currently offline"),V=!J&&r&&t;return(0,o.jsx)("div",{children:(0,o.jsxs)(m.Z,{className:b().loadingSpinner,size:"large",spinning:e.appLoading,children:[(0,o.jsxs)(pe,{className:b().root,children:[(0,o.jsxs)("div",{className:b().leftContent,children:[(0,o.jsxs)("div",{className:b().topSection,children:[p&&(0,o.jsx)(w.M,{source:"/hls/stream.m3u8",online:p}),!p&&!e.appLoading&&(0,o.jsx)(I.R,{title:K,text:Q}),(0,o.jsx)(me.X,{online:p,lastConnectTime:_,lastDisconnectTime:y,viewerCount:v})]}),(0,o.jsx)("div",{className:b().midSection,children:(0,o.jsxs)("div",{className:b().buttonsLogoTitleSection,children:[(0,o.jsxs)(A,{children:[q,(0,o.jsx)(W,{size:"small"}),(0,o.jsx)(ge,{visible:U,notificationClicked:function(){return G(!0)},notificationClosed:function(){return Y()},children:(0,o.jsx)(ee,{onClick:function(){return G(!0)}})})]}),(0,o.jsx)(xe,{title:"Notify",visible:O,afterClose:function(){return Y()},handleCancel:function(){return Y()},children:(0,o.jsx)(fe,{})})]})}),s&&t?(0,o.jsx)(we,{name:S,streamTitle:C,summary:H,tags:F,socialHandles:T,extraPageContent:N,messages:h,chatDisplayName:x,chatUserId:f,showChat:V}):(0,o.jsx)(_e,{name:S,streamTitle:C,summary:H,tags:F,socialHandles:T,extraPageContent:N})]}),V&&!s&&(0,o.jsx)(Z,{})]}),(!s||!V)&&(0,o.jsx)(M,{version:k})]})})},be=t(8119),Ce=t(85402),Ne=function(e){var n=e.title,t=e.message;return(0,o.jsx)(Ce.Z,{title:n,visible:!0,footer:null,closable:!1,keyboard:!1,width:900,centered:!0,className:"modal",children:(0,o.jsx)("p",{style:{fontSize:"1.3rem"},children:t})})},ke=t(82670);var Se=function(){var e=(0,i.sJ)(c.g1),n=e.name,t=e.title,a=e.customStyles,d=(0,i.sJ)(c.di),u=(0,i.sJ)(c.ap),m=(0,l.useRef)(null),h=e.chatDisabled;(0,l.useEffect)((function(){!function(e){var n=function(e){e.setAttribute("rel","noopener noreferrer ")};e.querySelectorAll("a").forEach((function(e){return n(e)})),new MutationObserver((function(e){var t=!0,o=!1,r=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value,l=!0,c=!1,d=void 0;try{for(var u,m=s.addedNodes[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){var h=u.value;(0,ke.Z)(h,HTMLElement)&&"a"===h.tagName.toLowerCase()&&n(h)}}catch(p){c=!0,d=p}finally{try{l||null==m.return||m.return()}finally{if(c)throw d}}}}catch(p){o=!0,r=p}finally{try{t||null==a.return||a.return()}finally{if(o)throw r}}})).observe(e,{attributes:!1,childList:!0,subtree:!0})}(m.current)}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:type",content:"video.other"}),(0,o.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,o.jsx)("meta",{property:"og:image",content:"{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:url",content:"{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}embed/video"}),(0,o.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}embed/video"}),(0,o.jsx)("meta",{property:"og:video:height",content:"315"}),(0,o.jsx)("meta",{property:"og:video:width",content:"560"}),(0,o.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,o.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"twitter:card",content:"player"}),(0,o.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}embed/video"}),(0,o.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,o.jsx)("meta",{property:"twitter:player:height",content:"315"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsx)("style",{children:a}),(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n\twindow.statusHydration = {{.StatusJSON}};\n\twindow.configHydration = {{.ServerConfigJSON}};\n\t"}})]}),(0,o.jsx)(c.me,{}),(0,o.jsxs)(r.Z,{ref:m,children:[(0,o.jsx)(be.h,{name:t||n,chatAvailable:d,chatDisabled:h}),(0,o.jsx)(ye,{}),u&&(0,o.jsx)(Ne,{title:u.title,message:u.message})]})]})};function Ze(){return(0,o.jsx)(Se,{})}},36879:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},69767:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},74688:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},47093:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2"}},13840:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}},63291:function(e){e.exports={root:"Content_root__h1mNK",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC"}},28105:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},35603:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV",item:"Footer_item__rXxSr"}},92910:function(e){e.exports={header:"Header_header__U4Ro1",logo:"Header_logo__HLZ6Z"}},7918:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},78890:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},75347:function(e){e.exports={root:"Sidebar_root__8HE0A"}},52740:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}}},function(e){e.O(0,[1272,8700,2544,3903,2944,5938,9372,9654,2852,2429,1681,1082,1996,1899,8763,2854,9774,2888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);