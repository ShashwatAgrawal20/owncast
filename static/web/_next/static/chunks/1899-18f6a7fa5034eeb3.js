"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1899],{1899:function(e,t,n){n.d(t,{me:function(){return B},FI:function(){return T},Q:function(){return L},L4:function(){return Z},j$:function(){return m},ZA:function(){return F},g1:function(){return w},g8:function(){return P},db:function(){return k},ap:function(){return U},di:function(){return J},pT:function(){return V},hz:function(){return G},YW:function(){return Y},We:function(){return M},RI:function(){return I},pH:function(){return j},Gt:function(){return D}});var r=n(47568),a=n(26042),o=n(69396),i=n(828),c=n(29815),s=n(70655),u=n(67294),l=n(4480),f=n(23917);var d=n(51438),E=function(){function e(){(0,d.Z)(this,e)}return e.getConfig=function(){return(0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("/api/config")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))()},e}(),h=n(58827),g=function(){function e(){(0,d.Z)(this,e)}return e.getChatHistory=function(e){return(0,r.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,h.$l)("".concat("/api/chat","?accessToken=").concat(e))];case 1:return[2,t.sent()]}}))}))()},e.registerUser=function(e){return(0,r.Z)((function(){var t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:e})},[4,(0,h.$l)("/api/chat/register",t)];case 1:return[2,n.sent()]}}))}))()},e}(),v=n(11622),p=function(){function e(t,n){(0,d.Z)(this,e),this.accessToken=t,this.path=n,this.createAndConnect()}var t=e.prototype;return t.createAndConnect=function(){var e=new URL(window.location.toString());e.protocol="https:"===window.location.protocol?"wss:":"ws:",e.pathname="/ws",e.port="3000"===window.location.port?"8080":window.location.port,e.searchParams.append("accessToken",this.accessToken),console.debug("connecting to ",e.toString());var t=new WebSocket(e.toString());t.onopen=this.onOpen.bind(this),t.onerror=this.onError.bind(this),t.onmessage=this.onMessage.bind(this),this.websocket=t},t.onOpen=function(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer)},t.onError=function(e){var t;console.error(e),t="Socket error: ".concat(e),console.error("Chat has been disconnected and is likely not working for you. It's possible you were removed from chat. If this is a server configuration issue, visit troubleshooting steps to resolve. https://owncast.online/docs/troubleshooting/#chat-is-disabled: ".concat(t)),this.websocket.close()},t.onMessage=function(e){for(var t,n=e.data.split("\n"),r=0;r<n.length;r++){try{t=JSON.parse(n[r]),this.handleMessage&&this.handleMessage(t)}catch(a){return void console.error(a,a.data)}if(!t.type)return void console.error("No type provided",t);if(t.type===v.C.PING)return void this.sendPong()}},t.isConnected=function(){var e,t;return(null===(e=this.websocket)||void 0===e?void 0:e.readyState)===(null===(t=this.websocket)||void 0===t?void 0:t.OPEN)},t.send=function(e){e.type&&v.C[e.type]||console.warn('Outbound message: Unknown socket message type: "'.concat(e.type,'" sent.'));var t=JSON.stringify(e);this.websocket.send(t)},t.sendPong=function(){var e={type:v.C.PONG};this.send(e)},e}();var S=n(4723);var y;!function(e){e.Loading="LOADING",e.Loaded="LOADED",e.Online="ONLINE",e.Offline="OFFLINE",e.NeedsRegister="NEEDS_REGISTER",e.Fail="FAIL"}(y||(y={}));var N=(0,S.C)({id:"appState",initial:"loading",predictableActionArguments:!0,states:{loading:{meta:(0,a.Z)({},{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!0}),on:{NEEDS_REGISTER:{target:"loading"},LOADED:{target:"ready"},FAIL:{target:"serverFailure"}}},ready:{initial:"offline",states:{online:{meta:(0,a.Z)({},{chatAvailable:!0,chatLoading:!1,videoAvailable:!0,appLoading:!1}),on:{OFFLINE:{target:"goodbye"}}},offline:{meta:(0,a.Z)({},{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!1}),on:{ONLINE:{target:"online"}}},goodbye:{on:{ONLINE:{target:"online"}},meta:(0,a.Z)({},{chatAvailable:!0,chatLoading:!1,videoAvailable:!1,appLoading:!1}),after:{3e5:{target:"offline"}}}}},serverFailure:{type:"final"},userfailure:{type:"final"}}}),O=n(73682);var _=function(e,t,n){var r=e.user,a=r.id,o=r.displayName,i=r.displayColor,c=r.scopes;t(r.authenticated),n({id:a.toString(),displayName:o,displayColor:i,isModerator:null===c||void 0===c?void 0:c.includes("MODERATOR")})},A=function(){function e(){(0,d.Z)(this,e)}return e.getStatus=function(){return(0,r.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("/api/status")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))()},e}();var R,C=function(e,t,n){n((0,c.Z)(t).concat([e]))},b="accessToken",I=(0,l.cn)({key:"serverStatusState",default:{online:!1,viewerCount:0,serverTime:new Date}}),w=(0,l.cn)({key:"clientConfigState",default:{name:"",summary:"",offlineMessage:"",logo:"",tags:[],version:"",nsfw:!1,extraPageContent:"",socialHandles:[],chatDisabled:!1,externalActions:[],customStyles:"",maxSocketPayloadSize:0,federation:{enabled:!1,account:"",followerCount:0},notifications:{browser:{enabled:!1,publicKey:""}},authentication:{indieAuthEnabled:!1}}}),T=(0,l.cn)({key:"accessTokenAtom",default:null}),k=(0,l.cn)({key:"currentUserAtom",default:null}),m=(0,l.cn)({key:"chatMessages",default:[]}),Z=(0,l.cn)({key:"chatAuthenticatedAtom",default:!1}),D=(0,l.cn)({key:"websocketServiceAtom",default:null}),L=(0,l.cn)({key:"appState",default:{chatAvailable:!1,chatLoading:!0,videoAvailable:!1,appLoading:!0}}),G=(0,l.cn)({key:"isMobileAtom",default:void 0}),F=(0,l.cn)({key:"chatVisibilityToggleAtom",default:!0}),M=(0,l.cn)({key:"isVideoPlayingAtom",default:!1}),U=(0,l.cn)({key:"fatalErrorStateAtom",default:null}),P=(0,l.cn)({key:"clockSkewAtom",default:0}),H=(0,l.cn)({key:"removedMessageIds",default:[]}),V=(0,l.nZ)({key:"isChatVisibleSelector",get:function(e){var t=e.get,n=t(L),r=t(F);return t(T)&&n.chatAvailable&&r}}),J=(0,l.nZ)({key:"isChatAvailableSelector",get:function(e){var t=e.get,n=t(L);return t(T)&&n.chatAvailable}}),Y=(0,l.nZ)({key:"isOnlineSelector",get:function(e){var t=e.get,n=t(L),r=t(M);return n.videoAvailable||r}}),j=(0,l.nZ)({key:"visibleChatMessagesSelector",get:function(e){var t=e.get,n=t(m),r=t(H);return n.filter((function(e){return!r.includes(e.id)}))}});var B=function(){var e,t=(0,i.Z)((0,f.e)(N),3),n=t[0],d=t[1],h=t[2],S=(0,i.Z)((0,l.FV)(k),2),G=S[0],F=S[1],M=(0,l.Zl)(Z),V=(0,i.Z)((0,l.FV)(w),2),J=V[0],Y=V[1],j=(0,l.Zl)(I),B=(0,l.Zl)(P),W=(0,i.Z)((0,l.FV)(m),2),$=W[0],Q=W[1],X=(0,i.Z)((0,l.FV)(T),2),q=X[0],x=X[1],K=(0,l.Zl)(L),z=(0,l.Zl)(U),ee=(0,l.Zl)(D),te=(0,i.Z)((0,l.FV)(H),2),ne=te[0],re=te[1],ae=(0,u.useState)(!1),oe=ae[0],ie=ae[1],ce=(0,u.useState)(!1),se=ce[0],ue=ce[1],le=function(e,t){z({title:e,message:t})},fe=function(e){d({type:e})},de=function(){var e=(0,r.Z)((function(){var e,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,E.getConfig()];case 1:return e=n.sent(),Y(e),z(null),ue(!0),[3,3];case 2:return t=n.sent(),le("Unable to reach Owncast server","Owncast cannot launch. Please make sure the Owncast server is running."),console.error("ClientConfigService -> getConfig() ERROR: \n".concat(t)),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=(0,r.Z)((function(){var e,t,n,r;return(0,s.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,A.getStatus()];case 1:return e=a.sent(),j(e),ie(!0),t=e.serverTime,n=new Date(t).getTime()-Date.now(),B(n),e.online?fe(y.Online):e.online||fe(y.Offline),z(null),[3,3];case 2:return r=a.sent(),fe(y.Fail),le("Unable to reach Owncast server","Owncast cannot launch. Please make sure the Owncast server is running."),console.error("serverStatusState -> getStatus() ERROR: \n".concat(r)),[3,3];case 3:return[2,null]}}))}));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,r.Z)((function(e){var t,n,r,i,c,u;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(t=(0,O.$o)(b))return x(t),[2];s.label=1;case 1:return s.trys.push([1,3,,4]),fe(y.NeedsRegister),[4,g.registerUser(e)];case 2:return n=s.sent(),console.log("ChatService -> registerUser() response: \n".concat(n)),r=n.accessToken,i=n.displayName,c=n.displayColor,r?(console.log("setting access token",r),F((0,o.Z)((0,a.Z)({},G),{displayName:i,displayColor:c})),x(r),(0,O.qQ)(b,r),[3,4]):[2];case 3:return u=s.sent(),fe(y.Fail),console.error("ChatService -> registerUser() ERROR: \n".concat(u)),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),ge=function(e){switch(e.type){case v.C.ERROR_NEEDS_REGISTRATION:(0,O.qQ)(b,""),x(null),he();break;case v.C.CONNECTED_USER_INFO:_(e,M,F),Q((function(t){return(0,c.Z)(t).concat([e])}));break;case v.C.CHAT:Q((function(t){return(0,c.Z)(t).concat([e])}));break;case v.C.NAME_CHANGE:C(e,$,Q);break;case v.C.USER_JOINED:case v.C.SYSTEM:Q((function(t){return(0,c.Z)(t).concat([e])}));break;case v.C.VISIBILITY_UPDATE:!function(e){var t=e.ids;if(e.visible){var n=ne.filter((function(e){return!t.includes(e)}));re(n)}else{var r=(0,c.Z)(ne).concat((0,c.Z)(t));re(r)}}(e);break;default:console.error("Unknown socket message type: ",e.type)}},ve=function(){var e=(0,r.Z)((function(){var e,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,g.getChatHistory(q)];case 1:return e=n.sent(),Q((function(t){return(0,c.Z)(t).concat((0,c.Z)(e))})),[3,3];case 2:return t=n.sent(),console.error("ChatService -> getChatHistory() ERROR: \n".concat(t)),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),pe=function(){var t=(0,r.Z)((function(){return(0,s.__generator)(this,(function(t){try{(e=new p(q,"/ws")).handleMessage=ge,ee(e)}catch(n){console.error("ChatService -> startChat() ERROR: \n".concat(n))}return[2]}))}));return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){try{if(window.configHydration){var e=JSON.parse(window.configHydration);Y(e)}}catch(n){}try{if(window.statusHydration){var t=JSON.parse(window.statusHydration);j(t)}}catch(r){}}),[]),(0,u.useEffect)((function(){oe&&se&&fe(y.Loaded)}),[oe,se]),(0,u.useEffect)((function(){!J.chatDisabled&&q&&se&&pe()}),[se,q]),(0,u.useEffect)((function(){de(),he(),Ee(),clearInterval(R),R=setInterval((function(){Ee()}),5e3)}),[n]),(0,u.useEffect)((function(){q&&ve()}),[q]),(0,u.useEffect)((function(){h.onTransition((function(e){if(e.changed){var t,n=(t=e.meta,Object.keys(t).reduce((function(e,n){var r=t[n];return Object.assign(e,r),e}),{}));K(n)}}))})),null}},11622:function(e,t,n){var r;n.d(t,{C:function(){return r}}),function(e){e.CHAT="CHAT",e.PING="PING",e.NAME_CHANGE="NAME_CHANGE",e.COLOR_CHANGE="COLOR_CHANGE",e.PONG="PONG",e.SYSTEM="SYSTEM",e.USER_JOINED="USER_JOINED",e.CHAT_ACTION="CHAT_ACTION",e.FEDIVERSE_ENGAGEMENT_FOLLOW="FEDIVERSE_ENGAGEMENT_FOLLOW",e.FEDIVERSE_ENGAGEMENT_LIKE="FEDIVERSE_ENGAGEMENT_LIKE",e.FEDIVERSE_ENGAGEMENT_REPOST="FEDIVERSE_ENGAGEMENT_REPOST",e.CONNECTED_USER_INFO="CONNECTED_USER_INFO",e.ERROR_USER_DISABLED="ERROR_USER_DISABLED",e.ERROR_NEEDS_REGISTRATION="ERROR_NEEDS_REGISTRATION",e.ERROR_MAX_CONNECTIONS_EXCEEDED="ERROR_MAX_CONNECTIONS_EXCEEDED",e.VISIBILITY_UPDATE="VISIBILITY-UPDATE"}(r||(r={}))},73682:function(e,t,n){n.d(t,{$o:function(){return a},dA:function(){return r},qQ:function(){return o}});var r={username:"username",hasDisplayedNotificationModal:"HAS_DISPLAYED_NOTIFICATION_MODAL",userVisitCount:"USER_VISIT_COUNT"};function a(e){try{return localStorage.getItem(e)}catch(t){}return null}function o(e,t){try{return""!==t&&null!==t?localStorage.setItem(e,t):localStorage.removeItem(e),!0}catch(n){}return!1}}}]);