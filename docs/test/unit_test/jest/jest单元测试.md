---
id: jest_unit
title: jest单元测试
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [global](#global)
- [expext](#expext)
- [jest 对象](#jest-%E5%AF%B9%E8%B1%A1)
- [mock function](#mock-function)
- [测试异步代码](#%E6%B5%8B%E8%AF%95%E5%BC%82%E6%AD%A5%E4%BB%A3%E7%A0%81)
  - [回调](#%E5%9B%9E%E8%B0%83)
  - [promise](#promise)
  - [Async/await](#asyncawait)
- [注意](#%E6%B3%A8%E6%84%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## global

- `afterAll(fn, timeout)`该文件中的所有测试完成后，运行一个函数；timeout：中止之前要等待的时间

- `afterEach(fn, timeout)`该文件中的每个测试完成后，运行一个函数

- `beforeAll(fn, timeout)`运行此文件中的任何测试之前，运行一个函数

- `beforeEach(fn, timeout)`运行此文件中的每个测试之前运行一个函数

- `describe(name, fn)`创建一个将几个相关测试组合在一起的模块

  可嵌套

- `describe.skip(name, fn)`不想运行特定的 describe 块

- `test(name, fn, timeout)`运行测试的方法同`it(name, fn, timeout)`

- `test.todo(name)`编写待测试的项目

- `test.only(name, fn, timeout)`指定测试是您要在该测试文件中运行的唯一测试

- `test.skip(name, fn)`跳过运行此测试

## [expext](https://jestjs.io/docs/en/expect)

- `expect(value)`每次测试都会使用

- `.not`测试相反的东西

- `.resolves`promise resolve 时

  expect(Promise.resolve('lemon')).resolves.toBe('lemon')

- `.rejects`promise reject 时

- `.toBe(value)`Object.is 比较两个值是否相等（不建议比较浮点数）

  浮点数使用`.toBeCloseTo(value)`

- `.toBeDefined()`定义

  `.toBeUndefined()`未定义

- `toBeFalsy()`是否为假

  `toBeTruthy` 是否为真

- `toBeNull()` 只匹配 `null`

- `.toBeNaN()`匹配 NaN

- `.toBeGreaterThan(number)` 大于

  `.toBeGreaterThanOrEqual(number)`大于等于

- `.toBeLessThan(number)`小于

  `.toBeLessThanOrEqual(number)`小于等于

- `.toBeInstanceOf(Class)`是某个类的实例

- `.toContain(item)`数组是否包含 item

- `.toContainEqual(item)`对象中是否包含 item 对象中每个键值

- `.toEqual(value)`递归比较对象所有属性(使用`Object.is`)

  `.toStrictEqual(value)`严格相等

- `.toMatch(regexpOrString)`检查字符串中的正则表达式匹配

- `.toMatchObject(object)`检查 JavaScript 对象对象的属性的子集相匹配

- `.toThrow(error?)`测试是否抛出了错误

  **注意：您必须将代码包装在函数中，否则将不会捕获错误，并且断言将失败。**

- `expect.extend(matchers)`自定义断言（支持异步）

- `expect.anything()`匹配任何值除了`null`和`undefined`

- `expect.arrayContaining(array)`期望的数组是接收到的数组的**子集**

- `expect.assertions(number)`在测试期间是否调用了一定数量的断言

- `expect.hasAssertions()`在测试期间至少调用了一个断言

- `expect.not.arrayContaining(array)`期望的数组**不是**接收到的数组**的子集**

  `expect.objectContaining`

- `expect.not.objectContaining(object)`预期对象**不是**所接收对象**的子集**

  `expect.not.objectContaining(object)`

- `expect.not.stringContaining(string)`如果它不是字符串，或者是不包含确切预期字符串的字符串，则匹配接收到的值

  `expect.stringContaining`

- `expect.not.stringMatching(string | regexp)`如果它不是字符串，或者是与预期字符串或正则表达式不匹配的字符串，则匹配接收到的值

## jest 对象

1. Mock Modules

   - `jest.disableAutomock()`在模块加载器中禁用自动模拟。
   - `jest.enableAutomock()`在模块加载器中启用自动模拟。
   - `jest.genMockFromModule(moduleName)`给定模块名称的情况下，请使用自动模拟系统为您生成模块的模拟版本。
   - `jest.mock(moduleName, factory, options)`

2. mock functions

   - jest.fn(implementation)`

   * `jest.spyOn(object, methodName)`

## mock function

所有模拟函数都具有`.mock`属性，该属性用于保存有关如何调用函数以及返回的函数的数据

## 测试异步代码

### 回调

使用参数 done，jest 将等到`done`回调被调用后再完成测试

```js
test('the data is peanut butter', (done) => {
  function callback(data) {
    expect(data).toBe('peanut butter')
    done()
  }

  fetchData(callback)
})
```

### promise

```js
test('the data is peanut butter', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter')
  })
})
```

### Async/await

```js
test('the data is peanut butter', async () => {
  const data = await fetchData()
  expect(data).toBe('peanut butter')
})
```

## 注意

1. toBe 比较的基本是原是类型，对象（引用类型）使用 toEqual

2. Jest cli 命令

   jest --watchAll 自动监听并重新测试
