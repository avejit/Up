(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1387:function(e,t,n){"use strict";n(14),n(11),n(7),n(5),n(12);var r=n(43),o=(n(6),n(1)),c=(n(25),n(29),n(2)),l=(n(21),n(56),n(34)),h=(n(213),n(37),n(65),n(61),{xs:0,sm:480,md:768,lg:992,xl:1200});function v(e,t,data){var n=Object.keys(e).find((function(t){return e[t].matches}));if(n){var r=n,o=Object.keys(h).find((function(s){return String(h[s])===n})),c="xs"===o||"sm"===o,l=!c;data.size=r,data.breakpoint=o,data.sizes=h,data.mobile=c,data.desktop=l,Array.from(t).forEach((function(e){return e({size:r,breakpoint:o,mobile:c,desktop:l,sizes:h})}))}}var d={},f=new Set,m=!1;function w(){if(!m){m=!0;var e=[h.xs,h.sm,h.md,h.lg,h.xl].map((function(e,i,t){return[e,t[i+1]]})),t={};e.forEach((function(e){var n=Object(l.a)(e,2),r=n[0],o=n[1];t[r]=window.matchMedia("(min-width: ".concat(r,"px)").concat(o?" and (max-width: ".concat(o-1,"px)"):"")),t[r].addListener((function(){return v(t,f,d)}))})),v(t,f,d)}return{mediaData:d,listeners:f}}var k=function(){return{breakpoint:null,size:null,sizes:null,mobile:null,desktop:null}},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mq",n=w(),r=n.mediaData,o=n.listeners,c=function(data){return Object.assign(e[t],data)};o.add(c),c(r),e.$on("hook:beforeDestroy",(function(){return o.delete(c)}))},O=n(177),y=!0,z=!1,E={data:function(){return{isTouch:y}},install:function(e,t){var n,r;if(t||console.error("Error installing `detect-touch-device`, `prop` name is not provided "),z)e[t]=y;else{e[t]=!0;var o=function(){document.removeEventListener("mousemove",n),document.removeEventListener("touchstart",r)};n=function(){z=!0,y=!1,e[t]=y,o()},r=function(){z=!0,y=!0,o()},document.addEventListener("mousemove",n,{passive:!0,once:!0}),document.addEventListener("touchstart",r,{passive:!0,once:!0}),e.$on("hook:beforeDestroy",o)}}},L=function(e,t){var n,r;t||console.error("Error installing `detect-kb-user`, `prop` name is not provided ");var o=function(o){n===o.clientX&&r===o.clientY||(n=o.clientX,r=o.clientY,e[t]=!1)},c=function(n){"Tab"===n.code&&(e[t]=!0)};document.addEventListener("mousemove",o,{passive:!0}),document.addEventListener("keydown",c,{passive:!0}),e.$on("hook:beforeDestroy",(function(){document.removeEventListener("mousemove",o),document.removeEventListener("keydown",c)}))},_=n(0),M=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M7 12l7-7.4L12.5 3 7 8.9 1.5 3 0 4.6z"}})])}),[],!1,null,null,null).exports,C=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M7 12.6a5.6 5.6 0 0 1-4.64-2.47C2.94 8.78 4.49 7.88 7 7.88s4.06.9 4.64 2.25A5.6 5.6 0 0 1 7 12.6M7 1.45a2.76 2.76 0 1 1 0 5.53 2.76 2.76 0 0 1 0-5.53M7 0a7 7 0 1 0 .02 14.02A7 7 0 0 0 7 0"}})])}),[],!1,null,null,null).exports,j=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{d:"M0 4h14V2H0v2zm0 4h14V6H0v2zm0 4h14v-2H0v2z"}})])}),[],!1,null,null,null).exports,D=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M8 8v1H6V2h2v6zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 0a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7z"}})])}),[],!1,null,null,null).exports,H=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{d:"M8.838 3.155l.008.004v-.001a3.157 3.157 0 1 0-5.398 2.225A8.244 8.244 0 0 0 .311 7.191 1.1 1.1 0 0 0 0 7.963v3.74h4.68v-1.264H1.263V8.033C2.53 6.92 4.03 6.328 5.609 6.318l.016.001c.019-.001.037-.009.058-.009a3.155 3.155 0 0 0 3.155-3.155zm-3.15 1.897a1.897 1.897 0 0 1-1.894-1.895 1.896 1.896 0 0 1 3.79 0 1.899 1.899 0 0 1-1.896 1.895zm4.211.749a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm2.529 4.851h-1.774v1.775H9.149v-1.775H7.372V9.148h1.777V7.373h1.504v1.776h1.774v1.503h.001z"}})])}),[],!1,null,null,null).exports,$=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{d:"M12.91 11.05h-.51v-5.7a5.71 5.71 0 0 0-1.65-3.97A5.42 5.42 0 0 0 9.29.4c-.07-.02-.12-.06-.2-.09L8.9.25a4.54 4.54 0 0 0-.84-.2A10.07 10.07 0 0 0 6.96 0c-.42 0-.8.03-1.04.06a4.53 4.53 0 0 0-.88.2l-.02.02c-.17.05-.33.14-.5.22L4.1.73l-.2.14a5.5 5.5 0 0 0-.5.4 6.03 6.03 0 0 0-.39.38l-.18.2A5.56 5.56 0 0 0 1.6 5.34v5.71h-.51a.59.59 0 0 0-.58.59v.61c0 .32.26.59.58.59H5.3a1.82 1.82 0 0 0 3.4 0h4.21c.32 0 .58-.27.58-.59v-.61a.58.58 0 0 0-.58-.59zm-2.17 0H3.25v-5.7c0-1.86 1.25-3.43 2.9-3.65a8.73 8.73 0 0 1 1.7 0c1.82.2 2.9 2.02 2.9 3.64v5.72z"}})])}),[],!1,null,null,null).exports,V=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 14",width:"12",height:"14",role:"img"}},[t("path",{attrs:{d:"M4.98 11.96h2.04V14H4.98zm5.17-9.69a3.5 3.5 0 0 0-.9-1.2A4.29 4.29 0 0 0 7.85.3 5.57 5.57 0 0 0 6.02 0C5.39 0 4.8.1 4.28.29a3.93 3.93 0 0 0-2.32 2.08A4.52 4.52 0 0 0 1.55 4l-.01.07h1.93v-.06C3.75 2.32 4.59 1.5 6.04 1.5a2.43 2.43 0 0 1 2.3 1.43 2.34 2.34 0 0 1 .1 1.65 1.72 1.72 0 0 1-.31.54c-.14.17-.3.34-.5.52a15.73 15.73 0 0 0-.71.65c-.4.39-.7.7-.93.97a3.43 3.43 0 0 0-.85 1.88c-.06.37-.09.4-.09.99v.07h1.78v-.07c0-.47.01-.4.04-.67.03-.29.1-.53.2-.75.1-.21.27-.43.48-.64.21-.21.51-.48.91-.82.39-.34.7-.65.97-.93a4.52 4.52 0 0 0 .62-.83 3.16 3.16 0 0 0 .41-1.72 3.54 3.54 0 0 0-.31-1.5z"}})])}),[],!1,null,null,null).exports,S=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{d:"M6 12H2V2h4V0H0v14h6v-2z"}}),this._v(" "),t("path",{attrs:{d:"M14 7L9.4 1.5 7.9 2.8 10.6 6H3v2h7.6l-2.7 3.2 1.5 1.3L14 7z"}})])}),[],!1,null,null,null).exports,A=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{d:"M13.65 12L10.4 8.75A5.64 5.64 0 0 0 5.66 0a5.67 5.67 0 1 0 3.1 10.4L12 13.66a1.15 1.15 0 0 0 1.64 0 1.16 1.16 0 0 0 0-1.65zM5.66 9.55a3.89 3.89 0 1 1 .01-7.78 3.89 3.89 0 0 1 0 7.78z"}})])}),[],!1,null,null,null).exports,B=Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M7 9.45A2.49 2.49 0 0 1 4.48 7 2.49 2.49 0 0 1 7 4.55c1.39 0 2.52 1.1 2.52 2.45A2.49 2.49 0 0 1 7 9.45zm5.35-1.76a5.24 5.24 0 0 0 0-1.38l1.52-1.15c.13-.1.17-.3.08-.45L12.51 2.3c-.08-.16-.28-.21-.44-.16l-1.79.7a5.27 5.27 0 0 0-1.21-.68L8.79.29A.35.35 0 0 0 8.44 0H5.56a.35.35 0 0 0-.35.3l-.27 1.85c-.44.17-.85.41-1.22.68l-1.8-.7a.36.36 0 0 0-.43.16L.05 4.71c-.1.16-.05.34.09.45l1.52 1.15a5.32 5.32 0 0 0 0 1.38L.14 8.84c-.14.1-.18.3-.09.45l1.44 2.42c.09.16.28.21.44.16l1.79-.7c.37.28.78.5 1.22.68l.27 1.86c.02.16.17.29.35.29h2.88c.18 0 .33-.13.35-.3l.28-1.85c.44-.17.84-.41 1.21-.68l1.8.7c.16.06.35 0 .43-.16l1.44-2.42a.35.35 0 0 0-.08-.45L12.35 7.7z"}})])}),[],!1,null,null,null).exports,P=(n(1455),{}),U={name:"UpSNavIcon",components:{inviteCoworker:H,notification:$,question:V,arrowExpand:M,search:A,avatar:C,remove:S,settings:B,exclamationCircle:D,viewAsInformative:j,loading:Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 45 45",width:"45",height:"45",role:"img"}},[t("circle",{attrs:{cx:"22",cy:"22",r:"20",fill:"none","stroke-width":"2","stroke-miterlimit":"10","stroke-dasharray":"1,200","stroke-linecap":"round"}})])}),[],!1,null,"33612542",null).exports,directContracts:Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14px",height:"14px",viewBox:"-1 0 14 14",role:"img"}},[t("path",{attrs:{d:"M12.661,6.79L-0.067,0.072C-0.071,0.07-0.075,0.069-0.079,0.067c-0.013-0.006-0.026-0.008-0.039-0.014 c-0.052-0.022-0.105-0.037-0.16-0.044C-0.299,0.006-0.319,0.005-0.34,0.004c-0.051-0.001-0.101,0.003-0.15,0.014 C-0.51,0.021-0.529,0.022-0.547,0.028C-0.61,0.047-0.67,0.072-0.725,0.111C-0.728,0.113-0.73,0.115-0.733,0.118 C-0.735,0.12-0.74,0.12-0.743,0.122C-0.755,0.13-0.76,0.144-0.771,0.152C-0.813,0.187-0.849,0.226-0.88,0.27 c-0.013,0.019-0.025,0.038-0.036,0.057c-0.024,0.044-0.043,0.091-0.056,0.14C-0.978,0.485-0.984,0.501-0.988,0.52 C-1,0.583-1.003,0.646-0.995,0.711l0.002,0.019c0,0.001,0,0.003,0,0.003l1.548,12.704c0.024,0.208,0.152,0.391,0.338,0.487 c0.093,0.048,0.192,0.071,0.293,0.071c0.104,0,0.208-0.025,0.302-0.075l4.022-2.163l2.069,2.054 c0.123,0.121,0.284,0.185,0.449,0.185c0.082,0,0.165-0.016,0.244-0.049c0.236-0.099,0.392-0.331,0.392-0.587v-3.298l4.001-2.149 C12.873,7.802,13.001,7.585,13,7.351C13,7.115,12.869,6.9,12.661,6.79z M0.644,3.643l4.102,7.083l-3.04,1.633L0.644,3.643z M7.392,11.831l-1.258-1.248L3.038,5.237l4.354,4.694V11.831z M8.16,8.889L2.643,2.941l8.368,4.417L8.16,8.889z"}})])}),[],!1,null,null,null).exports,closeCircle:Object(_.a)(P,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14","aria-hidden":"true",role:"img"}},[t("path",{attrs:{d:"M11.207 9.793l-1.414 1.414L7 8.414l-2.793 2.793-1.414-1.414L5.586 7 2.793 4.207l1.414-1.414L7 5.586l2.793-2.793 1.414 1.414L8.414 7l2.793 2.793zM7 0a7 7 0 100 14A7 7 0 007 0z"}})])}),[],!1,null,null,null).exports,project:Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{d:"M11.667 1.273h-2.8C8.6.509 7.867 0 7 0S5.4.51 5.133 1.273h-2.8C1.6 1.273 1 1.845 1 2.545v10.182c0 .7.6 1.273 1.333 1.273h9.334C12.4 14 13 13.427 13 12.727V2.545c0-.7-.6-1.272-1.333-1.272zM7 1.273c.4 0 .667.254.667.636S7.4 2.545 7 2.545s-.667-.254-.667-.636.267-.636.667-.636zM3 12V3h1v1.824h6V3h1v9H3z"}}),this._v(" "),t("rect",{attrs:{width:"6",height:"1",x:"4",y:"6"}}),this._v(" "),t("rect",{attrs:{width:"6",height:"1",x:"4",y:"8"}}),this._v(" "),t("rect",{attrs:{width:"6",height:"1",x:"4",y:"10"}})])}),[],!1,null,null,null).exports,briefcaseHire:Object(_.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",role:"img"}},[t("path",{attrs:{d:"M13.51 3a.5.5 0 01.491.51v8.98c0 .282-.22.51-.498.51H.499a.504.504 0 01-.498-.51V3.51c0-.282.215-.51.49-.51H4V1.45s.067-.451.407-.449c1.748.006 3.496.007 5.245-.001.34-.002.348.45.348.45V3h3.51zM5 3h4V2H5v1zm4.253 2L6.067 9.357l-1.63-1.21L3.5 9.265l2.899 2.152 4.101-5.61L9.253 5z"}})])}),[],!1,null,null,null).exports},props:{name:{type:String,required:!0},size:{type:String,default:""}}},I=(n(1457),Object(_.a)(U,(function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"up-s-nav-icon",attrs:{"icon-name":this.name,size:this.size,"aria-hidden":"true"}},[t(this.name,{tag:"Component"})],1)}),[],!1,null,null,null).exports);function T(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function K(e,t){return function(n){return Math.max(e,Math.min(n,t))}}var N,J,X={name:"UpSNavMenu",components:Object(c.a)({},I.name,I),directives:{"on-click-outside":{bind:function(e,t,n){J=function(){var e,t;e=function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t),document.removeEventListener("touchcancel",e)},t=function(t){N(t),e()},document.addEventListener("touchmove",e),document.addEventListener("touchcancel",e),document.addEventListener("touchend",t)},N=function(r){r.stopPropagation();var o=n.context[t.value];"function"==typeof o?e.contains(r.target)||o(r):console.error("on-click-outside directive error: must provide a handler function")},document.addEventListener("click",N),document.addEventListener("touchstart",J)},unbind:function(){document.removeEventListener("click",N),document.removeEventListener("touchstart",J)}}},props:{tracker:{type:Object,required:!0},labelHref:{type:String,default:"#"},ariaLabelledby:{type:String,default:""},dropdownClass:{type:String,default:""},dropdownSubClass:{type:String,default:""},caretClass:{type:String,default:""},align:{type:String,default:""},openOnHover:{type:Boolean,default:!1},eventLabel:{type:String,default:""},eventData:{type:Object,default:function(){return{}}},hoverEventData:{type:Object,default:function(){return{}}}},data:function(){return{isKbUser:void 0,isTouchDevice:E.isTouch,mq:k(),isOpen:!1}},computed:{isMobileView:function(){return["xs","sm","md"].includes(this.mq.breakpoint)},haveMenuItems:function(){return this.menuItems().length>0},dropdownClasses:function(){return R(R({},this.dropdownClass.split(" ").reduce((function(e,t){return e[t]=!0,e}),{})),{},Object(c.a)({open:this.isOpen},"align-".concat(this.align),!!this.align))}},watch:{isOpen:function(e){e&&this.$emit("up-s-nav-menu-open",this._uid)}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(e),E.install(e,"isTouchDevice"),L(e,"isKbUser");case 3:case"end":return t.stop()}}),t)})))()},methods:{menuItems:function(){return Object(r.a)(this.$refs["nav-dropdown-menu"].querySelectorAll("a:not(.loading), button"))},shouldOpenOnHover:function(){return this.openOnHover&&!this.isTouchDevice},onMediaChange:function(e){e.cancelBubble=!0},onClickOutside:function(e){"click"===e.type&&(this.isOpen=!1)},onMouseOut:function(){this.isMobileView||this.shouldOpenOnHover()&&(this.isOpen=!1)},close:function(){this.isOpen=!1},onClick:function(e){!this.isMobileView&&this.shouldOpenOnHover()||(e.preventDefault(),this.isOpen=!this.isOpen),!this.eventLabel||this.isMobileView&&this.openOnHover||O.a.eventData(this.tracker)("topnavbar",this.eventLabel,"click",this.eventData)},openDropdown:function(e){!this.eventLabel||this.isMobileView&&this.openOnHover||O.a.eventData(this.tracker)("topnavbar",this.eventLabel,"click",this.eventData),this.isMobileView||(this.shouldOpenOnHover()||this.isKbUser)&&(this.isOpen=!this.isOpen,e.preventDefault())},onMouseOver:function(){this.isMobileView||(this.isOpen||this.onMouseOverMenuLabel(),this.shouldOpenOnHover()&&(this.isOpen=!0))},onMouseOverMenuLabel:function(){this.haveMenuItems&&this.hoverEventData&&this.shouldOpenOnHover()&&O.a.eventData(this.tracker)("topnavbar","hover_menu_item","impression",this.hoverEventData)},arrowDown:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.isOpen){n.next=7;break}if(t.openDropdown(e),!t.isOpen){n.next=6;break}return n.next=5,t.$nextTick();case 5:t.menuItems()[0].focus();case 6:return n.abrupt("return");case 7:r=t.menuItems(),o=r.indexOf(document.activeElement),c=K(0,r.length-1)(o+1),r[c].focus(),e.preventDefault(),e.stopPropagation();case 13:case"end":return n.stop()}}),n)})))()},keyEnter:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.isOpen){n.next=6;break}if(t.openDropdown(e),!t.isOpen){n.next=6;break}return n.next=5,t.$nextTick();case 5:t.menuItems()[0].focus();case 6:case"end":return n.stop()}}),n)})))()},arrowUp:function(e){if(this.isKbUser&&this.isOpen){var t=this.menuItems(),n=t.indexOf(document.activeElement);t[K(0,t.length-1)(n-1)].focus(),e.preventDefault(),e.stopPropagation()}},keyHome:function(e){this.isKbUser&&this.isOpen&&(this.menuItems()[0].focus(),e.preventDefault(),e.stopPropagation())},keyEnd:function(e){if(this.isKbUser&&this.isOpen){var t=this.menuItems();t[t.length-1].focus(),e.preventDefault(),e.stopPropagation()}},esc:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isKbUser){t.next=2;break}return t.abrupt("return");case 2:if(e.isOpen){t.next=4;break}return t.abrupt("return");case 4:return e.close(),t.next=7,e.$nextTick();case 7:e.$refs["nav-dropdown-link"].focus();case 8:case"end":return t.stop()}}),t)})))()}}},Y=Object(_.a)(X,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside",value:"onClickOutside",expression:"'onClickOutside'"}],ref:"nav-link",class:e.dropdownClasses,attrs:{"data-cy":"menu"},on:{mouseover:e.onMouseOver,mouseleave:e.onMouseOut,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.esc(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.arrowDown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.arrowUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"home",void 0,t.key,void 0)?null:e.keyHome(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"end",void 0,t.key,void 0)?null:e.keyEnd(t)}]}},[n("a",{ref:"nav-dropdown-link",staticClass:"nav-item",attrs:{target:"_self",href:e.labelHref,"aria-expanded":e.isOpen?"true":"false","aria-labelledby":e.ariaLabelledby,"data-cy":"menu-trigger"},on:{click:e.onClick,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.keyEnter(t)}}},[e._t("label"),e._v(" "),n("up-s-nav-icon",{class:"nav-caret nav-d-lg-none "+(e.isOpen?"nav-caret-open":"")+" "+e.caretClass,attrs:{name:"arrow-expand"}})],2),e._v(" "),n("ul",{ref:"nav-dropdown-menu",class:"nav-dropdown-menu "+e.dropdownSubClass,attrs:{"data-cy":"dropdown-menu"}},[e._t("default")],2)])}),[],!1,null,null,null);t.a=Y.exports},1455:function(e,t,n){"use strict";var r=n(968);n.n(r).a},1456:function(e,t,n){(t=n(9)(!1)).push([e.i,"@-webkit-keyframes dash-color-data-v-33612542{0%{stroke:#008329;stroke-dasharray:1,200;stroke-dashoffset:0}40%{stroke:#a4dd83;stroke-dasharray:89,200;stroke-dashoffset:-35px}60%,to{stroke:#37a000;stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash-color-data-v-33612542{0%{stroke:#008329;stroke-dasharray:1,200;stroke-dashoffset:0}40%{stroke:#a4dd83;stroke-dasharray:89,200;stroke-dashoffset:-35px}60%,to{stroke:#37a000;stroke-dasharray:89,200;stroke-dashoffset:-124px}}circle[data-v-33612542]{-webkit-animation:dash-color-data-v-33612542 1.5s ease-in-out infinite;animation:dash-color-data-v-33612542 1.5s ease-in-out infinite}",""]),e.exports=t},1457:function(e,t,n){"use strict";var r=n(969);n.n(r).a},1458:function(e,t,n){(t=n(9)(!1)).push([e.i,".up-s-nav-icon,.up-s-nav-icon[size=default]{--size:var(--default-size)}.up-s-nav-icon[size=xs]{--size:var(--xs-size)}.up-s-nav-icon[size=sm]{--size:var(--sm-size)}.up-s-nav-icon[size=md]{--size:var(--md-size)}.up-s-nav-icon[size=lg]{--size:var(--lg-size)}.up-s-nav-icon{display:inline-block;--default-size:14px;--xs-size:10px;--sm-size:12px;--md-size:20px;--lg-size:40px;width:var(--size);height:var(--size)}.up-s-nav-icon svg{fill:currentColor;-o-object-fit:contain;object-fit:contain;width:100%;height:100%}",""]),e.exports=t},968:function(e,t,n){var content=n(1456);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("00e63894",content,!0,{sourceMap:!1})},969:function(e,t,n){var content=n(1458);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("721e560e",content,!0,{sourceMap:!1})}}]);