// 对外暴露统一入口
import Vue from 'vue';
import Vuex from 'vuex';
import A from './modules/a.js';
import B from './modules/b.js';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        a: A,
        b: B
    }
});
