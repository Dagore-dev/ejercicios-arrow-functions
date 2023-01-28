const parseDecimalToBinary = n => Number(Number(n).toString(2))

for (let i = -10; i < 11; i++) {
  console.log(i, '==', parseDecimalToBinary(i))
}
