(this.webpackJsonpreact3l=this.webpackJsonpreact3l||[]).push([[0],{264:function(e,t,a){e.exports=a(600)},330:function(e,t,a){},398:function(e,t,a){},399:function(e,t,a){},400:function(e,t,a){},401:function(e,t,a){},402:function(e,t,a){},575:function(e,t,a){},588:function(e,t,a){},591:function(e,t,a){},592:function(e,t,a){},597:function(e,t,a){},598:function(e,t,a){},600:function(e,t,a){"use strict";a.r(t);var n,r=a(37),l=a.n(r),i=a(119),c=a.n(i),o=a(75),u=a(40),s=a.n(u),f=a(23),d=a.n(f);var b="https://code-generator-api.thanhtunguet.info",m=null!=="React3l"?"React3l":"",v=10,p=null!==(n=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_BASE_URL:"https://code-generator-api.thanhtunguet.info",REACT_APP_NAME:"React3l",REACT_APP_TITLE:"React3l"}).INPUT_DEBOUNCE_TIME,10))&&void 0!==n?n:400,y="YYYY-MM-DD",h="HH:mm:ss",g=("".concat(y," ").concat(h),{index:"general.keys.index",actions:"general.keys.actions",checkbox:"general.keys.checkbox",expand:"general.keys.expand"}),j={label:"general.actions.label",add:"general.actions.add",filter:"general.actions.filter",reset:"general.actions.reset",save:"general.actions.save",delete:"general.actions.delete",import:"general.actions.import",export:"general.actions.export",search:"general.actions.search"},O={language:"vi",fallbackLanguage:"vi",loading:!0,title:m},k=a(31);var E={index:50,checkbox:50,expand:50,actions:120},C={resources:{},lng:O.language,fallbackLng:O.fallbackLanguage,ns:"",defaultNS:"",nsSeparator:!1,keySeparator:".",interpolation:{escapeValue:!1,nestingSuffixEscaped:".",prefix:"{{",suffix:"}}"}},w="/provinces";a(98);var N=a(116),q=a.n(N);function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return q()(e,t)}var T=a(34),S=a(17);function I(){return"".concat(b).concat(u.join.apply(void 0,arguments))}var F=a(11),R=a(249),A=a.n(R),D=a(250),W=a.n(D),L=a(251),M=a.n(L),B=a(252),_=a.n(B),P=a(253),z=a.n(P),V=a(254),U=a.n(V),H={items:[{name:"menu.provinces.name",url:w,icon:"fa fa-building"}]},G=a(1),K=a.n(G),Y=a(29),J=a(88),$=a(71),Q=(a(330),{src:"/assets/img/brand/logo.svg",width:89,height:25}),X={src:"/assets/img/brand/sygnet.svg",width:30,height:30};var Z=Object(Y.o)((function(e){var t=e.route,a=Object(k.b)(),n=Object(F.a)(a,1)[0],r=K.a.useMemo((function(){return{items:H.items.map((function(e){return Object(S.a)({},e,{name:n(e.name)})}))}}),[n]);return K.a.createElement(K.a.Fragment,null,K.a.createElement(A.a,{fixed:!0,className:"navbar"},K.a.createElement(W.a,{full:Q,minimized:X}),K.a.createElement(U.a,{className:"d-md-down-none",display:"lg"})),K.a.createElement("div",{className:"app-body"},K.a.createElement(M.a,{display:"lg",fixed:!0},K.a.createElement(z.a,{navConfig:r,router:$}),K.a.createElement(_.a,null)),K.a.createElement("main",{className:"main"},K.a.createElement("div",{className:"app-content"},K.a.createElement(Y.g,null,(null===t||void 0===t?void 0:t.routes)instanceof Array&&Object(J.a)(t.routes))))))})),ee=a(73),te=a.n(ee),ae=a(59),ne=a.n(ae),re=a(166),le=a.n(re),ie={labelCol:{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:8}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:16}}},ce={labelCol:{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:8}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:8}}},oe=a(263),ue=a(13),se=a(22),fe=a(170),de=a.n(fe),be=a(20),me=a(19),ve=a(120),pe=a(21),ye=function(){function e(){Object(ue.a)(this,e)}return Object(se.a)(e,null,[{key:"clone",value:function(t){var a=new e;return"undefined"!==typeof t&&null!==t&&Object.assign(a,t),a}}]),e}(),he=function(e){function t(e){var a;return Object(ue.a)(this,t),(a=Object(be.a)(this,Object(me.a)(t).call(this))).errors=void 0,a.key=void 0,null!==e&&"object"===typeof e&&Object.assign(Object(ve.a)(a),e),a}return Object(pe.a)(t,e),t}(ye),ge=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).skip=0,a.take=v,a.orderBy=void 0,a.orderType=void 0,a}return Object(pe.a)(t,e),t}(ye),je=new(function(){function e(){Object(ue.a)(this,e)}return Object(se.a)(e,[{key:"useChangeHandlers",value:function(e,t){var a=K.a.useCallback((function(a,n){t(he.clone(Object(S.a)({},e,Object(T.a)({},a,n))))}),[e,t]),n=K.a.useCallback(x(a),[a]),r=K.a.useCallback((function(r){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(i){if("object"===typeof i){if("target"in i)return l?n(r,i.target.value):a(r,i.target.value);"format"in i&&t(he.clone(Object(S.a)({},e,Object(T.a)({},r,i))))}return l?n(r,i):a(r,i)}}),[n,a,e,t]),l=K.a.useCallback((function(a){return function(n){t(he.clone(Object(S.a)({},e,Object(T.a)({},a,n))))}}),[e,t]);return[r,K.a.useCallback((function(a){return function(n,r){var l;t(he.clone(Object(S.a)({},e,(l={},Object(T.a)(l,a,r),Object(T.a)(l,"".concat(a,"Id"),n),l))))}}),[e,t]),l]}},{key:"useContentTable",value:function(e,t,a){var n=K.a.useMemo((function(){var t;return e[a]?(null===(t=e[a])||void 0===t||t.forEach((function(e){(null===e||void 0===e?void 0:e.key)||((null===e||void 0===e?void 0:e.id)?e.key=e.id:e.key=de()())})),e[a]):[]}),[a,e]),r=K.a.useCallback((function(n){t(he.clone(Object(S.a)({},e,Object(T.a)({},a,n))))}),[a,e,t]),l=K.a.useCallback((function(e){return function(){var t=n.filter((function(t){return t.id!==e}));r(t)}}),[n,r]),i=K.a.useCallback((function(){var e=new he;e.key=de()(),r(n instanceof Array?[].concat(Object(oe.a)(n),[e]):[e])}),[r,n]);return[n,r,i,l]}},{key:"useDefaultList",value:function(e,t){return K.a.useMemo((function(){var a=e[t];return a?[a]:[]}),[t,e])}},{key:"useDetail",value:function(e,t,a,n){var r=Object(Y.m)().id,i=K.a.useState(new he),c=Object(F.a)(i,2),o=c[0],s=c[1],f=K.a.useState(!1),d=Object(F.a)(f,2),b=d[0],m=d[1],v="string"===typeof r,p=Object(Y.k)(),y=K.a.useCallback((function(){p.push(Object(u.join)(e))}),[e,p]),h=K.a.useCallback((function(){var t;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return m(!0),r.prev=1,r.next=4,l.a.awrap(a(o));case 4:t=r.sent,(null===o||void 0===o?void 0:o.id)?s(t):p.push(Object(u.join)(e,t.id)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),"function"===typeof n&&n(r.t0);case 11:m(!1);case 12:case"end":return r.stop()}}),null,null,[[1,8]])}),[e,p,n,a,o]);return K.a.useEffect((function(){if("function"===typeof t&&v){m(!0);var e=he.clone({id:r});t(e).then((function(e){s(e)})).finally((function(){m(!1)}))}}),[t,r,v]),[o,s,b,m,v,y,h]}},{key:"useEnumList",value:function(e,t){var a=K.a.useState([]),n=Object(F.a)(a,2),r=n[0],l=n[1],i=K.a.useState(!1),c=Object(F.a)(i,2),o=c[0],u=c[1];return K.a.useEffect((function(){u(!0),e().then((function(e){l(e)})).catch(t).finally((function(){u(!1)}))}),[e,t]),[r,l,o]}},{key:"useFilter",value:function(e,t,a){return[e[a],K.a.useCallback((function(n){t(ge.clone(Object(S.a)({},e,Object(T.a)({},a,n))))}),[a,e,t])]}},{key:"useMaster",value:function(e,t,a,n){var r=K.a.useState(new n),l=Object(F.a)(r,2),i=l[0],c=l[1],o=K.a.useState([]),s=Object(F.a)(o,2),f=s[0],d=s[1],b=K.a.useState(!1),m=Object(F.a)(b,2),p=m[0],y=m[1],h=K.a.useState(0),g=Object(F.a)(h,2),j=g[0],O=g[1],k=Object(Y.k)(),E=K.a.useState(!1),C=Object(F.a)(E,2),w=C[0],N=C[1],q=K.a.useState(he.clone()),x=Object(F.a)(q,2),I=x[0],R=x[1],A=K.a.useCallback((function(e){return function(){R(e),N(!0)}}),[]),D=K.a.useCallback((function(){N(!1)}),[]),W=K.a.useCallback((function(){k.push(Object(u.join)(e,"add"))}),[k,e]),L=K.a.useCallback((function(t){return function(){k.push(Object(u.join)(e,t.toString()))}}),[e,k]),M=K.a.useCallback((function(){var e=ge.clone(i);Object.entries(e).forEach((function(t){var a=Object(F.a)(t,2),n=a[0],r=a[1];switch(n){case"skip":e.skip=0;break;case"take":e.take=v;break;case"orderBy":case"orderType":e.orderBy=void 0;break;default:"object"===typeof r&&null!==r&&(Object.entries(r).forEach((function(e){var t=Object(F.a)(e,1)[0];r[t]=void 0})),e[n]=Object(S.a)({},r))}})),c(e)}),[i,c]),B=K.a.useCallback((function(e){return function(t){c(ge.clone(Object(S.a)({},i,Object(T.a)({},e,t))))}}),[i,c]),_=K.a.useCallback((function(){c(ge.clone(i))}),[i]);return K.a.useEffect((function(){y(!0),Promise.all([t(i),a(i)]).then((function(e){var t=Object(F.a)(e,2),a=t[0],n=t[1];d(a),O(n)})).finally((function(){y(!1)}))}),[a,t,i]),[f,i,c,j,p,W,M,L,B,_,w,I,A,D]}},{key:"usePreloadList",value:function(e,t){var a=K.a.useState([]),n=Object(F.a)(a,2),r=n[0],l=n[1];return K.a.useEffect((function(){e(Object(S.a)({id:t},new ge)).then(l)}),[e,t]),r}}]),e}()),Oe=(new function e(){Object(ue.a)(this,e)},a(171)),ke=a.n(Oe),Ee=a(255),Ce=a.n(Ee),we=function(){function e(t){Object(ue.a)(this,e),t&&Object.assign(this,t)}return Object(se.a)(e,null,[{key:"types",value:function(){return[]}}]),e}(),Ne=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).equal=void 0,a.notEqual=void 0,a.in=void 0,a.notIn=void 0,a}return Object(pe.a)(t,e),Object(se.a)(t,null,[{key:"types",value:function(e){return[{key:"equal",label:"filters.guidFilter.equal"},{key:"notEqual",label:"filters.guidFilter.notEqual"},{key:"in",label:"filters.guidFilter.in"},{key:"notIn",label:"filters.guidFilter.notIn"}]}}]),t}(we),qe=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).equal=void 0,a.notEqual=void 0,a.in=void 0,a.notIn=void 0,a}return Object(pe.a)(t,e),Object(se.a)(t,null,[{key:"types",value:function(e){return[{key:"equal",label:"filters.idFilter.equal"},{key:"notEqual",label:"filters.idFilter.notEqual"},{key:"in",label:"filters.idFilter.in"},{key:"notIn",label:"filters.idFilter.notIn"}]}}]),t}(we),xe=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).startWith=void 0,a.notStartWith=void 0,a.endWith=void 0,a.notEndWith=void 0,a.equal=void 0,a.notEqual=void 0,a.contain=void 0,a.notContain=void 0,a}return Object(pe.a)(t,e),Object(se.a)(t,null,[{key:"types",value:function(e){return[{key:"startWith",label:"filters.stringFilter.startWith"},{key:"notStartWith",label:"filters.stringFilter.notStartWith"},{key:"endWith",label:"filters.stringFilter.endWith"},{key:"notEndWith",label:"filters.stringFilter.notEndWith"},{key:"contain",label:"filters.stringFilter.contain"},{key:"notContain",label:"filters.stringFilter.notContain"},{key:"equal",label:"filters.stringFilter.equal"},{key:"notEqual",label:"filters.stringFilter.notEqual"}]}}]),t}(we),Te=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).equal=void 0,a.notEqual=void 0,a.greater=void 0,a.greaterEqual=void 0,a.less=void 0,a.lessEqual=void 0,a.range=void 0,a}return Object(pe.a)(t,e),Object(se.a)(t,null,[{key:"types",value:function(e){return[{key:"equal",label:"filters.numberFilter.equal"},{key:"notEqual",label:"filters.numberFilter.notEqual"},{key:"greater",label:"filters.numberFilter.greater"},{key:"greaterEqual",label:"filters.numberFilter.greaterEqual"},{key:"less",label:"filters.numberFilter.less"},{key:"lessEqual",label:"filters.numberFilter.lessEqual"},{key:"range",label:"filters.numberFilter.range"}]}}]),t}(we),Se=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).equal=void 0,a.notEqual=void 0,a.greater=void 0,a.greaterEqual=void 0,a.less=void 0,a.lessEqual=void 0,a.range=void 0,a}return Object(pe.a)(t,e),Object(se.a)(t,null,[{key:"types",value:function(e){return[{key:"equal",label:"filters.dateFilter.equal"},{key:"notEqual",label:"filters.dateFilter.notEqual"},{key:"greater",label:"filters.dateFilter.greater"},{key:"greaterEqual",label:"filters.dateFilter.greaterEqual"},{key:"less",label:"filters.dateFilter.less"},{key:"lessEqual",label:"filters.dateFilter.lessEqual"},{key:"range",label:"filters.dateFilter.range"}]}}]),t}(we);function Ie(e){if(e.orderType)return"ASC"===e.orderType?"ascend":"descend"}function Fe(e,t){return e===t.field?t.order:void 0}function Re(e){return function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var r=a[2];if(e){var l=e.current,i=void 0===l?1:l,c=e.pageSize,o=void 0===c?v:c;return r+1+(i-1)*o}return r+1}}var Ae=new(function(){function e(){Object(ue.a)(this,e)}return Object(se.a)(e,[{key:"useDeleteHandler",value:function(e,t,a,n,r,l,i){var c=Object(k.b)(),o=Object(F.a)(c,1)[0];return d.a.useMemo((function(){return function(){Ce.a.confirm({title:o("general.delete.title",a),content:o("general.delete.content",a),okType:"danger",onOk:function(){t(!0),e(a).then((function(){ke.a.info(o("general.delete.success",a)),"function"===typeof r&&r()})).catch((function(e){ke.a.error(o("general.delete.failure",Object(S.a)({error:e},a))),n(he.clone(Object(S.a)({},a,{errors:e.response.data}))),"function"===typeof l&&l(e)})).finally((function(){t(!1)}))},onCancel:i})}}),[a,i,e,l,t,r,n,o])}},{key:"useLocalTable",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.defaultFilterHandler,r=d.a.useMemo((function(){return{field:t.orderBy,order:Ie(t),columnKey:t.orderBy,column:void 0}}),[t]),l=d.a.useMemo((function(){return n(e,t)}),[n,e,t]),i=d.a.useCallback((function(){a(ge.clone(t))}),[t]),c=d.a.useCallback((function(){var e=ge.clone(t);Object.entries(e).forEach((function(t){var a=Object(F.a)(t,2),n=a[0],r=a[1];switch(n){case"skip":e.skip=0;break;case"take":e.take=v;break;case"orderBy":case"orderType":e.orderBy=void 0;break;default:"object"===typeof r&&null!==r&&(Object.entries(r).forEach((function(e){var t=Object(F.a)(e,1)[0];r[t]=void 0})),e[n]=Object(S.a)({},r))}})),a(e)}),[t,a]),o=d.a.useMemo((function(){var e=t.skip,a=t.take;return{current:e/a+1,pageSize:a,total:(null!==l&&void 0!==l?l:[]).length}}),[l,t]),u=d.a.useCallback((function(e,n,l){var i=e.pageSize,c=(e.current-1)*e.pageSize;if(c===t.skip&&i===t.take){var o=r.field,u=r.order;l.field===o&&l.order===u?a(ge.clone(Object(S.a)({},t,{},n))):a(ge.clone(Object(S.a)({},t,{orderBy:l.field,orderType:Fe(l.field,l)})))}else a(ge.clone(Object(S.a)({},t,{skip:c,take:i})))}),[t,a,r]),s=d.a.useCallback((function(e){return function(n){a(ge.clone(Object(S.a)({},t,Object(T.a)({},e,n))))}}),[t,a]);return[l,o,r,u,s,i,c]}},{key:"useMasterTable",value:function(e,t,a){var n=d.a.useMemo((function(){var t=e.take,n=e.skip;return{total:a,current:n/t+1,pageSize:t,showSizeChanger:!0}}),[e,a]),r=d.a.useMemo((function(){return{field:e.orderBy,order:Ie(e)}}),[e]),l=d.a.useCallback((function(a,l,i){var c=r.field,o=r.order;if(i.field!==c||i.order!==o){var u=ge.clone(Object(S.a)({},e,{orderBy:i.field,skip:0}));return function(e,t){if("undefined"!==typeof t)return"string"===typeof t?t.toUpperCase().startsWith("ASC")?void(e.orderType="ASC"):void(e.orderType="DESC"):"boolean"===typeof t?t?"ASC":(e.orderType="DESC","DESC"):void(e.orderType=void 0);e.orderType=void 0}(u,i.order),void t(u)}var s=a.current,f=void 0===s?1:s,d=a.pageSize,b=void 0===d?v:d,m=a.total,p=void 0===m?0:m;n.current===f&&n.pageSize===b&&n.total===p?t(ge.clone(Object(S.a)({},e,{},l))):t(ge.clone(Object(S.a)({},e,{take:b,skip:(f-1)*b})))}),[n,e,t,r]);return[n,r,l]}},{key:"useRowSelection",value:function(){var e=d.a.useState([]),t=Object(F.a)(e,2),a=t[0];return[a,t[1],a.length>0]}},{key:"defaultFilterHandler",value:function(e,t){return"object"===typeof t&&null!==t?(Object.entries(t).forEach((function(t){var a=Object(F.a)(t,2),n=a[0],r=a[1];switch(n){case"skip":case"take":case"orderBy":case"orderType":break;default:if(r instanceof xe){Object.entries(r).forEach((function(t){var a=Object(F.a)(t,2),r=a[0],l=a[1];if("string"===typeof l&&""!==l)switch(r){case"startWith":e=e.filter((function(e){var t;return null===(t=e[n])||void 0===t?void 0:t.startsWith(l)}));break;case"endWith":e=e.filter((function(e){var t;return null===(t=e[n])||void 0===t?void 0:t.endsWith(l)}));break;case"contain":e=e.filter((function(e){var t;return(null===(t=e[n])||void 0===t?void 0:t.indexOf(l))>=0}))}}));break}if(r instanceof Te){Object.entries(r).forEach((function(t){var a=Object(F.a)(t,2),r=a[0],l=a[1];if("range"===r)e=e.filter((function(e){var t=e[n];if("number"===typeof t){var a=!0;return l instanceof Array&&("number"===typeof l[0]&&(a=a&&t>=l[0]),"number"===typeof l[1]&&(a=a&&t<=l[1])),a}return!0}));else if("number"===typeof l&&!Number.isNaN(l))switch(r){case"equal":e=e.filter((function(e){var t=e[n];return"number"!==typeof t||"number"!==typeof l||t===l}));break;case"notEqual":e=e.filter((function(e){var t=e[n];return"number"!==typeof t||"number"!==typeof l||t!==l}));break;case"less":e=e.filter((function(e){var t=e[n];return"number"!==typeof t||"number"!==typeof l||t<l}));break;case"greater":e=e.filter((function(e){var t=e[n];return"number"!==typeof t||"number"!==typeof l||t>l}));break;case"lessEqual":e=e.filter((function(e){var t=e[n];return"number"!==typeof t||"number"!==typeof l||t<=l}));break;case"greaterEqual":e=e.filter((function(e){var t=e[n];return"number"!==typeof t||"number"!==typeof l||t>=l}))}}));break}if(r instanceof Se){Object.entries(r).forEach((function(t){var a=Object(F.a)(t,2),r=a[0],l=a[1];if("range"===r)e=e.filter((function(e){var t,a=null===(t=e[n])||void 0===t?void 0:t.toDate().getTime();if("number"===typeof a){var r=null!==l&&void 0!==l?l:[],i=Object(F.a)(r,2),c=i[0],o=i[1],u=!0;if(null!==c&&"object"===typeof c){var s=c.toDate().getTime();u=u&&s<=a}if(null!==o&&"object"===typeof o){var f=o.toDate().getTime();u=u&&f>=a}return u}return!0}));else switch(r){case"equal":e=e.filter((function(e){var t,a=null===(t=e[n])||void 0===t?void 0:t.toDate().getTime();if("number"===typeof a&&"object"===typeof l&&null!==l){var r,i=null===(r=l)||void 0===r?void 0:r.toDate().getTime();return"number"!==typeof i||a===i}return!0}));break;case"notEqual":e=e.filter((function(e){var t,a=null===(t=e[n])||void 0===t?void 0:t.toDate().getTime();if("number"===typeof a&&"object"===typeof l&&null!==l){var r,i=null===(r=l)||void 0===r?void 0:r.toDate().getTime();return"number"!==typeof i||a!==i}return!0}));break;case"less":e=e.filter((function(e){var t,a=null===(t=e[n])||void 0===t?void 0:t.toDate().getTime();if("number"===typeof a&&"object"===typeof l&&null!==l){var r,i=null===(r=l)||void 0===r?void 0:r.toDate().getTime();return"number"!==typeof i||a<i}return!0}));break;case"greater":e=e.filter((function(e){var t,a=null===(t=e[n])||void 0===t?void 0:t.toDate().getTime();if("number"===typeof a&&"object"===typeof l&&null!==l){var r,i=null===(r=l)||void 0===r?void 0:r.toDate().getTime();return"number"!==typeof i||a>i}return!0}));break;case"lessEqual":e=e.filter((function(e){var t,a=null===(t=e[n])||void 0===t?void 0:t.toDate().getTime();if("number"===typeof a&&"object"===typeof l&&null!==l){var r,i=null===(r=l)||void 0===r?void 0:r.toDate().getTime();return"number"!==typeof i||a<=i}return!0}));break;case"greaterEqual":e=e.filter((function(e){var t,a=null===(t=e[n])||void 0===t?void 0:t.toDate().getTime();if("number"===typeof a&&"object"===typeof l&&null!==l){var r,i=null===(r=l)||void 0===r?void 0:r.toDate().getTime();return"number"!==typeof i||a>=i}return!0}))}}));break}if(r instanceof qe||r instanceof Ne){Object.entries(r).forEach((function(t){var a=Object(F.a)(t,2),l=a[0],i=a[1];if("string"===typeof i&&""!==i||"number"===typeof i&&!Number.isNaN(i))switch(l){case"equal":e=e.filter((function(e){var t=e[n];return"number"!==typeof t&&"string"!==typeof r||"number"!==typeof i&&"string"!==typeof i||t===i}));break;case"notEqual":e=e.filter((function(e){var t=e[n];return"number"!==typeof t&&"string"!==typeof r||"number"!==typeof i&&"string"!==typeof i||t!==i}));break;case"in":e=e.filter((function(e){var t=e[n];return"number"!==typeof t&&"string"!==typeof r||!(i instanceof Array)||i.includes(t)}));break;case"notIn":e=e.filter((function(e){var t=e[n];return"number"!==typeof t&&"string"!==typeof r||!(i instanceof Array)||!i.includes(t)}))}}));break}}})),e):e}}],[{key:"hasType",value:function(e){return Object.keys(e).length>0}}]),e}()),De=a(46),We=a(125),Le=a.n(We),Me=(a(398),a(126)),Be=a(257),_e=a.n(Be),Pe=a(2),ze=a.n(Pe);a(399);function Ve(e){return"string"===typeof e&&(e=function(e){var t=parseFloat(e.split(",").join(""));if(Number.isNaN(t))return"";return t}(e)),"number"===typeof e?e.toLocaleString():""}function Ue(e){var t=e.defaultValue,a=e.onChange,n=e.className,r=Object(Me.a)(e,["defaultValue","onChange","className"]),l=K.a.useRef(),i=K.a.useState(t),c=Object(F.a)(i,2),o=c[0],u=c[1];K.a.useEffect((function(){"undefined"===typeof t&&u(void 0)}),[t]);var s=K.a.useCallback(x((function(e){u(e),"function"===typeof a&&a(e)})),[a]);return K.a.createElement(_e.a,Object.assign({ref:l,formatter:Ve,defaultValue:t,onChange:s,value:o},r,{className:ze()("input-number",n)}))}Ue.defaultProps={allowNegative:!0,onlyInteger:!1,step:1};var He=Ue;a(400);var Ge=function(e){var t=Object(k.b)(),a=Object(F.a)(t,1)[0],n=null!==e&&void 0!==e?e:{},r=n.value;r=void 0===r?[]:r;var l=Object(F.a)(r,2),i=l[0],c=l[1],o=n.onChange,u=K.a.useCallback((function(e){"function"===typeof o&&o([e,c])}),[c,o]),s=K.a.useCallback((function(e){"function"===typeof o&&o([i,e])}),[i,o]);return K.a.createElement("div",{className:"number-range"},K.a.createElement(He,{defaultValue:i,onChange:u,placeholder:a("general.numberRange.from")}),K.a.createElement("span",{className:"separator"}),K.a.createElement(He,{defaultValue:c,onChange:s,placeholder:a("general.numberRange.to")}))},Ke=Te.types();var Ye=function(e){var t=e.filter,a=e.filterType,n=e.onChange,r=e.className,l=K.a.useCallback((function(){"function"===typeof n&&n(t)}),[t,n]),i=K.a.useCallback((function(e){Ke.forEach((function(a){if(t.hasOwnProperty(a.key))switch(a.key){case"greaterEqual":t.greaterEqual=e[0];break;case"lessEqual":t.lessEqual=e[1];break;default:t.hasOwnProperty(a.key)&&(t[a.key]=void 0)}}))}),[t]),c=K.a.useCallback(x((function(e){t[a]=e,""===e&&"function"===typeof n&&l()})),[t,n,a]);if("range"===a){var o=[t.greaterEqual,t.lessEqual];return K.a.createElement(Ge,{value:o,onChange:i})}return K.a.createElement(He,{defaultValue:t[a],onChange:c,className:r,onPressEnter:l})};a(401);var Je=function(e){var t=e.filter,a=e.filterType,n=e.onChange,r=e.className,l=K.a.useRef(null),i=t[a],c=K.a.useCallback((function(e){t[a]=e.target.value,""===e.target.value&&"function"===typeof n&&n(t)}),[t,a,n]);K.a.useEffect((function(){"undefined"===typeof t[a]&&(l.current.value="")}),[t,a]);var o=K.a.useCallback((function(e){"Enter"===e.key&&"function"===typeof n&&n(t)}),[t,n]);return K.a.createElement("input",{type:"text",ref:l,className:ze()("form-control",r),defaultValue:i,onKeyPress:o,onChange:c})},$e=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).id=new qe,a.code=new xe,a.name=new xe,a.provinceId=new qe,a}return Object(pe.a)(t,e),t}(ge),Qe=(a(402),ne.a.Item);var Xe=function(e){var t=e.field,a=e.model,n=e.setModel,r=Object(k.b)(),l=Object(F.a)(r,1)[0],i=je.useContentTable(a,n,t),c=Object(F.a)(i,1)[0],o=K.a.useState(new $e),u=Object(F.a)(o,2),s=u[0],f=u[1],d=Ae.useLocalTable(c,s,f),b=Object(F.a)(d,7),m=b[0],v=b[1],p=b[2],y=b[3],h=b[4],O=b[5],C=b[6],w=K.a.useMemo((function(){return[{title:l(g.index),key:"index",width:E.index,render:Re(v)},{title:l("provinces.districts.id"),key:"id",sorter:!0,sortOrder:Fe("id",p),dataIndex:"id"},{title:l("provinces.districts.code"),sorter:!0,sortOrder:Fe("code",p)},{title:l("provinces.districts.name"),key:"name",dataIndex:"name",sorter:!0,sortOrder:Fe("name",p)}]}),[c,v,p,l]);return K.a.createElement(K.a.Fragment,null,K.a.createElement(te.a,{title:l(j.search)},K.a.createElement(ne.a,ie,K.a.createElement(De.Row,null,K.a.createElement(De.Col,{className:"pl-1",span:8},K.a.createElement(Qe,{className:"mb-0",label:l("provinces.id")},K.a.createElement(Ye,{filterType:"equal",filter:s.id,onChange:h("id"),className:"w-100"}))),K.a.createElement(De.Col,{className:"pl-1",span:8},K.a.createElement(Qe,{className:"mb-0",label:l("provinces.code")},K.a.createElement(Je,{filterType:"startWith",filter:s.code,onChange:h("code"),className:"w-100"}))),K.a.createElement(De.Col,{className:"pl-1",span:8},K.a.createElement(Qe,{className:"mb-0",label:l("provinces.name")},K.a.createElement(Je,{filterType:"startWith",filter:s.name,onChange:h("name"),className:"w-100"})))),K.a.createElement("div",{className:"d-flex justify-content-end mt-2"},K.a.createElement("button",{className:"btn btn-primary mr-2",onClick:O},l(j.filter)),K.a.createElement("button",{className:"btn btn-outline-secondary text-dark",onClick:C},K.a.createElement("i",{className:"fa mr-2 fa-times"}),l(j.reset))))),K.a.createElement(Le.a,{size:"small",bordered:!0,tableLayout:"fixed",dataSource:m,columns:w,pagination:v,onChange:y}))},Ze=(a(575),"/api/province/province-master"),et="/api/province/province-detail",tt=function(){function e(t,a,n){Object(ue.a)(this,e),this.http=void 0,this.http=function(e,t,a){var n=c.a.create(e);return t&&n.interceptors.request.use(t),a&&n.interceptors.response.use(a),n}(t,a,n),"function"===typeof e._defaultRequestInterceptor&&this.http.interceptors.request.use(e._defaultRequestInterceptor),"function"===typeof e._defaultResponseInterceptor&&this.http.interceptors.response.use(e._defaultResponseInterceptor)}return Object(se.a)(e,[{key:"setBaseURL",value:function(e){this.http.defaults.baseURL=e}},{key:"getHttpInstance",value:function(){return this.http}}],[{key:"defaultRequestInterceptor",set:function(e){this._defaultRequestInterceptor=e}},{key:"defaultResponseInterceptor",set:function(e){this._defaultResponseInterceptor=e}}]),e}();tt._defaultRequestInterceptor=void 0,tt._defaultResponseInterceptor=void 0;var at=a(50),nt=a.n(at),rt=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).id=void 0,a.code=void 0,a.name=void 0,a.districtId=void 0,a.district=void 0,a.errors=void 0,a}return Object(pe.a)(t,e),Object(se.a)(t,null,[{key:"clone",value:function(e){var t=new he;return"undefined"!==typeof e&&null!==e?(Object.assign(t,Object(S.a)({},e,{district:null===lt||void 0===lt?void 0:lt.clone(e.district)})),t):null}}]),t}(he),lt=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).id=void 0,a.code=void 0,a.name=void 0,a.provinceId=void 0,a.province=void 0,a.wards=void 0,a.errors=void 0,a}return Object(pe.a)(t,e),Object(se.a)(t,null,[{key:"clone",value:function(e){var t,a=new he;return"undefined"!==typeof e&&null!==e?(Object.assign(a,Object(S.a)({},e,{province:null===it||void 0===it?void 0:it.clone(e.province),wards:null===(t=e.wards)||void 0===t?void 0:t.map((function(e){return rt.clone(e)}))})),a):null}}]),t}(he),it=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).id=void 0,a.code=void 0,a.name=void 0,a.districts=void 0,a.errors=void 0,a}return Object(pe.a)(t,e),Object(se.a)(t,null,[{key:"clone",value:function(e){var t,a=new he;return"undefined"!==typeof e&&null!==e?(Object.assign(a,Object(S.a)({},e,{districts:null===(t=e.districts)||void 0===t?void 0:t.map((function(e){return lt.clone(e)}))})),a):null}}]),t}(he),ct=new(function(e){function t(){var e;return Object(ue.a)(this,t),(e=Object(be.a)(this,Object(me.a)(t).call(this))).get=function(t){return e.http.post(nt()("get"),t).then((function(e){return it.clone(e.data)}))},e.create=function(t){return e.http.post(nt()("create"),t).then((function(e){return it.clone(e.data)}))},e.update=function(t){return e.http.post(nt()("update"),t).then((function(e){return it.clone(e.data)}))},e.delete=function(t){return e.http.post(nt()("delete"),t).then((function(e){return he.clone(e.data)}))},e.save=function(t){return t.id?e.update(t):e.create(t)},e.setBaseURL(I(et)),e}return Object(pe.a)(t,e),t}(tt)),ot=ne.a.Item;var ut=function(){var e=Object(k.b)(),t=Object(F.a)(e,1)[0],a=je.useDetail(w,ct.get,ct.save),n=Object(F.a)(a,7),r=n[0],l=n[1],i=n[2],c=n[3],o=n[4],u=n[5],s=n[6],f=Ae.useDeleteHandler(ct.delete,c,r,l,u);return K.a.createElement("div",{className:"page detail-page"},K.a.createElement(le.a,{spinning:i},K.a.createElement(te.a,{title:K.a.createElement("div",{className:"d-flex align-items-center"},K.a.createElement("button",{className:"btn btn-link mr-2",onClick:u},K.a.createElement("i",{className:"fa fa-arrow-left"})),o?t("provinces.detail.title",r):t("provinces.add.title"))},K.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-4"},K.a.createElement("button",{className:"btn btn-primary",onClick:s},K.a.createElement("i",{className:"fa fa-save mr-2"}),t(j.save))),K.a.createElement(ne.a,ce,K.a.createElement(ot,{label:t("provinces.id")},K.a.createElement("input",{type:"text",className:"form-control",name:"id",defaultValue:r.id,disabled:!0})),K.a.createElement(ot,{label:t("provinces.code")},K.a.createElement("input",{type:"text",className:"form-control",name:"code",defaultValue:r.code})),K.a.createElement(ot,{label:t("provinces.name")},K.a.createElement("input",{type:"text",className:"form-control",name:"name",defaultValue:r.name}))),K.a.createElement("div",{className:"w-100"},K.a.createElement(Xe,{field:"districts",model:r,setModel:l})),K.a.createElement("div",{className:"d-flex justify-content-between mt-4"},K.a.createElement("div",{className:"flex-grow-1"},o&&K.a.createElement("button",{className:"btn btn-danger",onClick:f},K.a.createElement("i",{className:"fa fa-trash mr-2"}),t(j.delete))),K.a.createElement("button",{className:"btn btn-primary",onClick:s},K.a.createElement("i",{className:"fa fa-save mr-2"}),t(j.save))))))},st=(a(585),a(100)),ft=a(259),dt=a.n(ft),bt=a(261),mt=a.n(bt),vt=a(262),pt=a.n(vt),yt=a(260),ht=a.n(yt);a(588);function gt(e){var t=Object(k.b)(),a=Object(F.a)(t,1)[0],n=e.title,r=e.children,l=e.className,i=e.onClose,c=Object(Me.a)(e,["title","children","className","onClose"]);return K.a.createElement(dt.a,Object.assign({},c,{className:ze()("master-preview",l),unmountOnClose:!0}),K.a.createElement(ht.a,{title:a(n)},a(n)),K.a.createElement(mt.a,null,r),K.a.createElement(pt.a,null,K.a.createElement("button",{className:"btn btn-primary",onClick:i},a("general.actions.close"))))}gt.defaultProps={title:"general.master.defaultPreviewTitle"};var jt=gt,Ot=function(e){function t(){var e,a;Object(ue.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(be.a)(this,(e=Object(me.a)(t)).call.apply(e,[this].concat(r)))).id=new qe,a.code=new xe,a.name=new xe,a}return Object(pe.a)(t,e),t}(ge),kt=(a(591),new(function(e){function t(){var e;return Object(ue.a)(this,t),(e=Object(be.a)(this,Object(me.a)(t).call(this))).count=function(t){return e.http.post(nt()("count"),t).then((function(e){return e.data}))},e.list=function(t){return e.http.post(nt()("list"),t).then((function(e){return e.data.map((function(e){return it.clone(e)}))}))},e.get=function(t){return e.http.post(nt()("get"),t).then((function(e){return it.clone(e.data)}))},e.delete=function(t){return e.http.post(nt()("delete"),t).then((function(e){return it.clone(e.data)}))},e.batchDelete=function(t){return e.http.post(nt()("batchDelete"),{idList:t}).then((function(e){return e.data}))},e.setBaseURL(I(Ze)),e}return Object(pe.a)(t,e),t}(tt))),Et=ne.a.Item;var Ct=function(){var e=Object(k.b)(),t=Object(F.a)(e,1)[0],a=je.useMaster(w,kt.list,kt.count,Ot),n=Object(F.a)(a,14),r=n[0],l=n[1],i=n[2],c=n[3],o=n[4],u=n[5],s=n[6],f=n[7],d=n[8],b=n[9],m=n[10],v=n[11],p=n[12],y=n[13],h=Ae.useMasterTable(l,i,c),O=Object(F.a)(h,3),C=O[0],N=O[1],q=O[2],x=Ae.useRowSelection(),T=Object(F.a)(x,3),S=T[0],I=T[1],R=T[2],A=K.a.useMemo((function(){return[{title:t(g.index),key:"index",width:E.index,render:Re(C)},{title:t("provinces.id"),key:"id",sorter:!0,sortOrder:Fe("id",N),dataIndex:"id"},{title:t("provinces.code"),sorter:!0,sortOrder:Fe("code",N)},{title:t("provinces.name"),key:"name",dataIndex:"name",sorter:!0,sortOrder:Fe("name",N)},{title:t(j.label),key:"actions",dataIndex:"id",width:E.actions,align:"center",render:function(e,t){return K.a.createElement("div",{className:"d-flex justify-content-center"},K.a.createElement("button",{className:"btn btn-link text-warning",onClick:p(t)},K.a.createElement("i",{className:"fa fa-eye"})),K.a.createElement("button",{className:"btn btn-link",onClick:f(e)},K.a.createElement("i",{className:"fa fa-edit"})))}}]}),[f,p,C,v.code,v.id,v.name,N,t]);return K.a.createElement("div",{className:"page master-page"},K.a.createElement(te.a,{title:t("provinces.master.title")},K.a.createElement(te.a,{className:"mb-4",title:t(j.search)},K.a.createElement(ne.a,ie,K.a.createElement(De.Row,null,K.a.createElement(De.Col,{className:"pl-1",span:8},K.a.createElement(Et,{className:"mb-0",label:t("provinces.id")},K.a.createElement(Ye,{filterType:"equal",filter:l.id,onChange:d("id"),className:"w-100"}))),K.a.createElement(De.Col,{className:"pl-1",span:8},K.a.createElement(Et,{className:"mb-0",label:t("provinces.code")},K.a.createElement(Je,{filterType:"startWith",filter:l.code,onChange:d("code"),className:"w-100"}))),K.a.createElement(De.Col,{className:"pl-1",span:8},K.a.createElement(Et,{className:"mb-0",label:t("provinces.name")},K.a.createElement(Je,{filterType:"startWith",filter:l.name,onChange:d("name"),className:"w-100"})))),K.a.createElement("div",{className:"d-flex justify-content-end mt-2"},K.a.createElement("button",{className:"btn btn-primary mr-2",onClick:b},t(j.filter)),K.a.createElement("button",{className:"btn btn-outline-secondary text-dark",onClick:s},K.a.createElement("i",{className:"fa mr-2 fa-times"}),t(j.reset))))),K.a.createElement(Le.a,{dataSource:r,columns:A,bordered:!0,size:"small",tableLayout:"fixed",loading:o,rowKey:"id",pagination:C,rowSelection:{onChange:I,selectedRowKeys:S},onChange:q,title:function(){return K.a.createElement(K.a.Fragment,null,K.a.createElement("div",{className:"d-flex justify-content-between"},K.a.createElement("div",{className:"flex-shrink-1 d-flex align-items-center"},K.a.createElement("button",{className:"btn btn-primary mr-2",onClick:u},K.a.createElement("i",{className:"fa mr-2 fa-plus"}),t(j.add)),K.a.createElement("button",{className:"btn btn-danger mr-2",disabled:!R},K.a.createElement("i",{className:"fa mr-2 fa-trash"}),t(j.delete)),K.a.createElement("button",{className:"btn btn-outline-primary mr-2"},K.a.createElement("i",{className:"fa mr-2 fa-upload"}),t(j.import)),K.a.createElement("button",{className:"btn btn-outline-primary mr-2"},K.a.createElement("i",{className:"fa mr-2 fa-download"}),t(j.export))),K.a.createElement("div",{className:"flex-shrink-1 d-flex align-items-center"},t("general.master.pagination",{pageSize:C.pageSize,total:c}))))}}),K.a.createElement(jt,{isOpen:m,onClose:y,size:"xl"},K.a.createElement(st.a,{title:v.name,bordered:!0},K.a.createElement(st.a.Item,{label:t("provinces.id")},v.id),K.a.createElement(st.a.Item,{label:t("provinces.code")},v.code),K.a.createElement(st.a.Item,{label:t("provinces.name")},v.name)))))};a(592);var wt=Object(Y.o)((function(e){var t=e.route;return K.a.createElement(Y.g,null,(null===t||void 0===t?void 0:t.routes)instanceof Array&&Object(J.a)(t.routes))})),Nt=[{name:"menu.root",path:"/",component:Z,routes:[{name:"menu.provinces.name",path:w,component:wt,routes:[{name:"menu.provinces.add",path:s.a.join(w,"add"),component:ut},{name:"menu.provinces.detail",path:s.a.join(w,":id"),component:ut},{name:"menu.provinces.master",path:s.a.join(w),component:Ct,exact:!0}]}]}];var qt=function(e){var t=e.routes,a=d.a.useGlobal("title"),n=Object(F.a)(a,1)[0];return d.a.useEffect((function(){document.title=n}),[n]),d.a.createElement(Y.g,null,Object(J.a)(t))},xt=a(6),Tt=a.n(xt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(593),a(594),a(595),a(596),a(597),a(598);Promise.all([o.a.use(k.a).init(C).then((function(){return e="vi",l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(Object(f.setGlobal)({loading:!0}));case 2:return t.next=4,l.a.awrap(c.a.get(Object(u.join)("/i18n","".concat(e,".json"))).then((function(t){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(o.a.addResource(e,"","",t.data));case 2:return a.next=4,l.a.awrap(o.a.changeLanguage(e));case 4:return a.next=6,l.a.awrap(Object(f.setGlobal)({language:e}));case 6:case"end":return a.stop()}}))})));case 4:case"end":return t.stop()}}));var e})),Object(f.setGlobal)(O)]).then((function(){var e=document.getElementById("root");(e.hasChildNodes()?Tt.a.hydrate:Tt.a.render)(d.a.createElement($.BrowserRouter,null,d.a.createElement(qt,{routes:Nt})),e),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}))}},[[264,1,2]]]);
//# sourceMappingURL=main.da36c910.chunk.js.map