<template>
    <div class="demo">
        <h2 class="title">學校: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                name: 'VueVueVue',
                address: 'Taipei',
            }
        },
    }
</script>

<style scoped lang="css">
    .demo{
        background-color: skyblue;
    }
</style>
