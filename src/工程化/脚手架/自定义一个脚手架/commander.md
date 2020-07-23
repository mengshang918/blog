<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

1. `const {program} = require('commander')`

2. 版本 `program.version('版本号','-V,--version','description')`

   - 参数 1：版本号

   - 参数 2：可选。指令，默认为-V 和--version

   - 参数 3：可选。指令描述

3. 可选`program.option('-s,--small <type> [args]','description',[fn],[default])`

- 参数 1: 指令。由一个断指令和长指令组成，中间用`,`、`|`、`空格`分割
  - <>代表该指令必须输入一个值
  - []代表可选
- 参数 2: 指令详细描述
- 参数 3：回调函数 可选
  - 回调函数接收两个参数。参数 1 是当前接收的指令值。参数 2 是之前接收的指令值
- 参数 4：默认值 可选

1. 必选`program.requiredOption()`

   使用方法同上

2. `program.command()`配置子命令 or`program.addCommand()`添加已经配置好的子命令

   - 什么是子命令(git 为例)

     git `-v` 中的`-v`就是上面所讲的 option

     git `clone xxx`中的`clone xxx`就是子命令了

     子命令也可以有 option

   - 第一个参数你可以指定命令的名字以及任何参数。如下

     `progra.command('clone from <url> [option]')`

   - 一个命令有且仅有最后一个参数是可变的，你需要在参数名后加上 `...` 来使它可变

     `progra.command('clone from <url> [option...]')`

   - 配合`.option()`给子命令加参数

   - 当 `.command()` 带有描述参数时，不能采用 `.action(callback)` 来处理子命令

     带有 description 时，会在入口脚本目录中搜索子命令的可执行文件

3. 操作处理程序`program.action()`

   - 参数 1：每个参数接收的变量
   - 参数 2：命令对象本身

4. `-h,--help`自动化帮助信息

   commander 自动生成

5. 使用`.on('-s',()=>{})`监听-s 输入。执行回调

   必须在`.parse()`之前书写

6. `.usage()`和`.name()`

   ```js
   program.name('my-command').usage('[global options] command')
   ```

   帮助信息会以下面开头

   ```
   Usage: my-command [global options] command
   ```

7. [`.parse()`和`.parseAsync()`解析字符串组](https://github.com/tj/commander.js/blob/64053252cbd5b5434afb7ec3f12c46ad2a352d8a/Readme_zh-CN.md#parse-%E5%92%8C-parseasync)

   **必须加**：用于解析 process.argv(默认)，设置 options 以及触发 commands

## 参考

1. [commander github readme](https://github.com/tj/commander.js/blob/64053252cbd5b5434afb7ec3f12c46ad2a352d8a/Readme.md)
2. [用 commander.js 构建自己的脚手架工具](https://zhuanlan.zhihu.com/p/38520504)
