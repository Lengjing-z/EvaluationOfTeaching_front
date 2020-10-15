import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import XLXS from "xlsx";



// Vue ui
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(XLXS)

// 导入echarts模块
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
// import 'echarts-gl'

// 注册组件后即可使用
Vue.component('v-chart', ECharts)


// vxe-table
import 'plugins/utils'
import 'plugins/table'


// be wrote by zw
import myAxios from "./network/request";
Vue.prototype.axios = myAxios
import qs from 'qs'
Vue.prototype.qs = qs



Vue.use(store)
Vue.prototype.router = router
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


