snail = function (array) {
  let solution = []
  if (array.length === 0) {
    return []
  }
  if (array.length === 1) {
    return array[0]
  }
  let end = 0
  let rStart = 0
  let rEnd = array.length - 1
  let cStart = 0
  let cEnd = array.length - 1

  for (var i = 0; i <= array.length / 2 - 1; i++) {

    for (var r = rStart; r <= rEnd; r++) {
      solution[end++] = array[cStart][r]
    }
    cStart++

    for (var c = cStart; c <= cEnd; c++) {
      solution[end++] = array[c][rEnd]
    }
    rEnd--
    for (var r = rEnd; r >= rStart; r--) {
      solution[end++] = array[cEnd][r]
    }
    cEnd--
    for (var c = cEnd; c >= cStart; c--) {
      solution[end++] = array[c][rStart]
    }
    rStart++
  }

  if (array.length % 2 !== 0) {
    solution[end] = array[rStart][cStart]
  }
  return solution
}

console.log(snail([[]]))
console.log(snail([[1]]))
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))