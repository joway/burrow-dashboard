export default {
  timestampShorten: (ts) => {
    const date = new Date(ts)

    const hours = date.getHours()
    const minutes = `0${date.getMinutes()}`
    const seconds = `0${date.getSeconds()}`

    const timeStr = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
    return timeStr
  },
}
