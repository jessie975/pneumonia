// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import echarts from 'echarts'
import { Table, TableColumn, Form, FormItem } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$echarts = echarts

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
