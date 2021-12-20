<template>
  <div class="graffitiBoard">
    <div class="graffitiBoard__sidebar">
      <nh-collapse title="title">
        <template slot="title">
          <div>html</div>
        </template>
        <div>ok</div>
        <div>ok</div>
        <div>ok</div>
      </nh-collapse>
    </div>
    <div class="graffitiBoard__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          label: "item1",
        },
        {
          label: "item2",
          children: [
            {
              label: "item2-1",
              children: [
                {
                  label: "item2-1-1",
                },
                {
                  label: "item2-1-2",
                },
                {
                  label: "item2-1-3",
                },
                {
                  label: "item2-1-4",
                },
              ],
            },
            {
              label: "item2-2",
            },
            {
              label: "item2-3",
            },
          ],
        },
        {
          label: "item3",
        },
      ],
    };
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
  .graffitiBoard__sidebar {
    width: 256px;
    height: 100vh;
    background-color: #2e8b563f;
  }
}
</style>
