#!/usr/bin/env node

/*
 * 创建todo页面，记录docs下所有todo.md内容。方便后续整理学习
 * 文件夹中没有todo.md && 没有子目录，则不添加到todo.md
 * @Author: jiangxiaowei
 * @Date: 2020-09-18 14:57:52
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-09-27 23:10:52
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const ignoreDir = ['.DS_Store', 'xmind.html', 'xmind.png']

const data = []
const loadDir = (entryPath) => {
  const files = fs.readdirSync(entryPath)
  // 判断是否需要加入todo页面
  const needPushToDo = files.some((item) => {
    const filePath = path.resolve(entryPath, item)
    const stat = fs.statSync(filePath)
    return stat.isDirectory() || item === 'TODO.md'
  })
  if (needPushToDo) {
    files.map((item) => {
      if (ignoreDir.includes(item)) {
        return
      }
      const filePath = path.resolve(entryPath, item)
      const stat = fs.statSync(filePath)
      const bararr = filePath
        .split('/docs/')[1]
        .split('/')
        .filter((item) => item)
      const barL = bararr.length + 1
      if (stat.isDirectory()) {
        data.push(`${'#'.repeat(barL)} ${bararr[bararr.length - 1]}`)
        loadDir(filePath)
      } else if (path.basename(filePath) === 'TODO.md') {
        const { content } = matter.read(filePath)
        data.push(`${content.replace(/\n/g, '\n> ')}\n`)
      }
    })
  } else {
    data.pop()
  }
}

loadDir(path.resolve(__dirname, '../docs/'))

const str = matter.stringify(data.join('\n'), { id: 'todo', title: 'todo' })
fs.writeFileSync(path.resolve(__dirname, '../docs/todo.md'), str)
