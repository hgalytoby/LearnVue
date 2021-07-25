<template>
  <div>
    <ul>
      <li v-for="data in $store.getters.comingListGetter" :key="data.filmId" @click="handClick(data.isPresale, data.filmId)">
        <img :src="data.poster" alt="">
        <h3>{{data.name}}</h3>
        <p>主演: {{actorsFunc(data.actors)}}</p>
        <p>上映時間: {{premiereAtFunc(data.premiereAt)}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import { h } from 'vue'
export default {
  data () {
    return {
      day_list: ['日', '一', '二', '三', '四', '五', '六']
    }
  },
  name: 'Comingsoon',
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('getComingListAction')
    } else {
      // eslint-disable-next-line no-unused-vars
      console.log(this.$store.state.comingList)
      console.log('使用緩存')
    }
  },
  methods: {
    actorsFunc (data) {
      // const result = (data.map((item) => item.name)).join(' ')
      // console.log(result)
      return data.reduce((x, y) => x + y.name + ' ', '')
    },
    premiereAtFunc (data) {
      data = parseInt(data.toString() + '000')
      const date = new Date(data)
      return `星期${this.day_list[date.getDay()]} ${date.getMonth() + 1}月${date.getDate()}日`
    },
    handClick (isPresale, filmId) {
      if (!isPresale) {
        this.$msgbox({
          title: '提示',
          message: '沒有排期，是否回到首頁?',
          showCancelButton: true,
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              done()
              this.$router.push('/film/nowplaying')
            } else {
              done()
            }
          }
        }).catch(() => {})
      }
      this.$router.push({ name: 'detailId', params: { id: filmId } })
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
