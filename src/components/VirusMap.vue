<template>
  <div class="echarts">
    <div :style="{height:'500px',width:'100%'}" id="map"></div>
  </div>
</template>

<script>
import 'echarts/map/js/china'
import 'echarts/extension/bmap/bmap.js'
import data from '../../static/data.json'
import geoCoordMap from '../../static/geoCoordMap.json'
import {MP} from '../../static/baiduMap'

export default {
  name: 'VirusMap',
  data () {
    return {
    }
  },
  methods: {
    initEchart () {
      var myChart = this.$echarts.init(document.getElementById('map'))

      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }

      console.log(convertData(data))

      var option = {
        tooltip: {
          trigger: 'item',
          formatter: function (param) {
            return param.name + '：' + param.value[2]
          }
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [{
              'featureType': 'land',
              'elementType': 'all',
              'stylers': {
                'color': '#f3f3f3'
              }
            }, {
              'featureType': 'railway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'highway',
              'elementType': 'all',
              'stylers': {
                'color': '#fdfdfd'
              }
            }, {
              'featureType': 'highway',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'geometry',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'green',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'subway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'manmade',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'local',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'boundary', // 边境线
              'elementType': 'all',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'building',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'label', // 地名
              'elementType': 'labels.text.fill',
              'stylers': {
                'color': '#999999'
              }
            }]
          }
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
              if (val[2] > 1 && val[2] < 9) {
                return val[2] * 2
              } else if (val[2] > 9 && val[2] < 99) {
                return val[2] / 2
              } else if (val[2] > 99 && val[2] < 500) {
                return val[2] / 100
              } else {
                return val[2] / 1000
              }
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            itemStyle: {
              color: 'red'
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        ]
      }

      if (option && typeof option === 'object') {
        myChart.setOption(option)
      }
    }
  },
  mounted () {
    let ak = 'x5C6VEg8SDyxgGj1DOIgjg8QGHenC3vb'
    this.$nextTick(() => {
      MP(ak).then(BMap => {
        document.getElementById('map').style.height = window.screen.availHeight * 0.9 + 'px'
        this.$nextTick(() => {
          this.drawLine()
        })
        this.$echarts.init(document.getElementById('map')).resize()
      })
    })
    this.initEchart()
  }
}
</script>
