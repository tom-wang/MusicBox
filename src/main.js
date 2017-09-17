import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

App.el = '#app';
App.router = router;
App.store = store;
let app = new Vue(App);
