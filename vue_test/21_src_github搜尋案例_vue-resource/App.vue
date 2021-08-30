<template>
    <div class="container">
        <Search></Search>
        <List></List>
    </div>
</template>

<script>
    import Search from "./components/Search";
    import List from "./components/List";

    export default {
        name: "App",
        components: {List, Search},
        methods: {},
    }
</script>

<style>

</style>