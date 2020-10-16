import Vue from 'vue'
import 'xe-utils'
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)

// 给 vue 实例挂载全局窗口对象，例如：
Vue.prototype.$XModal = VXETable.modal

// 给 vue 实例挂载全局打印对象，例如：
Vue.prototype.$XPrint = VXETable.print
