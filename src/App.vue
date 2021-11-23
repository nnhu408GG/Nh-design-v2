<template>
  <div id="app">
   <Menu />
  </div>
</template>

<script>
export default {
  components: {
    Menu: () => import('./view/menu.vue')
  }
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
</style>
