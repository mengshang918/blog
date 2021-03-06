---
id: 5d8743a01675138db72310478b6c7f30
title: bash_shell脚本
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [shell 类型](#shell-%E7%B1%BB%E5%9E%8B)
- [Bash shell 功能](#bash-shell-%E5%8A%9F%E8%83%BD)
- [特殊符号](#%E7%89%B9%E6%AE%8A%E7%AC%A6%E5%8F%B7)
- [变量](#%E5%8F%98%E9%87%8F)
- [数组](#%E6%95%B0%E7%BB%84)
- [Shell scripts](#shell-scripts)
- [判断式](#%E5%88%A4%E6%96%AD%E5%BC%8F)
- [条件判断式](#%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD%E5%BC%8F)
- [循环](#%E5%BE%AA%E7%8E%AF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

1. 更换系统默认 shell

## shell 类型

- /bin/sh （已经被 /bin/bash 所取代）
- /bin/bash （就是 Linux 默认的 shell）
- /bin/tcsh （整合 C Shell ，提供更多的功能）
- /bin/csh （已经被 /bin/tcsh 所取代）
- zsh

## Bash shell 功能

- 命令编修能力 （history）~/.bash_history

- 命令与文件补全功能（tab 键）

- 命令别名设置功能（alias）

- 程序化脚本（shell scripts）

- 万用字符（Wildcard）\*

## 特殊符号

| 符号  | 内容                                                                 |
| ----- | -------------------------------------------------------------------- |
| #     | 注解符号：这个最常被使用在 script 当中，视为说明！在后的数据均不执行 |
| \     | 跳脱符号：将“特殊字符或万用字符”还原成一般字符                       |
| \|    | 管线 （pipe）：分隔两个管线命令的界定（后两节介绍）；                |
| ;     | 连续指令下达分隔符号：连续性命令的界定 （注意！与管线命令并不相同）  |
| ~     | 使用者的主文件夹                                                     |
| \$    | 取用变量前置字符：亦即是变量之前需要加的变量取代值                   |
| &     | 工作控制 （job control）：将指令变成背景下工作                       |
| !     | 逻辑运算意义上的“非” not 的意思！                                    |
| /     | 目录符号：路径分隔的符号                                             |
| >, >> | 数据流重导向：输出导向，分别是“取代”与“累加”                         |
| <, << | 数据流重导向：输入导向 （这两个留待下节介绍）                        |
| ' '   | 单引号，不具有变量置换的功能 （\$ 变为纯文本）                       |
| " "   | 具有变量置换的功能！ （\$ 可保留相关功能）                           |
| \` \` | 两个“ ` ”中间为可以先执行的指令，亦可使用 \$（ ）                    |
| （ ） | 在中间为子 shell 的起始与结束                                        |
| { }   | 在中间为命令区块的组合！                                             |

## 变量

1. 变量的取用 echo

   `echo $varible`

   `echo ${varible}`

2. 变量设定规则

   - `=`设置变量，且前后不能有空格

   - 双引号内的特殊字符如 \$ 等，可以保有原本的特性，如下所示： `var="lang is $LANG"`则`echo $var`可得`lang is zh_TW.UTF-8`

   - 单引号内的特殊字符则仅为一般字符 （纯文本），如下所示： `var='lang is $LANG'`则`echo $var`可得`lang is $LANG`

   - 使用`\`转义特殊字符

   - 使用``

   - `export varible`使变量变成环境变量

     - 子程序

       在当前这个 shell 的情况下，去启用另一个新的 shell ，新的那个 shell 就是子程序

     - 在一般的状态下，父程序的变量无法在子程序内使用。但通过 export 将变量变成环境变量后，就能够在子程序下面是使用了

   - `unset varible`取消变量

   - 单引号与双引号必须成对，否则会报错

3. `env` 列出当前 shell 环境下所有环境变量

4. `set`列出自定义变量和环境变量

5. `$`和`?`变量

   `$`是本 shell 的线程代号（pid）

   `?`是上一个执行命令的回传值，如果上个指令成功执行，则会回传一个 0；有错误否则非 0
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191206160920824.png)

6. `export`将自定义变量转成环境变量

7. 子程序仅会继承父程序的环境变量， 子程序不会继承父程序的自订变量

8. 变量键盘读取与宣告

   - `read`读取来自键盘输入的变量

     ```shell
     read [-pt] varible
     选项与参数：
     -p  ：后面可以接提示字符！
     -t  ：后面可以接等待的“秒数！”这个比较有趣～不会一直等待使用者啦！
     ```

   - `declare / typeset`定义变量的类型

     ```shell
     declare [-aixr] variable
     选项与参数：
     -a  ：将后面名为 variable 的变量定义成为阵列 （array） 类型
     -i  ：将后面名为 variable 的变量定义成为整数数字 （integer） 类型
     -x  ：用法与 export 一样，就是将后面的 variable 变成环境变量；
     -r  ：将变量设置成为 readonly 类型，该变量不可被更改内容，也不能 unset

     sum=100+300+50
     echo ${sum}  => '100+300+50'
     declare -i sum=100+300+50
     echo ${sum}  => 450
     ```

     - 变量类型默认为“字串”，所以若不指定变量类型，则 1+2 为一个“字串”而不是“计算式”。
     - bash 环境中的数值运算，默认最多仅能到达整数形态，所以 1/3 结果是 0；

## 数组

```shell
#设置数组
array_name=(value1 ... valuen)
array_name=(
value1
valuen
)
array_name[0]=value0
array_name[1]=value1
array_name[2]=value2
#读取数组
${array_name[index]}
#使用@ 或 * 可以获取数组中的所有元素获取数组中的所有元素
${my_array[*]}
${my_array[@]}
#使用#获取数组的长度
echo "数组元素个数为: ${#my_array[*]}"
echo "数组元素个数为: ${#my_array[@]}"
```

## Shell scripts

1. 为啥学习
   - 自动化管理
   - 追踪与管理系统
   - 简单入侵侦测
   - 连续指令单一化
   - 简易的数据处理
   - 跨平台支持与学习历程较短
2. 注意事项
   1. 指令的执行是从上而下、从左而右的分析与执行；
   2. 指令、选项与参数间的多个空白都会被忽略掉；
   3. 空白行也将被忽略掉，并且 [tab] 按键所推开的空白同样视为空白键；
   4. 如果读取到一个 Enter 符号 （CR） ，就尝试开始执行该行 （或该串） 命令；
   5. 至于如果一行的内容太多，则可以使用“ [Enter] ”来延伸至下一行；
   6. “ # ”可做为注解！任何加在 # 后面的数据将全部被视为注解文字而被忽略！
3. `read`指令实现对谈式脚本
4. `$(())`进行数值运算。仅支持整数
5. script 执行的方式差异
   1. 直接执行：在子程序中执行（变量不会传到父程序） \* 当使用前一小节提到的直接指令下达 （不论是绝对路径/相对路径还是 \${PATH} 内），或者是利用 bash （或 sh） 来下达脚本时， 该 script 都会使用一个新的 bash 环境来执行脚本内的指令
      ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191206160941558.gif)
   2. 利用 source 执行：在父程序中执行
      ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191206160954330.gif)

## 判断式

1. `test`测试

   | 测试的标志                                                                     | 代表意义                                                                                                                |
   | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
   | 1. 关于某个文件名的“文件类型”判断，如 test -e filename 表示存在否              |
   | -e                                                                             | 该“文件名”是否存在？（常用）                                                                                            |
   | -f                                                                             | 该“文件名”是否存在且为文件（file）？（常用）                                                                            |
   | -d                                                                             | 该“文件名”是否存在且为目录（directory）？（常用）                                                                       |
   | -b                                                                             | 该“文件名”是否存在且为一个 block device 设备？                                                                          |
   | -c                                                                             | 该“文件名”是否存在且为一个 character device 设备？                                                                      |
   | -S                                                                             | 该“文件名”是否存在且为一个 Socket 文件？                                                                                |
   | -p                                                                             | 该“文件名”是否存在且为一个 FIFO （pipe） 文件？                                                                         |
   | -L                                                                             | 该“文件名”是否存在且为一个链接文件？                                                                                    |
   | 2. 关于文件的权限侦测，如 test -r filename 表示可读否 （但 root 权限常有例外） |                                                                                                                         |
   | -r                                                                             | 侦测该文件名是否存在且具有“可读”的权限？                                                                                |
   | -w                                                                             | 侦测该文件名是否存在且具有“可写”的权限？                                                                                |
   | -x                                                                             | 侦测该文件名是否存在且具有“可执行”的权限？                                                                              |
   | -u                                                                             | 侦测该文件名是否存在且具有“SUID”的属性？                                                                                |
   | -g                                                                             | 侦测该文件名是否存在且具有“SGID”的属性？                                                                                |
   | -k                                                                             | 侦测该文件名是否存在且具有“Sticky bit”的属性？                                                                          |
   | -s                                                                             | 侦测该文件名是否存在且为“非空白文件”？                                                                                  |
   | 3. 两个文件之间的比较，如： test file1 -nt file2                               |                                                                                                                         |
   | -nt                                                                            | （newer than）判断 file1 是否比 file2 新                                                                                |
   | -ot                                                                            | （older than）判断 file1 是否比 file2 旧                                                                                |
   | -ef                                                                            | 判断 file1 与 file2 是否为同一文件，可用在判断 hard link 的判定上。 主要意义在判定，两个文件是否均指向同一个 inode 哩！ |
   | 4. 关于两个整数之间的判定，例如 test n1 -eq n2                                 |                                                                                                                         |
   | -eq                                                                            | 两数值相等 （equal）                                                                                                    |
   | -ne                                                                            | 两数值不等 （not equal）                                                                                                |
   | -gt                                                                            | n1 大于 n2 （greater than）                                                                                             |
   | -lt                                                                            | n1 小于 n2 （less than）                                                                                                |
   | -ge                                                                            | n1 大于等于 n2 （greater than or equal）                                                                                |
   | -le                                                                            | n1 小于等于 n2 （less than or equal）                                                                                   |
   | 5. 判定字串的数据                                                              |                                                                                                                         |
   | test -z string                                                                 | 判定字串是否为 0 ？若 string 为空字串，则为 true                                                                        |
   | test -n string                                                                 | 判定字串是否非为 0 ？若 string 为空字串，则为 false。 -n 亦可省略                                                       |
   | test str1 == str2                                                              | 判定 str1 是否等于 str2 ，若相等，则回传 true                                                                           |
   | test str1 != str2                                                              | 判定 str1 是否不等于 str2 ，若相等，则回传 false                                                                        |
   | 6. 多重条件判定，例如： test -r filename -a -x filename                        |                                                                                                                         |
   | -a                                                                             | （and）两状况同时成立！例如 test -r file -a -x file，则 file 同时具有 r 与 x 权限时，才回传 true。                      |
   | -o                                                                             | （or）两状况任何一个成立！例如 test -r file -o -x file，则 file 具有 r 或 x 权限时，就可回传 true。                     |
   | !                                                                              | 反相状态，如 test ! -x file ，当 file 不具有 x 时，回传 true                                                            |

2. 判断符号`[]`(常用在 if then 条件语句中)

   - 在中括号 [] 内的每个元件都需要有空白键来分隔；

   - 在中括号内的变量，最好都以双引号括号起来；

   - 在中括号内的常数，最好都以单或双引号括号起来。

   - 可以使用上面 test 中的参数比对

   - ```shell
     # □代表空格
     [  "$HOME"  ==  "$MAIL"  ]
     [□"$HOME"□==□"$MAIL"□]
      ↑       ↑  ↑       ↑
     ```

3. shell script 的默认变数（内建变量）（\$0,\$1）

   ```shell
   /path/to/scriptname  opt1  opt2  opt3  opt4
          $0             $1    $2    $3    $4
   ```

   - 执行的脚本文件名为 \$0 这个变量，第一个接的参数就是 ​\$1

   - \$# ：代表后接的参数“个数”，以上表为例这里显示为“ 4 ”；

   - \$@ ：代表`"$1" "$2" "$3" "$4"`之意，每个变量是独立的（用双引号括起来）；

   - \$\* ：代表`"$1<u>c</u>$2<u>c</u>$3<u>c</u>$4"`，其中 `<u>c</u>` 为分隔字符，默认为空白键， 所以本例中代表`"$1 $2 $3 $4"`之意。

   - `shift`可以造成参数变量号偏移  
     ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191206161016519.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70)

## 条件判断式

1. `if then`

   - 单层判断

     ```shell
     if [ 条件判断式 ]; then
       xxxx  # 当条件判断式成立时，可以进行的指令工作内容；
     fi   # 将 if 反过来写，就成为 fi 啦！结束 if 之意！
     ```

   - 多层判断

     - `if else

       ```shell
       # 一个条件判断，分成功进行与失败进行 （else）
       if [ 条件判断式 ]; then
         xxx  #当条件判断式成立时，可以进行的指令工作内容；
       else
          xxx  #当条件判断式不成立时，可以进行的指令工作内容；
       fi
       ```

     - `if ... elif ... elif ... else`

       ```shell
       # 多个条件判断 （if ... elif ... elif ... else） 分多种不同情况执行
       if [ 条件判断式一 ]; then
         xxx  #当条件判断式一成立时，可以进行的指令工作内容；
       elif [ 条件判断式二 ]; then
         xxx  #当条件判断式二成立时，可以进行的指令工作内容；
       else
        xxx   #当条件判断式一与二均不成立时，可以进行的指令工作内容；
       fi
       ```

2. `case...esac`判断

   ```shell
   case  $变量名称 in   #关键字为 case ，还有变量前有钱字号
     "第一个变量内容"）   #每个变量内容建议用双引号括起来，关键字则为小括号 ）
       程序段
       ;;            #每个类别结尾使用两个连续的分号来处理！
     "第二个变量内容"）
       程序段
       ;;
     *）                  #最后一个变量内容都会用 * 来代表所有其他值
       #不包含第一个变量内容与第二个变量内容的其他程序执行段
       exit 1
       ;;
   esac                  #最终的 case 结尾！“反过来写”思考一下！
   ```

3. 利用函数功能

   ```shell
   function fname（） {
       程序段
   }
   ```

   - function 也是拥有内置变量

     函数名称代表示 \$0 ，而后续接的变量也是以`$1, $2`

## 循环

1. 不定循环

   - while do done

     ```shell
     while [ condition ]  #中括号内的状态就是判断式
     do            #do 是循环的开始！
         #程序段落
     done          #done 是循环的结束
     ```

   - until do done 与 while 相反

     ```shell
     #当 condition 条件成立时，就终止循环， 否则就持续进行循环的程序段。
     until [ condition ]
     do
         程序段落
     done
     ```

2. 固定循环

   ```shell
   for var in con1 con2 con3 ...
   do
       程序段
   done
   #第一次循环时， $var 的内容为 con1 ；
   #第二次循环时， $var 的内容为 con2 ；
   #第三次循环时， $var 的内容为 con3 ；

   for （（ 初始值; 限制值; 执行步阶 ））
   do
       程序段
   done
   ```

   > **Tips** 1 到 100，除了使用 \$（seq 1 100） 之外，你也可以直接使用 bash 的内置机制来处理喔！可以使用 {1..100} 来取代 \$（seq 1 100） ！ 那个大括号内的前面/后面用两个字符，中间以两个小数点来代表连续出现的意思！例如要持续输出 a, b, c...g 的话， 就可以使用“ echo {a..g} ”这样的表示方式！seq 是 sequence 是连续的缩写

3. shell scripts 的调试

   ```shell
   sh [-nvx] scripts.sh
   选项与参数：
   -n  ：不要执行 script，仅查询语法的问题；
   -v  ：再执行 sccript 前，先将 scripts 的内容输出到屏幕上；
   -x  ：将使用到的 script 内容显示到屏幕上，这是很有用的参数！
   ```
