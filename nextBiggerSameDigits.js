function nextBigger(n) {
  if (n < 10) {
    return -1;
  }
  if (n < 100 && n > 9) {
    return Number(n.toString().split("").reverse().join(""));
  }
  let digits = n.toString().split("");
  let bigger = [];
  for (let i = digits.length - 1, j = digits.length - 2; i >= 0; i--, j--) {
    if (digits[i] > digits[j]) {
      let prev = digits.slice(0, j);
      bigger.push(digits[j]);
      bigger.unshift(digits[i]);
      bigger.unshift(...prev);
      break;
    } else if (digits[i] <= digits[j] || !digits[j]) {
      bigger.push(digits[i]);
    }
  }
  let first = bigger[0];
  let rest = bigger.slice(1);
  // if (first === digits[0]) {
  //   let answer = [first, ...rest].join("");
  //   answer = +answer;
  //   return answer;
  // }
  let min;
  for (let x = rest.length - 1; x >= 0; x--) {
    if (rest[x] < rest[x - 1]) {
      min = rest[x];
      temp = rest[x - 1];
      rest[x - 1] = min;
      rest[x] = temp;
    }
  }
  let answer = [first, ...rest].join("");
  answer = +answer;
  if (answer !== n) {
    return answer;
  } else {
    return -1;
  }
}

// console.log(nextBigger(12)); //21
// console.log(nextBigger(513)); //531
// console.log(nextBigger(783)); //837
// console.log(nextBigger(2521)); //5122
// console.log(nextBigger(414)); //441
// console.log(nextBigger(144)); //414
// console.log(nextBigger(111)); // -1
console.log(nextBigger(9227652)); //9252267
