import Vue from 'vue';
import App from './App.vue';
import createRouter from './router/index.js';
import createStore from './store/index.js';

function createApp() {
    let router = App.router = createRouter();
    let store = App.store = createStore();
    let app = new Vue(App);
    return {
        app,
        router,
        store
    };
}

export default createApp;
