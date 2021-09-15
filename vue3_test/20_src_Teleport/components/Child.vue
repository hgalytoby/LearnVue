<template>
    <div class="child">
        <h3>我是 Child 組件</h3>
        <Son></Son>
    </div>
</template>

<script>
    import Son from "./Son";

    export default {
        name: "Child",
        components: {Son},
    }
</script>

<style scoped>
    .child {
        background-color: skyblue;
        padding: 10px;
    }
</style>