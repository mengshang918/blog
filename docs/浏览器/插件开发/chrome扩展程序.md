---
id: 05456f7f836f1d5ccf67498cad9d6745
title: chrome扩展程序
---

## 后台网页

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191028170020782.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)

## 用户界面

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019102817003539.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)

## 内容脚本

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191028170049316.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)

## [Manifest.json](https://crxdoc-zh.appspot.com/extensions/manifest)

```js
{
  // 必选
  "manifest_version": 2,
  "name": "扩展程序名字",
  "version": "版本字符串",

  // 推荐
  "default_locale": "en", //国际化 配合文件中的_locales实现多语言
  "description": "纯文本描述", //扩展程序介绍
  "icons": {
    "16": "icon.png",    //用于扩展程序页面的收藏夹图标
    "32": "icon.png",   //Windows需要32像素的图标，没有则将48像素的图标缩小
    "48": "icon.png",  //用于扩展程序管理页面（chrome://extensions
    "128": "icon.png" //用与安装过程中以及 Chrome 网上应用店
  },


  /* 使用浏览器按钮可以在 Google Chrome 浏览器主窗口地址栏右侧的工具栏中添加图标。
  * 除了图标，浏览器按钮还可以有工具提示（default_title）、
  * 徽章（图标添加文字，不可在manifest配置）和弹出内容（default_popup）。
  */
  // 选择某一个（或者无）browser_action一直展示，page_action某些页面展示(其余页面置灰)
  "browser_action": {
          "default_icon": {                   // 可选
            "19": "images/icon19.png",       // 可选
            "38": "images/icon38.png"       // 可选
          },
          "default_title": "message",      // 可选，在工具栏hover时提示
          "default_popup": "popup.html"    // 可选，点击按钮弹出框
  },
  "page_action": {}, //选项同browser_action

  // 可选
  "author": "梦殇918",
  "background": {
    "scripts":[]
    // 推荐 开启事件页面（只在需要时加载，当事件页面不活动时就会卸载）
    "persistent": false
  },
  // 内容脚本，注入到打开的页面中
  "content_scripts": [{
    "matches":[],   //指定内容脚本要插入到哪些页面中去
    "exclude_matches":[],
    "css":[],
    "js":[],
    "run_at":'', // document_start、document_end、document_idle（默认）
    "include_globs":[], //在应用 matches 之后同时匹配这一范围的 URL
    "exclude_globs":[]
  }],
  // 替代页面 （一个扩展程序只能替换一个页面）
  "chrome_url_overrides": {
    "newtab":'xxx.html' //pageToOverride可替换为bookmarks（书签管理器）、history（历史记录）、newtab（“打开新的标签页”页面）
  },

  "content_security_policy": "策略字符串", //https://crxdoc-zh.appspot.com/extensions/contentSecurityPolicy
  "homepage_url": "http://path/to/homepage", //插件主页
  /* 选择的准则是，如果您的扩展程序或者应用需要在隐身模式下加载标签页，请使用 split 隐身行为。
  * 如果您的扩展程序或应用需要登录远程服务器或者在本地保留设置，请使用 spanning 隐身行为。 */
  "incognito": "spanning 或 split",
  "options_page": "aFile.html", //让用户自定义您的扩展程序的行为，您可能会提供一个选项页面（配合storage API ）
  "storage": {
    "managed_schema": "schema.json"
  }
}
```

## 问题

1. Chrome 扩展程序不允许使用`unsafe-eval`

   manifest.json

   ```js
   "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
   ```
