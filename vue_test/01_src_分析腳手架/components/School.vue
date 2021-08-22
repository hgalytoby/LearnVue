<template>
    <div class="demo">
        <h2>學校名稱: {{ schoolName }}</h2>
        <h2>學校地址: {{ address }}</h2>
        <button @click="showName">點擊顯示學校名</button>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                schoolName: 'dudulu',
                address: 'Taipei'
            }
        },
        methods: {
            showName() {
                alert(this.schoolName)
            }
        }
    }
</script>

<style scoped>
    .demo {
        background-color: orange;
    }
</style>
