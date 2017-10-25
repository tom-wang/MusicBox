import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import createRouter from './router/index.js';
import createStore from './store/index.js';

function createApp() {
    let router = createRouter();
    let store = createStore();
    // 同步路由状态(route state)到 store
    sync(store, router)
    let app = new Vue({
        router,
        store,
        render: h => h(App)
    });
    return {
        app,
        router,
        store
    };
}

export default createApp;
