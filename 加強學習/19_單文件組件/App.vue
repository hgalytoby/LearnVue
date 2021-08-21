<template>
    <div>
        <img src="./" alt="">
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 導入組件
    import School from "./School"
    import Student from "./Student"

    export default {
        name: "App",
        components: {
            School,
            Student
        }
    }
</script>

<style scoped>

</style>
