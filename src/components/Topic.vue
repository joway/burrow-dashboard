<template>
  <div>
    <div class="md-flex cluster">
      <div class="md-layout md-alignment-top-center md-gutter">
        <div class="md-layout-item md-small-size-66 md-size-50">
          <bar-chart v-if="chartData" :data="chartData"></bar-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

import ApiService from '@/apis'
import BarChart from '@/components/charts/BarChart'

export default {
  name: 'Topic',
  components: { BarChart },
  data() {
    return {
      chartData: null,
      cluster: this.$route.params.cluster,
      topic: this.$route.params.topic,
    }
  },
  async created() {
    const topicDetail = await ApiService.getTopic(this.cluster, this.topic)
    const offsets = topicDetail.offsets

    const datasets = [
      {
        label: this.topic,
        backgroundColor: '#ADE8F7',
        data: [],
      },
    ]
    const labels = []

    _.forEach(offsets, (offset, index) => {
      labels.push(`p${index}`)

      datasets[0].data.push(offset)
    })

    this.chartData = {
      labels,
      datasets,
    }
  },
  methods: {},
}
</script>
<style lang="sass">
</style>
