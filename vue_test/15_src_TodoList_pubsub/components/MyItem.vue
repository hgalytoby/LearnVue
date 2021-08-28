<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 以下方法也能實現，但是因為 Vue 不允許更改 props 值，Vue 是淺層監測，所以對象內的值被更改不會被發現。 -->
            <!--<input type="checkbox" v-model="todo.done"/>-->
            <span>{{ todo.title }}</span>
        </label>

        <button class="btn btn-danger" @click="handleDelete(todo.id)">刪除</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: "MyItem",
        // 接收參數,
        methods: {
            handleCheck(todoId) {
                pubsub.publish('checkTodo', todoId)
                // this.checkTodo(todoId)
            },
            handleDelete(todoId){
                if (confirm('確定刪除嗎?')){
                    pubsub.publish('deleteTodo', todoId)
                }
                // console.log(todoId)
            },
        },
        props: {
            todo: Object,
        }
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label {
        float: left;
        cursor: pointer;
    }
    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before {
        content: initial;
    }
    li:last-child {
        border-bottom: none;
    }
    li:hover {
        background-color: #dddddd;
    }
    li:hover button{
        display: block;
    }
</style>