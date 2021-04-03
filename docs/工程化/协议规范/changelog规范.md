---
id: 11d34bb17b6b6518fe13a517e8018b61
title: changelog规范
---

## why

> 为了让用户和开发人员更简单明确的知晓项目在不同版本之间有哪些显著变动。

## how to do

配合语义化提交规范[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)，加上业界常用的版本和 changelog 生成包[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)

## 自定义 changelog 生成实践

### 在 monorepo 中如何生成 changelog

一般 monorepo 我们都适用 lerna 管理，lerna 使用 conventional-comit 来生成 changelog。lerna 默认使用 angualr 预设，如果我们需要定制自己的 changelog 生成方式呐。这里我们介绍如何使用 conventionalcommits 预设来根据 commit 提交自动生成 changelog。

1. 参考[conventional-changelog-conventionalcommits](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits)文档，可以自定义 changelog 配置。配置具体规则参考：[conventional-changelog-config-spec](https://github.com/conventional-changelog/conventional-changelog-config-spec)

2. 在`lerna.json`中配置`changelogPreset`，如下

   ```json
   {
     "changelogPreset": {
       "name": "conventionalcommits",
       "types": [
         { "type": "feat", "section": "Features" },
         { "type": "fix", "section": "Bug Fixes" },
         { "type": "perf", "section": "Performance Improvements" },
         { "type": "style", "section": "style" },
         { "type": "chore", "section": "chore" },
         { "type": "docs", "hidden": true },
         { "type": "refactor", "hidden": true },
         { "type": "test", "hidden": true }
       ],
       "commitUrlFormat": "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}"
     }
   }
   ```

   - feat、fix、perf、style、chore 类型会形成 changlog，docs、refactor、test 不会生成 changelog。

   - 配置了`section`的 type 会归类并生成标题。例如：feat 类型的 commit 会归类在 Features 标题下

   - 指定 commit 的地址。使用模板占位符。host、owener、repository、hash 根据 package.json 读取默认值，优先使用 context 中内容。

     context 即可以通过 conventional-changelog-cli 工具指定。

     - conventionoal-changelog -c xxx.json

     - context 必须是 json 文件

     - 参考以下 context 文件配置

       上述模板占位符可以在 context 文件中配置

       ```json
       {
         "owner": "drip",
         "repository": "drip-form"
       }
       ```

3. lerna version --conventional-commits 就会跟据上面的配置生成相应的 changelog

4. 将之前的 changelog 使用新的规则覆盖。

   参考[lerna 如何初始化 changelog](https://github.com/lerna/lerna/tree/main/commands/version#generating-initial-changelogs)

   lerna exec + conventional-changelog-cli 。同时需要制定预设为 conventionalcommits、context 文件为 xxx.json。因为 conventinal-changelog-cli 不读取 lerna.json 中的 changelog 配置。所以我们也需要制定 changelog 配置文件

   参考：[conventional-changlog-conventionalcommits 如何配置](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits#indirect-usage-as-preset)

5. 执行 lerna exec 命令生成初始化 changelog

   `npx lerna exec --concurrency 1 --stream -- 'conventional-changelog --preset conventionalcommits -n ../../changelogConfig.json --release-count 0 --commit-path $PWD --pkg $PWD/package.json --outfile $PWD/CHANGELOG.md --verbose --lerna-package $LERNA_PACKAGE_NAME -c ../../context.json'`

   上面命令`../../changelogConfig.json`效果同`lerna.json`中`changelogPreset`字段。具体配置方法参考上一步

   上面命令`../../context.json`即模板占位符中的 host、owner 等字段。

   因为配置文件都在根目录，所以有`../../`，这里路径请自行控制。也可以每个 package 设置单独的生成规则

### single repo 生成 changlog 方式

conventional-changelog-cli + conventional-changelog-conventionalcommits + 上述自定义配置即可完成

## QA

1. lerna 配合 conventionalcommits 时，提示`Unable to load conventional-changelog preset conventionalcommits`

   下载 conventional-changelog-conventionalcommits

## 参考

1. [keep a changelog](https://keepachangelog.com/en/1.0.0/)

2. [版本语义化](https://www.conventionalcommits.org/en/v1.0.0/)

3. [Conventional-commits-conventionalcommits](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits)

   使用版本语义化的自动 changelog 生成和版本管理的实现

4. [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

   生成 changelog 的 cli 工具，可配合 angular、conventionalcommits 等预设使用。可指定预设（-p）文件、指定 context（-c）文件

5. [git commit 、CHANGELOG 和版本发布的标准自动化](https://zhuanlan.zhihu.com/p/51894196)
