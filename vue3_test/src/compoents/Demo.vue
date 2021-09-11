<template>
    <h1>一個人的訊息</h1>
    <h2 v-show="person.name">姓名: {{ person.name }}</h2>
    <h2>年齡: {{ person.age }}</h2>
    <button @click="test">測試觸發一下 Demo 組件的 Hello 事件</button>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name: "Demo",
        props: ['msg', 'school'],
        emits: ['hello'],
        beforeCreate() {
            console.log('---beforeCreate---')
        },
        setup(props, context){
            console.log('---setup---', props)
            console.log('---setup---', context)
            console.log('---setup---', context.attrs) // 詳單與 Vue2 中的 $attrs
            console.log('---setup---', context.emit) // 觸發自定義事件的
            console.log('---setup---', context.slots) // 插槽

            // 資料
            let person = reactive({
                name: 'dudulu',
                age: 18,
            })
            function test() {
                context.emit('hello', '666')
            }
            // 返回一個對象(常用)
            return {
                person,
                test,
            }
        }
    }
</script>

<style scoped>

</style>