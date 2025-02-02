function Pessoa() {
  this.idade = 0

  setInterval(function() {
    this.idade++
    console.log(this.idade)
  }, 1000);
}

// new Pessoa 
// resultado: Nan

function Pessoa2() {
  this.idade = 0

  setInterval(function() {
    this.idade++
    console.log(this.idade)
  }.bind(this), 1000);
}

// new Pessoa2

function Pessoa3() {
  this.idade = 0

  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000);
}

new Pessoa3