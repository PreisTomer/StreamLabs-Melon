import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(store)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
