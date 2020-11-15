const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function readFile(caminho) {
  return new Promise(function(resolve) {
    fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))
  })
}

readFile(caminho)
  .then(conteudo => conteudo.split('\n'))
  .then(linhas => linhas.join(','))
  .then(conteudo => `O valor final é ${conteudo}`)
  .then(console.log)