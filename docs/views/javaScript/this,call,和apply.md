---
title: this,call,和apply
date: 2020-05-018
tags:
 - 面向对象
categories: 
 - javaScript
---
## 1.this
<!-- JavaScript 的 this 总是指向一个对象，而具体指向哪个对象是在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。(谁调用就指向谁) -->
### 默认绑定

全局作用域或者普通函数中 this 指向全局对象 window。

console.log(this)