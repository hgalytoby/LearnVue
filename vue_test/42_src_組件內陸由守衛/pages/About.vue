<template>
    <h2>我是 About 的内容</h2>
</template>

<script>
    export default {
        name: "About",
        // beforeDestroy() {
        //     console.log('About 組件即將被銷毀了')
        // },
        mounted() {
            console.log('About 組件掛載完畢了', this.$route)
        },

        // 通過路由規則，進入組件時被調用
        beforeRouteEnter(to, from, next) {
            console.log('About => beforeRouteEnter', to, from)
            if (to.meta.isAuth) {
                if (localStorage.getItem('school') === 'dudulu') {
                    next()
                } else {
                    alert('學校名字不是 dudulu 不能看!')
                }
            } else {
                next()
            }
        },

        // 通過路由規則，離開組件時被調用
        beforeRouteLeave(to, from, next) {
            console.log('About => beforeRouteLeave', to, from)
            // next()
        },
    }
</script>

<style scoped>

</style>