<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
            <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
        </transition-group>
    </ul>
</template>

<script>
    import MyItem from "./MyItem";

    export default {
        name: "MyList",
        components: {
            MyItem
        },
        props: {
            todos: Array,
        }
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }

    .todo-enter-active {
        animation: dudulu 1s;
    }

    .todo-leave-active {
        animation: dudulu 1s reverse;
    }

    @keyframes dudulu {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>