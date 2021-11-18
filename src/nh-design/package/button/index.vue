<template>
  <button
    :class="[
      'nh-btn',
      isClick ? 'nh-btn-click' : '',
      disabled ? 'nh-btn-disable' : 'nh-btn-' + type,
    ]"
    :style="{
      borderStyle: dashed ? 'dashed' : 'solid',
      width: block ? '100%' : ''
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
  },
};
</script>

<style scoped>
.nh-btn {
  position: relative;
  margin: 4px;
  padding: 4px 15px;
  border-width: 1px;
  border-color: transparent;
  border-radius: 2px;
  border-color: #d9d9d9;
  box-shadow: 0 2px #0000000b;
  background-color: #fefefe;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji,
    segoe ui emoji, Segoe UI Symbol, noto color emoji;
  transition: 0.3s;
  cursor: pointer;

  /* cursor: not-allowed; */
}

.nh-btn-nomal {
  --nh-btn-nomal-color: #1890ff;
  --nh-btn-nomal-color-hover: #40a9ff;
  --nh-btn-nomal-color-active: #096dd9;
}
.nh-btn-nomal:hover {
  border-color: var(--nh-btn-nomal-color-hover);
  color: var(--nh-btn-nomal-color-hover);
}
.nh-btn-nomal:active {
  border-color: var(--nh-btn-nomal-color-active);
  color: var(--nh-btn-nomal-color-active);
}
.nh-btn-nomal:focus {
  border-color: var(--nh-btn-nomal-color-hover);
  color: var(--nh-btn-nomal-color-hover);
}

.nh-btn-primary {
  --nh-btn-primary-color: #1890ff;
  --nh-btn-primary-color-hover: #40a9ff;
  --nh-btn-primary-color-active: #096dd9;
  border-color: var(--nh-btn-primary-color);
  background-color: var(--nh-btn-primary-color);
  color: #fefefe;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
}
.nh-btn-primary:hover {
  border-color: var(--nh-btn-primary-color-hover);
  background-color: var(--nh-btn-primary-color-hover);
}
.nh-btn-primary:active {
  border-color: var(--nh-btn-primary-color-active);
  background-color: var(--nh-btn-primary-color-active);
}

.nh-btn-danger {
  --nh-btn-danger-color: #ff4d4f;
  --nh-btn-danger-color-hover: #ff7875;
  --nh-btn-danger-color-active: #d9363e;
  border-color: var(--nh-btn-danger-color);
  color: var(--nh-btn-danger-color);
}
.nh-btn-danger:hover {
  border-color: var(--nh-btn-danger-color-hover);
  color: var(--nh-btn-danger-color-hover);
}
.nh-btn-danger:active {
  border-color: var(--nh-btn-danger-color-active);
  color: var(--nh-btn-danger-color-active);
}

/* fadeEffect 褪色效果 */
/* 为了能修改到 --fadeEffectColor 的值 */
.nh-btn-click {
  --fadeEffectColor: #1890ff;
}
.nh-btn-click::after {
  position: absolute;
  inset: 0;
  content: "";
  border-radius: 2px;
  box-shadow: 0 0 0 6px transparent;
  opacity: 0.2;
  animation: fadeEffect 1.4s;
  animation-fill-mode: forwards;
}
@keyframes fadeEffect {
  0% {
    box-shadow: 0 0 0 0px var(--fadeEffectColor);
    opacity: 0.2;
  }
  15% {
    box-shadow: 0 0 0 5px var(--fadeEffectColor);
    opacity: 0.05;
  }
  100% {
    box-shadow: 0 0 0 5px;
    opacity: 0;
  }
}

.nh-btn-disable {
  border-color: #d9d9d9;
  background-color: #f5f5f5;
  color: #00000040;
  box-shadow: none;

  cursor: not-allowed;
}
</style>
