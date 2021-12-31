<template>
  <div class="nh-submenu">
    <div class="nh-submenu__title" @click="handleSubmenu">
      <slot name="title" :paddingLeft="paddingLeft">
        <div class="default" :style="{ paddingLeft: paddingLeft + 'px' }">
          {{ title }}
        </div>
      </slot>
    </div>
    <div
      v-if="$slots.default && visible"
      ref="submenu"
      class="nh-submenu__body"
    >
      <slot></slot>
    </div>
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
      el: null,
      isClosing: false /* 处理要关闭的状态标志 */,
      paddingLeft: 0,
    };
  },
  mounted() {
    this.initPaddingLeft();
  },
  methods: {
    initPaddingLeft() {
      let _parent = this.$parent;
      if (_parent.$options.name === "nhTransition") {
        _parent = _parent.$parent;
      }

      let _count = 1;
      while (_parent.$options.name === "nhSubmenu") {
        _count = _count + 1;
        _parent = _parent.$parent;
        if (_parent.$options.name === "nhTransition") {
          _parent = _parent.$parent;
        }
      }
      if (_parent.$options.name === "nhMenu") {
        this.paddingLeft = _count * _parent.$props.paddingUnit;
      }
    },

    handleSubmenu() {
      this.$emit("click", this.visible);

      if (this.visible) {
        this.el = this.$refs.submenu;
        this.el.style.height = this.el.scrollHeight + "px";
        setTimeout(() => {
          this.el.style.height = "0px";
          this.isClosing = true;
          this.el.addEventListener("webkitTransitionEnd", this.handleOpen);
        }, 0);
      } else {
        this.visible = true;
        this.$nextTick(() => {
          this.el = this.$refs.submenu;
          this.el.style.height = "0px";
          this.el.style.height = this.el.scrollHeight + "px";
          this.isClosing = false;
          this.el.addEventListener("webkitTransitionEnd", this.handleOpen);
        });
      }
    },

    /* transition执行完毕后的回调处理，并销毁监听器 */
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

<style lang="less" scoped>
.nh-submenu {
  .nh-submenu__title {
    .default {
      display: flex;
      align-items: center;
      height: 40px;
      font-size: 12px;
      cursor: pointer;

      &:hover {
        background-color: #f2f5fc;
      }

      .icon {
        font-size: 12px;
      }
    }
  }
  .nh-submenu__body {
    position: relative;
    overflow: hidden;
    transition: 0.3s;

    // &::after {
    //   content: "";
    //   position: absolute;
    //   top: 50%;
    //   transform: translateY(-50%);
    //   left: var(--paddingLeft);
    //   width: 2px;
    //   height: calc(100% - 30px);
    //   background-color: rgb(215, 224, 224);
    // }
  }
}
</style>
