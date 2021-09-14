---
title: 《CSS（层叠样式表） 学习笔记之 cursor》
tags:
  - Web 开发技术
  - CSS
  - cursor
categories: CSS
keywords: '学习笔记, CSS, cursor'
description: 《CSS（层叠样式表） 学习笔记之 cursor》
cover: https://gitee.com/yk-ddm/picx_drawing_bed/raw/master/images/20210913103048.png
abbrlink: 2312
date: 2021-09-13 10:19:22
---

# 《CSS（层叠样式表） 学习笔记之 cursor》

## cursor 简介

> cursor 是 CSS 属性设置光标的类型（如果有），在鼠标指针悬停在元素上时显示相应样式

```css
cursor: help;

cursor: wait;

cursor: crosshair;

cursor: not-allowed;

cursor: zoom-in;

cursor: grab;
```

> cursor: help; 指示帮助 效果如下：

<img alt="cursor: help;" width=400 height=300 src="https://img-blog.csdnimg.cn/8157d993627349cf8f6dbf3cfec66a76.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_1,color_FFFFFF,t_70,g_se,x_16#pic_center" />

> cursor: wait;  效果如下：

<img alt="cursor: wait;" width=400 height=300 src="https://img.yasuotu.com/uploads/2021/09/13/613ef606484dc_613ef60693c58.jpg?time=1631516171" />

> cursor: crosshair;  效果如下：

<img alt="cursor: crosshair;" width=400 height=300 src="https://img.yasuotu.com/uploads/2021/09/13/613ef8dcd469c_613ef8ddad38e.jpg?time=1631516898" />

> cursor: not-allowed;  效果如下：

<img alt="cursor: not-allowed;" width=400 height=300 src="https://img-blog.csdnimg.cn/4c76617b9a124d148ece43bdeba3d86f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16" />

> cursor: zoom-in;  效果如下：

<img alt="cursor: zoom-in;" width=400 height=300 src="https://img-blog.csdnimg.cn/3a7ed3679aa444d4802bae92d12b74d0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16" />

> cursor: grab;  效果如下：

<img alt="cursor: grab;" width=400 height=300 src="https://img-blog.csdnimg.cn/7fe0c4ade1da43fdb37d1ad307780c6f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16" />


## 语法

> cursor属性为零个或多个<url>值，它们之间用逗号分隔，最后必填一个关键字值。每个<url>指向一个图像文件。浏览器将尝试加载指定的第一个图像，如果无法加载则返回下一个图像，如果无法加载图像或未指定图像，则使用关键字值代表的指针类型

### 关键字值

> cursor: pointer;

<img alt="cursor: grab;" width=400 height=300 src="https://img-blog.csdnimg.cn/85e30c4c784e4749b4a8e77afd232c1c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16" />

> cursor: auto;  浏览器根据当前内容决定指针样式

> cursor: progress; 程序后台繁忙，用户仍可交互 (与wait相反).

### 使用 URL，并提供一个关键字值作为备用

> cursor: url(hand.cur), pointer;

> 最后必须提供一个非 URL 后备值

### URL 和 xy 的坐标偏移值，最后提供一个关键字值作为备用

> 每个<url>后面都可选跟一对空格分隔的数字<x><y>表示偏移。它们用来设置指针的热点(即自定义图标的实际点击位置)，位置相对于图标的左上角

> 可选 x，y坐标, 两个小于 32 的无单位非负数

> cursor:  url(cursor1.png) 4 12, auto;

> cursor:  url(cursor2.png) 2 2, pointer;

### 全局属性

> cursor: inherit;

> cursor: initial;

> cursor: unset;