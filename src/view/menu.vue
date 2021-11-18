<template>
  <div class="introduce-menu">
    <nh-menu>
      <nh-menu-item title="menu-item 1th" @click="routerFn"></nh-menu-item>
      <nh-menu-item title="menu-item 2th" @click="routerFn"></nh-menu-item>
      <nh-submenu title="submenu 1th"></nh-submenu>
    </nh-menu>
  </div>
</template>

<script>
export default {
  methods: {
    routerFn() {
      //   console.log("routerFn", e.target);
    },
  },
};
</script>

<style scoped>
.introduce-menu {
  width: 100vw;
  height: 30vh;
  padding: 20px;
  box-sizing: border-box;
}
</style>
