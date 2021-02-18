function digPow(n, p) {
  let sum = 0;
  let numString = n.toString();
  for (let i = 0; i < numString.length; i++) {
    sum += Number(Math.pow(numString[i], i + p));
  }
  return (sum / n) % 1 === 0 ? Number(sum / n) : -1;
}
console.log(digPow(89, 1)); //1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); //51
