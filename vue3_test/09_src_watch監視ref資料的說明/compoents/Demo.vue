<template>
    <h2>當前求和為: {{ sum }}</h2>
    <button @click="sum++">點我+1</button>
    <hr>
    <h2>當前的訊息為: {{ msg }}</h2>
    <button @click="msg+='!'">修改訊息</button>
    <hr>
    <h2>性別: {{ person.name }}</h2>
    <h2>年齡: {{ person.age }}</h2>
    <h2>薪資: {{ person.job.j1.salary }}K</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">增加年齡</button>
    <button @click="person.job.j1.salary++">加薪</button>
</template>

<script>
    import {ref, reactive, watch} from 'vue'

    export default {
        name: "Demo",
        setup() {
            // 資料
            let sum = ref(0)
            let msg = ref('你好')
            // 將 person 改用 ref
            let person = ref({
                name: 'dudulu',
                age: 27,
                job: {
                    j1: {
                        salary: 20
                    },
                },
            })
            console.log(sum)
            console.log(person)

            // 這裡不能用 sum.value 是因為 sum.value 是基本類型的值，不是 RefImpl，可以到控制台查看 console.log(sum)。
            watch(sum, (newValue, oldValue) => {
                console.log('sum 的值變化了', newValue, oldValue)
            })

            // 第一種方法: 因為是 ref 的形式，所以要監視到必須要.value 去監視裡面 Proxy，可以到控制台查看 console.log(person)
            // watch(person.value, (newValue, oldValue) => {
            //     console.log('person 的值變化了', newValue, oldValue)
            // })

            // 第二種方法: 因為是 ref 的形式，開啟 deep:true 深度監視就可以監視到了
            watch(person, (newValue, oldValue) => {
                console.log('person 的值變化了', newValue, oldValue)
            }, {deep: true})

            // 返回一個對象(常用)
            return {
                sum,
                msg,
                person,
            }
        }
    }
</script>

<style scoped>

</style>