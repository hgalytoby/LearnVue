<template>
    <div>
        <Count></Count>
    </div>
</template>

<script>
    import Count from "./components/Count";

    export default {
        name: "App",
        components: {Count},
        methods: {},
        mounted() {
            console.log('App', this)
        }
    }
</script>

<style scoped>
</style>