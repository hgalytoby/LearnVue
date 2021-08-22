<template>
    <div class="demo">
        <h2>名稱: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                name: 'dudulu',
                address: 'Taipei'
            }
        }
    }
</script>

<style scoped>
    .school{
        background: gray;
    }
</style>