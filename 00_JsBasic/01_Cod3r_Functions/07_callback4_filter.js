const carrinho = [
  {nome: 'Caneta', qtde: 10, preço: 7.99},
  {nome: 'Impressora', qtde: 0, preço: 649.5},
  {nome: 'Caderno', qtde: 4, preço: 27.10},
  {nome: 'Lápis', qtde: 3, preço: 5.82},
  {nome: 'Tesoura', qtde: 1, preço: 19.20},
]

const qtdeMaiorQueZero = item => item.qtde > 0
const itensValidos = carrinho.filter(qtdeMaiorQueZero)
console.log(itensValidos)

const getNome = item => item.nome
const nomesItensValidos = itensValidos.map(getNome)
console.log(nomesItensValidos)

// Filter internamente

Array.prototype.meuFilter = function(fn) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArray.push(this[i])
    }
  }
  return novoArray
}

const itensValidos2 = carrinho.meuFilter(qtdeMaiorQueZero)
console.log(itensValidos2)