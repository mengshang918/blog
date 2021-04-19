---
id: eb6f3339b48c485a505130312e4ba55b
title: todo
---

## 帮助信息

git help xxx --web 网页打开 xxx 子命令的帮助文档

## git cat-file

git cat-file -t xxx 查看类型

git cat-file -p xxx 查看内容

## 可视化工具

gitk

## .git 文件

## Git log

`git log --oneline`简短的 commit 信息历

git log -n2 查看最近的两个 commit 信息

git branch -v 查看本地的分支和最新的 commit 信息

git log --all 所有分支的 commit 历史

git log --all --graph 图形化查看所有分支 commit 历史

git log --help --web 网页打开帮助历史

## git rebase 修改合并 commit 信息

git rebase -i commit 开启交互修改 commit 信息和内容 注意：已经提交到远程或者当前 commit 在他人分支使用的时候不能随便 rebase

git rebase -i commitid

**禁止向集成分支执行变更历史操作**

## git diff

gi t diff commitid1 commitid2 两个 commit 的 diff

git diff HEAD HEAD^

git diff HEAD HEAD~1

git diff 分支 a 分支 b 比较 a、b 分支的差异

git diff --cached 比较 HEAD 和暂存区的差异

git diff 比较工作区和暂存区差异

git diff -- 文件路径 1 文件路径 2 比较某个文件的差异

git diff 分支 a 分支 b -- 文件路径 比较两个分支某个文件的差异

## git checkout

git checkout -- 文件路径 撤销工作区文件的修改（可指定多个文件）

## clone 仓库的四种协议

`git clone 相对路径` 哑协议（无进度）

`git clone file://路径` 智能协议（有进度）

http、https 协议

ssh 协议

## git push --force 强制更新

## 分支集成策略

1. create a merge commit

   会出现 merge xxx into xxx 的 commit

2. rebase merge（线性树）

   多个 commit 记录。类似 cherry-pick

3. squash merge（线性树）

   合并多个 commit ，最后只有一个 commit

## GitHub search

in:readme

stars:>1000

## Git 工作流

1. 主干开发

   ![image-20210418121837527](/Users/jxw/Library/Application Support/typora-user-images/image-20210418121837527.png)

1. git flow 不适用敏捷开发团队，有点类似 app 发布流程，具有严格的发布周期

   ![image-20210418121219771](/Users/jxw/Library/Application Support/typora-user-images/image-20210418121219771.png)

1. github flow

   ![image-20210418121244438](/Users/jxw/Library/Application Support/typora-user-images/image-20210418121244438.png)

1. gitlab flow

   1. 带生产分支

      ![image-20210418121456006](/Users/jxw/Library/Application Support/typora-user-images/image-20210418121456006.png)

   2. 带环境分支

      ![image-20210418121623857](/Users/jxw/Library/Application Support/typora-user-images/image-20210418121623857.png)

   3. 带发布分支

      ![image-20210418121739572](/Users/jxw/Library/Application Support/typora-user-images/image-20210418121739572.png)

##

## 注意事项

1. 分离头指针

   HEAD 指向的不是分支，而是某个 commitid 的时候

   git checkout xxx 会出现分离头指针现象（xxx 是 commitid），这时候 commit 记录不会被保存。如果需要保存。则需要`git checkout 分支名 xxx`

## todo

1. fast-forward
