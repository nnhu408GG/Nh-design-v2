<template>
  <div class="nh-menuitem" @click="resetChecked">
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

    resetChecked() {
      let res = document.querySelector(".nh-menu").contains(this.$el);
      console.log(res);
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
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background-color: #f2f5fc;
    }
  }
}
</style>
