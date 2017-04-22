<template>
  <div class="trends">
    <Trend v-for="trend in trends" v-bind:trend="trend" v-bind:key="trend.id"></Trend>
  </div>
</template>

<script>
import GithubApi from '@/api/github-api';
import Trend from './Trend/Trend';

const trends = GithubApi.getLastWeekTrends();

export default {
  name: 'trends',
  data: () => ({
    trends: {},
  }),
  created() {
    trends.then((resp) => {
      this.trends = resp.data.items;
    });
  },
  components: {
    Trend,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trends {
  display: flex;
  flex-direction: column;
}
</style>
