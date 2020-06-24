/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap.native/dist/bootstrap-native-v4.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap.native/dist/bootstrap-native-v4.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Native Javascript for Bootstrap 4 v2.0.27 | © dnp_theme | MIT-License
!function(t,e){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i; }}(this,function(){"use strict";var t="undefined"!=typeof global?global:this||window,e=document,i=e.documentElement,n="body",o=t.BSN={},a=o.supports=[],l="data-toggle",s="delay",r="target",c="animation",d="onmouseleave"in e?["mouseenter","mouseleave"]:["mouseover","mouseout"],u={start:"touchstart",end:"touchend",move:"touchmove"},h="getAttribute",f="setAttribute",p="parentNode",m="length",g="Transition",v="Webkit",w="style",b="push",T="active",y="left",k="top",A=/\b(top|bottom|left|right)+/,C=0,x=v+g in i[w]||g.toLowerCase()in i[w],E=v+g in i[w]?v.toLowerCase()+g+"End":g.toLowerCase()+"end",L=v+"Duration"in i[w]?v.toLowerCase()+g+"Duration":g.toLowerCase()+"Duration",N=function(t){t.focus?t.focus():t.setActive()},I=function(t,e){t.classList.add(e)},B=function(t,e){t.classList.remove(e)},D=function(t,e){return t.classList.contains(e)},H=function(t,e){return[].slice.call(t.getElementsByClassName(e))},M=function(t,i){var n=i||e;return"object"==typeof t?t:n.querySelector(t)},S=function(t,i){var n=i.charAt(0),o=i.substr(1);if("."===n){for(;t&&t!==e;t=t[p])if(null!==M(i,t[p])&&D(t,o))return t}else if("#"===n)for(;t&&t!==e;t=t[p])if(t.id===o)return t;return!1},W=function(t,e,i,n){n=n||!1,t.addEventListener(e,i,n)},P=function(t,e,i,n){n=n||!1,t.removeEventListener(e,i,n)},R=function(t,e,i,n){W(t,e,function o(a){i(a),P(t,e,o,n)},n)},O=function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});R(t,"testPassive",null,i)}catch(t){}return e}(),z=!!O&&{passive:!0},X=function(e){var i=x?t.getComputedStyle(e)[L]:0;return i=parseFloat(i),i="number"!=typeof i||isNaN(i)?0:1e3*i},j=function(t,e){var i=0;X(t)?R(t,E,function(t){!i&&e(t),i=1}):setTimeout(function(){!i&&e(),i=1},17)},U=function(t,e,i){var n=new CustomEvent(t+".bs."+e);n.relatedTarget=i,this.dispatchEvent(n)},q=function(){return{y:t.pageYOffset||i.scrollTop,x:t.pageXOffset||i.scrollLeft}},Y=function(t,o,a,l){var s,r,c,d,u,h,f={w:o.offsetWidth,h:o.offsetHeight},p=i.clientWidth||e[n].clientWidth,m=i.clientHeight||e[n].clientHeight,g=t.getBoundingClientRect(),v=l===e[n]?q():{x:l.offsetLeft+l.scrollLeft,y:l.offsetTop+l.scrollTop},b={w:g.right-g[y],h:g.bottom-g[k]},T=D(o,"popover"),C=M(".arrow",o),x=g[k]+b.h/2-f.h/2<0,E=g[y]+b.w/2-f.w/2<0,L=g[y]+f.w/2+b.w/2>=p,N=g[k]+f.h/2+b.h/2>=m,I=g[k]-f.h<0,B=g[y]-f.w<0,H=g[k]+f.h+b.h>=m,S=g[y]+f.w+b.w>=p;a=(a===y||"right"===a)&&B&&S?k:a,a=a===k&&I?"bottom":a,a="bottom"===a&&H?k:a,a=a===y&&B?"right":a,a="right"===a&&S?y:a,-1===o.className.indexOf(a)&&(o.className=o.className.replace(A,a)),u=C.offsetWidth,h=C.offsetHeight,a===y||"right"===a?(r=a===y?g[y]+v.x-f.w-(T?u:0):g[y]+v.x+b.w,x?(s=g[k]+v.y,c=b.h/2-u):N?(s=g[k]+v.y-f.h+b.h,c=f.h-b.h/2-u):(s=g[k]+v.y-f.h/2+b.h/2,c=f.h/2-(T?.9*h:h/2))):a!==k&&"bottom"!==a||(s=a===k?g[k]+v.y-f.h-(T?h:0):g[k]+v.y+b.h,E?(r=0,d=g[y]+b.w/2-u):L?(r=p-1.01*f.w,d=f.w-(p-g[y])+b.w/2-u/2):(r=g[y]+v.x-f.w/2+b.w/2,d=f.w/2-(T?u:u/2))),o[w][k]=s+"px",o[w][y]=r+"px",c&&(C[w][k]=c+"px"),d&&(C[w][y]=d+"px")};o.version="2.0.27";var F=function(t){t=M(t);var e=this,i=S(t,".alert"),n=function(){D(i,"fade")?j(i,a):a()},o=function(n){i=S(n[r],".alert"),(t=M('[data-dismiss="alert"]',i))&&i&&(t===n[r]||t.contains(n[r]))&&e.close()},a=function(){U.call(i,"closed","alert"),P(t,"click",o),i[p].removeChild(i)};this.close=function(){i&&t&&D(i,"show")&&(U.call(i,"close","alert"),B(i,"show"),i&&n())},"Alert"in t||W(t,"click",o),t.Alert=e};a[b](["Alert",F,'[data-dismiss="alert"]']);var G=function(t){t=M(t);var i=!1,n="checked",o=function(t){32===(t.which||t.keyCode)&&t[r]===e.activeElement&&l(t)},a=function(t){32===(t.which||t.keyCode)&&t.preventDefault()},l=function(e){var o="LABEL"===e[r].tagName?e[r]:"LABEL"===e[r][p].tagName?e[r][p]:null;if(o){var a=H(o[p],"btn"),l=o.getElementsByTagName("INPUT")[0];if(l){if("checkbox"===l.type&&(l[n]?(B(o,T),l[h](n),l.removeAttribute(n),l[n]=!1):(I(o,T),l[h](n),l[f](n,n),l[n]=!0),i||(i=!0,U.call(l,"change","button"),U.call(t,"change","button"))),"radio"===l.type&&!i&&(!l[n]||0===e.screenX&&0==e.screenY)){I(o,T),I(o,"focus"),l[f](n,n),l[n]=!0,U.call(l,"change","button"),U.call(t,"change","button"),i=!0;for(var s=0,c=a[m];s<c;s++){var d=a[s],u=d.getElementsByTagName("INPUT")[0];d!==o&&D(d,T)&&(B(d,T),u.removeAttribute(n),u[n]=!1,U.call(u,"change","button"))}}setTimeout(function(){i=!1},50)}}},s=function(t){I(t[r][p],"focus")},c=function(t){B(t[r][p],"focus")};if(!("Button"in t)){W(t,"click",l),W(t,"keyup",o),W(t,"keydown",a);for(var d=H(t,"btn"),u=0;u<d.length;u++){var g=d[u].getElementsByTagName("INPUT")[0];W(g,"focus",s),W(g,"blur",c)}}for(var v=H(t,"btn"),w=v[m],u=0;u<w;u++)!D(v[u],T)&&M("input:checked",v[u])&&I(v[u],T);t.Button=this};a[b](["Button",G,'[data-toggle="buttons"]']);var J=function(n,o){n=M(n),o=o||{};var a=n[h]("data-interval"),l=o.interval,s="false"===a?0:parseInt(a),c="hover"===n[h]("data-pause")||!1,f="true"===n[h]("data-keyboard")||!1;this.keyboard=!0===o.keyboard||f,this.pause=!("hover"!==o.pause&&!c)&&"hover",this.interval="number"==typeof l?l:!1===l||0===s||!1===s?0:isNaN(s)?5e3:s;var p=this,g=n.index=0,v=n.timer=0,w=!1,b=!1,A=null,C=null,E=null,L=H(n,"carousel-item"),N=L[m],S=this.direction=y,R=H(n,"carousel-control-prev")[0],O=H(n,"carousel-control-next")[0],X=M(".carousel-indicators",n),q=X&&X.getElementsByTagName("LI")||[];if(!(N<2)){var Y=function(){!1===p.interval||D(n,"paused")||(I(n,"paused"),!w&&(clearInterval(v),v=null))},F=function(){!1!==p.interval&&D(n,"paused")&&(B(n,"paused"),!w&&(clearInterval(v),v=null),!w&&p.cycle())},G=function(t){if(t.preventDefault(),!w){var e=t[r];if(!e||D(e,T)||!e[h]("data-slide-to"))return!1;g=parseInt(e[h]("data-slide-to"),10),p.slideTo(g)}},J=function(t){if(t.preventDefault(),!w){var e=t.currentTarget||t.srcElement;e===O?g++:e===R&&g--,p.slideTo(g)}},K=function(t){if(!w){switch(t.which){case 39:g++;break;case 37:g--;break;default:return}p.slideTo(g)}},Q=function(t){t(n,u.move,Z,z),t(n,u.end,$,z)},V=function(t){b||(A=parseInt(t.touches[0].pageX),n.contains(t[r])&&(b=!0,Q(W)))},Z=function(t){return b?(C=parseInt(t.touches[0].pageX),"touchmove"===t.type&&t.touches[m]>1?(t.preventDefault(),!1):void 0):void t.preventDefault()},$=function(t){if(b&&!w&&(E=C||parseInt(t.touches[0].pageX),b)){if((!n.contains(t[r])||!n.contains(t.relatedTarget))&&Math.abs(A-E)<75)return!1;C<A?g++:C>A&&g--,b=!1,p.slideTo(g),Q(P)}},_=function(){var e=n.getBoundingClientRect(),o=t.innerHeight||i.clientHeight;return e[k]<=o&&e.bottom>=0},tt=function(t){for(var e=0,i=q[m];e<i;e++)B(q[e],T);q[t]&&I(q[t],T)};this.cycle=function(){v&&(clearInterval(v),v=null),v=setInterval(function(){_()&&(g++,p.slideTo(g))},this.interval)},this.slideTo=function(t){if(!w){var i,o=this.getActiveIndex();o!==t&&(o<t||0===o&&t===N-1?S=p.direction=y:(o>t||o===N-1&&0===t)&&(S=p.direction="right"),t<0?t=N-1:t>=N&&(t=0),g=t,i=S===y?"next":"prev",U.call(n,"slide","carousel",L[t]),w=!0,clearInterval(v),v=null,tt(t),x&&D(n,"slide")?(I(L[t],"carousel-item-"+i),L[t].offsetWidth,I(L[t],"carousel-item-"+S),I(L[o],"carousel-item-"+S),j(L[t],function(a){var l=a&&a[r]!==L[t]?1e3*a.elapsedTime+100:20;w&&setTimeout(function(){w=!1,I(L[t],T),B(L[o],T),B(L[t],"carousel-item-"+i),B(L[t],"carousel-item-"+S),B(L[o],"carousel-item-"+S),U.call(n,"slid","carousel",L[t]),e.hidden||!p.interval||D(n,"paused")||p.cycle()},l)})):(I(L[t],T),L[t].offsetWidth,B(L[o],T),setTimeout(function(){w=!1,p.interval&&!D(n,"paused")&&p.cycle(),U.call(n,"slid","carousel",L[t])},100)))}},this.getActiveIndex=function(){return L.indexOf(H(n,"carousel-item active")[0])||0},"Carousel"in n||(p.pause&&p.interval&&(W(n,d[0],Y),W(n,d[1],F),W(n,u.start,Y,z),W(n,u.end,F,z)),L[m]>1&&W(n,u.start,V,z),O&&W(O,"click",J),R&&W(R,"click",J),X&&W(X,"click",G),p.keyboard&&W(t,"keydown",K)),p.getActiveIndex()<0&&(L[m]&&I(L[0],T),q[m]&&tt(0)),p.interval&&p.cycle(),n.Carousel=p}};a[b](["Carousel",J,'[data-ride="carousel"]']);var K=function(t,e){t=M(t),e=e||{};var i,n,o=null,a=null,l=this,s=t[h]("data-parent"),r=function(t,e){U.call(t,"show","collapse"),t.isAnimating=!0,I(t,"collapsing"),B(t,"collapse"),t[w].height=t.scrollHeight+"px",j(t,function(){t.isAnimating=!1,t[f]("aria-expanded","true"),e[f]("aria-expanded","true"),B(t,"collapsing"),I(t,"collapse"),I(t,"show"),t[w].height="",U.call(t,"shown","collapse")})},c=function(t,e){U.call(t,"hide","collapse"),t.isAnimating=!0,t[w].height=t.scrollHeight+"px",B(t,"collapse"),B(t,"show"),I(t,"collapsing"),t.offsetWidth,t[w].height="0px",j(t,function(){t.isAnimating=!1,t[f]("aria-expanded","false"),e[f]("aria-expanded","false"),B(t,"collapsing"),I(t,"collapse"),t[w].height="",U.call(t,"hidden","collapse")})};this.toggle=function(t){t.preventDefault(),D(a,"show")?l.hide():l.show()},this.hide=function(){a.isAnimating||(c(a,t),I(t,"collapsed"))},this.show=function(){o&&(i=M(".collapse.show",o),n=i&&(M('[data-target="#'+i.id+'"]',o)||M('[href="#'+i.id+'"]',o))),(!a.isAnimating||i&&!i.isAnimating)&&(n&&i!==a&&(c(i,n),I(n,"collapsed")),r(a,t),B(t,"collapsed"))},"Collapse"in t||W(t,"click",l.toggle),a=function(){var e=t.href&&t[h]("href"),i=t[h]("data-target"),n=e||i&&"#"===i.charAt(0)&&i;return n&&M(n)}(),a.isAnimating=!1,o=M(e.parent)||s&&S(t,s),t.Collapse=l};a[b](["Collapse",K,'[data-toggle="collapse"]']);var Q=function(t,i){t=M(t),this.persist=!0===i||"true"===t[h]("data-persist")||!1;var n=this,o=t[p],a=null,s=M(".dropdown-menu",o),c=function(){for(var t=s.children,e=[],i=0;i<t[m];i++)t[i].children[m]&&"A"===t[i].children[0].tagName&&e[b](t[i].children[0]),"A"===t[i].tagName&&e[b](t[i]);return e}(),d=function(t){(t.href&&"#"===t.href.slice(-1)||t[p]&&t[p].href&&"#"===t[p].href.slice(-1))&&this.preventDefault()},u=function(){var i=t.open?W:P;i(e,"click",g),i(e,"keydown",w),i(e,"keyup",T),i(e,"focus",g,!0)},g=function(e){var i=e[r],o=i&&(i[h](l)||i[p]&&h in i[p]&&i[p][h](l));("focus"!==e.type||i!==t&&i!==s&&!s.contains(i))&&(i!==s&&!s.contains(i)||!n.persist&&!o)&&(a=i===t||t.contains(i)?t:null,k(),d.call(e,i))},v=function(e){a=t,y(),d.call(e,e[r])},w=function(t){var e=t.which||t.keyCode;38!==e&&40!==e||t.preventDefault()},T=function(i){var o=i.which||i.keyCode,l=e.activeElement,r=c.indexOf(l),d=l===t,u=s.contains(l),h=l[p]===s||l[p][p]===s;h&&(r=d?0:38===o?r>1?r-1:0:40===o&&r<c[m]-1?r+1:r,c[r]&&N(c[r])),(c[m]&&h||!c[m]&&(u||d)||!u)&&t.open&&27===o&&(n.toggle(),a=null)},y=function(){U.call(o,"show","dropdown",a),I(s,"show"),I(o,"show"),t[f]("aria-expanded",!0),U.call(o,"shown","dropdown",a),t.open=!0,P(t,"click",v),setTimeout(function(){N(s.getElementsByTagName("INPUT")[0]||t),u()},1)},k=function(){U.call(o,"hide","dropdown",a),B(s,"show"),B(o,"show"),t[f]("aria-expanded",!1),U.call(o,"hidden","dropdown",a),t.open=!1,u(),N(t),setTimeout(function(){W(t,"click",v)},1)};t.open=!1,this.toggle=function(){D(o,"show")&&t.open?k():y()},"Dropdown"in t||(!1 in s&&s[f]("tabindex","0"),W(t,"click",v)),t.Dropdown=n};a[b](["Dropdown",Q,'[data-toggle="dropdown"]']);var V=function(o,a){o=M(o);var l=o[h]("data-target")||o[h]("href"),s=M(l),d=D(o,"modal")?o:s;if(D(o,"modal")&&(o=null),d){a=a||{},this.keyboard=!1!==a.keyboard&&"false"!==d[h]("data-keyboard"),this.backdrop="static"!==a.backdrop&&"static"!==d[h]("data-backdrop")||"static",this.backdrop=!1!==a.backdrop&&"false"!==d[h]("data-backdrop")&&this.backdrop,this[c]=!!D(d,"fade"),this.content=a.content,d.isAnimating=!1;var u,g,v,b,T,k=this,A=null,E=H(i,"fixed-top").concat(H(i,"fixed-bottom")),L=function(){var e=i.getBoundingClientRect();return t.innerWidth||e.right-Math.abs(e[y])},S=function(){var i,o=t.getComputedStyle(e[n]),a=parseInt(o.paddingRight,10);if(u&&(e[n][w].paddingRight=a+g+"px",d[w].paddingRight=g+"px",E[m]))for(var l=0;l<E[m];l++)i=t.getComputedStyle(E[l]).paddingRight,E[l][w].paddingRight=parseInt(i)+g+"px"},R=function(){if(e[n][w].paddingRight="",d[w].paddingRight="",E[m])for(var t=0;t<E[m];t++)E[t][w].paddingRight=""},O=function(){var t,i=e.createElement("div");return i.className="modal-scrollbar-measure",e[n].appendChild(i),t=i.offsetWidth-i.clientWidth,e[n].removeChild(i),t},q=function(){u=e[n].clientWidth<L(),g=O()},Y=function(){var t=e.createElement("div");v=M(".modal-backdrop"),null===v&&(t[f]("class","modal-backdrop"+(k[c]?" fade":"")),v=t,e[n].appendChild(v)),C=1},F=function(){(v=M(".modal-backdrop"))&&null!==v&&"object"==typeof v&&(C=0,e[n].removeChild(v),v=null)},G=function(){N(d),d.isAnimating=!1,U.call(d,"shown","modal",A),W(t,"resize",k.update,z),W(d,"click",V),W(e,"keydown",Q)},J=function(){d[w].display="",o&&N(o),U.call(d,"hidden","modal"),function(){H(e,"modal show")[0]||(R(),B(e[n],"modal-open"),v&&D(v,"fade")?(B(v,"show"),j(v,F)):F(),P(t,"resize",k.update,z),P(d,"click",V),P(e,"keydown",Q))}(),d.isAnimating=!1},K=function(t){if(!d.isAnimating){var e=t[r];e=e.hasAttribute("data-target")||e.hasAttribute("href")?e:e[p],e!==o||D(d,"show")||(d.modalTrigger=o,A=o,k.show(),t.preventDefault())}},Q=function(t){d.isAnimating||k.keyboard&&27==t.which&&D(d,"show")&&k.hide()},V=function(t){if(!d.isAnimating){var e=t[r];D(d,"show")&&("modal"===e[p][h]("data-dismiss")||"modal"===e[h]("data-dismiss")||e===d&&"static"!==k.backdrop)&&(k.hide(),A=null,t.preventDefault())}};this.toggle=function(){D(d,"show")?this.hide():this.show()},this.show=function(){D(d,"show")||d.isAnimating||(clearTimeout(T),T=setTimeout(function(){d.isAnimating=!0,U.call(d,"show","modal",A);var t=H(e,"modal show")[0];t&&t!==d&&("modalTrigger"in t&&t.modalTrigger.Modal.hide(),"Modal"in t&&t.Modal.hide()),k.backdrop&&!C&&!v&&Y(),v&&!D(v,"show")&&(v.offsetWidth,b=X(v),I(v,"show")),setTimeout(function(){d[w].display="block",q(),S(),I(e[n],"modal-open"),I(d,"show"),d[f]("aria-hidden",!1),D(d,"fade")?j(d,G):G()},x&&v&&b?b:1)},1))},this.hide=function(){!d.isAnimating&&D(d,"show")&&(clearTimeout(T),T=setTimeout(function(){d.isAnimating=!0,U.call(d,"hide","modal"),v=M(".modal-backdrop"),b=v&&X(v),B(d,"show"),d[f]("aria-hidden",!0),setTimeout(function(){D(d,"fade")?j(d,J):J()},x&&v&&b?b:2)},2))},this.setContent=function(t){M(".modal-content",d).innerHTML=t},this.update=function(){D(d,"show")&&(q(),S())},!o||"Modal"in o||W(o,"click",K),k.content&&k.setContent(k.content),o?(o.Modal=k,d.modalTrigger=o):d.Modal=k}};a[b](["Modal",V,'[data-toggle="modal"]']);var Z=function(i,o){i=M(i),o=o||{};var a=i[h]("data-trigger"),l=i[h]("data-animation"),u=i[h]("data-placement"),p=i[h]("data-dismissible"),m=i[h]("data-delay"),g=i[h]("data-container"),v='<button type="button" class="close">×</button>',b=M(o.container),T=M(g),y=S(i,".modal"),A=S(i,".fixed-top"),C=S(i,".fixed-bottom");this.template=o.template?o.template:null,this.trigger=o.trigger?o.trigger:a||"hover",this[c]=o[c]&&"fade"!==o[c]?o[c]:l||"fade",this.placement=o.placement?o.placement:u||k,this[s]=parseInt(o[s]||m)||200,this.dismissible=!(!o.dismissible&&"true"!==p),this.container=b||(T||(A||(C||(y||e[n]))));var x=this,E=o.title||i[h]("data-title")||null,L=o.content||i[h]("data-content")||null;if(L||this.template){var N=null,H=0,R=this.placement,O=function(t){null!==N&&t[r]===M(".close",N)&&x.hide()},X=function(){x.container.removeChild(N),H=null,N=null},q=function(){E=o.title||i[h]("data-title"),L=o.content||i[h]("data-content"),L=L?L.trim():null,N=e.createElement("div");var t=e.createElement("div");if(t[f]("class","arrow"),N.appendChild(t),null!==L&&null===x.template){if(N[f]("role","tooltip"),null!==E){var n=e.createElement("h3");n[f]("class","popover-header"),n.innerHTML=x.dismissible?E+v:E,N.appendChild(n)}var a=e.createElement("div");a[f]("class","popover-body"),a.innerHTML=x.dismissible&&null===E?L+v:L,N.appendChild(a)}else{var l=e.createElement("div");x.template=x.template.trim(),l.innerHTML=x.template,N.innerHTML=l.firstChild.innerHTML}x.container.appendChild(N),N[w].display="block",N[f]("class","popover bs-popover-"+R+" "+x[c])},F=function(){!D(N,"show")&&I(N,"show")},G=function(){Y(i,N,R,x.container)},J=function(n){"click"!=x.trigger&&"focus"!=x.trigger||!x.dismissible&&n(i,"blur",x.hide),x.dismissible&&n(e,"click",O),n(t,"resize",x.hide,z)},K=function(){J(W),U.call(i,"shown","popover")},Q=function(){J(P),X(),U.call(i,"hidden","popover")};this.toggle=function(){null===N?x.show():x.hide()},this.show=function(){clearTimeout(H),H=setTimeout(function(){null===N&&(R=x.placement,q(),G(),F(),U.call(i,"show","popover"),x[c]?j(N,K):K())},20)},this.hide=function(){clearTimeout(H),H=setTimeout(function(){N&&null!==N&&D(N,"show")&&(U.call(i,"hide","popover"),B(N,"show"),x[c]?j(N,Q):Q())},x[s])},"Popover"in i||("hover"===x.trigger?(W(i,d[0],x.show),x.dismissible||W(i,d[1],x.hide)):"click"!=x.trigger&&"focus"!=x.trigger||W(i,x.trigger,x.toggle)),i.Popover=x}};a[b](["Popover",Z,'[data-toggle="popover"]']);var $=function(e,i){e=M(e);var n=M(e[h]("data-target")),o=e[h]("data-offset");if(i=i||{},i[r]||n){for(var a,l=this,s=i[r]&&M(i[r])||n,c=s&&s.getElementsByTagName("A"),d=parseInt(i.offset||o)||10,u=[],f=[],g=e.offsetHeight<e.scrollHeight?e:t,v=g===t,w=0,y=c[m];w<y;w++){var A=c[w][h]("href"),C=A&&"#"===A.charAt(0)&&"#"!==A.slice(-1)&&M(A);C&&(u[b](c[w]),f[b](C))}var x=function(t){var i=u[t],n=f[t],o=i[p][p],l=D(o,"dropdown")&&o.getElementsByTagName("A")[0],s=v&&n.getBoundingClientRect(),r=D(i,T)||!1,c=(v?s[k]+a:n.offsetTop)-d,h=v?s.bottom+a-d:f[t+1]?f[t+1].offsetTop-d:e.scrollHeight,m=a>=c&&h>a;if(!r&&m)D(i,T)||(I(i,T),l&&!D(l,T)&&I(l,T),U.call(e,"activate","scrollspy",u[t]));else if(m){if(!m&&!r||r&&m)return}else D(i,T)&&(B(i,T),l&&D(l,T)&&!H(i[p],T).length&&B(l,T))},E=function(){a=v?q().y:e.scrollTop;for(var t=0,i=u[m];t<i;t++)x(t)};this.refresh=function(){E()},"ScrollSpy"in e||(W(g,"scroll",l.refresh,z),W(t,"resize",l.refresh,z)),l.refresh(),e.ScrollSpy=l}};a[b](["ScrollSpy",$,'[data-spy="scroll"]']);var _=function(t,e){t=M(t);var i=t[h]("data-height");e=e||{},this.height=!!x&&(e.height||"true"===i);var n,o,a,l,s,r,c,d=this,u=S(t,".nav"),g=!1,v=u&&M(".dropdown-toggle",u),b=function(){g[w].height="",B(g,"collapsing"),u.isAnimating=!1},k=function(){g?r?b():setTimeout(function(){g[w].height=c+"px",g.offsetWidth,j(g,b)},50):u.isAnimating=!1,U.call(n,"shown","tab",o)},A=function(){g&&(a[w].float=y,l[w].float=y,s=a.scrollHeight),I(l,T),U.call(n,"show","tab",o),B(a,T),U.call(o,"hidden","tab",n),g&&(c=l.scrollHeight,r=c===s,I(g,"collapsing"),g[w].height=s+"px",g.offsetHeight,a[w].float="",l[w].float=""),D(l,"fade")?setTimeout(function(){I(l,"show"),j(l,k)},20):k()};if(u){u.isAnimating=!1;var C=function(){var t,e=H(u,T);return 1!==e[m]||D(e[0][p],"dropdown")?e[m]>1&&(t=e[e[m]-1]):t=e[0],t},E=function(){return M(C()[h]("href"))},L=function(t){t.preventDefault(),n=t.currentTarget,!u.isAnimating&&!D(n,T)&&d.show()};this.show=function(){n=n||t,l=M(n[h]("href")),o=C(),a=E(),u.isAnimating=!0,B(o,T),o[f]("aria-selected","false"),I(n,T),n[f]("aria-selected","true"),v&&(D(t[p],"dropdown-menu")?D(v,T)||I(v,T):D(v,T)&&B(v,T)),U.call(o,"hide","tab",n),D(a,"fade")?(B(a,"show"),j(a,A)):A()},"Tab"in t||W(t,"click",L),d.height&&(g=E()[p]),t.Tab=d}};a[b](["Tab",_,'[data-toggle="tab"]']);var tt=function(t,e){t=M(t),e=e||{};var i=t[h]("data-animation"),n=t[h]("data-autohide"),o=t[h]("data-delay");this.animation=!1===e.animation||"false"===i?0:1,this.autohide=!1===e.autohide||"false"===n?0:1,this[s]=parseInt(e[s]||o)||500;var a=this,l=0,r=S(t,".toast"),c=function(){B(r,"showing"),I(r,"show"),U.call(r,"shown","toast"),a.autohide&&a.hide()},d=function(){I(r,"hide"),U.call(r,"hidden","toast")},u=function(){B(r,"show"),a.animation?j(r,d):d()},f=function(){clearTimeout(l),l=null,I(r,"hide"),P(t,"click",a.hide),t.Toast=null,t=null,r=null};this.show=function(){r&&(U.call(r,"show","toast"),a.animation&&I(r,"fade"),B(r,"hide"),I(r,"showing"),a.animation?j(r,c):c())},this.hide=function(t){r&&D(r,"show")&&(U.call(r,"hide","toast"),t?u():l=setTimeout(u,a[s]))},this.dispose=function(){r&&D(r,"show")&&(B(r,"show"),a.animation?j(r,f):f())},"Toast"in t||W(t,"click",a.hide),t.Toast=a};a[b](["Toast",tt,'[data-dismiss="toast"]']);var et=function(i,o){i=M(i),o=o||{};var a=i[h]("data-animation"),l=i[h]("data-placement"),r=i[h]("data-delay"),u=i[h]("data-container"),p=M(o.container),m=M(u),g=S(i,".modal"),v=S(i,".fixed-top"),b=S(i,".fixed-bottom");this[c]=o[c]&&"fade"!==o[c]?o[c]:a||"fade",this.placement=o.placement?o.placement:l||k,this[s]=parseInt(o[s]||r)||200,this.container=p||(m||(v||(b||(g||e[n]))));var T=this,A=0,C=this.placement,x=null,E=i[h]("title")||i[h]("data-title")||i[h]("data-original-title");if(E&&""!=E){var L=function(){T.container.removeChild(x),x=null,A=null},N=function(){if((E=i[h]("title")||i[h]("data-title")||i[h]("data-original-title"))&&""!==E){x=e.createElement("div"),x[f]("role","tooltip"),x[w][y]="0",x[w][k]="0";var t=e.createElement("div");t[f]("class","arrow"),x.appendChild(t);var n=e.createElement("div");n[f]("class","tooltip-inner"),x.appendChild(n),n.innerHTML=E,T.container.appendChild(x),x[f]("class","tooltip bs-tooltip-"+C+" "+T[c])}},H=function(){Y(i,x,C,T.container)},R=function(){!D(x,"show")&&I(x,"show")},O=function(){W(t,"resize",T.hide,z),U.call(i,"shown","tooltip")},X=function(){P(t,"resize",T.hide,z),L(),U.call(i,"hidden","tooltip")};this.show=function(){clearTimeout(A),A=setTimeout(function(){null===x&&(C=T.placement,!1!==N()&&(H(),R(),U.call(i,"show","tooltip"),T[c]?j(x,O):O()))},20)},this.hide=function(){clearTimeout(A),A=setTimeout(function(){x&&D(x,"show")&&(U.call(i,"hide","tooltip"),B(x,"show"),T[c]?j(x,X):X())},T[s])},this.toggle=function(){x?T.hide():T.show()},"Tooltip"in i||(i[f]("data-original-title",E),i.removeAttribute("title"),W(i,d[0],T.show),W(i,d[1],T.hide)),i.Tooltip=T}};a[b](["Tooltip",et,'[data-toggle="tooltip"]']);var it=function(t,e){for(var i=0,n=e[m];i<n;i++)new t(e[i])},nt=o.initCallback=function(t){t=t||e;for(var i=0,n=a[m];i<n;i++)it(a[i][1],t.querySelectorAll(a[i][2]))};return e[n]?nt():W(e,"DOMContentLoaded",function(){nt()}),{Alert:F,Button:G,Carousel:J,Collapse:K,Dropdown:Q,Modal:V,Popover:Z,ScrollSpy:$,Tab:_,Toast:tt,Tooltip:et}});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_native_dist_bootstrap_native_v4_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap.native/dist/bootstrap-native-v4.min */ "./node_modules/bootstrap.native/dist/bootstrap-native-v4.min.js");
/* harmony import */ var bootstrap_native_dist_bootstrap_native_v4_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_native_dist_bootstrap_native_v4_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ "./src/js/cart.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/js/popup.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _phoneNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phoneNumber */ "./src/js/phoneNumber.js");
/* harmony import */ var _phoneNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_phoneNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smoothScroll */ "./src/js/smoothScroll.js");
/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_smoothScroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./src/js/footer.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_7__);
// import './utils/initSwipers';
// import 'swiper/js/swiper.min';







 // import 'bootstrap.native/lib/V4/tab-native'
// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/js/dist/util'
// import 'bootstrap/js/dist/tab'
//
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
// console.log('test');

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  var cartDOMElement = document.querySelector('.js-cart');

  if (!cartDOMElement) {
    return;
  }

  var cart = JSON.parse(localStorage.getItem('cart')) || {};
  var cartItemsCountersDOMElement = document.querySelectorAll('.js-cart-total-count-items');
  var cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price');
  var cartTotalPriceInputDOMElement = document.querySelector('.js-cart-total-price-input');
  var cartWrapperDOMElement = document.querySelector('.js-cart-wrapper');

  var renderCartItem = function renderCartItem(_ref) {
    var id = _ref.id,
        name = _ref.name,
        price = _ref.price,
        src = _ref.src,
        quantity = _ref.quantity;
    var cartItemDOMElement = document.createElement('div');
    var cartItemTemplate = "\n<div class=\"cart-item\">\n        <div class=\"cart-item__start\">\n            <button class=\"cart-item__btn cart-item__btn--remove js-btn-cart-item-remove\" type=\"button\"><i class=\"fas fa-times js-btn-cart-item-remove\"></i></button>\n        <div class=\"cart-item__img-wrapper\">\n            <img class=\"cart-item__img\" src=\"".concat(src, "\" alt=\"\">\n        </div>\n        </div>\n        <div class=\"cart-item__content\">\n            <div class=\"cart-item__title\">").concat(name, "</div>\n            <input type=\"hidden\" name=\"").concat(id, "-\u0422\u043E\u0432\u0430\u0440\" value=\"").concat(name, "\">\n            <input class=\"js-cart-input-quantity\" type=\"hidden\" name=\"").concat(id, "-\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\" value=\"").concat(quantity, "\">\n            <input class=\"js-cart-input-price\" type=\"hidden\" name=\"").concat(id, "-\u0426\u0435\u043D\u0430\" value=\"").concat(price * quantity, "\">\n            <div class=\"cart-item__end\">\n                 <div class=\"cart-item__actions\">\n                    <button class=\"cart-item__btn js-btn-product-decrease-quantity\" type=\"button\"><i class=\"fas fa-minus-circle js-btn-product-decrease-quantity\"></i></button>\n                    <span class=\"cart-item__quantity js-cart-item-quantity\">").concat(quantity, "</span>\n                    <button class=\"cart-item__btn js-btn-product-increase-quantity\" type=\"button\"><i class=\"fas fa-plus-circle js-btn-product-increase-quantity\"></i></button>\n                </div>\n                <p class=\"cart-item__price\"><span class=\"js-cart-item-price\">").concat(price * quantity, "</span>&#8381;</p>\n            </div>\n        </div>\n</div>\n");
    cartItemDOMElement.innerHTML = cartItemTemplate;
    cartItemDOMElement.setAttribute('data-product-id', id);
    cartItemDOMElement.classList.add('js-cart-item');
    cartDOMElement.appendChild(cartItemDOMElement);
  };

  var saveCart = function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  var updateDeliveryPrice = function updateDeliveryPrice(deliveryPrice) {
    var cartDeliveryPriceDOMElement = document.querySelector('.js-cart-delivery');
    var cartDeliveryPriceInputDOMElement = document.querySelector('.js-cart-input-delivery');

    if (cartDeliveryPriceDOMElement) {
      cartDeliveryPriceDOMElement.innerHTML = deliveryPrice;
    }

    if (cartDeliveryPriceInputDOMElement) {
      cartDeliveryPriceInputDOMElement.value = deliveryPrice;
    }
  };

  var updateCartTotalPrice = function updateCartTotalPrice() {
    var ids = Object.keys(cart);
    var totalPrice = 0;
    var deliveryPrice = 0;
    var cityDeliveryPrice = 50;
    var minAmountFreeShipping = 1000;

    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      totalPrice += cart[id].price * cart[id].quantity;
    }

    if (totalPrice < minAmountFreeShipping) {
      totalPrice += cityDeliveryPrice;
      deliveryPrice = cityDeliveryPrice;
    }

    updateDeliveryPrice(deliveryPrice);

    if (cartTotalPriceInputDOMElement) {
      cartTotalPriceInputDOMElement.value = totalPrice;
    }

    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent = totalPrice;
    }
  };

  var updateCartTotalItemsCounter = function updateCartTotalItemsCounter() {
    var ids = Object.keys(cart);
    var totalQuantity = 0;

    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      totalQuantity += cart[id].quantity;
    }

    cartItemsCountersDOMElement.forEach(function (element) {
      if (element) {
        element.textContent = totalQuantity;
      }
    });
    return totalQuantity;
  };

  var updateCart = function updateCart() {
    var totalQuantity = updateCartTotalItemsCounter();
    updateCartTotalPrice();
    saveCart();

    if (totalQuantity === 0) {
      cartWrapperDOMElement.classList.add("is-empty");
    } else {
      cartWrapperDOMElement.classList.remove("is-empty");
    }
  };

  var deleteCartItem = function deleteCartItem(id) {
    var cartItemDOMElement = cartDOMElement.querySelector("[data-product-id=\"".concat(id, "\"]"));
    cartDOMElement.removeChild(cartItemDOMElement);
    delete cart[id];
    updateCart();
  };

  var addCartItem = function addCartItem(data) {
    var id = data.id;

    if (cart[id]) {
      increaseQuantity(id);
      return;
    }

    cart[id] = data;
    renderCartItem(data);
    updateCart();
  };

  var updateQuantity = function updateQuantity(id, quantity) {
    var cartItemDOMElement = cartDOMElement.querySelector("[data-product-id=\"".concat(id, "\"]"));
    var cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-item-quantity');
    var cartItemPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-item-price');
    var cartItemInputPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-input-price');
    var cartItemInputQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-input-quantity');
    cart[id].quantity = quantity;
    cartItemQuantityDOMElement.textContent = quantity;
    cartItemPriceDOMElement.textContent = quantity * cart[id].price;
    cartItemInputPriceDOMElement.value = quantity * cart[id].price;
    cartItemInputQuantityDOMElement.value = quantity;
    updateCart();
  };

  var decreaseQuantity = function decreaseQuantity(id) {
    var newQuantity = cart[id].quantity - 1;

    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  var increaseQuantity = function increaseQuantity(id) {
    var newQuantity = cart[id].quantity + 1;
    updateQuantity(id, newQuantity);
  };

  var generateID = function generateID(string1) {
    return "".concat(string1).replace(new RegExp(" ", "g"), '-');
  };

  var getProductData = function getProductData(productDOMElement) {
    var name = productDOMElement.getAttribute('data-product-name');
    var price = productDOMElement.getAttribute('data-product-price');
    var src = productDOMElement.getAttribute('data-product-src');
    var quantity = 1;
    var id = generateID(name);
    return {
      name: name,
      price: price,
      src: src,
      quantity: quantity,
      id: id
    };
  };

  var renderCart = function renderCart() {
    var ids = Object.keys(cart);
    ids.forEach(function (id) {
      return renderCartItem(cart[id]);
    });
  };

  var resetCart = function resetCart() {
    var ids = Object.keys(cart);
    ids.forEach(function (id) {
      return deleteCartItem(cart[id].id);
    });
  };

  var carInit = function carInit() {
    renderCart();
    updateCart();
    document.addEventListener('reset-cart', resetCart);
    document.querySelector('body').addEventListener('click', function (e) {
      var target = e.target;

      if (target.classList.contains('js-btn-add-to-card')) {
        e.preventDefault();
        var productDOMElement = target.closest('.js-product');
        var data = getProductData(productDOMElement);
        addCartItem(data);
      }

      if (target.classList.contains('js-btn-cart-item-remove')) {
        e.preventDefault();
        var cartItemDOMElement = target.closest('.js-cart-item');
        var productID = cartItemDOMElement.getAttribute('data-product-id');
        deleteCartItem(productID);
      }

      if (target.classList.contains('js-btn-product-increase-quantity')) {
        e.preventDefault();

        var _cartItemDOMElement = target.closest('.js-cart-item');

        var _productID = _cartItemDOMElement.getAttribute('data-product-id');

        increaseQuantity(_productID);
      }

      if (target.classList.contains('js-btn-product-decrease-quantity')) {
        e.preventDefault();

        var _cartItemDOMElement2 = target.closest('.js-cart-item');

        var _productID2 = _cartItemDOMElement2.getAttribute('data-product-id');

        decreaseQuantity(_productID2);
      }
    });
  };

  carInit();
})();

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var footer = document.querySelector('.footer');
    var cartBtn = document.querySelector('.cart-btn');

    if (!cartBtn) {
      return;
    }

    var footerPaddingTop;
    var cartBtnHeight;

    if (window.matchMedia('(max-widht: 575px)').matches) {
      footerPaddingTop = parseInt(getComputedStyle(footer).paddingTop);
      cartBtnHeight = parseInt(getComputedStyle(cartBtn).height);
    } else {
      footerPaddingTop = parseInt(getComputedStyle(footer).paddingTop);
      cartBtnHeight = parseInt(getComputedStyle(cartBtn).height);
    }

    var cartBtnNewPosition = cartBtnHeight / 2 + footerPaddingTop;
    var cartBtnBottomValue = parseInt(getComputedStyle(cartBtn).bottom);
    window.addEventListener('scroll', function () {
      if (window.innerHeight - footer.getBoundingClientRect().y - cartBtnNewPosition - cartBtnBottomValue > 0) {
        cartBtn.style.bottom = window.innerHeight - footer.getBoundingClientRect().y - cartBtnNewPosition + 'px';
      } else {
        cartBtn.style.bottom = cartBtnBottomValue + 'px';
      }
    });
  });
})();

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  var forms = document.querySelectorAll('.form-send');

  if (forms.length === 0) {
    return;
  }

  var serialize = function serialize(form) {
    var items = form.querySelectorAll('input, select, textarea');
    var str = '';

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var name = item.name;
      var value = item.value;
      var separator = i === 0 ? '' : '&';

      if (value !== 'Поиск' && name !== 's') {
        str += separator + name + '=' + value;
      }
    } // console.log(str);


    return str;
  };

  var formSend = function formSend(form) {
    var data = serialize(form);
    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + '?action=send_mail';
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
      // console.log(xhr.response);
      var activePopup = document.querySelector('.popup.is-active');

      if (activePopup) {
        activePopup.classList.remove('is-active');
      }

      if (xhr.response === 'success') {
        document.querySelector('.popup-thanks').classList.add('is-active');
        document.dispatchEvent(new CustomEvent('reset-cart'));
      } else {
        document.querySelector('.popup-error').classList.add('is-active');
      }

      form.reset();
    };

    xhr.send(data);
  };

  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.currentTarget;
      formSend(form);
    });
  }
})();

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var fixedHeader = function fixedHeader() {
    if (window.pageYOffset > navHead.offsetHeight) {
      header.classList.add('is-active');
      navHead.style.marginBottom = navWrap + 'px';
    } else {
      header.classList.remove('is-active');
      navHead.style.marginBottom = 0;
    }
  };

  var header = document.querySelector(".header");
  var navWrap = document.querySelector(".navbar-wrap").offsetHeight;
  var navHead = document.querySelector(".nav-head");
  document.addEventListener("DOMContentLoaded", fixedHeader);
  window.addEventListener('scroll', function () {
    fixedHeader();
  });
})();

