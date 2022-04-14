//导入vue包
import Vue from 'vue'//此处导入vue为剔除配置模版字符串的vue.js
// 导入App组件
import App from './App.vue'

// 全局混入
import mixin  from './mixin'
Vue.mixin(mixin)

// 导入插件
import plugins from './plugins'
Vue.use(plugins)

// 创建vue实例对象
new Vue({
    el: '#app',
    components: { App },
    //render函数，用于解决残缺版vue不支持模版字符串的问题
    render: h => h(App)
    /*
    完整写法
     render(CreatElement) {
        return CreatElement('html标签','标签内容')
    },
    */
})