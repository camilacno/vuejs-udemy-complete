// function funcionarOuNao(valor, chanceErro) {
//   return new Promise((resolve, reject) => {
//     if(Math.random() < chanceErro) {
//       reject('Ocorreu um erro')
//     } else {
//       resolve(valor)
//     }
//   })
// }

// funcionarOuNao('Testando...', 0.5)
//   .then(v => `Valor: ${v}`)
//   .then(
//     v => consol.log(v),
//     err => console.log(`Erro específico: ${err}`)
//   )
//   .then(() => console.log('Quase Fim'))
//   .catch(err => console.log(`Erro: ${err}`))
//   .then(() => console.log('Fim'))

function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log('Temp')
      if(Math.random() < chanceErro) {
        reject('Ocorreu um erro')
      } else {
        resolve(valor)
      }
    } catch (err) {
      reject(err)
    }
  })
}

funcionarOuNao('Testando...', 0.5)
  .then(v => `Valor: ${v}`)
  .then(
    v => consol.log(v),
    // err => console.log(`Erro específico: ${err}`)
  )
  .then(() => console.log('Quase Fim'))
  .catch(err => console.log(`Erro Geral: ${err}`))
  .then(() => console.log('Fim'))