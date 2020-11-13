// Anonymous function
// function (a, b, c) {
//   return a + b + c
// }

// Parênteses: sintaxe válida
(function (a, b, c) {
  return a + b + c
})

// Function expression
const sum = function (a, b) {
  return a + b
}

const result = sum(9, 72)
console.log(result)

const anotherSum = sum
console.log(sum(2, 3))
