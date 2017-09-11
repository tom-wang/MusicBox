import Vue from 'vue';
import Test from './test.vue';
let app = new Vue({
    el: '#app',
    data: {
        //message: 'Hello Vue!'
    },
    components: {
        'test-component': Test
    }
});
setTimeout(() => {
    import(/*webpackChunkName:"vendor1"*/'lodash').then(_ => {
        console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
    });
    import(/*webpackChunkName:"vendor1"*/'jquery').then($ => {
        console.log($);
    });
    /*
    require.ensure(['lodash', 'jquery'], require => {
        let _ = require('lodash');
        let $ = require('jquery');
        console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
        console.log($);
    }, () => {}, 'vendor1');
    */
}, 5000);
