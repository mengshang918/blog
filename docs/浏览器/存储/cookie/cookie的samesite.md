---
id: e246237f5824539bdb32194314b5afd5
title: cookie的samesite
---

## 问题

一个 http 页面 A 中有个 iframe 引入了 https 的页面 B。页面 A 和页面 B 均要读取 cookie 来判断用户是否登陆。

A 页面和 B 页面具有相同的二级域名

期望：A 页面登陆之后，B 页面也登陆

结果：A 页面登陆，部分用户 B 页面已登陆，部分用户 B 页面未登录

## why

1. B 页面跳登陆页

   发现 B 页面的请求未携带 cookie，尽管具有相同的二级域名。

   协议不同导致跨站

2. 部分用户 B 页面登陆，部分未登陆

   上述已登陆的使用低版本谷歌浏览器，sameSite 默认为 none，即使跨站，cookie 也可以获取。

   上述未登录的使用高版本浏览器，sameSite 默认为 Lax，跨站无法获取 cookie

## how to solve

1. 升级 A 页面为 https 协议
2. 服务端 response header 设置`set-cookie` 的时候，设置 SameSite 为 None，同时设置 `Secure`。且需要将后端服务域名必须使用 https 协议访问。
3. A 和 B 部署在同一个二级域名下，协议也需要相同。
4. 浏览器打开 `chrome://flags/#same-site-by-default-cookies` 手动将其暂时关闭 SameSite

## 参考

1. [MDN sameSite cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
2. [cookie 的 samesite 属性](https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html)
3. [前端 | Chrome 80 中 Iframe cookie 无法携带的问题](https://developer.jdcloud.com/article/1401)
4. [如何区分两个地址是同站（Same site）还是跨站（Cross site）？](https://juejin.cn/post/6844904098148384776)
