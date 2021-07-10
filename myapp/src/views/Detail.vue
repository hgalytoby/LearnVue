<template>
  <div v-if="filminfo">
    <img :src="filminfo.poster" alt="" class="poster">
    <h2>{{ filminfo.name }}</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  props: ['id'], // 從 router 那邊來的
  data () {
    return {
      filminfo: null
    }
  },
  mounted () {
    // console.log(`route: ${JSON.stringify(this.$route)}`)
    // console.log('route: ', this.$route)
    console.log(`拿到 id: ${JSON.stringify(this.$route.params)}`, this.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.id}&k=2083755`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16258396044472065977483265"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filminfo = res.data.data.film
      console.log(this.filminfo.name)
    })
  }
}
</script>

<style scoped>
.poster {
  width: 100%;
}
</style>
