<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom" ref="btn">點擊輸出上面的 Dom 元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
    // 引入 School
    import School from "./components/School";

    export default {
        name: "App",
        data(){
            return {
                msg: '學 Vue',
            }
        },
        components: {
            School
        },
        methods: {
            showDom(){
                console.log(this.$refs.title) // 真實 DOM 元素
                console.log(this.$refs.btn) // 真實 DOM 元素
                console.log(this.$refs.sch) // School 組件的實例對象(vc)
            }
        }
    }
</script>

<style scoped>

</style>