(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{243:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),O=n,j=m["".concat(p,".").concat(O)]||m[O]||s[O]||b;return a?r.a.createElement(j,c(c({ref:t},l),{},{components:a})):r.a.createElement(j,c({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,p=new Array(b);p[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<b;l++)p[l]=a[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},43:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(7),b=(a(0),a(243)),p={id:"b36f6376acc1abd98aab96ef91491d2b",title:"\u91cd\u62fets"},c={unversionedId:"TypeScript/b36f6376acc1abd98aab96ef91491d2b",id:"TypeScript/b36f6376acc1abd98aab96ef91491d2b",isDocsHomePage:!1,title:"\u91cd\u62fets",description:"- ts \u7684\u5fc5\u8981",source:"@site/../docs/TypeScript/\u91cd\u62fets.md",slug:"/TypeScript/b36f6376acc1abd98aab96ef91491d2b",permalink:"/blog/docs/TypeScript/b36f6376acc1abd98aab96ef91491d2b",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/TypeScript/\u91cd\u62fets.md",version:"current",sidebar:"sidebar",previous:{title:"typescript",permalink:"/blog/docs/TypeScript/808567b84cc51ad515d4820e54f84e31"},next:{title:"mac\u5e38\u89c1\u95ee\u9898\u548c\u547d\u4ee4",permalink:"/blog/docs/mac\u76f8\u5173/f9043ab4f4bd67e13820f42a3e175b56"}},i=[{value:"ts \u7684\u5fc5\u8981",id:"ts-\u7684\u5fc5\u8981",children:[]},{value:"learn",id:"learn",children:[]}],l={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#ts-%E7%9A%84%E5%BF%85%E8%A6%81"}),"ts \u7684\u5fc5\u8981")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#learn"}),"learn"))),Object(b.b)("h2",{id:"ts-\u7684\u5fc5\u8981"},"ts \u7684\u5fc5\u8981"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9759\u6001\u7c7b\u578b\u68c0\u67e5"),Object(b.b)("li",{parentName:"ul"},"\u4ee3\u7801\u8fd0\u884c\u524d\u68c0\u67e5 \u7c7b\u578b\n\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5728\u4e00\u6b21\u9700\u6c42\u4e2d\u5c06\u51fd\u6570\u6539\u6210\u4e86 aysnc \uff0c\u6b64\u65f6\u8fd4\u56de promise\uff0c\u4f46\u662f\u5fd8\u8bb0\u4fee\u6539\u4f7f\u7528\u8be5\u51fd\u6570\u7684\u5730\u65b9\u3002\u5bfc\u81f4\u8fd4\u56de\u4e0d\u662f\u5bf9\u8c61\u3002\n\u4f7f\u7528 ts \u53ef\u4ee5 interface \u76f4\u63a5\u5b9a\u4e49\u8fd4\u56de\u7c7b\u578b\u4e3a\u5bf9\u8c61\u3002\u5728\u5207\u6362\u6210 async \u7684\u65f6\u5019\u76f4\u63a5\u62a5\u9519\u63d0\u793a\u51fd\u6570\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61"),Object(b.b)("li",{parentName:"ul"},"\u4ee3\u7801\u7f16\u5199\u63d0\u793a"),Object(b.b)("li",{parentName:"ul"},"\u9605\u8bfb\u6587\u7ae0",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://ts.chibicode.com/todo/"}),"https://ts.chibicode.com/todo/"))),Object(b.b)("h2",{id:"learn"},"learn"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"interface"),"\u901a\u7528\u63a5\u53e3\u548c",Object(b.b)("inlineCode",{parentName:"p"},"type"),"\u7c7b\u578b\u522b\u540d\u533a\u522b"),Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types/52682220#52682220"}),"stackoverflow")),Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases"}),"\u5b98\u65b9\u6587\u6863")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"interface \u53ef\u4ee5\u7533\u660e\u5bf9\u8c61\u548c\u51fd\u6570\uff0ctype \u9664\u4e86\u5bf9\u8c61\u3001\u51fd\u6570\u8fd8\u53ef\u4ee5\u7533\u660e\u57fa\u672c\u7c7b\u578b\u3001\u8054\u5408\u7c7b\u578b\u548c\u5143\u7956\u3002"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// primitive \u57fa\u672c\u7c7b\u578b\ntype Name = string\ntype PartialPointX = { x: number }\n\n// union \u8054\u5408\u7c7b\u578b\ntype PartialPoint = PartialPointX | PartialPointY\n\n// tuple \u5143\u7956\ntype Data = [number, string]\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"interface \u53ef\u4ee5\u5408\u5e76\u7533\u660e\uff0ctype \u4e0d\u53ef\u4ee5"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"interface Point {\n  x: number\n}\ninterface Point {\n  y: number\n}\n\nconst point: Point = { x: 1, y: 2 }\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"object\u3001function \u7528\u6cd5\u4e0d\u540c"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"interface Point {\n  x: number\n  y: number\n}\n\ninterface SetPoint {\n  (x: number, y: number): void\n}\n\ntype Point = {\n  x: number\n  y: number\n}\n\ntype SetPoint = (x: number, y: number) => void\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u7ee7\u627f"),Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Interface extends interface")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"interface PartialPointX {\n  x: number\n}\ninterface Point extends PartialPointX {\n  y: number\n}\n")),Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Type alias extends type alias")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"type PartialPointX = { x: number }\ntype Point = PartialPointX & { y: number }\n")),Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Interface extends type alias")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"type PartialPointX = { x: number }\ninterface Point extends PartialPointX {\n  y: number\n}\n")),Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Type alias extends interface")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"interface PartialPointX {\n  x: number\n}\ntype Point = PartialPointX & { y: number }\n"))))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u4e86\u89e3\u6cdb\u578b generic"),Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://ts.chibicode.com/generics/"}),"https://ts.chibicode.com/generics/")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u6cdb\u578b\u547d\u540d\uff1a\u4e00\u822c\u662f\u5355\u8bcd\u9996\u5b57\u6bcd\u7684\u5927\u5199")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u6cdb\u578b\u51fd\u6570 ",Object(b.b)("inlineCode",{parentName:"p"},"makeState<S>(){}")),Object(b.b)("p",{parentName:"li"},"\u51fd\u6570\u8c03\u7528\u624d\u6307\u5b9a\u7c7b\u578b",Object(b.b)("inlineCode",{parentName:"p"},"makeState<number>()"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"extends")," \u6307\u5b9a\u6cdb\u578b\u53ef\u9009\u7c7b\u578b ",Object(b.b)("inlineCode",{parentName:"p"},"makeState<S extends number | string>(){}")),Object(b.b)("p",{parentName:"li"},"S \u53ea\u80fd\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u5b57")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u6cdb\u578b\u9ed8\u8ba4\u7c7b\u578b ",Object(b.b)("inlineCode",{parentName:"p"},"makeState<S extends number | string = number>(){}")),Object(b.b)("p",{parentName:"li"},"\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u6570\u5b57")))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u6620\u5c04\u7c7b\u578b\uff08mapped types\uff09"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://mariusschulz.com/blog/mapped-types-in-typescript"}),"Mapped Types in TypeScript")),Object(b.b)("li",{parentName:"ul"},"ReadOnly"),Object(b.b)("li",{parentName:"ul"},"Partial"),Object(b.b)("li",{parentName:"ul"},"Pick"),Object(b.b)("li",{parentName:"ul"},"Record"),Object(b.b)("li",{parentName:"ul"},"Exclude"),Object(b.b)("li",{parentName:"ul"},"ReturnType"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"literal type\uff08\u6587\u5b57\u7c7b\u578b\uff09"),Object(b.b)("p",{parentName:"li"},"use literal types to specify exactly which value is allowed for a property")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"intersection type")," &"),Object(b.b)("p",{parentName:"li"},"use intersection types to override some properties and remove code duplication")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Union type |"),Object(b.b)("p",{parentName:"li"},"union types are powerful when combined with conditional statements")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"declare module \u548c declare namespace")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"infer")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u5b57\u7b26\u4e32\u7d22\u5f15\u548c\u6570\u5b57\u7d22\u5f15")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u7c7b\u578b\u9632\u62a4")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"unknown")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528 nerver")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"react + ts"),Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#basic-cheatsheet-table-of-contents"}),"\u5907\u5fd8\u5355")),Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://basarat.gitbook.io/typescript/"}),"TS Deep Dive"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/play/#"}),"Playground")))))}o.isMDXComponent=!0}}]);