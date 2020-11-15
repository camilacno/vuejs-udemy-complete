const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
// console.log(caminho)

// function exibirConteudo(err, conteudo) {
function exibirConteudo(_, conteudo) {
  console.log(conteudo.toString())
}

// fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, exibirConteudo)

fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))

