(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(7),c=(n(0),n(235)),o={id:"7cb10912f28c1696659c6131b517f27c",title:"webpack\u5e38\u89c1js\u65b9\u6cd5"},b={unversionedId:"\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/7cb10912f28c1696659c6131b517f27c",id:"\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/7cb10912f28c1696659c6131b517f27c",isDocsHomePage:!1,title:"webpack\u5e38\u89c1js\u65b9\u6cd5",description:"1. \u4e8c\u7ef4\u6570\u7ec4\u8f6c\u4e00\u7ef4",source:"@site/../docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/webpack\u5e38\u89c1js\u65b9\u6cd5.md",slug:"/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/7cb10912f28c1696659c6131b517f27c",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/7cb10912f28c1696659c6131b517f27c",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/webpack\u5e38\u89c1js\u65b9\u6cd5.md",version:"current",sidebar:"sidebar",previous:{title:"webpack\u4f9d\u8d56\u7684\u5305",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/0889ebe5191ee49173a6c02e5d4ccd6f"},next:{title:"webpack\u6e90\u7801\u89e3\u8bfb",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/80e8979bbebe30571bf98fea6d3b32d0"}},i=[],p={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u4e8c\u7ef4\u6570\u7ec4\u8f6c\u4e00\u7ef4"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//errors\u662f\u4e8c\u7ef4\u6570\u7ec4[[1\uff0c2]\uff0c[3\uff0c4]] => [1,2,3,4]\nerrors.reduce((arr, items) => arr.concat(items), [])\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u83b7\u53d6\u5bf9\u8c61\u952e\u503c"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//\u5b89\u5168\u83b7\u53d6obj.a.b.c getProperty(obj,'a.b.c'),\u82e5obj.a.b.c\u83b7\u53d6\u4e0d\u5230\u5219\u4e3aundefined\nconst getProperty = (obj, path) => {\n  let name = path.split('.')\n  for (let i = 0; i < name.length - 1; i++) {\n    obj = obj[name[i]]\n    if (typeof obj !== 'object' || !obj || Array.isArray(obj)) return\n  }\n  return obj[name.pop()]\n}\n\n//\u8bbe\u7f6eobj.a.b.c=value;\u82e5\u67d0\u4e2a\u503c\u4e0d\u662f\u5bf9\u8c61\u6216\u8005\u4e3a\u7a7a\u3001\u6570\u7ec4,\u5219\u8bbe\u7f6e\u5931\u8d25\nconst setProperty = (obj, path, value) => {\n  let name = path.split('.')\n  for (let i = 0; i < name.length - 1; i++) {\n    if (typeof obj[name[i]] !== 'object' && obj[name[i]] !== undefined)\n      return\n    if (Array.isArray(obj[name[i]])) return\n    if (!obj[name[i]]) obj[name[i]] = {}\n    obj = obj[name[i]]\n  }\n  obj[name.pop()] = value\n}\n"))),Object(c.b)("li",{parentName:"ol"})))}l.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(o,".").concat(f)]||u[f]||s[f]||c;return n?a.a.createElement(m,b(b({ref:t},p),{},{components:n})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);