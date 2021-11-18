<template>
  <div id="app">
    <!-- Welcome to My UI-package<br /><br /> -->

    <nh-card title="Card.1th">
      Card content <br />
      Card content Card content <br />
      Card content Card content <br />
      Card content
    </nh-card>

    <nh-card title="Card.2th" >
      <nh-card title="Card.2.1th" ></nh-card>
      <nh-card title="Card.2.1th" block></nh-card>
      <nh-card title="Card.2.1th" ></nh-card>
      <nh-card title="Card.2.1th" ></nh-card>
      <nh-card title="Card.2.1th" ></nh-card>
      <nh-card title="Card.2.1th" ></nh-card>
    </nh-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCard: [
        {
          titile: "卡片标题1",
        },
      ],
    };
  },
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
