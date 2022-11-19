"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7558],{36395:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){function failFirstLine(stream,state){return stream.skipToEnd(),state.cur=header,"error"}function start(stream,state){return stream.match(/^HTTP\/\d\.\d/)?(state.cur=responseStatusCode,"keyword"):stream.match(/^[A-Z]+/)&&/[ \t]/.test(stream.peek())?(state.cur=requestPath,"keyword"):failFirstLine(stream,state)}function responseStatusCode(stream,state){var code=stream.match(/^\d+/);if(!code)return failFirstLine(stream,state);state.cur=responseStatusText;var status=Number(code[0]);return status>=100&&status<400?"atom":"error"}function responseStatusText(stream,state){return stream.skipToEnd(),state.cur=header,null}function requestPath(stream,state){return stream.eatWhile(/\S/),state.cur=requestProtocol,"string.special"}function requestProtocol(stream,state){return stream.match(/^HTTP\/\d\.\d$/)?(state.cur=header,"keyword"):failFirstLine(stream,state)}function header(stream){return!stream.sol()||stream.eat(/[ \t]/)?(stream.skipToEnd(),"string"):stream.match(/^.*?:/)?"atom":(stream.skipToEnd(),"error")}function body(stream){return stream.skipToEnd(),null}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{http:function(){return http}});let http={name:"http",token:function(stream,state){var cur=state.cur;return cur!=header&&cur!=body&&stream.eatSpace()?null:cur(stream,state)},blankLine:function(state){state.cur=body},startState:function(){return{cur:start}}}}}]);