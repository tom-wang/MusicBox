<template>
<div>
    <test-component v-bind:message="message"></test-component>
    <div v-html="rawHtml"></div>
    <a href="#" @click="changeMessage">Change Message</a>
    <router-view></router-view>
</div>
</template>
<style>
</style>
<script>
import Test from './components/test.vue';
export default {
    data: function() {
        return {
            message: 'Hello Outer Message!',
            rawHtml: '<span style="red: black">html内容</span>'
        };
    },
    components: {
        'test-component': Test
    },
    methods: {
        changeMessage() {
            this.message = 'new Message';
        }
    }
}
</script>
