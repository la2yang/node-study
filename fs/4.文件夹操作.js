const fs = require('fs')

// 文件夹创建
// fs.mkdir(path[, options], callback)
// fs.mkdirSync(path[, options])
// fs.mkdir('./test', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('创建成功')
//   }
// })

// 读取文件夹
// fs.readdir(path[, options], callback)
// fs.readdirSync(path[, options])
fs.readdir('./test', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// 删除文件夹
// fs.rmdir(path[, options], callback)
// fs.rmdirSync(path[, options])
