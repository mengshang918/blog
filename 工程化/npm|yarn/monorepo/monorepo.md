<!-- TOC -->

- [monorepo](#monorepo)
    - [[Lerna](https://github.com/lerna)](#lernahttpsgithubcomlerna)
        - [常用 lerna 命令](#常用-lerna-命令)
    - [Yarn workspace](#yarn-workspace)
        - [常用命令](#常用命令)
    - [lerna 配合 yarn workspace](#lerna-配合-yarn-workspace)
    - [扩展](#扩展)

<!-- /TOC -->
# monorepo

1. 什么是 monorepo 和 multirepo
   - [What Is a Monorepo?](https://www.perforce.com/blog/vcs/what-monorepo)
2. monorepo 有啥优缺点

   - [Why startups need to use monorepo in 2019?](https://medium.com/@hoangbkit/why-monorepo-in-2018-89221acd4bfb)
   - [Advantages of monorepos](https://danluu.com/monorepo/)
   - [Awesome Monorepo](https://github.com/korfuri/awesome-monorepo)
   - [Monorepos in Git](https://www.atlassian.com/git/tutorials/monorepos)
   - [REPO 风格之争：MONO VS MULTI](https://zhuanlan.zhihu.com/p/31289463)
   - [Why is Babel a monorepo?](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)

3. 基于 lerna 实践 monorepo

   - [NodeJS：Lerna —— Monorepo 的最佳实践](https://cloud.tencent.com/developer/article/1467217)
   - [monorepo 新浪潮 | introduce lerna](https://github.com/pigcan/blog/issues/3)

4. 构建
   - bazel
   - Rollup react
   - Gulp babel
   - MakeFile

## [Lerna](https://github.com/lerna)

> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

### 常用 lerna 命令

只介绍一些常用命令。详细命令请查看 lerna 的 readme 文档

1. lerna init

   初始化 monorepo 项目，会新建`lerna.json`

   ```
   //默认是固定模式。
   {
   	"packages":["packages/*"],
   	"version":"0.0.0"
   }
   ```

   注意：如果想要使用独立模式。`lerna init --independent`。则生成的`lerna.json`中的`version`字段为`independent`而不是`0.0.0`

   - [固定模式和独立模式区别](https://github.com/lerna/lerna#fixedlocked-mode-default)

     - lerna version

       固定模式。会更新根目录 changelog，并且 publishconfig

     - 独立模式

       只有当前 packge 改变 changelog 才会改变。不会影响其他 package

2. [lerna version](https://github.com/lerna/lerna/tree/master/commands/version#lernaversion)

   发布工作区中自上次发布有更改的 package。包的版本可以自定义，也可以根据一些条件自动生成。这里我只介绍根据 commit 提交信息自动生成 package 版本，其它可以点击链接查看详情

   - `lerna version --conventional-commits`

     按照[常规提交规范](https://www.conventionalcommits.org/en/v1.0.0/)自动生成 package version。

     `fix`类型提交转换为`PATCH`发行版。`feat`类型提交转换为`MINOR`发行版。`BREAKING CHANGE`无论类型如何，提交中的提交都应转换为`MAJOR`发行版。

     **提示：不管是独立还是固定模式，某个包变化。其它 package 依赖该包在发布的时候都会更新 version。只是两个模式不同的是 major 的变化是否统一**

     **注意：**在 commir 的 footer 中以`BREAKING CHANGE:`开头就是重大更新

     一般 package 的格式是 major.minor.patch 组成。例子：1.0.0

     - 默认模式：固定模式下 Fixed/Locked mode (default)

       - 某个 package 有重大更新，工作区所有 package 都会增加一个 major 版本
       - 根目录 changelog 会改变
       - lerna.json 中 version 的 messge 的`S%`版本会随着 version 变化。

     - 独立模式

       - 根目录 changelog 不会改变

       - lerna.json 中 version 的 messge 的`S%`版本不会由 version 代替。任然是`s%`。（参考：[lerna version -m](https://github.com/lerna/lerna/tree/master/commands/version#--message-msg)）

         建议独立模式使用`lerna version --conventional-commits -m "chore(release): publish 版本号"`

   ```json
   //lerna.json
   {
     "command": {
       "version": {
         //lerna version只能在master分支中使用
         "allowBranch": ["master"],
         //同lerna version -m "chore(release): publish %s"。默认lerna version生成的commit是没有遵循conventional commit规范的。使用这个可以指定发布的commitmsg
         "message": "chore(release): publish %s",
         //检测更改的软件包时，忽略与glob匹配的文件中的更改
         "ignoreChanges": [
           "*.md",
           "*.txt"
           //一些测试文件、和发布无关的文件。。。
         ]
       }
     }
   }
   ```

3. [lerna bootstrap](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme)

   配合 yarn workspace 之后，一般使用`yarn install`代替`lerna bootstrap`

   ```json
   // lerna.json
   {
   	"npmClient":"yarn",
   	"useWorkspaces":true
   }
   //根目录 package.json
   {
   	"workspaces": [
       "packages/*"
     ],
   }
   ```

4. [lerna exec](https://github.com/lerna/lerna/tree/master/commands/exec#readme)

   在工作区中运行任意命令，使用`--`传递参数

5. [lerna run](https://github.com/lerna/lerna/tree/master/commands/run#readme)

   运行工作区中某个 script 脚本（只针对具有这个 script 脚本的包执行），使用`--`传递参数

6. [lerna import](https://github.com/lerna/lerna/tree/master/commands/import#readme)

   `lerna import path --preserve-commit`

   将当前已有的库添加到工作区里面。会保留 commit 信息(包括原始提交人和作者)。不使用`--preserve-commit`则会导致提交人更改为当前 import 的人。

7. [lerna publish](https://github.com/lerna/lerna/tree/master/commands/publish#readme)

   [选择一个开源许可证](https://choosealicense.com/)

   如果是 scope package（@xxx/some-package）,则需要在`package`的`package.json`指定`publishConfig.access`字段

   ```json
   //package的package.json文件
   {
     "publishConfig": {
       //指定范围包的访问权限 不设置public，就付钱升级npm账号吧。
       "access": "public",
       //指定发布的目录 可以配合.npmignore
       "directory": ""
     }
   }
   ```

   需提前`npm login`,使用`npm whoami`判断是否登录成功。没问题使用`lerna publish from-package`发布包

## Yarn workspace

`yarn config list`中没有设置 workspaces-experimental 则使用以下命令开启

`yarn config set workspaces-experimental true`

使用 yarn workspace 主要是可以将各个 package 相同的包提升到根目录中。避免每个 package 都 install 一个包。

使用工作区之后，package 没有自己的 yarn.lock 文件。所有 packages 共用根目录的 yarn.lock 文件

1. [Workspaces in Yarn](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
2. [WorkSpaces](https://classic.yarnpkg.com/en/docs/workspaces)
3. [nohoist in Workspaces](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)

### 常用命令

当第一次安装 package 提示找不到 package。可以试着写死版本

1. 工作区

   1. 给某个 package 添加包

      - 将 `react` 和 `react-dom` 作为 `devDependencies` 加到 `packages/awesome-package/package.json` 中

        `yarn workspace awesome-package add react react-dom --dev`

      注意：第一次(some-package 还未发布到 npm 上)使用 lerna add some-package --scope=packaget

   2. 删除某个 package 的某个包

      - 从 `packages/web-project/package.json` 中移除 `some-package`

        `yarn workspace web-project remove some-package --save`

   3. 给所有 package 添加某个包

      `yarn workspace add some-package`

   4. 给所有 package 删除某个包

      `yarn workspace remove some-package`

2. 根目录

   1. 根目录添加包

      `yarn add -W some-packeages`

   2. 根目录删除包

      `yarn remove -S some-package`

## lerna 配合 yarn workspace

1. [基于 lerna 和 yarn workspace 的 monorepo 工作流](https://zhuanlan.zhihu.com/p/71385053)

## 扩展

- [基于主干和基于中继的开发](https://trunkbaseddevelopment.com/)
- [git submodule](https://www.atlassian.com/git/tutorials/git-submodule)
