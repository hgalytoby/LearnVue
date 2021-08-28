<template>
    <div class="school">
        <h2>學校: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
        <button @click="killThis">銷毀本身</button>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                name: 'VueVueVue',
                address: 'Taipei',
            }
        },
        methods:{
            killThis(){
                this.$destroy()
            }
        },
        mounted() {
            this.$bus.$on('student', (data) => {
                console.log('School 組件收到值 Student 傳過來的資料了', data)
            })
        },
        beforeDestroy() {
            this.$bus.$off('student')
        }
    }
</script>

<style scoped lang="css">
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>
