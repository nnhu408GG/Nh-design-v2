<template>
  <div class="nh-submenu" :class="[isfocus ? 'nh-submenu-focus' : '']">
    <div :class="['nh-submenu__header']">
      {{ title }}
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
  },

  data() {
    return {
      isfocus: false,
    };
  },
};
</script>

<style scoped>
.nh-submenu {
  position: relative;
  margin: 4px 0 8px;
  padding: 0 16px 0 48px;

  height: 40px;
  line-height: 40px;
  user-select: none;
  transition: 0.4s;
}

.nh-submenu-focus {
  background-color: #e6f7ff;
  color: #1890ff;
}

.nh-submenu-focus::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-right: 3px solid #1890ff;
  content: "";
  animation: elongateBorder 0.2s;
}

@keyframes elongateBorder {
  from {
    transform: scaleY(0);
  }
}
</style>
