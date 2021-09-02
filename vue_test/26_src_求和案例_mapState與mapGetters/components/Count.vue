<template>
    <div>
        <h1>當前求和: {{ sum }}</h1>
        <h3>當前求和: {{ bigSum }}</h3>
        <h3>我在 {{ school }} 學習{{ subject }}</h3>
        <h1>當前求和1: {{ sum1}}</h1>
        <h3>當前求和1: {{ bigSum1 }}</h3>
        <h3>我在1 {{ school1 }} 學習1 {{ subject1 }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">當前求和為奇數在 +</button>
        <button @click="incrementWait">等一等在 +</button>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "Count",
        data() {
            return {
                n: 1, // 選擇的數字
            }
        },
        methods: {
            increment() {
                this.$store.commit('JIA', this.n)
            },
            decrement() {
                this.$store.commit('JIAN', this.n)
            },
            incrementOdd() {
                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('jiaWait', this.n)
            },
        },
        computed: {
            // 自己動手寫
            // sum() {
            //     return this.$store.state.sum
            // },
            // school() {
            //     return this.$store.state.school
            // },
            // subject() {
            //     return this.$store.state.subject
            // },
            // bigSum() {
            //     return this.$store.getters.bigSum
            // },

            // 套件寫，Vue Devtools 會在 vuex bindings 裡面。
            // 對象寫法，借助 mapState 生成計算屬性，從 state 中讀取資料，Key 可以不跟 Value 一樣，但是 Value 是對照 store.state 必須一樣。
            // ...mapState({sum: 'sum', school: 'school', subject: 'subject'})
            // key 可以不一樣例子，上面的 template 記得要改 sum1、school1、subject1。
            ...mapState({sum1: 'sum', school1: 'school', subject1: 'subject'}),
            // 陣列寫法，借助 mapState 生成計算屬性，從 state 中讀取資料，對照 store.state。
            ...mapState(['sum', 'school', 'subject']),
            
            // 對象寫法，借助 mapGetters 生成計算屬性，從 Getters 中讀取資料，Key 可以不跟 Value 一樣，但是 Value 是對照 store.Getters 必須一樣。
            // key 可以不一樣例子，上面的 template 記得要改 bigSum1。
            // ...mapGetters({bigSum: 'bigSum'}),
            ...mapGetters({bigSum1: 'bigSum'}),
            // 陣列寫法，借助 mapGetters 生成計算屬性，從 Getters 中讀取資料，對照 store.Getters。
            ...mapGetters(['bigSum']),

        },
        mounted() {
            // console.log('Count', this)
        }
    }
</script>

<style scoped>
    button {
        margin-right: 5px;
    }
</style>