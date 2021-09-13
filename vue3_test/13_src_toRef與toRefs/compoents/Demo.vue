<template>
    <h2>{{ person }}</h2>
    <h2>性別: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <h2>薪資: {{ job.j1.salary }}K</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增加年齡</button>
    <button @click="job.j1.salary++">加薪</button>
</template>

<script>
    import {ref, reactive, toRef, toRefs} from 'vue'

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

            const name1 = person.name
            console.log('name1', name1)

            const name2 = toRef(person, 'name')
            console.log('name2', name2)

            const name3 = toRefs(person)
            console.log('name3', name3)

            // 返回一個對象(常用)
            return {
                person,

                // 以下可以實現
                // name: toRef(person, 'name'),
                // age: toRef(person, 'age'),
                // salary: toRef(person.job.j1, 'salary'),

                // 展開第一層，上面的 template 要將 salary 改成 job.j1.salary
                ...toRefs(person)

                // 這樣做會變成獨立一個新的變數，不能跟原本的作互動
                // name: ref(person.name),
                // age: ref(person.age),
                // salary: ref(person.job.j1.salary),
            }
        }
    }
</script>

<style scoped>

</style>