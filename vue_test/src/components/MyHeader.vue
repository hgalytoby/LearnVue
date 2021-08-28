<template>
    <div class="todo-header">
        <input type="text" placeholder="請輸入名稱，按下 Enter 確認" v-model.trim="title" @keyup.enter="add"/>
        <!--        <input type="text" placeholder="請輸入名稱，按下 Enter 確認" v-model="title" @keyup.enter="add"/>-->
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'

    export default {
        name: "MyHeader",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            add() {
                console.log(this.title)
                if (this.title) {
                    this.$emit('addTodo', {id: nanoid(), title: this.title, done: false}, 1, 2, 3)
                    this.title = ''
                    return
                }
                alert('輸入不能為空')
            },
            // add(event) {
            //     console.log(event.target.value)
            //     if (event.target.value) {
            //         this.addTodo({id: nanoid(), title: event.target.value, done: false})
            //         event.target.value = ''
            //         return
            //     }
            //     alert('輸入不能為空')
            // }
        },
    }
</script>

<style scoped>
    /*header*/
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>