const carrinho = [
  {nome: 'Caneta', qtde: 10, preço: 7.99, fragil: true},
  {nome: 'Impressora', qtde: 1, preço: 649.5, fragil: true},
  {nome: 'Caderno', qtde: 4, preço: 27.10, fragil: false},
  {nome: 'Lápis', qtde: 3, preço: 5.82, fragil: false},
  {nome: 'Tesoura', qtde: 1, preço: 19.20, fragil: true},
]

// 1. fragil: true
const fragil = item => item.fragil
const produtosFrageis = carrinho.filter(fragil)
console.log(produtosFrageis)

// 2. qtde * preço -> total
const subtotal = item => item.qtde * item.preço
const totaisGeral = carrinho.map(subtotal)
console.log(totaisGeral)
const totaisFragil = produtosFrageis.map(subtotal)
console.log(totaisFragil)

const total = (acc, curr) => acc + curr
const totalGeral = totaisGeral.reduce(total)
console.log(totalGeral)
const totalFrageis = totaisFragil.reduce(total)
console.log(totalFrageis)

// 3. media totais (exercício real)

const media = carrinho
  .filter(fragil)
  .map(subtotal)
  .reduce((acc, curr) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + curr
    // console.log({qtde: novaQtde, total: novoTotal, media: novoTotal / novaQtde})
    console.log(acc, curr)
    return {
      qtde: novaQtde,
      total: novoTotal,
      media: novoTotal / novaQtde
    }
  }, {qtde: 0, total: 0, media: 0})

  console.log(media)

  // Reduce internamente
  