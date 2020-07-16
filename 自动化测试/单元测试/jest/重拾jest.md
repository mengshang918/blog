## Api

1. [global](https://jestjs.io/docs/en/api)
2. [expect](https://jestjs.io/docs/en/expect)
3. [mock function](https://jestjs.io/docs/en/mock-function-api)
4. [jest object](https://jestjs.io/docs/en/jest-object)

## [cli](https://jestjs.io/docs/en/cli)

## 配置

1. jest不支持es6模块语法，配置babel

2. [babel配置](https://jestjs.io/docs/en/getting-started.html#using-babel)

3. [ts配置](https://jestjs.io/docs/en/getting-started.html#using-typescript)

4. [webpack配置](https://jestjs.io/docs/en/getting-started.html#using-webpack)

5. [jest 配置](https://jestjs.io/docs/en/configuration)

   jest --init初始化jest.config.js

## get start

1. 异步

   1. callback

      * 不加done，则会在fetchData执行完立马结束测试。不会等callback执行完。

      * 加了done，测试会在done之后完成测试

      ```js
      test('xx',done=>{
      	function callback(data) {
          try {
            expect(data).toBe('peanut butter');
            done();
          } catch (error) {
            done(error);
          }
        }
        fetchData(callback);
      })
      ```

   2. promise

      下面两种方案必须有return，否则测试将会在resolve之前完成

      * `return promise`，在then、catch中断言
        * `return fetchData().then(data=>{expect(data).toBe(xx)})`
        * `return fetachData().catch(err=>expect(e).toMatch('error'))`
      * `return 断言`
        * resolves
          * `return expect(fetchData()).resolves.toBe(xx)`
        * rejects
          * `return expect(fetchData()).rejects.toMatch('error')`

   3. Async/await

      使用await，就不需要`返回promise`或者`返回断言`

      `test('xx',async ()={const data = await detchData();expect(data).toBe(xx)})`

2. setup and teardown

   * beforeEach()、afterEach()

   * beforeAll()、afterAll()

   * 上述四个方法是适用当前文件内所有test。若只想针对文件中某几个test，可使用`describe`对test进行分组

   * describe和test的执行顺序

     问题：为啥不直接在`describe`中执行setup和teardown，而是在befor*、after\*中执行setup和teardown？

     > Jest executes all describe handlers in a test file *before* it executes any of the actual tests.
     >
     > 翻译:jest在执行任何实际test之前，会先执行完所有的describe处理程序

     所以在describe中设置setup、teardown会导致处理程序顺序异常。

   * `test.only('xx',()=>{})`可以在当前测试文件中只测试当前test，跳过其他test

3. mock functions

   * `create a mock function in test code`

     * 所有 mock function均有`.mock`属性

     * mock return(模拟返回值)

       * `mockReturnValueOnce`
       * `mockReturnValue`

     * mock modules(模拟包)

       * Jest.mock('')

     * Mock Implementations(模拟函数实现)

       * `jest.fn()`

       * `jest.mockImplementation()`、`jest.mockImplementationOnce()`

         使用场景如下

         > define the default implementation of a mock function that is created from another module

         当某个函数是从其他模块引入。需要使用`jest.mock()`,而`jest.mockImplementation()`、`jest.mockImplementationOnce()`则自动添加了`jest.mock`。无需手动添加

     * jest.mockName('xx')模拟名称

     * 针对mock function的断言

   * [`write a manual mock to override a module dependency`](https://jestjs.io/docs/en/manual-mocks)

     >  Manual mocks are used to stub out functionality with mock data
     >
     > 翻译：手动模拟用来讲mock的数据存入函数

     * mock 非node模块

       * 在当前文件下新建`__mocks__`文件夹，并在其中建需要mock的模块

     * mock node模块

       * 未设置root，则需和`node_modules`同级设置`__mocks__`文件夹,并手动jest.mock('module_name')

       * 设置了root

         无需显示调用jest.mock()

       * 默认：nodejs核心模块不会自动被mock的。必须显示jest.mock('path')

       * scope包，新建`__mocks__/@scopr/project-name.js`

       * 模块中某个方法a不mock

         `const {a} = jest.requrireActual('xxx')`

     

4. [社区](https://github.com/jest-community)

   [awesome-jest](https://github.com/jest-community/awesome-jest)

12. snapshot test

    [react tree snapshot test](https://jestjs.io/blog/2016/07/27/jest-14.html#why-snapshot-testing) 

    ```js
    import React from 'react';
    import renderer from 'react-test-renderer'
    
    const Link = ()=>(
        <div>
            <span>jest测试快照1</span>
        </div>
    )
    
    test('快照',()=>{
        const tree = renderer.create(<Link/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
    ```

    第一次会在同级目录新建一个文件夹`__spanshots__`，并将第快照保存。

    后续如需修改生成的快照，使用`jest -u`or`jest --updateSnapshot`更新snapshot

13. [timer mocks](https://jestjs.io/docs/en/timer-mocks)

14. [ES6 Class mocks](https://jestjs.io/docs/en/es6-class-mocks) 

15. [测试react](https://jestjs.io/docs/en/tutorial-react)

    `yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`

    * [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
    * [enzyme](https://enzymejs.github.io/enzyme/)
    * [react-testing-library](https://github.com/testing-library/react-testing-library)
    * [testutils](https://reactjs.org/docs/test-utils.html)

## 问题

1. 提示Cannot find module '@bebel/babel-preset-preset-react'

   排查：发现未安装babel-jest

   解决：`yarn add -D babel-jest`



