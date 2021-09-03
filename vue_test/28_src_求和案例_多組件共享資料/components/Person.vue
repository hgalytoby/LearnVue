<template>
    <div>
        <h1>人員列表</h1>
        <h1 style="color: red">Count 組件求和為: {{ sum }}</h1>
        <input type="text" placeholder="請輸入名字" v-model="name">
        <button @click="add">增加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {nanoid} from 'nanoid'

    export default {
        name: "Person",
        data() {
            return {
                name: ''
            }
        },
        methods: {
            add() {
                const personObj = {id: nanoid(), name: this.name}
                this.$store.commit('ADD_PERSON', personObj)
                this.name = ''
            }
        },
        computed: {
            personList() {
                return this.$store.state.personList
            },
            sum() {
                return this.$store.state.sum
            },
            // ...mapState({personList: 'personList'})
            // ...mapState(['personList'])
        }
    }
</script>

<style scoped>

</style>