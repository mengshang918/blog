<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [expect 介绍](#expect-%E4%BB%8B%E7%BB%8D)
- [mac 下安装](#mac-%E4%B8%8B%E5%AE%89%E8%A3%85)
- [启用选项](#%E5%90%AF%E7%94%A8%E9%80%89%E9%A1%B9)
- [变量](#%E5%8F%98%E9%87%8F)
- [条件测试](#%E6%9D%A1%E4%BB%B6%E6%B5%8B%E8%AF%95)
- [函数](#%E5%87%BD%E6%95%B0)
- [用法](#%E7%94%A8%E6%B3%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## expect 介绍

expect 是一个用来处理交互的命令。借助 expect 可以将交互过程写在一个脚本里，就可以实现自动化完成，无须用户输入

## mac 下安装

1. 安装 homebrew
2. `brew install expect` 安装 expect

## 启用选项

- `-c`:执行脚本前先执行的命令，可多次使用。

- `-d`:debug 模式，可以在运行时输出一些诊断信息，与在脚本开始处使用`exp_internal 1`相似。

- `-D`:启用交换调式器,可设一整数参数。

- `-f`:从文件读取命令，仅用于使用#!时。如果文件名为"-"，则从 stdin 读取(使用"./-"从文件名为-的文件读取)。

- `-i`:交互式输入命令，使用"exit"或"EOF"退出输入状态。

  `expect eof`

  `expect exit`

- `--`:标示选项结束(如果你需要传递与 expect 选项相似的参数给脚本时)，可放到`#!`行:`#!/usr/bin/expect --`。

- `-v`:显示 expect 版本信息。

## 变量

- `set varible xxx`设置变量 varible 为 xxx

- `$varible` 获取变量

- `set timeout n` 设置超时时间为 n 秒

- `set timeout -1 timeout` 时间设置为无限时

- 设置使用参数变量

  ```shell
  touch test
  sudo chmod +x ./test
  ./test meng run
  ```

  ```shell
  #questions文件
  #!/bin/bash
  echo "Hello, who are you?"
  read $REPLY #不加read，会导致下面expect执行的时候，参数1和参数2在最后展示
  echo "Can I ask you some questions?"
  read $REPLY
  echo "What is your favorite topic?"
  read $REPLY
  ```

  ```shell
  #test文件
  #设置变量varible1为expect的第一个参数（可使用$varible1获取参数1）
  #不同于shell script，shell第一个参数为$1
  #!/usr/bin/expect -f
  set my_name [lindex $argv 0]
  set my_favorite [lindex $argv 1]
  set timeout -1
  spawn ./questions
  expect "Hello, who are you?\r"
  send -- "Im $my_name\r"
  expect "Can I ask you some questions?\r"
  send -- "Sure\r"
  expect "What is your favorite topic?\r"
  send -- "$my_favorite\r"
  expect eof
  ```

  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191209170801787.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)

## 条件测试

使用大括号编写条件测试

```shell
expect {
    "something" { send -- "send this\r" }
    "*another" { send -- "send another\r" }
}
```

- `if elseif`

  `puts`类似 shell 脚本的 echo，将内容输出到控制台

  ```shell
  #!/usr/bin/expect -f
  set NUM 1
   if { $NUM < 5 } {
      puts "\Smaller than 5\n"
  } elseif { $NUM > 5 } {
      puts "\Bigger than 5\n"
  } else {
      puts "\Equals 5\n"
  }
  ```

- while 循环（while 循环必须使用花括号来包含）

  ```shell
  #!/usr/bin/expect -f
  set NUM 0
  while { $NUM <= 5 } {
      puts "\nNumber is $NUM"
      set NUM [ expr $NUM + 1 ]
  }
  puts ""
  ```

- for 循环

  ```shell
  #!/usr/bin/expect -f
  for {set NUM 0} {$NUM <= 5} {incr NUM} {
      puts "\nNUM = $NUM"
  }
  puts ""
  ```

## 函数

```shell
proc 函数名 {参数} {
	xxxx
}
[函数名 参数]
```

```shell
#!/usr/bin/expect -f
proc myfunc { TOTAL } {
    set TOTAL [expr $TOTAL + 1]
    return "$TOTAL"
}
set NUM 0
while {$NUM <= 5} {
    puts "\nNumber $NUM"
    set NUM [myfunc $NUM]
}
puts ""
```

## 用法

- `send`：用于向进程发送字符串（代替用户手动输入）

- `expect`：从进程接收字符串（也可以是正则），匹配脚本的反馈

  - `$expect_out(buffer)`　　　匹配到的是**所有**输入
  - `$expect_out(0,string)`　　 匹配到 **expect 参数的输入**
  - `expect 'password:' {send "$passwd"}` 匹配 password

- `spawn`：启动新的进程

  - `spawn ssh username@passwd -p port` 开启 ssh 连接

- `interact`：允许用户交互

  > 有时，您的 Expect 脚本包含一些您不想与使用 Expect 脚本的其他用户共享的敏感信息，例如密码或任何其他数据，因此您希望脚本从您那里获取此密码并继续正常进行自动化。
  >
  > interact 命令将控件还原回键盘。执行此命令后，Expect 将开始从键盘读取。

- `puts`类似 shell 脚本的 echo，将内容输出到控制台

- `set varible xxx`设置变量 varible 为 xxx
