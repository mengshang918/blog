(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{89:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(196),a=n(191),o=n(193);t.default=function(){const[e,t]=Object(i.useState)(0),n=Object(a.a)(),{siteConfig:s={}}=n;Object(i.useEffect)(()=>{t(document.querySelector(".main-wrapper").getBoundingClientRect().height)},[]);const u=Object(i.useCallback)(()=>{t(document.querySelector(".main-wrapper").getBoundingClientRect().height)});return Object(i.useEffect)(()=>(window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),c.a.createElement(r.a,{title:s.title+"|\u601d\u7ef4\u5bfc\u56fe"},c.a.createElement("iframe",{src:Object(o.a)("xmind.html"),frameBorder:"0",style:{minHeight:600},height:e,width:"100%"}))}}}]);