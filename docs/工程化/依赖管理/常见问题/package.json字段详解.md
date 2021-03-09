---
id: 4bb2ebe839492522a5f9e23333349030
title: package.json字段详解
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

本文主要介绍常见 package.json 字段的含义。

```json
{
  //发布时候的包名 @xxx是代表范围包
  "name": "@xxx/package",
  //发布时候的包版本
  "version": "1.0.0",
  //包的描述
  "description": "xxx",
  //包私有，无法发布到npm
  "private": true,
  //包的关键字 用于npm搜索
  "keywords": ["xxx", "xxx"],
  //包的主页url
  "homepage": "",
  //issue的地址,也可是string
  "bugs": {
    "url": "",
    "email": ""
  },
  //许可证
  "license": "MIT",
  //作者信息
  "author": {
    "name": "",
    "email": "",
    "url": ""
  },
  //贡献者信息 array
  "contributors": [
    {
      "name": "",
      "email": "",
      "url": ""
    }
  ],
  //捐助信息 一般用不到
  "funding": {},
  //指定这个包被install时候有哪些文件 类似npmignore的反面
  "files": [],
  //包的入口地址 未指定，默认index.js
  "main": "dist/babel-form.min.js",
  //es6环境下入口文件
  "module": "",
  //yarn workspace monorepo
  "workspaces": [],
  //确保所有的package具有相同的版本
  "resolutions": {},
  //仓库地址
  "repository": {
    "type": "git",
    "url": "http://coding.jd.com/jmfe-babel/babel-form/"
  },
  //可通脱process.env.npm_package_config_port获取到8080
  "config": {
    "port": "8080"
  },
  //发布设置
  "publishConfig": {
    //If present, will replace whatever registry is defined in the configuration when the package is about to be pushed to a remote location
    "registry": "http://registry.m.jd.com",
    //包的访问权限
    "access": "public"
  },
  //脚本
  "scripts": {
    "start": "webpack-dev-server --open 'Google Chrome'"
  },
  //包的限制
  "engines": {
    "node": ">=13.14.0",
    "yarn": ">=1.22.0"
  },
  //开发依赖
  "dependencies": {},
  //开发依赖
  "devDependencies": {},
  //相对依赖
  "peerDependencies": {}
}
```

## 参考

1. [npm package.json 介绍](https://docs.npmjs.com/configuring-npm/package-json.html)
2. [yarn package.json 介绍](https://yarnpkg.com/configuration/manifest)
3. [package.json 中 你还不清楚的 browser，module，main 字段优先级](https://github.com/SunshowerC/blog/issues/8)
