import Vue from 'vue';
import VueRouter from 'vue-router';

import Foo from '../components/Foo.vue';
//import Bar from '../components/Bar.vue';

Vue.use(VueRouter);
export default () => {
    return new VueRouter({
        mode: 'hash',
        routes: [
            { 
                path: '*', 
                component: Foo 
            },
            { 
                path: '/foo', 
                component: Foo 
            },
            { 
                path: '/bar', 
                component: () => import('../components/Bar.vue') 
            }
        ]
    });
};
