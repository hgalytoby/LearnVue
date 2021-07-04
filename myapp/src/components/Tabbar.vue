<template>
  <nav>
    <ul>
      <router-link to="/film" custom
                   v-slot="{ href, navigate, isActive }">
        <li :class="{ myActive: isActive }">
          <a :href="href" @click="navigate">
            film
          </a>
        </li>
      </router-link>
      <router-link to="/cinema" custom
                   v-slot="{ href, navigate, isActive }">
        <li :class="{ myActive: isActive }">
          <a :href="href" @click="navigate">
            cinema
          </a>
        </li>
      </router-link>
      <router-link to="/center" custom
                   v-slot="{ href, navigate, isActive }">
        <li :class="{ myActive: isActive }">
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
</style>
