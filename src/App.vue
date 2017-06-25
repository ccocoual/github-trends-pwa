<template>
  <div id="app">
    <div class="app-title">
      <h1>{{ appTitle }}</h1>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      appTitle: 'Github Trends',
    };
  },
};
</script>

<style>
@import './main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body {
  margin: 0;
}
.app-title {
  position: fixed;
  text-align: center;
  height: 65px;
  width: 100%;
  margin: 0 auto;
  top: 0;
  width: 100%;
  z-index: 100;
  text-shadow: -4px 4px 15px #777;
}
h1 {
  margin: 10px;
}
.container {
  max-width: 1000px;
  max-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 65px;
}
</style>
