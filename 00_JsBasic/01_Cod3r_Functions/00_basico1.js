// Function declaration

function bomDia() {
  console.log('Bom dia!')
}

bomDia()

// Function expression

const boaTarde = function() {
  console.log('Boa tarde!')
}

boaTarde()
let x = boaTarde() 
console.log(x) // undefined => função sem retorno

