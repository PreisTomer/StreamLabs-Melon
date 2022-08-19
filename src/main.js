import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  store,
  vuetify: new Vuetify(),
  render: function (h) { return h(App) }
}).$mount('#app')
