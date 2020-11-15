const students = [
  {name: 'Jake', score: 6.4},
  {name: 'Susan', score: 8.6},
  {name: 'Emma', score: 9.4},
  {name: 'Peter', score: 9.1},
]

const greatStudent = students.filter(student => student.score >= 9)
console.log(greatStudent)

const getScore = students.map(student => student.score)
console.log(getScore)

const sumScores = getScore.reduce((acc, curr) => acc + curr)
console.log(sumScores)

const avg = (acc, el, i, array) => {
  if (i === array.length - 1) {
    return (acc + el) / array.length
  } else {
    return acc + el
  }
}

const averageScore = getScore.reduce(avg)
console.log(averageScore)

// Apenas dos greatStudents

const greatStudent2 = student => student.score >= 9
const getScore2 = student => student.score

console.log(
  students
    .filter(greatStudent2)
    .map(getScore2)
    .reduce(avg)
)

