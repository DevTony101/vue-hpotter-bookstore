<template>
  <a href="#" class="menu-item" @click="goToMenu">
    <slot name="lefticon" />
    <slot />
    <slot name="righticon" />
  </a>
</template>

<script>
  export default {
    name: "DropdownItem",
    props: {
      childMenu: String,
    },
    methods: {
      goToMenu: function() {
        if (this.childMenu) this.$emit("menuchange", this.childMenu);
      },
    },
  };
</script>

<style scoped></style>
