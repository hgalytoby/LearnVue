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
        // Vue2 寫法
        // watch: {
        //     sum(newValue, oldValue) {
        //         console.log(newValue, oldValue)
        //     },
        //     sum: {
        //         immediate: true,
        //         deep: true,
        //         handler(newValue, oldValue) {
        //             console.log('sum 的值變化了', newValue, oldValue)
        //         }
        //     }
        // },
        setup() {
            // 資料
            let sum = ref(0)
            let msg = ref('你好')
            let person = reactive({
                name: 'dudulu',
                age: 27,
                job: {
                    j1: {
                        salary: 20
                    },
                },
            })

            // 情況一: 監視 ref 所定義的一個響應式資料
            // watch(sum, (newValue, oldValue) => {
            //     console.log('sum 的值變化了', newValue, oldValue)
            // }, {immediate:true})

            // 情況二: 監視 ref 所定義的多個響應式資料
            // watch([sum, msg], (newValue, oldValue) => {
            //     console.log('sum or msg 的值變化了', newValue, oldValue)
            // }, {immediate:true})
            // watch(msg, (newValue, oldValue) => {
            //     console.log('msg 的值變化了', newValue, oldValue)
            // }, )

            // 情況三: 監視 reactive 所定義的一個響應式資料
            // 1.注意: 此處無法正確的取得 oldValue
            // 2.注意: 強制開啟了深度監視(設定 deep: false 還是一樣深度監視沒辦法關閉)
            // watch(person, (newValue, oldValue) => {
            //     console.log('person 變化了', newValue, oldValue)
            // }, {deep: false})

            // 情況四: 監視 reactive 所定義的一個響應式資料中的某個屬性
            // watch(() => person.age, (newValue, oldValue) => {
            //     console.log('person 的 age 變化了', newValue, oldValue)
            // })

            // 情況五: 監視 reactive 所定義的一個響應式資料中的某些屬性
            // watch([() => person.age, () => person.name], (newValue, oldValue) => {
            //     console.log('person 的 age 或 name 變化了', newValue, oldValue)
            // })

            // 特殊情況
            // 處此由於監視的是 reactive 所定義的對象中的某個屬性(這個屬性依然是個對象)，所以 deep 設定有效，但是一樣沒辦法取得 oldValue 值
            watch(() => person.job, (newValue, oldValue) => {
                console.log('person 的 age 或 name 變化了', newValue, oldValue)
            }, {deep: true})

            // 總結: 只要是對象都沒辦法取得 oldValue 值


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