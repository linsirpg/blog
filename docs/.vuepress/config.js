const sidebar = require('./sidebar')
module.exports = {
    "title": "日常一记",
    "description": "记录日常知识点",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [{
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [{
                        "text": "NPM",
                        "link": "https://www.npmjs.com/~reco_luan",
                        "icon": "reco-npm"
                    },
                    {
                        "text": "GitHub",
                        "link": "https://github.com/recoluan",
                        "icon": "reco-github"
                    },
                    {
                        "text": "简书",
                        "link": "https://www.jianshu.com/u/cd674a19515e",
                        "icon": "reco-jianshu"
                    },
                    {
                        "text": "CSDN",
                        "link": "https://blog.csdn.net/recoluan",
                        "icon": "reco-csdn"
                    },
                    {
                        "text": "博客圆",
                        "link": "https://www.cnblogs.com/luanhewei/",
                        "icon": "reco-bokeyuan"
                    },
                    {
                        "text": "WeChat",
                        "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
                        "icon": "reco-wechat"
                    }
                ]
            }
        ],
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },
        "friendLink": [{
                "title": "午后南杂",
                "desc": "Enjoy when you can, and endure when you must.",
                "email": "1156743527@qq.com",
                "link": "https://www.recoluan.com"
            },
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        sidebar: [{
            title: '力扣',
            collapsable: true,
            children: [{
                    title: '简单',
                    children: [
                        'views/leetcode/简单/237.删除链表中的节点',
                        'views/leetcode/简单/1108.IP地址无效化',
                        'views/leetcode/简单/1221.分割平衡字符串',
                        'views/leetcode/简单/1290.二进制链表转整数',
                        'views/leetcode/简单/1295.统计位数为偶数的数字',
                        'views/leetcode/简单/1299.将每个元素替换为右侧最大元素',
                        'views/leetcode/简单/1313.解压缩编码列表',
                        'views/leetcode/简单/1351.统计有序矩阵中的负数',
                        'views/leetcode/简单/宝石与石头',
                        'views/leetcode/简单/猜数字',
                        'views/leetcode/简单/面试题02.02.返回倒数第k个节点',
                        'views/leetcode/简单/面试题02.03.删除中间节点',
                        'views/leetcode/简单/面试题05.替换空格',
                        'views/leetcode/简单/面试题06.从尾到头打印链表',
                        'views/leetcode/简单/面试题17.打印从1到最大的n位数',
                        'views/leetcode/简单/面试题22.链表中倒数第k个节点',
                        'views/leetcode/简单/面试题24.反转链表',
                        'views/leetcode/简单/有多少小于当前数字的数字',
                        'views/leetcode/简单/整数的各位积和之差',
                        'views/leetcode/简单/左旋转字符串',
                        'views/leetcode/简单/猜数字',
                    ]
                },
                {
                    title: '中等',
                    children: [
                        'views/leetcode/中等/面试题64.求1+2+…+n',
                    ]
                },

            ]
        }, ],
        "lastUpdated": "Last Updated",
        "author": "linsir",
        "authorAvatar": "/avatar.png",
        "record": "xxxx",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    }
}