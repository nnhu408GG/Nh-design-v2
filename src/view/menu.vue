<template>
  <div class="introduce-menu">
    <!-- <nh-btn></nh-btn> -->
    <nh-menu>
      <nh-menu-item title="menu-item 1th" @click="routerFn"></nh-menu-item>
      <nh-menu-item title="menu-item 2th" @click="routerFn"></nh-menu-item>

      <nh-submenu title="submenu 1th">
        <nh-menu-item title="submenu item 1th"></nh-menu-item>
        <nh-menu-item title="submenu item 1th"></nh-menu-item>
      </nh-submenu>

      <nh-submenu title="submenu 1th">
        <nh-menu-item title="submenu item 1th"></nh-menu-item>
        <nh-menu-item title="submenu item 1th"></nh-menu-item>
        <nh-menu-item title="submenu item 1th"></nh-menu-item>
      </nh-submenu>
      <nh-menu-item title="menu-item 2th" @click="routerFn"></nh-menu-item>
      <nh-menu-item title="menu-item 2th" @click="routerFn"></nh-menu-item>

      <nh-menu-item title="submenu item 1th"></nh-menu-item>

      <nh-submenu title="submenu 1th">
        <nh-menu-item title="submenu item 1th"></nh-menu-item>
        <nh-menu-item title="submenu item 1th"></nh-menu-item>

        <nh-submenu title="submenu 1th">
          <nh-menu-item title="submenu item 1th"></nh-menu-item>
          <nh-submenu title="submenu 1th">
            <nh-menu-item title="submenu item 1th"></nh-menu-item>
            <nh-menu-item title="submenu item 1th"></nh-menu-item>
            <nh-menu-item title="submenu item 1th"></nh-menu-item>
          </nh-submenu>
          <nh-menu-item title="submenu item 1th"></nh-menu-item>
        </nh-submenu>

        <nh-submenu title="submenu 1th">
          <nh-menu-item title="submenu item 1th"></nh-menu-item>
          <nh-menu-item title="submenu item 1th"></nh-menu-item>
          <nh-menu-item title="submenu item 1th"></nh-menu-item>
        </nh-submenu>
      </nh-submenu>

      <nh-menu-item title="submenu item 1th"></nh-menu-item>
    </nh-menu>
  </div>
</template>

<script>
export default {
  methods: {
    routerFn(e) {
      console.log("routerFn", e.target);
    },
  },
};
</script>

<style scoped>
.introduce-menu {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
</style>
