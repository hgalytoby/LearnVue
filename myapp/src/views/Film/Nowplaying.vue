<template>
  <div>nowplaying</div>
  <ul>
    <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data)">
      <img :src="data.poster" alt="">
      <h3>{{data.name}}</h3>
      <p>評分{{data.grade}}</p>
      <p>主演{{actorsFunc(data.actors)}}</p>
      <p>星數{{data.grade}}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Nowplaying',
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // axios.get('https://m.maizuo.com/gateway?cityId=110110&pageNum=1&pageSize=10&type=1&k=4271989').then(res => {
    //   console.log(res)
    // })
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3806358',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16258396044472065977483265"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data)
      this.datalist = res.data.data.films
      // console.log(this.datalist)
    })
  },
  methods: {
    handleChangePage (data) {
      // this.$router.push(`/detail/${id}`)
      console.log(data)
      this.$router.push({ name: 'detailId', params: { id: data.filmId } })
    },
    actorsFunc (data) {
      // const result = (data.map((item) => item.name)).join(' ')
      // console.log(result)
      return data.reduce((x, y) => x + y.role + ' ', '')
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    overflow: hidden;
    padding: 10px;
    img {
      float: left;
      width: 100px;
    }
  }
}
</style>
