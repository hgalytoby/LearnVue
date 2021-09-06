<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        // beforeDestroy() {
        //     console.log('Home 組件即將被銷毀了')
        // },
        // mounted() {
        //     console.log('Home 組件掛載完畢了', this)
        // },
    }
</script>

<style scoped>

</style>