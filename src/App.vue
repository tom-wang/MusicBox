<template>
<div>
    <test-component v-bind:message="message"></test-component>
    <div v-html="rawHtml"></div>
    <a href="#" @click="changeMessage">Change Message</a>
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
    methods: {
        changeMessage() {
            //this.$store.commit('foobar');
            this.message = 'new Message';
        }
    }
}
</script>
