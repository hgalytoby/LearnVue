<template>
    <div class="school">
        <h2>學校: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
        <button @click="sendSchoolName">把學校名送給 App</button>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                name: 'VueVueVue',
                address: 'Taipei',
            }
        },
        methods:{
          sendSchoolName(){
              this.getSchoolName(this.name)
          }
        },
        props:{
            getSchoolName: Function
        }
    }
</script>

<style scoped lang="css">
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>
