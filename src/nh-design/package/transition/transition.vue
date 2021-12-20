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
  methods: {
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
