---
id: 694350b6ceaa5b2e57c6f54052135d17
title: npm发布丢失子文件中的文件
---

## when

开发脚手架的通用物料模板时，发现发布到 npm 的物料模板文件丢失。

以下为文件夹结构

```shell
.
├── CHANGELOG.md
├── package.json
└── template
    ├── README.md
    ├── configs
    │   ├── config.base.js
    │   ├── config.development.js
    │   ├── config.production.js
    │   └── config.watch.js
    ├── package.json
    ├── public
    │   └── index.html
    ├── src
    │   ├── Introduction.stories.mdx
    │   ├── index.jsx
    │   ├── index.module.css
    │   └── index.stories.js
    └── yarn.lock
```

## why

因为 template 子文件夹中存在 package.json 文件。并且设置了 files 字段。

npm publish 的是根据 package.json 中的 files 字段、.npmignore、.gitignore 来确认哪些文件需要被打包发布的。如果子文件夹中存在，则优先使用子文件夹中的。

## how

1. 删除 template/package.json 中的 files 字段
2. 使用 ejs 模板，下载时候再处理。

## 参考

1. [Not all files in being included when using `npm publish` despite being included in `files`](https://github.com/npm/cli/issues/1378)

2. https://www.npmjs.com/package/npm-packlist
