(function(t){function e(e){for(var n,i,c=e[0],s=e[1],l=e[2],u=0,v=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"093fb7b5"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"507e":function(t,e,a){t.exports=a.p+"img/qr.08e8b8ce.png"},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("top-toolbar"),a("v-main",[a("router-view")],1),a("bottom-nav")],1)},o=[],i=a("d4ec"),c=a("262e"),s=a("2caf"),l=a("9ab4"),u=a("2fe1"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",fixed:"",dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("移民项目")]),a("v-btn",{staticStyle:{position:"absolute",right:"15px"},attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1)],1)],1)},v=[],d=a("bee2"),f=a("1b40"),b=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.showMenu=!1,t}return Object(d["a"])(a,[{key:"toggleMenu",value:function(){this.showMenu=!this.showMenu}},{key:"doNothing",value:function(){console.log(this.showMenu)}}]),a}(f["b"]);b=Object(l["a"])([f["a"]],b);var h=b,m=h,g=a("2877"),y=a("6544"),j=a.n(y),w=a("40dc"),_=a("8336"),x=a("132d"),O=a("2a7f"),V=Object(g["a"])(m,p,v,!1,null,null,null),k=V.exports;j()(V,{VAppBar:w["a"],VBtn:_["a"],VIcon:x["a"],VToolbarTitle:O["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{app:"",fixed:"",grow:"",color:"primary"},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[n("v-btn",{attrs:{value:"home",to:"/"}},[n("span",[t._v("首页")]),n("v-icon",[t._v("home")])],1),n("v-btn",{attrs:{value:"call",to:"/about"}},[n("span",[t._v("关于我们")]),n("v-icon",[t._v("people")])],1),n("v-btn",{attrs:{value:"favorites"},on:{click:function(e){t.show=!t.show}}},[n("span",[t._v("微信咨询")]),n("v-icon",[t._v("wechat")])],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v(" xxx的工作微信 ")]),n("v-img",{attrs:{src:a("507e")}})],1)],1)],1)},T=[],I=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.activeItem="top",t.show=!1,t}return a}(f["b"]);I=Object(l["a"])([f["a"]],I);var M=I,P=M,S=a("b81c"),E=a("b0af"),B=a("99d9"),A=a("169a"),$=a("adda"),N=Object(g["a"])(P,C,T,!1,null,null,null),q=N.exports;j()(N,{VBottomNavigation:S["a"],VBtn:_["a"],VCard:E["a"],VCardTitle:B["c"],VDialog:A["a"],VIcon:x["a"],VImg:$["a"]});var J=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(n["a"]);J=Object(l["a"])([Object(u["b"])({components:{TopToolbar:k,BottomNav:q}})],J);var L=J,D=L,H=a("7496"),R=a("f6c4"),z=Object(g["a"])(D,r,o,!1,null,null,null),F=z.exports;j()(z,{VApp:H["a"],VMain:R["a"]});a("d3b7"),a("3ca3"),a("ddb0");var G=a("8c4f"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-carousel",{attrs:{cycle:"",height:"200","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,n){return a("v-carousel-item",{key:n},[a("v-sheet",{attrs:{height:"100%"}},[a("v-card",{attrs:{height:"200",color:"light-blue lighten-3"}},[a("v-card-title",[t._v(" "+t._s(e.title)+" ")]),a("v-card-text",[t._v(" "+t._s(e.body)+" ")])],1)],1)],1)})),1),a("v-container",{attrs:{fluid:"",id:"button-bar"}},[a("v-card",t._l(t.icons,(function(e,n){return a("v-btn",{key:n,staticClass:"col-3",attrs:{value:e.span,height:"60",elevation:"0",large:""}},[a("v-icon",{attrs:{large:""}},[t._v(t._s(e.icon))]),a("span",[t._v(" "+t._s(e.span))])],1)})),1)],1),a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return a("v-col",{key:e.title,attrs:{cols:e.flex}},[a("v-card",[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[a("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)},Q=[],U=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.colors=["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],t.slides=[{title:"专注新斯科舍省移民",body:"哈利法克斯移民, 为出国梦想保驾护航"},{title:"哈利法克斯",body:"加拿大最适合居住的城市之一，加拿大东部海洋四省的经济中心"},{title:"中国-哈利法克斯直营",body:"无缝对接出国一条龙服务"}],t.icons=[{span:"哈利法克斯",icon:"place"},{span:"学院介绍",icon:"school"},{span:"留学移民",icon:"flight"},{span:"雇主移民",icon:"work"},{span:"抵加服务",icon:"local_shipping"},{span:"其他签证",icon:"badge"},{span:"跨境服务",icon:"exposure"},{span:"疑难杂症",icon:"help"}],t.cards=[{title:"哈利法克斯介绍",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"新斯科舍省（NS省）大学/院校介绍",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"留学移民项目",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:12},{title:"新省雇主类移民项目",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:12},{title:"新移民抵加服务",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:12},{title:"其他类型签证办理",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:12}],t}return a}(n["a"]);U=Object(l["a"])([Object(u["b"])({})],U);var W=U,X=W,Y=(a("21bb"),a("5e66")),Z=a("3e35"),tt=a("62ad"),et=a("a523"),at=a("0fd9"),nt=a("8dd9"),rt=a("2fa4"),ot=Object(g["a"])(X,K,Q,!1,null,null,null),it=ot.exports;j()(ot,{VBtn:_["a"],VCard:E["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VCarousel:Y["a"],VCarouselItem:Z["a"],VCol:tt["a"],VContainer:et["a"],VIcon:x["a"],VImg:$["a"],VRow:at["a"],VSheet:nt["a"],VSpacer:rt["a"]}),n["a"].use(G["a"]);var ct=[{path:"/",name:"Home",component:it},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],st=new G["a"]({mode:"history",base:"/",routes:ct}),lt=st,ut=a("2f62");n["a"].use(ut["a"]);var pt=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}}),vt=a("f309");a("d1e78");n["a"].use(vt["a"]);var dt=new vt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:lt,store:pt,vuetify:dt,render:function(t){return t(F)}}).$mount("#app")}});
//# sourceMappingURL=app.84983d87.js.map