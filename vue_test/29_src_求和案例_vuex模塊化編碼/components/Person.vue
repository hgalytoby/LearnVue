<template>
    <div>
        <h1>人員列表</h1>
        <h1 style="color: red">Count 組件求和為: {{ sum }}</h1>
        <input type="text" placeholder="請輸入名字" v-model="name">
        <button @click="add">增加</button>
        <button @click="addLee">增加姓李的人</button>
        <button @click="addPersonServer">增加一句話</button>
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
                this.$store.commit("personAbout/ADD_PERSON", personObj)
                this.name = ''
            },
            addLee() {
                const personObj = {id: nanoid(), name: this.name}
                this.$store.dispatch("personAbout/addLee", personObj)
                this.name = ''
            },
            addPersonServer() {
                this.$store.dispatch("personAbout/addPersonServer")
            }
        },
        computed: {
            personList() {
                return this.$store.state.personAbout.personList
            },
            sum() {
                return this.$store.state.countAbout.sum
            },
            // ...mapState({personList: 'personList'})
            // ...mapState(['personList'])
        }
    }
</script>

<style scoped>

</style>