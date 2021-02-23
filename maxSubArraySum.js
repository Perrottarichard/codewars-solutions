var maxSequence = function (arr) {
  if (arr.every((n) => n < 0)) {
    return 0;
  }
  if (arr.every((n) => n > 0)) {
    return arr.reduce((a, b) => a + b, 0);
  }
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
      let s = arr.slice(i, j);
      let sum = s.reduce((a, b) => a + b, 0);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

console.log(maxSequence([])); //0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); //0
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4])); //23
