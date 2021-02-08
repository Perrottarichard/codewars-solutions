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
  if (first === digits[0]) {
    let indexToStartChanging;
    let nextGreaterNum = 9;
    let answer = [first, ...rest].join("");
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] !== answer[i]) {
        indexToStartChanging = i;
        break;
      }
    }
    console.log("rest1", rest);
    let nextGreaterThan = digits[indexToStartChanging];
    let numsGreaterThan = rest.filter((n) => n > nextGreaterThan);
    numsGreaterThan = numsGreaterThan.map((n) => Number(n));
    nextGreaterNum = Math.min(...numsGreaterThan);
    let index = rest.map((n) => Number(n)).indexOf(nextGreaterNum);
    let before = rest.slice(0, indexToStartChanging - 1);
    let changed = rest.splice(index, 1);
    console.log("rest2", rest);
    console.log("before", before);
    console.log("ch", changed);

    // answer = +answer;
    // return answer;
  }
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
console.log(nextBigger(102530975551)); //102531055579
