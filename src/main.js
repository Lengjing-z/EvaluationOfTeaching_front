import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Vue ui
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// primevue  primeicons
import Dialog from 'primevue/dialog';
import 'primevue/resources/themes/saga-blue/theme.css '
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css '
Vue.prototype.$primevue = {ripple: true};
Vue.component('Dialog', Dialog);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
