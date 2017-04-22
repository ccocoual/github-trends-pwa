<template>
  <a class="trend" v-bind:href="trend.html_url" target="_blank">
    <div class="meta">
      <Language v-bind:language="trend.language"></Language>
    </div>
    <span class="title">{{ trend.name }}</span>
    <span class="description">{{ trend.description }}</span>
  </a>
</template>

<script>
import Language from './Language';

export default {
  name: 'trend',
  props: ['trend'],
  components: {
    Language,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.trend {
  text-decoration: none;
  color: white;
  max-width: 300px;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: -10px;
  border-radius: 10px;
  background: linear-gradient(tomato, lightseagreen);
  box-shadow: 0 0 10px 0 black;
  &:nth-child(even) {

    z-index: 100;
    align-self: flex-end;
  }

}
.title {
  font-weight: 800;
  font-size: 22px;
}
.description {
  font-style: italic;
}

</style>
