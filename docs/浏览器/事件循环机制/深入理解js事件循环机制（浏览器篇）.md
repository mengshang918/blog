---
id: dc678db259507b0c4aeb94631e2dc8a7
title: 深入理解js事件循环机制（浏览器篇）
---

本文转载非原创，感谢[lynnelv](http://lynnelv.github.io/)

## 抛在前面的问题：

- 单线程如何做到异步
- 事件循环的过程是怎样的
- `macrotask` 和 `microtask` 是什么，它们有何区别

### 单线程和异步

提到 js，就会想到**单线程**，**异步**，那么单线程是如何做到异步的呢？概念先行，先要了解下单线程和异步之间的关系。

js 的任务分为 _同步_ 和 _异步_ 两种，它们的处理方式也不同，**同步任务**是直接在主线程上排队执行，**异步任务**则会被放到任务队列中，若有多个任务（异步任务）则要在任务队列中排队等待，任务队列类似一个缓冲区，任务下一步会被移到**调用栈**（call stack），然后主线程执行调用栈的任务。

单线程是指 js 引擎中负责解析执行 js 代码的线程只有一个（**主线程**），即每次只能做一件事，而我们知道一个 ajax 请求，主线程在等待它响应的同时是会去做其它事的，浏览器先在事件表注册 ajax 的回调函数，响应回来后回调函数被添加到任务队列中等待执行，不会造成线程阻塞，所以说 js 处理 ajax 请求的方式是异步的。

总而言之，检查调用栈是否为空，以及确定把哪个 task 加入调用栈的这个过程就是**事件循环**，而**js 实现异步的核心就是事件循环**。

### 调用栈和任务队列

顾名思义，调用栈是一个栈结构，函数调用会形成一个栈帧，帧中包含了当前执行函数的参数和局部变量等上下文信息，函数执行完后，它的执行上下文会从栈中弹出。

下图就是调用栈和任务队列的关系图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191018103714842.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)

### 事件循环

