<template>
  <router-link :to="this.$route.path">
    <a class="menu-item" @click="goToMenu">
      <slot name="lefticon" />
      <slot />
      <slot name="righticon" />
    </a>
  </router-link>
</template>

<script>
  export default {
    name: "DropdownItem",
    inheritAttrs: false,
    props: {
      childMenu: String,
      link: String,
    },
    methods: {
      goToMenu: function() {
        if (this.childMenu) this.$emit("menuchange", this.childMenu);
      },
    },
  };
</script>

<style scoped>
  svg {
    width: 10px;
    height: 10px;
  }
</style>
