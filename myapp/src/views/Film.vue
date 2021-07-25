<template>
  <div>
    <swiper :key="loopList.length" ref="mySwiper">
      <div class="swiper-slide" v-for="data in loopList" :key="data.bannerId">
        <img :src="data.imgUrl" alt="">
<!--        {{ data }}-->
      </div>
    </swiper>
    <filmheader :class="isFixed ? 'fixed':''"></filmheader>
    <router-view></router-view>
  </div>
</template>

<script>
import swiper from '@/views/Film/Swiper'
import filmheader from '@/views/Film/Filmheader'
import axios from 'axios'
import { ElLoading } from 'element-plus'

export default {
  name: 'Film',
  data () {
    return {
      loopList: [],
      isFixed: false
    }
  },
  mounted () {
    const loadingInstance = ElLoading.service({
      fullscreen: true,
      text: '加載中'
    })
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&type=2&k=3806358',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16258396044472065977483265"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res)
      //  因為沒有資料所以做假資料。
      this.loopList = [
        { imgUrl: 'https://pic.maizuo.com/usr/movie/a3d0ad7e62ec8949e54b814779443050.jpg', bannerId: '1' },
        { imgUrl: 'https://pic.maizuo.com/usr/movie/ddcb6119baa35c5af1969568421d8c49.jpg', bannerId: '2' },
        { imgUrl: 'https://pic.maizuo.com/usr/movie/ee01c879f63513acca3c41a5b43a14bd.jpg', bannerId: '3' },
        { imgUrl: 'https://pic.maizuo.com/usr/movie/5baa9db832da43e91b0bf2056f7d5428.jpg', bannerId: '4' },
        { imgUrl: 'https://pic.maizuo.com/usr/movie/cc85ae3d57256cab1513c15f626a4ffb.jpg', bannerId: '4' }
      ]
      // while (true) {
      //   console.log()
      // }
      // eslint-disable-next-line no-unreachable
      loadingInstance.close()
    })
    window.onscroll = this.handleScroll
  },
  beforeUnmount () {
    window.onscroll = null
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop, this.$refs.mySwiper.$el.offsetHeight)
      if (document.documentElement.scrollTop >= this.$refs.mySwiper.$el.offsetHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },

  components: {
    swiper,
    filmheader
  }
}
</script>

<style lang="scss" scoped>
</style>
