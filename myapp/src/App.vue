<template>
  <div>
    hello vue
    <router-view></router-view>
  </div>
  <input type="text" ref="mytext">
  <button @click="handleAdd">add</button>
  <ul>
    <li v-for="data in datalist" :key="data">
      {{ data }}
    </li>
  </ul>
  <navbar>
    <button @click="handleClick">navbar-click</button>
  </navbar>
  <sidebar v-show="this.isShow">
  </sidebar>
</template>

<script>
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
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
    sidebar,
    navbar
  }
}
</script>

<style lang="scss">
  ul {
    li {
      background: yellow;
    }
  }
</style>
