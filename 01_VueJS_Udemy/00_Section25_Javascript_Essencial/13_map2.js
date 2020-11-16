const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lápis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const paraObjeto = elemento => JSON.parse(elemento)
const precos = elemento => elemento.preco

const somentePrecos = carrinho.map(paraObjeto).map(precos)
console.log(somentePrecos)