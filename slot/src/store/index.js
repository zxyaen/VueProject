//该文件用于创建vuex中核心，store

//引入vuex
import Vue from 'vue'
import Vuex from 'vuex'  

//引入个功能模块
import countOptions from './countOptions'
import personOptions from './personOptios'


Vue.use(Vuex)

// 创建并暴露store
//store为vuex下面的一个属性
export default new Vuex.Store({
    modules:{
        ccc:countOptions,
        ppp:personOptions,

    }
})