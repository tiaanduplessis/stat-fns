const { format } = require('./utils')
const fns = require('./fns')

class Stat {
  constructor (data, { sep = ' ' } = {}) {
    this.data = format(data, sep)
  }

  /**
   * Set the data for Stat instance
   * @param {Array|String} data Data for instance
   * @param {String} sep Seperator for data if string
   */
  set (data = [], sep) {
    this.data = format(data, sep)
  }

  /**
   * Sum of all observations
   */
  sum () {
    return fns.sum(this.data)
  }

  /**
   * Mean/Average for all observations
   */
  mean () {
    return fns.mean(this.data)
  }

  min () {
    return fns.min(this.data)
  }

  max () {
    return fns.max(this.data)
  }

  range () {
    return fns.range(this.data)
  }

  median () {
    const position = (this.data.length + 1) / 2

    if (Number.isInteger(position)) {
      return this.data[position - 1]
    }

    const n = Number.parseInt(position)
    return (this.data[n - 1] + this.data[n]) / 2
  }

  frequencies () {
    return this.data.reduce((acc, val) => {
      const key = `${val}`
      if (acc[key]) {
        acc[key] = acc[key] + 1
      } else {
        acc[key] = 1
      }

      return acc
    }, {})
  }

  mode () {
    const frequencies = this.frequencies()
    let highest = 1

    Object.values(frequencies).forEach(val => {
      if (val > highest) {
        highest = val
      }
    })

    return Object.keys(frequencies).filter(current => {
      const val = frequencies[current]
      return val === highest
    })
  }

  sumOfAbsolutes () {
    return this.data.reduce((sum, val) => sum + Math.abs(val), 0)
  }

  locationOfPercentile (percentile) {
    return (this.data.length + 1) * (percentile / 100)
  }

  decile (percentile) {
    if (!percentile || percentile > 100 || percentile < 0) {
      throw new Error(
        `Invalid percentile of ${percentile} provided. Should be percentile in 0 to 100 range`
      )
    }

    const location = this.locationOfPercentile(percentile)
    const i = Math.floor(location)
    const remainder = location % 1

    return this.data[i - 1] + (remainder * (this.data[i] - this.data[i - 1]))
  }

  Q1 () {
    return this.decile(25)
  }

  Q2 () {
    return this.decile(50)
  }

  Q3 () {
    return this.decile(75)
  }

  IQR () {
    return this.Q3() - this.Q1()
  }

  lowerFence () {
    return this.Q1() - (this.IQR() * 1.5)
  }

  upperFence () {
    return this.Q3() + (this.IQR() * 1.5)
  }

  outliers () {
    const lower = this.lowerFence()
    const upper = this.upperFence()
    return this.data.filter(val => val > upper || val < lower)
  }

  sumOfSquares () {
    const mean = this.mean()
    return this.data
      .map(val => Math.pow(val - mean, 2))
      .reduce((sum, val) => sum + val, 0)
  }

  /**
   * Get the variation of the data around the mean.
   * See: https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/variance/
   *
   * @example
   *
   * const s = new Stat('1 4 5 6 7 8')
   * s.variance()
   */
  variance () {
    return this.sumOfSquares() / this.data.length
  }

  /**
   * Measure of how spread out numbers are. Simply the square root of the Variance
   * See: https://www.mathsisfun.com/data/standard-deviation.html
   *
   * const s = new Stat('1 4 5 6 7 8')
   * s.standardDeviation()
   */
  standardDeviation () {
    return Math.sqrt(this.variance())
  }

  /**
   *  Coefficient of variation. Simply the standard deviation of the data set divided by their mean. It is a relative measure of dispersion
   */
  cv () {
    return this.standardDeviation() / this.mean()
  }

  /**
   * Determine the class width for an data set
   */
  classWidth () {
    return this.range() / this.data.length
  }

  /**
   * Determine the number of class intervals for data set. Uses Sturges’s formula
   */
  classInterval () {
    return Math.round(1 + 3.3 * Math.log(this.data.length))
  }
}

module.exports = Object.assign({ Stat: Stat }, fns)
