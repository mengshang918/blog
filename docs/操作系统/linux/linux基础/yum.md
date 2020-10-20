---
id: 760bccd78d82b9e52641e9273b7baad5
title: yum
---

## linux yum 命令

yum（ Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器。

基於 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。

yum 提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。

### yum 语法

```
yum [options] [command] [package ...]
```

- **options：**可选，选项包括-h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。
- **command：**要进行的操作。
- **package**操作的对象。

---

## yum 常用命令

- 列出所有可更新的软件清单命令：`yum check-update`

- 更新所有软件命令：`yum update`

- 仅安装指定的软件命令：`yum install <package_name>`

- 仅更新指定的软件命令：`yum update <package_name>`

- 列出所有可安裝的软件清单命令：`yum list`

- 删除软件包命令：`yum remove <package_name>`

- 查找软件包 命令：`yum search <keyword>`

- 清除缓存命令:

  - yum clean packages: 清除缓存目录下的软件包

  * yum clean headers: 清除缓存目录下的 headers
  * yum clean oldheaders: 清除缓存目录下旧的 headers
  * yum clean, yum clean all (= yum clean packages; yum clean oldheaders) :清除缓存目录下的软件包及旧的 headers
