import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import vuex from 'vuex'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(store)

new Vue({
  vuetify,
  vuex,
  render: function (h) { return h(App) }
}).$mount('#app')
