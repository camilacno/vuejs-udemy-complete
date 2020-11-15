const numbers = [1, 2, 3, 4, 5, 6]

const numbers2 = numbers.map(function(el) {
  return el*2
})

console.log(numbers2)

const students = [
  {name: 'Jake', score: 6.4},
  {name: 'Susan', score: 8.6},
  {name: 'Emma', score: 9.4},
  {name: 'Peter', score: 9.1},
]

const scores = students.map(student => student.score).map(Math.ceil)
console.log(scores)