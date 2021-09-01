<template>
    <div>
        <h1>當前求和: {{ $store.state.sum }}</h1>
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
    export default {
        name: "Count",
        data() {
            return {
                n: 1, // 選擇的數字
                sum: 0, // 當前和
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