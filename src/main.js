import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes/index.js';

Vue.use(VueRouter);

let router = new VueRouter({
    routes
});
App.el = '#app';
App.router = router;
let app = new Vue(App);
