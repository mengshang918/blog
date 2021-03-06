---
id: 5fce1d4981826dba4313269418bc61cc
title: npm包发布
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [.npmignore 和.gitignore](#npmignore-%E5%92%8Cgitignore)
- [测试.npmignore 忽略的文件](#%E6%B5%8B%E8%AF%95npmignore-%E5%BF%BD%E7%95%A5%E7%9A%84%E6%96%87%E4%BB%B6)
- [README.md](#readmemd)
- [发布](#%E5%8F%91%E5%B8%83)
- [包版本的更新](#%E5%8C%85%E7%89%88%E6%9C%AC%E7%9A%84%E6%9B%B4%E6%96%B0)
- [git tag](#git-tag)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## [.npmignore 和.gitignore](https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package)

> Use a `.npmignore` file to keep stuff out of your package. If there’s no `.npmignore` file, but there _is_ a `.gitignore` file, then npm will ignore the stuff matched by the `.gitignore` file. If you _want_ to include something that is excluded by your `.gitignore` file, you can create an empty `.npmignore` file to override it.

`.npmignore`决定 publish 之后哪些文件被发布。

`.gitignore`决定哪些文件被 git 跟踪

当`npmignore`不存在时，发布时匹配`.gitignore`中忽略文件

当`.npmignore`和`.gitignore`同时存在，优先读取`.npmignore`

若希望被`.gitignore`忽略的文件，发布之后还有，则建一个空的`.npmignore`文件来覆盖`.gitignore`

## 测试.npmignore 忽略的文件

可以在本地运行`npm pack`命令，该命令将在工作目录中生成压缩包，与发布时相同

## README.md

编写包的介绍文档

## 发布

```shell
#登录
npm login
#输入用户名密码
#发布
npm publish
```

当希望其他用户也可以发布包时，使用`npm owner add xxx package`添加

## 包版本的更新

当前版本为 1.0.0，修改本地版本

1. `npm version patch` 版本变为 1.0.1
2. `npm version minor`版本变为 1.1.0
3. `npm version major`版本变为 2.0.0

## git tag

```shell
#附注标签
git tag -a 标签(一般是版本号) -m "详细解释"
#轻量标签
git tag 标签
#查看某一个标签
git show [标签]
#列出所有的标签
git tag
#给某个历史提交(commitId)打标签
git tag 标签 commitId
#删除标签
git branch -d 标签名
#将某个标签提交到远程
git push origin 标签名
#将所有的标签提交到远程
git push origin --tags
```
