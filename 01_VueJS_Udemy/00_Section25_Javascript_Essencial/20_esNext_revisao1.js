// let e const
{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a) // ok
// console.log(b) // erro

// Template string
// OK

// Destructuring
// const [l, e, ...rest] = 'Cod3r'
// console.log(l, e, rest)
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)
const [x, , y] = [1, 2, 3]
console.log(x, y)
const {idade: i, nome} = {nome: 'Ana', idade: 39}
console.log(i, nome)