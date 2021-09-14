<template>
    <input type="text" v-model="keyWord">
    <h3>{{ keyWord }}</h3>
</template>

<script>
    import {ref, customRef} from "vue";

    export default {
        name: 'App',
        components: {},
        setup() {
            // 自定義一個 ref => 名為: myRef
            function myRef(value, delay) {
                let timer
                console.log('myRef', value)
                return customRef((track, trigger) => {
                    return {
                        get() {
                            console.log(`有人從 myRef 這個容器中讀取資料了，我把 ${value}給他了`)
                            track()
                            return value
                        },
                        set(newValue) {
                            console.log(`有人從 myRef 這個容器中的資料了改成${newValue}了`)
                            clearTimeout(timer)
                            timer = setTimeout(() => {
                                value = newValue
                                trigger()
                            }, delay)

                        },
                    }

                })
            }

            // let keyWord = ref('hello') // 使用 Vue 提供的 ref
            let keyWord = myRef('hello', 500) // 使用程式員自定義的 ref
            return {
                keyWord,
            }
        },
    }
</script>

<style scoped>
</style>
