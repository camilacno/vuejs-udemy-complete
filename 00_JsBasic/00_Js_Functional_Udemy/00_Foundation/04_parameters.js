function logParams (a, b, c) {
  console.log(a, b, c)
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)
logParams(1)
logParams()

function defaultParams(a, b, c = 3) {
  console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)

// spread / rest
function logNums(...nums) {
  console.log(Array.isArray(nums))
  for (let i of nums) {
    console.log(i)
  }
}
logNums(1, 2, 3, 4, 5, 6)

function logNums2(...nums) {
  console.log(nums)
}
logNums2(1, 2, 3, 4, 5, 6)

function sumAll(...nums) {
  let sum = 0
  for(let n of nums) {
    sum += n
  }
  return sum
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9))




