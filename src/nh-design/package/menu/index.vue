<template>
  <ul class="nh-menu" :style="{ width }" @click="clickItem">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "255px",
    },
  },

  methods: {
    clickItem(e) {
      let _className = e.target.className;

      switch (_className) {
        case 'nh-menu':
          console.log("this.el");
          break;
        case "nh-submenu__header":
          console.log("header");
          break;
        default:
          break;
      }

      //   if (_className === this.$el) {
      //     return;
      //   } else if (_className === "nh-submenu__header") {
      //     let _children = e.target.parentElement;
      //     console.log("_children", _children.__vue__._data);
      //     _children.__vue__._data.isfocus = true;
      //   } else if (_className === "nh-menu-item") {
      //     let _children = this.$el.children;
      //     for (let i = 0; i < _children.length; i++) {
      //       _children[i].__vue__._data.isfocus = false;
      //     }
      //     e.target.__vue__._data.isfocus = true;
      //   } else {
      //     console.log(e.target);
      //   }
    },
  },
};
</script>

<style scoped>
.nh-menu {
  list-style: none;
  padding: 0;
  margin: 0;

  height: 100%;

  box-sizing: border-box;
  overflow: auto;

  box-shadow: 1px 0 1px #e5e6eb;
}
</style>
