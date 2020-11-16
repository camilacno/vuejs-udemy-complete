// Função em JS é First-Class Object (Citizen)
// Higher-order function
// -> Função é um dado

// Criar de forma literal
function fun1() {}

// Amazenar em uma variável
const fun2 = function() {}

// Armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() {console.log('Olá, mundo!')}
obj.falar()

// Passar função como parâmetro para outra função
function run(fun) {
  fun()
}

run(function() {console.log('Executando...')})

// Uma função pode retornar / conter outra função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)