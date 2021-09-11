<template>
    <Demo @hello="showHelloMsg" msg="你好啊" school="Vue">
<!--        <span>學習中</span>-->
        <template v-slot:learn>
            <span>學習中</span>
        </template>
        <template v-slot:learnVue>
            <span>學習 Vue3</span>
        </template>
    </Demo>
</template>

<script>
    import Demo from "./compoents/Demo";

    export default {
        name: 'App',
        components: {Demo},
        setup(){
            function showHelloMsg(value){
                alert(`你好啊，觸發了 hello 事件, 我收到的參數是${value}`)
            }
            return {
                showHelloMsg,
            }
        }
    }
</script>

<style scoped>
</style>
