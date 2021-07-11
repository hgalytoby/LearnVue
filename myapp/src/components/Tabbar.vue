<template>
  <nav>
    <ul>
      <router-link to="/film" custom
                   v-slot="{ href, navigate, isActive }">
        <li :class="{ myActive: isActive }">
          <i class="iconfont icon-folder"></i>
          <a :href="href" @click="navigate">
            film
          </a>
        </li>
      </router-link>
      <router-link to="/cinema" custom
                   v-slot="{ href, navigate, isActive }">
        <li :class="{ myActive: isActive }">
          <i class="iconfont icon-video"></i>
          <a :href="href" @click="navigate">
            cinema
          </a>
        </li>
      </router-link>
      <router-link to="/center" custom
                   v-slot="{ href, navigate, isActive }">
        <li :class="{ myActive: isActive }">
          <i class="iconfont icon-account"></i>
          <a :href="href" @click="navigate">
            center
          </a>
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" scoped>
  .myActive {
    color: red;
    a {
      color: red;
    }
  }
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: white;
    ul {
      display: flex;
      li {
        flex: 1;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>
