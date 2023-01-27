const CelsiusToFahrenheit = (degrees) => (degrees * 9 / 5) + 32

const case1 = CelsiusToFahrenheit(0) === 32
const case2 = CelsiusToFahrenheit(100) === 212
const case3 = Math.round(CelsiusToFahrenheit(-273)) === -459

const test = [ case1, case2, case3 ]

const testResults = test.reduce((accumulator, current, index) => {
  return `${accumulator}
  Case ${index} = ${current}`
}, 'Test results')

console.log(testResults)
