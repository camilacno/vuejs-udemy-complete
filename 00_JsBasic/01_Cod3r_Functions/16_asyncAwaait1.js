function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve() , tempo);
  })
}

// esperarPor()
  // .then(() => console.log('Executando promise 1'))
  // .then(esperarPor)
  // .then(() => console.log('Executando promise 2'))
  // .then(esperarPor)
  // .then(() => console.log('Executando promise 3'))

  function retornaValor() {
    return new Promise(resolve => {
      setTimeout(() => resolve(10), 5000);
    })
  }

  function retornaValorRapido() {
    return 20
  }

  async function executar() {
    // let valor = await retornaValor()
    // console.log(valor)
    
    let valor = await retornaValorRapido()
    console.log(valor)

    // esperarPor(1500)
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    // esperarPor(1500)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    // esperarPor(1500)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
  }

  // executar().then(console.log)

  async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
  }

  executarDeVerdade()