"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9096],{59096:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NameChangeModal:function(){return NameChangeModal}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),recoil__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4480),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(38939),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(69677),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(71577),_interfaces_socket_events__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(91951),_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(77466);let{Option}=antd__WEBPACK_IMPORTED_MODULE_5__.Z,UserColor=param=>{let{color}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{textAlign:"center",backgroundColor:"var(--theme-color-users-".concat(color,")"),width:"100%",height:"100%"}})},NameChangeModal=()=>{let currentUser=(0,recoil__WEBPACK_IMPORTED_MODULE_2__.sJ)(_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_4__.db),websocketService=(0,recoil__WEBPACK_IMPORTED_MODULE_2__.sJ)(_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_4__.Gt),[newName,setNewName]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null==currentUser?void 0:currentUser.displayName);if(!currentUser)return null;let{displayName,displayColor}=currentUser,handleNameChange=()=>{let nameChange={type:_interfaces_socket_events__WEBPACK_IMPORTED_MODULE_3__.C.NAME_CHANGE,newName};websocketService.send(nameChange)},saveEnabled=newName!==displayName&&""!==newName&&(null==websocketService?void 0:websocketService.isConnected()),handleColorChange=color=>{let colorChange={type:_interfaces_socket_events__WEBPACK_IMPORTED_MODULE_3__.C.COLOR_CHANGE,newColor:Number(color)};websocketService.send(colorChange)},colorOptions=[...Array(8)].map((e,i)=>i);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["Your chat display name is what people see when you send chat messages. Other information can go here to mention auth, and stuff.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{id:"name-change-field",value:newName,onChange:e=>setNewName(e.target.value),placeholder:"Your chat display name",maxLength:30,showCount:!0,defaultValue:displayName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Z,{id:"name-change-submit",disabled:!saveEnabled,onClick:handleNameChange,children:"Change name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["Your Color",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{style:{width:120},onChange:handleColorChange,defaultValue:displayColor.toString(),getPopupContainer:triggerNode=>triggerNode.parentElement,children:colorOptions.map(e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Option,{title:e,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserColor,{color:e})},e.toString()))})]})]})}}}]);