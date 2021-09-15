<template>
    <div class="app">
        <h3>我是 App 組件</h3>
        <Suspense>
            <template v-slot:default>
                <Child></Child>
            </template>
            <template v-slot:fallback>
                <h1>讀取中...</h1>
            </template>
        </Suspense>

    </div>
</template>

<script>
    // import Child from "./components/Child"; // 靜態引入
    import {defineAsyncComponent} from 'vue' // 靜態引入

    // 異步引入
    const Child = defineAsyncComponent(() => import('./components/Child'))
    export default {
        name: 'App',
        components: {Child},
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 10px;
    }
</style>
