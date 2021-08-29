<template>
    <div>
        <button @click="isShow = !isShow">顯示/隱藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊!</h1>
        </transition>
        <hr>
        <button @click="isShow1 = !isShow1">顯示/隱藏</button>
        <transition-group name="hello" appear>
            <h1 v-show="isShow1" key="1">你好啊!</h1>
            <h1 v-show="!isShow1" key="2">dudulu!</h1>
        </transition-group>
        <hr>
        <button @click="isShow2 = !isShow2">顯示/隱藏</button>
        <transition name="hello" appear>
            <div v-show="isShow2">
                <h1>你好啊!</h1>
                <h1>dudulu!</h1>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                isShow: true,
                isShow1: true,
                isShow2: true,
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
    }

    /* 進入的起點、離開的終點 */
    .hello-enter, .hello-leave-to {
        transform: translateX(-100%);
    }

    .hello-enter-active, .hello-leave-active {
        transition: 1s;
    }

    /* 進入的終點、離開的起點 */
    .hello-enter-to, .hello-leave {
        transform: translateX(0);
    }

</style>