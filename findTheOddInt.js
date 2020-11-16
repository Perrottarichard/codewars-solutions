function findOdd(A) {
  let sorted = A.sort((a, b) => a - b)
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      i++
    } else {
      return sorted[i]
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) //5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])) //-1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) //5



