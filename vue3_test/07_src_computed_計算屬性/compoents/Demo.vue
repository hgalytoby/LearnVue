<template>
    <h1>一個人的訊息</h1>
    姓 <input type="text" v-model="person.firstName">
    <br>
    名 <input type="text" v-model="person.lastName">
    <br>
    <span>全名: {{ person.fullName }}</span>
    <br>
    全名: <input type="text" v-model="person.fullName">
</template>

<script>
    import {reactive, computed} from 'vue'

    export default {
        name: "Demo",
        // computed: {
        //     fullName() {
        //         return `${this.person.firstName}-${this.person.lastName}`
        //     }
        // },
        setup() {
            // 資料
            let person = reactive({
                firstName: 'lee',
                lastName: 'dudulu',
            })

            // 計算屬性
            // let fullName = computed(() => {
            //     return `${person.firstName}-${person.lastName}`
            // })

            // 計算屬性 => 簡寫 (沒有考慮計算屬性被修改的情況)
            // person.fullName = computed(() => {
            //     return `${person.firstName}-${person.lastName}`
            // })

            // 計算屬性 => 完整 (考慮讀和寫)
            person.fullName = computed({
                get() {
                    return `${person.firstName}-${person.lastName}`
                },
                set(value) {
                    const nameArr = value.split('-')
                    person.firstName = nameArr[0]
                    person.lastName = nameArr[1]
                }
            })

            // 返回一個對象(常用)
            return {
                person,
                // fullName,
            }
        }
    }
</script>

<style scoped>

</style>