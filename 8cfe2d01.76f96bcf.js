(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),c=(n(0),n(209)),i=n(211),o={id:"80e8979bbebe30571bf98fea6d3b32d0",title:"webpack\u6e90\u7801\u89e3\u8bfb"},p={unversionedId:"\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/80e8979bbebe30571bf98fea6d3b32d0",id:"\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/80e8979bbebe30571bf98fea6d3b32d0",isDocsHomePage:!1,title:"webpack\u6e90\u7801\u89e3\u8bfb",description:"- \u53c2\u8003",source:"@site/../docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/webpack\u6e90\u7801\u89e3\u8bfb.md",slug:"/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/80e8979bbebe30571bf98fea6d3b32d0",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/80e8979bbebe30571bf98fea6d3b32d0",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/webpack\u6e90\u7801\u89e3\u8bfb.md",version:"current",sidebar:"sidebar",previous:{title:"webpack\u5e38\u89c1js\u65b9\u6cd5",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/7cb10912f28c1696659c6131b517f27c"},next:{title:"\u70ed\u66f4\u65b0\u539f\u7406",permalink:"/blog/docs/\u5de5\u7a0b\u5316/\u6253\u5305/webpack/\u6e90\u7801\u89e3\u8bfb/768e191e2dc797ba437ddbf619dcf3b5"}},b=[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],l={rightToc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#%E5%8F%82%E8%80%83"}),"\u53c2\u8003"))),Object(c.b)("p",null,"\u672c\u6587\u53ea\u662f\u7b14\u8005\u521d\u6b21\u5b66\u4e60 webpack \u6e90\u7801\u6240\u5199\uff08\u611f\u8c22",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://juejin.im/user/57e1143479bc44610a4a9577"}),"\u4f9d\u67f3\u8bda"),"\u63d0\u4f9b\u7684\u9605\u8bfb webpack \u6e90\u7801\u7684\u601d\u8def\uff09\uff0c\u4f9b\u4ee5\u540e\u7cbe\u8bfb\u4f5c\u76ee\u5f55\u4f7f\u7528\u3002"),Object(c.b)("img",{src:Object(i.a)("img/webpack_process.jpg")}),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"vscode debug")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"lib/index.js \u5165\u53e3")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"lib/webpack.js"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const webpack = require('../lib/index.js') // \u76f4\u63a5\u4f7f\u7528\u6e90\u7801\u4e2d\u7684webpack\u51fd\u6570\nconst config = require('./webpack.config')\nconst compiler = webpack(config)\n")),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u6821\u9a8c options")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"createCompiler(options)\u521b\u5efa compiler \u5bf9\u8c61\u5e76\u653e\u56de"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//\u7cbe\u7b80\u7248\nconst createCompiler = (rawOptions) => {\n  // lib/compiler.js\n  const compiler = new Compiler(options.context)\n  if (Array.isArray(options.plugins)) {\n    for (const plugin of options.plugins) {\n      if (typeof plugin === 'function') {\n        plugin.call(compiler, compiler)\n      } else {\n        //\u6267\u884c\u63d2\u4ef6\u7684apply\u65b9\u6cd5\u3002\u8fd9\u4e5f\u662f\u4e3a\u5565\u81ea\u5b9a\u4e49\u63d2\u4ef6\u8981\u6709\u4e00\u4e2aapply\u65b9\u6cd5\u7684\u539f\u56e0\n        plugin.apply(compiler)\n      }\n    }\n  }\n  //\u5bf9options\u914d\u7f6e\u9879 \u8fdb\u884c\u515c\u5e95\u8d4b\u503c\n  applyWebpackOptionsDefaults(options)\n  //\u6839\u636eoptions\u4e2d\u914d\u7f6e\u7684target\u5c5e\u6027\uff0c\u52a0\u8f7dwebpack\u9ed8\u8ba4\u7684\u63d2\u4ef6;\u5e76\u6ce8\u518c\u4e00\u4e9b\u94a9\u5b50\u7b49\u5f85\u540e\u7eed\u8c03\u7528\n  new WebpackOptionsApply().process(options, compiler)\n  return compiler\n}\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"lib/compiler.js"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"compiler.run((err, stats) => {\n  if (err) {\n    console.error(err)\n  } else {\n    console.log(stats)\n  }\n})\n")),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u8c03\u7528 run \u65b9\u6cd5")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"run \u65b9\u6cd5\u4e2d\u8c03\u7528\u7f16\u8bd1\u65b9\u6cd5 compile")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"compile \u65b9\u6cd5\u8c03\u7528 make \u94a9\u5b50"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"make"),"\u5728",Object(c.b)("inlineCode",{parentName:"p"},"EntryPlugin"),"\u4e2d\u6ce8\u518c"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//lib/EntryPlugin.js\ncompiler.hooks.make.tapAsync(\n  'EntryPlugin',\n  (compilation, callback) => {\n    const { entry, options, context } = this\n\n    const dep = EntryPlugin.createDependency(entry, options)\n    compilation.addEntry(context, dep, options, (err) => {\n      callback(err)\n    })\n  }\n)\n")),Object(c.b)("p",{parentName:"li"},"\u56de\u6eaf\uff0cEntryPlugin \u5728 EntryOptionPlugin \u5b9e\u4f8b\u5316\uff0cEntryOptionPlugin \u5728 lib/WebpackOptionsApply \u4e2d\u5b9e\u4f8b\u8bdd\u5e76\u8c03\u7528 apply \u65b9\u6cd5\u3002\u5728 createCompiler \u4e2d\u4f1a\u5b9e\u4f8b\u5316 WebpackOptionsApply\uff0c\u4e00\u5207\u660e\u6717\u3002"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//\u6839\u636eoptions\u4e2d\u914d\u7f6e\u7684target\u5c5e\u6027\uff0c\u52a0\u8f7dwebpack\u9ed8\u8ba4\u7684\u63d2\u4ef6;\u5e76\u6ce8\u518c\u4e00\u4e9b\u94a9\u5b50\u7b49\u5f85\u540e\u7eed\u8c03\u7528\nnew WebpackOptionsApply().process(options, compiler)\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"EntryPlugin"),"\u4e3b\u8981\u6267\u884c\u4e86 compilation \u4e2d\u7684",Object(c.b)("inlineCode",{parentName:"p"},"addEntry"),"\u65b9\u6cd5")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"this.addEntry --\x3e this.addModuleChain --\x3e this.handleModuleCreation --\x3e this.addModule --\x3e this.buildModule --\x3e this.","_","buildModule --\x3e module.build")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"make \u94a9\u5b50\u56de\u8c03\u89e6\u53d1 compilation.seal() \u6253\u5305 chunks \u548c assets")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"emitAssets \u8f93\u51fa\u6253\u5305\u4e4b\u540e\u7684\u6587\u4ef6\u5230 output"))))),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u7b2c\u4e00\u5f20\u56fe\u7247\u8bb0\u4e0d\u5f97\u4ece\u54ea\u91cc\u4e0b\u8f7d\u7684\u4e86\uff0c\u6709\u9053\u53cb\u77e5\u9053\u9ebb\u70e6\u8bc4\u8bba\uff0c\u6211\u4f1a\u52a0\u4e0a\u3002\u5982\u6709\u4fb5\u6743\u4f1a\u5220\u9664"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://juejin.im/post/5dc01199f265da4d12067ebe"}),"\u6398\u91d1-\u4f9d\u67f3\u8bda-Webpack \u6e90\u7801\u89e3\u8bfb\uff1a\u7406\u6e05\u7f16\u8bd1\u4e3b\u6d41\u7a0b"))))}s.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";var r=n(0),a=n(22);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},211:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(210),a=n(213);function c(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,p=c.absolute,b=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+l:l}(c,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},213:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);