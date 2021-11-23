<template>
  <button
    :class="[
      'nh-btn',
      isClick ? 'nh-btn-click' : '',
      btnClassName,
    ]"
    :style="{
      borderStyle: dashed ? 'dashed' : 'solid',
      width: block ? '100%' : '',
    }"
    @click="click"
  >
    <slot></slot>
  </button>
</template>

<script setup>
export default {
  props: {
    type: {
      type: String,
      default: "nomal",
    },
    dashed: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isClick: true,
      timer: null,
    };
  },

  mounted() {
    this.doubleFont();
  },

  computed: {
    btnClassName() {
      if (this.type === "nomal") {
        if (this.disabled) return 'nh-btn-nomal-disabled'
        return 'nh-btn-nomal'
      }
      else if (this.type === "primary") {
        if (this.disabled) return 'nh-btn-primary-disabled'
        return 'nh-btn-primary'
      }
      else if(this.type === "danger") {
        // if (this.disabled) return 'nh-btn-danger-disabled'
        if (this.disabled) return 'nh-btn-nomal-disabled'
        return 'nh-btn-danger'
      }
      return ''
    }
  },

  methods: {
    click(e) {
      if (this.disabled) return;
      this.type === "danger" &&
        e.target.style.setProperty("--fadeEffectColor", "#ff4d4f");
      this.timer && clearTimeout(this.timer);
      this.isClick = false;
      setTimeout(() => (this.isClick = true), 0);
      this.timer = setTimeout(() => (this.isClick = false), 1400);

      this.$emit("click");
    },

    doubleFont() {
      let el = this.$el;
      if (el && el.innerText.length === 2) {
        let _text = el.innerText;
        el.innerHTML = _text[0] + "&nbsp;" + _text[1];
      }
    },
  },
};
</script>
