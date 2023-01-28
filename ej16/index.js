const randomIntBetween = (min = 1, max = 100) => max > min ? Math.floor((Math.random() * max) + min) : NaN

console.log('Testing... Please wait')

for (let i = -1_000_000; i < 1_000_001; i++) {
  const random = randomIntBetween(1, i)
  console.log(random)

  if (random < 1 || random > i) {
    throw new Error(`In run ${i} "${random}" is out of range`)
  }
}

console.log('All ok')
