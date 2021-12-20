<template>
  <div class="nh-menuitem">
    <div
      v-if="$slots.default"
      class="default"
      :style="{ paddingLeft: paddingLeft + 'px' }"
    >
      <slot>&lt;lack title></slot>
    </div>
    <slot name="menuitem" :paddingLeft="paddingLeft"></slot>
  </div>
</template>

<script>
export default {
  name: "nhMenuitem",
  data() {
    return {
      paddingLeft: 20,
    };
  },

  mounted() {
    this.initPaddingLeft();
  },

  methods: {
    initPaddingLeft() {
      let _parent = this.$parent;
      /* if (_parent.$options.name === "nhTransition") {
        _parent = _parent.$parent;
      }

      let _count = 1;
      while (_parent.$options.name === "nhSubmenu") {
        _count = _count + 1;
        _parent = _parent.$parent;
        if (_parent.$options.name === "nhTransition") {
          _parent = _parent.$parent;
        }
      } */

      let _count = 1;
      do {
        _parent = _parent.$parent;
        _count = _count + 1;
        if (_parent.$options.name === "nhTransition") {
          _parent = _parent.$parent;
        }
      } while (_parent.$options.name === "nhSubmenu");

      if (_parent.$options.name === "nhMenu") {
        this.paddingLeft = _count * _parent.$props.paddingUnit;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.nh-menuitem {
  .default {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: rgb(121, 172, 143);
  }
}
</style>
