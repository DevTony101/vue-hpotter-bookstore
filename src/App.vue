<template>
  <div id="app">
    <Navbar brand="Harry Books - Tienda Online">
      <NavItem icon="cart" link="/cart" />
      <NavItem icon="bell" :link="this.$route.path" />
      <NavItem :icon="icon" :link="this.$route.path" @click="toggleTheme" />
      <NavItem icon="caret" :link="this.$route.path">
        <DropdownMenu />
      </NavItem>
    </Navbar>
    <router-view />
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import NavItem from "./components/NavItem";
  import DropdownMenu from "./components/DropdownMenu";
  import { mapActions } from "vuex";

  export default {
    name: "App",
    mounted() {
      this.toggleTheme();
    },
    components: { DropdownMenu, NavItem, Navbar },
    methods: mapActions(["toggleTheme"]),
    computed: {
      icon: function() {
        return this.$store.state.colorTheme === "light" ? "moon" : "sun";
      },
    },
  };
</script>

<style>
  @import "./assets/styles/index.css";
</style>
