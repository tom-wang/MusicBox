<template>
<div>
    {{message}}
</div>
</template>

<script>
export default {
    data: function() {
        return {
            message: 'hello, tom'
        }
    }
};
</script>

<style scoped>
div {
    color: red;
}
</style>
