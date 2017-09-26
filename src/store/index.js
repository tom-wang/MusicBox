// 对外暴露统一入口
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
import A from './modules/a.js';
import B from './modules/b.js';

Vue.use(Vuex);
export default () => {
    return new Vuex.Store({
        modules: {
            a: A,
            b: B
        },
        actions: actions,
        mutations: mutations,
        getters: getters
    });
};
