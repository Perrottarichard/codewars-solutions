function sortArray(array) {
  let sorted = array.map(a => a % 2 !== 0 || a === 0 ? a : array.sort((a, b) => b - a))
  console.log(sorted)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))