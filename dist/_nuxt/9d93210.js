(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{346:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("0e6ca180",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n(346)},451:function(t,e,n){var r=n(104)(!1);r.push([t.i,"\ntable, td {\n    vertical-align: middle !important;\n    text-align: left !important;\n}\n",""]),t.exports=r},456:function(t,e,n){"use strict";n.r(e);var r=n(9);n(11),n(74),n(36),n(31),n(37),n(23),n(24),n(26),n(35),n(38),n(22),n(44);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l=n(2).a.extend({props:["account","effectsdk","newcampaign"],data:function(){return{clientId:"d6dd66c7d97349e1bf930eac35962903",clientSecret:"da865f7bf82c4e6098836c5124800e52",token:null,currentTrack:null,tracks:[],campaignId:198,makeBatchSuccess:null}},components:{},methods:{searchTrack:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===t.target.value){n.next=8;break}return n.next=3,e.getToken();case 3:return e.token=n.sent,n.next=6,e.getTracks(e.token,t.target.value);case 6:r=n.sent,e.currentTrack=r[0];case 8:case"end":return n.stop()}}),n)})))()},getToken:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(t.clientId+":"+t.clientSecret)},body:"grant_type=client_credentials"});case 2:return n=e.sent,e.next=5,n.json();case 5:return data=e.sent,e.abrupt("return",data.access_token);case 7:case"end":return e.stop()}}),e)})))()},getTracks:function(t,filter){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 1,t.next=3,fetch("https://api.spotify.com/v1/search?type=track&limit=".concat(1,"&q=").concat(filter),{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 3:return n=t.sent,t.next=6,n.json();case 6:return data=t.sent,t.abrupt("return",data.tracks.items);case 8:case"end":return t.stop()}}),t)})))()},addToBatch:function(){this.tracks.push(this.currentTrack),this.currentTrack=null},makeBatch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,track,content,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=t.newcampaign?t.newcampaign.id:t.campaignId,console.log("Campaign 🚒:\n".concat(n)),r=[],o=c(t.tracks);try{for(o.s();!(l=o.n()).done;)track=l.value,r.push({song_embed:"https://open.spotify.com/embed/track/".concat(track.id,"?utm_source=generator")})}catch(t){o.e(t)}finally{o.f()}return content={tasks:r},"1",e.next=10,t.effectsdk.force.createBatch(parseInt(n),content,"1");case 10:return(f=e.sent).campaignId=parseInt(n),e.next=14,t.effectsdk.force.getCampaign(n);case 14:m=e.sent,f.campaign=m,console.log("add this to store",f),t.$store.dispatch("batch/addBatch",f),t.makeBatchSuccess=f.transaction,e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),alert("Something went wrong. See console for error message"),console.error(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})))()}}}),f=(n(450),n(50)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.newcampaign?n("div",[t._v("\n    Using the campaign: "),n("a",{attrs:{target:"_blank",href:"https://testnet.effect.network/campaigns/"+t.newcampaign.id}},[t._v("https://testnet.effect.network/campaigns/"+t._s(t.newcampaign.id))])]):t._e(),t._v(" "),n("h1",{staticClass:"title mt-5",staticStyle:{"text-align":"center"}},[t._v("\n      Create your batch of songs\n    ")]),t._v(" "),n("form",{attrs:{action:"#",onsubmit:"return false"}},[n("div",{staticClass:"field"},[n("input",{staticClass:"input",attrs:{autocomplete:"off",type:"text",name:"song",placeholder:"Search for a song.."},on:{change:t.searchTrack}})])]),t._v(" "),n("div",[t.currentTrack?n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"mt-5"},[n("img",{staticClass:"mb-2",staticStyle:{margin:"0 auto",width:"200px"},attrs:{src:t.currentTrack.album.images[1].url,alt:""}})]),t._v(" "),n("div",[n("label",{staticClass:"form-label",attrs:{for:"Genre"}},[t._v(t._s(t.currentTrack.name))])]),t._v(" "),n("div",{staticClass:"mb-2"},[n("label",{staticClass:"form-label",attrs:{for:"artist"}},[t._v("by "+t._s(t.currentTrack.artists[0].name))])]),t._v(" "),n("button",{staticClass:"button is-primary is-outlined mt-3",on:{click:function(e){return t.addToBatch()}}},[t._v("Add Song to Batch")])]):t._e()]),t._v(" "),t.tracks&&t.tracks.length>0?n("div",{staticClass:"mt-6 is-flex is-flex-direction-column"},[n("h2",{staticClass:"is-4 mb-3 title"},[t._v("Batch")]),t._v(" "),n("table",{staticClass:"table",staticStyle:{width:"100%"}},[t._m(0),t._v(" "),n("tbody",{attrs:{id:"table-body"}},t._l(t.tracks,(function(track){return n("tr",{key:track.name},[n("td",[n("img",{staticStyle:{width:"40px"},attrs:{src:track.album.images[2].url}})]),t._v(" "),n("td",[t._v(t._s(track.name))]),t._v(" "),n("td",[t._v(t._s(track.artists[0].name))])])})),0)]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"button is-primary mt-2 is-align-self-flex-end",attrs:{type:"submit"},on:{click:t.makeBatch}},[t._v("Submit Batch")]),t._v(" "),t.makeBatchSuccess?n("div",{staticClass:"notification is-primary is-light mt-5",staticStyle:{"font-size":"23px"}},[t._v("\n      Transaction succesfuly submitted! Transaction ID: "+t._s(t.makeBatchSuccess.transaction_id)+"\n    ")]):t._e(),t._v(" "),t.makeBatchSuccess?n("a",{attrs:{href:"/results"}},[n("button",{staticClass:"button is-primary is-outlined"},[t._v("Results page")])]):t._e()]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Title")]),t._v(" "),n("th",[t._v("Artist")])])])}],!1,null,null,null);e.default=component.exports}}]);