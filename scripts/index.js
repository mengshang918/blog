/*
 * pre-push脚本，自动递归当前项目是否存在空文件夹。存在则在空文件夹下自动新增TODO.md文件。因为git无法跟踪空文件夹
 * @Author: jiangxiaowei
 * @Date: 2020-07-23 15:00:45
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-07-23 15:01:55
 */
const fs = require('fs')
const path = require('path')
// const readline = require('readline')
const chalk = require('chalk')
const ora = require('ora')
const inquirer = require('inquirer')
const execa = require('execa')

const loading = ora('读取当前项目空文件夹（git会忽略空文件夹）')
// 递归判断文件夹是否为空的入口
const rootPath = path.resolve(__dirname, '../')
// 忽略的文件
const ignoreDir = ['.git', '.scripts', '.gitignore', 'node_modules']
const { log } = console

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
 * 在path路径下添加TODO.md文件
 * @param {string} path 路径
 */
const addTodoFn = (path) => {
  try {
    fs.appendFileSync(`${path}/TODO.md`, '')
  } catch (error) {
    log(chalk.red(error))
  }
}

/**
 * 以rootPath为入口开始递归判断是否有文件夹为空。并自动新增TODO.md文件
 * @param {string} rootPath 递归判断文件夹是否为空的入口
 * @param {array} arr 空的文件夹组成的数组
 */
const loadDir = (rootPath, arr) => {
  const files = fs.readdirSync(rootPath)
  if (files.length === 0) {
    arr.push(rootPath)
    return
  }
  files.map((item) => {
    if (ignoreDir.includes(item)) {
      return
    }
    const filePath = path.resolve(rootPath, item)
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

// 去除rootPath前缀
let emptyDirQ = emptyDir.map((item) =>
  item.split(rootPath).length > 1 ? item.split(rootPath)[1] : item
)
// confirm交互，是否
;(async () => {
  if (emptyDir.length === 0) {
    process.exit(0)
  } else {
    log(emptyDirQ)
    inquirer
      .prompt({
        type: 'confirm',
        name: 'addTodo',
        message: '确认要在上面所有文件夹下新建TODO.md文件',
        default: false,
      })
      .then(async (answer) => {
        const { addTodo } = answer
        if (addTodo) {
          emptyDir.map((item) => {
            addTodoFn(item)
          })
          try {
            await execa('git', ['add', '.'])
            await execa('git', ['commit', '-m', '新增TODO.md文件'])
          } catch (error) {
            log(chalk.red(error))
          }
          process.exit(0)
        } else {
          process.exit(1)
        }
      })
  }
})()