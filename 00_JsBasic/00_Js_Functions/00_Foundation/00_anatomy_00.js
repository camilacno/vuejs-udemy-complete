// Function declaration

function sayHello() {
  console.log('Olá, mundo! Tem que se livrar da maldição!')
}

sayHello()

function sayHelloTo(name) {
  // console.log('Hello ' + name)
  console.log(`Hello ${name}!`)
}

sayHelloTo('Camila')

function returnHi() {
  return 'Relou, agora vai!'
}

const optimistGreeting = returnHi()
console.log(optimistGreeting)
console.log(returnHi())

function returnHiTo(name) {
  return `Corre que o tempo urge, ${name}!`
}

const runForestRun = returnHiTo('Camila')
console.log(runForestRun)