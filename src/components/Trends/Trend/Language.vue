<template>
  <div class="language" v-if="language">
    <div class="langColor" v-bind:style="{ backgroundColor: langColor }"></div>
    <span>{{ language }}</span>
  </div>
</template>

<script>
import ColorHash from 'color-hash';

const colorHash = new ColorHash();

export default {
  name: 'language',
  props: ['language'],
  data: () => ({
    langColor: '',
  }),
  mounted() {
    this.langColor = colorHash.hex(this.language);
  },
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
