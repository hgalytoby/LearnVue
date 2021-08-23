<template>
    <div>
        <h2 @click="showName">學校: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
    </div>
</template>

<script>
    // 引入 mixinTest
    // import {mixinTest1, mixinTest2} from "../mixin";

    export default {
        name: "School",
        data() {
            return {
                name: 'Vue',
                address: 'Taipei',
            }
        },
        // 局部混入
        // mixins: [mixinTest1, mixinTest2],
        mounted() {
            console.log('來囉!')
        }
    }
</script>

<style scoped>

</style>
