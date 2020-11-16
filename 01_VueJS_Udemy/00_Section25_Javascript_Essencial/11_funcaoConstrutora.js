function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0

  // metodo publico
  this.acelerar = function() {
    if ((velocidadeAtual + delta) <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  // metodo publico
  this.getVelocidadeAtual = function() {
    return velocidadeAtual
  }
}

const uno  = new Carro
console.log(uno.getVelocidadeAtual()) // 0
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // 5

const ferrari = new Carro(350, 20)
console.log(ferrari.getVelocidadeAtual()) // 0
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // 20
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // 40
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // 60

