(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1040:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"has-text-centered pt-6"},[r("img",{staticStyle:{width:"200px"},attrs:{src:n(326)}}),t._v(" "),r("h1",{staticClass:"title mb-3"},[t._v("Orders")]),t._v(" "),r("p",{staticClass:"mb-6"},[t._v("See here an overview of your orders")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-left mr-5 pt-2"},[e("figure",{staticClass:"image",staticStyle:{width:"80px"}},[e("img",{attrs:{src:n(629)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"has-text-centered is-size-5"},[t._v("Powered by "),n("a",{attrs:{target:"_blank",href:"https://effect.network"}},[t._v("Effect Network")])])}],o=n(9),c=(n(11),n(23),n(22),n(474),n(186),n(44),n(327)),l=n(448),f={data:function(){return{client:null}},name:"batch-results",components:{},computed:{batches:function(){return console.log("this.$store.state.batch.batches",this.$store.state.batch.batches),this.$store.state.batch.batches}},mounted:function(){this.generateClient(),this.getResults()},methods:{generateClient:function(){console.log("Creating SDK...");try{this.client=new c.EffectClient("mainnet"),console.log(this.client)}catch(t){console.error(t)}},getResults:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.batches)for(i=0;i<t.batches.length;i++)n=t.batches[i],t.getTaskResults(n);case 1:case"end":return e.stop()}}),e)})))()},resultsFinished:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.$store.dispatch("batch/setResults",t);case 1:case"end":return n.stop()}}),n)})))()},getTaskResults:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(console.log("polling in the background for results.."),a=0;a<t.leaves.length;a++)r=t.leaves[a],e.client.force.pollTaskResult(r.substring(2),e.resultsFinished);case 2:case"end":return n.stop()}}),n)})))()},setAccount:function(t,e){this.effectsdk=e,this.account=t},downloadTaskResults:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(o in n.prev=0,r=[],e.batches[t].results)r.push(e.batches[t].results[o]);return n.next=5,l(r,(function(t,e){if(t)return console.error(t);if(0===r.length)return console.error("No submissions found");var n="task_results_".concat(r[0].batch_id,".csv"),o=new Blob([e],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(o,n);else{var link=document.createElement("a");if(void 0!==link.download){var c=URL.createObjectURL(o);link.setAttribute("href",c),link.setAttribute("download",n),link.style.visibility="hidden",document.body.appendChild(link),link.click(),document.body.removeChild(link)}}}));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}},h=n(50),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-6"},[n("div",{staticClass:"container my-6"},[t._m(0),t._v(" "),t._l(t.batches,(function(e,r){return n("div",{key:e.id+"-"+e.campaign_id,staticClass:"box block"},[e&&e.campaign?n("article",{staticClass:"media"},[t._m(1,!0),t._v(" "),n("div",{staticClass:"media-content pl-2"},[n("div",{staticClass:"content"},[n("p",[n("small",[t._v("Order #"+t._s(e.id))]),t._v(" "),n("br"),t._v(" "),n("small",[t._v("Tasks: "+t._s(e.leaves.length))])])])]),t._v(" "),n("div",[n("nuxt-link",{attrs:{to:"/batch/"+e.id}},[n("button",{staticClass:"button is-primary mt-4"},[t._v("Details >")])])],1)]):t._e()])}))],2),t._v(" "),t._m(2)])}),r,!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";t.exports.isFunction=function(t){return t&&"[object Function]"==={}.toString.call(t)},t.exports.isArray=function(t){return Array.isArray(t)},t.exports.isObject=function(t){return t instanceof Object},t.exports.isString=function(t){return"string"==typeof t},t.exports.isNumber=function(t){return"number"==typeof t},t.exports.isBoolean=function(t){return"boolean"==typeof t},t.exports.isDate=function(t){return t instanceof Date}},326:function(t,e,n){t.exports=n.p+"img/Logo-wit.6876ce6.png"},348:function(t,e,n){"use strict";t.exports="\n"},355:function(t,e){},356:function(t,e){},358:function(t,e){},359:function(t,e){},362:function(t,e){},363:function(t,e){},365:function(t,e){},366:function(t,e){},368:function(t,e){},369:function(t,e){},370:function(t,e){},373:function(t,e){},374:function(t,e){},378:function(t,e){},379:function(t,e){},380:function(t,e){},381:function(t,e){},383:function(t,e){},384:function(t,e){},385:function(t,e){},386:function(t,e){},388:function(t,e){},395:function(t,e){},448:function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(449),c=n(453),l=(n(288),n(348));t.exports=function(){var t={headers:[],rename:[],headerPathString:".",rowDelimiter:",",textDelimiter:'"',arrayPathString:";",undefinedString:"",endOfLine:l||"\n",mainPathItem:null,booleanTrueString:null,booleanFalseString:null,includeHeaders:!0,fillGaps:!1,verticalOutput:!0,forceTextDelimiter:!1},e=void 0,n=void 0,f=void 0;if(3===arguments.length){var h=Array.prototype.slice.call(arguments);e=h[0],n=h[1],f=h[2]}else if(2===arguments.length){var d=void 0,v=Array.prototype.slice.call(arguments);e=v[0],"function"==typeof(d=v[1])?f=d:"object"===(void 0===d?"undefined":r(d))&&(n=d)}else{if(1!==arguments.length)return new c(new o(t));var m=Array.prototype.slice.call(arguments),y=m[0];if("object"===(void 0===y?"undefined":r(y))){var _=Object.keys(t),w=Object.keys(y),x=w.every((function(t){return _.includes(t)}));w.length>0&&x?n=y:e=y}else e=y}var k=Object.assign({},t,n),S=new o(k);return e?new Promise((function(t,n){S.parse(e,(function(e,r){return f?f(e,r):e?n(e):n?t(r):void 0}))})):new c(S)}},449:function(t,e,n){"use strict";var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=n(450),c=n(451),l=n(288),f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e||{},this._handler=new c(this._options),this._headers=this._options.headers||[],this._escape=n(452)(this._options.textDelimiter,this._options.rowDelimiter,this._options.forceTextDelimiter)}return r(t,[{key:"parse",value:function(t,e,n){return l.isArray(t)?e(null,this._parseArray(t,n)):l.isObject(t)?e(null,this._parseObject(t)):e(new Error("Unable to parse the JSON object, its not an Array or Object."))}},{key:"_checkRows",value:function(t){var e=null,n=[],r=function(col,t){return""===col||void 0===col?e[t]:col},o=!0,c=!1,l=void 0;try{for(var f,h=t[Symbol.iterator]();!(o=(f=h.next()).done);o=!0){var d=f.value,v=this._headers.length-d.length;v>0&&(d=d.concat(Array(v).join(".").split("."))),e&&this._options.fillGaps&&(d=d.map(r)),n.push(d.join(this._options.rowDelimiter)),e=d}}catch(t){c=!0,l=t}finally{try{!o&&h.return&&h.return()}finally{if(c)throw l}}return n}},{key:"_parseArray",value:function(t,e){var n=this;this._headers=this._headers||[];var r,c=[];r=function(t){var header,e,r=[],o=function(t){return r.push(t.map((function(col){return null!=col?col:""})))},l=function(){return new Array(n._headers.length).fill(null)},f={},h=l(),d=!0,v=!1,m=void 0;try{for(var y,_=t[Symbol.iterator]();!(d=(y=_.next()).done);d=!0){var element=y.value,w=(header=element.item,e=void 0,-1===(e=n._headers.indexOf(header))&&(n._headers.push(header),e=n._headers.indexOf(header)),e);null!=h[w]&&(o(h),h=l()),f[w]=f[w]||0,n._options.fillTopRow&&f[w]<r.length?(r[f[w]][w]=n._escape(element.value),f[w]+=1):(h[w]=n._escape(element.value),f[w]+=1)}}catch(t){v=!0,m=t}finally{try{!d&&_.return&&_.return()}finally{if(v)throw m}}h.length>0&&o(h),c=c.concat(n._checkRows(r))};var l=!0,f=!1,h=void 0;try{for(var d,v=t[Symbol.iterator]();!(l=(d=v.next()).done);l=!0){var m=d.value;r(n._handler.check(m,n._options.mainPathItem,m,t))}}catch(t){f=!0,h=t}finally{try{!l&&v.return&&v.return()}finally{if(f)throw h}}return!e&&n._options.includeHeaders&&c.unshift(this.headers),o(c,n._options.endOfLine)}},{key:"_parseObject",value:function(t){var e,n=this,r=[],c=[[],[]];for(var l in e=function(t){var e=t.value||0===t.value?t.value.toString():n._options.undefinedString;if(e=n._escape(e),n._options.verticalOutput){var o=[t.item,e];r.push(o.join(n._options.rowDelimiter))}else c[0].push(t.item),c[1].push(e)},t){var f="";this._options.mainPathItem&&(f=this._options.mainPathItem+this._options.headerPathString),this._handler.check(t[l],f+l,l,t).forEach(e)}return this._options.verticalOutput||(r.push(c[0].join(this._options.rowDelimiter)),r.push(c[1].join(this._options.rowDelimiter))),o(r,this._options.endOfLine)}},{key:"headers",get:function(){var t=this,e=this._headers;return this._options.rename&&this._options.rename.length>0&&(e=e.map((function(header){return t._options.rename[t._options.headers.indexOf(header)]||header}))),this._options.forceTextDelimiter&&(e=e.map((function(header){return""+t._options.textDelimiter+header+t._options.textDelimiter}))),this._options.mapHeaders&&(e=e.map(this._options.mapHeaders)),e.join(this._options.rowDelimiter)}}]),t}();t.exports=f},450:function(t,e,n){"use strict";var r=n(348),o=n(288);t.exports=function(t,e){if(!t||!o.isArray(t))throw new TypeError('Invalid params "rows" for joinRows. Must be an array of string.');return t.join(e||r||"\n")}},451:function(t,e,n){"use strict";(function(e){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var c=n(288),l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e,this._options.typeHandlers=this._options.typeHandlers||{}}return o(t,[{key:"_setHeaders",value:function(t,e){var n=this;return e?t.map((function(element){return element.item=element.item?e+n._options.headerPathString+element.item:e,element})):t}},{key:"castValue",value:function(element,t,e,n){var r=this._options.typeHandlers;for(var o in r)if(h(element,o)){element=r[o].call(r,element,e,n);break}return element}},{key:"checkComplex",value:function(element,t){if(c.isDate(element))return[{item:t,value:(this._options.handleDate||this._handleDate)(element,t)}];if(c.isArray(element)){var e=this._handleArray(element,t);return this._setHeaders(e,t)}if(c.isObject(element)){var n=this._handleObject(element);return this._setHeaders(n,t)}return[{item:t,value:""}]}},{key:"check",value:function(element,t,e,n){switch(void 0===(element=this.castValue(element,t,e,n))?"undefined":r(element)){case"string":return[{item:t,value:this._handleString(element,t)}];case"number":return[{item:t,value:this._handleNumber(element,t)}];case"boolean":return[{item:t,value:this._handleBoolean.bind(this)(element,t)}]}return this.checkComplex(element,t)}},{key:"_handleObject",value:function(t){var e=[];for(var n in t){var r=t[n],o=this.check(r,n,n,t);e=e.concat(o)}return e}},{key:"_handleArray",value:function(t){for(var e,n=[],r=0;r<t.length;++r){var element=t[r],o=this.check(element,null,r,t);if(0!==o.length){var c=o[0];c.item||void 0===e?(o.length>0&&!c.item&&void 0===e&&(e=c),n=n.concat(o)):e.value+=this._options.arrayPathString+c.value}}return n}},{key:"_handleBoolean",value:function(t){return t?this._options.booleanTrueString||"true":this._options.booleanFalseString||"false"}},{key:"_handleString",value:function(t){return t}},{key:"_handleNumber",value:function(t){return t}},{key:"_handleDate",value:function(t){return t.toLocaleDateString()}}]),t}();t.exports=l;var f="undefined"==typeof window?e:window;function h(element,t){if(element instanceof f[t])return!0;switch(void 0===element?"undefined":r(element)){case"string":return"String"===t;case"boolean":return"Boolean"===t;case"number":return"Number"===t}return!1}}).call(this,n(34))},452:function(t,e,n){"use strict";t.exports=function(t,e,n){if("string"!=typeof t)throw new TypeError('Invalid param "textDelimiter", must be a string.');if("string"!=typeof e)throw new TypeError('Invalid param "rowDelimiter", must be a string.');var r=new RegExp("\\"+t,"g"),o=t+t,c='"'===t?function(t){return t.indexOf(e)>=0||t.indexOf("\n")>=0||t.indexOf('"')>=0}:function(t){return t.indexOf(e)>=0||t.indexOf("\n")>=0};return function(e){return n&&(e=""+e),e.replace?(e=e.replace(r,o),(n||c(e))&&(e=t+e+t),e):e}}},453:function(t,e,n){"use strict";t.exports=function(t){throw new Error("jsonexport called without third argument as a callback and is required")}},629:function(t,e,n){t.exports=n.p+"img/results-logo.cd5047a.jpg"}}]);