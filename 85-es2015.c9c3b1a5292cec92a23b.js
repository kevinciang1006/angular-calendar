(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{b4XN:function(e,t,r){"use strict";r.r(t),r.d(t,"DemoModule",(function(){return S}));var n=r("ofXK"),s=r("tyNb"),a=r("Nrjh"),c=r("/om3"),i=r("cbJd"),o=r("XNiG"),d=r("1G5W"),h=r("fXoL"),u=r("nLfN"),m=r("itXk"),p=r("GyhO"),b=r("HDdC"),l=r("IzEk"),w=r("7o/Q");class y{constructor(e){this.total=e}call(e,t){return t.subscribe(new f(e,this.total))}}class f extends w.a{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){++this.count>this.total&&this.destination.next(e)}}var k=r("Kj3r"),v=r("lJxs"),j=r("JX91"),O=r("8LU1");class _{}_.\u0275mod=h.fc({type:_}),_.\u0275inj=h.ec({factory:function(e){return new(e||_)}});const x=new Set;let I;class M{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):W}matchMedia(e){return this._platform.WEBKIT&&function(e){if(x.has(e))return;try{I||(I=document.createElement("style"),I.setAttribute("type","text/css"),document.head.appendChild(I)),I.sheet&&(I.sheet.insertRule(`@media ${e} {.fx-query-test{ }}`,0),x.add(e))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}function W(e){return{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{}}}M.\u0275fac=function(e){return new(e||M)(h.uc(u.a))},M.ctorParameters=()=>[{type:u.a}],M.\u0275prov=Object(h.dc)({factory:function(){return new M(Object(h.uc)(u.a))},token:M,providedIn:"root"});class D{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new o.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return L(Object(O.a)(e)).some(e=>this._registerQuery(e).mql.matches)}observe(e){const t=L(Object(O.a)(e)).map(e=>this._registerQuery(e).observable);let r=Object(m.a)(t);var n;return r=Object(p.a)(r.pipe(Object(l.a)(1)),r.pipe((n=1,e=>e.lift(new y(n))),Object(k.a)(0))),r.pipe(Object(v.a)(e=>{const t={matches:!1,breakpoints:{}};return e.forEach(e=>{t.matches=t.matches||e.matches,t.breakpoints[e.query]=e.matches}),t}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const t=this._mediaMatcher.matchMedia(e),r={observable:new b.a(e=>{const r=t=>this._zone.run(()=>e.next(t));return t.addListener(r),()=>{t.removeListener(r)}}).pipe(Object(j.a)(t),Object(v.a)(t=>({query:e,matches:t.matches})),Object(d.a)(this._destroySubject)),mql:t};return this._queries.set(e,r),r}}function L(e){return e.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}D.\u0275fac=function(e){return new(e||D)(h.uc(M),h.uc(h.L))},D.ctorParameters=()=>[{type:M},{type:h.L}],D.\u0275prov=Object(h.dc)({factory:function(){return new D(Object(h.uc)(M),Object(h.uc)(h.L))},token:D,providedIn:"root"});var g=r("1xDM");class q{constructor(e,t){this.breakpointObserver=e,this.cd=t,this.view=i.a.Week,this.viewDate=new Date,this.daysInWeek=7,this.destroy$=new o.a}ngOnInit(){const e={small:{breakpoint:"(max-width: 576px)",daysInWeek:2},medium:{breakpoint:"(max-width: 768px)",daysInWeek:3},large:{breakpoint:"(max-width: 960px)",daysInWeek:5}};this.breakpointObserver.observe(Object.values(e).map(({breakpoint:e})=>e)).pipe(Object(d.a)(this.destroy$)).subscribe(t=>{const r=Object.values(e).find(({breakpoint:e})=>!!t.breakpoints[e]);this.daysInWeek=r?r.daysInWeek:7,this.cd.markForCheck()})}ngOnDestroy(){this.destroy$.next()}}q.\u0275fac=function(e){return new(e||q)(h.hc(D),h.hc(h.j))},q.\u0275cmp=h.bc({type:q,selectors:[["mwl-demo-component"]],decls:6,vars:2,consts:[[1,"alert","alert-info"],[3,"viewDate","daysInWeek"]],template:function(e,t){1&e&&(h.mc(0,"div",0),h.id(1,"\n  Shrink the browser window size to reduce the number of days in the week.\n"),h.lc(),h.id(2,"\n\n"),h.mc(3,"mwl-calendar-week-view",1),h.id(4,"\n"),h.lc(),h.id(5,"\n")),2&e&&(h.Ub(3),h.Jc("viewDate",t.viewDate)("daysInWeek",t.daysInWeek))},directives:[g.a],encapsulation:2,changeDetection:0});var J=r("j1vE");class S{}S.\u0275mod=h.fc({type:S}),S.\u0275inj=h.ec({factory:function(e){return new(e||S)},imports:[[n.c,a.a.forRoot({provide:c.a,useFactory:J.a}),s.e.forChild([{path:"",component:q}])]]})}}]);