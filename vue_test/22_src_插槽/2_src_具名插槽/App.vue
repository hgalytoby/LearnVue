<template>
    <div class="container">
        <category title="美食">
            <img slot="center" src="https://i.imgur.com/HC3vK0L.png" alt="">
            <a slot="footer" href="https://www.google.com">前往 Google</a>
        </category>
        <category title="遊戲">
            <ul slot="center">
                <li v-for="(item, index) in games" :key="index">
                    {{ item }}
                </li>
            </ul>
            <div class="foot" slot="footer">
                <a href="https://www.google.com">單機遊戲</a>
                <a href="https://www.google.com">線上遊戲</a>
            </div>
        </category>
        <category title="電影">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <!-- 基本用法 -->
            <!-- <template slot="footer"> -->
            <!-- 只能在 template 時使用 -->
            <template v-slot:footer>
                <div class="foot">
                    <a href="https://www.google.com">經典</a>
                    <a href="https://www.google.com">熱門</a>
                    <a href="https://www.google.com">推薦</a>
                </div>
                <h4>前往觀看</h4>
            </template>
        </category>
    </div>
</template>

<script>

    import Category from "./components/Category";

    export default {
        name: "App",
        components: {Category},
        data() {
            return {
                foods: ['火鍋', '牛排', '燒烤', '便當'],
                games: ['白色相簿2', '穗翼', 'G弦上魔王', '命運石之門'],
                films: ['冰雪奇緣', '三個傻瓜', 'Fate', '遊戲人生'],
            }
        },
        methods: {},
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }

    .foot {
        display: flex;
        justify-content: space-around;
    }

    h4 {
        text-align: center;
    }
</style>