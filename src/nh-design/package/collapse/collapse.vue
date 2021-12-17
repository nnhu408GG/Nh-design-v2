<template>
  <div class="nh-collapse">
    <div class="nh-collapse__title" @click="visible = !visible">
      {{ title }}
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div class="nh-collapse__body" v-if="$slots.default && visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "nhCollapse",
  props: {
    title: String,
    isopen: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      visible: this.isopen,
    };
  },
  methods: {
    /* * * */
    beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },
    enter(el) {
      if (el.scrollHeight != 0) {
        el.style.height = el.scrollHeight + "px";
      } else {
        el.style.height = "";
      }
      el.style.opacity = 1;
    },
    afterEnter(el) {
      el.style.height = "";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = 1;
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = "0px";
      }
      el.style.opacity = 0;
    },
    afterLeave(el) {
      el.style.height = "0px";
      el.style.height = "";
    },
  },
};
</script>

<style lang="less" scoped>
.nh-collapse {
  .nh-collapse__title {
    box-shadow: 0 0 1px #728b2e;
    height: 40px;
    line-height: 40px;
    text-indent: 20px;
    cursor: pointer;
    user-select: none;
  }

  .nh-collapse__body {
    overflow: hidden;
    transition: .3s;
  }
}
</style>
