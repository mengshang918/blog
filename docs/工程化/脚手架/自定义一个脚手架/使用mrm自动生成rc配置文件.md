---
id: a22104b4d4d83949f5bd3d6a37f5e0e6
title: 使用mrm自动生成rc配置文件
---

## 本地开发

1. 下载 mrm
2. 进入 mrm 下载地址 package/mrm yarn link。shell 测试是否有 mrm
3. mrm xxx --dir 本地 preset 地址

## 注意

scope 下的 task 包名必须满足`@scope/mrm-task-xxxx`

使用方式:

- `npm i -g @scope/mrm-task-xxxx`
- `mrm @scope/xxxx`
