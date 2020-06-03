接到一个需求，楼层hover时候展示当前楼层的`name`和`order`。

* 方案一 js

  这个我就不细讲了，不是这边文章想要讲的

* 方案二 css3 attr属性

  对浏览器兼容不是很在意可以使用。

## [什么是attr](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)

> CSS表达式 `attr()` 用来获取选择到的元素的某一HTML属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。 -- MDN

MDN建议用于content，其它还在实验中。

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

[can i use](https://caniuse.com/#search=attr())

