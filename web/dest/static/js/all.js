/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/*! jQuery UI - v1.12.1 - 2017-03-21
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(p.inline?p.dpDiv.parent()[0]:p.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var l=0,h=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=h.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=h.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,o,a,r,l,h=i.nodeName.toLowerCase();return"area"===h?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var c=!1;t(document).on("mouseup",function(){c=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!c){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),c=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,c=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&u(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var u=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,l=a+e.helperProportions.height,h=i.offset.left,c=i.offset.top,u=h+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=h&&u>=r&&a>=c&&d>=l;case"intersect":return o+e.helperProportions.width/2>h&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>l-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,h,i.proportions().width);case"touch":return(a>=c&&d>=a||l>=c&&d>=l||c>a&&l>d)&&(o>=h&&u>=o||r>=h&&u>=r||h>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&u(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=u(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,l=this._change[o];return this._updatePrevProperties(),l?(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(a,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),n&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},h=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=l._num(e.css("padding"+s))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,n=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:n,l.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,h=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),h.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,h=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};
t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,h=l[0]||1,c=l[1]||1,u=Math.round((n.width-o.width)/h)*h,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=l,_&&(p+=h),v&&(f+=c),g&&(p-=h),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-h)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-h>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,l=e.pageY;return o>r&&(i=r,r=o,o=i),a>l&&(i=l,l=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:l-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),h=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?h=!(c.left>r||o>c.right||c.top>l||a>c.bottom):"fit"===n.tolerance&&(h=c.left>o&&r>c.right&&c.top>a&&l>c.bottom),h?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+h>r&&l>s+h,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&l>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],l=[],h=this._connectWith();if(h&&e)for(s=h.length-1;s>=0;s--)for(o=t(h[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&l.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=l.length-1;s>=0;s--)l[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,l,h,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,h=r.length;h>s;s++)l=t(r[s]),l.data(this.widgetName+"-item",a),c.push({item:l,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,l,h,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(l=this.items[s].item.offset()[a],h=!1,e[u]-l>this.items[s][r]/2&&(h=!0),n>Math.abs(e[u]-l)&&(n=Math.abs(e[u]-l),o=this.items[s],this.direction=h?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))
},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],l=r&&n.collapsible,h=l?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:l?t():a,newPanel:h};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=l?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,l=t.css("box-sizing"),h=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=h&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var d=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var l=n[s]("widget");t.data(l[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(l[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(d,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)
},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var p;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,l,h,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),p===n&&(p=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,l,h=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),a(h.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==n.dateFormat&&void 0===n.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,l,h,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),l=t.datepicker._checkOffset(s,l,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),s.inline||(h=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?s.dpDiv.show(h,t.datepicker._get(s,"showOptions"),c):s.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,p=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>l&&l>n?Math.abs(i.left+n-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,l=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(l,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],l+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+l},x=function(){if(i.charAt(l)!==e.charAt(n))throw"Unexpected literal at position "+l;l++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>l&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},h=function(t,e,i){var s=""+e;if(l(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return l(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||l("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=l.exec(i);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":a+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}h=l.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,l,h,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,T,I,M,P,S,N,H,A,z,O,E,W,F,L,R=new Date,Y=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),T=" ui-corner-all",I="",$){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+(B?"right":"left");
break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+(B?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===k?B?o:s:"")+(/all|right/.test(T)&&0===k?B?s:o:"")+this._generateMonthYearHeader(t,Z,te,J,Q,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)P=(w+c)%7,M+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[P]+"'>"+p[P]+"</span></th>";for(I+=M+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),N=(this._getFirstDayOfMonth(te,Z)-c+7)%7,H=Math.ceil((N+S)/7),A=$?this.maxRows>H?this.maxRows:H:H,this.maxRows=A,z=this._daylightSavingAdjust(new Date(te,Z,1-N)),O=0;A>O;O++){for(I+="<tr>",E=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(z)+"</td>":"",w=0;7>w;w++)W=m?m.apply(t.input?t.input[0]:null,[z]):[!0,""],F=z.getMonth()!==Z,L=F&&!v||!W[0]||J&&J>z||Q&&z>Q,E+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+W[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===Y.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);I+=E+"</tr>"}Z++,Z>11&&(Z=0,te++),I+="</tbody></table>"+($?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=I}y+=x}return y+=h,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=s&&s.getFullYear()===i,h=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=s.getMonth())&&(!h||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),l=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(l>=0?"+":"")+l,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,l,h,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),l=o.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-o.width()/2,top:e.pageY-l.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](c,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),l=t(s).closest("li"),h=l.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=l.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),h&&l.data("ui-tabs-aria-controls",h),l.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,l=r?t():this._getPanelForTab(o),h=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:h,newTab:r?t():o,newPanel:l};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),h.length||l.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),l.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},l=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),l(n,e)},1)}).fail(function(t,e){setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){h.of=t,a.is(":hidden")||a.position(h)}var o,a,r,l,h=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),l=t("<div>").html(a.find(".ui-tooltip-content").html()),l.removeAttr("name").find("[name]").removeAttr("name"),l.removeAttr("id").find("[id]").removeAttr("id"),l.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(h.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]
}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip;var f="ui-effects-",g="ui-effects-style",m="ui-effects-animated",_=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,o){var a,r=o.re.exec(i),l=r&&o.parse(r),h=o.space||"rgba";return l?(a=s[h](l),s[c[h].cache]=a[c[h].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,a,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,l],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof h?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),o=c[n],a=0===this.alpha()?h("transparent"):this,r=a[o.cache]||o.to(a._rgba),l=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],h=s[o],c=u[n.type]||{};null!==h&&(null===a?l[o]=h:(c.mod&&(h-a>c.mod/2?a+=c.mod:a-h>c.mod/2&&(a-=c.mod)),l[o]=i((h-a)*e+a,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),l=Math.min(s,n,o),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-o)/h+360:n===r?60*(o-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&&!this[a]&&(this[a]=l(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[a]=d,n):h(d)},f(o,function(e,i){h.fn[e]||(h.fn[e]=function(n){var o,a=t.type(n),l="alpha"===e?this._hsla?"hsla":"rgba":s,h=this[l](),c=h[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=h(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(l){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(_),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(_.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var l=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",h=l.children?a.find("*").addBack():a;h=h.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),h=h.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(m)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(f+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(f+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(g,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(g)||"",t.removeData(g)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(f+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=f+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(m),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(l)&&l.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[h](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===h:"show"===h)?(r[h](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",l=s.complete,h=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,h)||o;i.data(m,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?h?this[h](s.duration,l):this.each(function(){l&&l.call(this)}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,l=o?a.scrollLeft():0,h=n.offset(),c={top:h.top-r,left:h.left-l,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-l,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var v=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},l=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),l&&l.css(t.effects.clipToBox(r)),r.clip=a),l&&l.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,l="hide"===r,h="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(h||l?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),h&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),l&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=l?2*u:u/2;l&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,l=r||"horizontal"===a,h=r||"vertical"===a;s=o.cssClip(),n.clip={top:h?(s.bottom-s.top)/2:s.top,right:l?(s.right-s.left)/2:s.right,bottom:h?(s.bottom-s.top)/2:s.bottom,left:l?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",l="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r?"-=":"+=",c="+="===h?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,u[l]=h+s,a&&(n.css(u),u[l]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(l=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,h=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?h*_:0),top:l+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:h*_),top:l+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,l=/([0-9]+)%/.exec(r),h=!!e.horizFirst,c=h?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;l&&(r=parseInt(l[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,l,n.from.y,_),v=t.effects.setTransition(a,l,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,h,n.from.x,_),v=t.effects.setTransition(a,h,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(l=l.concat(["marginTop","marginBottom"]).concat(r),h=h.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,l,n.from.y,o),a=t.effects.setTransition(i,l,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,h,n.from.x,o),a=t.effects.setTransition(i,h,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,l=2*(e.times||5)+(r?1:0),h=e.duration/l,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);l>u;u++)s.animate({opacity:c},h,e.easing),c=1-c;s.animate({opacity:c},h,e.easing),s.queue(i),t.effects.unshift(s,d,l+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,l=2*r+1,h=Math.round(e.duration/l),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,h,e.easing);r>s;s++)n.animate(p,h,e.easing).animate(f,h,e.easing);n.animate(p,h,e.easing).animate(d,h/2,e.easing).queue(i),t.effects.unshift(n,g,l+1)}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,u=e.distance||o["top"===h?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[h],d[h]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[l][1]]=d.clip[a[l][0]],"show"===r&&(o.cssClip(d.clip),o.css(h,d[h]),d.clip=s,d[h]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var v;t.uiBackCompat!==!1&&(v=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)}))});
/*! jquery-qrcode v0.14.0 - https://larsjung.de/jquery-qrcode/ */
!function(r){"use strict";function t(t,e,n,o){function a(r,t){return r-=o,t-=o,0>r||r>=c||0>t||t>=c?!1:f.isDark(r,t)}function i(r,t,e,n){var o=u.isDark,a=1/l;u.isDark=function(i,u){var f=u*a,c=i*a,l=f+a,g=c+a;return o(i,u)&&(r>l||f>e||t>g||c>n)}}var u={},f=r(n,e);f.addData(t),f.make(),o=o||0;var c=f.getModuleCount(),l=f.getModuleCount()+2*o;return u.text=t,u.level=e,u.version=n,u.moduleCount=l,u.isDark=a,u.addBlank=i,u}function e(r,e,n,o,a){n=Math.max(1,n||1),o=Math.min(40,o||40);for(var i=n;o>=i;i+=1)try{return t(r,e,i,a)}catch(u){}}function n(r,t,e){var n=e.size,o="bold "+e.mSize*n+"px "+e.fontname,a=w("<canvas/>")[0].getContext("2d");a.font=o;var i=a.measureText(e.label).width,u=e.mSize,f=i/n,c=(1-f)*e.mPosX,l=(1-u)*e.mPosY,g=c+f,s=l+u,v=.01;1===e.mode?r.addBlank(0,l-v,n,s+v):r.addBlank(c-v,l-v,g+v,s+v),t.fillStyle=e.fontcolor,t.font=o,t.fillText(e.label,c*n,l*n+.75*e.mSize*n)}function o(r,t,e){var n=e.size,o=e.image.naturalWidth||1,a=e.image.naturalHeight||1,i=e.mSize,u=i*o/a,f=(1-u)*e.mPosX,c=(1-i)*e.mPosY,l=f+u,g=c+i,s=.01;3===e.mode?r.addBlank(0,c-s,n,g+s):r.addBlank(f-s,c-s,l+s,g+s),t.drawImage(e.image,f*n,c*n,u*n,i*n)}function a(r,t,e){w(e.background).is("img")?t.drawImage(e.background,0,0,e.size,e.size):e.background&&(t.fillStyle=e.background,t.fillRect(e.left,e.top,e.size,e.size));var a=e.mode;1===a||2===a?n(r,t,e):(3===a||4===a)&&o(r,t,e)}function i(r,t,e,n,o,a,i,u){r.isDark(i,u)&&t.rect(n,o,a,a)}function u(r,t,e,n,o,a,i,u,f,c){i?r.moveTo(t+a,e):r.moveTo(t,e),u?(r.lineTo(n-a,e),r.arcTo(n,e,n,o,a)):r.lineTo(n,e),f?(r.lineTo(n,o-a),r.arcTo(n,o,t,o,a)):r.lineTo(n,o),c?(r.lineTo(t+a,o),r.arcTo(t,o,t,e,a)):r.lineTo(t,o),i?(r.lineTo(t,e+a),r.arcTo(t,e,n,e,a)):r.lineTo(t,e)}function f(r,t,e,n,o,a,i,u,f,c){i&&(r.moveTo(t+a,e),r.lineTo(t,e),r.lineTo(t,e+a),r.arcTo(t,e,t+a,e,a)),u&&(r.moveTo(n-a,e),r.lineTo(n,e),r.lineTo(n,e+a),r.arcTo(n,e,n-a,e,a)),f&&(r.moveTo(n-a,o),r.lineTo(n,o),r.lineTo(n,o-a),r.arcTo(n,o,n-a,o,a)),c&&(r.moveTo(t+a,o),r.lineTo(t,o),r.lineTo(t,o-a),r.arcTo(t,o,t+a,o,a))}function c(r,t,e,n,o,a,i,c){var l=r.isDark,g=n+a,s=o+a,v=e.radius*a,h=i-1,d=i+1,w=c-1,m=c+1,y=l(i,c),T=l(h,w),p=l(h,c),B=l(h,m),A=l(i,m),E=l(d,m),k=l(d,c),M=l(d,w),C=l(i,w);y?u(t,n,o,g,s,v,!p&&!C,!p&&!A,!k&&!A,!k&&!C):f(t,n,o,g,s,v,p&&C&&T,p&&A&&B,k&&A&&E,k&&C&&M)}function l(r,t,e){var n,o,a=r.moduleCount,u=e.size/a,f=i;for(e.radius>0&&e.radius<=.5&&(f=c),t.beginPath(),n=0;a>n;n+=1)for(o=0;a>o;o+=1){var l=e.left+o*u,g=e.top+n*u,s=u;f(r,t,e,l,g,s,n,o)}if(w(e.fill).is("img")){t.strokeStyle="rgba(0,0,0,0.5)",t.lineWidth=2,t.stroke();var v=t.globalCompositeOperation;t.globalCompositeOperation="destination-out",t.fill(),t.globalCompositeOperation=v,t.clip(),t.drawImage(e.fill,0,0,e.size,e.size),t.restore()}else t.fillStyle=e.fill,t.fill()}function g(r,t){var n=e(t.text,t.ecLevel,t.minVersion,t.maxVersion,t.quiet);if(!n)return null;var o=w(r).data("qrcode",n),i=o[0].getContext("2d");return a(n,i,t),l(n,i,t),o}function s(r){var t=w("<canvas/>").attr("width",r.size).attr("height",r.size);return g(t,r)}function v(r){return w("<img/>").attr("src",s(r)[0].toDataURL("image/png"))}function h(r){var t=e(r.text,r.ecLevel,r.minVersion,r.maxVersion,r.quiet);if(!t)return null;var n,o,a=r.size,i=r.background,u=Math.floor,f=t.moduleCount,c=u(a/f),l=u(.5*(a-c*f)),g={position:"relative",left:0,top:0,padding:0,margin:0,width:a,height:a},s={position:"absolute",padding:0,margin:0,width:c,height:c,"background-color":r.fill},v=w("<div/>").data("qrcode",t).css(g);for(i&&v.css("background-color",i),n=0;f>n;n+=1)for(o=0;f>o;o+=1)t.isDark(n,o)&&w("<div/>").css(s).css({left:l+o*c,top:l+n*c}).appendTo(v);return v}function d(r){return m&&"canvas"===r.render?s(r):m&&"image"===r.render?v(r):h(r)}var w=window.jQuery,m=function(){var r=document.createElement("canvas");return!(!r.getContext||!r.getContext("2d"))}(),y={render:"canvas",minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:0,quiet:0,mode:0,mSize:.1,mPosX:.5,mPosY:.5,label:"no label",fontname:"sans",fontcolor:"#000",image:null};w.fn.qrcode=function(r){var t=w.extend({},y,r);return this.each(function(r,e){"canvas"===e.nodeName.toLowerCase()?g(e,t):w(e).append(d(t))})}}(function(){var r=function(){function r(t,e){if("undefined"==typeof t.length)throw new Error(t.length+"/"+e);var n=function(){for(var r=0;r<t.length&&0==t[r];)r+=1;for(var n=new Array(t.length-r+e),o=0;o<t.length-r;o+=1)n[o]=t[o+r];return n}(),o={};return o.getAt=function(r){return n[r]},o.getLength=function(){return n.length},o.multiply=function(t){for(var e=new Array(o.getLength()+t.getLength()-1),n=0;n<o.getLength();n+=1)for(var a=0;a<t.getLength();a+=1)e[n+a]^=i.gexp(i.glog(o.getAt(n))+i.glog(t.getAt(a)));return r(e,0)},o.mod=function(t){if(o.getLength()-t.getLength()<0)return o;for(var e=i.glog(o.getAt(0))-i.glog(t.getAt(0)),n=new Array(o.getLength()),a=0;a<o.getLength();a+=1)n[a]=o.getAt(a);for(var a=0;a<t.getLength();a+=1)n[a]^=i.gexp(i.glog(t.getAt(a))+e);return r(n,0).mod(t)},o}var t=function(t,e){var o=236,i=17,l=t,g=n[e],s=null,v=0,d=null,w=new Array,m={},y=function(r,t){v=4*l+17,s=function(r){for(var t=new Array(r),e=0;r>e;e+=1){t[e]=new Array(r);for(var n=0;r>n;n+=1)t[e][n]=null}return t}(v),T(0,0),T(v-7,0),T(0,v-7),A(),B(),k(r,t),l>=7&&E(r),null==d&&(d=D(l,g,w)),M(d,t)},T=function(r,t){for(var e=-1;7>=e;e+=1)if(!(-1>=r+e||r+e>=v))for(var n=-1;7>=n;n+=1)-1>=t+n||t+n>=v||(e>=0&&6>=e&&(0==n||6==n)||n>=0&&6>=n&&(0==e||6==e)||e>=2&&4>=e&&n>=2&&4>=n?s[r+e][t+n]=!0:s[r+e][t+n]=!1)},p=function(){for(var r=0,t=0,e=0;8>e;e+=1){y(!0,e);var n=a.getLostPoint(m);(0==e||r>n)&&(r=n,t=e)}return t},B=function(){for(var r=8;v-8>r;r+=1)null==s[r][6]&&(s[r][6]=r%2==0);for(var t=8;v-8>t;t+=1)null==s[6][t]&&(s[6][t]=t%2==0)},A=function(){for(var r=a.getPatternPosition(l),t=0;t<r.length;t+=1)for(var e=0;e<r.length;e+=1){var n=r[t],o=r[e];if(null==s[n][o])for(var i=-2;2>=i;i+=1)for(var u=-2;2>=u;u+=1)-2==i||2==i||-2==u||2==u||0==i&&0==u?s[n+i][o+u]=!0:s[n+i][o+u]=!1}},E=function(r){for(var t=a.getBCHTypeNumber(l),e=0;18>e;e+=1){var n=!r&&1==(t>>e&1);s[Math.floor(e/3)][e%3+v-8-3]=n}for(var e=0;18>e;e+=1){var n=!r&&1==(t>>e&1);s[e%3+v-8-3][Math.floor(e/3)]=n}},k=function(r,t){for(var e=g<<3|t,n=a.getBCHTypeInfo(e),o=0;15>o;o+=1){var i=!r&&1==(n>>o&1);6>o?s[o][8]=i:8>o?s[o+1][8]=i:s[v-15+o][8]=i}for(var o=0;15>o;o+=1){var i=!r&&1==(n>>o&1);8>o?s[8][v-o-1]=i:9>o?s[8][15-o-1+1]=i:s[8][15-o-1]=i}s[v-8][8]=!r},M=function(r,t){for(var e=-1,n=v-1,o=7,i=0,u=a.getMaskFunction(t),f=v-1;f>0;f-=2)for(6==f&&(f-=1);;){for(var c=0;2>c;c+=1)if(null==s[n][f-c]){var l=!1;i<r.length&&(l=1==(r[i]>>>o&1));var g=u(n,f-c);g&&(l=!l),s[n][f-c]=l,o-=1,-1==o&&(i+=1,o=7)}if(n+=e,0>n||n>=v){n-=e,e=-e;break}}},C=function(t,e){for(var n=0,o=0,i=0,u=new Array(e.length),f=new Array(e.length),c=0;c<e.length;c+=1){var l=e[c].dataCount,g=e[c].totalCount-l;o=Math.max(o,l),i=Math.max(i,g),u[c]=new Array(l);for(var s=0;s<u[c].length;s+=1)u[c][s]=255&t.getBuffer()[s+n];n+=l;var v=a.getErrorCorrectPolynomial(g),h=r(u[c],v.getLength()-1),d=h.mod(v);f[c]=new Array(v.getLength()-1);for(var s=0;s<f[c].length;s+=1){var w=s+d.getLength()-f[c].length;f[c][s]=w>=0?d.getAt(w):0}}for(var m=0,s=0;s<e.length;s+=1)m+=e[s].totalCount;for(var y=new Array(m),T=0,s=0;o>s;s+=1)for(var c=0;c<e.length;c+=1)s<u[c].length&&(y[T]=u[c][s],T+=1);for(var s=0;i>s;s+=1)for(var c=0;c<e.length;c+=1)s<f[c].length&&(y[T]=f[c][s],T+=1);return y},D=function(r,t,e){for(var n=u.getRSBlocks(r,t),c=f(),l=0;l<e.length;l+=1){var g=e[l];c.put(g.getMode(),4),c.put(g.getLength(),a.getLengthInBits(g.getMode(),r)),g.write(c)}for(var s=0,l=0;l<n.length;l+=1)s+=n[l].dataCount;if(c.getLengthInBits()>8*s)throw new Error("code length overflow. ("+c.getLengthInBits()+">"+8*s+")");for(c.getLengthInBits()+4<=8*s&&c.put(0,4);c.getLengthInBits()%8!=0;)c.putBit(!1);for(;;){if(c.getLengthInBits()>=8*s)break;if(c.put(o,8),c.getLengthInBits()>=8*s)break;c.put(i,8)}return C(c,n)};return m.addData=function(r){var t=c(r);w.push(t),d=null},m.isDark=function(r,t){if(0>r||r>=v||0>t||t>=v)throw new Error(r+","+t);return s[r][t]},m.getModuleCount=function(){return v},m.make=function(){y(!1,p())},m.createTableTag=function(r,t){r=r||2,t="undefined"==typeof t?4*r:t;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+t+"px;",e+='">',e+="<tbody>";for(var n=0;n<m.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<m.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=m.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},m.createImgTag=function(r,t){r=r||2,t="undefined"==typeof t?4*r:t;var e=m.getModuleCount()*r+2*t,n=t,o=e-t;return h(e,e,function(t,e){if(t>=n&&o>t&&e>=n&&o>e){var a=Math.floor((t-n)/r),i=Math.floor((e-n)/r);return m.isDark(i,a)?0:1}return 1})},m};t.stringToBytes=function(r){for(var t=new Array,e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t},t.createStringToBytes=function(r,t){var e=function(){for(var e=s(r),n=function(){var r=e.read();if(-1==r)throw new Error;return r},o=0,a={};;){var i=e.read();if(-1==i)break;var u=n(),f=n(),c=n(),l=String.fromCharCode(i<<8|u),g=f<<8|c;a[l]=g,o+=1}if(o!=t)throw new Error(o+" != "+t);return a}(),n="?".charCodeAt(0);return function(r){for(var t=new Array,o=0;o<r.length;o+=1){var a=r.charCodeAt(o);if(128>a)t.push(a);else{var i=e[r.charAt(o)];"number"==typeof i?(255&i)==i?t.push(i):(t.push(i>>>8),t.push(255&i)):t.push(n)}}return t}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,a=7973,u=21522,f={},c=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t};return f.getBCHTypeInfo=function(r){for(var t=r<<10;c(t)-c(n)>=0;)t^=n<<c(t)-c(n);return(r<<10|t)^u},f.getBCHTypeNumber=function(r){for(var t=r<<12;c(t)-c(a)>=0;)t^=a<<c(t)-c(a);return r<<12|t},f.getPatternPosition=function(r){return t[r-1]},f.getMaskFunction=function(r){switch(r){case o.PATTERN000:return function(r,t){return(r+t)%2==0};case o.PATTERN001:return function(r,t){return r%2==0};case o.PATTERN010:return function(r,t){return t%3==0};case o.PATTERN011:return function(r,t){return(r+t)%3==0};case o.PATTERN100:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case o.PATTERN101:return function(r,t){return r*t%2+r*t%3==0};case o.PATTERN110:return function(r,t){return(r*t%2+r*t%3)%2==0};case o.PATTERN111:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw new Error("bad maskPattern:"+r)}},f.getErrorCorrectPolynomial=function(t){for(var e=r([1],0),n=0;t>n;n+=1)e=e.multiply(r([1,i.gexp(n)],0));return e},f.getLengthInBits=function(r,t){if(t>=1&&10>t)switch(r){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw new Error("mode:"+r)}else if(27>t)switch(r){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw new Error("mode:"+r)}else{if(!(41>t))throw new Error("type:"+t);switch(r){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw new Error("mode:"+r)}}},f.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;t>n;n+=1)for(var o=0;t>o;o+=1){for(var a=0,i=r.isDark(n,o),u=-1;1>=u;u+=1)if(!(0>n+u||n+u>=t))for(var f=-1;1>=f;f+=1)0>o+f||o+f>=t||(0!=u||0!=f)&&i==r.isDark(n+u,o+f)&&(a+=1);a>5&&(e+=3+a-5)}for(var n=0;t-1>n;n+=1)for(var o=0;t-1>o;o+=1){var c=0;r.isDark(n,o)&&(c+=1),r.isDark(n+1,o)&&(c+=1),r.isDark(n,o+1)&&(c+=1),r.isDark(n+1,o+1)&&(c+=1),(0==c||4==c)&&(e+=3)}for(var n=0;t>n;n+=1)for(var o=0;t-6>o;o+=1)r.isDark(n,o)&&!r.isDark(n,o+1)&&r.isDark(n,o+2)&&r.isDark(n,o+3)&&r.isDark(n,o+4)&&!r.isDark(n,o+5)&&r.isDark(n,o+6)&&(e+=40);for(var o=0;t>o;o+=1)for(var n=0;t-6>n;n+=1)r.isDark(n,o)&&!r.isDark(n+1,o)&&r.isDark(n+2,o)&&r.isDark(n+3,o)&&r.isDark(n+4,o)&&!r.isDark(n+5,o)&&r.isDark(n+6,o)&&(e+=40);for(var l=0,o=0;t>o;o+=1)for(var n=0;t>n;n+=1)r.isDark(n,o)&&(l+=1);var g=Math.abs(100*l/t/t-50)/5;return e+=10*g},f}(),i=function(){for(var r=new Array(256),t=new Array(256),e=0;8>e;e+=1)r[e]=1<<e;for(var e=8;256>e;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(var e=0;255>e;e+=1)t[r[e]]=e;var n={};return n.glog=function(r){if(1>r)throw new Error("glog("+r+")");return t[r]},n.gexp=function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return r[t]},n}(),u=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={},o=function(t,e){switch(e){case n.L:return r[4*(t-1)+0];case n.M:return r[4*(t-1)+1];case n.Q:return r[4*(t-1)+2];case n.H:return r[4*(t-1)+3];default:return}};return e.getRSBlocks=function(r,e){var n=o(r,e);if("undefined"==typeof n)throw new Error("bad rs block @ typeNumber:"+r+"/errorCorrectLevel:"+e);for(var a=n.length/3,i=new Array,u=0;a>u;u+=1)for(var f=n[3*u+0],c=n[3*u+1],l=n[3*u+2],g=0;f>g;g+=1)i.push(t(c,l));return i},e}(),f=function(){var r=new Array,t=0,e={};return e.getBuffer=function(){return r},e.getAt=function(t){var e=Math.floor(t/8);return 1==(r[e]>>>7-t%8&1)},e.put=function(r,t){for(var n=0;t>n;n+=1)e.putBit(1==(r>>>t-n-1&1))},e.getLengthInBits=function(){return t},e.putBit=function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1},e},c=function(r){var n=e.MODE_8BIT_BYTE,o=t.stringToBytes(r),a={};return a.getMode=function(){return n},a.getLength=function(r){return o.length},a.write=function(r){for(var t=0;t<o.length;t+=1)r.put(o[t],8)},a},l=function(){var r=new Array,t={};return t.writeByte=function(t){r.push(255&t)},t.writeShort=function(r){t.writeByte(r),t.writeByte(r>>>8)},t.writeBytes=function(r,e,n){e=e||0,n=n||r.length;for(var o=0;n>o;o+=1)t.writeByte(r[o+e])},t.writeString=function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},t.toByteArray=function(){return r},t.toString=function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+="]"},t},g=function(){var r=0,t=0,e=0,n="",o={},a=function(r){n+=String.fromCharCode(i(63&r))},i=function(r){if(0>r);else{if(26>r)return 65+r;if(52>r)return 97+(r-26);if(62>r)return 48+(r-52);if(62==r)return 43;if(63==r)return 47}throw new Error("n:"+r)};return o.writeByte=function(n){for(r=r<<8|255&n,t+=8,e+=1;t>=6;)a(r>>>t-6),t-=6},o.flush=function(){if(t>0&&(a(r<<6-t),r=0,t=0),e%3!=0)for(var o=3-e%3,i=0;o>i;i+=1)n+="="},o.toString=function(){return n},o},s=function(r){var t=r,e=0,n=0,o=0,a={};a.read=function(){for(;8>o;){if(e>=t.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var r=t.charAt(e);if(e+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(n=n<<6|i(r.charCodeAt(0)),o+=6)}var a=n>>>o-8&255;return o-=8,a};var i=function(r){if(r>=65&&90>=r)return r-65;if(r>=97&&122>=r)return r-97+26;if(r>=48&&57>=r)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw new Error("c:"+r)};return a},v=function(r,t){var e=r,n=t,o=new Array(r*t),a={};a.setPixel=function(r,t,n){o[t*e+r]=n},a.write=function(r){r.writeString("GIF87a"),r.writeShort(e),r.writeShort(n),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(e),r.writeShort(n),r.writeByte(0);var t=2,o=u(t);r.writeByte(t);for(var a=0;o.length-a>255;)r.writeByte(255),r.writeBytes(o,a,255),a+=255;r.writeByte(o.length-a),r.writeBytes(o,a,o.length-a),r.writeByte(0),r.writeString(";")};var i=function(r){var t=r,e=0,n=0,o={};return o.write=function(r,o){if(r>>>o!=0)throw new Error("length over");for(;e+o>=8;)t.writeByte(255&(r<<e|n)),o-=8-e,r>>>=8-e,n=0,e=0;n=r<<e|n,e+=o},o.flush=function(){e>0&&t.writeByte(n)},o},u=function(r){for(var t=1<<r,e=(1<<r)+1,n=r+1,a=f(),u=0;t>u;u+=1)a.add(String.fromCharCode(u));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(e));var c=l(),g=i(c);g.write(t,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var h=String.fromCharCode(o[s]);s+=1,a.contains(v+h)?v+=h:(g.write(a.indexOf(v),n),a.size()<4095&&(a.size()==1<<n&&(n+=1),a.add(v+h)),v=h)}return g.write(a.indexOf(v),n),g.write(e,n),g.flush(),c.toByteArray()},f=function(){var r={},t=0,e={};return e.add=function(n){if(e.contains(n))throw new Error("dup key:"+n);r[n]=t,t+=1},e.size=function(){return t},e.indexOf=function(t){return r[t]},e.contains=function(t){return"undefined"!=typeof r[t]},e};return a},h=function(r,t,e,n){for(var o=v(r,t),a=0;t>a;a+=1)for(var i=0;r>i;i+=1)o.setPixel(i,a,e(i,a));var u=l();o.write(u);for(var f=g(),c=u.toByteArray(),s=0;s<c.length;s+=1)f.writeByte(c[s]);f.flush();var h="";return h+="<img",h+=' src="',h+="data:image/gif;base64,",h+=f,h+='"',h+=' width="',h+=r,h+='"',h+=' height="',h+=t,h+='"',n&&(h+=' alt="',h+=n,h+='"'),h+="/>"};return t}();return function(r){"function"==typeof define&&define.amd?define([],r):"object"==typeof exports&&(module.exports=r())}(function(){return r}),!function(r){r.stringToBytes=function(r){function t(r){for(var t=[],e=0;e<r.length;e++){var n=r.charCodeAt(e);128>n?t.push(n):2048>n?t.push(192|n>>6,128|63&n):55296>n||n>=57344?t.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&r.charCodeAt(e)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t}return t(r)}}(r),r}());
/**
 * EasyUI for jQuery 1.6.3
 *
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function($){
$.easyui={indexOfArray:function(a,o,id){
for(var i=0,_1=a.length;i<_1;i++){
if(id==undefined){
if(a[i]==o){
return i;
}
}else{
if(a[i][o]==id){
return i;
}
}
}
return -1;
},removeArrayItem:function(a,o,id){
if(typeof o=="string"){
for(var i=0,_2=a.length;i<_2;i++){
if(a[i][o]==id){
a.splice(i,1);
return;
}
}
}else{
var _3=this.indexOfArray(a,o);
if(_3!=-1){
a.splice(_3,1);
}
}
},addArrayItem:function(a,o,r){
var _4=this.indexOfArray(a,o,r?r[o]:undefined);
if(_4==-1){
a.push(r?r:o);
}else{
a[_4]=r?r:o;
}
},getArrayItem:function(a,o,id){
var _5=this.indexOfArray(a,o,id);
return _5==-1?null:a[_5];
},forEach:function(_6,_7,_8){
var _9=[];
for(var i=0;i<_6.length;i++){
_9.push(_6[i]);
}
while(_9.length){
var _a=_9.shift();
if(_8(_a)==false){
return;
}
if(_7&&_a.children){
for(var i=_a.children.length-1;i>=0;i--){
_9.unshift(_a.children[i]);
}
}
}
}};
$.parser={auto:true,onComplete:function(_b){
},plugins:["draggable","droppable","resizable","pagination","tooltip","linkbutton","menu","sidemenu","menubutton","splitbutton","switchbutton","progressbar","radiobutton","checkbox","tree","textbox","passwordbox","maskedbox","filebox","combo","combobox","combotree","combogrid","combotreegrid","tagbox","numberbox","validatebox","searchbox","spinner","numberspinner","timespinner","datetimespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","datalist","tabs","accordion","window","dialog","form"],parse:function(_c){
var aa=[];
for(var i=0;i<$.parser.plugins.length;i++){
var _d=$.parser.plugins[i];
var r=$(".easyui-"+_d,_c);
if(r.length){
if(r[_d]){
r.each(function(){
$(this)[_d]($.data(this,"options")||{});
});
}else{
aa.push({name:_d,jq:r});
}
}
}
if(aa.length&&window.easyloader){
var _e=[];
for(var i=0;i<aa.length;i++){
_e.push(aa[i].name);
}
easyloader.load(_e,function(){
for(var i=0;i<aa.length;i++){
var _f=aa[i].name;
var jq=aa[i].jq;
jq.each(function(){
$(this)[_f]($.data(this,"options")||{});
});
}
$.parser.onComplete.call($.parser,_c);
});
}else{
$.parser.onComplete.call($.parser,_c);
}
},parseValue:function(_10,_11,_12,_13){
_13=_13||0;
var v=$.trim(String(_11||""));
var _14=v.substr(v.length-1,1);
if(_14=="%"){
v=parseFloat(v.substr(0,v.length-1));
if(_10.toLowerCase().indexOf("width")>=0){
v=Math.floor((_12.width()-_13)*v/100);
}else{
v=Math.floor((_12.height()-_13)*v/100);
}
}else{
v=parseInt(v)||undefined;
}
return v;
},parseOptions:function(_15,_16){
var t=$(_15);
var _17={};
var s=$.trim(t.attr("data-options"));
if(s){
if(s.substring(0,1)!="{"){
s="{"+s+"}";
}
_17=(new Function("return "+s))();
}
$.map(["width","height","left","top","minWidth","maxWidth","minHeight","maxHeight"],function(p){
var pv=$.trim(_15.style[p]||"");
if(pv){
if(pv.indexOf("%")==-1){
pv=parseInt(pv);
if(isNaN(pv)){
pv=undefined;
}
}
_17[p]=pv;
}
});
if(_16){
var _18={};
for(var i=0;i<_16.length;i++){
var pp=_16[i];
if(typeof pp=="string"){
_18[pp]=t.attr(pp);
}else{
for(var _19 in pp){
var _1a=pp[_19];
if(_1a=="boolean"){
_18[_19]=t.attr(_19)?(t.attr(_19)=="true"):undefined;
}else{
if(_1a=="number"){
_18[_19]=t.attr(_19)=="0"?0:parseFloat(t.attr(_19))||undefined;
}
}
}
}
}
$.extend(_17,_18);
}
return _17;
}};
$(function(){
var d=$("<div style=\"position:absolute;top:-1000px;width:100px;height:100px;padding:5px\"></div>").appendTo("body");
$._boxModel=d.outerWidth()!=100;
d.remove();
d=$("<div style=\"position:fixed\"></div>").appendTo("body");
$._positionFixed=(d.css("position")=="fixed");
d.remove();
if(!window.easyloader&&$.parser.auto){
$.parser.parse();
}
});
$.fn._outerWidth=function(_1b){
if(_1b==undefined){
if(this[0]==window){
return this.width()||document.body.clientWidth;
}
return this.outerWidth()||0;
}
return this._size("width",_1b);
};
$.fn._outerHeight=function(_1c){
if(_1c==undefined){
if(this[0]==window){
return this.height()||document.body.clientHeight;
}
return this.outerHeight()||0;
}
return this._size("height",_1c);
};
$.fn._scrollLeft=function(_1d){
if(_1d==undefined){
return this.scrollLeft();
}else{
return this.each(function(){
$(this).scrollLeft(_1d);
});
}
};
$.fn._propAttr=$.fn.prop||$.fn.attr;
$.fn._size=function(_1e,_1f){
if(typeof _1e=="string"){
if(_1e=="clear"){
return this.each(function(){
$(this).css({width:"",minWidth:"",maxWidth:"",height:"",minHeight:"",maxHeight:""});
});
}else{
if(_1e=="fit"){
return this.each(function(){
_20(this,this.tagName=="BODY"?$("body"):$(this).parent(),true);
});
}else{
if(_1e=="unfit"){
return this.each(function(){
_20(this,$(this).parent(),false);
});
}else{
if(_1f==undefined){
return _21(this[0],_1e);
}else{
return this.each(function(){
_21(this,_1e,_1f);
});
}
}
}
}
}else{
return this.each(function(){
_1f=_1f||$(this).parent();
$.extend(_1e,_20(this,_1f,_1e.fit)||{});
var r1=_22(this,"width",_1f,_1e);
var r2=_22(this,"height",_1f,_1e);
if(r1||r2){
$(this).addClass("easyui-fluid");
}else{
$(this).removeClass("easyui-fluid");
}
});
}
function _20(_23,_24,fit){
if(!_24.length){
return false;
}
var t=$(_23)[0];
var p=_24[0];
var _25=p.fcount||0;
if(fit){
if(!t.fitted){
t.fitted=true;
p.fcount=_25+1;
$(p).addClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").addClass("panel-fit");
}
}
return {width:($(p).width()||1),height:($(p).height()||1)};
}else{
if(t.fitted){
t.fitted=false;
p.fcount=_25-1;
if(p.fcount==0){
$(p).removeClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").removeClass("panel-fit");
}
}
}
return false;
}
};
function _22(_26,_27,_28,_29){
var t=$(_26);
var p=_27;
var p1=p.substr(0,1).toUpperCase()+p.substr(1);
var min=$.parser.parseValue("min"+p1,_29["min"+p1],_28);
var max=$.parser.parseValue("max"+p1,_29["max"+p1],_28);
var val=$.parser.parseValue(p,_29[p],_28);
var _2a=(String(_29[p]||"").indexOf("%")>=0?true:false);
if(!isNaN(val)){
var v=Math.min(Math.max(val,min||0),max||99999);
if(!_2a){
_29[p]=v;
}
t._size("min"+p1,"");
t._size("max"+p1,"");
t._size(p,v);
}else{
t._size(p,"");
t._size("min"+p1,min);
t._size("max"+p1,max);
}
return _2a||_29.fit;
};
function _21(_2b,_2c,_2d){
var t=$(_2b);
if(_2d==undefined){
_2d=parseInt(_2b.style[_2c]);
if(isNaN(_2d)){
return undefined;
}
if($._boxModel){
_2d+=_2e();
}
return _2d;
}else{
if(_2d===""){
t.css(_2c,"");
}else{
if($._boxModel){
_2d-=_2e();
if(_2d<0){
_2d=0;
}
}
t.css(_2c,_2d+"px");
}
}
function _2e(){
if(_2c.toLowerCase().indexOf("width")>=0){
return t.outerWidth()-t.width();
}else{
return t.outerHeight()-t.height();
}
};
};
};
})(jQuery);
(function($){
var _2f=null;
var _30=null;
var _31=false;
function _32(e){
if(e.touches.length!=1){
return;
}
if(!_31){
_31=true;
dblClickTimer=setTimeout(function(){
_31=false;
},500);
}else{
clearTimeout(dblClickTimer);
_31=false;
_33(e,"dblclick");
}
_2f=setTimeout(function(){
_33(e,"contextmenu",3);
},1000);
_33(e,"mousedown");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _34(e){
if(e.touches.length!=1){
return;
}
if(_2f){
clearTimeout(_2f);
}
_33(e,"mousemove");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _35(e){
if(_2f){
clearTimeout(_2f);
}
_33(e,"mouseup");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _33(e,_36,_37){
var _38=new $.Event(_36);
_38.pageX=e.changedTouches[0].pageX;
_38.pageY=e.changedTouches[0].pageY;
_38.which=_37||1;
$(e.target).trigger(_38);
};
if(document.addEventListener){
document.addEventListener("touchstart",_32,true);
document.addEventListener("touchmove",_34,true);
document.addEventListener("touchend",_35,true);
}
})(jQuery);
(function($){
function _39(e){
var _3a=$.data(e.data.target,"draggable");
var _3b=_3a.options;
var _3c=_3a.proxy;
var _3d=e.data;
var _3e=_3d.startLeft+e.pageX-_3d.startX;
var top=_3d.startTop+e.pageY-_3d.startY;
if(_3c){
if(_3c.parent()[0]==document.body){
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e=e.pageX+_3b.deltaX;
}else{
_3e=e.pageX-e.data.offsetWidth;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top=e.pageY+_3b.deltaY;
}else{
top=e.pageY-e.data.offsetHeight;
}
}else{
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e+=e.data.offsetWidth+_3b.deltaX;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top+=e.data.offsetHeight+_3b.deltaY;
}
}
}
if(e.data.parent!=document.body){
_3e+=$(e.data.parent).scrollLeft();
top+=$(e.data.parent).scrollTop();
}
if(_3b.axis=="h"){
_3d.left=_3e;
}else{
if(_3b.axis=="v"){
_3d.top=top;
}else{
_3d.left=_3e;
_3d.top=top;
}
}
};
function _3f(e){
var _40=$.data(e.data.target,"draggable");
var _41=_40.options;
var _42=_40.proxy;
if(!_42){
_42=$(e.data.target);
}
_42.css({left:e.data.left,top:e.data.top});
$("body").css("cursor",_41.cursor);
};
function _43(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _44=$.data(e.data.target,"draggable");
var _45=_44.options;
var _46=$(".droppable:visible").filter(function(){
return e.data.target!=this;
}).filter(function(){
var _47=$.data(this,"droppable").options.accept;
if(_47){
return $(_47).filter(function(){
return this==e.data.target;
}).length>0;
}else{
return true;
}
});
_44.droppables=_46;
var _48=_44.proxy;
if(!_48){
if(_45.proxy){
if(_45.proxy=="clone"){
_48=$(e.data.target).clone().insertAfter(e.data.target);
}else{
_48=_45.proxy.call(e.data.target,e.data.target);
}
_44.proxy=_48;
}else{
_48=$(e.data.target);
}
}
_48.css("position","absolute");
_39(e);
_3f(e);
_45.onStartDrag.call(e.data.target,e);
return false;
};
function _49(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _4a=$.data(e.data.target,"draggable");
_39(e);
if(_4a.options.onDrag.call(e.data.target,e)!=false){
_3f(e);
}
var _4b=e.data.target;
_4a.droppables.each(function(){
var _4c=$(this);
if(_4c.droppable("options").disabled){
return;
}
var p2=_4c.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_4c.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_4c.outerHeight()){
if(!this.entered){
$(this).trigger("_dragenter",[_4b]);
this.entered=true;
}
$(this).trigger("_dragover",[_4b]);
}else{
if(this.entered){
$(this).trigger("_dragleave",[_4b]);
this.entered=false;
}
}
});
return false;
};
function _4d(e){
if(!$.fn.draggable.isDragging){
_4e();
return false;
}
_49(e);
var _4f=$.data(e.data.target,"draggable");
var _50=_4f.proxy;
var _51=_4f.options;
_51.onEndDrag.call(e.data.target,e);
if(_51.revert){
if(_52()==true){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}else{
if(_50){
var _53,top;
if(_50.parent()[0]==document.body){
_53=e.data.startX-e.data.offsetWidth;
top=e.data.startY-e.data.offsetHeight;
}else{
_53=e.data.startLeft;
top=e.data.startTop;
}
_50.animate({left:_53,top:top},function(){
_54();
});
}else{
$(e.data.target).animate({left:e.data.startLeft,top:e.data.startTop},function(){
$(e.data.target).css("position",e.data.startPosition);
});
}
}
}else{
$(e.data.target).css({position:"absolute",left:e.data.left,top:e.data.top});
_52();
}
_51.onStopDrag.call(e.data.target,e);
_4e();
function _54(){
if(_50){
_50.remove();
}
_4f.proxy=null;
};
function _52(){
var _55=false;
_4f.droppables.each(function(){
var _56=$(this);
if(_56.droppable("options").disabled){
return;
}
var p2=_56.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_56.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_56.outerHeight()){
if(_51.revert){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}
$(this).triggerHandler("_drop",[e.data.target]);
_54();
_55=true;
this.entered=false;
return false;
}
});
if(!_55&&!_51.revert){
_54();
}
return _55;
};
return false;
};
function _4e(){
if($.fn.draggable.timer){
clearTimeout($.fn.draggable.timer);
$.fn.draggable.timer=undefined;
}
$(document).unbind(".draggable");
$.fn.draggable.isDragging=false;
setTimeout(function(){
$("body").css("cursor","");
},100);
};
$.fn.draggable=function(_57,_58){
if(typeof _57=="string"){
return $.fn.draggable.methods[_57](this,_58);
}
return this.each(function(){
var _59;
var _5a=$.data(this,"draggable");
if(_5a){
_5a.handle.unbind(".draggable");
_59=$.extend(_5a.options,_57);
}else{
_59=$.extend({},$.fn.draggable.defaults,$.fn.draggable.parseOptions(this),_57||{});
}
var _5b=_59.handle?(typeof _59.handle=="string"?$(_59.handle,this):_59.handle):$(this);
$.data(this,"draggable",{options:_59,handle:_5b});
if(_59.disabled){
$(this).css("cursor","");
return;
}
_5b.unbind(".draggable").bind("mousemove.draggable",{target:this},function(e){
if($.fn.draggable.isDragging){
return;
}
var _5c=$.data(e.data.target,"draggable").options;
if(_5d(e)){
$(this).css("cursor",_5c.cursor);
}else{
$(this).css("cursor","");
}
}).bind("mouseleave.draggable",{target:this},function(e){
$(this).css("cursor","");
}).bind("mousedown.draggable",{target:this},function(e){
if(_5d(e)==false){
return;
}
$(this).css("cursor","");
var _5e=$(e.data.target).position();
var _5f=$(e.data.target).offset();
var _60={startPosition:$(e.data.target).css("position"),startLeft:_5e.left,startTop:_5e.top,left:_5e.left,top:_5e.top,startX:e.pageX,startY:e.pageY,width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),offsetWidth:(e.pageX-_5f.left),offsetHeight:(e.pageY-_5f.top),target:e.data.target,parent:$(e.data.target).parent()[0]};
$.extend(e.data,_60);
var _61=$.data(e.data.target,"draggable").options;
if(_61.onBeforeDrag.call(e.data.target,e)==false){
return;
}
$(document).bind("mousedown.draggable",e.data,_43);
$(document).bind("mousemove.draggable",e.data,_49);
$(document).bind("mouseup.draggable",e.data,_4d);
$.fn.draggable.timer=setTimeout(function(){
$.fn.draggable.isDragging=true;
_43(e);
},_61.delay);
return false;
});
function _5d(e){
var _62=$.data(e.data.target,"draggable");
var _63=_62.handle;
var _64=$(_63).offset();
var _65=$(_63).outerWidth();
var _66=$(_63).outerHeight();
var t=e.pageY-_64.top;
var r=_64.left+_65-e.pageX;
var b=_64.top+_66-e.pageY;
var l=e.pageX-_64.left;
return Math.min(t,r,b,l)>_62.options.edge;
};
});
};
$.fn.draggable.methods={options:function(jq){
return $.data(jq[0],"draggable").options;
},proxy:function(jq){
return $.data(jq[0],"draggable").proxy;
},enable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:true});
});
}};
$.fn.draggable.parseOptions=function(_67){
var t=$(_67);
return $.extend({},$.parser.parseOptions(_67,["cursor","handle","axis",{"revert":"boolean","deltaX":"number","deltaY":"number","edge":"number","delay":"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.draggable.defaults={proxy:null,revert:false,cursor:"move",deltaX:null,deltaY:null,handle:null,disabled:false,edge:0,axis:null,delay:100,onBeforeDrag:function(e){
},onStartDrag:function(e){
},onDrag:function(e){
},onEndDrag:function(e){
},onStopDrag:function(e){
}};
$.fn.draggable.isDragging=false;
})(jQuery);
(function($){
function _68(_69){
$(_69).addClass("droppable");
$(_69).bind("_dragenter",function(e,_6a){
$.data(_69,"droppable").options.onDragEnter.apply(_69,[e,_6a]);
});
$(_69).bind("_dragleave",function(e,_6b){
$.data(_69,"droppable").options.onDragLeave.apply(_69,[e,_6b]);
});
$(_69).bind("_dragover",function(e,_6c){
$.data(_69,"droppable").options.onDragOver.apply(_69,[e,_6c]);
});
$(_69).bind("_drop",function(e,_6d){
$.data(_69,"droppable").options.onDrop.apply(_69,[e,_6d]);
});
};
$.fn.droppable=function(_6e,_6f){
if(typeof _6e=="string"){
return $.fn.droppable.methods[_6e](this,_6f);
}
_6e=_6e||{};
return this.each(function(){
var _70=$.data(this,"droppable");
if(_70){
$.extend(_70.options,_6e);
}else{
_68(this);
$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,$.fn.droppable.parseOptions(this),_6e)});
}
});
};
$.fn.droppable.methods={options:function(jq){
return $.data(jq[0],"droppable").options;
},enable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:true});
});
}};
$.fn.droppable.parseOptions=function(_71){
var t=$(_71);
return $.extend({},$.parser.parseOptions(_71,["accept"]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.droppable.defaults={accept:null,disabled:false,onDragEnter:function(e,_72){
},onDragOver:function(e,_73){
},onDragLeave:function(e,_74){
},onDrop:function(e,_75){
}};
})(jQuery);
(function($){
function _76(e){
var _77=e.data;
var _78=$.data(_77.target,"resizable").options;
if(_77.dir.indexOf("e")!=-1){
var _79=_77.startWidth+e.pageX-_77.startX;
_79=Math.min(Math.max(_79,_78.minWidth),_78.maxWidth);
_77.width=_79;
}
if(_77.dir.indexOf("s")!=-1){
var _7a=_77.startHeight+e.pageY-_77.startY;
_7a=Math.min(Math.max(_7a,_78.minHeight),_78.maxHeight);
_77.height=_7a;
}
if(_77.dir.indexOf("w")!=-1){
var _79=_77.startWidth-e.pageX+_77.startX;
_79=Math.min(Math.max(_79,_78.minWidth),_78.maxWidth);
_77.width=_79;
_77.left=_77.startLeft+_77.startWidth-_77.width;
}
if(_77.dir.indexOf("n")!=-1){
var _7a=_77.startHeight-e.pageY+_77.startY;
_7a=Math.min(Math.max(_7a,_78.minHeight),_78.maxHeight);
_77.height=_7a;
_77.top=_77.startTop+_77.startHeight-_77.height;
}
};
function _7b(e){
var _7c=e.data;
var t=$(_7c.target);
t.css({left:_7c.left,top:_7c.top});
if(t.outerWidth()!=_7c.width){
t._outerWidth(_7c.width);
}
if(t.outerHeight()!=_7c.height){
t._outerHeight(_7c.height);
}
};
function _7d(e){
$.fn.resizable.isResizing=true;
$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);
return false;
};
function _7e(e){
_76(e);
if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){
_7b(e);
}
return false;
};
function _7f(e){
$.fn.resizable.isResizing=false;
_76(e,true);
_7b(e);
$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);
$(document).unbind(".resizable");
$("body").css("cursor","");
return false;
};
function _80(e){
var _81=$(e.data.target).resizable("options");
var tt=$(e.data.target);
var dir="";
var _82=tt.offset();
var _83=tt.outerWidth();
var _84=tt.outerHeight();
var _85=_81.edge;
if(e.pageY>_82.top&&e.pageY<_82.top+_85){
dir+="n";
}else{
if(e.pageY<_82.top+_84&&e.pageY>_82.top+_84-_85){
dir+="s";
}
}
if(e.pageX>_82.left&&e.pageX<_82.left+_85){
dir+="w";
}else{
if(e.pageX<_82.left+_83&&e.pageX>_82.left+_83-_85){
dir+="e";
}
}
var _86=_81.handles.split(",");
_86=$.map(_86,function(h){
return $.trim(h).toLowerCase();
});
if($.inArray("all",_86)>=0||$.inArray(dir,_86)>=0){
return dir;
}
for(var i=0;i<dir.length;i++){
var _87=$.inArray(dir.substr(i,1),_86);
if(_87>=0){
return _86[_87];
}
}
return "";
};
$.fn.resizable=function(_88,_89){
if(typeof _88=="string"){
return $.fn.resizable.methods[_88](this,_89);
}
return this.each(function(){
var _8a=null;
var _8b=$.data(this,"resizable");
if(_8b){
$(this).unbind(".resizable");
_8a=$.extend(_8b.options,_88||{});
}else{
_8a=$.extend({},$.fn.resizable.defaults,$.fn.resizable.parseOptions(this),_88||{});
$.data(this,"resizable",{options:_8a});
}
if(_8a.disabled==true){
return;
}
$(this).bind("mousemove.resizable",{target:this},function(e){
if($.fn.resizable.isResizing){
return;
}
var dir=_80(e);
$(e.data.target).css("cursor",dir?dir+"-resize":"");
}).bind("mouseleave.resizable",{target:this},function(e){
$(e.data.target).css("cursor","");
}).bind("mousedown.resizable",{target:this},function(e){
var dir=_80(e);
if(dir==""){
return;
}
function _8c(css){
var val=parseInt($(e.data.target).css(css));
if(isNaN(val)){
return 0;
}else{
return val;
}
};
var _8d={target:e.data.target,dir:dir,startLeft:_8c("left"),startTop:_8c("top"),left:_8c("left"),top:_8c("top"),startX:e.pageX,startY:e.pageY,startWidth:$(e.data.target).outerWidth(),startHeight:$(e.data.target).outerHeight(),width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),deltaWidth:$(e.data.target).outerWidth()-$(e.data.target).width(),deltaHeight:$(e.data.target).outerHeight()-$(e.data.target).height()};
$(document).bind("mousedown.resizable",_8d,_7d);
$(document).bind("mousemove.resizable",_8d,_7e);
$(document).bind("mouseup.resizable",_8d,_7f);
$("body").css("cursor",dir+"-resize");
});
});
};
$.fn.resizable.methods={options:function(jq){
return $.data(jq[0],"resizable").options;
},enable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:true});
});
}};
$.fn.resizable.parseOptions=function(_8e){
var t=$(_8e);
return $.extend({},$.parser.parseOptions(_8e,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function(e){
},onResize:function(e){
},onStopResize:function(e){
}};
$.fn.resizable.isResizing=false;
})(jQuery);
(function($){
function _8f(_90,_91){
var _92=$.data(_90,"linkbutton").options;
if(_91){
$.extend(_92,_91);
}
if(_92.width||_92.height||_92.fit){
var btn=$(_90);
var _93=btn.parent();
var _94=btn.is(":visible");
if(!_94){
var _95=$("<div style=\"display:none\"></div>").insertBefore(_90);
var _96={position:btn.css("position"),display:btn.css("display"),left:btn.css("left")};
btn.appendTo("body");
btn.css({position:"absolute",display:"inline-block",left:-20000});
}
btn._size(_92,_93);
var _97=btn.find(".l-btn-left");
_97.css("margin-top",0);
_97.css("margin-top",parseInt((btn.height()-_97.height())/2)+"px");
if(!_94){
btn.insertAfter(_95);
btn.css(_96);
_95.remove();
}
}
};
function _98(_99){
var _9a=$.data(_99,"linkbutton").options;
var t=$(_99).empty();
t.addClass("l-btn").removeClass("l-btn-plain l-btn-selected l-btn-plain-selected l-btn-outline");
t.removeClass("l-btn-small l-btn-medium l-btn-large").addClass("l-btn-"+_9a.size);
if(_9a.plain){
t.addClass("l-btn-plain");
}
if(_9a.outline){
t.addClass("l-btn-outline");
}
if(_9a.selected){
t.addClass(_9a.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
}
t.attr("group",_9a.group||"");
t.attr("id",_9a.id||"");
var _9b=$("<span class=\"l-btn-left\"></span>").appendTo(t);
if(_9a.text){
$("<span class=\"l-btn-text\"></span>").html(_9a.text).appendTo(_9b);
}else{
$("<span class=\"l-btn-text l-btn-empty\">&nbsp;</span>").appendTo(_9b);
}
if(_9a.iconCls){
$("<span class=\"l-btn-icon\">&nbsp;</span>").addClass(_9a.iconCls).appendTo(_9b);
_9b.addClass("l-btn-icon-"+_9a.iconAlign);
}
t.unbind(".linkbutton").bind("focus.linkbutton",function(){
if(!_9a.disabled){
$(this).addClass("l-btn-focus");
}
}).bind("blur.linkbutton",function(){
$(this).removeClass("l-btn-focus");
}).bind("click.linkbutton",function(){
if(!_9a.disabled){
if(_9a.toggle){
if(_9a.selected){
$(this).linkbutton("unselect");
}else{
$(this).linkbutton("select");
}
}
_9a.onClick.call(this);
}
});
_9c(_99,_9a.selected);
_9d(_99,_9a.disabled);
};
function _9c(_9e,_9f){
var _a0=$.data(_9e,"linkbutton").options;
if(_9f){
if(_a0.group){
$("a.l-btn[group=\""+_a0.group+"\"]").each(function(){
var o=$(this).linkbutton("options");
if(o.toggle){
$(this).removeClass("l-btn-selected l-btn-plain-selected");
o.selected=false;
}
});
}
$(_9e).addClass(_a0.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
_a0.selected=true;
}else{
if(!_a0.group){
$(_9e).removeClass("l-btn-selected l-btn-plain-selected");
_a0.selected=false;
}
}
};
function _9d(_a1,_a2){
var _a3=$.data(_a1,"linkbutton");
var _a4=_a3.options;
$(_a1).removeClass("l-btn-disabled l-btn-plain-disabled");
if(_a2){
_a4.disabled=true;
var _a5=$(_a1).attr("href");
if(_a5){
_a3.href=_a5;
$(_a1).attr("href","javascript:;");
}
if(_a1.onclick){
_a3.onclick=_a1.onclick;
_a1.onclick=null;
}
_a4.plain?$(_a1).addClass("l-btn-disabled l-btn-plain-disabled"):$(_a1).addClass("l-btn-disabled");
}else{
_a4.disabled=false;
if(_a3.href){
$(_a1).attr("href",_a3.href);
}
if(_a3.onclick){
_a1.onclick=_a3.onclick;
}
}
};
$.fn.linkbutton=function(_a6,_a7){
if(typeof _a6=="string"){
return $.fn.linkbutton.methods[_a6](this,_a7);
}
_a6=_a6||{};
return this.each(function(){
var _a8=$.data(this,"linkbutton");
if(_a8){
$.extend(_a8.options,_a6);
}else{
$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,$.fn.linkbutton.parseOptions(this),_a6)});
$(this)._propAttr("disabled",false);
$(this).bind("_resize",function(e,_a9){
if($(this).hasClass("easyui-fluid")||_a9){
_8f(this);
}
return false;
});
}
_98(this);
_8f(this);
});
};
$.fn.linkbutton.methods={options:function(jq){
return $.data(jq[0],"linkbutton").options;
},resize:function(jq,_aa){
return jq.each(function(){
_8f(this,_aa);
});
},enable:function(jq){
return jq.each(function(){
_9d(this,false);
});
},disable:function(jq){
return jq.each(function(){
_9d(this,true);
});
},select:function(jq){
return jq.each(function(){
_9c(this,true);
});
},unselect:function(jq){
return jq.each(function(){
_9c(this,false);
});
}};
$.fn.linkbutton.parseOptions=function(_ab){
var t=$(_ab);
return $.extend({},$.parser.parseOptions(_ab,["id","iconCls","iconAlign","group","size","text",{plain:"boolean",toggle:"boolean",selected:"boolean",outline:"boolean"}]),{disabled:(t.attr("disabled")?true:undefined),text:($.trim(t.html())||undefined),iconCls:(t.attr("icon")||t.attr("iconCls"))});
};
$.fn.linkbutton.defaults={id:null,disabled:false,toggle:false,selected:false,outline:false,group:null,plain:false,text:"",iconCls:null,iconAlign:"left",size:"small",onClick:function(){
}};
})(jQuery);
(function($){
function _ac(_ad){
var _ae=$.data(_ad,"pagination");
var _af=_ae.options;
var bb=_ae.bb={};
var _b0=$(_ad).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");
var tr=_b0.find("tr");
var aa=$.extend([],_af.layout);
if(!_af.showPageList){
_b1(aa,"list");
}
if(!_af.showPageInfo){
_b1(aa,"info");
}
if(!_af.showRefresh){
_b1(aa,"refresh");
}
if(aa[0]=="sep"){
aa.shift();
}
if(aa[aa.length-1]=="sep"){
aa.pop();
}
for(var _b2=0;_b2<aa.length;_b2++){
var _b3=aa[_b2];
if(_b3=="list"){
var ps=$("<select class=\"pagination-page-list\"></select>");
ps.bind("change",function(){
_af.pageSize=parseInt($(this).val());
_af.onChangePageSize.call(_ad,_af.pageSize);
_b9(_ad,_af.pageNumber);
});
for(var i=0;i<_af.pageList.length;i++){
$("<option></option>").text(_af.pageList[i]).appendTo(ps);
}
$("<td></td>").append(ps).appendTo(tr);
}else{
if(_b3=="sep"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
if(_b3=="first"){
bb.first=_b4("first");
}else{
if(_b3=="prev"){
bb.prev=_b4("prev");
}else{
if(_b3=="next"){
bb.next=_b4("next");
}else{
if(_b3=="last"){
bb.last=_b4("last");
}else{
if(_b3=="manual"){
$("<span style=\"padding-left:6px;\"></span>").html(_af.beforePageText).appendTo(tr).wrap("<td></td>");
bb.num=$("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
bb.num.unbind(".pagination").bind("keydown.pagination",function(e){
if(e.keyCode==13){
var _b5=parseInt($(this).val())||1;
_b9(_ad,_b5);
return false;
}
});
bb.after=$("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
}else{
if(_b3=="refresh"){
bb.refresh=_b4("refresh");
}else{
if(_b3=="links"){
$("<td class=\"pagination-links\"></td>").appendTo(tr);
}else{
if(_b3=="info"){
if(_b2==aa.length-1){
$("<div class=\"pagination-info\"></div>").appendTo(_b0);
}else{
$("<td><div class=\"pagination-info\"></div></td>").appendTo(tr);
}
}
}
}
}
}
}
}
}
}
}
}
if(_af.buttons){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
if($.isArray(_af.buttons)){
for(var i=0;i<_af.buttons.length;i++){
var btn=_af.buttons[i];
if(btn=="-"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var a=$("<a href=\"javascript:;\"></a>").appendTo(td);
a[0].onclick=eval(btn.handler||function(){
});
a.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
var td=$("<td></td>").appendTo(tr);
$(_af.buttons).appendTo(td).show();
}
}
$("<div style=\"clear:both;\"></div>").appendTo(_b0);
function _b4(_b6){
var btn=_af.nav[_b6];
var a=$("<a href=\"javascript:;\"></a>").appendTo(tr);
a.wrap("<td></td>");
a.linkbutton({iconCls:btn.iconCls,plain:true}).unbind(".pagination").bind("click.pagination",function(){
btn.handler.call(_ad);
});
return a;
};
function _b1(aa,_b7){
var _b8=$.inArray(_b7,aa);
if(_b8>=0){
aa.splice(_b8,1);
}
return aa;
};
};
function _b9(_ba,_bb){
var _bc=$.data(_ba,"pagination").options;
_bd(_ba,{pageNumber:_bb});
_bc.onSelectPage.call(_ba,_bc.pageNumber,_bc.pageSize);
};
function _bd(_be,_bf){
var _c0=$.data(_be,"pagination");
var _c1=_c0.options;
var bb=_c0.bb;
$.extend(_c1,_bf||{});
var ps=$(_be).find("select.pagination-page-list");
if(ps.length){
ps.val(_c1.pageSize+"");
_c1.pageSize=parseInt(ps.val());
}
var _c2=Math.ceil(_c1.total/_c1.pageSize)||1;
if(_c1.pageNumber<1){
_c1.pageNumber=1;
}
if(_c1.pageNumber>_c2){
_c1.pageNumber=_c2;
}
if(_c1.total==0){
_c1.pageNumber=0;
_c2=0;
}
if(bb.num){
bb.num.val(_c1.pageNumber);
}
if(bb.after){
bb.after.html(_c1.afterPageText.replace(/{pages}/,_c2));
}
var td=$(_be).find("td.pagination-links");
if(td.length){
td.empty();
var _c3=_c1.pageNumber-Math.floor(_c1.links/2);
if(_c3<1){
_c3=1;
}
var _c4=_c3+_c1.links-1;
if(_c4>_c2){
_c4=_c2;
}
_c3=_c4-_c1.links+1;
if(_c3<1){
_c3=1;
}
for(var i=_c3;i<=_c4;i++){
var a=$("<a class=\"pagination-link\" href=\"javascript:;\"></a>").appendTo(td);
a.linkbutton({plain:true,text:i});
if(i==_c1.pageNumber){
a.linkbutton("select");
}else{
a.unbind(".pagination").bind("click.pagination",{pageNumber:i},function(e){
_b9(_be,e.data.pageNumber);
});
}
}
}
var _c5=_c1.displayMsg;
_c5=_c5.replace(/{from}/,_c1.total==0?0:_c1.pageSize*(_c1.pageNumber-1)+1);
_c5=_c5.replace(/{to}/,Math.min(_c1.pageSize*(_c1.pageNumber),_c1.total));
_c5=_c5.replace(/{total}/,_c1.total);
$(_be).find("div.pagination-info").html(_c5);
if(bb.first){
bb.first.linkbutton({disabled:((!_c1.total)||_c1.pageNumber==1)});
}
if(bb.prev){
bb.prev.linkbutton({disabled:((!_c1.total)||_c1.pageNumber==1)});
}
if(bb.next){
bb.next.linkbutton({disabled:(_c1.pageNumber==_c2)});
}
if(bb.last){
bb.last.linkbutton({disabled:(_c1.pageNumber==_c2)});
}
_c6(_be,_c1.loading);
};
function _c6(_c7,_c8){
var _c9=$.data(_c7,"pagination");
var _ca=_c9.options;
_ca.loading=_c8;
if(_ca.showRefresh&&_c9.bb.refresh){
_c9.bb.refresh.linkbutton({iconCls:(_ca.loading?"pagination-loading":"pagination-load")});
}
};
$.fn.pagination=function(_cb,_cc){
if(typeof _cb=="string"){
return $.fn.pagination.methods[_cb](this,_cc);
}
_cb=_cb||{};
return this.each(function(){
var _cd;
var _ce=$.data(this,"pagination");
if(_ce){
_cd=$.extend(_ce.options,_cb);
}else{
_cd=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),_cb);
$.data(this,"pagination",{options:_cd});
}
_ac(this);
_bd(this);
});
};
$.fn.pagination.methods={options:function(jq){
return $.data(jq[0],"pagination").options;
},loading:function(jq){
return jq.each(function(){
_c6(this,true);
});
},loaded:function(jq){
return jq.each(function(){
_c6(this,false);
});
},refresh:function(jq,_cf){
return jq.each(function(){
_bd(this,_cf);
});
},select:function(jq,_d0){
return jq.each(function(){
_b9(this,_d0);
});
}};
$.fn.pagination.parseOptions=function(_d1){
var t=$(_d1);
return $.extend({},$.parser.parseOptions(_d1,[{total:"number",pageSize:"number",pageNumber:"number",links:"number"},{loading:"boolean",showPageList:"boolean",showPageInfo:"boolean",showRefresh:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined)});
};
$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:false,buttons:null,showPageList:true,showPageInfo:true,showRefresh:true,links:10,layout:["list","sep","first","prev","sep","manual","sep","next","last","sep","refresh","info"],onSelectPage:function(_d2,_d3){
},onBeforeRefresh:function(_d4,_d5){
},onRefresh:function(_d6,_d7){
},onChangePageSize:function(_d8){
},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function(){
var _d9=$(this).pagination("options");
if(_d9.pageNumber>1){
$(this).pagination("select",1);
}
}},prev:{iconCls:"pagination-prev",handler:function(){
var _da=$(this).pagination("options");
if(_da.pageNumber>1){
$(this).pagination("select",_da.pageNumber-1);
}
}},next:{iconCls:"pagination-next",handler:function(){
var _db=$(this).pagination("options");
var _dc=Math.ceil(_db.total/_db.pageSize);
if(_db.pageNumber<_dc){
$(this).pagination("select",_db.pageNumber+1);
}
}},last:{iconCls:"pagination-last",handler:function(){
var _dd=$(this).pagination("options");
var _de=Math.ceil(_dd.total/_dd.pageSize);
if(_dd.pageNumber<_de){
$(this).pagination("select",_de);
}
}},refresh:{iconCls:"pagination-refresh",handler:function(){
var _df=$(this).pagination("options");
if(_df.onBeforeRefresh.call(this,_df.pageNumber,_df.pageSize)!=false){
$(this).pagination("select",_df.pageNumber);
_df.onRefresh.call(this,_df.pageNumber,_df.pageSize);
}
}}}};
})(jQuery);
(function($){
function _e0(_e1){
var _e2=$(_e1);
_e2.addClass("tree");
return _e2;
};
function _e3(_e4){
var _e5=$.data(_e4,"tree").options;
$(_e4).unbind().bind("mouseover",function(e){
var tt=$(e.target);
var _e6=tt.closest("div.tree-node");
if(!_e6.length){
return;
}
_e6.addClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.addClass("tree-expanded-hover");
}else{
tt.addClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var _e7=tt.closest("div.tree-node");
if(!_e7.length){
return;
}
_e7.removeClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.removeClass("tree-expanded-hover");
}else{
tt.removeClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var _e8=tt.closest("div.tree-node");
if(!_e8.length){
return;
}
if(tt.hasClass("tree-hit")){
_146(_e4,_e8[0]);
return false;
}else{
if(tt.hasClass("tree-checkbox")){
_10d(_e4,_e8[0]);
return false;
}else{
_189(_e4,_e8[0]);
_e5.onClick.call(_e4,_eb(_e4,_e8[0]));
}
}
e.stopPropagation();
}).bind("dblclick",function(e){
var _e9=$(e.target).closest("div.tree-node");
if(!_e9.length){
return;
}
_189(_e4,_e9[0]);
_e5.onDblClick.call(_e4,_eb(_e4,_e9[0]));
e.stopPropagation();
}).bind("contextmenu",function(e){
var _ea=$(e.target).closest("div.tree-node");
if(!_ea.length){
return;
}
_e5.onContextMenu.call(_e4,e,_eb(_e4,_ea[0]));
e.stopPropagation();
});
};
function _ec(_ed){
var _ee=$.data(_ed,"tree").options;
_ee.dnd=false;
var _ef=$(_ed).find("div.tree-node");
_ef.draggable("disable");
_ef.css("cursor","pointer");
};
function _f0(_f1){
var _f2=$.data(_f1,"tree");
var _f3=_f2.options;
var _f4=_f2.tree;
_f2.disabledNodes=[];
_f3.dnd=true;
_f4.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function(_f5){
var p=$("<div class=\"tree-node-proxy\"></div>").appendTo("body");
p.html("<span class=\"tree-dnd-icon tree-dnd-no\">&nbsp;</span>"+$(_f5).find(".tree-title").html());
p.hide();
return p;
},deltaX:15,deltaY:15,onBeforeDrag:function(e){
if(_f3.onBeforeDrag.call(_f1,_eb(_f1,this))==false){
return false;
}
if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){
return false;
}
if(e.which!=1){
return false;
}
var _f6=$(this).find("span.tree-indent");
if(_f6.length){
e.data.offsetWidth-=_f6.length*_f6.width();
}
},onStartDrag:function(e){
$(this).next("ul").find("div.tree-node").each(function(){
$(this).droppable("disable");
_f2.disabledNodes.push(this);
});
$(this).draggable("proxy").css({left:-10000,top:-10000});
_f3.onStartDrag.call(_f1,_eb(_f1,this));
var _f7=_eb(_f1,this);
if(_f7.id==undefined){
_f7.id="easyui_tree_node_id_temp";
_12d(_f1,_f7);
}
_f2.draggingNodeId=_f7.id;
},onDrag:function(e){
var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;
var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
if(d>3){
$(this).draggable("proxy").show();
}
this.pageY=e.pageY;
},onStopDrag:function(){
for(var i=0;i<_f2.disabledNodes.length;i++){
$(_f2.disabledNodes[i]).droppable("enable");
}
_f2.disabledNodes=[];
var _f8=_183(_f1,_f2.draggingNodeId);
if(_f8&&_f8.id=="easyui_tree_node_id_temp"){
_f8.id="";
_12d(_f1,_f8);
}
_f3.onStopDrag.call(_f1,_f8);
}}).droppable({accept:"div.tree-node",onDragEnter:function(e,_f9){
if(_f3.onDragEnter.call(_f1,this,_fa(_f9))==false){
_fb(_f9,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f2.disabledNodes.push(this);
}
},onDragOver:function(e,_fc){
if($(this).droppable("options").disabled){
return;
}
var _fd=_fc.pageY;
var top=$(this).offset().top;
var _fe=top+$(this).outerHeight();
_fb(_fc,true);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
if(_fd>top+(_fe-top)/2){
if(_fe-_fd<5){
$(this).addClass("tree-node-bottom");
}else{
$(this).addClass("tree-node-append");
}
}else{
if(_fd-top<5){
$(this).addClass("tree-node-top");
}else{
$(this).addClass("tree-node-append");
}
}
if(_f3.onDragOver.call(_f1,this,_fa(_fc))==false){
_fb(_fc,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f2.disabledNodes.push(this);
}
},onDragLeave:function(e,_ff){
_fb(_ff,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
_f3.onDragLeave.call(_f1,this,_fa(_ff));
},onDrop:function(e,_100){
var dest=this;
var _101,_102;
if($(this).hasClass("tree-node-append")){
_101=_103;
_102="append";
}else{
_101=_104;
_102=$(this).hasClass("tree-node-top")?"top":"bottom";
}
if(_f3.onBeforeDrop.call(_f1,dest,_fa(_100),_102)==false){
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
return;
}
_101(_100,dest,_102);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
}});
function _fa(_105,pop){
return $(_105).closest("ul.tree").tree(pop?"pop":"getData",_105);
};
function _fb(_106,_107){
var icon=$(_106).draggable("proxy").find("span.tree-dnd-icon");
icon.removeClass("tree-dnd-yes tree-dnd-no").addClass(_107?"tree-dnd-yes":"tree-dnd-no");
};
function _103(_108,dest){
if(_eb(_f1,dest).state=="closed"){
_13e(_f1,dest,function(){
_109();
});
}else{
_109();
}
function _109(){
var node=_fa(_108,true);
$(_f1).tree("append",{parent:dest,data:[node]});
_f3.onDrop.call(_f1,dest,node,"append");
};
};
function _104(_10a,dest,_10b){
var _10c={};
if(_10b=="top"){
_10c.before=dest;
}else{
_10c.after=dest;
}
var node=_fa(_10a,true);
_10c.data=node;
$(_f1).tree("insert",_10c);
_f3.onDrop.call(_f1,dest,node,_10b);
};
};
function _10d(_10e,_10f,_110,_111){
var _112=$.data(_10e,"tree");
var opts=_112.options;
if(!opts.checkbox){
return;
}
var _113=_eb(_10e,_10f);
if(!_113.checkState){
return;
}
var ck=$(_10f).find(".tree-checkbox");
if(_110==undefined){
if(ck.hasClass("tree-checkbox1")){
_110=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_110=true;
}else{
if(_113._checked==undefined){
_113._checked=$(_10f).find(".tree-checkbox").hasClass("tree-checkbox1");
}
_110=!_113._checked;
}
}
}
_113._checked=_110;
if(_110){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_111){
if(opts.onBeforeCheck.call(_10e,_113,_110)==false){
return;
}
}
if(opts.cascadeCheck){
_114(_10e,_113,_110);
_115(_10e,_113);
}else{
_116(_10e,_113,_110?"1":"0");
}
if(!_111){
opts.onCheck.call(_10e,_113,_110);
}
};
function _114(_117,_118,_119){
var opts=$.data(_117,"tree").options;
var flag=_119?1:0;
_116(_117,_118,flag);
if(opts.deepCheck){
$.easyui.forEach(_118.children||[],true,function(n){
_116(_117,n,flag);
});
}else{
var _11a=[];
if(_118.children&&_118.children.length){
_11a.push(_118);
}
$.easyui.forEach(_118.children||[],true,function(n){
if(!n.hidden){
_116(_117,n,flag);
if(n.children&&n.children.length){
_11a.push(n);
}
}
});
for(var i=_11a.length-1;i>=0;i--){
var node=_11a[i];
_116(_117,node,_11b(node));
}
}
};
function _116(_11c,_11d,flag){
var opts=$.data(_11c,"tree").options;
if(!_11d.checkState||flag==undefined){
return;
}
if(_11d.hidden&&!opts.deepCheck){
return;
}
var ck=$("#"+_11d.domId).find(".tree-checkbox");
_11d.checkState=["unchecked","checked","indeterminate"][flag];
_11d.checked=(_11d.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
};
function _115(_11e,_11f){
var pd=_120(_11e,$("#"+_11f.domId)[0]);
if(pd){
_116(_11e,pd,_11b(pd));
_115(_11e,pd);
}
};
function _11b(row){
var c0=0;
var c1=0;
var len=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _121(_122,_123){
var opts=$.data(_122,"tree").options;
if(!opts.checkbox){
return;
}
var node=$(_123);
var ck=node.find(".tree-checkbox");
var _124=_eb(_122,_123);
if(opts.view.hasCheckbox(_122,_124)){
if(!ck.length){
_124.checkState=_124.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(node.find(".tree-title"));
}
if(_124.checkState=="checked"){
_10d(_122,_123,true,true);
}else{
if(_124.checkState=="unchecked"){
_10d(_122,_123,false,true);
}else{
var flag=_11b(_124);
if(flag===0){
_10d(_122,_123,false,true);
}else{
if(flag===1){
_10d(_122,_123,true,true);
}
}
}
}
}else{
ck.remove();
_124.checkState=undefined;
_124.checked=undefined;
_115(_122,_124);
}
};
function _125(_126,ul,data,_127,_128){
var _129=$.data(_126,"tree");
var opts=_129.options;
var _12a=$(ul).prevAll("div.tree-node:first");
data=opts.loadFilter.call(_126,data,_12a[0]);
var _12b=_12c(_126,"domId",_12a.attr("id"));
if(!_127){
_12b?_12b.children=data:_129.data=data;
$(ul).empty();
}else{
if(_12b){
_12b.children?_12b.children=_12b.children.concat(data):_12b.children=data;
}else{
_129.data=_129.data.concat(data);
}
}
opts.view.render.call(opts.view,_126,ul,data);
if(opts.dnd){
_f0(_126);
}
if(_12b){
_12d(_126,_12b);
}
for(var i=0;i<_129.tmpIds.length;i++){
_10d(_126,$("#"+_129.tmpIds[i])[0],true,true);
}
_129.tmpIds=[];
setTimeout(function(){
_12e(_126,_126);
},0);
if(!_128){
opts.onLoadSuccess.call(_126,_12b,data);
}
};
function _12e(_12f,ul,_130){
var opts=$.data(_12f,"tree").options;
if(opts.lines){
$(_12f).addClass("tree-lines");
}else{
$(_12f).removeClass("tree-lines");
return;
}
if(!_130){
_130=true;
$(_12f).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
$(_12f).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
var _131=$(_12f).tree("getRoots");
if(_131.length>1){
$(_131[0].target).addClass("tree-root-first");
}else{
if(_131.length==1){
$(_131[0].target).addClass("tree-root-one");
}
}
}
$(ul).children("li").each(function(){
var node=$(this).children("div.tree-node");
var ul=node.next("ul");
if(ul.length){
if($(this).next().length){
_132(node);
}
_12e(_12f,ul,_130);
}else{
_133(node);
}
});
var _134=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
_134.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");
function _133(node,_135){
var icon=node.find("span.tree-icon");
icon.prev("span.tree-indent").addClass("tree-join");
};
function _132(node){
var _136=node.find("span.tree-indent, span.tree-hit").length;
node.next().find("div.tree-node").each(function(){
$(this).children("span:eq("+(_136-1)+")").addClass("tree-line");
});
};
};
function _137(_138,ul,_139,_13a){
var opts=$.data(_138,"tree").options;
_139=$.extend({},opts.queryParams,_139||{});
var _13b=null;
if(_138!=ul){
var node=$(ul).prev();
_13b=_eb(_138,node[0]);
}
if(opts.onBeforeLoad.call(_138,_13b,_139)==false){
return;
}
var _13c=$(ul).prev().children("span.tree-folder");
_13c.addClass("tree-loading");
var _13d=opts.loader.call(_138,_139,function(data){
_13c.removeClass("tree-loading");
_125(_138,ul,data);
if(_13a){
_13a();
}
},function(){
_13c.removeClass("tree-loading");
opts.onLoadError.apply(_138,arguments);
if(_13a){
_13a();
}
});
if(_13d==false){
_13c.removeClass("tree-loading");
}
};
function _13e(_13f,_140,_141){
var opts=$.data(_13f,"tree").options;
var hit=$(_140).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
var node=_eb(_13f,_140);
if(opts.onBeforeExpand.call(_13f,node)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_140).next();
if(ul.length){
if(opts.animate){
ul.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
});
}else{
ul.css("display","block");
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
}
}else{
var _142=$("<ul style=\"display:none\"></ul>").insertAfter(_140);
_137(_13f,_142[0],{id:node.id},function(){
if(_142.is(":empty")){
_142.remove();
}
if(opts.animate){
_142.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
});
}else{
_142.css("display","block");
node.state="open";
opts.onExpand.call(_13f,node);
if(_141){
_141();
}
}
});
}
};
function _143(_144,_145){
var opts=$.data(_144,"tree").options;
var hit=$(_145).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
var node=_eb(_144,_145);
if(opts.onBeforeCollapse.call(_144,node)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
var ul=$(_145).next();
if(opts.animate){
ul.slideUp("normal",function(){
node.state="closed";
opts.onCollapse.call(_144,node);
});
}else{
ul.css("display","none");
node.state="closed";
opts.onCollapse.call(_144,node);
}
};
function _146(_147,_148){
var hit=$(_148).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_143(_147,_148);
}else{
_13e(_147,_148);
}
};
function _149(_14a,_14b){
var _14c=_14d(_14a,_14b);
if(_14b){
_14c.unshift(_eb(_14a,_14b));
}
for(var i=0;i<_14c.length;i++){
_13e(_14a,_14c[i].target);
}
};
function _14e(_14f,_150){
var _151=[];
var p=_120(_14f,_150);
while(p){
_151.unshift(p);
p=_120(_14f,p.target);
}
for(var i=0;i<_151.length;i++){
_13e(_14f,_151[i].target);
}
};
function _152(_153,_154){
var c=$(_153).parent();
while(c[0].tagName!="BODY"&&c.css("overflow-y")!="auto"){
c=c.parent();
}
var n=$(_154);
var ntop=n.offset().top;
if(c[0].tagName!="BODY"){
var ctop=c.offset().top;
if(ntop<ctop){
c.scrollTop(c.scrollTop()+ntop-ctop);
}else{
if(ntop+n.outerHeight()>ctop+c.outerHeight()-18){
c.scrollTop(c.scrollTop()+ntop+n.outerHeight()-ctop-c.outerHeight()+18);
}
}
}else{
c.scrollTop(ntop);
}
};
function _155(_156,_157){
var _158=_14d(_156,_157);
if(_157){
_158.unshift(_eb(_156,_157));
}
for(var i=0;i<_158.length;i++){
_143(_156,_158[i].target);
}
};
function _159(_15a,_15b){
var node=$(_15b.parent);
var data=_15b.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
var ul;
if(node.length==0){
ul=$(_15a);
}else{
if(_15c(_15a,node[0])){
var _15d=node.find("span.tree-icon");
_15d.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_15d);
if(hit.prev().length){
hit.prev().remove();
}
}
ul=node.next();
if(!ul.length){
ul=$("<ul></ul>").insertAfter(node);
}
}
_125(_15a,ul[0],data,true,true);
};
function _15e(_15f,_160){
var ref=_160.before||_160.after;
var _161=_120(_15f,ref);
var data=_160.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
_159(_15f,{parent:(_161?_161.target:null),data:data});
var _162=_161?_161.children:$(_15f).tree("getRoots");
for(var i=0;i<_162.length;i++){
if(_162[i].domId==$(ref).attr("id")){
for(var j=data.length-1;j>=0;j--){
_162.splice((_160.before?i:(i+1)),0,data[j]);
}
_162.splice(_162.length-data.length,data.length);
break;
}
}
var li=$();
for(var i=0;i<data.length;i++){
li=li.add($("#"+data[i].domId).parent());
}
if(_160.before){
li.insertBefore($(ref).parent());
}else{
li.insertAfter($(ref).parent());
}
};
function _163(_164,_165){
var _166=del(_165);
$(_165).parent().remove();
if(_166){
if(!_166.children||!_166.children.length){
var node=$(_166.target);
node.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
node.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(node);
node.next().remove();
}
_12d(_164,_166);
}
_12e(_164,_164);
function del(_167){
var id=$(_167).attr("id");
var _168=_120(_164,_167);
var cc=_168?_168.children:$.data(_164,"tree").data;
for(var i=0;i<cc.length;i++){
if(cc[i].domId==id){
cc.splice(i,1);
break;
}
}
return _168;
};
};
function _12d(_169,_16a){
var opts=$.data(_169,"tree").options;
var node=$(_16a.target);
var data=_eb(_169,_16a.target);
if(data.iconCls){
node.find(".tree-icon").removeClass(data.iconCls);
}
$.extend(data,_16a);
node.find(".tree-title").html(opts.formatter.call(_169,data));
if(data.iconCls){
node.find(".tree-icon").addClass(data.iconCls);
}
_121(_169,_16a.target);
};
function _16b(_16c,_16d){
if(_16d){
var p=_120(_16c,_16d);
while(p){
_16d=p.target;
p=_120(_16c,_16d);
}
return _eb(_16c,_16d);
}else{
var _16e=_16f(_16c);
return _16e.length?_16e[0]:null;
}
};
function _16f(_170){
var _171=$.data(_170,"tree").data;
for(var i=0;i<_171.length;i++){
_172(_171[i]);
}
return _171;
};
function _14d(_173,_174){
var _175=[];
var n=_eb(_173,_174);
var data=n?(n.children||[]):$.data(_173,"tree").data;
$.easyui.forEach(data,true,function(node){
_175.push(_172(node));
});
return _175;
};
function _120(_176,_177){
var p=$(_177).closest("ul").prevAll("div.tree-node:first");
return _eb(_176,p[0]);
};
function _178(_179,_17a){
_17a=_17a||"checked";
if(!$.isArray(_17a)){
_17a=[_17a];
}
var _17b=[];
$.easyui.forEach($.data(_179,"tree").data,true,function(n){
if(n.checkState&&$.easyui.indexOfArray(_17a,n.checkState)!=-1){
_17b.push(_172(n));
}
});
return _17b;
};
function _17c(_17d){
var node=$(_17d).find("div.tree-node-selected");
return node.length?_eb(_17d,node[0]):null;
};
function _17e(_17f,_180){
var data=_eb(_17f,_180);
if(data&&data.children){
$.easyui.forEach(data.children,true,function(node){
_172(node);
});
}
return data;
};
function _eb(_181,_182){
return _12c(_181,"domId",$(_182).attr("id"));
};
function _183(_184,id){
return _12c(_184,"id",id);
};
function _12c(_185,_186,_187){
var data=$.data(_185,"tree").data;
var _188=null;
$.easyui.forEach(data,true,function(node){
if(node[_186]==_187){
_188=_172(node);
return false;
}
});
return _188;
};
function _172(node){
node.target=$("#"+node.domId)[0];
return node;
};
function _189(_18a,_18b){
var opts=$.data(_18a,"tree").options;
var node=_eb(_18a,_18b);
if(opts.onBeforeSelect.call(_18a,node)==false){
return;
}
$(_18a).find("div.tree-node-selected").removeClass("tree-node-selected");
$(_18b).addClass("tree-node-selected");
opts.onSelect.call(_18a,node);
};
function _15c(_18c,_18d){
return $(_18d).children("span.tree-hit").length==0;
};
function _18e(_18f,_190){
var opts=$.data(_18f,"tree").options;
var node=_eb(_18f,_190);
if(opts.onBeforeEdit.call(_18f,node)==false){
return;
}
$(_190).css("position","relative");
var nt=$(_190).find(".tree-title");
var _191=nt.outerWidth();
nt.empty();
var _192=$("<input class=\"tree-editor\">").appendTo(nt);
_192.val(node.text).focus();
_192.width(_191+20);
_192._outerHeight(opts.editorHeight);
_192.bind("click",function(e){
return false;
}).bind("mousedown",function(e){
e.stopPropagation();
}).bind("mousemove",function(e){
e.stopPropagation();
}).bind("keydown",function(e){
if(e.keyCode==13){
_193(_18f,_190);
return false;
}else{
if(e.keyCode==27){
_197(_18f,_190);
return false;
}
}
}).bind("blur",function(e){
e.stopPropagation();
_193(_18f,_190);
});
};
function _193(_194,_195){
var opts=$.data(_194,"tree").options;
$(_195).css("position","");
var _196=$(_195).find("input.tree-editor");
var val=_196.val();
_196.remove();
var node=_eb(_194,_195);
node.text=val;
_12d(_194,node);
opts.onAfterEdit.call(_194,node);
};
function _197(_198,_199){
var opts=$.data(_198,"tree").options;
$(_199).css("position","");
$(_199).find("input.tree-editor").remove();
var node=_eb(_198,_199);
_12d(_198,node);
opts.onCancelEdit.call(_198,node);
};
function _19a(_19b,q){
var _19c=$.data(_19b,"tree");
var opts=_19c.options;
var ids={};
$.easyui.forEach(_19c.data,true,function(node){
if(opts.filter.call(_19b,q,node)){
$("#"+node.domId).removeClass("tree-node-hidden");
ids[node.domId]=1;
node.hidden=false;
}else{
$("#"+node.domId).addClass("tree-node-hidden");
node.hidden=true;
}
});
for(var id in ids){
_19d(id);
}
function _19d(_19e){
var p=$(_19b).tree("getParent",$("#"+_19e)[0]);
while(p){
$(p.target).removeClass("tree-node-hidden");
p.hidden=false;
p=$(_19b).tree("getParent",p.target);
}
};
};
$.fn.tree=function(_19f,_1a0){
if(typeof _19f=="string"){
return $.fn.tree.methods[_19f](this,_1a0);
}
var _19f=_19f||{};
return this.each(function(){
var _1a1=$.data(this,"tree");
var opts;
if(_1a1){
opts=$.extend(_1a1.options,_19f);
_1a1.options=opts;
}else{
opts=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_19f);
$.data(this,"tree",{options:opts,tree:_e0(this),data:[],tmpIds:[]});
var data=$.fn.tree.parseData(this);
if(data.length){
_125(this,this,data);
}
}
_e3(this);
if(opts.data){
_125(this,this,$.extend(true,[],opts.data));
}
_137(this,this);
});
};
$.fn.tree.methods={options:function(jq){
return $.data(jq[0],"tree").options;
},loadData:function(jq,data){
return jq.each(function(){
_125(this,this,data);
});
},getNode:function(jq,_1a2){
return _eb(jq[0],_1a2);
},getData:function(jq,_1a3){
return _17e(jq[0],_1a3);
},reload:function(jq,_1a4){
return jq.each(function(){
if(_1a4){
var node=$(_1a4);
var hit=node.children("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
node.next().remove();
_13e(this,_1a4);
}else{
$(this).empty();
_137(this,this);
}
});
},getRoot:function(jq,_1a5){
return _16b(jq[0],_1a5);
},getRoots:function(jq){
return _16f(jq[0]);
},getParent:function(jq,_1a6){
return _120(jq[0],_1a6);
},getChildren:function(jq,_1a7){
return _14d(jq[0],_1a7);
},getChecked:function(jq,_1a8){
return _178(jq[0],_1a8);
},getSelected:function(jq){
return _17c(jq[0]);
},isLeaf:function(jq,_1a9){
return _15c(jq[0],_1a9);
},find:function(jq,id){
return _183(jq[0],id);
},select:function(jq,_1aa){
return jq.each(function(){
_189(this,_1aa);
});
},check:function(jq,_1ab){
return jq.each(function(){
_10d(this,_1ab,true);
});
},uncheck:function(jq,_1ac){
return jq.each(function(){
_10d(this,_1ac,false);
});
},collapse:function(jq,_1ad){
return jq.each(function(){
_143(this,_1ad);
});
},expand:function(jq,_1ae){
return jq.each(function(){
_13e(this,_1ae);
});
},collapseAll:function(jq,_1af){
return jq.each(function(){
_155(this,_1af);
});
},expandAll:function(jq,_1b0){
return jq.each(function(){
_149(this,_1b0);
});
},expandTo:function(jq,_1b1){
return jq.each(function(){
_14e(this,_1b1);
});
},scrollTo:function(jq,_1b2){
return jq.each(function(){
_152(this,_1b2);
});
},toggle:function(jq,_1b3){
return jq.each(function(){
_146(this,_1b3);
});
},append:function(jq,_1b4){
return jq.each(function(){
_159(this,_1b4);
});
},insert:function(jq,_1b5){
return jq.each(function(){
_15e(this,_1b5);
});
},remove:function(jq,_1b6){
return jq.each(function(){
_163(this,_1b6);
});
},pop:function(jq,_1b7){
var node=jq.tree("getData",_1b7);
jq.tree("remove",_1b7);
return node;
},update:function(jq,_1b8){
return jq.each(function(){
_12d(this,$.extend({},_1b8,{checkState:_1b8.checked?"checked":(_1b8.checked===false?"unchecked":undefined)}));
});
},enableDnd:function(jq){
return jq.each(function(){
_f0(this);
});
},disableDnd:function(jq){
return jq.each(function(){
_ec(this);
});
},beginEdit:function(jq,_1b9){
return jq.each(function(){
_18e(this,_1b9);
});
},endEdit:function(jq,_1ba){
return jq.each(function(){
_193(this,_1ba);
});
},cancelEdit:function(jq,_1bb){
return jq.each(function(){
_197(this,_1bb);
});
},doFilter:function(jq,q){
return jq.each(function(){
_19a(this,q);
});
}};
$.fn.tree.parseOptions=function(_1bc){
var t=$(_1bc);
return $.extend({},$.parser.parseOptions(_1bc,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));
};
$.fn.tree.parseData=function(_1bd){
var data=[];
_1be(data,$(_1bd));
return data;
function _1be(aa,tree){
tree.children("li").each(function(){
var node=$(this);
var item=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:(node.attr("checked")?true:undefined)});
item.text=node.children("span").html();
if(!item.text){
item.text=node.html();
}
var _1bf=node.children("ul");
if(_1bf.length){
item.children=[];
_1be(item.children,_1bf);
}
aa.push(item);
});
};
};
var _1c0=1;
var _1c1={render:function(_1c2,ul,data){
var _1c3=$.data(_1c2,"tree");
var opts=_1c3.options;
var _1c4=$(ul).prev(".tree-node");
var _1c5=_1c4.length?$(_1c2).tree("getNode",_1c4[0]):null;
var _1c6=_1c4.find("span.tree-indent, span.tree-hit").length;
var cc=_1c7.call(this,_1c6,data);
$(ul).append(cc.join(""));
function _1c7(_1c8,_1c9){
var cc=[];
for(var i=0;i<_1c9.length;i++){
var item=_1c9[i];
if(item.state!="open"&&item.state!="closed"){
item.state="open";
}
item.domId="_easyui_tree_"+_1c0++;
cc.push("<li>");
cc.push("<div id=\""+item.domId+"\" class=\"tree-node"+(item.nodeCls?" "+item.nodeCls:"")+"\">");
for(var j=0;j<_1c8;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(item.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
if(item.children&&item.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(item.iconCls?item.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_1c2,item)){
var flag=0;
if(_1c5&&_1c5.checkState=="checked"&&opts.cascadeCheck){
flag=1;
item.checked=true;
}else{
if(item.checked){
$.easyui.addArrayItem(_1c3.tmpIds,item.domId);
}
}
item.checkState=flag?"checked":"unchecked";
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
item.checkState=undefined;
item.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+opts.formatter.call(_1c2,item)+"</span>");
cc.push("</div>");
if(item.children&&item.children.length){
var tmp=_1c7.call(this,_1c8+1,item.children);
cc.push("<ul style=\"display:"+(item.state=="closed"?"none":"block")+"\">");
cc=cc.concat(tmp);
cc.push("</ul>");
}
cc.push("</li>");
}
return cc;
};
},hasCheckbox:function(_1ca,item){
var _1cb=$.data(_1ca,"tree");
var opts=_1cb.options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_1ca,item)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(item.state=="open"&&!(item.children&&item.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
}};
$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,editorHeight:26,data:null,queryParams:{},formatter:function(node){
return node.text;
},filter:function(q,node){
var qq=[];
$.map($.isArray(q)?q:[q],function(q){
q=$.trim(q);
if(q){
qq.push(q);
}
});
for(var i=0;i<qq.length;i++){
var _1cc=node.text.toLowerCase().indexOf(qq[i].toLowerCase());
if(_1cc>=0){
return true;
}
}
return !qq.length;
},loader:function(_1cd,_1ce,_1cf){
var opts=$(this).tree("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_1cd,dataType:"json",success:function(data){
_1ce(data);
},error:function(){
_1cf.apply(this,arguments);
}});
},loadFilter:function(data,_1d0){
return data;
},view:_1c1,onBeforeLoad:function(node,_1d1){
},onLoadSuccess:function(node,data){
},onLoadError:function(){
},onClick:function(node){
},onDblClick:function(node){
},onBeforeExpand:function(node){
},onExpand:function(node){
},onBeforeCollapse:function(node){
},onCollapse:function(node){
},onBeforeCheck:function(node,_1d2){
},onCheck:function(node,_1d3){
},onBeforeSelect:function(node){
},onSelect:function(node){
},onContextMenu:function(e,node){
},onBeforeDrag:function(node){
},onStartDrag:function(node){
},onStopDrag:function(node){
},onDragEnter:function(_1d4,_1d5){
},onDragOver:function(_1d6,_1d7){
},onDragLeave:function(_1d8,_1d9){
},onBeforeDrop:function(_1da,_1db,_1dc){
},onDrop:function(_1dd,_1de,_1df){
},onBeforeEdit:function(node){
},onAfterEdit:function(node){
},onCancelEdit:function(node){
}};
})(jQuery);
(function($){
function init(_1e0){
$(_1e0).addClass("progressbar");
$(_1e0).html("<div class=\"progressbar-text\"></div><div class=\"progressbar-value\"><div class=\"progressbar-text\"></div></div>");
$(_1e0).bind("_resize",function(e,_1e1){
if($(this).hasClass("easyui-fluid")||_1e1){
_1e2(_1e0);
}
return false;
});
return $(_1e0);
};
function _1e2(_1e3,_1e4){
var opts=$.data(_1e3,"progressbar").options;
var bar=$.data(_1e3,"progressbar").bar;
if(_1e4){
opts.width=_1e4;
}
bar._size(opts);
bar.find("div.progressbar-text").css("width",bar.width());
bar.find("div.progressbar-text,div.progressbar-value").css({height:bar.height()+"px",lineHeight:bar.height()+"px"});
};
$.fn.progressbar=function(_1e5,_1e6){
if(typeof _1e5=="string"){
var _1e7=$.fn.progressbar.methods[_1e5];
if(_1e7){
return _1e7(this,_1e6);
}
}
_1e5=_1e5||{};
return this.each(function(){
var _1e8=$.data(this,"progressbar");
if(_1e8){
$.extend(_1e8.options,_1e5);
}else{
_1e8=$.data(this,"progressbar",{options:$.extend({},$.fn.progressbar.defaults,$.fn.progressbar.parseOptions(this),_1e5),bar:init(this)});
}
$(this).progressbar("setValue",_1e8.options.value);
_1e2(this);
});
};
$.fn.progressbar.methods={options:function(jq){
return $.data(jq[0],"progressbar").options;
},resize:function(jq,_1e9){
return jq.each(function(){
_1e2(this,_1e9);
});
},getValue:function(jq){
return $.data(jq[0],"progressbar").options.value;
},setValue:function(jq,_1ea){
if(_1ea<0){
_1ea=0;
}
if(_1ea>100){
_1ea=100;
}
return jq.each(function(){
var opts=$.data(this,"progressbar").options;
var text=opts.text.replace(/{value}/,_1ea);
var _1eb=opts.value;
opts.value=_1ea;
$(this).find("div.progressbar-value").width(_1ea+"%");
$(this).find("div.progressbar-text").html(text);
if(_1eb!=_1ea){
opts.onChange.call(this,_1ea,_1eb);
}
});
}};
$.fn.progressbar.parseOptions=function(_1ec){
return $.extend({},$.parser.parseOptions(_1ec,["width","height","text",{value:"number"}]));
};
$.fn.progressbar.defaults={width:"auto",height:22,value:0,text:"{value}%",onChange:function(_1ed,_1ee){
}};
})(jQuery);
(function($){
function init(_1ef){
$(_1ef).addClass("tooltip-f");
};
function _1f0(_1f1){
var opts=$.data(_1f1,"tooltip").options;
$(_1f1).unbind(".tooltip").bind(opts.showEvent+".tooltip",function(e){
$(_1f1).tooltip("show",e);
}).bind(opts.hideEvent+".tooltip",function(e){
$(_1f1).tooltip("hide",e);
}).bind("mousemove.tooltip",function(e){
if(opts.trackMouse){
opts.trackMouseX=e.pageX;
opts.trackMouseY=e.pageY;
$(_1f1).tooltip("reposition");
}
});
};
function _1f2(_1f3){
var _1f4=$.data(_1f3,"tooltip");
if(_1f4.showTimer){
clearTimeout(_1f4.showTimer);
_1f4.showTimer=null;
}
if(_1f4.hideTimer){
clearTimeout(_1f4.hideTimer);
_1f4.hideTimer=null;
}
};
function _1f5(_1f6){
var _1f7=$.data(_1f6,"tooltip");
if(!_1f7||!_1f7.tip){
return;
}
var opts=_1f7.options;
var tip=_1f7.tip;
var pos={left:-100000,top:-100000};
if($(_1f6).is(":visible")){
pos=_1f8(opts.position);
if(opts.position=="top"&&pos.top<0){
pos=_1f8("bottom");
}else{
if((opts.position=="bottom")&&(pos.top+tip._outerHeight()>$(window)._outerHeight()+$(document).scrollTop())){
pos=_1f8("top");
}
}
if(pos.left<0){
if(opts.position=="left"){
pos=_1f8("right");
}else{
$(_1f6).tooltip("arrow").css("left",tip._outerWidth()/2+pos.left);
pos.left=0;
}
}else{
if(pos.left+tip._outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
if(opts.position=="right"){
pos=_1f8("left");
}else{
var left=pos.left;
pos.left=$(window)._outerWidth()+$(document)._scrollLeft()-tip._outerWidth();
$(_1f6).tooltip("arrow").css("left",tip._outerWidth()/2-(pos.left-left));
}
}
}
}
tip.css({left:pos.left,top:pos.top,zIndex:(opts.zIndex!=undefined?opts.zIndex:($.fn.window?$.fn.window.defaults.zIndex++:""))});
opts.onPosition.call(_1f6,pos.left,pos.top);
function _1f8(_1f9){
opts.position=_1f9||"bottom";
tip.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+opts.position);
var left,top;
var _1fa=$.isFunction(opts.deltaX)?opts.deltaX.call(_1f6,opts.position):opts.deltaX;
var _1fb=$.isFunction(opts.deltaY)?opts.deltaY.call(_1f6,opts.position):opts.deltaY;
if(opts.trackMouse){
t=$();
left=opts.trackMouseX+_1fa;
top=opts.trackMouseY+_1fb;
}else{
var t=$(_1f6);
left=t.offset().left+_1fa;
top=t.offset().top+_1fb;
}
switch(opts.position){
case "right":
left+=t._outerWidth()+12+(opts.trackMouse?12:0);
if(opts.valign=="middle"){
top-=(tip._outerHeight()-t._outerHeight())/2;
}
break;
case "left":
left-=tip._outerWidth()+12+(opts.trackMouse?12:0);
if(opts.valign=="middle"){
top-=(tip._outerHeight()-t._outerHeight())/2;
}
break;
case "top":
left-=(tip._outerWidth()-t._outerWidth())/2;
top-=tip._outerHeight()+12+(opts.trackMouse?12:0);
break;
case "bottom":
left-=(tip._outerWidth()-t._outerWidth())/2;
top+=t._outerHeight()+12+(opts.trackMouse?12:0);
break;
}
return {left:left,top:top};
};
};
function _1fc(_1fd,e){
var _1fe=$.data(_1fd,"tooltip");
var opts=_1fe.options;
var tip=_1fe.tip;
if(!tip){
tip=$("<div tabindex=\"-1\" class=\"tooltip\">"+"<div class=\"tooltip-content\"></div>"+"<div class=\"tooltip-arrow-outer\"></div>"+"<div class=\"tooltip-arrow\"></div>"+"</div>").appendTo("body");
_1fe.tip=tip;
_1ff(_1fd);
}
_1f2(_1fd);
_1fe.showTimer=setTimeout(function(){
$(_1fd).tooltip("reposition");
tip.show();
opts.onShow.call(_1fd,e);
var _200=tip.children(".tooltip-arrow-outer");
var _201=tip.children(".tooltip-arrow");
var bc="border-"+opts.position+"-color";
_200.add(_201).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""});
_200.css(bc,tip.css(bc));
_201.css(bc,tip.css("backgroundColor"));
},opts.showDelay);
};
function _202(_203,e){
var _204=$.data(_203,"tooltip");
if(_204&&_204.tip){
_1f2(_203);
_204.hideTimer=setTimeout(function(){
_204.tip.hide();
_204.options.onHide.call(_203,e);
},_204.options.hideDelay);
}
};
function _1ff(_205,_206){
var _207=$.data(_205,"tooltip");
var opts=_207.options;
if(_206){
opts.content=_206;
}
if(!_207.tip){
return;
}
var cc=typeof opts.content=="function"?opts.content.call(_205):opts.content;
_207.tip.children(".tooltip-content").html(cc);
opts.onUpdate.call(_205,cc);
};
function _208(_209){
var _20a=$.data(_209,"tooltip");
if(_20a){
_1f2(_209);
var opts=_20a.options;
if(_20a.tip){
_20a.tip.remove();
}
if(opts._title){
$(_209).attr("title",opts._title);
}
$.removeData(_209,"tooltip");
$(_209).unbind(".tooltip").removeClass("tooltip-f");
opts.onDestroy.call(_209);
}
};
$.fn.tooltip=function(_20b,_20c){
if(typeof _20b=="string"){
return $.fn.tooltip.methods[_20b](this,_20c);
}
_20b=_20b||{};
return this.each(function(){
var _20d=$.data(this,"tooltip");
if(_20d){
$.extend(_20d.options,_20b);
}else{
$.data(this,"tooltip",{options:$.extend({},$.fn.tooltip.defaults,$.fn.tooltip.parseOptions(this),_20b)});
init(this);
}
_1f0(this);
_1ff(this);
});
};
$.fn.tooltip.methods={options:function(jq){
return $.data(jq[0],"tooltip").options;
},tip:function(jq){
return $.data(jq[0],"tooltip").tip;
},arrow:function(jq){
return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");
},show:function(jq,e){
return jq.each(function(){
_1fc(this,e);
});
},hide:function(jq,e){
return jq.each(function(){
_202(this,e);
});
},update:function(jq,_20e){
return jq.each(function(){
_1ff(this,_20e);
});
},reposition:function(jq){
return jq.each(function(){
_1f5(this);
});
},destroy:function(jq){
return jq.each(function(){
_208(this);
});
}};
$.fn.tooltip.parseOptions=function(_20f){
var t=$(_20f);
var opts=$.extend({},$.parser.parseOptions(_20f,["position","showEvent","hideEvent","content",{trackMouse:"boolean",deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:t.attr("title")});
t.attr("title","");
if(!opts.content){
opts.content=opts._title;
}
return opts;
};
$.fn.tooltip.defaults={position:"bottom",valign:"middle",content:null,trackMouse:false,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function(e){
},onHide:function(e){
},onUpdate:function(_210){
},onPosition:function(left,top){
},onDestroy:function(){
}};
})(jQuery);
(function($){
$.fn._remove=function(){
return this.each(function(){
$(this).remove();
try{
this.outerHTML="";
}
catch(err){
}
});
};
function _211(node){
node._remove();
};
function _212(_213,_214){
var _215=$.data(_213,"panel");
var opts=_215.options;
var _216=_215.panel;
var _217=_216.children(".panel-header");
var _218=_216.children(".panel-body");
var _219=_216.children(".panel-footer");
var _21a=(opts.halign=="left"||opts.halign=="right");
if(_214){
$.extend(opts,{width:_214.width,height:_214.height,minWidth:_214.minWidth,maxWidth:_214.maxWidth,minHeight:_214.minHeight,maxHeight:_214.maxHeight,left:_214.left,top:_214.top});
opts.hasResized=false;
}
var _21b=_216.outerWidth();
var _21c=_216.outerHeight();
_216._size(opts);
var _21d=_216.outerWidth();
var _21e=_216.outerHeight();
if(opts.hasResized&&(_21b==_21d&&_21c==_21e)){
return;
}
opts.hasResized=true;
if(!_21a){
_217._outerWidth(_216.width());
}
_218._outerWidth(_216.width());
if(!isNaN(parseInt(opts.height))){
if(_21a){
if(opts.header){
var _21f=$(opts.header)._outerWidth();
}else{
_217.css("width","");
var _21f=_217._outerWidth();
}
var _220=_217.find(".panel-title");
_21f+=Math.min(_220._outerWidth(),_220._outerHeight());
var _221=_216.height();
_217._outerWidth(_21f)._outerHeight(_221);
_220._outerWidth(_217.height());
_218._outerWidth(_216.width()-_21f-_219._outerWidth())._outerHeight(_221);
_219._outerHeight(_221);
_218.css({left:"",right:""}).css(opts.halign,(_217.position()[opts.halign]+_21f)+"px");
opts.panelCssWidth=_216.css("width");
if(opts.collapsed){
_216._outerWidth(_21f+_219._outerWidth());
}
}else{
_218._outerHeight(_216.height()-_217._outerHeight()-_219._outerHeight());
}
}else{
_218.css("height","");
var min=$.parser.parseValue("minHeight",opts.minHeight,_216.parent());
var max=$.parser.parseValue("maxHeight",opts.maxHeight,_216.parent());
var _222=_217._outerHeight()+_219._outerHeight()+_216._outerHeight()-_216.height();
_218._size("minHeight",min?(min-_222):"");
_218._size("maxHeight",max?(max-_222):"");
}
_216.css({height:(_21a?undefined:""),minHeight:"",maxHeight:"",left:opts.left,top:opts.top});
opts.onResize.apply(_213,[opts.width,opts.height]);
$(_213).panel("doLayout");
};
function _223(_224,_225){
var _226=$.data(_224,"panel");
var opts=_226.options;
var _227=_226.panel;
if(_225){
if(_225.left!=null){
opts.left=_225.left;
}
if(_225.top!=null){
opts.top=_225.top;
}
}
_227.css({left:opts.left,top:opts.top});
_227.find(".tooltip-f").each(function(){
$(this).tooltip("reposition");
});
opts.onMove.apply(_224,[opts.left,opts.top]);
};
function _228(_229){
$(_229).addClass("panel-body")._size("clear");
var _22a=$("<div class=\"panel\"></div>").insertBefore(_229);
_22a[0].appendChild(_229);
_22a.bind("_resize",function(e,_22b){
if($(this).hasClass("easyui-fluid")||_22b){
_212(_229,{});
}
return false;
});
return _22a;
};
function _22c(_22d){
var _22e=$.data(_22d,"panel");
var opts=_22e.options;
var _22f=_22e.panel;
_22f.css(opts.style);
_22f.addClass(opts.cls);
_22f.removeClass("panel-hleft panel-hright").addClass("panel-h"+opts.halign);
_230();
_231();
var _232=$(_22d).panel("header");
var body=$(_22d).panel("body");
var _233=$(_22d).siblings(".panel-footer");
if(opts.border){
_232.removeClass("panel-header-noborder");
body.removeClass("panel-body-noborder");
_233.removeClass("panel-footer-noborder");
}else{
_232.addClass("panel-header-noborder");
body.addClass("panel-body-noborder");
_233.addClass("panel-footer-noborder");
}
_232.addClass(opts.headerCls);
body.addClass(opts.bodyCls);
$(_22d).attr("id",opts.id||"");
if(opts.content){
$(_22d).panel("clear");
$(_22d).html(opts.content);
$.parser.parse($(_22d));
}
function _230(){
if(opts.noheader||(!opts.title&&!opts.header)){
_211(_22f.children(".panel-header"));
_22f.children(".panel-body").addClass("panel-body-noheader");
}else{
if(opts.header){
$(opts.header).addClass("panel-header").prependTo(_22f);
}else{
var _234=_22f.children(".panel-header");
if(!_234.length){
_234=$("<div class=\"panel-header\"></div>").prependTo(_22f);
}
if(!$.isArray(opts.tools)){
_234.find("div.panel-tool .panel-tool-a").appendTo(opts.tools);
}
_234.empty();
var _235=$("<div class=\"panel-title\"></div>").html(opts.title).appendTo(_234);
if(opts.iconCls){
_235.addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(opts.iconCls).appendTo(_234);
}
if(opts.halign=="left"||opts.halign=="right"){
_235.addClass("panel-title-"+opts.titleDirection);
}
var tool=$("<div class=\"panel-tool\"></div>").appendTo(_234);
tool.bind("click",function(e){
e.stopPropagation();
});
if(opts.tools){
if($.isArray(opts.tools)){
$.map(opts.tools,function(t){
_236(tool,t.iconCls,eval(t.handler));
});
}else{
$(opts.tools).children().each(function(){
$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool);
});
}
}
if(opts.collapsible){
_236(tool,"panel-tool-collapse",function(){
if(opts.collapsed==true){
_257(_22d,true);
}else{
_248(_22d,true);
}
});
}
if(opts.minimizable){
_236(tool,"panel-tool-min",function(){
_25d(_22d);
});
}
if(opts.maximizable){
_236(tool,"panel-tool-max",function(){
if(opts.maximized==true){
_260(_22d);
}else{
_247(_22d);
}
});
}
if(opts.closable){
_236(tool,"panel-tool-close",function(){
_249(_22d);
});
}
}
_22f.children("div.panel-body").removeClass("panel-body-noheader");
}
};
function _236(c,icon,_237){
var a=$("<a href=\"javascript:;\"></a>").addClass(icon).appendTo(c);
a.bind("click",_237);
};
function _231(){
if(opts.footer){
$(opts.footer).addClass("panel-footer").appendTo(_22f);
$(_22d).addClass("panel-body-nobottom");
}else{
_22f.children(".panel-footer").remove();
$(_22d).removeClass("panel-body-nobottom");
}
};
};
function _238(_239,_23a){
var _23b=$.data(_239,"panel");
var opts=_23b.options;
if(_23c){
opts.queryParams=_23a;
}
if(!opts.href){
return;
}
if(!_23b.isLoaded||!opts.cache){
var _23c=$.extend({},opts.queryParams);
if(opts.onBeforeLoad.call(_239,_23c)==false){
return;
}
_23b.isLoaded=false;
if(opts.loadingMessage){
$(_239).panel("clear");
$(_239).html($("<div class=\"panel-loading\"></div>").html(opts.loadingMessage));
}
opts.loader.call(_239,_23c,function(data){
var _23d=opts.extractor.call(_239,data);
$(_239).panel("clear");
$(_239).html(_23d);
$.parser.parse($(_239));
opts.onLoad.apply(_239,arguments);
_23b.isLoaded=true;
},function(){
opts.onLoadError.apply(_239,arguments);
});
}
};
function _23e(_23f){
var t=$(_23f);
t.find(".combo-f").each(function(){
$(this).combo("destroy");
});
t.find(".m-btn").each(function(){
$(this).menubutton("destroy");
});
t.find(".s-btn").each(function(){
$(this).splitbutton("destroy");
});
t.find(".tooltip-f").each(function(){
$(this).tooltip("destroy");
});
t.children("div").each(function(){
$(this)._size("unfit");
});
t.empty();
};
function _240(_241){
$(_241).panel("doLayout",true);
};
function _242(_243,_244){
var _245=$.data(_243,"panel");
var opts=_245.options;
var _246=_245.panel;
if(_244!=true){
if(opts.onBeforeOpen.call(_243)==false){
return;
}
}
_246.stop(true,true);
if($.isFunction(opts.openAnimation)){
opts.openAnimation.call(_243,cb);
}else{
switch(opts.openAnimation){
case "slide":
_246.slideDown(opts.openDuration,cb);
break;
case "fade":
_246.fadeIn(opts.openDuration,cb);
break;
case "show":
_246.show(opts.openDuration,cb);
break;
default:
_246.show();
cb();
}
}
function cb(){
opts.closed=false;
opts.minimized=false;
var tool=_246.children(".panel-header").find("a.panel-tool-restore");
if(tool.length){
opts.maximized=true;
}
opts.onOpen.call(_243);
if(opts.maximized==true){
opts.maximized=false;
_247(_243);
}
if(opts.collapsed==true){
opts.collapsed=false;
_248(_243);
}
if(!opts.collapsed){
if(opts.href&&(!_245.isLoaded||!opts.cache)){
_238(_243);
_240(_243);
opts.doneLayout=true;
}
}
if(!opts.doneLayout){
opts.doneLayout=true;
_240(_243);
}
};
};
function _249(_24a,_24b){
var _24c=$.data(_24a,"panel");
var opts=_24c.options;
var _24d=_24c.panel;
if(_24b!=true){
if(opts.onBeforeClose.call(_24a)==false){
return;
}
}
_24d.find(".tooltip-f").each(function(){
$(this).tooltip("hide");
});
_24d.stop(true,true);
_24d._size("unfit");
if($.isFunction(opts.closeAnimation)){
opts.closeAnimation.call(_24a,cb);
}else{
switch(opts.closeAnimation){
case "slide":
_24d.slideUp(opts.closeDuration,cb);
break;
case "fade":
_24d.fadeOut(opts.closeDuration,cb);
break;
case "hide":
_24d.hide(opts.closeDuration,cb);
break;
default:
_24d.hide();
cb();
}
}
function cb(){
opts.closed=true;
opts.onClose.call(_24a);
};
};
function _24e(_24f,_250){
var _251=$.data(_24f,"panel");
var opts=_251.options;
var _252=_251.panel;
if(_250!=true){
if(opts.onBeforeDestroy.call(_24f)==false){
return;
}
}
$(_24f).panel("clear").panel("clear","footer");
_211(_252);
opts.onDestroy.call(_24f);
};
function _248(_253,_254){
var opts=$.data(_253,"panel").options;
var _255=$.data(_253,"panel").panel;
var body=_255.children(".panel-body");
var _256=_255.children(".panel-header");
var tool=_256.find("a.panel-tool-collapse");
if(opts.collapsed==true){
return;
}
body.stop(true,true);
if(opts.onBeforeCollapse.call(_253)==false){
return;
}
tool.addClass("panel-tool-expand");
if(_254==true){
if(opts.halign=="left"||opts.halign=="right"){
_255.animate({width:_256._outerWidth()+_255.children(".panel-footer")._outerWidth()},function(){
cb();
});
}else{
body.slideUp("normal",function(){
cb();
});
}
}else{
if(opts.halign=="left"||opts.halign=="right"){
_255._outerWidth(_256._outerWidth()+_255.children(".panel-footer")._outerWidth());
}
cb();
}
function cb(){
body.hide();
opts.collapsed=true;
opts.onCollapse.call(_253);
};
};
function _257(_258,_259){
var opts=$.data(_258,"panel").options;
var _25a=$.data(_258,"panel").panel;
var body=_25a.children(".panel-body");
var tool=_25a.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==false){
return;
}
body.stop(true,true);
if(opts.onBeforeExpand.call(_258)==false){
return;
}
tool.removeClass("panel-tool-expand");
if(_259==true){
if(opts.halign=="left"||opts.halign=="right"){
body.show();
_25a.animate({width:opts.panelCssWidth},function(){
cb();
});
}else{
body.slideDown("normal",function(){
cb();
});
}
}else{
if(opts.halign=="left"||opts.halign=="right"){
_25a.css("width",opts.panelCssWidth);
}
cb();
}
function cb(){
body.show();
opts.collapsed=false;
opts.onExpand.call(_258);
_238(_258);
_240(_258);
};
};
function _247(_25b){
var opts=$.data(_25b,"panel").options;
var _25c=$.data(_25b,"panel").panel;
var tool=_25c.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==true){
return;
}
tool.addClass("panel-tool-restore");
if(!$.data(_25b,"panel").original){
$.data(_25b,"panel").original={width:opts.width,height:opts.height,left:opts.left,top:opts.top,fit:opts.fit};
}
opts.left=0;
opts.top=0;
opts.fit=true;
_212(_25b);
opts.minimized=false;
opts.maximized=true;
opts.onMaximize.call(_25b);
};
function _25d(_25e){
var opts=$.data(_25e,"panel").options;
var _25f=$.data(_25e,"panel").panel;
_25f._size("unfit");
_25f.hide();
opts.minimized=true;
opts.maximized=false;
opts.onMinimize.call(_25e);
};
function _260(_261){
var opts=$.data(_261,"panel").options;
var _262=$.data(_261,"panel").panel;
var tool=_262.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==false){
return;
}
_262.show();
tool.removeClass("panel-tool-restore");
$.extend(opts,$.data(_261,"panel").original);
_212(_261);
opts.minimized=false;
opts.maximized=false;
$.data(_261,"panel").original=null;
opts.onRestore.call(_261);
};
function _263(_264,_265){
$.data(_264,"panel").options.title=_265;
$(_264).panel("header").find("div.panel-title").html(_265);
};
var _266=null;
$(window).unbind(".panel").bind("resize.panel",function(){
if(_266){
clearTimeout(_266);
}
_266=setTimeout(function(){
var _267=$("body.layout");
if(_267.length){
_267.layout("resize");
$("body").children(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
}else{
$("body").panel("doLayout");
}
_266=null;
},100);
});
$.fn.panel=function(_268,_269){
if(typeof _268=="string"){
return $.fn.panel.methods[_268](this,_269);
}
_268=_268||{};
return this.each(function(){
var _26a=$.data(this,"panel");
var opts;
if(_26a){
opts=$.extend(_26a.options,_268);
_26a.isLoaded=false;
}else{
opts=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_268);
$(this).attr("title","");
_26a=$.data(this,"panel",{options:opts,panel:_228(this),isLoaded:false});
}
_22c(this);
$(this).show();
if(opts.doSize==true){
_26a.panel.css("display","block");
_212(this);
}
if(opts.closed==true||opts.minimized==true){
_26a.panel.hide();
}else{
_242(this);
}
});
};
$.fn.panel.methods={options:function(jq){
return $.data(jq[0],"panel").options;
},panel:function(jq){
return $.data(jq[0],"panel").panel;
},header:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-header");
},footer:function(jq){
return jq.panel("panel").children(".panel-footer");
},body:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-body");
},setTitle:function(jq,_26b){
return jq.each(function(){
_263(this,_26b);
});
},open:function(jq,_26c){
return jq.each(function(){
_242(this,_26c);
});
},close:function(jq,_26d){
return jq.each(function(){
_249(this,_26d);
});
},destroy:function(jq,_26e){
return jq.each(function(){
_24e(this,_26e);
});
},clear:function(jq,type){
return jq.each(function(){
_23e(type=="footer"?$(this).panel("footer"):this);
});
},refresh:function(jq,href){
return jq.each(function(){
var _26f=$.data(this,"panel");
_26f.isLoaded=false;
if(href){
if(typeof href=="string"){
_26f.options.href=href;
}else{
_26f.options.queryParams=href;
}
}
_238(this);
});
},resize:function(jq,_270){
return jq.each(function(){
_212(this,_270||{});
});
},doLayout:function(jq,all){
return jq.each(function(){
_271(this,"body");
_271($(this).siblings(".panel-footer")[0],"footer");
function _271(_272,type){
if(!_272){
return;
}
var _273=_272==$("body")[0];
var s=$(_272).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible").filter(function(_274,el){
var p=$(el).parents(".panel-"+type+":first");
return _273?p.length==0:p[0]==_272;
});
s.each(function(){
$(this).triggerHandler("_resize",[all||false]);
});
};
});
},move:function(jq,_275){
return jq.each(function(){
_223(this,_275);
});
},maximize:function(jq){
return jq.each(function(){
_247(this);
});
},minimize:function(jq){
return jq.each(function(){
_25d(this);
});
},restore:function(jq){
return jq.each(function(){
_260(this);
});
},collapse:function(jq,_276){
return jq.each(function(){
_248(this,_276);
});
},expand:function(jq,_277){
return jq.each(function(){
_257(this,_277);
});
}};
$.fn.panel.parseOptions=function(_278){
var t=$(_278);
var hh=t.children(".panel-header,header");
var ff=t.children(".panel-footer,footer");
return $.extend({},$.parser.parseOptions(_278,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href","method","header","footer","halign","titleDirection",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"},"openAnimation","closeAnimation",{openDuration:"number",closeDuration:"number"},]),{loadingMessage:(t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined),header:(hh.length?hh.removeClass("panel-header"):undefined),footer:(ff.length?ff.removeClass("panel-footer"):undefined)});
};
$.fn.panel.defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,halign:"top",titleDirection:"down",collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,openAnimation:false,openDuration:400,closeAnimation:false,closeDuration:400,tools:null,footer:null,header:null,queryParams:{},method:"get",href:null,loadingMessage:"Loading...",loader:function(_279,_27a,_27b){
var opts=$(this).panel("options");
if(!opts.href){
return false;
}
$.ajax({type:opts.method,url:opts.href,cache:false,data:_279,dataType:"html",success:function(data){
_27a(data);
},error:function(){
_27b.apply(this,arguments);
}});
},extractor:function(data){
var _27c=/<body[^>]*>((.|[\n\r])*)<\/body>/im;
var _27d=_27c.exec(data);
if(_27d){
return _27d[1];
}else{
return data;
}
},onBeforeLoad:function(_27e){
},onLoad:function(){
},onLoadError:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_27f,_280){
},onMove:function(left,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);
(function($){
function _281(_282,_283){
var _284=$.data(_282,"window");
if(_283){
if(_283.left!=null){
_284.options.left=_283.left;
}
if(_283.top!=null){
_284.options.top=_283.top;
}
}
$(_282).panel("move",_284.options);
if(_284.shadow){
_284.shadow.css({left:_284.options.left,top:_284.options.top});
}
};
function _285(_286,_287){
var opts=$.data(_286,"window").options;
var pp=$(_286).window("panel");
var _288=pp._outerWidth();
if(opts.inline){
var _289=pp.parent();
opts.left=Math.ceil((_289.width()-_288)/2+_289.scrollLeft());
}else{
opts.left=Math.ceil(($(window)._outerWidth()-_288)/2+$(document).scrollLeft());
}
if(_287){
_281(_286);
}
};
function _28a(_28b,_28c){
var opts=$.data(_28b,"window").options;
var pp=$(_28b).window("panel");
var _28d=pp._outerHeight();
if(opts.inline){
var _28e=pp.parent();
opts.top=Math.ceil((_28e.height()-_28d)/2+_28e.scrollTop());
}else{
opts.top=Math.ceil(($(window)._outerHeight()-_28d)/2+$(document).scrollTop());
}
if(_28c){
_281(_28b);
}
};
function _28f(_290){
var _291=$.data(_290,"window");
var opts=_291.options;
var win=$(_290).panel($.extend({},_291.options,{border:false,doSize:true,closed:true,cls:"window "+(!opts.border?"window-thinborder window-noborder ":(opts.border=="thin"?"window-thinborder ":""))+(opts.cls||""),headerCls:"window-header "+(opts.headerCls||""),bodyCls:"window-body "+(opts.noheader?"window-body-noheader ":" ")+(opts.bodyCls||""),onBeforeDestroy:function(){
if(opts.onBeforeDestroy.call(_290)==false){
return false;
}
if(_291.shadow){
_291.shadow.remove();
}
if(_291.mask){
_291.mask.remove();
}
},onClose:function(){
if(_291.shadow){
_291.shadow.hide();
}
if(_291.mask){
_291.mask.hide();
}
opts.onClose.call(_290);
},onOpen:function(){
if(_291.mask){
_291.mask.css($.extend({display:"block",zIndex:$.fn.window.defaults.zIndex++},$.fn.window.getMaskSize(_290)));
}
if(_291.shadow){
_291.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:opts.left,top:opts.top,width:_291.window._outerWidth(),height:_291.window._outerHeight()});
}
_291.window.css("z-index",$.fn.window.defaults.zIndex++);
opts.onOpen.call(_290);
},onResize:function(_292,_293){
var _294=$(this).panel("options");
$.extend(opts,{width:_294.width,height:_294.height,left:_294.left,top:_294.top});
if(_291.shadow){
_291.shadow.css({left:opts.left,top:opts.top,width:_291.window._outerWidth(),height:_291.window._outerHeight()});
}
opts.onResize.call(_290,_292,_293);
},onMinimize:function(){
if(_291.shadow){
_291.shadow.hide();
}
if(_291.mask){
_291.mask.hide();
}
_291.options.onMinimize.call(_290);
},onBeforeCollapse:function(){
if(opts.onBeforeCollapse.call(_290)==false){
return false;
}
if(_291.shadow){
_291.shadow.hide();
}
},onExpand:function(){
if(_291.shadow){
_291.shadow.show();
}
opts.onExpand.call(_290);
}}));
_291.window=win.panel("panel");
if(_291.mask){
_291.mask.remove();
}
if(opts.modal){
_291.mask=$("<div class=\"window-mask\" style=\"display:none\"></div>").insertAfter(_291.window);
}
if(_291.shadow){
_291.shadow.remove();
}
if(opts.shadow){
_291.shadow=$("<div class=\"window-shadow\" style=\"display:none\"></div>").insertAfter(_291.window);
}
var _295=opts.closed;
if(opts.left==null){
_285(_290);
}
if(opts.top==null){
_28a(_290);
}
_281(_290);
if(!_295){
win.window("open");
}
};
function _296(left,top,_297,_298){
var _299=this;
var _29a=$.data(_299,"window");
var opts=_29a.options;
if(!opts.constrain){
return {};
}
if($.isFunction(opts.constrain)){
return opts.constrain.call(_299,left,top,_297,_298);
}
var win=$(_299).window("window");
var _29b=opts.inline?win.parent():$(window);
if(left<0){
left=0;
}
if(top<_29b.scrollTop()){
top=_29b.scrollTop();
}
if(left+_297>_29b.width()){
if(_297==win.outerWidth()){
left=_29b.width()-_297;
}else{
_297=_29b.width()-left;
}
}
if(top-_29b.scrollTop()+_298>_29b.height()){
if(_298==win.outerHeight()){
top=_29b.height()-_298+_29b.scrollTop();
}else{
_298=_29b.height()-top+_29b.scrollTop();
}
}
return {left:left,top:top,width:_297,height:_298};
};
function _29c(_29d){
var _29e=$.data(_29d,"window");
_29e.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_29e.options.draggable==false,onBeforeDrag:function(e){
if(_29e.mask){
_29e.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_29e.shadow){
_29e.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_29e.window.css("z-index",$.fn.window.defaults.zIndex++);
},onStartDrag:function(e){
_29f(e);
},onDrag:function(e){
_2a0(e);
return false;
},onStopDrag:function(e){
_2a1(e,"move");
}});
_29e.window.resizable({disabled:_29e.options.resizable==false,onStartResize:function(e){
_29f(e);
},onResize:function(e){
_2a0(e);
return false;
},onStopResize:function(e){
_2a1(e,"resize");
}});
function _29f(e){
if(_29e.pmask){
_29e.pmask.remove();
}
_29e.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_29e.window);
_29e.pmask.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_29e.window._outerWidth(),height:_29e.window._outerHeight()});
if(_29e.proxy){
_29e.proxy.remove();
}
_29e.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_29e.window);
_29e.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_29e.proxy._outerWidth(e.data.width)._outerHeight(e.data.height);
_29e.proxy.hide();
setTimeout(function(){
if(_29e.pmask){
_29e.pmask.show();
}
if(_29e.proxy){
_29e.proxy.show();
}
},500);
};
function _2a0(e){
$.extend(e.data,_296.call(_29d,e.data.left,e.data.top,e.data.width,e.data.height));
_29e.pmask.show();
_29e.proxy.css({display:"block",left:e.data.left,top:e.data.top});
_29e.proxy._outerWidth(e.data.width);
_29e.proxy._outerHeight(e.data.height);
};
function _2a1(e,_2a2){
$.extend(e.data,_296.call(_29d,e.data.left,e.data.top,e.data.width+0.1,e.data.height+0.1));
$(_29d).window(_2a2,e.data);
_29e.pmask.remove();
_29e.pmask=null;
_29e.proxy.remove();
_29e.proxy=null;
};
};
$(function(){
if(!$._positionFixed){
$(window).resize(function(){
$("body>div.window-mask:visible").css({width:"",height:""});
setTimeout(function(){
$("body>div.window-mask:visible").css($.fn.window.getMaskSize());
},50);
});
}
});
$.fn.window=function(_2a3,_2a4){
if(typeof _2a3=="string"){
var _2a5=$.fn.window.methods[_2a3];
if(_2a5){
return _2a5(this,_2a4);
}else{
return this.panel(_2a3,_2a4);
}
}
_2a3=_2a3||{};
return this.each(function(){
var _2a6=$.data(this,"window");
if(_2a6){
$.extend(_2a6.options,_2a3);
}else{
_2a6=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_2a3)});
if(!_2a6.options.inline){
document.body.appendChild(this);
}
}
_28f(this);
_29c(this);
});
};
$.fn.window.methods={options:function(jq){
var _2a7=jq.panel("options");
var _2a8=$.data(jq[0],"window").options;
return $.extend(_2a8,{closed:_2a7.closed,collapsed:_2a7.collapsed,minimized:_2a7.minimized,maximized:_2a7.maximized});
},window:function(jq){
return $.data(jq[0],"window").window;
},move:function(jq,_2a9){
return jq.each(function(){
_281(this,_2a9);
});
},hcenter:function(jq){
return jq.each(function(){
_285(this,true);
});
},vcenter:function(jq){
return jq.each(function(){
_28a(this,true);
});
},center:function(jq){
return jq.each(function(){
_285(this);
_28a(this);
_281(this);
});
}};
$.fn.window.getMaskSize=function(_2aa){
var _2ab=$(_2aa).data("window");
if(_2ab&&_2ab.options.inline){
return {};
}else{
if($._positionFixed){
return {position:"fixed"};
}else{
return {width:$(document).width(),height:$(document).height()};
}
}
};
$.fn.window.parseOptions=function(_2ac){
return $.extend({},$.fn.panel.parseOptions(_2ac),$.parser.parseOptions(_2ac,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));
};
$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,border:true,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false,constrain:false});
})(jQuery);
(function($){
function _2ad(_2ae){
var opts=$.data(_2ae,"dialog").options;
opts.inited=false;
$(_2ae).window($.extend({},opts,{onResize:function(w,h){
if(opts.inited){
_2b3(this);
opts.onResize.call(this,w,h);
}
}}));
var win=$(_2ae).window("window");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$(_2ae).siblings("div.dialog-toolbar").remove();
var _2af=$("<div class=\"dialog-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").appendTo(win);
var tr=_2af.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"dialog-tool-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("dialog-toolbar").appendTo(win);
$(opts.toolbar).show();
}
}else{
$(_2ae).siblings("div.dialog-toolbar").remove();
}
if(opts.buttons){
if($.isArray(opts.buttons)){
$(_2ae).siblings("div.dialog-button").remove();
var _2b0=$("<div class=\"dialog-button\"></div>").appendTo(win);
for(var i=0;i<opts.buttons.length;i++){
var p=opts.buttons[i];
var _2b1=$("<a href=\"javascript:;\"></a>").appendTo(_2b0);
if(p.handler){
_2b1[0].onclick=p.handler;
}
_2b1.linkbutton(p);
}
}else{
$(opts.buttons).addClass("dialog-button").appendTo(win);
$(opts.buttons).show();
}
}else{
$(_2ae).siblings("div.dialog-button").remove();
}
opts.inited=true;
var _2b2=opts.closed;
win.show();
$(_2ae).window("resize",{});
if(_2b2){
win.hide();
}
};
function _2b3(_2b4,_2b5){
var t=$(_2b4);
var opts=t.dialog("options");
var _2b6=opts.noheader;
var tb=t.siblings(".dialog-toolbar");
var bb=t.siblings(".dialog-button");
tb.insertBefore(_2b4).css({borderTopWidth:(_2b6?1:0),top:(_2b6?tb.length:0)});
bb.insertAfter(_2b4);
tb.add(bb)._outerWidth(t._outerWidth()).find(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
var _2b7=tb._outerHeight()+bb._outerHeight();
if(!isNaN(parseInt(opts.height))){
t._outerHeight(t._outerHeight()-_2b7);
}else{
var _2b8=t._size("min-height");
if(_2b8){
t._size("min-height",_2b8-_2b7);
}
var _2b9=t._size("max-height");
if(_2b9){
t._size("max-height",_2b9-_2b7);
}
}
var _2ba=$.data(_2b4,"window").shadow;
if(_2ba){
var cc=t.panel("panel");
_2ba.css({width:cc._outerWidth(),height:cc._outerHeight()});
}
};
$.fn.dialog=function(_2bb,_2bc){
if(typeof _2bb=="string"){
var _2bd=$.fn.dialog.methods[_2bb];
if(_2bd){
return _2bd(this,_2bc);
}else{
return this.window(_2bb,_2bc);
}
}
_2bb=_2bb||{};
return this.each(function(){
var _2be=$.data(this,"dialog");
if(_2be){
$.extend(_2be.options,_2bb);
}else{
$.data(this,"dialog",{options:$.extend({},$.fn.dialog.defaults,$.fn.dialog.parseOptions(this),_2bb)});
}
_2ad(this);
});
};
$.fn.dialog.methods={options:function(jq){
var _2bf=$.data(jq[0],"dialog").options;
var _2c0=jq.panel("options");
$.extend(_2bf,{width:_2c0.width,height:_2c0.height,left:_2c0.left,top:_2c0.top,closed:_2c0.closed,collapsed:_2c0.collapsed,minimized:_2c0.minimized,maximized:_2c0.maximized});
return _2bf;
},dialog:function(jq){
return jq.window("window");
}};
$.fn.dialog.parseOptions=function(_2c1){
var t=$(_2c1);
return $.extend({},$.fn.window.parseOptions(_2c1),$.parser.parseOptions(_2c1,["toolbar","buttons"]),{toolbar:(t.children(".dialog-toolbar").length?t.children(".dialog-toolbar").removeClass("dialog-toolbar"):undefined),buttons:(t.children(".dialog-button").length?t.children(".dialog-button").removeClass("dialog-button"):undefined)});
};
$.fn.dialog.defaults=$.extend({},$.fn.window.defaults,{title:"New Dialog",collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null});
})(jQuery);
(function($){
function _2c2(){
$(document).unbind(".messager").bind("keydown.messager",function(e){
if(e.keyCode==27){
$("body").children("div.messager-window").children("div.messager-body").each(function(){
$(this).dialog("close");
});
}else{
if(e.keyCode==9){
var win=$("body").children("div.messager-window");
if(!win.length){
return;
}
var _2c3=win.find(".messager-input,.messager-button .l-btn");
for(var i=0;i<_2c3.length;i++){
if($(_2c3[i]).is(":focus")){
$(_2c3[i>=_2c3.length-1?0:i+1]).focus();
return false;
}
}
}else{
if(e.keyCode==13){
var _2c4=$(e.target).closest("input.messager-input");
if(_2c4.length){
var dlg=_2c4.closest(".messager-body");
_2c5(dlg,_2c4.val());
}
}
}
}
});
};
function _2c6(){
$(document).unbind(".messager");
};
function _2c7(_2c8){
var opts=$.extend({},$.messager.defaults,{modal:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},title:"",width:300,height:150,minHeight:0,showType:"slide",showSpeed:600,content:_2c8.msg,timeout:4000},_2c8);
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},opts,{noheader:(opts.title?false:true),openAnimation:(opts.showType),closeAnimation:(opts.showType=="show"?"hide":opts.showType),openDuration:opts.showSpeed,closeDuration:opts.showSpeed,onOpen:function(){
dlg.dialog("dialog").hover(function(){
if(opts.timer){
clearTimeout(opts.timer);
}
},function(){
_2c9();
});
_2c9();
function _2c9(){
if(opts.timeout>0){
opts.timer=setTimeout(function(){
if(dlg.length&&dlg.data("dialog")){
dlg.dialog("close");
}
},opts.timeout);
}
};
if(_2c8.onOpen){
_2c8.onOpen.call(this);
}else{
opts.onOpen.call(this);
}
},onClose:function(){
if(opts.timer){
clearTimeout(opts.timer);
}
if(_2c8.onClose){
_2c8.onClose.call(this);
}else{
opts.onClose.call(this);
}
dlg.dialog("destroy");
}}));
dlg.dialog("dialog").css(opts.style);
dlg.dialog("open");
return dlg;
};
function _2ca(_2cb){
_2c2();
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},_2cb,{noheader:(_2cb.title?false:true),onClose:function(){
_2c6();
if(_2cb.onClose){
_2cb.onClose.call(this);
}
dlg.dialog("destroy");
}}));
var win=dlg.dialog("dialog").addClass("messager-window");
win.find(".dialog-button").addClass("messager-button").find("a:first").focus();
return dlg;
};
function _2c5(dlg,_2cc){
var opts=dlg.dialog("options");
dlg.dialog("close");
opts.fn(_2cc);
};
$.messager={show:function(_2cd){
return _2c7(_2cd);
},alert:function(_2ce,msg,icon,fn){
var opts=typeof _2ce=="object"?_2ce:{title:_2ce,msg:msg,icon:icon,fn:fn};
var cls=opts.icon?"messager-icon messager-"+opts.icon:"";
opts=$.extend({},$.messager.defaults,{content:"<div class=\""+cls+"\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c5(dlg);
}}];
}
var dlg=_2ca(opts);
return dlg;
},confirm:function(_2cf,msg,fn){
var opts=typeof _2cf=="object"?_2cf:{title:_2cf,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c5(dlg,true);
}},{text:opts.cancel,onClick:function(){
_2c5(dlg,false);
}}];
}
var dlg=_2ca(opts);
return dlg;
},prompt:function(_2d0,msg,fn){
var opts=typeof _2d0=="object"?_2d0:{title:_2d0,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2c5(dlg,dlg.find(".messager-input").val());
}},{text:opts.cancel,onClick:function(){
_2c5(dlg);
}}];
}
var dlg=_2ca(opts);
dlg.find(".messager-input").focus();
return dlg;
},progress:function(_2d1){
var _2d2={bar:function(){
return $("body>div.messager-window").find("div.messager-p-bar");
},close:function(){
var dlg=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");
if(dlg.length){
dlg.dialog("close");
}
}};
if(typeof _2d1=="string"){
var _2d3=_2d2[_2d1];
return _2d3();
}
_2d1=_2d1||{};
var opts=$.extend({},{title:"",minHeight:0,content:undefined,msg:"",text:undefined,interval:300},_2d1);
var dlg=_2ca($.extend({},$.messager.defaults,{content:"<div class=\"messager-progress\"><div class=\"messager-p-msg\">"+opts.msg+"</div><div class=\"messager-p-bar\"></div></div>",closable:false,doSize:false},opts,{onClose:function(){
if(this.timer){
clearInterval(this.timer);
}
if(_2d1.onClose){
_2d1.onClose.call(this);
}else{
$.messager.defaults.onClose.call(this);
}
}}));
var bar=dlg.find("div.messager-p-bar");
bar.progressbar({text:opts.text});
dlg.dialog("resize");
if(opts.interval){
dlg[0].timer=setInterval(function(){
var v=bar.progressbar("getValue");
v+=10;
if(v>100){
v=0;
}
bar.progressbar("setValue",v);
},opts.interval);
}
return dlg;
}};
$.messager.defaults=$.extend({},$.fn.dialog.defaults,{ok:"Ok",cancel:"Cancel",width:300,height:"auto",minHeight:150,modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,fn:function(){
}});
})(jQuery);
(function($){
function _2d4(_2d5,_2d6){
var _2d7=$.data(_2d5,"accordion");
var opts=_2d7.options;
var _2d8=_2d7.panels;
var cc=$(_2d5);
var _2d9=(opts.halign=="left"||opts.halign=="right");
cc.children(".panel-last").removeClass("panel-last");
cc.children(".panel:last").addClass("panel-last");
if(_2d6){
$.extend(opts,{width:_2d6.width,height:_2d6.height});
}
cc._size(opts);
var _2da=0;
var _2db="auto";
var _2dc=cc.find(">.panel>.accordion-header");
if(_2dc.length){
if(_2d9){
$(_2d8[0]).panel("resize",{width:cc.width(),height:cc.height()});
_2da=$(_2dc[0])._outerWidth();
}else{
_2da=$(_2dc[0]).css("height","")._outerHeight();
}
}
if(!isNaN(parseInt(opts.height))){
if(_2d9){
_2db=cc.width()-_2da*_2dc.length;
}else{
_2db=cc.height()-_2da*_2dc.length;
}
}
_2dd(true,_2db-_2dd(false));
function _2dd(_2de,_2df){
var _2e0=0;
for(var i=0;i<_2d8.length;i++){
var p=_2d8[i];
if(_2d9){
var h=p.panel("header")._outerWidth(_2da);
}else{
var h=p.panel("header")._outerHeight(_2da);
}
if(p.panel("options").collapsible==_2de){
var _2e1=isNaN(_2df)?undefined:(_2df+_2da*h.length);
if(_2d9){
p.panel("resize",{height:cc.height(),width:(_2de?_2e1:undefined)});
_2e0+=p.panel("panel")._outerWidth()-_2da*h.length;
}else{
p.panel("resize",{width:cc.width(),height:(_2de?_2e1:undefined)});
_2e0+=p.panel("panel").outerHeight()-_2da*h.length;
}
}
}
return _2e0;
};
};
function _2e2(_2e3,_2e4,_2e5,all){
var _2e6=$.data(_2e3,"accordion").panels;
var pp=[];
for(var i=0;i<_2e6.length;i++){
var p=_2e6[i];
if(_2e4){
if(p.panel("options")[_2e4]==_2e5){
pp.push(p);
}
}else{
if(p[0]==$(_2e5)[0]){
return i;
}
}
}
if(_2e4){
return all?pp:(pp.length?pp[0]:null);
}else{
return -1;
}
};
function _2e7(_2e8){
return _2e2(_2e8,"collapsed",false,true);
};
function _2e9(_2ea){
var pp=_2e7(_2ea);
return pp.length?pp[0]:null;
};
function _2eb(_2ec,_2ed){
return _2e2(_2ec,null,_2ed);
};
function _2ee(_2ef,_2f0){
var _2f1=$.data(_2ef,"accordion").panels;
if(typeof _2f0=="number"){
if(_2f0<0||_2f0>=_2f1.length){
return null;
}else{
return _2f1[_2f0];
}
}
return _2e2(_2ef,"title",_2f0);
};
function _2f2(_2f3){
var opts=$.data(_2f3,"accordion").options;
var cc=$(_2f3);
if(opts.border){
cc.removeClass("accordion-noborder");
}else{
cc.addClass("accordion-noborder");
}
};
function init(_2f4){
var _2f5=$.data(_2f4,"accordion");
var cc=$(_2f4);
cc.addClass("accordion");
_2f5.panels=[];
cc.children("div").each(function(){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
_2f5.panels.push(pp);
_2f7(_2f4,pp,opts);
});
cc.bind("_resize",function(e,_2f6){
if($(this).hasClass("easyui-fluid")||_2f6){
_2d4(_2f4);
}
return false;
});
};
function _2f7(_2f8,pp,_2f9){
var opts=$.data(_2f8,"accordion").options;
pp.panel($.extend({},{collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body",halign:opts.halign},_2f9,{onBeforeExpand:function(){
if(_2f9.onBeforeExpand){
if(_2f9.onBeforeExpand.call(this)==false){
return false;
}
}
if(!opts.multiple){
var all=$.grep(_2e7(_2f8),function(p){
return p.panel("options").collapsible;
});
for(var i=0;i<all.length;i++){
_301(_2f8,_2eb(_2f8,all[i]));
}
}
var _2fa=$(this).panel("header");
_2fa.addClass("accordion-header-selected");
_2fa.find(".accordion-collapse").removeClass("accordion-expand");
},onExpand:function(){
$(_2f8).find(">.panel-last>.accordion-header").removeClass("accordion-header-border");
if(_2f9.onExpand){
_2f9.onExpand.call(this);
}
opts.onSelect.call(_2f8,$(this).panel("options").title,_2eb(_2f8,this));
},onBeforeCollapse:function(){
if(_2f9.onBeforeCollapse){
if(_2f9.onBeforeCollapse.call(this)==false){
return false;
}
}
$(_2f8).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
var _2fb=$(this).panel("header");
_2fb.removeClass("accordion-header-selected");
_2fb.find(".accordion-collapse").addClass("accordion-expand");
},onCollapse:function(){
if(isNaN(parseInt(opts.height))){
$(_2f8).find(">.panel-last>.accordion-header").removeClass("accordion-header-border");
}
if(_2f9.onCollapse){
_2f9.onCollapse.call(this);
}
opts.onUnselect.call(_2f8,$(this).panel("options").title,_2eb(_2f8,this));
}}));
var _2fc=pp.panel("header");
var tool=_2fc.children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var t=$("<a href=\"javascript:;\"></a>").addClass("accordion-collapse accordion-expand").appendTo(tool);
t.bind("click",function(){
_2fd(pp);
return false;
});
pp.panel("options").collapsible?t.show():t.hide();
if(opts.halign=="left"||opts.halign=="right"){
t.hide();
}
_2fc.click(function(){
_2fd(pp);
return false;
});
function _2fd(p){
var _2fe=p.panel("options");
if(_2fe.collapsible){
var _2ff=_2eb(_2f8,p);
if(_2fe.collapsed){
_300(_2f8,_2ff);
}else{
_301(_2f8,_2ff);
}
}
};
};
function _300(_302,_303){
var p=_2ee(_302,_303);
if(!p){
return;
}
_304(_302);
var opts=$.data(_302,"accordion").options;
p.panel("expand",opts.animate);
};
function _301(_305,_306){
var p=_2ee(_305,_306);
if(!p){
return;
}
_304(_305);
var opts=$.data(_305,"accordion").options;
p.panel("collapse",opts.animate);
};
function _307(_308){
var opts=$.data(_308,"accordion").options;
$(_308).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
var p=_2e2(_308,"selected",true);
if(p){
_309(_2eb(_308,p));
}else{
_309(opts.selected);
}
function _309(_30a){
var _30b=opts.animate;
opts.animate=false;
_300(_308,_30a);
opts.animate=_30b;
};
};
function _304(_30c){
var _30d=$.data(_30c,"accordion").panels;
for(var i=0;i<_30d.length;i++){
_30d[i].stop(true,true);
}
};
function add(_30e,_30f){
var _310=$.data(_30e,"accordion");
var opts=_310.options;
var _311=_310.panels;
if(_30f.selected==undefined){
_30f.selected=true;
}
_304(_30e);
var pp=$("<div></div>").appendTo(_30e);
_311.push(pp);
_2f7(_30e,pp,_30f);
_2d4(_30e);
opts.onAdd.call(_30e,_30f.title,_311.length-1);
if(_30f.selected){
_300(_30e,_311.length-1);
}
};
function _312(_313,_314){
var _315=$.data(_313,"accordion");
var opts=_315.options;
var _316=_315.panels;
_304(_313);
var _317=_2ee(_313,_314);
var _318=_317.panel("options").title;
var _319=_2eb(_313,_317);
if(!_317){
return;
}
if(opts.onBeforeRemove.call(_313,_318,_319)==false){
return;
}
_316.splice(_319,1);
_317.panel("destroy");
if(_316.length){
_2d4(_313);
var curr=_2e9(_313);
if(!curr){
_300(_313,0);
}
}
opts.onRemove.call(_313,_318,_319);
};
$.fn.accordion=function(_31a,_31b){
if(typeof _31a=="string"){
return $.fn.accordion.methods[_31a](this,_31b);
}
_31a=_31a||{};
return this.each(function(){
var _31c=$.data(this,"accordion");
if(_31c){
$.extend(_31c.options,_31a);
}else{
$.data(this,"accordion",{options:$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_31a),accordion:$(this).addClass("accordion"),panels:[]});
init(this);
}
_2f2(this);
_2d4(this);
_307(this);
});
};
$.fn.accordion.methods={options:function(jq){
return $.data(jq[0],"accordion").options;
},panels:function(jq){
return $.data(jq[0],"accordion").panels;
},resize:function(jq,_31d){
return jq.each(function(){
_2d4(this,_31d);
});
},getSelections:function(jq){
return _2e7(jq[0]);
},getSelected:function(jq){
return _2e9(jq[0]);
},getPanel:function(jq,_31e){
return _2ee(jq[0],_31e);
},getPanelIndex:function(jq,_31f){
return _2eb(jq[0],_31f);
},select:function(jq,_320){
return jq.each(function(){
_300(this,_320);
});
},unselect:function(jq,_321){
return jq.each(function(){
_301(this,_321);
});
},add:function(jq,_322){
return jq.each(function(){
add(this,_322);
});
},remove:function(jq,_323){
return jq.each(function(){
_312(this,_323);
});
}};
$.fn.accordion.parseOptions=function(_324){
var t=$(_324);
return $.extend({},$.parser.parseOptions(_324,["width","height","halign",{fit:"boolean",border:"boolean",animate:"boolean",multiple:"boolean",selected:"number"}]));
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,multiple:false,selected:0,halign:"top",onSelect:function(_325,_326){
},onUnselect:function(_327,_328){
},onAdd:function(_329,_32a){
},onBeforeRemove:function(_32b,_32c){
},onRemove:function(_32d,_32e){
}};
})(jQuery);
(function($){
function _32f(c){
var w=0;
$(c).children().each(function(){
w+=$(this).outerWidth(true);
});
return w;
};
function _330(_331){
var opts=$.data(_331,"tabs").options;
if(!opts.showHeader){
return;
}
var _332=$(_331).children("div.tabs-header");
var tool=_332.children("div.tabs-tool:not(.tabs-tool-hidden)");
var _333=_332.children("div.tabs-scroller-left");
var _334=_332.children("div.tabs-scroller-right");
var wrap=_332.children("div.tabs-wrap");
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
if(!tool.length){
return;
}
tool._outerWidth(_332.width());
var _335={left:opts.tabPosition=="left"?"auto":0,right:opts.tabPosition=="left"?0:"auto",top:opts.toolPosition=="top"?0:"auto",bottom:opts.toolPosition=="top"?"auto":0};
var _336={marginTop:opts.toolPosition=="top"?tool.outerHeight():0};
tool.css(_335);
wrap.css(_336);
return;
}
var _337=_332.outerHeight();
if(opts.plain){
_337-=_337-_332.height();
}
tool._outerHeight(_337);
var _338=_32f(_332.find("ul.tabs"));
var _339=_332.width()-tool._outerWidth();
if(_338>_339){
_333.add(_334).show()._outerHeight(_337);
if(opts.toolPosition=="left"){
tool.css({left:_333.outerWidth(),right:""});
wrap.css({marginLeft:_333.outerWidth()+tool._outerWidth(),marginRight:_334._outerWidth(),width:_339-_333.outerWidth()-_334.outerWidth()});
}else{
tool.css({left:"",right:_334.outerWidth()});
wrap.css({marginLeft:_333.outerWidth(),marginRight:_334.outerWidth()+tool._outerWidth(),width:_339-_333.outerWidth()-_334.outerWidth()});
}
}else{
_333.add(_334).hide();
if(opts.toolPosition=="left"){
tool.css({left:0,right:""});
wrap.css({marginLeft:tool._outerWidth(),marginRight:0,width:_339});
}else{
tool.css({left:"",right:0});
wrap.css({marginLeft:0,marginRight:tool._outerWidth(),width:_339});
}
}
};
function _33a(_33b){
var opts=$.data(_33b,"tabs").options;
var _33c=$(_33b).children("div.tabs-header");
if(opts.tools){
if(typeof opts.tools=="string"){
$(opts.tools).addClass("tabs-tool").appendTo(_33c);
$(opts.tools).show();
}else{
_33c.children("div.tabs-tool").remove();
var _33d=$("<div class=\"tabs-tool\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"height:100%\"><tr></tr></table></div>").appendTo(_33c);
var tr=_33d.find("tr");
for(var i=0;i<opts.tools.length;i++){
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(opts.tools[i].handler||function(){
});
tool.linkbutton($.extend({},opts.tools[i],{plain:true}));
}
}
}else{
_33c.children("div.tabs-tool").remove();
}
};
function _33e(_33f,_340){
var _341=$.data(_33f,"tabs");
var opts=_341.options;
var cc=$(_33f);
if(!opts.doSize){
return;
}
if(_340){
$.extend(opts,{width:_340.width,height:_340.height});
}
cc._size(opts);
var _342=cc.children("div.tabs-header");
var _343=cc.children("div.tabs-panels");
var wrap=_342.find("div.tabs-wrap");
var ul=wrap.find(".tabs");
ul.children("li").removeClass("tabs-first tabs-last");
ul.children("li:first").addClass("tabs-first");
ul.children("li:last").addClass("tabs-last");
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
_342._outerWidth(opts.showHeader?opts.headerWidth:0);
_343._outerWidth(cc.width()-_342.outerWidth());
_342.add(_343)._size("height",isNaN(parseInt(opts.height))?"":cc.height());
wrap._outerWidth(_342.width());
ul._outerWidth(wrap.width()).css("height","");
}else{
_342.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool:not(.tabs-tool-hidden)").css("display",opts.showHeader?"block":"none");
_342._outerWidth(cc.width()).css("height","");
if(opts.showHeader){
_342.css("background-color","");
wrap.css("height","");
}else{
_342.css("background-color","transparent");
_342._outerHeight(0);
wrap._outerHeight(0);
}
ul._outerHeight(opts.tabHeight).css("width","");
ul._outerHeight(ul.outerHeight()-ul.height()-1+opts.tabHeight).css("width","");
_343._size("height",isNaN(parseInt(opts.height))?"":(cc.height()-_342.outerHeight()));
_343._size("width",cc.width());
}
if(_341.tabs.length){
var d1=ul.outerWidth(true)-ul.width();
var li=ul.children("li:first");
var d2=li.outerWidth(true)-li.width();
var _344=_342.width()-_342.children(".tabs-tool:not(.tabs-tool-hidden)")._outerWidth();
var _345=Math.floor((_344-d1-d2*_341.tabs.length)/_341.tabs.length);
$.map(_341.tabs,function(p){
_346(p,(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0)?_345:undefined);
});
if(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0){
var _347=_344-d1-_32f(ul);
_346(_341.tabs[_341.tabs.length-1],_345+_347);
}
}
_330(_33f);
function _346(p,_348){
var _349=p.panel("options");
var p_t=_349.tab.find("a.tabs-inner");
var _348=_348?_348:(parseInt(_349.tabWidth||opts.tabWidth||undefined));
if(_348){
p_t._outerWidth(_348);
}else{
p_t.css("width","");
}
p_t._outerHeight(opts.tabHeight);
p_t.css("lineHeight",p_t.height()+"px");
p_t.find(".easyui-fluid:visible").triggerHandler("_resize");
};
};
function _34a(_34b){
var opts=$.data(_34b,"tabs").options;
var tab=_34c(_34b);
if(tab){
var _34d=$(_34b).children("div.tabs-panels");
var _34e=opts.width=="auto"?"auto":_34d.width();
var _34f=opts.height=="auto"?"auto":_34d.height();
tab.panel("resize",{width:_34e,height:_34f});
}
};
function _350(_351){
var tabs=$.data(_351,"tabs").tabs;
var cc=$(_351).addClass("tabs-container");
var _352=$("<div class=\"tabs-panels\"></div>").insertBefore(cc);
cc.children("div").each(function(){
_352[0].appendChild(this);
});
cc[0].appendChild(_352[0]);
$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_351);
cc.children("div.tabs-panels").children("div").each(function(i){
var opts=$.extend({},$.parser.parseOptions(this),{disabled:($(this).attr("disabled")?true:undefined),selected:($(this).attr("selected")?true:undefined)});
_35f(_351,opts,$(this));
});
cc.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){
$(this).addClass("tabs-scroller-over");
},function(){
$(this).removeClass("tabs-scroller-over");
});
cc.bind("_resize",function(e,_353){
if($(this).hasClass("easyui-fluid")||_353){
_33e(_351);
_34a(_351);
}
return false;
});
};
function _354(_355){
var _356=$.data(_355,"tabs");
var opts=_356.options;
$(_355).children("div.tabs-header").unbind().bind("click",function(e){
if($(e.target).hasClass("tabs-scroller-left")){
$(_355).tabs("scrollBy",-opts.scrollIncrement);
}else{
if($(e.target).hasClass("tabs-scroller-right")){
$(_355).tabs("scrollBy",opts.scrollIncrement);
}else{
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return false;
}
var a=$(e.target).closest("a.tabs-close");
if(a.length){
_379(_355,_357(li));
}else{
if(li.length){
var _358=_357(li);
var _359=_356.tabs[_358].panel("options");
if(_359.collapsible){
_359.closed?_370(_355,_358):_390(_355,_358);
}else{
_370(_355,_358);
}
}
}
return false;
}
}
}).bind("contextmenu",function(e){
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return;
}
if(li.length){
opts.onContextMenu.call(_355,e,li.find("span.tabs-title").html(),_357(li));
}
});
function _357(li){
var _35a=0;
li.parent().children("li").each(function(i){
if(li[0]==this){
_35a=i;
return false;
}
});
return _35a;
};
};
function _35b(_35c){
var opts=$.data(_35c,"tabs").options;
var _35d=$(_35c).children("div.tabs-header");
var _35e=$(_35c).children("div.tabs-panels");
_35d.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right");
_35e.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right");
if(opts.tabPosition=="top"){
_35d.insertBefore(_35e);
}else{
if(opts.tabPosition=="bottom"){
_35d.insertAfter(_35e);
_35d.addClass("tabs-header-bottom");
_35e.addClass("tabs-panels-top");
}else{
if(opts.tabPosition=="left"){
_35d.addClass("tabs-header-left");
_35e.addClass("tabs-panels-right");
}else{
if(opts.tabPosition=="right"){
_35d.addClass("tabs-header-right");
_35e.addClass("tabs-panels-left");
}
}
}
}
if(opts.plain==true){
_35d.addClass("tabs-header-plain");
}else{
_35d.removeClass("tabs-header-plain");
}
_35d.removeClass("tabs-header-narrow").addClass(opts.narrow?"tabs-header-narrow":"");
var tabs=_35d.find(".tabs");
tabs.removeClass("tabs-pill").addClass(opts.pill?"tabs-pill":"");
tabs.removeClass("tabs-narrow").addClass(opts.narrow?"tabs-narrow":"");
tabs.removeClass("tabs-justified").addClass(opts.justified?"tabs-justified":"");
if(opts.border==true){
_35d.removeClass("tabs-header-noborder");
_35e.removeClass("tabs-panels-noborder");
}else{
_35d.addClass("tabs-header-noborder");
_35e.addClass("tabs-panels-noborder");
}
opts.doSize=true;
};
function _35f(_360,_361,pp){
_361=_361||{};
var _362=$.data(_360,"tabs");
var tabs=_362.tabs;
if(_361.index==undefined||_361.index>tabs.length){
_361.index=tabs.length;
}
if(_361.index<0){
_361.index=0;
}
var ul=$(_360).children("div.tabs-header").find("ul.tabs");
var _363=$(_360).children("div.tabs-panels");
var tab=$("<li>"+"<a href=\"javascript:;\" class=\"tabs-inner\">"+"<span class=\"tabs-title\"></span>"+"<span class=\"tabs-icon\"></span>"+"</a>"+"</li>");
if(!pp){
pp=$("<div></div>");
}
if(_361.index>=tabs.length){
tab.appendTo(ul);
pp.appendTo(_363);
tabs.push(pp);
}else{
tab.insertBefore(ul.children("li:eq("+_361.index+")"));
pp.insertBefore(_363.children("div.panel:eq("+_361.index+")"));
tabs.splice(_361.index,0,pp);
}
pp.panel($.extend({},_361,{tab:tab,border:false,noheader:true,closed:true,doSize:false,iconCls:(_361.icon?_361.icon:undefined),onLoad:function(){
if(_361.onLoad){
_361.onLoad.apply(this,arguments);
}
_362.options.onLoad.call(_360,$(this));
},onBeforeOpen:function(){
if(_361.onBeforeOpen){
if(_361.onBeforeOpen.call(this)==false){
return false;
}
}
var p=$(_360).tabs("getSelected");
if(p){
if(p[0]!=this){
$(_360).tabs("unselect",_36b(_360,p));
p=$(_360).tabs("getSelected");
if(p){
return false;
}
}else{
_34a(_360);
return false;
}
}
var _364=$(this).panel("options");
_364.tab.addClass("tabs-selected");
var wrap=$(_360).find(">div.tabs-header>div.tabs-wrap");
var left=_364.tab.position().left;
var _365=left+_364.tab.outerWidth();
if(left<0||_365>wrap.width()){
var _366=left-(wrap.width()-_364.tab.width())/2;
$(_360).tabs("scrollBy",_366);
}else{
$(_360).tabs("scrollBy",0);
}
var _367=$(this).panel("panel");
_367.css("display","block");
_34a(_360);
_367.css("display","none");
},onOpen:function(){
if(_361.onOpen){
_361.onOpen.call(this);
}
var _368=$(this).panel("options");
var _369=_36b(_360,this);
_362.selectHis.push(_369);
_362.options.onSelect.call(_360,_368.title,_369);
},onBeforeClose:function(){
if(_361.onBeforeClose){
if(_361.onBeforeClose.call(this)==false){
return false;
}
}
$(this).panel("options").tab.removeClass("tabs-selected");
},onClose:function(){
if(_361.onClose){
_361.onClose.call(this);
}
var _36a=$(this).panel("options");
_362.options.onUnselect.call(_360,_36a.title,_36b(_360,this));
}}));
$(_360).tabs("update",{tab:pp,options:pp.panel("options"),type:"header"});
};
function _36c(_36d,_36e){
var _36f=$.data(_36d,"tabs");
var opts=_36f.options;
if(_36e.selected==undefined){
_36e.selected=true;
}
_35f(_36d,_36e);
opts.onAdd.call(_36d,_36e.title,_36e.index);
if(_36e.selected){
_370(_36d,_36e.index);
}
};
function _371(_372,_373){
_373.type=_373.type||"all";
var _374=$.data(_372,"tabs").selectHis;
var pp=_373.tab;
var opts=pp.panel("options");
var _375=opts.title;
$.extend(opts,_373.options,{iconCls:(_373.options.icon?_373.options.icon:undefined)});
if(_373.type=="all"||_373.type=="body"){
pp.panel();
}
if(_373.type=="all"||_373.type=="header"){
var tab=opts.tab;
if(opts.header){
tab.find(".tabs-inner").html($(opts.header));
}else{
var _376=tab.find("span.tabs-title");
var _377=tab.find("span.tabs-icon");
_376.html(opts.title);
_377.attr("class","tabs-icon");
tab.find("a.tabs-close").remove();
if(opts.closable){
_376.addClass("tabs-closable");
$("<a href=\"javascript:;\" class=\"tabs-close\"></a>").appendTo(tab);
}else{
_376.removeClass("tabs-closable");
}
if(opts.iconCls){
_376.addClass("tabs-with-icon");
_377.addClass(opts.iconCls);
}else{
_376.removeClass("tabs-with-icon");
}
if(opts.tools){
var _378=tab.find("span.tabs-p-tool");
if(!_378.length){
var _378=$("<span class=\"tabs-p-tool\"></span>").insertAfter(tab.find("a.tabs-inner"));
}
if($.isArray(opts.tools)){
_378.empty();
for(var i=0;i<opts.tools.length;i++){
var t=$("<a href=\"javascript:;\"></a>").appendTo(_378);
t.addClass(opts.tools[i].iconCls);
if(opts.tools[i].handler){
t.bind("click",{handler:opts.tools[i].handler},function(e){
if($(this).parents("li").hasClass("tabs-disabled")){
return;
}
e.data.handler.call(this);
});
}
}
}else{
$(opts.tools).children().appendTo(_378);
}
var pr=_378.children().length*12;
if(opts.closable){
pr+=8;
_378.css("right","");
}else{
pr-=3;
_378.css("right","5px");
}
_376.css("padding-right",pr+"px");
}else{
tab.find("span.tabs-p-tool").remove();
_376.css("padding-right","");
}
}
}
if(opts.disabled){
opts.tab.addClass("tabs-disabled");
}else{
opts.tab.removeClass("tabs-disabled");
}
_33e(_372);
$.data(_372,"tabs").options.onUpdate.call(_372,opts.title,_36b(_372,pp));
};
function _379(_37a,_37b){
var _37c=$.data(_37a,"tabs");
var opts=_37c.options;
var tabs=_37c.tabs;
var _37d=_37c.selectHis;
if(!_37e(_37a,_37b)){
return;
}
var tab=_37f(_37a,_37b);
var _380=tab.panel("options").title;
var _381=_36b(_37a,tab);
if(opts.onBeforeClose.call(_37a,_380,_381)==false){
return;
}
var tab=_37f(_37a,_37b,true);
tab.panel("options").tab.remove();
tab.panel("destroy");
opts.onClose.call(_37a,_380,_381);
_33e(_37a);
var his=[];
for(var i=0;i<_37d.length;i++){
var _382=_37d[i];
if(_382!=_381){
his.push(_382>_381?_382-1:_382);
}
}
_37c.selectHis=his;
var _383=$(_37a).tabs("getSelected");
if(!_383&&his.length){
_381=_37c.selectHis.pop();
$(_37a).tabs("select",_381);
}
};
function _37f(_384,_385,_386){
var tabs=$.data(_384,"tabs").tabs;
var tab=null;
if(typeof _385=="number"){
if(_385>=0&&_385<tabs.length){
tab=tabs[_385];
if(_386){
tabs.splice(_385,1);
}
}
}else{
var tmp=$("<span></span>");
for(var i=0;i<tabs.length;i++){
var p=tabs[i];
tmp.html(p.panel("options").title);
var _387=tmp.text();
tmp.html(_385);
_385=tmp.text();
if(_387==_385){
tab=p;
if(_386){
tabs.splice(i,1);
}
break;
}
}
tmp.remove();
}
return tab;
};
function _36b(_388,tab){
var tabs=$.data(_388,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i][0]==$(tab)[0]){
return i;
}
}
return -1;
};
function _34c(_389){
var tabs=$.data(_389,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").tab.hasClass("tabs-selected")){
return tab;
}
}
return null;
};
function _38a(_38b){
var _38c=$.data(_38b,"tabs");
var tabs=_38c.tabs;
for(var i=0;i<tabs.length;i++){
var opts=tabs[i].panel("options");
if(opts.selected&&!opts.disabled){
_370(_38b,i);
return;
}
}
_370(_38b,_38c.options.selected);
};
function _370(_38d,_38e){
var p=_37f(_38d,_38e);
if(p&&!p.is(":visible")){
_38f(_38d);
if(!p.panel("options").disabled){
p.panel("open");
}
}
};
function _390(_391,_392){
var p=_37f(_391,_392);
if(p&&p.is(":visible")){
_38f(_391);
p.panel("close");
}
};
function _38f(_393){
$(_393).children("div.tabs-panels").each(function(){
$(this).stop(true,true);
});
};
function _37e(_394,_395){
return _37f(_394,_395)!=null;
};
function _396(_397,_398){
var opts=$.data(_397,"tabs").options;
opts.showHeader=_398;
$(_397).tabs("resize");
};
function _399(_39a,_39b){
var tool=$(_39a).find(">.tabs-header>.tabs-tool");
if(_39b){
tool.removeClass("tabs-tool-hidden").show();
}else{
tool.addClass("tabs-tool-hidden").hide();
}
$(_39a).tabs("resize").tabs("scrollBy",0);
};
$.fn.tabs=function(_39c,_39d){
if(typeof _39c=="string"){
return $.fn.tabs.methods[_39c](this,_39d);
}
_39c=_39c||{};
return this.each(function(){
var _39e=$.data(this,"tabs");
if(_39e){
$.extend(_39e.options,_39c);
}else{
$.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),_39c),tabs:[],selectHis:[]});
_350(this);
}
_33a(this);
_35b(this);
_33e(this);
_354(this);
_38a(this);
});
};
$.fn.tabs.methods={options:function(jq){
var cc=jq[0];
var opts=$.data(cc,"tabs").options;
var s=_34c(cc);
opts.selected=s?_36b(cc,s):-1;
return opts;
},tabs:function(jq){
return $.data(jq[0],"tabs").tabs;
},resize:function(jq,_39f){
return jq.each(function(){
_33e(this,_39f);
_34a(this);
});
},add:function(jq,_3a0){
return jq.each(function(){
_36c(this,_3a0);
});
},close:function(jq,_3a1){
return jq.each(function(){
_379(this,_3a1);
});
},getTab:function(jq,_3a2){
return _37f(jq[0],_3a2);
},getTabIndex:function(jq,tab){
return _36b(jq[0],tab);
},getSelected:function(jq){
return _34c(jq[0]);
},select:function(jq,_3a3){
return jq.each(function(){
_370(this,_3a3);
});
},unselect:function(jq,_3a4){
return jq.each(function(){
_390(this,_3a4);
});
},exists:function(jq,_3a5){
return _37e(jq[0],_3a5);
},update:function(jq,_3a6){
return jq.each(function(){
_371(this,_3a6);
});
},enableTab:function(jq,_3a7){
return jq.each(function(){
var opts=$(this).tabs("getTab",_3a7).panel("options");
opts.tab.removeClass("tabs-disabled");
opts.disabled=false;
});
},disableTab:function(jq,_3a8){
return jq.each(function(){
var opts=$(this).tabs("getTab",_3a8).panel("options");
opts.tab.addClass("tabs-disabled");
opts.disabled=true;
});
},showHeader:function(jq){
return jq.each(function(){
_396(this,true);
});
},hideHeader:function(jq){
return jq.each(function(){
_396(this,false);
});
},showTool:function(jq){
return jq.each(function(){
_399(this,true);
});
},hideTool:function(jq){
return jq.each(function(){
_399(this,false);
});
},scrollBy:function(jq,_3a9){
return jq.each(function(){
var opts=$(this).tabs("options");
var wrap=$(this).find(">div.tabs-header>div.tabs-wrap");
var pos=Math.min(wrap._scrollLeft()+_3a9,_3aa());
wrap.animate({scrollLeft:pos},opts.scrollDuration);
function _3aa(){
var w=0;
var ul=wrap.children("ul");
ul.children("li").each(function(){
w+=$(this).outerWidth(true);
});
return w-wrap.width()+(ul.outerWidth()-ul.width());
};
});
}};
$.fn.tabs.parseOptions=function(_3ab){
return $.extend({},$.parser.parseOptions(_3ab,["tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean"},{headerWidth:"number",tabWidth:"number",tabHeight:"number",selected:"number"},{showHeader:"boolean",justified:"boolean",narrow:"boolean",pill:"boolean"}]));
};
$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,tabWidth:"auto",tabHeight:32,selected:0,showHeader:true,plain:false,fit:false,border:true,justified:false,narrow:false,pill:false,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function(_3ac){
},onSelect:function(_3ad,_3ae){
},onUnselect:function(_3af,_3b0){
},onBeforeClose:function(_3b1,_3b2){
},onClose:function(_3b3,_3b4){
},onAdd:function(_3b5,_3b6){
},onUpdate:function(_3b7,_3b8){
},onContextMenu:function(e,_3b9,_3ba){
}};
})(jQuery);
(function($){
var _3bb=false;
function _3bc(_3bd,_3be){
var _3bf=$.data(_3bd,"layout");
var opts=_3bf.options;
var _3c0=_3bf.panels;
var cc=$(_3bd);
if(_3be){
$.extend(opts,{width:_3be.width,height:_3be.height});
}
if(_3bd.tagName.toLowerCase()=="body"){
cc._size("fit");
}else{
cc._size(opts);
}
var cpos={top:0,left:0,width:cc.width(),height:cc.height()};
_3c1(_3c2(_3c0.expandNorth)?_3c0.expandNorth:_3c0.north,"n");
_3c1(_3c2(_3c0.expandSouth)?_3c0.expandSouth:_3c0.south,"s");
_3c3(_3c2(_3c0.expandEast)?_3c0.expandEast:_3c0.east,"e");
_3c3(_3c2(_3c0.expandWest)?_3c0.expandWest:_3c0.west,"w");
_3c0.center.panel("resize",cpos);
function _3c1(pp,type){
if(!pp.length||!_3c2(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:cc.width(),height:opts.height});
var _3c4=pp.panel("panel").outerHeight();
pp.panel("move",{left:0,top:(type=="n"?0:cc.height()-_3c4)});
cpos.height-=_3c4;
if(type=="n"){
cpos.top+=_3c4;
if(!opts.split&&opts.border){
cpos.top--;
}
}
if(!opts.split&&opts.border){
cpos.height++;
}
};
function _3c3(pp,type){
if(!pp.length||!_3c2(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:opts.width,height:cpos.height});
var _3c5=pp.panel("panel").outerWidth();
pp.panel("move",{left:(type=="e"?cc.width()-_3c5:0),top:cpos.top});
cpos.width-=_3c5;
if(type=="w"){
cpos.left+=_3c5;
if(!opts.split&&opts.border){
cpos.left--;
}
}
if(!opts.split&&opts.border){
cpos.width++;
}
};
};
function init(_3c6){
var cc=$(_3c6);
cc.addClass("layout");
function _3c7(el){
var _3c8=$.fn.layout.parsePanelOptions(el);
if("north,south,east,west,center".indexOf(_3c8.region)>=0){
_3cb(_3c6,_3c8,el);
}
};
var opts=cc.layout("options");
var _3c9=opts.onAdd;
opts.onAdd=function(){
};
cc.find(">div,>form>div").each(function(){
_3c7(this);
});
opts.onAdd=_3c9;
cc.append("<div class=\"layout-split-proxy-h\"></div><div class=\"layout-split-proxy-v\"></div>");
cc.bind("_resize",function(e,_3ca){
if($(this).hasClass("easyui-fluid")||_3ca){
_3bc(_3c6);
}
return false;
});
};
function _3cb(_3cc,_3cd,el){
_3cd.region=_3cd.region||"center";
var _3ce=$.data(_3cc,"layout").panels;
var cc=$(_3cc);
var dir=_3cd.region;
if(_3ce[dir].length){
return;
}
var pp=$(el);
if(!pp.length){
pp=$("<div></div>").appendTo(cc);
}
var _3cf=$.extend({},$.fn.layout.paneldefaults,{width:(pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto"),height:(pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto"),doSize:false,collapsible:true,onOpen:function(){
var tool=$(this).panel("header").children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var _3d0={north:"up",south:"down",east:"right",west:"left"};
if(!_3d0[dir]){
return;
}
var _3d1="layout-button-"+_3d0[dir];
var t=tool.children("a."+_3d1);
if(!t.length){
t=$("<a href=\"javascript:;\"></a>").addClass(_3d1).appendTo(tool);
t.bind("click",{dir:dir},function(e){
_3e8(_3cc,e.data.dir);
return false;
});
}
$(this).panel("options").collapsible?t.show():t.hide();
}},_3cd,{cls:((_3cd.cls||"")+" layout-panel layout-panel-"+dir),bodyCls:((_3cd.bodyCls||"")+" layout-body")});
pp.panel(_3cf);
_3ce[dir]=pp;
var _3d2={north:"s",south:"n",east:"w",west:"e"};
var _3d3=pp.panel("panel");
if(pp.panel("options").split){
_3d3.addClass("layout-split-"+dir);
}
_3d3.resizable($.extend({},{handles:(_3d2[dir]||""),disabled:(!pp.panel("options").split),onStartResize:function(e){
_3bb=true;
if(dir=="north"||dir=="south"){
var _3d4=$(">div.layout-split-proxy-v",_3cc);
}else{
var _3d4=$(">div.layout-split-proxy-h",_3cc);
}
var top=0,left=0,_3d5=0,_3d6=0;
var pos={display:"block"};
if(dir=="north"){
pos.top=parseInt(_3d3.css("top"))+_3d3.outerHeight()-_3d4.height();
pos.left=parseInt(_3d3.css("left"));
pos.width=_3d3.outerWidth();
pos.height=_3d4.height();
}else{
if(dir=="south"){
pos.top=parseInt(_3d3.css("top"));
pos.left=parseInt(_3d3.css("left"));
pos.width=_3d3.outerWidth();
pos.height=_3d4.height();
}else{
if(dir=="east"){
pos.top=parseInt(_3d3.css("top"))||0;
pos.left=parseInt(_3d3.css("left"))||0;
pos.width=_3d4.width();
pos.height=_3d3.outerHeight();
}else{
if(dir=="west"){
pos.top=parseInt(_3d3.css("top"))||0;
pos.left=_3d3.outerWidth()-_3d4.width();
pos.width=_3d4.width();
pos.height=_3d3.outerHeight();
}
}
}
}
_3d4.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(dir=="north"||dir=="south"){
var _3d7=_3d8(this);
$(this).resizable("options").maxHeight=_3d7;
var _3d9=$(">div.layout-split-proxy-v",_3cc);
var top=dir=="north"?e.data.height-_3d9.height():$(_3cc).height()-e.data.height;
_3d9.css("top",top);
}else{
var _3da=_3d8(this);
$(this).resizable("options").maxWidth=_3da;
var _3d9=$(">div.layout-split-proxy-h",_3cc);
var left=dir=="west"?e.data.width-_3d9.width():$(_3cc).width()-e.data.width;
_3d9.css("left",left);
}
return false;
},onStopResize:function(e){
cc.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide();
pp.panel("resize",e.data);
_3bc(_3cc);
_3bb=false;
cc.find(">div.layout-mask").remove();
}},_3cd));
cc.layout("options").onAdd.call(_3cc,dir);
function _3d8(p){
var _3db="expand"+dir.substring(0,1).toUpperCase()+dir.substring(1);
var _3dc=_3ce["center"];
var _3dd=(dir=="north"||dir=="south")?"minHeight":"minWidth";
var _3de=(dir=="north"||dir=="south")?"maxHeight":"maxWidth";
var _3df=(dir=="north"||dir=="south")?"_outerHeight":"_outerWidth";
var _3e0=$.parser.parseValue(_3de,_3ce[dir].panel("options")[_3de],$(_3cc));
var _3e1=$.parser.parseValue(_3dd,_3dc.panel("options")[_3dd],$(_3cc));
var _3e2=_3dc.panel("panel")[_3df]()-_3e1;
if(_3c2(_3ce[_3db])){
_3e2+=_3ce[_3db][_3df]()-1;
}else{
_3e2+=$(p)[_3df]();
}
if(_3e2>_3e0){
_3e2=_3e0;
}
return _3e2;
};
};
function _3e3(_3e4,_3e5){
var _3e6=$.data(_3e4,"layout").panels;
if(_3e6[_3e5].length){
_3e6[_3e5].panel("destroy");
_3e6[_3e5]=$();
var _3e7="expand"+_3e5.substring(0,1).toUpperCase()+_3e5.substring(1);
if(_3e6[_3e7]){
_3e6[_3e7].panel("destroy");
_3e6[_3e7]=undefined;
}
$(_3e4).layout("options").onRemove.call(_3e4,_3e5);
}
};
function _3e8(_3e9,_3ea,_3eb){
if(_3eb==undefined){
_3eb="normal";
}
var _3ec=$.data(_3e9,"layout").panels;
var p=_3ec[_3ea];
var _3ed=p.panel("options");
if(_3ed.onBeforeCollapse.call(p)==false){
return;
}
var _3ee="expand"+_3ea.substring(0,1).toUpperCase()+_3ea.substring(1);
if(!_3ec[_3ee]){
_3ec[_3ee]=_3ef(_3ea);
var ep=_3ec[_3ee].panel("panel");
if(!_3ed.expandMode){
ep.css("cursor","default");
}else{
ep.bind("click",function(){
if(_3ed.expandMode=="dock"){
_3fb(_3e9,_3ea);
}else{
p.panel("expand",false).panel("open");
var _3f0=_3f1();
p.panel("resize",_3f0.collapse);
p.panel("panel").unbind(".layout").bind("mouseleave.layout",{region:_3ea},function(e){
$(this).stop(true,true);
if(_3bb==true){
return;
}
if($("body>div.combo-p>div.combo-panel:visible").length){
return;
}
_3e8(_3e9,e.data.region);
});
p.panel("panel").animate(_3f0.expand,function(){
$(_3e9).layout("options").onExpand.call(_3e9,_3ea);
});
}
return false;
});
}
}
var _3f2=_3f1();
if(!_3c2(_3ec[_3ee])){
_3ec.center.panel("resize",_3f2.resizeC);
}
p.panel("panel").animate(_3f2.collapse,_3eb,function(){
p.panel("collapse",false).panel("close");
_3ec[_3ee].panel("open").panel("resize",_3f2.expandP);
$(this).unbind(".layout");
$(_3e9).layout("options").onCollapse.call(_3e9,_3ea);
});
function _3ef(dir){
var _3f3={"east":"left","west":"right","north":"down","south":"up"};
var isns=(_3ed.region=="north"||_3ed.region=="south");
var icon="layout-button-"+_3f3[dir];
var p=$("<div></div>").appendTo(_3e9);
p.panel($.extend({},$.fn.layout.paneldefaults,{cls:("layout-expand layout-expand-"+dir),title:"&nbsp;",titleDirection:_3ed.titleDirection,iconCls:(_3ed.hideCollapsedContent?null:_3ed.iconCls),closed:true,minWidth:0,minHeight:0,doSize:false,region:_3ed.region,collapsedSize:_3ed.collapsedSize,noheader:(!isns&&_3ed.hideExpandTool),tools:((isns&&_3ed.hideExpandTool)?null:[{iconCls:icon,handler:function(){
_3fb(_3e9,_3ea);
return false;
}}]),onResize:function(){
var _3f4=$(this).children(".layout-expand-title");
if(_3f4.length){
_3f4._outerWidth($(this).height());
var left=($(this).width()-Math.min(_3f4._outerWidth(),_3f4._outerHeight()))/2;
var top=Math.max(_3f4._outerWidth(),_3f4._outerHeight());
if(_3f4.hasClass("layout-expand-title-down")){
left+=Math.min(_3f4._outerWidth(),_3f4._outerHeight());
top=0;
}
_3f4.css({left:(left+"px"),top:(top+"px")});
}
}}));
if(!_3ed.hideCollapsedContent){
var _3f5=typeof _3ed.collapsedContent=="function"?_3ed.collapsedContent.call(p[0],_3ed.title):_3ed.collapsedContent;
isns?p.panel("setTitle",_3f5):p.html(_3f5);
}
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
function _3f1(){
var cc=$(_3e9);
var _3f6=_3ec.center.panel("options");
var _3f7=_3ed.collapsedSize;
if(_3ea=="east"){
var _3f8=p.panel("panel")._outerWidth();
var _3f9=_3f6.width+_3f8-_3f7;
if(_3ed.split||!_3ed.border){
_3f9++;
}
return {resizeC:{width:_3f9},expand:{left:cc.width()-_3f8},expandP:{top:_3f6.top,left:cc.width()-_3f7,width:_3f7,height:_3f6.height},collapse:{left:cc.width(),top:_3f6.top,height:_3f6.height}};
}else{
if(_3ea=="west"){
var _3f8=p.panel("panel")._outerWidth();
var _3f9=_3f6.width+_3f8-_3f7;
if(_3ed.split||!_3ed.border){
_3f9++;
}
return {resizeC:{width:_3f9,left:_3f7-1},expand:{left:0},expandP:{left:0,top:_3f6.top,width:_3f7,height:_3f6.height},collapse:{left:-_3f8,top:_3f6.top,height:_3f6.height}};
}else{
if(_3ea=="north"){
var _3fa=p.panel("panel")._outerHeight();
var hh=_3f6.height;
if(!_3c2(_3ec.expandNorth)){
hh+=_3fa-_3f7+((_3ed.split||!_3ed.border)?1:0);
}
_3ec.east.add(_3ec.west).add(_3ec.expandEast).add(_3ec.expandWest).panel("resize",{top:_3f7-1,height:hh});
return {resizeC:{top:_3f7-1,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:_3f7},collapse:{top:-_3fa,width:cc.width()}};
}else{
if(_3ea=="south"){
var _3fa=p.panel("panel")._outerHeight();
var hh=_3f6.height;
if(!_3c2(_3ec.expandSouth)){
hh+=_3fa-_3f7+((_3ed.split||!_3ed.border)?1:0);
}
_3ec.east.add(_3ec.west).add(_3ec.expandEast).add(_3ec.expandWest).panel("resize",{height:hh});
return {resizeC:{height:hh},expand:{top:cc.height()-_3fa},expandP:{top:cc.height()-_3f7,left:0,width:cc.width(),height:_3f7},collapse:{top:cc.height(),width:cc.width()}};
}
}
}
}
};
};
function _3fb(_3fc,_3fd){
var _3fe=$.data(_3fc,"layout").panels;
var p=_3fe[_3fd];
var _3ff=p.panel("options");
if(_3ff.onBeforeExpand.call(p)==false){
return;
}
var _400="expand"+_3fd.substring(0,1).toUpperCase()+_3fd.substring(1);
if(_3fe[_400]){
_3fe[_400].panel("close");
p.panel("panel").stop(true,true);
p.panel("expand",false).panel("open");
var _401=_402();
p.panel("resize",_401.collapse);
p.panel("panel").animate(_401.expand,function(){
_3bc(_3fc);
$(_3fc).layout("options").onExpand.call(_3fc,_3fd);
});
}
function _402(){
var cc=$(_3fc);
var _403=_3fe.center.panel("options");
if(_3fd=="east"&&_3fe.expandEast){
return {collapse:{left:cc.width(),top:_403.top,height:_403.height},expand:{left:cc.width()-p.panel("panel")._outerWidth()}};
}else{
if(_3fd=="west"&&_3fe.expandWest){
return {collapse:{left:-p.panel("panel")._outerWidth(),top:_403.top,height:_403.height},expand:{left:0}};
}else{
if(_3fd=="north"&&_3fe.expandNorth){
return {collapse:{top:-p.panel("panel")._outerHeight(),width:cc.width()},expand:{top:0}};
}else{
if(_3fd=="south"&&_3fe.expandSouth){
return {collapse:{top:cc.height(),width:cc.width()},expand:{top:cc.height()-p.panel("panel")._outerHeight()}};
}
}
}
}
};
};
function _3c2(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
function _404(_405){
var _406=$.data(_405,"layout");
var opts=_406.options;
var _407=_406.panels;
var _408=opts.onCollapse;
opts.onCollapse=function(){
};
_409("east");
_409("west");
_409("north");
_409("south");
opts.onCollapse=_408;
function _409(_40a){
var p=_407[_40a];
if(p.length&&p.panel("options").collapsed){
_3e8(_405,_40a,0);
}
};
};
function _40b(_40c,_40d,_40e){
var p=$(_40c).layout("panel",_40d);
p.panel("options").split=_40e;
var cls="layout-split-"+_40d;
var _40f=p.panel("panel").removeClass(cls);
if(_40e){
_40f.addClass(cls);
}
_40f.resizable({disabled:(!_40e)});
_3bc(_40c);
};
$.fn.layout=function(_410,_411){
if(typeof _410=="string"){
return $.fn.layout.methods[_410](this,_411);
}
_410=_410||{};
return this.each(function(){
var _412=$.data(this,"layout");
if(_412){
$.extend(_412.options,_410);
}else{
var opts=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_410);
$.data(this,"layout",{options:opts,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});
init(this);
}
_3bc(this);
_404(this);
});
};
$.fn.layout.methods={options:function(jq){
return $.data(jq[0],"layout").options;
},resize:function(jq,_413){
return jq.each(function(){
_3bc(this,_413);
});
},panel:function(jq,_414){
return $.data(jq[0],"layout").panels[_414];
},collapse:function(jq,_415){
return jq.each(function(){
_3e8(this,_415);
});
},expand:function(jq,_416){
return jq.each(function(){
_3fb(this,_416);
});
},add:function(jq,_417){
return jq.each(function(){
_3cb(this,_417);
_3bc(this);
if($(this).layout("panel",_417.region).panel("options").collapsed){
_3e8(this,_417.region,0);
}
});
},remove:function(jq,_418){
return jq.each(function(){
_3e3(this,_418);
_3bc(this);
});
},split:function(jq,_419){
return jq.each(function(){
_40b(this,_419,true);
});
},unsplit:function(jq,_41a){
return jq.each(function(){
_40b(this,_41a,false);
});
}};
$.fn.layout.parseOptions=function(_41b){
return $.extend({},$.parser.parseOptions(_41b,[{fit:"boolean"}]));
};
$.fn.layout.defaults={fit:false,onExpand:function(_41c){
},onCollapse:function(_41d){
},onAdd:function(_41e){
},onRemove:function(_41f){
}};
$.fn.layout.parsePanelOptions=function(_420){
var t=$(_420);
return $.extend({},$.fn.panel.parseOptions(_420),$.parser.parseOptions(_420,["region",{split:"boolean",collpasedSize:"number",minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number"}]));
};
$.fn.layout.paneldefaults=$.extend({},$.fn.panel.defaults,{region:null,split:false,collapsedSize:32,expandMode:"float",hideExpandTool:false,hideCollapsedContent:true,collapsedContent:function(_421){
var p=$(this);
var opts=p.panel("options");
if(opts.region=="north"||opts.region=="south"){
return _421;
}
var cc=[];
if(opts.iconCls){
cc.push("<div class=\"panel-icon "+opts.iconCls+"\"></div>");
}
cc.push("<div class=\"panel-title layout-expand-title");
cc.push(" layout-expand-title-"+opts.titleDirection);
cc.push(opts.iconCls?" layout-expand-with-icon":"");
cc.push("\">");
cc.push(_421);
cc.push("</div>");
return cc.join("");
},minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".menu").bind("mousedown.menu",function(e){
var m=$(e.target).closest("div.menu,div.combo-p");
if(m.length){
return;
}
$("body>div.menu-top:visible").not(".menu-inline").menu("hide");
_422($("body>div.menu:visible").not(".menu-inline"));
});
});
function init(_423){
var opts=$.data(_423,"menu").options;
$(_423).addClass("menu-top");
opts.inline?$(_423).addClass("menu-inline"):$(_423).appendTo("body");
$(_423).bind("_resize",function(e,_424){
if($(this).hasClass("easyui-fluid")||_424){
$(_423).menu("resize",_423);
}
return false;
});
var _425=_426($(_423));
for(var i=0;i<_425.length;i++){
_429(_423,_425[i]);
}
function _426(menu){
var _427=[];
menu.addClass("menu");
_427.push(menu);
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
var _428=$(this).children("div");
if(_428.length){
_428.appendTo("body");
this.submenu=_428;
var mm=_426(_428);
_427=_427.concat(mm);
}
});
}
return _427;
};
};
function _429(_42a,div){
var menu=$(div).addClass("menu");
if(!menu.data("menu")){
menu.data("menu",{options:$.parser.parseOptions(menu[0],["width","height"])});
}
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
_42b(_42a,this);
});
$("<div class=\"menu-line\"></div>").prependTo(menu);
}
_42c(_42a,menu);
if(!menu.hasClass("menu-inline")){
menu.hide();
}
_42d(_42a,menu);
};
function _42b(_42e,div,_42f){
var item=$(div);
var _430=$.extend({},$.parser.parseOptions(item[0],["id","name","iconCls","href",{separator:"boolean"}]),{disabled:(item.attr("disabled")?true:undefined),text:$.trim(item.html()),onclick:item[0].onclick},_42f||{});
_430.onclick=_430.onclick||_430.handler||null;
item.data("menuitem",{options:_430});
if(_430.separator){
item.addClass("menu-sep");
}
if(!item.hasClass("menu-sep")){
item.addClass("menu-item");
item.empty().append($("<div class=\"menu-text\"></div>").html(_430.text));
if(_430.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_430.iconCls).appendTo(item);
}
if(_430.id){
item.attr("id",_430.id);
}
if(_430.onclick){
if(typeof _430.onclick=="string"){
item.attr("onclick",_430.onclick);
}else{
item[0].onclick=eval(_430.onclick);
}
}
if(_430.disabled){
_431(_42e,item[0],true);
}
if(item[0].submenu){
$("<div class=\"menu-rightarrow\"></div>").appendTo(item);
}
}
};
function _42c(_432,menu){
var opts=$.data(_432,"menu").options;
var _433=menu.attr("style")||"";
var _434=menu.is(":visible");
menu.css({display:"block",left:-10000,height:"auto",overflow:"hidden"});
menu.find(".menu-item").each(function(){
$(this)._outerHeight(opts.itemHeight);
$(this).find(".menu-text").css({height:(opts.itemHeight-2)+"px",lineHeight:(opts.itemHeight-2)+"px"});
});
menu.removeClass("menu-noline").addClass(opts.noline?"menu-noline":"");
var _435=menu.data("menu").options;
var _436=_435.width;
var _437=_435.height;
if(isNaN(parseInt(_436))){
_436=0;
menu.find("div.menu-text").each(function(){
if(_436<$(this).outerWidth()){
_436=$(this).outerWidth();
}
});
_436=_436?_436+40:"";
}
var _438=menu.outerHeight();
if(isNaN(parseInt(_437))){
_437=_438;
if(menu.hasClass("menu-top")&&opts.alignTo){
var at=$(opts.alignTo);
var h1=at.offset().top-$(document).scrollTop();
var h2=$(window)._outerHeight()+$(document).scrollTop()-at.offset().top-at._outerHeight();
_437=Math.min(_437,Math.max(h1,h2));
}else{
if(_437>$(window)._outerHeight()){
_437=$(window).height();
}
}
}
menu.attr("style",_433);
menu.show();
menu._size($.extend({},_435,{width:_436,height:_437,minWidth:_435.minWidth||opts.minWidth,maxWidth:_435.maxWidth||opts.maxWidth}));
menu.find(".easyui-fluid").triggerHandler("_resize",[true]);
menu.css("overflow",menu.outerHeight()<_438?"auto":"hidden");
menu.children("div.menu-line")._outerHeight(_438-2);
if(!_434){
menu.hide();
}
};
function _42d(_439,menu){
var _43a=$.data(_439,"menu");
var opts=_43a.options;
menu.unbind(".menu");
for(var _43b in opts.events){
menu.bind(_43b+".menu",{target:_439},opts.events[_43b]);
}
};
function _43c(e){
var _43d=e.data.target;
var _43e=$.data(_43d,"menu");
if(_43e.timer){
clearTimeout(_43e.timer);
_43e.timer=null;
}
};
function _43f(e){
var _440=e.data.target;
var _441=$.data(_440,"menu");
if(_441.options.hideOnUnhover){
_441.timer=setTimeout(function(){
_442(_440,$(_440).hasClass("menu-inline"));
},_441.options.duration);
}
};
function _443(e){
var _444=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
item.siblings().each(function(){
if(this.submenu){
_422(this.submenu);
}
$(this).removeClass("menu-active");
});
item.addClass("menu-active");
if(item.hasClass("menu-item-disabled")){
item.addClass("menu-active-disabled");
return;
}
var _445=item[0].submenu;
if(_445){
$(_444).menu("show",{menu:_445,parent:item});
}
}
};
function _446(e){
var item=$(e.target).closest(".menu-item");
if(item.length){
item.removeClass("menu-active menu-active-disabled");
var _447=item[0].submenu;
if(_447){
if(e.pageX>=parseInt(_447.css("left"))){
item.addClass("menu-active");
}else{
_422(_447);
}
}else{
item.removeClass("menu-active");
}
}
};
function _448(e){
var _449=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
var opts=$(_449).data("menu").options;
var _44a=item.data("menuitem").options;
if(_44a.disabled){
return;
}
if(!item[0].submenu){
_442(_449,opts.inline);
if(_44a.href){
location.href=_44a.href;
}
}
item.trigger("mouseenter");
opts.onClick.call(_449,$(_449).menu("getItem",item[0]));
}
};
function _442(_44b,_44c){
var _44d=$.data(_44b,"menu");
if(_44d){
if($(_44b).is(":visible")){
_422($(_44b));
if(_44c){
$(_44b).show();
}else{
_44d.options.onHide.call(_44b);
}
}
}
return false;
};
function _44e(_44f,_450){
_450=_450||{};
var left,top;
var opts=$.data(_44f,"menu").options;
var menu=$(_450.menu||_44f);
$(_44f).menu("resize",menu[0]);
if(menu.hasClass("menu-top")){
$.extend(opts,_450);
left=opts.left;
top=opts.top;
if(opts.alignTo){
var at=$(opts.alignTo);
left=at.offset().left;
top=at.offset().top+at._outerHeight();
if(opts.align=="right"){
left+=at.outerWidth()-menu.outerWidth();
}
}
if(left+menu.outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-menu.outerWidth()-5;
}
if(left<0){
left=0;
}
top=_451(top,opts.alignTo);
}else{
var _452=_450.parent;
left=_452.offset().left+_452.outerWidth()-2;
if(left+menu.outerWidth()+5>$(window)._outerWidth()+$(document).scrollLeft()){
left=_452.offset().left-menu.outerWidth()+2;
}
top=_451(_452.offset().top-3);
}
function _451(top,_453){
if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
if(_453){
top=$(_453).offset().top-menu._outerHeight();
}else{
top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight();
}
}
if(top<0){
top=0;
}
return top;
};
menu.css(opts.position.call(_44f,menu[0],left,top));
menu.show(0,function(){
if(!menu[0].shadow){
menu[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(menu);
}
menu[0].shadow.css({display:(menu.hasClass("menu-inline")?"none":"block"),zIndex:$.fn.menu.defaults.zIndex++,left:menu.css("left"),top:menu.css("top"),width:menu.outerWidth(),height:menu.outerHeight()});
menu.css("z-index",$.fn.menu.defaults.zIndex++);
if(menu.hasClass("menu-top")){
opts.onShow.call(_44f);
}
});
};
function _422(menu){
if(menu&&menu.length){
_454(menu);
menu.find("div.menu-item").each(function(){
if(this.submenu){
_422(this.submenu);
}
$(this).removeClass("menu-active");
});
}
function _454(m){
m.stop(true,true);
if(m[0].shadow){
m[0].shadow.hide();
}
m.hide();
};
};
function _455(_456,_457){
var _458=null;
var fn=$.isFunction(_457)?_457:function(item){
for(var p in _457){
if(item[p]!=_457[p]){
return false;
}
}
return true;
};
function find(menu){
menu.children("div.menu-item").each(function(){
var opts=$(this).data("menuitem").options;
if(fn.call(_456,opts)==true){
_458=$(_456).menu("getItem",this);
}else{
if(this.submenu&&!_458){
find(this.submenu);
}
}
});
};
find($(_456));
return _458;
};
function _431(_459,_45a,_45b){
var t=$(_45a);
if(t.hasClass("menu-item")){
var opts=t.data("menuitem").options;
opts.disabled=_45b;
if(_45b){
t.addClass("menu-item-disabled");
t[0].onclick=null;
}else{
t.removeClass("menu-item-disabled");
t[0].onclick=opts.onclick;
}
}
};
function _45c(_45d,_45e){
var opts=$.data(_45d,"menu").options;
var menu=$(_45d);
if(_45e.parent){
if(!_45e.parent.submenu){
var _45f=$("<div></div>").appendTo("body");
_45e.parent.submenu=_45f;
$("<div class=\"menu-rightarrow\"></div>").appendTo(_45e.parent);
_429(_45d,_45f);
}
menu=_45e.parent.submenu;
}
var div=$("<div></div>").appendTo(menu);
_42b(_45d,div,_45e);
};
function _460(_461,_462){
function _463(el){
if(el.submenu){
el.submenu.children("div.menu-item").each(function(){
_463(this);
});
var _464=el.submenu[0].shadow;
if(_464){
_464.remove();
}
el.submenu.remove();
}
$(el).remove();
};
_463(_462);
};
function _465(_466,_467,_468){
var menu=$(_467).parent();
if(_468){
$(_467).show();
}else{
$(_467).hide();
}
_42c(_466,menu);
};
function _469(_46a){
$(_46a).children("div.menu-item").each(function(){
_460(_46a,this);
});
if(_46a.shadow){
_46a.shadow.remove();
}
$(_46a).remove();
};
$.fn.menu=function(_46b,_46c){
if(typeof _46b=="string"){
return $.fn.menu.methods[_46b](this,_46c);
}
_46b=_46b||{};
return this.each(function(){
var _46d=$.data(this,"menu");
if(_46d){
$.extend(_46d.options,_46b);
}else{
_46d=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,$.fn.menu.parseOptions(this),_46b)});
init(this);
}
$(this).css({left:_46d.options.left,top:_46d.options.top});
});
};
$.fn.menu.methods={options:function(jq){
return $.data(jq[0],"menu").options;
},show:function(jq,pos){
return jq.each(function(){
_44e(this,pos);
});
},hide:function(jq){
return jq.each(function(){
_442(this);
});
},destroy:function(jq){
return jq.each(function(){
_469(this);
});
},setText:function(jq,_46e){
return jq.each(function(){
var item=$(_46e.target).data("menuitem").options;
item.text=_46e.text;
$(_46e.target).children("div.menu-text").html(_46e.text);
});
},setIcon:function(jq,_46f){
return jq.each(function(){
var item=$(_46f.target).data("menuitem").options;
item.iconCls=_46f.iconCls;
$(_46f.target).children("div.menu-icon").remove();
if(_46f.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_46f.iconCls).appendTo(_46f.target);
}
});
},getItem:function(jq,_470){
var item=$(_470).data("menuitem").options;
return $.extend({},item,{target:$(_470)[0]});
},findItem:function(jq,text){
if(typeof text=="string"){
return _455(jq[0],function(item){
return $("<div>"+item.text+"</div>").text()==text;
});
}else{
return _455(jq[0],text);
}
},appendItem:function(jq,_471){
return jq.each(function(){
_45c(this,_471);
});
},removeItem:function(jq,_472){
return jq.each(function(){
_460(this,_472);
});
},enableItem:function(jq,_473){
return jq.each(function(){
_431(this,_473,false);
});
},disableItem:function(jq,_474){
return jq.each(function(){
_431(this,_474,true);
});
},showItem:function(jq,_475){
return jq.each(function(){
_465(this,_475,true);
});
},hideItem:function(jq,_476){
return jq.each(function(){
_465(this,_476,false);
});
},resize:function(jq,_477){
return jq.each(function(){
_42c(this,_477?$(_477):$(this));
});
}};
$.fn.menu.parseOptions=function(_478){
return $.extend({},$.parser.parseOptions(_478,[{minWidth:"number",itemHeight:"number",duration:"number",hideOnUnhover:"boolean"},{fit:"boolean",inline:"boolean",noline:"boolean"}]));
};
$.fn.menu.defaults={zIndex:110000,left:0,top:0,alignTo:null,align:"left",minWidth:150,itemHeight:32,duration:100,hideOnUnhover:true,inline:false,fit:false,noline:false,events:{mouseenter:_43c,mouseleave:_43f,mouseover:_443,mouseout:_446,click:_448},position:function(_479,left,top){
return {left:left,top:top};
},onShow:function(){
},onHide:function(){
},onClick:function(item){
}};
})(jQuery);
(function($){
var _47a=1;
function init(_47b){
$(_47b).addClass("sidemenu");
};
function _47c(_47d,_47e){
var opts=$(_47d).sidemenu("options");
if(_47e){
$.extend(opts,{width:_47e.width,height:_47e.height});
}
$(_47d)._size(opts);
$(_47d).find(".accordion").accordion("resize");
};
function _47f(_480,_481,data){
var opts=$(_480).sidemenu("options");
var tt=$("<ul class=\"sidemenu-tree\"></ul>").appendTo(_481);
tt.tree({data:data,animate:opts.animate,onBeforeSelect:function(node){
if(node.children){
return false;
}
},onSelect:function(node){
_482(_480,node.id);
},onExpand:function(node){
_48d(_480,node);
},onCollapse:function(node){
_48d(_480,node);
},onClick:function(node){
if(node.children){
if(node.state=="open"){
$(node.target).addClass("tree-node-nonleaf-collapsed");
}else{
$(node.target).removeClass("tree-node-nonleaf-collapsed");
}
$(this).tree("toggle",node.target);
}
}});
tt.unbind(".sidemenu").bind("mouseleave.sidemenu",function(){
$(_481).trigger("mouseleave");
});
_482(_480,opts.selectedItemId);
};
function _483(_484,_485,data){
var opts=$(_484).sidemenu("options");
$(_485).tooltip({content:$("<div></div>"),position:opts.floatMenuPosition,valign:"top",data:data,onUpdate:function(_486){
var _487=$(this).tooltip("options");
var data=_487.data;
_486.accordion({width:opts.floatMenuWidth,multiple:false}).accordion("add",{title:data.text,collapsed:false,collapsible:false});
_47f(_484,_486.accordion("panels")[0],data.children);
},onShow:function(){
var t=$(this);
var tip=t.tooltip("tip").addClass("sidemenu-tooltip");
tip.children(".tooltip-content").addClass("sidemenu");
tip.find(".accordion").accordion("resize");
tip.add(tip.find("ul.tree")).unbind(".sidemenu").bind("mouseover.sidemenu",function(){
t.tooltip("show");
}).bind("mouseleave.sidemenu",function(){
t.tooltip("hide");
});
t.tooltip("reposition");
},onPosition:function(left,top){
var tip=$(this).tooltip("tip");
if(!opts.collapsed){
tip.css({left:-999999});
}else{
if(top+tip.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=$(window)._outerHeight()+$(document).scrollTop()-tip.outerHeight();
tip.css("top",top);
}
}
}});
};
function _488(_489,_48a){
$(_489).find(".sidemenu-tree").each(function(){
_48a($(this));
});
$(_489).find(".tooltip-f").each(function(){
var tip=$(this).tooltip("tip");
if(tip){
tip.find(".sidemenu-tree").each(function(){
_48a($(this));
});
$(this).tooltip("reposition");
}
});
};
function _482(_48b,_48c){
var opts=$(_48b).sidemenu("options");
_488(_48b,function(t){
t.find("div.tree-node-selected").removeClass("tree-node-selected");
var node=t.tree("find",_48c);
if(node){
$(node.target).addClass("tree-node-selected");
opts.selectedItemId=node.id;
t.trigger("mouseleave.sidemenu");
opts.onSelect.call(_48b,node);
}
});
};
function _48d(_48e,item){
_488(_48e,function(t){
var node=t.tree("find",item.id);
if(node){
t.tree(item.state=="open"?"expand":"collapse",node.target);
}
});
};
function _48f(_490){
var opts=$(_490).sidemenu("options");
$(_490).empty();
if(opts.data){
$.easyui.forEach(opts.data,true,function(node){
if(!node.id){
node.id="_easyui_sidemenu_"+(_47a++);
}
if(!node.iconCls){
node.iconCls="sidemenu-default-icon";
}
if(node.children){
node.nodeCls="tree-node-nonleaf";
if(!node.state){
node.state="closed";
}
if(node.state=="open"){
node.nodeCls="tree-node-nonleaf";
}else{
node.nodeCls="tree-node-nonleaf tree-node-nonleaf-collapsed";
}
}
});
var acc=$("<div></div>").appendTo(_490);
acc.accordion({fit:opts.height=="auto"?false:true,border:opts.border,multiple:opts.multiple});
var data=opts.data;
for(var i=0;i<data.length;i++){
acc.accordion("add",{title:data[i].text,selected:data[i].state=="open",iconCls:data[i].iconCls,onBeforeExpand:function(){
return !opts.collapsed;
}});
var ap=acc.accordion("panels")[i];
_47f(_490,ap,data[i].children);
_483(_490,ap.panel("header"),data[i]);
}
}
};
function _491(_492,_493){
var opts=$(_492).sidemenu("options");
opts.collapsed=_493;
var acc=$(_492).find(".accordion");
var _494=acc.accordion("panels");
acc.accordion("options").animate=false;
if(opts.collapsed){
$(_492).addClass("sidemenu-collapsed");
for(var i=0;i<_494.length;i++){
var _495=_494[i];
if(_495.panel("options").collapsed){
opts.data[i].state="closed";
}else{
opts.data[i].state="open";
acc.accordion("unselect",i);
}
var _496=_495.panel("header");
_496.find(".panel-title").html("");
_496.find(".panel-tool").hide();
}
}else{
$(_492).removeClass("sidemenu-collapsed");
for(var i=0;i<_494.length;i++){
var _495=_494[i];
if(opts.data[i].state=="open"){
acc.accordion("select",i);
}
var _496=_495.panel("header");
_496.find(".panel-title").html(_495.panel("options").title);
_496.find(".panel-tool").show();
}
}
acc.accordion("options").animate=opts.animate;
};
function _497(_498){
$(_498).find(".tooltip-f").each(function(){
$(this).tooltip("destroy");
});
$(_498).remove();
};
$.fn.sidemenu=function(_499,_49a){
if(typeof _499=="string"){
var _49b=$.fn.sidemenu.methods[_499];
return _49b(this,_49a);
}
_499=_499||{};
return this.each(function(){
var _49c=$.data(this,"sidemenu");
if(_49c){
$.extend(_49c.options,_499);
}else{
_49c=$.data(this,"sidemenu",{options:$.extend({},$.fn.sidemenu.defaults,$.fn.sidemenu.parseOptions(this),_499)});
init(this);
}
_47c(this);
_48f(this);
_491(this,_49c.options.collapsed);
});
};
$.fn.sidemenu.methods={options:function(jq){
return jq.data("sidemenu").options;
},resize:function(jq,_49d){
return jq.each(function(){
_47c(this,_49d);
});
},collapse:function(jq){
return jq.each(function(){
_491(this,true);
});
},expand:function(jq){
return jq.each(function(){
_491(this,false);
});
},destroy:function(jq){
return jq.each(function(){
_497(this);
});
}};
$.fn.sidemenu.parseOptions=function(_49e){
var t=$(_49e);
return $.extend({},$.parser.parseOptions(_49e,["width","height"]));
};
$.fn.sidemenu.defaults={width:200,height:"auto",border:true,animate:true,multiple:true,collapsed:false,data:null,floatMenuWidth:200,floatMenuPosition:"right",onSelect:function(item){
}};
})(jQuery);
(function($){
function init(_49f){
var opts=$.data(_49f,"menubutton").options;
var btn=$(_49f);
btn.linkbutton(opts);
if(opts.hasDownArrow){
btn.removeClass(opts.cls.btn1+" "+opts.cls.btn2).addClass("m-btn");
btn.removeClass("m-btn-small m-btn-medium m-btn-large").addClass("m-btn-"+opts.size);
var _4a0=btn.find(".l-btn-left");
$("<span></span>").addClass(opts.cls.arrow).appendTo(_4a0);
$("<span></span>").addClass("m-btn-line").appendTo(_4a0);
}
$(_49f).menubutton("resize");
if(opts.menu){
$(opts.menu).menu({duration:opts.duration});
var _4a1=$(opts.menu).menu("options");
var _4a2=_4a1.onShow;
var _4a3=_4a1.onHide;
$.extend(_4a1,{onShow:function(){
var _4a4=$(this).menu("options");
var btn=$(_4a4.alignTo);
var opts=btn.menubutton("options");
btn.addClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_4a2.call(this);
},onHide:function(){
var _4a5=$(this).menu("options");
var btn=$(_4a5.alignTo);
var opts=btn.menubutton("options");
btn.removeClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_4a3.call(this);
}});
}
};
function _4a6(_4a7){
var opts=$.data(_4a7,"menubutton").options;
var btn=$(_4a7);
var t=btn.find("."+opts.cls.trigger);
if(!t.length){
t=btn;
}
t.unbind(".menubutton");
var _4a8=null;
t.bind(opts.showEvent+".menubutton",function(){
if(!_4a9()){
_4a8=setTimeout(function(){
_4aa(_4a7);
},opts.duration);
return false;
}
}).bind(opts.hideEvent+".menubutton",function(){
if(_4a8){
clearTimeout(_4a8);
}
$(opts.menu).triggerHandler("mouseleave");
});
function _4a9(){
return $(_4a7).linkbutton("options").disabled;
};
};
function _4aa(_4ab){
var opts=$(_4ab).menubutton("options");
if(opts.disabled||!opts.menu){
return;
}
$("body>div.menu-top").menu("hide");
var btn=$(_4ab);
var mm=$(opts.menu);
if(mm.length){
mm.menu("options").alignTo=btn;
mm.menu("show",{alignTo:btn,align:opts.menuAlign});
}
btn.blur();
};
$.fn.menubutton=function(_4ac,_4ad){
if(typeof _4ac=="string"){
var _4ae=$.fn.menubutton.methods[_4ac];
if(_4ae){
return _4ae(this,_4ad);
}else{
return this.linkbutton(_4ac,_4ad);
}
}
_4ac=_4ac||{};
return this.each(function(){
var _4af=$.data(this,"menubutton");
if(_4af){
$.extend(_4af.options,_4ac);
}else{
$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,$.fn.menubutton.parseOptions(this),_4ac)});
$(this)._propAttr("disabled",false);
}
init(this);
_4a6(this);
});
};
$.fn.menubutton.methods={options:function(jq){
var _4b0=jq.linkbutton("options");
return $.extend($.data(jq[0],"menubutton").options,{toggle:_4b0.toggle,selected:_4b0.selected,disabled:_4b0.disabled});
},destroy:function(jq){
return jq.each(function(){
var opts=$(this).menubutton("options");
if(opts.menu){
$(opts.menu).menu("destroy");
}
$(this).remove();
});
}};
$.fn.menubutton.parseOptions=function(_4b1){
var t=$(_4b1);
return $.extend({},$.fn.linkbutton.parseOptions(_4b1),$.parser.parseOptions(_4b1,["menu",{plain:"boolean",hasDownArrow:"boolean",duration:"number"}]));
};
$.fn.menubutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,hasDownArrow:true,menu:null,menuAlign:"left",duration:100,showEvent:"mouseenter",hideEvent:"mouseleave",cls:{btn1:"m-btn-active",btn2:"m-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn"}});
})(jQuery);
(function($){
function init(_4b2){
var opts=$.data(_4b2,"splitbutton").options;
$(_4b2).menubutton(opts);
$(_4b2).addClass("s-btn");
};
$.fn.splitbutton=function(_4b3,_4b4){
if(typeof _4b3=="string"){
var _4b5=$.fn.splitbutton.methods[_4b3];
if(_4b5){
return _4b5(this,_4b4);
}else{
return this.menubutton(_4b3,_4b4);
}
}
_4b3=_4b3||{};
return this.each(function(){
var _4b6=$.data(this,"splitbutton");
if(_4b6){
$.extend(_4b6.options,_4b3);
}else{
$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,$.fn.splitbutton.parseOptions(this),_4b3)});
$(this)._propAttr("disabled",false);
}
init(this);
});
};
$.fn.splitbutton.methods={options:function(jq){
var _4b7=jq.menubutton("options");
var _4b8=$.data(jq[0],"splitbutton").options;
$.extend(_4b8,{disabled:_4b7.disabled,toggle:_4b7.toggle,selected:_4b7.selected});
return _4b8;
}};
$.fn.splitbutton.parseOptions=function(_4b9){
var t=$(_4b9);
return $.extend({},$.fn.linkbutton.parseOptions(_4b9),$.parser.parseOptions(_4b9,["menu",{plain:"boolean",duration:"number"}]));
};
$.fn.splitbutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100,cls:{btn1:"m-btn-active s-btn-active",btn2:"m-btn-plain-active s-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn-line"}});
})(jQuery);
(function($){
function init(_4ba){
var _4bb=$("<span class=\"switchbutton\">"+"<span class=\"switchbutton-inner\">"+"<span class=\"switchbutton-on\"></span>"+"<span class=\"switchbutton-handle\"></span>"+"<span class=\"switchbutton-off\"></span>"+"<input class=\"switchbutton-value\" type=\"checkbox\">"+"</span>"+"</span>").insertAfter(_4ba);
var t=$(_4ba);
t.addClass("switchbutton-f").hide();
var name=t.attr("name");
if(name){
t.removeAttr("name").attr("switchbuttonName",name);
_4bb.find(".switchbutton-value").attr("name",name);
}
_4bb.bind("_resize",function(e,_4bc){
if($(this).hasClass("easyui-fluid")||_4bc){
_4bd(_4ba);
}
return false;
});
return _4bb;
};
function _4bd(_4be,_4bf){
var _4c0=$.data(_4be,"switchbutton");
var opts=_4c0.options;
var _4c1=_4c0.switchbutton;
if(_4bf){
$.extend(opts,_4bf);
}
var _4c2=_4c1.is(":visible");
if(!_4c2){
_4c1.appendTo("body");
}
_4c1._size(opts);
var w=_4c1.width();
var h=_4c1.height();
var w=_4c1.outerWidth();
var h=_4c1.outerHeight();
var _4c3=parseInt(opts.handleWidth)||_4c1.height();
var _4c4=w*2-_4c3;
_4c1.find(".switchbutton-inner").css({width:_4c4+"px",height:h+"px",lineHeight:h+"px"});
_4c1.find(".switchbutton-handle")._outerWidth(_4c3)._outerHeight(h).css({marginLeft:-_4c3/2+"px"});
_4c1.find(".switchbutton-on").css({width:(w-_4c3/2)+"px",textIndent:(opts.reversed?"":"-")+_4c3/2+"px"});
_4c1.find(".switchbutton-off").css({width:(w-_4c3/2)+"px",textIndent:(opts.reversed?"-":"")+_4c3/2+"px"});
opts.marginWidth=w-_4c3;
_4c5(_4be,opts.checked,false);
if(!_4c2){
_4c1.insertAfter(_4be);
}
};
function _4c6(_4c7){
var _4c8=$.data(_4c7,"switchbutton");
var opts=_4c8.options;
var _4c9=_4c8.switchbutton;
var _4ca=_4c9.find(".switchbutton-inner");
var on=_4ca.find(".switchbutton-on").html(opts.onText);
var off=_4ca.find(".switchbutton-off").html(opts.offText);
var _4cb=_4ca.find(".switchbutton-handle").html(opts.handleText);
if(opts.reversed){
off.prependTo(_4ca);
on.insertAfter(_4cb);
}else{
on.prependTo(_4ca);
off.insertAfter(_4cb);
}
_4c9.find(".switchbutton-value")._propAttr("checked",opts.checked);
_4c9.removeClass("switchbutton-disabled").addClass(opts.disabled?"switchbutton-disabled":"");
_4c9.removeClass("switchbutton-reversed").addClass(opts.reversed?"switchbutton-reversed":"");
_4c5(_4c7,opts.checked);
_4cc(_4c7,opts.readonly);
$(_4c7).switchbutton("setValue",opts.value);
};
function _4c5(_4cd,_4ce,_4cf){
var _4d0=$.data(_4cd,"switchbutton");
var opts=_4d0.options;
opts.checked=_4ce;
var _4d1=_4d0.switchbutton.find(".switchbutton-inner");
var _4d2=_4d1.find(".switchbutton-on");
var _4d3=opts.reversed?(opts.checked?opts.marginWidth:0):(opts.checked?0:opts.marginWidth);
var dir=_4d2.css("float").toLowerCase();
var css={};
css["margin-"+dir]=-_4d3+"px";
_4cf?_4d1.animate(css,200):_4d1.css(css);
var _4d4=_4d1.find(".switchbutton-value");
var ck=_4d4.is(":checked");
$(_4cd).add(_4d4)._propAttr("checked",opts.checked);
if(ck!=opts.checked){
opts.onChange.call(_4cd,opts.checked);
}
};
function _4d5(_4d6,_4d7){
var _4d8=$.data(_4d6,"switchbutton");
var opts=_4d8.options;
var _4d9=_4d8.switchbutton;
var _4da=_4d9.find(".switchbutton-value");
if(_4d7){
opts.disabled=true;
$(_4d6).add(_4da)._propAttr("disabled",true);
_4d9.addClass("switchbutton-disabled");
}else{
opts.disabled=false;
$(_4d6).add(_4da)._propAttr("disabled",false);
_4d9.removeClass("switchbutton-disabled");
}
};
function _4cc(_4db,mode){
var _4dc=$.data(_4db,"switchbutton");
var opts=_4dc.options;
opts.readonly=mode==undefined?true:mode;
_4dc.switchbutton.removeClass("switchbutton-readonly").addClass(opts.readonly?"switchbutton-readonly":"");
};
function _4dd(_4de){
var _4df=$.data(_4de,"switchbutton");
var opts=_4df.options;
_4df.switchbutton.unbind(".switchbutton").bind("click.switchbutton",function(){
if(!opts.disabled&&!opts.readonly){
_4c5(_4de,opts.checked?false:true,true);
}
});
};
$.fn.switchbutton=function(_4e0,_4e1){
if(typeof _4e0=="string"){
return $.fn.switchbutton.methods[_4e0](this,_4e1);
}
_4e0=_4e0||{};
return this.each(function(){
var _4e2=$.data(this,"switchbutton");
if(_4e2){
$.extend(_4e2.options,_4e0);
}else{
_4e2=$.data(this,"switchbutton",{options:$.extend({},$.fn.switchbutton.defaults,$.fn.switchbutton.parseOptions(this),_4e0),switchbutton:init(this)});
}
_4e2.options.originalChecked=_4e2.options.checked;
_4c6(this);
_4bd(this);
_4dd(this);
});
};
$.fn.switchbutton.methods={options:function(jq){
var _4e3=jq.data("switchbutton");
return $.extend(_4e3.options,{value:_4e3.switchbutton.find(".switchbutton-value").val()});
},resize:function(jq,_4e4){
return jq.each(function(){
_4bd(this,_4e4);
});
},enable:function(jq){
return jq.each(function(){
_4d5(this,false);
});
},disable:function(jq){
return jq.each(function(){
_4d5(this,true);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4cc(this,mode);
});
},check:function(jq){
return jq.each(function(){
_4c5(this,true);
});
},uncheck:function(jq){
return jq.each(function(){
_4c5(this,false);
});
},clear:function(jq){
return jq.each(function(){
_4c5(this,false);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).switchbutton("options");
_4c5(this,opts.originalChecked);
});
},setValue:function(jq,_4e5){
return jq.each(function(){
$(this).val(_4e5);
$.data(this,"switchbutton").switchbutton.find(".switchbutton-value").val(_4e5);
});
}};
$.fn.switchbutton.parseOptions=function(_4e6){
var t=$(_4e6);
return $.extend({},$.parser.parseOptions(_4e6,["onText","offText","handleText",{handleWidth:"number",reversed:"boolean"}]),{value:(t.val()||undefined),checked:(t.attr("checked")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined)});
};
$.fn.switchbutton.defaults={handleWidth:"auto",width:60,height:30,checked:false,disabled:false,readonly:false,reversed:false,onText:"ON",offText:"OFF",handleText:"",value:"on",onChange:function(_4e7){
}};
})(jQuery);
(function($){
var _4e8=1;
function init(_4e9){
var _4ea=$("<span class=\"radiobutton inputbox\">"+"<span class=\"radiobutton-inner\" style=\"display:none\"></span>"+"<input type=\"radio\" class=\"radiobutton-value\">"+"</span>").insertAfter(_4e9);
var t=$(_4e9);
t.addClass("radiobutton-f").hide();
var name=t.attr("name");
if(name){
t.removeAttr("name").attr("radiobuttonName",name);
_4ea.find(".radiobutton-value").attr("name",name);
}
return _4ea;
};
function _4eb(_4ec){
var _4ed=$.data(_4ec,"radiobutton");
var opts=_4ed.options;
var _4ee=_4ed.radiobutton;
var _4ef="_easyui_radiobutton_"+(++_4e8);
_4ee.find(".radiobutton-value").attr("id",_4ef);
if(opts.label){
if(typeof opts.label=="object"){
_4ed.label=$(opts.label);
_4ed.label.attr("for",_4ef);
}else{
$(_4ed.label).remove();
_4ed.label=$("<label class=\"textbox-label\"></label>").html(opts.label);
_4ed.label.css("textAlign",opts.labelAlign).attr("for",_4ef);
if(opts.labelPosition=="after"){
_4ed.label.insertAfter(_4ee);
}else{
_4ed.label.insertBefore(_4ec);
}
_4ed.label.removeClass("textbox-label-left textbox-label-right textbox-label-top");
_4ed.label.addClass("textbox-label-"+opts.labelPosition);
}
}else{
$(_4ed.label).remove();
}
$(_4ec).radiobutton("setValue",opts.value);
_4f0(_4ec,opts.checked);
_4f1(_4ec,opts.disabled);
};
function _4f2(_4f3){
var _4f4=$.data(_4f3,"radiobutton");
var opts=_4f4.options;
var _4f5=_4f4.radiobutton;
_4f5.unbind(".radiobutton").bind("click.radiobutton",function(){
if(!opts.disabled){
_4f0(_4f3,true);
}
});
};
function _4f6(_4f7){
var _4f8=$.data(_4f7,"radiobutton");
var opts=_4f8.options;
var _4f9=_4f8.radiobutton;
_4f9._size(opts,_4f9.parent());
if(opts.label&&opts.labelPosition){
if(opts.labelPosition=="top"){
_4f8.label._size({width:opts.labelWidth},_4f9);
}else{
_4f8.label._size({width:opts.labelWidth,height:_4f9.outerHeight()},_4f9);
_4f8.label.css("lineHeight",_4f9.outerHeight()+"px");
}
}
};
function _4f0(_4fa,_4fb){
if(_4fb){
var f=$(_4fa).closest("form");
var name=$(_4fa).attr("radiobuttonName");
f.find(".radiobutton-f[radiobuttonName=\""+name+"\"]").each(function(){
if(this!=_4fa){
_4fc(this,false);
}
});
_4fc(_4fa,true);
}else{
_4fc(_4fa,false);
}
function _4fc(b,c){
var opts=$(b).radiobutton("options");
var _4fd=$(b).data("radiobutton").radiobutton;
_4fd.find(".radiobutton-inner").css("display",c?"":"none");
_4fd.find(".radiobutton-value")._propAttr("checked",c);
if(opts.checked!=c){
opts.checked=c;
opts.onChange.call($(b)[0],c);
}
};
};
function _4f1(_4fe,_4ff){
var _500=$.data(_4fe,"radiobutton");
var opts=_500.options;
var _501=_500.radiobutton;
var rv=_501.find(".radiobutton-value");
opts.disabled=_4ff;
if(_4ff){
$(_4fe).add(rv)._propAttr("disabled",true);
_501.addClass("radiobutton-disabled");
}else{
$(_4fe).add(rv)._propAttr("disabled",false);
_501.removeClass("radiobutton-disabled");
}
};
$.fn.radiobutton=function(_502,_503){
if(typeof _502=="string"){
return $.fn.radiobutton.methods[_502](this,_503);
}
_502=_502||{};
return this.each(function(){
var _504=$.data(this,"radiobutton");
if(_504){
$.extend(_504.options,_502);
}else{
_504=$.data(this,"radiobutton",{options:$.extend({},$.fn.radiobutton.defaults,$.fn.radiobutton.parseOptions(this),_502),radiobutton:init(this)});
}
_504.options.originalChecked=_504.options.checked;
_4eb(this);
_4f2(this);
_4f6(this);
});
};
$.fn.radiobutton.methods={options:function(jq){
var _505=jq.data("radiobutton");
return $.extend(_505.options,{value:_505.radiobutton.find(".radiobutton-value").val()});
},setValue:function(jq,_506){
return jq.each(function(){
$(this).val(_506);
$.data(this,"radiobutton").radiobutton.find(".radiobutton-value").val(_506);
});
},enable:function(jq){
return jq.each(function(){
_4f1(this,false);
});
},disable:function(jq){
return jq.each(function(){
_4f1(this,true);
});
},check:function(jq){
return jq.each(function(){
_4f0(this,true);
});
},uncheck:function(jq){
return jq.each(function(){
_4f0(this,false);
});
},clear:function(jq){
return jq.each(function(){
_4f0(this,false);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).radiobutton("options");
_4f0(this,opts.originalChecked);
});
}};
$.fn.radiobutton.parseOptions=function(_507){
var t=$(_507);
return $.extend({},$.parser.parseOptions(_507,["label","labelPosition","labelAlign",{labelWidth:"number"}]),{value:(t.val()||undefined),checked:(t.attr("checked")?true:undefined),disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.radiobutton.defaults={width:20,height:20,value:null,disabled:false,checked:false,label:null,labelWidth:"auto",labelPosition:"before",labelAlign:"left",onChange:function(_508){
}};
})(jQuery);
(function($){
var _509=1;
function init(_50a){
var _50b=$("<span class=\"checkbox inputbox\">"+"<span class=\"checkbox-inner\">"+"<svg xml:space=\"preserve\" focusable=\"false\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M4.1,12.7 9,17.6 20.3,6.3\" fill=\"none\" stroke=\"white\"></path></svg>"+"</span>"+"<input type=\"checkbox\" class=\"checkbox-value\">"+"</span>").insertAfter(_50a);
var t=$(_50a);
t.addClass("checkbox-f").hide();
var name=t.attr("name");
if(name){
t.removeAttr("name").attr("checkboxName",name);
_50b.find(".checkbox-value").attr("name",name);
}
return _50b;
};
function _50c(_50d){
var _50e=$.data(_50d,"checkbox");
var opts=_50e.options;
var _50f=_50e.checkbox;
var _510="_easyui_checkbox_"+(++_509);
_50f.find(".checkbox-value").attr("id",_510);
if(opts.label){
if(typeof opts.label=="object"){
_50e.label=$(opts.label);
_50e.label.attr("for",_510);
}else{
$(_50e.label).remove();
_50e.label=$("<label class=\"textbox-label\"></label>").html(opts.label);
_50e.label.css("textAlign",opts.labelAlign).attr("for",_510);
if(opts.labelPosition=="after"){
_50e.label.insertAfter(_50f);
}else{
_50e.label.insertBefore(_50d);
}
_50e.label.removeClass("textbox-label-left textbox-label-right textbox-label-top");
_50e.label.addClass("textbox-label-"+opts.labelPosition);
}
}else{
$(_50e.label).remove();
}
$(_50d).checkbox("setValue",opts.value);
_511(_50d,opts.checked);
_512(_50d,opts.disabled);
};
function _513(_514){
var _515=$.data(_514,"checkbox");
var opts=_515.options;
var _516=_515.checkbox;
_516.unbind(".checkbox").bind("click.checkbox",function(){
if(!opts.disabled){
_511(_514,!opts.checked);
}
});
};
function _517(_518){
var _519=$.data(_518,"checkbox");
var opts=_519.options;
var _51a=_519.checkbox;
_51a._size(opts,_51a.parent());
if(opts.label&&opts.labelPosition){
if(opts.labelPosition=="top"){
_519.label._size({width:opts.labelWidth},_51a);
}else{
_519.label._size({width:opts.labelWidth,height:_51a.outerHeight()},_51a);
_519.label.css("lineHeight",_51a.outerHeight()+"px");
}
}
};
function _511(_51b,_51c){
var _51d=$.data(_51b,"checkbox");
var opts=_51d.options;
var _51e=_51d.checkbox;
_51e.find(".checkbox-value")._propAttr("checked",_51c);
var _51f=_51e.find(".checkbox-inner").css("display",_51c?"":"none");
if(_51c){
_51f.addClass("checkbox-checked");
}else{
_51f.removeClass("checkbox-checked");
}
if(opts.checked!=_51c){
opts.checked=_51c;
opts.onChange.call(_51b,_51c);
}
};
function _512(_520,_521){
var _522=$.data(_520,"checkbox");
var opts=_522.options;
var _523=_522.checkbox;
var rv=_523.find(".checkbox-value");
opts.disabled=_521;
if(_521){
$(_520).add(rv)._propAttr("disabled",true);
_523.addClass("checkbox-disabled");
}else{
$(_520).add(rv)._propAttr("disabled",false);
_523.removeClass("checkbox-disabled");
}
};
$.fn.checkbox=function(_524,_525){
if(typeof _524=="string"){
return $.fn.checkbox.methods[_524](this,_525);
}
_524=_524||{};
return this.each(function(){
var _526=$.data(this,"checkbox");
if(_526){
$.extend(_526.options,_524);
}else{
_526=$.data(this,"checkbox",{options:$.extend({},$.fn.checkbox.defaults,$.fn.checkbox.parseOptions(this),_524),checkbox:init(this)});
}
_526.options.originalChecked=_526.options.checked;
_50c(this);
_513(this);
_517(this);
});
};
$.fn.checkbox.methods={options:function(jq){
var _527=jq.data("checkbox");
return $.extend(_527.options,{value:_527.checkbox.find(".checkbox-value").val()});
},setValue:function(jq,_528){
return jq.each(function(){
$(this).val(_528);
$.data(this,"checkbox").checkbox.find(".checkbox-value").val(_528);
});
},enable:function(jq){
return jq.each(function(){
_512(this,false);
});
},disable:function(jq){
return jq.each(function(){
_512(this,true);
});
},check:function(jq){
return jq.each(function(){
_511(this,true);
});
},uncheck:function(jq){
return jq.each(function(){
_511(this,false);
});
},clear:function(jq){
return jq.each(function(){
_511(this,false);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).checkbox("options");
_511(this,opts.originalChecked);
});
}};
$.fn.checkbox.parseOptions=function(_529){
var t=$(_529);
return $.extend({},$.parser.parseOptions(_529,["label","labelPosition","labelAlign",{labelWidth:"number"}]),{value:(t.val()||undefined),checked:(t.attr("checked")?true:undefined),disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.checkbox.defaults={width:20,height:20,value:null,disabled:false,checked:false,label:null,labelWidth:"auto",labelPosition:"before",labelAlign:"left",onChange:function(_52a){
}};
})(jQuery);
(function($){
function init(_52b){
$(_52b).addClass("validatebox-text");
};
function _52c(_52d){
var _52e=$.data(_52d,"validatebox");
_52e.validating=false;
if(_52e.vtimer){
clearTimeout(_52e.vtimer);
}
if(_52e.ftimer){
clearTimeout(_52e.ftimer);
}
$(_52d).tooltip("destroy");
$(_52d).unbind();
$(_52d).remove();
};
function _52f(_530){
var opts=$.data(_530,"validatebox").options;
$(_530).unbind(".validatebox");
if(opts.novalidate||opts.disabled){
return;
}
for(var _531 in opts.events){
$(_530).bind(_531+".validatebox",{target:_530},opts.events[_531]);
}
};
function _532(e){
var _533=e.data.target;
var _534=$.data(_533,"validatebox");
var opts=_534.options;
if($(_533).attr("readonly")){
return;
}
_534.validating=true;
_534.value=opts.val(_533);
(function(){
if(!$(_533).is(":visible")){
_534.validating=false;
}
if(_534.validating){
var _535=opts.val(_533);
if(_534.value!=_535){
_534.value=_535;
if(_534.vtimer){
clearTimeout(_534.vtimer);
}
_534.vtimer=setTimeout(function(){
$(_533).validatebox("validate");
},opts.delay);
}else{
if(_534.message){
opts.err(_533,_534.message);
}
}
_534.ftimer=setTimeout(arguments.callee,opts.interval);
}
})();
};
function _536(e){
var _537=e.data.target;
var _538=$.data(_537,"validatebox");
var opts=_538.options;
_538.validating=false;
if(_538.vtimer){
clearTimeout(_538.vtimer);
_538.vtimer=undefined;
}
if(_538.ftimer){
clearTimeout(_538.ftimer);
_538.ftimer=undefined;
}
if(opts.validateOnBlur){
setTimeout(function(){
$(_537).validatebox("validate");
},0);
}
opts.err(_537,_538.message,"hide");
};
function _539(e){
var _53a=e.data.target;
var _53b=$.data(_53a,"validatebox");
_53b.options.err(_53a,_53b.message,"show");
};
function _53c(e){
var _53d=e.data.target;
var _53e=$.data(_53d,"validatebox");
if(!_53e.validating){
_53e.options.err(_53d,_53e.message,"hide");
}
};
function _53f(_540,_541,_542){
var _543=$.data(_540,"validatebox");
var opts=_543.options;
var t=$(_540);
if(_542=="hide"||!_541){
t.tooltip("hide");
}else{
if((t.is(":focus")&&_543.validating)||_542=="show"){
t.tooltip($.extend({},opts.tipOptions,{content:_541,position:opts.tipPosition,deltaX:opts.deltaX,deltaY:opts.deltaY})).tooltip("show");
}
}
};
function _544(_545){
var _546=$.data(_545,"validatebox");
var opts=_546.options;
var box=$(_545);
opts.onBeforeValidate.call(_545);
var _547=_548();
_547?box.removeClass("validatebox-invalid"):box.addClass("validatebox-invalid");
opts.err(_545,_546.message);
opts.onValidate.call(_545,_547);
return _547;
function _549(msg){
_546.message=msg;
};
function _54a(_54b,_54c){
var _54d=opts.val(_545);
var _54e=/([a-zA-Z_]+)(.*)/.exec(_54b);
var rule=opts.rules[_54e[1]];
if(rule&&_54d){
var _54f=_54c||opts.validParams||eval(_54e[2]);
if(!rule["validator"].call(_545,_54d,_54f)){
var _550=rule["message"];
if(_54f){
for(var i=0;i<_54f.length;i++){
_550=_550.replace(new RegExp("\\{"+i+"\\}","g"),_54f[i]);
}
}
_549(opts.invalidMessage||_550);
return false;
}
}
return true;
};
function _548(){
_549("");
if(!opts._validateOnCreate){
setTimeout(function(){
opts._validateOnCreate=true;
},0);
return true;
}
if(opts.novalidate||opts.disabled){
return true;
}
if(opts.required){
if(opts.val(_545)==""){
_549(opts.missingMessage);
return false;
}
}
if(opts.validType){
if($.isArray(opts.validType)){
for(var i=0;i<opts.validType.length;i++){
if(!_54a(opts.validType[i])){
return false;
}
}
}else{
if(typeof opts.validType=="string"){
if(!_54a(opts.validType)){
return false;
}
}else{
for(var _551 in opts.validType){
var _552=opts.validType[_551];
if(!_54a(_551,_552)){
return false;
}
}
}
}
}
return true;
};
};
function _553(_554,_555){
var opts=$.data(_554,"validatebox").options;
if(_555!=undefined){
opts.disabled=_555;
}
if(opts.disabled){
$(_554).addClass("validatebox-disabled")._propAttr("disabled",true);
}else{
$(_554).removeClass("validatebox-disabled")._propAttr("disabled",false);
}
};
function _556(_557,mode){
var opts=$.data(_557,"validatebox").options;
opts.readonly=mode==undefined?true:mode;
if(opts.readonly||!opts.editable){
$(_557).triggerHandler("blur.validatebox");
$(_557).addClass("validatebox-readonly")._propAttr("readonly",true);
}else{
$(_557).removeClass("validatebox-readonly")._propAttr("readonly",false);
}
};
$.fn.validatebox=function(_558,_559){
if(typeof _558=="string"){
return $.fn.validatebox.methods[_558](this,_559);
}
_558=_558||{};
return this.each(function(){
var _55a=$.data(this,"validatebox");
if(_55a){
$.extend(_55a.options,_558);
}else{
init(this);
_55a=$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_558)});
}
_55a.options._validateOnCreate=_55a.options.validateOnCreate;
_553(this,_55a.options.disabled);
_556(this,_55a.options.readonly);
_52f(this);
_544(this);
});
};
$.fn.validatebox.methods={options:function(jq){
return $.data(jq[0],"validatebox").options;
},destroy:function(jq){
return jq.each(function(){
_52c(this);
});
},validate:function(jq){
return jq.each(function(){
_544(this);
});
},isValid:function(jq){
return _544(jq[0]);
},enableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=false;
_52f(this);
_544(this);
});
},disableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=true;
_52f(this);
_544(this);
});
},resetValidation:function(jq){
return jq.each(function(){
var opts=$(this).validatebox("options");
opts._validateOnCreate=opts.validateOnCreate;
_544(this);
});
},enable:function(jq){
return jq.each(function(){
_553(this,false);
_52f(this);
_544(this);
});
},disable:function(jq){
return jq.each(function(){
_553(this,true);
_52f(this);
_544(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_556(this,mode);
_52f(this);
_544(this);
});
}};
$.fn.validatebox.parseOptions=function(_55b){
var t=$(_55b);
return $.extend({},$.parser.parseOptions(_55b,["validType","missingMessage","invalidMessage","tipPosition",{delay:"number",interval:"number",deltaX:"number"},{editable:"boolean",validateOnCreate:"boolean",validateOnBlur:"boolean"}]),{required:(t.attr("required")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined),novalidate:(t.attr("novalidate")!=undefined?true:undefined)});
};
$.fn.validatebox.defaults={required:false,validType:null,validParams:null,delay:200,interval:200,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",deltaX:0,deltaY:0,novalidate:false,editable:true,disabled:false,readonly:false,validateOnCreate:true,validateOnBlur:false,events:{focus:_532,blur:_536,mouseenter:_539,mouseleave:_53c,click:function(e){
var t=$(e.data.target);
if(t.attr("type")=="checkbox"||t.attr("type")=="radio"){
t.focus().validatebox("validate");
}
}},val:function(_55c){
return $(_55c).val();
},err:function(_55d,_55e,_55f){
_53f(_55d,_55e,_55f);
},tipOptions:{showEvent:"none",hideEvent:"none",showDelay:0,hideDelay:0,zIndex:"",onShow:function(){
$(this).tooltip("tip").css({color:"#000",borderColor:"#CC9933",backgroundColor:"#FFFFCC"});
},onHide:function(){
$(this).tooltip("destroy");
}},rules:{email:{validator:function(_560){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_560);
},message:"Please enter a valid email address."},url:{validator:function(_561){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_561);
},message:"Please enter a valid URL."},length:{validator:function(_562,_563){
var len=$.trim(_562).length;
return len>=_563[0]&&len<=_563[1];
},message:"Please enter a value between {0} and {1}."},remote:{validator:function(_564,_565){
var data={};
data[_565[1]]=_564;
var _566=$.ajax({url:_565[0],dataType:"json",data:data,async:false,cache:false,type:"post"}).responseText;
return _566=="true";
},message:"Please fix this field."}},onBeforeValidate:function(){
},onValidate:function(_567){
}};
})(jQuery);
(function($){
var _568=0;
function init(_569){
$(_569).addClass("textbox-f").hide();
var span=$("<span class=\"textbox\">"+"<input class=\"textbox-text\" autocomplete=\"off\">"+"<input type=\"hidden\" class=\"textbox-value\">"+"</span>").insertAfter(_569);
var name=$(_569).attr("name");
if(name){
span.find("input.textbox-value").attr("name",name);
$(_569).removeAttr("name").attr("textboxName",name);
}
return span;
};
function _56a(_56b){
var _56c=$.data(_56b,"textbox");
var opts=_56c.options;
var tb=_56c.textbox;
var _56d="_easyui_textbox_input"+(++_568);
tb.addClass(opts.cls);
tb.find(".textbox-text").remove();
if(opts.multiline){
$("<textarea id=\""+_56d+"\" class=\"textbox-text\" autocomplete=\"off\"></textarea>").prependTo(tb);
}else{
$("<input id=\""+_56d+"\" type=\""+opts.type+"\" class=\"textbox-text\" autocomplete=\"off\">").prependTo(tb);
}
$("#"+_56d).attr("tabindex",$(_56b).attr("tabindex")||"").css("text-align",_56b.style.textAlign||"");
tb.find(".textbox-addon").remove();
var bb=opts.icons?$.extend(true,[],opts.icons):[];
if(opts.iconCls){
bb.push({iconCls:opts.iconCls,disabled:true});
}
if(bb.length){
var bc=$("<span class=\"textbox-addon\"></span>").prependTo(tb);
bc.addClass("textbox-addon-"+opts.iconAlign);
for(var i=0;i<bb.length;i++){
bc.append("<a href=\"javascript:;\" class=\"textbox-icon "+bb[i].iconCls+"\" icon-index=\""+i+"\" tabindex=\"-1\"></a>");
}
}
tb.find(".textbox-button").remove();
if(opts.buttonText||opts.buttonIcon){
var btn=$("<a href=\"javascript:;\" class=\"textbox-button\"></a>").prependTo(tb);
btn.addClass("textbox-button-"+opts.buttonAlign).linkbutton({text:opts.buttonText,iconCls:opts.buttonIcon,onClick:function(){
var t=$(this).parent().prev();
t.textbox("options").onClickButton.call(t[0]);
}});
}
if(opts.label){
if(typeof opts.label=="object"){
_56c.label=$(opts.label);
_56c.label.attr("for",_56d);
}else{
$(_56c.label).remove();
_56c.label=$("<label class=\"textbox-label\"></label>").html(opts.label);
_56c.label.css("textAlign",opts.labelAlign).attr("for",_56d);
if(opts.labelPosition=="after"){
_56c.label.insertAfter(tb);
}else{
_56c.label.insertBefore(_56b);
}
_56c.label.removeClass("textbox-label-left textbox-label-right textbox-label-top");
_56c.label.addClass("textbox-label-"+opts.labelPosition);
}
}else{
$(_56c.label).remove();
}
_56e(_56b);
_56f(_56b,opts.disabled);
_570(_56b,opts.readonly);
};
function _571(_572){
var _573=$.data(_572,"textbox");
var tb=_573.textbox;
tb.find(".textbox-text").validatebox("destroy");
tb.remove();
$(_573.label).remove();
$(_572).remove();
};
function _574(_575,_576){
var _577=$.data(_575,"textbox");
var opts=_577.options;
var tb=_577.textbox;
var _578=tb.parent();
if(_576){
if(typeof _576=="object"){
$.extend(opts,_576);
}else{
opts.width=_576;
}
}
if(isNaN(parseInt(opts.width))){
var c=$(_575).clone();
c.css("visibility","hidden");
c.insertAfter(_575);
opts.width=c.outerWidth();
c.remove();
}
var _579=tb.is(":visible");
if(!_579){
tb.appendTo("body");
}
var _57a=tb.find(".textbox-text");
var btn=tb.find(".textbox-button");
var _57b=tb.find(".textbox-addon");
var _57c=_57b.find(".textbox-icon");
if(opts.height=="auto"){
_57a.css({margin:"",paddingTop:"",paddingBottom:"",height:"",lineHeight:""});
}
tb._size(opts,_578);
if(opts.label&&opts.labelPosition){
if(opts.labelPosition=="top"){
_577.label._size({width:opts.labelWidth=="auto"?tb.outerWidth():opts.labelWidth},tb);
if(opts.height!="auto"){
tb._size("height",tb.outerHeight()-_577.label.outerHeight());
}
}else{
_577.label._size({width:opts.labelWidth,height:tb.outerHeight()},tb);
if(!opts.multiline){
_577.label.css("lineHeight",_577.label.height()+"px");
}
tb._size("width",tb.outerWidth()-_577.label.outerWidth());
}
}
if(opts.buttonAlign=="left"||opts.buttonAlign=="right"){
btn.linkbutton("resize",{height:tb.height()});
}else{
btn.linkbutton("resize",{width:"100%"});
}
var _57d=tb.width()-_57c.length*opts.iconWidth-_57e("left")-_57e("right");
var _57f=opts.height=="auto"?_57a.outerHeight():(tb.height()-_57e("top")-_57e("bottom"));
_57b.css(opts.iconAlign,_57e(opts.iconAlign)+"px");
_57b.css("top",_57e("top")+"px");
_57c.css({width:opts.iconWidth+"px",height:_57f+"px"});
_57a.css({paddingLeft:(_575.style.paddingLeft||""),paddingRight:(_575.style.paddingRight||""),marginLeft:_580("left"),marginRight:_580("right"),marginTop:_57e("top"),marginBottom:_57e("bottom")});
if(opts.multiline){
_57a.css({paddingTop:(_575.style.paddingTop||""),paddingBottom:(_575.style.paddingBottom||"")});
_57a._outerHeight(_57f);
}else{
_57a.css({paddingTop:0,paddingBottom:0,height:_57f+"px",lineHeight:_57f+"px"});
}
_57a._outerWidth(_57d);
opts.onResizing.call(_575,opts.width,opts.height);
if(!_579){
tb.insertAfter(_575);
}
opts.onResize.call(_575,opts.width,opts.height);
function _580(_581){
return (opts.iconAlign==_581?_57b._outerWidth():0)+_57e(_581);
};
function _57e(_582){
var w=0;
btn.filter(".textbox-button-"+_582).each(function(){
if(_582=="left"||_582=="right"){
w+=$(this).outerWidth();
}else{
w+=$(this).outerHeight();
}
});
return w;
};
};
function _56e(_583){
var opts=$(_583).textbox("options");
var _584=$(_583).textbox("textbox");
_584.validatebox($.extend({},opts,{deltaX:function(_585){
return $(_583).textbox("getTipX",_585);
},deltaY:function(_586){
return $(_583).textbox("getTipY",_586);
},onBeforeValidate:function(){
opts.onBeforeValidate.call(_583);
var box=$(this);
if(!box.is(":focus")){
if(box.val()!==opts.value){
opts.oldInputValue=box.val();
box.val(opts.value);
}
}
},onValidate:function(_587){
var box=$(this);
if(opts.oldInputValue!=undefined){
box.val(opts.oldInputValue);
opts.oldInputValue=undefined;
}
var tb=box.parent();
if(_587){
tb.removeClass("textbox-invalid");
}else{
tb.addClass("textbox-invalid");
}
opts.onValidate.call(_583,_587);
}}));
};
function _588(_589){
var _58a=$.data(_589,"textbox");
var opts=_58a.options;
var tb=_58a.textbox;
var _58b=tb.find(".textbox-text");
_58b.attr("placeholder",opts.prompt);
_58b.unbind(".textbox");
$(_58a.label).unbind(".textbox");
if(!opts.disabled&&!opts.readonly){
if(_58a.label){
$(_58a.label).bind("click.textbox",function(e){
if(!opts.hasFocusMe){
_58b.focus();
$(_589).textbox("setSelectionRange",{start:0,end:_58b.val().length});
}
});
}
_58b.bind("blur.textbox",function(e){
if(!tb.hasClass("textbox-focused")){
return;
}
opts.value=$(this).val();
if(opts.value==""){
$(this).val(opts.prompt).addClass("textbox-prompt");
}else{
$(this).removeClass("textbox-prompt");
}
tb.removeClass("textbox-focused");
tb.closest(".form-field").removeClass("form-field-focused");
}).bind("focus.textbox",function(e){
opts.hasFocusMe=true;
if(tb.hasClass("textbox-focused")){
return;
}
if($(this).val()!=opts.value){
$(this).val(opts.value);
}
$(this).removeClass("textbox-prompt");
tb.addClass("textbox-focused");
tb.closest(".form-field").addClass("form-field-focused");
});
for(var _58c in opts.inputEvents){
_58b.bind(_58c+".textbox",{target:_589},opts.inputEvents[_58c]);
}
}
var _58d=tb.find(".textbox-addon");
_58d.unbind().bind("click",{target:_589},function(e){
var icon=$(e.target).closest("a.textbox-icon:not(.textbox-icon-disabled)");
if(icon.length){
var _58e=parseInt(icon.attr("icon-index"));
var conf=opts.icons[_58e];
if(conf&&conf.handler){
conf.handler.call(icon[0],e);
}
opts.onClickIcon.call(_589,_58e);
}
});
_58d.find(".textbox-icon").each(function(_58f){
var conf=opts.icons[_58f];
var icon=$(this);
if(!conf||conf.disabled||opts.disabled||opts.readonly){
icon.addClass("textbox-icon-disabled");
}else{
icon.removeClass("textbox-icon-disabled");
}
});
var btn=tb.find(".textbox-button");
btn.linkbutton((opts.disabled||opts.readonly)?"disable":"enable");
tb.unbind(".textbox").bind("_resize.textbox",function(e,_590){
if($(this).hasClass("easyui-fluid")||_590){
_574(_589);
}
return false;
});
};
function _56f(_591,_592){
var _593=$.data(_591,"textbox");
var opts=_593.options;
var tb=_593.textbox;
var _594=tb.find(".textbox-text");
var ss=$(_591).add(tb.find(".textbox-value"));
opts.disabled=_592;
if(opts.disabled){
_594.blur();
_594.validatebox("disable");
tb.addClass("textbox-disabled");
ss._propAttr("disabled",true);
$(_593.label).addClass("textbox-label-disabled");
}else{
_594.validatebox("enable");
tb.removeClass("textbox-disabled");
ss._propAttr("disabled",false);
$(_593.label).removeClass("textbox-label-disabled");
}
};
function _570(_595,mode){
var _596=$.data(_595,"textbox");
var opts=_596.options;
var tb=_596.textbox;
var _597=tb.find(".textbox-text");
opts.readonly=mode==undefined?true:mode;
if(opts.readonly){
_597.triggerHandler("blur.textbox");
}
_597.validatebox("readonly",opts.readonly);
tb.removeClass("textbox-readonly").addClass(opts.readonly?"textbox-readonly":"");
};
$.fn.textbox=function(_598,_599){
if(typeof _598=="string"){
var _59a=$.fn.textbox.methods[_598];
if(_59a){
return _59a(this,_599);
}else{
return this.each(function(){
var _59b=$(this).textbox("textbox");
_59b.validatebox(_598,_599);
});
}
}
_598=_598||{};
return this.each(function(){
var _59c=$.data(this,"textbox");
if(_59c){
$.extend(_59c.options,_598);
if(_598.value!=undefined){
_59c.options.originalValue=_598.value;
}
}else{
_59c=$.data(this,"textbox",{options:$.extend({},$.fn.textbox.defaults,$.fn.textbox.parseOptions(this),_598),textbox:init(this)});
_59c.options.originalValue=_59c.options.value;
}
_56a(this);
_588(this);
if(_59c.options.doSize){
_574(this);
}
var _59d=_59c.options.value;
_59c.options.value="";
$(this).textbox("initValue",_59d);
});
};
$.fn.textbox.methods={options:function(jq){
return $.data(jq[0],"textbox").options;
},cloneFrom:function(jq,from){
return jq.each(function(){
var t=$(this);
if(t.data("textbox")){
return;
}
if(!$(from).data("textbox")){
$(from).textbox();
}
var opts=$.extend(true,{},$(from).textbox("options"));
var name=t.attr("name")||"";
t.addClass("textbox-f").hide();
t.removeAttr("name").attr("textboxName",name);
var span=$(from).next().clone().insertAfter(t);
var _59e="_easyui_textbox_input"+(++_568);
span.find(".textbox-value").attr("name",name);
span.find(".textbox-text").attr("id",_59e);
var _59f=$($(from).textbox("label")).clone();
if(_59f.length){
_59f.attr("for",_59e);
if(opts.labelPosition=="after"){
_59f.insertAfter(t.next());
}else{
_59f.insertBefore(t);
}
}
$.data(this,"textbox",{options:opts,textbox:span,label:(_59f.length?_59f:undefined)});
var _5a0=$(from).textbox("button");
if(_5a0.length){
t.textbox("button").linkbutton($.extend(true,{},_5a0.linkbutton("options")));
}
_588(this);
_56e(this);
});
},textbox:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-text");
},button:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-button");
},label:function(jq){
return $.data(jq[0],"textbox").label;
},destroy:function(jq){
return jq.each(function(){
_571(this);
});
},resize:function(jq,_5a1){
return jq.each(function(){
_574(this,_5a1);
});
},disable:function(jq){
return jq.each(function(){
_56f(this,true);
_588(this);
});
},enable:function(jq){
return jq.each(function(){
_56f(this,false);
_588(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_570(this,mode);
_588(this);
});
},isValid:function(jq){
return jq.textbox("textbox").validatebox("isValid");
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setValue","");
});
},setText:function(jq,_5a2){
return jq.each(function(){
var opts=$(this).textbox("options");
var _5a3=$(this).textbox("textbox");
_5a2=_5a2==undefined?"":String(_5a2);
if($(this).textbox("getText")!=_5a2){
_5a3.val(_5a2);
}
opts.value=_5a2;
if(!_5a3.is(":focus")){
if(_5a2){
_5a3.removeClass("textbox-prompt");
}else{
_5a3.val(opts.prompt).addClass("textbox-prompt");
}
}
if(opts.value){
$(this).closest(".form-field").removeClass("form-field-empty");
}else{
$(this).closest(".form-field").addClass("form-field-empty");
}
$(this).textbox("validate");
});
},initValue:function(jq,_5a4){
return jq.each(function(){
var _5a5=$.data(this,"textbox");
$(this).textbox("setText",_5a4);
_5a5.textbox.find(".textbox-value").val(_5a4);
$(this).val(_5a4);
});
},setValue:function(jq,_5a6){
return jq.each(function(){
var opts=$.data(this,"textbox").options;
var _5a7=$(this).textbox("getValue");
$(this).textbox("initValue",_5a6);
if(_5a7!=_5a6){
opts.onChange.call(this,_5a6,_5a7);
$(this).closest("form").trigger("_change",[this]);
}
});
},getText:function(jq){
var _5a8=jq.textbox("textbox");
if(_5a8.is(":focus")){
return _5a8.val();
}else{
return jq.textbox("options").value;
}
},getValue:function(jq){
return jq.data("textbox").textbox.find(".textbox-value").val();
},reset:function(jq){
return jq.each(function(){
var opts=$(this).textbox("options");
$(this).textbox("textbox").val(opts.originalValue);
$(this).textbox("setValue",opts.originalValue);
});
},getIcon:function(jq,_5a9){
return jq.data("textbox").textbox.find(".textbox-icon:eq("+_5a9+")");
},getTipX:function(jq,_5aa){
var _5ab=jq.data("textbox");
var opts=_5ab.options;
var tb=_5ab.textbox;
var _5ac=tb.find(".textbox-text");
var _5aa=_5aa||opts.tipPosition;
var p1=tb.offset();
var p2=_5ac.offset();
var w1=tb.outerWidth();
var w2=_5ac.outerWidth();
if(_5aa=="right"){
return w1-w2-p2.left+p1.left;
}else{
if(_5aa=="left"){
return p1.left-p2.left;
}else{
return (w1-w2-p2.left+p1.left)/2-(p2.left-p1.left)/2;
}
}
},getTipY:function(jq,_5ad){
var _5ae=jq.data("textbox");
var opts=_5ae.options;
var tb=_5ae.textbox;
var _5af=tb.find(".textbox-text");
var _5ad=_5ad||opts.tipPosition;
var p1=tb.offset();
var p2=_5af.offset();
var h1=tb.outerHeight();
var h2=_5af.outerHeight();
if(_5ad=="left"||_5ad=="right"){
return (h1-h2-p2.top+p1.top)/2-(p2.top-p1.top)/2;
}else{
if(_5ad=="bottom"){
return (h1-h2-p2.top+p1.top);
}else{
return (p1.top-p2.top);
}
}
},getSelectionStart:function(jq){
return jq.textbox("getSelectionRange").start;
},getSelectionRange:function(jq){
var _5b0=jq.textbox("textbox")[0];
var _5b1=0;
var end=0;
if(typeof _5b0.selectionStart=="number"){
_5b1=_5b0.selectionStart;
end=_5b0.selectionEnd;
}else{
if(_5b0.createTextRange){
var s=document.selection.createRange();
var _5b2=_5b0.createTextRange();
_5b2.setEndPoint("EndToStart",s);
_5b1=_5b2.text.length;
end=_5b1+s.text.length;
}
}
return {start:_5b1,end:end};
},setSelectionRange:function(jq,_5b3){
return jq.each(function(){
var _5b4=$(this).textbox("textbox")[0];
var _5b5=_5b3.start;
var end=_5b3.end;
if(_5b4.setSelectionRange){
_5b4.setSelectionRange(_5b5,end);
}else{
if(_5b4.createTextRange){
var _5b6=_5b4.createTextRange();
_5b6.collapse();
_5b6.moveEnd("character",end);
_5b6.moveStart("character",_5b5);
_5b6.select();
}
}
});
}};
$.fn.textbox.parseOptions=function(_5b7){
var t=$(_5b7);
return $.extend({},$.fn.validatebox.parseOptions(_5b7),$.parser.parseOptions(_5b7,["prompt","iconCls","iconAlign","buttonText","buttonIcon","buttonAlign","label","labelPosition","labelAlign",{multiline:"boolean",iconWidth:"number",labelWidth:"number"}]),{value:(t.val()||undefined),type:(t.attr("type")?t.attr("type"):undefined)});
};
$.fn.textbox.defaults=$.extend({},$.fn.validatebox.defaults,{doSize:true,width:"auto",height:"auto",cls:null,prompt:"",value:"",type:"text",multiline:false,icons:[],iconCls:null,iconAlign:"right",iconWidth:26,buttonText:"",buttonIcon:null,buttonAlign:"right",label:null,labelWidth:"auto",labelPosition:"before",labelAlign:"left",inputEvents:{blur:function(e){
var t=$(e.data.target);
var opts=t.textbox("options");
if(t.textbox("getValue")!=opts.value){
t.textbox("setValue",opts.value);
}
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.textbox("setValue",t.textbox("getText"));
}
}},onChange:function(_5b8,_5b9){
},onResizing:function(_5ba,_5bb){
},onResize:function(_5bc,_5bd){
},onClickButton:function(){
},onClickIcon:function(_5be){
}});
})(jQuery);
(function($){
function _5bf(_5c0){
var _5c1=$.data(_5c0,"passwordbox");
var opts=_5c1.options;
var _5c2=$.extend(true,[],opts.icons);
if(opts.showEye){
_5c2.push({iconCls:"passwordbox-open",handler:function(e){
opts.revealed=!opts.revealed;
_5c3(_5c0);
}});
}
$(_5c0).addClass("passwordbox-f").textbox($.extend({},opts,{icons:_5c2}));
_5c3(_5c0);
};
function _5c4(_5c5,_5c6,all){
var t=$(_5c5);
var opts=t.passwordbox("options");
if(opts.revealed){
t.textbox("setValue",_5c6);
return;
}
var _5c7=unescape(opts.passwordChar);
var cc=_5c6.split("");
var vv=t.passwordbox("getValue").split("");
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c!=vv[i]){
if(c!=_5c7){
vv.splice(i,0,c);
}
}
}
var pos=t.passwordbox("getSelectionStart");
if(cc.length<vv.length){
vv.splice(pos,vv.length-cc.length,"");
}
for(var i=0;i<cc.length;i++){
if(all||i!=pos-1){
cc[i]=_5c7;
}
}
t.textbox("setValue",vv.join(""));
t.textbox("setText",cc.join(""));
t.textbox("setSelectionRange",{start:pos,end:pos});
};
function _5c3(_5c8,_5c9){
var t=$(_5c8);
var opts=t.passwordbox("options");
var icon=t.next().find(".passwordbox-open");
var _5ca=unescape(opts.passwordChar);
_5c9=_5c9==undefined?t.textbox("getValue"):_5c9;
t.textbox("setValue",_5c9);
t.textbox("setText",opts.revealed?_5c9:_5c9.replace(/./ig,_5ca));
opts.revealed?icon.addClass("passwordbox-close"):icon.removeClass("passwordbox-close");
};
function _5cb(e){
var _5cc=e.data.target;
var t=$(e.data.target);
var _5cd=t.data("passwordbox");
var opts=t.data("passwordbox").options;
_5cd.checking=true;
_5cd.value=t.passwordbox("getText");
(function(){
if(_5cd.checking){
var _5ce=t.passwordbox("getText");
if(_5cd.value!=_5ce){
_5cd.value=_5ce;
if(_5cd.lastTimer){
clearTimeout(_5cd.lastTimer);
_5cd.lastTimer=undefined;
}
_5c4(_5cc,_5ce);
_5cd.lastTimer=setTimeout(function(){
_5c4(_5cc,t.passwordbox("getText"),true);
_5cd.lastTimer=undefined;
},opts.lastDelay);
}
setTimeout(arguments.callee,opts.checkInterval);
}
})();
};
function _5cf(e){
var _5d0=e.data.target;
var _5d1=$(_5d0).data("passwordbox");
_5d1.checking=false;
if(_5d1.lastTimer){
clearTimeout(_5d1.lastTimer);
_5d1.lastTimer=undefined;
}
_5c3(_5d0);
};
$.fn.passwordbox=function(_5d2,_5d3){
if(typeof _5d2=="string"){
var _5d4=$.fn.passwordbox.methods[_5d2];
if(_5d4){
return _5d4(this,_5d3);
}else{
return this.textbox(_5d2,_5d3);
}
}
_5d2=_5d2||{};
return this.each(function(){
var _5d5=$.data(this,"passwordbox");
if(_5d5){
$.extend(_5d5.options,_5d2);
}else{
_5d5=$.data(this,"passwordbox",{options:$.extend({},$.fn.passwordbox.defaults,$.fn.passwordbox.parseOptions(this),_5d2)});
}
_5bf(this);
});
};
$.fn.passwordbox.methods={options:function(jq){
return $.data(jq[0],"passwordbox").options;
},setValue:function(jq,_5d6){
return jq.each(function(){
_5c3(this,_5d6);
});
},clear:function(jq){
return jq.each(function(){
_5c3(this,"");
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
_5c3(this);
});
},showPassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=true;
_5c3(this);
});
},hidePassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=false;
_5c3(this);
});
}};
$.fn.passwordbox.parseOptions=function(_5d7){
return $.extend({},$.fn.textbox.parseOptions(_5d7),$.parser.parseOptions(_5d7,["passwordChar",{checkInterval:"number",lastDelay:"number",revealed:"boolean",showEye:"boolean"}]));
};
$.fn.passwordbox.defaults=$.extend({},$.fn.textbox.defaults,{passwordChar:"%u25CF",checkInterval:200,lastDelay:500,revealed:false,showEye:true,inputEvents:{focus:_5cb,blur:_5cf},val:function(_5d8){
return $(_5d8).parent().prev().passwordbox("getValue");
}});
})(jQuery);
(function($){
function _5d9(_5da){
var _5db=$(_5da).data("maskedbox");
var opts=_5db.options;
$(_5da).textbox(opts);
$(_5da).maskedbox("initValue",opts.value);
};
function _5dc(_5dd,_5de){
var opts=$(_5dd).maskedbox("options");
var tt=(_5de||$(_5dd).maskedbox("getText")||"").split("");
var vv=[];
for(var i=0;i<opts.mask.length;i++){
if(opts.masks[opts.mask[i]]){
var t=tt[i];
vv.push(t!=opts.promptChar?t:" ");
}
}
return vv.join("");
};
function _5df(_5e0,_5e1){
var opts=$(_5e0).maskedbox("options");
var cc=_5e1.split("");
var tt=[];
for(var i=0;i<opts.mask.length;i++){
var m=opts.mask[i];
var r=opts.masks[m];
if(r){
var c=cc.shift();
if(c!=undefined){
var d=new RegExp(r,"i");
if(d.test(c)){
tt.push(c);
continue;
}
}
tt.push(opts.promptChar);
}else{
tt.push(m);
}
}
return tt.join("");
};
function _5e2(_5e3,c){
var opts=$(_5e3).maskedbox("options");
var _5e4=$(_5e3).maskedbox("getSelectionRange");
var _5e5=_5e6(_5e3,_5e4.start);
var end=_5e6(_5e3,_5e4.end);
if(_5e5!=-1){
var r=new RegExp(opts.masks[opts.mask[_5e5]],"i");
if(r.test(c)){
var vv=_5dc(_5e3).split("");
var _5e7=_5e5-_5e8(_5e3,_5e5);
var _5e9=end-_5e8(_5e3,end);
vv.splice(_5e7,_5e9-_5e7,c);
$(_5e3).maskedbox("setValue",_5df(_5e3,vv.join("")));
_5e5=_5e6(_5e3,++_5e5);
$(_5e3).maskedbox("setSelectionRange",{start:_5e5,end:_5e5});
}
}
};
function _5ea(_5eb,_5ec){
var opts=$(_5eb).maskedbox("options");
var vv=_5dc(_5eb).split("");
var _5ed=$(_5eb).maskedbox("getSelectionRange");
if(_5ed.start==_5ed.end){
if(_5ec){
var _5ee=_5ef(_5eb,_5ed.start);
}else{
var _5ee=_5e6(_5eb,_5ed.start);
}
var _5f0=_5ee-_5e8(_5eb,_5ee);
if(_5f0>=0){
vv.splice(_5f0,1);
}
}else{
var _5ee=_5e6(_5eb,_5ed.start);
var end=_5ef(_5eb,_5ed.end);
var _5f0=_5ee-_5e8(_5eb,_5ee);
var _5f1=end-_5e8(_5eb,end);
vv.splice(_5f0,_5f1-_5f0+1);
}
$(_5eb).maskedbox("setValue",_5df(_5eb,vv.join("")));
$(_5eb).maskedbox("setSelectionRange",{start:_5ee,end:_5ee});
};
function _5e8(_5f2,pos){
var opts=$(_5f2).maskedbox("options");
var _5f3=0;
if(pos>=opts.mask.length){
pos--;
}
for(var i=pos;i>=0;i--){
if(opts.masks[opts.mask[i]]==undefined){
_5f3++;
}
}
return _5f3;
};
function _5e6(_5f4,pos){
var opts=$(_5f4).maskedbox("options");
var m=opts.mask[pos];
var r=opts.masks[m];
while(pos<opts.mask.length&&!r){
pos++;
m=opts.mask[pos];
r=opts.masks[m];
}
return pos;
};
function _5ef(_5f5,pos){
var opts=$(_5f5).maskedbox("options");
var m=opts.mask[--pos];
var r=opts.masks[m];
while(pos>=0&&!r){
pos--;
m=opts.mask[pos];
r=opts.masks[m];
}
return pos<0?0:pos;
};
function _5f6(e){
if(e.metaKey||e.ctrlKey){
return;
}
var _5f7=e.data.target;
var opts=$(_5f7).maskedbox("options");
var _5f8=[9,13,35,36,37,39];
if($.inArray(e.keyCode,_5f8)!=-1){
return true;
}
if(e.keyCode>=96&&e.keyCode<=105){
e.keyCode-=48;
}
var c=String.fromCharCode(e.keyCode);
if(e.keyCode>=65&&e.keyCode<=90&&!e.shiftKey){
c=c.toLowerCase();
}else{
if(e.keyCode==189){
c="-";
}else{
if(e.keyCode==187){
c="+";
}else{
if(e.keyCode==190){
c=".";
}
}
}
}
if(e.keyCode==8){
_5ea(_5f7,true);
}else{
if(e.keyCode==46){
_5ea(_5f7,false);
}else{
_5e2(_5f7,c);
}
}
return false;
};
$.extend($.fn.textbox.methods,{inputMask:function(jq,_5f9){
return jq.each(function(){
var _5fa=this;
var opts=$.extend({},$.fn.maskedbox.defaults,_5f9);
$.data(_5fa,"maskedbox",{options:opts});
var _5fb=$(_5fa).textbox("textbox");
_5fb.unbind(".maskedbox");
for(var _5fc in opts.inputEvents){
_5fb.bind(_5fc+".maskedbox",{target:_5fa},opts.inputEvents[_5fc]);
}
});
}});
$.fn.maskedbox=function(_5fd,_5fe){
if(typeof _5fd=="string"){
var _5ff=$.fn.maskedbox.methods[_5fd];
if(_5ff){
return _5ff(this,_5fe);
}else{
return this.textbox(_5fd,_5fe);
}
}
_5fd=_5fd||{};
return this.each(function(){
var _600=$.data(this,"maskedbox");
if(_600){
$.extend(_600.options,_5fd);
}else{
$.data(this,"maskedbox",{options:$.extend({},$.fn.maskedbox.defaults,$.fn.maskedbox.parseOptions(this),_5fd)});
}
_5d9(this);
});
};
$.fn.maskedbox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"maskedbox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},initValue:function(jq,_601){
return jq.each(function(){
_601=_5df(this,_5dc(this,_601));
$(this).textbox("initValue",_601);
});
},setValue:function(jq,_602){
return jq.each(function(){
_602=_5df(this,_5dc(this,_602));
$(this).textbox("setValue",_602);
});
}};
$.fn.maskedbox.parseOptions=function(_603){
var t=$(_603);
return $.extend({},$.fn.textbox.parseOptions(_603),$.parser.parseOptions(_603,["mask","promptChar"]),{});
};
$.fn.maskedbox.defaults=$.extend({},$.fn.textbox.defaults,{mask:"",promptChar:"_",masks:{"9":"[0-9]","a":"[a-zA-Z]","*":"[0-9a-zA-Z]"},inputEvents:{keydown:_5f6}});
})(jQuery);
(function($){
var _604=0;
function _605(_606){
var _607=$.data(_606,"filebox");
var opts=_607.options;
opts.fileboxId="filebox_file_id_"+(++_604);
$(_606).addClass("filebox-f").textbox(opts);
$(_606).textbox("textbox").attr("readonly","readonly");
_607.filebox=$(_606).next().addClass("filebox");
var file=_608(_606);
var btn=$(_606).filebox("button");
if(btn.length){
$("<label class=\"filebox-label\" for=\""+opts.fileboxId+"\"></label>").appendTo(btn);
if(btn.linkbutton("options").disabled){
file._propAttr("disabled",true);
}else{
file._propAttr("disabled",false);
}
}
};
function _608(_609){
var _60a=$.data(_609,"filebox");
var opts=_60a.options;
_60a.filebox.find(".textbox-value").remove();
opts.oldValue="";
var file=$("<input type=\"file\" class=\"textbox-value\">").appendTo(_60a.filebox);
file.attr("id",opts.fileboxId).attr("name",$(_609).attr("textboxName")||"");
file.attr("accept",opts.accept);
file.attr("capture",opts.capture);
if(opts.multiple){
file.attr("multiple","multiple");
}
file.change(function(){
var _60b=this.value;
if(this.files){
_60b=$.map(this.files,function(file){
return file.name;
}).join(opts.separator);
}
$(_609).filebox("setText",_60b);
opts.onChange.call(_609,_60b,opts.oldValue);
opts.oldValue=_60b;
});
return file;
};
$.fn.filebox=function(_60c,_60d){
if(typeof _60c=="string"){
var _60e=$.fn.filebox.methods[_60c];
if(_60e){
return _60e(this,_60d);
}else{
return this.textbox(_60c,_60d);
}
}
_60c=_60c||{};
return this.each(function(){
var _60f=$.data(this,"filebox");
if(_60f){
$.extend(_60f.options,_60c);
}else{
$.data(this,"filebox",{options:$.extend({},$.fn.filebox.defaults,$.fn.filebox.parseOptions(this),_60c)});
}
_605(this);
});
};
$.fn.filebox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"filebox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
_608(this);
});
},reset:function(jq){
return jq.each(function(){
$(this).filebox("clear");
});
},setValue:function(jq){
return jq;
},setValues:function(jq){
return jq;
},files:function(jq){
return jq.next().find(".textbox-value")[0].files;
}};
$.fn.filebox.parseOptions=function(_610){
var t=$(_610);
return $.extend({},$.fn.textbox.parseOptions(_610),$.parser.parseOptions(_610,["accept","capture","separator"]),{multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.filebox.defaults=$.extend({},$.fn.textbox.defaults,{buttonIcon:null,buttonText:"Choose File",buttonAlign:"right",inputEvents:{},accept:"",capture:"",separator:",",multiple:false});
})(jQuery);
(function($){
function _611(_612){
var _613=$.data(_612,"searchbox");
var opts=_613.options;
var _614=$.extend(true,[],opts.icons);
_614.push({iconCls:"searchbox-button",handler:function(e){
var t=$(e.data.target);
var opts=t.searchbox("options");
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
}});
_615();
var _616=_617();
$(_612).addClass("searchbox-f").textbox($.extend({},opts,{icons:_614,buttonText:(_616?_616.text:"")}));
$(_612).attr("searchboxName",$(_612).attr("textboxName"));
_613.searchbox=$(_612).next();
_613.searchbox.addClass("searchbox");
_618(_616);
function _615(){
if(opts.menu){
_613.menu=$(opts.menu).menu();
var _619=_613.menu.menu("options");
var _61a=_619.onClick;
_619.onClick=function(item){
_618(item);
_61a.call(this,item);
};
}else{
if(_613.menu){
_613.menu.menu("destroy");
}
_613.menu=null;
}
};
function _617(){
if(_613.menu){
var item=_613.menu.children("div.menu-item:first");
_613.menu.children("div.menu-item").each(function(){
var _61b=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
if(_61b.selected){
item=$(this);
return false;
}
});
return _613.menu.menu("getItem",item[0]);
}else{
return null;
}
};
function _618(item){
if(!item){
return;
}
$(_612).textbox("button").menubutton({text:item.text,iconCls:(item.iconCls||null),menu:_613.menu,menuAlign:opts.buttonAlign,plain:false});
_613.searchbox.find("input.textbox-value").attr("name",item.name||item.text);
$(_612).searchbox("resize");
};
};
$.fn.searchbox=function(_61c,_61d){
if(typeof _61c=="string"){
var _61e=$.fn.searchbox.methods[_61c];
if(_61e){
return _61e(this,_61d);
}else{
return this.textbox(_61c,_61d);
}
}
_61c=_61c||{};
return this.each(function(){
var _61f=$.data(this,"searchbox");
if(_61f){
$.extend(_61f.options,_61c);
}else{
$.data(this,"searchbox",{options:$.extend({},$.fn.searchbox.defaults,$.fn.searchbox.parseOptions(this),_61c)});
}
_611(this);
});
};
$.fn.searchbox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"searchbox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},menu:function(jq){
return $.data(jq[0],"searchbox").menu;
},getName:function(jq){
return $.data(jq[0],"searchbox").searchbox.find("input.textbox-value").attr("name");
},selectName:function(jq,name){
return jq.each(function(){
var menu=$.data(this,"searchbox").menu;
if(menu){
menu.children("div.menu-item").each(function(){
var item=menu.menu("getItem",this);
if(item.name==name){
$(this).trigger("click");
return false;
}
});
}
});
},destroy:function(jq){
return jq.each(function(){
var menu=$(this).searchbox("menu");
if(menu){
menu.menu("destroy");
}
$(this).textbox("destroy");
});
}};
$.fn.searchbox.parseOptions=function(_620){
var t=$(_620);
return $.extend({},$.fn.textbox.parseOptions(_620),$.parser.parseOptions(_620,["menu"]),{searcher:(t.attr("searcher")?eval(t.attr("searcher")):undefined)});
};
$.fn.searchbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:$.extend({},$.fn.textbox.defaults.inputEvents,{keydown:function(e){
if(e.keyCode==13){
e.preventDefault();
var t=$(e.data.target);
var opts=t.searchbox("options");
t.searchbox("setValue",$(this).val());
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
return false;
}
}}),buttonAlign:"left",menu:null,searcher:function(_621,name){
}});
})(jQuery);
(function($){
function _622(_623,_624){
var opts=$.data(_623,"form").options;
$.extend(opts,_624||{});
var _625=$.extend({},opts.queryParams);
if(opts.onSubmit.call(_623,_625)==false){
return;
}
var _626=$(_623).find(".textbox-text:focus");
_626.triggerHandler("blur");
_626.focus();
var _627=null;
if(opts.dirty){
var ff=[];
$.map(opts.dirtyFields,function(f){
if($(f).hasClass("textbox-f")){
$(f).next().find(".textbox-value").each(function(){
ff.push(this);
});
}else{
ff.push(f);
}
});
_627=$(_623).find("input[name]:enabled,textarea[name]:enabled,select[name]:enabled").filter(function(){
return $.inArray(this,ff)==-1;
});
_627._propAttr("disabled",true);
}
if(opts.ajax){
if(opts.iframe){
_628(_623,_625);
}else{
if(window.FormData!==undefined){
_629(_623,_625);
}else{
_628(_623,_625);
}
}
}else{
$(_623).submit();
}
if(opts.dirty){
_627._propAttr("disabled",false);
}
};
function _628(_62a,_62b){
var opts=$.data(_62a,"form").options;
var _62c="easyui_frame_"+(new Date().getTime());
var _62d=$("<iframe id="+_62c+" name="+_62c+"></iframe>").appendTo("body");
_62d.attr("src",window.ActiveXObject?"javascript:false":"about:blank");
_62d.css({position:"absolute",top:-1000,left:-1000});
_62d.bind("load",cb);
_62e(_62b);
function _62e(_62f){
var form=$(_62a);
if(opts.url){
form.attr("action",opts.url);
}
var t=form.attr("target"),a=form.attr("action");
form.attr("target",_62c);
var _630=$();
try{
for(var n in _62f){
var _631=$("<input type=\"hidden\" name=\""+n+"\">").val(_62f[n]).appendTo(form);
_630=_630.add(_631);
}
_632();
form[0].submit();
}
finally{
form.attr("action",a);
t?form.attr("target",t):form.removeAttr("target");
_630.remove();
}
};
function _632(){
var f=$("#"+_62c);
if(!f.length){
return;
}
try{
var s=f.contents()[0].readyState;
if(s&&s.toLowerCase()=="uninitialized"){
setTimeout(_632,100);
}
}
catch(e){
cb();
}
};
var _633=10;
function cb(){
var f=$("#"+_62c);
if(!f.length){
return;
}
f.unbind();
var data="";
try{
var body=f.contents().find("body");
data=body.html();
if(data==""){
if(--_633){
setTimeout(cb,100);
return;
}
}
var ta=body.find(">textarea");
if(ta.length){
data=ta.val();
}else{
var pre=body.find(">pre");
if(pre.length){
data=pre.html();
}
}
}
catch(e){
}
opts.success.call(_62a,data);
setTimeout(function(){
f.unbind();
f.remove();
},100);
};
};
function _629(_634,_635){
var opts=$.data(_634,"form").options;
var _636=new FormData($(_634)[0]);
for(var name in _635){
_636.append(name,_635[name]);
}
$.ajax({url:opts.url,type:"post",xhr:function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener("progress",function(e){
if(e.lengthComputable){
var _637=e.total;
var _638=e.loaded||e.position;
var _639=Math.ceil(_638*100/_637);
opts.onProgress.call(_634,_639);
}
},false);
}
return xhr;
},data:_636,dataType:"html",cache:false,contentType:false,processData:false,complete:function(res){
opts.success.call(_634,res.responseText);
}});
};
function load(_63a,data){
var opts=$.data(_63a,"form").options;
if(typeof data=="string"){
var _63b={};
if(opts.onBeforeLoad.call(_63a,_63b)==false){
return;
}
$.ajax({url:data,data:_63b,dataType:"json",success:function(data){
_63c(data);
},error:function(){
opts.onLoadError.apply(_63a,arguments);
}});
}else{
_63c(data);
}
function _63c(data){
var form=$(_63a);
for(var name in data){
var val=data[name];
if(!_63d(name,val)){
if(!_63e(name,val)){
form.find("input[name=\""+name+"\"]").val(val);
form.find("textarea[name=\""+name+"\"]").val(val);
form.find("select[name=\""+name+"\"]").val(val);
}
}
}
opts.onLoadSuccess.call(_63a,data);
form.form("validate");
};
function _63d(name,val){
var _63f=["switchbutton","radiobutton","checkbox"];
for(var i=0;i<_63f.length;i++){
var _640=_63f[i];
var cc=$(_63a).find("["+_640+"Name=\""+name+"\"]");
if(cc.length){
cc[_640]("uncheck");
cc.each(function(){
if(_641($(this)[_640]("options").value,val)){
$(this)[_640]("check");
}
});
return true;
}
}
var cc=$(_63a).find("input[name=\""+name+"\"][type=radio], input[name=\""+name+"\"][type=checkbox]");
if(cc.length){
cc._propAttr("checked",false);
cc.each(function(){
if(_641($(this).val(),val)){
$(this)._propAttr("checked",true);
}
});
return true;
}
return false;
};
function _641(v,val){
if(v==String(val)||$.inArray(v,$.isArray(val)?val:[val])>=0){
return true;
}else{
return false;
}
};
function _63e(name,val){
var _642=$(_63a).find("[textboxName=\""+name+"\"],[sliderName=\""+name+"\"]");
if(_642.length){
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _643=_642.data(type);
if(_643){
if(_643.options.multiple||_643.options.range){
_642[type]("setValues",val);
}else{
_642[type]("setValue",val);
}
return true;
}
}
}
return false;
};
};
function _644(_645){
$("input,select,textarea",_645).each(function(){
if($(this).hasClass("textbox-value")){
return;
}
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="file"){
var file=$(this);
if(!file.hasClass("textbox-value")){
var _646=file.clone().val("");
_646.insertAfter(file);
if(file.data("validatebox")){
file.validatebox("destroy");
_646.validatebox();
}else{
file.remove();
}
}
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
}
});
var tmp=$();
var form=$(_645);
var opts=$.data(_645,"form").options;
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _647=form.find("."+type+"-f").not(tmp);
if(_647.length&&_647[type]){
_647[type]("clear");
tmp=tmp.add(_647);
}
}
form.form("validate");
};
function _648(_649){
_649.reset();
var form=$(_649);
var opts=$.data(_649,"form").options;
for(var i=opts.fieldTypes.length-1;i>=0;i--){
var type=opts.fieldTypes[i];
var _64a=form.find("."+type+"-f");
if(_64a.length&&_64a[type]){
_64a[type]("reset");
}
}
form.form("validate");
};
function _64b(_64c){
var _64d=$.data(_64c,"form").options;
$(_64c).unbind(".form");
if(_64d.ajax){
$(_64c).bind("submit.form",function(){
setTimeout(function(){
_622(_64c,_64d);
},0);
return false;
});
}
$(_64c).bind("_change.form",function(e,t){
if($.inArray(t,_64d.dirtyFields)==-1){
_64d.dirtyFields.push(t);
}
_64d.onChange.call(this,t);
}).bind("change.form",function(e){
var t=e.target;
if(!$(t).hasClass("textbox-text")){
if($.inArray(t,_64d.dirtyFields)==-1){
_64d.dirtyFields.push(t);
}
_64d.onChange.call(this,t);
}
});
_64e(_64c,_64d.novalidate);
};
function _64f(_650,_651){
_651=_651||{};
var _652=$.data(_650,"form");
if(_652){
$.extend(_652.options,_651);
}else{
$.data(_650,"form",{options:$.extend({},$.fn.form.defaults,$.fn.form.parseOptions(_650),_651)});
}
};
function _653(_654){
if($.fn.validatebox){
var t=$(_654);
t.find(".validatebox-text:not(:disabled)").validatebox("validate");
var _655=t.find(".validatebox-invalid");
_655.filter(":not(:disabled):first").focus();
return _655.length==0;
}
return true;
};
function _64e(_656,_657){
var opts=$.data(_656,"form").options;
opts.novalidate=_657;
$(_656).find(".validatebox-text:not(:disabled)").validatebox(_657?"disableValidation":"enableValidation");
};
$.fn.form=function(_658,_659){
if(typeof _658=="string"){
this.each(function(){
_64f(this);
});
return $.fn.form.methods[_658](this,_659);
}
return this.each(function(){
_64f(this,_658);
_64b(this);
});
};
$.fn.form.methods={options:function(jq){
return $.data(jq[0],"form").options;
},submit:function(jq,_65a){
return jq.each(function(){
_622(this,_65a);
});
},load:function(jq,data){
return jq.each(function(){
load(this,data);
});
},clear:function(jq){
return jq.each(function(){
_644(this);
});
},reset:function(jq){
return jq.each(function(){
_648(this);
});
},validate:function(jq){
return _653(jq[0]);
},disableValidation:function(jq){
return jq.each(function(){
_64e(this,true);
});
},enableValidation:function(jq){
return jq.each(function(){
_64e(this,false);
});
},resetValidation:function(jq){
return jq.each(function(){
$(this).find(".validatebox-text:not(:disabled)").validatebox("resetValidation");
});
},resetDirty:function(jq){
return jq.each(function(){
$(this).form("options").dirtyFields=[];
});
}};
$.fn.form.parseOptions=function(_65b){
var t=$(_65b);
return $.extend({},$.parser.parseOptions(_65b,[{ajax:"boolean",dirty:"boolean"}]),{url:(t.attr("action")?t.attr("action"):undefined)});
};
$.fn.form.defaults={fieldTypes:["tagbox","combobox","combotree","combogrid","combotreegrid","datetimebox","datebox","combo","datetimespinner","timespinner","numberspinner","spinner","slider","searchbox","numberbox","passwordbox","filebox","textbox","switchbutton","radiobutton","checkbox"],novalidate:false,ajax:true,iframe:true,dirty:false,dirtyFields:[],url:null,queryParams:{},onSubmit:function(_65c){
return $(this).form("validate");
},onProgress:function(_65d){
},success:function(data){
},onBeforeLoad:function(_65e){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onChange:function(_65f){
}};
})(jQuery);
(function($){
function _660(_661){
var _662=$.data(_661,"numberbox");
var opts=_662.options;
$(_661).addClass("numberbox-f").textbox(opts);
$(_661).textbox("textbox").css({imeMode:"disabled"});
$(_661).attr("numberboxName",$(_661).attr("textboxName"));
_662.numberbox=$(_661).next();
_662.numberbox.addClass("numberbox");
var _663=opts.parser.call(_661,opts.value);
var _664=opts.formatter.call(_661,_663);
$(_661).numberbox("initValue",_663).numberbox("setText",_664);
};
function _665(_666,_667){
var _668=$.data(_666,"numberbox");
var opts=_668.options;
opts.value=parseFloat(_667);
var _667=opts.parser.call(_666,_667);
var text=opts.formatter.call(_666,_667);
opts.value=_667;
$(_666).textbox("setText",text).textbox("setValue",_667);
text=opts.formatter.call(_666,$(_666).textbox("getValue"));
$(_666).textbox("setText",text);
};
$.fn.numberbox=function(_669,_66a){
if(typeof _669=="string"){
var _66b=$.fn.numberbox.methods[_669];
if(_66b){
return _66b(this,_66a);
}else{
return this.textbox(_669,_66a);
}
}
_669=_669||{};
return this.each(function(){
var _66c=$.data(this,"numberbox");
if(_66c){
$.extend(_66c.options,_669);
}else{
_66c=$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,$.fn.numberbox.parseOptions(this),_669)});
}
_660(this);
});
};
$.fn.numberbox.methods={options:function(jq){
var opts=jq.data("textbox")?jq.textbox("options"):{};
return $.extend($.data(jq[0],"numberbox").options,{width:opts.width,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).textbox("cloneFrom",from);
$.data(this,"numberbox",{options:$.extend(true,{},$(from).numberbox("options"))});
$(this).addClass("numberbox-f");
});
},fix:function(jq){
return jq.each(function(){
var opts=$(this).numberbox("options");
opts.value=null;
var _66d=opts.parser.call(this,$(this).numberbox("getText"));
$(this).numberbox("setValue",_66d);
});
},setValue:function(jq,_66e){
return jq.each(function(){
_665(this,_66e);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
$(this).numberbox("options").value="";
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
$(this).numberbox("setValue",$(this).numberbox("getValue"));
});
}};
$.fn.numberbox.parseOptions=function(_66f){
var t=$(_66f);
return $.extend({},$.fn.textbox.parseOptions(_66f),$.parser.parseOptions(_66f,["decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:(t.attr("prefix")?t.attr("prefix"):undefined)});
};
$.fn.numberbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{keypress:function(e){
var _670=e.data.target;
var opts=$(_670).numberbox("options");
return opts.filter.call(_670,e);
},blur:function(e){
$(e.data.target).numberbox("fix");
},keydown:function(e){
if(e.keyCode==13){
$(e.data.target).numberbox("fix");
}
}},min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",filter:function(e){
var opts=$(this).numberbox("options");
var s=$(this).numberbox("getText");
if(e.metaKey||e.ctrlKey){
return true;
}
if($.inArray(String(e.which),["46","8","13","0"])>=0){
return true;
}
var tmp=$("<span></span>");
tmp.html(String.fromCharCode(e.which));
var c=tmp.text();
tmp.remove();
if(!c){
return true;
}
if(c=="-"||c==opts.decimalSeparator){
return (s.indexOf(c)==-1)?true:false;
}else{
if(c==opts.groupSeparator){
return true;
}else{
if("0123456789".indexOf(c)>=0){
return true;
}else{
return false;
}
}
}
},formatter:function(_671){
if(!_671){
return _671;
}
_671=_671+"";
var opts=$(this).numberbox("options");
var s1=_671,s2="";
var dpos=_671.indexOf(".");
if(dpos>=0){
s1=_671.substring(0,dpos);
s2=_671.substring(dpos+1,_671.length);
}
if(opts.groupSeparator){
var p=/(\d+)(\d{3})/;
while(p.test(s1)){
s1=s1.replace(p,"$1"+opts.groupSeparator+"$2");
}
}
if(s2){
return opts.prefix+s1+opts.decimalSeparator+s2+opts.suffix;
}else{
return opts.prefix+s1+opts.suffix;
}
},parser:function(s){
s=s+"";
var opts=$(this).numberbox("options");
if(opts.prefix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.prefix),"g"),""));
}
if(opts.suffix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.suffix),"g"),""));
}
if(parseFloat(s)!=opts.value){
if(opts.groupSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.groupSeparator,"g"),""));
}
if(opts.decimalSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.decimalSeparator,"g"),"."));
}
s=s.replace(/\s/g,"");
}
var val=parseFloat(s).toFixed(opts.precision);
if(isNaN(val)){
val="";
}else{
if(typeof (opts.min)=="number"&&val<opts.min){
val=opts.min.toFixed(opts.precision);
}else{
if(typeof (opts.max)=="number"&&val>opts.max){
val=opts.max.toFixed(opts.precision);
}
}
}
return val;
}});
})(jQuery);
(function($){
function _672(_673,_674){
var opts=$.data(_673,"calendar").options;
var t=$(_673);
if(_674){
$.extend(opts,{width:_674.width,height:_674.height});
}
t._size(opts,t.parent());
t.find(".calendar-body")._outerHeight(t.height()-t.find(".calendar-header")._outerHeight());
if(t.find(".calendar-menu").is(":visible")){
_675(_673);
}
};
function init(_676){
$(_676).addClass("calendar").html("<div class=\"calendar-header\">"+"<div class=\"calendar-nav calendar-prevmonth\"></div>"+"<div class=\"calendar-nav calendar-nextmonth\"></div>"+"<div class=\"calendar-nav calendar-prevyear\"></div>"+"<div class=\"calendar-nav calendar-nextyear\"></div>"+"<div class=\"calendar-title\">"+"<span class=\"calendar-text\"></span>"+"</div>"+"</div>"+"<div class=\"calendar-body\">"+"<div class=\"calendar-menu\">"+"<div class=\"calendar-menu-year-inner\">"+"<span class=\"calendar-nav calendar-menu-prev\"></span>"+"<span><input class=\"calendar-menu-year\" type=\"text\"></input></span>"+"<span class=\"calendar-nav calendar-menu-next\"></span>"+"</div>"+"<div class=\"calendar-menu-month-inner\">"+"</div>"+"</div>"+"</div>");
$(_676).bind("_resize",function(e,_677){
if($(this).hasClass("easyui-fluid")||_677){
_672(_676);
}
return false;
});
};
function _678(_679){
var opts=$.data(_679,"calendar").options;
var menu=$(_679).find(".calendar-menu");
menu.find(".calendar-menu-year").unbind(".calendar").bind("keypress.calendar",function(e){
if(e.keyCode==13){
_67a(true);
}
});
$(_679).unbind(".calendar").bind("mouseover.calendar",function(e){
var t=_67b(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.addClass("calendar-nav-hover");
}
}).bind("mouseout.calendar",function(e){
var t=_67b(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.removeClass("calendar-nav-hover");
}
}).bind("click.calendar",function(e){
var t=_67b(e.target);
if(t.hasClass("calendar-menu-next")||t.hasClass("calendar-nextyear")){
_67c(1);
}else{
if(t.hasClass("calendar-menu-prev")||t.hasClass("calendar-prevyear")){
_67c(-1);
}else{
if(t.hasClass("calendar-menu-month")){
menu.find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
_67a(true);
}else{
if(t.hasClass("calendar-prevmonth")){
_67d(-1);
}else{
if(t.hasClass("calendar-nextmonth")){
_67d(1);
}else{
if(t.hasClass("calendar-text")){
if(menu.is(":visible")){
menu.hide();
}else{
_675(_679);
}
}else{
if(t.hasClass("calendar-day")){
if(t.hasClass("calendar-disabled")){
return;
}
var _67e=opts.current;
t.closest("div.calendar-body").find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
var _67f=t.attr("abbr").split(",");
var y=parseInt(_67f[0]);
var m=parseInt(_67f[1]);
var d=parseInt(_67f[2]);
opts.current=new Date(y,m-1,d);
opts.onSelect.call(_679,opts.current);
if(!_67e||_67e.getTime()!=opts.current.getTime()){
opts.onChange.call(_679,opts.current,_67e);
}
if(opts.year!=y||opts.month!=m){
opts.year=y;
opts.month=m;
show(_679);
}
}
}
}
}
}
}
}
});
function _67b(t){
var day=$(t).closest(".calendar-day");
if(day.length){
return day;
}else{
return $(t);
}
};
function _67a(_680){
var menu=$(_679).find(".calendar-menu");
var year=menu.find(".calendar-menu-year").val();
var _681=menu.find(".calendar-selected").attr("abbr");
if(!isNaN(year)){
opts.year=parseInt(year);
opts.month=parseInt(_681);
show(_679);
}
if(_680){
menu.hide();
}
};
function _67c(_682){
opts.year+=_682;
show(_679);
menu.find(".calendar-menu-year").val(opts.year);
};
function _67d(_683){
opts.month+=_683;
if(opts.month>12){
opts.year++;
opts.month=1;
}else{
if(opts.month<1){
opts.year--;
opts.month=12;
}
}
show(_679);
menu.find("td.calendar-selected").removeClass("calendar-selected");
menu.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
};
};
function _675(_684){
var opts=$.data(_684,"calendar").options;
$(_684).find(".calendar-menu").show();
if($(_684).find(".calendar-menu-month-inner").is(":empty")){
$(_684).find(".calendar-menu-month-inner").empty();
var t=$("<table class=\"calendar-mtable\"></table>").appendTo($(_684).find(".calendar-menu-month-inner"));
var idx=0;
for(var i=0;i<3;i++){
var tr=$("<tr></tr>").appendTo(t);
for(var j=0;j<4;j++){
$("<td class=\"calendar-nav calendar-menu-month\"></td>").html(opts.months[idx++]).attr("abbr",idx).appendTo(tr);
}
}
}
var body=$(_684).find(".calendar-body");
var sele=$(_684).find(".calendar-menu");
var _685=sele.find(".calendar-menu-year-inner");
var _686=sele.find(".calendar-menu-month-inner");
_685.find("input").val(opts.year).focus();
_686.find("td.calendar-selected").removeClass("calendar-selected");
_686.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
sele._outerWidth(body._outerWidth());
sele._outerHeight(body._outerHeight());
_686._outerHeight(sele.height()-_685._outerHeight());
};
function _687(_688,year,_689){
var opts=$.data(_688,"calendar").options;
var _68a=[];
var _68b=new Date(year,_689,0).getDate();
for(var i=1;i<=_68b;i++){
_68a.push([year,_689,i]);
}
var _68c=[],week=[];
var _68d=-1;
while(_68a.length>0){
var date=_68a.shift();
week.push(date);
var day=new Date(date[0],date[1]-1,date[2]).getDay();
if(_68d==day){
day=0;
}else{
if(day==(opts.firstDay==0?7:opts.firstDay)-1){
_68c.push(week);
week=[];
}
}
_68d=day;
}
if(week.length){
_68c.push(week);
}
var _68e=_68c[0];
if(_68e.length<7){
while(_68e.length<7){
var _68f=_68e[0];
var date=new Date(_68f[0],_68f[1]-1,_68f[2]-1);
_68e.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
}else{
var _68f=_68e[0];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_68f[0],_68f[1]-1,_68f[2]-i);
week.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_68c.unshift(week);
}
var _690=_68c[_68c.length-1];
while(_690.length<7){
var _691=_690[_690.length-1];
var date=new Date(_691[0],_691[1]-1,_691[2]+1);
_690.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
if(_68c.length<6){
var _691=_690[_690.length-1];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_691[0],_691[1]-1,_691[2]+i);
week.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_68c.push(week);
}
return _68c;
};
function show(_692){
var opts=$.data(_692,"calendar").options;
if(opts.current&&!opts.validator.call(_692,opts.current)){
opts.current=null;
}
var now=new Date();
var _693=now.getFullYear()+","+(now.getMonth()+1)+","+now.getDate();
var _694=opts.current?(opts.current.getFullYear()+","+(opts.current.getMonth()+1)+","+opts.current.getDate()):"";
var _695=6-opts.firstDay;
var _696=_695+1;
if(_695>=7){
_695-=7;
}
if(_696>=7){
_696-=7;
}
$(_692).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);
var body=$(_692).find("div.calendar-body");
body.children("table").remove();
var data=["<table class=\"calendar-dtable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
data.push("<thead><tr>");
if(opts.showWeek){
data.push("<th class=\"calendar-week\">"+opts.weekNumberHeader+"</th>");
}
for(var i=opts.firstDay;i<opts.weeks.length;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
for(var i=0;i<opts.firstDay;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
data.push("</tr></thead>");
data.push("<tbody>");
var _697=_687(_692,opts.year,opts.month);
for(var i=0;i<_697.length;i++){
var week=_697[i];
var cls="";
if(i==0){
cls="calendar-first";
}else{
if(i==_697.length-1){
cls="calendar-last";
}
}
data.push("<tr class=\""+cls+"\">");
if(opts.showWeek){
var _698=opts.getWeekNumber(new Date(week[0][0],parseInt(week[0][1])-1,week[0][2]));
data.push("<td class=\"calendar-week\">"+_698+"</td>");
}
for(var j=0;j<week.length;j++){
var day=week[j];
var s=day[0]+","+day[1]+","+day[2];
var _699=new Date(day[0],parseInt(day[1])-1,day[2]);
var d=opts.formatter.call(_692,_699);
var css=opts.styler.call(_692,_699);
var _69a="";
var _69b="";
if(typeof css=="string"){
_69b=css;
}else{
if(css){
_69a=css["class"]||"";
_69b=css["style"]||"";
}
}
var cls="calendar-day";
if(!(opts.year==day[0]&&opts.month==day[1])){
cls+=" calendar-other-month";
}
if(s==_693){
cls+=" calendar-today";
}
if(s==_694){
cls+=" calendar-selected";
}
if(j==_695){
cls+=" calendar-saturday";
}else{
if(j==_696){
cls+=" calendar-sunday";
}
}
if(j==0){
cls+=" calendar-first";
}else{
if(j==week.length-1){
cls+=" calendar-last";
}
}
cls+=" "+_69a;
if(!opts.validator.call(_692,_699)){
cls+=" calendar-disabled";
}
data.push("<td class=\""+cls+"\" abbr=\""+s+"\" style=\""+_69b+"\">"+d+"</td>");
}
data.push("</tr>");
}
data.push("</tbody>");
data.push("</table>");
body.append(data.join(""));
body.children("table.calendar-dtable").prependTo(body);
opts.onNavigate.call(_692,opts.year,opts.month);
};
$.fn.calendar=function(_69c,_69d){
if(typeof _69c=="string"){
return $.fn.calendar.methods[_69c](this,_69d);
}
_69c=_69c||{};
return this.each(function(){
var _69e=$.data(this,"calendar");
if(_69e){
$.extend(_69e.options,_69c);
}else{
_69e=$.data(this,"calendar",{options:$.extend({},$.fn.calendar.defaults,$.fn.calendar.parseOptions(this),_69c)});
init(this);
}
if(_69e.options.border==false){
$(this).addClass("calendar-noborder");
}
_672(this);
_678(this);
show(this);
$(this).find("div.calendar-menu").hide();
});
};
$.fn.calendar.methods={options:function(jq){
return $.data(jq[0],"calendar").options;
},resize:function(jq,_69f){
return jq.each(function(){
_672(this,_69f);
});
},moveTo:function(jq,date){
return jq.each(function(){
if(!date){
var now=new Date();
$(this).calendar({year:now.getFullYear(),month:now.getMonth()+1,current:date});
return;
}
var opts=$(this).calendar("options");
if(opts.validator.call(this,date)){
var _6a0=opts.current;
$(this).calendar({year:date.getFullYear(),month:date.getMonth()+1,current:date});
if(!_6a0||_6a0.getTime()!=date.getTime()){
opts.onChange.call(this,opts.current,_6a0);
}
}
});
}};
$.fn.calendar.parseOptions=function(_6a1){
var t=$(_6a1);
return $.extend({},$.parser.parseOptions(_6a1,["weekNumberHeader",{firstDay:"number",fit:"boolean",border:"boolean",showWeek:"boolean"}]));
};
$.fn.calendar.defaults={width:180,height:180,fit:false,border:true,showWeek:false,firstDay:0,weeks:["S","M","T","W","T","F","S"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:new Date().getFullYear(),month:new Date().getMonth()+1,current:(function(){
var d=new Date();
return new Date(d.getFullYear(),d.getMonth(),d.getDate());
})(),weekNumberHeader:"",getWeekNumber:function(date){
var _6a2=new Date(date.getTime());
_6a2.setDate(_6a2.getDate()+4-(_6a2.getDay()||7));
var time=_6a2.getTime();
_6a2.setMonth(0);
_6a2.setDate(1);
return Math.floor(Math.round((time-_6a2)/86400000)/7)+1;
},formatter:function(date){
return date.getDate();
},styler:function(date){
return "";
},validator:function(date){
return true;
},onSelect:function(date){
},onChange:function(_6a3,_6a4){
},onNavigate:function(year,_6a5){
}};
})(jQuery);
(function($){
function _6a6(_6a7){
var _6a8=$.data(_6a7,"spinner");
var opts=_6a8.options;
var _6a9=$.extend(true,[],opts.icons);
if(opts.spinAlign=="left"||opts.spinAlign=="right"){
opts.spinArrow=true;
opts.iconAlign=opts.spinAlign;
var _6aa={iconCls:"spinner-button-updown",handler:function(e){
var spin=$(e.target).closest(".spinner-arrow-up,.spinner-arrow-down");
_6b4(e.data.target,spin.hasClass("spinner-arrow-down"));
}};
if(opts.spinAlign=="left"){
_6a9.unshift(_6aa);
}else{
_6a9.push(_6aa);
}
}else{
opts.spinArrow=false;
if(opts.spinAlign=="vertical"){
if(opts.buttonAlign!="top"){
opts.buttonAlign="bottom";
}
opts.clsLeft="textbox-button-bottom";
opts.clsRight="textbox-button-top";
}else{
opts.clsLeft="textbox-button-left";
opts.clsRight="textbox-button-right";
}
}
$(_6a7).addClass("spinner-f").textbox($.extend({},opts,{icons:_6a9,doSize:false,onResize:function(_6ab,_6ac){
if(!opts.spinArrow){
var span=$(this).next();
var btn=span.find(".textbox-button:not(.spinner-button)");
if(btn.length){
var _6ad=btn.outerWidth();
var _6ae=btn.outerHeight();
var _6af=span.find(".spinner-button."+opts.clsLeft);
var _6b0=span.find(".spinner-button."+opts.clsRight);
if(opts.buttonAlign=="right"){
_6b0.css("marginRight",_6ad+"px");
}else{
if(opts.buttonAlign=="left"){
_6af.css("marginLeft",_6ad+"px");
}else{
if(opts.buttonAlign=="top"){
_6b0.css("marginTop",_6ae+"px");
}else{
_6af.css("marginBottom",_6ae+"px");
}
}
}
}
}
opts.onResize.call(this,_6ab,_6ac);
}}));
$(_6a7).attr("spinnerName",$(_6a7).attr("textboxName"));
_6a8.spinner=$(_6a7).next();
_6a8.spinner.addClass("spinner");
if(opts.spinArrow){
var _6b1=_6a8.spinner.find(".spinner-button-updown");
_6b1.append("<span class=\"spinner-arrow spinner-button-top\">"+"<span class=\"spinner-arrow-up\"></span>"+"</span>"+"<span class=\"spinner-arrow spinner-button-bottom\">"+"<span class=\"spinner-arrow-down\"></span>"+"</span>");
}else{
var _6b2=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsLeft).appendTo(_6a8.spinner);
var _6b3=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsRight).appendTo(_6a8.spinner);
_6b2.linkbutton({iconCls:opts.reversed?"spinner-button-up":"spinner-button-down",onClick:function(){
_6b4(_6a7,!opts.reversed);
}});
_6b3.linkbutton({iconCls:opts.reversed?"spinner-button-down":"spinner-button-up",onClick:function(){
_6b4(_6a7,opts.reversed);
}});
if(opts.disabled){
$(_6a7).spinner("disable");
}
if(opts.readonly){
$(_6a7).spinner("readonly");
}
}
$(_6a7).spinner("resize");
};
function _6b4(_6b5,down){
var opts=$(_6b5).spinner("options");
opts.spin.call(_6b5,down);
opts[down?"onSpinDown":"onSpinUp"].call(_6b5);
$(_6b5).spinner("validate");
};
$.fn.spinner=function(_6b6,_6b7){
if(typeof _6b6=="string"){
var _6b8=$.fn.spinner.methods[_6b6];
if(_6b8){
return _6b8(this,_6b7);
}else{
return this.textbox(_6b6,_6b7);
}
}
_6b6=_6b6||{};
return this.each(function(){
var _6b9=$.data(this,"spinner");
if(_6b9){
$.extend(_6b9.options,_6b6);
}else{
_6b9=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_6b6)});
}
_6a6(this);
});
};
$.fn.spinner.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"spinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.spinner.parseOptions=function(_6ba){
return $.extend({},$.fn.textbox.parseOptions(_6ba),$.parser.parseOptions(_6ba,["min","max","spinAlign",{increment:"number",reversed:"boolean"}]));
};
$.fn.spinner.defaults=$.extend({},$.fn.textbox.defaults,{min:null,max:null,increment:1,spinAlign:"right",reversed:false,spin:function(down){
},onSpinUp:function(){
},onSpinDown:function(){
}});
})(jQuery);
(function($){
function _6bb(_6bc){
$(_6bc).addClass("numberspinner-f");
var opts=$.data(_6bc,"numberspinner").options;
$(_6bc).numberbox($.extend({},opts,{doSize:false})).spinner(opts);
$(_6bc).numberbox("setValue",opts.value);
};
function _6bd(_6be,down){
var opts=$.data(_6be,"numberspinner").options;
var v=parseFloat($(_6be).numberbox("getValue")||opts.value)||0;
if(down){
v-=opts.increment;
}else{
v+=opts.increment;
}
$(_6be).numberbox("setValue",v);
};
$.fn.numberspinner=function(_6bf,_6c0){
if(typeof _6bf=="string"){
var _6c1=$.fn.numberspinner.methods[_6bf];
if(_6c1){
return _6c1(this,_6c0);
}else{
return this.numberbox(_6bf,_6c0);
}
}
_6bf=_6bf||{};
return this.each(function(){
var _6c2=$.data(this,"numberspinner");
if(_6c2){
$.extend(_6c2.options,_6bf);
}else{
$.data(this,"numberspinner",{options:$.extend({},$.fn.numberspinner.defaults,$.fn.numberspinner.parseOptions(this),_6bf)});
}
_6bb(this);
});
};
$.fn.numberspinner.methods={options:function(jq){
var opts=jq.numberbox("options");
return $.extend($.data(jq[0],"numberspinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.numberspinner.parseOptions=function(_6c3){
return $.extend({},$.fn.spinner.parseOptions(_6c3),$.fn.numberbox.parseOptions(_6c3),{});
};
$.fn.numberspinner.defaults=$.extend({},$.fn.spinner.defaults,$.fn.numberbox.defaults,{spin:function(down){
_6bd(this,down);
}});
})(jQuery);
(function($){
function _6c4(_6c5){
var opts=$.data(_6c5,"timespinner").options;
$(_6c5).addClass("timespinner-f").spinner(opts);
var _6c6=opts.formatter.call(_6c5,opts.parser.call(_6c5,opts.value));
$(_6c5).timespinner("initValue",_6c6);
};
function _6c7(e){
var _6c8=e.data.target;
var opts=$.data(_6c8,"timespinner").options;
var _6c9=$(_6c8).timespinner("getSelectionStart");
for(var i=0;i<opts.selections.length;i++){
var _6ca=opts.selections[i];
if(_6c9>=_6ca[0]&&_6c9<=_6ca[1]){
_6cb(_6c8,i);
return;
}
}
};
function _6cb(_6cc,_6cd){
var opts=$.data(_6cc,"timespinner").options;
if(_6cd!=undefined){
opts.highlight=_6cd;
}
var _6ce=opts.selections[opts.highlight];
if(_6ce){
var tb=$(_6cc).timespinner("textbox");
$(_6cc).timespinner("setSelectionRange",{start:_6ce[0],end:_6ce[1]});
tb.focus();
}
};
function _6cf(_6d0,_6d1){
var opts=$.data(_6d0,"timespinner").options;
var _6d1=opts.parser.call(_6d0,_6d1);
var text=opts.formatter.call(_6d0,_6d1);
$(_6d0).spinner("setValue",text);
};
function _6d2(_6d3,down){
var opts=$.data(_6d3,"timespinner").options;
var s=$(_6d3).timespinner("getValue");
var _6d4=opts.selections[opts.highlight];
var s1=s.substring(0,_6d4[0]);
var s2=s.substring(_6d4[0],_6d4[1]);
var s3=s.substring(_6d4[1]);
var v=s1+((parseInt(s2,10)||0)+opts.increment*(down?-1:1))+s3;
$(_6d3).timespinner("setValue",v);
_6cb(_6d3);
};
$.fn.timespinner=function(_6d5,_6d6){
if(typeof _6d5=="string"){
var _6d7=$.fn.timespinner.methods[_6d5];
if(_6d7){
return _6d7(this,_6d6);
}else{
return this.spinner(_6d5,_6d6);
}
}
_6d5=_6d5||{};
return this.each(function(){
var _6d8=$.data(this,"timespinner");
if(_6d8){
$.extend(_6d8.options,_6d5);
}else{
$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_6d5)});
}
_6c4(this);
});
};
$.fn.timespinner.methods={options:function(jq){
var opts=jq.data("spinner")?jq.spinner("options"):{};
return $.extend($.data(jq[0],"timespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},setValue:function(jq,_6d9){
return jq.each(function(){
_6cf(this,_6d9);
});
},getHours:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[0],10);
},getMinutes:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[1],10);
},getSeconds:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[2],10)||0;
}};
$.fn.timespinner.parseOptions=function(_6da){
return $.extend({},$.fn.spinner.parseOptions(_6da),$.parser.parseOptions(_6da,["separator",{showSeconds:"boolean",highlight:"number"}]));
};
$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{inputEvents:$.extend({},$.fn.spinner.defaults.inputEvents,{click:function(e){
_6c7.call(this,e);
},blur:function(e){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
}
}}),formatter:function(date){
if(!date){
return "";
}
var opts=$(this).timespinner("options");
var tt=[_6db(date.getHours()),_6db(date.getMinutes())];
if(opts.showSeconds){
tt.push(_6db(date.getSeconds()));
}
return tt.join(opts.separator);
function _6db(_6dc){
return (_6dc<10?"0":"")+_6dc;
};
},parser:function(s){
var opts=$(this).timespinner("options");
var date=_6dd(s);
if(date){
var min=_6dd(opts.min);
var max=_6dd(opts.max);
if(min&&min>date){
date=min;
}
if(max&&max<date){
date=max;
}
}
return date;
function _6dd(s){
if(!s){
return null;
}
var tt=s.split(opts.separator);
return new Date(1900,0,0,parseInt(tt[0],10)||0,parseInt(tt[1],10)||0,parseInt(tt[2],10)||0);
};
},selections:[[0,2],[3,5],[6,8]],separator:":",showSeconds:false,highlight:0,spin:function(down){
_6d2(this,down);
}});
})(jQuery);
(function($){
function _6de(_6df){
var opts=$.data(_6df,"datetimespinner").options;
$(_6df).addClass("datetimespinner-f").timespinner(opts);
};
$.fn.datetimespinner=function(_6e0,_6e1){
if(typeof _6e0=="string"){
var _6e2=$.fn.datetimespinner.methods[_6e0];
if(_6e2){
return _6e2(this,_6e1);
}else{
return this.timespinner(_6e0,_6e1);
}
}
_6e0=_6e0||{};
return this.each(function(){
var _6e3=$.data(this,"datetimespinner");
if(_6e3){
$.extend(_6e3.options,_6e0);
}else{
$.data(this,"datetimespinner",{options:$.extend({},$.fn.datetimespinner.defaults,$.fn.datetimespinner.parseOptions(this),_6e0)});
}
_6de(this);
});
};
$.fn.datetimespinner.methods={options:function(jq){
var opts=jq.timespinner("options");
return $.extend($.data(jq[0],"datetimespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.datetimespinner.parseOptions=function(_6e4){
return $.extend({},$.fn.timespinner.parseOptions(_6e4),$.parser.parseOptions(_6e4,[]));
};
$.fn.datetimespinner.defaults=$.extend({},$.fn.timespinner.defaults,{formatter:function(date){
if(!date){
return "";
}
return $.fn.datebox.defaults.formatter.call(this,date)+" "+$.fn.timespinner.defaults.formatter.call(this,date);
},parser:function(s){
s=$.trim(s);
if(!s){
return null;
}
var dt=s.split(" ");
var _6e5=$.fn.datebox.defaults.parser.call(this,dt[0]);
if(dt.length<2){
return _6e5;
}
var _6e6=$.fn.timespinner.defaults.parser.call(this,dt[1]);
return new Date(_6e5.getFullYear(),_6e5.getMonth(),_6e5.getDate(),_6e6.getHours(),_6e6.getMinutes(),_6e6.getSeconds());
},selections:[[0,2],[3,5],[6,10],[11,13],[14,16],[17,19]]});
})(jQuery);
(function($){
var _6e7=0;
function _6e8(a,o){
return $.easyui.indexOfArray(a,o);
};
function _6e9(a,o,id){
$.easyui.removeArrayItem(a,o,id);
};
function _6ea(a,o,r){
$.easyui.addArrayItem(a,o,r);
};
function _6eb(_6ec,aa){
return $.data(_6ec,"treegrid")?aa.slice(1):aa;
};
function _6ed(_6ee){
var _6ef=$.data(_6ee,"datagrid");
var opts=_6ef.options;
var _6f0=_6ef.panel;
var dc=_6ef.dc;
var ss=null;
if(opts.sharedStyleSheet){
ss=typeof opts.sharedStyleSheet=="boolean"?"head":opts.sharedStyleSheet;
}else{
ss=_6f0.closest("div.datagrid-view");
if(!ss.length){
ss=dc.view;
}
}
var cc=$(ss);
var _6f1=$.data(cc[0],"ss");
if(!_6f1){
_6f1=$.data(cc[0],"ss",{cache:{},dirty:[]});
}
return {add:function(_6f2){
var ss=["<style type=\"text/css\" easyui=\"true\">"];
for(var i=0;i<_6f2.length;i++){
_6f1.cache[_6f2[i][0]]={width:_6f2[i][1]};
}
var _6f3=0;
for(var s in _6f1.cache){
var item=_6f1.cache[s];
item.index=_6f3++;
ss.push(s+"{width:"+item.width+"}");
}
ss.push("</style>");
$(ss.join("\n")).appendTo(cc);
cc.children("style[easyui]:not(:last)").remove();
},getRule:function(_6f4){
var _6f5=cc.children("style[easyui]:last")[0];
var _6f6=_6f5.styleSheet?_6f5.styleSheet:(_6f5.sheet||document.styleSheets[document.styleSheets.length-1]);
var _6f7=_6f6.cssRules||_6f6.rules;
return _6f7[_6f4];
},set:function(_6f8,_6f9){
var item=_6f1.cache[_6f8];
if(item){
item.width=_6f9;
var rule=this.getRule(item.index);
if(rule){
rule.style["width"]=_6f9;
}
}
},remove:function(_6fa){
var tmp=[];
for(var s in _6f1.cache){
if(s.indexOf(_6fa)==-1){
tmp.push([s,_6f1.cache[s].width]);
}
}
_6f1.cache={};
this.add(tmp);
},dirty:function(_6fb){
if(_6fb){
_6f1.dirty.push(_6fb);
}
},clean:function(){
for(var i=0;i<_6f1.dirty.length;i++){
this.remove(_6f1.dirty[i]);
}
_6f1.dirty=[];
}};
};
function _6fc(_6fd,_6fe){
var _6ff=$.data(_6fd,"datagrid");
var opts=_6ff.options;
var _700=_6ff.panel;
if(_6fe){
$.extend(opts,_6fe);
}
if(opts.fit==true){
var p=_700.panel("panel").parent();
opts.width=p.width();
opts.height=p.height();
}
_700.panel("resize",opts);
};
function _701(_702){
var _703=$.data(_702,"datagrid");
var opts=_703.options;
var dc=_703.dc;
var wrap=_703.panel;
var _704=wrap.width();
var _705=wrap.height();
var view=dc.view;
var _706=dc.view1;
var _707=dc.view2;
var _708=_706.children("div.datagrid-header");
var _709=_707.children("div.datagrid-header");
var _70a=_708.find("table");
var _70b=_709.find("table");
view.width(_704);
var _70c=_708.children("div.datagrid-header-inner").show();
_706.width(_70c.find("table").width());
if(!opts.showHeader){
_70c.hide();
}
_707.width(_704-_706._outerWidth());
_706.children()._outerWidth(_706.width());
_707.children()._outerWidth(_707.width());
var all=_708.add(_709).add(_70a).add(_70b);
all.css("height","");
var hh=Math.max(_70a.height(),_70b.height());
all._outerHeight(hh);
view.children(".datagrid-empty").css("top",hh+"px");
dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});
var _70d=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();
var _70e=_70d+_709._outerHeight()+_707.children(".datagrid-footer")._outerHeight();
wrap.children(":not(.datagrid-view,.datagrid-mask,.datagrid-mask-msg)").each(function(){
_70e+=$(this)._outerHeight();
});
var _70f=wrap.outerHeight()-wrap.height();
var _710=wrap._size("minHeight")||"";
var _711=wrap._size("maxHeight")||"";
_706.add(_707).children("div.datagrid-body").css({marginTop:_70d,height:(isNaN(parseInt(opts.height))?"":(_705-_70e)),minHeight:(_710?_710-_70f-_70e:""),maxHeight:(_711?_711-_70f-_70e:"")});
view.height(_707.height());
};
function _712(_713,_714,_715){
var rows=$.data(_713,"datagrid").data.rows;
var opts=$.data(_713,"datagrid").options;
var dc=$.data(_713,"datagrid").dc;
var tmp=$("<tr class=\"datagrid-row\" style=\"position:absolute;left:-999999px\"></tr>").appendTo("body");
var _716=tmp.outerHeight();
tmp.remove();
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight||_715)){
if(_714!=undefined){
var tr1=opts.finder.getTr(_713,_714,"body",1);
var tr2=opts.finder.getTr(_713,_714,"body",2);
_717(tr1,tr2);
}else{
var tr1=opts.finder.getTr(_713,0,"allbody",1);
var tr2=opts.finder.getTr(_713,0,"allbody",2);
_717(tr1,tr2);
if(opts.showFooter){
var tr1=opts.finder.getTr(_713,0,"allfooter",1);
var tr2=opts.finder.getTr(_713,0,"allfooter",2);
_717(tr1,tr2);
}
}
}
_701(_713);
if(opts.height=="auto"){
var _718=dc.body1.parent();
var _719=dc.body2;
var _71a=_71b(_719);
var _71c=_71a.height;
if(_71a.width>_719.width()){
_71c+=18;
}
_71c-=parseInt(_719.css("marginTop"))||0;
_718.height(_71c);
_719.height(_71c);
dc.view.height(dc.view2.height());
}
dc.body2.triggerHandler("scroll");
function _717(trs1,trs2){
for(var i=0;i<trs2.length;i++){
var tr1=$(trs1[i]);
var tr2=$(trs2[i]);
tr1.css("height","");
tr2.css("height","");
var _71d=Math.max(tr1.outerHeight(),tr2.outerHeight());
if(_71d!=_716){
_71d=Math.max(_71d,_716)+1;
tr1.css("height",_71d);
tr2.css("height",_71d);
}
}
};
function _71b(cc){
var _71e=0;
var _71f=0;
$(cc).children().each(function(){
var c=$(this);
if(c.is(":visible")){
_71f+=c._outerHeight();
if(_71e<c._outerWidth()){
_71e=c._outerWidth();
}
}
});
return {width:_71e,height:_71f};
};
};
function _720(_721,_722){
var _723=$.data(_721,"datagrid");
var opts=_723.options;
var dc=_723.dc;
if(!dc.body2.children("table.datagrid-btable-frozen").length){
dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");
}
_724(true);
_724(false);
_701(_721);
function _724(_725){
var _726=_725?1:2;
var tr=opts.finder.getTr(_721,_722,"body",_726);
(_725?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);
};
};
function _727(_728,_729){
function _72a(){
var _72b=[];
var _72c=[];
$(_728).children("thead").each(function(){
var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);
$(this).find("tr").each(function(){
var cols=[];
$(this).find("th").each(function(){
var th=$(this);
var col=$.extend({},$.parser.parseOptions(this,["id","field","align","halign","order","width",{sortable:"boolean",checkbox:"boolean",resizable:"boolean",fixed:"boolean"},{rowspan:"number",colspan:"number"}]),{title:(th.html()||undefined),hidden:(th.attr("hidden")?true:undefined),formatter:(th.attr("formatter")?eval(th.attr("formatter")):undefined),styler:(th.attr("styler")?eval(th.attr("styler")):undefined),sorter:(th.attr("sorter")?eval(th.attr("sorter")):undefined)});
if(col.width&&String(col.width).indexOf("%")==-1){
col.width=parseInt(col.width);
}
if(th.attr("editor")){
var s=$.trim(th.attr("editor"));
if(s.substr(0,1)=="{"){
col.editor=eval("("+s+")");
}else{
col.editor=s;
}
}
cols.push(col);
});
opt.frozen?_72b.push(cols):_72c.push(cols);
});
});
return [_72b,_72c];
};
var _72d=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_728);
_72d.panel({doSize:false,cls:"datagrid"});
$(_728).addClass("datagrid-f").hide().appendTo(_72d.children("div.datagrid-view"));
var cc=_72a();
var view=_72d.children("div.datagrid-view");
var _72e=view.children("div.datagrid-view1");
var _72f=view.children("div.datagrid-view2");
return {panel:_72d,frozenColumns:cc[0],columns:cc[1],dc:{view:view,view1:_72e,view2:_72f,header1:_72e.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_72f.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_72e.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_72f.children("div.datagrid-body"),footer1:_72e.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_72f.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};
};
function _730(_731){
var _732=$.data(_731,"datagrid");
var opts=_732.options;
var dc=_732.dc;
var _733=_732.panel;
_732.ss=$(_731).datagrid("createStyleSheet");
_733.panel($.extend({},opts,{id:null,doSize:false,onResize:function(_734,_735){
if($.data(_731,"datagrid")){
_701(_731);
$(_731).datagrid("fitColumns");
opts.onResize.call(_733,_734,_735);
}
},onExpand:function(){
if($.data(_731,"datagrid")){
$(_731).datagrid("fixRowHeight").datagrid("fitColumns");
opts.onExpand.call(_733);
}
}}));
_732.rowIdPrefix="datagrid-row-r"+(++_6e7);
_732.cellClassPrefix="datagrid-cell-c"+_6e7;
_736(dc.header1,opts.frozenColumns,true);
_736(dc.header2,opts.columns,false);
_737();
dc.header1.add(dc.header2).css("display",opts.showHeader?"block":"none");
dc.footer1.add(dc.footer2).css("display",opts.showFooter?"block":"none");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$("div.datagrid-toolbar",_733).remove();
var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_733);
var tr=tb.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:;\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("datagrid-toolbar").prependTo(_733);
$(opts.toolbar).show();
}
}else{
$("div.datagrid-toolbar",_733).remove();
}
$("div.datagrid-pager",_733).remove();
if(opts.pagination){
var _738=$("<div class=\"datagrid-pager\"></div>");
if(opts.pagePosition=="bottom"){
_738.appendTo(_733);
}else{
if(opts.pagePosition=="top"){
_738.addClass("datagrid-pager-top").prependTo(_733);
}else{
var ptop=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_733);
_738.appendTo(_733);
_738=_738.add(ptop);
}
}
_738.pagination({total:0,pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_739,_73a){
opts.pageNumber=_739||1;
opts.pageSize=_73a;
_738.pagination("refresh",{pageNumber:_739,pageSize:_73a});
_782(_731);
}});
opts.pageSize=_738.pagination("options").pageSize;
}
function _736(_73b,_73c,_73d){
if(!_73c){
return;
}
$(_73b).show();
$(_73b).empty();
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-99999px\"></div>").appendTo("body");
tmp._outerWidth(99);
var _73e=100-parseInt(tmp[0].style.width);
tmp.remove();
var _73f=[];
var _740=[];
var _741=[];
if(opts.sortName){
_73f=opts.sortName.split(",");
_740=opts.sortOrder.split(",");
}
var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_73b);
for(var i=0;i<_73c.length;i++){
var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));
var cols=_73c[i];
for(var j=0;j<cols.length;j++){
var col=cols[j];
var attr="";
if(col.rowspan){
attr+="rowspan=\""+col.rowspan+"\" ";
}
if(col.colspan){
attr+="colspan=\""+col.colspan+"\" ";
if(!col.id){
col.id=["datagrid-td-group"+_6e7,i,j].join("-");
}
}
if(col.id){
attr+="id=\""+col.id+"\"";
}
var td=$("<td "+attr+"></td>").appendTo(tr);
if(col.checkbox){
td.attr("field",col.field);
$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);
}else{
if(col.field){
td.attr("field",col.field);
td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");
td.find("span:first").html(col.title);
var cell=td.find("div.datagrid-cell");
var pos=_6e8(_73f,col.field);
if(pos>=0){
cell.addClass("datagrid-sort-"+_740[pos]);
}
if(col.sortable){
cell.addClass("datagrid-sort");
}
if(col.resizable==false){
cell.attr("resizable","false");
}
if(col.width){
var _742=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0));
col.deltaWidth=_73e;
col.boxWidth=_742-_73e;
}else{
col.auto=true;
}
cell.css("text-align",(col.halign||col.align||""));
col.cellClass=_732.cellClassPrefix+"-"+col.field.replace(/[\.|\s]/g,"-");
cell.addClass(col.cellClass);
}else{
$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);
}
}
if(col.hidden){
td.hide();
_741.push(col.field);
}
}
}
if(_73d&&opts.rownumbers){
var td=$("<td rowspan=\""+opts.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");
if($("tr",t).length==0){
td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));
}else{
td.prependTo($("tr:first",t));
}
}
for(var i=0;i<_741.length;i++){
_784(_731,_741[i],-1);
}
};
function _737(){
var _743=[[".datagrid-header-rownumber",(opts.rownumberWidth-1)+"px"],[".datagrid-cell-rownumber",(opts.rownumberWidth-1)+"px"]];
var _744=_745(_731,true).concat(_745(_731));
for(var i=0;i<_744.length;i++){
var col=_746(_731,_744[i]);
if(col&&!col.checkbox){
_743.push(["."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto"]);
}
}
_732.ss.add(_743);
_732.ss.dirty(_732.cellSelectorPrefix);
_732.cellSelectorPrefix="."+_732.cellClassPrefix;
};
};
function _747(_748){
var _749=$.data(_748,"datagrid");
var _74a=_749.panel;
var opts=_749.options;
var dc=_749.dc;
var _74b=dc.header1.add(dc.header2);
_74b.unbind(".datagrid");
for(var _74c in opts.headerEvents){
_74b.bind(_74c+".datagrid",opts.headerEvents[_74c]);
}
var _74d=_74b.find("div.datagrid-cell");
var _74e=opts.resizeHandle=="right"?"e":(opts.resizeHandle=="left"?"w":"e,w");
_74d.each(function(){
$(this).resizable({handles:_74e,edge:opts.resizeEdge,disabled:($(this).attr("resizable")?$(this).attr("resizable")=="false":false),minWidth:25,onStartResize:function(e){
_749.resizing=true;
_74b.css("cursor",$("body").css("cursor"));
if(!_749.proxy){
_749.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);
}
if(e.data.dir=="e"){
e.data.deltaEdge=$(this)._outerWidth()-(e.pageX-$(this).offset().left);
}else{
e.data.deltaEdge=$(this).offset().left-e.pageX-1;
}
_749.proxy.css({left:e.pageX-$(_74a).offset().left-1+e.data.deltaEdge,display:"none"});
setTimeout(function(){
if(_749.proxy){
_749.proxy.show();
}
},500);
},onResize:function(e){
_749.proxy.css({left:e.pageX-$(_74a).offset().left-1+e.data.deltaEdge,display:"block"});
return false;
},onStopResize:function(e){
_74b.css("cursor","");
$(this).css("height","");
var _74f=$(this).parent().attr("field");
var col=_746(_748,_74f);
col.width=$(this)._outerWidth()+1;
col.boxWidth=col.width-col.deltaWidth;
col.auto=undefined;
$(this).css("width","");
$(_748).datagrid("fixColumnSize",_74f);
_749.proxy.remove();
_749.proxy=null;
if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){
_701(_748);
}
$(_748).datagrid("fitColumns");
opts.onResizeColumn.call(_748,_74f,col.width);
setTimeout(function(){
_749.resizing=false;
},0);
}});
});
var bb=dc.body1.add(dc.body2);
bb.unbind();
for(var _74c in opts.rowEvents){
bb.bind(_74c,opts.rowEvents[_74c]);
}
dc.body1.bind("mousewheel DOMMouseScroll",function(e){
e.preventDefault();
var e1=e.originalEvent||window.event;
var _750=e1.wheelDelta||e1.detail*(-1);
if("deltaY" in e1){
_750=e1.deltaY*-1;
}
var dg=$(e.target).closest("div.datagrid-view").children(".datagrid-f");
var dc=dg.data("datagrid").dc;
dc.body2.scrollTop(dc.body2.scrollTop()-_750);
});
dc.body2.bind("scroll",function(){
var b1=dc.view1.children("div.datagrid-body");
var stv=$(this).scrollTop();
$(this).scrollTop(stv);
b1.scrollTop(stv);
var c1=dc.body1.children(":first");
var c2=dc.body2.children(":first");
if(c1.length&&c2.length){
var top1=c1.offset().top;
var top2=c2.offset().top;
if(top1!=top2){
b1.scrollTop(b1.scrollTop()+top1-top2);
}
}
dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());
dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());
});
};
function _751(_752){
return function(e){
var td=$(e.target).closest("td[field]");
if(td.length){
var _753=_754(td);
if(!$(_753).data("datagrid").resizing&&_752){
td.addClass("datagrid-header-over");
}else{
td.removeClass("datagrid-header-over");
}
}
};
};
function _755(e){
var _756=_754(e.target);
var opts=$(_756).datagrid("options");
var ck=$(e.target).closest("input[type=checkbox]");
if(ck.length){
if(opts.singleSelect&&opts.selectOnCheck){
return false;
}
if(ck.is(":checked")){
_757(_756);
}else{
_758(_756);
}
e.stopPropagation();
}else{
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
if(e.pageX<p2&&e.pageX>p1){
_759(_756,cell.parent().attr("field"));
}
}
}
};
function _75a(e){
var _75b=_754(e.target);
var opts=$(_75b).datagrid("options");
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
var cond=opts.resizeHandle=="right"?(e.pageX>p2):(opts.resizeHandle=="left"?(e.pageX<p1):(e.pageX<p1||e.pageX>p2));
if(cond){
var _75c=cell.parent().attr("field");
var col=_746(_75b,_75c);
if(col.resizable==false){
return;
}
$(_75b).datagrid("autoSizeColumn",_75c);
col.auto=false;
}
}
};
function _75d(e){
var _75e=_754(e.target);
var opts=$(_75e).datagrid("options");
var td=$(e.target).closest("td[field]");
opts.onHeaderContextMenu.call(_75e,e,td.attr("field"));
};
function _75f(_760){
return function(e){
var tr=_761(e.target);
if(!tr){
return;
}
var _762=_754(tr);
if($.data(_762,"datagrid").resizing){
return;
}
var _763=_764(tr);
if(_760){
_765(_762,_763);
}else{
var opts=$.data(_762,"datagrid").options;
opts.finder.getTr(_762,_763).removeClass("datagrid-row-over");
}
};
};
function _766(e){
var tr=_761(e.target);
if(!tr){
return;
}
var _767=_754(tr);
var opts=$.data(_767,"datagrid").options;
var _768=_764(tr);
var tt=$(e.target);
if(tt.parent().hasClass("datagrid-cell-check")){
if(opts.singleSelect&&opts.selectOnCheck){
tt._propAttr("checked",!tt.is(":checked"));
_769(_767,_768);
}else{
if(tt.is(":checked")){
tt._propAttr("checked",false);
_769(_767,_768);
}else{
tt._propAttr("checked",true);
_76a(_767,_768);
}
}
}else{
var row=opts.finder.getRow(_767,_768);
var td=tt.closest("td[field]",tr);
if(td.length){
var _76b=td.attr("field");
opts.onClickCell.call(_767,_768,_76b,row[_76b]);
}
if(opts.singleSelect==true){
_76c(_767,_768);
}else{
if(opts.ctrlSelect){
if(e.metaKey||e.ctrlKey){
if(tr.hasClass("datagrid-row-selected")){
_76d(_767,_768);
}else{
_76c(_767,_768);
}
}else{
if(e.shiftKey){
$(_767).datagrid("clearSelections");
var _76e=Math.min(opts.lastSelectedIndex||0,_768);
var _76f=Math.max(opts.lastSelectedIndex||0,_768);
for(var i=_76e;i<=_76f;i++){
_76c(_767,i);
}
}else{
$(_767).datagrid("clearSelections");
_76c(_767,_768);
opts.lastSelectedIndex=_768;
}
}
}else{
if(tr.hasClass("datagrid-row-selected")){
_76d(_767,_768);
}else{
_76c(_767,_768);
}
}
}
opts.onClickRow.apply(_767,_6eb(_767,[_768,row]));
}
};
function _770(e){
var tr=_761(e.target);
if(!tr){
return;
}
var _771=_754(tr);
var opts=$.data(_771,"datagrid").options;
var _772=_764(tr);
var row=opts.finder.getRow(_771,_772);
var td=$(e.target).closest("td[field]",tr);
if(td.length){
var _773=td.attr("field");
opts.onDblClickCell.call(_771,_772,_773,row[_773]);
}
opts.onDblClickRow.apply(_771,_6eb(_771,[_772,row]));
};
function _774(e){
var tr=_761(e.target);
if(tr){
var _775=_754(tr);
var opts=$.data(_775,"datagrid").options;
var _776=_764(tr);
var row=opts.finder.getRow(_775,_776);
opts.onRowContextMenu.call(_775,e,_776,row);
}else{
var body=_761(e.target,".datagrid-body");
if(body){
var _775=_754(body);
var opts=$.data(_775,"datagrid").options;
opts.onRowContextMenu.call(_775,e,-1,null);
}
}
};
function _754(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _761(t,_777){
var tr=$(t).closest(_777||"tr.datagrid-row");
if(tr.length&&tr.parent().length){
return tr;
}else{
return undefined;
}
};
function _764(tr){
if(tr.attr("datagrid-row-index")){
return parseInt(tr.attr("datagrid-row-index"));
}else{
return tr.attr("node-id");
}
};
function _759(_778,_779){
var _77a=$.data(_778,"datagrid");
var opts=_77a.options;
_779=_779||{};
var _77b={sortName:opts.sortName,sortOrder:opts.sortOrder};
if(typeof _779=="object"){
$.extend(_77b,_779);
}
var _77c=[];
var _77d=[];
if(_77b.sortName){
_77c=_77b.sortName.split(",");
_77d=_77b.sortOrder.split(",");
}
if(typeof _779=="string"){
var _77e=_779;
var col=_746(_778,_77e);
if(!col.sortable||_77a.resizing){
return;
}
var _77f=col.order||"asc";
var pos=_6e8(_77c,_77e);
if(pos>=0){
var _780=_77d[pos]=="asc"?"desc":"asc";
if(opts.multiSort&&_780==_77f){
_77c.splice(pos,1);
_77d.splice(pos,1);
}else{
_77d[pos]=_780;
}
}else{
if(opts.multiSort){
_77c.push(_77e);
_77d.push(_77f);
}else{
_77c=[_77e];
_77d=[_77f];
}
}
_77b.sortName=_77c.join(",");
_77b.sortOrder=_77d.join(",");
}
if(opts.onBeforeSortColumn.call(_778,_77b.sortName,_77b.sortOrder)==false){
return;
}
$.extend(opts,_77b);
var dc=_77a.dc;
var _781=dc.header1.add(dc.header2);
_781.find("div.datagrid-cell").removeClass("datagrid-sort-asc datagrid-sort-desc");
for(var i=0;i<_77c.length;i++){
var col=_746(_778,_77c[i]);
_781.find("div."+col.cellClass).addClass("datagrid-sort-"+_77d[i]);
}
if(opts.remoteSort){
_782(_778);
}else{
_783(_778,$(_778).datagrid("getData"));
}
opts.onSortColumn.call(_778,opts.sortName,opts.sortOrder);
};
function _784(_785,_786,_787){
_788(true);
_788(false);
function _788(_789){
var aa=_78a(_785,_789);
if(aa.length){
var _78b=aa[aa.length-1];
var _78c=_6e8(_78b,_786);
if(_78c>=0){
for(var _78d=0;_78d<aa.length-1;_78d++){
var td=$("#"+aa[_78d][_78c]);
var _78e=parseInt(td.attr("colspan")||1)+(_787||0);
td.attr("colspan",_78e);
if(_78e){
td.show();
}else{
td.hide();
}
}
}
}
};
};
function _78f(_790){
var _791=$.data(_790,"datagrid");
var opts=_791.options;
var dc=_791.dc;
var _792=dc.view2.children("div.datagrid-header");
dc.body2.css("overflow-x","");
_793();
_794();
_795();
_793(true);
if(_792.width()>=_792.find("table").width()){
dc.body2.css("overflow-x","hidden");
}
function _795(){
if(!opts.fitColumns){
return;
}
if(!_791.leftWidth){
_791.leftWidth=0;
}
var _796=0;
var cc=[];
var _797=_745(_790,false);
for(var i=0;i<_797.length;i++){
var col=_746(_790,_797[i]);
if(_798(col)){
_796+=col.width;
cc.push({field:col.field,col:col,addingWidth:0});
}
}
if(!_796){
return;
}
cc[cc.length-1].addingWidth-=_791.leftWidth;
var _799=_792.children("div.datagrid-header-inner").show();
var _79a=_792.width()-_792.find("table").width()-opts.scrollbarSize+_791.leftWidth;
var rate=_79a/_796;
if(!opts.showHeader){
_799.hide();
}
for(var i=0;i<cc.length;i++){
var c=cc[i];
var _79b=parseInt(c.col.width*rate);
c.addingWidth+=_79b;
_79a-=_79b;
}
cc[cc.length-1].addingWidth+=_79a;
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c.col.boxWidth+c.addingWidth>0){
c.col.boxWidth+=c.addingWidth;
c.col.width+=c.addingWidth;
}
}
_791.leftWidth=_79a;
$(_790).datagrid("fixColumnSize");
};
function _794(){
var _79c=false;
var _79d=_745(_790,true).concat(_745(_790,false));
$.map(_79d,function(_79e){
var col=_746(_790,_79e);
if(String(col.width||"").indexOf("%")>=0){
var _79f=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0))-col.deltaWidth;
if(_79f>0){
col.boxWidth=_79f;
_79c=true;
}
}
});
if(_79c){
$(_790).datagrid("fixColumnSize");
}
};
function _793(fit){
var _7a0=dc.header1.add(dc.header2).find(".datagrid-cell-group");
if(_7a0.length){
_7a0.each(function(){
$(this)._outerWidth(fit?$(this).parent().width():10);
});
if(fit){
_701(_790);
}
}
};
function _798(col){
if(String(col.width||"").indexOf("%")>=0){
return false;
}
if(!col.hidden&&!col.checkbox&&!col.auto&&!col.fixed){
return true;
}
};
};
function _7a1(_7a2,_7a3){
var _7a4=$.data(_7a2,"datagrid");
var opts=_7a4.options;
var dc=_7a4.dc;
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-9999px\"></div>").appendTo("body");
if(_7a3){
_6fc(_7a3);
$(_7a2).datagrid("fitColumns");
}else{
var _7a5=false;
var _7a6=_745(_7a2,true).concat(_745(_7a2,false));
for(var i=0;i<_7a6.length;i++){
var _7a3=_7a6[i];
var col=_746(_7a2,_7a3);
if(col.auto){
_6fc(_7a3);
_7a5=true;
}
}
if(_7a5){
$(_7a2).datagrid("fitColumns");
}
}
tmp.remove();
function _6fc(_7a7){
var _7a8=dc.view.find("div.datagrid-header td[field=\""+_7a7+"\"] div.datagrid-cell");
_7a8.css("width","");
var col=$(_7a2).datagrid("getColumnOption",_7a7);
col.width=undefined;
col.boxWidth=undefined;
col.auto=true;
$(_7a2).datagrid("fixColumnSize",_7a7);
var _7a9=Math.max(_7aa("header"),_7aa("allbody"),_7aa("allfooter"))+1;
_7a8._outerWidth(_7a9-1);
col.width=_7a9;
col.boxWidth=parseInt(_7a8[0].style.width);
col.deltaWidth=_7a9-col.boxWidth;
_7a8.css("width","");
$(_7a2).datagrid("fixColumnSize",_7a7);
opts.onResizeColumn.call(_7a2,_7a7,col.width);
function _7aa(type){
var _7ab=0;
if(type=="header"){
_7ab=_7ac(_7a8);
}else{
opts.finder.getTr(_7a2,0,type).find("td[field=\""+_7a7+"\"] div.datagrid-cell").each(function(){
var w=_7ac($(this));
if(_7ab<w){
_7ab=w;
}
});
}
return _7ab;
function _7ac(cell){
return cell.is(":visible")?cell._outerWidth():tmp.html(cell.html())._outerWidth();
};
};
};
};
function _7ad(_7ae,_7af){
var _7b0=$.data(_7ae,"datagrid");
var opts=_7b0.options;
var dc=_7b0.dc;
var _7b1=dc.view.find("table.datagrid-btable,table.datagrid-ftable");
_7b1.css("table-layout","fixed");
if(_7af){
fix(_7af);
}else{
var ff=_745(_7ae,true).concat(_745(_7ae,false));
for(var i=0;i<ff.length;i++){
fix(ff[i]);
}
}
_7b1.css("table-layout","");
_7b2(_7ae);
_712(_7ae);
_7b3(_7ae);
function fix(_7b4){
var col=_746(_7ae,_7b4);
if(col.cellClass){
_7b0.ss.set("."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto");
}
};
};
function _7b2(_7b5,tds){
var dc=$.data(_7b5,"datagrid").dc;
tds=tds||dc.view.find("td.datagrid-td-merged");
tds.each(function(){
var td=$(this);
var _7b6=td.attr("colspan")||1;
if(_7b6>1){
var col=_746(_7b5,td.attr("field"));
var _7b7=col.boxWidth+col.deltaWidth-1;
for(var i=1;i<_7b6;i++){
td=td.next();
col=_746(_7b5,td.attr("field"));
_7b7+=col.boxWidth+col.deltaWidth;
}
$(this).children("div.datagrid-cell")._outerWidth(_7b7);
}
});
};
function _7b3(_7b8){
var dc=$.data(_7b8,"datagrid").dc;
dc.view.find("div.datagrid-editable").each(function(){
var cell=$(this);
var _7b9=cell.parent().attr("field");
var col=$(_7b8).datagrid("getColumnOption",_7b9);
cell._outerWidth(col.boxWidth+col.deltaWidth-1);
var ed=$.data(this,"datagrid.editor");
if(ed.actions.resize){
ed.actions.resize(ed.target,cell.width());
}
});
};
function _746(_7ba,_7bb){
function find(_7bc){
if(_7bc){
for(var i=0;i<_7bc.length;i++){
var cc=_7bc[i];
for(var j=0;j<cc.length;j++){
var c=cc[j];
if(c.field==_7bb){
return c;
}
}
}
}
return null;
};
var opts=$.data(_7ba,"datagrid").options;
var col=find(opts.columns);
if(!col){
col=find(opts.frozenColumns);
}
return col;
};
function _78a(_7bd,_7be){
var opts=$.data(_7bd,"datagrid").options;
var _7bf=_7be?opts.frozenColumns:opts.columns;
var aa=[];
var _7c0=_7c1();
for(var i=0;i<_7bf.length;i++){
aa[i]=new Array(_7c0);
}
for(var _7c2=0;_7c2<_7bf.length;_7c2++){
$.map(_7bf[_7c2],function(col){
var _7c3=_7c4(aa[_7c2]);
if(_7c3>=0){
var _7c5=col.field||col.id||"";
for(var c=0;c<(col.colspan||1);c++){
for(var r=0;r<(col.rowspan||1);r++){
aa[_7c2+r][_7c3]=_7c5;
}
_7c3++;
}
}
});
}
return aa;
function _7c1(){
var _7c6=0;
$.map(_7bf[0]||[],function(col){
_7c6+=col.colspan||1;
});
return _7c6;
};
function _7c4(a){
for(var i=0;i<a.length;i++){
if(a[i]==undefined){
return i;
}
}
return -1;
};
};
function _745(_7c7,_7c8){
var aa=_78a(_7c7,_7c8);
return aa.length?aa[aa.length-1]:aa;
};
function _783(_7c9,data){
var _7ca=$.data(_7c9,"datagrid");
var opts=_7ca.options;
var dc=_7ca.dc;
data=opts.loadFilter.call(_7c9,data);
if($.isArray(data)){
data={total:data.length,rows:data};
}
data.total=parseInt(data.total);
_7ca.data=data;
if(data.footer){
_7ca.footer=data.footer;
}
if(!opts.remoteSort&&opts.sortName){
var _7cb=opts.sortName.split(",");
var _7cc=opts.sortOrder.split(",");
data.rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_7cb.length;i++){
var sn=_7cb[i];
var so=_7cc[i];
var col=_746(_7c9,sn);
var _7cd=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_7cd(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_7c9,data.rows);
}
opts.view.render.call(opts.view,_7c9,dc.body2,false);
opts.view.render.call(opts.view,_7c9,dc.body1,true);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_7c9,dc.footer2,false);
opts.view.renderFooter.call(opts.view,_7c9,dc.footer1,true);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_7c9);
}
_7ca.ss.clean();
var _7ce=$(_7c9).datagrid("getPager");
if(_7ce.length){
var _7cf=_7ce.pagination("options");
if(_7cf.total!=data.total){
_7ce.pagination("refresh",{pageNumber:opts.pageNumber,total:data.total});
if(opts.pageNumber!=_7cf.pageNumber&&_7cf.pageNumber>0){
opts.pageNumber=_7cf.pageNumber;
_782(_7c9);
}
}
}
_712(_7c9);
dc.body2.triggerHandler("scroll");
$(_7c9).datagrid("setSelectionState");
$(_7c9).datagrid("autoSizeColumn");
opts.onLoadSuccess.call(_7c9,data);
};
function _7d0(_7d1){
var _7d2=$.data(_7d1,"datagrid");
var opts=_7d2.options;
var dc=_7d2.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
var _7d3=$.data(_7d1,"treegrid")?true:false;
var _7d4=opts.onSelect;
var _7d5=opts.onCheck;
opts.onSelect=opts.onCheck=function(){
};
var rows=opts.finder.getRows(_7d1);
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _7d6=_7d3?row[opts.idField]:$(_7d1).datagrid("getRowIndex",row[opts.idField]);
if(_7d7(_7d2.selectedRows,row)){
_76c(_7d1,_7d6,true,true);
}
if(_7d7(_7d2.checkedRows,row)){
_769(_7d1,_7d6,true);
}
}
opts.onSelect=_7d4;
opts.onCheck=_7d5;
}
function _7d7(a,r){
for(var i=0;i<a.length;i++){
if(a[i][opts.idField]==r[opts.idField]){
a[i]=r;
return true;
}
}
return false;
};
};
function _7d8(_7d9,row){
var _7da=$.data(_7d9,"datagrid");
var opts=_7da.options;
var rows=_7da.data.rows;
if(typeof row=="object"){
return _6e8(rows,row);
}else{
for(var i=0;i<rows.length;i++){
if(rows[i][opts.idField]==row){
return i;
}
}
return -1;
}
};
function _7db(_7dc){
var _7dd=$.data(_7dc,"datagrid");
var opts=_7dd.options;
var data=_7dd.data;
if(opts.idField){
return _7dd.selectedRows;
}else{
var rows=[];
opts.finder.getTr(_7dc,"","selected",2).each(function(){
rows.push(opts.finder.getRow(_7dc,$(this)));
});
return rows;
}
};
function _7de(_7df){
var _7e0=$.data(_7df,"datagrid");
var opts=_7e0.options;
if(opts.idField){
return _7e0.checkedRows;
}else{
var rows=[];
opts.finder.getTr(_7df,"","checked",2).each(function(){
rows.push(opts.finder.getRow(_7df,$(this)));
});
return rows;
}
};
function _7e1(_7e2,_7e3){
var _7e4=$.data(_7e2,"datagrid");
var dc=_7e4.dc;
var opts=_7e4.options;
var tr=opts.finder.getTr(_7e2,_7e3);
if(tr.length){
if(tr.closest("table").hasClass("datagrid-btable-frozen")){
return;
}
var _7e5=dc.view2.children("div.datagrid-header")._outerHeight();
var _7e6=dc.body2;
var _7e7=opts.scrollbarSize;
if(_7e6[0].offsetHeight&&_7e6[0].clientHeight&&_7e6[0].offsetHeight<=_7e6[0].clientHeight){
_7e7=0;
}
var _7e8=_7e6.outerHeight(true)-_7e6.outerHeight();
var top=tr.offset().top-dc.view2.offset().top-_7e5-_7e8;
if(top<0){
_7e6.scrollTop(_7e6.scrollTop()+top);
}else{
if(top+tr._outerHeight()>_7e6.height()-_7e7){
_7e6.scrollTop(_7e6.scrollTop()+top+tr._outerHeight()-_7e6.height()+_7e7);
}
}
}
};
function _765(_7e9,_7ea){
var _7eb=$.data(_7e9,"datagrid");
var opts=_7eb.options;
opts.finder.getTr(_7e9,_7eb.highlightIndex).removeClass("datagrid-row-over");
opts.finder.getTr(_7e9,_7ea).addClass("datagrid-row-over");
_7eb.highlightIndex=_7ea;
};
function _76c(_7ec,_7ed,_7ee,_7ef){
var _7f0=$.data(_7ec,"datagrid");
var opts=_7f0.options;
var row=opts.finder.getRow(_7ec,_7ed);
if(!row){
return;
}
if(opts.onBeforeSelect.apply(_7ec,_6eb(_7ec,[_7ed,row]))==false){
return;
}
if(opts.singleSelect){
_7f1(_7ec,true);
_7f0.selectedRows=[];
}
if(!_7ee&&opts.checkOnSelect){
_769(_7ec,_7ed,true);
}
if(opts.idField){
_6ea(_7f0.selectedRows,opts.idField,row);
}
opts.finder.getTr(_7ec,_7ed).addClass("datagrid-row-selected");
opts.onSelect.apply(_7ec,_6eb(_7ec,[_7ed,row]));
if(!_7ef&&opts.scrollOnSelect){
_7e1(_7ec,_7ed);
}
};
function _76d(_7f2,_7f3,_7f4){
var _7f5=$.data(_7f2,"datagrid");
var dc=_7f5.dc;
var opts=_7f5.options;
var row=opts.finder.getRow(_7f2,_7f3);
if(!row){
return;
}
if(opts.onBeforeUnselect.apply(_7f2,_6eb(_7f2,[_7f3,row]))==false){
return;
}
if(!_7f4&&opts.checkOnSelect){
_76a(_7f2,_7f3,true);
}
opts.finder.getTr(_7f2,_7f3).removeClass("datagrid-row-selected");
if(opts.idField){
_6e9(_7f5.selectedRows,opts.idField,row[opts.idField]);
}
opts.onUnselect.apply(_7f2,_6eb(_7f2,[_7f3,row]));
};
function _7f6(_7f7,_7f8){
var _7f9=$.data(_7f7,"datagrid");
var opts=_7f9.options;
var rows=opts.finder.getRows(_7f7);
var _7fa=$.data(_7f7,"datagrid").selectedRows;
if(!_7f8&&opts.checkOnSelect){
_757(_7f7,true);
}
opts.finder.getTr(_7f7,"","allbody").addClass("datagrid-row-selected");
if(opts.idField){
for(var _7fb=0;_7fb<rows.length;_7fb++){
_6ea(_7fa,opts.idField,rows[_7fb]);
}
}
opts.onSelectAll.call(_7f7,rows);
};
function _7f1(_7fc,_7fd){
var _7fe=$.data(_7fc,"datagrid");
var opts=_7fe.options;
var rows=opts.finder.getRows(_7fc);
var _7ff=$.data(_7fc,"datagrid").selectedRows;
if(!_7fd&&opts.checkOnSelect){
_758(_7fc,true);
}
opts.finder.getTr(_7fc,"","selected").removeClass("datagrid-row-selected");
if(opts.idField){
for(var _800=0;_800<rows.length;_800++){
_6e9(_7ff,opts.idField,rows[_800][opts.idField]);
}
}
opts.onUnselectAll.call(_7fc,rows);
};
function _769(_801,_802,_803){
var _804=$.data(_801,"datagrid");
var opts=_804.options;
var row=opts.finder.getRow(_801,_802);
if(!row){
return;
}
if(opts.onBeforeCheck.apply(_801,_6eb(_801,[_802,row]))==false){
return;
}
if(opts.singleSelect&&opts.selectOnCheck){
_758(_801,true);
_804.checkedRows=[];
}
if(!_803&&opts.selectOnCheck){
_76c(_801,_802,true);
}
var tr=opts.finder.getTr(_801,_802).addClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
tr=opts.finder.getTr(_801,"","checked",2);
if(tr.length==opts.finder.getRows(_801).length){
var dc=_804.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",true);
}
if(opts.idField){
_6ea(_804.checkedRows,opts.idField,row);
}
opts.onCheck.apply(_801,_6eb(_801,[_802,row]));
};
function _76a(_805,_806,_807){
var _808=$.data(_805,"datagrid");
var opts=_808.options;
var row=opts.finder.getRow(_805,_806);
if(!row){
return;
}
if(opts.onBeforeUncheck.apply(_805,_6eb(_805,[_806,row]))==false){
return;
}
if(!_807&&opts.selectOnCheck){
_76d(_805,_806,true);
}
var tr=opts.finder.getTr(_805,_806).removeClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",false);
var dc=_808.dc;
var _809=dc.header1.add(dc.header2);
_809.find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
_6e9(_808.checkedRows,opts.idField,row[opts.idField]);
}
opts.onUncheck.apply(_805,_6eb(_805,[_806,row]));
};
function _757(_80a,_80b){
var _80c=$.data(_80a,"datagrid");
var opts=_80c.options;
var rows=opts.finder.getRows(_80a);
if(!_80b&&opts.selectOnCheck){
_7f6(_80a,true);
}
var dc=_80c.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_80a,"","allbody").addClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",true);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_6ea(_80c.checkedRows,opts.idField,rows[i]);
}
}
opts.onCheckAll.call(_80a,rows);
};
function _758(_80d,_80e){
var _80f=$.data(_80d,"datagrid");
var opts=_80f.options;
var rows=opts.finder.getRows(_80d);
if(!_80e&&opts.selectOnCheck){
_7f1(_80d,true);
}
var dc=_80f.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_80d,"","checked").removeClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",false);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_6e9(_80f.checkedRows,opts.idField,rows[i][opts.idField]);
}
}
opts.onUncheckAll.call(_80d,rows);
};
function _810(_811,_812){
var opts=$.data(_811,"datagrid").options;
var tr=opts.finder.getTr(_811,_812);
var row=opts.finder.getRow(_811,_812);
if(tr.hasClass("datagrid-row-editing")){
return;
}
if(opts.onBeforeEdit.apply(_811,_6eb(_811,[_812,row]))==false){
return;
}
tr.addClass("datagrid-row-editing");
_813(_811,_812);
_7b3(_811);
tr.find("div.datagrid-editable").each(function(){
var _814=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
ed.actions.setValue(ed.target,row[_814]);
});
_815(_811,_812);
opts.onBeginEdit.apply(_811,_6eb(_811,[_812,row]));
};
function _816(_817,_818,_819){
var _81a=$.data(_817,"datagrid");
var opts=_81a.options;
var _81b=_81a.updatedRows;
var _81c=_81a.insertedRows;
var tr=opts.finder.getTr(_817,_818);
var row=opts.finder.getRow(_817,_818);
if(!tr.hasClass("datagrid-row-editing")){
return;
}
if(!_819){
if(!_815(_817,_818)){
return;
}
var _81d=false;
var _81e={};
tr.find("div.datagrid-editable").each(function(){
var _81f=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
var t=$(ed.target);
var _820=t.data("textbox")?t.textbox("textbox"):t;
if(_820.is(":focus")){
_820.triggerHandler("blur");
}
var _821=ed.actions.getValue(ed.target);
if(row[_81f]!==_821){
row[_81f]=_821;
_81d=true;
_81e[_81f]=_821;
}
});
if(_81d){
if(_6e8(_81c,row)==-1){
if(_6e8(_81b,row)==-1){
_81b.push(row);
}
}
}
opts.onEndEdit.apply(_817,_6eb(_817,[_818,row,_81e]));
}
tr.removeClass("datagrid-row-editing");
_822(_817,_818);
$(_817).datagrid("refreshRow",_818);
if(!_819){
opts.onAfterEdit.apply(_817,_6eb(_817,[_818,row,_81e]));
}else{
opts.onCancelEdit.apply(_817,_6eb(_817,[_818,row]));
}
};
function _823(_824,_825){
var opts=$.data(_824,"datagrid").options;
var tr=opts.finder.getTr(_824,_825);
var _826=[];
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
_826.push(ed);
}
});
return _826;
};
function _827(_828,_829){
var _82a=_823(_828,_829.index!=undefined?_829.index:_829.id);
for(var i=0;i<_82a.length;i++){
if(_82a[i].field==_829.field){
return _82a[i];
}
}
return null;
};
function _813(_82b,_82c){
var opts=$.data(_82b,"datagrid").options;
var tr=opts.finder.getTr(_82b,_82c);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-cell");
var _82d=$(this).attr("field");
var col=_746(_82b,_82d);
if(col&&col.editor){
var _82e,_82f;
if(typeof col.editor=="string"){
_82e=col.editor;
}else{
_82e=col.editor.type;
_82f=col.editor.options;
}
var _830=opts.editors[_82e];
if(_830){
var _831=cell.html();
var _832=cell._outerWidth();
cell.addClass("datagrid-editable");
cell._outerWidth(_832);
cell.html("<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\"><tr><td></td></tr></table>");
cell.children("table").bind("click dblclick contextmenu",function(e){
e.stopPropagation();
});
$.data(cell[0],"datagrid.editor",{actions:_830,target:_830.init(cell.find("td"),$.extend({height:opts.editorHeight},_82f)),field:_82d,type:_82e,oldHtml:_831});
}
}
});
_712(_82b,_82c,true);
};
function _822(_833,_834){
var opts=$.data(_833,"datagrid").options;
var tr=opts.finder.getTr(_833,_834);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
if(ed.actions.destroy){
ed.actions.destroy(ed.target);
}
cell.html(ed.oldHtml);
$.removeData(cell[0],"datagrid.editor");
cell.removeClass("datagrid-editable");
cell.css("width","");
}
});
};
function _815(_835,_836){
var tr=$.data(_835,"datagrid").options.finder.getTr(_835,_836);
if(!tr.hasClass("datagrid-row-editing")){
return true;
}
var vbox=tr.find(".validatebox-text");
vbox.validatebox("validate");
vbox.trigger("mouseleave");
var _837=tr.find(".validatebox-invalid");
return _837.length==0;
};
function _838(_839,_83a){
var _83b=$.data(_839,"datagrid").insertedRows;
var _83c=$.data(_839,"datagrid").deletedRows;
var _83d=$.data(_839,"datagrid").updatedRows;
if(!_83a){
var rows=[];
rows=rows.concat(_83b);
rows=rows.concat(_83c);
rows=rows.concat(_83d);
return rows;
}else{
if(_83a=="inserted"){
return _83b;
}else{
if(_83a=="deleted"){
return _83c;
}else{
if(_83a=="updated"){
return _83d;
}
}
}
}
return [];
};
function _83e(_83f,_840){
var _841=$.data(_83f,"datagrid");
var opts=_841.options;
var data=_841.data;
var _842=_841.insertedRows;
var _843=_841.deletedRows;
$(_83f).datagrid("cancelEdit",_840);
var row=opts.finder.getRow(_83f,_840);
if(_6e8(_842,row)>=0){
_6e9(_842,row);
}else{
_843.push(row);
}
_6e9(_841.selectedRows,opts.idField,row[opts.idField]);
_6e9(_841.checkedRows,opts.idField,row[opts.idField]);
opts.view.deleteRow.call(opts.view,_83f,_840);
if(opts.height=="auto"){
_712(_83f);
}
$(_83f).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _844(_845,_846){
var data=$.data(_845,"datagrid").data;
var view=$.data(_845,"datagrid").options.view;
var _847=$.data(_845,"datagrid").insertedRows;
view.insertRow.call(view,_845,_846.index,_846.row);
_847.push(_846.row);
$(_845).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _848(_849,row){
var data=$.data(_849,"datagrid").data;
var view=$.data(_849,"datagrid").options.view;
var _84a=$.data(_849,"datagrid").insertedRows;
view.insertRow.call(view,_849,null,row);
_84a.push(row);
$(_849).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _84b(_84c,_84d){
var _84e=$.data(_84c,"datagrid");
var opts=_84e.options;
var row=opts.finder.getRow(_84c,_84d.index);
var _84f=false;
_84d.row=_84d.row||{};
for(var _850 in _84d.row){
if(row[_850]!==_84d.row[_850]){
_84f=true;
break;
}
}
if(_84f){
if(_6e8(_84e.insertedRows,row)==-1){
if(_6e8(_84e.updatedRows,row)==-1){
_84e.updatedRows.push(row);
}
}
opts.view.updateRow.call(opts.view,_84c,_84d.index,_84d.row);
}
};
function _851(_852){
var _853=$.data(_852,"datagrid");
var data=_853.data;
var rows=data.rows;
var _854=[];
for(var i=0;i<rows.length;i++){
_854.push($.extend({},rows[i]));
}
_853.originalRows=_854;
_853.updatedRows=[];
_853.insertedRows=[];
_853.deletedRows=[];
};
function _855(_856){
var data=$.data(_856,"datagrid").data;
var ok=true;
for(var i=0,len=data.rows.length;i<len;i++){
if(_815(_856,i)){
$(_856).datagrid("endEdit",i);
}else{
ok=false;
}
}
if(ok){
_851(_856);
}
};
function _857(_858){
var _859=$.data(_858,"datagrid");
var opts=_859.options;
var _85a=_859.originalRows;
var _85b=_859.insertedRows;
var _85c=_859.deletedRows;
var _85d=_859.selectedRows;
var _85e=_859.checkedRows;
var data=_859.data;
function _85f(a){
var ids=[];
for(var i=0;i<a.length;i++){
ids.push(a[i][opts.idField]);
}
return ids;
};
function _860(ids,_861){
for(var i=0;i<ids.length;i++){
var _862=_7d8(_858,ids[i]);
if(_862>=0){
(_861=="s"?_76c:_769)(_858,_862,true);
}
}
};
for(var i=0;i<data.rows.length;i++){
$(_858).datagrid("cancelEdit",i);
}
var _863=_85f(_85d);
var _864=_85f(_85e);
_85d.splice(0,_85d.length);
_85e.splice(0,_85e.length);
data.total+=_85c.length-_85b.length;
data.rows=_85a;
_783(_858,data);
_860(_863,"s");
_860(_864,"c");
_851(_858);
};
function _782(_865,_866,cb){
var opts=$.data(_865,"datagrid").options;
if(_866){
opts.queryParams=_866;
}
var _867=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_867,{page:opts.pageNumber||1,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_867,{sort:opts.sortName,order:opts.sortOrder});
}
if(opts.onBeforeLoad.call(_865,_867)==false){
opts.view.setEmptyMsg(_865);
return;
}
$(_865).datagrid("loading");
var _868=opts.loader.call(_865,_867,function(data){
$(_865).datagrid("loaded");
$(_865).datagrid("loadData",data);
if(cb){
cb();
}
},function(){
$(_865).datagrid("loaded");
opts.onLoadError.apply(_865,arguments);
});
if(_868==false){
$(_865).datagrid("loaded");
opts.view.setEmptyMsg(_865);
}
};
function _869(_86a,_86b){
var opts=$.data(_86a,"datagrid").options;
_86b.type=_86b.type||"body";
_86b.rowspan=_86b.rowspan||1;
_86b.colspan=_86b.colspan||1;
if(_86b.rowspan==1&&_86b.colspan==1){
return;
}
var tr=opts.finder.getTr(_86a,(_86b.index!=undefined?_86b.index:_86b.id),_86b.type);
if(!tr.length){
return;
}
var td=tr.find("td[field=\""+_86b.field+"\"]");
td.attr("rowspan",_86b.rowspan).attr("colspan",_86b.colspan);
td.addClass("datagrid-td-merged");
_86c(td.next(),_86b.colspan-1);
for(var i=1;i<_86b.rowspan;i++){
tr=tr.next();
if(!tr.length){
break;
}
_86c(tr.find("td[field=\""+_86b.field+"\"]"),_86b.colspan);
}
_7b2(_86a,td);
function _86c(td,_86d){
for(var i=0;i<_86d;i++){
td.hide();
td=td.next();
}
};
};
$.fn.datagrid=function(_86e,_86f){
if(typeof _86e=="string"){
return $.fn.datagrid.methods[_86e](this,_86f);
}
_86e=_86e||{};
return this.each(function(){
var _870=$.data(this,"datagrid");
var opts;
if(_870){
opts=$.extend(_870.options,_86e);
_870.options=opts;
}else{
opts=$.extend({},$.extend({},$.fn.datagrid.defaults,{queryParams:{}}),$.fn.datagrid.parseOptions(this),_86e);
$(this).css("width","").css("height","");
var _871=_727(this,opts.rownumbers);
if(!opts.columns){
opts.columns=_871.columns;
}
if(!opts.frozenColumns){
opts.frozenColumns=_871.frozenColumns;
}
opts.columns=$.extend(true,[],opts.columns);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.view=$.extend({},opts.view);
$.data(this,"datagrid",{options:opts,panel:_871.panel,dc:_871.dc,ss:null,selectedRows:[],checkedRows:[],data:{total:0,rows:[]},originalRows:[],updatedRows:[],insertedRows:[],deletedRows:[]});
}
_730(this);
_747(this);
_6fc(this);
if(opts.data){
$(this).datagrid("loadData",opts.data);
}else{
var data=$.fn.datagrid.parseData(this);
if(data.total>0){
$(this).datagrid("loadData",data);
}else{
$(this).datagrid("autoSizeColumn");
}
}
_782(this);
});
};
function _872(_873){
var _874={};
$.map(_873,function(name){
_874[name]=_875(name);
});
return _874;
function _875(name){
function isA(_876){
return $.data($(_876)[0],name)!=undefined;
};
return {init:function(_877,_878){
var _879=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_877);
if(_879[name]&&name!="text"){
return _879[name](_878);
}else{
return _879;
}
},destroy:function(_87a){
if(isA(_87a,name)){
$(_87a)[name]("destroy");
}
},getValue:function(_87b){
if(isA(_87b,name)){
var opts=$(_87b)[name]("options");
if(opts.multiple){
return $(_87b)[name]("getValues").join(opts.separator);
}else{
return $(_87b)[name]("getValue");
}
}else{
return $(_87b).val();
}
},setValue:function(_87c,_87d){
if(isA(_87c,name)){
var opts=$(_87c)[name]("options");
if(opts.multiple){
if(_87d){
$(_87c)[name]("setValues",_87d.split(opts.separator));
}else{
$(_87c)[name]("clear");
}
}else{
$(_87c)[name]("setValue",_87d);
}
}else{
$(_87c).val(_87d);
}
},resize:function(_87e,_87f){
if(isA(_87e,name)){
$(_87e)[name]("resize",_87f);
}else{
$(_87e)._size({width:_87f,height:$.fn.datagrid.defaults.editorHeight});
}
}};
};
};
var _880=$.extend({},_872(["text","textbox","passwordbox","filebox","numberbox","numberspinner","combobox","combotree","combogrid","combotreegrid","datebox","datetimebox","timespinner","datetimespinner"]),{textarea:{init:function(_881,_882){
var _883=$("<textarea class=\"datagrid-editable-input\"></textarea>").appendTo(_881);
_883.css("vertical-align","middle")._outerHeight(_882.height);
return _883;
},getValue:function(_884){
return $(_884).val();
},setValue:function(_885,_886){
$(_885).val(_886);
},resize:function(_887,_888){
$(_887)._outerWidth(_888);
}},checkbox:{init:function(_889,_88a){
var _88b=$("<input type=\"checkbox\">").appendTo(_889);
_88b.val(_88a.on);
_88b.attr("offval",_88a.off);
return _88b;
},getValue:function(_88c){
if($(_88c).is(":checked")){
return $(_88c).val();
}else{
return $(_88c).attr("offval");
}
},setValue:function(_88d,_88e){
var _88f=false;
if($(_88d).val()==_88e){
_88f=true;
}
$(_88d)._propAttr("checked",_88f);
}},validatebox:{init:function(_890,_891){
var _892=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_890);
_892.validatebox(_891);
return _892;
},destroy:function(_893){
$(_893).validatebox("destroy");
},getValue:function(_894){
return $(_894).val();
},setValue:function(_895,_896){
$(_895).val(_896);
},resize:function(_897,_898){
$(_897)._outerWidth(_898)._outerHeight($.fn.datagrid.defaults.editorHeight);
}}});
$.fn.datagrid.methods={options:function(jq){
var _899=$.data(jq[0],"datagrid").options;
var _89a=$.data(jq[0],"datagrid").panel.panel("options");
var opts=$.extend(_899,{width:_89a.width,height:_89a.height,closed:_89a.closed,collapsed:_89a.collapsed,minimized:_89a.minimized,maximized:_89a.maximized});
return opts;
},setSelectionState:function(jq){
return jq.each(function(){
_7d0(this);
});
},createStyleSheet:function(jq){
return _6ed(jq[0]);
},getPanel:function(jq){
return $.data(jq[0],"datagrid").panel;
},getPager:function(jq){
return $.data(jq[0],"datagrid").panel.children("div.datagrid-pager");
},getColumnFields:function(jq,_89b){
return _745(jq[0],_89b);
},getColumnOption:function(jq,_89c){
return _746(jq[0],_89c);
},resize:function(jq,_89d){
return jq.each(function(){
_6fc(this,_89d);
});
},load:function(jq,_89e){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _89e=="string"){
opts.url=_89e;
_89e=null;
}
opts.pageNumber=1;
var _89f=$(this).datagrid("getPager");
_89f.pagination("refresh",{pageNumber:1});
_782(this,_89e);
});
},reload:function(jq,_8a0){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _8a0=="string"){
opts.url=_8a0;
_8a0=null;
}
_782(this,_8a0);
});
},reloadFooter:function(jq,_8a1){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
var dc=$.data(this,"datagrid").dc;
if(_8a1){
$.data(this,"datagrid").footer=_8a1;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).datagrid("fixRowHeight");
}
});
},loading:function(jq){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
$(this).datagrid("getPager").pagination("loading");
if(opts.loadMsg){
var _8a2=$(this).datagrid("getPanel");
if(!_8a2.children("div.datagrid-mask").length){
$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo(_8a2);
var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html(opts.loadMsg).appendTo(_8a2);
msg._outerHeight(40);
msg.css({marginLeft:(-msg.outerWidth()/2),lineHeight:(msg.height()+"px")});
}
}
});
},loaded:function(jq){
return jq.each(function(){
$(this).datagrid("getPager").pagination("loaded");
var _8a3=$(this).datagrid("getPanel");
_8a3.children("div.datagrid-mask-msg").remove();
_8a3.children("div.datagrid-mask").remove();
});
},fitColumns:function(jq){
return jq.each(function(){
_78f(this);
});
},fixColumnSize:function(jq,_8a4){
return jq.each(function(){
_7ad(this,_8a4);
});
},fixRowHeight:function(jq,_8a5){
return jq.each(function(){
_712(this,_8a5);
});
},freezeRow:function(jq,_8a6){
return jq.each(function(){
_720(this,_8a6);
});
},autoSizeColumn:function(jq,_8a7){
return jq.each(function(){
_7a1(this,_8a7);
});
},loadData:function(jq,data){
return jq.each(function(){
_783(this,data);
_851(this);
});
},getData:function(jq){
return $.data(jq[0],"datagrid").data;
},getRows:function(jq){
return $.data(jq[0],"datagrid").data.rows;
},getFooterRows:function(jq){
return $.data(jq[0],"datagrid").footer;
},getRowIndex:function(jq,id){
return _7d8(jq[0],id);
},getChecked:function(jq){
return _7de(jq[0]);
},getSelected:function(jq){
var rows=_7db(jq[0]);
return rows.length>0?rows[0]:null;
},getSelections:function(jq){
return _7db(jq[0]);
},clearSelections:function(jq){
return jq.each(function(){
var _8a8=$.data(this,"datagrid");
var _8a9=_8a8.selectedRows;
var _8aa=_8a8.checkedRows;
_8a9.splice(0,_8a9.length);
_7f1(this);
if(_8a8.options.checkOnSelect){
_8aa.splice(0,_8aa.length);
}
});
},clearChecked:function(jq){
return jq.each(function(){
var _8ab=$.data(this,"datagrid");
var _8ac=_8ab.selectedRows;
var _8ad=_8ab.checkedRows;
_8ad.splice(0,_8ad.length);
_758(this);
if(_8ab.options.selectOnCheck){
_8ac.splice(0,_8ac.length);
}
});
},scrollTo:function(jq,_8ae){
return jq.each(function(){
_7e1(this,_8ae);
});
},highlightRow:function(jq,_8af){
return jq.each(function(){
_765(this,_8af);
_7e1(this,_8af);
});
},selectAll:function(jq){
return jq.each(function(){
_7f6(this);
});
},unselectAll:function(jq){
return jq.each(function(){
_7f1(this);
});
},selectRow:function(jq,_8b0){
return jq.each(function(){
_76c(this,_8b0);
});
},selectRecord:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
if(opts.idField){
var _8b1=_7d8(this,id);
if(_8b1>=0){
$(this).datagrid("selectRow",_8b1);
}
}
});
},unselectRow:function(jq,_8b2){
return jq.each(function(){
_76d(this,_8b2);
});
},checkRow:function(jq,_8b3){
return jq.each(function(){
_769(this,_8b3);
});
},uncheckRow:function(jq,_8b4){
return jq.each(function(){
_76a(this,_8b4);
});
},checkAll:function(jq){
return jq.each(function(){
_757(this);
});
},uncheckAll:function(jq){
return jq.each(function(){
_758(this);
});
},beginEdit:function(jq,_8b5){
return jq.each(function(){
_810(this,_8b5);
});
},endEdit:function(jq,_8b6){
return jq.each(function(){
_816(this,_8b6,false);
});
},cancelEdit:function(jq,_8b7){
return jq.each(function(){
_816(this,_8b7,true);
});
},getEditors:function(jq,_8b8){
return _823(jq[0],_8b8);
},getEditor:function(jq,_8b9){
return _827(jq[0],_8b9);
},refreshRow:function(jq,_8ba){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.refreshRow.call(opts.view,this,_8ba);
});
},validateRow:function(jq,_8bb){
return _815(jq[0],_8bb);
},updateRow:function(jq,_8bc){
return jq.each(function(){
_84b(this,_8bc);
});
},appendRow:function(jq,row){
return jq.each(function(){
_848(this,row);
});
},insertRow:function(jq,_8bd){
return jq.each(function(){
_844(this,_8bd);
});
},deleteRow:function(jq,_8be){
return jq.each(function(){
_83e(this,_8be);
});
},getChanges:function(jq,_8bf){
return _838(jq[0],_8bf);
},acceptChanges:function(jq){
return jq.each(function(){
_855(this);
});
},rejectChanges:function(jq){
return jq.each(function(){
_857(this);
});
},mergeCells:function(jq,_8c0){
return jq.each(function(){
_869(this,_8c0);
});
},showColumn:function(jq,_8c1){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_8c1);
if(col.hidden){
col.hidden=false;
$(this).datagrid("getPanel").find("td[field=\""+_8c1+"\"]").show();
_784(this,_8c1,1);
$(this).datagrid("fitColumns");
}
});
},hideColumn:function(jq,_8c2){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_8c2);
if(!col.hidden){
col.hidden=true;
$(this).datagrid("getPanel").find("td[field=\""+_8c2+"\"]").hide();
_784(this,_8c2,-1);
$(this).datagrid("fitColumns");
}
});
},sort:function(jq,_8c3){
return jq.each(function(){
_759(this,_8c3);
});
},gotoPage:function(jq,_8c4){
return jq.each(function(){
var _8c5=this;
var page,cb;
if(typeof _8c4=="object"){
page=_8c4.page;
cb=_8c4.callback;
}else{
page=_8c4;
}
$(_8c5).datagrid("options").pageNumber=page;
$(_8c5).datagrid("getPager").pagination("refresh",{pageNumber:page});
_782(_8c5,null,function(){
if(cb){
cb.call(_8c5,page);
}
});
});
}};
$.fn.datagrid.parseOptions=function(_8c6){
var t=$(_8c6);
return $.extend({},$.fn.panel.parseOptions(_8c6),$.parser.parseOptions(_8c6,["url","toolbar","idField","sortName","sortOrder","pagePosition","resizeHandle",{sharedStyleSheet:"boolean",fitColumns:"boolean",autoRowHeight:"boolean",striped:"boolean",nowrap:"boolean"},{rownumbers:"boolean",singleSelect:"boolean",ctrlSelect:"boolean",checkOnSelect:"boolean",selectOnCheck:"boolean"},{pagination:"boolean",pageSize:"number",pageNumber:"number"},{multiSort:"boolean",remoteSort:"boolean",showHeader:"boolean",showFooter:"boolean"},{scrollbarSize:"number",scrollOnSelect:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined),loadMsg:(t.attr("loadMsg")!=undefined?t.attr("loadMsg"):undefined),rowStyler:(t.attr("rowStyler")?eval(t.attr("rowStyler")):undefined)});
};
$.fn.datagrid.parseData=function(_8c7){
var t=$(_8c7);
var data={total:0,rows:[]};
var _8c8=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields",false));
t.find("tbody tr").each(function(){
data.total++;
var row={};
$.extend(row,$.parser.parseOptions(this,["iconCls","state"]));
for(var i=0;i<_8c8.length;i++){
row[_8c8[i]]=$(this).find("td:eq("+i+")").html();
}
data.rows.push(row);
});
return data;
};
var _8c9={render:function(_8ca,_8cb,_8cc){
var rows=$(_8ca).datagrid("getRows");
$(_8cb).empty().html(this.renderTable(_8ca,0,rows,_8cc));
},renderFooter:function(_8cd,_8ce,_8cf){
var opts=$.data(_8cd,"datagrid").options;
var rows=$.data(_8cd,"datagrid").footer||[];
var _8d0=$(_8cd).datagrid("getColumnFields",_8cf);
var _8d1=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
_8d1.push("<tr class=\"datagrid-row\" datagrid-row-index=\""+i+"\">");
_8d1.push(this.renderRow.call(this,_8cd,_8d0,_8cf,i,rows[i]));
_8d1.push("</tr>");
}
_8d1.push("</tbody></table>");
$(_8ce).html(_8d1.join(""));
},renderTable:function(_8d2,_8d3,rows,_8d4){
var _8d5=$.data(_8d2,"datagrid");
var opts=_8d5.options;
if(_8d4){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return "";
}
}
var _8d6=$(_8d2).datagrid("getColumnFields",_8d4);
var _8d7=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var css=opts.rowStyler?opts.rowStyler.call(_8d2,_8d3,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_8d3%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _8d8=cs.s?"style=\""+cs.s+"\"":"";
var _8d9=_8d5.rowIdPrefix+"-"+(_8d4?1:2)+"-"+_8d3;
_8d7.push("<tr id=\""+_8d9+"\" datagrid-row-index=\""+_8d3+"\" "+cls+" "+_8d8+">");
_8d7.push(this.renderRow.call(this,_8d2,_8d6,_8d4,_8d3,row));
_8d7.push("</tr>");
_8d3++;
}
_8d7.push("</tbody></table>");
return _8d7.join("");
},renderRow:function(_8da,_8db,_8dc,_8dd,_8de){
var opts=$.data(_8da,"datagrid").options;
var cc=[];
if(_8dc&&opts.rownumbers){
var _8df=_8dd+1;
if(opts.pagination){
_8df+=(opts.pageNumber-1)*opts.pageSize;
}
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"+_8df+"</div></td>");
}
for(var i=0;i<_8db.length;i++){
var _8e0=_8db[i];
var col=$(_8da).datagrid("getColumnOption",_8e0);
if(col){
var _8e1=_8de[_8e0];
var css=col.styler?(col.styler.call(_8da,_8e1,_8de,_8dd)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _8e2=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_8e0+"\" "+cls+" "+_8e2+">");
var _8e2="";
if(!col.checkbox){
if(col.align){
_8e2+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_8e2+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_8e2+="height:auto;";
}
}
}
cc.push("<div style=\""+_8e2+"\" ");
cc.push(col.checkbox?"class=\"datagrid-cell-check\"":"class=\"datagrid-cell "+col.cellClass+"\"");
cc.push(">");
if(col.checkbox){
cc.push("<input type=\"checkbox\" "+(_8de.checked?"checked=\"checked\"":""));
cc.push(" name=\""+_8e0+"\" value=\""+(_8e1!=undefined?_8e1:"")+"\">");
}else{
if(col.formatter){
cc.push(col.formatter(_8e1,_8de,_8dd));
}else{
cc.push(_8e1);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},getStyleValue:function(css){
var _8e3="";
var _8e4="";
if(typeof css=="string"){
_8e4=css;
}else{
if(css){
_8e3=css["class"]||"";
_8e4=css["style"]||"";
}
}
return {c:_8e3,s:_8e4};
},refreshRow:function(_8e5,_8e6){
this.updateRow.call(this,_8e5,_8e6,{});
},updateRow:function(_8e7,_8e8,row){
var opts=$.data(_8e7,"datagrid").options;
var _8e9=opts.finder.getRow(_8e7,_8e8);
$.extend(_8e9,row);
var cs=_8ea.call(this,_8e8);
var _8eb=cs.s;
var cls="datagrid-row "+(_8e8%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c;
function _8ea(_8ec){
var css=opts.rowStyler?opts.rowStyler.call(_8e7,_8ec,_8e9):"";
return this.getStyleValue(css);
};
function _8ed(_8ee){
var tr=opts.finder.getTr(_8e7,_8e8,"body",(_8ee?1:2));
if(!tr.length){
return;
}
var _8ef=$(_8e7).datagrid("getColumnFields",_8ee);
var _8f0=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow.call(this,_8e7,_8ef,_8ee,_8e8,_8e9));
var _8f1=(tr.hasClass("datagrid-row-checked")?" datagrid-row-checked":"")+(tr.hasClass("datagrid-row-selected")?" datagrid-row-selected":"");
tr.attr("style",_8eb).attr("class",cls+_8f1);
if(_8f0){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
};
_8ed.call(this,true);
_8ed.call(this,false);
$(_8e7).datagrid("fixRowHeight",_8e8);
},insertRow:function(_8f2,_8f3,row){
var _8f4=$.data(_8f2,"datagrid");
var opts=_8f4.options;
var dc=_8f4.dc;
var data=_8f4.data;
if(_8f3==undefined||_8f3==null){
_8f3=data.rows.length;
}
if(_8f3>data.rows.length){
_8f3=data.rows.length;
}
function _8f5(_8f6){
var _8f7=_8f6?1:2;
for(var i=data.rows.length-1;i>=_8f3;i--){
var tr=opts.finder.getTr(_8f2,i,"body",_8f7);
tr.attr("datagrid-row-index",i+1);
tr.attr("id",_8f4.rowIdPrefix+"-"+_8f7+"-"+(i+1));
if(_8f6&&opts.rownumbers){
var _8f8=i+2;
if(opts.pagination){
_8f8+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_8f8);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i+1)%2?"datagrid-row-alt":"");
}
}
};
function _8f9(_8fa){
var _8fb=_8fa?1:2;
var _8fc=$(_8f2).datagrid("getColumnFields",_8fa);
var _8fd=_8f4.rowIdPrefix+"-"+_8fb+"-"+_8f3;
var tr="<tr id=\""+_8fd+"\" class=\"datagrid-row\" datagrid-row-index=\""+_8f3+"\"></tr>";
if(_8f3>=data.rows.length){
if(data.rows.length){
opts.finder.getTr(_8f2,"","last",_8fb).after(tr);
}else{
var cc=_8fa?dc.body1:dc.body2;
cc.html("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"+tr+"</tbody></table>");
}
}else{
opts.finder.getTr(_8f2,_8f3+1,"body",_8fb).before(tr);
}
};
_8f5.call(this,true);
_8f5.call(this,false);
_8f9.call(this,true);
_8f9.call(this,false);
data.total+=1;
data.rows.splice(_8f3,0,row);
this.setEmptyMsg(_8f2);
this.refreshRow.call(this,_8f2,_8f3);
},deleteRow:function(_8fe,_8ff){
var _900=$.data(_8fe,"datagrid");
var opts=_900.options;
var data=_900.data;
function _901(_902){
var _903=_902?1:2;
for(var i=_8ff+1;i<data.rows.length;i++){
var tr=opts.finder.getTr(_8fe,i,"body",_903);
tr.attr("datagrid-row-index",i-1);
tr.attr("id",_900.rowIdPrefix+"-"+_903+"-"+(i-1));
if(_902&&opts.rownumbers){
var _904=i;
if(opts.pagination){
_904+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_904);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i-1)%2?"datagrid-row-alt":"");
}
}
};
opts.finder.getTr(_8fe,_8ff).remove();
_901.call(this,true);
_901.call(this,false);
data.total-=1;
data.rows.splice(_8ff,1);
this.setEmptyMsg(_8fe);
},onBeforeRender:function(_905,rows){
},onAfterRender:function(_906){
var _907=$.data(_906,"datagrid");
var opts=_907.options;
if(opts.showFooter){
var _908=$(_906).datagrid("getPanel").find("div.datagrid-footer");
_908.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility","hidden");
}
this.setEmptyMsg(_906);
},setEmptyMsg:function(_909){
var _90a=$.data(_909,"datagrid");
var opts=_90a.options;
var _90b=opts.finder.getRows(_909).length==0;
if(_90b){
this.renderEmptyRow(_909);
}
if(opts.emptyMsg){
_90a.dc.view.children(".datagrid-empty").remove();
if(_90b){
var h=_90a.dc.header2.parent().outerHeight();
var d=$("<div class=\"datagrid-empty\"></div>").appendTo(_90a.dc.view);
d.html(opts.emptyMsg).css("top",h+"px");
}
}
},renderEmptyRow:function(_90c){
var cols=$.map($(_90c).datagrid("getColumnFields"),function(_90d){
return $(_90c).datagrid("getColumnOption",_90d);
});
$.map(cols,function(col){
col.formatter1=col.formatter;
col.styler1=col.styler;
col.formatter=col.styler=undefined;
});
var _90e=$.data(_90c,"datagrid").dc.body2;
_90e.html(this.renderTable(_90c,0,[{}],false));
_90e.find("tbody *").css({height:1,borderColor:"transparent",background:"transparent"});
var tr=_90e.find(".datagrid-row");
tr.removeClass("datagrid-row").removeAttr("datagrid-row-index");
tr.find(".datagrid-cell,.datagrid-cell-check").empty();
$.map(cols,function(col){
col.formatter=col.formatter1;
col.styler=col.styler1;
col.formatter1=col.styler1=undefined;
});
}};
$.fn.datagrid.defaults=$.extend({},$.fn.panel.defaults,{sharedStyleSheet:false,frozenColumns:undefined,columns:undefined,fitColumns:false,resizeHandle:"right",resizeEdge:5,autoRowHeight:true,toolbar:null,striped:false,method:"post",nowrap:true,idField:null,url:null,data:null,loadMsg:"Processing, please wait ...",emptyMsg:"",rownumbers:false,singleSelect:false,ctrlSelect:false,selectOnCheck:true,checkOnSelect:true,pagination:false,pagePosition:"bottom",pageNumber:1,pageSize:10,pageList:[10,20,30,40,50],queryParams:{},sortName:null,sortOrder:"asc",multiSort:false,remoteSort:true,showHeader:true,showFooter:false,scrollOnSelect:true,scrollbarSize:18,rownumberWidth:30,editorHeight:31,headerEvents:{mouseover:_751(true),mouseout:_751(false),click:_755,dblclick:_75a,contextmenu:_75d},rowEvents:{mouseover:_75f(true),mouseout:_75f(false),click:_766,dblclick:_770,contextmenu:_774},rowStyler:function(_90f,_910){
},loader:function(_911,_912,_913){
var opts=$(this).datagrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_911,dataType:"json",success:function(data){
_912(data);
},error:function(){
_913.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},editors:_880,finder:{getTr:function(_914,_915,type,_916){
type=type||"body";
_916=_916||0;
var _917=$.data(_914,"datagrid");
var dc=_917.dc;
var opts=_917.options;
if(_916==0){
var tr1=opts.finder.getTr(_914,_915,type,1);
var tr2=opts.finder.getTr(_914,_915,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+_917.rowIdPrefix+"-"+_916+"-"+_915);
if(!tr.length){
tr=(_916==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index="+_915+"]");
}
return tr;
}else{
if(type=="footer"){
return (_916==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index="+_915+"]");
}else{
if(type=="selected"){
return (_916==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_916==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_916==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-checked");
}else{
if(type=="editing"){
return (_916==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-editing");
}else{
if(type=="last"){
return (_916==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]:last");
}else{
if(type=="allbody"){
return (_916==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]");
}else{
if(type=="allfooter"){
return (_916==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index]");
}
}
}
}
}
}
}
}
}
}
},getRow:function(_918,p){
var _919=(typeof p=="object")?p.attr("datagrid-row-index"):p;
return $.data(_918,"datagrid").data.rows[parseInt(_919)];
},getRows:function(_91a){
return $(_91a).datagrid("getRows");
}},view:_8c9,onBeforeLoad:function(_91b){
},onLoadSuccess:function(){
},onLoadError:function(){
},onClickRow:function(_91c,_91d){
},onDblClickRow:function(_91e,_91f){
},onClickCell:function(_920,_921,_922){
},onDblClickCell:function(_923,_924,_925){
},onBeforeSortColumn:function(sort,_926){
},onSortColumn:function(sort,_927){
},onResizeColumn:function(_928,_929){
},onBeforeSelect:function(_92a,_92b){
},onSelect:function(_92c,_92d){
},onBeforeUnselect:function(_92e,_92f){
},onUnselect:function(_930,_931){
},onSelectAll:function(rows){
},onUnselectAll:function(rows){
},onBeforeCheck:function(_932,_933){
},onCheck:function(_934,_935){
},onBeforeUncheck:function(_936,_937){
},onUncheck:function(_938,_939){
},onCheckAll:function(rows){
},onUncheckAll:function(rows){
},onBeforeEdit:function(_93a,_93b){
},onBeginEdit:function(_93c,_93d){
},onEndEdit:function(_93e,_93f,_940){
},onAfterEdit:function(_941,_942,_943){
},onCancelEdit:function(_944,_945){
},onHeaderContextMenu:function(e,_946){
},onRowContextMenu:function(e,_947,_948){
}});
})(jQuery);
(function($){
var _949;
$(document).unbind(".propertygrid").bind("mousedown.propertygrid",function(e){
var p=$(e.target).closest("div.datagrid-view,div.combo-panel");
if(p.length){
return;
}
_94a(_949);
_949=undefined;
});
function _94b(_94c){
var _94d=$.data(_94c,"propertygrid");
var opts=$.data(_94c,"propertygrid").options;
$(_94c).datagrid($.extend({},opts,{cls:"propertygrid",view:(opts.showGroup?opts.groupView:opts.view),onBeforeEdit:function(_94e,row){
if(opts.onBeforeEdit.call(_94c,_94e,row)==false){
return false;
}
var dg=$(this);
var row=dg.datagrid("getRows")[_94e];
var col=dg.datagrid("getColumnOption","value");
col.editor=row.editor;
},onClickCell:function(_94f,_950,_951){
if(_949!=this){
_94a(_949);
_949=this;
}
if(opts.editIndex!=_94f){
_94a(_949);
$(this).datagrid("beginEdit",_94f);
var ed=$(this).datagrid("getEditor",{index:_94f,field:_950});
if(!ed){
ed=$(this).datagrid("getEditor",{index:_94f,field:"value"});
}
if(ed){
var t=$(ed.target);
var _952=t.data("textbox")?t.textbox("textbox"):t;
_952.focus();
opts.editIndex=_94f;
}
}
opts.onClickCell.call(_94c,_94f,_950,_951);
},loadFilter:function(data){
_94a(this);
return opts.loadFilter.call(this,data);
}}));
};
function _94a(_953){
var t=$(_953);
if(!t.length){
return;
}
var opts=$.data(_953,"propertygrid").options;
opts.finder.getTr(_953,null,"editing").each(function(){
var _954=parseInt($(this).attr("datagrid-row-index"));
if(t.datagrid("validateRow",_954)){
t.datagrid("endEdit",_954);
}else{
t.datagrid("cancelEdit",_954);
}
});
opts.editIndex=undefined;
};
$.fn.propertygrid=function(_955,_956){
if(typeof _955=="string"){
var _957=$.fn.propertygrid.methods[_955];
if(_957){
return _957(this,_956);
}else{
return this.datagrid(_955,_956);
}
}
_955=_955||{};
return this.each(function(){
var _958=$.data(this,"propertygrid");
if(_958){
$.extend(_958.options,_955);
}else{
var opts=$.extend({},$.fn.propertygrid.defaults,$.fn.propertygrid.parseOptions(this),_955);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.columns=$.extend(true,[],opts.columns);
$.data(this,"propertygrid",{options:opts});
}
_94b(this);
});
};
$.fn.propertygrid.methods={options:function(jq){
return $.data(jq[0],"propertygrid").options;
}};
$.fn.propertygrid.parseOptions=function(_959){
return $.extend({},$.fn.datagrid.parseOptions(_959),$.parser.parseOptions(_959,[{showGroup:"boolean"}]));
};
var _95a=$.extend({},$.fn.datagrid.defaults.view,{render:function(_95b,_95c,_95d){
var _95e=[];
var _95f=this.groups;
for(var i=0;i<_95f.length;i++){
_95e.push(this.renderGroup.call(this,_95b,i,_95f[i],_95d));
}
$(_95c).html(_95e.join(""));
},renderGroup:function(_960,_961,_962,_963){
var _964=$.data(_960,"datagrid");
var opts=_964.options;
var _965=$(_960).datagrid("getColumnFields",_963);
var _966=opts.frozenColumns&&opts.frozenColumns.length;
if(_963){
if(!(opts.rownumbers||_966)){
return "";
}
}
var _967=[];
var css=opts.groupStyler.call(_960,_962.value,_962.rows);
var cs=_968(css,"datagrid-group");
_967.push("<div group-index="+_961+" "+cs+">");
if((_963&&(opts.rownumbers||opts.frozenColumns.length))||(!_963&&!(opts.rownumbers||opts.frozenColumns.length))){
_967.push("<span class=\"datagrid-group-expander\">");
_967.push("<span class=\"datagrid-row-expander datagrid-row-collapse\">&nbsp;</span>");
_967.push("</span>");
}
if((_963&&_966)||(!_963)){
_967.push("<span class=\"datagrid-group-title\">");
_967.push(opts.groupFormatter.call(_960,_962.value,_962.rows));
_967.push("</span>");
}
_967.push("</div>");
_967.push("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>");
var _969=_962.startIndex;
for(var j=0;j<_962.rows.length;j++){
var css=opts.rowStyler?opts.rowStyler.call(_960,_969,_962.rows[j]):"";
var _96a="";
var _96b="";
if(typeof css=="string"){
_96b=css;
}else{
if(css){
_96a=css["class"]||"";
_96b=css["style"]||"";
}
}
var cls="class=\"datagrid-row "+(_969%2&&opts.striped?"datagrid-row-alt ":" ")+_96a+"\"";
var _96c=_96b?"style=\""+_96b+"\"":"";
var _96d=_964.rowIdPrefix+"-"+(_963?1:2)+"-"+_969;
_967.push("<tr id=\""+_96d+"\" datagrid-row-index=\""+_969+"\" "+cls+" "+_96c+">");
_967.push(this.renderRow.call(this,_960,_965,_963,_969,_962.rows[j]));
_967.push("</tr>");
_969++;
}
_967.push("</tbody></table>");
return _967.join("");
function _968(css,cls){
var _96e="";
var _96f="";
if(typeof css=="string"){
_96f=css;
}else{
if(css){
_96e=css["class"]||"";
_96f=css["style"]||"";
}
}
return "class=\""+cls+(_96e?" "+_96e:"")+"\" "+"style=\""+_96f+"\"";
};
},bindEvents:function(_970){
var _971=$.data(_970,"datagrid");
var dc=_971.dc;
var body=dc.body1.add(dc.body2);
var _972=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;
body.unbind("click").bind("click",function(e){
var tt=$(e.target);
var _973=tt.closest("span.datagrid-row-expander");
if(_973.length){
var _974=_973.closest("div.datagrid-group").attr("group-index");
if(_973.hasClass("datagrid-row-collapse")){
$(_970).datagrid("collapseGroup",_974);
}else{
$(_970).datagrid("expandGroup",_974);
}
}else{
_972(e);
}
e.stopPropagation();
});
},onBeforeRender:function(_975,rows){
var _976=$.data(_975,"datagrid");
var opts=_976.options;
_977();
var _978=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _979=_97a(row[opts.groupField]);
if(!_979){
_979={value:row[opts.groupField],rows:[row]};
_978.push(_979);
}else{
_979.rows.push(row);
}
}
var _97b=0;
var _97c=[];
for(var i=0;i<_978.length;i++){
var _979=_978[i];
_979.startIndex=_97b;
_97b+=_979.rows.length;
_97c=_97c.concat(_979.rows);
}
_976.data.rows=_97c;
this.groups=_978;
var that=this;
setTimeout(function(){
that.bindEvents(_975);
},0);
function _97a(_97d){
for(var i=0;i<_978.length;i++){
var _97e=_978[i];
if(_97e.value==_97d){
return _97e;
}
}
return null;
};
function _977(){
if(!$("#datagrid-group-style").length){
$("head").append("<style id=\"datagrid-group-style\">"+".datagrid-group{height:"+opts.groupHeight+"px;overflow:hidden;font-weight:bold;border-bottom:1px solid #ccc;white-space:nowrap;word-break:normal;}"+".datagrid-group-title,.datagrid-group-expander{display:inline-block;vertical-align:bottom;height:100%;line-height:"+opts.groupHeight+"px;padding:0 4px;}"+".datagrid-group-title{position:relative;}"+".datagrid-group-expander{width:"+opts.expanderWidth+"px;text-align:center;padding:0}"+".datagrid-row-expander{margin:"+Math.floor((opts.groupHeight-16)/2)+"px 0;display:inline-block;width:16px;height:16px;cursor:pointer}"+"</style>");
}
};
},onAfterRender:function(_97f){
$.fn.datagrid.defaults.view.onAfterRender.call(this,_97f);
var view=this;
var _980=$.data(_97f,"datagrid");
var opts=_980.options;
if(!_980.onResizeColumn){
_980.onResizeColumn=opts.onResizeColumn;
}
if(!_980.onResize){
_980.onResize=opts.onResize;
}
opts.onResizeColumn=function(_981,_982){
view.resizeGroup(_97f);
_980.onResizeColumn.call(_97f,_981,_982);
};
opts.onResize=function(_983,_984){
view.resizeGroup(_97f);
_980.onResize.call($(_97f).datagrid("getPanel")[0],_983,_984);
};
view.resizeGroup(_97f);
}});
$.extend($.fn.datagrid.methods,{groups:function(jq){
return jq.datagrid("options").view.groups;
},expandGroup:function(jq,_985){
return jq.each(function(){
var opts=$(this).datagrid("options");
var view=$.data(this,"datagrid").dc.view;
var _986=view.find(_985!=undefined?"div.datagrid-group[group-index=\""+_985+"\"]":"div.datagrid-group");
var _987=_986.find("span.datagrid-row-expander");
if(_987.hasClass("datagrid-row-expand")){
_987.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");
_986.next("table").show();
}
$(this).datagrid("fixRowHeight");
if(opts.onExpandGroup){
opts.onExpandGroup.call(this,_985);
}
});
},collapseGroup:function(jq,_988){
return jq.each(function(){
var opts=$(this).datagrid("options");
var view=$.data(this,"datagrid").dc.view;
var _989=view.find(_988!=undefined?"div.datagrid-group[group-index=\""+_988+"\"]":"div.datagrid-group");
var _98a=_989.find("span.datagrid-row-expander");
if(_98a.hasClass("datagrid-row-collapse")){
_98a.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");
_989.next("table").hide();
}
$(this).datagrid("fixRowHeight");
if(opts.onCollapseGroup){
opts.onCollapseGroup.call(this,_988);
}
});
},scrollToGroup:function(jq,_98b){
return jq.each(function(){
var _98c=$.data(this,"datagrid");
var dc=_98c.dc;
var grow=dc.body2.children("div.datagrid-group[group-index=\""+_98b+"\"]");
if(grow.length){
var _98d=grow.outerHeight();
var _98e=dc.view2.children("div.datagrid-header")._outerHeight();
var _98f=dc.body2.outerHeight(true)-dc.body2.outerHeight();
var top=grow.position().top-_98e-_98f;
if(top<0){
dc.body2.scrollTop(dc.body2.scrollTop()+top);
}else{
if(top+_98d>dc.body2.height()-18){
dc.body2.scrollTop(dc.body2.scrollTop()+top+_98d-dc.body2.height()+18);
}
}
}
});
}});
$.extend(_95a,{refreshGroupTitle:function(_990,_991){
var _992=$.data(_990,"datagrid");
var opts=_992.options;
var dc=_992.dc;
var _993=this.groups[_991];
var span=dc.body1.add(dc.body2).children("div.datagrid-group[group-index="+_991+"]").find("span.datagrid-group-title");
span.html(opts.groupFormatter.call(_990,_993.value,_993.rows));
},resizeGroup:function(_994,_995){
var _996=$.data(_994,"datagrid");
var dc=_996.dc;
var ht=dc.header2.find("table");
var fr=ht.find("tr.datagrid-filter-row").hide();
var ww=dc.body2.children("table.datagrid-btable:first").width();
if(_995==undefined){
var _997=dc.body2.children("div.datagrid-group");
}else{
var _997=dc.body2.children("div.datagrid-group[group-index="+_995+"]");
}
_997._outerWidth(ww);
var opts=_996.options;
if(opts.frozenColumns&&opts.frozenColumns.length){
var _998=dc.view1.width()-opts.expanderWidth;
var _999=dc.view1.css("direction").toLowerCase()=="rtl";
_997.find(".datagrid-group-title").css(_999?"right":"left",-_998+"px");
}
if(fr.length){
if(opts.showFilterBar){
fr.show();
}
}
},insertRow:function(_99a,_99b,row){
var _99c=$.data(_99a,"datagrid");
var opts=_99c.options;
var dc=_99c.dc;
var _99d=null;
var _99e;
if(!_99c.data.rows.length){
$(_99a).datagrid("loadData",[row]);
return;
}
for(var i=0;i<this.groups.length;i++){
if(this.groups[i].value==row[opts.groupField]){
_99d=this.groups[i];
_99e=i;
break;
}
}
if(_99d){
if(_99b==undefined||_99b==null){
_99b=_99c.data.rows.length;
}
if(_99b<_99d.startIndex){
_99b=_99d.startIndex;
}else{
if(_99b>_99d.startIndex+_99d.rows.length){
_99b=_99d.startIndex+_99d.rows.length;
}
}
$.fn.datagrid.defaults.view.insertRow.call(this,_99a,_99b,row);
if(_99b>=_99d.startIndex+_99d.rows.length){
_99f(_99b,true);
_99f(_99b,false);
}
_99d.rows.splice(_99b-_99d.startIndex,0,row);
}else{
_99d={value:row[opts.groupField],rows:[row],startIndex:_99c.data.rows.length};
_99e=this.groups.length;
dc.body1.append(this.renderGroup.call(this,_99a,_99e,_99d,true));
dc.body2.append(this.renderGroup.call(this,_99a,_99e,_99d,false));
this.groups.push(_99d);
_99c.data.rows.push(row);
}
this.setGroupIndex(_99a);
this.refreshGroupTitle(_99a,_99e);
this.resizeGroup(_99a);
function _99f(_9a0,_9a1){
var _9a2=_9a1?1:2;
var _9a3=opts.finder.getTr(_99a,_9a0-1,"body",_9a2);
var tr=opts.finder.getTr(_99a,_9a0,"body",_9a2);
tr.insertAfter(_9a3);
};
},updateRow:function(_9a4,_9a5,row){
var opts=$.data(_9a4,"datagrid").options;
$.fn.datagrid.defaults.view.updateRow.call(this,_9a4,_9a5,row);
var tb=opts.finder.getTr(_9a4,_9a5,"body",2).closest("table.datagrid-btable");
var _9a6=parseInt(tb.prev().attr("group-index"));
this.refreshGroupTitle(_9a4,_9a6);
},deleteRow:function(_9a7,_9a8){
var _9a9=$.data(_9a7,"datagrid");
var opts=_9a9.options;
var dc=_9a9.dc;
var body=dc.body1.add(dc.body2);
var tb=opts.finder.getTr(_9a7,_9a8,"body",2).closest("table.datagrid-btable");
var _9aa=parseInt(tb.prev().attr("group-index"));
$.fn.datagrid.defaults.view.deleteRow.call(this,_9a7,_9a8);
var _9ab=this.groups[_9aa];
if(_9ab.rows.length>1){
_9ab.rows.splice(_9a8-_9ab.startIndex,1);
this.refreshGroupTitle(_9a7,_9aa);
}else{
body.children("div.datagrid-group[group-index="+_9aa+"]").remove();
for(var i=_9aa+1;i<this.groups.length;i++){
body.children("div.datagrid-group[group-index="+i+"]").attr("group-index",i-1);
}
this.groups.splice(_9aa,1);
}
this.setGroupIndex(_9a7);
},setGroupIndex:function(_9ac){
var _9ad=0;
for(var i=0;i<this.groups.length;i++){
var _9ae=this.groups[i];
_9ae.startIndex=_9ad;
_9ad+=_9ae.rows.length;
}
}});
$.fn.propertygrid.defaults=$.extend({},$.fn.datagrid.defaults,{groupHeight:28,expanderWidth:20,singleSelect:true,remoteSort:false,fitColumns:true,loadMsg:"",frozenColumns:[[{field:"f",width:20,resizable:false}]],columns:[[{field:"name",title:"Name",width:100,sortable:true},{field:"value",title:"Value",width:100,resizable:false}]],showGroup:false,groupView:_95a,groupField:"group",groupStyler:function(_9af,rows){
return "";
},groupFormatter:function(_9b0,rows){
return _9b0;
}});
})(jQuery);
(function($){
function _9b1(_9b2){
var _9b3=$.data(_9b2,"treegrid");
var opts=_9b3.options;
$(_9b2).datagrid($.extend({},opts,{url:null,data:null,loader:function(){
return false;
},onBeforeLoad:function(){
return false;
},onLoadSuccess:function(){
},onResizeColumn:function(_9b4,_9b5){
_9c2(_9b2);
opts.onResizeColumn.call(_9b2,_9b4,_9b5);
},onBeforeSortColumn:function(sort,_9b6){
if(opts.onBeforeSortColumn.call(_9b2,sort,_9b6)==false){
return false;
}
},onSortColumn:function(sort,_9b7){
opts.sortName=sort;
opts.sortOrder=_9b7;
if(opts.remoteSort){
_9c1(_9b2);
}else{
var data=$(_9b2).treegrid("getData");
_9f0(_9b2,null,data);
}
opts.onSortColumn.call(_9b2,sort,_9b7);
},onClickCell:function(_9b8,_9b9){
opts.onClickCell.call(_9b2,_9b9,find(_9b2,_9b8));
},onDblClickCell:function(_9ba,_9bb){
opts.onDblClickCell.call(_9b2,_9bb,find(_9b2,_9ba));
},onRowContextMenu:function(e,_9bc){
opts.onContextMenu.call(_9b2,e,find(_9b2,_9bc));
}}));
var _9bd=$.data(_9b2,"datagrid").options;
opts.columns=_9bd.columns;
opts.frozenColumns=_9bd.frozenColumns;
_9b3.dc=$.data(_9b2,"datagrid").dc;
if(opts.pagination){
var _9be=$(_9b2).datagrid("getPager");
_9be.pagination({pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_9bf,_9c0){
opts.pageNumber=_9bf;
opts.pageSize=_9c0;
_9c1(_9b2);
}});
opts.pageSize=_9be.pagination("options").pageSize;
}
};
function _9c2(_9c3,_9c4){
var opts=$.data(_9c3,"datagrid").options;
var dc=$.data(_9c3,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight)){
if(_9c4!=undefined){
var _9c5=_9c6(_9c3,_9c4);
for(var i=0;i<_9c5.length;i++){
_9c7(_9c5[i][opts.idField]);
}
}
}
$(_9c3).datagrid("fixRowHeight",_9c4);
function _9c7(_9c8){
var tr1=opts.finder.getTr(_9c3,_9c8,"body",1);
var tr2=opts.finder.getTr(_9c3,_9c8,"body",2);
tr1.css("height","");
tr2.css("height","");
var _9c9=Math.max(tr1.height(),tr2.height());
tr1.css("height",_9c9);
tr2.css("height",_9c9);
};
};
function _9ca(_9cb){
var dc=$.data(_9cb,"datagrid").dc;
var opts=$.data(_9cb,"treegrid").options;
if(!opts.rownumbers){
return;
}
dc.body1.find("div.datagrid-cell-rownumber").each(function(i){
$(this).html(i+1);
});
};
function _9cc(_9cd){
return function(e){
$.fn.datagrid.defaults.rowEvents[_9cd?"mouseover":"mouseout"](e);
var tt=$(e.target);
var fn=_9cd?"addClass":"removeClass";
if(tt.hasClass("tree-hit")){
tt.hasClass("tree-expanded")?tt[fn]("tree-expanded-hover"):tt[fn]("tree-collapsed-hover");
}
};
};
function _9ce(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length||!tr.parent().length){
return;
}
var _9cf=tr.attr("node-id");
var _9d0=_9d1(tr);
if(tt.hasClass("tree-hit")){
_9d2(_9d0,_9cf);
}else{
if(tt.hasClass("tree-checkbox")){
_9d3(_9d0,_9cf);
}else{
var opts=$(_9d0).datagrid("options");
if(!tt.parent().hasClass("datagrid-cell-check")&&!opts.singleSelect&&e.shiftKey){
var rows=$(_9d0).treegrid("getChildren");
var idx1=$.easyui.indexOfArray(rows,opts.idField,opts.lastSelectedIndex);
var idx2=$.easyui.indexOfArray(rows,opts.idField,_9cf);
var from=Math.min(Math.max(idx1,0),idx2);
var to=Math.max(idx1,idx2);
var row=rows[idx2];
var td=tt.closest("td[field]",tr);
if(td.length){
var _9d4=td.attr("field");
opts.onClickCell.call(_9d0,_9cf,_9d4,row[_9d4]);
}
$(_9d0).treegrid("clearSelections");
for(var i=from;i<=to;i++){
$(_9d0).treegrid("selectRow",rows[i][opts.idField]);
}
opts.onClickRow.call(_9d0,row);
}else{
$.fn.datagrid.defaults.rowEvents.click(e);
}
}
}
};
function _9d1(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _9d3(_9d5,_9d6,_9d7,_9d8){
var _9d9=$.data(_9d5,"treegrid");
var _9da=_9d9.checkedRows;
var opts=_9d9.options;
if(!opts.checkbox){
return;
}
var row=find(_9d5,_9d6);
if(!row.checkState){
return;
}
var tr=opts.finder.getTr(_9d5,_9d6);
var ck=tr.find(".tree-checkbox");
if(_9d7==undefined){
if(ck.hasClass("tree-checkbox1")){
_9d7=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_9d7=true;
}else{
if(row._checked==undefined){
row._checked=ck.hasClass("tree-checkbox1");
}
_9d7=!row._checked;
}
}
}
row._checked=_9d7;
if(_9d7){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_9d8){
if(opts.onBeforeCheckNode.call(_9d5,row,_9d7)==false){
return;
}
}
if(opts.cascadeCheck){
_9db(_9d5,row,_9d7);
_9dc(_9d5,row);
}else{
_9dd(_9d5,row,_9d7?"1":"0");
}
if(!_9d8){
opts.onCheckNode.call(_9d5,row,_9d7);
}
};
function _9dd(_9de,row,flag){
var _9df=$.data(_9de,"treegrid");
var _9e0=_9df.checkedRows;
var opts=_9df.options;
if(!row.checkState||flag==undefined){
return;
}
var tr=opts.finder.getTr(_9de,row[opts.idField]);
var ck=tr.find(".tree-checkbox");
if(!ck.length){
return;
}
row.checkState=["unchecked","checked","indeterminate"][flag];
row.checked=(row.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
if(flag==0){
$.easyui.removeArrayItem(_9e0,opts.idField,row[opts.idField]);
}else{
$.easyui.addArrayItem(_9e0,opts.idField,row);
}
};
function _9db(_9e1,row,_9e2){
var flag=_9e2?1:0;
_9dd(_9e1,row,flag);
$.easyui.forEach(row.children||[],true,function(r){
_9dd(_9e1,r,flag);
});
};
function _9dc(_9e3,row){
var opts=$.data(_9e3,"treegrid").options;
var prow=_9e4(_9e3,row[opts.idField]);
if(prow){
_9dd(_9e3,prow,_9e5(prow));
_9dc(_9e3,prow);
}
};
function _9e5(row){
var len=0;
var c0=0;
var c1=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _9e6(_9e7,_9e8){
var opts=$.data(_9e7,"treegrid").options;
if(!opts.checkbox){
return;
}
var row=find(_9e7,_9e8);
var tr=opts.finder.getTr(_9e7,_9e8);
var ck=tr.find(".tree-checkbox");
if(opts.view.hasCheckbox(_9e7,row)){
if(!ck.length){
row.checkState=row.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(tr.find(".tree-title"));
}
if(row.checkState=="checked"){
_9d3(_9e7,_9e8,true,true);
}else{
if(row.checkState=="unchecked"){
_9d3(_9e7,_9e8,false,true);
}else{
var flag=_9e5(row);
if(flag===0){
_9d3(_9e7,_9e8,false,true);
}else{
if(flag===1){
_9d3(_9e7,_9e8,true,true);
}
}
}
}
}else{
ck.remove();
row.checkState=undefined;
row.checked=undefined;
_9dc(_9e7,row);
}
};
function _9e9(_9ea,_9eb){
var opts=$.data(_9ea,"treegrid").options;
var tr1=opts.finder.getTr(_9ea,_9eb,"body",1);
var tr2=opts.finder.getTr(_9ea,_9eb,"body",2);
var _9ec=$(_9ea).datagrid("getColumnFields",true).length+(opts.rownumbers?1:0);
var _9ed=$(_9ea).datagrid("getColumnFields",false).length;
_9ee(tr1,_9ec);
_9ee(tr2,_9ed);
function _9ee(tr,_9ef){
$("<tr class=\"treegrid-tr-tree\">"+"<td style=\"border:0px\" colspan=\""+_9ef+"\">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);
};
};
function _9f0(_9f1,_9f2,data,_9f3,_9f4){
var _9f5=$.data(_9f1,"treegrid");
var opts=_9f5.options;
var dc=_9f5.dc;
data=opts.loadFilter.call(_9f1,data,_9f2);
var node=find(_9f1,_9f2);
if(node){
var _9f6=opts.finder.getTr(_9f1,_9f2,"body",1);
var _9f7=opts.finder.getTr(_9f1,_9f2,"body",2);
var cc1=_9f6.next("tr.treegrid-tr-tree").children("td").children("div");
var cc2=_9f7.next("tr.treegrid-tr-tree").children("td").children("div");
if(!_9f3){
node.children=[];
}
}else{
var cc1=dc.body1;
var cc2=dc.body2;
if(!_9f3){
_9f5.data=[];
}
}
if(!_9f3){
cc1.empty();
cc2.empty();
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_9f1,_9f2,data);
}
opts.view.render.call(opts.view,_9f1,cc1,true);
opts.view.render.call(opts.view,_9f1,cc2,false);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_9f1,dc.footer1,true);
opts.view.renderFooter.call(opts.view,_9f1,dc.footer2,false);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_9f1);
}
if(!_9f2&&opts.pagination){
var _9f8=$.data(_9f1,"treegrid").total;
var _9f9=$(_9f1).datagrid("getPager");
if(_9f9.pagination("options").total!=_9f8){
_9f9.pagination({total:_9f8});
}
}
_9c2(_9f1);
_9ca(_9f1);
$(_9f1).treegrid("showLines");
$(_9f1).treegrid("setSelectionState");
$(_9f1).treegrid("autoSizeColumn");
if(!_9f4){
opts.onLoadSuccess.call(_9f1,node,data);
}
};
function _9c1(_9fa,_9fb,_9fc,_9fd,_9fe){
var opts=$.data(_9fa,"treegrid").options;
var body=$(_9fa).datagrid("getPanel").find("div.datagrid-body");
if(_9fb==undefined&&opts.queryParams){
opts.queryParams.id=undefined;
}
if(_9fc){
opts.queryParams=_9fc;
}
var _9ff=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_9ff,{page:opts.pageNumber,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_9ff,{sort:opts.sortName,order:opts.sortOrder});
}
var row=find(_9fa,_9fb);
if(opts.onBeforeLoad.call(_9fa,row,_9ff)==false){
return;
}
var _a00=body.find("tr[node-id=\""+_9fb+"\"] span.tree-folder");
_a00.addClass("tree-loading");
$(_9fa).treegrid("loading");
var _a01=opts.loader.call(_9fa,_9ff,function(data){
_a00.removeClass("tree-loading");
$(_9fa).treegrid("loaded");
_9f0(_9fa,_9fb,data,_9fd);
if(_9fe){
_9fe();
}
},function(){
_a00.removeClass("tree-loading");
$(_9fa).treegrid("loaded");
opts.onLoadError.apply(_9fa,arguments);
if(_9fe){
_9fe();
}
});
if(_a01==false){
_a00.removeClass("tree-loading");
$(_9fa).treegrid("loaded");
}
};
function _a02(_a03){
var _a04=_a05(_a03);
return _a04.length?_a04[0]:null;
};
function _a05(_a06){
return $.data(_a06,"treegrid").data;
};
function _9e4(_a07,_a08){
var row=find(_a07,_a08);
if(row._parentId){
return find(_a07,row._parentId);
}else{
return null;
}
};
function _9c6(_a09,_a0a){
var data=$.data(_a09,"treegrid").data;
if(_a0a){
var _a0b=find(_a09,_a0a);
data=_a0b?(_a0b.children||[]):[];
}
var _a0c=[];
$.easyui.forEach(data,true,function(node){
_a0c.push(node);
});
return _a0c;
};
function _a0d(_a0e,_a0f){
var opts=$.data(_a0e,"treegrid").options;
var tr=opts.finder.getTr(_a0e,_a0f);
var node=tr.children("td[field=\""+opts.treeField+"\"]");
return node.find("span.tree-indent,span.tree-hit").length;
};
function find(_a10,_a11){
var _a12=$.data(_a10,"treegrid");
var opts=_a12.options;
var _a13=null;
$.easyui.forEach(_a12.data,true,function(node){
if(node[opts.idField]==_a11){
_a13=node;
return false;
}
});
return _a13;
};
function _a14(_a15,_a16){
var opts=$.data(_a15,"treegrid").options;
var row=find(_a15,_a16);
var tr=opts.finder.getTr(_a15,_a16);
var hit=tr.find("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
if(opts.onBeforeCollapse.call(_a15,row)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
row.state="closed";
tr=tr.next("tr.treegrid-tr-tree");
var cc=tr.children("td").children("div");
if(opts.animate){
cc.slideUp("normal",function(){
$(_a15).treegrid("autoSizeColumn");
_9c2(_a15,_a16);
opts.onCollapse.call(_a15,row);
});
}else{
cc.hide();
$(_a15).treegrid("autoSizeColumn");
_9c2(_a15,_a16);
opts.onCollapse.call(_a15,row);
}
};
function _a17(_a18,_a19){
var opts=$.data(_a18,"treegrid").options;
var tr=opts.finder.getTr(_a18,_a19);
var hit=tr.find("span.tree-hit");
var row=find(_a18,_a19);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
if(opts.onBeforeExpand.call(_a18,row)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var _a1a=tr.next("tr.treegrid-tr-tree");
if(_a1a.length){
var cc=_a1a.children("td").children("div");
_a1b(cc);
}else{
_9e9(_a18,row[opts.idField]);
var _a1a=tr.next("tr.treegrid-tr-tree");
var cc=_a1a.children("td").children("div");
cc.hide();
var _a1c=$.extend({},opts.queryParams||{});
_a1c.id=row[opts.idField];
_9c1(_a18,row[opts.idField],_a1c,true,function(){
if(cc.is(":empty")){
_a1a.remove();
}else{
_a1b(cc);
}
});
}
function _a1b(cc){
row.state="open";
if(opts.animate){
cc.slideDown("normal",function(){
$(_a18).treegrid("autoSizeColumn");
_9c2(_a18,_a19);
opts.onExpand.call(_a18,row);
});
}else{
cc.show();
$(_a18).treegrid("autoSizeColumn");
_9c2(_a18,_a19);
opts.onExpand.call(_a18,row);
}
};
};
function _9d2(_a1d,_a1e){
var opts=$.data(_a1d,"treegrid").options;
var tr=opts.finder.getTr(_a1d,_a1e);
var hit=tr.find("span.tree-hit");
if(hit.hasClass("tree-expanded")){
_a14(_a1d,_a1e);
}else{
_a17(_a1d,_a1e);
}
};
function _a1f(_a20,_a21){
var opts=$.data(_a20,"treegrid").options;
var _a22=_9c6(_a20,_a21);
if(_a21){
_a22.unshift(find(_a20,_a21));
}
for(var i=0;i<_a22.length;i++){
_a14(_a20,_a22[i][opts.idField]);
}
};
function _a23(_a24,_a25){
var opts=$.data(_a24,"treegrid").options;
var _a26=_9c6(_a24,_a25);
if(_a25){
_a26.unshift(find(_a24,_a25));
}
for(var i=0;i<_a26.length;i++){
_a17(_a24,_a26[i][opts.idField]);
}
};
function _a27(_a28,_a29){
var opts=$.data(_a28,"treegrid").options;
var ids=[];
var p=_9e4(_a28,_a29);
while(p){
var id=p[opts.idField];
ids.unshift(id);
p=_9e4(_a28,id);
}
for(var i=0;i<ids.length;i++){
_a17(_a28,ids[i]);
}
};
function _a2a(_a2b,_a2c){
var _a2d=$.data(_a2b,"treegrid");
var opts=_a2d.options;
if(_a2c.parent){
var tr=opts.finder.getTr(_a2b,_a2c.parent);
if(tr.next("tr.treegrid-tr-tree").length==0){
_9e9(_a2b,_a2c.parent);
}
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
var _a2e=cell.children("span.tree-icon");
if(_a2e.hasClass("tree-file")){
_a2e.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_a2e);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_9f0(_a2b,_a2c.parent,_a2c.data,_a2d.data.length>0,true);
};
function _a2f(_a30,_a31){
var ref=_a31.before||_a31.after;
var opts=$.data(_a30,"treegrid").options;
var _a32=_9e4(_a30,ref);
_a2a(_a30,{parent:(_a32?_a32[opts.idField]:null),data:[_a31.data]});
var _a33=_a32?_a32.children:$(_a30).treegrid("getRoots");
for(var i=0;i<_a33.length;i++){
if(_a33[i][opts.idField]==ref){
var _a34=_a33[_a33.length-1];
_a33.splice(_a31.before?i:(i+1),0,_a34);
_a33.splice(_a33.length-1,1);
break;
}
}
_a35(true);
_a35(false);
_9ca(_a30);
$(_a30).treegrid("showLines");
function _a35(_a36){
var _a37=_a36?1:2;
var tr=opts.finder.getTr(_a30,_a31.data[opts.idField],"body",_a37);
var _a38=tr.closest("table.datagrid-btable");
tr=tr.parent().children();
var dest=opts.finder.getTr(_a30,ref,"body",_a37);
if(_a31.before){
tr.insertBefore(dest);
}else{
var sub=dest.next("tr.treegrid-tr-tree");
tr.insertAfter(sub.length?sub:dest);
}
_a38.remove();
};
};
function _a39(_a3a,_a3b){
var _a3c=$.data(_a3a,"treegrid");
var opts=_a3c.options;
var prow=_9e4(_a3a,_a3b);
$(_a3a).datagrid("deleteRow",_a3b);
$.easyui.removeArrayItem(_a3c.checkedRows,opts.idField,_a3b);
_9ca(_a3a);
if(prow){
_9e6(_a3a,prow[opts.idField]);
}
_a3c.total-=1;
$(_a3a).datagrid("getPager").pagination("refresh",{total:_a3c.total});
$(_a3a).treegrid("showLines");
};
function _a3d(_a3e){
var t=$(_a3e);
var opts=t.treegrid("options");
if(opts.lines){
t.treegrid("getPanel").addClass("tree-lines");
}else{
t.treegrid("getPanel").removeClass("tree-lines");
return;
}
t.treegrid("getPanel").find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
t.treegrid("getPanel").find("div.datagrid-cell").removeClass("tree-node-last tree-root-first tree-root-one");
var _a3f=t.treegrid("getRoots");
if(_a3f.length>1){
_a40(_a3f[0]).addClass("tree-root-first");
}else{
if(_a3f.length==1){
_a40(_a3f[0]).addClass("tree-root-one");
}
}
_a41(_a3f);
_a42(_a3f);
function _a41(_a43){
$.map(_a43,function(node){
if(node.children&&node.children.length){
_a41(node.children);
}else{
var cell=_a40(node);
cell.find(".tree-icon").prev().addClass("tree-join");
}
});
if(_a43.length){
var cell=_a40(_a43[_a43.length-1]);
cell.addClass("tree-node-last");
cell.find(".tree-join").removeClass("tree-join").addClass("tree-joinbottom");
}
};
function _a42(_a44){
$.map(_a44,function(node){
if(node.children&&node.children.length){
_a42(node.children);
}
});
for(var i=0;i<_a44.length-1;i++){
var node=_a44[i];
var _a45=t.treegrid("getLevel",node[opts.idField]);
var tr=opts.finder.getTr(_a3e,node[opts.idField]);
var cc=tr.next().find("tr.datagrid-row td[field=\""+opts.treeField+"\"] div.datagrid-cell");
cc.find("span:eq("+(_a45-1)+")").addClass("tree-line");
}
};
function _a40(node){
var tr=opts.finder.getTr(_a3e,node[opts.idField]);
var cell=tr.find("td[field=\""+opts.treeField+"\"] div.datagrid-cell");
return cell;
};
};
$.fn.treegrid=function(_a46,_a47){
if(typeof _a46=="string"){
var _a48=$.fn.treegrid.methods[_a46];
if(_a48){
return _a48(this,_a47);
}else{
return this.datagrid(_a46,_a47);
}
}
_a46=_a46||{};
return this.each(function(){
var _a49=$.data(this,"treegrid");
if(_a49){
$.extend(_a49.options,_a46);
}else{
_a49=$.data(this,"treegrid",{options:$.extend({},$.fn.treegrid.defaults,$.fn.treegrid.parseOptions(this),_a46),data:[],checkedRows:[],tmpIds:[]});
}
_9b1(this);
if(_a49.options.data){
$(this).treegrid("loadData",_a49.options.data);
}
_9c1(this);
});
};
$.fn.treegrid.methods={options:function(jq){
return $.data(jq[0],"treegrid").options;
},resize:function(jq,_a4a){
return jq.each(function(){
$(this).datagrid("resize",_a4a);
});
},fixRowHeight:function(jq,_a4b){
return jq.each(function(){
_9c2(this,_a4b);
});
},loadData:function(jq,data){
return jq.each(function(){
_9f0(this,data.parent,data);
});
},load:function(jq,_a4c){
return jq.each(function(){
$(this).treegrid("options").pageNumber=1;
$(this).treegrid("getPager").pagination({pageNumber:1});
$(this).treegrid("reload",_a4c);
});
},reload:function(jq,id){
return jq.each(function(){
var opts=$(this).treegrid("options");
var _a4d={};
if(typeof id=="object"){
_a4d=id;
}else{
_a4d=$.extend({},opts.queryParams);
_a4d.id=id;
}
if(_a4d.id){
var node=$(this).treegrid("find",_a4d.id);
if(node.children){
node.children.splice(0,node.children.length);
}
opts.queryParams=_a4d;
var tr=opts.finder.getTr(this,_a4d.id);
tr.next("tr.treegrid-tr-tree").remove();
tr.find("span.tree-hit").removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
_a17(this,_a4d.id);
}else{
_9c1(this,null,_a4d);
}
});
},reloadFooter:function(jq,_a4e){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var dc=$.data(this,"datagrid").dc;
if(_a4e){
$.data(this,"treegrid").footer=_a4e;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).treegrid("fixRowHeight");
}
});
},getData:function(jq){
return $.data(jq[0],"treegrid").data;
},getFooterRows:function(jq){
return $.data(jq[0],"treegrid").footer;
},getRoot:function(jq){
return _a02(jq[0]);
},getRoots:function(jq){
return _a05(jq[0]);
},getParent:function(jq,id){
return _9e4(jq[0],id);
},getChildren:function(jq,id){
return _9c6(jq[0],id);
},getLevel:function(jq,id){
return _a0d(jq[0],id);
},find:function(jq,id){
return find(jq[0],id);
},isLeaf:function(jq,id){
var opts=$.data(jq[0],"treegrid").options;
var tr=opts.finder.getTr(jq[0],id);
var hit=tr.find("span.tree-hit");
return hit.length==0;
},select:function(jq,id){
return jq.each(function(){
$(this).datagrid("selectRow",id);
});
},unselect:function(jq,id){
return jq.each(function(){
$(this).datagrid("unselectRow",id);
});
},collapse:function(jq,id){
return jq.each(function(){
_a14(this,id);
});
},expand:function(jq,id){
return jq.each(function(){
_a17(this,id);
});
},toggle:function(jq,id){
return jq.each(function(){
_9d2(this,id);
});
},collapseAll:function(jq,id){
return jq.each(function(){
_a1f(this,id);
});
},expandAll:function(jq,id){
return jq.each(function(){
_a23(this,id);
});
},expandTo:function(jq,id){
return jq.each(function(){
_a27(this,id);
});
},append:function(jq,_a4f){
return jq.each(function(){
_a2a(this,_a4f);
});
},insert:function(jq,_a50){
return jq.each(function(){
_a2f(this,_a50);
});
},remove:function(jq,id){
return jq.each(function(){
_a39(this,id);
});
},pop:function(jq,id){
var row=jq.treegrid("find",id);
jq.treegrid("remove",id);
return row;
},refresh:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.refreshRow.call(opts.view,this,id);
});
},update:function(jq,_a51){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var row=_a51.row;
opts.view.updateRow.call(opts.view,this,_a51.id,row);
if(row.checked!=undefined){
row=find(this,_a51.id);
$.extend(row,{checkState:row.checked?"checked":(row.checked===false?"unchecked":undefined)});
_9e6(this,_a51.id);
}
});
},beginEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("beginEdit",id);
$(this).treegrid("fixRowHeight",id);
});
},endEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("endEdit",id);
});
},cancelEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("cancelEdit",id);
});
},showLines:function(jq){
return jq.each(function(){
_a3d(this);
});
},setSelectionState:function(jq){
return jq.each(function(){
$(this).datagrid("setSelectionState");
var _a52=$(this).data("treegrid");
for(var i=0;i<_a52.tmpIds.length;i++){
_9d3(this,_a52.tmpIds[i],true,true);
}
_a52.tmpIds=[];
});
},getCheckedNodes:function(jq,_a53){
_a53=_a53||"checked";
var rows=[];
$.easyui.forEach(jq.data("treegrid").checkedRows,false,function(row){
if(row.checkState==_a53){
rows.push(row);
}
});
return rows;
},checkNode:function(jq,id){
return jq.each(function(){
_9d3(this,id,true);
});
},uncheckNode:function(jq,id){
return jq.each(function(){
_9d3(this,id,false);
});
},clearChecked:function(jq){
return jq.each(function(){
var _a54=this;
var opts=$(_a54).treegrid("options");
$(_a54).datagrid("clearChecked");
$.map($(_a54).treegrid("getCheckedNodes"),function(row){
_9d3(_a54,row[opts.idField],false,true);
});
});
}};
$.fn.treegrid.parseOptions=function(_a55){
return $.extend({},$.fn.datagrid.parseOptions(_a55),$.parser.parseOptions(_a55,["treeField",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean"}]));
};
var _a56=$.extend({},$.fn.datagrid.defaults.view,{render:function(_a57,_a58,_a59){
var opts=$.data(_a57,"treegrid").options;
var _a5a=$(_a57).datagrid("getColumnFields",_a59);
var _a5b=$.data(_a57,"datagrid").rowIdPrefix;
if(_a59){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return;
}
}
var view=this;
if(this.treeNodes&&this.treeNodes.length){
var _a5c=_a5d.call(this,_a59,this.treeLevel,this.treeNodes);
$(_a58).append(_a5c.join(""));
}
function _a5d(_a5e,_a5f,_a60){
var _a61=$(_a57).treegrid("getParent",_a60[0][opts.idField]);
var _a62=(_a61?_a61.children.length:$(_a57).treegrid("getRoots").length)-_a60.length;
var _a63=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<_a60.length;i++){
var row=_a60[i];
if(row.state!="open"&&row.state!="closed"){
row.state="open";
}
var css=opts.rowStyler?opts.rowStyler.call(_a57,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_a62++%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _a64=cs.s?"style=\""+cs.s+"\"":"";
var _a65=_a5b+"-"+(_a5e?1:2)+"-"+row[opts.idField];
_a63.push("<tr id=\""+_a65+"\" node-id=\""+row[opts.idField]+"\" "+cls+" "+_a64+">");
_a63=_a63.concat(view.renderRow.call(view,_a57,_a5a,_a5e,_a5f,row));
_a63.push("</tr>");
if(row.children&&row.children.length){
var tt=_a5d.call(this,_a5e,_a5f+1,row.children);
var v=row.state=="closed"?"none":"block";
_a63.push("<tr class=\"treegrid-tr-tree\"><td style=\"border:0px\" colspan="+(_a5a.length+(opts.rownumbers?1:0))+"><div style=\"display:"+v+"\">");
_a63=_a63.concat(tt);
_a63.push("</div></td></tr>");
}
}
_a63.push("</tbody></table>");
return _a63;
};
},renderFooter:function(_a66,_a67,_a68){
var opts=$.data(_a66,"treegrid").options;
var rows=$.data(_a66,"treegrid").footer||[];
var _a69=$(_a66).datagrid("getColumnFields",_a68);
var _a6a=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
row[opts.idField]=row[opts.idField]||("foot-row-id"+i);
_a6a.push("<tr class=\"datagrid-row\" node-id=\""+row[opts.idField]+"\">");
_a6a.push(this.renderRow.call(this,_a66,_a69,_a68,0,row));
_a6a.push("</tr>");
}
_a6a.push("</tbody></table>");
$(_a67).html(_a6a.join(""));
},renderRow:function(_a6b,_a6c,_a6d,_a6e,row){
var _a6f=$.data(_a6b,"treegrid");
var opts=_a6f.options;
var cc=[];
if(_a6d&&opts.rownumbers){
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">0</div></td>");
}
for(var i=0;i<_a6c.length;i++){
var _a70=_a6c[i];
var col=$(_a6b).datagrid("getColumnOption",_a70);
if(col){
var css=col.styler?(col.styler(row[_a70],row)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _a71=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_a70+"\" "+cls+" "+_a71+">");
var _a71="";
if(!col.checkbox){
if(col.align){
_a71+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_a71+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_a71+="height:auto;";
}
}
}
cc.push("<div style=\""+_a71+"\" ");
if(col.checkbox){
cc.push("class=\"datagrid-cell-check ");
}else{
cc.push("class=\"datagrid-cell "+col.cellClass);
}
if(_a70==opts.treeField){
cc.push(" tree-node");
}
cc.push("\">");
if(col.checkbox){
if(row.checked){
cc.push("<input type=\"checkbox\" checked=\"checked\"");
}else{
cc.push("<input type=\"checkbox\"");
}
cc.push(" name=\""+_a70+"\" value=\""+(row[_a70]!=undefined?row[_a70]:"")+"\">");
}else{
var val=null;
if(col.formatter){
val=col.formatter(row[_a70],row);
}else{
val=row[_a70];
}
if(_a70==opts.treeField){
for(var j=0;j<_a6e;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(row.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
if(row.children&&row.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(row.iconCls?row.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_a6b,row)){
var flag=0;
var crow=$.easyui.getArrayItem(_a6f.checkedRows,opts.idField,row[opts.idField]);
if(crow){
flag=crow.checkState=="checked"?1:2;
row.checkState=crow.checkState;
row.checked=crow.checked;
$.easyui.addArrayItem(_a6f.checkedRows,opts.idField,row);
}else{
var prow=$.easyui.getArrayItem(_a6f.checkedRows,opts.idField,row._parentId);
if(prow&&prow.checkState=="checked"&&opts.cascadeCheck){
flag=1;
row.checked=true;
$.easyui.addArrayItem(_a6f.checkedRows,opts.idField,row);
}else{
if(row.checked){
$.easyui.addArrayItem(_a6f.tmpIds,row[opts.idField]);
}
}
row.checkState=flag?"checked":"unchecked";
}
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
row.checkState=undefined;
row.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+val+"</span>");
}else{
cc.push(val);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},hasCheckbox:function(_a72,row){
var opts=$.data(_a72,"treegrid").options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_a72,row)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(row.state=="open"&&!(row.children&&row.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
},refreshRow:function(_a73,id){
this.updateRow.call(this,_a73,id,{});
},updateRow:function(_a74,id,row){
var opts=$.data(_a74,"treegrid").options;
var _a75=$(_a74).treegrid("find",id);
$.extend(_a75,row);
var _a76=$(_a74).treegrid("getLevel",id)-1;
var _a77=opts.rowStyler?opts.rowStyler.call(_a74,_a75):"";
var _a78=$.data(_a74,"datagrid").rowIdPrefix;
var _a79=_a75[opts.idField];
function _a7a(_a7b){
var _a7c=$(_a74).treegrid("getColumnFields",_a7b);
var tr=opts.finder.getTr(_a74,id,"body",(_a7b?1:2));
var _a7d=tr.find("div.datagrid-cell-rownumber").html();
var _a7e=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow(_a74,_a7c,_a7b,_a76,_a75));
tr.attr("style",_a77||"");
tr.find("div.datagrid-cell-rownumber").html(_a7d);
if(_a7e){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
if(_a79!=id){
tr.attr("id",_a78+"-"+(_a7b?1:2)+"-"+_a79);
tr.attr("node-id",_a79);
}
};
_a7a.call(this,true);
_a7a.call(this,false);
$(_a74).treegrid("fixRowHeight",id);
},deleteRow:function(_a7f,id){
var opts=$.data(_a7f,"treegrid").options;
var tr=opts.finder.getTr(_a7f,id);
tr.next("tr.treegrid-tr-tree").remove();
tr.remove();
var _a80=del(id);
if(_a80){
if(_a80.children.length==0){
tr=opts.finder.getTr(_a7f,_a80[opts.idField]);
tr.next("tr.treegrid-tr-tree").remove();
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
cell.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(cell);
}
}
this.setEmptyMsg(_a7f);
function del(id){
var cc;
var _a81=$(_a7f).treegrid("getParent",id);
if(_a81){
cc=_a81.children;
}else{
cc=$(_a7f).treegrid("getData");
}
for(var i=0;i<cc.length;i++){
if(cc[i][opts.idField]==id){
cc.splice(i,1);
break;
}
}
return _a81;
};
},onBeforeRender:function(_a82,_a83,data){
if($.isArray(_a83)){
data={total:_a83.length,rows:_a83};
_a83=null;
}
if(!data){
return false;
}
var _a84=$.data(_a82,"treegrid");
var opts=_a84.options;
if(data.length==undefined){
if(data.footer){
_a84.footer=data.footer;
}
if(data.total){
_a84.total=data.total;
}
data=this.transfer(_a82,_a83,data.rows);
}else{
function _a85(_a86,_a87){
for(var i=0;i<_a86.length;i++){
var row=_a86[i];
row._parentId=_a87;
if(row.children&&row.children.length){
_a85(row.children,row[opts.idField]);
}
}
};
_a85(data,_a83);
}
this.sort(_a82,data);
this.treeNodes=data;
this.treeLevel=$(_a82).treegrid("getLevel",_a83);
var node=find(_a82,_a83);
if(node){
if(node.children){
node.children=node.children.concat(data);
}else{
node.children=data;
}
}else{
_a84.data=_a84.data.concat(data);
}
},sort:function(_a88,data){
var opts=$.data(_a88,"treegrid").options;
if(!opts.remoteSort&&opts.sortName){
var _a89=opts.sortName.split(",");
var _a8a=opts.sortOrder.split(",");
_a8b(data);
}
function _a8b(rows){
rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_a89.length;i++){
var sn=_a89[i];
var so=_a8a[i];
var col=$(_a88).treegrid("getColumnOption",sn);
var _a8c=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_a8c(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
for(var i=0;i<rows.length;i++){
var _a8d=rows[i].children;
if(_a8d&&_a8d.length){
_a8b(_a8d);
}
}
};
},transfer:function(_a8e,_a8f,data){
var opts=$.data(_a8e,"treegrid").options;
var rows=$.extend([],data);
var _a90=_a91(_a8f,rows);
var toDo=$.extend([],_a90);
while(toDo.length){
var node=toDo.shift();
var _a92=_a91(node[opts.idField],rows);
if(_a92.length){
if(node.children){
node.children=node.children.concat(_a92);
}else{
node.children=_a92;
}
toDo=toDo.concat(_a92);
}
}
return _a90;
function _a91(_a93,rows){
var rr=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(row._parentId==_a93){
rr.push(row);
rows.splice(i,1);
i--;
}
}
return rr;
};
}});
$.fn.treegrid.defaults=$.extend({},$.fn.datagrid.defaults,{treeField:null,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,animate:false,singleSelect:true,view:_a56,rowEvents:$.extend({},$.fn.datagrid.defaults.rowEvents,{mouseover:_9cc(true),mouseout:_9cc(false),click:_9ce}),loader:function(_a94,_a95,_a96){
var opts=$(this).treegrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_a94,dataType:"json",success:function(data){
_a95(data);
},error:function(){
_a96.apply(this,arguments);
}});
},loadFilter:function(data,_a97){
return data;
},finder:{getTr:function(_a98,id,type,_a99){
type=type||"body";
_a99=_a99||0;
var dc=$.data(_a98,"datagrid").dc;
if(_a99==0){
var opts=$.data(_a98,"treegrid").options;
var tr1=opts.finder.getTr(_a98,id,type,1);
var tr2=opts.finder.getTr(_a98,id,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+$.data(_a98,"datagrid").rowIdPrefix+"-"+_a99+"-"+id);
if(!tr.length){
tr=(_a99==1?dc.body1:dc.body2).find("tr[node-id=\""+id+"\"]");
}
return tr;
}else{
if(type=="footer"){
return (_a99==1?dc.footer1:dc.footer2).find("tr[node-id=\""+id+"\"]");
}else{
if(type=="selected"){
return (_a99==1?dc.body1:dc.body2).find("tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_a99==1?dc.body1:dc.body2).find("tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_a99==1?dc.body1:dc.body2).find("tr.datagrid-row-checked");
}else{
if(type=="last"){
return (_a99==1?dc.body1:dc.body2).find("tr:last[node-id]");
}else{
if(type=="allbody"){
return (_a99==1?dc.body1:dc.body2).find("tr[node-id]");
}else{
if(type=="allfooter"){
return (_a99==1?dc.footer1:dc.footer2).find("tr[node-id]");
}
}
}
}
}
}
}
}
}
},getRow:function(_a9a,p){
var id=(typeof p=="object")?p.attr("node-id"):p;
return $(_a9a).treegrid("find",id);
},getRows:function(_a9b){
return $(_a9b).treegrid("getChildren");
}},onBeforeLoad:function(row,_a9c){
},onLoadSuccess:function(row,data){
},onLoadError:function(){
},onBeforeCollapse:function(row){
},onCollapse:function(row){
},onBeforeExpand:function(row){
},onExpand:function(row){
},onClickRow:function(row){
},onDblClickRow:function(row){
},onClickCell:function(_a9d,row){
},onDblClickCell:function(_a9e,row){
},onContextMenu:function(e,row){
},onBeforeEdit:function(row){
},onAfterEdit:function(row,_a9f){
},onCancelEdit:function(row){
},onBeforeCheckNode:function(row,_aa0){
},onCheckNode:function(row,_aa1){
}});
})(jQuery);
(function($){
function _aa2(_aa3){
var opts=$.data(_aa3,"datalist").options;
$(_aa3).datagrid($.extend({},opts,{cls:"datalist"+(opts.lines?" datalist-lines":""),frozenColumns:(opts.frozenColumns&&opts.frozenColumns.length)?opts.frozenColumns:(opts.checkbox?[[{field:"_ck",checkbox:true}]]:undefined),columns:(opts.columns&&opts.columns.length)?opts.columns:[[{field:opts.textField,width:"100%",formatter:function(_aa4,row,_aa5){
return opts.textFormatter?opts.textFormatter(_aa4,row,_aa5):_aa4;
}}]]}));
};
var _aa6=$.extend({},$.fn.datagrid.defaults.view,{render:function(_aa7,_aa8,_aa9){
var _aaa=$.data(_aa7,"datagrid");
var opts=_aaa.options;
if(opts.groupField){
var g=this.groupRows(_aa7,_aaa.data.rows);
this.groups=g.groups;
_aaa.data.rows=g.rows;
var _aab=[];
for(var i=0;i<g.groups.length;i++){
_aab.push(this.renderGroup.call(this,_aa7,i,g.groups[i],_aa9));
}
$(_aa8).html(_aab.join(""));
}else{
$(_aa8).html(this.renderTable(_aa7,0,_aaa.data.rows,_aa9));
}
},renderGroup:function(_aac,_aad,_aae,_aaf){
var _ab0=$.data(_aac,"datagrid");
var opts=_ab0.options;
var _ab1=$(_aac).datagrid("getColumnFields",_aaf);
var _ab2=[];
_ab2.push("<div class=\"datagrid-group\" group-index="+_aad+">");
if(!_aaf){
_ab2.push("<span class=\"datagrid-group-title\">");
_ab2.push(opts.groupFormatter.call(_aac,_aae.value,_aae.rows));
_ab2.push("</span>");
}
_ab2.push("</div>");
_ab2.push(this.renderTable(_aac,_aae.startIndex,_aae.rows,_aaf));
return _ab2.join("");
},groupRows:function(_ab3,rows){
var _ab4=$.data(_ab3,"datagrid");
var opts=_ab4.options;
var _ab5=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _ab6=_ab7(row[opts.groupField]);
if(!_ab6){
_ab6={value:row[opts.groupField],rows:[row]};
_ab5.push(_ab6);
}else{
_ab6.rows.push(row);
}
}
var _ab8=0;
var rows=[];
for(var i=0;i<_ab5.length;i++){
var _ab6=_ab5[i];
_ab6.startIndex=_ab8;
_ab8+=_ab6.rows.length;
rows=rows.concat(_ab6.rows);
}
return {groups:_ab5,rows:rows};
function _ab7(_ab9){
for(var i=0;i<_ab5.length;i++){
var _aba=_ab5[i];
if(_aba.value==_ab9){
return _aba;
}
}
return null;
};
}});
$.fn.datalist=function(_abb,_abc){
if(typeof _abb=="string"){
var _abd=$.fn.datalist.methods[_abb];
if(_abd){
return _abd(this,_abc);
}else{
return this.datagrid(_abb,_abc);
}
}
_abb=_abb||{};
return this.each(function(){
var _abe=$.data(this,"datalist");
if(_abe){
$.extend(_abe.options,_abb);
}else{
var opts=$.extend({},$.fn.datalist.defaults,$.fn.datalist.parseOptions(this),_abb);
opts.columns=$.extend(true,[],opts.columns);
_abe=$.data(this,"datalist",{options:opts});
}
_aa2(this);
if(!_abe.options.data){
var data=$.fn.datalist.parseData(this);
if(data.total){
$(this).datalist("loadData",data);
}
}
});
};
$.fn.datalist.methods={options:function(jq){
return $.data(jq[0],"datalist").options;
}};
$.fn.datalist.parseOptions=function(_abf){
return $.extend({},$.fn.datagrid.parseOptions(_abf),$.parser.parseOptions(_abf,["valueField","textField","groupField",{checkbox:"boolean",lines:"boolean"}]));
};
$.fn.datalist.parseData=function(_ac0){
var opts=$.data(_ac0,"datalist").options;
var data={total:0,rows:[]};
$(_ac0).children().each(function(){
var _ac1=$.parser.parseOptions(this,["value","group"]);
var row={};
var html=$(this).html();
row[opts.valueField]=_ac1.value!=undefined?_ac1.value:html;
row[opts.textField]=html;
if(opts.groupField){
row[opts.groupField]=_ac1.group;
}
data.total++;
data.rows.push(row);
});
return data;
};
$.fn.datalist.defaults=$.extend({},$.fn.datagrid.defaults,{fitColumns:true,singleSelect:true,showHeader:false,checkbox:false,lines:false,valueField:"value",textField:"text",groupField:"",view:_aa6,textFormatter:function(_ac2,row){
return _ac2;
},groupFormatter:function(_ac3,rows){
return _ac3;
}});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".combo").bind("mousedown.combo mousewheel.combo",function(e){
var p=$(e.target).closest("span.combo,div.combo-p,div.menu");
if(p.length){
_ac4(p);
return;
}
$("body>div.combo-p>div.combo-panel:visible").panel("close");
});
});
function _ac5(_ac6){
var _ac7=$.data(_ac6,"combo");
var opts=_ac7.options;
if(!_ac7.panel){
_ac7.panel=$("<div class=\"combo-panel\"></div>").appendTo("body");
_ac7.panel.panel({minWidth:opts.panelMinWidth,maxWidth:opts.panelMaxWidth,minHeight:opts.panelMinHeight,maxHeight:opts.panelMaxHeight,doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){
var _ac8=$(this).panel("options").comboTarget;
var _ac9=$.data(_ac8,"combo");
if(_ac9){
_ac9.options.onShowPanel.call(_ac8);
}
},onBeforeClose:function(){
_ac4($(this).parent());
},onClose:function(){
var _aca=$(this).panel("options").comboTarget;
var _acb=$(_aca).data("combo");
if(_acb){
_acb.options.onHidePanel.call(_aca);
}
}});
}
var _acc=$.extend(true,[],opts.icons);
if(opts.hasDownArrow){
_acc.push({iconCls:"combo-arrow",handler:function(e){
_ad1(e.data.target);
}});
}
$(_ac6).addClass("combo-f").textbox($.extend({},opts,{icons:_acc,onChange:function(){
}}));
$(_ac6).attr("comboName",$(_ac6).attr("textboxName"));
_ac7.combo=$(_ac6).next();
_ac7.combo.addClass("combo");
_ac7.panel.unbind(".combo");
for(var _acd in opts.panelEvents){
_ac7.panel.bind(_acd+".combo",{target:_ac6},opts.panelEvents[_acd]);
}
};
function _ace(_acf){
var _ad0=$.data(_acf,"combo");
var opts=_ad0.options;
var p=_ad0.panel;
if(p.is(":visible")){
p.panel("close");
}
if(!opts.cloned){
p.panel("destroy");
}
$(_acf).textbox("destroy");
};
function _ad1(_ad2){
var _ad3=$.data(_ad2,"combo").panel;
if(_ad3.is(":visible")){
var _ad4=_ad3.combo("combo");
_ad5(_ad4);
if(_ad4!=_ad2){
$(_ad2).combo("showPanel");
}
}else{
var p=$(_ad2).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(_ad3).not(p).panel("close");
$(_ad2).combo("showPanel");
}
$(_ad2).combo("textbox").focus();
};
function _ac4(_ad6){
$(_ad6).find(".combo-f").each(function(){
var p=$(this).combo("panel");
if(p.is(":visible")){
p.panel("close");
}
});
};
function _ad7(e){
var _ad8=e.data.target;
var _ad9=$.data(_ad8,"combo");
var opts=_ad9.options;
if(!opts.editable){
_ad1(_ad8);
}else{
var p=$(_ad8).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(p).each(function(){
var _ada=$(this).combo("combo");
if(_ada!=_ad8){
_ad5(_ada);
}
});
}
};
function _adb(e){
var _adc=e.data.target;
var t=$(_adc);
var _add=t.data("combo");
var opts=t.combo("options");
_add.panel.panel("options").comboTarget=_adc;
switch(e.keyCode){
case 38:
opts.keyHandler.up.call(_adc,e);
break;
case 40:
opts.keyHandler.down.call(_adc,e);
break;
case 37:
opts.keyHandler.left.call(_adc,e);
break;
case 39:
opts.keyHandler.right.call(_adc,e);
break;
case 13:
e.preventDefault();
opts.keyHandler.enter.call(_adc,e);
return false;
case 9:
case 27:
_ad5(_adc);
break;
default:
if(opts.editable){
if(_add.timer){
clearTimeout(_add.timer);
}
_add.timer=setTimeout(function(){
var q=t.combo("getText");
if(_add.previousText!=q){
_add.previousText=q;
t.combo("showPanel");
opts.keyHandler.query.call(_adc,q,e);
t.combo("validate");
}
},opts.delay);
}
}
};
function _ade(e){
var _adf=e.data.target;
var _ae0=$(_adf).data("combo");
if(_ae0.timer){
clearTimeout(_ae0.timer);
}
};
function _ae1(_ae2){
var _ae3=$.data(_ae2,"combo");
var _ae4=_ae3.combo;
var _ae5=_ae3.panel;
var opts=$(_ae2).combo("options");
var _ae6=_ae5.panel("options");
_ae6.comboTarget=_ae2;
if(_ae6.closed){
_ae5.panel("panel").show().css({zIndex:($.fn.menu?$.fn.menu.defaults.zIndex++:($.fn.window?$.fn.window.defaults.zIndex++:99)),left:-999999});
_ae5.panel("resize",{width:(opts.panelWidth?opts.panelWidth:_ae4._outerWidth()),height:opts.panelHeight});
_ae5.panel("panel").hide();
_ae5.panel("open");
}
(function(){
if(_ae6.comboTarget==_ae2&&_ae5.is(":visible")){
_ae5.panel("move",{left:_ae7(),top:_ae8()});
setTimeout(arguments.callee,200);
}
})();
function _ae7(){
var left=_ae4.offset().left;
if(opts.panelAlign=="right"){
left+=_ae4._outerWidth()-_ae5._outerWidth();
}
if(left+_ae5._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-_ae5._outerWidth();
}
if(left<0){
left=0;
}
return left;
};
function _ae8(){
var top=_ae4.offset().top+_ae4._outerHeight();
if(top+_ae5._outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=_ae4.offset().top-_ae5._outerHeight();
}
if(top<$(document).scrollTop()){
top=_ae4.offset().top+_ae4._outerHeight();
}
return top;
};
};
function _ad5(_ae9){
var _aea=$.data(_ae9,"combo").panel;
_aea.panel("close");
};
function _aeb(_aec,text){
var _aed=$.data(_aec,"combo");
var _aee=$(_aec).textbox("getText");
if(_aee!=text){
$(_aec).textbox("setText",text);
}
_aed.previousText=text;
};
function _aef(_af0){
var _af1=$.data(_af0,"combo");
var opts=_af1.options;
var _af2=$(_af0).next();
var _af3=[];
_af2.find(".textbox-value").each(function(){
_af3.push($(this).val());
});
if(opts.multivalue){
return _af3;
}else{
return _af3.length?_af3[0].split(opts.separator):_af3;
}
};
function _af4(_af5,_af6){
var _af7=$.data(_af5,"combo");
var _af8=_af7.combo;
var opts=$(_af5).combo("options");
if(!$.isArray(_af6)){
_af6=_af6.split(opts.separator);
}
var _af9=_aef(_af5);
_af8.find(".textbox-value").remove();
if(_af6.length){
if(opts.multivalue){
for(var i=0;i<_af6.length;i++){
_afa(_af6[i]);
}
}else{
_afa(_af6.join(opts.separator));
}
}
function _afa(_afb){
var name=$(_af5).attr("textboxName")||"";
var _afc=$("<input type=\"hidden\" class=\"textbox-value\">").appendTo(_af8);
_afc.attr("name",name);
if(opts.disabled){
_afc.attr("disabled","disabled");
}
_afc.val(_afb);
};
var _afd=(function(){
if(_af9.length!=_af6.length){
return true;
}
for(var i=0;i<_af6.length;i++){
if(_af6[i]!=_af9[i]){
return true;
}
}
return false;
})();
if(_afd){
$(_af5).val(_af6.join(opts.separator));
if(opts.multiple){
opts.onChange.call(_af5,_af6,_af9);
}else{
opts.onChange.call(_af5,_af6[0],_af9[0]);
}
$(_af5).closest("form").trigger("_change",[_af5]);
}
};
function _afe(_aff){
var _b00=_aef(_aff);
return _b00[0];
};
function _b01(_b02,_b03){
_af4(_b02,[_b03]);
};
function _b04(_b05){
var opts=$.data(_b05,"combo").options;
var _b06=opts.onChange;
opts.onChange=function(){
};
if(opts.multiple){
_af4(_b05,opts.value?opts.value:[]);
}else{
_b01(_b05,opts.value);
}
opts.onChange=_b06;
};
$.fn.combo=function(_b07,_b08){
if(typeof _b07=="string"){
var _b09=$.fn.combo.methods[_b07];
if(_b09){
return _b09(this,_b08);
}else{
return this.textbox(_b07,_b08);
}
}
_b07=_b07||{};
return this.each(function(){
var _b0a=$.data(this,"combo");
if(_b0a){
$.extend(_b0a.options,_b07);
if(_b07.value!=undefined){
_b0a.options.originalValue=_b07.value;
}
}else{
_b0a=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_b07),previousText:""});
if(_b0a.options.multiple&&_b0a.options.value==""){
_b0a.options.originalValue=[];
}else{
_b0a.options.originalValue=_b0a.options.value;
}
}
_ac5(this);
_b04(this);
});
};
$.fn.combo.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"combo").options,{width:opts.width,height:opts.height,disabled:opts.disabled,readonly:opts.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).textbox("cloneFrom",from);
$.data(this,"combo",{options:$.extend(true,{cloned:true},$(from).combo("options")),combo:$(this).next(),panel:$(from).combo("panel")});
$(this).addClass("combo-f").attr("comboName",$(this).attr("textboxName"));
});
},combo:function(jq){
return jq.closest(".combo-panel").panel("options").comboTarget;
},panel:function(jq){
return $.data(jq[0],"combo").panel;
},destroy:function(jq){
return jq.each(function(){
_ace(this);
});
},showPanel:function(jq){
return jq.each(function(){
_ae1(this);
});
},hidePanel:function(jq){
return jq.each(function(){
_ad5(this);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setText","");
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",[]);
}else{
$(this).combo("setValue","");
}
});
},reset:function(jq){
return jq.each(function(){
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",opts.originalValue);
}else{
$(this).combo("setValue",opts.originalValue);
}
});
},setText:function(jq,text){
return jq.each(function(){
_aeb(this,text);
});
},getValues:function(jq){
return _aef(jq[0]);
},setValues:function(jq,_b0b){
return jq.each(function(){
_af4(this,_b0b);
});
},getValue:function(jq){
return _afe(jq[0]);
},setValue:function(jq,_b0c){
return jq.each(function(){
_b01(this,_b0c);
});
}};
$.fn.combo.parseOptions=function(_b0d){
var t=$(_b0d);
return $.extend({},$.fn.textbox.parseOptions(_b0d),$.parser.parseOptions(_b0d,["separator","panelAlign",{panelWidth:"number",hasDownArrow:"boolean",delay:"number",reversed:"boolean",multivalue:"boolean",selectOnNavigation:"boolean"},{panelMinWidth:"number",panelMaxWidth:"number",panelMinHeight:"number",panelMaxHeight:"number"}]),{panelHeight:(t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined),multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.combo.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{click:_ad7,keydown:_adb,paste:_adb,drop:_adb,blur:_ade},panelEvents:{mousedown:function(e){
e.preventDefault();
e.stopPropagation();
}},panelWidth:null,panelHeight:300,panelMinWidth:null,panelMaxWidth:null,panelMinHeight:null,panelMaxHeight:null,panelAlign:"left",reversed:false,multiple:false,multivalue:true,selectOnNavigation:true,separator:",",hasDownArrow:true,delay:200,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
},query:function(q,e){
}},onShowPanel:function(){
},onHidePanel:function(){
},onChange:function(_b0e,_b0f){
}});
})(jQuery);
(function($){
function _b10(_b11,_b12){
var _b13=$.data(_b11,"combobox");
return $.easyui.indexOfArray(_b13.data,_b13.options.valueField,_b12);
};
function _b14(_b15,_b16){
var opts=$.data(_b15,"combobox").options;
var _b17=$(_b15).combo("panel");
var item=opts.finder.getEl(_b15,_b16);
if(item.length){
if(item.position().top<=0){
var h=_b17.scrollTop()+item.position().top;
_b17.scrollTop(h);
}else{
if(item.position().top+item.outerHeight()>_b17.height()){
var h=_b17.scrollTop()+item.position().top+item.outerHeight()-_b17.height();
_b17.scrollTop(h);
}
}
}
_b17.triggerHandler("scroll");
};
function nav(_b18,dir){
var opts=$.data(_b18,"combobox").options;
var _b19=$(_b18).combobox("panel");
var item=_b19.children("div.combobox-item-hover");
if(!item.length){
item=_b19.children("div.combobox-item-selected");
}
item.removeClass("combobox-item-hover");
var _b1a="div.combobox-item:visible:not(.combobox-item-disabled):first";
var _b1b="div.combobox-item:visible:not(.combobox-item-disabled):last";
if(!item.length){
item=_b19.children(dir=="next"?_b1a:_b1b);
}else{
if(dir=="next"){
item=item.nextAll(_b1a);
if(!item.length){
item=_b19.children(_b1a);
}
}else{
item=item.prevAll(_b1a);
if(!item.length){
item=_b19.children(_b1b);
}
}
}
if(item.length){
item.addClass("combobox-item-hover");
var row=opts.finder.getRow(_b18,item);
if(row){
$(_b18).combobox("scrollTo",row[opts.valueField]);
if(opts.selectOnNavigation){
_b1c(_b18,row[opts.valueField]);
}
}
}
};
function _b1c(_b1d,_b1e,_b1f){
var opts=$.data(_b1d,"combobox").options;
var _b20=$(_b1d).combo("getValues");
if($.inArray(_b1e+"",_b20)==-1){
if(opts.multiple){
_b20.push(_b1e);
}else{
_b20=[_b1e];
}
_b21(_b1d,_b20,_b1f);
}
};
function _b22(_b23,_b24){
var opts=$.data(_b23,"combobox").options;
var _b25=$(_b23).combo("getValues");
var _b26=$.inArray(_b24+"",_b25);
if(_b26>=0){
_b25.splice(_b26,1);
_b21(_b23,_b25);
}
};
function _b21(_b27,_b28,_b29){
var opts=$.data(_b27,"combobox").options;
var _b2a=$(_b27).combo("panel");
if(!$.isArray(_b28)){
_b28=_b28.split(opts.separator);
}
if(!opts.multiple){
_b28=_b28.length?[_b28[0]]:[""];
}
var _b2b=$(_b27).combo("getValues");
if(_b2a.is(":visible")){
_b2a.find(".combobox-item-selected").each(function(){
var row=opts.finder.getRow(_b27,$(this));
if(row){
if($.easyui.indexOfArray(_b2b,row[opts.valueField])==-1){
$(this).removeClass("combobox-item-selected");
}
}
});
}
$.map(_b2b,function(v){
if($.easyui.indexOfArray(_b28,v)==-1){
var el=opts.finder.getEl(_b27,v);
if(el.hasClass("combobox-item-selected")){
el.removeClass("combobox-item-selected");
opts.onUnselect.call(_b27,opts.finder.getRow(_b27,v));
}
}
});
var _b2c=null;
var vv=[],ss=[];
for(var i=0;i<_b28.length;i++){
var v=_b28[i];
var s=v;
var row=opts.finder.getRow(_b27,v);
if(row){
s=row[opts.textField];
_b2c=row;
var el=opts.finder.getEl(_b27,v);
if(!el.hasClass("combobox-item-selected")){
el.addClass("combobox-item-selected");
opts.onSelect.call(_b27,row);
}
}else{
s=_b2d(v,opts.mappingRows)||v;
}
vv.push(v);
ss.push(s);
}
if(!_b29){
$(_b27).combo("setText",ss.join(opts.separator));
}
if(opts.showItemIcon){
var tb=$(_b27).combobox("textbox");
tb.removeClass("textbox-bgicon "+opts.textboxIconCls);
if(_b2c&&_b2c.iconCls){
tb.addClass("textbox-bgicon "+_b2c.iconCls);
opts.textboxIconCls=_b2c.iconCls;
}
}
$(_b27).combo("setValues",vv);
_b2a.triggerHandler("scroll");
function _b2d(_b2e,a){
var item=$.easyui.getArrayItem(a,opts.valueField,_b2e);
return item?item[opts.textField]:undefined;
};
};
function _b2f(_b30,data,_b31){
var _b32=$.data(_b30,"combobox");
var opts=_b32.options;
_b32.data=opts.loadFilter.call(_b30,data);
opts.view.render.call(opts.view,_b30,$(_b30).combo("panel"),_b32.data);
var vv=$(_b30).combobox("getValues");
$.easyui.forEach(_b32.data,false,function(row){
if(row["selected"]){
$.easyui.addArrayItem(vv,row[opts.valueField]+"");
}
});
if(opts.multiple){
_b21(_b30,vv,_b31);
}else{
_b21(_b30,vv.length?[vv[vv.length-1]]:[],_b31);
}
opts.onLoadSuccess.call(_b30,data);
};
function _b33(_b34,url,_b35,_b36){
var opts=$.data(_b34,"combobox").options;
if(url){
opts.url=url;
}
_b35=$.extend({},opts.queryParams,_b35||{});
if(opts.onBeforeLoad.call(_b34,_b35)==false){
return;
}
opts.loader.call(_b34,_b35,function(data){
_b2f(_b34,data,_b36);
},function(){
opts.onLoadError.apply(this,arguments);
});
};
function _b37(_b38,q){
var _b39=$.data(_b38,"combobox");
var opts=_b39.options;
var _b3a=$();
var qq=opts.multiple?q.split(opts.separator):[q];
if(opts.mode=="remote"){
_b3b(qq);
_b33(_b38,null,{q:q},true);
}else{
var _b3c=$(_b38).combo("panel");
_b3c.find(".combobox-item-hover").removeClass("combobox-item-hover");
_b3c.find(".combobox-item,.combobox-group").hide();
var data=_b39.data;
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _b3d=q;
var _b3e=undefined;
_b3a=$();
for(var i=0;i<data.length;i++){
var row=data[i];
if(opts.filter.call(_b38,q,row)){
var v=row[opts.valueField];
var s=row[opts.textField];
var g=row[opts.groupField];
var item=opts.finder.getEl(_b38,v).show();
if(s.toLowerCase()==q.toLowerCase()){
_b3d=v;
if(opts.reversed){
_b3a=item;
}else{
_b1c(_b38,v,true);
}
}
if(opts.groupField&&_b3e!=g){
opts.finder.getGroupEl(_b38,g).show();
_b3e=g;
}
}
}
vv.push(_b3d);
});
_b3b(vv);
}
function _b3b(vv){
if(opts.reversed){
_b3a.addClass("combobox-item-hover");
}else{
_b21(_b38,opts.multiple?(q?vv:[]):vv,true);
}
};
};
function _b3f(_b40){
var t=$(_b40);
var opts=t.combobox("options");
var _b41=t.combobox("panel");
var item=_b41.children("div.combobox-item-hover");
if(item.length){
item.removeClass("combobox-item-hover");
var row=opts.finder.getRow(_b40,item);
var _b42=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
t.combobox("unselect",_b42);
}else{
t.combobox("select",_b42);
}
}else{
t.combobox("select",_b42);
}
}
var vv=[];
$.map(t.combobox("getValues"),function(v){
if(_b10(_b40,v)>=0){
vv.push(v);
}
});
t.combobox("setValues",vv);
if(!opts.multiple){
t.combobox("hidePanel");
}
};
function _b43(_b44){
var _b45=$.data(_b44,"combobox");
var opts=_b45.options;
$(_b44).addClass("combobox-f");
$(_b44).combo($.extend({},opts,{onShowPanel:function(){
$(this).combo("panel").find("div.combobox-item:hidden,div.combobox-group:hidden").show();
_b21(this,$(this).combobox("getValues"),true);
$(this).combobox("scrollTo",$(this).combobox("getValue"));
opts.onShowPanel.call(this);
}}));
};
function _b46(e){
$(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");
var item=$(e.target).closest("div.combobox-item");
if(!item.hasClass("combobox-item-disabled")){
item.addClass("combobox-item-hover");
}
e.stopPropagation();
};
function _b47(e){
$(e.target).closest("div.combobox-item").removeClass("combobox-item-hover");
e.stopPropagation();
};
function _b48(e){
var _b49=$(this).panel("options").comboTarget;
if(!_b49){
return;
}
var opts=$(_b49).combobox("options");
var item=$(e.target).closest("div.combobox-item");
if(!item.length||item.hasClass("combobox-item-disabled")){
return;
}
var row=opts.finder.getRow(_b49,item);
if(!row){
return;
}
if(opts.blurTimer){
clearTimeout(opts.blurTimer);
opts.blurTimer=null;
}
opts.onClick.call(_b49,row);
var _b4a=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
_b22(_b49,_b4a);
}else{
_b1c(_b49,_b4a);
}
}else{
$(_b49).combobox("setValue",_b4a).combobox("hidePanel");
}
e.stopPropagation();
};
function _b4b(e){
var _b4c=$(this).panel("options").comboTarget;
if(!_b4c){
return;
}
var opts=$(_b4c).combobox("options");
if(opts.groupPosition=="sticky"){
var _b4d=$(this).children(".combobox-stick");
if(!_b4d.length){
_b4d=$("<div class=\"combobox-stick\"></div>").appendTo(this);
}
_b4d.hide();
var _b4e=$(_b4c).data("combobox");
$(this).children(".combobox-group:visible").each(function(){
var g=$(this);
var _b4f=opts.finder.getGroup(_b4c,g);
var _b50=_b4e.data[_b4f.startIndex+_b4f.count-1];
var last=opts.finder.getEl(_b4c,_b50[opts.valueField]);
if(g.position().top<0&&last.position().top>0){
_b4d.show().html(g.html());
return false;
}
});
}
};
$.fn.combobox=function(_b51,_b52){
if(typeof _b51=="string"){
var _b53=$.fn.combobox.methods[_b51];
if(_b53){
return _b53(this,_b52);
}else{
return this.combo(_b51,_b52);
}
}
_b51=_b51||{};
return this.each(function(){
var _b54=$.data(this,"combobox");
if(_b54){
$.extend(_b54.options,_b51);
}else{
_b54=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_b51),data:[]});
}
_b43(this);
if(_b54.options.data){
_b2f(this,_b54.options.data);
}else{
var data=$.fn.combobox.parseData(this);
if(data.length){
_b2f(this,data);
}
}
_b33(this);
});
};
$.fn.combobox.methods={options:function(jq){
var _b55=jq.combo("options");
return $.extend($.data(jq[0],"combobox").options,{width:_b55.width,height:_b55.height,originalValue:_b55.originalValue,disabled:_b55.disabled,readonly:_b55.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combobox",$(from).data("combobox"));
$(this).addClass("combobox-f").attr("comboboxName",$(this).attr("textboxName"));
});
},getData:function(jq){
return $.data(jq[0],"combobox").data;
},setValues:function(jq,_b56){
return jq.each(function(){
var opts=$(this).combobox("options");
if($.isArray(_b56)){
_b56=$.map(_b56,function(_b57){
if(_b57&&typeof _b57=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.valueField,_b57);
return _b57[opts.valueField];
}else{
return _b57;
}
});
}
_b21(this,_b56);
});
},setValue:function(jq,_b58){
return jq.each(function(){
$(this).combobox("setValues",$.isArray(_b58)?_b58:[_b58]);
});
},clear:function(jq){
return jq.each(function(){
_b21(this,[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combobox("options");
if(opts.multiple){
$(this).combobox("setValues",opts.originalValue);
}else{
$(this).combobox("setValue",opts.originalValue);
}
});
},loadData:function(jq,data){
return jq.each(function(){
_b2f(this,data);
});
},reload:function(jq,url){
return jq.each(function(){
if(typeof url=="string"){
_b33(this,url);
}else{
if(url){
var opts=$(this).combobox("options");
opts.queryParams=url;
}
_b33(this);
}
});
},select:function(jq,_b59){
return jq.each(function(){
_b1c(this,_b59);
});
},unselect:function(jq,_b5a){
return jq.each(function(){
_b22(this,_b5a);
});
},scrollTo:function(jq,_b5b){
return jq.each(function(){
_b14(this,_b5b);
});
}};
$.fn.combobox.parseOptions=function(_b5c){
var t=$(_b5c);
return $.extend({},$.fn.combo.parseOptions(_b5c),$.parser.parseOptions(_b5c,["valueField","textField","groupField","groupPosition","mode","method","url",{showItemIcon:"boolean",limitToList:"boolean"}]));
};
$.fn.combobox.parseData=function(_b5d){
var data=[];
var opts=$(_b5d).combobox("options");
$(_b5d).children().each(function(){
if(this.tagName.toLowerCase()=="optgroup"){
var _b5e=$(this).attr("label");
$(this).children().each(function(){
_b5f(this,_b5e);
});
}else{
_b5f(this);
}
});
return data;
function _b5f(el,_b60){
var t=$(el);
var row={};
row[opts.valueField]=t.attr("value")!=undefined?t.attr("value"):t.text();
row[opts.textField]=t.text();
row["iconCls"]=$.parser.parseOptions(el,["iconCls"]).iconCls;
row["selected"]=t.is(":selected");
row["disabled"]=t.is(":disabled");
if(_b60){
opts.groupField=opts.groupField||"group";
row[opts.groupField]=_b60;
}
data.push(row);
};
};
var _b61=0;
var _b62={render:function(_b63,_b64,data){
var _b65=$.data(_b63,"combobox");
var opts=_b65.options;
_b61++;
_b65.itemIdPrefix="_easyui_combobox_i"+_b61;
_b65.groupIdPrefix="_easyui_combobox_g"+_b61;
_b65.groups=[];
var dd=[];
var _b66=undefined;
for(var i=0;i<data.length;i++){
var row=data[i];
var v=row[opts.valueField]+"";
var s=row[opts.textField];
var g=row[opts.groupField];
if(g){
if(_b66!=g){
_b66=g;
_b65.groups.push({value:g,startIndex:i,count:1});
dd.push("<div id=\""+(_b65.groupIdPrefix+"_"+(_b65.groups.length-1))+"\" class=\"combobox-group\">");
dd.push(opts.groupFormatter?opts.groupFormatter.call(_b63,g):g);
dd.push("</div>");
}else{
_b65.groups[_b65.groups.length-1].count++;
}
}else{
_b66=undefined;
}
var cls="combobox-item"+(row.disabled?" combobox-item-disabled":"")+(g?" combobox-gitem":"");
dd.push("<div id=\""+(_b65.itemIdPrefix+"_"+i)+"\" class=\""+cls+"\">");
if(opts.showItemIcon&&row.iconCls){
dd.push("<span class=\"combobox-icon "+row.iconCls+"\"></span>");
}
dd.push(opts.formatter?opts.formatter.call(_b63,row):s);
dd.push("</div>");
}
$(_b64).html(dd.join(""));
}};
$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",groupPosition:"static",groupField:null,groupFormatter:function(_b67){
return _b67;
},mode:"local",method:"post",url:null,data:null,queryParams:{},showItemIcon:false,limitToList:false,unselectedValues:[],mappingRows:[],view:_b62,keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_b3f(this);
},query:function(q,e){
_b37(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
$.fn.combo.defaults.inputEvents.blur(e);
var _b68=e.data.target;
var opts=$(_b68).combobox("options");
if(opts.reversed||opts.limitToList){
if(opts.blurTimer){
clearTimeout(opts.blurTimer);
}
opts.blurTimer=setTimeout(function(){
var _b69=$(_b68).parent().length;
if(_b69){
if(opts.reversed){
$(_b68).combobox("setValues",$(_b68).combobox("getValues"));
}else{
if(opts.limitToList){
var vv=[];
$.map($(_b68).combobox("getValues"),function(v){
var _b6a=$.easyui.indexOfArray($(_b68).combobox("getData"),opts.valueField,v);
if(_b6a>=0){
vv.push(v);
}
});
$(_b68).combobox("setValues",vv);
}
}
opts.blurTimer=null;
}
},50);
}
}}),panelEvents:{mouseover:_b46,mouseout:_b47,mousedown:function(e){
e.preventDefault();
e.stopPropagation();
},click:_b48,scroll:_b4b},filter:function(q,row){
var opts=$(this).combobox("options");
return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())>=0;
},formatter:function(row){
var opts=$(this).combobox("options");
return row[opts.textField];
},loader:function(_b6b,_b6c,_b6d){
var opts=$(this).combobox("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_b6b,dataType:"json",success:function(data){
_b6c(data);
},error:function(){
_b6d.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},finder:{getEl:function(_b6e,_b6f){
var _b70=_b10(_b6e,_b6f);
var id=$.data(_b6e,"combobox").itemIdPrefix+"_"+_b70;
return $("#"+id);
},getGroupEl:function(_b71,_b72){
var _b73=$.data(_b71,"combobox");
var _b74=$.easyui.indexOfArray(_b73.groups,"value",_b72);
var id=_b73.groupIdPrefix+"_"+_b74;
return $("#"+id);
},getGroup:function(_b75,p){
var _b76=$.data(_b75,"combobox");
var _b77=p.attr("id").substr(_b76.groupIdPrefix.length+1);
return _b76.groups[parseInt(_b77)];
},getRow:function(_b78,p){
var _b79=$.data(_b78,"combobox");
var _b7a=(p instanceof $)?p.attr("id").substr(_b79.itemIdPrefix.length+1):_b10(_b78,p);
return _b79.data[parseInt(_b7a)];
}},onBeforeLoad:function(_b7b){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onSelect:function(_b7c){
},onUnselect:function(_b7d){
},onClick:function(_b7e){
}});
})(jQuery);
(function($){
function _b7f(_b80){
var _b81=$.data(_b80,"combotree");
var opts=_b81.options;
var tree=_b81.tree;
$(_b80).addClass("combotree-f");
$(_b80).combo($.extend({},opts,{onShowPanel:function(){
if(opts.editable){
tree.tree("doFilter","");
}
opts.onShowPanel.call(this);
}}));
var _b82=$(_b80).combo("panel");
if(!tree){
tree=$("<ul></ul>").appendTo(_b82);
_b81.tree=tree;
}
tree.tree($.extend({},opts,{checkbox:opts.multiple,onLoadSuccess:function(node,data){
var _b83=$(_b80).combotree("getValues");
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
$.easyui.addArrayItem(_b83,node.id);
});
}
_b88(_b80,_b83,_b81.remainText);
opts.onLoadSuccess.call(this,node,data);
},onClick:function(node){
if(opts.multiple){
$(this).tree(node.checked?"uncheck":"check",node.target);
}else{
$(_b80).combo("hidePanel");
}
_b81.remainText=false;
_b85(_b80);
opts.onClick.call(this,node);
},onCheck:function(node,_b84){
_b81.remainText=false;
_b85(_b80);
opts.onCheck.call(this,node,_b84);
}}));
};
function _b85(_b86){
var _b87=$.data(_b86,"combotree");
var opts=_b87.options;
var tree=_b87.tree;
var vv=[];
if(opts.multiple){
vv=$.map(tree.tree("getChecked"),function(node){
return node.id;
});
}else{
var node=tree.tree("getSelected");
if(node){
vv.push(node.id);
}
}
vv=vv.concat(opts.unselectedValues);
_b88(_b86,vv,_b87.remainText);
};
function _b88(_b89,_b8a,_b8b){
var _b8c=$.data(_b89,"combotree");
var opts=_b8c.options;
var tree=_b8c.tree;
var _b8d=tree.tree("options");
var _b8e=_b8d.onBeforeCheck;
var _b8f=_b8d.onCheck;
var _b90=_b8d.onSelect;
_b8d.onBeforeCheck=_b8d.onCheck=_b8d.onSelect=function(){
};
if(!$.isArray(_b8a)){
_b8a=_b8a.split(opts.separator);
}
if(!opts.multiple){
_b8a=_b8a.length?[_b8a[0]]:[""];
}
var vv=$.map(_b8a,function(_b91){
return String(_b91);
});
tree.find("div.tree-node-selected").removeClass("tree-node-selected");
$.map(tree.tree("getChecked"),function(node){
if($.inArray(String(node.id),vv)==-1){
tree.tree("uncheck",node.target);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var node=tree.tree("find",v);
if(node){
tree.tree("check",node.target).tree("select",node.target);
ss.push(_b92(node));
}else{
ss.push(_b93(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
var id=String(node.id);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(_b92(node));
}
});
}
_b8d.onBeforeCheck=_b8e;
_b8d.onCheck=_b8f;
_b8d.onSelect=_b90;
if(!_b8b){
var s=ss.join(opts.separator);
if($(_b89).combo("getText")!=s){
$(_b89).combo("setText",s);
}
}
$(_b89).combo("setValues",vv);
function _b93(_b94,a){
var item=$.easyui.getArrayItem(a,"id",_b94);
return item?_b92(item):undefined;
};
function _b92(node){
return node[opts.textField||""]||node.text;
};
};
function _b95(_b96,q){
var _b97=$.data(_b96,"combotree");
var opts=_b97.options;
var tree=_b97.tree;
_b97.remainText=true;
tree.tree("doFilter",opts.multiple?q.split(opts.separator):q);
};
function _b98(_b99){
var _b9a=$.data(_b99,"combotree");
_b9a.remainText=false;
$(_b99).combotree("setValues",$(_b99).combotree("getValues"));
$(_b99).combotree("hidePanel");
};
$.fn.combotree=function(_b9b,_b9c){
if(typeof _b9b=="string"){
var _b9d=$.fn.combotree.methods[_b9b];
if(_b9d){
return _b9d(this,_b9c);
}else{
return this.combo(_b9b,_b9c);
}
}
_b9b=_b9b||{};
return this.each(function(){
var _b9e=$.data(this,"combotree");
if(_b9e){
$.extend(_b9e.options,_b9b);
}else{
$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_b9b)});
}
_b7f(this);
});
};
$.fn.combotree.methods={options:function(jq){
var _b9f=jq.combo("options");
return $.extend($.data(jq[0],"combotree").options,{width:_b9f.width,height:_b9f.height,originalValue:_b9f.originalValue,disabled:_b9f.disabled,readonly:_b9f.readonly});
},clone:function(jq,_ba0){
var t=jq.combo("clone",_ba0);
t.data("combotree",{options:$.extend(true,{},jq.combotree("options")),tree:jq.combotree("tree")});
return t;
},tree:function(jq){
return $.data(jq[0],"combotree").tree;
},loadData:function(jq,data){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
opts.data=data;
var tree=$.data(this,"combotree").tree;
tree.tree("loadData",data);
});
},reload:function(jq,url){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
var tree=$.data(this,"combotree").tree;
if(url){
opts.url=url;
}
tree.tree({url:opts.url});
});
},setValues:function(jq,_ba1){
return jq.each(function(){
var opts=$(this).combotree("options");
if($.isArray(_ba1)){
_ba1=$.map(_ba1,function(_ba2){
if(_ba2&&typeof _ba2=="object"){
$.easyui.addArrayItem(opts.mappingRows,"id",_ba2);
return _ba2.id;
}else{
return _ba2;
}
});
}
_b88(this,_ba1);
});
},setValue:function(jq,_ba3){
return jq.each(function(){
$(this).combotree("setValues",$.isArray(_ba3)?_ba3:[_ba3]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotree("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotree("options");
if(opts.multiple){
$(this).combotree("setValues",opts.originalValue);
}else{
$(this).combotree("setValue",opts.originalValue);
}
});
}};
$.fn.combotree.parseOptions=function(_ba4){
return $.extend({},$.fn.combo.parseOptions(_ba4),$.fn.tree.parseOptions(_ba4));
};
$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false,textField:null,unselectedValues:[],mappingRows:[],keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b98(this);
},query:function(q,e){
_b95(this,q);
}}});
})(jQuery);
(function($){
function _ba5(_ba6){
var _ba7=$.data(_ba6,"combogrid");
var opts=_ba7.options;
var grid=_ba7.grid;
$(_ba6).addClass("combogrid-f").combo($.extend({},opts,{onShowPanel:function(){
_bbe(this,$(this).combogrid("getValues"),true);
var p=$(this).combogrid("panel");
var _ba8=p.outerHeight()-p.height();
var _ba9=p._size("minHeight");
var _baa=p._size("maxHeight");
var dg=$(this).combogrid("grid");
dg.datagrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_ba9?_ba9-_ba8:""),maxHeight:(_baa?_baa-_ba8:"")});
var row=dg.datagrid("getSelected");
if(row){
dg.datagrid("scrollTo",dg.datagrid("getRowIndex",row));
}
opts.onShowPanel.call(this);
}}));
var _bab=$(_ba6).combo("panel");
if(!grid){
grid=$("<table></table>").appendTo(_bab);
_ba7.grid=grid;
}
grid.datagrid($.extend({},opts,{border:false,singleSelect:(!opts.multiple),onLoadSuccess:_bac,onClickRow:_bad,onSelect:_bae("onSelect"),onUnselect:_bae("onUnselect"),onSelectAll:_bae("onSelectAll"),onUnselectAll:_bae("onUnselectAll")}));
function _baf(dg){
return $(dg).closest(".combo-panel").panel("options").comboTarget||_ba6;
};
function _bac(data){
var _bb0=_baf(this);
var _bb1=$(_bb0).data("combogrid");
var opts=_bb1.options;
var _bb2=$(_bb0).combo("getValues");
_bbe(_bb0,_bb2,_bb1.remainText);
opts.onLoadSuccess.call(this,data);
};
function _bad(_bb3,row){
var _bb4=_baf(this);
var _bb5=$(_bb4).data("combogrid");
var opts=_bb5.options;
_bb5.remainText=false;
_bb6.call(this);
if(!opts.multiple){
$(_bb4).combo("hidePanel");
}
opts.onClickRow.call(this,_bb3,row);
};
function _bae(_bb7){
return function(_bb8,row){
var _bb9=_baf(this);
var opts=$(_bb9).combogrid("options");
if(_bb7=="onUnselectAll"){
if(opts.multiple){
_bb6.call(this);
}
}else{
_bb6.call(this);
}
opts[_bb7].call(this,_bb8,row);
};
};
function _bb6(){
var dg=$(this);
var _bba=_baf(dg);
var _bbb=$(_bba).data("combogrid");
var opts=_bbb.options;
var vv=$.map(dg.datagrid("getSelections"),function(row){
return row[opts.idField];
});
vv=vv.concat(opts.unselectedValues);
var _bbc=dg.data("datagrid").dc.body2;
var _bbd=_bbc.scrollTop();
_bbe(_bba,vv,_bbb.remainText);
_bbc.scrollTop(_bbd);
};
};
function nav(_bbf,dir){
var _bc0=$.data(_bbf,"combogrid");
var opts=_bc0.options;
var grid=_bc0.grid;
var _bc1=grid.datagrid("getRows").length;
if(!_bc1){
return;
}
var tr=opts.finder.getTr(grid[0],null,"highlight");
if(!tr.length){
tr=opts.finder.getTr(grid[0],null,"selected");
}
var _bc2;
if(!tr.length){
_bc2=(dir=="next"?0:_bc1-1);
}else{
var _bc2=parseInt(tr.attr("datagrid-row-index"));
_bc2+=(dir=="next"?1:-1);
if(_bc2<0){
_bc2=_bc1-1;
}
if(_bc2>=_bc1){
_bc2=0;
}
}
grid.datagrid("highlightRow",_bc2);
if(opts.selectOnNavigation){
_bc0.remainText=false;
grid.datagrid("selectRow",_bc2);
}
};
function _bbe(_bc3,_bc4,_bc5){
var _bc6=$.data(_bc3,"combogrid");
var opts=_bc6.options;
var grid=_bc6.grid;
var _bc7=$(_bc3).combo("getValues");
var _bc8=$(_bc3).combo("options");
var _bc9=_bc8.onChange;
_bc8.onChange=function(){
};
var _bca=grid.datagrid("options");
var _bcb=_bca.onSelect;
var _bcc=_bca.onUnselectAll;
_bca.onSelect=_bca.onUnselectAll=function(){
};
if(!$.isArray(_bc4)){
_bc4=_bc4.split(opts.separator);
}
if(!opts.multiple){
_bc4=_bc4.length?[_bc4[0]]:[""];
}
var vv=$.map(_bc4,function(_bcd){
return String(_bcd);
});
vv=$.grep(vv,function(v,_bce){
return _bce===$.inArray(v,vv);
});
var _bcf=$.grep(grid.datagrid("getSelections"),function(row,_bd0){
return $.inArray(String(row[opts.idField]),vv)>=0;
});
grid.datagrid("clearSelections");
grid.data("datagrid").selectedRows=_bcf;
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var _bd1=grid.datagrid("getRowIndex",v);
if(_bd1>=0){
grid.datagrid("selectRow",_bd1);
}else{
opts.unselectedValues.push(v);
}
ss.push(_bd2(v,grid.datagrid("getRows"))||_bd2(v,_bcf)||_bd2(v,opts.mappingRows)||v);
});
$(_bc3).combo("setValues",_bc7);
_bc8.onChange=_bc9;
_bca.onSelect=_bcb;
_bca.onUnselectAll=_bcc;
if(!_bc5){
var s=ss.join(opts.separator);
if($(_bc3).combo("getText")!=s){
$(_bc3).combo("setText",s);
}
}
$(_bc3).combo("setValues",_bc4);
function _bd2(_bd3,a){
var item=$.easyui.getArrayItem(a,opts.idField,_bd3);
return item?item[opts.textField]:undefined;
};
};
function _bd4(_bd5,q){
var _bd6=$.data(_bd5,"combogrid");
var opts=_bd6.options;
var grid=_bd6.grid;
_bd6.remainText=true;
var qq=opts.multiple?q.split(opts.separator):[q];
qq=$.grep(qq,function(q){
return $.trim(q)!="";
});
if(opts.mode=="remote"){
_bd7(qq);
grid.datagrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
grid.datagrid("highlightRow",-1);
var rows=grid.datagrid("getRows");
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _bd8=q;
_bd9(opts.mappingRows,q);
_bd9(grid.datagrid("getSelections"),q);
var _bda=_bd9(rows,q);
if(_bda>=0){
if(opts.reversed){
grid.datagrid("highlightRow",_bda);
}
}else{
$.map(rows,function(row,i){
if(opts.filter.call(_bd5,q,row)){
grid.datagrid("highlightRow",i);
}
});
}
});
_bd7(vv);
}
function _bd9(rows,q){
for(var i=0;i<rows.length;i++){
var row=rows[i];
if((row[opts.textField]||"").toLowerCase()==q.toLowerCase()){
vv.push(row[opts.idField]);
return i;
}
}
return -1;
};
function _bd7(vv){
if(!opts.reversed){
_bbe(_bd5,vv,true);
}
};
};
function _bdb(_bdc){
var _bdd=$.data(_bdc,"combogrid");
var opts=_bdd.options;
var grid=_bdd.grid;
var tr=opts.finder.getTr(grid[0],null,"highlight");
_bdd.remainText=false;
if(tr.length){
var _bde=parseInt(tr.attr("datagrid-row-index"));
if(opts.multiple){
if(tr.hasClass("datagrid-row-selected")){
grid.datagrid("unselectRow",_bde);
}else{
grid.datagrid("selectRow",_bde);
}
}else{
grid.datagrid("selectRow",_bde);
}
}
var vv=[];
$.map(grid.datagrid("getSelections"),function(row){
vv.push(row[opts.idField]);
});
$.map(opts.unselectedValues,function(v){
if($.easyui.indexOfArray(opts.mappingRows,opts.idField,v)>=0){
$.easyui.addArrayItem(vv,v);
}
});
$(_bdc).combogrid("setValues",vv);
if(!opts.multiple){
$(_bdc).combogrid("hidePanel");
}
};
$.fn.combogrid=function(_bdf,_be0){
if(typeof _bdf=="string"){
var _be1=$.fn.combogrid.methods[_bdf];
if(_be1){
return _be1(this,_be0);
}else{
return this.combo(_bdf,_be0);
}
}
_bdf=_bdf||{};
return this.each(function(){
var _be2=$.data(this,"combogrid");
if(_be2){
$.extend(_be2.options,_bdf);
}else{
_be2=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_bdf)});
}
_ba5(this);
});
};
$.fn.combogrid.methods={options:function(jq){
var _be3=jq.combo("options");
return $.extend($.data(jq[0],"combogrid").options,{width:_be3.width,height:_be3.height,originalValue:_be3.originalValue,disabled:_be3.disabled,readonly:_be3.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combogrid",{options:$.extend(true,{cloned:true},$(from).combogrid("options")),combo:$(this).next(),panel:$(from).combo("panel"),grid:$(from).combogrid("grid")});
});
},grid:function(jq){
return $.data(jq[0],"combogrid").grid;
},setValues:function(jq,_be4){
return jq.each(function(){
var opts=$(this).combogrid("options");
if($.isArray(_be4)){
_be4=$.map(_be4,function(_be5){
if(_be5&&typeof _be5=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_be5);
return _be5[opts.idField];
}else{
return _be5;
}
});
}
_bbe(this,_be4);
});
},setValue:function(jq,_be6){
return jq.each(function(){
$(this).combogrid("setValues",$.isArray(_be6)?_be6:[_be6]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combogrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combogrid("options");
if(opts.multiple){
$(this).combogrid("setValues",opts.originalValue);
}else{
$(this).combogrid("setValue",opts.originalValue);
}
});
}};
$.fn.combogrid.parseOptions=function(_be7){
var t=$(_be7);
return $.extend({},$.fn.combo.parseOptions(_be7),$.fn.datagrid.parseOptions(_be7),$.parser.parseOptions(_be7,["idField","textField","mode"]));
};
$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{loadMsg:null,idField:null,textField:null,unselectedValues:[],mappingRows:[],mode:"local",keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_bdb(this);
},query:function(q,e){
_bd4(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
$.fn.combo.defaults.inputEvents.blur(e);
var _be8=e.data.target;
var opts=$(_be8).combogrid("options");
if(opts.reversed){
$(_be8).combogrid("setValues",$(_be8).combogrid("getValues"));
}
}}),panelEvents:{mousedown:function(e){
}},filter:function(q,row){
var opts=$(this).combogrid("options");
return (row[opts.textField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _be9(_bea){
var _beb=$.data(_bea,"combotreegrid");
var opts=_beb.options;
$(_bea).addClass("combotreegrid-f").combo($.extend({},opts,{onShowPanel:function(){
var p=$(this).combotreegrid("panel");
var _bec=p.outerHeight()-p.height();
var _bed=p._size("minHeight");
var _bee=p._size("maxHeight");
var dg=$(this).combotreegrid("grid");
dg.treegrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_bed?_bed-_bec:""),maxHeight:(_bee?_bee-_bec:"")});
var row=dg.treegrid("getSelected");
if(row){
dg.treegrid("scrollTo",row[opts.idField]);
}
opts.onShowPanel.call(this);
}}));
if(!_beb.grid){
var _bef=$(_bea).combo("panel");
_beb.grid=$("<table></table>").appendTo(_bef);
}
_beb.grid.treegrid($.extend({},opts,{border:false,checkbox:opts.multiple,onLoadSuccess:function(row,data){
var _bf0=$(_bea).combotreegrid("getValues");
if(opts.multiple){
$.map($(this).treegrid("getCheckedNodes"),function(row){
$.easyui.addArrayItem(_bf0,row[opts.idField]);
});
}
_bf5(_bea,_bf0);
opts.onLoadSuccess.call(this,row,data);
_beb.remainText=false;
},onClickRow:function(row){
if(opts.multiple){
$(this).treegrid(row.checked?"uncheckNode":"checkNode",row[opts.idField]);
$(this).treegrid("unselect",row[opts.idField]);
}else{
$(_bea).combo("hidePanel");
}
_bf2(_bea);
opts.onClickRow.call(this,row);
},onCheckNode:function(row,_bf1){
_bf2(_bea);
opts.onCheckNode.call(this,row,_bf1);
}}));
};
function _bf2(_bf3){
var _bf4=$.data(_bf3,"combotreegrid");
var opts=_bf4.options;
var grid=_bf4.grid;
var vv=[];
if(opts.multiple){
vv=$.map(grid.treegrid("getCheckedNodes"),function(row){
return row[opts.idField];
});
}else{
var row=grid.treegrid("getSelected");
if(row){
vv.push(row[opts.idField]);
}
}
vv=vv.concat(opts.unselectedValues);
_bf5(_bf3,vv);
};
function _bf5(_bf6,_bf7){
var _bf8=$.data(_bf6,"combotreegrid");
var opts=_bf8.options;
var grid=_bf8.grid;
if(!$.isArray(_bf7)){
_bf7=_bf7.split(opts.separator);
}
if(!opts.multiple){
_bf7=_bf7.length?[_bf7[0]]:[""];
}
var vv=$.map(_bf7,function(_bf9){
return String(_bf9);
});
vv=$.grep(vv,function(v,_bfa){
return _bfa===$.inArray(v,vv);
});
var _bfb=grid.treegrid("getSelected");
if(_bfb){
grid.treegrid("unselect",_bfb[opts.idField]);
}
$.map(grid.treegrid("getCheckedNodes"),function(row){
if($.inArray(String(row[opts.idField]),vv)==-1){
grid.treegrid("uncheckNode",row[opts.idField]);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var row=grid.treegrid("find",v);
if(row){
if(opts.multiple){
grid.treegrid("checkNode",v);
}else{
grid.treegrid("select",v);
}
ss.push(_bfc(row));
}else{
ss.push(_bfd(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(grid.treegrid("getCheckedNodes"),function(row){
var id=String(row[opts.idField]);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(_bfc(row));
}
});
}
if(!_bf8.remainText){
var s=ss.join(opts.separator);
if($(_bf6).combo("getText")!=s){
$(_bf6).combo("setText",s);
}
}
$(_bf6).combo("setValues",vv);
function _bfd(_bfe,a){
var item=$.easyui.getArrayItem(a,opts.idField,_bfe);
return item?_bfc(item):undefined;
};
function _bfc(row){
return row[opts.textField||""]||row[opts.treeField];
};
};
function _bff(_c00,q){
var _c01=$.data(_c00,"combotreegrid");
var opts=_c01.options;
var grid=_c01.grid;
_c01.remainText=true;
var qq=opts.multiple?q.split(opts.separator):[q];
qq=$.grep(qq,function(q){
return $.trim(q)!="";
});
grid.treegrid("clearSelections").treegrid("clearChecked").treegrid("highlightRow",-1);
if(opts.mode=="remote"){
_c02(qq);
grid.treegrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
if(q){
var data=grid.treegrid("getData");
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
if(q){
var v=undefined;
$.easyui.forEach(data,true,function(row){
if(q.toLowerCase()==String(row[opts.treeField]).toLowerCase()){
v=row[opts.idField];
return false;
}else{
if(opts.filter.call(_c00,q,row)){
grid.treegrid("expandTo",row[opts.idField]);
grid.treegrid("highlightRow",row[opts.idField]);
return false;
}
}
});
if(v==undefined){
$.easyui.forEach(opts.mappingRows,false,function(row){
if(q.toLowerCase()==String(row[opts.treeField])){
v=row[opts.idField];
return false;
}
});
}
if(v!=undefined){
vv.push(v);
}else{
vv.push(q);
}
}
});
_c02(vv);
_c01.remainText=false;
}
}
function _c02(vv){
if(!opts.reversed){
$(_c00).combotreegrid("setValues",vv);
}
};
};
function _c03(_c04){
var _c05=$.data(_c04,"combotreegrid");
var opts=_c05.options;
var grid=_c05.grid;
var tr=opts.finder.getTr(grid[0],null,"highlight");
_c05.remainText=false;
if(tr.length){
var id=tr.attr("node-id");
if(opts.multiple){
if(tr.hasClass("datagrid-row-selected")){
grid.treegrid("uncheckNode",id);
}else{
grid.treegrid("checkNode",id);
}
}else{
grid.treegrid("selectRow",id);
}
}
var vv=[];
if(opts.multiple){
$.map(grid.treegrid("getCheckedNodes"),function(row){
vv.push(row[opts.idField]);
});
}else{
var row=grid.treegrid("getSelected");
if(row){
vv.push(row[opts.idField]);
}
}
$.map(opts.unselectedValues,function(v){
if($.easyui.indexOfArray(opts.mappingRows,opts.idField,v)>=0){
$.easyui.addArrayItem(vv,v);
}
});
$(_c04).combotreegrid("setValues",vv);
if(!opts.multiple){
$(_c04).combotreegrid("hidePanel");
}
};
$.fn.combotreegrid=function(_c06,_c07){
if(typeof _c06=="string"){
var _c08=$.fn.combotreegrid.methods[_c06];
if(_c08){
return _c08(this,_c07);
}else{
return this.combo(_c06,_c07);
}
}
_c06=_c06||{};
return this.each(function(){
var _c09=$.data(this,"combotreegrid");
if(_c09){
$.extend(_c09.options,_c06);
}else{
_c09=$.data(this,"combotreegrid",{options:$.extend({},$.fn.combotreegrid.defaults,$.fn.combotreegrid.parseOptions(this),_c06)});
}
_be9(this);
});
};
$.fn.combotreegrid.methods={options:function(jq){
var _c0a=jq.combo("options");
return $.extend($.data(jq[0],"combotreegrid").options,{width:_c0a.width,height:_c0a.height,originalValue:_c0a.originalValue,disabled:_c0a.disabled,readonly:_c0a.readonly});
},grid:function(jq){
return $.data(jq[0],"combotreegrid").grid;
},setValues:function(jq,_c0b){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if($.isArray(_c0b)){
_c0b=$.map(_c0b,function(_c0c){
if(_c0c&&typeof _c0c=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_c0c);
return _c0c[opts.idField];
}else{
return _c0c;
}
});
}
_bf5(this,_c0b);
});
},setValue:function(jq,_c0d){
return jq.each(function(){
$(this).combotreegrid("setValues",$.isArray(_c0d)?_c0d:[_c0d]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotreegrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if(opts.multiple){
$(this).combotreegrid("setValues",opts.originalValue);
}else{
$(this).combotreegrid("setValue",opts.originalValue);
}
});
}};
$.fn.combotreegrid.parseOptions=function(_c0e){
var t=$(_c0e);
return $.extend({},$.fn.combo.parseOptions(_c0e),$.fn.treegrid.parseOptions(_c0e),$.parser.parseOptions(_c0e,["mode",{limitToGrid:"boolean"}]));
};
$.fn.combotreegrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.treegrid.defaults,{editable:false,singleSelect:true,limitToGrid:false,unselectedValues:[],mappingRows:[],mode:"local",textField:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_c03(this);
},query:function(q,e){
_bff(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
$.fn.combo.defaults.inputEvents.blur(e);
var _c0f=e.data.target;
var opts=$(_c0f).combotreegrid("options");
if(opts.limitToGrid){
_c03(_c0f);
}
}}),filter:function(q,row){
var opts=$(this).combotreegrid("options");
return (row[opts.treeField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _c10(_c11){
var _c12=$.data(_c11,"tagbox");
var opts=_c12.options;
$(_c11).addClass("tagbox-f").combobox($.extend({},opts,{cls:"tagbox",reversed:true,onChange:function(_c13,_c14){
_c15();
$(this).combobox("hidePanel");
opts.onChange.call(_c11,_c13,_c14);
},onResizing:function(_c16,_c17){
var _c18=$(this).combobox("textbox");
var tb=$(this).data("textbox").textbox;
var _c19=tb.outerWidth();
tb.css({height:"",paddingLeft:_c18.css("marginLeft"),paddingRight:_c18.css("marginRight")});
_c18.css("margin",0);
tb._outerWidth(_c19);
_c2c(_c11);
_c1e(this);
opts.onResizing.call(_c11,_c16,_c17);
},onLoadSuccess:function(data){
_c15();
opts.onLoadSuccess.call(_c11,data);
}}));
_c15();
_c2c(_c11);
function _c15(){
$(_c11).next().find(".tagbox-label").remove();
var _c1a=$(_c11).tagbox("textbox");
var ss=[];
$.map($(_c11).tagbox("getValues"),function(_c1b,_c1c){
var row=opts.finder.getRow(_c11,_c1b);
var text=opts.tagFormatter.call(_c11,_c1b,row);
var cs={};
var css=opts.tagStyler.call(_c11,_c1b,row)||"";
if(typeof css=="string"){
cs={s:css};
}else{
cs={c:css["class"]||"",s:css["style"]||""};
}
var _c1d=$("<span class=\"tagbox-label\"></span>").insertBefore(_c1a).html(text);
_c1d.attr("tagbox-index",_c1c);
_c1d.attr("style",cs.s).addClass(cs.c);
$("<a href=\"javascript:;\" class=\"tagbox-remove\"></a>").appendTo(_c1d);
});
_c1e(_c11);
$(_c11).combobox("setText","");
};
};
function _c1e(_c1f,_c20){
var span=$(_c1f).next();
var _c21=_c20?$(_c20):span.find(".tagbox-label");
if(_c21.length){
var _c22=$(_c1f).tagbox("textbox");
var _c23=$(_c21[0]);
var _c24=_c23.outerHeight(true)-_c23.outerHeight();
var _c25=_c22.outerHeight()-_c24*2;
_c21.css({height:_c25+"px",lineHeight:_c25+"px"});
var _c26=span.find(".textbox-addon").css("height","100%");
_c26.find(".textbox-icon").css("height","100%");
span.find(".textbox-button").linkbutton("resize",{height:"100%"});
}
};
function _c27(_c28){
var span=$(_c28).next();
span.unbind(".tagbox").bind("click.tagbox",function(e){
var opts=$(_c28).tagbox("options");
if(opts.disabled||opts.readonly){
return;
}
if($(e.target).hasClass("tagbox-remove")){
var _c29=parseInt($(e.target).parent().attr("tagbox-index"));
var _c2a=$(_c28).tagbox("getValues");
if(opts.onBeforeRemoveTag.call(_c28,_c2a[_c29])==false){
return;
}
opts.onRemoveTag.call(_c28,_c2a[_c29]);
_c2a.splice(_c29,1);
$(_c28).tagbox("setValues",_c2a);
}else{
var _c2b=$(e.target).closest(".tagbox-label");
if(_c2b.length){
var _c29=parseInt(_c2b.attr("tagbox-index"));
var _c2a=$(_c28).tagbox("getValues");
opts.onClickTag.call(_c28,_c2a[_c29]);
}
}
$(this).find(".textbox-text").focus();
}).bind("keyup.tagbox",function(e){
_c2c(_c28);
}).bind("mouseover.tagbox",function(e){
if($(e.target).closest(".textbox-button,.textbox-addon,.tagbox-label").length){
$(this).triggerHandler("mouseleave");
}else{
$(this).find(".textbox-text").triggerHandler("mouseenter");
}
}).bind("mouseleave.tagbox",function(e){
$(this).find(".textbox-text").triggerHandler("mouseleave");
});
};
function _c2c(_c2d){
var opts=$(_c2d).tagbox("options");
var _c2e=$(_c2d).tagbox("textbox");
var span=$(_c2d).next();
var tmp=$("<span></span>").appendTo("body");
tmp.attr("style",_c2e.attr("style"));
tmp.css({position:"absolute",top:-9999,left:-9999,width:"auto",fontFamily:_c2e.css("fontFamily"),fontSize:_c2e.css("fontSize"),fontWeight:_c2e.css("fontWeight"),whiteSpace:"nowrap"});
var _c2f=_c30(_c2e.val());
var _c31=_c30(opts.prompt||"");
tmp.remove();
var _c32=Math.min(Math.max(_c2f,_c31)+20,span.width());
_c2e._outerWidth(_c32);
span.find(".textbox-button").linkbutton("resize",{height:"100%"});
function _c30(val){
var s=val.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");
tmp.html(s);
return tmp.outerWidth();
};
};
function _c33(_c34){
var t=$(_c34);
var opts=t.tagbox("options");
if(opts.limitToList){
var _c35=t.tagbox("panel");
var item=_c35.children("div.combobox-item-hover");
if(item.length){
item.removeClass("combobox-item-hover");
var row=opts.finder.getRow(_c34,item);
var _c36=row[opts.valueField];
$(_c34).tagbox(item.hasClass("combobox-item-selected")?"unselect":"select",_c36);
}
$(_c34).tagbox("hidePanel");
}else{
var v=$.trim($(_c34).tagbox("getText"));
if(v!==""){
var _c37=$(_c34).tagbox("getValues");
_c37.push(v);
$(_c34).tagbox("setValues",_c37);
}
}
};
function _c38(_c39,_c3a){
$(_c39).combobox("setText","");
_c2c(_c39);
$(_c39).combobox("setValues",_c3a);
$(_c39).combobox("setText","");
$(_c39).tagbox("validate");
};
$.fn.tagbox=function(_c3b,_c3c){
if(typeof _c3b=="string"){
var _c3d=$.fn.tagbox.methods[_c3b];
if(_c3d){
return _c3d(this,_c3c);
}else{
return this.combobox(_c3b,_c3c);
}
}
_c3b=_c3b||{};
return this.each(function(){
var _c3e=$.data(this,"tagbox");
if(_c3e){
$.extend(_c3e.options,_c3b);
}else{
$.data(this,"tagbox",{options:$.extend({},$.fn.tagbox.defaults,$.fn.tagbox.parseOptions(this),_c3b)});
}
_c10(this);
_c27(this);
});
};
$.fn.tagbox.methods={options:function(jq){
var _c3f=jq.combobox("options");
return $.extend($.data(jq[0],"tagbox").options,{width:_c3f.width,height:_c3f.height,originalValue:_c3f.originalValue,disabled:_c3f.disabled,readonly:_c3f.readonly});
},setValues:function(jq,_c40){
return jq.each(function(){
_c38(this,_c40);
});
},reset:function(jq){
return jq.each(function(){
$(this).combobox("reset").combobox("setText","");
});
}};
$.fn.tagbox.parseOptions=function(_c41){
return $.extend({},$.fn.combobox.parseOptions(_c41),$.parser.parseOptions(_c41,[]));
};
$.fn.tagbox.defaults=$.extend({},$.fn.combobox.defaults,{hasDownArrow:false,multiple:true,reversed:true,selectOnNavigation:false,tipOptions:$.extend({},$.fn.textbox.defaults.tipOptions,{showDelay:200}),val:function(_c42){
var vv=$(_c42).parent().prev().tagbox("getValues");
if($(_c42).is(":focus")){
vv.push($(_c42).val());
}
return vv.join(",");
},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _c43=e.data.target;
var opts=$(_c43).tagbox("options");
if(opts.limitToList){
_c33(_c43);
}
}}),keyHandler:$.extend({},$.fn.combobox.defaults.keyHandler,{enter:function(e){
_c33(this);
},query:function(q,e){
var opts=$(this).tagbox("options");
if(opts.limitToList){
$.fn.combobox.defaults.keyHandler.query.call(this,q,e);
}else{
$(this).combobox("hidePanel");
}
}}),tagFormatter:function(_c44,row){
var opts=$(this).tagbox("options");
return row?row[opts.textField]:_c44;
},tagStyler:function(_c45,row){
return "";
},onClickTag:function(_c46){
},onBeforeRemoveTag:function(_c47){
},onRemoveTag:function(_c48){
}});
})(jQuery);
(function($){
function _c49(_c4a){
var _c4b=$.data(_c4a,"datebox");
var opts=_c4b.options;
$(_c4a).addClass("datebox-f").combo($.extend({},opts,{onShowPanel:function(){
_c4c(this);
_c4d(this);
_c4e(this);
_c5c(this,$(this).datebox("getText"),true);
opts.onShowPanel.call(this);
}}));
if(!_c4b.calendar){
var _c4f=$(_c4a).combo("panel").css("overflow","hidden");
_c4f.panel("options").onBeforeDestroy=function(){
var c=$(this).find(".calendar-shared");
if(c.length){
c.insertBefore(c[0].pholder);
}
};
var cc=$("<div class=\"datebox-calendar-inner\"></div>").prependTo(_c4f);
if(opts.sharedCalendar){
var c=$(opts.sharedCalendar);
if(!c[0].pholder){
c[0].pholder=$("<div class=\"calendar-pholder\" style=\"display:none\"></div>").insertAfter(c);
}
c.addClass("calendar-shared").appendTo(cc);
if(!c.hasClass("calendar")){
c.calendar();
}
_c4b.calendar=c;
}else{
_c4b.calendar=$("<div></div>").appendTo(cc).calendar();
}
$.extend(_c4b.calendar.calendar("options"),{fit:true,border:false,onSelect:function(date){
var _c50=this.target;
var opts=$(_c50).datebox("options");
opts.onSelect.call(_c50,date);
_c5c(_c50,opts.formatter.call(_c50,date));
$(_c50).combo("hidePanel");
}});
}
$(_c4a).combo("textbox").parent().addClass("datebox");
$(_c4a).datebox("initValue",opts.value);
function _c4c(_c51){
var opts=$(_c51).datebox("options");
var _c52=$(_c51).combo("panel");
_c52.unbind(".datebox").bind("click.datebox",function(e){
if($(e.target).hasClass("datebox-button-a")){
var _c53=parseInt($(e.target).attr("datebox-button-index"));
opts.buttons[_c53].handler.call(e.target,_c51);
}
});
};
function _c4d(_c54){
var _c55=$(_c54).combo("panel");
if(_c55.children("div.datebox-button").length){
return;
}
var _c56=$("<div class=\"datebox-button\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%\"><tr></tr></table></div>").appendTo(_c55);
var tr=_c56.find("tr");
for(var i=0;i<opts.buttons.length;i++){
var td=$("<td></td>").appendTo(tr);
var btn=opts.buttons[i];
var t=$("<a class=\"datebox-button-a\" href=\"javascript:;\"></a>").html($.isFunction(btn.text)?btn.text(_c54):btn.text).appendTo(td);
t.attr("datebox-button-index",i);
}
tr.find("td").css("width",(100/opts.buttons.length)+"%");
};
function _c4e(_c57){
var _c58=$(_c57).combo("panel");
var cc=_c58.children("div.datebox-calendar-inner");
_c58.children()._outerWidth(_c58.width());
_c4b.calendar.appendTo(cc);
_c4b.calendar[0].target=_c57;
if(opts.panelHeight!="auto"){
var _c59=_c58.height();
_c58.children().not(cc).each(function(){
_c59-=$(this).outerHeight();
});
cc._outerHeight(_c59);
}
_c4b.calendar.calendar("resize");
};
};
function _c5a(_c5b,q){
_c5c(_c5b,q,true);
};
function _c5d(_c5e){
var _c5f=$.data(_c5e,"datebox");
var opts=_c5f.options;
var _c60=_c5f.calendar.calendar("options").current;
if(_c60){
_c5c(_c5e,opts.formatter.call(_c5e,_c60));
$(_c5e).combo("hidePanel");
}
};
function _c5c(_c61,_c62,_c63){
var _c64=$.data(_c61,"datebox");
var opts=_c64.options;
var _c65=_c64.calendar;
_c65.calendar("moveTo",opts.parser.call(_c61,_c62));
if(_c63){
$(_c61).combo("setValue",_c62);
}else{
if(_c62){
_c62=opts.formatter.call(_c61,_c65.calendar("options").current);
}
$(_c61).combo("setText",_c62).combo("setValue",_c62);
}
};
$.fn.datebox=function(_c66,_c67){
if(typeof _c66=="string"){
var _c68=$.fn.datebox.methods[_c66];
if(_c68){
return _c68(this,_c67);
}else{
return this.combo(_c66,_c67);
}
}
_c66=_c66||{};
return this.each(function(){
var _c69=$.data(this,"datebox");
if(_c69){
$.extend(_c69.options,_c66);
}else{
$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,$.fn.datebox.parseOptions(this),_c66)});
}
_c49(this);
});
};
$.fn.datebox.methods={options:function(jq){
var _c6a=jq.combo("options");
return $.extend($.data(jq[0],"datebox").options,{width:_c6a.width,height:_c6a.height,originalValue:_c6a.originalValue,disabled:_c6a.disabled,readonly:_c6a.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"datebox",{options:$.extend(true,{},$(from).datebox("options")),calendar:$(from).datebox("calendar")});
$(this).addClass("datebox-f");
});
},calendar:function(jq){
return $.data(jq[0],"datebox").calendar;
},initValue:function(jq,_c6b){
return jq.each(function(){
var opts=$(this).datebox("options");
var _c6c=opts.value;
if(_c6c){
_c6c=opts.formatter.call(this,opts.parser.call(this,_c6c));
}
$(this).combo("initValue",_c6c).combo("setText",_c6c);
});
},setValue:function(jq,_c6d){
return jq.each(function(){
_c5c(this,_c6d);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datebox("options");
$(this).datebox("setValue",opts.originalValue);
});
}};
$.fn.datebox.parseOptions=function(_c6e){
return $.extend({},$.fn.combo.parseOptions(_c6e),$.parser.parseOptions(_c6e,["sharedCalendar"]));
};
$.fn.datebox.defaults=$.extend({},$.fn.combo.defaults,{panelWidth:250,panelHeight:"auto",sharedCalendar:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_c5d(this);
},query:function(q,e){
_c5a(this,q);
}},currentText:"Today",closeText:"Close",okText:"Ok",buttons:[{text:function(_c6f){
return $(_c6f).datebox("options").currentText;
},handler:function(_c70){
var opts=$(_c70).datebox("options");
var now=new Date();
var _c71=new Date(now.getFullYear(),now.getMonth(),now.getDate());
$(_c70).datebox("calendar").calendar({year:_c71.getFullYear(),month:_c71.getMonth()+1,current:_c71});
opts.onSelect.call(_c70,_c71);
_c5d(_c70);
}},{text:function(_c72){
return $(_c72).datebox("options").closeText;
},handler:function(_c73){
$(this).closest("div.combo-panel").panel("close");
}}],formatter:function(date){
var y=date.getFullYear();
var m=date.getMonth()+1;
var d=date.getDate();
return (m<10?("0"+m):m)+"/"+(d<10?("0"+d):d)+"/"+y;
},parser:function(s){
if(!s){
return new Date();
}
var ss=s.split("/");
var m=parseInt(ss[0],10);
var d=parseInt(ss[1],10);
var y=parseInt(ss[2],10);
if(!isNaN(y)&&!isNaN(m)&&!isNaN(d)){
return new Date(y,m-1,d);
}else{
return new Date();
}
},onSelect:function(date){
}});
})(jQuery);
(function($){
function _c74(_c75){
var _c76=$.data(_c75,"datetimebox");
var opts=_c76.options;
$(_c75).datebox($.extend({},opts,{onShowPanel:function(){
var _c77=$(this).datetimebox("getValue");
_c7d(this,_c77,true);
opts.onShowPanel.call(this);
},formatter:$.fn.datebox.defaults.formatter,parser:$.fn.datebox.defaults.parser}));
$(_c75).removeClass("datebox-f").addClass("datetimebox-f");
$(_c75).datebox("calendar").calendar({onSelect:function(date){
opts.onSelect.call(this.target,date);
}});
if(!_c76.spinner){
var _c78=$(_c75).datebox("panel");
var p=$("<div style=\"padding:2px\"><input></div>").insertAfter(_c78.children("div.datebox-calendar-inner"));
_c76.spinner=p.children("input");
}
_c76.spinner.timespinner({width:opts.spinnerWidth,showSeconds:opts.showSeconds,separator:opts.timeSeparator});
$(_c75).datetimebox("initValue",opts.value);
};
function _c79(_c7a){
var c=$(_c7a).datetimebox("calendar");
var t=$(_c7a).datetimebox("spinner");
var date=c.calendar("options").current;
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),t.timespinner("getHours"),t.timespinner("getMinutes"),t.timespinner("getSeconds"));
};
function _c7b(_c7c,q){
_c7d(_c7c,q,true);
};
function _c7e(_c7f){
var opts=$.data(_c7f,"datetimebox").options;
var date=_c79(_c7f);
_c7d(_c7f,opts.formatter.call(_c7f,date));
$(_c7f).combo("hidePanel");
};
function _c7d(_c80,_c81,_c82){
var opts=$.data(_c80,"datetimebox").options;
$(_c80).combo("setValue",_c81);
if(!_c82){
if(_c81){
var date=opts.parser.call(_c80,_c81);
$(_c80).combo("setText",opts.formatter.call(_c80,date));
$(_c80).combo("setValue",opts.formatter.call(_c80,date));
}else{
$(_c80).combo("setText",_c81);
}
}
var date=opts.parser.call(_c80,_c81);
$(_c80).datetimebox("calendar").calendar("moveTo",date);
$(_c80).datetimebox("spinner").timespinner("setValue",_c83(date));
function _c83(date){
function _c84(_c85){
return (_c85<10?"0":"")+_c85;
};
var tt=[_c84(date.getHours()),_c84(date.getMinutes())];
if(opts.showSeconds){
tt.push(_c84(date.getSeconds()));
}
return tt.join($(_c80).datetimebox("spinner").timespinner("options").separator);
};
};
$.fn.datetimebox=function(_c86,_c87){
if(typeof _c86=="string"){
var _c88=$.fn.datetimebox.methods[_c86];
if(_c88){
return _c88(this,_c87);
}else{
return this.datebox(_c86,_c87);
}
}
_c86=_c86||{};
return this.each(function(){
var _c89=$.data(this,"datetimebox");
if(_c89){
$.extend(_c89.options,_c86);
}else{
$.data(this,"datetimebox",{options:$.extend({},$.fn.datetimebox.defaults,$.fn.datetimebox.parseOptions(this),_c86)});
}
_c74(this);
});
};
$.fn.datetimebox.methods={options:function(jq){
var _c8a=jq.datebox("options");
return $.extend($.data(jq[0],"datetimebox").options,{originalValue:_c8a.originalValue,disabled:_c8a.disabled,readonly:_c8a.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).datebox("cloneFrom",from);
$.data(this,"datetimebox",{options:$.extend(true,{},$(from).datetimebox("options")),spinner:$(from).datetimebox("spinner")});
$(this).removeClass("datebox-f").addClass("datetimebox-f");
});
},spinner:function(jq){
return $.data(jq[0],"datetimebox").spinner;
},initValue:function(jq,_c8b){
return jq.each(function(){
var opts=$(this).datetimebox("options");
var _c8c=opts.value;
if(_c8c){
_c8c=opts.formatter.call(this,opts.parser.call(this,_c8c));
}
$(this).combo("initValue",_c8c).combo("setText",_c8c);
});
},setValue:function(jq,_c8d){
return jq.each(function(){
_c7d(this,_c8d);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datetimebox("options");
$(this).datetimebox("setValue",opts.originalValue);
});
}};
$.fn.datetimebox.parseOptions=function(_c8e){
var t=$(_c8e);
return $.extend({},$.fn.datebox.parseOptions(_c8e),$.parser.parseOptions(_c8e,["timeSeparator","spinnerWidth",{showSeconds:"boolean"}]));
};
$.fn.datetimebox.defaults=$.extend({},$.fn.datebox.defaults,{spinnerWidth:"100%",showSeconds:true,timeSeparator:":",panelEvents:{mousedown:function(e){
}},keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_c7e(this);
},query:function(q,e){
_c7b(this,q);
}},buttons:[{text:function(_c8f){
return $(_c8f).datetimebox("options").currentText;
},handler:function(_c90){
var opts=$(_c90).datetimebox("options");
_c7d(_c90,opts.formatter.call(_c90,new Date()));
$(_c90).datetimebox("hidePanel");
}},{text:function(_c91){
return $(_c91).datetimebox("options").okText;
},handler:function(_c92){
_c7e(_c92);
}},{text:function(_c93){
return $(_c93).datetimebox("options").closeText;
},handler:function(_c94){
$(_c94).datetimebox("hidePanel");
}}],formatter:function(date){
var h=date.getHours();
var M=date.getMinutes();
var s=date.getSeconds();
function _c95(_c96){
return (_c96<10?"0":"")+_c96;
};
var _c97=$(this).datetimebox("spinner").timespinner("options").separator;
var r=$.fn.datebox.defaults.formatter(date)+" "+_c95(h)+_c97+_c95(M);
if($(this).datetimebox("options").showSeconds){
r+=_c97+_c95(s);
}
return r;
},parser:function(s){
if($.trim(s)==""){
return new Date();
}
var dt=s.split(" ");
var d=$.fn.datebox.defaults.parser(dt[0]);
if(dt.length<2){
return d;
}
var _c98=$(this).datetimebox("spinner").timespinner("options").separator;
var tt=dt[1].split(_c98);
var hour=parseInt(tt[0],10)||0;
var _c99=parseInt(tt[1],10)||0;
var _c9a=parseInt(tt[2],10)||0;
return new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,_c99,_c9a);
}});
})(jQuery);
(function($){
function init(_c9b){
var _c9c=$("<div class=\"slider\">"+"<div class=\"slider-inner\">"+"<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>"+"</div>"+"<div class=\"slider-rule\"></div>"+"<div class=\"slider-rulelabel\"></div>"+"<div style=\"clear:both\"></div>"+"<input type=\"hidden\" class=\"slider-value\">"+"</div>").insertAfter(_c9b);
var t=$(_c9b);
t.addClass("slider-f").hide();
var name=t.attr("name");
if(name){
_c9c.find("input.slider-value").attr("name",name);
t.removeAttr("name").attr("sliderName",name);
}
_c9c.bind("_resize",function(e,_c9d){
if($(this).hasClass("easyui-fluid")||_c9d){
_c9e(_c9b);
}
return false;
});
return _c9c;
};
function _c9e(_c9f,_ca0){
var _ca1=$.data(_c9f,"slider");
var opts=_ca1.options;
var _ca2=_ca1.slider;
if(_ca0){
if(_ca0.width){
opts.width=_ca0.width;
}
if(_ca0.height){
opts.height=_ca0.height;
}
}
_ca2._size(opts);
if(opts.mode=="h"){
_ca2.css("height","");
_ca2.children("div").css("height","");
}else{
_ca2.css("width","");
_ca2.children("div").css("width","");
_ca2.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(_ca2._outerHeight());
}
_ca3(_c9f);
};
function _ca4(_ca5){
var _ca6=$.data(_ca5,"slider");
var opts=_ca6.options;
var _ca7=_ca6.slider;
var aa=opts.mode=="h"?opts.rule:opts.rule.slice(0).reverse();
if(opts.reversed){
aa=aa.slice(0).reverse();
}
_ca8(aa);
function _ca8(aa){
var rule=_ca7.find("div.slider-rule");
var _ca9=_ca7.find("div.slider-rulelabel");
rule.empty();
_ca9.empty();
for(var i=0;i<aa.length;i++){
var _caa=i*100/(aa.length-1)+"%";
var span=$("<span></span>").appendTo(rule);
span.css((opts.mode=="h"?"left":"top"),_caa);
if(aa[i]!="|"){
span=$("<span></span>").appendTo(_ca9);
span.html(aa[i]);
if(opts.mode=="h"){
span.css({left:_caa,marginLeft:-Math.round(span.outerWidth()/2)});
}else{
span.css({top:_caa,marginTop:-Math.round(span.outerHeight()/2)});
}
}
}
};
};
function _cab(_cac){
var _cad=$.data(_cac,"slider");
var opts=_cad.options;
var _cae=_cad.slider;
_cae.removeClass("slider-h slider-v slider-disabled");
_cae.addClass(opts.mode=="h"?"slider-h":"slider-v");
_cae.addClass(opts.disabled?"slider-disabled":"");
var _caf=_cae.find(".slider-inner");
_caf.html("<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
if(opts.range){
_caf.append("<a href=\"javascript:;\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
}
_cae.find("a.slider-handle").draggable({axis:opts.mode,cursor:"pointer",disabled:opts.disabled,onDrag:function(e){
var left=e.data.left;
var _cb0=_cae.width();
if(opts.mode!="h"){
left=e.data.top;
_cb0=_cae.height();
}
if(left<0||left>_cb0){
return false;
}else{
_cb1(left,this);
return false;
}
},onStartDrag:function(){
_cad.isDragging=true;
opts.onSlideStart.call(_cac,opts.value);
},onStopDrag:function(e){
_cb1(opts.mode=="h"?e.data.left:e.data.top,this);
opts.onSlideEnd.call(_cac,opts.value);
opts.onComplete.call(_cac,opts.value);
_cad.isDragging=false;
}});
_cae.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(e){
if(_cad.isDragging||opts.disabled){
return;
}
var pos=$(this).offset();
_cb1(opts.mode=="h"?(e.pageX-pos.left):(e.pageY-pos.top));
opts.onComplete.call(_cac,opts.value);
});
function _cb2(_cb3){
var dd=String(opts.step).split(".");
var dlen=dd.length>1?dd[1].length:0;
return parseFloat(_cb3.toFixed(dlen));
};
function _cb1(pos,_cb4){
var _cb5=_cb6(_cac,pos);
var s=Math.abs(_cb5%opts.step);
if(s<opts.step/2){
_cb5-=s;
}else{
_cb5=_cb5-s+opts.step;
}
_cb5=_cb2(_cb5);
if(opts.range){
var v1=opts.value[0];
var v2=opts.value[1];
var m=parseFloat((v1+v2)/2);
if(_cb4){
var _cb7=$(_cb4).nextAll(".slider-handle").length>0;
if(_cb5<=v2&&_cb7){
v1=_cb5;
}else{
if(_cb5>=v1&&(!_cb7)){
v2=_cb5;
}
}
}else{
if(_cb5<v1){
v1=_cb5;
}else{
if(_cb5>v2){
v2=_cb5;
}else{
_cb5<m?v1=_cb5:v2=_cb5;
}
}
}
$(_cac).slider("setValues",[v1,v2]);
}else{
$(_cac).slider("setValue",_cb5);
}
};
};
function _cb8(_cb9,_cba){
var _cbb=$.data(_cb9,"slider");
var opts=_cbb.options;
var _cbc=_cbb.slider;
var _cbd=$.isArray(opts.value)?opts.value:[opts.value];
var _cbe=[];
if(!$.isArray(_cba)){
_cba=$.map(String(_cba).split(opts.separator),function(v){
return parseFloat(v);
});
}
_cbc.find(".slider-value").remove();
var name=$(_cb9).attr("sliderName")||"";
for(var i=0;i<_cba.length;i++){
var _cbf=_cba[i];
if(_cbf<opts.min){
_cbf=opts.min;
}
if(_cbf>opts.max){
_cbf=opts.max;
}
var _cc0=$("<input type=\"hidden\" class=\"slider-value\">").appendTo(_cbc);
_cc0.attr("name",name);
_cc0.val(_cbf);
_cbe.push(_cbf);
var _cc1=_cbc.find(".slider-handle:eq("+i+")");
var tip=_cc1.next();
var pos=_cc2(_cb9,_cbf);
if(opts.showTip){
tip.show();
tip.html(opts.tipFormatter.call(_cb9,_cbf));
}else{
tip.hide();
}
if(opts.mode=="h"){
var _cc3="left:"+pos+"px;";
_cc1.attr("style",_cc3);
tip.attr("style",_cc3+"margin-left:"+(-Math.round(tip.outerWidth()/2))+"px");
}else{
var _cc3="top:"+pos+"px;";
_cc1.attr("style",_cc3);
tip.attr("style",_cc3+"margin-left:"+(-Math.round(tip.outerWidth()))+"px");
}
}
opts.value=opts.range?_cbe:_cbe[0];
$(_cb9).val(opts.range?_cbe.join(opts.separator):_cbe[0]);
if(_cbd.join(",")!=_cbe.join(",")){
opts.onChange.call(_cb9,opts.value,(opts.range?_cbd:_cbd[0]));
}
};
function _ca3(_cc4){
var opts=$.data(_cc4,"slider").options;
var fn=opts.onChange;
opts.onChange=function(){
};
_cb8(_cc4,opts.value);
opts.onChange=fn;
};
function _cc2(_cc5,_cc6){
var _cc7=$.data(_cc5,"slider");
var opts=_cc7.options;
var _cc8=_cc7.slider;
var size=opts.mode=="h"?_cc8.width():_cc8.height();
var pos=opts.converter.toPosition.call(_cc5,_cc6,size);
if(opts.mode=="v"){
pos=_cc8.height()-pos;
}
if(opts.reversed){
pos=size-pos;
}
return pos;
};
function _cb6(_cc9,pos){
var _cca=$.data(_cc9,"slider");
var opts=_cca.options;
var _ccb=_cca.slider;
var size=opts.mode=="h"?_ccb.width():_ccb.height();
var pos=opts.mode=="h"?(opts.reversed?(size-pos):pos):(opts.reversed?pos:(size-pos));
var _ccc=opts.converter.toValue.call(_cc9,pos,size);
return _ccc;
};
$.fn.slider=function(_ccd,_cce){
if(typeof _ccd=="string"){
return $.fn.slider.methods[_ccd](this,_cce);
}
_ccd=_ccd||{};
return this.each(function(){
var _ccf=$.data(this,"slider");
if(_ccf){
$.extend(_ccf.options,_ccd);
}else{
_ccf=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_ccd),slider:init(this)});
$(this)._propAttr("disabled",false);
}
var opts=_ccf.options;
opts.min=parseFloat(opts.min);
opts.max=parseFloat(opts.max);
if(opts.range){
if(!$.isArray(opts.value)){
opts.value=$.map(String(opts.value).split(opts.separator),function(v){
return parseFloat(v);
});
}
if(opts.value.length<2){
opts.value.push(opts.max);
}
}else{
opts.value=parseFloat(opts.value);
}
opts.step=parseFloat(opts.step);
opts.originalValue=opts.value;
_cab(this);
_ca4(this);
_c9e(this);
});
};
$.fn.slider.methods={options:function(jq){
return $.data(jq[0],"slider").options;
},destroy:function(jq){
return jq.each(function(){
$.data(this,"slider").slider.remove();
$(this).remove();
});
},resize:function(jq,_cd0){
return jq.each(function(){
_c9e(this,_cd0);
});
},getValue:function(jq){
return jq.slider("options").value;
},getValues:function(jq){
return jq.slider("options").value;
},setValue:function(jq,_cd1){
return jq.each(function(){
_cb8(this,[_cd1]);
});
},setValues:function(jq,_cd2){
return jq.each(function(){
_cb8(this,_cd2);
});
},clear:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
_cb8(this,opts.range?[opts.min,opts.max]:[opts.min]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
$(this).slider(opts.range?"setValues":"setValue",opts.originalValue);
});
},enable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=false;
_cab(this);
});
},disable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=true;
_cab(this);
});
}};
$.fn.slider.parseOptions=function(_cd3){
var t=$(_cd3);
return $.extend({},$.parser.parseOptions(_cd3,["width","height","mode",{reversed:"boolean",showTip:"boolean",range:"boolean",min:"number",max:"number",step:"number"}]),{value:(t.val()||undefined),disabled:(t.attr("disabled")?true:undefined),rule:(t.attr("rule")?eval(t.attr("rule")):undefined)});
};
$.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:false,showTip:false,disabled:false,range:false,value:0,separator:",",min:0,max:100,step:1,rule:[],tipFormatter:function(_cd4){
return _cd4;
},converter:{toPosition:function(_cd5,size){
var opts=$(this).slider("options");
var p=(_cd5-opts.min)/(opts.max-opts.min)*size;
return p;
},toValue:function(pos,size){
var opts=$(this).slider("options");
var v=opts.min+(opts.max-opts.min)*(pos/size);
return v;
}},onChange:function(_cd6,_cd7){
},onSlideStart:function(_cd8){
},onSlideEnd:function(_cd9){
},onComplete:function(_cda){
}};
})(jQuery);

if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = '第';
	$.fn.pagination.defaults.afterPageText = '共{pages}页';
	$.fn.pagination.defaults.displayMsg = '显示{from}到{to},共{total}记录';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = '正在处理，请稍待。。。';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = '确定';
	$.messager.defaults.cancel = '取消';
}
$.map(['validatebox','textbox','passwordbox','filebox','searchbox',
		'combo','combobox','combogrid','combotree',
		'datebox','datetimebox','numberbox',
		'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
	if ($.fn[plugin]){
		$.fn[plugin].defaults.missingMessage = '该输入项为必输项';
	}
});
if ($.fn.validatebox){
	$.fn.validatebox.defaults.rules.email.message = '请输入有效的电子邮件地址';
	$.fn.validatebox.defaults.rules.url.message = '请输入有效的URL地址';
	$.fn.validatebox.defaults.rules.length.message = '输入内容长度必须介于{0}和{1}之间';
	$.fn.validatebox.defaults.rules.remote.message = '请修正该字段';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['日','一','二','三','四','五','六'];
	$.fn.calendar.defaults.months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = '今天';
	$.fn.datebox.defaults.closeText = '关闭';
	$.fn.datebox.defaults.okText = '确定';
	$.fn.datebox.defaults.formatter = function(date){
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var d = date.getDate();
		return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
	};
	$.fn.datebox.defaults.parser = function(s){
		if (!s) return new Date();
		var ss = s.split('-');
		var y = parseInt(ss[0],10);
		var m = parseInt(ss[1],10);
		var d = parseInt(ss[2],10);
		if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
			return new Date(y,m-1,d);
		} else {
			return new Date();
		}
	};
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText
	});
}
if ($.fn.datetimespinner){
	$.fn.datetimespinner.defaults.selections = [[0,4],[5,7],[8,10],[11,13],[14,16],[17,19]]
}

window.Apps = {
  "server" : {
     "protocol": window.location.protocol,
     "host": window.location.hostname,
     "port": window.location.port,
     "url" : function(){
       return this.protocol+"//"+this.host+":"+this.port;
     },
  },
  "pwd": function(u, p){
      let ret = "";
      if(u && p){ret = Crypt_hash(u + Crypt_hash(p, 'md5'));}
      return ret;
  },
  "dialog_opt" : function(){
    return {
        title     : '',
        closed    : false,
        cache     : false,
        top       : "23%",
        resizable : false,
        modal     : true,
        buttons   : [],
    };
  },
  "Dialog_Show": function(o, p, callback){
    o.dialog(p);
    //高度超出屏幕则顶部间距5px，否则居中
    if(o.height() < (document.documentElement.clientHeight - 30)){
        o.window('center'); //使Dialog居中显示
    } else {
        o.dialog({"top":'5px'});
    }
    if(callback) callback();
  },
  "field": function(dom, n, t){
     let node = 'string' == typeof(dom) ? $('#'+dom) : $(dom);
     let d = null;
     let type = (t ? t : '*' );
     if('object' == typeof(n)){
         d = {};
         $.each(n, function(i,v){
             d[v] = node.find(type + '[name="' + v + '"]').eq(0);
         });
     } else {
         d = node.find(type + '[name="' + n + '"]').eq(0);
     }
     return d;
  },
  "init": function(){
        //检测登陆状态
        get_dats(window.Api.user.check,{}, function(dats){

           if(dats.status){
               Login_Object.login_ok(dats);
           } else {
              $("body > .LoginWin").show();
           }

        });
  },
  //检查权限
  "check_grants": function(){
        if(!window.Apps.me.role_id) return;
        let ids = ','+window.Apps.data.role[window.Apps.me.role_id].grants.toString() + ',';
        let nav = $("div.main > div.top > p > a");
        for(let i=0; i<nav.length;i++){
               let v = nav.eq(i);
               if(!v.attr("grant_id")) continue;
               if(ids.indexOf(','+v.attr("grant_id")+',') > -1){
                       v.show();
               } else {
                      v.remove();
               }
        }
  }
};

window.Wsock = {
     "msg":function(cons, msg, color){
           //let cons = $("#run_console");
           if('DIV' === cons[0].tagName){
                 if(color){
                       let str = $('<p style="font-weight:bold;color:'+color+';"></p>');
                       str.text(msg);
                       cons.append(str);
                 }else{ cons.append(msg.replace(/\n/g,'<br/>')); }
            } else {
                  //cons.append(msg);
                  cons[0].appendChild(document.createTextNode(msg));
            }

           //设置滚动条到最底部
           if(cons[0].scrollHeight > cons[0].clientHeight) { cons[0].scrollTop = cons[0].scrollHeight; }
     },
     "send":function(dom, cmd, dat, c){
             let ws = new WebSocket((window.Apps.data.ws.is_https ? "wss://" : "ws://")+window.location.hostname+":"+window.Apps.data.ws.port);
             ws.show = this.msg;
             ws.onopen = function(evt){
                    //ws.show(dom,'\n链接成功~!\n','green');
                    if(1==this.readyState){
                         ws.show(dom,'\n-----------------------------------------[' + getLocalTime() + ']------------------------------------\n','green');
                         let data = {"cmd": cmd, "uid":window.Apps.me.id, "token":window.Apps.data.token, "data": dat};
                         ws.send(JSON.stringify(data));
                    }else{ws.show(dom,'\n-------------> 链接出错socket状态无效~!\n','red');}
            };
            //接收消息
            ws.onmessage =function(e){
                  let d = isJson(e.data);
                  if(!d){ ws.show(dom,'\n-------------> 收到未知回应消息!\n','red'); console.log("未知消息: ", e.data); return; }
                  if(!d.status){ ws.show(dom,d.msg,'yellow'); return; }
                  //ws.show(dom,JSON.stringify(d));
                  ws.show(dom,d.result);
            };
            //链接错误
            ws.onerror = function(e){ ws.show(dom,'\n-------------> 发生错误~!\n','red'); if(c)c(); };
            //链接关闭事件
            ws.onclose = function(e){ ws.show(dom,'\n--------------------------------------------------done--------------------------------------------\n\n','yellow'); if(c)c(); };
     }
};

//api地址
window.Api = {
  //用户管理
  "user": {
    "search":       "/api.user/search",
    "add":          "/api.user/add",
    "update":       "/api.user/update",
    "del":          "/api.user/del",
    "check":        "/api.user/check",
    "change_pwd":   "/api.user/change_pwd",
    "set_pwd":      "/api.user/set_pwd",
    "logout":       "/api.user/logout"
  },
  //权限管理
  "role":{
    "search":       "/api.role/search",
    "add":          "/api.role/add",
    "update":       "/api.role/update",
    "del":          "/api.role/del"
  },
  //数据库配置
  "dbs":{
     "search":    "/api.dbs/search",
     "add":          "/api.dbs/add",
     "update":   "/api.dbs/update",
     "del":            "/api.dbs/del"
  },
  //项目管理
  "project":{
    "search":               "/api.project/search",
    "add":                     "/api.project/add",
    "update":              "/api.project/update",
    "del":                       "/api.project/del",
    "node":                   "/api.project/node",
    "node_add":         "/api.project/node_add",
    "node_del":           "/api.project/node_del",
    "node_update":  "/api.project/node_update"
  },
  //执行sql任务
  "sql":{
    "search":        "/api.sql",
    "add":             "/api.sql/add",
    "update":       "/api.sql/update",
    "del":               "/api.sql/del",
    "run":              "/api.sql/run",
    "history":       "/api.sql/history"
  },
  //发布代码
  "release":"/api.release",
  //日志信息
  "logs":"/api.logs",
  //获取上传图片
  "getfile":"/api.getfile",
  "global":{
     "bank":       "/api.global/bank"
  }

};

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-512, as defined
 * in FIPS 180-2
 * Version 2.2 Copyright Anonymous Contributor, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
function Crypt_hash(be_str, hash_type){
        var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase    */
        var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance  */

        /*
         * These are the functions you'll usually want to call
         * They take string arguments and return either hex or base-64 encoded strings
         */
        function hex_sha512(s){ return rstr2hex(rstr_sha512(str2rstr_utf8(s))); }
        function b64_sha512(s){ return rstr2b64(rstr_sha512(str2rstr_utf8(s))); }
        function any_sha512(s, e){ return rstr2any(rstr_sha512(str2rstr_utf8(s)), e);}
        function hex_hmac_sha512(k, d){ return rstr2hex(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d))); }
        function b64_hmac_sha512(k, d){ return rstr2b64(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d))); }
        function any_hmac_sha512(k, d, e){ return rstr2any(rstr_hmac_sha512(str2rstr_utf8(k), str2rstr_utf8(d)), e);}

        /*
         * Calculate the SHA-512 of a raw string
         */
        function rstr_sha512(s)
        {
         return binb2rstr(binb_sha512(rstr2binb(s), s.length * 8));
        }

        /*
         * Calculate the HMAC-SHA-512 of a key and some data (raw strings)
         */
        function rstr_hmac_sha512(key, data)
        {
         var bkey = rstr2binb(key);
         if(bkey.length > 32) bkey = binb_sha512(bkey, key.length * 8);

         var ipad = Array(32), opad = Array(32);
         for(var i = 0; i < 32; i++)
         {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
         }

         var hash = binb_sha512(ipad.concat(rstr2binb(data)), 1024 + data.length * 8);
         return binb2rstr(binb_sha512(opad.concat(hash), 1024 + 512));
        }

        /*
         * Convert a raw string to a hex string
         */
        function rstr2hex(input)
        {
         try { hexcase } catch(e) { hexcase=0; }
         var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
         var output = "";
         var x;
         for(var i = 0; i < input.length; i++)
         {
          x = input.charCodeAt(i);
          output += hex_tab.charAt((x >>> 4) & 0x0F)
              + hex_tab.charAt( x    & 0x0F);
         }
         return output;
        }

        /*
         * Convert a raw string to a base-64 string
         */
        function rstr2b64(input)
        {
         try { b64pad } catch(e) { b64pad=''; }
         var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
         var output = "";
         var len = input.length;
         for(var i = 0; i < len; i += 3)
         {
          var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i+1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i+2)   : 0);
          for(var j = 0; j < 4; j++)
          {
           if(i * 8 + j * 6 > input.length * 8) output += b64pad;
           else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);
          }
         }
         return output;
        }

        /*
         * Convert a raw string to an arbitrary string encoding
         */
        function rstr2any(input, encoding)
        {
         var divisor = encoding.length;
         var i, j, q, x, quotient;

         /* Convert to an array of 16-bit big-endian values, forming the dividend */
         var dividend = Array(Math.ceil(input.length / 2));
         for(i = 0; i < dividend.length; i++)
         {
          dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
         }

         /*
          * Repeatedly perform a long division. The binary array forms the dividend,
          * the length of the encoding is the divisor. Once computed, the quotient
          * forms the dividend for the next step. All remainders are stored for later
          * use.
          */
         var full_length = Math.ceil(input.length * 8 /
                          (Math.log(encoding.length) / Math.log(2)));
         var remainders = Array(full_length);
         for(j = 0; j < full_length; j++)
         {
          quotient = Array();
          x = 0;
          for(i = 0; i < dividend.length; i++)
          {
           x = (x << 16) + dividend[i];
           q = Math.floor(x / divisor);
           x -= q * divisor;
           if(quotient.length > 0 || q > 0)
            quotient[quotient.length] = q;
          }
          remainders[j] = x;
          dividend = quotient;
         }

         /* Convert the remainders to the output string */
         var output = "";
         for(i = remainders.length - 1; i >= 0; i--)
          output += encoding.charAt(remainders[i]);

         return output;
        }

        /*
         * Encode a string as utf-8.
         * For efficiency, this assumes the input is valid utf-16.
         */
        function str2rstr_utf8(input)
        {
         var output = "";
         var i = -1;
         var x, y;

         while(++i < input.length)
         {
          /* Decode utf-16 surrogate pairs */
          x = input.charCodeAt(i);
          y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
          if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
          {
           x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
           i++;
          }

          /* Encode output as utf-8 */
          if(x <= 0x7F)
           output += String.fromCharCode(x);
          else if(x <= 0x7FF)
           output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                          0x80 | ( x     & 0x3F));
          else if(x <= 0xFFFF)
           output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                          0x80 | ((x >>> 6 ) & 0x3F),
                          0x80 | ( x     & 0x3F));
          else if(x <= 0x1FFFFF)
           output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                          0x80 | ((x >>> 12) & 0x3F),
                          0x80 | ((x >>> 6 ) & 0x3F),
                          0x80 | ( x     & 0x3F));
         }
         return output;
        }

        /*
         * Encode a string as utf-16
         */
        function str2rstr_utf16le(input)
        {
         var output = "";
         for(var i = 0; i < input.length; i++)
          output += String.fromCharCode( input.charCodeAt(i)    & 0xFF,
                         (input.charCodeAt(i) >>> 8) & 0xFF);
         return output;
        }

        function str2rstr_utf16be(input)
        {
         var output = "";
         for(var i = 0; i < input.length; i++)
          output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
                          input.charCodeAt(i)    & 0xFF);
         return output;
        }

        /*
         * Convert a raw string to an array of big-endian words
         * Characters >255 have their high-byte silently ignored.
         */
        function rstr2binb(input)
        {
         var output = Array(input.length >> 2);
         for(var i = 0; i < output.length; i++)
          output[i] = 0;
         for(var i = 0; i < input.length * 8; i += 8)
          output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
         return output;
        }

        /*
         * Convert an array of big-endian words to a string
         */
        function binb2rstr(input)
        {
         var output = "";
         for(var i = 0; i < input.length * 32; i += 8)
          output += String.fromCharCode((input[i>>5] >>> (24 - i % 32)) & 0xFF);
         return output;
        }

        /*
         * Calculate the SHA-512 of an array of big-endian dwords, and a bit length
         */
        var sha512_k;
        function binb_sha512(x, len)
        {
         if(sha512_k == undefined)
         {
          //SHA512 constants
          sha512_k = new Array(
        new int64(0x428a2f98, -685199838), new int64(0x71374491, 0x23ef65cd),
        new int64(-1245643825, -330482897), new int64(-373957723, -2121671748),
        new int64(0x3956c25b, -213338824), new int64(0x59f111f1, -1241133031),
        new int64(-1841331548, -1357295717), new int64(-1424204075, -630357736),
        new int64(-670586216, -1560083902), new int64(0x12835b01, 0x45706fbe),
        new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, -704662302),
        new int64(0x72be5d74, -226784913), new int64(-2132889090, 0x3b1696b1),
        new int64(-1680079193, 0x25c71235), new int64(-1046744716, -815192428),
        new int64(-459576895, -1628353838), new int64(-272742522, 0x384f25e3),
        new int64(0xfc19dc6, -1953704523), new int64(0x240ca1cc, 0x77ac9c65),
        new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
        new int64(0x5cb0a9dc, -1119749164), new int64(0x76f988da, -2096016459),
        new int64(-1740746414, -295247957), new int64(-1473132947, 0x2db43210),
        new int64(-1341970488, -1728372417), new int64(-1084653625, -1091629340),
        new int64(-958395405, 0x3da88fc2), new int64(-710438585, -1828018395),
        new int64(0x6ca6351, -536640913), new int64(0x14292967, 0xa0e6e70),
        new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
        new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, -1651133473),
        new int64(0x650a7354, -1951439906), new int64(0x766a0abb, 0x3c77b2a8),
        new int64(-2117940946, 0x47edaee6), new int64(-1838011259, 0x1482353b),
        new int64(-1564481375, 0x4cf10364), new int64(-1474664885, -1136513023),
        new int64(-1035236496, -789014639), new int64(-949202525, 0x654be30),
        new int64(-778901479, -688958952), new int64(-694614492, 0x5565a910),
        new int64(-200395387, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
        new int64(0x19a4c116, -1194143544), new int64(0x1e376c08, 0x5141ab53),
        new int64(0x2748774c, -544281703), new int64(0x34b0bcb5, -509917016),
        new int64(0x391c0cb3, -976659869), new int64(0x4ed8aa4a, -482243893),
        new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, -692930397),
        new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
        new int64(-2067236844, -1578062990), new int64(-1933114872, 0x1a6439ec),
        new int64(-1866530822, 0x23631e28), new int64(-1538233109, -561857047),
        new int64(-1090935817, -1295615723), new int64(-965641998, -479046869),
        new int64(-903397682, -366583396), new int64(-779700025, 0x21c0c207),
        new int64(-354779690, -840897762), new int64(-176337025, -294727304),
        new int64(0x6f067aa, 0x72176fba), new int64(0xa637dc5, -1563912026),
        new int64(0x113f9804, -1090974290), new int64(0x1b710b35, 0x131c471b),
        new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
        new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, -1676669620),
        new int64(0x4cc5d4be, -885112138), new int64(0x597f299c, -60457430),
        new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817));
         }

         //Initial hash values
         var H = new Array(
        new int64(0x6a09e667, -205731576),
        new int64(-1150833019, -2067093701),
        new int64(0x3c6ef372, -23791573),
        new int64(-1521486534, 0x5f1d36f1),
        new int64(0x510e527f, -1377402159),
        new int64(-1694144372, 0x2b3e6c1f),
        new int64(0x1f83d9ab, -79577749),
        new int64(0x5be0cd19, 0x137e2179));

         var T1 = new int64(0, 0),
          T2 = new int64(0, 0),
          a = new int64(0,0),
          b = new int64(0,0),
          c = new int64(0,0),
          d = new int64(0,0),
          e = new int64(0,0),
          f = new int64(0,0),
          g = new int64(0,0),
          h = new int64(0,0),
          //Temporary variables not specified by the document
          s0 = new int64(0, 0),
          s1 = new int64(0, 0),
          Ch = new int64(0, 0),
          Maj = new int64(0, 0),
          r1 = new int64(0, 0),
          r2 = new int64(0, 0),
          r3 = new int64(0, 0);
         var j, i;
         var W = new Array(80);
         for(i=0; i<80; i++)
          W[i] = new int64(0, 0);

         // append padding to the source string. The format is described in the FIPS.
         x[len >> 5] |= 0x80 << (24 - (len & 0x1f));
         x[((len + 128 >> 10)<< 5) + 31] = len;

         for(i = 0; i<x.length; i+=32) //32 dwords is the block size
         {
          int64copy(a, H[0]);
          int64copy(b, H[1]);
          int64copy(c, H[2]);
          int64copy(d, H[3]);
          int64copy(e, H[4]);
          int64copy(f, H[5]);
          int64copy(g, H[6]);
          int64copy(h, H[7]);

          for(j=0; j<16; j++)
          {
            W[j].h = x[i + 2*j];
            W[j].l = x[i + 2*j + 1];
          }

          for(j=16; j<80; j++)
          {
           //sigma1
           int64rrot(r1, W[j-2], 19);
           int64revrrot(r2, W[j-2], 29);
           int64shr(r3, W[j-2], 6);
           s1.l = r1.l ^ r2.l ^ r3.l;
           s1.h = r1.h ^ r2.h ^ r3.h;
           //sigma0
           int64rrot(r1, W[j-15], 1);
           int64rrot(r2, W[j-15], 8);
           int64shr(r3, W[j-15], 7);
           s0.l = r1.l ^ r2.l ^ r3.l;
           s0.h = r1.h ^ r2.h ^ r3.h;

           int64add4(W[j], s1, W[j-7], s0, W[j-16]);
          }

          for(j = 0; j < 80; j++)
          {
           //Ch
           Ch.l = (e.l & f.l) ^ (~e.l & g.l);
           Ch.h = (e.h & f.h) ^ (~e.h & g.h);

           //Sigma1
           int64rrot(r1, e, 14);
           int64rrot(r2, e, 18);
           int64revrrot(r3, e, 9);
           s1.l = r1.l ^ r2.l ^ r3.l;
           s1.h = r1.h ^ r2.h ^ r3.h;

           //Sigma0
           int64rrot(r1, a, 28);
           int64revrrot(r2, a, 2);
           int64revrrot(r3, a, 7);
           s0.l = r1.l ^ r2.l ^ r3.l;
           s0.h = r1.h ^ r2.h ^ r3.h;

           //Maj
           Maj.l = (a.l & b.l) ^ (a.l & c.l) ^ (b.l & c.l);
           Maj.h = (a.h & b.h) ^ (a.h & c.h) ^ (b.h & c.h);

           int64add5(T1, h, s1, Ch, sha512_k[j], W[j]);
           int64add(T2, s0, Maj);

           int64copy(h, g);
           int64copy(g, f);
           int64copy(f, e);
           int64add(e, d, T1);
           int64copy(d, c);
           int64copy(c, b);
           int64copy(b, a);
           int64add(a, T1, T2);
          }
          int64add(H[0], H[0], a);
          int64add(H[1], H[1], b);
          int64add(H[2], H[2], c);
          int64add(H[3], H[3], d);
          int64add(H[4], H[4], e);
          int64add(H[5], H[5], f);
          int64add(H[6], H[6], g);
          int64add(H[7], H[7], h);
         }

         //represent the hash as an array of 32-bit dwords
         var hash = new Array(16);
         for(i=0; i<8; i++)
         {
          hash[2*i] = H[i].h;
          hash[2*i + 1] = H[i].l;
         }
         return hash;
        }

        //A constructor for 64-bit numbers
        function int64(h, l)
        {
         this.h = h;
         this.l = l;
         //this.toString = int64toString;
        }

        //Copies src into dst, assuming both are 64-bit numbers
        function int64copy(dst, src)
        {
         dst.h = src.h;
         dst.l = src.l;
        }

        //Right-rotates a 64-bit number by shift
        //Won't handle cases of shift>=32
        //The function revrrot() is for that
        function int64rrot(dst, x, shift)
        {
          dst.l = (x.l >>> shift) | (x.h << (32-shift));
          dst.h = (x.h >>> shift) | (x.l << (32-shift));
        }

        //Reverses the dwords of the source and then rotates right by shift.
        //This is equivalent to rotation by 32+shift
        function int64revrrot(dst, x, shift)
        {
          dst.l = (x.h >>> shift) | (x.l << (32-shift));
          dst.h = (x.l >>> shift) | (x.h << (32-shift));
        }

        //Bitwise-shifts right a 64-bit number by shift
        //Won't handle shift>=32, but it's never needed in SHA512
        function int64shr(dst, x, shift)
        {
          dst.l = (x.l >>> shift) | (x.h << (32-shift));
          dst.h = (x.h >>> shift);
        }

        //Adds two 64-bit numbers
        //Like the original implementation, does not rely on 32-bit operations
        function int64add(dst, x, y)
        {
          var w0 = (x.l & 0xffff) + (y.l & 0xffff);
          var w1 = (x.l >>> 16) + (y.l >>> 16) + (w0 >>> 16);
          var w2 = (x.h & 0xffff) + (y.h & 0xffff) + (w1 >>> 16);
          var w3 = (x.h >>> 16) + (y.h >>> 16) + (w2 >>> 16);
          dst.l = (w0 & 0xffff) | (w1 << 16);
          dst.h = (w2 & 0xffff) | (w3 << 16);
        }

        //Same, except with 4 addends. Works faster than adding them one by one.
        function int64add4(dst, a, b, c, d)
        {
          var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff);
          var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (w0 >>> 16);
          var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (w1 >>> 16);
          var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (w2 >>> 16);
          dst.l = (w0 & 0xffff) | (w1 << 16);
          dst.h = (w2 & 0xffff) | (w3 << 16);
        }

        //Same, except with 5 addends
        function int64add5(dst, a, b, c, d, e)
        {
          var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff) + (e.l & 0xffff);
          var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (e.l >>> 16) + (w0 >>> 16);
          var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (e.h & 0xffff) + (w1 >>> 16);
          var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (e.h >>> 16) + (w2 >>> 16);
          dst.l = (w0 & 0xffff) | (w1 << 16);
          dst.h = (w2 & 0xffff) | (w3 << 16);
        }

        function md5(string){
        	function md5_RotateLeft(lValue,iShiftBits){return (lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));}
        	function md5_AddUnsigned(lX,lY){
        		var lX4,lY4,lX8,lY8,lResult;
        		lX8 = (lX & 0x80000000); lY8 = (lY & 0x80000000); lX4 = (lX & 0x40000000); lY4 = (lY & 0x40000000);
        		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        		if(lX4 & lY4){return (lResult ^ 0x80000000 ^ lX8 ^ lY8);}
        			if (lX4 | lY4) {
        				if(lResult & 0x40000000){return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);}else{return (lResult ^ 0x40000000 ^ lX8 ^ lY8);}
        			}else{return (lResult ^ lX8 ^ lY8);}
        		}
        		function md5_F(x,y,z){return (x & y) | ((~x) & z);}
        		function md5_G(x,y,z){return (x & z) | (y & (~z));}
        		function md5_H(x,y,z){return (x ^ y ^ z);}
        		function md5_I(x,y,z){return (y ^ (x | (~z)));}
        		function md5_FF(a,b,c,d,x,s,ac){
        			a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
        			return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        		};
        		function md5_GG(a,b,c,d,x,s,ac){
        			a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
        			return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        		};
        		function md5_HH(a,b,c,d,x,s,ac){
        			a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
        			return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        		};
        		function md5_II(a,b,c,d,x,s,ac){
        			a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
        			return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        		};
                        function md5_ConvertToWordArray(string) {
        			var lWordCount;
        			var lMessageLength = string.length;
        			var lNumberOfWords_temp1=lMessageLength + 8;
        			var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        			var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        			var lWordArray=Array(lNumberOfWords-1);
        			var lBytePosition = 0;
        			var lByteCount = 0;
        			while ( lByteCount < lMessageLength ) {
        				lWordCount = (lByteCount-(lByteCount % 4))/4;
        				lBytePosition = (lByteCount % 4)*8;
        				lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
        				lByteCount++;
        			}
        			lWordCount = (lByteCount-(lByteCount % 4))/4;
        			lBytePosition = (lByteCount % 4)*8;
        			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        			lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        			lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        			return lWordArray;
        		};
        		function md5_WordToHex(lValue){
        			var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
        			for(lCount = 0;lCount<=3;lCount++){
        				lByte = (lValue>>>(lCount*8)) & 255;
        				WordToHexValue_temp = "0" + lByte.toString(16);
        				WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
        			}
        			return WordToHexValue;
        		};
        		function md5_Utf8Encode(string){
        			string = string.replace(/\r\n/g,"\n");
        			var utftext = "";
        			for (var n = 0; n < string.length; n++) {
        				var c = string.charCodeAt(n);
        				if (c < 128) {utftext += String.fromCharCode(c);}
        				else if((c > 127) && (c < 2048)){utftext += String.fromCharCode((c >> 6) | 192); utftext += String.fromCharCode((c & 63) | 128);}
        				else{utftext += String.fromCharCode((c >> 12) | 224); utftext += String.fromCharCode(((c >> 6) & 63) | 128); utftext += String.fromCharCode((c & 63) | 128);}
        			}
        			return utftext;
        		};
        		var x=Array();
        		var k,AA,BB,CC,DD,a,b,c,d;
        		var S11=7, S12=12, S13=17, S14=22;
        		var S21=5, S22=9 , S23=14, S24=20;
        		var S31=4, S32=11, S33=16, S34=23;
        		var S41=6, S42=10, S43=15, S44=21;
        		string = md5_Utf8Encode(string);
        		x = md5_ConvertToWordArray(string);
        		a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
        		for (k=0;k<x.length;k+=16) {
        			AA=a; BB=b; CC=c; DD=d;
        			a=md5_FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        			d=md5_FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        			c=md5_FF(c,d,a,b,x[k+2], S13,0x242070DB);
        			b=md5_FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        			a=md5_FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        			d=md5_FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        			c=md5_FF(c,d,a,b,x[k+6], S13,0xA8304613);
        			b=md5_FF(b,c,d,a,x[k+7], S14,0xFD469501);
        			a=md5_FF(a,b,c,d,x[k+8], S11,0x698098D8);
        			d=md5_FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        			c=md5_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        			b=md5_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        			a=md5_FF(a,b,c,d,x[k+12],S11,0x6B901122);
        			d=md5_FF(d,a,b,c,x[k+13],S12,0xFD987193);
        			c=md5_FF(c,d,a,b,x[k+14],S13,0xA679438E);
        			b=md5_FF(b,c,d,a,x[k+15],S14,0x49B40821);
        			a=md5_GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        			d=md5_GG(d,a,b,c,x[k+6], S22,0xC040B340);
        			c=md5_GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        			b=md5_GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        			a=md5_GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        			d=md5_GG(d,a,b,c,x[k+10],S22,0x2441453);
        			c=md5_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        			b=md5_GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        			a=md5_GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        			d=md5_GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        			c=md5_GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        			b=md5_GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        			a=md5_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        			d=md5_GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        			c=md5_GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        			b=md5_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        			a=md5_HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        			d=md5_HH(d,a,b,c,x[k+8], S32,0x8771F681);
        			c=md5_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        			b=md5_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        			a=md5_HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        			d=md5_HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        			c=md5_HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        			b=md5_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        			a=md5_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        			d=md5_HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        			c=md5_HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        			b=md5_HH(b,c,d,a,x[k+6], S34,0x4881D05);
        			a=md5_HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        			d=md5_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        			c=md5_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        			b=md5_HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        			a=md5_II(a,b,c,d,x[k+0], S41,0xF4292244);
        			d=md5_II(d,a,b,c,x[k+7], S42,0x432AFF97);
        			c=md5_II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        			b=md5_II(b,c,d,a,x[k+5], S44,0xFC93A039);
        			a=md5_II(a,b,c,d,x[k+12],S41,0x655B59C3);
        			d=md5_II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        			c=md5_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        			b=md5_II(b,c,d,a,x[k+1], S44,0x85845DD1);
        			a=md5_II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        			d=md5_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        			c=md5_II(c,d,a,b,x[k+6], S43,0xA3014314);
        			b=md5_II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        			a=md5_II(a,b,c,d,x[k+4], S41,0xF7537E82);
        			d=md5_II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        			c=md5_II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        			b=md5_II(b,c,d,a,x[k+9], S44,0xEB86D391);
        			a=md5_AddUnsigned(a,AA);
        			b=md5_AddUnsigned(b,BB);
        			c=md5_AddUnsigned(c,CC);
        			d=md5_AddUnsigned(d,DD);
        		}
        	return (md5_WordToHex(a)+md5_WordToHex(b)+md5_WordToHex(c)+md5_WordToHex(d)).toLowerCase();
        };
  return hash_type ? ('md5' === hash_type ? md5(be_str): hex_sha512(be_str)) : hex_sha512(be_str);
};

//JSON字符串转JSON对象
function isJson(data){
   var json_data = null;
   var data_type = typeof(data);
   switch(data_type){
     case "string":
        try {
           json_data = JSON.parse(data);
        } catch (err){ return false; }
     break;
     case "object":
        json_data = data;
     break;
   }
	return json_data;
}

//判断是否数组
function isArray(o){
   return Object.prototype.toString.call(o)=='[object Array]';
}

//千分位格式
function Number_Format(n){
   n = n.toFixed(2);
   var num = n.toString().split('.');
   var str = num[0].replace(/(?=(?!(\b))(\d{3})+$)/g, ",");
   if(num.length > 1) str += '.' + num[1];

   return str;
}

//获取静态内容
function getHtm(action, r){
   var res;
   var rsync = r ? "?_=" + (new Date().getTime()) : "";
   var result = $.ajax({
      url      : action + rsync,
      type     : "GET",
      cache    : false,
      async    : false,
      success  : function(data){
        res = data;
      }
   });
   return res;
}

//清除html标签
function del_html_node(str){
  return str.replace(/<[^>]+>/g,"")
}


/*加载页面部分
 * 目标元素
 * htm: 页面名称
 * node: 输出到节点
 * callback: 回调函数
 * */
function loadobj(htm, node, callback){
   //if ( !node || !htm ) { return false; }
   var obj = {
      node     : node ? node : $("#Wellcome_window"),
      htm      : htm ? htm   : "login.html",
      callback : callback ? callback : null
   };

   $.ajax( {
      url     : "/" + obj.htm, //这里是静态页的地址
      type    : "GET", //静态页用get方法，否则服务器会抛出405错误
      cache   : false,
      success : function(data){
			    obj.node.html(data);
          if ( null != obj.callback) { obj.callback(); }
      }
   });
}

/* 提交修改 -- 同步
 * 提交请求会 等待返回
 * */
function getByRsync(action, dats, met){
   let res;
   if(isBrowser.ie) jQuery.support.cors=true;
   let result = $.ajax({
      url      : action,
      type     : met ? met : "POST",
      data     : dats,
      dataType : "json",
      xhrFields: {withCredentials: true},  //带cookie
      cache    : false,
      async    : false,
      success  : function(data){ res = data; }
   });
   return res;
}

/*
 * 公共异步调用函数
 * action    接口url
 * dats      提交数据
 * callback  回调函数
 * load_win  是否显示加载窗口(选传): 不传则不显示，否则显示
 */
function get_dats(action, dats, callback){
  var api_url = parent.Apps.server.url() + action;

  if(isBrowser.ie) jQuery.support.cors=true;

	$.ajax( {
      url      : api_url, //这里是静态页的地址
      type     : "POST", //静态页用get方法，否则服务器会抛出405错误
      data     : dats,
      dataType : "json",  //跨域
      xhrFields: {withCredentials: true},  //带cookie
      cache    : false,
      success  : function(data){
        if(callback) callback(data, false);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
      	console.log("无法正常访问服务器，请检查网络连接");
        if(callback) callback(null, true);
      }
    });
}


//产生随机数
function randmixed(len,s) {
   let chars=s ? s.split('') : ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','0','p','q','r','s','t','u','v','w','x','y','z'];
   let res="", size = chars.length;
   let n = len > size ? size : len;
   size--;
   for(var i=0;i<n;i++){var id=Math.ceil(Math.random()*size);res+=chars[id];}
   return res;
}

/* 图片转base64 */
function getBase64(imgUrl){
      //window.URL = window.URL || window.webkitURL;
      var xhr = new XMLHttpRequest();
      xhr.open("get", imgUrl, true);
      // 至关重要
      xhr.responseType = "blob";
      xhr.onload = function () {
          if (this.status == 200) {
              var blob = this.response; //得到一个blob对象
              var oFileReader = new FileReader(); //至关重要
              oFileReader.onloadend = function (e) { var base64 = e.target.result; console.log(base64); };
              oFileReader.readAsDataURL(blob);
          }
      }
      xhr.send();
}

//判断浏览器类型
var isBrowser = function() {
    var u = navigator.userAgent;
    return {
            ie: u.indexOf('Trident') > -1, //IE内核
            opera: u.indexOf('Presto') > -1, //opera内核
            webkit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            ff: u.indexOf('Firefox') > -1, //火狐内核Gecko
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
            iPhone: u.indexOf('iPhone') > -1 , //iPhone
            iPad: u.indexOf('iPad') > -1, //iPad
            webApp: u.indexOf('Safari') > -1 //Safari
        };
}();

//复制到粘贴板
function copyToClipBoard(copyText) {
    if (window.clipboardData) { // ie
        window.clipboardData.setData("Text", copyText);
    }
}

/*时间戳转换*/
function UnixToDateTime(unixTime,timeZone,isFull) {
   timeZone = parseInt(timeZone) || 8;
   isFull = isFull || true;
   unixTime = parseInt(unixTime) + timeZone * 60 * 60;

   var time = new Date(unixTime * 1000);
   var ymdhis = "";
   ymdhis += time.getUTCFullYear() + "-";
   ymdhis += ('0' + (time.getUTCMonth()+1)).substr(-2) + "-";
   ymdhis += ('0' + time.getUTCDate()).substr(-2);
   if (isFull === true)
   {
      ymdhis += " " + ('0' + time.getUTCHours()).substr(-2) + ":";
      ymdhis += ('0' + time.getUTCMinutes()).substr(-2) + ":";
      ymdhis += ('0' + time.getUTCSeconds()).substr(-2);
   }
   return ymdhis;
}

/* 返回当前时间 */
function getLocalTime(t){
  var timestamp = parseInt(new Date().valueOf()/1000);
  if("number" == typeof(t)){
    timestamp += t;
  }
  return UnixToDateTime(timestamp);
}

/* 返回制定日期的时间戳 */
function getTimestamp(t){
   var timestamp = 0;
   if(t){
      timestamp = parseInt(new Date(t).valueOf()/1000);
   } else {
      timestamp = parseInt(new Date().valueOf()/1000);
   }
   return timestamp;
}


/**
 * 根据日期字符串获取星期几
 * 日期字符串（如：2016-12-29），为空时为用户电脑当前日期
 */
function getWeek(dateString){
    var date;
    if(dateString == null || typeof dateString == "undefined"){
        date = new Date();
    } else {
        var dateArray = dateString.split("-");
        date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
    }
    return "星期" + "日一二三四五六".charAt(date.getDay());
}


function getQueryString(name, url) {
   var str = url ? url : window.location.search;
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
   var r = str.substr(1).match(reg);
   if (r != null) return unescape(r[2]);
   return null;
}

/*公共模块*/
let Public_Object = {
   "confirm": function(d,c){
      let o = d ? d : {};
      let node = $('<div class="alert"></div>');
      let opt = Apps.dialog_opt();
      node.html( o.content ? o.content : '' );
      opt.title = o.title ? o.title : "提示";
      opt.buttons = [
         {text:"确认",iconCls :'icon-ok',handler:function(){
            if(c) c();
            node.dialog('destroy');
        }},
        {text:"取消",iconCls :'icon-cancel',handler:function(){ node.dialog('destroy'); }}
      ];
      Apps.Dialog_Show(node, opt);
   },
   "alert": function(s,t){
      let node = $('<div class="alert"></div>');
      let opt = Apps.dialog_opt();
      node.html( s ? s : '' );
      opt.title = t ? t : "提示";
      opt.buttons = [ {text:"确认",iconCls :'icon-ok',handler:function(){ node.dialog('destroy'); }} ];
      Apps.Dialog_Show(node, opt);
   },
   "list": {
     "create_option" : function(o){
               if('object' != typeof(o)){console.log("Error from Customer_Object.create_option !"); return;}
               let def = {
                 dats : o.dats,
                 obj  : o.obj,
                 id   : o.id,
                 text : o.text,
                 callback : o.callback ? o.callback : null
               };
               def.obj.find("option:not(:first-child)").remove();
               $.each(def.dats, function(i, v){
                 let value = def.id ? v[def.id] : i.toString();
                 let txt = def.text ? v[def.text] : v;
                 def.obj.append('<option value="'+value+'">'+txt+'</option>');
               });
               if(def.callback) def.callback();
      },
      "accounts_kind_list" : function(o, ob, c){
      			let arr = [];
      			for(let attr in ob){
      				arr.push(ob[attr])
      			};
      			arr = arr.sort(function(a,b){return a.show_index - b.show_index})
              this.create_option({
                dats  : arr,
                obj   : o,
                id    : "id",
                text  : "kind_name",
                callback : c
              });
      }
    },
    "search": function(dg, data, obj, getData){
            if('object' != typeof(dg)){ Public_Object.alert("未传入表格对象!"); return; }
            let api_url = obj ? obj.api_url  : "";

            dg.datagrid("loading"); //加屏蔽

            get_dats(api_url, data, function(d, err){
                 if(err){ Public_Object.alert("获取列表返回错误!"); return; }
                 if(!d.status){dg.datagrid("loaded"); Public_Object.alert(d.msg);}

                 if(d.data){
                       Public_Object.pagerFilter(getData, dg, d.total, d.data.length); //换页设置
                       let cdata = obj.callback ? obj.callback(d.data) : null;
                       if(!cdata) cdata = d.data;

                       //加载数据
                       dg.datagrid('loadData',{rows:cdata, total:(d.total ? d.total : 0) });
                       dg.datagrid("loaded"); //移除屏蔽
                 }
            });
    },
    "pagerFilter": function(getData, dg, total, rows ){
           if(!getData) return;
           let opts = dg.datagrid('options');
           let pager = dg.datagrid('getPager');

          pager.pagination({
              "total": total,
              "rows": rows,
              onSelectPage:function(pageNum, pageSize){
                $('.pagination-page-list_input').hide();
                //let pNum = (pageNum > 0) ? (pageNum - 1 ) : 0;
                opts.pageSize = pageSize;
                getData(pageNum, pageSize);
              }
          });
   },
    /* 提交修改 -- 同步  提交请求会 等待返回  */
    "get_data": function(api, dats, met){
         let res;
         let result = $.ajax({
            url      : api,
            type     : met ? met : "POST",
            data     : dats,
            dataType : "json",
            cache    : false,
            async    : false,
            success  : function(data){ res = data; },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
               Public_Object.tip('<p style="color:red;font-weight:bold;">无法正常访问接口!</p>');
            }
         });
         return res;
    },
    /*sys_tip*/
    "tip": function(txt){
         let tip = $(".sys_tip").eq(0);
         tip.html(txt);
         tip.fadeIn(200);
         setTimeout(function(){
            tip.fadeOut(2000);
         },3800);
    }
};

let Login_Object = {
   "dom": function(){
        return {
          "user_name": $("#user_name"),
          "password": $("#password"),
          "verif_code": $("#verif_code")
        }
   },
   "init": function(){
       let dom = this.dom();
       dom.user_name.bind('keypress',function(event){
         if(event.keyCode == 13) $("#password").focus();
       });

       dom.password.bind('keypress',function(event){
         if(event.keyCode == 13) $("#verif_code").focus();
       });

       dom.verif_code.bind('keypress',function(event){
          if(event.keyCode == 13){
            Login_Object.login();
            $(this).blur();
          }
       });
   },
   "reset": function(){
        let dom = this.dom();
        dom.user_name.val('');
        dom.password.val('');
   },
   "input_check": function(){
      let dom = this.dom();
      let ret = {status:0, data:{}, msg:""};
      if(dom.user_name.val().length < 1){
        ret.msg = "请输入用户名!";
        return ret;
      }
      if(dom.password.val().length < 1){
        ret.msg = "请输入密码!";
        return ret;
      }
      ret.status = 1;
      ret.data = {
         "user_name":dom.user_name.val(),
         "password":Apps.pwd(dom.user_name.val(), dom.password.val()),
         "verif_code":dom.verif_code.val()
      };
      return ret;
   },
   "login": function(){
         let res = this.input_check();
         if(!res.status){
           Public_Object.alert(res.msg);
           return 0;
         }

         //console.log(res);

         get_dats("/api.user/login",res.data, function(dats){
              //console.log(dats);
              if(dats.status){
                   Login_Object.login_ok(dats);
              } else {
                  Login_Object.login_error(dats.msg);
                  $("#verif_code").next().attr('src','/api.verif?t='+Math.random());
              }

         });
   },
   "login_ok": function(dats){
        window.Apps.me = dats.me;
        window.Apps.data = dats.data;

        //执行权限检查
        window.Apps.check_grants();

        //初始化
        app_init();
        $("body > .LoginWin").remove();
        $("body > .main").show();
   },
   "login_error": function(msg){
       $.messager.alert("登陆失败",(msg ? msg : "帐号或密码错误!"),"error", function(){
            let pwd = Login_Object.dom().password;
            pwd.select();
            pwd.focus();
       });
   },
   "check_port": function(port, callback){
        let server = require('net').createServer().listen(port)
        server.on('listening',function(){
          server.close();
          if(callback) callback();
        });
        server.on('error',function(err){
            if(err.code === 'EADDRINUSE' && callback) callback(err);
        });
   }
}

/*项目类*/
let Project_Object = {
   "o": function(){
       let dom = $("#projects > div.f_list");
       return {
          "left":dom.find(" > div:first-child > div"),
          "right":dom.find(" > div:last-child > div")
      };
   },
   "list": function(){
         get_dats(window.Api.project.search,{},function(dats){
                 if(!dats) return;
                 if(dats.status){
                     let obj = Project_Object.o().left;
                     Project_Object.o().right.find(" > ul").remove();
                     obj.find(" > ul").remove();
                     dats.data.forEach(function(v, i){
                            let ul = $('<ul></ul>');
                            let li = $('<li></li>');
                            li.text(v.project_name);
                            if(!v.status) li.css('color','#555');
                            ul.append(li);
                            ul.data("raw",v);
                            ul.click(function(){ Project_Object.select($(this)); });   //单击，查看列表
                            ul.dblclick(function(){ Project_Object.change($(this).data("raw")); });   //双击查看项目信息
                            obj.append(ul);
                     });
                 } else {
                     Public_Object.alert(dats.msg);
                 }
         });
   },
   "select": function(dom){
          dom.parent().find("ul").removeClass("sel");
          dom.addClass("sel");
          let raw = dom.data("raw");
          this.node_list(raw.id);
   },
   "node_change": function(row){
         let node = $("#add_project_node");
         let obj = Apps.field(node[0], ['milieu_id','project_id','rsync_user','rsync_passwd','rsync_name','nodes','shell_path','create_date']);
         let status = node.find("input[name='status']").parent().parent();
         let is_sync = node.find("input[name='is_sync']").parent().parent();
         status.find("input").removeAttr("checked");
         is_sync.find("input").removeAttr("checked");

         obj.milieu_id.find("option:not(:first-child)").remove();
         obj.project_id.find("option:not(:first-child)").remove();
         window.Apps.data.milieu.forEach(function(v,i){
               obj.milieu_id.append('<option value="'+v.id+'">'+v.milieu_name+'</option>');
         });
         window.Apps.data.project.forEach(function(v,i){
               obj.project_id.append('<option value="'+v.id+'">'+v.project_name+'</option>');
         });

         if(row){
               if(!row){ Public_Object.alert('未选择记录!'); return; }
               $.each(obj, function(i,v){ v.val(row[i]); });
               if(row.is_sync){ is_sync.find("input[value='1']")[0].checked = true; }else{ is_sync.find("input[value='0']")[0].checked = true; }
               if(row.status){ status.find("input[value='1']")[0].checked = true; }else{ status.find("input[value='0']")[0].checked = true; }
               obj.create_date.val(UnixToDateTime(row.create_date));
         } else {
                $.each(obj, function(i,v){ v.val(''); });
                let raw = Project_Object.o().left.find('> ul.sel').data('raw');
                obj.project_id.val(raw ? raw.id : '');
        }

        let opt = Apps.dialog_opt();
        opt.title = row ? "发布节点信息修改 ID: " + row.id : "新增发布节点";
        opt.buttons = [
           {text:"确认",iconCls :'icon-ok',handler:function(){
               let dats = {
                  "milieu_id":obj.milieu_id.val(),
                  "project_id":obj.project_id.val(),
                  "rsync_user":obj.rsync_user.val(),
                  "rsync_passwd":obj.rsync_passwd.val(),
                  "rsync_name":obj.rsync_name.val(),
                  "shell_path":obj.shell_path.val(),
                  "is_sync":node.find('input[name="is_sync"]:checked').val(),
                  "status":node.find('input[name="status"]:checked').val(),
                  "nodes":obj.nodes.val()
               };
               if(row) dats.id = row.id;
               let api_url = row ? window.Api.project.node_update : window.Api.project.node_add;

               get_dats(api_url,dats,function(d){
                      if(!d.status){Public_Object.alert("发生错误: " + d.msg); return;}
                      Project_Object.node_list(dats.project_id);
               });
               node.dialog('close');
          }},{text:"取消",iconCls :'icon-cancel',handler:function(){ node.dialog('close'); }}
        ];
        Apps.Dialog_Show(node, opt);
   },
   "change": function(row){
         let node = $("#add_project");
         let obj = Apps.field(node[0], ['project_name','exclude','note','create_date']);
         let status = node.find("input[type='radio']").parent().parent();
         status.find("input").removeAttr("checked");

         if(row){
               if(!row){ Public_Object.alert('未选择记录!'); return; }
               $.each(obj, function(i,v){ v.val(row[i]); });
               if(row.status){ status.find("input[value='1']")[0].checked = true; }else{ status.find("input[value='0']")[0].checked = true; }
               obj.create_date.val(UnixToDateTime(row.create_date));
         } else {
                $.each(obj, function(i,v){ v.val(''); });
        }

         let opt = Apps.dialog_opt();
         opt.title = row ? "项目信息修改 ID: " + row.id : "新增项目";
         opt.buttons = [
            {text:"确认",iconCls :'icon-ok',handler:function(){
                let dats = {
                   "project_name":obj.project_name.val(),
                   "exclude":obj.exclude.val(),
                   "status":node.find('input[type="radio"]:checked').val(),
                   "note":obj.note.val()
                };
                if(row) dats.id = row.id;

                let api_url = row ? window.Api.project.update : window.Api.project.add;

                get_dats(api_url,dats,function(d){
                       if(!d.status){
                            Public_Object.alert("发生错误: " + d.msg);
                       }else {
                            window.Apps.data.project = d.data;
                       }
                       Project_Object.list();
                });
                node.dialog('close');
           }},
            {text:"取消",iconCls :'icon-cancel',handler:function(){
                node.dialog('close');
           }}
         ];
         Apps.Dialog_Show(node, opt);
   },
   "del": function(){
         let row = this.o(1).data("raw");
         if(row){
           Public_Object.confirm({content:'<p>您确定要删除客户 "'+row.customer_name+'"</p>'}, function(){
               db.project.del(row.id, function(err){
                  if(err) Public_Object.alert("操作失败!");
                  Project_Object.list();
               });
           });
         } else {
            Public_Object.alert("未选择记录!");
         }
   },
   "node_list": function(id){
           let projects = {};
           let milieus = {};
           window.Apps.data.project.forEach(function(v,i){projects[v.id] = v.project_name; });
           window.Apps.data.milieu.forEach(function(v,i){milieus[v.id] = v.milieu_name; });
           get_dats(window.Api.project.node,{"project_id":id},function(dats){
                   if(!dats) return;
                   if(dats.status){
                       let obj = Project_Object.o().right;
                       obj.find(" > ul").remove();
                       dats.data.forEach(function(v, i){
                              let ul = $('<ul><li>'+milieus[v.milieu_id]+'</li><li>'+projects[v.project_id]+'</li><li>'+v.nodes.replace(/\n/g,', ')+'</li></ul>');
                              ul.data("raw",v);
                              ul.click(function(){
                                   dom = $(this);
                                   dom.parent().find("ul").removeClass("sel");
                                   dom.addClass("sel");
                              });   //点击选中
                              ul.dblclick(function(){ Project_Object.node_change($(this).data("raw"));});
                              obj.append(ul);
                       });
                   }
           });
   }
};

//帐号列表
let Accounts_Object = {
   "field": function(n,t){ return Apps.field("change_accounts", n, t); },
   "reload": function(){ this.list(); },
   "menu": function(e, i, r){
       e.preventDefault();//阻止浏览器自带的右键菜单弹出
       let m = $('#account_menu');

       let dats = $(this).datagrid("getSelections");
       if(dats.length < 1){ $(this).datagrid('selectRow',i); }

       if(m.children("div:not([class*='menu-line'])").length > 0){
          m.menu('show', {left:e.pageX, top:e.pageY, hideOnUnhover:false});
       }
   },
   "row_dbclick":function(rowIndex, rowData){ Accounts_Object.change(); },
   "list": function(page, limit){
          let dg = $("#acc_dg");
          let dat ={
              page: (page ? page : 0),
              limit: (limit ? limit : null)
          };
          Public_Object.search(dg, dat, {
              "api_url": window.Api.user.search,
              "callback":function(d){
                      d.forEach(function(v,i){
                              v.create_date = UnixToDateTime(v.create_date);
                              v.status_val= v.status ? '<font color=green>正常</font>' : '<font color=red>已禁用</font>';
                              let dat = Apps.data.role[v.role_id];
                              v.role_name = dat ? dat.role_name : '';
                      });
                      return d;
              }
          }, Accounts_Object.list);

/*
      dg.datagrid("loading"); //加屏蔽
      get_dats(window.Api.user.search,{},function(d, err){
           if(err){ Public_Object.alert("获取列表返回错误!"); return; }
           if(!d.status){Public_Object.alert(d.msg);}
           d.data.forEach(function(v,i){
                 v.create_date = UnixToDateTime(v.create_date);
                 v.status_val= v.status ? '<font color=green>正常</font>' : '<font color=red>已禁用</font>';
                 let dat = Apps.data.role[v.role_id];
                 v.role_name = dat ? dat.role_name : '';
           });
            //加载数据
           dg.datagrid('loadData',{"rows":d.data, total:d.total});  //记录总数
           dg.datagrid("loaded"); //移除屏蔽
      });
      */
   },
   "change": function(act){
      let node = $("#change_accounts");
      let obj = this.field(['real_name','user_name', 'password', 'create_date', 'role_id','status', 'note']);
      let row = null;
      $.each(obj, function(i,v){ v.val(''); });

      obj.role_id.find('option:not(:first-child)').remove();
      Object.keys(window.Apps.data.role).forEach(function(k,i){
             let v = window.Apps.data.role[k];
             obj.role_id.append('<option value="'+v.id+'">'+v.role_name+'</option>');
      });

      if(!act){
         //修改
         row = $("#acc_dg").datagrid("getSelected");
         if(!row) return;
         Object.keys(obj).forEach(function(k){ obj[k].val(row[k]); });
         obj.user_name.attr("readonly",true);
         obj.password.attr("placeholder",row.password.substr(0,23).replace(/(.)/g,'*'));
         obj.password.val('');
         obj.create_date.val(UnixToDateTime(row.create_date));
         obj.status[0].checked = row.status ? true : false;
      } else {
          obj.user_name.removeAttr("readonly");
          obj.password.attr("placeholder","");
      }

      let opt = Apps.dialog_opt();
      opt.title = act ? "新增帐号" : "修改帐号信息 ID: " + row.id;
      opt.buttons = [
         {text:"确认",iconCls :'icon-ok',handler:function(){
             let dats = {
                "id":act ? 0 : row.id,
                "user_name":obj.user_name.val(),
                "real_name":obj.real_name.val(),
                "role_id":obj.role_id.val(),
                "note":obj.note.val(),
                "status":(obj.status[0].checked ? 1 : 0)
             };
             if(obj.password.val().length) dats.password =  Crypt_hash(obj.password.val(),'md5');

             let api_url = window.Api.user.add;

             if(!act){
                  if(dats.user_name) delete dats.user_name;
                  api_url = window.Api.user.update;
             }
             get_dats(api_url, dats, function(d,err){
                     if(err){console.log(err); alert("保存出错!"); return;}
                     if(!d.status){Public_Object.alert(d.msg); return;}
                     //console.log(sql);
                     Accounts_Object.reload();
             });

   	      	node.dialog('close');
   	    }}, {text:"取消",iconCls :'icon-cancel',handler:function(){ node.dialog('close'); }}
      ];
      Apps.Dialog_Show(node, opt);
   },
   "del": function(){
      let row = $("#acc_dg").datagrid("getSelected");
      if(!row) return;
      Public_Object.confirm({content:'<p>您确定要删除 "'+row.id+'"</p>'}, function(){
          let ret = getByRsync(window.Api.user.del,{"id":row.id});
          if(!ret.status) Public_Object.alert(ret.msg);
          Accounts_Object.reload();
      });
   },
   "grants_list":function(row){
         let ids = row ? ',' + row.grants + ',' : '';
         //console.log(ids);
         let grants = {
              "show": function(){
                     let data = this.children(window.Apps.data.grants);
                     return {"data":data};
              },
              "children":function(dat){
                     let ch = [];
                     dat.forEach(function(v,i){
                           let d = {"text":v.name};
                           if(v.id){
                                 d.id = v.id;
                                 if(!v.children && ids.indexOf(v.id) > -1) d.checked = true;
                           }
                           if(v.children){
                              d.state = "closed";
                              d.children = grants.children(v.children);
                           }
                            ch.push(d);
                     });
                     return ch;
              }
         };

         $('#role_tree').tree(grants.show());
   },
   "get_grants":function(){
         let ids = [];

         let grants = {
              "get": function(){
                    this.children($("#role_tree").tree("getRoots"));
              },
              "children":function(dat){
                     dat.forEach(function(v,i){
                           if(v.id && 'unchecked' != v.checkState) ids.push(v.id);
                           if(v.children) grants.children(v.children);
                     });
              }
         };

         grants.get();

         return ids;
   },
   //角色管理
   "role":function(){
        let node = $("#change_role");
        //let tab = $("#role_tabs");

        this.role_list();

        let opt = Apps.dialog_opt();
        opt.title = "角色列表 ";
        opt.buttons = [{text:"新增", iconCls:"icon-add",handler:function(){ Accounts_Object.add_role(); }},
        {text:"删除", iconCls:"icon-remove",handler:function(){ Accounts_Object.role_del(); }},
        {text:"关闭",iconCls :'icon-cancel',handler:function(){ node.dialog('close'); }}];
        Apps.Dialog_Show(node, opt);
   },
   "role_dbclick":function(rowIndex, rowData){Accounts_Object.add_role(rowData);},
   "role_list": function(){
         let dg = $("#role_dg");
         dg.datagrid("loading"); //加屏蔽
         get_dats(window.Api.role.search,{},function(d, err){
              if(err){ Public_Object.alert("获取列表返回错误!"); return; }
              if(!d.status){Public_Object.alert(d.msg);}
              d.data.forEach(function(v,i){
                    v.create_date = UnixToDateTime(v.create_date);
                    v.status_val= v.status ? '<font color=green>已启用</font>' : '<font color=red>已禁用</font>';
              });
               //加载数据
              dg.datagrid('loadData',{"rows":d.data, total:d.total});  //记录总数
              dg.datagrid("loaded"); //移除屏蔽
         });
   },
   "add_role":function(row){
         let dom = $("#change_role").find("#add_role");
         let obj = Apps.field(dom[0], ['role_name','status']);

         Accounts_Object.grants_list(row);

          dom.data("raw",null);

         $.each(obj, function(i,v){ v.val(''); });

         if(row){
                dom.data("raw",row);
                obj.role_name.val(row.role_name);
                obj.status[0].checked = row.status ? true : false;
          }

          dom.show();
   },
   //保存角色修改
   "save_role": function(){
           let dom = $("#add_role");
           let obj = Apps.field(dom[0], ['role_name','status']);
           let api_url = window.Api.role.add;
           let row = dom.data("raw");

           let dats = {
               "role_name":obj.role_name.val(),
               "status":obj.status[0].checked ? 1 : 0,
               "grants":Accounts_Object.get_grants().toString()
           };
           if(row){ //修改
                  dats.id = row.id;
                  api_url = window.Api.role.update;
           }

           get_dats(api_url,dats,function(d){
                  if(!d.status){
                       Public_Object.alert(d.msg);
                   }else{
                       window.Apps.data.role = JSON.parse(JSON.stringify(d.data));
                       Accounts_Object.role_list();
                       dom.hide();
                   }

           });
   },
   //删除角色
   "role_del": function(){
      let row = $("#role_dg").datagrid("getSelected");
      if(!row) return;
      Public_Object.confirm({content:'<p>您确定要删除 [ID:'+row.id+']  '+row.role_name+'</p>'}, function(){
          let ret = getByRsync(window.Api.role.del,{"id":row.id});
          if(!ret.status){
              Public_Object.alert(ret.msg);
          } else {
              window.Apps.data.role = JSON.parse(JSON.stringify(ret.data));
          }
          Accounts_Object.role_list();
      });
   },
}

//执行sql任务
let Sql_Task_Object = {
   "field": function(n,t){ return Apps.field("change_sql_task", n, t); },
   "reload": function(){ this.list(); },
   "editor": null,
   "menu": function(e, i, r){
       e.preventDefault();//阻止浏览器自带的右键菜单弹出
       let m = $('#sql_task_menu');

       let dats = $(this).datagrid("getSelections");
       if(dats.length < 1){ $(this).datagrid('selectRow',i); }

       if(m.children("div:not([class*='menu-line'])").length > 0){
          m.menu('show', {left:e.pageX, top:e.pageY, hideOnUnhover:false});
       }
   },
   "init":function(){
         $("#change_sql_task > div#sql_tabs div.sql_history > div > li").click(function(){
               $(this).parent().find("> li").removeClass('sel');
               $(this).addClass('sel');
         });
   },
   "list": function(page, limit){
          let dg = $("#sql_dg");
          let dat ={
              page: (page ? page : 0),
              limit: (limit ? limit : null)
          };
          Public_Object.search(dg, dat, {
              "api_url": window.Api.sql.search,
              "callback":function(d){
                      d.forEach(function(v,i){
                          v.create_date = UnixToDateTime(v.create_date);
                          v.run_time = v.run_time ? UnixToDateTime(v.run_time) : '';
                      });
                      return d;
              }
          }, Sql_Task_Object.list);
   },
   "row_dbclick":function(rowIndex, rowData){ Sql_Task_Object.change(); },
   "change": function(act){
      let node = $("#change_sql_task");
      let tab = $("#sql_tabs");
      let obj = this.field(['title', 'val', 'create_date', 'note']);
      let row = null;
      let opt = Apps.dialog_opt();
      opt.title = "新增任务";
      opt.buttons = [];
      $.each(obj, function(i,v){ v.val(''); });

      if(!act){
         //修改
         row = $("#sql_dg").datagrid("getSelected");
         if(!row) return;
         Object.keys(obj).forEach(function(k){ obj[k].val(row[k]); });

         obj.create_date.val(row.create_date);

         opt.title = "修改任务信息 ID: " + row.id;
         opt.buttons.push({text:"执行",iconCls :'icon-t-terminal',handler:function(){
                 Sql_Task_Object.be_run();
         }});
      }

      node.data("row",row);

      opt.buttons.push({text:"确认",iconCls :'icon-ok',handler:function(){
             let dats = {
                "title":obj.title.val(),
                "val":Sql_Task_Object.editor ? Sql_Task_Object.editor.getValue() : obj.val.val(),
                "note":obj.note.val()
             };
             let api_url = window.Api.sql.add;
             if(row){
                   dats.id = row.id;
                   api_url = window.Api.sql.update;
             }

             get_dats(api_url, dats, function(d,err){
                    if(err) { Public_Object.alert('请求出错!');return;}
                    if(!d.status) Public_Object.alert(d.msg);
                    Sql_Task_Object.list();
             });
   	      	node.dialog('close');
   	    }});
        opt.buttons.push({text:"取消",iconCls :'icon-cancel',handler:function(){ node.dialog('close'); }});

      Apps.Dialog_Show(node, opt, function(){
           if( 'history' != $("#sql_tabs").tabs("getSelected").attr("dom") ){ Sql_Task_Object.editor.setValue(obj.val.val()); }
      });
   },
   "tab_select": function(title){
           switch(title){
             case "任务详情":
                   let dom = $(this).find('textarea[name="val"]');
                   if(!Sql_Task_Object.editor){
                        Sql_Task_Object.editor = window.CodeMirror.fromTextArea(dom[0], {mode:'text/x-mysql',indentWithTabs:true,smartIndent:true,matchBrackets:true});
                        Sql_Task_Object.editor.setSize('auto', 'calc(100% - 120px)');
                   }
                   if( Sql_Task_Object.editor.getValue().length < 1 ){
                        Sql_Task_Object.editor.setValue(dom.val());
                   }
                   Sql_Task_Object.editor.refresh();
             break;
             case "执行记录":
                   Sql_Task_Object.history();
             break;
           }
   },
   "history": function(){
         let row = $("#change_sql_task").data("row");
          let tab = $('#sql_tabs').tabs('getSelected');
         let node = tab.find("> div:nth-child(2)");
         node.find("> li").remove();
         $("#sql_console").text('');
         if(!row){return;}

         if('history' === tab.attr("dom")){

               get_dats(window.Api.sql.history,{"task_id":row.id},function(d){
                     if(d.status){
                          d.data.forEach(function(v,i){
                                let li = $("<li></li>");
                                li.text(UnixToDateTime(v.create_date));
                                li.data("raw",v);
                                li.click(function(){
                                       $(this).parent().find("li").removeClass('sel');
                                       $(this).addClass('sel');
                                       let raw = $(this).data("raw");
                                       $("#sql_console").text(raw.result);
                                });
                                node.append(li);
                          });
                      } else { Public_Object.alert(d.msg); }
               });
         }
   },
   "del": function(){
      let row = $("#sql_dg").datagrid("getSelected");
      if(!row) return;
      Public_Object.confirm({content:'<p>您确定要删除 "'+row.id+'"</p>'}, function(){
            let ret = getByRsync(window.Api.sql.del,{"id":row.id});
            if(!ret.status) Public_Object.alert(ret.msg);
            Sql_Task_Object.list();
      });
   },
   "be_run":function(){
           let run = $("#run_sql");
           run.find("> div:last-child").hide();
           run.find("> div:first-child").show();
           run.css("background-color","rgba(0,0,0,0.5)");

           let obj = Apps.field(run.find("> div:first-child > div.input_list"), ['project_id','milieu_id']);
           obj.milieu_id.find('option:not(:first-child)').remove();
           window.Apps.data.milieu.forEach(function(v,i){
                 let opt = $('<option value=""></option>');
                 opt.val(v.id);
                 opt.text(v.milieu_name);
                 obj.milieu_id.append(opt);
           });

           obj.project_id.find('option:not(:first-child)').remove();
           window.Apps.data.project.forEach(function(v,i){
                 let opt = $('<option value=""></option>');
                 opt.val(v.id);
                 opt.text(v.project_name);
                 obj.project_id.append(opt);
           });


           run.show();
   },
   "run": function(){
           let run = $("#run_sql");
           let obj = Apps.field(run.find("> div:first-child > div.input_list"), ['project_id','milieu_id']);
           run.find("> div:first-child").hide();
           run.find("> div:last-child").show();
           run.css("background-color","rgba(200,200,200)");

           //let row = $("#change_sql_task").data("row");
           let row = $("#sql_dg").datagrid("getSelected");
           if(!row){console.log("发生错误! 未找到记录信息!"); return;}

           window.Wsock.send($("#run_console"), "sql_task", {"id":row.id, "project_id":parseInt(obj.project_id.val()), "milieu_id":parseInt(obj.milieu_id.val())});
   }
}

//发布代码
const Release_Object = {
   "field": function(){ return Apps.field("release", ['project_id','milieu_id']); },
   "init": function(id){
          let obj = this.field();
          obj.project_id.find('option:not(:first-child)').remove();
          obj.milieu_id.find('option:not(:first-child)').remove();
          window.Apps.data.project.forEach(function(v,i){ obj.project_id.append('<option value="'+v.id+'">'+v.project_name+'</option>'); });
          window.Apps.data.milieu.forEach(function(v,i){ obj.milieu_id.append('<option value="'+v.id+'">'+v.milieu_name+'</option>'); });

   },
   "go":function(){
           let dom = $("#release");
           let obj = this.field();
           let project_id = parseInt(obj.project_id.val());
           let milieu_id = parseInt(obj.milieu_id.val());
           if(!project_id){ Public_Object.alert("请选择项目!"); return; }
           if(!milieu_id){ Public_Object.alert("请选择环境!"); return; }

           let data = {"project_id":project_id,"milieu_id":milieu_id};
           //console.log(data);

           dom.find("button").attr("disabled", true);
           dom.find("button").text("发布中...");
           obj.project_id.attr("disabled",true);
           obj.milieu_id.attr("disabled",true);

           window.Wsock.send(dom.find("div.console"), "release", data, function(){
                obj.project_id.removeAttr("disabled");
                obj.milieu_id.removeAttr("disabled");
                dom.find("button").removeAttr("disabled");
                dom.find("button").text("发布");
           });

   }
};

//帐号列表
let Logs_Object = {
   "field": function(n,t){ return Apps.field("logs_info", n, t); },
   "reload": function(){ this.list(); },
   "menu": function(e, i, r){
       e.preventDefault();//阻止浏览器自带的右键菜单弹出
       let m = $('#logs_menu');

       let dats = $(this).datagrid("getSelections");
       if(dats.length < 1){ $(this).datagrid('selectRow',i); }

       if(m.children("div:not([class*='menu-line'])").length > 0){
          m.menu('show', {left:e.pageX, top:e.pageY, hideOnUnhover:false});
       }
   },
   "list": function(page, limit){
         let dg = $("#logs_dg");
         let dat ={
             page: (page ? page : 0),
             limit: (limit ? limit : null)
         };
         Public_Object.search(dg, dat, {
             "api_url": window.Api.logs,
             "callback":function(d){
                     d.forEach(function(v,i){
                           v.create_date = UnixToDateTime(v.create_date);
                     });
                     return d;
             }
         }, Logs_Object.list);
   },
   "info": function(){
        let node = $("#logs_info");
        let obj = Logs_Object.field(['action','val', 'ip', 'note', 'owner', 'create_date']);
        let row = null;
        $.each(obj, function(i,v){ v.val(''); });

         //修改
         row = $("#logs_dg").datagrid("getSelected");
         if(!row) return;
         Object.keys(obj).forEach(function(k){ obj[k].val(row[k]); });

        let opt = Apps.dialog_opt();
        opt.title = "日志 ID: " + row.id;
        opt.buttons = [{text:"关闭",iconCls :'icon-cancel',handler:function(){ node.dialog('close'); }}];
        Apps.Dialog_Show(node, opt);
   }
}

/*首页工具*/
let Home_Tools = {
    "o": function(s){
       return ( s ? $("#home").find(s).eq(0) : $("#home") );
     },
    "init": function(){
        //窗口关闭按钮
        this.o().find("> div > p:first-child > a:last-child").click(function(){
           $(this).parent().parent().hide();
        });

        $("#home > div").draggable({containment:"parent", handle:"p:first-child"}); //拖拽
    },
    "show": function(o){
       let dom = this.o();
       let t = parseInt(dom.data("index"));
       let title = o.find("> p:first-child > span:first-child").eq(0);
       t = isNaN(t) ? 1 : (t + 1);
       dom.data("index", t);
       o.css("z-index", t);
       o.show();

       title.off("click");
       title.click(function(){
          Home_Tools.show($(this).parent().parent());
       });
    },
    /*密码生成*/
    "create_pwd": function(o, _this){
        let dom = this.o(".create_pwd");
        if('undefined' == typeof(o)){ this.show(dom); return; }
        let obj = window.Apps.field(dom[0],['len','number','lower','upper','other','enc']);
        if(2 === o){ //复制
           obj.enc.select();
           let clipboard = App_Gui.Clipboard.get();
           clipboard.set(obj.enc.val(),'text');
           _this.style.color = 'green';
           setTimeout(function(){
              _this.style.color = '#000';
           }, 500);
          return;
        }

        let str = (obj.number[0].checked ? obj.number.val() : '')
                  + (obj.lower[0].checked ? obj.lower.val() : '')
                  + (obj.upper[0].checked ? obj.upper.val() : '')
                  + (obj.other[0].checked ? obj.other.val() : '');
        if(str){
            str = this.string_rand(str);
            let len = parseInt(obj.len.val());
            len = isNaN(len) ? 0 : len;
            if(len) obj.enc.val(randmixed(len, str));
        }
    },
    /*base64编码与解码*/
    "base64": function(o){
        let dom = this.o(".base64");
        if('undefined' == typeof(o)){ this.show(dom); return; }
        let txt = dom.find("textarea").eq(0);

        if(1 === o){ //编码
           txt.val( Enc.base64_encode(txt.val()) );
        } else if(2 === o) { //文件转base64编码
           let f = dom.find('input[type="file"]').eq(0).val();
           if(f) txt.val( Enc.file_toBase64(f) );
        } else { //解码
           let val = txt.val();
           let bs  = val.indexOf("base64,");
           if('data:' === val.substr(0,5) && bs > 0){ val = val.substr(bs + 7); }
           txt.val( Enc.base64_decode(val) );
        }
    },
    "string_rand": function(raw_str){
        let len = raw_str.length;
        let size = 0;
        let arr = ',';
        let str = '';
        while(size < len){
           let p = Math.floor(Math.random() * len);
           if(arr.indexOf(','+p+',') < 0){
             arr += p + ',';
             size++;
           }
        }
        arr = arr.substr(1, arr.length - 2).split(',');
        let txt_str = raw_str;
        $.each(arr, function(i,v){
            str += txt_str.charAt(parseInt(v));
        });

        return str;
    },
    /*字符串随机排序*/
    "string_sort": function(o){
        let dom = this.o(".string_sort");
        if('undefined' == typeof(o)){ this.show(dom); return; }
        let txt = dom.find("textarea").eq(0);

        txt.val( this.string_rand(txt.val()) );
    },
    /*URI编码*/
    "uri_encode": function(o){
        let dom = this.o(".uri_encode");
        if('undefined' == typeof(o)){ this.show(dom); return; }

        let txt = dom.find("textarea").eq(0);
        txt.val(o ? encodeURIComponent(txt.val()) : decodeURIComponent(txt.val()));
    },
    /*大小写转换*/
    "upper_low": function(o){
        let dom = this.o(".upper_low");
        if('undefined' == typeof(o)){ this.show(dom); return; }

        let txt = dom.find("textarea").eq(0);
        txt.val(o ? txt.val().toUpperCase() : txt.val().toLowerCase());
    },
    /*hash校验*/
    "hash_encode": function(o){
        let dom = this.o(".hash_encode");
        if('undefined' == typeof(o)){ this.show(dom); return; }
        let obj = window.Apps.field(dom[0],['md5','sha256','sha512','path']);
        let radio = dom.find('.input_list > p:last-child > label > input[type="radio"]');
        let upper = radio[0].checked ? radio.eq(0).val() : radio.eq(1).val();
        obj.txt = dom.find('textarea');

        if(2 === o){
            obj.txt.val('');
            Enc.file_verify(obj.path.val(), function(hash){
               Object.keys(hash).forEach(function(k){
                  obj[k].val('upper' === upper ? hash[k].toUpperCase() : hash[k].toLowerCase());
               });
            });
        } else {
            let txt = obj.txt.val();
            if(!txt) return;
            let ens = '';
            obj.path.val('');

            ens = Enc.md5(txt);
            obj.md5.val('upper' === upper ? ens.toUpperCase() : ens.toLowerCase());

            ens = Enc.sha(txt,'256');
            obj.sha256.val('upper' === upper ? ens.toUpperCase() : ens.toLowerCase());

            ens = Enc.sha(txt,'512');
            obj.sha512.val('upper' === upper ? ens.toUpperCase() : ens.toLowerCase());
        }

        radio.off("change");
        radio.change(function(){
           if(this.checked){
               let items = window.Apps.field($(this).parent().parent().parent().parent()[0],['md5','sha256','sha512']);
               if("upper" == this.value){
                  $.each(items, function(i,v){ v.val(v.val().toUpperCase()); });
               } else {
                  $.each(items, function(i,v){ v.val(v.val().toLowerCase()); });
               }
           }
        });

    },
    /*时间戳转换*/
    "unixtime": function(o){
        let dom = this.o(".unixtime");
        let obj = window.Apps.field(dom[0],['ntime','ltime','temptime']);
        this.show(dom);

        obj.ntime.off("click");
        obj.ntime.click(function(){
           let t = parseInt(new Date().valueOf()/1000);
           $(this).val(t);
           $(this).parent().find("input:last-child").val(UnixToDateTime(t));
        });
        obj.ntime.click();

        //let ltime = dom.find('input[name="ltime"]').eq(0);
        obj.ltime.off("change");
        obj.ltime.change(function(){
           let t = parseInt(new Date(this.value).valueOf()/1000);
           $(this).parent().find("input:last-child").val(t);
        });

        //let temptime = dom.find('input[name="temptime"]').eq(0);
        obj.temptime.off("change");
        obj.temptime.change(function(){
           let t = parseInt(this.value);
           t = isNaN(t) ? 0 : t;
           $(this).parent().find("input:last-child").val(UnixToDateTime(t));
        });
    },
    "utf16to8": function(){
          var out, i, len, c;
          out = "";
          len = str.length;
          for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
              out += str.charAt(i);
            } else if (c > 0x07FF) {
              out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
              out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
              out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
              out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
              out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
          }
          return out;
    },
    /*二维码生成*/
    "qrcode": {
      "o": function(){return Home_Tools.o(".qrcode");},
      "show": function(){
          let dom = this.o();
          let file = dom.find("input[type=file]").eq(0);
          let qr_dom = this.o().find("> .input_list > div:last-child").eq(0);
          file.off("change");
          file.change(function(){
             let obj = $(this).parent().parent().find("> textarea[name=content]");
             if( Fs.existsSync(this.files[0].path) ){
                 let qr_bast64 = Enc.file_toBase64(this.files[0].path);
                 qr_dom.html('<img src="'+qr_bast64+'" style="width:230px;"/>');
                 qrcode.decode(window.webkitURL.createObjectURL(this.files[0]));
                 qrcode.callback = function(msg){ obj.val(msg); }
             } else {
                 Public_Object.tip("二维码文件不存在!");
             }
          });
          Home_Tools.show(dom);
      },
      "create": function(o){
          let qr_dom = this.o().find("> .input_list > div:last-child").eq(0);
          let str = this.o().find("textarea[name='content']").val();
           //console.log(str);
          qr_dom.html("");
          qr_dom.qrcode({
              render: 'image',  // 渲染模式 canvas, image, table
              correctLevel:0,
              size: 230,  // 大小
              background: '#fff',  // 背景颜色
              text: str
          });
      },
      "decode": function(o){
        $(o).parent().find('input').click();
      }
    },
    /*字符串去重*/
    "unique": {
      "o": function(){return Home_Tools.o(".unique");},
      "field": function(n,t){
         return Apps.field(this.o().get(0), n, t);
      },
      "show": function(){;
          let obj = this.field(["active","r_input","t_input"]);
          Home_Tools.show(this.o());

          obj.active.off("change");
          obj.active.change(function(){
            let val = parseInt(this.value);
            if(6 == val || 7 == val){
              obj.r_input.width(300);
              obj.t_input.show();
            } else {
              obj.t_input.hide();
              obj.r_input.width(500);
            }
          });
      },
      "go": function(){
          let obj = this.field(["active","t_text"]);
          obj.t_text.val("");
          switch(parseInt(obj.active.val())){
            case 1: this.uniq(); break; // 去除重复
            case 2: this.del_text(); break;// 去除内容
            case 3: this.del_empty_line(); break;// 去掉空行
            case 4: this.del_text_line(); break;// 去掉行包含
            case 5: this.stay_text_line(); break;// 保留行包含
            case 6: this.replace_text(); break;// 内容替换
            case 7: break;// 替换行包含
            case 8: this.add_text_on_start(); break;// 添加到行首
            case 9: this.add_text_on_end(); break;// 添加到行尾
            case 10: this.del_ch_word(); break;
            case 11: this.del_en_word(); break;// 去掉英文字母
            case 12: this.del_number(); break;
            case 13: this.del_dom(); break;// 去掉html标记
          }
      },
      // 去掉重复行
      "uniq": function(){
          let obj = this.field(["t_text","r_text"]);

          let strs = obj.r_text.val().replace(/\\r\\n/g, "\n").replace(/\\r/g, "\n").split("\n");
          let tmpstr = '';
          for(let i = 0; i < strs.length; i++){
             if( ("\n" + tmpstr).indexOf("\n" + strs[i] + "\n") < 0 ) tmpstr += strs[i] + "\n";
          }
          obj.t_text.val(tmpstr);
      },
      // 去除指定内容
      "del_text": function(){
          let obj = this.field(["t_text","r_text","r_input"]);

          let strs = obj.r_text.val().replace(/\\r\\n/g, "\n").replace(/\\r/g, "\n").split("\n"), tmpstr = '';
          for(let i = 0; i < strs.length; i++){
             tmpstr += strs[i].replace(obj.r_input.val(),"") + "\n";
          }
          obj.t_text.val(tmpstr);
       },
       // 去除空行
      "del_empty_line": function(){
          let obj = this.field(["t_text","r_text"]);

          let strs = obj.r_text.val().replace(/\\r\\n/g, "\n").replace(/\\r/g, "\n").split("\n"), tmpstr = '';
          for(let i = 0; i < strs.length; i++){
            if( strs[i].length > 0 ) tmpstr += strs[i] + "\n";
          }
          obj.t_text.val(tmpstr);
      },
      // 去掉包含指定内容的行
      "del_text_line": function(){
          let obj = this.field(["t_text","r_text","r_input"]);

          let strs = obj.r_text.val().replace(/\\r\\n/g, "\n").replace(/\\r/g, "\n").split("\n"), tmpstr = '';
          for(let i = 0; i < strs.length; i++){
            if( -1 == strs[i].indexOf(obj.r_input.val()) ) tmpstr += strs[i] + "\n";
          }
          obj.t_text.val(tmpstr);
      },
      // 保留行包含指定内容的行
      "stay_text_line": function(){
          let obj = this.field(["t_text","r_text","r_input"]);

          let strs = obj.r_text.val().replace(/\\r\\n/g, "\n").replace(/\\r/g, "\n").split("\n");
          let tmpstr = '';
          for(let i = 0; i < strs.length; i++){
            if( strs[i].indexOf(obj.r_input.val()) > -1 ) tmpstr += strs[i] + "\n";
          }
          obj.t_text.val(tmpstr);
      },
      // 替换内容
      "replace_text": function(){
          let obj = this.field(["t_text","r_text","r_input","t_input"]);
          obj.t_text.val( obj.r_text.val.replace(new RegExp(obj.r_input.val(),"gm"), obj.t_input.val()) );
      },
      // 添加指定内容到行首
      "add_text_on_start": function(){
          let obj = this.field(["t_text","r_text","r_input"]);
          let strs = obj.r_text.val().replace(/\\r\\n/g, "\n").replace(/\\r/g, "\n").split("\n"), tmpstr = '';
          for(let i = 0; i < strs.length; i++){
            if( strs[i].length > 0 ) tmpstr += obj.r_input.val() + strs[i] + "\n";
          }
          obj.t_text.val(tmpstr);
      },
      // 添加指定内容到行尾
      "add_text_on_end": function(){
          let obj = this.field(["t_text","r_text","r_input"]);

          let strs = obj.r_text.val().replace(/\\r\\n/g, "\n").replace(/\\r/g, "\n").split("\n"), tmpstr = '';
          for(let i = 0; i < strs.length; i++){
            if( strs[i].length > 0 ) tmpstr += strs[i] + obj.r_input.val() + "\n";
          }
          obj.t_text.val(tmpstr);
      },
      // 去掉中文字符
      "del_ch_word": function(){
          let obj = this.field(["t_text","r_text"]);

          let strs = obj.r_text.val(), tmpstr = '';
          for(let i = 0; i < strs.length; i++){
            if( strs.charCodeAt(i) > 0 && strs.charCodeAt(i) < 256 ) tmpstr += strs.charAt(i);
          }
          obj.t_text.val(tmpstr);
      },
      // 去掉英文字母
      "del_en_word": function(){
          let obj = this.field(["t_text","r_text"]);

          let strs = obj.r_text.val(), tmpstr = '';
          for(let i = 0; i < strs.length; i++){
            if( strs.charCodeAt(i) < 65 || strs.charCodeAt(i) > 90 ){
              if(strs.charCodeAt(i) < 97 || strs.charCodeAt(i) > 122) tmpstr += strs.charAt(i);
            }
          }
          obj.t_text.val(tmpstr);
      },
      // 去掉数字
      "del_number": function(){
          let obj = this.field(["t_text","r_text"]);

          let strs = obj.r_text.val(), tmpstr = "";
          for(let i = 0; i < strs.length; i++){
            if( strs.charCodeAt(i) < 48 || strs.charCodeAt(i) > 57 ) tmpstr += strs.charAt(i);
          }
          obj.t_text.val(tmpstr);
      },
      // 去掉html标记
      "del_dom": function(){
          let obj = this.field(["t_text","r_text"]);
          let strs = obj.r_text.val();
          obj.t_text.val(strs.replace(/<[^>]*>/g,''));
      }
    },
    //JSON格式化
    "json_style":{
       "style": function(json){
            if (typeof json != 'string') json = JSON.stringify(json, undefined, 2);

            json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                  var cls = 'number';
                  if (/^"/.test(match)) {
                      if (/:$/.test(match)) {
                          cls = 'key';
                      } else {
                          cls = 'string';
                      }
                  } else if (/true|false/.test(match)) {
                      cls = 'boolean';
                  } else if (/null/.test(match)) {
                      cls = 'null';
                  }
                  return '<span class="' + cls + '">' + match + '</span>';
            });
       },
       "go": function(){
          let dom = Home_Tools.o(".json_style");
          let txt = Apps.field(dom[0], "txt");
          Home_Tools.show(dom);

          txt.off("click");
          txt.click(function(){
            if(!$(this).hasClass('active')){ $(this).addClass('active'); this.readOnly=false; }
          });

          txt.off("dblclick");
          txt.dblclick(function(){
            $(this).removeClass('active');
            this.readOnly=true;

            let p = $('<pre><a onclick="$(this).parent().remove();">x</a></pre>');
            let view = $(this).parent().find(".json_info").eq(0);
            let val = this.value.replace(/\n|\r/g,"")
                      .replace(/\{"/g,'{\n   "')
                      .replace(/\"}/g,'"\n}')
                      .replace(/","/g,'",\n   "');
            p.append(Home_Tools.json_style.style(val));
            view.append(p);

          });
       }
    },
    //查询ip地址信息
    "get_ip_info":function(o){
          let dom = Home_Tools.o(".get_ip_info");
          let ip = Apps.field(dom[0], "ip");
          ip.off("keydown");
          ip.keydown(function(e){
              if(13 === e.keyCode) Home_Tools.get_ip_info(1);
          });
          if('undefined' == typeof(o)){ Home_Tools.show(dom); return; }
          let txt = dom.find(".ip_info").eq(0);
          let info = '';

          if(ip.val()){
              info = Public_Object.get_data(SYS_CONF.ip_check_api.replace('{$ip}',ip.val()));
          }

          let p = $('<pre></pre>');
          p.html(Home_Tools.json_style.style(info));
          txt.append(p);
          ip.val('');
     },
     //图像识别
     "ocr":{
        "show": function(){
          let dom = Home_Tools.o(".ocr_word");
          let file = dom.find("input[type=file]").eq(0);
          file.off("change");
          file.change(function(){
             let obj = $(this).parent().parent().find("> textarea.word_info");
             if( Fs.existsSync(this.files[0].path) ){
                 //let qr_bast64 = Enc.file_toBase64(this.files[0].path);
                 let d = Baidu_Api.word(this.files[0].path);
                 let w = Public_Object.get_data(d.url, d.data,"POST");
                 if(w.words_result){
                    let msg = "";
                    $.each(w.words_result, function(i, v){ msg += v.words + "\n"; });
                    obj.val(msg);
                 } else { console.log(JSON.stringify(w)); }

             } else {
                 Public_Object.tip("文件不存在!");
             }
          });
          Home_Tools.show(dom);
        },
        "go": function(o){
          $(o).parent().find('input').click();
        }
     }
};


//列表点击样式
function list_click(){
    $(this).parent().find("li").removeClass('sel');
    $(this).addClass('sel');
    let raw = $(this).data('raw');

    let v_penal = $(".main > .center").find("> div:visible");

    let def_item = function(){
      Gui_Object.switch('tabs');
      Host_Object.list(raw.id);
    };

    if(v_penal.length){
       switch(v_penal.attr("id")){
         case "tabs": Host_Object.list(raw.id); break;
         case "accounts": Accounts_Object.list(raw.id); break;
         //case "files": Files_Object.list(raw.id); break;
         case "home": def_item(); break;
       }
    } else {
       def_item();
    }
}


/*GUI界面切换*/
let Gui_Object = {
  "panel":function(){
    return {
      "o": $(".main"),
      "left":{
        "o": $(".main > .left"),
        "sel": $(".main > .left > ul > li.sel")
      },
      "center": $(".main > .center"),
      "top":{
        "o": $(".main > .top"),
        "sel": $(".main > .top > p:first-child > a"),
        "item": function(dom){
           return this.o.find("p:first-child > a > i.iconfont"+dom).eq(0).parent();
        }
      }
    };
  },
  "lock_pencal": function(p, tb){
     let pel = this.panel();
     $(tb ? tb : "#dg").datagrid("resize");
     item = pel.top.item(p);
     if(!item.hasClass("sel")) item.addClass("sel");

     return pel.left.sel.data('raw');
  },
  "switch": function(id){
     let pel = this.panel();
     let item = null;
     let raw = null;
     pel.center.find("> div").hide();
     pel.top.sel.removeClass("sel");
     $("#"+id).show();
     switch(id){
       case "release": //代码发布
                this.lock_pencal(".icon-terminal");
                Release_Object.init();
       break;
       case "sql_task":
               this.lock_pencal(".icon-web", "#sql_dg");
               Sql_Task_Object.init();
               Sql_Task_Object.list();
       break;
       case "logs":
               this.lock_pencal(".icon-yanjing_xianshi_o", "#logs_dg");
               Logs_Object.list();
       break;
       case "accounts":
                this.lock_pencal(".icon-shezhi", "#acc_dg");
                Accounts_Object.list();
       break;
       case "projects":  //项目列表
                raw = this.lock_pencal(".icon-quanbudingdan");
                Project_Object.list();
       break;
       case "dbs":
                this.lock_pencal(".icon-shujuku", "#dbs_dg");
                Dbs_Object.list();
       break;
     }
  }
};



//业务模块
let Index_Node = {
  /*
         //退出登陆
         "logout": function(){
               Public_Object.confirm({"content":'确定要退出后台吗?',"title":"退出登录"}, function(index){
                      get_dats(Api.user.logout,{},function(dats, err){
                           window.location.href="/";
                      });
               });
         }
         */
};


/*状态通知*/
/*
let Sys_Status_Object = {
   "db": function(o){
      if(!o.status) console.log(o.error);
      $(".main > .top #db_status").css("color",o.status ? "green" : "red");
      $(".main > .top #db_status").attr("title",o.msg);
   }
};
*/

//简洁模式
function mini_model(){
      window.open(window.location.href + "#min","","width=1020,height=800,location=no,menubar=no,scrollbars=no,status=no,titlebar=no,toolbar=no");
      window.location.href="about:blank";
      window.close();
}

//初始化
function app_init(){
      if(-1 !== window.location.href.indexOf("#min")){  $("#user_menu").find("> li#um_model").remove(); }else{$("#user_menu").find("> li#um_model").click(mini_model);}
      $("#user_menu").menu({"left":"calc(100% - 110px)","top":31});
      $("#user_menu").click(function(){ $(this).hide(); });
      $("#user_info").click( function(){ $("#user_menu").show(); });

    //首页工具初始化
    Home_Tools.init();

}

/*项目类*/
const Main_Object = {

};

const Me_Object = {
      "info": function(){
                let node = $("#myinfo");
                let obj = Apps.field("myinfo_tabs",['real_name','user_name', 'last_time']);
                let me = window.Apps.me;

                 obj.user_name.val(me.user_name);
                 obj.real_name.val(me.real_name);
                 obj.last_time.val(UnixToDateTime(me.last_time));

                let opt = Apps.dialog_opt();
                opt.title =  "个人信息";
                opt.buttons = [/*
                   {text:"修改",iconCls :'icon-ok',handler:function(){
                       let dats = {
                          "id":me.id,
                          "real_name":obj.real_name.val()
                       };

                       let api_url = window.Api.user.update;

                       get_dats(api_url, dats, function(d,err){
                               if(err){console.log(err); alert("保存出错!"); return;}
                               if(!d.status){Public_Object.alert(d.msg); return;}
                               //console.log(sql);
                               Accounts_Object.reload();
                       });

                       node.dialog('close');
                   }}, */{text:"关闭",iconCls :'icon-cancel',handler:function(){ node.dialog('close'); }}
                ];
                Apps.Dialog_Show(node, opt);
      },
      "change_pwd":function(){
            let node = $("#change_pwd");
            let obj = Apps.field("change_pwd",['password','new_password', 'confirm_password']);

            let opt = Apps.dialog_opt();
            opt.title =  "修改密码";
            opt.buttons = [
               {text:"确定",iconCls :'icon-ok',handler:function(){
                   let data = {
                      "password":obj.password.val(),
                      "new_password":obj.new_password.val()
                   };

                   if(!data.password){
                       Public_Object.alert("请输入原密码!");
                       return false;
                   } else if(data.new_password !== obj.confirm_password.val() || !data.new_password.length || !obj.confirm_password.val()){
                       Public_Object.alert("新密码不能为空，或两次新密码不一样!");
                       return false;
                   } else {
                       data.password = Crypt_hash(data.password,'md5');
                       data.new_password = Crypt_hash(data.new_password,'md5');
                       let dats = getByRsync(window.Api.user.change_pwd, data);
                       if(!dats.status){
                          Public_Object.alert("发生错误: " + dats.msg);
                          return false;
                       } else {  //刷新页面重新登陆
                          window.location.reload();
                       }
                   }

               }}, {text:"取消",iconCls :'icon-cancel',handler:function(){ node.dialog('close'); }}
            ];

            Apps.Dialog_Show(node, opt);
      },
      "logout": function(){
            Public_Object.confirm({"content":'确定要退出后台吗?',"title":"退出登录"}, function(index){
                   get_dats(Api.user.logout,{},function(dats, err){
                        window.location.href="/";
                   });
            });
      }
};

//帐号列表
let Dbs_Object = {
   "field": function(n,t){ return Apps.field("dbs_info", n, t); },
   "reload": function(){ this.list(); },
   "menu": function(e, i, r){
       e.preventDefault();//阻止浏览器自带的右键菜单弹出
       let m = $('#dbs_menu');

       let dats = $(this).datagrid("getSelections");
       if(dats.length < 1){ $(this).datagrid('selectRow',i); }

       if(m.children("div:not([class*='menu-line'])").length > 0){
          m.menu('show', {left:e.pageX, top:e.pageY, hideOnUnhover:false});
       }
   },
   "list": function(page, limit){
         let dg = $("#dbs_dg");

         let dat ={
             page: (page ? page : 0),
             limit: (limit ? limit : null)
         };
         Public_Object.search(dg, dat, {
             "api_url": window.Api.dbs.search,
             "callback":function(d){
                     let kinds = {"0":"MySQL","1":"Mssql","2":"sqlite"};
                     let projects = {};
                     window.Apps.data.project.forEach(function(v,i){
                           projects[v.id.toString()] = v.project_name;
                     });

                     d.forEach(function(v,i){
                             v.kind_name = kinds[v.kind];
                             v.project_name = projects[v.project_id];
                             v.create_date = UnixToDateTime(v.create_date);
                             v.status_val= v.status ? '<font color=green>正常</font>' : '<font color=red>已禁用</font>';
                     });
                     return d;
             }
         }, Dbs_Object.list);

   },
   "row_dbclick":function(rowIndex, rowData){ Dbs_Object.change(); },
   "change": function(act){
      let node = $("#dbs_info");
      let obj = this.field(['milieu_id','project_id', 'kind', 'host', 'port','user', 'passwd','dbname','create_date','status']);
      let kinds = [{"id":0,"kind_name":"MySQL"},{"id":1,"kind_name":"Mssql"},{"id":2,"kind_name":"sqlite"}];
      let row = null;
      $.each(obj, function(i,v){ v.val(''); });

      obj.milieu_id.find('option:not(:first-child)').remove();
      window.Apps.data.milieu.forEach(function(v,i){
             obj.milieu_id.append('<option value="'+v.id+'">'+v.milieu_name+'</option>');
      });
      obj.project_id.find('option:not(:first-child)').remove();
      window.Apps.data.project.forEach(function(v,i){
             obj.project_id.append('<option value="'+v.id+'">'+v.project_name+'</option>');
      });
      obj.kind.find('option:not(:first-child)').remove();
      kinds.forEach(function(v,i){
             obj.kind.append('<option value="'+v.id+'">'+v.kind_name+'</option>');
      });


      if(!act){
         //修改
         row = $("#dbs_dg").datagrid("getSelected");
         if(!row) return;
         Object.keys(obj).forEach(function(k){ obj[k].val(row[k]); });
         //obj.create_date.val(UnixToDateTime(row.create_date));
         obj.status[0].checked = row.status ? true : false;
      }

      let opt = Apps.dialog_opt();
      opt.title = act ? "新增帐号" : "修改帐号信息 ID: " + row.id;
      opt.buttons = [
         {text:"确认",iconCls :'icon-ok',handler:function(){
             let dats = {
                "id":act ? 0 : row.id,
                "milieu_id":obj.milieu_id.val(),
                "project_id":obj.project_id.val(),
                "kind":obj.kind.val(),
                "host":obj.host.val(),
                "port":obj.port.val(),
                "user":obj.user.val(),
                "passwd":obj.passwd.val(),
                "dbname":obj.dbname.val(),
                "status":(obj.status[0].checked ? 1 : 0)
             };

             let api_url = window.Api.dbs.add;

             if(!act){
                  if(dats.user_name) delete dats.user_name;
                  api_url = window.Api.dbs.update;
             }
             get_dats(api_url, dats, function(d,err){
                     if(err){console.log(err); alert("保存出错!"); return;}
                     if(!d.status){Public_Object.alert(d.msg); return;}
                     //console.log(sql);
                     Dbs_Object.reload();
             });

   	      	node.dialog('close');
   	    }}, {text:"取消",iconCls :'icon-cancel',handler:function(){ node.dialog('close'); }}
      ];
      Apps.Dialog_Show(node, opt);
   },
   "del": function(){
      let row = $("#dbs_dg").datagrid("getSelected");
      if(!row) return;
      Public_Object.confirm({content:'<p>您确定要删除 "'+row.id+'"</p>'}, function(){
          let ret = getByRsync(window.Api.dbs.del,{"id":row.id});
          if(!ret.status) Public_Object.alert(ret.msg);
          Dbs_Object.reload();
      });
   },
}
