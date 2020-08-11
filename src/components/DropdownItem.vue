<template>
  <router-link to="/">
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
        console.log("dsdsd");
        if (this.childMenu) this.$emit("menuchange", this.childMenu);
      },
    },
  };
</script>

<style scoped></style>
