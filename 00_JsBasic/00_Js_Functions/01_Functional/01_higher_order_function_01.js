/*
Functions that operate on another functions, either by taking them as arguments
or by returning them, are called higher order functions.
*/

// Passando uma função como parâmetro para outra função
function run(fn) {
  return fn()
}

function sayHello() {
  console.log('Hello world!')
}

run(sayHello)

run(function() {
  console.log('run!')
})

const result = run(Math.random)
console.log(result)