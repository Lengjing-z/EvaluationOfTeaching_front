import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

// Vue ui
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.use(VXETable)
// import 'plugins/utils'
// import 'plugins/table'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
