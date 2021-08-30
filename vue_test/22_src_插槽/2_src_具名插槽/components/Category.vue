<template>
    <div class="category">
        <h3>{{ title }}分類</h3>
        <slot name="center">默認值，當使用者沒有傳送具體資料時，會出現!</slot>
        <slot name="footer">默認值，當使用者沒有傳送具體資料時，會出現!</slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
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