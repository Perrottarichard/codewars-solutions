var uniqueInOrder = function (iterable) {
  let solution = []
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      solution.push(iterable[i])
    }
  }
  return solution
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))