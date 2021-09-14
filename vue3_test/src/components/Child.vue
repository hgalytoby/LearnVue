<template>
    <div class="child">
        <h3>我是 Child 組件(子)</h3>
        <Son></Son>
    </div>
</template>

<script>
    import {inject} from 'vue'
    import Son from "./Son";

    export default {
        name: "Child",
        components: {Son},
        setup() {
            let x = inject('car')
            console.log(x, '我是 Child 組件(子)')
            return {
                x
            }
        }
    }
</script>

<style scoped>
    .child {
        background-color: skyblue;
        padding: 10px;
    }
</style>