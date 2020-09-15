---
id: bcedcc35cd9b79579bde7ce42c717ec0
title: webpack源码解读
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

import useBaseUrl from '@docusaurus/useBaseUrl'

本文只是笔者初次学习 webpack 源码所写（感谢[依柳诚](https://juejin.im/user/57e1143479bc44610a4a9577)提供的阅读 webpack 源码的思路），供以后精读作目录使用。

<img src={useBaseUrl('img/webpack_process.jpg')}/>

1. vscode debug

2. lib/index.js 入口

3. lib/webpack.js

   ```js
   const webpack = require('../lib/index.js') // 直接使用源码中的webpack函数
   const config = require('./webpack.config')
   const compiler = webpack(config)
   ```

   1. 校验 options

   2. createCompiler(options)创建 compiler 对象并放回

      ```js
      //精简版
      const createCompiler = (rawOptions) => {
        // lib/compiler.js
        const compiler = new Compiler(options.context)
        if (Array.isArray(options.plugins)) {
          for (const plugin of options.plugins) {
            if (typeof plugin === 'function') {
              plugin.call(compiler, compiler)
            } else {
              //执行插件的apply方法。这也是为啥自定义插件要有一个apply方法的原因
              plugin.apply(compiler)
            }
          }
        }
        //对options配置项 进行兜底赋值
        applyWebpackOptionsDefaults(options)
        //根据options中配置的target属性，加载webpack默认的插件;并注册一些钩子等待后续调用
        new WebpackOptionsApply().process(options, compiler)
        return compiler
      }
      ```

4. lib/compiler.js

   ```js
   compiler.run((err, stats) => {
     if (err) {
       console.error(err)
     } else {
       console.log(stats)
     }
   })
   ```

   1. 调用 run 方法

   2. run 方法中调用编译方法 compile

   3. compile 方法调用 make 钩子

      1. `make`在`EntryPlugin`中注册

         ```js
         //lib/EntryPlugin.js
         compiler.hooks.make.tapAsync(
           'EntryPlugin',
           (compilation, callback) => {
             const { entry, options, context } = this

             const dep = EntryPlugin.createDependency(entry, options)
             compilation.addEntry(context, dep, options, (err) => {
               callback(err)
             })
           }
         )
         ```

         回溯，EntryPlugin 在 EntryOptionPlugin 实例化，EntryOptionPlugin 在 lib/WebpackOptionsApply 中实例话并调用 apply 方法。在 createCompiler 中会实例化 WebpackOptionsApply，一切明朗。

         ```js
         //根据options中配置的target属性，加载webpack默认的插件;并注册一些钩子等待后续调用
         new WebpackOptionsApply().process(options, compiler)
         ```

      2. `EntryPlugin`主要执行了 compilation 中的`addEntry`方法

      3. this.addEntry --> this.addModuleChain --> this.handleModuleCreation --> this.addModule --> this.buildModule --> this.\_buildModule --> module.build

   4. make 钩子回调触发 compilation.seal() 打包 chunks 和 assets

   5. emitAssets 输出打包之后的文件到 output

## 参考

1. 第一张图片记不得从哪里下载的了，有道友知道麻烦评论，我会加上。如有侵权会删除
2. [掘金-依柳诚-Webpack 源码解读：理清编译主流程](https://juejin.im/post/5dc01199f265da4d12067ebe)
