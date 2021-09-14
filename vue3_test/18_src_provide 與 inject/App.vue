<template>
    <div class="app">
        <h3>我是 App 組件(祖). {{ name }} -- {{ price}}</h3>
        <Child></Child>
    </div>
</template>

<script>
    import Child from "./components/Child";
    import {reactive, toRefs, provide} from "vue";
    export default {
        name: 'App',
        components: {Child},
        setup() {
            let car = reactive({name: 'VJR', price: '40W'})
            provide('car', car) // 給自己的後代傳送資料
            return {
                ...toRefs(car)
            }
        }
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 10px;
    }
</style>
