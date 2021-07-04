<template>
  <div>nowplaying</div>
  <ul>
    <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
      {{data}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Nowplaying',
  data () {
    return {
      datalist: ['1', '2', '3']
    }
  },
  methods: {
    handleChangePage (id) {
      // this.$router.push(`/detail/${id}`)
      this.$router.push({ name: 'detailId', params: { id: id } })
    }
  }
}
</script>

<style scoped>

</style>
