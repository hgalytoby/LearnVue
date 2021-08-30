<template>
    <div class="category">
        <h3>{{ title }}分類</h3>
        <slot :games="games" msg="hello">我是默認值</slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data() {
            return {
                games: ['白色相簿2', '穗翼', 'G弦上魔王', '命運石之門'],
            }
        },
        props: {
            title: String,
            listDta: Array,
        }
    }
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3 {
        text-align: center;
        background-color: orange;
    }

    img {
        width: 100%;
    }

    video {
        width: 100%;
    }
</style>