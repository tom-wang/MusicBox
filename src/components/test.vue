<template>
<div>
    <div>
        {{anotherMessage()}}
    </div>
    <div>
        {{innerMessage}}
    </div>
    <template v-if="isOK">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    </template>
    <ul>
        <li v-for="item in items" :key="item.key" v-if="item.isOK">{{item.text}}-{{itemMessage}}</li>
    </ul>
    <ul>
        <li v-for="n in evenNumbers()">{{ n }}</li>
    </ul>
</div>
</template>

<script>
export default {
    props: ['message'],
    data: function() {
        return {
            numbers: [ 1, 2, 3, 4, 5 ],
            innerMessage: 'hello, tom',
            isOK: false,
            items: [
                {text: 'item1', isOK: true, key: "1"},
                {text: 'item2', isOK: false, key: "2"},
                {text: 'item3', isOK: true, key: "3"},
            ],
            itemMessage: 'is an item',
            anotherMessage: function() {
                return this.message + ' tom!!!';
            }
        }
    },
    methods: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    mounted: function() {
        var that = this;
        setTimeout(function() {
            that.numbers = [6, 7, 8, 9, 10];
        }, 3000);
    }
};
</script>

<style scoped>
div {
    color: red;
}
</style>
