
let request = require("request");

function getData(treeList) { //遍历树函数
  let data = []
  for (var i in treeList) { //循环遍历树
    if (treeList[i].children) {
      let childrens = treeList[i].children
      getData(childrens)
    } else {
      data.push({'name': treeList[i].name, 'value': treeList[i].total.confirm})
    }
  }
  console.log(data)
}

let dataUrl = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5'
request(dataUrl, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    let originData = JSON.parse(JSON.parse(body).data).areaTree
    // console.log('TCL: originData', originData)
    getData(originData)
  }
});
