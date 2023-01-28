const isValidDNIFormat = dni => /^\d{8}[a-zA-Z]$/.test(dni)

const isValidDNI = dni => {
  const array = 'TRWAGMYFPDXBNJZSQVHLCKE'

  const numbers = dni.substring(0, 8)
  const letter = dni.substring(8).toUpperCase()
  const calculatedNumber = Math.floor(Number(numbers) % 23)

  if (calculatedNumber > 23) {
    return false
  }

  const calculatedLetter = array[calculatedNumber]

  return calculatedLetter === letter
}

const isNotValidDNI = dni => !isValidDNIFormat(dni) || !isValidDNI(dni)

/**
 * @param {string} dni
 * @returns {string}
 */
const getDNILetter = dni => {
  if (isNotValidDNI(dni)) {
    return 'DNI Erróneo'
  }

  return dni.substring(8)
}

console.log(getDNILetter('32086771T'))
console.log(getDNILetter('11111111A'))
console.log(getDNILetter('83011627G'))
