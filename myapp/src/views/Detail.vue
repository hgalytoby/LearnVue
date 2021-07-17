<template>
  <div v-if="filminfo">
    <img :src="filminfo.poster" alt="" class="poster">
    <h2>{{ filminfo.name }}</h2>
    <h3>演職人員</h3>
    <detailSwiper perview="4" class="actor-swiper" myclassname="actor-swiper">
      <div class="swiper-slide" v-for="actors in filminfo.actors" :key="actors.avatarAddress">
        <img :src="actors.avatarAddress" alt="">
        <p>{{actors.name}}</p>
        <p>{{actors.role}}</p>
      </div>
    </detailSwiper>
    <h3>劇照</h3>
    <detailSwiper perview="3" class="photo-swiper" myclassname="photo-swiper">
      <div class="swiper-slide" v-for="(photos, index) in filminfo.photos" :key="index">
        <img :src="photos" alt="">
      </div>
    </detailSwiper>
  </div>
</template>

<script>
import axios from 'axios'
import detailSwiper from '@/views/Detail/DetailSwiper'
import bus from '@/bus/index'

export default {
  name: 'Detail',
  props: ['id'], // 從 router 那邊來的
  data () {
    return {
      filminfo: null
    }
  },
  beforeMount () {
    // console.log('hidetabbar')
    bus.emit('maizuo', false)
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
      console.log(this.filminfo)
    })
  },
  beforeUnmount () {
    // console.log('showtabbar')
    bus.emit('maizuo', true)
  },
  components: {
    detailSwiper
  }
}
</script>

<style scoped>
.poster {
  width: 100%;
}
</style>
