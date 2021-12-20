<template>
  <div class="nh-menu">
    <slot>&lt;lack nh-menu-item or nh-submenu></slot>
  </div>
</template>

<script>
export default {
  name: "nhMenu",
  props: {
    paddingUnit: {
      type: Number,
      default: 20,
    },
  },
};
</script>
