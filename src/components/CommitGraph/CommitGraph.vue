<script>
import { Line, mixins } from 'vue-chartjs';
import ChartUtils from '@/utils/graph-utils';

const { reactiveProp } = mixins;
const chartUtils = new ChartUtils();


export default Line.extend({
  mixins: [reactiveProp],
  props: ['chartColor'],
  mounted() {
    this.renderChart({
      labels: this.chartData,
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: chartUtils.transparentize(this.chartColor),
          pointRadius: 0,
          borderColor: this.chartColor,
          borderWidth: 0,
          data: this.chartData,
        },
      ],
    }, {
      maintainAspectRatio: false,
      responsive: true,
      spanGaps: false,
      legend: {
        display: false,
      },
      elements: {
        line: {
          tension: 0.4,
        },
      },
      scales: {
        yAxes: [{
          display: false,
        }],
        xAxes: [{
          display: false,
        }],
      },
      plugins: {
        filler: {
          propagate: false,
        },
        samples_filler_analyser: {
          target: 'chart-analyser',
        },
      },
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
