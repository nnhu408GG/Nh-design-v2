<template>
  <div id="app">
    Welcome to My UI-package
    <br><br>
    <div>
      <nh-button @click="prbtn">Primary Button</nh-button>
      <nh-btn @click="prbtn">hello</nh-btn>
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
