module.exports=function(e){var t={},r={1:0};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.e=function(t){if(0!==r[t]){var n=require("./"+({0:"home",2:"list"}[t]||t)+".js"),o=n.modules,i=n.ids;for(var u in o)e[u]=o[u];for(var s=0;s<i.length;s++)r[i[s]]=0}return Promise.all([])},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/page/static/",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@loadable/component")},function(e,t){e.exports=require("@babel/runtime-corejs2/helpers/extends")},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(2),o=r.n(n);const i=[{path:"/page/home",exact:!0,component:o()({resolved:{},chunkName:()=>"home",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(0).then(r.bind(null,5)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 5}})},{path:"/page/list",component:o()({resolved:{},chunkName:()=>"list",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(2).then(r.bind(null,6)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 6}})}]},,,function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),i=r(0),u=r.n(i),s=r(1),c=r(4);t.default=function(){return u.a.createElement(s.Switch,null,c.a.map((e,t)=>u.a.createElement(s.Route,o()({key:`${t}_${e.path}`},e))))}}]);