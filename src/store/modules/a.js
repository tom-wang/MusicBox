export default {
    state: {
        count: 0
    },
    // 类似组件的计算属性
    // state：module的局部状态
    // getters：module的局部getters
    // rootState：指向根状态
    // rootGetters：指向根getters
    getters: {
        getCntPlusOne(state, getters, rootState, rootGetters) {
            return state.count + 1;
        }
    },
    // mutation必须是同步函数
    // state：module的局部状态
    // playload：从外部传入的参数
    mutations: {
        foobar(state, playload) {
            console.log('module a: ' + state.count++);
            console.log('foobar in a');
        }
    },
    // 可以做异步操作
    // context.state指向局部状态
    // context.rootState指向根状态
    actions: {
        foobar(context) {
            setTimeout(() => {
                context.commit('foobar');
            }, 1000);
        }
    }
}
