function arrayDiff(a, b) {
  let solved = []
  if (a.length === 0) {
    return []
  }
  else {
    a.forEach(e => {
      if (!b.includes(e)) {
        solved.push(e)
      }
    });
    return solved
  }
}

console.log(arrayDiff([], [4, 5]))
console.log(arrayDiff([3, 4], [3]))
console.log(arrayDiff([1, 8, 2], []))
