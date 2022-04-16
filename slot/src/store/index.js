//该文件用于创建vuex中核心，store

//引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions用于响应组件中动作
const actions = {
    increment(context, value) {
       //这里返回上下文而不是mutations，因为如果业务逻辑过于复杂，需要dispatch分发给actions中另外的action去分别处理
        context.commit('Increment', value)
    },
    decrement(context, value) {
        context.commit('Decrement', value)
    },
    incrementOdd(context, value) {
        if (state.sum % 2) {

            context.commit('IncrementOdd', value)
        }
    },
    incrementWait(context, value) {
        context.commit('IncrementWait', value)
    }
}
// 准备mutations用于操作数据
const mutations = {
    Increment(state, value) {
        state.sum += value
        // console.log(state.sum);
    },
    Decrement(state, value) {
        state.sum -= value
    },
    IncrementOdd(state, value) {
        state.sum += value

    },
    IncrementWait(state, value) {
        setTimeout(() => {

            state.sum += value
        }, 2000);
    }
}

// 准备state用于存储数据
const state = {
    sum: 10,
    name:'xix',
    age:12,
    sub:'hahaha'
}

//用于对state中的数据进行加工，类似计算属性
const getters={
    getSum(state){
        return state.sum*10
    }
}

// 创建并暴露store
//store为vuex下面的一个属性
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})