function getAverage(marks) {
  return Math.floor(Math.floor(marks.reduce((a, b) => a + b, 0)) / marks.length)
}
console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8]))