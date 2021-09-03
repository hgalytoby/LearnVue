<template>
    <div>
        <h1>當前求和: {{ sum }}</h1>
        <h3>當前求和: {{ bigSum }}</h3>
        <h3 style="color: red">我在 {{ school }} 學習{{ subject }}</h3>
        <h3>下面組件的總人數是: {{ personList.length  }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">當前求和為奇數在 +</button>
        <button @click="incrementWait(n)">等一等在 +</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        name: "Count",
        data() {
            return {
                n: 1, // 選擇的數字
            }
        },
        methods: {
            // 對象寫法，借助 mapMutations 生成方法，方法中會調用 commit 去通知 mutations。
            ...mapMutations({increment:'JIA', decrement: 'JIAN'}),
            // 對象寫法，借助 mapAction 生成方法，方法中會調用 dispatch 去通知 actions。
            ...mapActions({incrementOdd:'jiaOdd', incrementWait: 'jiaWait'}),
        },
        computed: {
            // 陣列寫法，借助 mapState 生成計算屬性，從 state 中讀取資料，對照 store.state。
            ...mapState(['sum', 'school', 'subject', 'personList']),
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