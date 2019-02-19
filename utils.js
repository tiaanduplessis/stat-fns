
function sortNumber (a, b) {
  return a - b
}

module.exports = {
  format (val, sep = ' ') {
    if (Array.isArray(val)) {
      return val.map(Number).sort(sortNumber)
    }

    if (typeof val === 'string') {
      return val
        .split(sep)
        .map(Number)
        .sort(sortNumber)
    }

    throw new ReferenceError(
      `formatSample expected a delimter seperated string or array of numbers, but got ${val}`
    )
  }

}
