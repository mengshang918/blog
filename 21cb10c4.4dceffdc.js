(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{228:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),o=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},m=function(e){var n=o(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(t),s=a,O=m["".concat(l,".").concat(s)]||m[s]||u[s]||i;return t?r.a.createElement(O,b(b({ref:n},p),{},{components:t})):r.a.createElement(O,b({ref:n},p))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<i;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return o}));var a=t(2),r=t(7),i=(t(0),t(228)),l={id:"c135a55ada5c373bcd601d340d2d1943",title:"nginx"},b={unversionedId:"\u8fd0\u7ef4/nginx/c135a55ada5c373bcd601d340d2d1943",id:"\u8fd0\u7ef4/nginx/c135a55ada5c373bcd601d340d2d1943",isDocsHomePage:!1,title:"nginx",description:"mac \u5b89\u88c5 nignx \u6559\u7a0b",source:"@site/../docs/\u8fd0\u7ef4/nginx/nginx.md",slug:"/\u8fd0\u7ef4/nginx/c135a55ada5c373bcd601d340d2d1943",permalink:"/blog/docs/\u8fd0\u7ef4/nginx/c135a55ada5c373bcd601d340d2d1943",editUrl:"https://github.com/mengshang918/blog/edit/master/website/../docs/\u8fd0\u7ef4/nginx/nginx.md",version:"current",sidebar:"sidebar",previous:{title:"Jenkins\u914d\u5408webhook\u5b9e\u73b0push,\u81ea\u52a8\u6784\u5efa\u5e76\u53d1\u9001\u90ae\u4ef6",permalink:"/blog/docs/\u8fd0\u7ef4/CI&CD/jekins/69e64cd56b4da0c2d19ca9f6aa38e042"},next:{title:"\u670d\u52a1\u5668\u90e8\u7f72",permalink:"/blog/docs/\u8fd0\u7ef4/\u670d\u52a1\u5668/4534c39b9f5e4932e9fafed646293fde"}},c=[{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u51b3",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u51b3",children:[]},{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",children:[]}],p={rightToc:c};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"mac-\u5b89\u88c5-nignx-\u6559\u7a0b"},"mac \u5b89\u88c5 nignx \u6559\u7a0b"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u672c\u6587\u6863\u53ea\u8981\u8bb2\u89e3\u5982\u4f55\u5728 mac \u4e0a\u642d\u5efa nginx\uff0c\u5e76\u4f7f\u7528 nginx-full \u642d\u8f7d\u7b2c\u4e09\u65b9\u6a21\u5757 http-concat-master\uff0c\u4ee5\u53ca nginx \u4e0b\u914d\u7f6e ssl \u4f7f nginx \u53ef\u4ee5\u8bbf\u95ee https")),Object(i.b)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u51b3"},"\u5e38\u89c1\u95ee\u9898\u89e3\u51b3"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"nginx \u542f\u52a8\u51fa\u73b0\u7aef\u53e3\u51b2\u7a81"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bf7\u786e\u8ba4\u662f\u5426\u5df2\u7ecf\u6210\u529f\u542f\u52a8\u4e86 nginx"),Object(i.b)("li",{parentName:"ul"},"\u8bf7 google"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"server.crt can not found"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bf7\u786e\u8ba4\u662f\u5426\u6b63\u786e\u914d\u7f6e\u4e86 ssl"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u4e4b\u524d\u5df2\u7ecf\u4f7f\u7528 brew \u5b89\u88c5\u8fc7 nginx\uff0c\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"ublink"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"link"),"\u5207\u6362\u7248\u672c"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"brew unlink nginx"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"nginx-full \u5b89\u88c5\u6210\u529f\u540e"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"brew link nginx-full"),"\u5207\u6362\u5230 nginx-full"))))),Object(i.b)("h2",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u5148\u5b89\u88c5 homebrew\uff0c\u4e00\u4e2a mac \u91cc\u7684\u8f6f\u4ef6\u5305\u7ba1\u7406\u5de5\u5177\u3002"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'\u5b89\u88c5\u547d\u4ee4\uff1a/usr/bin/ruby -e "\\$(curl -fsSL ',Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://raw.githubusercontent.com/Homebrew/install/master/install)%22"}),'https://raw.githubusercontent.com/Homebrew/install/master/install)"')),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u63d0\u793a\u6ca1\u6709\u6743\u9650\uff0c\u5219\u4f9d\u636e\u63d0\u793a\u8f93\u5165 sudo xcodebuild -license \uff0c\u7136\u540e\u67e5\u770b\u6388\u6743\u8bb8\u53ef\u8bf4\u660e\uff0c\u7136\u540e\u952e\u5165 agree \uff0c\u7136\u540e\u6388\u6743\u6210\u529f\uff0c\u6b64\u65f6\u518d\u91cd\u65b0\u6267\u884c\u4e0a\u9762\u7684\u5b89\u88c5\u547d\u4ee4\u5373\u53ef\u3002"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u4e0b\u8f7d nginx-http-concat \u6a21\u5757\u3002"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4e0b\u8f7d\u5730\u5740\uff1a",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alibaba/nginx-http-concat%E3%80%82%E4%B8%8B%E8%BD%BDzip%E5%8C%85%EF%BC%8C%E7%84%B6%E5%90%8E%E8%A7%A3%E5%8E%8B%EF%BC%8C%E4%B8%8B%E4%B8%80%E6%AD%A5%E4%BC%9A%E7%94%A8%E5%88%B0"}),"https://github.com/alibaba/nginx-http-concat\u3002\u4e0b\u8f7dzip\u5305\uff0c\u7136\u540e\u89e3\u538b\uff0c\u4e0b\u4e00\u6b65\u4f1a\u7528\u5230"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4fee\u6539",Object(i.b)("inlineCode",{parentName:"p"},"ngx_http_concat_module.c"),"\u6587\u4ef6"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'static ngx_str_t  ngx_http_concat_default_types[] = {\n    ngx_string("application/x-javascript"),\n    ngx_string("text/css"),\n    ngx_null_string\n};\n//\u5c06"application/x-javascript"\u6539\u6210"application/javascript"\n//\u5426\u5219\u4f1a\u9020\u6210\u5408\u5e76\u7684js\u6587\u4ef6\u65e0\u6cd5\u8bbf\u95ee\n'))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u5b89\u88c5 nginx\u3002\n\u6267\u884c\u547d\u4ee4\uff1a"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"brew search nginx"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"brew tap denji/nginx"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"brew edit nginx-full"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6b64\u65f6\u8fdb\u5165\u7f16\u8f91\u5305\u7684\u5b89\u88c5\u811a\u672c\uff0c\u6309 i \u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\uff0c\u6572\u952e\u76d8\u79fb\u52a8\u5149\u6807\u5230 nginx \u7684\u81ea\u52a8\u7f16\u8bd1\u53c2\u6570\u90e8\u5206\uff0c\u5728\u4efb\u610f\u4e00\u884c\u91cc\u53e6\u5916\u65b0\u589e\u4e00\u884c --add-module=/nginx-http-concat \u7684 src \u8def\u5f84"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"args = %W[\n  --prefix=#{prefix}\n  --with-http_ssl_module\n  --with-pcre\n  --with-ipv6\n  --sbin-path=#{bin}/nginx\n  --with-cc-opt=#{cc_opt}\n  --with-ld-opt=#{ld_opt}\n  --conf-path=#{etc}/nginx/nginx.conf\n  --pid-path=#{var}/run/nginx.pid\n  --lock-path=#{var}/run/nginx.lock\n  --http-client-body-temp-path=#{var}/run/nginx/client_body_temp\n  --http-proxy-temp-path=#{var}/run/nginx/proxy_temp\n  --http-fastcgi-temp-path=#{var}/run/nginx/fastcgi_temp\n  --http-uwsgi-temp-path=#{var}/run/nginx/uwsgi_temp\n  --http-scgi-temp-path=#{var}/run/nginx/scgi_temp\n  --http-log-path=#{var}/log/nginx/access.log\n  --error-log-path=#{var}/log/nginx/error.log\n  --add-module=/nginx-http-concat\u7684src\u8def\u5f84\n]\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6b64\u65f6 nginx \u5b89\u88c5\u6210\u529f\u63d2\u5165\u5b8c\u540e\uff0c\u6309 esc/shift+q \u9000\u51fa\u63d2\u5165\u6a21\u5f0f\uff0c\u7136\u540e\u8f93\u5165 :wq \u7136\u540e\u56de\u8f66\uff0c\u6587\u4ef6\u4fdd\u5b58\u6210\u529f\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u518d\u6267\u884c\u5b89\u88c5\u547d\u4ee4",Object(i.b)("inlineCode",{parentName:"p"},"brew install nginx-full"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u914d\u7f6e nginx \u7684\u914d\u7f6e\u6587\u4ef6\nnginx \u7684\u914d\u7f6e\u6587\u4ef6 nginx.conf \u9ed8\u8ba4\u6240\u5728\u8def\u5f84\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"/usr/local/etc/nginx"),"\u3002"),Object(i.b)("p",{parentName:"li"},"\u9700\u8981\u4fee\u6539\u7684\u4e24\u70b9"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u9879\u76ee\u5de5\u7a0b\u6240\u5728\u8def\u5f84\uff1b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728\u914d\u7f6e\u6587\u4ef6\u9876\u90e8\u589e\u52a0\u8fd9\u4e48\u4e00\u884c ",Object(i.b)("inlineCode",{parentName:"p"},"user jxw staff"),"; \u5176\u4e2d\u7b2c\u4e8c\u4e2a\u503c\u9700\u8981\u4fee\u6539\u6210\u81ea\u5df1\u7684\u8d26\u6237\u540d")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u914d\u7f6e ssl \u4f7f nginx \u53ef\u4ee5\u8bbf\u95ee https"))),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"openssl \u751f\u6210\u81ea\u7b7e\u540d\u8bc1\u4e66"),Object(i.b)("p",{parentName:"li"},"\u521b\u5efa\u670d\u52a1\u5668\u79c1\u94a5\uff0c\u547d\u4ee4\u884c\u8f93\u5165"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"openssl genrsa -out server.key 1024"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u6839\u636e\u79c1\u94a5\u751f\u6210\u8bc1\u4e66\u7533\u8bf7,\u521b\u5efa\u7b7e\u540d\u8bf7\u6c42\u7684\u8bc1\u4e66\uff08CSR\uff09"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"openssl req -new -key server.key -out server.csr")),Object(i.b)("p",{parentName:"li"},"\u8fd9\u65f6\u4f1a\u51fa\u73b0\u4e0b\u9762\u9009\u9879,\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u9009\u9879\u8f93\u5165\u4e00\u4e9b\u4fe1\u606f\uff0c\u624d\u53ef\u4ee5\u751f\u6210\u8bc1\u4e66\u6210\u529f"),Object(i.b)("p",{parentName:"li"},"ps\uff1a\uff08\u5c31\u662f\u9009\u4e00\u4e2a\u968f\u4fbf\u586b\uff0c\u586b\u5b8c\u4e00\u76f4\u6441 enter \u952e\u81f3\u7ed3\u675f\uff09"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Country Name (2 letter code) []: ch\nState or Province Name (full name) []:\nLocality Name (eg, city) []:\nOrganization Name (eg, company) []:\nOrganizational Unit Name (eg, section) []:\nCommon Name (eg, fully qualified host name) []:\nEmail Address []:\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u5728\u52a0\u8f7d SSL \u652f\u6301\u7684 Nginx \u5e76\u4f7f\u7528\u4e0a\u8ff0\u79c1\u94a5\u65f6\u9664\u53bb\u5fc5\u987b\u7684\u53e3\u4ee4\uff08\u4f9d\u6b21\u6267\u884c\u4e0b\u9762\u547d\u4ee4\uff09"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cp server.key server.key.org")),Object(i.b)("li",{parentName:"ul"},"openssl rsa -in server.key.org -out server.key"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u6807\u8bb0\u8bc1\u4e66\u4f7f\u7528\u4e0a\u8ff0\u79c1\u94a5\u548c CSR"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"openssl x509 -req -in server.csr -out server.crt -signkey server.key -days 3650"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u7ed9 nginx \u914d\u7f6e root \u6743\u9650\nnginx \u7684\u542f\u52a8\u7a0b\u5e8f\u9ed8\u8ba4\u6240\u5728\u8def\u5f84\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"/usr/local/Cellar/nginx-full/1.14.0/bin")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u547d\u4ee4\u7a97\u53e3\u8fdb\u5165",Object(i.b)("inlineCode",{parentName:"li"},"/usr/local/Cellar/nginx-full/1.14.0/bin"),"\u8def\u5f84\uff0c\u7136\u540e\u4f9d\u6b21\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo chown root nginx")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo chmod +s nginx")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u5e38\u7528\u547d\u4ee4"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8\uff1anginx \uff08\u542f\u52a8\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u8bbf\u95ee",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://127.0.0.1/%E7%9C%8B%E5%88%B0%E6%AC%A2%E8%BF%8E%E7%95%8C%E9%9D%A2%EF%BC%89"}),"http://127.0.0.1/\u770b\u5230\u6b22\u8fce\u754c\u9762\uff09")),Object(i.b)("li",{parentName:"ul"},"\u505c\u6b62\uff1anginx -s stop"),Object(i.b)("li",{parentName:"ul"},"\u91cd\u542f\uff1anginx -s reload"),Object(i.b)("li",{parentName:"ul"},"\u67e5\u770b nginx \u662f\u5426\u542f\u52a8\uff1aps -ef|grep nginx \uff08\u5982\u679c\u5b58\u5728 3 \u6761\u8bb0\u5f55\uff0c\u5219\u4ee3\u8868\u5df2\u7ecf\u542f\u52a8\uff09")))))}o.isMDXComponent=!0}}]);