<template>
    <button @click="isShowDemo = !isShowDemo">切換隱藏或顯示</button>
    <Demo v-if="isShowDemo"></Demo>
</template>

<script>
    import {ref} from "vue";
    import Demo from "./compoents/Demo";

    export default {
        name: 'App',
        components: {Demo},
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
