<template>
    <h1>一個人的訊息</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年齡: {{ person.age }}</h2>
    <h3>工作: {{ person.job.type }}</h3>
    <h3>測試資料: {{ person.job.a.b.c }}</h3>
    <h3>愛好: {{ person.hobby }}</h3>
    <button @click="changeInfo">修改人的訊息</button>
</template>

<script>
    import {reactive} from 'vue'

    export default {
        name: 'App',
        setup() {
            // 資料
            let person = reactive({
                name: 'dudulu',
                age: 27,
                job: {
                    type: '後端工程師',
                    salary: '44k',
                    a: {
                        b: {
                            c: 100,
                        },
                    },
                },
                hobby: ['吃飯', '睡覺', '玩電腦']
            })

            // 方法
            function changeInfo() {
                person.name = '嘟嘟嚕'
                person.age = 28
                person.job.type = '全端工程師'
                person.job.salary = '60k'
                person.job.a.b.c = 999
                person.hobby[0] = '學習'
            }

            // 返回一個對象(常用)
            return {
                person,
                changeInfo,
            }
        },
    }
</script>

<style scoped>
</style>
