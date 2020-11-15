// Função construtora
function Produto(nome, preco, desc = 0.15) {
  // disponível publicamente
  this.nome = nome
  this.preco = preco
  this._desc = desc
  
  // disponível somente dentro da função
  let privado = 3

  this.precoFinal = function() {
    return this.preco * (1 - this._desc)
  }
}

// P ex.: adicionar uma funcionalidade a Produto que não existia anteriormente,
// que não foi definida dentro da função construtora
Produto.prototype.log = function() {
  console.log(`Nome: ${this.nome} | Preço: R$${this.preco}`)
}

// Teste meu
Produto.prototype.calcularDesconto = function() {
  return console.log(`Desconto: ${this.preco * this.desc}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
  get: function() {
    return this._desc
  },

  set: function(novoDesc) {
    if (novoDesc >= 0 && novoDesc <= 1) {
      this._desc = novoDesc
    }
  }
})

Object.defineProperty(Produto.prototype, 'descString', {
  get: function() {
    return `${this._desc * 100}% de desconto`
  }
})

p1 = new Produto('Caneta', 10, 0.2)
console.log(p1.nome)
p1.log()
p1.calcularDesconto()

p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())

console.log(p2.desc)
console.log(p2.descString)

p2.desc = 3
console.log(p2.desc)

p2.desc = 0.1
console.log(p2.desc)
