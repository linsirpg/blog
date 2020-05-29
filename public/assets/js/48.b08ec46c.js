(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{350:function(a,s,e){"use strict";e.r(s);var t=e(3),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[a._v("#")]),a._v(" 题目描述")]),a._v(" "),e("p",[a._v("请你编写一个程序来计算两个日期之间隔了多少天。")]),a._v(" "),e("p",[a._v("日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。")]),a._v(" "),e("h2",{attrs:{id:"例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('输入：date1 = "2019-06-29", date2 = "2019-06-30"\n输出：1\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('输入：date1 = "2020-01-15", date2 = "2019-12-31"\n输出：15\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"解题方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解题方法"}},[a._v("#")]),a._v(" 解题方法")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/**\n * @param {string} date1\n * @param {string} date2\n * @return {number}\n */\nvar daysBetweenDates = function (date1, date2) {\n  var start = new Date(date1).getTime() / 1000\n  var end = new Date(date2).getTime() / 1000\n  var timeStamp = Math.abs((end - start)) / (60 * 60 * 24)\n  return timeStamp\n};\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h2",{attrs:{id:"解题思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[a._v("#")]),a._v(" 解题思路")]),a._v(" "),e("p",[a._v("1.获取两个时间的时间戳之差(秒)")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var start = new Date(date1).getTime() / 1000\nvar end = new Date(date2).getTime() / 1000\nMath.abs((end - start)) //时间戳差(秒)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("2.用时间戳差(秒)除以一天的时间戳(24小时,每个小时六十分钟,每分钟六十秒),获得天数")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var timeStamp = Math.abs((end - start)) / (60 * 60 * 24)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);