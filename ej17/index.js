const randomIntBetween = (min = 1, max = 100) => max > min ? Math.floor((Math.random() * max) + min) : NaN

const generateOneHundredUniqueRandomNumbers = () => {
  const set = new Set()

  while (set.size < 100) {
    const random = randomIntBetween(1, 1000)
    set.add(random)
  }

  return Array.from(set)
}

console.log(generateOneHundredUniqueRandomNumbers())
