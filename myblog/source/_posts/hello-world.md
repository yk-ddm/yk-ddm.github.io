---
title: 《JavaScript 学习笔记 之 日常练习案例》
date: 2021-09-06 14:42:51
tags:
- HTML
- CSS
- JavaScript
categories:
- articles
---

# JavaScript 学习笔记
<hr />

## 日常练习案例
<hr />

### 字符串操作
```js
// 'abcEFG'  重新排序 ---> 规则是 把大写字母放前面，小写字母放后面

// realization
/**
	explain：

	operationStr 操作字符串
	应用了： String.split()  切割字符串返回数组、
	Array.join() 将数组中的元素以某种操作符连接起来、
	正则表达式的使用 
*/
function operationStr(str)
{
	return str.split(/[a-z]/g).join('') + str.split(/[A-Z]/g).join('')
}

// Test
var str = 'abcEFG',  // expect output: 'EFGabc'
	result = operationStr(str)

console.log(result)  // output: 'EFGabc'
```

- `查看测试结果`
![在这里插入图片描述](https://uploadfiles.nowcoder.com/files/20210816/838378582_1629111449561/f5833805ece3444d9df5cbc1587b78e7.png)

### Boolean 类型学习练习
```js
/**
	explain：

	test 自定义变量名称
        Boolean类型
        new Boolean()  实例化，默认 返回 false
	document 文档
        document.write()  向页面打印信息，会覆盖页面原有的内容
	document.write("<br />")   向页面输出一个换行
*/

var test

test = new Boolean()
document.write(test)
document.write("<br />")  // output: false

test = new Boolean(null)
document.write(test)
document.write("<br />")  // output: false

test = new Boolean('')   // '' 或 ""
document.write(test)
document.write("<br />")  // output: false

test = new Boolean(undefined)
document.write(test)
document.write("<br />")  // output: false

test = new Boolean(NaN)
document.write(test)
document.write("<br />")  // output: false

test = new Boolean(0)
document.write(test)
document.write("<br />")  // output: false

test = new Boolean(false)  
document.write(test)
document.write("<br />")  // output: false

test = new Boolean(true)  
document.write(test)
document.write("<br />")  // output: true
```
- 查看测试结果

![图片说明](https://uploadfiles.nowcoder.com/images/20210817/838378582_1629200064609/468DD5DDE04AEED9D181C17F0FEED120 "图片标题") 

