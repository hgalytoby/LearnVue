<template>
  <div>
    <ul>
      <router-link to="/film/nowplaying" custom
                   v-slot="{ href, navigate, isActive }">
        <li :class="{ active: isActive }">
          <a :href="href" @click="navigate">
            正在熱映
          </a>
        </li>
      </router-link>
      <router-link to="/film/comingsoon" custom
                   v-slot="{ href, navigate, isActive }">
        <li :class="{ active: isActive }">
          <a :href="href" @click="navigate">
            即將上映
          </a>
        </li>
      </router-link>
<!--      <router-link to="/film/nowplaying" tag="li" activeClass="active">正在熱映</router-link>-->
<!--      <router-link to="/film/comingsoon" tag="li" activeClass="active">即將上映</router-link>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'filmheader'
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;

    li {
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: white;
    }
    a {
      text-decoration: none;
    }
  }

  .active {
    a {
      color: red;
    }
    border-bottom: 2px solid red;
  }

  .fixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    background: white;
  }
</style>
