const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de Plástico', preco: 18.99, fragil: true},
]

console.log(produtos.filter(function (p) {
  return false
}))

const caro = p => p.preco >= 500
const fragil = p => p.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)