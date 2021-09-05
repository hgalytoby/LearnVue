<template>
    <ul>
        <li>訊息編號: {{ $route.query.id }}</li>
        <li>訊息標頭: {{ $route.query.title }}</li>
    </ul>
</template>

<script>
    export default {
        name: "Detail",
        mounted() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>