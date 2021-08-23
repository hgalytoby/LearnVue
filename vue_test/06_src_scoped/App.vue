<template>
    <div>
        <h1 class="title">你好啊!</h1>
        <hr>
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>

<script>
    import School from "./components/School";
    import Student from "./components/Student";

    export default {
        name: "App",
        components: {
            School,
            Student
        },
    }
</script>

<style scoped lang="css">
    .title{
        color: red;
    }
</style>