// Exemplo utilizando os 3 parâmetros

const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(dobro))

const carrinho = [
  {nome: 'Caneta', qtde: 10, preço: 7.99},
  {nome: 'Impressora', qtde: 0, preço: 649.5},
  {nome: 'Caderno', qtde: 4, preço: 27.10},
  {nome: 'Lápis', qtde: 3, preço: 5.82},
  {nome: 'Tesoura', qtde: 1, preço: 19.20},
]

const produtos = carrinho.map(item => item.nome)
console.log(produtos)

const totais = carrinho.map(item => `${item.nome}: total ${item.qtde * item.preço}`)
console.log(totais)

// Map internamente

Array.prototype.meuMap = function(fn) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    const resultado = fn(this[i], i, this)
    novoArray.push(resultado)
  }
  return novoArray
}

const nomes = carrinho.meuMap(item => `${item.nome}`)
console.log(nomes)

