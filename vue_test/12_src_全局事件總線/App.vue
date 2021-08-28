<template>
    <div class="app">
        <h1 class="title">{{ msg }}</h1>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from "./components/School";
    import Student from "./components/Student";

    export default {
        name: "App",
        data() {
            return {
                'msg': '你好啊!',
            }
        },
        components: {
            School,
            Student
        },
    }
</script>

<style scoped lang="css">
    .app {
        background-color: gray;
        padding: 5px;
    }

    .title {
        color: red;
    }
</style>