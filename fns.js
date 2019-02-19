
const { format } = require('./utils')

const fns = {
  sum (observations) {
    return format(observations).reduce((sum, val) => sum + val, 0)
  },

  mean (observations) {
    const arr = format(observations)
    return fns.sum(arr) / arr.length
  },

  min (observations) {
    return format(observations)[0]
  },

  max (observations) {
    const arr = format(observations)
    return arr[arr.length - 1]
  },

  range (observations) {
    return fns.max(observations) - fns.min(observations)
  }

}

module.exports = fns
