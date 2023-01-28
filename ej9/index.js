const firstTwentyEvenNumbers = []

const foo = () => {
  let i = 0

  while (firstTwentyEvenNumbers.length < 20) {
    if (i % 2 === 0) {
      firstTwentyEvenNumbers.push(i)
    }

    i++
  }
}

foo()

console.log(firstTwentyEvenNumbers)
