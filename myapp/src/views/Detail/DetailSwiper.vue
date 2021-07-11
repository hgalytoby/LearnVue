<template>
  <div class="swiper-container detail-swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
<!--    <div class="swiper-pagination actors-swiper-pagination"></div>-->
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

Swiper.use([Navigation, Pagination, Autoplay])

export default {
  name: 'DetailSwiper',
  props: ['perview', 'myclassname'],
  mounted () {
    // var x = new Swiper()
    // eslint-disable-next-line no-new
    new Swiper(`.${this.myclassname}`, {
      slidesPerView: this.perview,
      spaceBetween: this.myclassname === 'actor-swiper' ? 20 : 10,
      freeMode: true
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true
      // }
      // loop: true,
      // autoplay: {
      //   delay: 2000
      //   // stopOnLastSlide: false,
      //   // disableOnInteraction: false
      // }
    })
  }
}

</script>

<style lang="scss">
  .swiper-wrapper {
    img {
      width: 100%;
    }
  }
  .swiper-pagination-bullet-active {
    background: #82d2fd;
  }
</style>
