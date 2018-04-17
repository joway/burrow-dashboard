import axios from 'axios'

const baseAPI = 'v3/kafka'

const httpGet = (api, params) => (
  axios.get(
    api,
    {
      timeout: 5000,
      params,
    },
  )
)

const httpDel = (api, params) => (
  axios.delete(
    api,
    {
      withCredentials: true,
      timeout: 5000,
      params,
    },
  )
)

export default {
  listClusters() {
    return httpGet(baseAPI)
      .then((resp) => {
        const data = resp.data
        return data.clusters
      })
  },
  listConsumers(cluster) {
    return httpGet(`${baseAPI}/${cluster}/consumer`)
      .then((resp) => {
        const data = resp.data
        return data.consumers
      })
  },
  getConsumer(cluster, consumer) {
    return httpGet(`${baseAPI}/${cluster}/consumer/${consumer}`)
      .then((resp) => {
        const data = resp.data
        return data
      })
  },
  getTopic(cluster, topic) {
    return httpGet(`${baseAPI}/${cluster}/topic/${topic}`)
      .then((resp) => {
        const data = resp.data
        return data
      })
  },
  listTopics(cluster) {
    return httpGet(`${baseAPI}/${cluster}/topic`)
      .then((resp) => {
        const data = resp.data
        return data.topics
      })
  },
  deleteConsumer(cluster, consumer) {
    return httpDel(`${baseAPI}/${cluster}/consumer/${consumer}`)
      .then((resp) => {
        const data = resp.data
        return data
      })
  },
}
