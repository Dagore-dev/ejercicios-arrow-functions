const createMultiplicationTable = (n) => {
  const fragment = document.createDocumentFragment()

  for (let i = 0; i <= 10; i++) {
    const li = document.createElement('li')
    li.textContent = `${n} x ${i} = ${n * i}`

    fragment.appendChild(li)
  }

  const ul = document.createElement('ul')
  ul.appendChild(fragment)

  return ul
}

const printMultiplicationTable = (n, element) => {
  const multiplicationTable = createMultiplicationTable(n)

  element.appendChild(multiplicationTable)
}

window.addEventListener('DOMContentLoaded', () => {
  printMultiplicationTable(0, document.getElementById('table-0'))
  printMultiplicationTable(4, document.getElementById('table-4'))
})
