import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
export default () => {
    return new VueRouter({
        mode: 'hash',
        routes: [
        ]
    });
};
