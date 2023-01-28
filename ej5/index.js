const parseDecimalToBinary = n => Number(Number(n).toString(2))

const case1 = (parseDecimalToBinary(0) & 0b0) === 0b0
const case2 = (parseDecimalToBinary(1) & 0b1) === 0b1
const case3 = (parseDecimalToBinary(6) & 0b110) === 0b110
const case4 = (parseDecimalToBinary(8) & 0b1000) === 0b1000

const testCases = [case1, case2, case3, case4]
const testResults = testCases.reduce((accumulator, current, index) => {
  return `${accumulator}
  Case ${index} = ${current}`
}, 'Test results')

console.log(testResults)
