<template>
    <div class="Student">
        <h2>名字: {{ name }}</h2>
        <h2>性別: {{ sex }}</h2>
        <button @click="sendStudentName">把學生名給 School 組件</button>
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
        methods: {
            sendStudentName() {
                this.$bus.$emit('student', this.name)
            }
        }
    }
</script>

<style scoped lang="less">
    .Student {
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>
