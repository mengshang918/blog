(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{126:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(229),a=n(224),o=n(225);t.default=function(){var e=Object(i.useState)(0),t=e[0],n=e[1],u=Object(a.a)().siteConfig,s=void 0===u?{}:u;Object(i.useEffect)((function(){n(document.querySelector(".main-wrapper").getBoundingClientRect().height)}),[]);var d=Object(i.useCallback)((function(){n(document.querySelector(".main-wrapper").getBoundingClientRect().height)}));return Object(i.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}})),r.a.createElement(c.a,{title:s.title+"|\u601d\u7ef4\u5bfc\u56fe"},r.a.createElement("iframe",{src:Object(o.a)("xmind.html"),frameBorder:"0",style:{minHeight:600},height:t,width:"100%"}))}}}]);