---
id: 9ae9305418cff5aa629668bf9bc2f1f2
title: yarn_link
---

1. 可在`~/.config/yarn/link`查看所有 link 的 package
2. yarn global bin 查看 yarn 全局 bin 安装位置
3. yarn global dir 查看 yarn 全局安装路径

## QA

1. 在`xxx` pakcage 中，yarn link 时 warning 提示`There's already a package called "x x x" registered. This command has had no effect. If this command was run in another folder with the same name, the other folder is still linked. Please run yarn unlink in the other folder if you want to register this folder.`

   `rm ~/.config/yarn/link/xxx`

## 参考

1. [yarn link](https://classic.yarnpkg.com/en/docs/cli/link)

2. [yarn unlink](https://classic.yarnpkg.com/en/docs/cli/unlink)
