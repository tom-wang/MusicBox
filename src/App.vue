<template>
<div id="app">
    Hello, <span>{{ name }}</span>!
</div>
</template>
<style scoped>
span {
    color: red;
}
</style>
<script>
export default {
    data: () => {
        return {
            name: 'tom'
        };
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
}
</script>
