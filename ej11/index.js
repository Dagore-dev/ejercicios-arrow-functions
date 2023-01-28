const getFibonacciSeriesUpTo = n => {
  if (n < 1) {
    throw new Error('Expecter an integer greater than 0')
  }

  if (n === 1) {
    return [0]
  }

  const values = [0, 1]

  for (let i = 2; i < n; i++) {
    values.push(values[i - 2] + values[i - 1])
  }

  return values
}

const getTenFirstElementsOfFibonacciSerie = () => getFibonacciSeriesUpTo(10)
console.log(getTenFirstElementsOfFibonacciSerie())
