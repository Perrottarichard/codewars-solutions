function findOutlier(integers) {
  let evenOrOdd = integers.filter(i => i % 2 === 0).length
  if (evenOrOdd === 1) {
    let even = integers.filter(i => i % 2 === 0)
    return even[0]
  } else {
    let odd = integers.filter(i => i % 2 !== 0)
    return odd[0]
  }
}
console.log(findOutlier([2, 6, 8, 10, 3]))
console.log(findOutlier([0, 0, 3, 0, 0]))
console.log(findOutlier([1, 1, 0, 1, 1]))