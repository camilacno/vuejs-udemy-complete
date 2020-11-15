// Arrow function

function potencia(base) {
  return function(exp) {
    return Math.pow(base, exp)
  }
}

const potencia1 = base => exp => Math.pow(base, exp)

const potencia2 = potencia(2)(3)
console.log(potencia2)

