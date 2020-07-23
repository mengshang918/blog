<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [问题](#%E9%97%AE%E9%A2%98)
- [解决](#%E8%A7%A3%E5%86%B3)
- [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 问题

开发了一个根据 jsonSchema 渲染表单的库`babel-form`，在其他项目中使用并调试 babel-form 时出现[hooks 报错](https://reactjs.org/warnings/invalid-hook-call-warning.html)。排查发现是因为使用了多个 react 版本。

注意：本文场景是一个项目引用了 babel-form，并且 npm link 之后发生的报错。所以下面只是讲开发环境的解决。

## 解决

1. `babel-form`中将`react`和`react-dom`都移到`peerDependencies`

2. webpack 配置 alias

   ```js
   {
     alias: {
       react: path.resolve('./node_modules/react')
     }
   }
   ```

## 参考

1. [react issue](https://github.com/facebook/react/issues/13991)
