function dirReduc(arr) {
  let n = 'NORTH'
  let s = 'SOUTH'
  let e = 'EAST'
  let w = 'WEST'

  let solution = []
  let solutionTwo = []

  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] === n && arr[i + 1] === s) || (arr[i] === s && arr[i + 1] === n)) {
      i++
    } else if ((arr[i] === e && arr[i + 1] === w) || (arr[i] === w && arr[i + 1] === e)) {
      i++
    } else
      solution.push(arr[i])
  }
  for (var i = 0; i < solution.length; i++) {
    if ((solution[i] === n && solution[i + 1] === s) || (solution[i] === s && solution[i + 1] === n)) {
      i++
    } else if ((solution[i] === e && solution[i + 1] === w) || (solution[i] === w && solution[i + 1] === e)) {
      i++
    } else
      solutionTwo.push(solution[i])
  }
  return solutionTwo
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) //["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) //["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) //[]