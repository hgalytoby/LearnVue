<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
<!--  <input type="text" ref="mytext">-->
<!--  <button @click="handleAdd">add</button>-->
<!--  <ul>-->
<!--    <li v-for="data in datalist" :key="data">-->
<!--      {{ data }}-->
<!--    </li>-->
<!--  </ul>-->
<!--  <navbar>-->
<!--    <button @click="handleClick">navbar-click</button>-->
<!--  </navbar>-->
<!--  <sidebar v-show="this.isShow">-->
<!--  </sidebar>-->
</template>

<script>
// import navbar from './components/Navbar'
// import sidebar from './components/Sidebar'
import tabbar from './components/Tabbar'
import axios from 'axios'

export default {
  data () {
    return {
      datalist: [],
      isShow: false
    }
  },
  methods: {
    handleAdd () {
      this.datalist.push(this.$refs.mytext.value)
    },
    handleClick () {
      this.isShow = !this.isShow
    }
  },
  mounted () {
    axios.get('/ajax/movieOnInfoList?toekn').then(res => {
      console.log(res.data)
    })
  },
  components: {
    // sidebar,
    // navbar,
    tabbar
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
  }
  li {
    list-style: none;
  }
</style>
