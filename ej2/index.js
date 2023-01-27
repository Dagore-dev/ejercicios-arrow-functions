// Definir una función de flecha que reciba un valor entero y retorne otro valor entero aleatorio comprendido entre 1 y el valor que llega como parámetro. Asignar dicha función de flecha a una constante para permitir llamarla en sucesivas ocasiones.

const randomBetweenOneAndN = (maxInclusive) => maxInclusive > 1 ? Math.floor((Math.random() * maxInclusive) + 1) : NaN

console.log('Testing... Please wait')

for (let i = -1_000_000; i < 1_000_001; i++) {
  const random = randomBetweenOneAndN(i)

  if (random < 1 || random > i) {
    throw new Error(`In run ${i} "${random}" is out of range`)
  }
}

console.log('All ok')
