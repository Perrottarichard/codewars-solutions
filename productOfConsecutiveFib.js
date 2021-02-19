function productFib(prod) {
  let fibArr = [];
  let n1 = 0,
    n2 = 1,
    next;
  for (let i = 1; i <= 40; i++) {
    fibArr.push(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
  let ans = [];
  for (let i = 0, j = 1; i < fibArr.length; i++, j++) {
    if (fibArr[i] * fibArr[j] === prod) {
      ans.push(fibArr[i], fibArr[j], true);
      break;
    } else {
      if (fibArr[i] * fibArr[j] > prod) {
        ans.push(fibArr[i], fibArr[j], false);
        break;
      }
    }
  }
  return ans;
}

console.log(productFib(5895)); //[89, 144, false]
console.log(productFib(74049690)); //[6765, 10946, true]
