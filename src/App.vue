<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary">
          <router-link to="/" class="toolbar-head">
            <img src="/static/img/kafka-logo-1.png" alt="" class="toolbar-logo">
            <span class="md-title">Kafka Burrow Dashboard</span>
          </router-link>
        </md-app-toolbar>
      </md-app>
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default {
  name: 'app',
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 48px;

a
  text-decoration: none !important;
  color: inherit !important;

.toolbar-head
  margin-left: 1%;

.toolbar-logo
  width: 32px;
</style>
