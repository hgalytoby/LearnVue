<template>
    <div>
        <button>原生的按鈕</button>
        <input type="text">
        <el-row>
            <el-button>默認按鈕</el-button>
            <el-button type="primary">主要按鈕</el-button>
            <el-button type="success">成功按鈕</el-button>
            <el-button type="info">訊息按鈕</el-button>
            <el-button type="warning">警告按鈕</el-button>
            <el-button type="danger">危險按鈕</el-button>
        </el-row>
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="選擇日期">
        </el-date-picker>
        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "App",
        methods: {},
        mounted() {
        },
        components: {}
    }
</script>

<style scoped>
</style>