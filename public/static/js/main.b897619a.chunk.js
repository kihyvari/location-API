(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(n,e,t){},12:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var c=t(1),o=t.n(c),r=t(4),i=t.n(r),s=(t(11),t(12),t(3)),a=t.n(s),u=t(5),j=t(6),l=t(0),f=function(){var n=Object(c.useState)(Object(l.jsx)("ul",{children:"piip"})),e=Object(j.a)(n,2),t=e[0],o=e[1];return Object(c.useEffect)((function(){return function(){var n=Object(u.a)(a.a.mark((function n(){var e,t,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://locations-api-harjoite.herokuapp.com/api/locations");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,console.log(t),c=t.map((function(n,e){return Object(l.jsx)("li",{children:Object.values(n).join(" - ")},e)})),console.log("ele",c),o(c);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[]),console.log(t),t};var p=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Location API"}),Object(l.jsx)(f,{})]})},h=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),c(n),o(n),r(n),i(n)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.b897619a.chunk.js.map