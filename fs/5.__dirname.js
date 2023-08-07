const fs = require('fs')

// __dirname 保存着当前文件所在目录的绝对路径
let data = fs.readFileSync(__dirname + '/test1.txt')
console.log(data)
