/*
 * 在路径下添加TODO.md文件
 * @Author: jiangxiaowei
 * @Date: 2020-07-28 16:05:59
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-07-28 16:12:21
 */
const fs = require('fs')
const chalk = require('chalk')
const { log } = console

/**
 * 在path路径下添加TODO.md文件
 * @param {string} path 路径
 */
module.exports = (path) => {
  try {
    fs.appendFileSync(`${path}/TODO.md`, '')
  } catch (error) {
    log(chalk.red(error))
  }
}
