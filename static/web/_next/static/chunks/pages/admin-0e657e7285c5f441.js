(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{64830:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return __webpack_require__(90348)}])},19849:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o:function(){return LogTable}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893);__webpack_require__(67294);var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(84485),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20550),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(93626),react_linkify__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(53731),date_fns_format__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(58091);let{Title}=antd__WEBPACK_IMPORTED_MODULE_3__.Z;function renderColumnLevel(text,entry){let color="black";return"warning"===entry.level?color="orange":"error"===entry.level&&(color="red"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{color:color,children:text})}function renderMessage(text){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_linkify__WEBPACK_IMPORTED_MODULE_2__.Z,{children:text})}let LogTable=param=>{let{logs,pageSize}=param;return(null==logs?void 0:logs.length)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"logs-section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,{children:"Logs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{size:"middle",dataSource:logs,columns:[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(level,row)=>0===row.level.indexOf(level),render:renderColumnLevel},{title:"Timestamp",dataIndex:"time",key:"time",render(timestamp){let dateObject=new Date(timestamp);return(0,date_fns_format__WEBPACK_IMPORTED_MODULE_5__.Z)(dateObject,"pp P")},sorter:(a,b)=>new Date(a.time).getTime()-new Date(b.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:renderMessage}],rowKey:row=>row.time,pagination:{pageSize:pageSize||20}})]}):null}},28073:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{j:function(){return StreamHealthOverview}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8751),_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(11475),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(25968),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6226),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(74763),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(84485),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(14670),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(71577),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41664),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(67294),_utils_server_status_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(99519);let StreamHealthOverview=param=>{let{showTroubleshootButton}=param,serverStatusData=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_server_status_context__WEBPACK_IMPORTED_MODULE_3__.aC),{health}=serverStatusData;if(!health)return null;let{healthy,healthPercentage,message,representation}=health,color="#3f8600",icon="info";return healthPercentage<80?(color="#cf000f",icon="error"):healthPercentage<30&&(color="#f0ad4e",icon="error"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{gutter:8,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{span:12,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{title:"Healthy Stream",value:healthy?"Yes":"No",valueStyle:{color},prefix:healthy?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.Z,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.Z,{})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{span:12,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{title:"Playback Health",value:healthPercentage,valueStyle:{color},suffix:"%"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{style:{display:representation<100&&0!==representation?"grid":"none"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__.Z.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",representation,"% of all known players. Other player status is unknown."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{gutter:16,style:{width:"100%",display:message?"grid":"none",marginTop:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{span:24,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Z,{message:message,type:icon,showIcon:!0,action:showTroubleshootButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{passHref:!0,href:"/stream-health",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})};StreamHealthOverview.defaultProps={showTroubleshootButton:!0}},90348:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(85893),react=__webpack_require__(67294),skeleton=__webpack_require__(26303),statistic=__webpack_require__(74763),card=__webpack_require__(59652),row=__webpack_require__(25968),col=__webpack_require__(6226),ClockCircleOutlined=__webpack_require__(24019),UserOutlined=__webpack_require__(87547),formatRelative=__webpack_require__(19642),formatDistanceToNow=__webpack_require__(45938),server_status_context=__webpack_require__(99519),LogTable=__webpack_require__(19849),BookTwoTone=__webpack_require__(66567),PlaySquareTwoTone=__webpack_require__(63179),MessageTwoTone=__webpack_require__(78346),ProfileTwoTone=__webpack_require__(27482),typography=__webpack_require__(84485),next_link=__webpack_require__(41664),link_default=__webpack_require__.n(next_link),OwncastLogo=__webpack_require__(50738),collapse=__webpack_require__(54907),format=__webpack_require__(58091),apis=__webpack_require__(64777);let{Panel}=collapse.Z,{Title,Link}=typography.Z,ArticleItem=param=>{let{title,url,content_html:content,date_published:date}=param,dateObject=new Date(date),dateString=(0,format.Z)(dateObject,"MMM dd, yyyy, HH:mm");return(0,jsx_runtime.jsx)("article",{children:(0,jsx_runtime.jsx)(collapse.Z,{children:(0,jsx_runtime.jsxs)(Panel,{header:title,children:[(0,jsx_runtime.jsxs)("p",{className:"timestamp",children:[dateString," (",(0,jsx_runtime.jsx)(Link,{href:"".concat("https://owncast.online").concat(url),target:"_blank",rel:"noopener noreferrer",children:"Link"}),")"]}),(0,jsx_runtime.jsx)("div",{dangerouslySetInnerHTML:{__html:content}})]},url)})})},NewsFeed=()=>{let[feed,setFeed]=(0,react.useState)([]),[loading,setLoading]=(0,react.useState)(!0),getFeed=async()=>{setLoading(!1);try{let result=await (0,apis.kg)("https://owncast.online/news/index.json");(null==result?void 0:result.items.length)>0&&setFeed(result.items)}catch(error){console.log("==== error",error)}};(0,react.useEffect)(()=>{getFeed()},[]);let loadingSpinner=loading?(0,jsx_runtime.jsx)(skeleton.Z,{loading:!0,active:!0}):null,noNews=loading||0!==feed.length?null:(0,jsx_runtime.jsx)("div",{children:"No news."});return(0,jsx_runtime.jsxs)("section",{className:"news-feed form-module",children:[(0,jsx_runtime.jsx)(Title,{level:2,children:"News & Updates from Owncast"}),loadingSpinner,feed.map(item=>(0,react.createElement)(ArticleItem,{...item,key:item.url})),noNews]})},{Paragraph,Text}=typography.Z,{Title:Offline_Title}=typography.Z,{Meta}=card.Z,Offline=param=>{var ref,ref1,ref2;let rtmpURL,{logs=[],config}=param,serverStatusData=(0,react.useContext)(server_status_context.aC),{serverConfig}=serverStatusData||{},{streamKey,rtmpServerPort}=serverConfig,instanceUrl=(null===(ref=__webpack_require__.g.window)||void 0===ref?void 0:ref.location.hostname)||"";instanceUrl&&rtmpServerPort&&(rtmpURL="rtmp://".concat(instanceUrl.replace(/(^\w+:|^)\/\//,""),":").concat(rtmpServerPort,"/live"));let data=[{icon:(0,jsx_runtime.jsx)(BookTwoTone.Z,{twoToneColor:"#6f42c1"}),title:"Use your broadcasting software",content:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how to point your existing software to your new server and start streaming your content."}),(0,jsx_runtime.jsxs)("div",{className:"stream-info-container",children:[(0,jsx_runtime.jsx)(Text,{strong:!0,className:"stream-info-label",children:"Streaming URL:"}),rtmpURL&&(0,jsx_runtime.jsx)(Paragraph,{className:"stream-info-box",copyable:!0,children:rtmpURL}),(0,jsx_runtime.jsx)(Text,{strong:!0,className:"stream-info-label",children:"Stream Key:"}),(0,jsx_runtime.jsx)(Paragraph,{className:"stream-info-box",copyable:{text:streamKey},children:"*********************"})]})]})},{icon:(0,jsx_runtime.jsx)(PlaySquareTwoTone.Z,{twoToneColor:"#f9826c"}),title:"Embed your video onto other sites",content:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"https://owncast.online/docs/embed?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how you can add your Owncast stream to other sites you control."})})}];return(null==config?void 0:config.chatDisabled)||data.push({icon:(0,jsx_runtime.jsx)(MessageTwoTone.Z,{twoToneColor:"#0366d6"}),title:"Chat is disabled",content:(0,jsx_runtime.jsx)("span",{children:"Chat will continue to be disabled until you begin a live stream."})}),(null==config?void 0:null===(ref1=config.yp)||void 0===ref1?void 0:ref1.enabled)||data.push({icon:(0,jsx_runtime.jsx)(ProfileTwoTone.Z,{twoToneColor:"#D18BFE"}),title:"Find an audience on the Owncast Directory",content:(0,jsx_runtime.jsxs)("div",{children:["List yourself in the Owncast Directory and show off your stream. Enable it in"," ",(0,jsx_runtime.jsx)(link_default(),{href:"/config-public-details",children:"settings."})]})}),(null==config?void 0:null===(ref2=config.federation)||void 0===ref2?void 0:ref2.enabled)||data.push({icon:(0,jsx_runtime.jsx)("img",{alt:"fediverse",width:"20px",src:"fediverse-white.png"}),title:"Add your Owncast instance to the Fediverse",content:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(link_default(),{href:"/config-federation",children:"Enable Owncast social"})," features to have your instance join the Fediverse, allowing people to follow, share and engage with your live stream."]})}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(row.Z,{children:(0,jsx_runtime.jsx)(col.Z,{span:12,offset:6,children:(0,jsx_runtime.jsxs)("div",{className:"offline-intro",children:[(0,jsx_runtime.jsx)("span",{className:"logo",children:(0,jsx_runtime.jsx)(OwncastLogo.C,{variant:"simple"})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Offline_Title,{level:2,children:"No stream is active"}),(0,jsx_runtime.jsx)("p",{children:"You should start one."})]})]})})}),(0,jsx_runtime.jsxs)(row.Z,{gutter:[16,16],className:"offline-content",children:[(0,jsx_runtime.jsx)(col.Z,{span:12,xs:24,sm:24,md:24,lg:12,className:"list-section",children:data.map(item=>(0,jsx_runtime.jsx)(card.Z,{size:"small",bordered:!1,children:(0,jsx_runtime.jsx)(Meta,{avatar:item.icon,title:item.title,description:item.content})},item.title))}),(0,jsx_runtime.jsx)(col.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,jsx_runtime.jsx)(NewsFeed,{})})]}),(0,jsx_runtime.jsx)(LogTable.o,{logs:logs,pageSize:5})]})};var StreamHealthOverview=__webpack_require__(28073),utils_format=__webpack_require__(70241);function streamDetailsFormatter(streamDetails){return(0,jsx_runtime.jsxs)("ul",{className:"statistics-list",children:[(0,jsx_runtime.jsxs)("li",{children:[streamDetails.videoCodec||"Unknown"," @ ",streamDetails.videoBitrate||"Unknown"," kbps"]}),(0,jsx_runtime.jsxs)("li",{children:[streamDetails.framerate||"Unknown"," fps"]}),(0,jsx_runtime.jsxs)("li",{children:[streamDetails.width," x ",streamDetails.height]})]})}function Home(){var ref,ref1;let serverStatusData=(0,react.useContext)(server_status_context.aC),{broadcaster,serverConfig:configData}=serverStatusData||{},{remoteAddr,streamDetails}=broadcaster||{},encoder=(null==streamDetails?void 0:streamDetails.encoder)||"Unknown encoder",[logsData,setLogs]=(0,react.useState)([]),getLogs=async()=>{try{let result=await (0,apis.rQ)(apis.WQ);setLogs(result)}catch(error){console.log("==== error",error)}},getMoreStats=()=>{getLogs()};if((0,react.useEffect)(()=>{getMoreStats();let intervalId=null;return intervalId=setInterval(getMoreStats,apis.NE),()=>{clearInterval(intervalId)}},[]),(0,utils_format.Qr)(configData)||(0,utils_format.Qr)(serverStatusData))return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(skeleton.Z,{active:!0}),(0,jsx_runtime.jsx)(skeleton.Z,{active:!0}),(0,jsx_runtime.jsx)(skeleton.Z,{active:!0})]});if(!broadcaster)return(0,jsx_runtime.jsx)(Offline,{logs:logsData,config:configData});let videoQualitySettings=null==serverStatusData?void 0:null===(ref=serverStatusData.currentBroadcast)||void 0===ref?void 0:null===(ref1=ref.outputSettings)||void 0===ref1?void 0:ref1.map(setting=>{let{audioPassthrough,videoPassthrough,audioBitrate,videoBitrate,framerate}=setting,audioSetting=audioPassthrough?"".concat(streamDetails.audioCodec||"Unknown",", ").concat(streamDetails.audioBitrate," kbps"):"".concat(audioBitrate||"Unknown"," kbps"),videoSetting=videoPassthrough?"".concat(streamDetails.videoBitrate||"Unknown"," kbps, ").concat(streamDetails.framerate," fps ").concat(streamDetails.width," x ").concat(streamDetails.height):"".concat(videoBitrate||"Unknown"," kbps, ").concat(framerate," fps");return(0,jsx_runtime.jsxs)("div",{className:"stream-details-item-container",children:[(0,jsx_runtime.jsx)(statistic.Z,{className:"stream-details-item",title:"Outbound Video Stream",value:videoSetting}),(0,jsx_runtime.jsx)(statistic.Z,{className:"stream-details-item",title:"Outbound Audio Stream",value:audioSetting})]})}),{viewerCount,sessionPeakViewerCount}=serverStatusData,streamAudioDetailString="".concat(streamDetails.audioCodec,", ").concat(streamDetails.audioBitrate||"Unknown"," kbps"),broadcastDate=new Date(broadcaster.time);return(0,jsx_runtime.jsxs)("div",{className:"home-container",children:[(0,jsx_runtime.jsxs)("div",{className:"sections-container",children:[(0,jsx_runtime.jsx)("div",{className:"online-status-section",children:(0,jsx_runtime.jsxs)(card.Z,{size:"small",type:"inner",className:"online-details-card",children:[(0,jsx_runtime.jsxs)(row.Z,{gutter:[16,16],align:"middle",children:[(0,jsx_runtime.jsx)(col.Z,{span:8,sm:24,md:8,children:(0,jsx_runtime.jsx)(statistic.Z,{title:"Stream started ".concat((0,formatRelative.Z)(broadcastDate,Date.now())),value:(0,formatDistanceToNow.Z)(broadcastDate),prefix:(0,jsx_runtime.jsx)(ClockCircleOutlined.Z,{})})}),(0,jsx_runtime.jsx)(col.Z,{span:8,sm:24,md:8,children:(0,jsx_runtime.jsx)(statistic.Z,{title:"Viewers",value:viewerCount,prefix:(0,jsx_runtime.jsx)(UserOutlined.Z,{})})}),(0,jsx_runtime.jsx)(col.Z,{span:8,sm:24,md:8,children:(0,jsx_runtime.jsx)(statistic.Z,{title:"Peak viewer count",value:sessionPeakViewerCount,prefix:(0,jsx_runtime.jsx)(UserOutlined.Z,{})})})]}),(0,jsx_runtime.jsx)(StreamHealthOverview.j,{})]})}),(0,jsx_runtime.jsxs)(row.Z,{gutter:[16,16],className:"section stream-details-section",children:[(0,jsx_runtime.jsxs)(col.Z,{className:"stream-details",span:12,sm:24,md:24,lg:12,children:[(0,jsx_runtime.jsx)(card.Z,{size:"small",title:"Outbound Stream Details",type:"inner",className:"outbound-details",children:videoQualitySettings}),(0,jsx_runtime.jsxs)(card.Z,{size:"small",title:"Inbound Stream Details",type:"inner",children:[(0,jsx_runtime.jsx)(statistic.Z,{className:"stream-details-item",title:"Input",value:"".concat(encoder," ").concat((0,utils_format.t5)(remoteAddr))}),(0,jsx_runtime.jsx)(statistic.Z,{className:"stream-details-item",title:"Inbound Video Stream",value:streamDetails,formatter:streamDetailsFormatter}),(0,jsx_runtime.jsx)(statistic.Z,{className:"stream-details-item",title:"Inbound Audio Stream",value:streamAudioDetailString})]})]}),(0,jsx_runtime.jsx)(col.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,jsx_runtime.jsx)(NewsFeed,{})})]})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(LogTable.o,{logs:logsData,pageSize:5})]})}}},function(__webpack_require__){__webpack_require__.O(0,[8939,3903,4267,3626,8091,4381,5938,5315,4763,5360,8676,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=64830)}),_N_E=__webpack_require__.O()}]);