(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{192:function(e,t,n){"use strict";var a=n(0),r=n(22);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},193:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(192),r=n(195);function c(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,o=c.forcePrependBaseUrl,i=void 0!==o&&o,u=c.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},194:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(15),o=n(195),i=n(11),u=Object(a.createContext)({collectLink:function(){}}),s=n(193),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,v=e.to,m=e.href,b=e.activeClassName,E=e["data-noBrokenLinkCheck"],p=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),h=Object(s.b)().withBaseUrl,w=Object(a.useContext)(u),O=v||m,g=Object(o.a)(O),j=null==O?void 0:O.replace("pathname://",""),k=void 0!==j?function(e){return e.startsWith("/")}(n=j)?h(n):n:void 0,y=Object(a.useRef)(!1),N=f?c.e:c.c,_=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!_&&g&&window.docusaurus.prefetch(k),function(){_&&d&&d.disconnect()}}),[k,_,g]);var C=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,x=!k||!g||C;return k&&g&&!C&&!E&&w.collectLink(k),x?r.a.createElement("a",Object.assign({href:k},!g&&{target:"_blank",rel:"noopener noreferrer"},p)):r.a.createElement(N,Object.assign({},p,{onMouseEnter:function(){y.current||(window.docusaurus.preload(k),y.current=!0)},innerRef:function(e){var t,n;_&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(k)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:k||""},f&&{activeClassName:b}))}},195:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},198:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(194),o=n(172),i=n.n(o),u=function(e){var t=e.to,n=e.children;return r.a.createElement(c.a,{className:i.a.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("nav",{className:i.a.nav},r.a.createElement(u,{to:"/__docusaurus/debug"},"Config"),r.a.createElement(u,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.a.createElement(u,{to:"/__docusaurus/debug/registry"},"Registry"),r.a.createElement(u,{to:"/__docusaurus/debug/routes"},"Routes"),r.a.createElement(u,{to:"/__docusaurus/debug/content"},"Content"),r.a.createElement(u,{to:"/__docusaurus/debug/globalData"},"Global data")),r.a.createElement("main",{className:i.a.container},t))}},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(198),o=n(192),i=n(188),u=n.n(i);t.default=function(){var e=Object(o.a)().siteMetadata;return r.a.createElement(c.a,null,r.a.createElement("h2",null,"Site Metadata"),r.a.createElement("div",null,"Docusaurus Version: ",r.a.createElement("code",null,e.docusaurusVersion)),r.a.createElement("div",null,"Site Version:"," ",r.a.createElement("code",null,e.siteVersion||"No version specified")),r.a.createElement("h3",{className:u.a.sectionTitle},"Plugins and themes"),r.a.createElement("ul",{className:u.a.list},Object.entries(e.pluginVersions).map((function(e){var t=e[0],n=e[1];return r.a.createElement("li",{key:t,className:u.a.listItem},n.version&&r.a.createElement("div",{className:u.a.version},r.a.createElement("code",null,n.version)),r.a.createElement("div",{className:u.a.name},t),r.a.createElement("div",null,"Type: ",n.type))}))))}}}]);