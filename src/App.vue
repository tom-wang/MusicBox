<template>
<div>
    <test-component v-bind:message="message"></test-component>
    <div>{{getMsg()}}</div>
    <div>{{computeMsg}}</div>
    <div v-html="rawHtml"></div>
    <a href="#" @click="changeMessage">Change Message</a>
    <a href="#" @click="changeMessageWithAction">Change Message With Action</a>
    <router-view></router-view>
    <VueLazyComponent timeout="5000">VueLazyComponent1</VueLazyComponent>
    <VueLazyComponent timeout="3000">VueLazyComponent2</VueLazyComponent>
</div>
</template>
<style>
</style>
<script>
import Foo from './components/Foo.vue';
import Test from './components/Test.vue';
export default {
    data: () => {
        return {
            message: 'Hello Outer Message!',
            rawHtml: '<span style="red: black">html内容</span>'
        };
    },
    components: {
        //'test-component': () => import(/*webpackChunkName:"testComponent"*/'./components/test.vue'),
        'test-component': Test,
        'foo-component': Foo,
    },
    computed: {
        computeMsg() {
            let that = this;
            let that1 = that;
            return 'computed:' + that.message;
        }
    },
    methods: {
        getMsg() {
            let that = this;
            return 'method:' + that.message;
        },
        changeMessage() {
            // 如果不同的两个模块都注册了foobar mutation，那么他们都会触发
            this.$store.commit('foobar');
            this.message = 'new Message';
        },
        changeMessageWithAction() {
            console.log(this.$store);
            this.$store.dispatch('foobar');
        }
    }
}
</script>
