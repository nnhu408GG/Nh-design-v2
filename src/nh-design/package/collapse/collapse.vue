<template>
  <div class="nh-collapse">
    <div class="nh-collapse__title" @click="visible = !visible">
      <slot name="title">
        <div class="defaultTitle">
          {{ title }}
        </div>
      </slot>
    </div>

    <nh-transition>
      <div class="nh-collapse__body" v-if="$slots.default && visible">
        <slot></slot>
      </div>
    </nh-transition>
    
  </div>
</template>

<script>
export default {
  name: "nhCollapse",
  props: {
    title: String,
    isopen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: this.isopen,
    };
  },
  components: {
    nhTransition: () => import("../transition/transition.vue"),
  },
};
</script>

<style lang="less" scoped>
.nh-collapse {
  .nh-collapse__title {
    .defaultTitle {
      box-shadow: 0 0 1px #728b2e;
      height: 40px;
      line-height: 40px;
      text-indent: 20px;
      cursor: pointer;
      user-select: none;
    }
  }

  .nh-collapse__body {
    overflow: hidden;
    transition: 0.3s;
  }
}
</style>
