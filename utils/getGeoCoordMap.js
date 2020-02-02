const request = require('request')
const getData = require('../static/data')
const fs = require('fs')

function ajax (url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error) {
        let reg = RegExp(/"msg":"ok"/)
        if (body.match(reg)) {
          resolve(body)
        }
      } else {
        reject(error)
      }
    })
  })
}

function appendFile (content) {
  fs.appendFile('./static/geoCoordMap.json', content, 'utf-8', error => {
    if (error) return console.log('写入文件失败,原因是' + error.message)
    console.log('写入成功')
  })
}

let getGeoData = (data) => {
  data.forEach(item => {
    let options = {
      method: 'GET',
      url: 'http://api.tianditu.gov.cn/geocoder',
      qs: {ds: '{"keyWord":"' + item.name + '"}'},
      headers: {'cache-control': 'no-cache'}
    }
    ajax(options).then(data => {
      let geoCoordItem = {}
      let location = JSON.parse(data).location
      geoCoordItem[location.keyWord] = [location.lon, location.lat]
      appendFile(JSON.stringify(geoCoordItem))
    })
  })
}

getGeoData(getData)