/***/ }),

/***/ "./src/js/phoneNumber.js":
/*!*******************************!*\
  !*** ./src/js/phoneNumber.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  var phoneNumberDOMElement = document.querySelector('.js-phone-number');

  if (!phoneNumberDOMElement) {
    return;
  }

  var generateNumber = function generateNumber(phoneNumberDOMElement) {
    var phoneNumberDOMElementContent = phoneNumberDOMElement.textContent;
    return phoneNumberDOMElementContent.replace(/\D/g, "");
  };

  var phoneNumberDOMElements = document.querySelectorAll('.js-phone-number');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = phoneNumberDOMElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      element.setAttribute('href', 'tel:' + generateNumber(phoneNumberDOMElement));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
})();

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import './myLib';
;

(function () {
  var body = document.querySelector('body');

  var closestAttr = function closestAttr(item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);

      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  var closestItemByClass = function closestItemByClass(item, className) {
    var node = item;

    while (node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  var toggleScroll = function toggleScroll() {
    body.classList.toggle('no-scroll');
  };

  var showPopup = function showPopup(target) {
    target.classList.add('is-active');
  };

  var closePopup = function closePopup(target) {
    target.classList.remove('is-active');
  };

  body.addEventListener('click', function (e) {
    var target = e.target;
    var popupClass = closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      toggleScroll();
    }
  });
  body.addEventListener('click', function (e) {
    var target = e.target;
    var popupIsActive = document.querySelector('.popup.is-active');

    if (popupIsActive) {
      if (target.classList.contains('popup-close') || target.classList.contains('popup__inner') || target.classList.contains('page_item') || target.hasAttribute('href')) {
        var popup = closestItemByClass(target, 'popup');
        closePopup(popup);
        toggleScroll();
      }
    }
  });
  body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      toggleScroll();
    }
  });
})();

/***/ }),

