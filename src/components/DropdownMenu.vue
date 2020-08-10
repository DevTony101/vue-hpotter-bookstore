<template>
  <div class="dropdown" :style="{ height: getHeight }" ref="dropdownRef">
    <transition name="menu-primary" duration="500" v-on:enter="calcHeight">
      <div class="menu" v-show="activeMenu === 'main'">
        <DropdownItem>
          <span slot="lefticon" class="icon-button">👤</span>
          <template>My Profile</template>
        </DropdownItem>
        <DropdownItem childMenu="settings" @menuchange="setActiveMenu">
          <BaseIcon slot="lefticon" iconName="cog" class="icon-button" />
          <template>Settings</template>
          <BaseIcon slot="righticon" iconName="chevron" class="icon-right" />
        </DropdownItem>
        <DropdownItem childMenu="animals" @menuchange="setActiveMenu">
          <span slot="lefticon" class="icon-button">🦧</span>
          <template>Animals</template>
          <BaseIcon slot="righticon" iconName="chevron" class="icon-right" />
        </DropdownItem>
      </div>
    </transition>
    <transition name="menu-secondary" duration="500" v-on:enter="calcHeight">
      <div class="menu" v-show="activeMenu === 'settings'">
        <DropdownItem childMenu="main" @menuchange="setActiveMenu">
          <BaseIcon
            slot="lefticon"
            iconName="arrow"
            class="icon-button icon-svg"
          />
          <template><h1>Settings</h1></template>
        </DropdownItem>
        <DropdownItem>
          <BaseIcon
            slot="lefticon"
            iconName="bolt"
            class="icon-button icon-svg"
          />
          <template>Mimi is Dumb</template>
        </DropdownItem>
        <hr />
        <DropdownItem>
          <BaseIcon
            slot="lefticon"
            iconName="bolt"
            class="icon-button icon-svg"
          />
          <template><p>Configure alerts</p></template>
        </DropdownItem>
        <DropdownItem>
          <BaseIcon
            slot="lefticon"
            iconName="bolt"
            class="icon-button icon-svg"
          />
          <template><p>Change color theme</p></template>
        </DropdownItem>
      </div>
    </transition>
    <transition name="menu-secondary" duration="500" v-on:enter="calcHeight">
      <div class="menu" v-show="activeMenu === 'animals'">
        <DropdownItem childMenu="main" @menuchange="setActiveMenu">
          <BaseIcon
            slot="lefticon"
            iconName="arrow"
            class="icon-button icon-svg"
          />
          <template><h1>Animals</h1></template>
        </DropdownItem>
        <DropdownItem>
          <span slot="lefticon" class="icon-button icon-svg">🐸</span>
          <template>Frog</template>
        </DropdownItem>
        <DropdownItem>
          <span slot="lefticon" class="icon-button icon-svg">🦄</span>
          <template>Unicorn</template>
        </DropdownItem>
        <DropdownItem>
          <span slot="lefticon" class="icon-button icon-svg">🐔</span>
          <template>Chicken</template>
        </DropdownItem>
      </div>
    </transition>
  </div>
</template>

<script>
  import DropdownItem from "./DropdownItem";
  export default {
    name: "DropdownMenu",
    components: { DropdownItem },
    mounted() {
      this.activeMenu = "main";
      this.height = this.$refs["dropdownRef"].current?.firstChild.offsetHeight;
    },
    data: function() {
      return {
        height: Number(),
        activeMenu: String(),
      };
    },
    computed: {
      getHeight: function() {
        return `${this.height}px`;
      },
    },
    methods: {
      calcHeight: function(el) {
        this.height = el.offsetHeight;
      },
      setActiveMenu: function(menu) {
        this.activeMenu = menu;
      },
    },
  };
</script>

<style scoped></style>
