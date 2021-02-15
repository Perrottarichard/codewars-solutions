function sumPairs(ints, s) {
  let ans = [];
  for (let i = 0; i < ints.length; i++) {
    for (let j = 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s && j > i) {
        ans.push([ints[i], ints[j], j]);
      }
      if (ans.length === 2) {
        let smaller = ans.sort((a, b) => a[2] - b[2]);
        return [smaller[0][0], smaller[0][1]];
      }
    }
  }
  if (ans.length === 0) {
    return undefined;
  }
  if (ans.length === 1) {
    return [ans[0][0], ans[0][1]];
  }
}
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); //[1,7]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); //[0, -6]
console.log(sumPairs([20, -13, 40], -7)); //undefined
console.log(sumPairs([0, 2, 0], 0)); //[0, 0]
console.log(sumPairs([10, 5, 2, 3, 7, 5, 6, 4, 6, 2, 1], 10)); //[3, 7]
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); //[1, 1]
