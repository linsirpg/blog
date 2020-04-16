---
title: HTTP概述
date: 2016-12-15
tags:
 - http
categories: 
 - http权威指南
---
## 1.1 HTTP--英特网的多媒体信使

HTTP可以将JPEG图片、HTML页面、文本文件、MPEG电影、WAV音频文件、Java小程序和其他资源迅速、便捷、可靠的搬移到人本桌面上的Web浏览器上。

## 1.2 Web客户端和服务器
HTPP客户端和HTTP服务器共同构成了万维网的基本组件。

最常见客户端就是Web浏览器。

    例子：
    浏览一个页面是(比如 http:/www.baidu.com/index.html),浏览器会向服务器www.baidu.com发送一条HTTP请求。
    服务器会去寻找所期望的对象(在这个例子中就是index.html),如果成功,
    就将对象、对象类型、对象长度以及其他一些信息放在HTTP响应中发送给客户端(浏览器)。
## 1.3 资源
    Web服务器是Web资源的宿主。Web资源是Web内容的源头。

    最简单的Web资源就是Web服务器文件系统中的静态文件。(JPEG图片、HTML页面、文本文件、MPEG电影、WAV音频文件等)
    
    也可以是根据需要生成内容的软件程序。
## 1.3.1 媒体类型