<template>
  <div class="trend">
    <div class="content">
      <div class="meta">
        <Language :language="trend.language" :color="languageColor"></Language>
      </div>
      <a class="title" :href="trend.html_url" target="_blank">{{ trend.name }}</a>
      <span class="description">{{ trend.description }}</span>
    </div>
    <div class="commit-graph">
      <CommitGraph :height="100" :chart-data="allCommits" :chart-color="languageColor" v-if="allCommits"></CommitGraph>
    </div>
  </div>
</template>

<script>
import ColorHash from 'color-hash';
import GithubApi from '@/api/github-api';
import CommitGraph from '@/components/CommitGraph/CommitGraph';
import Language from './Language';

const colorHash = new ColorHash();

export default {
  name: 'trend',
  props: ['trend'],
  components: {
    Language,
    CommitGraph,
  },
  data: () => ({
    languageColor: '',
    allCommits: null,
  }),
  mounted() {
    this.fetchData();
    this.getLanguageColor();
  },
  methods: {
    fetchData() {
      GithubApi.getCommitStats(this.trend.owner.login, this.trend.name)
        .then((resp) => {
          if (resp.data.all) {
            this.allCommits = resp.data.all;
          }
        });
    },
    getLanguageColor() {
      this.languageColor = colorHash.hex(this.trend.language);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.trend {
  display: flex;
  height: 100px;
  padding: 20px;
  text-align: left;
  color: #2c3e50;
}
.content {
  position: absolute;
  max-width: 960px; // Don't know where this value is coming from ¯\_(ツ)_/¯
  * {
    display: block;
  }
  .title {
    font-family: 'Biryani', sans-serif;
    font-size: 22px;
    text-decoration: none;
    color: #3a3838;
  }
  .description {
    font-style: italic;
  }
}
.commit-graph {
  opacity: 0.2;
}
</style>
