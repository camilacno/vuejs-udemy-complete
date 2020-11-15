class Produto {
  
  constructor(nome, preco, desc = 0.5) {
    this._nome = nome
    this.preco = preco
    this.desc = desc
  }

  precoFinal() {
    return this.preco * (1 - this.desc)
  }

  // get - getter -> como se fosse um atributo
  get nome() {
    return `Produto: ${this._nome}`
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase()
  }

  get preco() {
    return this._preco
  }

  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco
    }
  }

  get precoFinal() {
    return this.preco * (1 - this.desc)
  }
}

p1 = new Produto('Caneta', 10)
// console.log(p1.nome)
// p1.nome = 'caneta'
console.log(p1.nome)
p1.preco = -20
console.log(p1.preco)

p2 = new Produto('Geladeira', 10000, 0.8)
console.log(p2.preco)
// console.log(p2.precoFinal())
console.log(p2.precoFinal)

console.log(typeof Produto)