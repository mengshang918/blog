---
id: b4cd825516ccfa3a2629d71cd4d83e57
title: npm基础
---

# npm

## npm 安装 i/卸载 uninstall 命令

1. 安装包到全局
   - `npm i 包名 -g`
2. 安装到开发版本（devDependencies）
   - `npm i 包名 -D`
3. 安装到生产版本（dependencies）
   - `npm i 包名 -S`
4. 一次安装多个包
   - `npm i 包1 包2`

## npm 源切换

1. 使用 nrm 切换 npm 源

   `--help`你值得拥有

## node 版本切换

1. n 模块
2. nvm 模块

## 版本约束

1. ^x.x.x 约束主版本，后续找更新

2. ~x.x.x 保持前两位不变，后续找更新

3. \*找最新

4. x.x.x 定死版本

## npm 查看包的一些命令

1. npm list //查看当前项目下安装的所有包

2. npm outdated //列出过期包以及包更新的版本对比

3. npm info 包名 //查看当前包所有信息

4. npm view xxx version //查看包的最新版本

   npm view xxx versions //查看包发布的所有版本

5. npm dist-tag add xxx tag //给包添加标签

   npm install xxx 默认使用 latest 标签

   npm dist-tag ls xxx//查看当前包所有标签

## 常见问题

1. 模块下载(卡顿)超过五分钟

   ctrl+c->npm unistall 包名->npm cache clean 清除缓存->npm install 包名

2. 如何发布自己的包

   - 注册账号

   - 登录

   - npm login

   - 创建包目录->npm init -y ->创建入口->编写、输出

   - npm publish 发布

   - npm unpublish 删除

     发布操作长时间没做，需到邮箱中确认
