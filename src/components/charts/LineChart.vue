<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
  watch: {
    data() {
      this.$data._chart.destroy()
      this.renderChart(this.data, this.options)
    },
  },
}
</script>