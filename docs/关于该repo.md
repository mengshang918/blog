---
id: 95a148348b289ba387509c05eb1c6af2
title: 关于该repo
slug: /
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## 本站介绍

欢迎来到我的博客，本站主要基于[docusaurus](https://v2.docusaurus.io/)开发。

稍微将前端一些技术大纲整理了一下，方便后续学习和知识记录。不过好多内容还待完善，后续慢慢补充。

`技术大纲`详见<a href={useBaseUrl('/x_mind')}>思维导图</a>页面

- 用鼠标滚轮放大和缩小。
- 拖动背景平移。
- 通过单击圆圈来展开/折叠节点的子级。
- 点击链接跳转到详细文章页面

:::info 提示

本篇大纲只是个人学习所列，如有错误或建议。欢迎[issues](https://github.com/mengshang918/blog/issues)指出

:::

本站大概分成<a href={useBaseUrl('/')}>首页</a>、<a href={useBaseUrl('/docs')}>文档</a>、<a href={useBaseUrl('/x_mind')}>思维导图</a>、<a href={useBaseUrl('/blog')}>博客</a>、<a href={useBaseUrl('/project')}>项目</a>、<a href={useBaseUrl('/docs/todo')}>规划</a>

## repo 介绍

本站所有内容维护在 github 仓库中，详情请[查看](https://github.com/mengshang918/blog)

### husky+lint-staged+各个脚本

```json title="package.json"
{
  "scripts": {
    "pre-push": "node scripts/pre-push",
    "addFrontMatter": "node scripts/addFrontMatter",
    "createSideBars": "node scripts/createSideBars",
    "createTodoPage": "node scripts/createTodoPage"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && npm run createSideBars",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-push": "exec < /dev/tty && npm run pre-push"
    }
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "prettier --config .prettierrc.yml --write"],
    "*.md": [
      "npm run addFrontMatter",
      "npm run createTodoPage",
      "prettier --config .prettierrc.yml --write"
    ]
  }
}
```

1. 在 pre-commit 阶段

   1. `lint-staged`

      1. 对`js`文件进行校验和格式化

      2. ~~`doctoc` 对新增的 md 文件自动添加针对 github 的目录~~

         目录交给 `docusaurus` 处理

      3. 有改动的 md 文件

         1. 使用`addFrontMatter`脚本重新添加`frontmatter`

         2. 对根目录`docs`所有的`TODO.md`进行扫描生成<a href={useBaseUrl('/docs/todo')}>规划页</a>
         3. 格式化

   2. `docs`文件自动生成`website/sidebars.js`文件。

      无需手写 sidebar 目录文件。

2. commit-msg 校验 commit 是否满足[commit 规范](https://www.conventionalcommits.org/en/v1.0.0/)

3. pre-push 阶段

   1. 判断文件夹是否包含空格

   2. 空文件夹子自动添加 TODO.md

      因为 git 无法追踪空文件夹

   3. 针对 `docs` 下文件夹自动生成思维导图 xmind.html 和 xmind.png

      1. `docs` 下目录内容会生成 hash 文件，在`.scriptc/.cache/xmind.cache`

      2. 根据 hash 判断是否需要重新生成 html 和 png

      3. 先扫描 `docs`，生成` xmind.md`

      4. `markmap-lib` 将 xmind.md 生成 html

         思维导图页

      5. `puppeteer`对 html 截图生成 png

## ci&cd

配合[travis-ci](https://travis-ci.com/)实现网站 ci 和 cd

## 评论

[gittalk](https://github.com/gitalk/gitalk)支持，github 账号登陆，评论将形成`issue`。
