(function(t){function e(e){for(var i,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],a[r]&&d.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4913:function(t,e,n){"use strict";var i=n("fbd4"),a=n.n(i);a.a},"49f8":function(t,e,n){var i={"./en.json":"edd4","./fr.json":"f693"};function a(t){var e=o(t);return n(e)}function o(t){var e=i[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="49f8"},"4cf8":function(t,e,n){},"4d76":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var i=n("2b0e"),a=n("ce5b"),o=n.n(a);n("bf40");i["default"].use(o.a,{iconfont:"md"});var r=n("8758"),s=n.n(r);i["default"].use(s.a);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{toolbar:""}},[n("myToolbar"),n("v-content",[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-container",{attrs:{"pa-0":"",fluid:"","fill-height":"","align-content-center":"","align-center":""}},[n("router-view")],1)],1)],1)],1)},c=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("myContentDrawer")],1),n("v-toolbar",{staticClass:"indigo",attrs:{"clipped-left":"",app:""}},[n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"white--text",on:{click:t.goHome}},[t._v(t._s(t.$t("title")))])],1)],1)},u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{staticClass:"indigo",attrs:{flat:""}}),n("v-list",{attrs:{dense:""}},[t._l(t.items,function(e,i){return[e.divider?n("v-divider",{key:i,attrs:{dark:""}}):n("v-list-tile",{key:i,attrs:{to:e.action}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)]})],2)],1)},v=[],h={name:"drawer",data:function(){return{items:[{icon:"home",text:this.$t("drawer.home"),action:"/"},{icon:"vibration",text:this.$t("drawer.vibration"),action:"vibration"},{icon:"camera",text:this.$t("drawer.camera"),action:"camera"},{icon:"flash_on",text:this.$t("drawer.flash"),action:"flash"},{icon:"gps_fixed",text:this.$t("drawer.localisation"),action:"localisation"},{icon:"nfc",text:this.$t("drawer.nfc"),action:"nfc"}]}}},p=h,g=n("2877"),m=Object(g["a"])(p,d,v,!1,null,null,null);m.options.__file="Drawer.vue";var b=m.exports,_={name:"myToolbar",components:{myContentDrawer:b},data:function(){return{drawer:!1}},mounted:function(){document.addEventListener("toggleDrawer",this.toggleDrawer)},beforeDestroy:function(){document.removeEventListener("toggleDrawer",this.toggleDrawer)},methods:{toggleDrawer:function(){this.drawer=!this.drawer},goHome:function(){window.location.hash="/"}}},w=_,x=Object(g["a"])(w,f,u,!1,null,null,null);x.options.__file="MyToolbar.vue";var y=x.exports,T={name:"app",components:{myToolbar:y}},$=T,S=Object(g["a"])($,l,c,!1,null,null,null);S.options.__file="App.vue";var O=S.exports,E=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-xs-center":""}},[n("div",{staticClass:"home"},[n("img",{staticClass:"logo",attrs:{src:"vuejs.png"}}),n("img",{staticClass:"logo",attrs:{src:"cordova_256.png"}}),n("h4",[t._v(t._s(t.$t("title")))]),n("v-btn",{on:{click:t.openMenu}},[t._v(t._s(t.$t("showSample")))])],1)])},C=[],L={name:"home",methods:{openMenu:function(){document.dispatchEvent(new CustomEvent("toggleDrawer",{}))}}},P=L,D=(n("4913"),Object(g["a"])(P,k,C,!1,null,"0fc6d185",null));D.options.__file="Home.vue";var j=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-xs-center":""}},[n("v-btn",{on:{click:t.doVibrate}},[t._v(t._s(t.$t("startVibration")))])],1)},N=[],V={name:"vibration",methods:{doVibrate:function(){navigator.vibrate?navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]):this.$vuetifyMessageDialog.open("Attention","[cordova-plugin-vibration] Is required to use this function","Ok","red")}}},I=V,H=Object(g["a"])(I,A,N,!1,null,null,null);H.options.__file="Vibration.vue";var M=H.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-xs-center":""}},[n("v-btn",{on:{click:t.toggle}},[t._v(t._s(t.btnTitle))])],1)},U=[],J={name:"flash",mounted:function(){this.setBtnTitle()},beforeDestroy:function(){this.switchOff()},data:function(){return{btnTitle:""}},methods:{pluginInstalled:function(){return"undefined"!==typeof plugins&&"undefined"!==typeof window.plugins.flashlight},toggle:function(){this.pluginInstalled()&&window.plugins.flashlight.toggle(this.setBtnTitle)},switchOff:function(){this.pluginInstalled()&&window.plugins.flashlight.switchOff()},setBtnTitle:function(){this.pluginInstalled()?window.plugins.flashlight.isSwitchedOn()?this.btnTitle=this.$t("flashlight.stop"):this.btnTitle=this.$t("flashlight.start"):this.btnTitle=this.$t("flashlight.notAvailable")}}},B=J,q=(n("beeb"),Object(g["a"])(B,F,U,!1,null,"7634d716",null));q.options.__file="Flash.vue";var z=q.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-xs-center":""}},[""!==t.imagePath?n("img",{attrs:{src:t.imagePath}}):t._e(),n("v-btn",{on:{click:t.takePicture}},[t._v(t._s(t.$t("takePhoto")))])],1)},G=[],Y=function(t,e){navigator.notification?navigator.notification.alert(t,function(){},e,"Ok"):alert(t)},K={name:"camera",data:function(){return{imagePath:""}},methods:{takePicture:function(){navigator.camera?navigator.camera.getPicture(this.setPicture,this.error,{}):this.error()},setPicture:function(t){this.imagePath=t},error:function(){Y(this.$t("error"))}}},Q=K,W=(n("b1d0"),Object(g["a"])(Q,R,G,!1,null,"13952f26",null));W.options.__file="Camera.vue";var X=W.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-xs-center":""}},[t.compatible?n("span",[t._v("\n      "+t._s(t.$t("nfcText.waitingTag"))+"\n      "),n("br"),n("v-dialog",{attrs:{scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(t.$t("nfcText.history")))]),n("v-card",[n("v-card-title",[t._v(t._s(t.$t("nfcText.history")))]),n("v-divider"),n("v-card-text",{staticStyle:{height:"300px"}},[t.items.length>0?n("v-list",t._l(t.items,function(e){return n("v-list-tile",{key:e},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e)}})],1)],1)})):n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"text-xs-center",domProps:{textContent:t._s(t.$t("nfcText.noHistory"))}})],1)],1)],1)],1)],1)],1)],1):t.nfc_disabled?n("v-btn",{on:{click:t.showSettings}},[t._v(t._s(t.$t("nfcText.showSettings")))]):n("span",[t._v(t._s(t.$t("nfcText.notAvailable")))])],1)},tt=[],et={name:"nfc",data:function(){return{compatible:!0,nfc_disabled:!1,dialog:!1,items:JSON.parse(localStorage.getItem("scanHistory")||"[]")}},watch:{items:function(t){localStorage.setItem("scanHistory",JSON.stringify(t))}},mounted:function(){this.registerTagEvent()},beforeDestroy:function(){this.unregisterTagEvent()},methods:{registerTagEvent:function(){document.removeEventListener("resume",this.registerTagEvent,!1),"undefined"!==typeof nfc?nfc.addTagDiscoveredListener(this.displayTagId,this.success,this.error):this.error()},unregisterTagEvent:function(){"undefined"!==typeof nfc&&nfc.removeTagDiscoveredListener(this.displayTagId)},displayTagId:function(t){var e=t.tag,n=nfc.bytesToHexString(e.id);this.items.push(n),Y(this.$t("nfcText.tagSerial")+" : "+n)},error:function(t){"NFC_DISABLED"===t?(this.compatible=!1,this.nfc_disabled=!0):(this.nfc_disabled=!1,this.compatible=!1)},success:function(){this.compatible=!0,this.nfc_disabled=!1},showSettings:function(){nfc.showSettings(),document.addEventListener("resume",this.registerTagEvent,!1)}}},nt=et,it=Object(g["a"])(nt,Z,tt,!1,null,null,null);it.options.__file="Nfc.vue";var at=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("div",{attrs:{id:"map"}}),t.isLoading?n("loader"):t._e()],1)},rt=[],st=(n("6cc5"),n("e11e")),lt=n.n(st),ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:"true",persistent:"","max-width":"200"}},[n("v-card",[n("v-card-text",{staticClass:"text-xs-center"},[n("v-progress-circular",{staticClass:"primary--text",attrs:{size:70,indeterminate:""}})],1)],1)],1)},ft=[],ut={name:"loading"},dt=ut,vt=Object(g["a"])(dt,ct,ft,!1,null,null,null);vt.options.__file="Loader.vue";var ht=vt.exports;delete lt.a.Icon.Default.prototype._getIconUrl,lt.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var pt={name:"localisation",components:{Loader:ht},data:function(){return{isLoading:!0}},mounted:function(){this.map=lt.a.map("map").setView([47.47121,-.55198],5),lt.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map),this.getUserLocation()},beforeDestroy:function(){void 0!==this.map&&this.map.remove()},methods:{stopLoading:function(){this.isLoading=!1},getUserLocation:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var n=[e.coords.latitude,e.coords.longitude];lt.a.marker(n).addTo(t.map),t.map.setView(n,18),t.stopLoading()},function(){t.stopLoading(),Y(t.$t("positionNotAvailable",t.$t("localisation")))}):(Y(this.$t("positionNotAvailable",this.$t("localisation"))),this.stopLoading())}}},gt=pt,mt=(n("a54c"),Object(g["a"])(gt,ot,rt,!1,null,"3c312abe",null));mt.options.__file="Localisation.vue";var bt=mt.exports;i["default"].use(E["a"]);var _t=new E["a"]({routes:[{path:"/",name:"Home",component:j},{path:"/vibration",name:"Vibration",component:M},{path:"/flash",name:"Flash",component:z},{path:"/camera",name:"Camera",component:X},{path:"/nfc",name:"Nfc",component:at},{path:"/localisation",name:"Localisation",component:bt}]}),wt=n("a925");function xt(){var t=n("49f8"),e={};return t.keys().forEach(function(n){var i=n.match(/([a-z0-9]+)\./i);if(i&&i.length>1){var a=i[1];e[a]=t(n)}}),e}i["default"].use(wt["a"]);var yt=new wt["a"]({locale:"fr",fallbackLocale:"en",messages:xt()});n("d5e8"),n("d1e7");i["default"].config.productionTip=!1;var Tt=function(){new i["default"]({router:_t,i18n:yt,render:function(t){return t(O)}}).$mount("#app")};document.addEventListener("deviceready",function(){console.log("Ready, Render the App"),Tt()});var $t="undefined"!==typeof window.cordova;$t||document.dispatchEvent(new CustomEvent("deviceready",{}))},a54c:function(t,e,n){"use strict";var i=n("fea9"),a=n.n(i);a.a},b1d0:function(t,e,n){"use strict";var i=n("4d76"),a=n.n(i);a.a},beeb:function(t,e,n){"use strict";var i=n("4cf8"),a=n.n(i);a.a},edd4:function(t){t.exports={title:"VueJS Cordova Sample",showSample:"Show code samples",drawer:{home:"Home",vibration:"Vibration",camera:"Camera",flash:"Flash",localisation:"Localisation",nfc:"Nfc"},see_on_github:"See On Github",getPosition:"Obtaining Position",positionNotAvailable:"Can’t get your position",startVibration:"Start vibration",flashlight:{start:"Start flashlight",stop:"Stop flashlight",notAvailable:"Plugin not installed"},nfcText:{waitingTag:"Scan a tag…",tagSerial:"Serial number",notAvailable:"Your mobile is not compatible.",showSettings:"Enable NFC",history:"History",noHistory:"Empty"},takePhoto:"Take a picture",error:"Not available"}},f693:function(t){t.exports={title:"Exemples VueJS + Cordova",showSample:"Afficher les examples",drawer:{home:"Accueil",vibration:"Vibreur",camera:"Camera",flash:"Flash",localisation:"Localisation",nfc:"Nfc"},see_on_github:"Voir sur Github",getPosition:"Localisation en cours",positionNotAvailable:"Localisation impossible",startVibration:"Démarrer la vibration",flashlight:{start:"Allumer la lampe torche",stop:"Éteindre la lampe torche",notAvailable:"Plugin Cordova non installé"},nfcText:{waitingTag:"En attente d’un tag…",tagSerial:"Numéro de série",notAvailable:"Votre mobile est incompatible.",showSettings:"Activer le NFC",history:"Historique",noHistory:"Aucun historique"},takePhoto:"Prendre une photo",error:"Non disponible"}},fbd4:function(t,e,n){},fea9:function(t,e,n){}});
//# sourceMappingURL=app.beb490cb.js.map