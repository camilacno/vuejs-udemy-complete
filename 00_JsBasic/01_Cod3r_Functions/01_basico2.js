function bomDia() {
  console.log('Bom dia!')
}

const boaTarde = function() {
  console.log('Boa tarde!')
}

// Passar uma função como param para outra função
function executarQualquerCoisa(fn) {
  fn()
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar uma função a partir de outra

function potencia(base) {
  return function(exp) {
    return Math.pow(base, exp)
  }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const bits8 = potencia(2)(8)
console.log(bits8)