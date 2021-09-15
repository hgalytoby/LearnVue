<template>
    <div>
        <button @click="isShow=true">點擊彈出視窗</button>
<!--        <teleport to="#dudulu">-->
        <teleport to="#body">
            <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h3>我是一個彈窗</h3>
                    <h4>內容</h4>
                    <h4>內容</h4>
                    <h4>內容</h4>
                    <button @click="isShow=false">關閉彈窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: "Dialog",
        setup() {
            let isShow = ref(false)
            return {
                isShow
            }
        }
    }
</script>

<style scoped>
    .dialog {
        text-align: center;
        width: 300px;
        height: 300px;
        background-color: green;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>