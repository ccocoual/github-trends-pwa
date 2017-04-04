<template>
  <div class="trends">
    {{ msg }}
  </div>
</template>

<script>
import GithubApi from '@/api/github-api';

GithubApi.getTrends();

export default {
  name: 'trends',
  data() {
    return {
      msg: 'TRENDS',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
