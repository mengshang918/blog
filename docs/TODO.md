<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [blog 架构](#blog-%E6%9E%B6%E6%9E%84)
- [待解决](#%E5%BE%85%E8%A7%A3%E5%86%B3)
- [查漏补缺](#%E6%9F%A5%E6%BC%8F%E8%A1%A5%E7%BC%BA)
- [待输出博客](#%E5%BE%85%E8%BE%93%E5%87%BA%E5%8D%9A%E5%AE%A2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

[trello](https://trello.com/c/CFOsraKf/25-%E5%8D%9A%E5%AE%A2%E8%84%9A%E6%9C%AC)

## blog 架构

1. ~~eslint、prettier、commitlint~~

2. ~~pre-push 判断空文件夹，添加 TODO.md，防止 git 无法跟踪~~

3. ~~pre-commit doctoc 自动添加 toc 目录~~

4. tree to xmind

   - https://markmap.js.org/

   - https://github.com/dundalek/markmap

   - https://github.com/gera2ld/markmap-lib#markmap-lib

   - 判断是否有 tree 插件

     - 没有则安装

   - tree -d 路径

   - 替换

     ```js
     replace(/──/g, '*')
     replace(/(└|├|│)/g, '')
     ```

   * 生成 md 文件
   * markdown-lib 生成 html
   * pptr 截图

5. 自动发布到 csdn

6. 静态博客 or 服务器？

## 待解决

4. coding like a pro

5. 为啥需要使用 Map

   什么时候使用 Map，什么时候使用 object

6. Webpack vs rollup vs parcel vs Browserify

   - rollup
     - 静态分析
     - https://medium.com/@Rich_Harris/small-modules-it-s-not-quite-that-simple-3ca532d65de4
     - 为什么 library 使用 rollup
     - 优化 moment.js，使用 date-fns 代替或者 rollup(https://blog.csdn.net/qq_31061615/article/details/80745538)

7. ts

   1. namespace / moudles
   2. ///

8. react

   1. Forwardref

   2. recoil

   3. immutable.js 和 immer 对比

   4. mobx

      https://juejin.im/post/5eb04afc5188256d86197177

9. nodejs framework

   1. express
   2. koa
   3. Nestjs

10. 异常处理

## 查漏补缺

- git cherry-pick
- git commit 记录合并
- git 合并模式
- mockjs
- yapi 文档
- Memoization
- redux 和 react-redux 区别
- redux-thunk 和 redux-saga 区别
- react-redux connect 和 provider
- react context usecontext
- hooks
- formdata http 协议 axios
- filereader
- 图片上传
- bind call
- this 指向
- 箭头函数
- es6 proxy reflect
- cross-env
- Prettier-ignore 和 eslint-next-line 实现原理
- https://travis-ci.org/github/wix/import-cost
- https://juejin.im/post/5e3b9ae26fb9a07ca714a5cc
- window.history
- window.open 和 window.location.href 区别
- 在不刷新页面的情况下更改页面的 url 的 qs
- window.history
- 为什么 reducer 必须返回一个新对象
- https://recoiljs.org/

## 待输出博客

- const log = console.log
- https://12factor.net/
- https://css-tricks.com/debouncing-throttling-explained-examples/
- 正则 test 加了 g
