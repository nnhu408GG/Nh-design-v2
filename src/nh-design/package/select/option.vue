<template>
  <div class="nh-option">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "nhOption",
};
</script>

<style lang="less" scoped>
.nh-option {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 34px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgb(223, 223, 223);
  }
}
</style>
