<template>
    <h4>{{ sum }}</h4>
    <button @click="sum++">點擊 ++</button>
    <hr>
    <h2>性別: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <h2>薪資: {{ job.j1.salary }}K</h2>
    <h3 v-show="person.car">車子訊息: {{ person.car }}</h3>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增加年齡</button>
    <button @click="job.j1.salary++">加薪</button>
    <button @click="showRawPerson">輸出最原始的 person</button>
    <button @click="addCar">給人增加一台車</button>
    <button @click="person.car.name+='!'">換車名</button>
    <button @click="person.car.price++">漲價</button>
    <button @click="changePrice">換價格</button>
</template>

<script>
    import {ref, reactive, toRefs, toRaw, markRaw} from 'vue'

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
                // car: {}
            })
            let sum = ref(0)

            function showRawPerson() {
                const p = toRaw(person)
                p.age++
                console.log(p, person)
            }

            function addCar() {
                let car = markRaw({name: 'VJR', price: 40})
                person.car = car
            }

            function changePrice() {
                person.car.price++
                console.log(person.car.price)
            }
            // 返回一個對象(常用)
            return {
                sum,
                person,
                showRawPerson,
                addCar,
                changePrice,
                ...toRefs(person)
            }
        }
    }
</script>

<style scoped>

</style>