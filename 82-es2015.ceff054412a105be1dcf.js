(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{CsYJ:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoModule",(function(){return w}));var o=n("ofXK"),a=n("tyNb"),c=n("Nrjh"),r=n("/om3"),i=n("dBcC"),s=n("G6HM"),l=n("fXoL"),d=n("kx+m");class f{constructor(){this.viewDate=new Date,this.events=[{title:"Increments badge total on the day cell",color:s.a.yellow,start:new Date,meta:{incrementsBadgeTotal:!0}},{title:"Does not increment the badge total on the day cell",color:s.a.blue,start:new Date,meta:{incrementsBadgeTotal:!1}}]}beforeMonthViewRender({body:e}){e.forEach(e=>{e.badgeTotal=e.events.filter(e=>e.meta.incrementsBadgeTotal).length})}}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=l.bc({type:f,selectors:[["mwl-demo-component"]],decls:3,vars:3,consts:[[3,"viewDate","events","activeDayIsOpen","beforeViewRender"]],template:function(e,t){1&e&&(l.mc(0,"mwl-calendar-month-view",0),l.yc("beforeViewRender",(function(e){return t.beforeMonthViewRender(e)})),l.id(1,"\n"),l.lc(),l.id(2,"\n")),2&e&&l.Jc("viewDate",t.viewDate)("events",t.events)("activeDayIsOpen",!0)},directives:[d.a],encapsulation:2,changeDetection:0});var m=n("j1vE");class w{}w.\u0275mod=l.fc({type:w}),w.\u0275inj=l.ec({factory:function(e){return new(e||w)},imports:[[o.c,c.a.forRoot({provide:r.a,useFactory:m.a}),i.a,a.e.forChild([{path:"",component:f}])]]})},dBcC:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("ofXK"),a=n("3Pt+"),c=n("Nrjh"),r=n("fXoL");class i{}i.\u0275mod=r.fc({type:i}),i.\u0275inj=r.ec({factory:function(e){return new(e||i)},imports:[[o.c,a.c,c.a]]})}}]);