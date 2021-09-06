<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="back">後退</button>
            <button @click="forward">前進</button>
            <button @click="testBack">測試一下後退 go</button>
            <button @click="testForward">測試一下前進 go</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        methods: {
            back() {
                this.$router.back()
            },
            forward() {
                this.$router.forward()
            },
            testBack(){
                console.log('testBack')
                this.$router.go(-2)
            },
            testForward(){
                console.log('testForwardgo')
                this.$router.go(3)
            },
        },
    }
</script>

<style scoped>

</style>