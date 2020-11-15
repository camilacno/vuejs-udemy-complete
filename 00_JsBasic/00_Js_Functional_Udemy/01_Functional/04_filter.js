const numbers = [1, 2, 3, 4, 5, 6]

const greaterThan = numbers.filter(el => el >=3)
console.log(greaterThan)

const greaterThan2 = el => el >= 3
console.log(numbers.filter(greaterThan2))

const even = el => el % 2 === 0
console.log(numbers.filter(even))

const students = [
  {name: 'Jake', score: 6.4},
  {name: 'Susan', score: 8.6},
  {name: 'Emma', score: 9.4},
  {name: 'Peter', score: 9.1},
]

const greatStudents = students
  .filter(student => student.score >= 9)
  .map(student => student.name)
console.log(greatStudents)