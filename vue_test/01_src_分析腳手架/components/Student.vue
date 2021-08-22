<template>
    <div>
        <h2>名字: {{ name }}</h2>
        <h2>年齡: {{ age }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data(){
            return {
                name: 'dudulu',
                age: 18
            }
        },
    }
</script>

<style scoped>

</style>
