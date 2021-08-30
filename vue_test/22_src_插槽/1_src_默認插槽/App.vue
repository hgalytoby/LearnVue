<template>
    <div class="container">
        <category title="美食">
            <img src="https://i.imgur.com/HC3vK0L.png" alt="">
        </category>
        <category title="遊戲">
            <ul>
                <li v-for="(item, index) in games" :key="index">
                    {{ item }}
                </li>
            </ul>
        </category>
        <category title="電影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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

</style>