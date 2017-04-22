<template>
  <div class="trend">
    <a v-bind:href="trend.html_url">{{ trend.name }}</a>
  </div>
</template>

<script>

export default {
  name: 'trend',
  props: ['trend'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
