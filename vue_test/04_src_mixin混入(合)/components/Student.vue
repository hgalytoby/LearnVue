<template>
    <div>
        <h2 @click="showName">名字: {{ name }}</h2>
        <h2>性別: {{ sex }}</h2>
    </div>
</template>

<script>
    // import {mixinTest1, mixinTest2} from "../mixin";

    export default {
        name: "Student",
        data() {
            return {
                name: 'dudulu',
                sex: '男',
            }
        },
        // 局部混入
        // mixins: [mixinTest1, mixinTest2]
    }
</script>

<style scoped>

</style>
