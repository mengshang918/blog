(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(7),o=(n(0),n(190)),c={id:"8298e5267337a10b9732ea03dd9dee69",title:"webpack\u5e38\u89c1js\u65b9\u6cd5"},i={unversionedId:"\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/8298e5267337a10b9732ea03dd9dee69",id:"\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/8298e5267337a10b9732ea03dd9dee69",isDocsHomePage:!1,title:"webpack\u5e38\u89c1js\u65b9\u6cd5",description:"1. \u4e8c\u7ef4\u6570\u7ec4\u8f6c\u4e00\u7ef4",source:"@site/../docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/webpack\u5e38\u89c1js\u65b9\u6cd5.md",slug:"/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/8298e5267337a10b9732ea03dd9dee69",permalink:"/blog/docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/8298e5267337a10b9732ea03dd9dee69",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/webpack\u5e38\u89c1js\u65b9\u6cd5.md",version:"current",sidebar:"sidebar",previous:{title:"webpack\u4f9d\u8d56\u7684\u5305",permalink:"/blog/docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/0f6231d58a04f4f90a1d4f46fe7763ba"},next:{title:"webpack\u6e90\u7801\u89e3\u8bfb",permalink:"/blog/docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/bcedcc35cd9b79579bde7ce42c717ec0"}},b=[],p={rightToc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u4e8c\u7ef4\u6570\u7ec4\u8f6c\u4e00\u7ef4"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//errors\u662f\u4e8c\u7ef4\u6570\u7ec4[[1\uff0c2]\uff0c[3\uff0c4]] => [1,2,3,4]\nerrors.reduce((arr, items) => arr.concat(items), [])\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u83b7\u53d6\u5bf9\u8c61\u952e\u503c"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//\u5b89\u5168\u83b7\u53d6obj.a.b.c getProperty(obj,'a.b.c'),\u82e5obj.a.b.c\u83b7\u53d6\u4e0d\u5230\u5219\u4e3aundefined\nconst getProperty = (obj, path) => {\n  let name = path.split('.')\n  for (let i = 0; i < name.length - 1; i++) {\n    obj = obj[name[i]]\n    if (typeof obj !== 'object' || !obj || Array.isArray(obj)) return\n  }\n  return obj[name.pop()]\n}\n\n//\u8bbe\u7f6eobj.a.b.c=value;\u82e5\u67d0\u4e2a\u503c\u4e0d\u662f\u5bf9\u8c61\u6216\u8005\u4e3a\u7a7a\u3001\u6570\u7ec4,\u5219\u8bbe\u7f6e\u5931\u8d25\nconst setProperty = (obj, path, value) => {\n  let name = path.split('.')\n  for (let i = 0; i < name.length - 1; i++) {\n    if (typeof obj[name[i]] !== 'object' && obj[name[i]] !== undefined)\n      return\n    if (Array.isArray(obj[name[i]])) return\n    if (!obj[name[i]]) obj[name[i]] = {}\n    obj = obj[name[i]]\n  }\n  obj[name.pop()] = value\n}\n"))),Object(o.b)("li",{parentName:"ol"})))}l.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=l(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);