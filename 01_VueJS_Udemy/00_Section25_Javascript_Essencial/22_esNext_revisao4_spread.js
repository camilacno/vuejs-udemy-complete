// operador ...rest(juntar)/...spread(espalhar)
// usar rest como parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 6000}
const clone = {ativo: true, ... funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['a', 'b', 'c']
const grupoFinal = ['d', 'e', ...grupoA]
console.log(grupoFinal)