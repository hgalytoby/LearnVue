<template>
    <div>
        <h2>名字: {{ name }}</h2>
        <h2>性別: {{ sex }}</h2>
        <input type="text" v-fbind2:value="name">
    </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                name: 'dudulu',
                sex: '男',
            }
        },
    }
</script>

<style scoped>

</style>
