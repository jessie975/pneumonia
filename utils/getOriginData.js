
let request = require('request')
let fs = require('fs')

function ajax (url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let originData = JSON.parse(body).data
        resolve(originData)
      } else {
        reject(response.statusCode)
      }
    })
  })
}

function writeFile (content) {
  fs.writeFile('../static/originData.json', content, 'utf-8', error => {
    if (error) return console.log('写入文件失败,原因是' + error.message)
    console.log('写入成功')
  })
}

let data = ajax('https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5')
setInterval(() => {
  data.then(list => {
    writeFile(list)
  })
}, 1000)
