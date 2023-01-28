const numberOfArguments = (...args) => args.length

const array = []
for (let i = -11; i < 0; i++) {
  console.log(numberOfArguments(...array))
  array.push(i)
}
