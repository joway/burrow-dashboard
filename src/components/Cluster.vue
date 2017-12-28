<template>
  <div>
    <div class="md-flex cluster">
      <div class="md-layout md-alignment-top-center md-gutter">
        <div class="md-layout-item md-size-50">
          <md-list class="md-double-line">
            <md-subheader>
              <h1>Topics</h1>
              <md-chip style="margin-left: 12px;">{{ topics.length }}</md-chip>
            </md-subheader>
            <md-list-item v-for="topic in topics" :key="topic" :to="`/${cluster}/topic/${topic}`">
              <md-icon class="md-primary">bookmark_border</md-icon>
              <span class="md-list-item-text">{{topic}}</span>
            </md-list-item>
          </md-list>
        </div>

        <div class="md-layout-item md-size-50">
          <md-list class="md-double-line">
            <md-subheader>
              <h1>Consumers</h1>
              <md-chip style="margin-left: 12px;">{{ consumers.length }}</md-chip>
            </md-subheader>
            <md-list-item v-for="consumer in consumers" :key="consumer">
              <md-icon class="md-primary" style="display: inline">track_changes</md-icon>
              <span class="md-list-item-text" style="display: inline">
                <router-link :to="`/${cluster}/consumer/${consumer}`">
                  {{consumer}}
                </router-link>
              </span>
              <md-button class="md-raised md-accent" @click="deleteConsumer(cluster, consumer)">Delete</md-button>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

import ApiService from '@/apis'

export default {
  name: 'Cluster',
  data() {
    return {
      cluster: this.$route.params.cluster,
      topics: [],
      consumers: [],
    }
  },
  async created() {
    this.consumers = await ApiService.listConsumers(this.cluster)
    this.consumers = _.filter(this.consumers, v => !v.includes('%'))
    this.topics = await ApiService.listTopics(this.cluster)

    // try to clear useless consumer group
    _.forEach(this.consumers, c => {
      ApiService.getConsumer(this.cluster, c)
    })
  },
  methods: {
    deleteConsumer: async (cluster, consumer) => {
      try {
        await ApiService.deleteConsumer(cluster, consumer)
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>
<style lang="sass">
.confirm-btn
  float: right

.cluster
  margin: 32px
</style>
