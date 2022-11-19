"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5122],{5122:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{completeFromSchema:function(){return completeFromSchema},xml:function(){return xml},xmlLanguage:function(){return xmlLanguage}});var dist=__webpack_require__(53105),highlight_dist=__webpack_require__(35524);let cachedName=null,cachedInput=null,cachedPos=0;function tagNameAfter(input,offset){var ch;let pos=input.pos+offset;if(cachedInput==input&&cachedPos==pos)return cachedName;for(;9==(ch=input.peek(offset))||10==ch||13==ch||32==ch;)offset++;let name="";for(;;){let next=input.peek(offset);if(!(45==next||46==next||58==next||next>=65&&next<=90||95==next||next>=97&&next<=122||next>=161))break;name+=String.fromCharCode(next),offset++}return cachedInput=input,cachedPos=pos,cachedName=name||null}function ElementContext(name,parent){this.name=name,this.parent=parent,this.hash=parent?parent.hash:0;for(let i=0;i<name.length;i++)this.hash+=(this.hash<<4)+name.charCodeAt(i)+(name.charCodeAt(i)<<8)}let elementContext=new dist.IK({start:null,shift:(context,term,stack,input)=>1==term?new ElementContext(tagNameAfter(input,1)||"",context):context,reduce:(context,term)=>11==term&&context?context.parent:context,reuse(context,node,_stack,input){let type=node.type.id;return 1==type||13==type?new ElementContext(tagNameAfter(input,1)||"",context):context},hash:context=>context?context.hash:0,strict:!1}),startTag=new dist.Jq((input,stack)=>{if(60==input.next){if(input.advance(),47==input.next){input.advance();let name=tagNameAfter(input,0);if(!name)return input.acceptToken(5);if(stack.context&&name==stack.context.name)return input.acceptToken(2);for(let cx=stack.context;cx;cx=cx.parent)if(cx.name==name)return input.acceptToken(3,-2);input.acceptToken(4)}else if(33!=input.next&&63!=input.next)return input.acceptToken(1)}},{contextual:!0});function scanTo(type,end){return new dist.Jq(input=>{for(let endPos=0,len=0;;len++){if(input.next<0){len&&input.acceptToken(type);break}if(input.next==end.charCodeAt(endPos)){if(++endPos==end.length){len>end.length&&input.acceptToken(type,1-end.length);break}}else endPos=input.next==end.charCodeAt(0)?1:0;input.advance()}})}let commentContent=scanTo(35,"-->"),piContent=scanTo(36,"?>"),cdataContent=scanTo(37,"]]>"),xmlHighlighting=(0,highlight_dist.Gv)({Text:highlight_dist.pJ.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":highlight_dist.pJ.angleBracket,TagName:highlight_dist.pJ.tagName,"MismatchedCloseTag/Tagname":[highlight_dist.pJ.tagName,highlight_dist.pJ.invalid],AttributeName:highlight_dist.pJ.attributeName,AttributeValue:highlight_dist.pJ.attributeValue,Is:highlight_dist.pJ.definitionOperator,"EntityReference CharacterReference":highlight_dist.pJ.character,Comment:highlight_dist.pJ.blockComment,ProcessingInst:highlight_dist.pJ.processingInstruction,DoctypeDecl:highlight_dist.pJ.documentMeta,Cdata:highlight_dist.pJ.special(highlight_dist.pJ.string)}),parser=dist.WQ.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:elementContext,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"]],propSources:[xmlHighlighting],skippedNodes:[0],repeatNodeCount:8,tokenData:"Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kX$rUVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kP%ZRVPOv%Uw!^%U!_~%UW%iR{WOr%dsv%dw~%d_%{]VP{WyUOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{RzYVPOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POW~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOX~Z(xWVP{WOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[U|QVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k]*uWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k]+hUdSVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}`S^QVP{WOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWVP{WOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kX/xU{WOq%dqr0[sv%dw!a%d!a!b=X!b~%dX0aZ{WOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dX1XT{WOr%dsv%dw}%d}!O1h!O~%dX1oR}P{WOr%dsv%dw~%dX1}T{WOr%dsv%dw!q%d!q!r2^!r~%dX2cT{WOr%dsv%dw!e%d!e!f2r!f~%dX2wT{WOr%dsv%dw!v%d!v!w3W!w~%dX3]T{WOr%dsv%dw!{%d!{!|3l!|~%dX3qT{WOr%dsv%dw!r%d!r!s4Q!s~%dX4VT{WOr%dsv%dw!g%d!g!h4f!h~%dX4kV{WOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOiPX5jRiP{WOr%dsv%dw~%dX5xV{WOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dX6dT{WOr%dsv%dw!f%d!f!g6s!g~%dX6xT{WOr%dsv%dw!c%d!c!d7X!d~%dX7^T{WOr%dsv%dw!v%d!v!w7m!w~%dX7rT{WOr%dsv%dw!c%d!c!d8R!d~%dX8WT{WOr%dsv%dw!}%d!}#O8g#O~%dX8nR{WxPOr%dsv%dw~%dX8|T{WOr%dsv%dw#W%d#W#X9]#X~%dX9bT{WOr%dsv%dw#T%d#T#U9q#U~%dX9vT{WOr%dsv%dw#h%d#h#i:V#i~%dX:[T{WOr%dsv%dw#T%d#T#U8R#U~%dX:pT{WOr%dsv%dw#c%d#c#d;P#d~%dX;UT{WOr%dsv%dw#V%d#V#W;e#W~%dX;jT{WOr%dsv%dw#h%d#h#i;y#i~%dX<OT{WOr%dsv%dw#m%d#m#n<_#n~%dX<dT{WOr%dsv%dw#d%d#d#e<s#e~%dX<xT{WOr%dsv%dw#X%d#X#Y4f#Y~%dX=`R!PP{WOr%dsv%dw~%dZ=rUaQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_U[UVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU!OQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWVP{WOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhUwQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k",tokenizers:[startTag,commentContent,piContent,cdataContent,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});var language_dist=__webpack_require__(59119);function tagName(doc,tag){let name=tag&&tag.getChild("TagName");return name?doc.sliceString(name.from,name.to):""}function elementName(doc,tree){let tag=tree&&tree.firstChild;return tag&&"OpenTag"==tag.name?tagName(doc,tag):""}function findParentElement(tree){for(let cur=tree&&tree.parent;cur;cur=cur.parent)if("Element"==cur.name)return cur;return null}class dist_Element{constructor(spec,attrs,attrValues){this.attrs=attrs,this.attrValues=attrValues,this.children=[],this.name=spec.name,this.completion=Object.assign(Object.assign({type:"type"},spec.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=spec.textContent?spec.textContent.map(s=>({label:s,type:"text"})):[]}}let Identifier=/^[:\-\.\w\u00b7-\uffff]*$/;function attrCompletion(spec){return Object.assign(Object.assign({type:"property"},spec.completion||{}),{label:spec.name})}function valueCompletion(spec){return"string"==typeof spec?{label:`"${spec}"`,type:"constant"}:/^"/.test(spec.label)?spec:Object.assign(Object.assign({},spec),{label:`"${spec.label}"`})}function completeFromSchema(eltSpecs,attrSpecs){let allAttrs=[],globalAttrs=[],attrValues=Object.create(null);for(let s of attrSpecs){let completion=attrCompletion(s);allAttrs.push(completion),s.global&&globalAttrs.push(completion),s.values&&(attrValues[s.name]=s.values.map(valueCompletion))}let allElements=[],topElements=[],byName=Object.create(null);for(let s1 of eltSpecs){let attrs=globalAttrs,attrVals=attrValues;s1.attributes&&(attrs=attrs.concat(s1.attributes.map(s=>"string"==typeof s?allAttrs.find(a=>a.label==s)||{label:s,type:"property"}:(s.values&&(attrVals==attrValues&&(attrVals=Object.create(attrVals)),attrVals[s.name]=s.values.map(valueCompletion)),attrCompletion(s)))));let elt=new dist_Element(s1,attrs,attrVals);byName[elt.name]=elt,allElements.push(elt),s1.top&&topElements.push(elt)}topElements.length||(topElements=allElements);for(let i=0;i<allElements.length;i++){let s2=eltSpecs[i],elt1=allElements[i];if(s2.children)for(let ch of s2.children)byName[ch]&&elt1.children.push(byName[ch]);else elt1.children=allElements}return cx=>{var _a;let{doc}=cx.state,loc=function(state,pos){var _a;let at=(0,language_dist.qz)(state).resolveInner(pos,-1),inTag=null;for(let cur=at;!inTag&&cur.parent;cur=cur.parent)("OpenTag"==cur.name||"CloseTag"==cur.name||"SelfClosingTag"==cur.name||"MismatchedCloseTag"==cur.name)&&(inTag=cur);if(inTag&&(inTag.to>pos||inTag.lastChild.type.isError)){let elt=inTag.parent;if("TagName"==at.name)return"CloseTag"==inTag.name||"MismatchedCloseTag"==inTag.name?{type:"closeTag",from:at.from,context:elt}:{type:"openTag",from:at.from,context:findParentElement(elt)};if("AttributeName"==at.name)return{type:"attrName",from:at.from,context:inTag};if("AttributeValue"==at.name)return{type:"attrValue",from:at.from,context:inTag};let before=at==inTag||"Attribute"==at.name?at.childBefore(pos):at;return(null==before?void 0:before.name)=="StartTag"?{type:"openTag",from:pos,context:findParentElement(elt)}:(null==before?void 0:before.name)=="StartCloseTag"&&before.to<=pos?{type:"closeTag",from:pos,context:elt}:(null==before?void 0:before.name)=="Is"?{type:"attrValue",from:pos,context:inTag}:before?{type:"attrName",from:pos,context:inTag}:null}if("StartCloseTag"==at.name)return{type:"closeTag",from:pos,context:at.parent};for(;at.parent&&at.to==pos&&!(null===(_a=at.lastChild)||void 0===_a?void 0:_a.type.isError);)at=at.parent;return"Element"==at.name||"Text"==at.name||"Document"==at.name?{type:"tag",from:pos,context:"Element"==at.name?at:findParentElement(at)}:null}(cx.state,cx.pos);if(!loc||"tag"==loc.type&&!cx.explicit)return null;let{type,from,context}=loc;if("openTag"==type){let children=topElements,parentName=elementName(doc,context);if(parentName){let parent=byName[parentName];children=(null==parent?void 0:parent.children)||allElements}return{from,options:children.map(ch=>ch.completion),validFor:Identifier}}if("closeTag"==type){let parentName1=elementName(doc,context);return parentName1?{from,to:cx.pos+(">"==doc.sliceString(cx.pos,cx.pos+1)?1:0),options:[(null===(_a=byName[parentName1])||void 0===_a?void 0:_a.closeNameCompletion)||{label:parentName1+">",type:"type"}],validFor:Identifier}:null}if("attrName"==type){let parent1=byName[tagName(doc,context)];return{from,options:(null==parent1?void 0:parent1.attrs)||globalAttrs,validFor:Identifier}}if("attrValue"==type){let attr,name;let attr1=(name=(attr=context&&context.getChildren("Attribute").find(a=>a.from<=from&&a.to>=from))&&attr.getChild("AttributeName"))?doc.sliceString(name.from,name.to):"";if(!attr1)return null;let parent2=byName[tagName(doc,context)],values=((null==parent2?void 0:parent2.attrValues)||attrValues)[attr1];return values&&values.length?{from,to:cx.pos+('"'==doc.sliceString(cx.pos,cx.pos+1)?1:0),options:values,validFor:/^"[^"]*"?$/}:null}{if("tag"!=type)return null;let parentName2=elementName(doc,context),parent3=byName[parentName2],closing=[],last=context&&context.lastChild;parentName2&&(!last||"CloseTag"!=last.name||tagName(doc,last)!=parentName2)&&closing.push(parent3?parent3.closeCompletion:{label:"</"+parentName2+">",type:"type",boost:2});let options=closing.concat(((null==parent3?void 0:parent3.children)||(context?allElements:topElements)).map(e=>e.openCompletion));if(context&&(null==parent3?void 0:parent3.text.length)){let openTag=context.firstChild;openTag.to>cx.pos-20&&!/\S/.test(cx.state.sliceDoc(openTag.to,cx.pos))&&(options=options.concat(parent3.text))}return{from,options,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}}}let xmlLanguage=language_dist.qp.define({name:"xml",parser:parser.configure({props:[language_dist.uj.add({Element(context){let closed=/^\s*<\//.test(context.textAfter);return context.lineIndent(context.node.from)+(closed?0:context.unit)},"OpenTag CloseTag SelfClosingTag":context=>context.column(context.node.from)+context.unit}),language_dist.x0.add({Element(subtree){let first=subtree.firstChild,last=subtree.lastChild;return first&&"OpenTag"==first.name?{from:first.to,to:"CloseTag"==last.name?last.from:subtree.to}:null}})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function xml(conf={}){return new language_dist.ri(xmlLanguage,xmlLanguage.data.of({autocomplete:completeFromSchema(conf.elements||[],conf.attributes||[])}))}}}]);