<template>
  <div class="nh-submenu">
    <div class="nh-submenu__title" @click="visible = !visible">
      <slot name="title" :paddingLeft="paddingLeft">
        <div class="default" :style="{ paddingLeft: paddingLeft + 'px' }">
          {{ title }}
          <!-- <svg class="icon" viewBox="0 0 1638 1024" width="18" height="18">
            <path
              d="M682.3936 156.8768A153.6 153.6 0 0 1 867.5328 143.36l18.432 13.7216 579.1744 512a153.6 153.6 0 0 1-185.344 244.1216L1261.568 899.072 783.9744 477.184 306.5856 899.072a153.6 153.6 0 0 1-200.704 2.6624l-16.1792-15.9744a153.6 153.6 0 0 1-2.4576-200.4992l15.7696-16.384 579.3792-512z"
            ></path>
          </svg> -->
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
      console.log(this.paddingLeft);
    },
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
