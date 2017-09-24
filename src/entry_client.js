//import Vue from 'vue';
//import App from './App.vue';
//import router from './router/index.js';
//import store from './store/index.js';
//let VueLazyComponent = require('@xunlei/vue-lazy-component');
//console.log(VueLazyComponent);
//
////import React from 'react';
////import ReactDOM from 'react-dom';
//
//Vue.use(VueLazyComponent);
//
//App.el = '#app';
//App.router = router;
//App.store = store;
//let app = new Vue(App);
//
///*
//ReactDOM.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('root')
//);
//*/
import Vue from 'vue';
import createApp from './main.js';

//let VueLazyComponent = require('@xunlei/vue-lazy-component');
//Vue.use(VueLazyComponent);

let {app, router} = createApp();
router.onReady(() => {
    app.$mount('#app');
});
