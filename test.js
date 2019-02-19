const { Stat, sum, min, max, mean } = require('./')

test('if Stat is defined', () => {
  expect(Stat).toBeDefined()
})

test('if you can get characteristics about observartions', () => {
  const data = '65 72 68 64 60 55 73 71 52 63 61 74 69 67 74 50 4 75 67 62 66 80 64 65'
  const s = new Stat(data)

  const result = {
    data: [4, 50, 52, 55, 60, 61, 62, 63, 64, 64, 65, 65, 66, 67, 67, 68, 69, 71, 72, 73, 74, 74, 75, 80],
    sum: 1521,
    sumOfSquares: 4877.625,
    mean: 63.375,
    min: 4,
    max: 80,
    range: 76,
    median: 65.5,
    Q1: 61.25,
    Q2: 65.5,
    Q3: 71.75,
    IQR: 10.5,
    lowerFence: 45.5,
    upperFence: 87.5,
    outliers: [4],
    variance: 203.234375,
    standardDeviation: 14.25602942617614,
    cv: 0.22494720988049136
  }

  expect(s.data).toEqual(result.data)
  expect(s.sum()).toBe(result.sum)
  expect(s.sumOfSquares()).toBe(result.sumOfSquares)
  expect(s.mean()).toBe(result.mean)
  expect(s.max()).toBe(result.max)
  expect(s.min()).toBe(result.min)
  expect(s.range()).toBe(result.range)
  expect(s.median()).toBe(result.median)
  expect(s.Q1()).toBe(result.Q1)
  expect(s.Q2()).toBe(result.Q2)
  expect(s.Q3()).toBe(result.Q3)
  expect(s.IQR()).toBe(result.IQR)
  expect(s.lowerFence()).toBe(result.lowerFence)
  expect(s.upperFence()).toBe(result.upperFence)
  expect(s.outliers()).toEqual([4])
  expect(s.variance()).toBe(result.variance)
  expect(s.standardDeviation()).toBe(result.standardDeviation)
  expect(s.cv()).toBe(result.cv)
})

test('if you can get characteristics about observartions using standalone functions', () => {
  const data = '65 72 68 64 60 55 73 71 52 63 61 74 69 67 74 50 4 75 67 62 66 80 64 65'

  const result = {
    data: [4, 50, 52, 55, 60, 61, 62, 63, 64, 64, 65, 65, 66, 67, 67, 68, 69, 71, 72, 73, 74, 74, 75, 80],
    sum: 1521,
    sumOfSquares: 4877.625,
    mean: 63.375,
    min: 4,
    max: 80,
    range: 76,
    median: 65.5,
    Q1: 61.25,
    Q2: 65.5,
    Q3: 71.75,
    IQR: 10.5,
    lowerFence: 45.5,
    upperFence: 87.5,
    outliers: [4],
    variance: 203.234375,
    standardDeviation: 14.25602942617614,
    cv: 0.22494720988049136
  }

  expect(sum(data)).toBe(result.sum)
  expect(mean(data)).toBe(result.mean)
  expect(max(data)).toBe(result.max)
  expect(min(data)).toBe(result.min)
})
