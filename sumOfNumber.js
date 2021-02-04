function getSum(a, b) {
  if (a === b) {
    return a;
  }
  let arr = [];
  if (a > b) {
    for (let i = 0; i <= a - b; i++) {
      arr.push(a - i);
    }
  }
  if (a < b) {
    for (let i = 0; i <= b - a; i++) {
      arr.push(b - i);
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}

console.log(getSum(3, 5)); //12
console.log(getSum(5, 3)); //12
console.log(getSum(0, -1)); //-1
console.log(getSum(-5, -5)); // -5
