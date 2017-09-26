import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import createRouter from './router/index.js';
import createStore from './store/index.js';

function createApp() {
    let router = App.router = createRouter();
    let store = App.store = createStore();
    // 同步路由状态(route state)到 store
    sync(store, router)
    let app = new Vue(App);
    return {
        app,
        router,
        store
    };
}

export default createApp;
