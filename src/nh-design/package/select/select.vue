<template>
  <div class="nh-select" ref="nhSelect" :style="{ width }">
    <div class="nh-select__input">
      <input type="text" :placeholder="placeholder" />
    </div>
    <nh-transition>
      <div class="nh-select__dropdown" v-if="visible">
        <slot></slot>
      </div>
    </nh-transition>
  </div>
</template>

<script>
import nhTransition from "../transition/transition.vue";
export default {
  name: "nhSelect",
  props: {
    placeholder: String,
    width: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      visible: true,
    };
  },

  mounted() {
    window.addEventListener("click", this.addEventListenerClick);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.addEventListenerClick);
  },

  methods: {
    addEventListenerClick(e) {
      this.visible = this.$refs.nhSelect.contains(e.target) ? true : false;
      console.log(this.addEventListenerClick);
    },
  },

  components: {
    nhTransition,
  },
};
</script>

<style lang="less" scoped>
.nh-select {
  width: 200px;
  position: relative;
  .nh-select__input {
    display: flex;
    justify-content: center;
    height: 40px;
    box-shadow: 0 0 1px gray;
    & > input {
      width: 100%;
    }
  }

  .nh-select__dropdown {
    // position: absolute;
    // left: 50%;
    // transform: translateX(-50%);
    // display: flex;
    // justify-content: center;

    padding: 12px 0;
    transition: 0.3s;
    transition: 1s;
    background-color: rgb(207, 207, 207);

    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    // padding: 4px 0;
    border-radius: 4px;

    background-color: var(--bgColor);
    box-shadow: 0 0 3px #00000091;
    transition: 0.3s;
    // overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: calc(100%);
      left: 50%;
      transform: translateX(-50%);
      border-style: solid;
      border-color: transparent;
      border-bottom-color: var(--bgColor);
      border-width: 0 5px 7px 5px;
    }
  }
}
</style>
