---
id: 32bf4b312a9b194926bd9464ec44dbf1
title: ts常见报错
---

# ts 常见错误

- [Typescript error “Cannot write file … because it would overwrite input file.”](https://stackoverflow.com/questions/42609768/typescript-error-cannot-write-file-because-it-would-overwrite-input-file)

  问题：没有正确的配置 exclude

  解决：配置 exclude，将编译后的内容包括在 exclude 中

- [tsconfig.json: Build:No inputs were found in config file](https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file)

  问题：项目中没有.ts(x)等一系列可以编译的文件

  解决：新建一个 ts 文件

- Node 端使用 ts，Cannot redeclare block-scoped variable

  当使用 commonjs 的时候，ts 没法将每个文件认为是一个模块。所以会将变量提升到全局。

-
