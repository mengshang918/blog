/*
 * 扫描某个路径下的文件夹，并在同级下输出成可缩放和展开收起的xmind.html和xmind.png
 * @Author: jiangxiaowei
 * @Date: 2020-07-28 16:04:36
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-07-28 17:11:52
 */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const execa = require('execa')
const pptr = require('puppeteer')
const chalk = require('chalk')
const { log } = console

/**
 * @param {str} entryPath 入口路径
 */
module.exports = async (entryPath) => {
  const outPutPath = path.join(entryPath, 'xmind.md')
  const outPutHtml = path.join(entryPath, 'xmind.html')
  let res = null
  try {
    res = await execa('tree', ['-d', '-N', `${entryPath}`])
  } catch (error) {
    log(chalk.red('请先使用homeBrew安装tree'))
  }
  if (!res.stdout) {
    process.exit(1)
  }
  const data = res.stdout
    .replace(entryPath, `# ${entryPath}`)
    .replace(/──/g, '*')
    .replace(/(└|├|│)/g, '')
  fs.writeFileSync(outPutPath, data, {
    encoding: 'utf8',
  })
  const buffer = fs.readFileSync(outPutPath)
  const fsHash = crypto.createHash('md5')
  fsHash.update(buffer)
  const fsMd5 = fsHash.digest('hex')
  fs.writeFileSync(path.resolve(__dirname, './.cache/xmind.cache', fsMd5))
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
    path: path.join(entryPath, 'xmind.png'),
  })
  await page.close()
  await browser.close()
}
