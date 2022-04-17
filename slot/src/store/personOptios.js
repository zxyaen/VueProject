//人员模块
export default {
    namespaced: true,
    actions: {
        add_person(context, p) {
            context.commit('ADD_PERSON', p)
        }
    },
    mutations: {
        ADD_PERSON(state, p) {
            state.personList.unshift(p)
        }
    },
    state: {
        personList: [
            // {id:'001',name:'zs'}
        ]
    },
    getters: {}
}