const getOriginData = require('../static/originData')
let fs = require('fs')

let data = []
function traverse (treeList) {
  for (var i in treeList) {
    if (treeList[i].children) {
      traverse(treeList[i].children)
    } else {
      data.push({'name': treeList[i].name, 'value': treeList[i].total.confirm})
    }
  }
}

function writeFile (content) {
  fs.writeFile('./static/data.json', content, 'utf-8', error => {
    if (error) return console.log('写入文件失败,原因是' + error.message)
    console.log('写入成功')
  })
}

traverse(getOriginData.areaTree)

setInterval(() => {
  writeFile(JSON.stringify(data))
}, 86400)
