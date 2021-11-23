<template>
  <div
    class="nh-card"
    :style="{
      width: width ? width : 'auto',
      display: block ? 'block' : 'inline-block',
    }"
  >
    <div class="nh-card-title">
      {{ title }}
    </div>
    <div class="nh-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
