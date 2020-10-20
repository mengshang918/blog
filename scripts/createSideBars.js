/*
 * 根据docs目录自动生成docusaurus所使用的sidebars文件
 * @Author: jiangxiaowei
 * @Date: 2020-09-14 14:51:31
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-10-20 15:53:45
 */

const path = require('path')
const fs = require('fs')
const execa = require('execa')
const chalk = require('chalk')
const matter = require('gray-matter')
const ignoreDir = ['.DS_Store', 'xmind.html', 'xmind.png', 'todo.md']
// 文档根目录
const rootPath = path.resolve(__dirname, '../docs')
const { log } = console
/**
 * 判断文件是否是md文件
 * @param {string} filePath 文件路径
 */
const adjustMd = (filePath) => {
  return path.extname(filePath) === '.md'
}

let notAllowFilrOrDir = []
let sideBar = {
  sidebar: [],
}

// 所有的文章
let allDocs = {}

const loadDir = (entryPath, sideBarArr) => {
  const files = fs.readdirSync(entryPath)

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
      let items = []
      sideBarArr.push({
        type: 'category',
        label: path.parse(filePath).name,
        items,
      })
      loadDir(filePath, items)
    } else if (adjustMd(filePath)) {
      const { data } = matter.read(filePath)
      const id = path.join(entryPath, data.id).split(`${rootPath}/`)[1]
      // if (allDocs[item]) {
      //   log(chalk.red(
      //     `docs下存在相同的文件名${
      //       item.split('.md'x)[0]
      //     },请更改当前暂存区域的同名文件`
      //   ))
      //   process.exit(1)
      // } else {
      allDocs[`${item}.${id}`] = id
      // }
      // 关于该repo文档位置是第一个
      if (/关于该repo.md/gi.test(filePath)) {
        sideBarArr.unshift({
          type: 'doc',
          id,
        })
      } else {
        sideBarArr.push({
          type: 'doc',
          id,
        })
      }
    }
  })
}

loadDir(path.resolve(__dirname, '../docs'), sideBar.sidebar)

fs.writeFileSync(
  path.resolve(__dirname, 'alldoc.json'),
  JSON.stringify(allDocs)
)

fs.writeFileSync(
  path.resolve(__dirname, '../website/sidebars.js'),
  `module.exports=${JSON.stringify(sideBar)}`
)
;(async () => {
  try {
    await execa('npx', [
      'prettier',
      '--config',
      '.prettierrc.yml',
      '--write',
      'website/sidebars.js',
    ])
    await execa('git', ['add', '.'])
  } catch (error) {
    log(chalk.red(error))
    process.exit(1)
  }
})()
