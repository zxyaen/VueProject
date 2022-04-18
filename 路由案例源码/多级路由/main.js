import Vue from 'vue'
import App from './App.vue'
// import  'bootstrap'
// 引入vuerouter插件
import VueRouter from 'vue-router'
//引入创建的路由器
import router from './router/index'

Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
