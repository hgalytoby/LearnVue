<template>
    <h1>一個人的訊息</h1>
    <h2>姓名: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <h2>性別: {{ sex }}</h2>
    <button @click="sayHello">說話(Vue3 設定的 => sayHello)</button>
    <br>
    <br>
    <button @click="sayWelcome">說話(Vue2 設定的 => sayWelcome)</button>
    <br>
    <br>
    <button @click="test1">測試一下再 Vue2 的設定中去讀取 Vue3 中的資料與方法!</button>
    <br>
    <br>
    <button @click="test2">測試一下再 Vue3 的 setup 設定中去讀取 Vue2 中的資料與方法!</button>
</template>

<script>
    import {h} from 'vue'

    export default {
        name: 'App',
        // 此處只是測試一下，暫時不考慮響應式的問題。
        data() {
            return {
                sex: '男',
            }
        },
        methods: {
            sayWelcome() {
                alert('歡迎開始學習 Vue3!')
            },
            test1() {
                console.log(this.sex)
                console.log(this.name)
                console.log(this.age)
                // console.log(this.sayHello)
                this.sayHello()
            },
        },
        setup() {
            // 資料
            const name = 'dudulu'
            const age = 27

            function sayHello() {
                alert(`我叫${name}, 我${age}歲了， 你好阿!`)
            }

            function test2() {
                console.log(name)
                console.log(age)
                console.log(sayHello)
                console.log(this.sex)
                console.log(this.sayWelcome)
                // this.sayHello()
            }

            // 返回一個對象(常用)
            return {
                name,
                age,
                sayHello,
                test2,
            }

            // 返回一個函數(渲染函數)
            // return () => h('h1', 'Vue')
        },
    }
</script>

<style scoped>
</style>
