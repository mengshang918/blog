/*
 * 扫描某个路径下的文件夹，并在同级下输出成可缩放和展开收起的xmind.html和xmind.png
 * @Author: jiangxiaowei
 * @Date: 2020-07-28 16:04:36
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-10-20 15:54:12
 */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const execa = require('execa')
const pptr = require('puppeteer')
const chalk = require('chalk')
const { log } = console
const allDocs = require('./alldoc.json')

/**
 * @param {str} entryPath 入口路径
 */
module.exports = async (entryPath) => {
  const outPutPath = path.join(__dirname, '../website/static/xmind.md')
  const outPutHtml = path.join(__dirname, '../website/static/xmind.html')
  let res = null
  try {
    res = await execa('tree', ['-N', `${entryPath}`])
  } catch (error) {
    log(chalk.red('请先使用homeBrew安装tree'))
    process.exit(1)
  }
  if (!res.stdout) {
    process.exit(1)
  }
  let data = res.stdout
    .replace(entryPath, `# ${entryPath}`)
    .replace(/──/g, '*')
    .replace(/(└|├|│)/g, '')
    .replace(/\* TODO.md/g, '')

  Object.keys(allDocs).map((item) => {
    const title = item.split('.md.')[0]
    const reg = new RegExp(`\\* ${title}.md`, 'g')
    data = data.replace(reg, `* [${title}](docs/${allDocs[item]})`)
  })

  const dataMap = data.split('\n')
  dataMap[0] = '# 前端试炼'

  fs.writeFileSync(outPutPath, dataMap.join('\n'), {
    encoding: 'utf8',
  })

  // 判断路径下目录是否发生变化
  const buffer = fs.readFileSync(outPutPath)
  const fsHash = crypto.createHash('md5')
  fsHash.update(buffer)
  const fsMd5 = fsHash.digest('hex')
  const cacheData = fs.readFileSync(
    path.resolve(__dirname, './.cache/xmind.cache'),
    'utf-8'
  )
  fs.writeFileSync(path.resolve(__dirname, './.cache/xmind.cache'), fsMd5)
  if (cacheData === fsMd5) {
    fs.unlinkSync(outPutPath)
    return
  }
  // 变化则重新生成xmind.html和xmind.png。
  await execa('npx', [
    'markmap',
    `${outPutPath}`,
    '--enable-prism',
    '--no-open',
  ])
  fs.unlinkSync(outPutPath)
  const browser = await pptr.launch()
  const page = await browser.newPage()
  await page.setViewport({ deviceScaleFactor: 2, width: 1920, height: 1080 })
  await page.goto(`file://${outPutHtml}`)
  let dom = await page.$('#mindmap')
  await dom.screenshot({
    path: path.join(__dirname, '../website/static/img/xmind.png'),
  })
  await page.close()
  await browser.close()
  await execa('git', ['add', '.'])
  await execa('git', ['commit', '-m', 'chore: updata思维导图'])
}
