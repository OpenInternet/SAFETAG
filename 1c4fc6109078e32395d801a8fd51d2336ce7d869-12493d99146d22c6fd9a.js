(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"69XP":function(t,e,n){(function(t,n){var r="[object Arguments]",o="[object Map]",i="[object Object]",a="[object Set]",c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/,l=/^\./,f=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,d=/\\(\\)?/g,s=/^\[object .+?Constructor\]$/,b=/^(?:0|[1-9]\d*)$/,p={};p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p[r]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object Boolean]"]=p["[object DataView]"]=p["[object Date]"]=p["[object Error]"]=p["[object Function]"]=p[o]=p["[object Number]"]=p[i]=p["[object RegExp]"]=p[a]=p["[object String]"]=p["[object WeakMap]"]=!1;var g="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,m=g||h||Function("return this")(),y=e&&!e.nodeType&&e,_=y&&"object"==typeof n&&n&&!n.nodeType&&n,j=_&&_.exports===y&&g.process,v=function(){try{return j&&j.binding("util")}catch(t){}}(),O=v&&v.isTypedArray;function w(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function k(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function I(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function x(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var C,A,N,S=Array.prototype,D=Function.prototype,q=Object.prototype,z=m["__core-js_shared__"],E=(C=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",U=D.toString,P=q.hasOwnProperty,T=q.toString,F=RegExp("^"+U.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$=m.Symbol,H=m.Uint8Array,L=q.propertyIsEnumerable,M=S.splice,W=(A=Object.keys,N=Object,function(t){return A(N(t))}),B=Ot(m,"DataView"),V=Ot(m,"Map"),Y=Ot(m,"Promise"),R=Ot(m,"Set"),G=Ot(m,"WeakMap"),J=Ot(Object,"create"),K=St(B),X=St(V),Z=St(Y),Q=St(R),tt=St(G),et=$?$.prototype:void 0,nt=et?et.valueOf:void 0,rt=et?et.toString:void 0;function ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function at(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ct(t){var e=-1,n=t?t.length:0;for(this.__data__=new at;++e<n;)this.add(t[e])}function ut(t){this.__data__=new it(t)}function lt(t,e){var n=Et(t)||zt(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!P.call(t,i)||o&&("length"==i||kt(i,r))||n.push(i);return n}function ft(t,e){for(var n=t.length;n--;)if(qt(t[n][0],e))return n;return-1}ot.prototype.clear=function(){this.__data__=J?J(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(J){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return P.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:P.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,n=ft(e,t);return!(n<0)&&(n==e.length-1?e.pop():M.call(e,n,1),!0)},it.prototype.get=function(t){var e=this.__data__,n=ft(e,t);return n<0?void 0:e[n][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var n=this.__data__,r=ft(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(V||it),string:new ot}},at.prototype.delete=function(t){return vt(this,t).delete(t)},at.prototype.get=function(t){return vt(this,t).get(t)},at.prototype.has=function(t){return vt(this,t).has(t)},at.prototype.set=function(t,e){return vt(this,t).set(t,e),this},ct.prototype.add=ct.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},ct.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.clear=function(){this.__data__=new it},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var n=this.__data__;if(n instanceof it){var r=n.__data__;if(!V||r.length<199)return r.push([t,e]),this;n=this.__data__=new at(r)}return n.set(t,e),this};var dt,st=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var c=i[dt?a:++r];if(!1===e(o[c],c,o))break}return t};function bt(t,e){for(var n=0,r=(e=It(e,t)?[e]:_t(e)).length;null!=t&&n<r;)t=t[Nt(e[n++])];return n&&n==r?t:void 0}function pt(t,e){return null!=t&&e in Object(t)}function gt(t,e,n,c,u){return t===e||(null==t||null==e||!Ft(t)&&!$t(e)?t!=t&&e!=e:function(t,e,n,c,u,l){var f=Et(t),d=Et(e),s="[object Array]",b="[object Array]";f||(s=(s=wt(t))==r?i:s);d||(b=(b=wt(e))==r?i:b);var p=s==i&&!k(t),g=b==i&&!k(e),h=s==b;if(h&&!p)return l||(l=new ut),f||Lt(t)?jt(t,e,n,c,u,l):function(t,e,n,r,i,c,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!r(new H(t),new H(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case o:var l=I;case a:var f=2&c;if(l||(l=x),t.size!=e.size&&!f)return!1;var d=u.get(t);if(d)return d==e;c|=1,u.set(t,e);var s=jt(l(t),l(e),r,i,c,u);return u.delete(t),s;case"[object Symbol]":if(nt)return nt.call(t)==nt.call(e)}return!1}(t,e,s,n,c,u,l);if(!(2&u)){var m=p&&P.call(t,"__wrapped__"),y=g&&P.call(e,"__wrapped__");if(m||y){var _=m?t.value():t,j=y?e.value():e;return l||(l=new ut),n(_,j,c,u,l)}}if(!h)return!1;return l||(l=new ut),function(t,e,n,r,o,i){var a=2&o,c=Mt(t),u=c.length,l=Mt(e).length;if(u!=l&&!a)return!1;var f=u;for(;f--;){var d=c[f];if(!(a?d in e:P.call(e,d)))return!1}var s=i.get(t);if(s&&i.get(e))return s==e;var b=!0;i.set(t,e),i.set(e,t);var p=a;for(;++f<u;){d=c[f];var g=t[d],h=e[d];if(r)var m=a?r(h,g,d,e,t,i):r(g,h,d,t,e,i);if(!(void 0===m?g===h||n(g,h,r,o,i):m)){b=!1;break}p||(p="constructor"==d)}if(b&&!p){var y=t.constructor,_=e.constructor;y==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof _&&_ instanceof _||(b=!1)}return i.delete(t),i.delete(e),b}(t,e,n,c,u,l)}(t,e,gt,n,c,u))}function ht(t){return!(!Ft(t)||function(t){return!!E&&E in t}(t))&&(Pt(t)||k(t)?F:s).test(St(t))}function mt(t){return"function"==typeof t?t:null==t?Wt:"object"==typeof t?Et(t)?function(t,e){if(It(t)&&xt(e))return Ct(Nt(t),e);return function(n){var r=function(t,e,n){var r=null==t?void 0:bt(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?function(t,e){return null!=t&&function(t,e,n){e=It(e,t)?[e]:_t(e);var r,o=-1,i=e.length;for(;++o<i;){var a=Nt(e[o]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}if(r)return r;return!!(i=t?t.length:0)&&Tt(i)&&kt(a,i)&&(Et(t)||zt(t))}(t,e,pt)}(n,t):gt(e,r,void 0,3)}}(t[0],t[1]):function(t){var e=function(t){var e=Mt(t),n=e.length;for(;n--;){var r=e[n],o=t[r];e[n]=[r,o,xt(o)]}return e}(t);if(1==e.length&&e[0][2])return Ct(e[0][0],e[0][1]);return function(n){return n===t||function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var c=n[o];if(a&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<i;){var u=(c=n[o])[0],l=t[u],f=c[1];if(a&&c[2]){if(void 0===l&&!(u in t))return!1}else{var d=new ut;if(r)var s=r(l,f,u,t,e,d);if(!(void 0===s?gt(f,l,r,3,d):s))return!1}}return!0}(n,t,e)}}(t):It(e=t)?(n=Nt(e),function(t){return null==t?void 0:t[n]}):function(t){return function(e){return bt(e,t)}}(e);var e,n}function yt(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||q,e!==r)return W(t);var e,n,r,o=[];for(var i in Object(t))P.call(t,i)&&"constructor"!=i&&o.push(i);return o}function _t(t){return Et(t)?t:At(t)}function jt(t,e,n,r,o,i){var a=2&o,c=t.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var f=-1,d=!0,s=1&o?new ct:void 0;for(i.set(t,e),i.set(e,t);++f<c;){var b=t[f],p=e[f];if(r)var g=a?r(p,b,f,e,t,i):r(b,p,f,t,e,i);if(void 0!==g){if(g)continue;d=!1;break}if(s){if(!w(e,(function(t,e){if(!s.has(e)&&(b===t||n(b,t,r,o,i)))return s.add(e)}))){d=!1;break}}else if(b!==p&&!n(b,p,r,o,i)){d=!1;break}}return i.delete(t),i.delete(e),d}function vt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Ot(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(n)?n:void 0}var wt=function(t){return T.call(t)};function kt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||b.test(t))&&t>-1&&t%1==0&&t<e}function It(t,e){if(Et(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ht(t))||(u.test(t)||!c.test(t)||null!=e&&t in Object(e))}function xt(t){return t==t&&!Ft(t)}function Ct(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(B&&"[object DataView]"!=wt(new B(new ArrayBuffer(1)))||V&&wt(new V)!=o||Y&&"[object Promise]"!=wt(Y.resolve())||R&&wt(new R)!=a||G&&"[object WeakMap]"!=wt(new G))&&(wt=function(t){var e=T.call(t),n=e==i?t.constructor:void 0,r=n?St(n):void 0;if(r)switch(r){case K:return"[object DataView]";case X:return o;case Z:return"[object Promise]";case Q:return a;case tt:return"[object WeakMap]"}return e});var At=Dt((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(Ht(t))return rt?rt.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return l.test(t)&&n.push(""),t.replace(f,(function(t,e,r,o){n.push(r?o.replace(d,"$1"):e||t)})),n}));function Nt(t){if("string"==typeof t||Ht(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function St(t){if(null!=t){try{return U.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Dt(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(Dt.Cache||at),n}function qt(t,e){return t===e||t!=t&&e!=e}function zt(t){return function(t){return $t(t)&&Ut(t)}(t)&&P.call(t,"callee")&&(!L.call(t,"callee")||T.call(t)==r)}Dt.Cache=at;var Et=Array.isArray;function Ut(t){return null!=t&&Tt(t.length)&&!Pt(t)}function Pt(t){var e=Ft(t)?T.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function Tt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Ft(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function $t(t){return!!t&&"object"==typeof t}function Ht(t){return"symbol"==typeof t||$t(t)&&"[object Symbol]"==T.call(t)}var Lt=O?function(t){return function(e){return t(e)}}(O):function(t){return $t(t)&&Tt(t.length)&&!!p[T.call(t)]};function Mt(t){return Ut(t)?lt(t):yt(t)}function Wt(t){return t}n.exports=function(t,e){var n={};return e=mt(e),function(t,e){t&&st(t,e,Mt)}(t,(function(t,r,o){n[r]=e(t,r,o)})),n}}).call(this,n("yLpj"),n("YuTi")(t))},G1e7:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("vOnD"),o=n("nIez"),i=n("8c3r"),a=n("A8Yw"),c=r.d.dl.withConfig({displayName:"lists__Dl",componentId:"sc-16pqb8y-0"})(['margin:0;font-feature-settings:"pnum" 0;'," dt{"," margin:0 0 "," 0;}dd{margin:0 0 "," 0;","}dd + dd{margin-top:-1rem;}"],(function(t){return t.horizontal&&Object(r.c)(["display:grid;grid-template-columns:auto 1fr;gap:1rem;"])}),Object(a.c)(),Object(o.a)(Object(i.b)("layout.space"),4),Object(i.b)("layout.space"),(function(t){return t.boldDesc&&Object(r.c)(["font-weight:bold;"])}));e.b=c;var u=r.d.ul.withConfig({displayName:"lists__SquareUl",componentId:"sc-16pqb8y-1"})(["&,> ul,> ul > ul{padding-left:1rem;}li{list-style:none;text-indent:-1.8rem;margin-left:",';margin-bottom:0.25rem;&:before{content:"\\25A0";font-size:1.5rem;vertical-align:baseline;list-style-position:inherit;margin-right:',";}}li>p{&:before{content:'';}&:first-child{display:inline;text-indent:-1.8rem;}}pre{text-indent:0;}table{margin:2rem 0;font-size:0.875rem;text-align:left;thead tr{background-color:",";color:",";}tbody tr:nth-child(odd){background-color:",";}th,td{padding:0.25rem 0.5rem;border-right:2px solid white;}}"],Object(i.b)("layout.space"),Object(i.b)("layout.space"),Object(i.b)("color.primary"),Object(i.b)("color.surface"),Object(i.b)("color.mist"));r.d.dl.withConfig({displayName:"lists__TagList",componentId:"sc-16pqb8y-2"})([""])},"K+Zf":function(t,e,n){"use strict";var r=n("Wbzz"),o=n("vOnD"),i=n("8c3r"),a={forward:"after",back:"before"},c={forward:"left",back:"right"},u={forward:"\\27F6",back:"\\27F5"},l=Object(o.d)(r.a).withConfig({displayName:"more-link__MoreLink",componentId:"sc-4fj82l-0"})(['color:inherit;font-size:0.875rem;line-height:1.25rem;font-feature-settings:"pnum" 0;font-family:',";font-weight:",";text-transform:uppercase;letter-spacing:0.025rem;"," &:after{opacity:1;transform:none;left:inherit;bottom:inherit;height:inherit;background:inherit;}"],Object(i.b)("type.heading.family"),Object(i.b)("type.heading.light"),(function(t){var e=t.direction;return e&&Object(o.c)(["&:","{padding-",":0.5rem;content:'","';transition:all 0.16s cubic-bezier(.55,.085,.68,.53);}&:hover{&:","{padding-",":1rem;}}&:hover,&:active{&:","{transform:none;}}"],a[e],c[e],u[e],a[e],c[e],a[e])}));l.defaultProps={direction:"forward"},e.a=l},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},foDo:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return h}));var r=n("MUpH"),o=n("vOnD"),i=n("8c3r"),a=n("qSSW"),c=n("q6fE"),u=n("UDb3"),l=n("A8Yw");function f(){var t=Object(r.a)(["\n      grid-column: auto / span 2;\n    "]);return f=function(){return t},t}function d(){var t=Object(r.a)(["\n      grid-column: auto / span 3;\n    "]);return d=function(){return t},t}var s=function(t){var e=t.border;return"base"===e?Object(i.b)("color.base"):"primary"===e?Object(i.b)("color.primary"):"secondary"===e?Object(i.b)("color.secondary"):"white"===e?Object(i.b)("color.surface"):"inherit"},b=o.d.article.withConfig({displayName:"card__Card",componentId:"sc-1neqwum-0"})(["padding:"," ",";display:flex;flex-flow:column;color:",";background:",";position:relative;"," & >:last-child:not(:first-child){padding-top:",";}&:visited{color:",";}a,a:visited{color:",";}h1,h2,h3{margin:0;}",""],Object(c.b)(2),Object(c.b)(1.5),Object(i.b)("color.base"),(function(t){var e=t.variation;return"base"===e?Object(c.a)(.75,Object(i.b)("color.base")):"primary"===e?Object(c.a)(.5,Object(i.b)("color.primary")):"secondary"===e?Object(c.a)(.525,Object(i.b)("color.secondary")):"white"===e?Object(c.a)(Object(i.b)(.5,"color.surface")):"outline"===e?"transparent":"white"}),(function(t){return t.border&&Object(o.c)(["border:2px solid ",";"],s)}),Object(c.b)(2),Object(i.b)("color.base"),Object(i.b)("color.link"),(function(t){return t.withHover&&Object(o.c)(['&:after{position:absolute;content:"";opacity:0;width:100%;height:100%;left:0;top:0;z-index:-1;border:2px solid ',";background:none;transition:all 0.16s cubic-bezier(0.55,0.085,0.68,0.53);}&:hover{&:after{opacity:1;transform:translate(10px,10px);transition-delay:0.08s;}}"],s)}));e.d=b;var p=o.d.div.withConfig({displayName:"card__CardHeader",componentId:"sc-1neqwum-1"})(["display:flex;align-items:flex-start;img{max-height:2rem;margin-right:1rem;}h1{flex:1;}"]),g=Object(o.d)(l.b).withConfig({displayName:"card__CardHeading",componentId:"sc-1neqwum-2"})(["margin-bottom:",";position:relative;letter-spacing:0.5px;"],Object(c.b)()),h=(o.d.div.withConfig({displayName:"card__CardFooter",componentId:"sc-1neqwum-3"})(["margin-top:auto;"]),o.d.ul.withConfig({displayName:"card__CardList",componentId:"sc-1neqwum-4"})(["",";display:grid;grid-template-columns:repeat(6,1fr);grid-gap:",";","{height:100%;}li{grid-column:auto / span 6;"," ","}"],Object(u.c)(),Object(c.b)(2),b,a.a.smallUp(d()),a.a.largeUp(f())))},xtXq:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"g",(function(){return m})),n.d(e,"d",(function(){return y})),n.d(e,"e",(function(){return _})),n.d(e,"f",(function(){return j})),n.d(e,"h",(function(){return v})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return w}));var r=n("MUpH"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),c=n("UDb3"),u=n("8c3r"),l=n("q6fE"),f=n("A8Yw"),d=n("6KyZ"),s=n("foDo"),b=n("qSSW");function p(){var t=Object(r.a)(["\n      margin-bottom: 0;\n    "]);return p=function(){return t},t}function g(){var t=Object(r.a)(["\n    grid-template-columns: ",";\n    gap: ",";\n    padding-top: ",";\n  "]);return g=function(){return t},t}var h=a.d.article.withConfig({displayName:"inpage__Inpage",componentId:"sc-1dtk98a-0"})(["display:grid;height:100%;grid-template-rows:auto 1fr;"]),m=Object(a.d)(d.a).withConfig({displayName:"inpage__InpageInnerColumns",componentId:"sc-1dtk98a-1"})(["display:grid;grid-template-columns:1fr;padding-top:",";padding-bottom:",";"," & > section > ","{margin-top:1rem;display:block;}& > *{margin-bottom:2rem;","}"],Object(l.b)(1),Object(l.b)(2),b.a.mediumUp(g(),(function(t){var e=t.columnLayout;return"1:1"===e?"1fr 1fr":"2:1"===e?"2fr 1fr":"3:1"===e?"3fr 1fr":"inherit"}),Object(l.b)(4),Object(l.b)(2)),s.d,b.a.mediumUp(p())),y=a.d.header.withConfig({displayName:"inpage__InpageHeader",componentId:"sc-1dtk98a-2"})([""," padding-bottom:",";"],(function(t){return t.isHidden&&Object(a.c)(["",""],Object(c.e)())}),Object(l.b)(2)),_=Object(a.d)(d.a).withConfig({displayName:"inpage__InpageHeaderInner",componentId:"sc-1dtk98a-3"})(["display:flex;flex-flow:column nowrap;justify-content:space-between;padding:"," ",";"],Object(l.b)(4),Object(l.b)()),j=a.d.div.withConfig({displayName:"inpage__InpageHeadline",componentId:"sc-1dtk98a-4"})(["display:flex;flex-flow:column;min-width:0;> *:first-child{margin-bottom:",";}> *:last-child{margin-bottom:",";}"],Object(l.b)(),Object(l.b)()),v=(a.d.div.withConfig({displayName:"inpage__InpageToolbar",componentId:"sc-1dtk98a-5"})(["display:flex;flex-flow:row nowrap;align-items:center;padding-left:",";margin-left:auto;"],Object(l.b)(2)),a.d.div.withConfig({displayName:"inpage__InpageTitleWrapper",componentId:"sc-1dtk98a-6"})(["display:flex;flex-flow:row nowrap;min-width:0;margin-bottom:",";"],Object(l.b)(1.5)),Object(a.d)((function(t){var e=Object.assign({},t);return i.a.createElement(f.b,e)})).withConfig({displayName:"inpage__InpageTitle",componentId:"sc-1dtk98a-7"})(["margin-bottom:",";line-height:3rem;"],Object(l.b)(.5))),O=(a.d.p.withConfig({displayName:"inpage__InpageTagline",componentId:"sc-1dtk98a-8"})([""," font-size:0.875rem;line-height:1rem;"],Object(f.c)()),a.d.section.withConfig({displayName:"inpage__InpageBody",componentId:"sc-1dtk98a-9"})(["",";& ~ &{padding-top:",";padding-bottom:",";}p > img{display:block;margin:1rem auto;max-width:100%;}"],(function(t){var e=t.variation;return"dark"===e?Object(a.c)(["background-color:",";& *{color:",";border-color:",";&:after{background-color:",";}a{color:",";text-decoration:underline;}}"],Object(u.b)("color.base"),Object(u.b)("color.surface"),Object(u.b)("color.surface"),Object(u.b)("color.surface"),Object(u.b)("color.surface")):"blue"===e?Object(a.c)(["background-color:",";& *{color:",";border-color:",";&:after{background-color:",";}a{color:",";text-decoration:underline;}a:visited{color:",";}}"],Object(u.b)("color.primary"),Object(u.b)("color.surface"),Object(u.b)("color.surface"),Object(u.b)("color.surface"),Object(u.b)("color.surface"),Object(u.b)("color.surface")):Object(a.c)(["background-color:transparent;"])}),Object(l.b)(2),Object(l.b)(2))),w=Object(a.d)(d.a).withConfig({displayName:"inpage__InpageBodyInner",componentId:"sc-1dtk98a-10"})(["padding:"," ",";& ~ &{padding:",";}"],Object(l.b)(2),Object(l.b)(),Object(l.b)())}}]);
//# sourceMappingURL=1c4fc6109078e32395d801a8fd51d2336ce7d869-12493d99146d22c6fd9a.js.map