<template>
  <div class="language" v-if="language">
    <div class="langColor" :style="{ backgroundColor: color }"></div>
    <span>{{ language }}</span>
  </div>
</template>

<script>
export default {
  name: 'language',
  props: ['color', 'language'],
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.language {
  display: flex;
}
.langColor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
