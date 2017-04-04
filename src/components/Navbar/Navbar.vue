<template>
  <div class="navbar">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      msg: 'Navbar',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
