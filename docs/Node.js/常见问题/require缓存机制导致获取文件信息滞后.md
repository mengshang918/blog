---
id: 6f48d8764eaa96778c489f0f9b512dd3
title: require缓存机制导致获取文件信息滞后
---

## 问题

开发水滴脚手架时，发现获取的本地 package.json 的 version 信息滞后一个版本。

## require 缓存机制

require 自带缓存

## 解决方案

delete require.cache[pkg_path]
