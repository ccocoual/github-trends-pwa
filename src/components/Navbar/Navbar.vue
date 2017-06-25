<template>
  <div class="navbar">
    <div>
      <router-link to="/">
        <i class="material-icons">home</i>
      </router-link>
    </div>
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
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  background-color: white;
  box-shadow: 0 2px 5px 0 gray;
}
h1 {
  margin: 10px;
}
</style>
