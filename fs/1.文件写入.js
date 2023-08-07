const { log } = require('console')
const fs = require('fs')

// 异步写入  fs.writeFile(file, data[, options], callback)
fs.writeFile('./异步写入.txt', '我是异步写入的数据\n', (err) => {
  if (err) {
    console.log(err)
  }
})

// 同步写入 fs.writeFileSync(file, data[, options])
try {
  fs.writeFileSync('./同步写入.txt', '我是同步写入的数据\n')
} catch (error) {
  console.log(error)
}

// ------------追加写入------------
// fs.appendFile(file, data[, options], callback)
// fs.appendFileSync(file, data[, options])
fs.appendFile('异步写入.txt', '我是异步追加写入的数据\n', (err) => {
  console.log(err)
})

try {
  fs.appendFileSync('./同步写入.txt', '我是同步追加写入的数据\n')
} catch (error) {
  console.log(error)
}

// ------------流式写入------------
// 可以减少关闭文件的次数 fs.createWriteStream(path[, options])

const ws = fs.createWriteStream('./流式写入.txt')
ws.write('流式写入1\n')
ws.write('流式写入2\n')
ws.write('流式写入3\n')
ws.write('流式写入4\n')
ws.end()
