---
title: 第一章-面向对象的JavaScript
date: 2020-05-09
tags:
 - JavaScript
categories: 
 - 设计模式与开发实践
---
## 1.编程语言类型

编程语言按照数据类型,大体可以分为两类:

* 静态语言类型
* 动态语言类型
  
静态语言: 编译时已确定变量的类型

动态语言: 变量类型要等到程序运行的时候,待变量被赋值后,才会具有某种类型.

* 优点:

    * 静态语言: 编辑器可以帮我们提前避免运行程序期间有可能发生的错误.其次,在程序中明确规定了数据类型,编译器可以针对这些信息进行优化,题号程序执行速度.

    * 动态语言: 编写的代码数量更少,看起来简洁,程序员可以把更多的尽力放在业务逻辑上.

* 缺点:

    * 静态语言: 迫使程序员依照强契约来编写程序,类型的声明也会增加更多的代码,增加程序员的工作量.

    * 动态语言: 无法保证变量的类型,所以在运行程序是有可能发生跟类型相关的错误

### JavaScript  动态类型语言
  在JavaScript 中, 当我们对一个变量赋值时,不需要考虑变量的类型,所以,JavaScript 是一门典型的动态类型语言.
## 2.多态
  含义: 同一操作作用于不同的对象上面,可以产生不同的解释和不同的执行结果.既给不同的对象发送同一个消息时,这些对象会根据这个消息分别给出不同的反馈.

#### 一段'多态'的JavaScript 代码

```
var makeSound = function (animal) {
  if(animal instanceof Duck) {
    console.log('嘎嘎嘎');
  }else if (animal instanceof Chicken) {
    console.log('咯咯咯')
  }
};

var Duck = function () {};
var Chicken = function () {};

makeSound(new Duck)    //嘎嘎嘎
makeSound(new Chicken) //咯咯咯
```
但我们分别向鸭和鸡发出'叫唤'的消息时,他们都做出了不同的反应,提现了'多态性'.

但是这样的'多态性'存在问题,当我们增加一只动物时,我们要改动makeSound函数,既动物收到命令时,发出声音的方法.

当动物越多时,这个方法里面的内容越多,会变成一个巨大的函数,程序出错的可能性就越大.

多态背后的思想是将'做什么'和'谁去做以及怎么去做'分离开来,也就是将'不变的事物'与'可能改变的事物'分离开来.

在上面代码中 动物都会叫,这是不变的,但是不同类型的动物具体怎么叫是可变的.

所以我们要把不变的部分隔离出来,把可变的部分封装起来,赋予程序扩展的能力,看起来可生长,符合开发-封闭原则.

### 对象的多态

代码改写,隔离不变的部分,即所有的动物都会发出叫声:

```
var makeSound = function (animal) {
  animal.sound()
}
```
然后把可变的各自封装起来:

var Duck = function () {}
Duck.prototype.sound = function () {
  console.log('嘎嘎嘎');
};

var Chicken = function () {}
Chicken.prototype.sound = function () {
  console.log('咯咯咯');
};

makeSound( new Duck())
makeSound( new Chicken())

当我们想加入新的动物时:

var Dog = function (){}

Dog.prototype.sound = function(){
  console.log('汪汪汪');
};

makeSound( new Dog())

## 3.封装

  封装的目的是将信息隐藏。

  使用时不需要关心其内部是怎么实现的,只要他提供的功能正确使用即可.

  即便修改了其内部源代码,但只要对外接口或者调用方式及功能没有变化,用户就不需要关心其内部实现的改变.

## 4.继承

通过【某种方式】让一个对象可以访问到另一个对象中的属性和方法，我们把这种方式称之为继承



# 总结 - JavaScript 面向对象的三大特征

* 封装
* 继承
* 多态