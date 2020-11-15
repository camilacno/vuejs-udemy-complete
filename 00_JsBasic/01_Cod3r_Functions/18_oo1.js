// Função construtora
function Produto(nome, preco, desc = 0.15) {
  // disponível publicamente
  this.nome = nome
  this.preco = preco
  this.desc = desc
  
  // disponível somente dentro da função
  let privado = 3

  this.precoFinal = function() {
    return this.preco * (1 - this.desc)
  }
}

p1 = new Produto('Caneta', 10)
console.log(p1.nome)

p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())