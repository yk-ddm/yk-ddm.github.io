---
title: 《Node.js 学习笔记之服务器静态资源托管服务》
tags:
  - Node.js
  - JavaScript
  - express
categories: Node.js
keywords: 'Node.js, JavaScript, Express'
abbrlink: 10535
date: 2021-09-14 16:06:57
cover: https://img-blog.csdnimg.cn/a7288ccf564d472fbdfda46969967492.png
---

# 《Node.js 学习笔记之服务器静态资源托管服务》

## 引入 http 服务

> const http = require('http')

## 开启服务器并指定端口

```Node.js
const server = http.createServer((req,res) => {
	// code 
}).listen(3000,() => {
	console.log('服务开启成功, 请访问 http://localhost:3000/')
})
```

## express 中间件的使用

> 它是处理过程中的一个环节; 是一个函数

> 可以执行任何代码

> 可以修改请求和响应对象

> 可以终结请求-响应循环

> 可以调用堆栈中的下一个中间件

### 引入 express

> const express = require('express')

### 返回对象

> const app = express()

### 托管静态资源

> app.use(express.static('test'))

> app.listen(3000, () => {
    console.log('Node 服务开启成功！')
})