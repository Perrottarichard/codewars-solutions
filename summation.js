var summation = function (num) {
  let sum = num;
  while (num > 1) {
    sum += num - 1;
    num--;
  }
  return sum;
};
