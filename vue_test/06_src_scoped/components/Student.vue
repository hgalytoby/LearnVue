<template>
    <div class="demo">
        <h2 class="title">名字: {{ name }}</h2>
        <h2 class="dudulu">性別: {{ sex }}</h2>
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

<style scoped lang="less">
    .demo {
        background-color: pink;
        .dudulu {
            font-size: 40px;
        }
    }
</style>
