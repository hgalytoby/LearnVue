<template>
  <div>Detail</div>
</template>

<script>
export default {
  name: 'Detail',
  mounted () {
    // console.log(`route: ${JSON.stringify(this.$route)}`)
    // console.log('route: ', this.$route)
    console.log(`拿到 id: ${this.$route.params.id}`)
  }
}
</script>

<style scoped>

</style>
