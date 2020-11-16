const fabricantes = ['Mercedes', 'Audi', 'BMW']

// Callback: passar uma função para outra função e quando determinado evento 
// acontecer essa função vai ser chamada de volta (pode ser chamada somente
// uma vez ou várias vezes, dependendo do contexto)

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))