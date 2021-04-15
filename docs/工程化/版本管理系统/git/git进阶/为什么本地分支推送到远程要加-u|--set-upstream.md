---
id: 500396d53723578a75a7f6b5446b44d7
title: 为什么本地分支推送到远程要加-u|--set-upstream
---

upstream 代表上游，git2.0 之后，默认设置 push.default 为 simple（具体可点击[查看](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)）。

大概意思就是，本地分支需要设置一个上游来控制 push 到哪个远程分支。默认是 simple，是需要用户指定的。如果 git push 的时候添加了-u|--set-upstream，则代表设置当前本地分支的上游为 xxxx

`git push -u origin xxxx`将当前分支推送到远程 xxxx 分支，同时设置本地分支的上游为 xxxx。

如果直接`git push origin xxxx`，则下次 push 的时候仍然需要指定 push 到哪个远程分支

## 参考

1. [why-do-i-have-to-git-push-set-upstream-origin-branch](https://stackoverflow.com/questions/37770467/why-do-i-have-to-git-push-set-upstream-origin-branch)

2. [push.default 配置](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)
