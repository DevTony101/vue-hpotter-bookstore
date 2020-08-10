<template>
  <nav class="navbar">
    <router-link to="/" class="brand">
      <span>{{ brand }}</span>
    </router-link>
    <ul class="navbar-nav">
      <slot />
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    props: {
      brand: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

  .brand {
    font-size: xx-large;
    margin: auto 0;
    font-family: "Lobster", cursive;
    color: var(--text-color);
  }
</style>
