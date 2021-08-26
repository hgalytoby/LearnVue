<template>
    <div class="Student">
        <h2>名字: {{ name }}</h2>
        <h2>性別: {{ sex }}</h2>
        <h2>當前求和為: {{ number }}</h2>
        <button @click="add">點擊 number++</button>
        <button @click="sendStudentName">把學生名送給 App</button>
        <button @click="unbind">解綁事件</button>
        <button @click="death">銷毀當前 Student 組件的實例</button>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                name: 'dudulu',
                sex: '男',
                number: 0,
            }
        },
        methods:{
            add(){
                console.log('add 被調用了')
                this.number ++
            },
            sendStudentName(){
                this.$emit('dudulu', this.name, this.sex, 'x', 'y', 'z')
                this.$emit('demo', 'hello demo')
            },
            unbind(){
                // 所有事件解綁
                this.$off()
                // 解綁多個
                // this.$off(['dudulu', 'demo'])
                // 解綁一個
                // this.$off('dudulu')
            },
            death(){
                this.$destroy() // 銷毀當前 Student 組件的實例，銷毀後所有 Student 實例的自定義事件全都沒效果了。
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
