(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(7),c=(t(0),t(240)),o={id:"694350b6ceaa5b2e57c6f54052135d17",title:"npm\u53d1\u5e03\u4e22\u5931\u5b50\u6587\u4ef6\u4e2d\u7684\u6587\u4ef6"},i={unversionedId:"\u5de5\u7a0b\u5316/pakage_manager/\u5e38\u89c1\u95ee\u9898/694350b6ceaa5b2e57c6f54052135d17",id:"\u5de5\u7a0b\u5316/pakage_manager/\u5e38\u89c1\u95ee\u9898/694350b6ceaa5b2e57c6f54052135d17",isDocsHomePage:!1,title:"npm\u53d1\u5e03\u4e22\u5931\u5b50\u6587\u4ef6\u4e2d\u7684\u6587\u4ef6",description:"when",source:"@site/../docs/\u5de5\u7a0b\u5316/pakage_manager/\u5e38\u89c1\u95ee\u9898/npm\u53d1\u5e03\u4e22\u5931\u5b50\u6587\u4ef6\u4e2d\u7684\u6587\u4ef6.md",slug:"/\u5de5\u7a0b\u5316/pakage_manager/\u5e38\u89c1\u95ee\u9898/694350b6ceaa5b2e57c6f54052135d17",permalink:"/blog/docs/\u5de5\u7a0b\u5316/pakage_manager/\u5e38\u89c1\u95ee\u9898/694350b6ceaa5b2e57c6f54052135d17",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/\u5de5\u7a0b\u5316/pakage_manager/\u5e38\u89c1\u95ee\u9898/npm\u53d1\u5e03\u4e22\u5931\u5b50\u6587\u4ef6\u4e2d\u7684\u6587\u4ef6.md",version:"current",sidebar:"sidebar",previous:{title:"TODO",permalink:"/blog/docs/\u5de5\u7a0b\u5316/pakage_manager/yarn/6eafe4f881d1d6e41cd203f0421e8932"},next:{title:"package.json\u5b57\u6bb5\u8be6\u89e3",permalink:"/blog/docs/\u5de5\u7a0b\u5316/pakage_manager/\u5e38\u89c1\u95ee\u9898/505112b129e18311b92912279ec967ac"}},p=[{value:"when",id:"when",children:[]},{value:"why",id:"why",children:[]},{value:"how",id:"how",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],l={rightToc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"when"},"when"),Object(c.b)("p",null,"\u5f00\u53d1\u811a\u624b\u67b6\u7684\u901a\u7528\u7269\u6599\u6a21\u677f\u65f6\uff0c\u53d1\u73b0\u53d1\u5e03\u5230 npm \u7684\u7269\u6599\u6a21\u677f\u6587\u4ef6\u4e22\u5931\u3002"),Object(c.b)("p",null,"\u4ee5\u4e0b\u4e3a\u6587\u4ef6\u5939\u7ed3\u6784"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),".\n\u251c\u2500\u2500 CHANGELOG.md\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 template\n    \u251c\u2500\u2500 README.md\n    \u251c\u2500\u2500 configs\n    \u2502\xa0\xa0 \u251c\u2500\u2500 config.base.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 config.development.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 config.production.js\n    \u2502\xa0\xa0 \u2514\u2500\u2500 config.watch.js\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 public\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.html\n    \u251c\u2500\u2500 src\n    \u2502\xa0\xa0 \u251c\u2500\u2500 Introduction.stories.mdx\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.jsx\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.module.css\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.stories.js\n    \u2514\u2500\u2500 yarn.lock\n")),Object(c.b)("h2",{id:"why"},"why"),Object(c.b)("p",null,"\u56e0\u4e3a template \u5b50\u6587\u4ef6\u5939\u4e2d\u5b58\u5728 package.json \u6587\u4ef6\u3002\u5e76\u4e14\u8bbe\u7f6e\u4e86 files \u5b57\u6bb5\u3002"),Object(c.b)("p",null,"npm publish \u7684\u662f\u6839\u636e package.json \u4e2d\u7684 files \u5b57\u6bb5\u3001.npmignore\u3001.gitignore \u6765\u786e\u8ba4\u54ea\u4e9b\u6587\u4ef6\u9700\u8981\u88ab\u6253\u5305\u53d1\u5e03\u7684\u3002\u5982\u679c\u5b50\u6587\u4ef6\u5939\u4e2d\u5b58\u5728\uff0c\u5219\u4f18\u5148\u4f7f\u7528\u5b50\u6587\u4ef6\u5939\u4e2d\u7684\u3002"),Object(c.b)("h2",{id:"how"},"how"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5220\u9664 template/package.json \u4e2d\u7684 files \u5b57\u6bb5"),Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528 ejs \u6a21\u677f\uff0c\u4e0b\u8f7d\u65f6\u5019\u518d\u5904\u7406\u3002")),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/npm/cli/issues/1378"}),"Not all files in being included when using ",Object(c.b)("inlineCode",{parentName:"a"},"npm publish")," despite being included in ",Object(c.b)("inlineCode",{parentName:"a"},"files")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/npm-packlist"}),"https://www.npmjs.com/package/npm-packlist")))))}b.isMDXComponent=!0},240:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return t?a.a.createElement(d,i(i({ref:n},l),{},{components:t})):a.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);