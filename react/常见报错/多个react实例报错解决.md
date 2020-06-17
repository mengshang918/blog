## 问题

开发了一个根据jsonSchema渲染表单的库`babel-form`，在其他项目中使用并调试babel-form时出现[hooks报错](https://reactjs.org/warnings/invalid-hook-call-warning.html)。排查发现是因为使用了多个react版本。

注意：本文场景是一个项目引用了babel-form，并且npm link之后发生的报错。所以下面只是讲开发环境的解决。

## 解决

1. `babel-form`中将`react`和`react-dom`都移到`peerDependencies`

2. webpack配置alias

   ```js
   {
     alias:{
       react:path.resolve('./node_modules/react')
     }
   }
   ```

## 参考

1. [react issue](https://github.com/facebook/react/issues/13991)

