// Filter internamente
Array.prototype.filter2 = function(callback) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])   
    }
  }
  return newArray
}

const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de Plástico', preco: 18.99, fragil: true},
]

const caro = p => p.preco >= 500
const fragil = p => p.fragil

const resultado = produtos.filter2(caro).filter2(fragil)
console.log(resultado)