

<div center>
    <img width="65%" src="./logo.svg" alt="" />>
</div>


[![package version](https://img.shields.io/npm/v/stat-fns.svg?style=flat-square)](https://npmjs.org/package/stat-fns)
[![package downloads](https://img.shields.io/npm/dm/stat-fns.svg?style=flat-square)](https://npmjs.org/package/stat-fns)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/stat-fns.svg?style=flat-square)](https://npmjs.org/package/stat-fns)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A statistics utility library

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Install](#install)
- [Usage](#usage)
- [Docs](#docs)
- [Contribute](#contribute)
- [License](#license)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install stat-fns
$ # OR
$ yarn add stat-fns
```

## Usage

```js
const { Stat } = require('stat-fns')

const s = new Stat('65 72 68 64 60 55 73 71 52 63 61 74 69 67 74 50 4 75 67 62 66 80 64 65')
const s2 = new Stat('132 118 124 109 104 101 125 83 99 131 98 125 97 106 112 92 120 103 111 117 135 143 112 112 116 106 117 119 110 105 128 112 126 105 102')

console.log('=== 1 ===\n')
console.log('mean', s.mean())
console.log('max', s.max())
console.log('min', s.min())
console.log('sum', s.sum())
console.log('range', s.range())
console.log('Q1', s.Q1())
console.log('Q2', s.Q2())
console.log('Q3', s.Q3())
console.log('IQR', s.IQR())
console.log('Outliers', s.outliers())
// === 1 ===
// mean 63.375
// max 80
// min 4
// sum 1521
// range 76
// Q1 61.25
// Q2 65.5
// Q3 71.75
// IQR 10.5
// Outliers [ 4 ]

console.log('=== 2 ===\n')

console.log('mean', s2.mean())
console.log('median', s2.median())
console.log('mode', s2.mode())
console.log('standard deviation', s2.standardDeviation())
console.log('coefficient of variation', s2.cv())
console.log('max', s2.max())
console.log('min', s2.min())
console.log(s2.classInterval(), s2.classWidth())
// === 2 ===
// mean 113
// median 112
// mode [ '112' ]
// standard deviation 12.81293988791911
// coefficient of variation 0.11338884856565584
// max 143
// min 83
```

## Docs

WIP

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    