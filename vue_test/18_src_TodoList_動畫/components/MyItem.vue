<template>
<!--    <transition name="todo" appear>-->
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 以下方法也能實現，但是因為 Vue 不允許更改 props 值，Vue 是淺層監測，所以對象內的值被更改不會被發現。 -->
            <!--<input type="checkbox" v-model="todo.done"/>-->
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" v-show="todo.isEdit" :value="todo.title" ref="inputTitle"
                   @blur="handleBlur(todo, $event)">
        </label>

        <button class="btn btn-danger" @click="handleDelete(todo.id)">刪除</button>
        <button class="btn btn-edit" @click="handleEdit(todo)">編輯</button>
    </li>
<!--    </transition>-->
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name: "MyItem",
        // 接收參數,
        methods: {
            // 勾選 or 取消勾選
            handleCheck(todoId) {
                this.$bus.$emit('checkTodo', todoId)
            },
            // 刪除
            handleDelete(todoId) {
                if (confirm('確定刪除嗎?')) {
                    pubsub.publish('deleteTodo', todoId)
                }
                // console.log(todoId)
            },
            // 編輯
            handleEdit(todo) {
                // hasOwnProperty 可以實現，但是 Eslint 不推薦這麼做。
                // if (todo.hasOwnProperty('isEdit'))
                if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
                    console.log('已經有')
                    todo.isEdit = true
                } else {
                    console.log('放入')
                    this.$set(todo, 'isEdit', true)
                }
                // this.$nextTick(function () {
                //     this.$refs.inputTitle.focus()
                // })
                this.$nextTick(() => {
                    this.$refs.inputTitle.focus()
                })
            },
            handleBlur(todo, event) {
                todo.isEdit = false
                if (event.target.value.trim()) {
                    this.$bus.$emit('updateTodo', todo.id, event.target.value)
                } else {
                    alert('輸入不能為空')
                }

            }
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

    li:hover button {
        display: block;
    }


</style>