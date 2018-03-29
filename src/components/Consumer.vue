<template>
  <div>
    <div class="md-flex cluster">
      <div class="md-layout md-alignment-top-center md-gutter">
        <div class="md-layout-item md-size-50">
          <line-chart v-if="chartData" :data="chartData"></line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import randomColor from 'randomcolor'
import _ from 'lodash'

import ApiService from '@/apis'
import LineChart from '@/components/charts/LineChart'
import utils from '@/utils'

export default {
  name: 'Consumer',
  components: { LineChart },
  data() {
    return {
      chartData: null,
      cluster: this.$route.params.cluster,
      consumer: this.$route.params.consumer,
    }
  },
  async created() {
    await this.syncData()
  },
  methods: {
    async syncData() {
      const consumerDetail = await ApiService.getConsumer(this.cluster, this.consumer)
      const topics = consumerDetail.topics
      const datasets = []
      const labels = []
      let isLabels = false

      _.forEach(topics, (partitions, topic) => {
        _.forEach(partitions, (partition, i) => {
          const dataset = {
            label: `${topic}-p${i}`,
            backgroundColor: randomColor({
              luminosity: 'light',
              alpha: 0.5,
              seed: `${topic}-p${i}`,
            }),
            data: [],
          }
          _.forEach(partition.offsets, offset => {
            if (!isLabels) {
              labels.push(utils.timestampShorten(offset.timestamp))
            }

            dataset.data.push(offset === null ? 0 : offset.lag)
          })

          isLabels = true
          datasets.push(dataset)
        })
      })

      this.chartData = {
        datasets,
        labels,
      }

      setTimeout(this.syncData, 1000 * 10)
    },
  },
}
</script>
<style lang="sass">
</style>