/***/ "./src/js/smoothScroll.js":
/*!********************************!*\
  !*** ./src/js/smoothScroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var smoothScroll = function smoothScroll(linkAttribute) {
    var section = document.querySelector(linkAttribute);

    if (!section) {
      goToHome(linkAttribute);
      return;
    } // var targetTop = section.getBoundingClientRect().top;
    // var scrollTop = window.pageYOffset;
    // var targetOffsetTop = targetTop + scrollTop;


    window.scrollTo({
      top: getOffset(section).top,
      left: 0,
      behavior: 'smooth'
    });
  };

  var closestAttr = function closestAttr(item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);

      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  var body = document.querySelector('body');
  body.addEventListener('click', function (e) {
    var target = e.target; // console.log(target);

    var linkAttribute = closestAttr(target, 'href');

    if (linkAttribute) {
      if (linkAttribute.indexOf('#', 0) !== -1 && linkAttribute.length > 1) {
        e.preventDefault();
        smoothScroll(linkAttribute);
      } else {
        return;
      }
    }
  });
})();

function getOffset(elem) {
  if (elem.getBoundingClientRect) {
    // "правильный" вариант
    return getOffsetRect(elem);
  } else {
    // пусть работает хоть как-то
    return getOffsetSum(elem);
  }
}

function getOffsetSum(elem) {
  var top = 0,
      left = 0;

  while (elem) {
    top = top + parseInt(elem.offsetTop);
    left = left + parseInt(elem.offsetLeft);
    elem = elem.offsetParent;
  }

  return {
    top: top,
    left: left
  };
}

function getOffsetRect(elem) {
  // (1)
  var box = elem.getBoundingClientRect(); // (2)

  var body = document.body;
  var docElem = document.documentElement; // (3)

  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft; // (4)

  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0; // (5)

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return {
    top: Math.round(top),
    left: Math.round(left)
  };
}

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor.scss":
/*!******************************!*\
  !*** ./src/sass/vendor.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/vendor.scss ./src/sass/app.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\notWIN\desktop\web\pizzeria\src\js\app.js */"./src/js/app.js");
__webpack_require__(/*! D:\notWIN\desktop\web\pizzeria\src\sass\vendor.scss */"./src/sass/vendor.scss");
module.exports = __webpack_require__(/*! D:\notWIN\desktop\web\pizzeria\src\sass\app.scss */"./src/sass/app.scss");


/***/ })

/******/ });