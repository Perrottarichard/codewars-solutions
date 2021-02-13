function divisors(integer) {
  let ans = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      ans.push(i);
    }
  }
  if (ans.length > 0) {
    return ans;
  } else {
    return `${integer} is prime`;
  }
}

console.log(divisors(12)); //[2, 3, 4, 6]
console.log(divisors(13)); //'13 is prime'
