(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(190)),c={id:"ff68fd239a281351a53d6e0b62b17fe7",title:"enzyme"},l={unversionedId:"\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5/enzyme/ff68fd239a281351a53d6e0b62b17fe7",id:"\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5/enzyme/ff68fd239a281351a53d6e0b62b17fe7",isDocsHomePage:!1,title:"enzyme",description:"- \u9009\u62e9\u5668",source:"@site/../docs/\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5/enzyme/enzyme.md",slug:"/\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5/enzyme/ff68fd239a281351a53d6e0b62b17fe7",permalink:"/blog/docs/\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5/enzyme/ff68fd239a281351a53d6e0b62b17fe7",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5/enzyme/enzyme.md",version:"current",sidebar:"sidebar",previous:{title:"puppeteer",permalink:"/blog/docs/\u6d4b\u8bd5/E2E\u6d4b\u8bd5/puppeteer/179673e977b3c3f9ad055a4b4a1e4eff"},next:{title:"jest\u5355\u5143\u6d4b\u8bd5",permalink:"/blog/docs/\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5/jest/094b039468990ad513f1f8dd484d8dc2"}},i=[{value:"\u9009\u62e9\u5668",id:"\u9009\u62e9\u5668",children:[]},{value:"Shallow rendering\uff08shallow\uff09",id:"shallow-rendering\uff08shallow\uff09",children:[]},{value:"Full dom rendering\uff08mount\uff09",id:"full-dom-rendering\uff08mount\uff09",children:[]},{value:"Static rendering",id:"static-rendering",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#%E9%80%89%E6%8B%A9%E5%99%A8"}),"\u9009\u62e9\u5668")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#shallow-renderingshallow"}),"Shallow rendering\uff08shallow\uff09")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#full-dom-renderingmount"}),"Full dom rendering\uff08mount\uff09")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#static-rendering"}),"Static rendering")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#%E5%8F%82%E8%80%83"}),"\u53c2\u8003"))),Object(o.b)("p",null,"\u672c\u6587\u4e3a\u521d\u6b21\u5b66\u4e60\u7b14\u8bb0\uff0c\u6301\u7eed\u66f4\u65b0\u3002\u3002\u3002"),Object(o.b)("h2",{id:"\u9009\u62e9\u5668"},"\u9009\u62e9\u5668"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"css \u9009\u62e9\u5668")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"react \u7ec4\u4ef6"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-react"}),"function MyComponent() {\n  return <div />;\n}\n\n// find instances of MyComponent\nconst myComponents = wrapper.find(MyComponent);\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"react displayme"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-react"}),"function MyComponent() {\n  return <div />;\n}\nMyComponent.displayName = 'My Component';\n\n// find instances of MyComponent\nconst myComponents = wrapper.find('My Component');\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u5bf9\u8c61\u5c5e\u6027\u9009\u62e9\u5668"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-react"}),"const wrapper = mount((\n  <div>\n    <span foo={3} bar={false} title=\"baz\" />\n  </div>\n));\n\nwrapper.find({ foo: 3 });\nwrapper.find({ bar: false });\nwrapper.find({ title: 'baz' });\n//\u5982\u679c\u5c5e\u6027\u503c\u4e3aundefined\uff0c\u8bf7\u4f7f\u7528findWhere()\n")))),Object(o.b)("h2",{id:"shallow-rendering\uff08shallow\uff09"},"Shallow rendering\uff08shallow\uff09"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"shallow \u53ea\u6e32\u67d3 React \u9876\u7ea7\u7ec4\u4ef6\uff0c\u4e0d\u6e32\u67d3\u5b50\u7ec4\u4ef6\uff0c\u9002\u5408\u6d4b\u8bd5 React \u7ec4\u4ef6\u7684\u6e32\u67d3\u884c\u4e3a\uff08\u53ef\u4ee5\u6a21\u62df\u4ea4\u4e92\uff09")),Object(o.b)("h2",{id:"full-dom-rendering\uff08mount\uff09"},"Full dom rendering\uff08mount\uff09"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5982\u679c\u60f3\u8981\u6e32\u67d3\u5b8c\u6574\u7684 DOM \u6811\uff0c\u751a\u81f3\u60f3\u770b\u770b\u7ec4\u4ef6\u4e2d\u7684\u70b9\u51fb\u662f\u5426\u83b7\u5f97\u9884\u671f\u6548\u679c\uff0c\u53ef\u4ee5\u9009\u62e9\u201cmount\u201d\uff0c\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u5149\u53ef\u4ee5\u4ea7\u751f DOM \u6811\uff0c\u8fd8\u4f1a\u52a0\u4e0a\u6240\u6709\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u53ef\u4ee5\u6a21\u62df\u4e00\u4e2a\u6d4f\u89c8\u5668\u4e2d\u7684\u6240\u6709\u884c\u4e3a\u3002\uff08\u6e32\u67d3\u5b50\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u6a21\u62df\u4ea4\u4e92\uff09")),Object(o.b)("h2",{id:"static-rendering"},"Static rendering"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5982\u679c\u53ea\u60f3\u68c0\u67e5 React \u7ec4\u4ef6\u51fd\u6570\u6e32\u67d3\u5b8c\u6574 HTML\uff0c\u4e0d\u9700\u8981\u4ea4\u4e92\u529f\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528\u201crender\u201d\u51fd\u6570\u3002\uff08\u6e32\u67d3\u5b50\u7ec4\u4ef6\uff0c\u4e0d\u53ef\u6a21\u62df\u4ea4\u4e92\uff09")),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://airbnb.io/enzyme/"}),"\u5b98\u65b9\u6587\u6863"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000020387433?utm_source=tag-newest"}),"\u63a2\u7d22 TypeScript + Jest \u5f00\u6e90\u9879\u76ee\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\uff08\u4e0a\uff09"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://zhuanlan.zhihu.com/p/72627206"}),"React \u5355\u5143\u6d4b\u8bd5\u7b56\u7565\u53ca\u843d\u5730")))))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(f,l(l({ref:t},b),{},{components:n})):a.a.createElement(f,l({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);