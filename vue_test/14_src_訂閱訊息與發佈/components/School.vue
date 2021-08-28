<template>
    <div class="school">
        <h2>學校: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
        <button @click="killThis">銷毀本身</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name: "School",
        data() {
            return {
                name: 'VueVueVue',
                address: 'Taipei',
                pubId: Object,
            }
        },
        methods: {
            killThis() {
                this.$destroy()
            },
            demo(msgName, data) {
                console.log(this)
                console.log('有人發 hello 訊息，hello 訊息進行回調執行。', msgName, data)
            }
        },
        mounted() {
            // this.$bus.$on('student', (data) => {
            //     console.log('School 組件收到值 Student 傳過來的資料了', data)
            // })

            // 第一種方法，這邊的 this 會是 undefined。
            // this.pubId = pubsub.subscribe('hello', function (msgName, data) {
            //     console.log(this)
            //     console.log('有人發 hello 訊息，hello 訊息進行回調執行。', msgName, data)
            // })
            // 第二種方法，這邊的 this 會是 Vue 本身。
            // this.pubId = pubsub.subscribe('hello', (msgName, data) => {
            //     console.log(this)
            //     console.log('有人發 hello 訊息，hello 訊息進行回調執行。', msgName, data)
            // })
            // 第三種方法，跟第二種差不多，只是回調 methods 的方法。
            this.pubId = pubsub.subscribe('hello', this.demo)
        },
        beforeDestroy() {
            // this.$bus.$off('student')
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped lang="css">
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>
