let a = 1
console.log(a) // disponível imediatamente

let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(3)
})

p.then(function(valor) {
  console.log(valor)
})

// let np = new Promise(function(cumprirPromessa) {
//   cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
// })

// np
//   .then(valor => valor[0])
//   .then(primeiro => primeiro[0])
//   .then(letra => letra.toLowerCase())
//   .then(letraMinuscula => console.log(letraMinuscula))

function primeiroElemento(array) {
  return array[0]
}

function primeiraLetra(string) {
  return string[0]
}

const letraMinuscula = string => string.toLowerCase()

new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)
