---
id: 35838b51774b034e2d8dedd5458518ff
title: 为什么ora的spinner卡住了
---

### when

在开发脚手架时，发现 ora 的 spinner 卡住了。代码如下：

```js
module.exports = handleError(
  async (data, dir) => {
    spinner.start('生成rc配置')
    // 确保临时文件夹存在。
    fse.ensureDirSync(TEMP_PATH_RC(dir))
    const configKeys = Object.keys(data)
    const subCommand = configKeys.reduce(
      (prev, cur, index) =>
        `${prev ? `${prev} ` : ''}--config:${getConfigKey(configKeys[index])} ${
          data[configKeys[index]]
        }`,
      ''
    )
    //highlight-start
    execa.commandSync(
      `npx mrm drip --preset @drip/drip${subCommand ? ` ${subCommand}` : ''}`,
      {
        // stdio: 'inherit', //展示log
        cwd: TEMP_PATH_RC(dir),
      }
    )
    //highlight-end
    spinner.succeed()
  },
  {
    exit: true,
    message: 'rc配置生成失败',
  },
  (data, dir) => {
    // 失败删除临时文件
    fse.removeSync(TEMP_PATH_FN(dir))
    spinner.fail()
  }
)
```

## why

> JavaScript is single-threaded, so synchronous operations blocks the thread, including the spinner animation. Prefer asynchronous operations whenever possible.

## how

**将同步改为异步！**

将代码高亮部分改成如下即可

```js
await execa.command(
  `npx mrm drip --preset @drip/drip${subCommand ? ` ${subCommand}` : ''}`,
  {
    // stdio: 'inherit', //展示log
    cwd: TEMP_PATH_RC(dir),
  }
)
```

## 参考

1. https://github.com/sindresorhus/ora#why-does-the-spinner-freeze
