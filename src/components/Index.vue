<template>
  <div>
    <div class="header">
      <div class="title">
        <span class="h3">新型冠状肺炎</span>
        <h1>全国疫情动态</h1>
        <h5>by jessie-杨胜洁(数据来源于百度疫情实时大数据报告)</h5>
      </div>
      <img class="img" src="../assets/病毒图片.png" alt="病毒图片">
    </div>
    <div class="main">
      <h2 class="title">统计</h2>
      <div class="statistics">
          <div v-for="item in statistics" :key="item.id">
            <div class="number">{{item.number}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
      </div>
      <h2 class="title">疫情地图</h2>
      <virus-map></virus-map>
    </div>
  </div>
</template>

<script>
import VirusMap from './VirusMap'
export default {
  name: 'Index',
  components: {
    VirusMap
  },
  data () {
    return {
      statistics: [
        {
          id: 1,
          number: 11848,
          desc: '确诊病例'
        },
        {
          id: 2,
          number: 17988,
          desc: '疑似病例'
        },
        {
          id: 3,
          number: 262,
          desc: '治愈病患'
        },
        {
          id: 4,
          number: 259,
          desc: '死亡病例'
        }
      ]
    }
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
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0 10px;
  }
}
.main {
  margin: 20px 40px;
  .title {
    text-decoration: #22aeb4;
    &::before {
      content: '';
      width: 20px;
      height: 100%;
      background-color: #22aeb4;
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
