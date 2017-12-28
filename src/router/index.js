import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cluster from '@/components/Cluster'
import Consumer from '@/components/Consumer'
import Topic from '@/components/Topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:cluster',
      name: 'Cluster',
      component: Cluster,
    }, {
      path: '/:cluster/consumer/:consumer',
      name: 'Consumer',
      component: Consumer,
    }, {
      path: '/:cluster/topic/:topic',
      name: 'Topic',
      component: Topic,
    }, {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
