import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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



// vxe-table
import 'plugins/utils'
import 'plugins/table'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
