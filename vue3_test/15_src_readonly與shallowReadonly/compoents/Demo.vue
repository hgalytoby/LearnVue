<template>
    <h4>{{ sum }}</h4>
    <button @click="sum++">點擊 ++</button>
    <hr>
    <h2>性別: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <h2>薪資: {{ job.j1.salary }}K</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增加年齡</button>
    <button @click="job.j1.salary++">加薪</button>
</template>

<script>
    import {ref, reactive, toRefs, readonly, shallowReadonly} from 'vue'

    export default {
        name: "Demo",
        setup() {
            // 資料
            let person = reactive({
                name: 'dudulu',
                age: 27,
                job: {
                    j1: {
                        salary: 20
                    },
                },
            })
            let sum = ref(0)

            // person = readonly(person)
            // person = shallowReadonly(person)
            // sum = readonly(sum)
            // sum = shallowReadonly(sum)

            // 返回一個對象(常用)
            return {
                sum,
                ...toRefs(person)
            }
        }
    }
</script>

<style scoped>

</style>