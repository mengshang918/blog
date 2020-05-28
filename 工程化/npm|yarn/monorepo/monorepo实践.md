# monorepo

1. 什么是monorepo和multirepo
   * [What Is a Monorepo?](https://www.perforce.com/blog/vcs/what-monorepo)
2. monorepo有啥优缺点
   * [Why startups need to use monorepo in 2019?](https://medium.com/@hoangbkit/why-monorepo-in-2018-89221acd4bfb)
   * [Advantages of monorepos](https://danluu.com/monorepo/)
   * [Awesome Monorepo](https://github.com/korfuri/awesome-monorepo)
   * [Monorepos in Git](https://www.atlassian.com/git/tutorials/monorepos)
   * [REPO 风格之争：MONO VS MULTI](https://zhuanlan.zhihu.com/p/31289463)
   * [Why is Babel a monorepo?](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)

3. 基于lerna实践monorepo
   * [NodeJS：Lerna —— Monorepo 的最佳实践](https://cloud.tencent.com/developer/article/1467217)
   * [monorepo 新浪潮 | introduce lerna](https://github.com/pigcan/blog/issues/3)

4. 构建
   * bazel

## [Lerna](https://github.com/lerna)

> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

## Yarn workspace

使用yarn workspace主要是可以讲各个package相同的包提升到根目录中。避免每个package都install一个包。

使用工作区之后，package没有自己的yarn.lock文件。所有packages共用根目录的yarn.lock文件

1. [Workspaces in Yarn](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
2. [WorkSpaces](https://classic.yarnpkg.com/en/docs/workspaces)
3. [nohoist in Workspaces](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)

### 常用命令

1. 工作区

   1. 给工作区某个package添加包

      * 将 `react` 和 `react-dom` 作为 `devDependencies` 加到 `packages/awesome-package/package.json` 中

        `yarn workspace awesome-package add react react-dom --dev`

   2. 删除工作区某个package的某个包

      * 从 `packages/web-project/package.json` 中移除 `some-package`

        `yarn workspace web-project remove some-package --save`

2. 根目录

   1. 根目录添加包

      `yarn add -W some-packeages`

## lerna配合yarn workspace



## 扩展

* [基于主干和基于中继的开发](https://trunkbaseddevelopment.com/)
* [git submodule](https://www.atlassian.com/git/tutorials/git-submodule)



