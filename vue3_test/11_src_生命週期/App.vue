<template>
    <button @click="isShowDemo = !isShowDemo">切換隱藏或顯示</button>
    <Demo v-if="isShowDemo">
    </Demo>
</template>

<script>
    import Demo from "./compoents/Demo";
    import {ref} from "vue";

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
