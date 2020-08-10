<template>
  <li class="nav-item">
    <a href="#" class="icon-button" v-on="listeners">
      <BaseIcon :iconName="icon" :class="{ open: isParentMenu && open }" />
    </a>
    <slot v-if="open" />
  </li>
</template>

<script>
  export default {
    name: "NavItem",
    inheritAttrs: false,
    mounted() {
      this.open = false;
    },
    props: {
      icon: {
        type: String,
        required: true,
      },
    },
    data: function() {
      return {
        open: false,
      };
    },
    computed: {
      isParentMenu() {
        return this.$slots.default;
      },
      listeners: function() {
        return {
          click: () => {
            this.open = !this.open;
          },
          ...this.$listeners,
        };
      },
    },
  };
</script>

<style scoped></style>
