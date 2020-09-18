#!/usr/bin/env node
/*
 * 给md文件添加front-matter
 * @Author: jiangxiaowei
 * @Date: 2020-09-14 14:46:53
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-09-18 22:03:32
 */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const matter = require('gray-matter')
const argv = require('minimist')(process.argv.slice(2))

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
  const { content, data } = matter.read(filePath, { excerpt: true })
  const isBlog = /website\/blog\//gi.test(filePath)
  if (isBlog) {
    data.slug = id
    data.title = name.slice(12)
  } else {
    data.id = id
    data.title = name
  }
  // 使用gray-matter添加fron-matter并覆写原文件
  const fileData = matter.stringify(content, data)
  fs.writeFileSync(filePath, fileData)
}

argv._.map((filePath) => {
  // docs/todo.md手动添加fron-matter。避免出现docusaurus.config.js配置对应不上问题
  if (/docs\/todo.md/g.test(filePath)) return
  addFrontMatter(filePath)
})
