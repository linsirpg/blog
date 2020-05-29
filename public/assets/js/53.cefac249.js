(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{375:function(s,a,n){"use strict";n.r(a);var r=n(3),t=Object(r.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),n("p",[s._v("在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。")]),s._v(" "),n("p",[s._v("给你一个整数数组 arr，请你从中找出并返回一个幸运数。")]),s._v(" "),n("p",[s._v("如果数组中存在多个幸运数，只需返回 最大 的那个。\n如果数组中不含幸运数，则返回 -1 。")]),s._v(" "),n("h2",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：arr = [2,2,3,4]\n输出：2\n解释：数组中唯一的幸运数是 2 ，因为数值 2 的出现频次也是 2 。\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：arr = [1,2,2,3,3,3]\n输出：3\n解释：1、2 以及 3 都是幸运数，只需要返回其中最大的 3 。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"解题方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题方法"}},[s._v("#")]),s._v(" 解题方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n * @param {number[]} arr\n * @return {number}\n */\nvar findLucky = function (arr) {\n  var obj = {};\n  for (var i = 0; i < arr.length; i++) {\n    if (obj[arr[i]]) {\n      obj[arr[i]]++;\n    } else {\n      obj[arr[i]] = 1;\n    }\n  }\n  var arr = [];\n  for (var attr in obj) {\n    if (obj[attr] == attr) {\n      arr.push(attr);\n    }\n  }\n  arr.sort(function (a, b) { return b - a });\n  return arr[0] ? arr[0] : -1;\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h2",{attrs:{id:"解题思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[s._v("#")]),s._v(" 解题思路")]),s._v(" "),n("p",[s._v("1.统计数字出现的次数\n2.取出次数跟数值相等的值\n3.排序返回最大值")])])}),[],!1,null,null,null);a.default=t.exports}}]);