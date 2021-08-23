<template>
    <div>
        <h2>學校: {{ name | mySlice }}</h2>
        <h2>地址: {{ address }}</h2>
        <input type="text" v-fbind2:value="name">
        <button @click="test">點擊測試 Hello 方法</button>
    </div>
</template>

<script>

    export default {
        name: "School",
        data() {
            return {
                name: 'VueVueVue',
                address: 'Taipei',
            }
        },
        methods:{
            test(){
                this.hello()
            }
        }
    }
</script>

<style scoped>

</style>
