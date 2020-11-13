const numbers = [1, 2, 3, 4, 5, 6]

const total = numbers.reduce(((acc, curr) => acc + curr), 0)
console.log(total)

const average = total / numbers.length
console.log(average)

const avg = (acc, el, i, array) => {
  if (i === array.length - 1) {
    return (acc + el) / array.length
  } else {
    return acc + el
  }
}

const result = numbers.reduce(avg)
console.log(result)