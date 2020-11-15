/*
Functions that operate on another functions, either by taking them as arguments
or by returning them, are called higher order functions.
*/

// Retornar uma função a partir de uma função

// function finalPrice(tax, price) {
//   return price * (1 + tax)
// }
// console.log(finalPrice(0.0875, 25.1))
// console.log(finalPrice(0.0875, 21.7))
// console.log(finalPrice(0.0875, 107.9))

//curring
function finalPrice(tax) {
  return function(price) {
    return price * (1 + tax)
  }
}

// console.log(finalPrice(0.0875)(25.1))
// console.log(finalPrice(0.0875)(21.7))
// console.log(finalPrice(0.0875)(107.9))

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))

