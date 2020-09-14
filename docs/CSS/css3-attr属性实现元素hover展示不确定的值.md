---
id: 0729c4e1a19b9e3b6904b91e63cbd435
title: css3-attr属性实现元素hover展示不确定的值
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [什么是 attr](#%E4%BB%80%E4%B9%88%E6%98%AF-attr)
- [用法](#%E7%94%A8%E6%B3%95)
- [兼容](#%E5%85%BC%E5%AE%B9)
- [test pre-commit doctoc](#test-pre-commit-doctoc)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

接到一个需求，楼层 hover 时候展示当前楼层的`name`和`order`。

- 方案一 js

  这个我就不细讲了，不是这边文章想要讲的

- 方案二 css3 attr 属性

  对浏览器兼容不是很在意可以使用。

## [什么是 attr](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)

> CSS 表达式 `attr()` 用来获取选择到的元素的某一 HTML 属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。 -- MDN

MDN 建议用于 content，其它还在实验中。

## 用法

```jsx
// react组件
<div data-name={`${name}`} className="tip"></div>
```

```stylus
.tip
  &:hover
    &:before
      display block
      content attr(data-name)
```

## 兼容

[can i use](<https://caniuse.com/#search=attr()>)

## test pre-commit doctoc
