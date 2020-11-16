let comparaComThis = function(param) {
  console.log(this === param)
}

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false

// this aponta para o objeto global tanto no node quanto no browser
// quando em arrow function aponta para o objeto corrente, arquivo no qual
// a função foi definida

comparaComThisArrow(module.exports) // true
comparaComThisArrow(this) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
// arrow => this aponta para o objeto/contexto em que a função foi escrita
comparaComThisArrow(module.exports) // true






