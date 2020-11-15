function gerarNumeroEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]
    // destructuring = array
    // = => vai ser atribuido a
  }
  return new Promise(resolve => {
    setTimeout(() => {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio)
      console.log(aleatorio)
    }, tempo)
  })
}

console.time('promise')

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeroEntre(1, 60, 2000),
    gerarNumeroEntre(1, 60, 4000),
    gerarNumeroEntre(1, 60, 6000),
    gerarNumeroEntre(1, 60, 8000),
    gerarNumeroEntre(1, 60, 10000),
    gerarNumeroEntre(1, 60, 12000),
  ])
}

console.time('promise')

gerarVariosNumeros()
  .then(numeros => console.log(numeros))
  .then(() => {
    console.timeEnd('promise')
  })