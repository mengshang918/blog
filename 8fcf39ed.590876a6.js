(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(7),a=(n(0),n(190)),c={id:"521df613ece5d7cb408b20062c19e43b",title:"Tapable"},i={unversionedId:"\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/521df613ece5d7cb408b20062c19e43b",id:"\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/521df613ece5d7cb408b20062c19e43b",isDocsHomePage:!1,title:"Tapable",description:"1. hooks \u5747\u7ee7\u627f\u81ea hook(lib/Hook.js)",source:"@site/../docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/Tapable.md",slug:"/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/521df613ece5d7cb408b20062c19e43b",permalink:"/blog/docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/521df613ece5d7cb408b20062c19e43b",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/Tapable.md",version:"current",sidebar:"sidebar",previous:{title:"TODO",permalink:"/blog/docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/plugins/5057b724ff9ef878a6499ae8130f0f74"},next:{title:"webpack",permalink:"/blog/docs/\u5de5\u7a0b\u5316/build\u6253\u5305\u6784\u5efa/webpack/\u6e90\u7801\u89e3\u8bfb/f8850ecc0cd40bf7ce85f24b413ee093"}},b=[],l={rightToc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"hooks \u5747\u7ee7\u627f\u81ea hook(lib/Hook.js)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Tap tapAsync tappromise \u4f1a\u628a handler \u4e22\u5165\u5230\u6570\u7ec4\u4e2d\u3002")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"call callAsync callpromise \u4f1a\u4f9d\u6b21\u6267\u884c\u6570\u7ec4\u4e2d\u7684 handler"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//\u4ee5SyncHook\u4e3a\u4f8b \u7cbe\u7b80\u7248\nlass SyncHookCodeFactory extends HookCodeFactory {\n    content({ onError, onDone, rethrowIfPossible }) {\n        return this.callTapsSeries({\n            onError: (i, err) => onError(err),\n            onDone,\n            rethrowIfPossible\n        });\n    }\n}\n\nconst factory = new SyncHookCodeFactory();\nconst COMPILE = function(options) {\n    factory.setup(this, options);\n    return factory.create(options);\n};\n")),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"call")," \u3001",Object(a.b)("inlineCode",{parentName:"p"},"callAsync"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"callpromise"),"\u6700\u7ec8\u4f1a\u8c03\u7528\u6bcf\u4e2a hook \u7684",Object(a.b)("inlineCode",{parentName:"p"},"COMPILE"),"\u65b9\u6cd5")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"COMPILE \u65b9\u6cd5\u4f1a\u5b9e\u4f8b\u5316\u7ee7\u627f\u81ea HookCodeFactory \u7684\u76f8\u5e94\u7c7b\u5e76\u8c03\u7528 HookCodeFactory \u7684 create \u65b9\u6cd5"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"create"),"\u65b9\u6cd5\u7528 new Function('a','b','return a+b')\u65b9\u5f0f\u53bb\u521b\u5efa\u6bcf\u4e2a handler \u7684\u6267\u884c\u51fd\u6570\u5b57\u7b26\u4e32"),Object(a.b)("p",{parentName:"li"},"\u95ee\uff1a\u4e3a\u5565\u7528 new Function \u53bb\u521b\u5efa\u51fd\u6570\uff1f"),Object(a.b)("p",{parentName:"li"},"\u7b54\uff1a\u51fd\u6570\u5165\u53c2\u548c\u51fd\u6570\u4f53\u4f1a\u6839\u636e\u5165\u53c2\u7684\u957f\u5ea6\u800c\u52a8\u6001\u751f\u6210\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6765\u63a7\u5236\u4f20\u5165\u53c2\u6570\u7684\u4e2a\u6570\uff0c\u5e76\u4e14\u51fd\u6570\u4e5f\u53ea\u5904\u7406\u8fd9\u51e0\u4e2a\u5165\u53c2\u3002"))))))))}p.isMDXComponent=!0}}]);