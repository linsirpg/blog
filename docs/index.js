var fs = require('fs')
var path = require('path')

function readdir(dirname, name) {
    var arr = [

    ]
    var readDir = fs.readdirSync(dirname)

    readDir.forEach(fileName => {
        var result = fs.statSync(path.resolve(dirname, fileName))
        if (fileName !== 'image') {
            if (result.isDirectory()) {
                var obj = Object.create(null)
                obj.title = fileName
                obj.collapsable = true
                obj.children = readdir(path.resolve(dirname, fileName), name + '/' + fileName)
                arr.push(obj)
            } else {
                arr.push(name + '/' + fileName)
            }
        }

    })
    return arr
}

var result = readdir((path.resolve(__dirname, 'views')), 'views')

console.log(JSON.stringify(result, null, 2));
var configUrl = path.resolve(__dirname, '.vuepress/sidebar/index.js')
fs.writeFileSync(configUrl, "module.exports=" + JSON.stringify(result))