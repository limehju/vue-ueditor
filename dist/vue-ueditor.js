!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,n){var i=n(1)(n(3),n(2),null,null);t.exports=i.exports},function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,o=t.default);var c="function"==typeof o?o.options:o;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),i){var s=c.computed||(c.computed={});Object.keys(i).forEach(function(t){var e=i[t];s[t]=function(){return e}})}return{esModule:r,exports:o,options:c}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("script",{attrs:{id:t.randomId,name:"content",type:"text/plain"}})},staticRenderFns:[]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"VueUEditor",props:{ueditorPath:{type:String,default:"/static/ueditor1_4_3_3/"},ueditorConfig:{type:Object,default:function(){return{}}}},data:function(){return{randomId:"editor_"+1e17*Math.random(),instance:null,scriptTagStatus:0}},created:function(){void 0!==window.UE?(this.scriptTagStatus=2,this.initEditor()):this.insertScriptTag()},beforeDestroy:function(){null!==this.instance&&this.instance.destroy&&this.instance.destroy()},methods:{insertScriptTag:function(){var t=this,e=document.getElementById("editorScriptTag"),n=document.getElementById("configScriptTag");if(null===e){n=document.createElement("script"),n.type="text/javascript",n.src=this.ueditorPath+"ueditor.config.js",n.id="configScriptTag",e=document.createElement("script"),e.type="text/javascript",e.src=this.ueditorPath+"ueditor.all.js",e.id="editorScriptTag";var i=document.getElementsByTagName("head")[0];i.appendChild(n),i.appendChild(e)}n.loaded?this.scriptTagStatus++:n.addEventListener("load",function(){t.scriptTagStatus++,n.loaded=!0,t.initEditor()}),e.loaded?this.scriptTagStatus++:e.addEventListener("load",function(){t.scriptTagStatus++,e.loaded=!0,t.initEditor()}),this.initEditor()},initEditor:function(){var t=this;2===this.scriptTagStatus&&null===this.instance&&this.$nextTick(function(){t.instance=window.UE.getEditor(t.randomId,t.ueditorConfig),t.instance.addListener("ready",function(){t.$emit("ready",t.instance)})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n.n(i);e.default=r.a}]);