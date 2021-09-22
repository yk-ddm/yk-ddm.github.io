---
title: 《博客框架学习笔记之hexo》
abbrlink: 52458
date: 2021-08-25 02:10:58
tags:
 - hexo
 - node.js
 - Butterfly
 - blog
 - iconfont
categories: 前端
keywords: hexo, node.js, Butterfly, blog, iconfont
description: 《博客框架学习笔记之hexo》
cover: https://gitee.com/yk-ddm/picx_drawing_bed/raw/master/images/20210922094757.png
---

# 博客框架
- 常见的**博客框架** ： `hexo` 、`WordPress`、`VuePress`、`Hugo`、`Solo`、`Halo` 、`Typecho`、...

<hr />

## 博客主题
- 常见的 **博客主题** ：`jekyll` 、`Fluid` 、`Butterfly`、`Matery`、`Akina`、`Muse`、`Mist`、`Pisces`、`Gemini`、 `Mirages`、...

> 主题：`NexT` 、`Yilia`、`Melody`、`mellow`、、、、、、、

> [hexo 主题查找](https://hexo.io/themes/) 

<hr />

### hexo
- `简介`

> `Hexo` 是一个基于Node.js的快速、简洁且高效的静态博客框架。Hexo 支持 `Markdown` 解析文章，在几秒内，即可利用靓丽的主题生成静态网页

> `hexo 默认主题：` ---> `landscape`

![在这里插入图片描述](https://img-blog.csdnimg.cn/aeb500f40d4c4daebfbdf14dfd6c3348.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_Q1NETiBAeWstZGRt,size_44,color_FFFFFF,t_70,g_se,x_16)
- `hexo 版本`
![在这里插入图片描述](https://img-blog.csdnimg.cn/a9c285b20c494f4fa4c5ff9c8fa4b1c8.png)


> [Hexo官网](https://hexo.io/)
> [Hexo中文网](https://hexo.io/zh-cn/)
<hr />

#### 安装hexo
- `安装 hexo 的基础依赖`  ---> ` git 和 nodejs 的安装`
![在这里插入图片描述](https://img-blog.csdnimg.cn/487cf9937d0b49f9a3a87f3dfb869c78.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)


- step1: `创建文件夹 personal_blog_yk-ddm`, 进入此文件夹
![在这里插入图片描述](https://img-blog.csdnimg.cn/a2a795321a654490801d5bde9533fed7.png)
 - step2: `执行 npm 包管理命令 ` --->  `安装 hexo-cli ( hexo 命令行界面)`：`cnpm install hexo-cli`
![在这里插入图片描述](https://img-blog.csdnimg.cn/0358132b3445401394f6a81d56b5d8de.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/67d43fecf84546c1b3d122c8c5bc8b26.png)
- step3: 查看 `hexo` 版本 ： `hexo -v`
![在这里插入图片描述](https://img-blog.csdnimg.cn/9fd94c4e273b4f289486035851cd1d40.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
- step4: `初始化 hexo ` : `hexo init myblog`
![在这里插入图片描述](https://img-blog.csdnimg.cn/beea870a36f74443b5d9fcb323b2c41d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c2826f3faff4e35b79680b1aeac2fc1.png)
- step5: `进入 myblog 文件夹中，开启服务`  --->  `hexo server`
![在这里插入图片描述](https://img-blog.csdnimg.cn/6c121254a49742aea1f269a19706e91b.png)
> `关闭服务` ---> Ctrl + C

![在这里插入图片描述](https://img-blog.csdnimg.cn/a96b1013fe504772a90cead62669ce40.png)
<hr />

#### 将 hexo 部署到 GitHub
- `修改配置文件 _config.yml `
![在这里插入图片描述](https://img-blog.csdnimg.cn/9f8df84c4c2841119a55235521f3eaa3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
- `安装deploy-git` : `npm install hexo-deployer-git --save`
![在这里插入图片描述](https://img-blog.csdnimg.cn/4c628eeb738c42b8ae60aaac0b47c590.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
> 执行 `hexo clean`    ---->  清空
> 执行 `hexo generate`  ----->   生成静态文章
> 执行 `hexo deploy`  ------>  部署发布至 github

![在这里插入图片描述](https://img-blog.csdnimg.cn/e2a5bcab599f4624ae5243ef11a61c13.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
- `查看效果`
![在这里插入图片描述](https://img-blog.csdnimg.cn/1dacf0a6d12c494c82415a7cef464603.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c9a7f888bebc473d9176615413c4cc69.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)

<hr />

#### 为 hexo 个人博客添加站内搜索
> 先安装插件 cnpm install hexo-generator-search --save

![在这里插入图片描述](https://img-blog.csdnimg.cn/7ed778c50cff48e0a80e14dcc0b681c0.png)
> 执行 cnpm install hexo-generator-searchdb --save

![在这里插入图片描述](https://img-blog.csdnimg.cn/eaad2257cfc54dfebde4bbcd404e543f.png)
> 修改项目的配置文件 _config.yml

```config.yml
# 添加如下内容：
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e92ce7504a2c4e21a89f1552799f0531.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
> 编辑主题文件夹的 _config.yml 配置文件，设置 Local search 的 enable 为 ture

![在这里插入图片描述](https://img-blog.csdnimg.cn/45edb65a93454edabcb5607b1741d58b.png)


<hr />

#### 为  个人博客添加 GitHub Corners 
>  [GitHub Corners 地址](https://tholman.com/github-corners/)

![在这里插入图片描述](https://img-blog.csdnimg.cn/74ce3b3c391d439286547916d8e2b86c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
> 编辑代码如下

![在这里插入图片描述](https://img-blog.csdnimg.cn/7d35e01c63b44ed192f9e080a25e6534.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0fe5a0861a804788a382f0f90fd6041f.png)
> 效果展示

![在这里插入图片描述](https://img-blog.csdnimg.cn/89931688a1bf4425b55b60dade7be793.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_13,color_FFFFFF,t_70,g_se,x_16)

<hr />

#### Butterfly 添加全局吸底Aplayer ( 音乐播放器 )
> [Butterfly添加全局吸底Aplayer教程](https://butterfly.js.org/posts/507c070f/)

> [前往 aplayer 官网](https://aplayer.js.org/#/zh-Hans/)

<hr />

#### 插件安装
> `cnpm install hexo-abbrlink --save` : 博客链接永久化

![在这里插入图片描述](https://img-blog.csdnimg.cn/a0eb1e6796dd4893ab64fbd032a1c250.png)


> npm install hexo-generator-search --save  ---->  搜索插件安装

![在这里插入图片描述](https://img-blog.csdnimg.cn/c2ef2424c8884fb18a1daf9c477150c1.png)


> npm i hexo-generator-feed -----> 订阅插件 RSS 安装

![在这里插入图片描述](https://img-blog.csdnimg.cn/278f30df6f9e4fa99cc65438afc812ef.png)

<hr />

#### 使用 iconfont 图标
> step1: 从 [阿里图标 官网](https://www.iconfont.cn/)  下载 `iconfont.css 文件`

> step2: 将 `iconfont.css` 文件复制到 hexo 主题theme/source/css/ 中

![在这里插入图片描述](https://img-blog.csdnimg.cn/0344747ac9414f8b8bf90ad77a5f25f0.png)
> 在主题的配置文件中进行如下配置，引入刚刚存入的 `css` 文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/4a083167e62246099add6c9a3b8b2211.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
> 设置完毕，即可使用 `iconfont icon-csdn1: https://blog.csdn.net/yk_ddm || CSDN`

![在这里插入图片描述](https://img-blog.csdnimg.cn/40b08c4897954c32bead6e63a866abe4.png)
> 测试查看效果

![在这里插入图片描述](https://img-blog.csdnimg.cn/0c1d02d7c69a4e4d94b30f692b703149.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)

<hr />

#### 设置 avatar 头像
- `在 主题的 _config.yml 中配置`
![在这里插入图片描述](https://img-blog.csdnimg.cn/9b004254c88d4841aa1b99b2edb1f2ef.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)

<hr />

#### 草稿 draft 的使用
- `hexo new draft draft-test01`
![在这里插入图片描述](https://img-blog.csdnimg.cn/001b6c88355b49859c5f58c1e2dc9fb4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
- `将 草稿文章发布到 post 中` ：`hexo publish draft newspapername` , 系统会自动删除 _drafts 中对应的草稿文章
![在这里插入图片描述](https://img-blog.csdnimg.cn/38ec04c0a4ff485bb6827738a508bdfc.png)


<hr />

#### 常见操作
> 语言修改; 配置文件 _config.yml;  默认语言是 en
> 主题支持三种语言: default(en)、zh-CN (简体中文)、zh-TW (繁体中文)

> Front-matter 即 文章开头部分（-----）

![在这里插入图片描述](https://img-blog.csdnimg.cn/c92cf9dfd8484dcc950109293a93d97b.png)


> `Butterfly` 主题的使用

![在这里插入图片描述](https://img-blog.csdnimg.cn/d5cf86daffc240d38d096eb253973dc0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)


> 书写文章：`hexo new newspapername`， 注意事项 --->  文章名称不要包含空格，否则会出现文件名称不对应的情况（例如：我使用 hexo new post 《博客框架 学习笔记 之 hexo》最后得到的Markdown文件名称却为 hexo》）

> hexo new [layout] <newspapername>  ---->  layout 布局方式，默认 post 布局

> layout 布局方式：`post` 、`page` 、`draft` 

![在这里插入图片描述](https://img-blog.csdnimg.cn/5badd2e0c54941ee8a12028e52e0cc45.png)
> `_config.yml` : 作为 `hexo框架` 的配置文件

> 配置文章的 永久链接 格式，方法如下：第一步，在 `_config.yml 配置文件中修改 permalink 的值`；第二步，在自定义文章开头书写 category 文章类别

![在这里插入图片描述](https://img-blog.csdnimg.cn/9b8b6813d2af42eb984f45ce41465703.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/70f46065e864418d9ea2603346c23733.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)


- `查看效果`
![在这里插入图片描述](https://img-blog.csdnimg.cn/24fdd362b5c34469940635be1dedc58e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
- `layout 中 page 的使用`
![在这里插入图片描述](https://img-blog.csdnimg.cn/bb215459b9274747926491555dde9132.png)


<hr />

#### 遇到的问题
`{ err: TypeError: line.matchAll is not a function`
![在这里插入图片描述](https://img-blog.csdnimg.cn/d8a433976d8248cdacce7a3d302588fe.png)
- `分析原因：是 node 版本问题, node 12.0.0 以上就没有此问题 `
![在这里插入图片描述](https://img-blog.csdnimg.cn/bd4c23fc96fe48b5baafaf3a1ecc6a81.png)
- `解决：` 尝试 将 `_config.yml文件` 修改一下
![在这里插入图片描述](https://img-blog.csdnimg.cn/ec4f953175f841338cee80c875269d12.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_18,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/d6ef2131cc13424b89cd6af38eb3cc49.png)
- `浏览器运行查看`
![在这里插入图片描述](https://img-blog.csdnimg.cn/2a315e02b1ec49c5844fbf2aea032691.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
- `problem Two`: 
![在这里插入图片描述](https://img-blog.csdnimg.cn/a590b6f427b64fe2ae8fdc9e349e95cd.png)
- `分析原因：` 是没有正确安装 `hexo-deployer-git`
![在这里插入图片描述](https://img-blog.csdnimg.cn/b1a45516b26043da955e16ce778c0f41.png)
- `problem Three`
![在这里插入图片描述](https://img-blog.csdnimg.cn/36b720809ba34f3d9be547b1a160e64f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
- `分析原因：` 权限问题，我之后采用 `ssh` 方式之后，解决问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/6c4d40e6f2c44ac9ae8d777f397ef3ff.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2add0decd06745cd90ca88b7887711e8.png)
- `problem fourth` : `TypeError: Cannot read property 'enable' of undefined`
![在这里插入图片描述](https://img-blog.csdnimg.cn/61d60ea73d9a4ab6b231acbac722fc8e.png)
- `分析原因：` ...

- `problem`
![在这里插入图片描述](https://img-blog.csdnimg.cn/2f1de9628ca3423b90cf20ae82dfea90.png)
- `分析原因：` 需要 `下载包 hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive`

> 执行 cnpm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive

> `theme: butterfly`

![在这里插入图片描述](https://img-blog.csdnimg.cn/09a9714a3ecb46bf8ce65e12a2d72f77.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/737976fbe6d84074ba627b06eae84f26.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeWstZGRt,size_20,color_FFFFFF,t_70,g_se,x_16)
