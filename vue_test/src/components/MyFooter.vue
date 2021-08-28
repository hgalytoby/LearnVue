<template>
    <div v-show="total" class="todo-footer">
        <label>
            <!-- 自己想的菜菜寫法 -->
            第一種<input type="checkbox" :checked="isAll1" @change="checkAll1" v-model="isAllStatus"/>
            <!-- 普通寫法 -->
            第二種<input type="checkbox" :checked="isAll2" @change="checkAll2"/>
            <!-- 比較厲害寫法 -->
            第三種<input type="checkbox" v-model="isAll3"/>
        </label>
        <span><span>已完成{{ doneTotal }}</span> / 全部{{ total }}</span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任務</button>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        data() {
            return {
                isAllStatus: Boolean
            }
        },
        computed: {
            total() {
                return this.todos.length
            },
            doneTotal() {
                return this.todos.reduce((pre, current) => {
                    return pre + (current.done ? 1 : 0)
                }, 0)
            },
            isAll1() {
                this.isAllStatus = this.todos.length === this.doneTotal && this.doneTotal > 0
                return this.todos.length === this.doneTotal && this.doneTotal > 0
            },
            isAll2() {
                return this.todos.length === this.doneTotal && this.doneTotal > 0
            },
            isAll3: {
                get() {
                    return this.todos.length === this.doneTotal && this.doneTotal > 0
                },
                set(value) {
                    this.$emit('checkAllTodo', value)
                }
            },
        },
        methods: {
            checkAll1() {
                this.$emit('checkAllTodo', this.isAllStatus)
            },
            checkAll2(event) {
                this.$emit('checkAllTodo', event.target.checked)
            },
            clearAll() {
                if (confirm('確定清除已完成任務?')) {
                    // this.clearAllTodo()
                    this.$emit('clearAllTodo')
                }
            }
        },
        props: {
            todos: Array,
            // checkAllTodo: Function,
            // clearAllTodo: Function
        },
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>