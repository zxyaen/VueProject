import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  methods: {

  },
  // 安装全局总线
  beforeCreate() {
    Vue.prototype.$bus = this
    // console.log(this.$bus);
  },
}).$mount('#app')
