<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳轉路由並帶 params 參數，to 的字符串寫法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`"> {{ m.title }} </router-link>-->
                <!-- 跳轉路由並帶 query 參數，to 的對象寫法，記得要去改 router index 的 path -->
                <router-link :to="{
                    name: 'detail',
                    query: {
                        id: m.id,
                        title: m.title,
                        }
                    }">
                    query: {{ m.title }}
                </router-link>
                <button @click="pushShow(m)">push 查看</button>
                <button @click="replaceShow(m)">replace 查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                messageList: [
                    {id: '001', title: '訊息001'},
                    {id: '002', title: '訊息002'},
                    {id: '003', title: '訊息003'},
                ]
            }
        },
        methods: {
            pushShow(m) {
                // console.log(this.$router)
                this.$router.push({
                    name: 'detail',
                    query: {
                        id: m.id,
                        title: m.title,
                    }
                })
            },
            replaceShow(m) {
                // console.log(this.$router)
                this.$router.replace({
                    name: 'detail',
                    query: {
                        id: m.id,
                        title: m.title,
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>