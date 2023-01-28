const applyVAT = (price, vat = 21) => price * (1 + vat / 100)

console.log('100', applyVAT(100))
console.log('100', applyVAT(100, 4))
console.log('100', applyVAT(22, 4))
