(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5685],{48689:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(1413),l=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=n(42135),i=function(e,t){return l.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};i.displayName="DeleteOutlined";var c=l.forwardRef(i)},54005:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/actions",function(){return n(2075)}])},2075:function(e,t,n){"use strict";n.r(t);var r=n(85893),l=n(48689),a=n(86548),o=n(84485),i=n(85402),c=n(18119),s=n(69677),u=n(32808),d=n(26713),h=n(71577),p=n(52206),x=n(96486),m=n.n(x),y=n(67294),f=n(39664),v=n(90745),j=n(41983),g=n(99519),k=n(37174);let{Title:Z,Paragraph:w}=o.Z,C=e=>{let{onOk:t,onCancel:n,open:l,action:a}=e,[o,d]=(0,y.useState)(""),[h,p]=(0,y.useState)(""),[x,m]=(0,y.useState)(""),[f,v]=(0,y.useState)(""),[j,g]=(0,y.useState)(""),[Z,w]=(0,y.useState)(!1);(0,y.useEffect)(()=>{d((null==a?void 0:a.url)||""),p((null==a?void 0:a.title)||""),m((null==a?void 0:a.description)||""),v((null==a?void 0:a.icon)||""),g((null==a?void 0:a.color)||""),w((null==a?void 0:a.openExternally)||!1)},[a]);let C={disabled:!function(){try{let e=new URL(o);if("https:"!==e.protocol)return!1}catch(t){return!1}return(0,k.Z)(o)&&""!==h}()},I=e=>{w(e.target.checked)};return(0,r.jsx)(i.Z,{destroyOnClose:!0,title:null==a?"Create New Action":"Edit Action",open:l,onOk:function(){t(a,o,h,x,f,j,Z),d(""),p(""),m(""),v(""),g(""),w(!1)},onCancel:n,okButtonProps:C,children:(0,r.jsxs)(c.Z,{initialValues:a,children:["Add the URL for the external action you want to present."," ",(0,r.jsx)("strong",{children:"Only HTTPS urls are supported."}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://owncast.online/thirdparty/actions/",target:"_blank",rel:"noopener noreferrer",children:"Read more about external actions."})}),(0,r.jsx)(c.Z.Item,{name:"url",children:(0,r.jsx)(s.Z,{required:!0,placeholder:"https://myserver.com/action (required)",onChange:e=>d(e.currentTarget.value.trim()),type:"url",pattern:k.a})}),(0,r.jsx)(c.Z.Item,{name:"title",children:(0,r.jsx)(s.Z,{value:h,required:!0,placeholder:"Your action title (required)",onChange:e=>p(e.currentTarget.value)})}),(0,r.jsx)(c.Z.Item,{name:"description",children:(0,r.jsx)(s.Z,{value:x,placeholder:"Optional description",onChange:e=>m(e.currentTarget.value)})}),(0,r.jsx)(c.Z.Item,{name:"icon",children:(0,r.jsx)(s.Z,{value:f,placeholder:"https://myserver.com/action/icon.png (optional)",onChange:e=>v(e.currentTarget.value)})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z.Item,{name:"color",style:{marginBottom:"0px"},children:(0,r.jsx)(s.Z,{type:"color",value:j,onChange:e=>g(e.currentTarget.value)})}),"Optional background color of the action button."]}),(0,r.jsx)(c.Z.Item,{name:"openExternally",children:(0,r.jsx)(u.Z,{checked:Z,defaultChecked:Z,onChange:I,children:"Open in a new tab instead of within your page."})})]})})},I=()=>{let e=(0,y.useContext)(g.aC),{serverConfig:t,setFieldInConfigState:n}=e||{},{externalActions:o}=t,[i,c]=(0,y.useState)(null),[s,u]=(0,y.useState)(!1),[x,k]=(0,y.useState)(null),[I,E]=(0,y.useState)(null),b=()=>{k(null),clearTimeout(null)};async function S(e){await (0,v.Si)({apiPath:v.os,data:{value:e},onSuccess(){n({fieldName:"externalActions",value:e,path:""}),k((0,j.kg)(j.zv,"Updated.")),setTimeout(b,v.sI)},onError(e){console.log(e),k((0,j.kg)(j.Un,e)),setTimeout(b,v.sI)}})}async function _(e){let t=[...i],n=i.findIndex(t=>t.url===e.url);t.splice(n,1);try{c(t),S(t)}catch(r){console.error(r)}}async function O(e,t,n,r,l,a,o){try{let s=[...i],u={url:t,title:n,description:r,icon:l,color:a,openExternally:o},d=e?i.findIndex(t=>m().isEqual(t,e)):-1;d>=0?s[d]=u:s.push(u),c(s),await S(s)}catch(h){console.error(h)}}async function T(e){E(e),u(!0)}(0,y.useEffect)(()=>{c(o||[])},[o]);let N=()=>{E(null),u(!0)},R=(e,t,n,r,l,a,o)=>{u(!1),O(e,t,n,r,l,a,o),E(null)},U=()=>{u(!1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(Z,{children:"External Actions"}),(0,r.jsx)(w,{children:"External action URLs are 3rd party UI you can display, embedded, into your Owncast page when a user clicks on a button to launch your action."}),(0,r.jsxs)(w,{children:["Read more about how to use actions, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/thirdparty/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(p.Z,{rowKey:e=>"".concat(e.title,"-").concat(e.url),columns:[{title:"",key:"delete-edit",render:(e,t)=>(0,r.jsxs)(d.Z,{size:"middle",children:[(0,r.jsx)(h.Z,{onClick:()=>_(t),icon:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(h.Z,{onClick:()=>T(t),icon:(0,r.jsx)(a.Z,{})})]})},{title:"Name",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"URL",dataIndex:"url",key:"url"},{title:"Icon",dataIndex:"icon",key:"icon",render:e=>e?(0,r.jsx)("img",{style:{width:"2vw"},src:e,alt:""}):null},{title:"Color",dataIndex:"color",key:"color",render:e=>e?(0,r.jsx)("div",{style:{backgroundColor:e,height:"30px"},children:e}):null},{title:"Opens",dataIndex:"openExternally",key:"openExternally",render:e=>e?"In a new tab":"In a modal"}],dataSource:i,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(h.Z,{type:"primary",onClick:N,children:"Create New Action"}),(0,r.jsx)(f.E,{status:x}),(0,r.jsx)(C,{action:I,open:s,onOk:R,onCancel:U})]})};t.default=I}},function(e){e.O(0,[3662,8909,3903,4267,2206,8733,8119,9774,2888,179],function(){return e(e.s=54005)}),_N_E=e.O()}]);