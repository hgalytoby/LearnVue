<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>名字: {{ name }}</h2>
        <h2>性別: {{ sex }}</h2>
        <h2>年齡: {{ myAge + 1 }}</h2>
        <button @click="updateAge">修改收到的年齡</button>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                msg: '認真學 Vue',
                myAge: this.age,
            }
        },
        methods:{
            updateAge(){
                this.myAge += 1
            },
        },
        // 第一種: 簡單接收
        // props: ['name', 'sex', 'age']

        // 第二種: 接收的同時對資料進行類型限制
        // props: {
        //     name: String,
        //     age: Number,
        //     sex: String,
        // }
        // 第三種: 更多條件限制。
        props: {
            name: {
                type: String,  // name 的類型是字符串
                required: true,  // 必要的
            },
            age: {
                type: Number,  // name 的類型是字符串
                required: false,  // 不必要的
                default: 99,  // 預設值
            },
            sex: {
                type: String,  // name 的類型是字符串
                required: true,  // 名字是必要的
            }
        }
    }
</script>

<style scoped>

</style>
