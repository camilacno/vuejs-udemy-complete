const carrinho = [
  {nome: 'Caneta', qtde: 10, preço: 7.99},
  {nome: 'Impressora', qtde: 0, preço: 649.5},
  {nome: 'Caderno', qtde: 4, preço: 27.10},
  {nome: 'Lápis', qtde: 3, preço: 5.82},
  {nome: 'Tesoura', qtde: 1, preço: 19.20},
]

const getTotal = item => item.qtde * item.preço
const totalPorProduto = carrinho.map(getTotal)
console.log(totalPorProduto)

const somarProdutos = (acc, curr) => {
  console.log (acc, curr)
  return acc + curr
} 
const totalGeral = totalPorProduto.reduce(somarProdutos)
console.log(totalGeral)

