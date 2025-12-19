---
title: 'Markdown'
pubDate: 2025-12-17
description: ''
author: '测试'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["blogging", "markdown"]
---

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

我是段落1，结尾要跟两个及以上空格  
这样我段落2才会另起一行

这样直接空一行

我就会换行

前后两个** 表示**粗体**  
前后一个* 表示*斜体*  
前后三个*** ***既是粗体又是斜体***

> 右箭头\>表示块引用，但是在astro中没有特殊的样式效果，不好看。
>> 当然块引用也可以嵌套，右箭头>个数表示层级

1. 我是有序列表
1. 数字+点+空格+内容的形式
1. 虽然是有序列表，但是编码时序号不一样是有序的，只要是数字开头就行
    1. 我是嵌套
    1. 我也是嵌套
1. 我又是新的列表项

- 我是无序列表
- 星号/加号/减号+空格+内容
    * 同样也可以嵌套

1. 我是列表项

    我是列表下的内容，需要前后空行并且前面缩进四个空格或者一个制表符

2. 我是列表项


        <div>
            <p>我要缩进一个制表符或者四个空格才有效果，如果是在列表中，需要缩进两个制表符或者八个空格</p>
        </div>

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

![图片显示失败的占位文本] (图片地址)  
![Tux, the Linux mascot](/assets/images/tux.png "图像提示文本")

将单词或短语表示为代码 `abc`.  

一行中三个及以上的星号，可以表示水平线
******

我要去 [百度](https://www.baidu.com/)

网站或者电子邮箱  
<https://markdown.p2hp.com>  
<fake@example.com>


为了 **[强调](https://www.baidu.com/)** 链接，请在方括号和括号之前和之后添加星号。

[![链接图像](/assets/images/shiprock.jpg "图像提示文本")](https://www.baidu.com/)


| 表头 | 表头 | 表头 |
| :---- | :----: | ----: |
| 左对齐 | 居中 | 右对齐 |
| 内容 | 内容内容内容 | astro不显示边框哎 |
