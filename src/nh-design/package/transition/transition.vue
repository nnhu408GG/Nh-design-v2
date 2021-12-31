<template>
  <transition @before-enter="beforeEnter" @before-leave="beforeLeave">
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
      el: null,
      isClosing: false,
    };
  },
  methods: {
    beforeEnter(el) {
      this.el = el;
      this.el.style.height = "0px";
      el.addEventListener(
        "DOMContentLoaded",
        () => {
          console.log("load ok");
        },
        false
      );

      setTimeout(() => {
        el.addEventListener("webkitTransitionEnd", this.handleOpen);
        this.el.style.height = this.el.scrollHeight + "px";
        this.isClosing = false;
      }, 50);
    },

    beforeLeave(el) {
      this.el = el;
      this.el.style.height = this.el.scrollHeight + "px";
      setTimeout(() => {
        this.el.style.height = "0px";
        this.isClosing = true;
        this.el.addEventListener("webkitTransitionEnd", this.handleOpen);
      }, 0);
    },

    handleOpen() {
      if (this.isClosing) {
        this.visible = false;
      } else {
        this.el.style.height = "";
      }
      this.el.removeEventListener("webkitTransitionEnd", this.handleOpen);
      this.el = null;
    },
  },
};
</script>
