<template>
  <div id="app">
    Welcome to My UI-package
    <br /><br />
    <div>
      <nh-button type="primary" @click="clickEffect">Primary Button</nh-button>
      <nh-button @click="clickEffect">Default Button</nh-button>
      <nh-button @click="clickEffect" dashed>Dashed Button</nh-button>
      <nh-btn type="danger" @click="clickEffect">Danger Default</nh-btn>
      <nh-btn type="danger" @click="clickEffect" dashed
        >Danger Dashed Default</nh-btn
      >
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
