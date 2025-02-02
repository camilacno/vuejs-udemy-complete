const alunos = [
  {nome: 'João', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
// tanto resultado (resultado da callback anterior) quanto o bolsista
// (valor atual) precisam dar true
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
