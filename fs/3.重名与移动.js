// fs.rename(oldPath, newPath, callback)
// fs.renameSync(oldPath, newPath)
const fs = require('fs')

fs.rename('./test.txt', './test1.txt', (err) => {
  console.log(err)
})

// 文件删除
// fs.unlink(path, callback)
// fs.unlinkSync(path)
