---
id: 3eef002bc8e16c0f5c28e748a52e231d
title: stylus
---

1. calc 中传变量

   ```stylus
   //一个变量
   $h = 'calc(100vh - %s)' % $header_h
   //多个变量
   $recommend_hide_b = 'calc(-%s + %s)' % ($recommend_h $recommend_title_h)
   ```

2. 多组件使用@import，跟样式直接使用。性能问题。webpack 打包优化？
