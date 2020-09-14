/*
 * 根据docs目录自动生成docusaurus所使用的sidebars文件
 * @Author: jiangxiaowei
 * @Date: 2020-09-14 14:51:31
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-09-14 16:08:22
 */

const path = require('path')
const fs = require('fs')
const matter = require('gray-matter')
const ignoreDir = ['.DS_Store', 'xmind.html', 'xmind.png']
// 文档根目录
const rootPath = path.resolve(__dirname, '../docs')

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
      console.log(filePath, data)
      sideBarArr.push({
        type: 'doc',
        id: path.join(entryPath, data.id).split(`${rootPath}/`)[1],
      })
    }
  })
}

loadDir(path.resolve(__dirname, '../docs'), sideBar.sidebar)

fs.writeFileSync(
  path.resolve(__dirname, '../website/sidebars.js'),
  `module.exports=${JSON.stringify(sideBar)}`
)
