function duplicateCount(text) {
  let split = text.toLowerCase().split('')
  let sorted = split.sort()
  let arr = []
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      arr.push(sorted[i])
      i++
    } else if (sorted[i] === sorted[i - 1]) {
    } else {
      i++
    }
  }
  return Array.from(new Set(arr)).length
}

// console.log(duplicateCount("abcde")) //0
// console.log(duplicateCount("aabbcde")) //2
// console.log(duplicateCount("aabBcde")) //2
// console.log(duplicateCount("Indivisibility")) //1
console.log(duplicateCount('abcdefABCABa')) // 3