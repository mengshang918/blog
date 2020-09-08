const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const fm = require('front-matter')
const matter = require('gray-matter')

/**
 * 获取文件路径的hash
 * @param {*} path 文件路径
 * @param {*} encoding 字符串编码方式
 * @param {*} type 加密方式
 */
const getFileHash = (path, encoding = 'utf8', type = 'md5') => {
  return crypto.createHash(type).update(path, encoding).digest('hex')
}

/**
 * 给文件添加front matter的id（文件路径hash）和title字段
 * @param {string} filePath 文件地址
 */
const addFrontMatter = (filePath) => {
  const id = getFileHash(filePath)
  const { name } = path.parse(filePath)
  const data = fs.readFileSync(filePath, 'utf-8')
  fs.appendFileSync(filePath, `---\nid: ${id}\ntitle: ${name}\n---\n`)

  console.log(matter(data))
}

/**
 * 判断文件是否是md文件
 * @param {string} filePath 文件路径
 */
const adjustMd = (filePath) => {
  return path.extname(filePath) === '.md'
}
// const filePath = '/Users/jiangxiaowei/study/blog/docs/index.md'
const filePath = '/Users/jiangxiaowei/study/blog/docs/mac工具/工具.md'
// module.exports = (filePath) => {
if (adjustMd(filePath)) {
  addFrontMatter(filePath)
}
// }

const data = fs.readFileSync(filePath, 'utf-8')
const frontMatter = fm(data)
console.log(frontMatter)

// ---
// id: 1c4523c1bbd658fd04ac67308fd390ed
// title: index.md
// ---

// {
//   attributes: { id: '1c4523c1bbd658fd04ac67308fd390ed', title: 'index.md' },
//   body: '',
//   bodyBegin: 5,
//   frontmatter: 'id: 1c4523c1bbd658fd04ac67308fd390ed\ntitle: index.md'
// }
