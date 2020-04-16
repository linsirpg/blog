---
title: 使用node自动生成sidebar配置文件
date: 2020-04-16
tags:
 - vuepress
categories: 
 - vuepress
---

## 需求
在使用vuepress的时候,每次创建一个新的文件,都要去手动修改config里面sidebar的文件,比较麻烦.

可以用node读取views的文件夹结构并生成一个新的sidebar 配置文件.

然后在配置里面使用这个文件

## 1.抽取配置文件

抽取配置文件,在当前目录下的sidebar下创建一个index.js用来存放sidebar的配置

```
const sidebar = require('./sidebar')
module.exports = {
    "themeConfig": {
        sidebar,
    },
}
```

## 创建nodeJs 文件,获取配置结构,生成配置文件

在docs目录下,创建 index.js文件,循环遍历获取 views下的目录结构,然后根据sidebar生成对应的数据结构,并创建配置文件

```
var fs = require('fs')
var path = require('path')

// readdir 获取目录结构函数
function readdir(dirname, name) {
  var arr = [

  ]
  var readDir = fs.readdirSync(dirname)

  readDir.forEach(fileName => {
    var result = fs.statSync(path.resolve(dirname, fileName))
    if (fileName !== 'image') {
      if (result.isDirectory()) {
        var obj = Object.create(null)
        obj.title = fileName
        obj.collapsable = true
        obj.children = readdir(path.resolve(dirname, fileName), name + '/' + fileName)
        arr.push(obj)
      } else {
        arr.push(name + '/' + fileName)
      }
    }
  })
  return arr
}

var result = readdir((path.resolve(__dirname, 'views')), 'views')

//result 最终符合sidebar配置的目录结构

console.log(JSON.stringify(result, null, 2)); //打印查看

var configUrl = path.resolve(__dirname, '.vuepress/sidebar/index.js')

//在vuepress/sidebar 下创建 index.js sidebar配置文件

fs.writeFileSync(configUrl, "module.exports=" + JSON.stringify(result))
```
## 运行配置文件

在index.js 目录 打开控制台  运行:

```
node index.js
```
会在vuepress/sidebar  目录下,生成新的配置文件

（注意由于没有判断文件夹是否存在,在进行操作,所以要先在vuepress下创建好 sidebar文件夹）
