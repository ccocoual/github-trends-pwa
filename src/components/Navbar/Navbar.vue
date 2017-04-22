<template>
  <div class="navbar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      msg: 'Github Trends',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  position: fixed;
  text-align: center;
  height: 65px;
  width: 100%;
  margin: 0 auto;
  top: 0;
  width: 100%;
  z-index: 100;
  /*background-color: #b2dfdb;
  box-shadow: 0 0 20px 0 gray;*/
  text-shadow: -4px 4px 15px #777;
}
h1 {
  margin: 10px;
}
</style>
