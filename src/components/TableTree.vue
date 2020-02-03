<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand" v-for="item in props.row.children" :key="item.name">
            <el-form-item class="name">
              <span>{{ item.name }}</span>
            </el-form-item>
            <el-form-item class="confirm">
              <span>{{ item.total.confirm }}</span>
            </el-form-item>
            <el-form-item class="heal">
              <span>{{ item.total.heal }}</span>
            </el-form-item>
            <el-form-item class="dead">
              <span>{{ item.total.dead }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        class="title"
        label="省市"
        prop="name">
      </el-table-column>
      <el-table-column
        class="title"
        label="确诊"
        prop="confirm">
      </el-table-column>
      <el-table-column
        class="title"
        label="治愈"
        prop="heal">
      </el-table-column>
      <el-table-column
        class="title"
        label="死亡"
        prop="dead">
      </el-table-column>
    </el-table>
    <h2>国外疫情</h2>
    <el-table
      :data="foreignData"
      style="width: 100%">
      <el-table-column
        class="title"
        label="国家"
        prop="name">
      </el-table-column>
      <el-table-column
        class="title"
        label="确诊"
        prop="confirm">
      </el-table-column>
      <el-table-column
        class="title"
        label="治愈"
        prop="heal">
      </el-table-column>
      <el-table-column
        class="title"
        label="死亡"
        prop="dead">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import originData from '../../static/originData.json'

export default {
  name: 'TableTree',
  data () {
    return {
      tableData: [],
      foreignData: []
    }
  },
  methods: {
    initData () {
      let data = originData.areaTree[0].children
      let foreignData = originData.areaTree
      let tableData = []
      let foreignList = []
      data.forEach(item => {
        let dataItem = {}
        dataItem['name'] = item.name
        dataItem['confirm'] = item.total.confirm
        dataItem['heal'] = item.total.heal
        dataItem['dead'] = item.total.dead
        dataItem['children'] = item.children
        tableData.push(dataItem)
      })
      foreignData.forEach(item => {
        let dataItem = {}
        dataItem['name'] = item.name
        dataItem['confirm'] = item.total.confirm
        dataItem['heal'] = item.total.heal
        dataItem['dead'] = item.total.dead
        foreignList.push(dataItem)
      })
      foreignList.splice(0, 1)
      this.tableData = tableData
      this.foreignData = foreignList
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<style lang="less">

.is-leaf {
  .cell {
    color: #22aeb4;
    font-size: 16px;
  }
}

.el-table_1_column_1, .el-table_1_column_2, .el-table_2_column_6 {
  font-weight: 900;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 25%;
  &.name {
    padding-left: 8px;
  }
  &.confirm {
    padding-left: 30px;
  }
  &.heal {
    padding-left: 40px;
  }
  &.dead {
    padding-left: 50px;
  }
}
</style>
