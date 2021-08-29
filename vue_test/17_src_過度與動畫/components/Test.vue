<template>
    <div>
        <button @click="isShow = !isShow">顯示/隱藏</button>
        <!-- <transition :appear="true"> -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊!</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                isShow: true
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
    }

    /* 不給 name 就要用 vue 預設 */
    .v-enter-active {
        animation: dudulu 1s;
    }

    .v-leave-active {
        animation: dudulu 1s reverse;
    }

    /* 給 name 名字 */
    .hello-enter-active {
        animation: dudulu 1s;
    }

    .hello-leave-active {
        animation: dudulu 1s reverse;
    }

    @keyframes dudulu {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>