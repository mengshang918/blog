---
id: b1f6cee7ef1784df1f5f69a9c4a785da
title: 重拾jest
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Api](#api)
- [cli](#cli)
- [配置](#%E9%85%8D%E7%BD%AE)
- [get start](#get-start)
- [问题](#%E9%97%AE%E9%A2%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Api

1. [global](https://jestjs.io/docs/en/api)
2. [expect](https://jestjs.io/docs/en/expect)
3. [mock function](https://jestjs.io/docs/en/mock-function-api)
4. [jest object](https://jestjs.io/docs/en/jest-object)

## [cli](https://jestjs.io/docs/en/cli)

## 配置

1. jest 不支持 es6 模块语法，配置 babel

2. [babel 配置](https://jestjs.io/docs/en/getting-started.html#using-babel)

   jest 会自动添加`process.env.NODE_ENV === 'test'`环境变量

3. [ts 配置](https://jestjs.io/docs/en/getting-started.html#using-typescript)

4. [webpack 配置](https://jestjs.io/docs/en/getting-started.html#using-webpack)

5. [jest 配置](https://jestjs.io/docs/en/configuration)

   jest --init 初始化 jest.config.js

## get start

1. 异步

   1. callback

      - 不加 done，则会在 fetchData 执行完立马结束测试。不会等 callback 执行完。

      - 加了 done，测试会在 done 之后完成测试

      ```js
      test('xx', (done) => {
        function callback(data) {
          try {
            expect(data).toBe('peanut butter')
            done()
          } catch (error) {
            done(error)
          }
        }
        fetchData(callback)
      })
      ```

   2. promise

      下面两种方案必须有 return，否则测试将会在 resolve 之前完成

      - `return promise`，在 then、catch 中断言
        - `return fetchData().then(data=>{expect(data).toBe(xx)})`
        - `return fetachData().catch(err=>expect(e).toMatch('error'))`
      - `return 断言`
        - resolves
          - `return expect(fetchData()).resolves.toBe(xx)`
        - rejects
          - `return expect(fetchData()).rejects.toMatch('error')`

   3. Async/await

      使用 await，就不需要`返回promise`或者`返回断言`

      `test('xx',async ()={const data = await detchData();expect(data).toBe(xx)})`

2. setup and teardown

   - beforeEach()、afterEach()

   - beforeAll()、afterAll()

   - 上述四个方法是适用当前文件内所有 test。若只想针对文件中某几个 test，可使用`describe`对 test 进行分组

   - describe 和 test 的执行顺序

     问题：为啥不直接在`describe`中执行 setup 和 teardown，而是在 befor\*、after\*中执行 setup 和 teardown？

     > Jest executes all describe handlers in a test file _before_ it executes any of the actual tests.
     >
     > 翻译:jest 在执行任何实际 test 之前，会先执行完所有的 describe 处理程序

     所以在 describe 中设置 setup、teardown 会导致处理程序顺序异常。

   - `test.only('xx',()=>{})`可以在当前测试文件中只测试当前 test，跳过其他 test

3. mock functions

   - `create a mock function in test code`

     - 所有 mock function 均有`.mock`属性

     - mock return(模拟返回值)

       - `mockReturnValueOnce`
       - `mockReturnValue`

     - mock modules(模拟包)

       - Jest.mock('')

     - Mock Implementations(模拟函数实现)

       - `jest.fn()`

       - `jest.mockImplementation()`、`jest.mockImplementationOnce()`

         使用场景如下

         > define the default implementation of a mock function that is created from another module

         当某个函数是从其他模块引入。需要使用`jest.mock()`,而`jest.mockImplementation()`、`jest.mockImplementationOnce()`则自动添加了`jest.mock`。无需手动添加

     - jest.mockName('xx')模拟名称

     - 针对 mock function 的断言

   - [`write a manual mock to override a module dependency`](https://jestjs.io/docs/en/manual-mocks)

     > Manual mocks are used to stub out functionality with mock data
     >
     > 翻译：手动模拟用来讲 mock 的数据存入函数

     - mock 非 node 模块

       - 在当前文件下新建`__mocks__`文件夹，并在其中建需要 mock 的模块

     - mock node 模块

       - 未设置 root，则需和`node_modules`同级设置`__mocks__`文件夹,并手动 jest.mock('module_name')

       - 设置了 root

         无需显示调用 jest.mock()

       - 默认：nodejs 核心模块不会自动被 mock 的。必须显示 jest.mock('path')

       - scope 包，新建`__mocks__/@scopr/project-name.js`

       - 模块中某个方法 a 不 mock

         `const {a} = jest.requrireActual('xxx')`

4) [社区](https://github.com/jest-community)

   [awesome-jest](https://github.com/jest-community/awesome-jest)

5) snapshot test

   [react tree snapshot test](https://jestjs.io/blog/2016/07/27/jest-14.html#why-snapshot-testing)

   ```js
   import React from 'react'
   import renderer from 'react-test-renderer'

   const Link = () => (
     <div>
       <span>jest测试快照1</span>
     </div>
   )

   test('快照', () => {
     const tree = renderer.create(<Link />).toJSON()
     expect(tree).toMatchSnapshot()
   })
   ```

   第一次会在同级目录新建一个文件夹`__spanshots__`，并将第快照保存。

   后续如需修改生成的快照，使用`jest -u`or`jest --updateSnapshot`更新 snapshot

6) [timer mocks](https://jestjs.io/docs/en/timer-mocks)

7) [ES6 Class mocks](https://jestjs.io/docs/en/es6-class-mocks)

8) [测试 react](https://jestjs.io/docs/en/tutorial-react)

   `yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`

   - [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
   - [enzyme](https://enzymejs.github.io/enzyme/)
   - [react-testing-library](https://github.com/testing-library/react-testing-library)
   - [testutils](https://reactjs.org/docs/test-utils.html)

## 问题

1. 提示 Cannot find module '@bebel/babel-preset-preset-react'

   排查：发现未安装 babel-jest

   解决：`yarn add -D babel-jest`

2. lerna + jest

   - [Guide use jest with lerna](https://github.com/facebook/jest/issues/3112)

3. Failed to write coverage reports:no such file or directory xxx/istanbul-reports/lib/html/assets

`rm -rf node_modules .yarnclean && yarn install`

[No such file or directory (istanbul-reports/lib/html/assets)](https://github.com/gotwarlost/istanbul/issues/743)
