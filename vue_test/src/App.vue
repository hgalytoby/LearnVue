<template>
    <div class="app">
        <h1 class="title">{{ msg }}, 學生姓名是: {{ studentName }}</h1>
        <!-- 通過父組件給子組件傳遞函數類型的 props: 子給父傳遞資料 -->
        <School :getSchoolName="getSchoolName"></School>
        <!-- 通過父組件給子組件綁定一個自定義事件實現: 子給父傳遞資料 (第一種寫法，使用 @ 或 v-on) -->
        <Student v-on:dudulu="getStudentName"></Student>
        <Student @dudulu="getStudentName"></Student>
        <!-- 只觸發一次 -->
        <Student @dudulu.once="getStudentName"></Student>
        <!-- 綁兩個 -->
        <Student @dudulu="getStudentName" @demo="m1"></Student>
        <!-- 通過父組件給子組件綁定一個自定義事件實現: 子給父傳遞資料 (第二種寫法，使用 ref)-->
        <Student ref="student"></Student>
        <Student ref="student" @click.native="show"></Student>
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
                'studentName': '',
            }
        },
        methods: {
            getSchoolName(name) {
                console.log(`App 收到學校名稱了: ${name}`)
            },
            getStudentName(name, sex, ...params){
                console.log(`App 收到學生資料了: ${name} ${sex}`, 'params: ', params, `f-string params: ${params}`)
                this.studentName = name
            },
            m1(demo){
                console.log('demo', demo)
            },
            show(){
                alert('show')
            }
        },
        components: {
            School,
            Student
        },
        mounted() {
            // setTimeout 等三秒在綁定的，可以發現用 ref 可以更靈活。
            // setTimeout(() => {
            //     this.$refs.student.$on('dudulu', this.getStudentName)
            // }, 3000)
            // 綁定自定義事件
            // this.$refs.student.$on('dudulu', this.getStudentName)
            // 只能觸發一次
            this.$refs.student.$once('dudulu', this.getStudentName)
            // 也可以用箭頭涵式實現，但是不能使用 function 方式實現，因為 this 會變成 student 。
            // this.$refs.student.$on('dudulu', (name, sex, ...params) => {
            //     console.log(`App 收到學生資料了: ${name} ${sex}`, 'params: ', params, `f-string params: ${params}`)
            //     this.studentName = name
            // })
        }
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