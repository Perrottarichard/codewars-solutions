function findShort(s) {
  let arr = s.split(' ')
  let toNum = []
  let i = 0
  while (i < arr.length) {
    toNum.push(arr[i].length)
    i++
  }
  return Math.min(...toNum)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))