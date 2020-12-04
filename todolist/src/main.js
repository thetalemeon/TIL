// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Firebase from './firebase'
import store from './store'

Vue.config.productionTip = false

Firebase.init()

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
