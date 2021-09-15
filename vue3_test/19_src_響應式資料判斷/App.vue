<template>
    <h3>我是 App 組件</h3>
</template>

<script>
    import {ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy} from "vue";

    export default {
        name: 'App',
        setup() {
            let car = reactive({name: 'VJR', price: '40W'})
            let sum = ref(0)
            let car2 = readonly(car)
            console.log('isRef(sum)', isRef(sum))
            console.log('isReactive(car)', isReactive(car))
            console.log('isReadonly(car2)', isReadonly(car2))
            console.log('isProxy(car)', isProxy(car))
            console.log('isProxy(car2)', isProxy(car2))
            console.log('isProxy(sum)', isProxy(sum))


            return {
                ...toRefs(car),
                sum,
                car2,
            }
        }
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 10px;
    }
</style>
