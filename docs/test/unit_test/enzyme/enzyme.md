---
id: enzyme
title: enzyme
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [选择器](#%E9%80%89%E6%8B%A9%E5%99%A8)
- [Shallow rendering（shallow）](#shallow-renderingshallow)
- [Full dom rendering（mount）](#full-dom-renderingmount)
- [Static rendering](#static-rendering)
- [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

本文为初次学习笔记，持续更新。。。

## 选择器

1. css 选择器

2. react 组件

   ```react
   function MyComponent() {
     return <div />;
   }

   // find instances of MyComponent
   const myComponents = wrapper.find(MyComponent);
   ```

3. react displayme

   ```react
   function MyComponent() {
     return <div />;
   }
   MyComponent.displayName = 'My Component';

   // find instances of MyComponent
   const myComponents = wrapper.find('My Component');
   ```

4. 对象属性选择器

   ```react
   const wrapper = mount((
     <div>
       <span foo={3} bar={false} title="baz" />
     </div>
   ));

   wrapper.find({ foo: 3 });
   wrapper.find({ bar: false });
   wrapper.find({ title: 'baz' });
   //如果属性值为undefined，请使用findWhere()
   ```

## Shallow rendering（shallow）

> shallow 只渲染 React 顶级组件，不渲染子组件，适合测试 React 组件的渲染行为（可以模拟交互）

## Full dom rendering（mount）

> 如果想要渲染完整的 DOM 树，甚至想看看组件中的点击是否获得预期效果，可以选择“mount”，这种方法不光可以产生 DOM 树，还会加上所有组件的事件处理函数，可以模拟一个浏览器中的所有行为。（渲染子组件，可以模拟交互）

## Static rendering

> 如果只想检查 React 组件函数渲染完整 HTML，不需要交互功能，可以使用“render”函数。（渲染子组件，不可模拟交互）

## 参考

1. [官方文档](https://airbnb.io/enzyme/)
2. [探索 TypeScript + Jest 开源项目的自动化测试（上）](https://segmentfault.com/a/1190000020387433?utm_source=tag-newest)

3. [React 单元测试策略及落地](https://zhuanlan.zhihu.com/p/72627206)
