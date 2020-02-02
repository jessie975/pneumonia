<template>
  <div class="body">
    <div class="header">
      <div class="title">
        <span class="h3">新型冠状肺炎</span>
        <h1>全国疫情动态</h1>
        <h5>by jessie-杨胜洁(数据来源于百度疫情实时大数据报告)</h5>
      </div>
      <img class="img" src="../assets/病毒图片.png" alt="病毒图片">
    </div>
    <div class="main">
      <h2 class="title">统计<span class="updateTime">更新时间：{{updateTime}}</span></h2>
      <div class="statistics">
          <div>
            <div class="number">{{data.confirm}}</div>
            <div class="desc">确诊病例</div>
          </div>
          <div>
            <div class="number">{{data.suspect}}</div>
            <div class="desc">疑似病例</div>
          </div>
          <div>
            <div class="number">{{data.heal}}</div>
            <div class="desc">治愈人数</div>
          </div>
          <div>
            <div class="number">{{data.dead}}</div>
            <div class="desc">死亡人数</div>
          </div>
      </div>
      <h2 class="title">疫情地图</h2>
      <virus-map></virus-map>
      <h2 class="title">各地情况统计</h2>
    </div>
  </div>
</template>

<script>
import VirusMap from './VirusMap'
import originData from '../../static/originData.json'

export default {
  name: 'Index',
  components: {
    VirusMap
  },
  data () {
    return {
      data: {},
      updateTime: ''
    }
  },
  methods: {
    initData () {
      this.data = originData.chinaTotal
      this.updateTime = originData.lastUpdateTime
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.header {
  width: 100%;
  height: 200px;
  background-color: #636d83;
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    margin-left: 40px;
    margin-top: 35px;
  }
  .img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .h3 {
    background-color: #f3f3f3;
    padding: 0 10px;
  }
}
.main {
  width: 80%;
  margin: 20px auto;
  .title {
    text-decoration: #22aeb4;
    &::before {
      content: '';
      width: 20px;
      height: 100%;
      background-color: #22aeb4;
    }
    .updateTime {
      font-size: 14px;
      font-weight: 500;
      float: right;
    }
  }
  .statistics {
    display: flex;
    justify-content: space-between;
    text-align: center;
    background-color: #f5f6f7;
    padding: 10px 40px;
    border-radius: 10px;
    .number {
      color: #22aeb4;
      font-size: 20px;
      font-weight: 900;
    }
  }
}
</style>
