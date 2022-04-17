//加模块
 export default {
    namespaced:true,   //开启命名空间，为了使组件中可以根据不同名字读取到数据
    actions: {
        increment(context, value) {
            //这里返回上下文而不是mutations
            //，因为如果业务逻辑过于复杂，需要dispatch分发给actions中另外的action去分别处理
            context.commit('Increment', value)
        },
        decrement(context, value) {
            context.commit('Decrement', value)
        },
        incrementOdd(context, value) {
            // console.log(this.state);      !!!!!!!!!!!此处有问题
            if (state.ccc.sum % 2) {
                context.commit('IncrementOdd', value)
            }
        },
        incrementWait(context, value) {
            context.commit('IncrementWait', value)
        },
    },
    mutations: {
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
        },
    },
    state: {
        sum: 10,
        name: 'xix',
        age: 12,
        sub: 'hahaha',
    },
    getters: {  
        getSum(state) {
            return state.sum * 10
        }
    }
}