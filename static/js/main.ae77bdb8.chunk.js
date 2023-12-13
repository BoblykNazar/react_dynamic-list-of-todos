(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(2),l=c(1),i=(c(13),c(14),c(7)),d=c.n(i),r=c(0),o=function(e){var t=e.todos,c=e.handleSelectedTodo,a=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===a||void 0===a?void 0:a.id)===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{onClick:function(){return c(e)},"data-cy":"selectButton",className:"button",type:"button",children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:(null===a||void 0===a?void 0:a.id)!==e.id?"far fa-eye":"far fa-eye-slash"})})})})]},e.id)}))})]})},j=function(e){var t=e.query,c=e.selectedFilter,a=e.handleSelectFilter,s=e.handleSetQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return a(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{onChange:function(e){return s(e.target.value)},"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",children:Object(r.jsx)("button",{onClick:function(){return s("")},"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"delete"})})]})]})},u=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h,m=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,a=t.id,s=t.title,i=t.completed,d=Object(l.useState)(null),o=Object(n.a)(d,2),j=o[0],h=o[1],m=Object(l.useState)(!1),O=Object(n.a)(m,2),x=O[0],f=O[1];return Object(l.useEffect)((function(){var e;(e=a,b("/users/".concat(e))).then(h).finally((function(){return f(!0)}))}),[a]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),!x&&Object(r.jsx)(u,{}),j&&x&&Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(r.jsx)("button",{onClick:function(){return c(null)},type:"button",className:"delete","data-cy":"modal-close","aria-label":"close"})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[i?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===j||void 0===j?void 0:j.email),children:null===j||void 0===j?void 0:j.name})]})]})]})]})};!function(e){e.DEFAULT="all",e.COMPLETED="completed",e.ACTIVE="active"}(h||(h={}));var O=c(8);var x=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(!1),i=Object(n.a)(s,2),d=i[0],x=i[1],f=Object(l.useState)(null),v=Object(n.a)(f,2),N=v[0],p=v[1],y=Object(l.useState)(""),g=Object(n.a)(y,2),S=g[0],T=g[1],k=Object(l.useState)(h.DEFAULT),C=Object(n.a)(k,2),E=C[0],w=C[1];Object(l.useEffect)((function(){b("/todos").then(a).finally((function(){return x(!0)}))}),[]);var L=Object(l.useMemo)((function(){return function(e,t,c){var a=Object(O.a)(e);if(t&&(a=a.filter((function(e){var c=e.title.toLowerCase(),a=t.toLowerCase();return c.includes(a.trim())}))),c)switch(c){case h.ACTIVE:a=a.filter((function(e){return!e.completed}));break;case h.COMPLETED:a=a.filter((function(e){return e.completed}));break;default:return a}return a}(c,S,E)}),[S,E,c]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(j,{query:S,selectedFilter:E,handleSelectFilter:function(e){w(e)},handleSetQuery:function(e){T(e)}})}),Object(r.jsx)("div",{className:"block",children:d?Object(r.jsx)(o,{todos:L,handleSelectedTodo:function(e){p(e)},selectedTodo:N}):Object(r.jsx)(u,{})})]})})}),N&&Object(r.jsx)(m,{selectedTodo:N,setSelectedTodo:p})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ae77bdb8.chunk.js.map