/*
 * pre-push脚本
 * 1. 自动递归当前项目是否存在空文件夹。存在则在空文件夹下自动新增TODO.md文件。因为git无法跟踪空文件夹
 * 2. 自动递归判断文件夹或者文件是否包含空格，包含空格则报错并提示修改
 * @Author: jiangxiaowei
 * @Date: 2020-07-23 15:00:45
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-08-28 14:05:56
 */
const fs = require('fs')
const path = require('path')
// const readline = require('readline')
const chalk = require('chalk')
const ora = require('ora')
const inquirer = require('inquirer')
const execa = require('execa')
const createXmind = require('./createXmind')
const addTodoFn = require('./addTodo')
const loading = ora('读取当前项目空文件夹（git会忽略空文件夹）')
// 递归判断文件夹是否为空的入口
const rootPath = path.resolve(__dirname, '../')
// 忽略的文件
const ignoreDir = ['.git', '.scripts', '.gitignore', 'node_modules', 'scripts']
const { log } = console
// 包含空格的文件
const notAllowFilrOrDir = []
/*
// .gitignore文件忽略的文件
const gitIgnoreArr = []
const getGitIgnoreArr = ()=>{
  const rl = readline.createInterface({
    input:fs.createReadStream('.gitignore')
  })

  rl.on('line',(input)=>{
    gitIgnoreArr.push(input)
  })

  rl.on('close',()=>{
    log(chalk.green('读取.gitignore完毕'))
    ignoreDir.push(...gitIgnoreArr)
  })
}
// 将.gitignore中的文件忽略
getGitIgnoreArr() */

/**
 * 以entryPath为入口开始递归判断是否有文件夹为空。并自动新增TODO.md文件
 * @param {string} entryPath 递归判断文件夹是否为空的入口
 * @param {array} arr 空的文件夹组成的数组
 */
const loadDir = (entryPath, arr) => {
  const files = fs.readdirSync(entryPath)
  if (files.length === 0) {
    arr.push(entryPath)
    return
  }
  files.map((item) => {
    if (/ /.test(item)) {
      notAllowFilrOrDir.push(path.join(entryPath, item).split(rootPath)[1])
    }
    if (ignoreDir.includes(item)) {
      return
    }
    const filePath = path.resolve(entryPath, item)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      loadDir(filePath, arr)
    }
  })
}
let emptyDir = []
loading.start()
loadDir(rootPath, emptyDir)
loading.stop()
if (notAllowFilrOrDir.length > 0) {
  log(chalk.yellow(notAllowFilrOrDir.join('\n')))
  log(chalk.red('\n上述文件or文件夹包含空格，请修改！！！\n'))
  process.exit(1)
}

// 交互问题
const questions = [
  {
    type: 'confirm',
    name: 'isCreateXmind',
    message: '是否自动根据目录生成思维导图？',
    default: false,
  },
]

if (emptyDir.length !== 0) {
  // 去除rootPath前缀
  let emptyDirQ = emptyDir.map((item) =>
    item.split(rootPath).length > 1 ? item.split(rootPath)[1] : item
  )
  log(emptyDirQ)
  questions.unshift({
    type: 'confirm',
    name: 'addTodo',
    message: '确认要在上面所有文件夹下新建TODO.md文件?',
    default: false,
  })
}

// confirm交互，是否
;(async () => {
  inquirer
    .prompt(questions)
    .then(async (answer) => {
      const { addTodo, isCreateXmind } = answer
      if (addTodo) {
        emptyDir.map((item) => {
          addTodoFn(item)
        })
        await execa('git', ['add', '.'])
        await execa('git', ['commit', '-m', 'docs: 新增TODO.md文件'])
      }
      if (isCreateXmind) {
        createXmind(path.join(rootPath, '/docs'))
      }
    })
    .catch((err) => {
      log(chalk.red(err))
      process.exit(1)
    })
})()
