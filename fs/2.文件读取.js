const { log, Console } = require('console')
const fs = require('fs')
const { buffer } = require('stream/consumers')

// 异步读取 fs.readFile(path[, options], callback)
fs.readFile('./异步写入.txt', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})

// 同步读取  fs.readFileSync(path[, options])
let data = fs.readFileSync('./同步写入.txt')
console.log(data.toString())
console.log('-----------------------------------')

// 流式读取 fs.createReadStream(path[, options])
let rs = fs.createReadStream('./流式写入.txt')
rs.on('data', (data) => {
  console.log(data.toString())
})

rs.on('end', () => {
  console.log('读取完成')
  console.log('-----------------------------------')
})
