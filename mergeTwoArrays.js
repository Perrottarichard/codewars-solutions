function mergeArrays(a, b) {
  let combined = []
  if (a.length >= b.length) {

    for (var i = 0; i < a.length; i++) {
      combined.push(a[i])
      combined.push(b[i])
    }
    return combined.filter(c => c)
  } else {
    for (var i = 0; i < b.length; i++) {
      combined.push(a[i])
      combined.push(b[i])
    }
    return combined.filter(c => c)
  }
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']))
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]))