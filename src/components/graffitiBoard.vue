<template>
  <div class="graffitiBoard">
    <div class="graffitiBoard__sidebar">
      <nh-collapse
        v-for="(item1, index1) in menuData"
        :key="index1"
        :title="item1.label"
      >
        <nh-collapse
          v-for="(item2, index2) in item1.children"
          :key="index2"
          :title="item2.label"
        >
          <nh-collapse
            v-for="(item3, index3) in item2.children"
            :key="index3"
            :title="item3.label"
          ></nh-collapse>
        </nh-collapse>
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
