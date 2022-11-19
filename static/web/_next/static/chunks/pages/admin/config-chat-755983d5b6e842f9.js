(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{94594:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return es_switch}});var esm_extends=__webpack_require__(87462),defineProperty=__webpack_require__(4942),LoadingOutlined=__webpack_require__(50888),classnames=__webpack_require__(94184),classnames_default=__webpack_require__.n(classnames),slicedToArray=__webpack_require__(97685),objectWithoutProperties=__webpack_require__(45987),react=__webpack_require__(67294),useMergedState=__webpack_require__(21770),KeyCode=__webpack_require__(15105),Switch=react.forwardRef(function(_ref,ref){var _classNames,_ref$prefixCls=_ref.prefixCls,prefixCls=void 0===_ref$prefixCls?"rc-switch":_ref$prefixCls,className=_ref.className,checked=_ref.checked,defaultChecked=_ref.defaultChecked,disabled=_ref.disabled,loadingIcon=_ref.loadingIcon,checkedChildren=_ref.checkedChildren,unCheckedChildren=_ref.unCheckedChildren,onClick=_ref.onClick,onChange=_ref.onChange,onKeyDown=_ref.onKeyDown,restProps=(0,objectWithoutProperties.Z)(_ref,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),_useMergedState=(0,useMergedState.Z)(!1,{value:checked,defaultValue:defaultChecked}),_useMergedState2=(0,slicedToArray.Z)(_useMergedState,2),innerChecked=_useMergedState2[0],setInnerChecked=_useMergedState2[1];function triggerChange(newChecked,event){var mergedChecked=innerChecked;return disabled||(setInnerChecked(mergedChecked=newChecked),null==onChange||onChange(mergedChecked,event)),mergedChecked}var switchClassName=classnames_default()(prefixCls,className,(_classNames={},(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-checked"),innerChecked),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-disabled"),disabled),_classNames));return react.createElement("button",Object.assign({},restProps,{type:"button",role:"switch","aria-checked":innerChecked,disabled:disabled,className:switchClassName,ref:ref,onKeyDown:function(e){e.which===KeyCode.Z.LEFT?triggerChange(!1,e):e.which===KeyCode.Z.RIGHT&&triggerChange(!0,e),null==onKeyDown||onKeyDown(e)},onClick:function(e){var ret=triggerChange(!innerChecked,e);null==onClick||onClick(ret,e)}}),loadingIcon,react.createElement("span",{className:"".concat(prefixCls,"-inner")},innerChecked?checkedChildren:unCheckedChildren))});Switch.displayName="Switch";var context=__webpack_require__(53124),DisabledContext=__webpack_require__(98866),SizeContext=__webpack_require__(97647),wave=__webpack_require__(68349),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t},switch_Switch=react.forwardRef(function(_a,ref){var _classNames,customizePrefixCls=_a.prefixCls,customizeSize=_a.size,customDisabled=_a.disabled,loading=_a.loading,_a$className=_a.className,props=__rest(_a,["prefixCls","size","disabled","loading","className"]),_React$useContext=react.useContext(context.E_),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,size=react.useContext(SizeContext.Z),disabled=react.useContext(DisabledContext.Z),prefixCls=getPrefixCls("switch",customizePrefixCls),loadingIcon=react.createElement("div",{className:"".concat(prefixCls,"-handle")},loading&&react.createElement(LoadingOutlined.Z,{className:"".concat(prefixCls,"-loading-icon")})),classes=classnames_default()((_classNames={},(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-small"),"small"===(customizeSize||size)),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-loading"),loading),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames),void 0===_a$className?"":_a$className);return react.createElement(wave.Z,{insertExtraNode:!0},react.createElement(Switch,(0,esm_extends.Z)({},props,{prefixCls:prefixCls,className:classes,disabled:(null!=customDisabled?customDisabled:disabled)||loading,ref:ref,loadingIcon:loadingIcon})))});switch_Switch.__ANT_SWITCH=!0;var es_switch=switch_Switch},20550:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return tag}});var defineProperty=__webpack_require__(4942),esm_extends=__webpack_require__(87462),slicedToArray=__webpack_require__(97685),CloseOutlined=__webpack_require__(97937),classnames=__webpack_require__(94184),classnames_default=__webpack_require__.n(classnames),omit=__webpack_require__(98423),react=__webpack_require__(67294),context=__webpack_require__(53124),colors=__webpack_require__(98787),wave=__webpack_require__(68349),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t},tag_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t},PresetColorRegex=RegExp("^(".concat(colors.Y.join("|"),")(-inverse)?$")),PresetStatusColorRegex=RegExp("^(".concat(colors.E.join("|"),")$")),Tag=react.forwardRef(function(_a,ref){var _classNames,customizePrefixCls=_a.prefixCls,className=_a.className,style=_a.style,children=_a.children,icon=_a.icon,color=_a.color,onClose=_a.onClose,closeIcon=_a.closeIcon,_a$closable=_a.closable,props=tag_rest(_a,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),_React$useContext=react.useContext(context.E_),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,_React$useState=react.useState(!0),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),visible=_React$useState2[0],setVisible=_React$useState2[1];react.useEffect(function(){"visible"in props&&setVisible(props.visible)},[props.visible]);var isPresetColor=function(){return!!color&&(PresetColorRegex.test(color)||PresetStatusColorRegex.test(color))},tagStyle=(0,esm_extends.Z)({backgroundColor:color&&!isPresetColor()?color:void 0},style),presetColor=isPresetColor(),prefixCls=getPrefixCls("tag",customizePrefixCls),tagClassName=classnames_default()(prefixCls,(_classNames={},(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-").concat(color),presetColor),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-has-color"),color&&!presetColor),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-hidden"),!visible),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames),className),handleCloseClick=function(e){e.stopPropagation(),null==onClose||onClose(e),!e.defaultPrevented&&("visible"in props||setVisible(!1))},isNeedWave="onClick"in props||children&&"a"===children.type,tagProps=(0,omit.Z)(props,["visible"]),iconNode=icon||null,kids=iconNode?react.createElement(react.Fragment,null,iconNode,react.createElement("span",null,children)):children,tagNode=react.createElement("span",(0,esm_extends.Z)({},tagProps,{ref:ref,className:tagClassName,style:tagStyle}),kids,void 0!==_a$closable&&_a$closable?closeIcon?react.createElement("span",{className:"".concat(prefixCls,"-close-icon"),onClick:handleCloseClick},closeIcon):react.createElement(CloseOutlined.Z,{className:"".concat(prefixCls,"-close-icon"),onClick:handleCloseClick}):null);return isNeedWave?react.createElement(wave.Z,null,tagNode):tagNode});Tag.CheckableTag=function(_a){var _classNames,customizePrefixCls=_a.prefixCls,className=_a.className,checked=_a.checked,onChange=_a.onChange,onClick=_a.onClick,restProps=__rest(_a,["prefixCls","className","checked","onChange","onClick"]),prefixCls=(0,react.useContext(context.E_).getPrefixCls)("tag",customizePrefixCls),cls=classnames_default()(prefixCls,(_classNames={},(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-checkable"),!0),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-checkable-checked"),checked),_classNames),className);return react.createElement("span",(0,esm_extends.Z)({},restProps,{className:cls,onClick:function(e){null==onChange||onChange(!checked),null==onClick||onClick(e)}}))};var tag=Tag},42011:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-chat",function(){return __webpack_require__(91616)}])},80894:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Q:function(){return TAG_COLOR},Y:function(){return EditValueArray}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(84485),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(20550),_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40117),_FormStatusIndicator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39664);let{Title}=antd__WEBPACK_IMPORTED_MODULE_4__.Z,TAG_COLOR="#5a67d8",EditValueArray=param=>{let{title,description,placeholder,maxLength,values,handleDeleteIndex,handleCreateString,submitStatus,continuousStatusMessage}=param,[newStringInput,setNewStringInput]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),handleInputChange=param=>{let{value}=param;setNewStringInput(value)},handleSubmitNewString=()=>{let newString=newStringInput.trim();handleCreateString(newString),setNewStringInput("")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"edit-string-array-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,{level:3,className:"section-title",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"description",children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"edit-current-strings",children:null==values?void 0:values.map((tag,index)=>{let handleClose=()=>{handleDeleteIndex(index)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{closable:!0,onClose:handleClose,color:TAG_COLOR,children:tag},"tag-".concat(tag,"-").concat(index))})}),continuousStatusMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"continuous-status-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormStatusIndicator__WEBPACK_IMPORTED_MODULE_3__.E,{status:continuousStatusMessage})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"add-new-string-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__.nv,{fieldName:"string-input",value:newStringInput,onChange:handleInputChange,onPressEnter:handleSubmitNewString,maxLength:maxLength,placeholder:placeholder,status:submitStatus})})]})};EditValueArray.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},73706:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ToggleSwitch}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(94594),_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41983),_FormStatusIndicator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39664),_utils_config_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(90745),_utils_server_status_context__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(99519);let ToggleSwitch=param=>{let{apiPath,checked,reversed=!1,configPath="",disabled=!1,fieldName,label,tip,useSubmit,onChange}=param,[submitStatus,setSubmitStatus]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),resetTimer=null,serverStatusData=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_server_status_context__WEBPACK_IMPORTED_MODULE_5__.aC),{setFieldInConfigState}=serverStatusData||{},resetStates=()=>{setSubmitStatus(null),clearTimeout(resetTimer),resetTimer=null},handleChange=async isChecked=>{if(useSubmit){setSubmitStatus((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.Jk));let isCheckedSend=reversed?!isChecked:isChecked;await (0,_utils_config_constants__WEBPACK_IMPORTED_MODULE_4__.Si)({apiPath,data:{value:isCheckedSend},onSuccess(){setFieldInConfigState({fieldName,value:isCheckedSend,path:configPath}),setSubmitStatus((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.zv))},onError(message){setSubmitStatus((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.Un,"There was an error: ".concat(message)))}}),resetTimer=setTimeout(resetStates,_utils_config_constants__WEBPACK_IMPORTED_MODULE_4__.sI)}onChange&&onChange(isChecked)},loading=null!==submitStatus&&submitStatus.type===_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.Jk;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"label-side",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"formfield-label",children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"input-side",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"input-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{className:"switch field-".concat(fieldName),loading:loading,onChange:handleChange,defaultChecked:checked,checked:checked,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:disabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormStatusIndicator__WEBPACK_IMPORTED_MODULE_3__.E,{status:submitStatus})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"field-tip",children:tip})]})]})};ToggleSwitch.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},91616:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return ConfigChat}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(84485),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_components_config_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40117),_components_config_TextFieldWithSubmit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10135),_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(73706),_components_config_EditValueArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(80894),_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(41983),_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(90745),_utils_server_status_context__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(99519);function ConfigChat(){var length;let{Title}=antd__WEBPACK_IMPORTED_MODULE_9__.Z,[formDataValues,setFormDataValues]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),[forbiddenUsernameSaveState,setForbiddenUsernameSaveState]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),[suggestedUsernameSaveState,setSuggestedUsernameSaveState]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),serverStatusData=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_server_status_context__WEBPACK_IMPORTED_MODULE_8__.aC),{serverConfig,setFieldInConfigState}=serverStatusData||{},{chatDisabled,chatJoinMessagesEnabled,forbiddenUsernames,instanceDetails,suggestedUsernames,chatEstablishedUserMode}=serverConfig,{welcomeMessage}=instanceDetails,handleFieldChange=param=>{let{fieldName,value}=param;setFormDataValues({...formDataValues,[fieldName]:value})};function resetForbiddenUsernameState(){setForbiddenUsernameSaveState(null)}function saveForbiddenUsernames(){(0,_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.Si)({apiPath:_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.CJ,data:{value:formDataValues.forbiddenUsernames},onSuccess(){setFieldInConfigState({fieldName:"forbiddenUsernames",value:formDataValues.forbiddenUsernames}),setForbiddenUsernameSaveState((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.zv)),setTimeout(resetForbiddenUsernameState,_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.sI)},onError(message){setForbiddenUsernameSaveState((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.Un,message)),setTimeout(resetForbiddenUsernameState,_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.sI)}})}function resetSuggestedUsernameState(){setSuggestedUsernameSaveState(null)}function saveSuggestedUsernames(){(0,_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.Si)({apiPath:_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.cf,data:{value:formDataValues.suggestedUsernames},onSuccess(){setFieldInConfigState({fieldName:"suggestedUsernames",value:formDataValues.suggestedUsernames}),setSuggestedUsernameSaveState((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.zv)),setTimeout(resetSuggestedUsernameState,_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.sI)},onError(message){setForbiddenUsernameSaveState((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.Un,message)),setTimeout(resetSuggestedUsernameState,_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.sI)}})}return((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setFormDataValues({chatDisabled,chatJoinMessagesEnabled,forbiddenUsernames,suggestedUsernames,welcomeMessage,chatEstablishedUserMode})},[serverConfig]),formDataValues)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"config-server-details-form",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,{children:"Chat Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"form-module config-server-details-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__.Z,{fieldName:"chatDisabled",..._utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.yj,checked:!formDataValues.chatDisabled,reversed:!0,onChange:function(disabled){handleFieldChange({fieldName:"chatDisabled",value:!disabled})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__.Z,{fieldName:"chatJoinMessagesEnabled",..._utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.kB,checked:formDataValues.chatJoinMessagesEnabled,onChange:function(enabled){handleFieldChange({fieldName:"chatJoinMessagesEnabled",value:enabled})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__.Z,{fieldName:"establishedUserMode",..._utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.dj,checked:formDataValues.chatEstablishedUserMode,onChange:function(enabled){handleFieldChange({fieldName:"chatEstablishedUserMode",value:enabled})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_TextFieldWithSubmit__WEBPACK_IMPORTED_MODULE_3__.$7,{fieldName:"welcomeMessage",..._utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.IX,type:_components_config_TextField__WEBPACK_IMPORTED_MODULE_2__.Sk,value:formDataValues.welcomeMessage,initialValue:welcomeMessage,onChange:handleFieldChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_EditValueArray__WEBPACK_IMPORTED_MODULE_5__.Y,{title:_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.Dg.label,placeholder:_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.Dg.placeholder,description:_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.Dg.tip,values:formDataValues.forbiddenUsernames,handleDeleteIndex:function(index){formDataValues.forbiddenUsernames.splice(index,1),saveForbiddenUsernames()},handleCreateString:function(tag){formDataValues.forbiddenUsernames.push(tag),handleFieldChange({fieldName:"forbiddenUsernames",value:formDataValues.forbiddenUsernames}),saveForbiddenUsernames()},submitStatus:forbiddenUsernameSaveState}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_EditValueArray__WEBPACK_IMPORTED_MODULE_5__.Y,{title:_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.AN.label,placeholder:_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.AN.placeholder,description:_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.AN.tip,values:formDataValues.suggestedUsernames,handleDeleteIndex:function(index){formDataValues.suggestedUsernames.splice(index,1),saveSuggestedUsernames()},handleCreateString:function(tag){formDataValues.suggestedUsernames.push(tag),handleFieldChange({fieldName:"suggestedUsernames",value:formDataValues.suggestedUsernames}),saveSuggestedUsernames()},submitStatus:suggestedUsernameSaveState,continuousStatusMessage:0===(length=formDataValues.suggestedUsernames.length)?(0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.kg)("success",_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.AN.no_entries):length>0&&length<10?(0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_6__.kg)("warning",_utils_config_constants__WEBPACK_IMPORTED_MODULE_7__.AN.min_not_reached):null})]})]}):null}}},function(__webpack_require__){__webpack_require__.O(0,[9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=42011)}),_N_E=__webpack_require__.O()}]);