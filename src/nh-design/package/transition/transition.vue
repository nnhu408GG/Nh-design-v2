<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script>
/*
 * 这里不提供 over: hidden
 * 这里不提供 transition: .3s
 */
export default {
  name: "nhTransition",
  data() {
    return {
      scrollHeight: "",
    };
  },
  methods: {
    beforeEnter(el) {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;

      el.style.height = "0px";
      el.style.opacity = 0;
    },

    enter(el) {
      this.scrollHeight = el.scrollHeight;
      el.style.height = el.scrollHeight + "px";

      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
      el.style.opacity = 1;
      el.style.overflow = "hidden";
    },
    afterEnter() {
      // el.style.height = "";
    },

    beforeLeave(el) {
      el.style.opacity = 1;
      this.$nextTick(() => {
        console.log(el.scrollHeight);
        // el.style.height = this.scrollHeight + "px";
        el.style.height = el.scrollHeight + "px";
      });
    },
    leave(el) {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    afterLeave(el) {
      el.style.height = "";
      el.style.opacity = 0;
    },
  },
};
</script>
