<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination films-swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

Swiper.use([Navigation, Pagination, Autoplay])

export default {
  name: 'Swiper',
  mounted () {
    // var x = new Swiper()
    // eslint-disable-next-line no-new
    new Swiper('.filmswiper', {
      // direction: 'vertical'
      loop: true,
      autoplay: {
        delay: 2000
        // stopOnLastSlide: false,
        // disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}

</script>

<style lang="scss">
  .films-swiper-pagination {
    text-align: right;
  }

  .swiper-wrapper {
    img {
      width: 100%;
    }
  }

  .swiper-pagination-bullet-active {
    background: #fbfd82;
  }
</style>
