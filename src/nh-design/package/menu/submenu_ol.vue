<template>
  <div class="nh-submenu" :class="[{ 'nh-submenu-focus': isfocus }]">
    <div
      :class="['nh-submenu__header']"
      :style="{
        paddingLeft: paddingLeft + 'px',
      }"
      @click="click"
    >
      {{ title }}
    </div>
    <ul
      class="nh-submenu__body"
      :style="{
        height: visiabled ? scrollHeight + 'px' : '0px',
      }"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      PADDINGLEFT: 24,

      paddingLeft: 24,

      isfocus: false,
      visiabled: false,
      scrollHeight: 0,

      // Parent: this.$data,
      // Parent: this.$parent.$children[1].$el,
    };
  },
  computed: {
    Message() {
      return "ok_message";
    },
  },

  watch: {
    "$parent.$data.scrollHeight"(val) {
      console.log(val);
    },
  },

  mounted() {
    // console.log(this.$slots.default);
    this.init();
  },
  methods: {
    init() {
      let _ul = this.$el.children[1];
      this.scrollHeight = _ul.scrollHeight;
    },

    click(e) {
      this.visiabled = !this.visiabled;
      this.setParentHeight();
      this.$emit("click", e);
    },

    setParentHeight() {
      const _parent = this.$el.parentElement;
      if (_parent.className === "nh-submenu__body") {
        if (this.visiabled) {
          this.$parent.$data.scrollHeight += this.scrollHeight;
        } else {
          this.$parent.$data.scrollHeight -= this.scrollHeight;
        }
      }
    },
  },
};
</script>
