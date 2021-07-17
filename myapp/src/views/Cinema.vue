<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId">
        {{data.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default {
  name: 'Cinema',
  data () {
    return {
      datalist: [],
      mystyle: {
        height: '0px'
      }
    }
  },
  props: ['tabbarHeight'],
  mounted () {
    // axios.get('https://m.maizuo.com/gateway?cityId=110110&pageNum=1&pageSize=10&type=1&k=4271989').then(res => {
    //   console.log(res)
    // })
    this.mystyle.height = `${document.documentElement.clientHeight - 50}px`
    console.log('in', this)
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=4758577',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16258396044472065977483265"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data.data)
      this.datalist = res.data.data.cinemas
      // console.log(this.datalist)
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
      })
    })
  }
}

</script>

<style lang="scss" scoped>
li {
  height: 50px;
}

.cinema {
  overflow: hidden;
  position: relative;
}
</style>
