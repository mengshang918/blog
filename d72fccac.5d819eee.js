(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),o=(n(0),n(193)),c={id:"3044cf73a36f83e5344247f79ffb719e",title:"Tapable"},i={unversionedId:"\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/3044cf73a36f83e5344247f79ffb719e",id:"\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/3044cf73a36f83e5344247f79ffb719e",isDocsHomePage:!1,title:"Tapable",description:"1. hooks \u5747\u7ee7\u627f\u81ea hook(lib/Hook.js)",source:"@site/../docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/Tapable.md",slug:"/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/3044cf73a36f83e5344247f79ffb719e",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/3044cf73a36f83e5344247f79ffb719e",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/Tapable.md",version:"current",sidebar:"sidebar",previous:{title:"TODO",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/plugins/e4ca5b7dca8f9439c1afac8537f4615d"},next:{title:"webpack",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/8b9409a6ad189493556150ffca9a2079"}},p=[],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"hooks \u5747\u7ee7\u627f\u81ea hook(lib/Hook.js)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Tap tapAsync tappromise \u4f1a\u628a handler \u4e22\u5165\u5230\u6570\u7ec4\u4e2d\u3002")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"call callAsync callpromise \u4f1a\u4f9d\u6b21\u6267\u884c\u6570\u7ec4\u4e2d\u7684 handler"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//\u4ee5SyncHook\u4e3a\u4f8b \u7cbe\u7b80\u7248\nlass SyncHookCodeFactory extends HookCodeFactory {\n    content({ onError, onDone, rethrowIfPossible }) {\n        return this.callTapsSeries({\n            onError: (i, err) => onError(err),\n            onDone,\n            rethrowIfPossible\n        });\n    }\n}\n\nconst factory = new SyncHookCodeFactory();\nconst COMPILE = function(options) {\n    factory.setup(this, options);\n    return factory.create(options);\n};\n")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"call")," \u3001",Object(o.b)("inlineCode",{parentName:"p"},"callAsync"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"callpromise"),"\u6700\u7ec8\u4f1a\u8c03\u7528\u6bcf\u4e2a hook \u7684",Object(o.b)("inlineCode",{parentName:"p"},"COMPILE"),"\u65b9\u6cd5")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"COMPILE \u65b9\u6cd5\u4f1a\u5b9e\u4f8b\u5316\u7ee7\u627f\u81ea HookCodeFactory \u7684\u76f8\u5e94\u7c7b\u5e76\u8c03\u7528 HookCodeFactory \u7684 create \u65b9\u6cd5"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"create"),"\u65b9\u6cd5\u7528 new Function('a','b','return a+b')\u65b9\u5f0f\u53bb\u521b\u5efa\u6bcf\u4e2a handler \u7684\u6267\u884c\u51fd\u6570\u5b57\u7b26\u4e32"),Object(o.b)("p",{parentName:"li"},"\u95ee\uff1a\u4e3a\u5565\u7528 new Function \u53bb\u521b\u5efa\u51fd\u6570\uff1f"),Object(o.b)("p",{parentName:"li"},"\u7b54\uff1a\u51fd\u6570\u5165\u53c2\u548c\u51fd\u6570\u4f53\u4f1a\u6839\u636e\u5165\u53c2\u7684\u957f\u5ea6\u800c\u52a8\u6001\u751f\u6210\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6765\u63a7\u5236\u4f20\u5165\u53c2\u6570\u7684\u4e2a\u6570\uff0c\u5e76\u4e14\u51fd\u6570\u4e5f\u53ea\u5904\u7406\u8fd9\u51e0\u4e2a\u5165\u53c2\u3002"))))))))}b.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=b(n),u=r,m=f["".concat(c,".").concat(u)]||f[u]||s[u]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);