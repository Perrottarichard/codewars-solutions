function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }
  let maxSum = 0;
  let ans;
  for (let i = 0; i <= strarr.length - k; i++) {
    let s = strarr.slice(i, i + k);
    let sum = 0;
    for (let j = 0; j < s.length; j++) {
      sum += s[j].length;
    }
    if (sum > maxSum) {
      maxSum = sum;
      ans = s.join("");
    }
  }
  return ans;
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);
