function SeriesSum(n) {
  let sum = 0;
  let x = 1;
  let y = 1;
  while (n > 0) {
    sum += x / y;
    n--;
    y += 3;
  }
  return sum.toFixed(2);
}

console.log(SeriesSum(1));
console.log(SeriesSum(3));
