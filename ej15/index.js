/**
 * @param {string} str
 */
const reverseText = str => {
  const splitted = str.split('')
  const reversed = splitted.reverse()

  return reversed.join('')
}

console.log('Hola', reverseText('Hola'))
console.log('Hola Don Pepito, hola Don José', reverseText('Hola Don Pepito, hola Don José'))
