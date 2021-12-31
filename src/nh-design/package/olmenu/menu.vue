<template>
  <div class="nh-menu" :style="{ width }">
    <slot>&lt;lack nh-menu-item or nh-submenu></slot>
  </div>
</template>

<script>
export default {
  name: "nhMenu",
  props: {
    width: {
      type: String,
      default: "200px",
    },
    paddingUnit: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      cache: null,
    };
  },

  methods: {
    resetChecked() {
      console.log("resetChecked");
    },
  },
};
</script>

<style lang="less" scoped>
.nh-menu {
  position: relative;
  height: 100%;
  overflow-y: auto;
  box-shadow: 0 0 1px gray;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
