<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" v-model="keyWord" placeholder="enter the name you search"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>

    export default {
        name: "Search",
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            searchUsers() {
                console.log(this, 111)
                // 請求前更新 List 資料
                this.$bus.$emit('updateListData', {
                    isFirst: false,
                    isLoading: true,
                    errMsg: '',
                    users: [],
                })
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        console.log('請求成功', response.data.items)
                        this.$bus.$emit('updateListData', {
                            isLoading: false,
                            errMsg: '',
                            users: response.data.items,
                        })
                    },
                    error => {
                        console.log('請求失敗', error.message)
                        this.$bus.$emit('updateListData', {
                            isLoading: false,
                            errMsg: error.message,
                            users: [],
                        })
                    }
                )
            }
        },
    }
</script>

<style scoped>

</style>