<template>
  <div class="graffitiBoard">
    <div class="graffitiBoard__sidebar">
      <nh-menu>
        <nh-menuitem>item-001</nh-menuitem>
        <nh-menuitem>item-002</nh-menuitem>
        <!-- <nh-menuitem>
          <template #menuitem="slotProps">
            <div
              class="my-menuitem"
              :style="{ paddingLeft: slotProps.paddingLeft + 'px' }"
            >
              自定义menuitem-003
            </div>
          </template>
        </nh-menuitem> -->
        <nh-menuitem>item-004</nh-menuitem>
        <nh-submenu title="submenu-1">
          <nh-menuitem>item-1-1</nh-menuitem>
          <nh-menuitem>item-1-2</nh-menuitem>
          <nh-menuitem>item-1-3</nh-menuitem>
        </nh-submenu>

        <!-- <nh-submenu>
          <template #title="slotProps">
            <div
              class="my-submenu-title"
              :style="{ paddingLeft: slotProps.paddingLeft + 'px' }"
            >
              自定义submenu标题-2
            </div>
          </template>
          <nh-menuitem>item-2-1</nh-menuitem>
          <nh-menuitem>item-2-2</nh-menuitem>
          <nh-menuitem>item-2-3</nh-menuitem>
        </nh-submenu> -->

        <nh-submenu title="多级菜单-3">
          <nh-menuitem>item-3-1</nh-menuitem>
          <nh-menuitem>item-3-2</nh-menuitem>
          <nh-submenu title="submenu-3-3">
            <nh-menuitem>3-3-1</nh-menuitem>
            <nh-menuitem>3-3-2</nh-menuitem>
            <nh-submenu title="submenu-3-3-3">
              <nh-menuitem>item-3-3-3-1</nh-menuitem>
              <nh-menuitem>item-3-3-3-2</nh-menuitem>
              <nh-menuitem>item-3-3-3-3</nh-menuitem>
              <nh-menuitem>item-3-3-3-4</nh-menuitem>
            </nh-submenu>
            <nh-submenu title="submenu-3-3-4">
              <nh-menuitem>item-3-3-4-1</nh-menuitem>
              <nh-menuitem>item-3-3-4-2</nh-menuitem>
              <nh-menuitem>item-3-3-4-3</nh-menuitem>
              <nh-menuitem>item-3-3-4-4</nh-menuitem>
            </nh-submenu>
            <nh-menuitem>3-3-5</nh-menuitem>
            <nh-menuitem>3-3-6</nh-menuitem>
          </nh-submenu>
          <nh-menuitem>item-3-4</nh-menuitem>
          <nh-menuitem>item-3-5</nh-menuitem>
        </nh-submenu>

        <nh-submenu title="多级菜单-4">
          <nh-menuitem>item-4-1</nh-menuitem>
          <nh-menuitem>item-4-2</nh-menuitem>
          <nh-menuitem>item-4-3</nh-menuitem>
          <nh-menuitem>item-4-4</nh-menuitem>
        </nh-submenu>

        <nh-submenu title="多级菜单-5">
          <nh-menuitem>item-5-1</nh-menuitem>
          <nh-menuitem>item-5-2</nh-menuitem>
          <nh-menuitem>item-5-3</nh-menuitem>
          <nh-menuitem>item-5-4</nh-menuitem>
        </nh-submenu>
      </nh-menu>
    </div>
    <div class="graffitiBoard__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
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
  .graffitiBoard__sidebar {
    margin-left: 10px;
    padding: 40px 0;
    width: 256px;
    height: 100vh;
    box-sizing: border-box;

    .my-menuitem,
    .my-submenu-title {
      display: flex;
      align-items: center;
      height: 30px;
      background-color: cadetblue;
      margin: 4px 0;
    }
  }
}
</style>
