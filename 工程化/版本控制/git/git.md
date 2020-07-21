本文是阅读git的[gitbook](https://git-scm.com/book/zh/v2)的笔记



本地文件(本地工作目录)=> `git add .`=>暂存区(index索引区)=>`git commit`=>git仓库=>`git push`=>git远程仓库

## git流程图
![git 流程](https://img-blog.csdnimg.cn/2020010915034312.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)
## git init生成的.git文件目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200109154426999.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_1,color_FFFFFF,t_70)
`refs/heads`:包含本地仓库分支信息和commitId信息。
`refs/remotes`:当该仓库被推到远程时，在refs下会多个remotes文件。记录远程分支和commitId信息。


## Git 基础

1. 查看某个命令的帮助

   `git help xxx`

2. 克隆远程仓库并重置本地仓库命名

   `git clone 远程仓库地址 【本地命名】`

2. 合并add和commit操作

   `git commit -a -m "msg"`把所有已经追踪过的文件暂存add并提交commit

   相当于

   `git add .`和`git commit -m "msg"`

3. 删除本地和仓库的文件

   如果删除之前，该文件被修改且被添加到暂存区了，则需添加`-f`强制删除

   `git rm xx`

   相当于

   `rm xx`和`git add xx`

4. 删除仓库的文件，本地保留

   `git rm --cached xx`

5. 删除未跟踪`git clean`

   `git clean -f`只会移除没有忽略的未跟踪文件

   `git clean -d`删除空的文件夹

   `git clean -fd`不仅删除文件还删除空的文件夹

   `git clean -nfd`查看哪些文件或文件夹即将被删除

   `git clean -x`任何与 `.gitiignore` 或其他忽略文件中的模式匹配的文件也会被移除（为了完全干净的构建而移除构建生成的一些文件）

   `git clean -x -i`交互指定删除哪些未被跟踪的文件

6. 文件改名

   `git mv oldName newName`

   相当于

   `mv oldName newName`和`git rm oldName`和`git add newName`

7. 查看提交历史

   - `git log -p`查看每个更新之间的diff

   - `git log --stat`查看每次更新的具体文件修改信息相当于status

   - `git log --graph`显示 ASCII 图形表示的分支合并历史

   - `git log --pretty=格式选项`

     使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。

   - `git log --pretty=format:"%h %s" --graph`简短hash和提交信息格式化展示ASCII 图形表示的分支合并历史

8. 撤销操作

   - `commit`提交之后，需要修改commit的信息

     `git commit --amend`

   - `commit`提交之后，发现有文件未add到暂存区

     `git add .`将剩余文件添加到暂存区

     `git commit --amend`将上次提交和这次提交合并成一个

   - 撤销本地工作目录的文件（未`add`到暂存区）

     `git checkout xxx`撤销某个文件

     `git checkout .`撤销所有

   - 撤销`add`到暂存区的文件

     `git reset HEAD xxx`撤销某个文件

     `git reset HEAD .`撤销所有添加到暂存区的文件

   - 撤销`commit`

     `git reset HEAD^`默认--mixed参数

     - `git reset --mixed HEAD^`

       撤销commit，撤销add

     - `git reset --soft HEAD^`

       只撤销commit，不撤销add

     - `git reset --hard HEAD^`

       撤销commit、add、并删除本地工作目录代码

   - 撤销merge

     - **reset和revert的区别**

       - git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。
       - 在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。因为git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现，但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。
       - git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。
       - reset是回朔到指定的commit版本，指定的commit版本之后的操作commit都重置了。revert是删除指定的commit操作的内容，指定的commit之前和之后commit操作都不受影响，与此同时这个操作也会作为一个commit进行提交。

     - 未push到远程

       `git merge --abort`

     - 已经push远程仓库，但没有其他人有该分支分副本

       `git reset --hard HEAD^`

     - 已经push到远程仓库，其他人有改分支副本

       发生场景，发布的时候，有错误的ref1分支合并并push到了远程仓库，需要回退

       `git revert -m 1 HEAD`回退版本（注意:ref1中的内容在下次merge之后会显示aready up-to-update）-m后面的数字 1代表保留主分支，2代表保留被merge的分支

       `git log`查看revert的回退commit id

       `git revert commitId`撤销ref1的回退操作

       `git merge ref1`重新合并ref1

8. 仓库

   `git remote`展示本地仓库简写

   `git remote -v`显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL

   `git remote 本地简写 远程仓库地址 `添加远程仓库

   `git remote show 仓库简写（默认为origin）`列出远程仓库的 URL 与跟踪分支的信息

   `git remote origin xx`重命名本地和远程仓库的名字
   `git remote set-url [--push] <name> <newurl> [<oldurl>]`更改远程仓库地址

   `git remote rm 仓库`移除某个远程仓库

9. 别名

   `git config --global alias.别名 命令`

   例子：

   - `git config --global alias.ci commit`ci相当于commit
   - `git config --global alias.unstage 'git reset HEAD .'`git unstage相当于git reset HEAD .

10. 查看修改

    `git status [-s]`-s简洁展示修改信息

## Git 分支
1. 查看分支
    1. `git branch -r`查看远程所有分支
    2. `git branch -a`查看本地和远程所有分支
    3. `git branch`查看本地分支
3. 增加并切换分支

   `git checkout -b 分支名`相当于

   `git branch 分支名`

   `git cehckout 分支名`

4. 删除本地和远程分支

   - 本地

     `git branch -D 分支名`

   - 远程

     `git push origin :分支名`或`git push origin --delete 分支名`

     origin是远程仓库简写
5. 推送本地分支
	-u相当于 --set-upstram
	`git push -u origin 分支名` 
	相当于
	`git push oirgin 分支名`和`git branch --set-upstream-to=origin/分支名 分支名`

6. `rebase`[变基](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)

   - 基础

     有主分支master和分支experiment，正常合并操作是直接在maste执行merge合并experiment，这样三方合并如图![在这里插入图片描述](https://img-blog.csdnimg.cn/20190923160049464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)

     使用rebase之后如图
		![在这里插入图片描述](https://img-blog.csdnimg.cn/20190923160441462.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)
	
     1. 在experiment分支上执行`git rebase master`会将dev分支上的提交历史暂存

     2. 切到master分支执行`git merge experiment`会将暂存的提交合并到master

     不想来回切分支的话，可执行下述操作(待验证)

     1. master执行`git rebase master experiment`

     2. master执行`git merge experiment

   - 高级

     dev2是从dev1切出来的

     `git rebase --onto master dev1 dev2`取出dev2和dev1共同祖先之后的提交，然后在master上重放一遍
	- [`git rebase`改变提交历史](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)
	-  **注意：不要对在你的仓库外有副本的分支执行变基**

7. 清理无效的远程追踪分支
	当在远程删除分支时，.git/remotes文件夹中任然会有该分支。使用`git remore show origin`会提示使用`git remote prune`删除。
   - `git remote prune [origin]`删除本地失效的远程追踪分支（会将该分支从.git/remotes中删除）
   - `git remote prune origin --dry-run`查看哪些分支失效


## git tag
1. 附注标签
`git tag -a 标签(一般是版本号) -m "详细解释" `
2. 轻量标签
`git tag 标签`
3. 查看某一个标签
`git show 标签`
4. 列出所有的标签
`git tag`
5. 给某个历史提交(commitId)打标签
`git tag 标签 commitId`
6. 删除标签
`git tag -d 标签名`
7. 将某个标签提交到远程
`git push origin 标签名`
8. 将所有的标签提交到远程
`git push origin --tags`




## 分布式Git

1. `git diff --check`检查修改的文件是否存在空白错误（空白错误是指行尾的空格、Tab 制表符，和行首空格后跟 Tab 制表符的行为）

## Git工具

1. **`git log`个`git reflog`区别**

   `git log`查看commit历史和相关信息

   `git reflog`查看所有git操作信息，包括add、commit、checkout、pull等（reflog引用日志只存在于本地仓库，clone新仓库，引用日志是空的）

2. `HEAD^`和`HEAD~`

   - 不带数字

     `HEAD^`和`HEAD~`都指向HEAD的第一父提交

   - 带数字

     `HEAD^2`代表HEAD的第二父提交（merge时候，第一父提交指当前分支，第二父提交指待merge的分支）

     `HEAD~2`代表HEAD的第一父提交的第一父提交，即祖父提交

     `HEAD^^` 相当于 `HEAD~2`

3. 提交区间查询

   `git log 分支1..分支2`查看在分支2中不在分支1中提交

   `git log origin/master..HEAD`查看在当前分支而不在远程master分支的提交（默认HEAD，可省略HEAD）

   ```js
   //在ref2中不在ref1中的提交
   git log ref1..ref2
   git log ^ref1 ref2
   git log ref2 --not ref1
   
   //在ref1和ref2中不在ref3中的提交
   git log ref1 ref2 ^ref3
   
   //选择出被两个分支中的一个包含但又不被两者同时包含的提交
   git log ref1...ref2
   F
   E
   D
   C
   
   //选择出被两个分支中的一个包含但又不被两者同时包含的提交并确定提交属于哪个分支
   git log --left-right ref1...ref2
   < F
   < E
   > D
   > C
   ```

4. [交互式暂存](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%9A%82%E5%AD%98)

5. stash暂存

   - 添加

     `git stash`暂存跟踪的文件

     `git stash -u`或`git stash --include-untracked`Git也会暂存任何创建的未追踪的文件

     `git stash save -u "msg"`暂存并添加message

     `git stash -a`暂存所有文件包括被忽略的文件以及未被追踪的文件（建议使用git clean）

   - 删除

     `git stash pop`应用最新的暂存并从list中删除

     `git stash drop xxx`指定删除list中某个暂存（不会应用），不指定则默认最新的暂存

     `git stash cleear`清空list中所有stash

   - 查看

     `git stash list`查看暂存列表

     `git stash show xx`指定某个暂存查看diff，不指定则默认最新的暂存

   - 引用暂存

     `git stash apply xxx`不指定，默认最近暂存

     `git stash apply --index`不仅恢复工区区的文件，还回复暂存区的（不加--index,之前add到暂存区的文件apply之后任然会在工作区）

   - 从暂存创建分支

     `git stash branch ref1`

6. git调试（二分查找确定bug的引入提交Id）

   当分支存在bug，且只能确定bug的范围，无法详细确定bug的引入提交时使用`bisect`二分查找确认提交

   `git bisect start`启动调试

   `git bisect bad `告知git当前提交是有bug的

   `git bisect [good_commitId]`告知git某个commitId是正常的

   后续依次使用`git bisect bad `或`git bisect good `来缩小bug提交的commitId范围

   最后使用`git bisect reset`重置HEAD指针到最初位置

   **技巧：git bisect 可以接入脚本，比如 git bisect run test. 然后自己的脚本可以跑一个或者几个unit test, 返回0代表正确，返回1代表错误，这样 git 就可以二分来查找第一个 bad version 了。**

7. [git子模块](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)

## Git自定义

1. Git 常用钩子
   - pre-commit检查代码
   - commit-msg检查commit的msg信息

## [Git命令](https://git-scm.com/book/zh/v2/%E9%99%84%E5%BD%95-C%3A-Git-%E5%91%BD%E4%BB%A4-%E8%AE%BE%E7%BD%AE%E4%B8%8E%E9%85%8D%E7%BD%AE)
## questions
1. `git pull和git fetch`区别
	`git pull`相当于`git fetch + git merge`
	.git/refs中有heads和remotes文件夹，分别包含了本地仓库和远程仓库各个分支最新commitId。`git fetch`将会更新remotes中commitId为最新并且拉取最新在远程创建的分支。`git pull`会同时将heads和remotes中commitId更新
	注意：远程仓库某个分支被删除时，使用`git fetch`或`git pull`并不会将.git/refs文件夹中的remotes中分支删除。需要使用`git remote prune`删除
2. git无法提交空文件夹
	详情可参考知乎讨论[git add --all 为啥不能添加空文件夹，这样设计的初衷是？](https://www.zhihu.com/question/29811994)
	如果需要提交空文件夹，可以在空文件夹下面添加.gitkeep文件。关于.gitkeep文件的解释，可参考以下[.gitkeep是什么](https://segmentfault.com/a/1190000018191030?utm_source=tag-newest)
3. fatal: 拒绝合并无关的历史
	场景：`github`新建一个带readme的仓库。本地有一个使用`create-react-app`创建的仓库。`git pull origin master`时报错
	原因如下：[git pull --allow-unrelated-histories](https://git-scm.com/docs/git-pull#Documentation/git-pull.txt---allow-unrelated-histories)
	> By default, git merge command refuses to merge histories that do not share a common ancestor. This option can be used to override this safety when merging histories of two projects that started their lives independently. As that is a very rare occasion, no configuration variable to enable this by default exists and will not be added.
	
	解决：`git pull --allow-unrelated-histories`
4. 为不同项目设置name和emai
	* 方法一：当前项目下打开`.git`文件
		```
		[user]
			name=xxx
			email=xxx
		```
	* 方法二：`git config user.name xxx`、`git config user.email xxx`
	若后接`--global`，则是修改全局
	
	