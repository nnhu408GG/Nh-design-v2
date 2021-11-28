<template>
  <ul class="nh-menu" :style="{ width }">
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
    clickItem() {
     
    },
  },
};
</script>
