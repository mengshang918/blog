---
id: 30a69d78ea80299566efb6a61e348ec8
title: eslint报错no-unpublished-require
---

eslint 引入`eslint-plugin-node`插件后，eslint 报错提示`node/no-unpublished-require`

## node/no-unpublished-require 规则

[node/no-unpublished-require 规则](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-require.md)

## 问题定位

1. `package.json`中引入一个`shelljs`是开发依赖(devDependencies)，然后`package.json`的`files`字段又包含了引入`shelljs`的文件，就会提示该错误
2. `package.json`未指定`files`字段，由于未指定`files`字段，默认匹配所有文件出了`.npmignore`或`.gitignore`忽略的文件。而所有文件中存在使用开发依赖的包。

## 解决方法

设置正确的`package.json`的`files`字段，不要包括使用开发依赖的文件，或者将使用的包移到`dependencies`
