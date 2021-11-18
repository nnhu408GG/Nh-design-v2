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

<style scoped>
.nh-card {
  margin: 4px;
  /* 设置 inline-block 的元素需要对齐 */
  vertical-align: top;
  border: 1px solid #e5e6eb;
  overflow: hidden;
}

.nh-card-title {
  padding: 0 16px;
  height: 46px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */

  border-bottom: 1px solid #e5e6eb;
  font-weight: bold;
}

.nh-card-body {
  padding: 16px;
  text-align: left;
}
</style>
