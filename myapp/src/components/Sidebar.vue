<template>
  <aside>sidebar
    <slot></slot>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

<style lang="scss" scoped>
  ul {
    li {
      background: #00ccff;
    }
  }
</style>
