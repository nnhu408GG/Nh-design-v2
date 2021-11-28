<template>
  <li
    :class="['nh-menu-item', { 'nh-menu-item-focus': isfocus }]"
    @click="click"
  >
    {{ title }}
  </li>
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
      isfocus: false,
    };
  },

  methods: {
    click(e) {
      
      this.$emit("click", e);
    },
  },
};
</script>
