---
title: 抓包工具的使用
excerpt: 抓包工具 Proxyman 和 Charles 的配置及使用。
index_img: https://little_lu.gitee.io/images/blog/tools/tools1/tool.png
banner_img: https://little_lu.gitee.io/images/blog/tools/tools1/tool.png
tags: [前端, 工具]
categories: 前端工具
date: 2021-11-01 10:00:00
---

## Proxyman

### 安装
[官方下载地址](https://proxyman.io/)

### 配置
#### PC端
安装证书

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool1.png)\
一键安装即可

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool2.png)\
如果证书不被信任，双击该证书，选择“始终信任”即可

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool3.png)\
然后就可以正常的进行PC端的抓包了
#### 移动端
以IOS为例，首先需和PC端连接同一个wifi，配置代理，然后进行安装证书

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool4.png)

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool5.png)\
如果是 IOS 10 以上的，还需要信任证书 通用 -> 关于本机 -> 证书信任设置

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool6.png)

## Charles
### 安装
[官方下载地址](https://www.charlesproxy.com/download/)

### 配置
#### PC端
安装证书

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool7.png)\
如果证书不被信任，操作与Proxyman一致\
安装证书后即可进行PC端抓包了

### 移动端
也是连接同一个wifi，配置代理，然后安装证书

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool8.png)

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool9.png)\
IOS 10 以上的，还需要信任证书 通用 -> 关于本机 -> 证书信任设置
这时就可以进行移动端的抓包了，但是https抓包内容会乱码，需要在Charles上设置：

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool10.png)

![image.png](https://little_lu.gitee.io/images/blog/tools/tools1/tool11.png)
