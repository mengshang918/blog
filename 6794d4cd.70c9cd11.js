(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{192:function(e,t,n){"use strict";var r=n(0),a=n(22);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},193:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(15),c=n(195),u=n(11),i=Object(r.createContext)({collectLink:function(){}}),s=n(194),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,v=e.to,b=e.href,m=e.activeClassName,p=e["data-noBrokenLinkCheck"],h=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),E=Object(s.b)().withBaseUrl,w=Object(r.useContext)(i),O=v||b,g=Object(c.a)(O),k=null==O?void 0:O.replace("pathname://",""),j=void 0!==k?function(e){return e.startsWith("/")}(n=k)?E(n):n:void 0,y=Object(r.useRef)(!1),_=f?o.e:o.c,C=u.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&g&&window.docusaurus.prefetch(j),function(){C&&d&&d.disconnect()}}),[j,C,g]);var N=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,x=!j||!g||N;return j&&g&&!N&&!p&&w.collectLink(j),x?a.a.createElement("a",Object.assign({href:j},!g&&{target:"_blank",rel:"noopener noreferrer"},h)):a.a.createElement(_,Object.assign({},h,{onMouseEnter:function(){y.current||(window.docusaurus.preload(j),y.current=!0)},innerRef:function(e){var t,n;C&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(j)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:j||""},f&&{activeClassName:m}))}},194:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(192),a=n(195);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,u=void 0!==c&&c,i=o.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},195:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},198:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(193),c=n(172),u=n.n(c),i=function(e){var t=e.to,n=e.children;return a.a.createElement(o.a,{className:u.a.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};t.a=function(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement("nav",{className:u.a.nav},a.a.createElement(i,{to:"/__docusaurus/debug"},"Config"),a.a.createElement(i,{to:"/__docusaurus/debug/metadata"},"Metadata"),a.a.createElement(i,{to:"/__docusaurus/debug/registry"},"Registry"),a.a.createElement(i,{to:"/__docusaurus/debug/routes"},"Routes"),a.a.createElement(i,{to:"/__docusaurus/debug/content"},"Content"),a.a.createElement(i,{to:"/__docusaurus/debug/globalData"},"Global data")),a.a.createElement("main",{className:u.a.container},t))}},78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(198),c=n(25),u=n(187),i=n.n(u);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement("h2",null,"Registry"),a.a.createElement("ul",{className:i.a.list},Object.values(c.a).map((function(e){var t=e[1],n=e[2];return a.a.createElement("li",{key:t,className:i.a.listItem},a.a.createElement("div",{style:{marginBottom:"10px"}},"Aliased Path: ",a.a.createElement("code",null,t)),a.a.createElement("div",null,"Resolved Path: ",a.a.createElement("code",null,n)))}))))}}}]);