(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4860],{94860:function(e,n,t){"use strict";t.r(n),t.d(n,{ChatModerationActionMenu:function(){return U}});var a=t(85893),s=t(11475),o=t(90420),r=t(18429),l=t(64942),i=t(85402),c=t(12461),d=t(66516),h=t(38504),u=t(26713),p=t(67294),x=t(14761),j=t(54907),y=t(71230),m=t(15746),g=t(71577),f=t(11382),v=t(20550),C=t(52206),Z=t(58091),w=t(48689),b=class{static async removeMessage(e,n){let t=new URL("/api/chat/messagevisibility",window.location.toString());t.searchParams.append("accessToken",n);let a=t.toString(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[e]})};await fetch(a,s)}static async banUser(e,n){let t=new URL("/api/chat/users/setenabled",window.location.toString());t.searchParams.append("accessToken",n);let a=t.toString(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})};await fetch(a,s)}},k=t(57761),_=t.n(k),M=t(70241);let{Panel:S}=j.Z,A=async(e,n)=>{try{b.removeMessage(e,n)}catch(t){console.error(t)}},P=e=>{let{label:n,value:t}=e;return(0,a.jsxs)(y.Z,{justify:"space-around",align:"middle",children:[(0,a.jsx)(m.Z,{span:12,children:n}),(0,a.jsx)(m.Z,{span:12,children:t})]})},N=e=>{let{client:n}=e,{messageCount:t,connectedAt:s,geo:o}=n,r=(0,Z.Z)(new Date(s),"PP pp");return(0,a.jsxs)("div",{children:[(0,a.jsx)(P,{label:"Messages Sent",value:"".concat(t)}),"N/A"!==o&&(0,a.jsx)(P,{label:"Geo",value:o}),(0,a.jsx)(P,{label:"Connected At",value:r})]})},D=e=>{let{color:n}=e;return(0,a.jsxs)("div",{className:_().colorBlock,style:{backgroundColor:"var(--theme-color-users-".concat(n,")")},children:["Color ",n]})},O=e=>{let{userId:n,accessToken:t}=e,[s,o]=(0,p.useState)(null),[r,l]=(0,p.useState)(!0),i=async()=>{try{let e=await (await fetch("/api/moderation/chat/user/".concat(n,"?accessToken=").concat(t))).json();o(e),l(!1)}catch(a){console.error(a)}};if((0,p.useEffect)(()=>{i()},[]),!s)return null;let{user:c,connectedClients:d,messages:h}=s,{displayColor:u,createdAt:x,previousNames:y,scopes:m,isBot:b,authenticated:k}=c,_=d.reduce((e,n)=>e+n.messageCount,0),O=(0,Z.Z)(new Date(x),"PP pp");return(0,a.jsxs)(f.Z,{spinning:r,children:[(0,a.jsx)(D,{color:u}),m.map(e=>(0,a.jsx)(v.Z,{children:e},e)),k&&(0,a.jsx)(v.Z,{children:"Authenticated"}),b&&(0,a.jsx)(v.Z,{children:"Bot"}),(0,a.jsx)(P,{label:"Messages Sent Across Clients",value:_.toString()}),(0,a.jsx)(P,{label:"User Created",value:O}),(0,a.jsx)(P,{label:"Known As",value:y.join(",")}),(0,a.jsxs)(j.Z,{accordion:!0,children:[(0,a.jsx)(S,{header:"Currently Connected Clients",children:(0,a.jsx)(j.Z,{accordion:!0,children:d.map(e=>(0,a.jsx)(S,{header:(0,M.AB)(e.userAgent),children:(0,a.jsx)(N,{client:e})},e.id))})},"connected-clients"),(0,a.jsx)(j.Z,{accordion:!0,children:(0,a.jsx)(S,{header:"Recent Chat Messages",children:(0,a.jsx)(C.Z,{size:"small",pagination:null,columns:[{title:"Message",dataIndex:"body",key:"body"},{title:"Sent At",dataIndex:"timestamp",key:"timestamp",render:e=>(0,Z.Z)(new Date(e),"PP pp")},{title:"Delete",key:"delete",render:(e,n)=>(0,a.jsx)(g.Z,{type:"primary",ghost:!0,icon:(0,a.jsx)(w.Z,{}),onClick:()=>A(n.id,t)})}],dataSource:h,rowKey:"id"})},"chat-messages")})]})]})};var T=t(24110),B=t.n(T);let{confirm:I}=i.Z,U=e=>{let{messageID:n,userID:t,userDisplayName:i,accessToken:j}=e,[y,m]=(0,p.useState)(!1),g=async()=>{try{await b.banUser(t,j)}catch(e){console.error(e),c.ZP.error(e)}},f=async()=>{try{await b.removeMessage(n,j)}catch(e){console.error(e),c.ZP.error(e)}},v=async()=>{I({icon:(0,a.jsx)(s.Z,{}),content:"Are you sure you want to remove this message from ".concat(i,"?"),onOk(){f()}})},C=async()=>{I({icon:(0,a.jsx)(s.Z,{}),content:"Are you sure you want to ban ".concat(i," from chat?"),onOk(){g()}})},Z=e=>{let{key:n}=e;"hide-message"===n?v():"ban-user"===n?C():"more-info"===n&&m(!0)},w=(0,a.jsx)(d.Z,{onClick:Z,items:[{label:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:B().icon,children:(0,a.jsx)(o.Z,{})}),"Hide Message"]}),key:"hide-message"},{label:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:B().icon,children:(0,a.jsx)(r.Z,{})}),"Ban User"]}),key:"ban-user"},{label:(0,a.jsx)("div",{children:"More Info..."}),key:"more-info"}]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{overlay:w,trigger:["click"],children:(0,a.jsx)("button",{type:"button",onClick:e=>e.preventDefault(),children:(0,a.jsx)(u.Z,{children:(0,a.jsx)(l.Z,{})})})}),(0,a.jsx)(x.Modal,{title:i,open:y,handleCancel:()=>{m(!1)},children:(0,a.jsx)(O,{userId:t,accessToken:j})})]})}},14761:function(e,n,t){"use strict";t.r(n),t.d(n,{Modal:function(){return d}});var a=t(85893),s=t(85402),o=t(26303),r=t(11382),l=t(67294),i=t(77011),c=t.n(i);let d=e=>{let{title:n,url:t,open:i,handleOk:d,handleCancel:h,afterClose:u,height:p,width:x,children:j}=e,[y,m]=(0,l.useState)(!!t),g="100%",f="520px";t&&(g="70vh",f="900px");let v={padding:"0px",minHeight:p,height:null!=p?p:g},C=t&&(0,a.jsx)("iframe",{title:n,src:t,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>m(!1)});return(0,a.jsx)(s.Z,{title:n,open:i,onOk:d,onCancel:h,afterClose:u,bodyStyle:v,width:null!=x?x:f,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,children:(0,a.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[y&&(0,a.jsx)(o.Z,{active:y,style:{padding:"10px"},paragraph:{rows:10}}),C&&(0,a.jsx)("div",{style:{display:y?"none":"inline"},children:C}),j&&(0,a.jsx)("div",{className:c().content,children:j}),y&&(0,a.jsx)(r.Z,{className:c().spinner,spinning:y,size:"large"})]})})};n.default=d,d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},24110:function(e){e.exports={icon:"ChatModerationActionMenu_icon__9j6DF"}},57761:function(e){e.exports={modalContainer:"ChatModerationDetailsModal_modalContainer__czndV",chatHistory:"ChatModerationDetailsModal_chatHistory__PunRk",colorBlock:"ChatModerationDetailsModal_colorBlock___rAlw",displayName:"ChatModerationDetailsModal_displayName__p7pLI"}},77011:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}}}]);