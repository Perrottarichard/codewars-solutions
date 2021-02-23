var maxRedigit = function (num) {
  let answer = 0;
  if (num > 0) {
    answer = Number(
      num
        .toString()
        .split("")
        .sort((a, b) => a - b)
        .reverse()
        .join("")
    );
  }
  if (answer >= num && answer !== 0 && num.toString().length === 3) {
    return answer;
  } else {
    return null;
  }
};
console.log(maxRedigit(123)); //321
console.log(maxRedigit(-1)); //null
console.log(maxRedigit(99)); //null
