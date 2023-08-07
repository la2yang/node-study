const path = require('path')
//获取路径分隔符
console.log('1:' + path.sep)
//拼接绝对路径
console.log('2:' + path.resolve(__dirname, 'test'))

//解析路径
let pathname = 'D:/program file/nodejs/node.exe'
console.log('3:' + path.parse(pathname))
//获取路径基础名称
console.log('4:' + path.basename(pathname))
//获取路径的目录名
console.log('5:' + path.dirname(pathname))
//获取路径的扩展名
console.log('6:' + path.extname(pathname))
