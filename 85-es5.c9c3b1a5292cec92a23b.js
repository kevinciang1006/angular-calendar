function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{b4XN:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoModule",(function(){return L}));var r=n("ofXK"),i=n("tyNb"),o=n("Nrjh"),c=n("/om3"),a=n("cbJd"),s=n("XNiG"),u=n("1G5W"),f=n("fXoL"),l=n("nLfN"),h=n("itXk"),p=n("GyhO"),d=n("HDdC"),y=n("IzEk"),b=n("7o/Q"),m=function(){function e(t){_classCallCheck(this,e),this.total=t}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new _(e,this.total))}}]),e}(),_=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;return _classCallCheck(this,n),(i=t.call(this,e)).total=r,i.count=0,i}return _createClass(n,[{key:"_next",value:function(e){++this.count>this.total&&this.destination.next(e)}}]),n}(b.a),v=n("Kj3r"),w=n("lJxs"),k=n("JX91"),O=n("8LU1"),j=function e(){_classCallCheck(this,e)};j.\u0275mod=f.fc({type:j}),j.\u0275inj=f.ec({factory:function(e){return new(e||j)}});var C,g=new Set,P=function(){function e(t){_classCallCheck(this,e),this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):x}return _createClass(e,[{key:"matchMedia",value:function(e){return this._platform.WEBKIT&&function(e){if(!g.has(e))try{C||((C=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(C)),C.sheet&&(C.sheet.insertRule("@media ".concat(e," {.fx-query-test{ }}"),0),g.add(e))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}]),e}();function x(e){return{matches:"all"===e||""===e,media:e,addListener:function(){},removeListener:function(){}}}P.\u0275fac=function(e){return new(e||P)(f.uc(l.a))},P.ctorParameters=function(){return[{type:l.a}]},P.\u0275prov=Object(f.dc)({factory:function(){return new P(Object(f.uc)(l.a))},token:P,providedIn:"root"});var I=function(){function e(t,n){_classCallCheck(this,e),this._mediaMatcher=t,this._zone=n,this._queries=new Map,this._destroySubject=new s.a}return _createClass(e,[{key:"ngOnDestroy",value:function(){this._destroySubject.next(),this._destroySubject.complete()}},{key:"isMatched",value:function(e){var t=this;return D(Object(O.a)(e)).some((function(e){return t._registerQuery(e).mql.matches}))}},{key:"observe",value:function(e){var t=this,n=D(Object(O.a)(e)).map((function(e){return t._registerQuery(e).observable})),r=Object(h.a)(n);return(r=Object(p.a)(r.pipe(Object(y.a)(1)),r.pipe((1,function(e){return e.lift(new m(1))}),Object(v.a)(0)))).pipe(Object(w.a)((function(e){var t={matches:!1,breakpoints:{}};return e.forEach((function(e){t.matches=t.matches||e.matches,t.breakpoints[e.query]=e.matches})),t})))}},{key:"_registerQuery",value:function(e){var t=this;if(this._queries.has(e))return this._queries.get(e);var n=this._mediaMatcher.matchMedia(e),r={observable:new d.a((function(e){var r=function(n){return t._zone.run((function(){return e.next(n)}))};return n.addListener(r),function(){n.removeListener(r)}})).pipe(Object(k.a)(n),Object(w.a)((function(t){return{query:e,matches:t.matches}})),Object(u.a)(this._destroySubject)),mql:n};return this._queries.set(e,r),r}}]),e}();function D(e){return e.map((function(e){return e.split(",")})).reduce((function(e,t){return e.concat(t)})).map((function(e){return e.trim()}))}I.\u0275fac=function(e){return new(e||I)(f.uc(P),f.uc(f.L))},I.ctorParameters=function(){return[{type:P},{type:f.L}]},I.\u0275prov=Object(f.dc)({factory:function(){return new I(Object(f.uc)(P),Object(f.uc)(f.L))},token:I,providedIn:"root"});var M=n("1xDM"),R=function(){function e(t,n){_classCallCheck(this,e),this.breakpointObserver=t,this.cd=n,this.view=a.a.Week,this.viewDate=new Date,this.daysInWeek=7,this.destroy$=new s.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t={small:{breakpoint:"(max-width: 576px)",daysInWeek:2},medium:{breakpoint:"(max-width: 768px)",daysInWeek:3},large:{breakpoint:"(max-width: 960px)",daysInWeek:5}};this.breakpointObserver.observe(Object.values(t).map((function(e){return e.breakpoint}))).pipe(Object(u.a)(this.destroy$)).subscribe((function(n){var r=Object.values(t).find((function(e){var t=e.breakpoint;return!!n.breakpoints[t]}));e.daysInWeek=r?r.daysInWeek:7,e.cd.markForCheck()}))}},{key:"ngOnDestroy",value:function(){this.destroy$.next()}}]),e}();R.\u0275fac=function(e){return new(e||R)(f.hc(I),f.hc(f.j))},R.\u0275cmp=f.bc({type:R,selectors:[["mwl-demo-component"]],decls:6,vars:2,consts:[[1,"alert","alert-info"],[3,"viewDate","daysInWeek"]],template:function(e,t){1&e&&(f.mc(0,"div",0),f.id(1,"\n  Shrink the browser window size to reduce the number of days in the week.\n"),f.lc(),f.id(2,"\n\n"),f.mc(3,"mwl-calendar-week-view",1),f.id(4,"\n"),f.lc(),f.id(5,"\n")),2&e&&(f.Ub(3),f.Jc("viewDate",t.viewDate)("daysInWeek",t.daysInWeek))},directives:[M.a],encapsulation:2,changeDetection:0});var W=n("j1vE"),L=function e(){_classCallCheck(this,e)};L.\u0275mod=f.fc({type:L}),L.\u0275inj=f.ec({factory:function(e){return new(e||L)},imports:[[r.c,o.a.forRoot({provide:c.a,useFactory:W.a}),i.e.forChild([{path:"",component:R}])]]})}}]);