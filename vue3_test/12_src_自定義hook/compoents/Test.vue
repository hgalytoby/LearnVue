<template>
    <h2>我是 Test 組件</h2>
    <h2>當前滑鼠游標點擊的座標 x: {{ point.x }}, y: {{ point.y }}</h2>
</template>

<script>
    import usePoint from "../hooks/usePoint";

    export default {
        name: "Test",
        setup() {
            let point = usePoint()
            return {
                point
            }
        }
    }
</script>

<style scoped>

</style>