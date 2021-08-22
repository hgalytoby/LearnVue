<template>
    <div>
        <!-- age="26" 先故意錯著。 -->
        <Student name="dudulu1" sex="男" age="26"></Student>
        <!-- 這是正確的。 -->
        <Student name="dudulu2" sex="男" :age="27"></Student>
        <!-- 這邊故意不放 name，先故意錯著。 -->
        <Student sex="男" :age="27"></Student>
        <!-- 這邊不給年齡，用預設值。 -->
        <Student name="dudulu3" sex="男"></Student>
    </div>
</template>

<script>
    // 引入 School
    import Student from "./components/Student";

    export default {
        name: "App",
        components: {
            Student
        },
    }
</script>

<style scoped>

</style>