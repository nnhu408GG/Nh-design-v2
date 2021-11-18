<template>
  <div class="introduce-btn">
    Welcome to My UI-package
    <br /><br />
    <div>
      <nh-button type="primary" @click="clickEffect" block
        >Primary Button</nh-button
      >
      <nh-button @click="clickEffect">Default Button</nh-button>
      <nh-button @click="clickEffect" dashed block>Dashed Button</nh-button>
      <nh-btn type="danger" @click="clickEffect">Danger Default</nh-btn>
      <nh-btn type="danger" @click="clickEffect" dashed>
        Danger Dashed Default
      </nh-btn>

      <nh-btn disabled>Disable</nh-btn>
      <nh-btn dashed disabled>Disable</nh-btn>
    </div>
    <div class="box">
      <nh-btn type="primary" block>P</nh-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickEffect() {
      console.log(11111);
    },
  },
};
</script>

<style scope>
.introduce-btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  width: 100px;
  height: 100px;
  border: 2px #180271 solid;
  /* display: grid; */
  display: flex;
  align-items: center;
}
</style>
