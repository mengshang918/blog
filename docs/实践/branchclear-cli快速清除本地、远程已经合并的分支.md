---
id: 626060a4af5e1540907d7bcd2416544c
title: branchclear-cli快速清除本地、远程已经合并的分支
---

## branchclear-cli 介绍

[branchclear-cli](https://github.com/mengshang918/branchclear-cli) 可以快速清理本地、远程、本地和远程已经合并到指定分支（默认为`master`）的分支。

## 主要原理

`git branch --merged 分支`查看本地已经合并的分支

`git for-each-ref`获取当前分支创建者
