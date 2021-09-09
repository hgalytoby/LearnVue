<template>
    <h1>一個人的訊息</h1>
    <h2>姓名: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <h3>工作: {{ job.type }}</h3>
    <h3>年齡: {{ job.salary }}</h3>
    <button @click="changeInfo">修改人的訊息</button>
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: 'App',
        setup() {
            // 資料
            let name = ref('dudulu')
            let age = ref(27)
            let job = ref({
                type: '後端工程師',
                salary: '44k',
            })

            function changeInfo() {
                name.value = '嘟嘟嚕'
                age.value = 28
                job.value.type = '全端工程師'
                job.value.salary = '60k'
            }
            
            // 返回一個對象(常用)
            return {
                name,
                age,
                job,
                changeInfo,
            }
        },
    }
</script>

<style scoped>
</style>
