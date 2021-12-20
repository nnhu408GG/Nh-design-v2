<template>
  <div class="nh-submenu">
    <div class="nh-submenu__title" @click="visible = !visible">
      <slot name="title" :paddingLeft="paddingLeft">
        <div class="default" :style="{ paddingLeft: paddingLeft + 'px' }">
          {{ title }}
        </div>
      </slot>
    </div>
    <nh-transition>
      <div v-if="$slots.default && visible" class="nh-submenu__body">
        <slot></slot>
      </div>
    </nh-transition>
  </div>
</template>

<script>
export default {
  name: "nhSubmenu",
  props: {
    title: {
      type: String,
      default: "<lack title>",
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: this.open,
      paddingLeft: 20,
    };
  },
  components: {
    nhTransition: () => import("../transition/transition.vue"),
  },
};
</script>

<style lang="less" scoped>
.nh-submenu {
  .nh-submenu__title {
    .default {
      display: flex;
      align-items: center;
      height: 40px;
      background-color: seagreen;
    }
  }
  .nh-submenu__body {
    overflow: hidden;
    transition: 0.3s;
  }
}
</style>
