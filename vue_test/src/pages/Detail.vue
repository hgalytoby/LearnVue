<template>
    <ul>
        <li>訊息編號: {{ id }}</li>
        <li>訊息標頭: {{ title }}</li>
        <li>a: {{ a }}</li>
        <li>b: {{ b }}</li>

    </ul>
</template>

<script>
    export default {
        name: "Detail",
        // router props = true 時
        props: ['id', 'title', 'a', 'b'],
        // computed: {
        //     id() {
        //         return this.$route.query.id
        //     },
        //     title() {
        //         return this.$route.query.title
        //     },
        //     a() {
        //         return this.$route.query.a
        //     },
        //     b() {
        //         return this.$route.query.b
        //     },
        // },
        mounted() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>