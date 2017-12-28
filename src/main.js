// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueLocalStorage from 'vue-localstorage'

import App from './App'
import router from './router'

Vue.config.productionTip = true
Vue.use(VueMaterial)

// this.$local
Vue.use(VueLocalStorage, {
  name: 'local',
  createComputed: true,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
