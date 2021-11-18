<template>
  <div id="app">
    Welcome to My UI-package
    <br><br>
    <div>
      <nh-button type="primary" @click="prbtn">Primary Button</nh-button>
      <nh-button @click="prbtn">Default Button</nh-button>
      <nh-btn type="danger" @click="prbtn">Danger Default</nh-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    prbtn() {
      console.log(11111);
    }
  }
}
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
