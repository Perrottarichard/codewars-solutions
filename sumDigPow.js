function sumDigPow(a, b) {
  let ans = [];
  for (let i = a; i <= b; i++) {
    if (i < 10) {
      ans.push(i);
    } else {
      let s = i
        .toString()
        .split("")
        .map((x) => +x);
      let target = i;
      let sum = 0;
      for (let j = 1, k = 0; k < s.length; j++, k++) {
        sum += Math.pow(s[k], j);
      }
      if (sum === target) {
        ans.push(i);
      }
    }
  }
  return ans;
}
console.log(sumDigPow(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(90, 100)); //[]
