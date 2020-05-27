---
title: reduce
date: 2020-05-27
tags:
 - js
categories: 
 - javaScript
---

## reduce用法
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

total:必需。初始值, 或者计算结束后的返回值。

currentValue:必需。当前元素

currentIndex:可选。当前元素的索引

arr:可选。当前元素所属的数组对象。

initialValue:可选。传递给函数的初始值

* 没有设置初始值，则取数值第一个为初始值，第二个为当前元素

currentIndex 当前元素的缩影 时刻指向currentValue  故没有设置初始值  currentIndex从1开始

* 设置初始值， 则取数组的第一个值为当前元素     currentIndex 当前元素的缩影 时刻指向currentValue  故没有设置初始值  currentIndex从0开始


### 数组相加

```
var numbers = [2, 4, 6];

console.log(numbers.reduce((total,num)=>{return total + num}, 0)) //12

```


### 数组相乘

```
var numbers = [2, 4, 6];

console.log(numbers.reduce((total,num)=>{return total * num}, 1)) //12

```

### 计算数组出现的次数

```
var names = ['apple', 'yellow', 'name', 'password', 'apple', 'banana', 'name', "apple"];

var obj = names.reduce((obj, attr) => {

  if (attr in obj) {
      obj[attr] ++;
  } else {
      obj[attr] = 1;
  }
  return obj;
  
}, {})

console.log(obj) //{apple: 3, yellow: 1, name: 2, password: 1, banana: 1}
```