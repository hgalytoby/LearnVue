<template>
    <div>
        <button @click="getStudents">取得學生訊息</button>
        <button @click="getCars">取得汽車訊息</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "App",
        methods: {
            getStudents() {
                axios.get('http://localhost:8080/api1/students').then(
                    response => {
                        console.log('請求成功', response, response.data)
                    },
                    error => {
                        console.log('請求失敗', error)
                    }
                )
            },
            getCars() {
                axios.get('http://localhost:8080/api2/cars').then(
                    response => {
                        console.log('請求成功', response, response.data)
                    },
                    error => {
                        console.log('請求失敗', error)
                    }
                )
            },
        }
    }
</script>

<style>
</style>