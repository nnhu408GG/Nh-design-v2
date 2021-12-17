<template>
  <div class="nh-menuitem">
    nh-menuitem
    <slot v-if="$slots.default"></slot>
  </div>
</template>

<script>
export default {
  name: "nhMenuitem",
};
</script>
