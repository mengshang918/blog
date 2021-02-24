---
id: caabb2c62d551b0596f7d903c362be1c
title: 父元素transform影响子元素fixed
---

## 问题

开发时发现当父元素有 transform 时，子元素`position:fixed`效果同`positon:absolute`

## 参考

1. https://www.w3.org/TR/css-transforms-1/#containing-block-for-all-descendants

   > For elements whose layout is governed by the CSS box model, any value other than none for the [transform](https://www.w3.org/TR/css-transforms-1/#propdef-transform) property also causes the element to establish a containing block for all descendants. Its padding box will be used to layout for all of its absolute-position descendants, fixed-position descendants, and descendant fixed background attachments.

2. https://www.zhangxinxu.com/wordpress/2015/05/css3-transform-affect/
