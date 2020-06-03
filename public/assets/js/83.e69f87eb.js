(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{428:function(a,s,n){"use strict";n.r(s);var e=n(3),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[a._v("#")]),a._v(" 题目描述")]),a._v(" "),n("p",[a._v("我们把符合下列属性的数组 A 称作山脉：")]),a._v(" "),n("p",[a._v("A.length >= 3")]),a._v(" "),n("p",[a._v("存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]")]),a._v(" "),n("p",[a._v("给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。")]),a._v(" "),n("h2",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("输入：[0,1,0]\n输出：1\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("输入：[0,2,1,0]\n输出：1\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("h2",{attrs:{id:"解题方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题方法"}},[a._v("#")]),a._v(" 解题方法")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("/**\n * @param {number[]} A\n * @return {number}\n */\nvar peakIndexInMountainArray = function (A) {\n  var a = A.concat();\n  A = A.sort(function (a, b) { return a - b });\n  return a.indexOf(A[A.length - 1]);\n};\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("h2",{attrs:{id:"解题思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[a._v("#")]),a._v(" 解题思路")]),a._v(" "),n("p",[a._v("题目要求: 求最大值的索引值\n1.排序获取最大值\n2.根据最大值获取下标索引")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("A[A.length - 1] 最大值\na.indexOf(A[A.length - 1]) 获取下标索引\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);