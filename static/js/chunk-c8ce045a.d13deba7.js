(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8ce045a"],{"1d94":function(e,t,o){},2017:function(e,t,o){"use strict";o("cafe")},"395c":function(e,t,o){"use strict";o("1d94")},"9ed6":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("InnoHCM")])]),o("el-form-item",{attrs:{prop:"UserID"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.UserID,callback:function(t){e.$set(e.loginForm,"UserID",t)},expression:"loginForm.UserID"}})],1),o("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"Password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.Password,callback:function(t){e.$set(e.loginForm,"Password",t)},expression:"loginForm.Password"}}),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")])],1)],1)},r=[],n=(o("d3b7"),o("b64b"),o("61f7")),i=o("5c96"),a={name:"Login",data:function(){var e=function(e,t,o){Object(n["d"])(t)?o():o(new Error("Please enter the correct user name"))},t=function(e,t,o){t.length<6?o(new Error("The password can not be less than 6 digits")):o()};return{loginForm:{UserID:"chingkuang.chin",Password:"Cck63196314",Type:"SAMV4"},loginRules:{UserID:[{required:!0,trigger:"blur",validator:e}],Password:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",capsTooltip:!1,loading:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.UserID?this.$refs.username.focus():""===this.loginForm.Password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1,Object(i["Message"])({message:"Login Error",type:"error",duration:5e3})}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,o){return"redirect"!==o&&(t[o]=e[o]),t}),{})}}},c=a,l=(o("2017"),o("395c"),o("2877")),u=Object(l["a"])(c,s,r,!1,null,"6a4f5de7",null);t["default"]=u.exports},cafe:function(e,t,o){}}]);