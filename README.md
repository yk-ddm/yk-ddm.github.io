---
title: Butterfly 安装文档(一) 快速开始
date: 2020-05-28 22:31:46
tags:
  - 教程
  - Hexo
  - 主题
  - butterfly
categories: Docs文档
keywords: 'hexo,butterfly,主题,doc,教程,文档'
description: Butterfly安装文档-快速开始
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png
abbrlink: 21cfbf15
sticky: 100
comments: false
---

> 个人博客 访问地址如下：



![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/b62147032c2dba88c0b377ffd0bbf6a3.png#pic_center)



{% note blue 'fas fa-bullhorn' %}

 📖 本教程更新于2021 年07 月30 日，教程的内容针对最新**稳定版**而更新（如果你是旧版，教程会有些出入，请留意）

 🦋 Butterfly 已经更新到[3.8.3](https://github.com/jerryc127/hexo-theme-butterfly/releases/tag/3.8.3)

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚 文档目录

{% post_link Butterfly-安装文档-一-快速开始' 🚀 快速开始' %} - {% post_link Butterfly-安装文档-二-主题页面' 📑 主题页面' %} - {% post_link Butterfly-安装文档-三-主题配置-1 ' 🛠 主题配置-1' %} - {% post_link Butterfly-安装文档-四-主题配置-2 ' ⚔️ 主题配置-2' %} - {% post_link Butterfly-安装文档-五-主题问答' ❓ 主题问答' %} - {% post_link Butterfly-安装文档-六-进阶教程' ⚡️ 进阶教程' %} - {% post_link Butterfly-安装文档-七-更新日志' ✨ 更新日志' %} - {% post_link Butterfly-打赏' 🤞 打赏' %}

{% endnote %}

{% note orange 'fas fa-magic' %}

你可以通过右下角的**简** 按钮切换为简体显示 

{% endnote %}

***

`hexo-theme-butterfly`是基于[hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody) 的基础上进行开发的。

## 安装

{% tabs butterfly-install %}

<!-- tab Git安装(Github) @fab fa-github-square -->

**稳定版【建议】**

在你的Hexo 根目录里

```powershell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

**测试版**

> 测试版可能存在bug，追求稳定的请安装稳定版

如果想要安装比较新的dev 分支，可以

```powershell
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

升级方法：在主题目录下，运行`git pull`

{% endnote %}

<!-- endtab -->



<!-- tab Git安装(Gitee) @fab fa-git-square -->

**稳定版【建议】**

在你的Hexo 根目录里

```powershell
git clone -b master https://gitee.com/iamjerryw/hexo-theme-butterfly.git themes/butterfly
```

**测试版**

> 测试版可能存在Bugs，追求稳定的请安装稳定版

如果想要安装比较新的dev分支，可以

```powershell
git clone -b dev https://gitee.com/iamjerryw/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

升级方法：在主题目录下，运行`git pull`

{% endnote %}

<!-- endtab -->



<!-- tab npm安装@fab fa-npm -->

> 此方法只支持Hexo 5.0.0 以上版本
>
> ***通过npm 安装并不会在themes 里生成主题文件夹，而是在node_modules 里生成***

在你的Hexo 根目录里

```powershell
npm i hexo-theme-butterfly
```

{% note info %}

升级方法：在Hexo 根目录下，运行`npm update hexo-theme-butterfly`

{% endnote %}

<!-- endtab -->

{% endtabs %}

## 应用主题

修改Hexo 根目录下的`_config.yml`，把主题改为`butterfly`

```yaml
theme: butterfly
```

## 安装插件

如果你没有pug 以及stylus 的渲染器，请下载安装：

```powershell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 升级建议

{% note blue 'fas fa-train' %}

升级完成后，请到Github 的[Releases](https://github.com/jerryc127/hexo-theme-butterfly/releases) 界面或者[文档七](https://butterfly.js.org/posts/198a4240/) 查看新版的更新内容。

里面有标注`_config` 文件的变更内容（如有），请根据实际情况更新你的配置内容。

{% endnote %}

为了减少升级主题后带来的不便，请使用以下方法（**建议，可以不做**）。

{% tabs update-suggestion %}

<!-- tab _config.butterfly.yml -->

> 此方法只支持Hexo 5.0.0 以上版本，建议使用。
>
> 如果已经在`source/_data/` 创建了`butterfly.yml`，请记得**删除**掉。

在hexo 的根目录创建一个文件`_config.butterfly.yml`，并把主题目录的`_config.yml` **内容**复制到`_config.butterfly.yml` 去。

> **注意：** 不要把主题目录的`_config.yml` 删掉

以后只需要在`_config.butterfly.yml`进行配置就行。

Hexo会自动**合并**主题中的`_config.yml`和`_config.butterfly.yml`里的配置，如果存在同名配置，会使用`_config.butterfly.yml`的配置，其优先度较高。

![image-20200805191531090](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-install-suggestion-1.png)

<!-- endtab -->

<!-- tab butterfly.yml【已弃用】 -->

{% note pink 'fas fa-bahai' flat %}

从3.3.0 开始，这种方法不再支持

{% endnote %}

~~为了减少升级主题后带来的不便, `Butterfly` 使用了[data files](https://hexo.io/docs/data-files.html) 特性。~~

~~推荐把**主题**默认的配置文件`_config.yml` 复制到Hexo 根目录下的`source/_data/` 目录下，然后将文件名改为`butterfly.yml`（如果`source/_data/` 的目录不存在就创建一个）。~~

{% note warning %}

~~注意，如果你创建了`butterfly.yml`, 它将会替换主题默认配置文件`_config.yml`里的配置项(~~不是合并而是替换~~，3.1.0开始将会是合并)~~

~~采用`butterfly.yml`的目的是，因为升级主题的时候，有可能会覆盖到配置文件，以至于每次更新的时候都需要重新配置文件。如果使用`butterfly.yml`，就算主题目录下的`_config.yml`被覆盖，主题只会去`butterfly.yml`读取配置。~~

~~由于主题在添加功能或者修复Bugs的情况下，可能会涉及到**配置文件**的修改。这时候，如果升级主题，需要把新增加的配置添加到`butterfly.yml`去，不然很大机会会出现报错。（ 3.1.0 之后，应该不会出现这种情况）~~

{% endnote %}

<!-- endtab -->

{% endtabs %}



{% btn '/posts/dc584b87/',📑 Butterfly 安装文档(二) 主题页面,far fa-hand-point-right,block right larger %}