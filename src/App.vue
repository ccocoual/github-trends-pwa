<template>
  <div id="app">
    <navbar></navbar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>

<style>
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
.main-content {
  max-width: 1000px;
  max-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 65px;
}
</style>
