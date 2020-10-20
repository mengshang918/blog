---
id: bfe71b448da24918198c18263f04233a
title: create-react-app创建谷歌扩展
---

## chrome 插件

下面是我学习谷歌插件开发时看的一些文档博客

- [使用 React.js 开发 Chrome 插件](http://unclechen.github.io/2017/06/16/%E4%BD%BF%E7%94%A8ReactJS%E5%BC%80%E5%8F%91Chrome%E6%8F%92%E4%BB%B6/)
- [Chrome 插件(扩展)开发全攻略](http://blog.haoji.me/chrome-plugin-develop.html?from=xa#dong-tai-zhu-ru-huo-zhi-xing-JS)
- [manifest.json 字段解释](https://blog.csdn.net/mengshang529/article/details/102784294)
- [中文文档](https://crxdoc-zh.appspot.com/extensions/)
- [英文官方文档](https://developer.chrome.com/extensions)
- [图灵 Chrome 扩展及应用开发](https://www.ituring.com.cn/book/miniarticle/110853)

谷歌插件都有一个清单 manifest.json 文件，该文件具体编写请看我写的[另一篇文章](https://blog.csdn.net/mengshang529/article/details/102784294)

## create-react-app 初始化

```powershell
npx create-react-app chrome_extension
```

1. 将 src 下的 index.html 移至 public 文件夹下
2. npm insatll 之后，修改 public 下的 manifest.json 文件，以使其满足谷歌插件的条件
3. npm run build
4. 谷歌浏览器打开扩展程序并使用开发者模式，导入打包之后的 build 文件

## 问题

1. `create-react-app`默认是内联 js 文件，而由于谷歌插件引入了[csp（内容安全策略）](https://crxdoc-zh.appspot.com/extensions/contentSecurityPolicy)。所以无法使用内联文件

   修改 create-react-app`package.json`中`build`命令`"build":"INLINE_RUNTIME_CHUNK=false react-scripts build"`
