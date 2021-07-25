<template>
  nowplaying
  <div class="infinite-list-wrapper">
    <ul class="list"
        v-infinite-scroll="load"
        infinite-scroll-immediate="false"
        infinite-scroll-disabled="disabled">
      <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data)">
        <img :src="data.poster" alt="">
        <h3>{{data.name}}</h3>
<!--        <p>評分{{data.grade}}</p>-->
        <p>主演{{actorsFunc(data.actors)}}</p>
        <p>星數{{data.grade}}</p>
      </li>
    </ul>
    <div v-if="loading">加載中...</div>
    <div v-if="noMore">沒有了</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Nowplaying',
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      total: -1
    }
  },
  computed: {
    noMore () {
      if (this.total === -1) {
        return false
      }
      return this.datalist.length === this.total
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  mounted () {
    console.log('mounted')
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3806358',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16258396044472065977483265"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films
      this.total = res.data.data.total
      console.log(this.total)
    })
  },
  methods: {
    handleChangePage (data) {
      // this.$router.push(`/detail/${id}`)
      this.$router.push({ name: 'detailId', params: { id: data.filmId } })
    },
    actorsFunc (data) {
      // const result = (data.map((item) => item.name)).join(' ')
      if (data) {
        return data.reduce((x, y) => x + y.role + ' ', '')
      }
    },
    load () {
      console.log('load')
      this.loading = true
      this.current++
      axios({
        url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${this.current}&pageSize=10&type=1&k=3806358`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16258396044472065977483265"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
        console.log(this.datalist)
      })
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
