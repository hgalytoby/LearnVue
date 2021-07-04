<template>
  <div>Center</div>
</template>

<script>
import auth from '@/tools/auth'

export default {
  name: 'Center',
  methods: {
    isLogin () {
      console.log('in')
      return false
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('局部盤查')
    // next(vm => {
    //   if (vm.isLogin()) {
    //     console.log('123')
    //   } else {
    //     console.log(456)
    //     next('/login')
    //   }
    // })
    if (auth.isLogin()) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style scoped>

</style>
