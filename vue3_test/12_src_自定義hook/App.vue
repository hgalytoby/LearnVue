<template>
    <button @click="isShowDemo = !isShowDemo">切換隱藏或顯示</button>
    <Demo v-if="isShowDemo"></Demo>
    <hr>
    <Test></Test>
</template>

<script>
    import {ref} from "vue";
    import Demo from "./compoents/Demo";
    import Test from "./compoents/Test";

    export default {
        name: 'App',
        components: {Test, Demo},
        setup(){
            let isShowDemo = ref(true)
            return {
                isShowDemo,
            }
        },
    }
</script>

<style scoped>
</style>
