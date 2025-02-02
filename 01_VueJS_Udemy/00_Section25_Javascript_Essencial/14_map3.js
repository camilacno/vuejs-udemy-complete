// Map internamente
Array.prototype.map2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    // newArray.push(callback(this[i], i, this))   
    newArray.push(callback(this[i]))   
  }
  return newArray
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lápis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const paraObjeto = elemento => JSON.parse(elemento)
const precos = elemento => elemento.preco

const somentePrecos = carrinho.map2(paraObjeto).map2(precos)
console.log(somentePrecos)