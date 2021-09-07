<template>
    <div>
        <div class="row">
            <Banner></Banner>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原始 html 中使用 a 標籤實現葉面跳轉 -->
                    <!-- <a class="list-group-item active" href="./about.html">About</a>-->
                    <!-- <a class="list-group-item" href="./home.html">Home</a>-->

                    <!-- Vue 中借住 router-link 標籤實現路由的切換 -->
                    <router-link class="list-group-item" active-class="active" :to="{name: 'about'}">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定組件呈現的位置 -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Banner from "./components/Banner";

    export default {
        name: "App",
        methods: {},
        mounted() {
        },
        components: {Banner}
    }
</script>

<style scoped>
</style>