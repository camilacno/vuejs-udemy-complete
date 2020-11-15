function gerarNumeroEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise((resolve, reject) => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min

    if (numerosProibidos.includes(aleatorio)) {
      reject('Número repetido')
    } else {
      resolve(aleatorio)
    }
  })
}

// async function gerarMegaSena(qtdeNumeros) {
//   const numeros = []
//   for (let _ of Array(qtdeNumeros).fill()) {
//     numeros.push(await gerarNumeroEntre(1, 60, numeros))
//   }
//   return numeros
// }

async function gerarMegaSena(qtdeNumeros) {
  try {
    const numeros = []
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumeroEntre(1, 60, numeros))
    }
    return numeros
    // Resolver uma promessa dentro de uma função async: retornando o valor 
  } catch (err) {
    throw 'Que chato!'
    // Rejeitar uma promise dentro de uma função async: gerando exception (throw)
  }
}

gerarMegaSena(8)
  .then(console.log)
  .catch(console.log)