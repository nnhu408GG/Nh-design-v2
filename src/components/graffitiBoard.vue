<template>
  <div class="graffitiBoard">
    <div class="graffitiBoard__sidebar">
      <nh-menu>
        <!-- here is title -->
        <nh-menuitem @click="menuRouter('/show-select')">select</nh-menuitem>
        <nh-menuitem @click="menuRouter('/show-menu')">menu</nh-menuitem>
      </nh-menu>
    </div>
    <div class="graffitiBoard__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    menuRouter(path) {
      console.log(path);
      this.$router.push(path);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>

<style lang="less" scoped>
.graffitiBoard {
  display: flex;
  .graffitiBoard__sidebar {
    margin-left: 10px;
    padding: 40px 0;
    // width: 256px;
    height: 100vh;
    box-sizing: border-box;
  }
  .graffitiBoard__content {
    margin: 40px 14px;
    padding: 20px;
    flex: 1;
    box-shadow: 0 0 1px gray;
  }
}
</style>
