(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc452400"],{1934:function(e,t,n){(function(o){function r(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function a(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var r=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))}),e.splice(a,0,o)}}function s(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}}function c(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof o&&"env"in o&&(e=Object({NODE_ENV:"production",BASE_URL:""}).DEBUG),e}function u(){try{return window.localStorage}catch(e){}}t=e.exports=n("6d1a"),t.log=s,t.formatArgs=a,t.save=i,t.load=c,t.useColors=r,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(c())}).call(this,n("f28c"))},4173:function(e,t){var n=1e3,o=60*n,r=60*o,a=24*r,s=365.25*a;function i(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var i=parseFloat(t[1]),c=(t[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return i*s;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*o;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}function c(e){return e>=a?Math.round(e/a)+"d":e>=r?Math.round(e/r)+"h":e>=o?Math.round(e/o)+"m":e>=n?Math.round(e/n)+"s":e+"ms"}function u(e){return l(e,a,"day")||l(e,r,"hour")||l(e,o,"minute")||l(e,n,"second")||e+" ms"}function l(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return i(e);if("number"===n&&!1===isNaN(e))return t.long?u(e):c(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"6d1a":function(e,t,n){var o;function r(e){var n,o=0;for(n in e)o=(o<<5)-o+e.charCodeAt(n),o|=0;return t.colors[Math.abs(o)%t.colors.length]}function a(e){function n(){if(n.enabled){var e=n,r=+new Date,a=r-(o||r);e.diff=a,e.prev=o,e.curr=r,o=r;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!==typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,o){if("%%"===n)return n;c++;var r=t.formatters[o];if("function"===typeof r){var a=s[c];n=r.call(e,a),s.splice(c,1),c--}return n}),t.formatArgs.call(e,s);var u=n.log||t.log||console.log.bind(console);u.apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"===typeof t.init&&t.init(n),n}function s(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),o=n.length,r=0;r<o;r++)n[r]&&(e=n[r].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function c(e){var n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=a.debug=a["default"]=a,t.coerce=u,t.disable=i,t.enable=s,t.enabled=c,t.humanize=n("4173"),t.names=[],t.skips=[],t.formatters={}},"6fad":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{overflow:"hidden"}},[e._m(0),o("div",{staticClass:"info"},[o("img",{staticClass:"youjiantou",attrs:{src:n("f0ba")}}),o("div",{staticClass:"left"},[e._v(e._s(e.meetaoNum))]),o("div",{staticClass:"left2"},[e._v("当前蜜桃")]),o("div",{staticClass:"right"},[e._v(e._s(e.pointNum))]),o("div",{staticClass:"right2"},[e._v("可兑积分")])]),e.canExchange?o("button",{directives:[{name:"dbclick",rawName:"v-dbclick"}],staticClass:"exchange",on:{click:e.exchange}},[e._v("立即兑换")]):o("button",{staticClass:"exchange state2"},[e._v("您已将蜜桃兑换为积分")]),e._m(1)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg"},[n("span",[e._v("蜜桃1：5兑换积分")]),n("span",[e._v("积分全平台通用")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro"},[n("p",{staticClass:"title"},[e._v("兑换说明")]),n("p",[e._v("1、由于姿美汇业务调整，原种蜜桃功能停止，所有蜜桃需兑换成积分，1蜜桃等于5积分。")]),n("p",[e._v("2、积分可通过“我的-任务中心-积分明细”查询。")]),n("p",[e._v("3、积分可直接在“我的-任务中心-积分商城”免费兑换商品，或在抽奖轮盘免费抽奖。")]),n("p",[e._v("4、每个用户仅限使用1个账号参与。同一姿美汇账号、手机号、移动设备、银行卡、支付账号、身份证、以及其他相同信息均视为同一账号。")]),n("p",[e._v("5、活动过程中，若出现因网络攻击、黑客攻击、数据泄露等原因导致活动无法继续，姿美汇有权提前终止活动。")]),n("p",[e._v("6、若用户出现违规、作弊等恶劣行为，将清空其积分。本活动最终解释权归姿美汇所有。")]),n("p",[e._v("7、如有任何问题，请与姿美汇客服联系。")])])}],a=n("daa4"),s={props:{},data:function(){return{meetaoNum:0,canExchange:!1}},components:{},computed:{pointNum:function(){return 5*this.meetaoNum}},created:function(){this.initUI()},methods:{exchange:function(){var e=this,t={points:this.meetaoNum,channelType:this.$route.query.channelType||"H5_SHOP_DHCJ",globalUid:this.$route.query.globalUid||"386093980229713923",relationBizId:this.$route.query.relationBizId||"U302112",simt_token:this.$route.query.simt_token,userId:this.$route.query.userId};a["a"].exchangeMeetao(t).then(function(t){0===t.tag?(e.$dialog.alert({title:"积分兑换成功！"}),e.meetaoNum=0,e.canExchange=!1):e.$dialog.alert({title:"兑换失败！"+t.errMsg})})},initUI:function(){var e=this,t={};this.$route.query.userId&&(t.userId=this.$route.query.userId),this.$route.query.simt_token&&(t.simt_token=this.$route.query.simt_token),a["a"].getMeetaoNum(t).then(function(t){0===t.tag?(e.meetaoNum=t.data.result,e.canExchange=e.meetaoNum>0):console.log("getMeetaoNum error")})}}},i=s,c=(n("f5b5"),n("2877")),u=Object(c["a"])(i,o,r,!1,null,"f514b9e6",null);t["default"]=u.exports},cdc4:function(e,t,n){},daa4:function(e,t,n){"use strict";var o=n("d225"),r=n("b0b4"),a=n("c7a1"),s=n("f2e8"),i=n.n(s);function c(e,t,n){var o=window.localStorage.getItem("userId"),r=window.localStorage.getItem("simt_token");return!t.userId&&o&&(t.userId=o),!t.simt_token&&r&&(t.simt_token=r),e+=(e.indexOf("?")>0?"&":"?")+u(t),new Promise(function(t,n){var o=o||{};o.timeout=5e3,i()(e,o,function(e,n){e?console.log(e):2===n.tag||t(n)})})}function u(e){var t="";for(var n in e){var o=void 0==e[n]?"":e[n];t+="&".concat(n,"=").concat(encodeURIComponent(o))}return t?t.substring(1):""}var l=n("db49"),d=function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"getMeetaoNum",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=l["b"]+"fx/user/query/meetao/numer.jsonp";return c(t,e)}},{key:"exchangeMeetao",value:function(e){var t=l["h"]+"psm/api/points/exchange/peach/addPoints";return Object(a["c"])(t,e)}}]),e}();t["a"]=new d},f0ba:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAwBAMAAAA4DS95AAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlZWVlZWVmZmbG665CAAAADnRSTlMA5SwbC2289JnSWEKrhN7LgJcAAAGfSURBVEjHrde/S0JRFAdw6b3NPRvkEZRLEESjU9joluDk4hDSYNDS+MAhoR+Lm0G5RODQEJXg0uAQUmNDZE0uPt5y/oZuDV2/3Bt87+u5yedwzjt4z3nXzPv57nLG+vH6ND3nuvf2yIUJTTmJTzaskdkxTTmR7oO93Jimdijx6ZY1skrTdV0ie+v+gKZNlfTgxdp6iSa/UBfJX0EITzppINMnqEdT2o9SU0mh9SRkqedOpRuVFGYhCa2NRA53IMSdvH4gEdRLQkWVdFaBE85T6o+i+oN6PEHSS5x7dyq3ROJPqOdO3vA7KbRO04pOehxI/Ar1WPrQE7XeMOqRdDG38lR/s1sIISnCrzFEsiRzC6IhsgTPzNKiTvmmhhJ2O01HOmVPJA9Hiqa7399qEsoU33fO5D/2jHeMM5VboXG0XckfmkNGEwwSHmyeiBGjqWgOuwvp3dLEtmlKaTf+f0tDygpEONP2T0o41e5UMF+UNMEVAdt2p0EaV5z2n9cYr0pTB1LC1hrRBPc3+GT3adoLoRr8C6DprNNctUd6NZa+AHB/8w86w9PeAAAAAElFTkSuQmCC"},f2e8:function(e,t,n){var o=n("1934")("jsonp");e.exports=s;var r=0;function a(){}function s(e,t,n){"function"==typeof t&&(n=t,t={}),t||(t={});var s,i,c=t.prefix||"__jp",u=t.name||c+r++,l=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;function p(){s.parentNode&&s.parentNode.removeChild(s),window[u]=a,i&&clearTimeout(i)}function g(){window[u]&&p()}return d&&(i=setTimeout(function(){p(),n&&n(new Error("Timeout"))},d)),window[u]=function(e){o("jsonp got",e),p(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u),e=e.replace("?&","?"),o('jsonp req "%s"',e),s=document.createElement("script"),s.src=e,f.parentNode.insertBefore(s,f),g}},f5b5:function(e,t,n){"use strict";var o=n("cdc4"),r=n.n(o);r.a}}]);