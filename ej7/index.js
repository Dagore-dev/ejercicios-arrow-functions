const getMeanFromIntArray = (intArray) => {
  if (intArray.length === 0) {
    throw new Error('Array is empty')
  }

  return intArray.reduce((accumulator, current) => accumulator + current) / intArray.length
}

const a1 = [1, 2, 3, 4, 5]
const a1Mean = getMeanFromIntArray(a1)

const a2 = [1, 1, 1]
const a2Mean = getMeanFromIntArray(a2)

const a3 = [-7]
const a3Mean = getMeanFromIntArray(a3)

console.log(a1, 'Mean =', a1Mean)
console.log(a2, 'Mean =', a2Mean)
console.log(a3, 'Mean =', a3Mean)
