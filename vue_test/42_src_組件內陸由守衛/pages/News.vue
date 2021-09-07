<template>
    <ul>
        <h2 :style="{opacity}">學習 Vue</h2>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                opacity: 1,
            }
        },
        mounted() {
            // this.timer = setInterval(() => {
            //     console.log('timer')
            //     this.opacity -= 0.01
            //     if (this.opacity <= 0) this.opacity = 1
            // }, 16)
        },
        beforeDestroy() {
            // console.log('News 組件即將被銷毀了')
            // clearInterval(this.timer)
        },
        activated() {
            console.log('News 組件被啟用了')
            this.timer = setInterval(() => {
                console.log('timer')
                this.opacity -= 0.01
                if (this.opacity <= 0) this.opacity = 1
            }, 16)
        },
        deactivated() {
            console.log('News 組件被關閉了')
            clearInterval(this.timer)
        },
    }
</script>

<style scoped>

</style>