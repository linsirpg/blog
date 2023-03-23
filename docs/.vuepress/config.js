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
                "text": "GitHub",
                "link": "https://github.com/linsirpg",
                "icon": "logo.png"
            },

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
            "title": "vuepress-theme-reco",
            "desc": "A simple and beautiful vuepress Blog & Doc theme.",
            "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
            "link": "https://vuepress-theme-reco.recoluan.com"
        }],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        sidebar,
        "lastUpdated": "Last Updated",
        "author": "linsir",
        "authorAvatar": "/flower.png",
        "record": "粤ICP备2021175817号",
        "recordLink": "http://beian.miit.gov.cn/",
        // "cyberSecurityRecord": "粤ICP备18099141号",
        // "cyberSecurityLink": "http://beian.miit.gov.cn/",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    }
}