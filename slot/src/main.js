import Vue from 'vue'
import App from './App.vue'


//导入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 注册store
  store:store,

  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')