关于事件循环，[HTML 规范](https://www.w3.org/TR/html5/webappapis.html#event-loop)的介绍

> There must be at least one event loop per user agent, and at most one event loop per unit of related similar-origin browsing contexts.
> An event loop has one or more task queues.
> Each task is defined as coming from a specific task source.

从规范理解，浏览器至少有一个事件循环，一个事件循环至少有一个任务队列（macrotask），每个外任务都有自己的分组，浏览器会为不同的任务组设置优先级。

### macrotask & microtask

规范有提到两个概念，但没有详细介绍，查阅一些资料大概可总结如下：

> **macrotask**：包含执行整体的 js 代码，事件回调，XHR 回调，定时器（setTimeout/setInterval/setImmediate），IO 操作，UI render

> **microtask**：更新应用程序状态的任务，包括 promise 回调，MutationObserver，process.nextTick，Object.observe

其中`setImmediate`和`process.nextTick`是 nodejs 的实现，在[nodejs 篇](http://lynnelv.github.io/js-event-loop-nodejs)会详细介绍。

### 事件处理过程

关于`macrotask`和`microtask`的理解，光这样看会有些晦涩难懂，结合事件循坏的机制理解清晰很多，下面这张图可以说是介绍得非常清楚了。

![img](https://imgconvert.csdnimg.cn/aHR0cDovL2x5bm5lbHYuZ2l0aHViLmlvL2ltZy9hcnRpY2xlL2V2ZW50LWxvb3AvZXZlbnQtbG9vcC5qcGc?x-oss-process=image/format,png)
总结起来，一次事件循环的步骤包括：

```
1. 检查macrotask队列是否为空，非空则到2，为空则到3
2. 执行macrotask中的一个任务
3. 继续检查microtask队列是否为空，若有则到4，否则到5
4. 取出microtask中的任务执行，执行完成返回到步骤3
5. 执行视图更新
```

### mactotask & microtask 的执行顺序

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191018102650256.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)

读完这么多干巴巴的概念介绍，还不如看一段代码感受下

```javascript
console.log('start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('end')
```

打印台输出的 log 顺序是什么？结合上述的步骤分析，系不系 so easy~
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191018102722223.gif)
首先，全局代码（main()）压入调用栈执行，打印`start`；

接下来 setTimeout 压入 macrotask 队列，promise.then 回调放入 microtask 队列，最后执行 console.log(‘end’)，打印出`end`；

至此，调用栈中的代码被执行完成，回顾 macrotask 的定义，我们知道全局代码属于 macrotask，macrotask 执行完，那接下来就是执行 microtask 队列的任务了，执行 promise 回调打印`promise1`；

promise 回调函数默认返回 undefined，promise 状态变为 fullfill 触发接下来的 then 回调，继续压入 microtask 队列，**event loop 会把当前的 microtask 队列一直执行完**，此时执行第二个 promise.then 回调打印出`promise2`；

这时 microtask 队列已经为空，从上面的流程图可以知道，接下来主线程会去做一些 UI 渲染工作（不一定会做），然后开始下一轮 event loop，执行 setTimeout 的回调，打印出`setTimeout`；

这个过程会不断重复，也就是所谓的**事件循环**。

### 视图渲染的时机

回顾上面的事件循环示意图，update rendering（视图渲染）发生在本轮事件循环的 microtask 队列被执行完之后，也就是说执行任务的耗时会影响视图渲染的时机。通常浏览器以每秒 60 帧（60fps）的速率刷新页面，据说这个帧率最适合人眼交互，大概 16.7ms 渲染一帧，所以如果要让用户觉得顺畅，单个 macrotask 及它相关的所有 microtask 最好能在 16.7ms 内完成。

但也不是每轮事件循环都会执行视图更新，浏览器有自己的优化策略，例如把几次的视图更新累积到一起重绘，重绘之前会通知 requestAnimationFrame 执行回调函数，也就是说 requestAnimationFrame 回调的执行时机是在一次或多次事件循环的 UI render 阶段。

以下代码可以验证

```javascript
setTimeout(function () {
  console.log('timer1')
}, 0)

requestAnimationFrame(function () {
  console.log('requestAnimationFrame')
})

setTimeout(function () {
  console.log('timer2')
}, 0)

new Promise(function executor(resolve) {
  console.log('promise 1')
  resolve()
  console.log('promise 2')
}).then(function () {
  console.log('promise then')
})

console.log('end')
```

运行结果截图如下

![运行结果1](https://imgconvert.csdnimg.cn/aHR0cDovL2x5bm5lbHYuZ2l0aHViLmlvL2ltZy9hcnRpY2xlL2V2ZW50LWxvb3AvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLXJ1bi1yZXN1bHQxLnBuZw?x-oss-process=image/format,png)![运行结果2](https://imgconvert.csdnimg.cn/aHR0cDovL2x5bm5lbHYuZ2l0aHViLmlvL2ltZy9hcnRpY2xlL2V2ZW50LWxvb3AvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLXJ1bi1yZXN1bHQyLnBuZw?x-oss-process=image/format,png)

可以看到，结果 1 中`requestAnimationFrame()`是在一次事件循环后执行，而在结果 2，它的执行则是在三次事件循环结束后。

## 总结

1. 事件循环是 js 实现异步的核心

2. 每轮事件循环分为 3 个步骤：

   > a) 执行 macrotask 队列的一个任务
   > b) 执行完当前 microtask 队列的所有任务
   > c) UI render

3. 浏览器只保证 requestAnimationFrame 的回调在重绘之前执行，没有确定的时间，何时重绘由浏览器决定

[参考资料]

1. [event-loops](https://www.w3.org/TR/html5/webappapis.html#event-loops)
2. [sec-jobs-and-job-queues](http://ecma-international.org/ecma-262/6.0/#sec-jobs-and-job-queues)
3. [Promises/A+](https://promisesaplus.com/#notes)
4. [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly&utm_medium=email)
5. [HTML 系列：macrotask 和 microtask](https://zhuanlan.zhihu.com/p/24460769)
6. http://www.ruanyifeng.com/blog/2014/10/event-loop.html
