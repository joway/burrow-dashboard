<template>
  <div>
    <div class="md-flex">
      <div class="md-layout md-alignment-top-center">
        <div class="md-layout-item md-size-25">
          <md-field>
            <label for="cluster">Kafka Cluster</label>
            <md-select v-model="cluster" name="cluster" id="cluster" @md-selected="watchSelect" :placeholder="cluster">
              <md-option v-for="c in clusters" :key="c" :value="c">{{ c }}</md-option>
            </md-select>
          </md-field>
          <router-link :to="`/${cluster}`">
            <md-button class="md-dense md-raised md-primary confirm-btn">Enter</md-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '@/apis'

export default {
  name: 'Home',
  data() {
    return {
      cluster: this.$local.get('burrow-cluster') || null,
      clusters: [],
    }
  },
  async created() {
    this.clusters = await ApiService.listClusters()
  },
  methods: {
    watchSelect(v) {
      this.$local.set('burrow-cluster', v)
    },
  },
}
</script>
<style lang="sass">
.confirm-btn
  float: right;
</style>
