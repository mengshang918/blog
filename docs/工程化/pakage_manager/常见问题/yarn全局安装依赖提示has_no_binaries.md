---
id: aa55a1757ae8690ae5adae7d48914a4a
title: yarn全局安装依赖提示has_no_binaries
---

## 问题

`yarn gloabal add`全局安装一个包提示 has no binaries。

## 原因

安装的包可能没有 bin 文件，看下 package.json 是否指定了 bin
